# Angular Challenge Project - SoftX

## The challenge

Challenge was considering 5 main conditions: 
1. Responsiveness
2. Authorization form
3. Retrieve users through json placeholder and display them in a table
4. Show details of users (visualizing images bellow)
5. style with Bootstrap

## Building project

Main tools that were used are as follows: 
- Router
- Reactive forms
- HTTPClient
- Pipes
- Fake API (JSONPlaceholder)
- Dependency injection

The authorization page should consist of two mandatory fields (Username and Password).
The Sign in button should be disabled until the form is valid.
If the input is unfocused (moving to another field), it is not filled should show an error.
In case of clicking on the Sign in button, both fields must be checked. If not "admin" or if it is not there, it should display an alert: username or password is incorrect, If entered, it should be redirected to the Home page.

A table of users should be drawn on the home page. Getting the list of users.
Must be done via the JSON placeholder method. 
Adress of the method: https://jsonplaceholder.typicode.com/users;
It should appear when you click the left mouse button on the row of the table "context menu" next to the cursor, from which it must be possible to delete the user or go to the details page;
Users should be deleted only in front (row should be removed from DOM)
It will be considered a plus to write "context menu" without plugin.

On the details page, the user id specified in the url should be retrieved according to. Method address: https://jsonplaceholder.typicode.com/users/id.
A user card should be drawn with information displayed (id, name, first letter of name, e-mail)


## screenshots

![Signin page](/src/assets/signin.png "Signin page")
![Home page](/src/assets/table.png "Table")
![Context menu](/src/assets/contextMenu.png "Context menu")
![Details](/src/assets/details.png "Details")


## Deploying project

project is deployed on github and published through github pages
- [Repository in Angular.ts](https://github.com/teobidzishvili/softX)
- [Javascript configuration](https://github.com/teobidzishvili/soft-x)
- [Live site URL](https://teobidzishvili.github.io/soft-x/)
Username: admin
Password: admin

