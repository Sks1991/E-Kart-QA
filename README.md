E-Kart-QA — QA Automation Framework

A hands-on Quality Assurance automation project demonstrating UI automation, API testing, database validation, and CI/CD integration using modern testing tools.

Project Overview

E-Kart-QA is a sample e-commerce application used to practice and demonstrate software testing skills. The project integrates automated test execution with Jenkins and publishes HTML test reports for reviewing results.

Tech Stack

UI Automation: Playwright, Cypress

API Testing: Playwright API testing

Database Testing: MySQL

Programming Language: JavaScript

Runtime: Node.js

CI/CD: Jenkins

Version Control: Git and GitHub

Reporting: Playwright HTML Report, Cypress Mochawesome HTML Report

Key Features

Automated homepage validation

Product search testing for valid and invalid queries

API endpoint validation using automated tests

Database validation using MySQL

Cypress end-to-end browser testing

Jenkins pipeline for automated test execution

HTML reports for reviewing test results

GitHub integration for source control and version tracking

Project Structure

E-Kart-QA/
├── tests/
│   ├── homepage.spec.js
│   ├── api.spec.js
│   └── database.spec.js
├── cypress/
│   ├── e2e/
│   │   └── homepage.cy.js
│   ├── fixtures/
│   ├── support/
│   └── reports/
├── index.html
├── style.css
├── script.js
├── playwright.config.js
├── cypress.config.js
├── Jenkinsfile
├── package.json
├── package-lock.json
└── README.md

Prerequisites

Node.js and npm

Git

Java JDK for Jenkins

Jenkins with the required plugins and credentials

MySQL configured for database tests

Installation

Clone the repository:

git clone https://github.com/Sks1991/E-Kart-QA.git
cd E-Kart-QA

Install dependencies:

npm install

Install the Playwright Chromium browser:

npx playwright install chromium

Running Tests

Playwright tests

npm test

Cypress interactive mode

npm run cy:open

Cypress headless mode

npm run cy:run

Test Coverage

Testing Area

Coverage

UI Automation

Homepage and product search

API Testing

Automated API validations

Database Testing

MySQL data validation

Cypress

Homepage and product search

CI/CD

Jenkins pipeline execution

Reporting

Playwright and Cypress HTML reports

Jenkins CI/CD Pipeline

The Jenkins pipeline automates the following steps:

Checkout source code from GitHub.

Install project dependencies.

Install the Playwright Chromium browser.

Run Playwright UI, API, and database tests.

Run Cypress end-to-end tests.

Archive test artifacts.

Publish Playwright and Cypress HTML reports.

The pipeline uses a Jenkins credential for the database password instead of hardcoding the password in the repository.

Test Reports

After running the tests locally, the reports are generated in these locations:

Playwright: playwright-report/index.html

Cypress: cypress/reports/index.html

Jenkins publishes the reports for review after a build.

Project Goals

Build practical UI automation skills.

Practice API and database testing.

Understand test automation framework configuration.

Integrate automated tests into a CI/CD pipeline.

Generate and publish test reports.

Maintain a version-controlled QA portfolio project.

Author

QA Automation Practice Project

GitHub Repository: https://github.com/Sks1991/E-Kart-QA