import http from 'k6/http';
import { sleep } from 'k6';

export const options = {
  scenarios: {
    contacts: {
        /* Executor adequado quando desejamos que um número específico de VUs
        complete um número específico de iterações.
        Quantidade de iterações por VU não é importante.
        Tempo para concluir uma série de iterações é importante */
      executor: 'shared-iterations',
      vus: 10,
      iterations: 200,
      maxDuration: '30s',
    },
  },
};

export default function () {
  http.get('https://test.k6.io/contacts.php');
  sleep(0.5);
}