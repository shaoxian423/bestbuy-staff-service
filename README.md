# 🧑‍💼 BestBuy Staff-Service

A cloud-native microservice built to manage staff information at Best Buy.  
Provides full CRUD functionality via REST APIs, is containerized, and deployable to Azure Kubernetes Service (AKS) via CI/CD pipeline.

---

## 📁 Project Structure

```bash
.
├── app.js                        # Main entry point (Express app)
├── Dockerfile                   # Docker image definition
├── docker-compose.yml           # Local development support
├── staff-service.yaml           # K8S deployment (LoadBalancer version)
├── .github/
│   └── workflows/
│       └── ci_cd.yaml           # GitHub Actions CI/CD pipeline
├── plugins/                     # Additional helper modules
│   ├── messagequeue.js
│   ├── sensible.js
│   └── support.js
├── routes/                      # (Optional) API route files
├── package.json / lock.json     # Node dependencies
└── README.md                    # This file
```

---

## 🚀 Features

- ✅ Add, View, Update, Delete staff records
- ✅ In-memory storage (no DB required)
- ✅ RESTful API (Express.js)
- ✅ Dockerized with `Dockerfile`
- ✅ CI/CD pipeline using GitHub Actions
- ✅ Deployed on AKS via `staff-service.yaml`

---

## 📦 Staff Object Format

```json
{
  "id": 1,
  "name": "John Doe",
  "position": "Sales Manager",
  "department": "Electronics",
  "email": "john.doe@bestbuy.com",
  "phone": "123-456-7890"
}
```

---

## 🔌 API Endpoints

| Method | Route          | Description               |
|--------|----------------|---------------------------|
| GET    | `/`            | Health check              |
| POST   | `/staff`       | Add new staff             |
| GET    | `/staff`       | List all staff            |
| GET    | `/staff/:id`   | Get staff by ID           |
| PUT    | `/staff/:id`   | Update staff by ID        |
| DELETE | `/staff/:id`   | Delete staff by ID        |

---

## 🐳 Docker Usage

```bash
# Build
docker build -t 41123100/staff-service .

# Run
docker run -p 3000:3000 41123100/staff-service
```

🧭 Docker Hub image:  
`https://hub.docker.com/r/41123100/staff-service`

---

## ☁️ Kubernetes Deployment

### Deployment File: `staff-service.yaml`

```yaml
type: LoadBalancer
port: 80
targetPort: 3000
```

### Deployment Steps:

```bash
kubectl apply -f staff-service.yaml
kubectl get svc
```

Then access: `http://<EXTERNAL-IP>` once assigned.

---

## 🔁 CI/CD Pipeline

CI/CD is defined in `.github/workflows/ci_cd.yaml`  
Workflow includes:

- ✅ `Build` stage
- ✅ `Test` stage
- ✅ `Release`: Push image to Docker Hub
- ✅ `Deploy`: Apply to AKS

Secrets/Vars required in GitHub:

| Name              | Type     | Description                     |
|-------------------|----------|---------------------------------|
| `DOCKER_USERNAME` | Secret   | Docker Hub username             |
| `DOCKER_PASSWORD` | Secret   | Docker Hub password             |
| `KUBE_CONFIG_DATA`| Secret   | base64 of kubeconfig            |
| `DOCKER_IMAGE_NAME` | Variable | e.g. `staff-service`           |

---

## ✅ Tasks Completed

- [x] Developed microservice in Express.js
- [x] CRUD API with in-memory data
- [x] Dockerized and pushed to Docker Hub
- [x] CI/CD Pipeline with GitHub Actions
- [x] AKS deployment via YAML
- [x] Structured project layout
- [x] Updated README with clear instructions

---

## 🐞 Issues Encountered

- Docker image tag mismatch in CI
- Azure LoadBalancer `EXTERNAL-IP` delay
- `kubectl apply` failed due to missing `checkout` step in CI (fixed)

---

## 👨‍🏫 Instructor Access

- GitHub repo is private and shared with `ramymohamed10`
- Submit via Brightspace or email link
- Public demo available once IP assigned

---

_Author: **Shaoxian Duan**  
Student Number: **041123100**_
