// Variables
const presupuestoUsuario = prompt('Cual es tu presupuesto semanal?')
let cantidadPresupuesto

// Clases
// Presupuesto
class Presupuesto{
    constructor (presupuesto){
        this.presupuesto = Number(presupuesto)
        this.restante = Number(numero)
    }
    // Metodo para ir restando del presupesto actual
    presupuestoRestante(cantidad = 0) {
        return this.restante -= Number(cantidad)
    }
}

// Event Listeners
document.addEventListener('DOMContentLoaded', function(){
    if(presupuestoUsuario === null || presupuestoUsuario === '') {
        window.location.reload()
    }else {
        // Instanciar un presupuesto
        cantidadPresupuesto = new Presupuesto(presupuestoUsuario)
    }
})