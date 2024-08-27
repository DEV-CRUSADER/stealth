<h1 align="center">
Getting started with SphereX
</h1>
<p align="center">
MongoDB, Expressjs, React/Redux, Nodejs
</p>
<p align="center">
    <a href="https://www.gnu.org/licenses/gpl-3.0">
      <img src="https://img.shields.io/badge/License-GPLv3-blue.svg" />
   </a>
</p>

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Clone or download
```terminal
> git clone https://github.com/CodeWithSaurabhYadav/ChatApp
> npm i
```

## project structure
```terminal
LICENSE
README.md
package.json
server/
   package.json
   .env (to create .env, check [prepare your secret session])
client/
   package.json
...
```

# Dependencies(tech-stacks)
Here's a similar format for the updated dependencies:

### Dependencies (Tech Stacks)

**Client-side** | **Server-side**
--- | ---
@emoji-mart/data: ^1.0.6 | bcryptjs: ^2.4.3
@emoji-mart/react: ^1.0.1 | cors: ^2.8.5
@emotion/react: ^11.10.4 | dotenv: ^16.4.5
@emotion/styled: ^11.10.4 | express: ^4.19.2
@hookform/resolvers: ^3.6.0 | express-mongo-sanitize: ^2.2.0
@iconify/react: ^4.0.0 | express-rate-limit: ^7.3.1
@mui/lab: ^5.0.0-alpha.172 | helmet: ^7.1.0
@mui/material: ^5.10.8 | jsonwebtoken: ^9.0.2
@reduxjs/toolkit: ^2.2.5 | mongoose: ^8.4.1
@testing-library/jest-dom: ^5.16.5 | morgan: ^1.10.0
@testing-library/react: ^13.4.0 | nodemailer: ^6.9.14
@testing-library/user-event: ^13.5.0 | nodemailer-express-handlebars: ^6.1.2
@tsparticles/react: ^3.0.0 | otp-generator: ^4.0.1
@tsparticles/slim: ^3.5.0 | xss-clean: ^0.1.4
axios: ^1.7.2 | 
emoji-mart: ^5.2.2 | 
framer-motion: ^7.5.3 | 
i: ^0.3.7 | 
npm: ^10.8.1 | 
phosphor-react: ^1.4.1 | 
prop-types: ^15.8.1 | 
react: ^18.2.0 | 
react-dom: ^18.2.0 | 
react-dropzone: ^14.2.3 | 
react-helmet-async: ^1.3.0 | 
react-i18next: ^11.18.6 | 
react-lazy-load-image-component: ^1.6.0 | 
react-redux: ^9.1.2 | 
react-router-dom: ^6.4.2 | 
react-scripts: ^5.0.1 | 
redux-persist: ^6.0.0 | 
simplebar-react: ^2.4.3 | 
stylis-plugin-rtl: ^2.0.2 | 
web-vitals: ^2.1.4 | 
yup: ^1.4.0 | 
@faker-js/faker: ^7.5.0 | 
concurrently: ^8.2.2 |

## Setting Up

### First Lets Download / Install all the required Tooling
#### Install MongoDB

### Rename SERVER/sample.env to (.env) and add your details.


Please install MongoDB using this link
```https://www.mongodb.com/docs/manual/installation/```.
This is just a reference for installation. 
Assuming the following, after installation is complete.

```
DB_USER=username
DB_PASSWORD=password

DB_URI=mongodb+srv://<USERNAME>:<PASSWORD>@rest_of_connection_string
```
#### Install VSCode or your prefered code editor
I personally prefer VSCode for Development. Feel free to use the code editor of your choice. I find VSCode to have a lot of autoformatting plugins for Development very useful. 

#### Install Postman
+ Postman will be used for API Testing / Development.
+ We will be writing a lot of rest apis, and will add all these to Postman for better management.

#### Install Node
+ Install NVM using this linl ```https://github.com/nvm-sh/nvm```
+ Node will be used for Building React files.
## Code Setup

Available Scripts

In the project directory, you can run the below commant at 3 different places:

The places are as follows
```
* Root directory (To run both server and client)
* CLIENT's folder (To run client side app)
* SERVER's folder (To run backend api server ) 
```
#
Command `npm start`
But before this you need to run `npm i` in all the three places ablve

#
`npm start` Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.


### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

#### Update Configs

Go to `~\CLIENT\src\config.js` file. Add the necessary details. 
```
export const S3_BUCKET_NAME = 'project-dev';
export const AWS_ACCESS_KEY = '';
export const AWS_SECRET_ACCESS_KEY = '';
export const AWS_S3_REGION = 'ap-south-1';
```
Then,
Go to `~\SERVER\.env`. Create one if not already present. You can copy one of the existing file (`SERVER\sample.env`) and change the name and properties in place.

***
Kindly note: NODE_ENV=development/production

* development:- This logs the emails data into the server terminal, and also logs necessary details for debuging.
* production:- Does not log any data. So, it is not useful fot production
***