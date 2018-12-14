# vue-firestore

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```
## Pasos iniciales seguidos

Instalamos el vue cli, para luego utilizarlo (creando un proyecto con vue):

```
npm install -g vue-cli
vue init webpack vue-firestore
```

Instalamos librerías extras que utilizaremos:

```
yarn add faker firebase moment vue-i18n vue-mugen-scroll vuetify vuex --save
```


En index.html añadimos fuente roboto y material icons:

```
<link href="https://fonts.googleapis.com/css?family=Roboto:300,400,700|Material+Icons" rel="stylesheet">
```

### Iconos de Material 
https://material.io/tools/icons/?style=baseline


### Usuarios creados en Firebase para el proyecto

A modo de recordatorio (porque en breve la bbdd de firebase no la tendré al publico), los usuarios básicos creados han sido:

admin1@email.com | admin1
customer@email.com | customer

