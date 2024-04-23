// DAPILCALEG Get Dapil Details
import http from 'k6/http';
import { check } from 'k6';

export let options = {
    vus: 1,
    duration: '1m',
    
};

export default function () {
    const apiUrl = 'https://dev-api.partaiperindo.com/dapilcaleg/dapil/:id';
    // or https://dev-api.partaiperindo.com/dapilcaleg/dapil?id=1
    
    const bearerToken = 'tokean'; //Taruh toket lu disini

    const headers = { // headersnya sesuain
        'accept': 'application/json',
        'Authorization': `Bearer ${bearerToken}`, 
    };

    const response = http.get(apiUrl, { headers: headers });
    check(response, {
        'API Request Successful': (res) => res.status === 200,
        'Response status': (res) => {
            console.log(`Response status: ${res.status}`);
            return true; 
        }
    });
}