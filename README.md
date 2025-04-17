# 🧑‍💼 BestBuy Staff-Service

## 📌 Project Overview

This is a simple, cloud-native microservice designed for Best Buy's internal system to manage **staff information**. It provides **REST APIs** to perform **CRUD operations**, and stores staff data **in-memory** (no database required). The app is designed following the **12-Factor App principles** and is fully containerized and deployed to **Azure Kubernetes Service (AKS)** with a working **CI/CD pipeline** using **GitHub Actions**.

---

## 📦 Features

- Create, Read, Update, and Delete staff records
- In-memory storage for simplicity
- 100% stateless and containerized
- CI/CD pipeline with GitHub Actions
- Deployed to AKS with LoadBalancer
- Easy to test via Postman or curl

---

## 📑 Staff Data Structure

```json
{
  "id": 1,
  "name": "John Doe",
  "position": "Sales Manager",
  "department": "Electronics",
  "email": "john.doe@bestbuy.com",
  "phone": "123-456-7890"
}

Shaoxian Duan