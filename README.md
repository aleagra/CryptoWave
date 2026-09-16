<div align="center">
  # CryptoWave
  **Plataforma moderna de seguimiento de criptomonedas en tiempo real, análisis técnico de mercado y simulación de trading.**

  <p align="center">
    <a href="https://cryptowave.web.app/" target="_blank">
      <img src="https://img.shields.io/badge/Demo-En_Línea-22C55E?style=for-the-badge&logo=google-chrome&logoColor=white" alt="Live Demo" />
    </a>
    <a href="https://github.com/aleagra/CryptoWave/stargazers">
      <img src="https://img.shields.io/github/stars/aleagra/CryptoWave?style=for-the-badge&color=yellow" alt="Stars" />
    </a>
    <a href="https://github.com/aleagra/CryptoWave/network/members">
      <img src="https://img.shields.io/github/forks/aleagra/CryptoWave?style=for-the-badge&color=blue" alt="Forks" />
    </a>
    <a href="https://github.com/aleagra/CryptoWave/blob/main/LICENSE">
      <img src="https://img.shields.io/badge/Licencia-ISC-green?style=for-the-badge" alt="License" />
    </a>
  </p>

  <p align="center">
    <img src="https://img.shields.io/badge/React_18-20232A?style=flat-square&logo=react&logoColor=61DAFB" alt="React" />
    <img src="https://img.shields.io/badge/Vite_7-646CFF?style=flat-square&logo=vite&logoColor=white" alt="Vite" />
    <img src="https://img.shields.io/badge/Tailwind_CSS_v4-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white" alt="Tailwind CSS" />
    <img src="https://img.shields.io/badge/Framer_Motion-0055FF?style=flat-square&logo=framer&logoColor=white" alt="Framer Motion" />
    <img src="https://img.shields.io/badge/Firebase_Hosting-FFCA28?style=flat-square&logo=firebase&logoColor=black" alt="Firebase" />
    <img src="https://img.shields.io/badge/CryptoCompare_API-FF6F00?style=flat-square&logo=binance&logoColor=white" alt="CryptoCompare API" />
  </p>

  <p align="center">
    <a href="#-características-principales">Características</a> •
    <a href="#-stack-tecnológico">Tecnologías</a> •
    <a href="#-instalación-y-uso">Instalación</a> •
    <a href="#-estructura-del-proyecto">Estructura</a> •
    <a href="#-despliegue">Despliegue</a> •
    <a href="#-autor-y-contacto">Contacto</a>
  </p>

</div>

---

## 📖 Descripción General

**CryptoWave** es una aplicación web interactiva de alto rendimiento diseñada para inversores y entusiastas del ecosistema cripto. Permite monitorear las cotizaciones de las principales criptomonedas del mercado en tiempo real, analizar el comportamiento de precios mediante gráficos vectoriales dinámicos, simular operaciones de compra/venta y gestionar un portafolio de activos con una interfaz oscura (*Dark Mode*) de nivel institucional.

Construida con **React 18**, **Vite**, **Tailwind CSS v4** y **Framer Motion**, CryptoWave ofrece tiempos de carga instantáneos, transiciones fluidas y una experiencia de usuario responsiva en cualquier dispositivo.

---

## ✨ Características Principales

- 📊 **Cotizaciones y Mercado en Tiempo Real**:
  - Integración directa con la API de **CryptoCompare** para obtener el top 100 de criptoactivos por volumen.
  - Tabla de mercado completa con precios en USD, variación porcentual en 24 horas, volumen total y capitalización.
  - Paginación dinámica y estados de carga con esqueletos animados (*skeletons*).

- 📈 **Gráficos Interactivos de Cotización**:
  - Generación de gráficos SVG vectoriales responsivos a partir de datos históricos.
  - Gradientes dinámicos adaptativos (verde para tendencias alcistas, rojo para bajistas).
  - Escala de precios automática y visualización de intervalos horarios.

