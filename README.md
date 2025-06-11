Task 2 – Docker Deployment Guide
This guide helps you run your full-stack Task Manager app (Spring Boot + React + MongoDB) using Docker and Docker Compose.

Project Structure 


.
├── backend/
│   └── src/, pom.xml, etc.
├── frontend/
│   └── public/, src/, package.json, etc.
├── Dockerfile
├── docker-compose.yml



Dockerfile

# Stage 1: Build React app
FROM node:22 AS frontend-builder

WORKDIR /app
COPY frontend/ /app/
RUN npm install && npm run build

# Stage 2: Build Spring Boot app
FROM eclipse-temurin:21 AS backend-builder

WORKDIR /app
COPY backend/ /app/
COPY --from=frontend-builder /app/build /app/src/main/resources/static

RUN apt-get update && apt-get install -y maven && \
    mvn clean package -DskipTests

# Stage 3: Run the final Spring Boot app
FROM eclipse-temurin:21-jre

WORKDIR /app
COPY --from=backend-builder /app/target/*.jar app.jar

EXPOSE 8080
CMD ["java", "-jar", "app.jar"]

Docker compose File




yaml
version: "3.8"

services:
  backend:
    build:
      context: .
    ports:
      - "8080:8080"
    depends_on:
      - mongodb
    environment:
      SPRING_DATA_MONGODB_URI: mongodb://mongodb:27017/rabin-db
    networks:
      - app-network

  mongodb:
    image: mongo:latest
    container_name: mongodb
    ports:
      - "27017:27017"
    volumes:
      - mongo-data:/data/db
    networks:
      - app-network

networks:
  app-network:

volumes:
  mongo-data:
  
How to Run
Build and Start All Services:

bash
docker-compose up --build
Access the API:

http://localhost:8080

Test the Backend (e.g., fetch tasks):

bash
curl http://localhost:8080/tasks
MongoDB GUI (Optional):
Use a GUI tool (e.g., MongoDB Compass) to connect to:
mongodb://localhost:27017
