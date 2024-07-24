
# Internshala Job Alerts Automation

## Project Overview

This project automates the process of scraping internship and job data from Internshala. The solution utilizes JavaScript for web scraping and Python for data processing.

## Features

- **Web Scraping with JavaScript:** Utilizes `axios` and `cheerio` to extract real-time job and internship data from Internshala.
- **Data Storage:** Efficiently stores the scraped data in a text file for further processing.
- **Data Processing with Python:** Reads the stored data using Python, preparing it for future use.

## Tech Stack

- **JavaScript:** Used for web scraping with `axios` and `cheerio`.
- **Python:** Used for reading the data file and processing it.

## Setup and Installation

### Prerequisites

- Node.js
- Python 3.x

### Installation Steps

1. **Clone the Repository**
    ```bash
    git clone https://github.com/your-username/internshala-job-alerts.git
    ```

2. **Set Up JavaScript Environment**
    - Install the required npm packages.
    ```bash
    npm install axios cheerio
    ```

3. **Run the Scraper**
    - Run the JavaScript scraper to extract data from Internshala.
    ```bash
    node internshala.js
    ```

## Usage

1. **Run the Scraper:**
   - Navigate to the `scraper` directory and run the script.
   ```bash
   node scraper.js
   ```
   - This will scrape the latest job data from Internshala and save it to `data.json`.

## Contributing

Contributions are welcome! Please fork this repository and submit a pull request for any enhancements, bug fixes, or additional features.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---
