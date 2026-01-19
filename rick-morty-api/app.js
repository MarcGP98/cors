const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

const RICK_MORTY_API = "https://rickandmortyapi.com/api/character";

app.get("/characters", async (req, res) => {
  try {
    const response = await axios.get(RICK_MORTY_API);
    res.json(response.data.results);
  } catch (error) {
    res.status(500).json({ message: "Error obteniendo personajes" });
  }
});

app.get("/characters/:name", async (req, res) => {
  const name = req.params.name;

  try {
    const response = await axios.get(`${RICK_MORTY_API}/?name=${name}`);
    res.json(response.data.results);
  } catch (error) {
    res.status(404).json({ message: "Personaje no encontrado" });
  }
});

app.listen(PORT, () => {
  console.log(`API Rick and Morty escuchando en http://localhost:${PORT}`);
});