# WeatherApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.0.3.

## Running the application

### Download Code

Clone the repository into your local machine using the link in the GitHub page.

### Front-End Setup

Navigate to `WeatherApp` folder and run `npm install` to install packages.
To run the web application run `ng serve` for a dev server. 
Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

### Back-End Setup

Navigate to `WeatherApp\api` folder and run `npm install`
To run the server run `nodemon index.js`. The api will start listening to requests

### Database Setup

The database used is MongoDB Atlas and network access is currently open to anyone with the connection srv string. The connection is already configured in the backend files of the web application. So no need to worry about that.
If you want to have a look at the DB, Please use this connection string `mongodb+srv://sid01:WeatherApp123@cluster0.imxvi1u.mongodb.net/?retryWrites=true&w=majority` to view DB in Mongodb Compass , in any way best suitable.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
