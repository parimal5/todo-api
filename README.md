# 🛠️ Todo API – GitHub Actions CI/CD with Docker

This project demonstrates a complete CI/CD pipeline using **GitHub Actions** to test, build, and push a Dockerized Node.js app to Docker Hub.

✅ Test  
✅ Docker Build  
✅ Push to Docker Hub  
✅ Manual Trigger via Actions tab

---

## 📦 Tech Stack

- Node.js (Express)
- Docker
- GitHub Actions
- Docker Hub

---

## 🚀 CI/CD Workflow (GitHub Actions)

- ✅ Manually triggered via **Actions tab**
- ✅ Installs dependencies
- ✅ Runs tests
- ✅ Builds a Docker image
- ✅ Pushes to Docker Hub

---

## 🐋 Docker Image

```bash
docker pull parimal5/todo-api:latest
```
▶️ Run Locally
Install dependencies and start the app:

```bash
npm ci
npm start
```
Or use Docker:
```bash
docker build -t todo-api .
docker run -p 3000:3000 todo-api
```

Visit:
`http://localhost:3000/health`

## 🔐 GitHub Secrets Required

Add these under:  
**GitHub → Repository → Settings → Secrets → Actions**

| Secret Name         | Description                  |
|---------------------|------------------------------|
| `DOCKERHUB_USERNAME`| Docker Hub username          |
| `DOCKERHUB_PASSWORD`| Docker Hub password or PAT   |




