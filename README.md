# REST API Typescript - NodeJS - Firestore

 <!-- [![NPM](https://img.shields.io/travis/com/Rober19/node_ts_db.svg?branch=master&style=flat-square&logo=travis-ci&logoColor=white&label=travis)](https://travis-ci.com/Rober19/node_ts_db) [![Build Status](	https://img.shields.io/azure-devops/build/rober19dev/afbe8b69-aad3-41ed-91d7-bafbfa8106dc/11/master.svg?style=flat-square&logo=azuredevops&logoColor=white&label=Azure)](https://rober19dev.visualstudio.com/Pipelines/_build/latest?definitionId=11) [![CodeFactor](https://www.codefactor.io/repository/github/rober19/node_ts_db/badge?style=flat-square)](https://www.codefactor.io/repository/github/rober19/node_ts_db) -->


## Tener en cuenta
Para probar todo correctamente se deben ingresar las credenciales personales usando el orden a continuación  

```` 
# Crear la carpeta credentials/ y dentro el archivo '.env', si no configuras esto antes de iniciar, dará error

# Solamente cambiar el url_host de mongodb

API_KEYS={"rober19_firebase": {"project_id": "#####", "private_key" : "%%%%%", "client_email" : "@@@@@"}}


````
###### Hay muchas formas de organizar las credenciales para que la aplicación, los test unitarios y demas extenciones funcionen sin revelarlas ni ponerlas en riesgo; pero la mia me ha funcionado y la recomiendo

# Para ejecutar, *usar*:

````bash
$ npm start
````

## Para ejecutar con ``nodemon``
````bash
$ npm run start:dev
````
