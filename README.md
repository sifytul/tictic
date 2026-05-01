<p align="center">
  <img src="src/assets/argocd.avif" alt="ArgoCD" height="80" />
  <img src="src/assets/Kubernetes_logo.png" alt="Kubernetes" height="80" />
</p>

<h1 align="center">Tictic</h1>

<p align="center">
  A modern React application with enterprise-grade CI/CD and Kubernetes deployment
</p>

<p align="center">
  <img src="https://img.shields.io/badge/React-19.1-61DAFB?style=for-the-badge&logo=react" alt="React" />
  <img src="https://img.shields.io/badge/TypeScript-5.8-3178C6?style=for-the-badge&logo=typescript" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Vite-7.0-646CFF?style=for-the-badge&logo=vite" alt="Vite" />
  <img src="https://img.shields.io/badge/Kubernetes-326CE8?style=for-the-badge&logo=kubernetes" alt="Kubernetes" />
  <img src="https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker" alt="Docker" />
</p>

---

## Overview

Tictic is a demonstration application showcasing modern DevOps practices with:

- **React 19** with TypeScript for type-safe UI development
- **Vite** for fast development and optimized production builds
- **GitHub Actions** for automated CI/CD pipelines
- **Docker** for containerized deployment
- **Kubernetes** for orchestration
- **ArgoCD** for GitOps-based continuous deployment

---

## Architecture

```
┌─────────────┐     ┌───────────────┐     ┌─────────────┐
│   GitHub    │────▶│ GitHub Actions│────▶│   Docker    │
│   (code)    │     │  (CI/CD)      │     │   Hub       │
└─────────────┘     └───────────────┘     └─────────────┘
                                               │
                                               ▼
                                        ┌─────────────┐
                                        │ Kubernetes  │
                                        │  (cluster)  │
                                        └─────────────┘
                                               │
                                               ▼
                                        ┌─────────────┐
                                        │   ArgoCD    │
                                        │ (sync)      │
                                        └─────────────┘
```

---

## CI/CD Pipeline

The pipeline includes the following stages:

| Stage          | Description                              |
| -------------- | ---------------------------------------- |
| `test`         | Runs unit tests                          |
| `linting`      | Code quality checks with ESLint          |
| `build`        | Compiles and bundles the application     |
| `docker-build` | Builds Docker image locally              |
| `docker-scan`  | Security scanning with Trivy             |
| `docker-push`  | Pushes to Docker Hub (after scan passes) |
| `update-k8s`   | Updates Kubernetes manifests             |

### Security Scanning

The pipeline uses [Trivy](https://trivy.dev/) to scan Docker images for:

- OS vulnerabilities (Critical & High severity)
- Library vulnerabilities
- Misconfigurations
- Secrets

Images are scanned **before** being pushed to the registry.

---

## Deployment

### Prerequisites

- Docker
- Kubernetes cluster
- kubectl configured

### Deploy to Kubernetes

```bash
kubectl apply -f kubernetes/deployment.yaml
```

### Access the Application

The service is exposed via ClusterIP on port 80. To access externally:

```bash
# Port forward for local development
kubectl port-forward svc/tictic-service 8080:80

# Or expose via NodePort (not recommended for production)
kubectl expose deployment tictic-deployment --type=NodePort --port=30090
```

---

## Development

### Prerequisites

- Node.js 22+
- Yarn

### Setup

```bash
# Install dependencies
yarn

# Start development server
yarn dev

# Build for production
yarn build

# Run linter
yarn lint

# Run tests
yarn test
```

---

## Project Structure

```
tictic/
├── .github/
│   └── workflows/
│       └── cicd-pipeline.yaml    # CI/CD pipeline
├── kubernetes/
│   └── deployment.yaml           # K8s deployment & service
├── src/
│   ├── assets/                   # Images and static assets
│   ├── App.tsx                   # Main application component
│   ├── App.css                   # Component styles
│   ├── main.tsx                  # Application entry point
│   └── index.css                 # Global styles
├── Dockerfile                    # Multi-stage Docker build
├── package.json                  # Dependencies
├── vite.config.ts               # Vite configuration
└── tsconfig.json                # TypeScript configuration
```

---

## Security Features

- **Non-root container**: Application runs as non-root nginx user
- **Read-only filesystem**: Root filesystem is read-only
- **Security headers**: X-Frame-Options, X-Content-Type-Options, X-XSS-Protection
- **Resource limits**: CPU and memory limits enforced
- **Liveness/Readiness probes**: Health checks configured
- **Capability dropping**: All capabilities dropped

---

## License

MIT
