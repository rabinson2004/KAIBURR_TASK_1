
# Task-1 JAVA BACKEND AND REST API EXAMPLE. 

A **Java Spring Boot** application that provides REST APIs to manage and execute shell command tasks stored in **MongoDB**. Tasks can be created, executed, searched, and deleted programmatically.

---

## Screenshots

# GET ALL TASKS
![get](https://github.com/user-attachments/assets/5aac6b89-6f65-4bc7-88ea-50a2f843cb2a)

# GET BY ID
![getbyid](https://github.com/user-attachments/assets/f60f7d02-e0c4-488f-8c7d-0d67a199c435)

# DELETE BY ID
![deltebyid](https://github.com/user-attachments/assets/3d49bddd-707e-436b-a194-e9e70dae11c0)

# VERIFICATION OF DELETION
![verificationofdeletcommand](https://github.com/user-attachments/assets/e9d1acf7-9122-42aa-a7b9-fdb8ad90946f)

# CREATION
![creation](https://github.com/user-attachments/assets/05870559-3b2e-4b97-9a9d-4af8658ccdbb)

# UPDATING THROUGH SHELL
![updation](https://github.com/user-attachments/assets/d22f3ea0-473e-4630-b503-85b7389b6fe5)

---

## Features

*  **CRUD Operations**: Create, read, update, and delete tasks
*  **Command Execution**: Execute shell commands and store the output
*  **MongoDB Integration**: Persistent storage for tasks and execution logs
*  **Validation**: Reject unsafe commands like `rm`, `sudo`, etc.

---

##  Prerequisites

* Java 21
* Maven 3.8+
* MongoDB 5.0+ (or run via Docker)
* Docker (optional for containerized setup)

---

##  Installation

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/task-manager.git
cd task-manager
```

### 2. Build the Application

```bash
mvn clean package
```

### 3. Run MongoDB (Using Docker)

```bash
docker run -d -p 27017:27017 --name mongo mongo:latest
```

### 4. Run the Application

```bash
java -jar target/rabin-0.0.1-SNAPSHOT.jar app.jar
```

---

##  API Documentation

### Overview

The Task Manager API provides endpoints for managing and executing tasks. Each task includes a shell command that can be executed via the API.

### Endpoints

| Method | Endpoint                     | Description              |
| ------ | ---------------------------- | ------------------------ |
| GET    | `/`                          | Get all tasks            |
| GET    | `/id={id}`                   | Get a task by ID         |
| POST   | `/enterthetask`              | Create a new task        |
| DELETE | `/delete/{id}`               | Delete a task by ID      |
| POST   | `/{id}/execute`              | Execute a task's command |

---

##  Configuration

### MongoDB Connection

Update the MongoDB URI in `src/main/resources/application.properties`:

```properties
spring.data.mongodb.uri=mongodb://localhost:27017/taskdb
```

---

## Example Usage

### Create a Task

```bash
curl -X POST http://localhost:8080/tasks \
  -H "Content-Type: application/json" \
  -d '{
    "id": "task-1",
    "name": "Test Task",
    "owner": "John Doe",
    "command": "echo Hello World"
  }'
```

### Execute a Task

```bash
curl -X POST http://localhost:8080/task-1/execute
```

###  Get All Tasks

```bash
curl http://localhost:8080/
```

---

## Docker Deployment

### Build Docker Image

```bash
docker build -t task-manager:latest .
```

### Run Container

```bash
docker run -p 8080:8080 --link mongo:mongo task-manager:latest
```

> Note: Ensure MongoDB is running or use Docker Compose for orchestration.

---