- ⚡ **Simulador de Trading**:
  - Vista individual para cada criptomoneda con información del activo.
  - Panel interactivo para simular órdenes de **Compra** y **Venta**.
  - Cálculo instantáneo de volumen adquirido, comisiones estimadas (*fees*) y botones de importe preestablecido ($100, $500, $1000).

- 🔍 **Búsqueda Predictiva y Autocompletado**:
  - Barra de búsqueda global en el Navbar con menú desplegable (*SearchDropdown*) en tiempo real.
  - Vista dedicada de resultados (`/search/:buscar`) con tarjetas detalladas de los activos coincidentes.

- 💼 **Panel de Portafolio y Transacciones**:
  - Panel de control (`/exchange`) para visualizar la distribución de activos en cartera.
  - Historial detallado de transacciones recientes con fechas, montos y estados.

- 🎨 **Diseño UI/UX de Vanguardia**:
  - Estética *Fintech Dark Theme* con paleta de colores curada y acento verde esmeralda (`#22C55E`).
  - Animaciones de entrada y transiciones suaves impulsadas por **Framer Motion**.
  - Tipografía moderna con la fuente **Geist** e iconografía nítida con **Lucide React**.

- 📱 **Totalmente Responsivo**:
  - Adaptabilidad fluida desde teléfonos móviles hasta pantallas ultra-wide, incluyendo menú lateral móvil interactivo.

---

## 🛠️ Stack Tecnológico

