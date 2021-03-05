# Design Project

Design project is a website for people who are looking to someone to provide industrial designs or people who want to  contribute in a project with the designer.


## Description

Design project integrates designs projects by the designer with the respectice customer's reviews. Also provides a customer log-in in order to create the review. All sign-ups will be created by the admin. In contact information there is a form in order to contact the designer.



## Endpoints table

| Id  | Method | Path                                        | Description                                                            |
| --- | ------ | ------------------------------------------- | ---------------------------------------------------------------------- |
| 1   | get    | /                                           | Renders homepage                                                       |
| 2   | get    | /login                                      | Renders login form                                                     |
| 3   | post   | /login                                      | Validates user login info                                              |
| 4   | get    | /signup                                     | Renders signup form                                                    |
| 5   | post   | /signup                                     | Validates user signup info                                             |
| 6   | post   | /logout                                     | Logs user out                                                          |
| 7   | get    | /contact                              | Renders office & editin form view                                             |
| 8  | put   | /profile/user:id                                     | Renders user profile and type of user with editing form   
