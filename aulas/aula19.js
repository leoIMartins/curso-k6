import http from 'k6/http';
import { sleep } from 'k6';


export default function(){

    const res = http.get(__ENV.URL);

    sleep(1);
}

/*                      Commandos
k6 run -e URL=https://test-api.k6.io/public/crocodiles/ aula19.js
k6 run -e URL=https://test-api.k6.io/public/crocodiles/ aula19.js --duration 5s --vus 10
k6 run -e URL=https://test-api.k6.io/public/crocodiles/ aula19.js --stage 5s:5,5s:5,5s:0
*/