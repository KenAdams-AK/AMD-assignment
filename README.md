# React Redux Applicaton

The application displays and makes it possible to edit the worker's info by API requests.

## Main

- on launching the application, the user will reach a home page;
- on this home page you will have the entry point to fetch workers' information;
- the information is listed per worker;
- user is able to check information about a certain worker, edit the info and save it to DB;
- double clicking on each box launches a modal that will allow the
  user to edit the information.
- once the modal is closed, the new details are reflected in the
  cards
- all is done by Redux lifecycle.

## API Data Source

The JSON file `db.json` within the API in the app's root folder is a mock DB. The `json-server` library is used to mock a server, to launch the server use the command `$ npm run serve-json`

## Run the App

To install all necessary dependencies use the command `$ npm install`. To launch the application in the browser use the command `$ npm start`.
