const regionesYComunas = [
  {
    region: "Valparaíso",
    comunas: ["Viña del Mar", "Valparaíso", "Quilpué", "Villa Alemana", "Concón"]
  },
  {
    region: "Región Metropolitana",
    comunas: ["Santiago", "Providencia", "Las Condes", "Ñuñoa", "Maipú", "La Florida"]
  },
  {
    region: "Biobío",
    comunas: ["Concepción", "Talcahuano", "San Pedro de la Paz", "Chillán"]
  }
];

function cargarRegionesYComunas(idSelectRegion, idSelectComuna) {
  const selectRegion = document.getElementById(idSelectRegion);
  const selectComuna = document.getElementById(idSelectComuna);
  if (!selectRegion || !selectComuna) return;

  selectRegion.innerHTML = '<option value="">Selecciona una región</option>';
  selectComuna.innerHTML = '<option value="">Selecciona una comuna</option>';

  regionesYComunas.forEach((item) => {
    const option = document.createElement("option");
    option.value = item.region;
    option.textContent = item.region;
    selectRegion.appendChild(option);
  });

  selectRegion.addEventListener("change", () => {
    const regionSeleccionada = selectRegion.value;
    selectComuna.innerHTML = '<option value="">Selecciona una comuna</option>';

    const encontrada = regionesYComunas.find((r) => r.region === regionSeleccionada);
    if (encontrada) {
      encontrada.comunas.forEach((comuna) => {
        const option = document.createElement("option");
        option.value = comuna;
        option.textContent = comuna;
        selectComuna.appendChild(option);
      });
    }
  });
}