# Nome da rede
NETWORK_NAME="app_genesis_network"

# Função para verificar a existência da rede
function check_network {
  if ! docker network ls | grep -q "$NETWORK_NAME"; then
    echo "Network $NETWORK_NAME does not exist. Creating network..."
    docker network create $NETWORK_NAME
  else
    echo "Network $NETWORK_NAME already exists."
  fi
}

# Verificar e criar a rede se necessário
check_network

# Iniciar os containers com docker-compose
echo "Starting RabbitMQ service..."
(cd ./rabbitmq && docker-compose down && docker-compose up -d --build)

# echo "Starting Prometheus, Grafana, and Jaeger services..."
# (cd ./monitoring && docker-compose down && docker-compose up -d --build)

echo "Starting auth..."
(cd ./backend/auth && docker-compose down && docker-compose up -d --build)

echo "Starting Nginx service..."
(cd ./nginx && docker-compose down && docker-compose up -d --build)

echo "All services have been started."