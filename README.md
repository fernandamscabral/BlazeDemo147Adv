# Playwright E2E Tests – BlazeDemo (Advanced Version)

This repository contains an advanced implementation of E2E test automation for the [BlazeDemo](https://blazedemo.com/) web application.

It implements the same flight booking scenario as the basic version, but using a more structured and scalable approach based on BDD and test automation architecture best practices.

---

## 📚 Context

This project was developed during the *Formação em Teste de Software e QA* at [Iterasys](https://iterasys.com.br/) (class 147), as part of a guided learning process.

It represents a different implementation approach for the same E2E test scenario, applying concepts such as:

- BDD
- Gherkin
- Cucumber
- Page Object Model (POM)
- reusable test structure design

The project was built alongside instructor guidance, focusing on automation architecture, maintainability, and test organization practices.

---

## 🛠️ Tech Stack

- JavaScript
- Playwright
- Cucumber
- Gherkin
- Page Object Model (POM)

---

## 🧠 Testing Approach

This project follows a more structured and scalable automation approach:

- BDD (Behavior-Driven Development) using Gherkin syntax
- Step definitions with Cucumber
- Separation of page interactions through Page Objects
- Shared base structure and reusable hooks
- Better organization for reuse and maintainability
- Clear mapping between business scenarios and test implementation
- Screenshot attachment support during execution
- HTML report generation for test runs

---

## 📌 Test Coverage

The project covers the BlazeDemo flight booking flow:

1. Select origin and destination
2. Search available flights
3. Choose a flight
4. Fill the purchase form
5. Complete the booking
6. Validate confirmation message and purchase amount

The implementation includes:

- positive scenario execution
- Scenario Outline with example data (DDT approach)
- reusable Page Object structure
- shared browser lifecycle management
- screenshot capture during execution
- HTML report generation
- support for headed and headless execution modes

---

## 🗂️ Project Structure

```text
features/
  comprar_passagem.feature

pages/
  home.page.js
  reserve.page.js
  purchase.page.js
  confirmation.page.js

steps/
  comprar_passagem.steps.js

support/
  base.js
  hooks.js

reports/
  generated HTML reports

docs/
  comentarios.txt

cucumber.js
```

### Structure overview

- **features/** → business scenarios written in Gherkin
- **pages/** → page classes following the Page Object Model
- **steps/** → step definitions connecting Gherkin steps to automation code
- **support/** → shared test structure and hooks configuration
- **reports/** → generated HTML execution reports
- **docs/** → class notes and supporting comments
- **cucumber.js** → CucumberJS runner configuration

---

## 🔗 Relation to the Basic Project

This project implements the same BlazeDemo test scenario as:

[BlazeDemo147 (Basic version)](https://github.com/fernandamscabral/BlazeDemo147)

However, instead of continuing the same codebase, this repository was created to explore a different and more structured approach to test automation.

### Key differences

- use of BDD with Gherkin and Cucumber
- Page Object Model (POM)
- separation of concerns between features, steps, and pages
- reusable shared structure
- improved scalability for larger test suites

---

## ▶️ How to Run the Tests

Install dependencies:

```bash
npm install
```

Run tests in headless mode:

```bash
npm run test:bdd
```

Run tests in headed mode:

```bash
npm run test:bdd:headed
```

Run tests in parallel:

```bash
npm run test:bdd:paralelo
```

---

## 📚 Notes

BlazeDemo is a demo web application used for test practice and learning purposes.

In some Page Object classes (e.g., HomePage and ReservePage), assertions were intentionally implemented inside the page methods for demonstration purposes during training.

This approach was used to illustrate the difference between:

- embedding assertions within Page Objects
- keeping assertions inside step definitions or tests

In a production-ready test architecture, assertions should generally remain at the test or step level, keeping Page Objects focused only on actions and element interactions.