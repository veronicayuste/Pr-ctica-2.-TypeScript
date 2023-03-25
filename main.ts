import {Persona} from './persona';
import {Direccion} from './direccion';
import {Mail} from './mail';
import {Telefono} from './telefono';

//Datos Francisca
const primeraResidenciaFrancisca = new Direccion(
    "Calle del Obispo",
    28,
    false,
    false,
    14530,
    "Montemayor",
    "Córdoba"
) 
const segundaResidenciaFrancisca = new Direccion(
    "Calle Bolivia",
    180,
    21,
    "C",
    29017,
    "Pedregalejo",
    "Málaga"
)
const mailFrancisca = new Mail(
    "personal",
    "franciscaperezmunoz@gmail.com"
)
const telefonoFijoFrancisca = new Telefono(
    "fijo",
    957454574
)
const telefonoMovilFrancisca = new Telefono(
    "móvil",
    697365423
)
const datosFrancisca = new Persona(
    'Francisca',
    'Pérez Muñoz',
    36,
    '78154698N',
    new Date (1987,6,12),
    'amarillo',
    'mujer',
    [primeraResidenciaFrancisca, segundaResidenciaFrancisca],
    [mailFrancisca],
    [telefonoFijoFrancisca, telefonoMovilFrancisca],
    "Veranea en la segunda residencia, vivienda habitual primera residencia"
);

//Datos Antonio 
const primeraResidenciaAntonio = new Direccion(
    "P.º de la Victoria",
    59,
    5,
    "D",
    14004,
    "Córdoba",
    "Córdoba"
)
const segundaResidenciaAntonio = new Direccion(
    "Rda. de Valencia",
    5,
    6,
    "A",
    28012,
    "Madrid",
    "Madrid"
)
const mailPersonalAntonio = new Mail (
    "personal",
    "antoniolopez_85@gmail.com"
)
const mailTrabajoAntonio = new Mail (
    "trabajo",
    "lopezhernandez_antonio@staedtler.com"
)
const telefonoFijoAntonio = new Telefono (
    "fijo",
    957680235
)
const telefoMovilAntonioPersonal = new Telefono (
    "móvil",
    657328541
)
const telefoMovilAntonioTrabajo = new Telefono(
    "móvil",
    697356214
)
const datosAntonio = new Persona(
    'Antonio',
    'López Hernández',
    38,
    '56741265L',
    new Date (1985,25,1),
    'rojo',
    'hombre',
    [primeraResidenciaAntonio, segundaResidenciaAntonio],
    [mailPersonalAntonio,mailTrabajoAntonio],
    [telefonoFijoAntonio, telefoMovilAntonioPersonal, telefoMovilAntonioTrabajo],
    "Trabaja en la segunda residencia, la primera residencia la tiene alquilada todo el año a estudiantes"
);

//Datos Olivia
const primeraResidenciaOlivia = new Direccion(
    "Calle Evangelista",
    49,
    7,
    "C",
    41010,
    "Sevilla",
    "Sevilla"
)
const segundaResidenciaOlivia = new Direccion(
    "Vistahermosa, C. Altair",
    11,
    false,
    false,
    11500,
    "El Puerto de Santa Maria",
    "Cádiz"
)
const mailPersonalOlivia = new Mail(
    "personal",
    "oliviamiraflorescanete@gemail.com"
)
const mailTrabajoOlivia = new Mail(
    "trabajo",
    "miraflores_canete_olivia@asus.com"
)
const telefonoFijoOlivia = new Telefono(
    "fijo",
    954745863
)
const telefoMovilOliviaPersonal = new Telefono(
    "móvil",
    685231056
)
const telefonoMovilOliviaTrabajo = new Telefono(
    "móvil",
    652347895
)
const datosOlivia = new Persona(
    'Olivia',
    'Miraflores Cañete',
    45,
    '30456789V',
    new Date (1978,15,3),
    'verde',
    'mujer',
    [primeraResidenciaOlivia, segundaResidenciaOlivia],
    [mailPersonalOlivia, mailTrabajoOlivia],
    [telefonoFijoOlivia, telefoMovilOliviaPersonal, telefonoMovilOliviaTrabajo],
    "Pasa la mitad del año en la primera residencia y la otra mitad en la segunda residencia, realiza teletrabajo"
)

//Console antes de realizar cambios
console.log("Contactos antes de realizar el cambio:");
console.log(datosFrancisca);
console.log(datosAntonio);
console.log(datosOlivia);


//Ahora vamos a realizar la busqueda mediante DNI y cambiar los datos de la ficha de Olivia
const agenda: Array<Persona> = new Array(datosFrancisca, datosAntonio, datosOlivia);
const dniABuscar: string = "30456789V";
const personaAEditar: Persona = agenda.find(persona => persona.dni === dniABuscar) as Persona;

const nuevaDireccion = new Direccion(
    "Avd de Coria",
    19,
    15,
    "B",
    41010,
    "Sevilla",
    "Sevilla"
)
const nuevoMail = new Mail(
    "trabajo",
    "olivia_miraflores_canete@samsung.com"
)
const nuevoTelefono = new Telefono(
    "fijo",
    954562123
)

personaAEditar.agregarNuevaDireccion(nuevaDireccion);
personaAEditar.agregarNuevoMail(nuevoMail);
personaAEditar.agregarNuevoTelefono(nuevoTelefono);

//Console después de realizar los cambios
console.log("Contactos después de realizar el cambio:");
console.log(datosFrancisca);
console.log(datosAntonio);
console.log(datosOlivia);