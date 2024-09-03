//aula: ciclo de vida de testes com k6

//1. inicialização
import sleep from 'k6';


//2. configuração
export const options = {
    vus: 1,     //número de usuários
    duration: '10s'     //duração
}

//3. execução // codigo vu
export default function(){
    console.log("testando o k6");
    sleep(1);
}

//4. desmontagem. não é obrigatório
export function teardown(data){
    console.log(data)
}