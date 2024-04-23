// DAPILCALEG Get Caleg List
import http from 'k6/http';
import { check } from 'k6';

export let options = {
    vus: 1,
    duration: '1m',
    
};

export default function () {
    const apiUrl = 'https://dev-api.partaiperindo.com/dapilcaleg/caleg?page=1&limit=1&level_id=1&partai_id=1&prov_code=1&kab_code=1&kec_code=1&kel_code=1&sort=dapil&order=asc';
    
    const bearerToken = 'tokean'; //Taruh toket lu disini

    const headers = { // headersnya sesuain
        'accept': 'application/json',
        'Authorization': `Bearer ${bearerToken}`, 
    };
    const params = {
        page: 1,
        limit: 1,
        level_id: 1,
        partai_id: 1,
        prov_code: 1,
        kab_code: 1,
        kec_code: 1,
        kel_code: 1,
        sort: 'dapil',
        order: 'asc',
    };

    const response = http.get(apiUrl, { headers: headers });

    check(response, {
        'API Request Successful': (res) => res.status === 200,
        'Correct HTTP Method': (res) => res.status !== 405,
    });

    console.log(`Response status: ${response.status}`);
    console.log(`Response body: ${response.body}`);
}
