import { BadRequestException, Controller, Get, Param, Res } from '@nestjs/common';
import { AppService } from '../service/app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get("async-await")
  async procesoAsAw() : Promise<string> {
    try {
      const respuesta : string = await this.appService.manejadorPromesas();
      return respuesta;
    } catch (error) {
      throw new BadRequestException(error);
    }
  }


  @Get("promesas")
  conPromesas(@Res() response) {
    console.log("CODIGO FLUJO PRINCIPAL 0");
    const promesa = new Promise((resolve, reject) => {
      console.log("CODIGO DE LA PROMESA");
      console.log("CODIGO DE LA PROMESA2");
      console.log("CODIGO DE LA PROMESA3");
      setTimeout(() => {
        resolve("Finalizado Promesa 1");
      }, 3000);
      console.log("CODIGO DE LA PROMESA4");
      console.log("CODIGO DE LA PROMESA5");
      console.log("CODIGO DE LA PROMESA6");
    });

    const promesa2 = new Promise((resolve, reject) => {
      console.log("CODIGO2 DE LA PROMESA");
      console.log("CODIGO2 DE LA PROMESA2");
      console.log("CODIGO2 DE LA PROMESA3");
      setTimeout(() => {
        resolve("Finalizado Promesa 2");
      }, 3000);
      console.log("CODIGO2 DE LA PROMESA4");
      console.log("CODIGO2 DE LA PROMESA5");
      console.log("CODIGO2 DE LA PROMESA6");
    });


    const promesa3 = new Promise((resolve, reject) => {
      console.log("CODIGO2 DE LA PROMESA");
      console.log("CODIGO2 DE LA PROMESA2");
      console.log("CODIGO2 DE LA PROMESA3");
      setTimeout(() => {
        if (Math.random() > 0.5) {
          resolve("Finalizado Promesa 3");
        } else {
          reject("Error Promesa 3");
        }
      }, 1000);
      console.log("CODIGO2 DE LA PROMESA4");
      console.log("CODIGO2 DE LA PROMESA5");
      console.log("CODIGO2 DE LA PROMESA6");
    });

    console.log("SOLICITANDO RESPUESTA DE LA PROMESA 1");
    promesa.then((res) => {
      console.log("SOLICITANDO RESPUESTA DE LA PROMESA 2");
      promesa2.then((res2) => {
        console.log("SOLICITANDO RESPUESTA DE LA PROMESA 3");
        promesa3.then((res3) => {
          console.log("RECIBIDA LA RESPUESTA DE LAS PROMESAS");
          response.status(200).send(res + " - " + res2 + " - " + res3);
        }).catch((error) => {
          console.log("RECIBIDA LA RESPUESTA DE LAS PROMESAS CON ERROR");
          response.status(400).send(res + " - " + res2 + " - " + error);
        });
      });
    });

    console.log("CODIGO FLUJO PRINCIPAL 1");
    console.log("CODIGO FLUJO PRINCIPAL 2");
    console.log("CODIGO FLUJO PRINCIPAL 3");
    console.log("CODIGO FLUJO PRINCIPAL 4");
    console.log("CODIGO FLUJO PRINCIPAL 5");
    console.log("CODIGO FLUJO PRINCIPAL 6");

    // return this.appService.getHello();
  }

  @Get("callback/:id")
  conCallback(@Param("id") id : number): string {
    const ejemplo = 'Hola Mundo';
    console.log("ANTES TIMEOUT");
    setTimeout(function () {
      console.log("Hola Mundo Asincrono - 2 segundos");
      console.log("ANTES TIMEOUT INTERNO");
      setTimeout(() => {
        console.log("Hola Mundo Asincrono Interno");
      }, 1000);
      console.log("DESPUES TIMEOUT INTERNO");
    }, 2000);
    console.log("DESPUES TIMEOUT");

    setTimeout(() => {
      console.log("Hola Mundo Asincrono - 1 segundo");
    }, 1000);

    if (id == 1) {
      console.log(ejemplo);
    } else if (id == 2) {
      console.log("Adios Mundo");
    } else {
      console.log("ERROR");
    }

    return this.appService.getHello();
  }
  
}
