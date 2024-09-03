import http from 'k6/http';
import { check }  from 'k6';


/* O bloco thresholds é usado para definir condições que devem ser
atendidas durante o teste. Ele permite que você defina critérios para
avaliar o sucesso ou a falha do teste com base em métricas específicas.*/
export const options = {
    vus: 1,
    duration: '10s',
    thresholds: {
        http_req_failed: ['rate < 0.01'],
        http_req_duration: [{threshold: 'p(95) < 200', abortOnFail: true}],
        checks: ['rate > 0.99']
    }
    /* http_req_failed: ['rate < 0.01']: Define um limiar para a taxa de falhas das requisições HTTP. 
    O teste será considerado como tendo passado se a taxa de falhas for menor que 1% (0.01).
    Se a taxa de falhas exceder esse valor, o teste será considerado falho.

    http_req_duration: [{threshold: 'p(95) < 200', abortOnFail: true}]: Define um limiar para a duração 
    das requisições HTTP. Aqui, p(95) < 200 significa que 95% das requisições devem ser concluídas em 
    menos de 200 milissegundos. O parâmetro abortOnFail: true indica que o teste deve ser interrompido 
    imediatamente se esse limiar for excedido, ou seja, se a duração das requisições exceder o limite 
    de 200 ms para 95% das requisições.

    checks: ['rate > 0.99']: Define um limiar para a taxa de sucesso dos checks realizados durante o 
    teste. rate > 0.99 significa que pelo menos 99% dos checks devem passar para que o teste seja 
    considerado bem-sucedido. Se a taxa de sucesso dos checks for menor que 99%, o teste será
    considerado falho. */
}

export default function () {
    const res = http.get('http://test.k6.io/')

    check(res, {
        'status code é 200': (r) => r.status === 200
    });
}