// Variables
const presupuestoUsuario = prompt('Cual es tu presupuesto semanal?')
const formulario = document.getElementById('agregar-gasto')  
let cantidadPresupuesto


// Clases
// Presupuesto
class Presupuesto{
    constructor(presupuesto) {
        this.presupuesto = Number(presupuesto)
        this.restante = Number(numero)
    }
    // Metodo para ir restando del presupesto actual
    presupuestoRestante(cantidad = 0) {
        return this.restante -= Number(cantidad)
    }
}

// Interfaz
class Interfaz{
    insertarPresepuesto(cantidad) {
        const presupestoSpan = document.querySelector('span#total')
        const restanteSpan = document.querySelector('span#restante')
        // Insertar al HTML
        presupestoSpan.innerHTML = `${cantidad}`
        restanteSpan.innerHTML = `${cantidad}`
    }

    imprimirMensaje(mensaje, tipo) {
        const divMensaje = document.createElement('div')
        divMensaje.classList.add('text-cente', 'alert')
        if(tipo === 'error') {
            divMensaje.classList.add('alert-danger')
        }else {
            divMensaje.classList.add('alert-sucess')
        }
        divMensaje.appendChild(document.createTextNode(mensaje))
        // Insertar en el DOM
        document.querySelector('.primario').insertBefore(divMensaje, formulario)

        // Quitar el alert despues de 3 segundos
        setTimeout(function() {
            document.querySelector('.primario .alert').remove()
            formulario.reset()
        }, 3000)
    }

    agregarGastoListado(nombre, cantidad) {
        const gastosListado = document.querySelector('#gastos ul')

        const li = document.createElement('li')
        li.className = 'list-group-item d-flex justify-content-between align-items-center'
        // Insertar el gasto
        li.innerHTML = `${nombre}
                        <span class="badge badge-primary bagde-pill">${cantidad} </span>` 
        gastosListado.appendChild(li)
    }

    presupuestoRestante(cantidad){
        const restante = document.querySelector('span#restante')
        // Leemos el presupuesto restante
        const presupuestoRestanteUsuario = cantidadPresupuesto.presupuestoRestante(cantidad)

        restante.innerHTML = `${presupuestoRestanteUsuario}`

        this.comprobarPresupuesto()
    }

    // Cambia de color el presupuesto restante
    comprobarPresupuesto() {
        const presupestoTotal = cantidadPresupuesto.presupuesto
        const presupestoRestante = cantidadPresupuesto.restante

        // Comprobar el 25%
        if(presupestoTotal / 4 > presupestoRestante) {
            const restante = document.querySelector('.restante')
            restante.classList.remove('alert-success', 'alert-warning')
            restante.classList.remove('alert-danger')
        }else {
            const restante = document.querySelector('.restante')
            restante.classList.remove('alert-success')
            restante.classList.remove('alert-warning')
        }
    }
}


// Event Listeners
document.addEventListener('DOMContentLoaded', function(){
    if(presupuestoUsuario === null || presupuestoUsuario === '') {
        window.location.reload()
    }else {
        // Instanciar un presupuesto
        cantidadPresupuesto = new Presupuesto(presupuestoUsuario)
        // Instanciar la clase de la interfaz
        const ui = new Interfaz()
        ui.insertarPresepuesto(cantidad)
    }
})

formulario.addEventListener('submit', function(e) {
    e.preventDefault()

    // Leer el formulario de gastos
    const nombreGasto = document.querySelector('#gasto').value
    const cantidadGasto = document.querySelector('#cantidad').value
    
    // Instanciar la interfaz
    const ui = new Interfaz()

    // Comprobar que los campos no estén vacíos
    if(nombreGasto === '' || cantidadGasto === '') {
        // 2 parámetros: mensaje y tipo
        ui.imprimirMensaje('Hubo un error', 'eror')
    }else {
        // Insertar en el HTML
        ui.imprimirMensaje('Correcto', 'correcto')
        ui.agregarGastoListado(nombreGasto, cantidadGasto)
        ui.presupuestoRestante(cantidadGasto)
    }
})