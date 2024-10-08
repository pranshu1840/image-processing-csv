# Image Processing CSV

Welcome to the Image Processing CSV project. This project allows you to upload CSV files containing image URLs, process those images, and download the CSV that contains the links of compressed image.

## Installation

To get started with this project, follow these steps:

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/pranshu1840/image-processing-csv.git
   cd image-processing-csv
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

## Usage

1. **Start the Application**:
   ```bash
   npm start
   ```

2. **API Documentation**:
   You can test the API using the Postman collection available at the following public link:
   [Postman Collection](https://www.postman.com/altimetry-astronaut-66120148/workspace/public-workspace/collection/24514176-074fc1a2-5733-4b89-9a49-e6cd88140c47?action=share&creator=24514176)

## Features

- Upload CSV files containing image URLs.
- Process images and monitor the progress of their requests.
- Track and download the processed images in CSV format.

## Environment Variables
Before running the application, you need to set up the following environment variables:

  MONGO_URL: The connection string for your MongoDB database.
  
  URL: The base URL for your application.
  
  PORT: The port on which the application will run (default is 3000).

## Troubleshooting

If you encounter any issues, please check the following:

- Ensure that all dependencies are correctly installed.
- Verify that the environment variables are correctly configured.

