const $inputBusqueda = document.querySelector(".search");
const $inputS = document.querySelector("#searchInput");
const $mostrarBusqueda = document.getElementById("suggestions");

$inputBusqueda.addEventListener("click", (e) => {
  $inputS.style.display === "none"
    ? ($inputS.style.display = "flex")
    : ($inputS.style.display = "none");
});
const listaOpciones = [
  "bosque",
  "oceano",
  "deforestacion",
  "ambiente",
  "petroleo",
  "glaciar",
  "glaciares",
  "atanor",
  "contaminacion",
];

$inputS.addEventListener("input", (e) => {
  const searchValue = e.target.value.toLowerCase();
  $mostrarBusqueda.innerHTML = "";
  $mostrarBusqueda.style.display = "none";

  if (searchValue) {
    const opcionIgual = listaOpciones.filter((opc) =>
      opc.toLowerCase().includes(searchValue)
    );
    if (opcionIgual.length > 0) {
      opcionIgual.forEach((id) => {
        const divMostrar = document.createElement("div");
        divMostrar.textContent = id;
        divMostrar.addEventListener("click", () => {
          const elem = document.getElementById(id);
          if (elem) {
            elem.scrollIntoView({ behavior: "smooth" });
            $mostrarBusqueda.style.display = "none";
            $inputS.value = id;
          }
        });
        $mostrarBusqueda.appendChild(divMostrar);
      });
      $mostrarBusqueda.style.display = "block";
    }
  }
});

$inputS.addEventListener("keypress", (e) => {
  if (e.key === "Enter" && $inputS.value.trim() !== "") {
    const opcSearch = $inputS.value.trim();
    const elem = document.getElementById(opcSearch);
    if (elem) {
      elem.scrollIntoView({ behavior: "smooth" });
      $mostrarBusqueda.style.display = "none";
    }
  }
});
