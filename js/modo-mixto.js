// Cargar datos de casos desde JSON
let baseDeDatosMixta = [];
let indiceCasoAleatorio = 0;
let casoActual = {};
let indiceActual = 0;
let perfilesActuales = [];

// Cargar datos al iniciar
async function cargarDatos() {
  try {
    const response = await fetch('data/casos-clinicosmixto.json');
    const data = await response.json();
    baseDeDatosMixta = data.casos;
    
    indiceCasoAleatorio = Math.floor(Math.random() * baseDeDatosMixta.length);
    casoActual = baseDeDatosMixta[indiceCasoAleatorio];
    perfilesActuales = casoActual.perfiles;
    
    if (casoActual) {
      document.getElementById('titulo-caso').innerText = `Caso: ${casoActual.categoria}`;
      document.getElementById('texto-descripcion').innerText = casoActual.descripcion;
    }
  } catch (error) {
    console.error('Error al cargar datos:', error);
    alert('Error al cargar los datos. Verifica que el archivo JSON exista.');
  }
}

// Iniciar juego
function irAMatch() {
  document.getElementById('pantalla-caso').style.display = 'none';
  document.getElementById('pantalla-tinder').classList.add('active');
  indiceActual = 0;
  perfilesActuales = casoActual.perfiles;
  mostrarPerfil();
}

// Mostrar perfil actual
function mostrarPerfil() {
  const contenedor = document.getElementById('contenedor-tarjetas');
  if (indiceActual >= perfilesActuales.length) {
    contenedor.innerHTML = `
      <div class="completion-message">
        <h2>¡Desafío Completado!</h2>
        <p>Excelente trabajo. Recorriste todas las opciones disponibles para este caso.</p>
        <button class="btn-start" onclick="location.reload()">
          <i class="fas fa-redo"></i> Otro Caso
        </button>
      </div>
    `;
    return;
  }

  const p = perfilesActuales[indiceActual];
  contenedor.innerHTML = `
    <div class="card-perfil" id="tarjeta">
      <div class="card-image">
        <img src="assets/images/${p.foto}" alt="${p.nombre}">
      </div>
      <div class="card-content">
        <div class="card-name">${p.nombre}</div>
        <div class="card-bio">${p.bio}</div>
        <div class="card-attribute">${p.atributos}</div>
        <div class="card-redflag">${p.redflag}</div>
      </div>
    </div>
  `;
}

// Procesar decisión
function decidir(acepta) {
  const tarjeta = document.getElementById('tarjeta');
  if (!tarjeta) return;

  const esCorrecto = perfilesActuales[indiceActual].esCorrecto;
  const nombreMedicamento = perfilesActuales[indiceActual].nombre;

  if (acepta) {
    tarjeta.style.transform = "translateX(120%) rotate(20deg)";
    tarjeta.style.opacity = "0";
    setTimeout(() => {
      if (esCorrecto) {
        Swal.fire({
          title: '✓ ¡Opción Correcta!',
          text: `${nombreMedicamento} es la mejor elección para este caso clínico.`,
          icon: 'success',
          iconColor: '#2ecc71',
          confirmButtonColor: '#667eea',
          confirmButtonText: 'Siguiente',
          customClass: {
            popup: 'swal-custom-popup',
            title: 'swal-title',
            confirmButton: 'swal-btn'
          }
        }).then(() => {
          indiceActual++;
          mostrarPerfil();
        });
      } else {
        Swal.fire({
          title: '✗ Incorrecto',
          text: `No es la mejor opción. ${nombreMedicamento} tiene limitaciones para este caso.`,
          icon: 'error',
          iconColor: '#ff6b6b',
          confirmButtonColor: '#667eea',
          confirmButtonText: 'Siguiente',
          customClass: {
            popup: 'swal-custom-popup',
            title: 'swal-title',
            confirmButton: 'swal-btn'
          }
        }).then(() => {
          indiceActual++;
          mostrarPerfil();
        });
      }
    }, 100);
  } else {
    tarjeta.style.transform = "translateX(-120%) rotate(-20deg)";
    tarjeta.style.opacity = "0";
    setTimeout(() => {
      if (!esCorrecto) {
        Swal.fire({
          title: '✓ ¡Buen Rechazo!',
          text: `Acertaste al rechazar ${nombreMedicamento}. No era la opción adecuada para este caso.`,
          icon: 'success',
          iconColor: '#2ecc71',
          confirmButtonColor: '#667eea',
          confirmButtonText: 'Siguiente',
          customClass: {
            popup: 'swal-custom-popup',
            title: 'swal-title',
            confirmButton: 'swal-btn'
          }
        }).then(() => {
          indiceActual++;
          mostrarPerfil();
        });
      } else {
        Swal.fire({
          title: '✗ ¡Rechazaste la Correcta!',
          text: `${nombreMedicamento} era la mejor opción para este caso clínico. ¡Más cuidado!`,
          icon: 'error',
          iconColor: '#ff6b6b',
          confirmButtonColor: '#667eea',
          confirmButtonText: 'Siguiente',
          customClass: {
            popup: 'swal-custom-popup',
            title: 'swal-title',
            confirmButton: 'swal-btn'
          }
        }).then(() => {
          indiceActual++;
          mostrarPerfil();
        });
      }
    }, 500);
  }
}

// Estilos para SweetAlert
const style = document.createElement('style');
style.textContent = `
  .swal-custom-popup {
    font-family: 'Sora', sans-serif !important;
    border-radius: 24px !important;
    box-shadow: 0 20px 60px rgba(102, 126, 234, 0.3) !important;
    border: 1px solid rgba(102, 126, 234, 0.2) !important;
  }
  .swal-title {
    font-family: 'Outfit', sans-serif !important;
    font-size: 24px !important;
    font-weight: 700 !important;
    color: #1a1a2e !important;
  }
  .swal-custom-popup .swal2-html-container {
    color: #666 !important;
    font-size: 14px !important;
    line-height: 1.6 !important;
  }
  .swal-btn {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%) !important;
    color: white !important;
    font-weight: 600 !important;
    padding: 12px 32px !important;
    border-radius: 10px !important;
    box-shadow: 0 4px 15px rgba(102, 126, 234, 0.3) !important;
    border: none !important;
    transition: all 0.3s ease !important;
  }
  .swal-btn:hover {
    transform: translateY(-2px) !important;
    box-shadow: 0 6px 20px rgba(102, 126, 234, 0.4) !important;
  }
`;
if (document.head) {
  document.head.appendChild(style);
}

// Cargar datos al abrir la página
window.addEventListener('load', cargarDatos);
