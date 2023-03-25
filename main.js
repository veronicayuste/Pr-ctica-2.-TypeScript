"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const persona_1 = require("./persona");
const direccion_1 = require("./direccion");
const mail_1 = require("./mail");
const telefono_1 = require("./telefono");
//Datos Francisca
const primeraResidenciaFrancisca = new direccion_1.Direccion("Calle del Obispo", 28, false, false, 14530, "Montemayor", "Córdoba");
const segundaResidenciaFrancisca = new direccion_1.Direccion("Calle Bolivia", 180, 21, "C", 29017, "Pedregalejo", "Málaga");
const mailFrancisca = new mail_1.Mail("personal", "franciscaperezmunoz@gmail.com");
const telefonoFijoFrancisca = new telefono_1.Telefono("fijo", 957454574);
const telefonoMovilFrancisca = new telefono_1.Telefono("móvil", 697365423);
const datosFrancisca = new persona_1.Persona('Francisca', 'Pérez Muñoz', 36, '78154698N', new Date(1987, 6, 12), 'amarillo', 'mujer', [primeraResidenciaFrancisca, segundaResidenciaFrancisca], [mailFrancisca], [telefonoFijoFrancisca, telefonoMovilFrancisca], "Veranea en la segunda residencia, vivienda habitual primera residencia");
//Datos Antonio 
const primeraResidenciaAntonio = new direccion_1.Direccion("P.º de la Victoria", 59, 5, "D", 14004, "Córdoba", "Córdoba");
const segundaResidenciaAntonio = new direccion_1.Direccion("Rda. de Valencia", 5, 6, "A", 28012, "Madrid", "Madrid");
const mailPersonalAntonio = new mail_1.Mail("personal", "antoniolopez_85@gmail.com");
const mailTrabajoAntonio = new mail_1.Mail("trabajo", "lopezhernandez_antonio@staedtler.com");
const telefonoFijoAntonio = new telefono_1.Telefono("fijo", 957680235);
const telefoMovilAntonioPersonal = new telefono_1.Telefono("móvil", 657328541);
const telefoMovilAntonioTrabajo = new telefono_1.Telefono("móvil", 697356214);
const datosAntonio = new persona_1.Persona('Antonio', 'López Hernández', 38, '56741265L', new Date(1985, 25, 1), 'rojo', 'hombre', [primeraResidenciaAntonio, segundaResidenciaAntonio], [mailPersonalAntonio, mailTrabajoAntonio], [telefonoFijoAntonio, telefoMovilAntonioPersonal, telefoMovilAntonioTrabajo], "Trabaja en la segunda residencia, la primera residencia la tiene alquilada todo el año a estudiantes");
//Datos Olivia
const primeraResidenciaOlivia = new direccion_1.Direccion("Calle Evangelista", 49, 7, "C", 41010, "Sevilla", "Sevilla");
const segundaResidenciaOlivia = new direccion_1.Direccion("Vistahermosa, C. Altair", 11, false, false, 11500, "El Puerto de Santa Maria", "Cádiz");
const mailPersonalOlivia = new mail_1.Mail("personal", "oliviamiraflorescanete@gemail.com");
const mailTrabajoOlivia = new mail_1.Mail("trabajo", "miraflores_canete_olivia@asus.com");
const telefonoFijoOlivia = new telefono_1.Telefono("fijo", 954745863);
const telefoMovilOliviaPersonal = new telefono_1.Telefono("móvil", 685231056);
const telefonoMovilOliviaTrabajo = new telefono_1.Telefono("móvil", 652347895);
const datosOlivia = new persona_1.Persona('Olivia', 'Miraflores Cañete', 45, '30456789V', new Date(1978, 15, 3), 'verde', 'mujer', [primeraResidenciaOlivia, segundaResidenciaOlivia], [mailPersonalOlivia, mailTrabajoOlivia], [telefonoFijoOlivia, telefoMovilOliviaPersonal, telefonoMovilOliviaTrabajo], "Pasa la mitad del año en la primera residencia y la otra mitad en la segunda residencia, realiza teletrabajo");
//Console antes de realizar cambios
console.log("Contactos antes de realizar el cambio:");
console.log(datosFrancisca);
console.log(datosAntonio);
console.log(datosOlivia);
//Ahora vamos a realizar la busqueda mediante DNI y cambiar los datos de la ficha de Olivia
const agenda = new Array(datosFrancisca, datosAntonio, datosOlivia);
const dniABuscar = "30456789V";
const personaAEditar = agenda.find(persona => persona.dni === dniABuscar);
const nuevaDireccion = new direccion_1.Direccion("Avd de Coria", 19, 15, "B", 41010, "Sevilla", "Sevilla");
const nuevoMail = new mail_1.Mail("trabajo", "olivia_miraflores_canete@samsung.com");
const nuevoTelefono = new telefono_1.Telefono("fijo", 954562123);
personaAEditar.agregarNuevaDireccion(nuevaDireccion);
personaAEditar.agregarNuevoMail(nuevoMail);
personaAEditar.agregarNuevoTelefono(nuevoTelefono);
//Console después de realizar los cambios
console.log("Contactos después de realizar el cambio:");
console.log(datosFrancisca);
console.log(datosAntonio);
console.log(datosOlivia);
