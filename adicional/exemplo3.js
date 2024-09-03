/* Teste executado na cloud do Grafana
k6 cloud adicional/exemplo3.js

Executa o teste localmente e exporta o report para o Grafana
k6 run --out cloud adicional/exemplo3.js
*/
import http from 'k6/http';
import {sleep, check} from 'k6';

export const options = {
    stages: [
        { duration: '10s', target: 10 }, 
        { duration: '10s', target: 10 },
        { duration: '10s', target: 0 } 
    ],
    thresholds: {
        checks: ['rate > 0.95'],
        http_req_duration: ['p(95) < 200']
    },
    ext:{
        loadimpact:{
            projectID: 3712225,
            name: 'Teste de Performance utilizando K6'
        }
    }
}

export default function(){

    const BASE_URL = 'https://test-api.k6.io/public/crocodiles';
    const res = http.get(BASE_URL)
    
    check(res,{
        'status 200': (r) => r.status === 200
    });
    sleep(1);
}