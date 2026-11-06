# Mi Web Personal | Portafolio Profesional

<p align="center">
  <img src="https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white" />
  <img src="https://img.shields.io/badge/TypeScript-Ready-3178C6?logo=typescript&logoColor=white" />
  <img src="https://img.shields.io/badge/Vite-Powered-646CFF?logo=vite&logoColor=white" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?logo=tailwindcss&logoColor=white" />
  <img src="https://img.shields.io/badge/ESLint-Configured-4B32C3?logo=eslint&logoColor=white" />
</p>

## Descripción

Aplicación web personal desarrollada con React y TypeScript, orientada a presentar mi perfil profesional, experiencia, conocimientos tecnológicos, proyectos e investigación.

El proyecto está diseñado mediante una arquitectura modular y componentes reutilizables, permitiendo incorporar nuevas funcionalidades y evolucionar hacia una plataforma profesional escalable.

## Objetivos

- Presentar mi trayectoria profesional y formación académica.
- Mostrar proyectos de desarrollo de software.
- Compartir conocimientos sobre ciberseguridad y gestión de riesgos.
- Documentar investigaciones y soluciones tecnológicas.
- Construir una plataforma web escalable y mantenible.

## Tecnologías utilizadas

| Tecnología | Descripción |
|---|---|
| React | Biblioteca para interfaces de usuario |
| TypeScript | Tipado estático |
| Vite | Entorno de desarrollo y compilación |
| Tailwind CSS | Diseño y estilos |
| React Router DOM | Gestión de rutas |
| Lucide React | Biblioteca de iconos |
| ESLint | Análisis estático y calidad del código |
| Git | Control de versiones |
| GitHub | Repositorio de código |

## Arquitectura del proyecto

```text
mi-web-personal/
│
├── public/
│   ├── images/
│   ├── icons/
│   └── documents/
│
├── src/
│   │
│   ├── app/
│   │   ├── App.tsx
│   │   ├── MainLayout.tsx
│   │   └── router.tsx
│   │
│   ├── assets/
│   │
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.tsx
│   │   │   └── Footer.tsx
│   │   └── ui/
│   │
│   ├── modules/
│   │   ├── home/
│   │   ├── experience/
│   │   ├── projects/
│   │   ├── cybersecurity/
│   │   ├── research/
│   │   ├── skills/
│   │   └── contact/
│   │
│   ├── config/
│   ├── hooks/
│   ├── services/
│   ├── types/
│   ├── utils/
│   │
│   ├── main.tsx
│   ├── index.css
│   └── App.css
│
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── tsconfig.json
└── vite.config.ts
```

## Módulos del portafolio

### 1. Inicio
Presentación profesional, descripción y enlaces de contacto.

### 2. Perfil profesional
Información personal, formación académica y especialidades.

### 3. Experiencia profesional
Trayectoria laboral, cargos, responsabilidades y conocimientos adquiridos.

### 4. Proyectos
Exposición de soluciones y aplicaciones desarrolladas.

Proyectos destacados:

- Agente inteligente de riesgos cibernéticos basado en inteligencia artificial generativa.
- SISCOMITE: Sistema de Gestión de Comités de Créditos.
- Soluciones y automatización tecnológica.

### 5. Ciberseguridad
Conocimientos, herramientas y soluciones relacionadas con seguridad de la información y gestión de riesgos.

### 6. Investigación
Investigaciones académicas, publicaciones y trabajos tecnológicos.

### 7. Habilidades
Lenguajes de programación, frameworks, bases de datos y herramientas tecnológicas.

### 8. Contacto
Canales de comunicación y oportunidades de colaboración profesional.

## Identidad visual

El proyecto utiliza una interfaz moderna con temática oscura.

| Elemento | Color |
|---|---|
| Fondo principal | #0F172A |
| Fondo secundario | #111B30 |
| Tarjetas | #171E31 |
| Color principal | #22D3EE |
| Texto principal | #FFFFFF |
| Texto secundario | #94A3B8 |
| Bordes | #263248 |

## Instalación y ejecución

### Requisitos

- Node.js
- npm
- Git
- Visual Studio Code

### 1. Clonar el repositorio

```bash
git clone URL_DEL_REPOSITORIO
```

### 2. Ingresar al proyecto

```bash
cd mi-web-personal
```

### 3. Instalar dependencias

```bash
npm install
```

### 4. Ejecutar en desarrollo

```bash
npm run dev
```

Aplicación disponible normalmente en:

```text
http://localhost:5173
```

## Validación del código

Ejecutar ESLint:

```bash
npx eslint src
```

Corregir automáticamente los problemas que puedan resolverse:

```bash
npx eslint src --fix
```

## Compilación para producción

```bash
npm run build
```

Los archivos de producción se generan en:

```text
dist/
```

## Control de versiones

El proyecto utiliza Git para gestionar los cambios y mantener un historial de desarrollo.

```bash
git add .
git commit -m "Descripción de los cambios"
git push
```

## Roadmap de desarrollo

- [x] Configuración inicial de React y TypeScript.
- [x] Configuración de Vite.
- [x] Integración de Tailwind CSS.
- [x] Configuración de React Router.
- [x] Arquitectura modular inicial.
- [x] Header y Footer.
- [x] Presentación profesional.
- [x] Sección Sobre mí.
- [x] Módulo de experiencia profesional.
- [x] Primera versión del módulo de proyectos.
- [ ] Páginas individuales de proyectos.
- [ ] Módulo de habilidades tecnológicas.
- [ ] Módulo de investigación.
- [ ] Módulo de contacto funcional.
- [ ] Integración con backend y base de datos.
- [ ] Panel administrativo.
- [ ] Despliegue en producción.

## Autor

**Esteban Apaza Ticona**

Ingeniero de Sistemas e Informática.

Áreas de interés:

- Ciberseguridad.
- Gestión de riesgos tecnológicos y financieros.
- Desarrollo de software.
- Inteligencia artificial generativa.
- Arquitectura de soluciones tecnológicas.

---

*Desarrollado con React, TypeScript y tecnologías modernas para construir soluciones digitales.*