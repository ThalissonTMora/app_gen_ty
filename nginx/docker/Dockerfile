# Use a imagem oficial do Nginx como base
FROM nginx:1.27.0-alpine-slim

# Copie arquivos de configuração personalizados para o diretório do Nginx
COPY nginx.conf /etc/nginx/nginx.conf
COPY http.d /etc/nginx/http.d
COPY conf /etc/nginx/conf

# Instalar dependências adicionais
RUN apk add --no-cache openssl curl bash

# Expor a porta 80 para o servidor Nginx
EXPOSE 80

# Comando para iniciar o Nginx em primeiro plano
CMD ["nginx", "-g", "daemon off;"]
