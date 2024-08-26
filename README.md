# Getting Started with SphereX

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
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