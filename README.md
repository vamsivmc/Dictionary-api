# Dictionary-api

1.***Clone this Project folder to your local by running the command below***
    git clone https://github.com/vamsivmc/Dictionary-api.git

2.***once the project is cloned,go to the project folder in terminal and run the below command***
    npm install

3.***Update the Authorization header of headersWithAuth in the config.js file***
    ex:
    app.headersWithAuth = {
    'Content-Type': 'application/json',
    'Authorization': 'GIVE BASIC AUTHORIZATION KEY'
    }

4.***Run Below command to run the test cases***
    npm test