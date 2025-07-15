const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
	  res.send("¡Actualizado desde docker en GitHub Action y Desplegado en Azure! Ahora hay que ver como hacer esto mas automatico");
});

app.listen(port, () => {
	  console.log(`Servidor corriendo en http://localhost:${port}`);
});
