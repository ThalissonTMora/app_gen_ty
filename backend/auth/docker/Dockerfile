# Usar a imagem oficial do Node.js mais recente com Alpine como base
FROM node:20-alpine

# Definir o diretório de trabalho dentro do container
WORKDIR /usr/src/app

# Copiar package.json e package-lock.json
COPY package*.json ./

# Instalar dependências
RUN npm install

# Instalar TypeScript globalmente
RUN npm install -g typescript

# Copiar todo o código fonte para o diretório de trabalho
COPY . .

# Compilar TypeScript
RUN npm run build

# Expor a porta que o serviço vai rodar
EXPOSE 8001

# Comando para rodar a aplicação
CMD ["npm", "run", "start"]
