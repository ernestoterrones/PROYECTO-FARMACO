# FarmacoTinder - Estructura del Proyecto

## 📋 Descripción General
FarmacoTinder es una aplicación educativa interactiva que enseña sobre farmacología mediante un sistema de "matching" estilo Tinder, donde los usuarios seleccionan los medicamentos más apropiados para casos clínicos específicos.

## 📁 Estructura de Carpetas

```
FarmacoTinder-main/
├── 📄 index.html                 # Página de inicio
├── 📄 juego.html                 # Juego principal
├── 📄 grupo_farmacologico.html   # Búsqueda por grupo farmacológico
├── 📄 especialidad_clinica.html  # Búsqueda por especialidad clínica
├── 📄 modo_mixto.html            # Modo mixto (3 casos aleatorios)
├── 📄 README.md                  # Documentación general
├── 📄 PROJECT_STRUCTURE.md       # Este archivo
│
├── 📁 assets/                    # Recursos del proyecto
│   └── 📁 images/                # Todas las imágenes (13 archivos)
│       ├── michigato.png         # Mascota del proyecto
│       ├── Logo_ayudantia.png    # Logo
│       └── *.png                 # Imágenes de medicamentos
│
├── 📁 css/                       # Estilos centralizados
│   └── 📄 styles.css             # Hoja de estilos principal
│
├── 📁 js/                        # Lógica de negocio
│   └── 📄 modo-mixto.js          # Funciones del juego modo mixto
│
└── 📁 data/                      # Datos estructurados
    └── 📄 casos-clinicos.json    # Base de datos de casos
```

## 🎯 Estructura de Archivos Principales

### HTML Files (Vistas)
- **index.html**: Pantalla de inicio con opciones de juego
- **modo_mixto.html**: Juego con 3 casos clínicos aleatorios (LIMPIO - 56 líneas)
- **juego.html**: Juego de cardiología
- **grupo_farmacologico.html**: Filtro por grupo
- **especialidad_clinica.html**: Filtro por especialidad

### CSS (Estilos)
- **styles.css**: Estilos centralizados (415 líneas)
  - Sistema de gradientes profesional
  - Componentes reutilizables (.card-perfil, .btn-decision, etc.)
  - Animaciones (slideUp, slideIn, fadeIn)
  - Media queries (responsive design)
  - Fuentes: Sora + Outfit desde Google Fonts

### JavaScript (Lógica)
- **modo-mixto.js**: Lógica del juego (JavaScript moderno)
  - `cargarDatos()`: Carga JSON asincrónico
  - `irAMatch()`: Inicia el juego
  - `mostrarPerfil()`: Renderiza tarjetas
  - `decidir(acepta)`: Procesa decisiones

### JSON (Datos)
- **casos-clinicos.json**: 3 casos clínicos con estructura:
  ```json
  {
    "casos": [
      {
        "id": 1,
        "categoria": "Ansiolíticos",
        "descripcion": "...",
        "perfiles": [
          {
            "nombre": "...",
            "bio": "...",
            "atributos": "...",
            "redflag": "...",
            "foto": "Filename.png",
            "esCorrecto": true/false
          }
        ]
      }
    ]
  }
  ```

### Imágenes (14 archivos)
- **Mascota**: michigato.png
- **Logo**: Logo_ayudantia.png
- **Medicamentos**: 
  - Ansiolíticos: Diazepam.png, Alprazolam.png, Lorazepam.png
  - Cardiología: IECA.png, ARAII.png, Furosemida.png
  - AINEs: Diclofenaco.png, Ketorolaco.png, Celecoxib.png
  - Otros: Tiazina.png, tu-imagen-aqui.png

## 🎨 Sistema de Diseño

### Colores
- **Gradiente Primario**: #667eea → #764ba2 (púrpura)
- **Éxito/Aceptar**: #2ecc71 → #27ae60 (verde)
- **Error/Rechazar**: #ff6b6b → #ee5a52 (rojo)

### Tipografía
- **Headers**: Outfit (700)
- **Body**: Sora (400-700)

### Componentes
- `.header`: Barra de navegación profesional
- `.card-perfil`: Tarjetas de medicamentos
- `.btn-decision`: Botones circulares (sí/no)
- `.btn-start`: Botones de inicio

## 🔄 Flujo de Datos

```
modo_mixto.html
    ↓
cargarDatos() → ../data/casos-clinicos.json
    ↓
mostrarPerfil() → renderiza <img src="../assets/images/X.png">
    ↓
decidir() → procesa respuesta
```

## ✅ Características de Organización

### ✓ Separación de Responsabilidades
- **HTML**: Solo estructura (56 líneas en modo_mixto.html)
- **CSS**: Todos los estilos centralizados
- **JS**: Lógica de negocio pura
- **JSON**: Datos estructurados

### ✓ Rutas Relativas Correctas
- De `/modo_mixto.html` → `/css/styles.css`
- De `/js/modo-mixto.js` → `../data/casos-clinicos.json`
- De `/js/modo-mixto.js` → `../assets/images/X.png`

### ✓ Reutilización de Código
- CSS compartido en `styles.css`
- Componentes HTML reutilizables
- JSON estructurado para facilitar mantenimiento

## 📊 Estadísticas

| Métrica | Valor |
|---------|-------|
| Líneas HTML (modo_mixto.html) | 56 |
| Líneas CSS | 415 |
| Líneas JS | ~100 |
| Imágenes | 14 PNG |
| Casos clínicos | 3 |
| Total de medicamentos | 9 |

## 🚀 Próximos Pasos

1. Aplicar misma estructura a otros HTML files
2. Crear módulos JS compartidos
3. Expandir JSON con más casos
4. Agregar más imágenes optimizadas

---
**Versión**: 1.0  
**Estado**: ✅ Completo y Organizado  
**Última actualización**: 2024
