# Notion autoincrement
Simple script used to create pages with subsequent dates in [Notion](https://notion.so).
Starts from the most recent date it finds (otherwise from current day).

Useful for creating entries automatically in tracker databases.

## Usage
### Clone this repo
```bash
    git clone git@github.com:ovalb/notion-autoincrement.git
```
### Create .env file in project folder
```bash
    NOTION_TOKEN=secret_your_notion_integration_token_goes_here
    DATABASE_ID=insert_your_database_id_here
```

> **⚠WARNING:** The Notion database requires a Date property.

### Run the script
```bash
    node main.js -20 # will create 20 pages from the last date
```