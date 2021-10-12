# Notion autoincrement
Simple script used to create pages with subsequent dates in [Notion](https://notion.so).
Starts from the most recent date it finds (otherwise from current day).
Makes use of the [Notion APIs (beta)](https://developers.notion.com/docs/getting-started)

Useful for creating entries automatically in tracker databases.

I've created this script for personal use, but you can employ it as a skeleton for your own needs or improve it to prepopulate your database pages with default data of your choice.

## Requirements
- Node js installed in your system
- A Notion database with a Date property

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

### Run the script
```bash
    node main.js -20 # will create 20 pages from the last date
```

For more info, visit my [blog](https://ovalb.github.io/blog/autoincrement-with-notion-api).