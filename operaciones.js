const fs = require('fs');

// Función para registrar una nueva cita
function registrar(nombre, edad, animal, color, enfermedad) {
    // Lee el archivo citas.json
    fs.readFile('./citas.json', 'utf8', (err, data) => {
        if (err) {
            console.log("Error al leer el archivo citas.json:", err);
            return;
        }
        
        let citas = JSON.parse(data || '[]'); // Si el archivo está vacío, empieza con un array vacío

        // Crea el nuevo objeto cita
        const nuevaCita = {
            nombre: nombre,
            edad: edad,
            animal: animal,
            color: color,
            enfermedad: enfermedad
        };

        // Agrega la nueva cita al array
        citas.push(nuevaCita);

        // Escribe el array actualizado en el archivo citas.json
        fs.writeFile('./citas.json', JSON.stringify(citas, null, 2), (err) => {
            if (err) {
                console.log("Error al escribir en citas.json:", err);
            } else {
                console.log("Cita registrada con éxito.");
            }
        });
    });
}

// Función para leer y mostrar todas las citas
function leer() {
    fs.readFile('./citas.json', 'utf8', (err, data) => {
        if (err) {
            console.log("Error al leer el archivo citas.json:", err);
            return;
        }
        
        const citas = JSON.parse(data || '[]'); // Si el archivo está vacío, empieza con un array vacío

        if (citas.length === 0) {
            console.log("No hay citas registradas.");
        } else {
            console.log("Citas registradas:");
            citas.forEach((cita, index) => {
                console.log(`${index + 1}. Nombre: ${cita.nombre}, Edad: ${cita.edad}, Animal: ${cita.animal}, Color: ${cita.color}, Enfermedad: ${cita.enfermedad}`);
            });
        }
    });
}

module.exports = { registrar, leer };
