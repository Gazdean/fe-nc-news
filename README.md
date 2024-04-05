<h1 style="text-align: center; font-size:2rem" >🗞️  NC-NEWS  🗞️</h1>

This is a front end app which uses my backend project <br>

https://github.com/Gazdean/be-nc1-news1

as an api to make calls to receive articles, topics, comments, votes and users details <br>

Feel free to take it for a test drive https://gd-nc-news.netlify.app

This app is built with react using vite for the initial build, and uses vanilla css for styling

## Home Screen
The app displays all the articles available on the home screen
### Features
- Article list, showing image, title and a summary of the article
- Topic menu for the user to filter the articles by topic
- Filter menu which allows the user to further filter the results by the date created, comment count on the articles and also the votes
- The order can also be changed between ascending and descending order

## Indivdual Article Screen
The user is able to click on an indivdual article which shows the full article 
### Features
- Article content
- Voting function
- Comments read only

## Nav Bar
### Features
- Home page link
- Sign in option
- Avatar of a signed in user

## Sign in
### Features
- A netflix style user login menu, select your icon and click to sign in or out
- Once signed in the user can now leave a comment on an article
- Once signed in the user can now delete a comment they have written
---
Api calls were created using Axios

### Dependencies
- axios: 1.6.7,
- react: 18.2.0,
- react-dom: 18.2.0,
- react-router-dom: 6.22.0,
- react-share: 5.0.3
  
### DevDependencies: 
- @types/react: 18.2.43,
- @types/react-dom: 18.2.17,
- @vitejs/plugin-react: 4.2.1,
- eslint: 8.55.0,
- eslint-plugin-react: 7.33.2,
- eslint-plugin-react-hooks: 4.6.0,
- eslint-plugin-react-refresh: 0.4.5,
- vite: 5.0.8