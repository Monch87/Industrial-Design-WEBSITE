# Design Project :bulb: :desktop_computer:

Design project is a website for people who are looking to someone to provide industrial designs or people who want to  contribute in a project with the designer.


## Description

Design project integrates designs projects by the designer with the respectice customer's reviews. Also provides a customer log-in in order to create the review. All sign-ups will be created by the admin. In contact information there is a form in order to contact the designer.



## Endpoints table

| Id  | Method | Path                                        | Description                                                            |
| --- | ------ | ------------------------------------------- | ---------------------------------------------------------------------- |
| 1   | get    | /                                           | Renders homepage                                                       |
| 2   | get    | /projects-list                              | Renders to all designer's projects (logged in and not logged in)                                |
| 3  | get    | /details/:id                                | Renders to an individual project (logged in and not logged in)                              |
| 4   | get    | /contact                                    | Renders to contact form view (logged in and not logged in)                                  |
| 5   | get    | /login                                      | Renders login form                                                     |
| 6   | post   | /login                                      | Validates user login info                                              |
| 7   | post   | /logout                                     | Logs user out                                                          |
| 8   | get    | /signup                                     | Renders signup form (Enabled for ADMIN)                                                   |
| 9   | post   | /signup                                     | Validates user signup info (Enabled for ADMIN)                                              |
| 10   | put   | /profile/user:id                              | Renders the logged-in user to the main page of the projects. The user can leave a comment and edit in their assigned project too.  |


  ## Instructions

 1. Access to the file: "client" and server from your terminal. 
 2. BACKEND: Run the app in the development mode "npm run dev". Open http://localhost:5000 in order to view it in the browser.
 3. FRONTEND: Run the app in the development mode "npm start". Open http://localhost:3000 in order to view it in the browser.
 4. Run MongoDB in order to take a look the Database.

![idweb](https://user-images.githubusercontent.com/72262776/118497177-1e99c900-b725-11eb-9d7f-997bbf1b55c4.png)

  ## Used technologies 

- HTML5 
- CSS3
- JavaScript
- React Bootstrap
- Bootstrap
- React
- React-dom
- React-datepicker
- React-router-dom
- Axios
- Nodemailer
- Cloudinary
- API
- bcrypt
- CORS
- Express
- Mongoose
- Passport
- SweetAlert



## About me :woman_technologist:

* Github: [@Monch87](https://github.com/Monch87)
* LinkedIn: [Montserrat-Mosqueda-Morales](https://www.linkedin.com/in/montserrat-mosqueda-morales)
  LinkedIn: Montserrat-Mosqueda-Morales
