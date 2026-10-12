E-Kart-QA — E-Commerce QA Automation

A hands-on QA automation project demonstrating UI testing, API testing, MySQL database validation, and CI/CD integration using Jenkins.

Tech Stack

Language: JavaScript

UI Automation: Playwright

API Testing: Playwright API testing

Database Testing: MySQL

CI/CD: Jenkins

Version Control: Git and GitHub

Test Reporting: Playwright HTML Report

Project Features

Automated UI tests for homepage loading and product search.

API tests covering GET, POST, PUT, DELETE, response status, headers, and error responses.

MySQL database validation for product records, prices, and stock.

Jenkins pipeline to execute automated tests.

Playwright HTML report publishing and test artifact archiving.

Test Coverage

Test Suite

Tests

UI Automation

3

API Testing

5

MySQL Database Testing

1

Total

9

Latest verified result: 9 tests passed, 0 failed.

Project Structure

E-Kart-QA/
├── tests/
│   ├── homepage.spec.js
│   ├── api.spec.js
│   └── database.spec.js
├── index.html
├── style.css
├── script.js
├── playwright.config.js
├── Jenkinsfile
├── package.json
├── package-lock.json
└── README.md

Prerequisites

Node.js and npm

Git

Java and Jenkins

MySQL Server

VS Code (recommended)

Run Tests Locally

Clone the repository:

git clone https://github.com/Sks1991/E-Kart-QA.git
cd E-Kart-QA

Install dependencies:

npm ci

Install the Playwright Chromium browser:

npx playwright install chromium

Configure the MySQL database and required credentials according to the project setup.

Run the test suite:

npm test

Jenkins CI/CD

The Jenkinsfile defines a pipeline that checks out the source code, installs dependencies, runs automated tests, and archives test artifacts. The pipeline also publishes the Playwright HTML report when the required Jenkins plugins and configuration are available.

Future Enhancements

Add Cypress automation.

Expand API and database test coverage.

Integrate performance testing.

Extend CI/CD reporting and quality checks.

Author

QA Automation Practice Project — E-Kart-QA

Repository: https://github.com/Sks1991/E-Kart-QA