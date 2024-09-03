// Tipos de módulos/imports do K6

// default
// módulo nativo do k6 com ótima performance
import http from 'k6/http';

// remoto
// módulo não nativo mas otimizado para utilizar com k6, 
// que não prejudica a performance do script
import { AWSConfig, S3Client } from 'https://jslib.k6.io/aws/0.4.0/s3.js';

// local
// módulos não nativos ou que não fazem parte do jslib.k6.io podem 
// não ser otimizados e podem prejudicar a performance do teste
import runTest from './exemplo.js'

export default function() {
  let res = http.get("http://test.k6.io");
  sleep(1);

  check(res, {
      "status is 200": (r) => r.status === 200,
     });
}