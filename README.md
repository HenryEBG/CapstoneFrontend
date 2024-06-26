This is an example README.md for your Capstone's Frontend GitHub

# RefugeeConnect

It is a plataform that let all refugees of KRM a non profit organization, is indicated to providing resettlement services to refugees.  As a part of this comunity I saw that it very dificult for the new people that arrive to be connect with other refugees and with places where they can join with other or they can get some services or food.

The project will include an administration of the users, the places and services.

Administrators can create new users and all users can add places like markets, chuchs, food banks, entertainments etc.

At the same time they can aproach with other refugees but always with the security of not share relevant information of their cases.


## Links

[Deployed Capstone Frontend  Netlify Link](https://667bc8eb05f236fc0fb7a2e9--elegant-piroshki-1cb466.netlify.app/) //not working with the deploy API

[Deployed Capstone Frontend  Netlify Link](https://refugeeconnect.netlify.app/users) //working locally

[Capstone Backend Github Link](https://github.com/HenryEBG/Capstone-Backend)

[Deployed Capstone Backend Render Link](https://capstone-backend-3u7b.onrender.com)

# FrontEnd
## React
The project is complete in react and I use the next hooks to acomplished my app.

### Router
To simulate the navigation between pages and give some  security to just let the user login and the type of use have access to the pages.

### useReduce and useContext
I use those united to have a state can be access for all the pages and have control of the session.

### useRef
With the forms I use useRef to manipulate the data of the inputs.

### useState
I use to keep the document when it is created or is modified.

### useEffect 
To make calls to the API.

- Additionaly I will used in this project dropzone library to drag & drop files.
- I will consume Google Maps API to get information and make a route to the places.


# Backend
## Mongoose
To interactuate with the database and create schemas.

## Cors
To let different server can use de API

## jsonwebtoken
To create a cookie(token) to now if the user is authenticated. (works but not from the frontend)

## molter
To save files in the server (this works but not was finished)



The project use modularity with React. To make a page very responsive for the user.
The project include the next section.

## src folder
### App.jsx
This is the first element call for the main.jsx file.  It contains the routes to the different pages.
We use this Hooks.
It contains the Navbar components.  This component will be display out of the routers.
#### Router 
to include all the list of routes.
#### Route 
to define every route to the pages.
#### Navigate 
to redirect in this case if there is no user logged.

## Routes folder

### habilitated routes

#### User
- Create a page to show the info of one user.

#### Users
- Create a page with a list of all users to give maintanance.  Show icons to delete, update, see or modify a user.

#### ModifyUser
- Create a form to modify a user.  Get an ID from USers(parent page)

#### AddUser
- Create a page to add a user.

#### Login
- Create a page with a form to login to the site.


