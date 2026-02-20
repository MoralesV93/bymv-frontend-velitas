# Locales Velita

Sitio web elegante y responsive para un negocio familiar de locales para eventos. Diseñado para bodas, comuniones, cumpleaños y eventos corporativos.

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)
![Terraform](https://img.shields.io/badge/Terraform-7B42BC?style=flat&logo=terraform&logoColor=white)
![AWS](https://img.shields.io/badge/AWS-232F3E?style=flat&logo=amazonaws&logoColor=white)

## Estructura del Proyecto

```
bymv-frontend-velitas/
├── .github/
│   ├── CODEOWNERS                    # Propietarios del codigo
│   ├── PULL_REQUEST_TEMPLATE.md      # Plantilla para PRs
│   └── workflows/
│       ├── test.yml                  # Validacion HTML y links
│       ├── release.yml               # Etiquetado de releases
│       └── deploy.yml                # Deploy a S3 + CloudFront
├── app/
│   └── www/                          # Codigo fuente del sitio
│       ├── index.html                # Pagina principal
│       ├── css/
│       │   └── styles.css            # Estilos
│       ├── js/
│       │   ├── config.js             # ⭐ Configuracion editable
│       │   └── main.js               # Logica de la aplicacion
│       ├── images/                   # Imagenes locales
│       ├── package.json              # Dependencias (html-validate)
│       ├── Dockerfile                # Contenedor nginx
│       └── .dockerignore
├── infra/
│   └── www/
│       └── velitas/                  # Configuracion Terraform
│           ├── main.tf               # Modulo CloudFront + S3
│           ├── variables.tf          # Variables
│           ├── locals.tf             # Valores locales
│           ├── s3.tf                 # Outputs S3
│           ├── iam.tf                # Politica IAM para deploy
│           ├── data.tf               # Data sources
│           ├── outputs.tf            # Outputs
│           ├── terragrunt.hcl        # Config Terragrunt
│           └── terraform.tfvars.example
├── root.hcl                          # Terragrunt root config
├── atlantis.yaml                     # Atlantis IaC automation
├── .gitignore
└── README.md
```

## Inicio Rapido

### Desarrollo Local

```bash
# Clonar repositorio
git clone https://github.com/MoralesV93/bymv-frontend-velitas.git
cd bymv-frontend-velitas

# Abrir sitio en navegador
open app/www/index.html

# O usar Docker
cd app/www
docker build -t locales-velita .
docker run -p 8080:80 locales-velita
```

### Validar HTML

```bash
cd app/www
npm install
npm run lint
```

## Personalizacion

Todo el contenido se gestiona desde **`app/www/js/config.js`**:

| Seccion | Que puedes cambiar |
|---------|-------------------|
| `business` | Nombre, telefono, email, direccion |
| `navigation` | Enlaces del menu y boton CTA |
| `hero` | Titulo, subtitulo, descripcion, botones |
| `venues` | Nombres, descripciones, caracteristicas |
| `events` | Tipos de eventos |
| `gallery` | Imagenes |
| `booking` | Formulario de contacto |
| `footer` | Redes sociales, copyright |

## Infraestructura (AWS)

### Arquitectura

```
                    ┌─────────────────┐
                    │   Route 53      │
                    │   (DNS)         │
                    └────────┬────────┘
                             │
                    ┌────────▼────────┐
                    │   CloudFront    │
                    │   (CDN + HTTPS) │
                    └────────┬────────┘
                             │
                    ┌────────▼────────┐
                    │   S3 Bucket     │
                    │   /current      │
                    │   /releases/*   │
                    └─────────────────┘
```

### Configuracion Terraform

1. Copiar variables de ejemplo:
```bash
cd infra/www/velitas
cp terraform.tfvars.example terraform.tfvars
```

2. Editar `terraform.tfvars` con tus valores:
```hcl
aliases           = ["tudominio.com", "www.tudominio.com"]
acm_certification = "arn:aws:acm:us-east-1:..."
route_53_zone_id  = "Z..."
```

3. Aplicar con Terragrunt:
```bash
terragrunt init
terragrunt plan
terragrunt apply
```

## CI/CD Workflows

### Flujo de Deployment

```
1. Feature Branch → PR (test.yml valida HTML/links)
        │
        ▼ (merge)
2. Create release/X.X.X → PR to main
        │
        ▼ (merge)
3. release.yml:
   • Sync app/www → s3://bucket/releases/{version}
   • Create git tag
        │
        ▼
4. deploy.yml:
   • Sync releases/{version} → current/
   • Invalidate CloudFront
   • Create GitHub Release
```

### Secrets Requeridos

Configurar en GitHub Settings → Secrets:

| Secret | Descripcion |
|--------|-------------|
| `AWS_ACCESS_KEY_ID` | AWS access key |
| `AWS_SECRET_ACCESS_KEY` | AWS secret key |
| `S3_BUCKET_NAME` | Nombre del bucket S3 |
| `CLOUDFRONT_DISTRIBUTION_ID` | ID de distribucion CloudFront |

## Tecnologias

### Frontend
- **HTML5** - Estructura semantica
- **CSS3** - Custom properties, Flexbox, Grid
- **JavaScript** - Vanilla JS (ES6+)
- **Google Fonts** - Playfair Display, Lato

### Infraestructura
- **Terraform** - Infrastructure as Code
- **Terragrunt** - DRY Terraform configurations
- **AWS S3** - Almacenamiento estatico
- **AWS CloudFront** - CDN y HTTPS
- **AWS Route 53** - DNS
- **AWS ACM** - Certificados SSL
- **Atlantis** - Automatizacion IaC

### CI/CD
- **GitHub Actions** - Pipelines
- **html-validate** - Linting HTML
- **Lychee** - Validacion de links

## Estructura de Ramas

```
main                      # Produccion
├── feature/*             # Nuevas funcionalidades
├── fix/*                 # Correcciones
└── release/*             # Preparacion de releases
```

## Licencia

Este proyecto es de uso privado para Locales Velita.

---

Desarrollado con ❤️ por [Byron Morales](https://github.com/MoralesV93)
