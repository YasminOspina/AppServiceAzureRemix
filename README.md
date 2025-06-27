✅ README.md – Taller Fullstack: Remix + .NET 9 + Azure App Service

# 🌐 Taller Fullstack en la Nube: Remix + .NET 9 + Azure App Service (Contenedores)

Este repositorio contiene el resultado del taller de despliegue fullstack usando:

- 🔧 Backend en **.NET 9**
- 🎨 Frontend en **Remix con Vite**
- ☁️ Infraestructura en **Azure App Service Linux**
- 🐳 Contenedores Docker personalizados
- ⚙️ Automatización con **GitHub Actions**
- 📦 Publicación de imágenes en **Docker Hub**

---

## 📁 Estructura del Proyecto

```bash
TallerFullstack/
│
├── backend/
│   └── Api/                  # Proyecto .NET 9 con WebAPI
│       └── Dockerfile        # Imagen personalizada para backend
│
├── frontend/                 # Proyecto Remix + Vite
│   └── Dockerfile            # Imagen personalizada para frontend
│
└── .github/workflows/
    ├── backend-container.yml # GitHub Actions: backend
    └── frontend-container.yml# GitHub Actions: frontend



🚀 Objetivos cumplidos

| Requisito del Taller                      | Estado |
| ----------------------------------------- | ------ |
| Dockerización del frontend y backend      | ✅      |
| Despliegue en Azure App Service Linux     | ✅      |
| Uso de contenedores Docker personalizados | ✅      |
| Automatización con GitHub Actions         | ✅      |
| Publicación en Docker Hub                 | ✅      |
| Despliegue CI/CD al hacer `git push`      | ✅      |


🐳 Docker Hub
Las imágenes se publican automáticamente en:

Backend: yasminospina/remix-backend:latest

Frontend: yasminospina/remix-frontend:latest


⚙️ GitHub Actions
Cada vez que se hace git push a la rama main en los respectivos directorios (frontend/** o backend/**), se ejecutan estos workflows:

Build de imagen Docker

Login seguro a Docker Hub con secrets

Push automático a Docker Hub

Ejemplo de configuración (frontend-container.yml):
on:
  push:
    branches:
      - main
    paths:
      - 'frontend/**'



☁️ Azure App Service (Linux)
Se crearon dos servicios App Service en Linux que consumen las imágenes directamente desde Docker Hub:

Servicio	Imagen	URL pública
Frontend Remix	yasminospina/remix-frontend:latest	https://remix-frontend-container-sirley.azurewebsites.net
Backend .NET 9	yasminospina/remix-backend:latest	https://remix-backend-container-sirley.azurewebsites.net

⚠️ Azure se encarga de ejecutar la imagen como contenedor completo, sin necesidad de runtime preinstalado.

📸 Evidencia 

✅ Navegador mostrando /weatherforecast y la app Remix
https://remix-frontend-container-sirley.azurewebsites.net/
http://remix-backend-container-sirley.azurewebsites.net/weatherforecast


✅ Conclusión
Este taller demostró cómo realizar un despliegue moderno, escalable y automatizado para una aplicación fullstack utilizando:

Docker

GitHub Actions

Azure App Service (Linux)

Remix + .NET 9

Con esta arquitectura, el despliegue de cambios es automático, estable y apto para producción real.

