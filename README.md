# ecommerce-microservices
A simple ecomerrce microservice application with docker and kubrenetes

Please run these commands before skaffolding

kubectl create secret generic jwt-secret --from-literal=JWT_KEY=YOUR_KEY
kubectl create secret generic stripe-secret --from-literal=STRIPE_KEY=YOUR_STRIPE_KEY
kubectl apply -f https://raw.githubusercontent.com/kubernetes/ingress-nginx/controller-v1.8.1/deploy/static/provider/cloud/deploy.yaml
