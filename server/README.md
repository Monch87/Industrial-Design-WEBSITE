# Design Project

Design project is a website for people who are looking to someone to provide industrial designs or people who want to  contribute in a project with the designer.


## Description

Design project integrates Google maps to show the designer location. Provides all users with a profile page if they are suppliers/partners or clients with their respective forms and information.



## Endpoints table

| Id  | Method | Path                                        | Description                                                            |
| --- | ------ | ------------------------------------------- | ---------------------------------------------------------------------- |
| 1   | get    | /                                           | Renders homepage                                                       |
| 2   | get    | /login                                      | Renders login form                                                     |
| 3   | post   | /login                                      | Validates user login info                                              |
| 4   | get    | /signup                                     | Renders signup form                                                    |
| 5   | post   | /signup                                     | Validates user signup info                                             |
| 6   | post   | /logout                                     | Logs user out                                                          |
| 7   | get    | /office                              | Renders office API GOOGLE MAPS view                                             |
| 8  | get    | /profile/user:id                                     | Renders user profile and type of user with editing form   
| 9  | post / put*  | /profile/user:id                                     | Renders user profile and type of user with editing form                    

