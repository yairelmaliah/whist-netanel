pip install --user awscli
export PATH=$PATH:$HOME/.local/bin

add-apt-repository ppa:eugenesan/ppa
apt-get update
apt-get install jq -y

curl https://raw.githubusercontent.com/silinternational/ecs-deploy/master/ecs-deploy | sudo tee -a /usr/bin/ecs-deploy
sudo chmod +x /usr/bin/ecs-deploy

# Use this for AWS ECR
aws ecr get-login-password --region eu-central-1 | docker login --username AWS --password-stdin 616132893387.dkr.ecr.eu-central-1.amazonaws.com
echo "===================================================="
echo $?
echo "===================================================="
exit 1
# Build Tag and Push client
docker build -t client ./client
docker tag client:latest 616132893387.dkr.ecr.eu-central-1.amazonaws.com/client:latest
docker push 616132893387.dkr.ecr.eu-central-1.amazonaws.com/client:latest

# Build Tag and Push posgres
docker build -t db ./db
docker tag db:latest 616132893387.dkr.ecr.eu-central-1.amazonaws.com/db:latest
docker push 616132893387.dkr.ecr.eu-central-1.amazonaws.com/db:latest

# Build Tag and Push server
docker build -t server ./server
docker tag server:latest 616132893387.dkr.ecr.eu-central-1.amazonaws.com/server:latest
docker push 616132893387.dkr.ecr.eu-central-1.amazonaws.com/server:latest

# Deploy all Services
ecs-deploy -c whist-ec2 -n whist-srv -i ignore --skip-deployments-check