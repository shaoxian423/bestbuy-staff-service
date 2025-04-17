# BestBuy Staff-Service

## 💡 Introduction
A cloud-native microservice that provides RESTful CRUD operations to manage staff data for Best Buy's internal system.

## 📦 Features
- In-memory data store
- REST API for CRUD operations
- Docker containerized
- CI/CD via GitHub Actions
- Deployed to Azure AKS

## 🚀 API Endpoints
| Method | Endpoint         | Description        |
|--------|------------------|--------------------|
| POST   | /staff           | Create a staff     |
| GET    | /staff           | Get all staff      |
| GET    | /staff/:id       | Get staff by ID    |
| PUT    | /staff/:id       | Update staff       |
| DELETE | /staff/:id       | Delete staff       |

## 🛠️ How to Run
```bash
npm install
PORT=3000 node index.js