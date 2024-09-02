# Açai E-Commerce Dashboard 

## Table of Contents

- [Project Description](#project-description) 
- [Technical Competencies](#technical-competencies)
- [Technologies](#technologies)
- [Setup and Running Instructions](#setup-and-running-instructions)
- [Future Enhancements](#future-enhancements)
- [Challenges Faced](#challenges-faced)

## Project Description

**Açai E-Commerce** is a project developed to create a responsive and interactive product performance dashboard for an e-commerce platform that sells Açai Travel merchandise. This dashboard is intended for use by the marketing team to monitor and analyze the performance of individual products. The project is built using React and TypeScript and focuses on delivering a user-friendly interface with data visualization capabilities.

### Objectives:
- **Product Selector:** Implement a dropdown to select different products and display data specific to the selected product.
- **Key Metrics:** Provide visualizations for key metrics such as inventory levels, sales over time, conversion rates, and customer review trends.
- **Data Interaction:** Allow users to toggle between different time frames.

## Technical Competencies

The project focuses on:
- Frontend Development: Using React and TypeScript to build a responsive and interactive user interface.
- Data Visualization: Implementing charts and graphs to display key product metrics.
- User Interaction: Enabling dynamic data interaction through time frame toggles and report generation.
- Mock Data Usage: Working with mocked data for development, without the need for actual API integration.
- Implementation of scalable and maintainable infrastructure.
- User-friendly design for an effective consulting experience.

## Technologies

- [React](https://react.dev/): For developing the interactive and responsive user interface.
- [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML): For structuring the web pages.
- [SASS](https://sass-lang.com/): For styling the web pages.
- [Typescript](https://www.typescriptlang.org/): For type-safe JavaScript development.
- [Charts.js](https://www.chartjs.org/): For creating line charts.

## Setup and Running Instructions

**1. Clone the repostitory:**
  git clone https://github.com/sandiaxcx/acai-e-commerce.git

**2. Install dependencies:**
  npm install

**3. Run the application:**
  npm run dev

**4. Access the application: Open your web browser and go to http://localhost:3000.**

## Future Enhancements

In the future, I would like to implement the following features:

- **Deployment:** Manage a succesful deployment of the app. Get more familiar with deployment tools and strategies..
- **Generate Reports:** Implement functionality to generate CSV and PDF reports from the displayed data.
- **Create Interface Files:** Move interfaces to separate files rather than placing them within each component.
- **Create a Landing Page with Authentication:** Develop a landing page with authentication component where users with the required authorization can access the product performance dashboard. This will include full authentication and authorization functionality with login and registration.
- **Use Material-UI:** Integrate Material-UI for faster and more consistent style development.
- **Create an Aside Bar:** Add a sidebar for navigation to improve the user experience.
- **Create Admin Page:** Develop a section where admins can add new products, edit existing ones, or remove products.
- **Add Testing:** Implement tests to ensure the reliability and functionality of the application.

## Challenges Faced

- Large-Scale Project: This was my first time working on a project of this scale independently. While I had done CRM projects before, they had been in groups, so this was a significant learning experience, especially organizing myself and managing time.
- Charts and Data Visualization: I had never used charts or data visualization tools before. Learning how to effectively integrate and display data using Chart.js was a new challenge.
- Time Constraints: Due to limited time, I was unable to implement the PDF generator feature as planned. This was a key feature that I would have liked to include for a more comprehensive reporting solution.
- Deployment: I tried deploying the application to Netlify but I was unable to successfully complete the process. This experience made me realize that I need to dive deeper into deployment strategies and tools.
