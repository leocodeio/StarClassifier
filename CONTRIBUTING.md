# Contributing to StarClassifier

Thank you for your interest in contributing to StarClassifier! We welcome contributions from the community and are grateful for any help you can provide.

## Getting Started

1. Fork the repository on GitHub
2. Clone your forked repository to your local machine
3. Create a new branch for your feature or bug fix
4. Make your changes and commit them with a clear commit message
5. Push your changes to your fork on GitHub
6. Open a pull request to the main repository

## Code Style and Guidelines

- [Specify any coding standards or style guides your project follows]
- [Mention any linting tools or formatters used in the project]
- [Provide instructions on how to run these tools]

## Submitting Issues

- Before submitting a new issue, please search existing issues to avoid duplicates
- Use the provided issue templates when applicable
- Provide as much detail as possible, including steps to reproduce for bug reports

## Pull Request Process

1. Ensure your code adheres to the project's coding standards
2. Update the README.md with details of changes to the interface, if applicable
3. Add tests for your changes if possible
4. Ensure the test suite passes
5. Update the documentation if necessary
6. Your pull request will be reviewed by maintainers, who may request changes or provide feedback

## Code of Conduct

Please note that this project is released with a [Contributor Code of Conduct](CODE_OF_CONDUCT.md). By participating in this project you agree to abide by its terms.

## Questions?

If you have any questions or need further clarification, please open an issue or contact the maintainers at https://x.com/leocodeio

## Conclusion

Thank you for contributing to StarClassifier App! We look forward to seeing your contributions.


### DOCKER IMPLEMENTATION

#### Individual Services

go to /frontend

```
docker build -t fe-image .
docker run -p 3000:3000 fe-image
```

you can access the frontend at http://localhost:3000

go to /backend

```
docker build -t be-image .
docker run -p 3001:3001 be-image
```

you can access the backend at http://localhost:3001

go to /ml-backend

```
docker build -t ml-be-image .
docker run -p 8000:8000 ml-be-image
```

you can access the ml-backend at http://localhost:8000

#### All Services

in the root directory

```
docker compose up
```
