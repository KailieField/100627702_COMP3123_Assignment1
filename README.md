
COMP3123 ASSIGNMENT 01

Objectives:
 -- understand RESTful API design principles
 
 -- implement CRUD operations using provided API endpoints
 
 -- TEST the API endpoints to ensure they return the correct response codes and data


 NOTES & COMMENTS:

 -- Within my application you will find that I have chosen to use a conventional style of organization : controllers,  validations, middleware etc.

 -- This was done with the intention to provide not just clarty but to organize my code with more compartmentalization furthering practices found within industry, and example provided within my textbooks
 
 -- it was also nice because keeping to convention it represented a microservice in many ways, allowing for scalability -- and this made it easier for me to work through -- however as I did, I will admit -- filepaths began to play a huge role when npm start was first used
 
 -- I was able work with jasonwebtoken library (however brief) but in the interest of time and because I held a very surface level understanding, I felt it was in my best to only use it for the users and forego applying this to employees (commits show this redaction)
 
 -- When it comes to require('dotenv').config() -- i found this interesting as there are multiple ways that I would have like to be able to utilize and with more purpose, however again in the interest of time, I kept it surface level.
 
 -- on the environment note: I did not deploy to Vercel as I did not have the time, therefore you will not find a vercel file that prepares the application to do so, however you will find within my code that I had prepared for this potential
 
 -- with reference to sample user:
 
 // user_signup


 {
    
    "username": "jupitereuropa",
    "email": "jupiter.europa@example.com",
    "password": "password123"
    
}

// create_employee

{
    
    "first_name": "Jupter",
    "last_name": "Europa",
    "email": "jupiter.europa@example.com",
    "position": "Product Manager",
    "salary": "110000",
    "date_of_joining": "2024-09-10T00:00:00.000Z",
    "department": "Management"
}


-- I hope this is sufficient

Thank you in advance.
