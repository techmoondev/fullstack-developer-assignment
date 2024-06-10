# TMD: FullStack Intern Assignment

## Overview

This assignment involves setting up a web application where users can input a prompt to generate social media posts text using OpenAI's API. These posts should then be saved to a Google Spreadsheet using Google Sheets API (without using Google SDKs). For a bonus, the application should be able to fetch and display the posts from the spreadsheet.

## Your Tasks

1. **Generate Social Media Posts**:

   - Use OpenAI's API to generate social media posts texts based on the user's prompt.
   - Ensure that you use your own OpenAI API key.

2. **Create and Use a Google Spreadsheet**:

   - Create a new Google Spreadsheet in your Google account.
   - Get the Required keys from your own Google Cloud Console.

3. **Save Posts to Google Spreadsheet**:

   - Save the generated social media posts to the newly created Google Spreadsheet using the Google Sheets API.
   - The spreadsheet should contain the following columns:
     - `Timestamp`: The date and time when the post was created.
     - `Prompt`: The original user input.
     - `Post`: The generated social media post.

4. **Bonus: Retrieve and Display Posts**:
   - Fetch the social media posts from the Google Spreadsheet.
   - Display the fetched posts text on the UI below the input field.

## Estimated Time

Please spend no more than 1 day on this assignment and submit whatever you can complete within that time frame.

## Bonus Tasks

1. Retrieve and display the generated posts from the Google Spreadsheet on the UI.
2. Add error handling and user feedback for API requests.

## Submission

1. Ensure all your changes are committed.
2. Push your changes to a new repository on your personal GitHub account with public access.
3. Provide a link to your repository, along with your email and phone number, in the provided Google Form.
4. Include the URL of your Google Spreadsheet in your README.

#### Note: Use your API keys for development purposes only. Include the variables in the `.env.example` file for reference.
