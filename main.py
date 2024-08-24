import requests
from bs4 import BeautifulSoup
import json
import logging
from datetime import datetime

class Internshala:
    def __init__(self, search_type):
        self.base_url = 'https://internshala.com/'
        self.search_type = search_type.replace(' ', '%20')
        self.headers = {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
        }
        logging.basicConfig(filename='scraper.log', level=logging.INFO, format='%(asctime)s - %(levelname)s - %(message)s')
    
    def __scrape_page(self, url):
        try:
            response = requests.get(url, headers=self.headers)
            response.raise_for_status()  # Check if the request was successful
            logging.info(f"Headers: {response.headers}")
            return response.text
        except requests.RequestException as e:
            logging.error(f"Error occurred at {datetime.now().isoformat()}: {str(e)}")
            raise RuntimeError(f"An error occurred while fetching the page: {str(e)}")
    
    def __parse_page(self, html):
        try:
            return BeautifulSoup(html, 'html.parser')
        except Exception as e:
            raise RuntimeError(f"An error occurred while parsing the page: {str(e)}")

    def internships(self):
        try:
            url = f"{self.base_url}internships/keywords-{self.search_type}"
            html = self.__scrape_page(url)
            soup = self.__parse_page(html)
            internships = []
            
            internships_container = soup.find_all(class_='individual_internship')

            if not internships_container:
                return {'message': 'No internships found'}
            else:
                for element in internships_container:
                    Role = element.find(class_='job-internship-name')
                    Role = Role.get_text(strip=True) if Role else 'N/A'
                    
                    Company = element.find(class_='company-name')
                    Company = Company.get_text(strip=True) if Company else 'N/A'
                    
                    Posted = element.find(class_='status-success')
                    Posted = Posted.get_text(strip=True) if Posted else 'N/A'
                    
                    Link = element.get('data-href')
                    Link = "https://internshala.com" + Link if Link else 'N/A'
                    
                    Location = element.find(class_='locations')
                    Location = Location.get_text(strip=True) if Location else 'N/A'
                    
                    stipend_element = element.find(class_='stipend')
                    Stipend = stipend_element.get_text(strip=True) if stipend_element else 'N/A'
                    
                    # Keep the stipend value with Unicode character
                    main_data = {
                        'Company': Company,
                        'Role': Role,
                        'Link': Link,
                        'Location': Location,
                        'Stipend': Stipend,
                        'Posted': Posted,
                    }

                    if Posted in ['Few hours ago', 'Today', 'Just now', '1 day ago']:
                        internships.append(main_data)

                # Write to JSON file with UTF-8 encoding
                with open('data.json', 'w', encoding='utf-8') as f:
                    json.dump(internships, f, ensure_ascii=False, indent=4)
                
                # Manually format and print internships data
                formatted_data = json.dumps(internships, ensure_ascii=False, indent=4)
                formatted_data = formatted_data.replace('\n', '\n\n')  # Add extra newlines for readability
                logging.info("Internships Data:")
                logging.info(formatted_data)
                
                return formatted_data
        except Exception as e:
            raise RuntimeError(f"An error occurred while scraping internships: {str(e)}")

# Example usage
search = Internshala('web development')
try:
    result = search.internships()
    print(result)
except RuntimeError as e:
    print(e)
