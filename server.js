
const express = require("express");

let app = express();

const PORT = procces.env.PORT || 3000;

app.use(express.static('public'));
app.listen(PORT, function() {
	console.log("corriendo en el puerto 1000")
});