# Simple REST API
The aim of this project is to create a simple API that can be reused in other projects or expanded upon for any purpose.

## Setup:
Create an .env.local with MONGO_CONNECTION_URI assigned to your MongoDB connection URI. Once that's set up, go to http://{your URL}/api/sample. If you see some basic JSON output, it is likely that your initial setup has been a success.

## Managing the data:
You'll need to use either the Mongosh terminal, MongoDB Compass or a client such as Thunder Client which integrates with VSCode. To add your first piece of data, create a POST request to http://{your URL}/api/sample with a payload such as:

{
    "sampleBoolean": true,
    "sampleMessage": "this is a test",
    "sampleNumber": 5
}

This will return a result message from the API, and assuming it's successful, a unique ID. When you visit the http://{your URL}/api/sample page again, you should see this added as a new result. 

## Deleting data:
Using your chosen approach, run a DELETE request with the id parameter set to the unique ID shown on the result. 