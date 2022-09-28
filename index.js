const tablaPersonas = document.getElementById("tablaPersona");

const registrarPersona = () => {
  if (validarPersona()) {
    const cedula = document.getElementById("cedula").value;
    if (cedula_Validacion(cedula)) {
      alert("Este usuario ya ha sido registrado");
    } else {
      const nombre = document.getElementById("nombre").value;
      const apellido = document.getElementById("apellido").value;
      const pais = document.getElementById("pais").value;
      const ciudad = document.getElementById("ciudad").value;
      const direccion = document.getElementById("direccion").value;
      const edad = document.getElementById("edad").value;
      const telefono = document.getElementById("telefono").value;
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

      const nuevoUsuario = {
        nombre: nombre,
        apellido: apellido,
        pais: pais,
        ciudad: ciudad,
        direccion: direccion,
        cedula: cedula,
        edad: edad,
        telefono: telefono,
      };
      usuarios.push(nuevoUsuario);
    }
  }
};

const listarPersona = () => {
  let contenido = "";
  for (let i = 0; i < usuarios.length; i++) {
    contenido +=
      "<tr><td>" +
      usuarios[i].nombre +
      "</td><td>" +
      usuarios[i].apellido +
      "</td><td>" +
      usuarios[i].pais +
      "</td><td>" +
      usuarios[i].ciudad +
      "</td><td>" +
      usuarios[i].direccion +
      "</td><td>" +
      usuarios[i].cedula +
      "</td><td>" +
      usuarios[i].edad +
      "</td><td>" +
      usuarios[i].telefono +
      "</td></tr>";
  }
  tablaPersonas.innerHTML = contenido;
};
console.log("");

const cedula_Validacion = (cedula) => {
  for (let i = 0; i < usuarios.length; i++) {
    console.log(cedula);
    console.log(usuarios[i].cedula);
    if (cedula == usuarios[i].cedula) {
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
    alert("Debe Llenar Campos Faltantes");
    return false;
  } else {
    return true;
  }
};

const usuarios = [
  {
    nombre: "Andres",
    apellido: "Felipe",
    cedula: 1001818460,
    ciudad: "Del Cairo",
    direccion: "Calle 72 #35-25",
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
