# Usa una imagen base de Node.js
FROM node:18

# Crea el directorio de la app en el contenedor
WORKDIR /usr/src/app

# Copia los archivos del proyecto
COPY package*.json ./
RUN npm install
COPY . .

# Expón el puerto que usa la app
EXPOSE 3000

# Comando para iniciar la app
CMD [ "node", "index.js" ]
