# Playwright E2E Tests – BlazeDemo (Advanced Version)

This repository contains an advanced implementation of E2E test automation for the [BlazeDemo](https://blazedemo.com/) web application.

It implements the same flight booking test scenario as the basic version, but using a more structured and scalable approach based on BDD and test architecture best practices.

---

## 📚 Context

This project was developed during the Formação em Teste de Software e QA at [Iterasys](https://iterasys.com.br/)  (class 147), as part of a guided learning process.

It represents a different implementation approach for the same E2E test scenario, applying concepts such as BDD (Gherkin/Cucumber) and Page Object Model.

The implementation was done alongside instructor guidance, focusing on understanding test architecture and best practices.

---

## 🛠️ Tech Stack

* JavaScript
* Playwright
* Cucumber
* Gherkin
* Page Object Model (POM)

---

## 🧠 Testing Approach

This project follows a more structured and scalable approach:

- BDD (Behavior-Driven Development) using Gherkin syntax
- Step definitions with Cucumber
- Separation of page interactions through Page Objects
- Better organization for reuse and maintainability
- Clear mapping between business scenarios and test implementation

---

## 📌 Current Test Coverage

At the current stage, the project covers the BlazeDemo flight booking flow:

1. Select origin and destination
2. Search available flights
3. Choose a flight
4. Fill the purchase form
5. Complete the booking
6. Validate confirmation message and purchase amount

The project currently includes:

- a positive scenario
- a Scenario Outline with example data (DDT approach)
- initial Page Object structure for the application pages

---

## 🗂️ Project Structure

```
features/
  comprar_passagem.feature

pages/
  home.page.js
  reserve.page.js
  purchase.page.js
  confirmation.page.js

steps/
  comprar_passagem.steps.js

reports/
  cucumber-report.json

docs/
  comentarios.txt
```
**Structure overview**

- **features/** → business scenarios written in Gherkin
- **pages/** → page classes following the Page Object Model
- **steps/** → step definitions connecting Gherkin steps to - automation code
- **reports/** → generated test reports
- **docs/** → class notes and supporting comments

---

## 🔗 Relation to the Basic Project

This project implements the same BlazeDemo test scenario as:

[BlazeDemo147 (Basic version)](https://github.com/fernandamscabral/BlazeDemo147)

However, instead of continuing the same codebase, this repository was created to explore a different and more structured approach to test automation.

Key differences:

- use of BDD with Gherkin and Cucumber
- Page Object Model (POM)
- separation of concerns between features, steps, and pages
- improved scalability for larger test suites

---

## 🚧 Project Status

This repository is currently under active development as part of ongoing QA training.

At this stage, the project includes the feature file structure, step definitions setup, and the initial Page Object implementation. New improvements and refinements will continue to be added in upcoming lessons.

---

## ▶️ How to Run the Tests

`npm install`

\# test execution command to be defined

---

## 📚 Notes

BlazeDemo is a demo application used for test practice and learning purposes.