function buscar() {
  const name = document.getElementById("nameInput").value;
  const resultado = document.getElementById("resultado");

  fetch(`http://localhost:3000/characters/${name}`)
    .then(res => {
      if (!res.ok) {
        throw new Error("No encontrado");
      }
      return res.json();
    })
    .then(data => {
      const character = data[0];

      resultado.innerHTML = `
        <h2>${character.name}</h2>
        <p>Status: ${character.status}</p>
        <p>Species: ${character.species}</p>
        <p>Gender: ${character.gender}</p>
        <p>Origin: ${character.origin.name}</p>
        <img src="${character.image}" />
      `;
    })
    .catch(() => {
      resultado.innerHTML = "<p>Personaje no encontrado</p>";
    });
}