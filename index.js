const tablaPersonas = document.getElementById("tablaPersona");

const registrarPersona = () => {
  if (validarPersona()) {
    const cedula = document.getElementById("cedula").value;
    if (cedula_Validacion(cedula)) {
      alert("Este usuario ya ha sido registrado");
    } else {
      const nombre = document.getElementById("nombre").value.trim();
      const apellido = document.getElementById("apellido").value.trim();
      const pais = document.getElementById("pais").value.trim();
      const ciudad = document.getElementById("ciudad").value.trim();
      const direccion = document.getElementById("direccion").value.trim();
      const edad = document.getElementById("edad").value.trim();
      const telefono = document.getElementById("telefono").value.trim();
      tablaPersonas.innerHTML +=
        "<tr><td>" +
        nombre +
        "</td><td>" +
        apellido +
        "</td><td>" +
        pais +
        "</td><td>" +
        ciudad +
        "</td><td>" +
        direccion +
        "</td><td>" +
        cedula +
        "</td><td>" +
        edad +
        "</td><td>" +
        telefono +
        "</td></tr>";

      const nuevaPersona = {
        nombre: nombre,
        apellido: apellido,
        pais: pais,
        ciudad: ciudad,
        direccion: direccion,
        cedula: cedula,
        edad: edad,
        telefono: telefono,
      };
      persona.push(nuevaPersona);
    }
  }
};

const listarPersona = () => {
  let contenido = "";
  for (let i = 0; i < persona.length; i++) {
    contenido +=
      "<tr><td>" +
      persona[i].nombre +
      "</td><td>" +
      persona[i].apellido +
      "</td><td>" +
      persona[i].pais +
      "</td><td>" +
      persona[i].ciudad +
      "</td><td>" +
      persona[i].direccion +
      "</td><td>" +
      persona[i].cedula +
      "</td><td>" +
      persona[i].edad +
      "</td><td>" +
      persona[i].telefono +
      "</td></tr>";
  }
  tablaPersonas.innerHTML = contenido;
};
console.log("");

const cedula_Validacion = (cedula) => {
  for (let i = 0; i < persona.length; i++) {
    console.log(cedula);
    console.log(persona[i].cedula);
    if (cedula == persona[i].cedula) {
      return true;
    }
  }
  return false;
};

const validarPersona = () => {
  const nombre = document.getElementById("nombre").value;
  const apellido = document.getElementById("apellido").value;
  const pais = document.getElementById("pais").value;
  const ciudad = document.getElementById("ciudad").value;
  const direccion = document.getElementById("direccion").value;
  const cedula = document.getElementById("cedula").value;
  const edad = document.getElementById("edad").value;
  const telefono = document.getElementById("telefono").value;

  if (
    !nombre ||
    !apellido ||
    !pais ||
    !ciudad ||
    !direccion ||
    !cedula ||
    !edad ||
    !telefono
  ) {
    alert("Campos incompletos!");
    return false;
  } else {
    return true;
  }
};

function validacionLetras(e) {
  var key = e.keyCode || e.which,
    tecla = String.fromCharCode(key).toLowerCase(),
    letras =
      " áéíóúabcdefghijklmnñopqrstuvwxyzABCDEFGHIJKLMNÑOPQRSTUVWXYZÁÉÍÓÚ",
    especiales = [8, 37, 39, 46],
    tecla_especial = false;

  for (var i in especiales) {
    if (key == especiales[i]) {
      tecla_especial = true;
      break;
    }
  }

  if (letras.indexOf(tecla) == -1 && !tecla_especial) {
    return false;
  }
}

function valideKeyNumber(evt) {
  var code = evt.which ? evt.which : evt.keyCode;

  if (code == 8) {
    return true;
  } else if (code >= 48 && code <= 57) {
    return true;
  } else {
    return false;
  }
}

const persona = [
  {
    nombre: "Andres",
    apellido: "Felipe",
    cedula: 1001818460,
    ciudad: "Del Cairo",
    direccion: "Calle Las Bandidas",
    telefono: "1-202728-2330",
    pais: "Wakanda",
    edad: 21,
  },
  {
    nombre: "Messi",
    apellido: "Ronaldo",
    cedula: 1001818461,
    ciudad: "Barranquilla",
    direccion: "742 de Evergreen Terrace",
    telefono: "018000930930",
    pais: "Colombia",
    edad: 21,
  },
  {
    nombre: "Frailejon",
    apellido: "Ernesto Pérez",
    cedula: 1001818462,
    ciudad: "Olaya",
    direccion: "Av. Siempreviva 742",
    telefono: "018000800800",
    pais: "España",
    edad: 21,
  },
  {
    nombre: "Pancracio",
    apellido: "Jose",
    cedula: 1001818463,
    ciudad: "Cali",
    direccion: "2375 Pennsylvania Av",
    telefono: "001 202-4520100",
    pais: "Nicaragua",
    edad: 21,
  },
];
