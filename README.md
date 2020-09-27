Puertos expuestos usados por el stack local:
* 9001 capillary
* 9002 notify
* 9080 wserver
* 15672/5672 Rabbit
* 27017 Mongo

Deployar stack ejecutando el archivo local.deploy.sh

## Cómo Forzar envio de notificaciones whatsapp a un numero de telefono en particular?

En el archivo env.vars ubicado en la carpeta stack-deploy, modificar la variable de entorno: 
NOTIFY_WSP_DEFAULT_DESTINATION_PHONE
Ejemplo de numero valido:
* Sin +
* Sin 00

NOTIFY_WSP_DEFAULT_DESTINATION_PHONE=56987884978

* IMPORTANTE: Contactar a Igor Roman del Team LaKovraTim para habilitar el numero en la lista de dispositivos autorizados.

* Volver a desplegar el stack local para que los cambios tengan efecto:
./local.deploy.sh
