# Friendster

# https://obscure-sierra-21606.herokuapp.com/

## Friendster - Node and Express Servers
- The application will take in results from users' surveys then compare their results against all other users who have completed it. The application will then display the name and picture of the user with the best match overall.

- The survey has 10 questions, answers to the survey questions are on a scale of 1-5 based on how much the user agrees or disagrees.

## Technical details

- The application uses Express to handle routing

- The server.js file uses the npm packages: express, body-parser, path.

- The html-routes.js file should include two routes:
- A GET Route to /survey which displays the survey page.
- A USE route that leads to home.html which displays the home page.
- The person with the closest match will be the one with the "least" amount of difference.

- Once the closest match has been determined, it will display the result back to the user in the form of a modal pop-up.

- The result will display both the name and picture of the closest match.
