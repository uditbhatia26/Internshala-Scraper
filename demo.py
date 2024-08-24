import streamlit as st
import pandas as pd
import json


st.title("Internshala Internship Scraper Demo")

st.write("This demo shows the latest internship postings scraped from Internshala.")

def load_data():
    with open("data.json", "r") as file:
        data = json.load(file)
    df = pd.json_normalize(data)
    return df

data = load_data()


st.sidebar.header("Search Internships")
search_query = st.sidebar.text_input("Enter keywords to search internships")

if search_query:
    filtered_data = data[data.apply(lambda row: row.astype(str).str.contains(search_query, case=False).any(), axis=1)]
else:
    filtered_data = data

st.write("Here are the latest internships:")
st.dataframe(filtered_data)
