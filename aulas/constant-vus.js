import http from 'k6/http';
import { sleep } from 'k6';

export const options = {
    scenarios: {
        contacts: {
                // Número específico de VU's seja executado em um período especificado de tempo
            executor: 'constant-vus',
            vus: 10,
            duration: '30s',
        },
    },
};

export default function () {
    http.get('https://test.k6.io/contacts.php');
    sleep(0.5);
}