| Capa | Tecnología | Propósito |
| :--- | :--- | :--- |
| **Framework Base** | [React 18](https://react.dev/) | Biblioteca para construcción de interfaces de usuario interactivas |
| **Empaquetador & Dev** | [Vite 7](https://vitejs.dev/) | Bundler ultrarrápido con Hot Module Replacement (HMR) |
| **Enrutamiento** | [React Router v6](https://reactrouter.com/) | Navegación del lado del cliente (SPA) con parámetros dinámicos |
| **Estilos & Diseño** | [Tailwind CSS v4](https://tailwindcss.com/) | Framework de utilidades CSS moderno de última generación |
| **Animaciones** | [Framer Motion](https://www.framer.com/motion/) | Animaciones declarativas basadas en gestos y scroll |
| **Iconografía** | [Lucide React](https://lucide.dev/) | Paquete de iconos minimalistas y personalizables |
| **Cliente HTTP** | [Axios](https://axios-http.com/) | Consumo de endpoints y gestión de peticiones asíncronas |
| **Fuente de Datos** | [CryptoCompare API](https://min-api.cryptocompare.com/) | API REST de precios, volumen e histórico de criptomonedas |
| **Hosting & Cloud** | [Firebase](https://firebase.google.com/) | Despliegue en CDN global y configuración de servicios |

---

## 📁 Estructura del Proyecto

```text
CryptoWave/
│
├── Client/                             # Código fuente del Frontend
│   ├── public/                         # Archivos estáticos y favicons
│   ├── src/
│   │   ├── componentes/                # Componentes reutilizables y modulares
│   │   │   ├── Exchange/               # Componentes del dashboard de portafolio
│   │   │   ├── Footer/                 # Pie de página general
│   │   │   ├── Home/                   # Secciones de la landing page principal
│   │   │   ├── Market/                 # Tabla de mercado, filtros y paginación
│   │   │   ├── Navbar/                 # Barra de navegación y búsqueda interactiva
│   │   │   ├── Trade/                  # Gráficos SVG y formulario de trading
│   │   │   └── ScrollToTop.jsx         # Helper de scroll automático entre rutas
│   │   │
│   │   ├── context/                    # Estado global con React Context API
│   │   │   └── CoinContext.jsx         # Contexto de cotizaciones y datos de mercado
│   │   │
│   │   ├── hooks/                      # Custom hooks reutilizables
│   │   │   ├── useCoinChart.js         # Obtención y formateo de datos para gráficos
│   │   │   ├── usePagination.js        # Lógica matemática de paginación
│   │   │   └── useSearchCoins.js       # Filtro y búsqueda optimizada de monedas
│   │   │
│   │   ├── pages/                      # Páginas y vistas principales
│   │   │   ├── Homepage.jsx            # Landing page
│   │   │   ├── Market.jsx              # Vista de mercado global
│   │   │   ├── Trade.jsx               # Vista de trading y gráfico individual
│   │   │   ├── Exchange.jsx            # Panel de control y portafolio
│   │   │   ├── Search.jsx              # Vista de resultados de búsqueda
│   │   │   ├── Login.jsx               # Inicio de sesión
│   │   │   └── Register.jsx            # Registro de cuenta
│   │   │
│   │   ├── utilities/                  # Iconos SVG y funciones auxiliares
│   │   ├── App.jsx                     # Configuración de rutas principales
│   │   ├── firebase.jsx                # Inicialización de Firebase
│   │   └── main.jsx                    # Punto de entrada de la aplicación
│   │
│   ├── .env.example                    # Plantilla de variables de entorno
│   ├── firebase.json                   # Configuración de Firebase Hosting
│   ├── package.json                    # Dependencias y scripts del proyecto
│   └── vite.config.js                  # Configuración de Vite y plugins
│
└── README.md                           # Documentación principal del repositorio
```

---

## 🚀 Instalación y Uso Local

Sigue estos sencillos pasos para clonar y ejecutar el proyecto en tu entorno local:

### 1. Requisitos Previos

- [Node.js](https://nodejs.org/) (versión 18 o superior recomendada)
- Gestor de paquetes `npm`, `yarn` o `pnpm`
- Clave de API gratuita de [CryptoCompare](https://min-api.cryptocompare.com/)

### 2. Clonar el Repositorio

```bash
git clone https://github.com/aleagra/CryptoWave.git
cd CryptoWave/Client
```

### 3. Instalar Dependencias

```bash
npm install
```

### 4. Configurar Variables de Entorno

Crea un archivo `.env` dentro de la carpeta `Client/` basándote en `.env.example`:

```bash
cp .env.example .env
```

Abre `.env` y agrega tu clave de CryptoCompare:

```env
VITE_CRYPTO_API_KEY=tu_api_key_aqui
```

### 5. Iniciar el Servidor de Desarrollo

```bash
npm run dev
```

La aplicación estará disponible de inmediato en:
👉 `http://localhost:5173/`

---

## 📦 Scripts Disponibles

En el directorio `Client/`, puedes ejecutar:

| Comando | Acción |
| :--- | :--- |
| `npm run dev` | Inicia el servidor de desarrollo local con recarga en caliente (*HMR*). |
| `npm run build` | Compila y empaqueta la aplicación optimizada para producción en `Client/dist`. |
| `npm run preview` | Previsualiza localmente el paquete de producción generado. |

---

## ☁️ Despliegue

La aplicación está preparada para ser desplegada en **Firebase Hosting**:

1. Instala Firebase CLI si no lo tienes:
   ```bash
   npm install -g firebase-tools
   ```
2. Inicia sesión en tu cuenta de Firebase:
   ```bash
   firebase login
   ```
3. Compila la aplicación:
   ```bash
   npm run build
   ```
4. Despliega a Firebase:
   ```bash
   firebase deploy
   ```

---

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Si deseas colaborar:

1. Realiza un **Fork** del proyecto.
2. Crea una rama para tu feature (`git checkout -b feature/NuevaCaracteristica`).
3. Realiza tus cambios y haz commit (`git commit -m 'feat: agrega nueva característica'`).
4. Sube tus cambios a tu repositorio (`git push origin feature/NuevaCaracteristica`).
5. Abre un **Pull Request**.

---

## 📄 Licencia

Distribuido bajo la Licencia **ISC**. Consulta el archivo [LICENSE](LICENSE) para más información.

---

## 👤 Autor y Contacto

Desarrollado con dedicación por **[aleagra](https://github.com/aleagra)**.

- **GitHub:** [@aleagra](https://github.com/aleagra)
- **Demo del Proyecto:** [CryptoWave en Vivo](https://cryptowave.web.app/)

---

<div align="center">
  <sub>⭐ Si este proyecto te resulta útil, ¡no olvides dejarle una estrella en GitHub!</sub>
</div>
