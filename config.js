let headers  ={};
headers.headersWithAuth = {
    'Content-Type': 'application/json',
    'Authorization': '@@@@@@Authorization KEY@@@@@@@@'
    }
headers.headersWithOutAuth = {
    'Content-Type': 'application/json'
    }

module.exports = headers;