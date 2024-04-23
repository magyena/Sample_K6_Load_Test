// DAPILCALEG Get Dapil Details
import http from 'k6/http';
import { check } from 'k6';

export let options = {
    vus: 1,
    duration: '1m',
    
};

export default function () {
    const apiUrl = 'https://dev-api.partaiperindo.com/dapilcaleg/dapil/map?page=1&limit=1&level_id=1&sort=dapil&order=asc';
    
    
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