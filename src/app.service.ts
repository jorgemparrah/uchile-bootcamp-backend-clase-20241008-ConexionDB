import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {

  async manejadorPromesas() : Promise<string> {
    const promesa1 = this.getPromesa();
    const promesa2 = this.getPromesa();
    const promesa3 = this.getPromesa();
    const promesa4 = this.getPromesa();
    const promesa5 = this.getPromesa();
    const promesa6 = this.getPromesa();
    const respuesta1 = await promesa1;
    console.log("RESOLVIO PROMESA 1")
    const respuesta2 = await promesa2;
    console.log("RESOLVIO PROMESA 2")
    const respuesta3 = await promesa3;
    console.log("RESOLVIO PROMESA 3")
    const respuesta4 = await promesa4;
    console.log("RESOLVIO PROMESA 4")
    const respuesta5 = await promesa5;
    console.log("RESOLVIO PROMESA 5")
    const respuesta6 = await promesa6;
    console.log("RESOLVIO PROMESA 6")
    return respuesta1 + respuesta2 + respuesta3 + respuesta4 + respuesta5 + respuesta6;
  }

  getPromesa() : Promise<string> {
    const promesa = new Promise<string>((resolve, reject) => {
      const duracion = Math.random()*20000 + 10000;
      console.log(`CODIGO INICIO PROMESA (${duracion})`);
      setTimeout(() => {
        if (Math.random() < 0.99) {
          console.log(`RESOLVIENDO PROMESA (${duracion})`);
          resolve(`Finalizado Promesa (${duracion})`);
        } else {
          reject(new Error(`Error Promesa (${duracion})`));
        }
      }, duracion);
      console.log(`CODIGO FIN PROMESA (${duracion})`);
    });
    return promesa;
  }


  getHello(): string {
    return 'Hello World!';
  }
}
