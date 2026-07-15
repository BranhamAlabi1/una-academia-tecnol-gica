document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("formEvento");
  const formMessage = document.getElementById("formMessage");

  const eventos = JSON.parse(localStorage.getItem("eventos")) || [];

  if (eventos.length > 0) {
    const ultimo = eventos[eventos.length - 1];

    document.getElementById("codigo").value = ultimo.codigo;
    document.getElementById("nombre").value = ultimo.nombre;
    document.getElementById("lugar").value = ultimo.lugar;
    document.getElementById("categoria").value = ultimo.categoria;
    document.getElementById("fecha").value = ultimo.fecha;
    document.getElementById("hora").value = ultimo.hora;
    document.getElementById("cupos").value = ultimo.cupo;
    document.getElementById("descripcion").value = ultimo.descripcion;
  }

  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const datos = {
      codigo: document.getElementById("codigo").value.trim(),
      nombre: document.getElementById("nombre").value.trim(),
      lugar: document.getElementById("lugar").value.trim(),
      categoria: document.getElementById("categoria").value.trim(),
      fecha: document.getElementById("fecha").value,
      hora: document.getElementById("hora").value,
      cupo: document.getElementById("cupos").value.trim(),
      descripcion: document.getElementById("descripcion").value.trim(),
    };

    if (
      datos.codigo === "" ||
      datos.nombre === "" ||
      datos.lugar === "" ||
      datos.categoria === "" ||
      datos.fecha === "" ||
      datos.hora === "" ||
      datos.cupo === "" ||
      datos.descripcion === ""
    ) {
      formMessage.textContent = "Por favor, completa todos los campos.";
      formMessage.style.color = "#d32f2f";
    } else if (Number(datos.cupo) <= 0) {
      formMessage.textContent = "El número de cupos debe ser mayor que cero.";
      formMessage.style.color = "#d32f2f";
    } else {
      let eventos = JSON.parse(localStorage.getItem("eventos")) || [];
      eventos.push(datos);
      localStorage.setItem("eventos", JSON.stringify(eventos));

      formMessage.textContent = "¡Formulario enviado con éxito!";
      formMessage.style.color = "#388e3c";
      location.reload();
      form.reset();
    }
  });

  const tabla = document.getElementById("eventosTableBody");

  tabla.innerHTML = "";

  eventos.forEach((datos) => {
    const fila = document.createElement("tr");
    fila.innerHTML = `
  <td>${datos.codigo}</td>
  <td>${datos.nombre}</td>
  <td>${datos.lugar}</td>
  <td>${datos.categoria}</td>
  <td>${datos.fecha}</td>
  <td>${datos.hora}</td>
  <td>${datos.cupo}</td>
  <td>${datos.descripcion}</td>
`;
    tabla.appendChild(fila);
  });
});
