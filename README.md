# Express.js with Selenium Automation Testing (Huawei Test)

Welcome to the Express.js with Selenium Automation Testing project! This repository contains an example Express.js application integrated with Selenium automation testing using Side Runner.

## Overview

This project demonstrates the integration of Express.js for building web applications, managing environment variables using `.env` files, and implementing automation testing with Selenium using Side Runner.

### Technologies Used

- **Express.js**: A fast, minimalist web framework for Node.js.
- **.env**: Used for storing sensitive data and configuration information separate from the code.
- **Selenium**: A powerful tool for web browser automation.
- **Side Runner**: A test runner for Selenium IDE.

## Getting Started

Follow the instructions below to set up the project on your local machine for development, testing, and automation purposes.

### Prerequisites

Ensure the following software is installed on your local machine:

- Node.js and npm
- Git
- Selenium Side Runner
- EdgeDriver

### Installation

1. Clone the repository:

   ```
   git clone https://github.com/Miltino/Huaweitest.git
   ```

2. Navigate to the project directory:

   ```
   cd Huaweitest
   ```

3. Install dependencies:

   ```
   npm install
   ```

4. Create a `.env` file in the root directory and add necessary environment variables. An example configuration is provided below:

   ```plaintext
   # Database Configuration
   DB_HOST=localhost // name of your host
   DB_USER=root // name of username for DB
   DB_PASSWORD=
   DB_DATABASE=db_test // name of your db name
   ```

5. Install Selenium Side Runner globally:

   ```
   npm install -g selenium-side-runner
   ```

6. Install EdgeDriver globally:

   ```
   npm install -g edgedriver
   ```

### Running the Development Server

After configuring the `.env` file, run the development server using the following command:

```
npm run dev
```

This command starts the Express.js server in development mode using Nodemon, which automatically restarts the server when changes are detected in your files.

### Running Selenium Tests

To run the automated Selenium tests:

1. Ensure your Selenium test suite file (`.side` file) is accessible. For example, let's assume it's same located at `HuaweiTest.side`.

2. Execute the following command in your terminal:

   ```
   selenium-side-runner HuaweiTest.side
   ```


## File Structure

```
.
├── node_modules        # Node.js modules
├── configs             # configs assets
├── controllers         # Express routes
├── routes              # Automation tests using Selenium
├── views               # Express views
├── .env                # Environment variables
├── index.js            # Express application entry point
├── package.json        # Project dependencies and scripts
└── README.md           # Project documentation
```

## Contributing

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct and the process for submitting pull requests.

## Authors

- Noer (https://github.com/miltino) - *Miltino*

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Hat tip to anyone whose code was used
- Inspiration
- etc.
