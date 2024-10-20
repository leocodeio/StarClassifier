from fastapi import FastAPI, UploadFile, File
from fastapi.responses import HTMLResponse
from PIL import Image
import os
import numpy as np
import joblib
import json
import cv2
import pywt

app = FastAPI()

from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

# Define the origins you want to allow (e.g., your frontend running at localhost:3000)
origins = [
    "http://localhost:3000",  # Allow your frontend to access the backend
    "http://127.0.0.1:3000"   # Optional, depending on how you access it
]

# Add CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,  # Allow specific origins
    allow_credentials=True,  # Enable cookies if needed
    allow_methods=["*"],  # Allow all HTTP methods
    allow_headers=["*"],  # Allow all headers
)


# Global variable to store the model and class mappings
__class_name_to_number = {}
__class_number_to_name = {}
__model = None

classification_result = {
    'score_lionel_messi': 0,
    'score_maria_sharapova': 0,
    'score_roger_federer': 0,
    'score_serena_williams': 0,
    'score_virat_kohli': 0,
}

def load_saved_artifacts():
    # print("loading saved artifacts...start")
    global __class_name_to_number
    global __class_number_to_name
    global __model

    with open(os.path.join('artifacts/class_dictionary.json'), "r") as f:
        __class_name_to_number = json.load(f)
        __class_number_to_name = {v: k for k, v in __class_name_to_number.items()}
        # print(__class_number_to_name, __class_name_to_number)

    if __model is None:
        with open(os.path.join('artifacts/saved_model.pkl'), 'rb') as f:
            __model = joblib.load(f)
    # print("loading saved artifacts...done")

def class_number_to_name(class_num):
    # print(__class_number_to_name[class_num])
    return __class_number_to_name[class_num]

def w2d(img, mode='haar', level=1):
    imArray = img
    if len(imArray.shape) > 2:  # Convert to grayscale
        imArray = cv2.cvtColor(imArray, cv2.COLOR_RGB2GRAY)
    imArray = np.float32(imArray)
    imArray /= 255
    coeffs = pywt.wavedec2(imArray, mode, level=level)
    coeffs_H = list(coeffs)
    coeffs_H[0] *= 0
    imArray_H = pywt.waverec2(coeffs_H, mode)
    imArray_H *= 255
    return np.uint8(imArray_H)

def classify_image(file_path):
    img = get_cropped_image_if_2_eyes(file_path)
    if img is None:
        return None
    
    scalled_raw_img = cv2.resize(img, (32, 32))
    img_har = w2d(img, 'db1', 5)
    scalled_img_har = cv2.resize(img_har, (32, 32))

    scalled_raw_img_flat = scalled_raw_img.flatten()
    scalled_img_har_flat = scalled_img_har.flatten()

    combined_img = np.concatenate((scalled_raw_img_flat, scalled_img_har_flat))
    final = combined_img.reshape(1, -1).astype(float)

    prediction = __model.predict(final)
    # print(prediction)
    class_probability = np.around(__model.predict_proba(final) * 100, 2).tolist()[0]
    class_name = class_number_to_name(prediction[0])

    return class_probability

def get_cropped_image_if_2_eyes(image_path):
    face_cascade = cv2.CascadeClassifier(cv2.data.haarcascades + 'haarcascade_frontalface_default.xml')
    eye_cascade = cv2.CascadeClassifier(cv2.data.haarcascades + 'haarcascade_eye.xml')
    img = cv2.imread(image_path)
    gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)
    faces = face_cascade.detectMultiScale(gray, 1.3, 5)
    
    for (x, y, w, h) in faces:
        roi_color = img[y:y+h, x:x+w]
        return roi_color
    return None

@app.on_event("startup")
def startup_event():
    # Load model and artifacts when the app starts
    load_saved_artifacts()

@app.post("/classify/")
async def classify_image_endpoint(image_data: UploadFile = File(...)):
    image_path = "sample.jpg"
    with open(image_path, "wb+") as file:
        file.write(await image_data.read())

    output = classify_image(image_path)
    if output is None:
        return {"error": "No face detected or no eyes found"}

    global classification_result
    k = 0
    # print(output)
    # print(classification_result)
    for i in classification_result:
        classification_result[i] = output[k]
        k += 1
    # find the max value in the classification_result
    max_value = max(classification_result.values())
    max_key = max(classification_result, key=classification_result.get)
    return {"class": max_key[5:], "score": max_value}

@app.get("/", response_class=HTMLResponse)
async def home():
    return """
    <html>
        <body>
            <h1>Upload an Image for Classification</h1>
            <form action="/classify/" enctype="multipart/form-data" method="post">
                <input name="image_data" type="file">
                <input type="submit">
            </form>
        </body>
    </html>
    """
