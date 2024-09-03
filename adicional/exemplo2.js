/* Ao executar o script com o comando abaixo, um dashboard 
    em tempo real fica disponível em http://127.0.0.1:5665
    
    k6 run --out web-dashboard adicional/exemplo2.js
*/

import http from 'k6/http';
import { check } from 'k6';

export const options = {
    vus: 10,
    duration: '120s',
    thresholds: {
        checks: ['rate > 0.99']
    }
}

export default function(){
    const BASE_URL = 'https://test-api.k6.io/public/crocodiles/';

    const res = http.get(BASE_URL);

    check(res, {
        'status code 200': (r) => r.status === 200
    });
}
