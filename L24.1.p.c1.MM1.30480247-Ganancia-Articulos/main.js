class Articulo{
    constructor(codigo, costo, precio_venta){
        this.codigo = codigo,
        this.costo = costo,
        this.precio_venta = precio_venta
    }
}

class Procesos{
    constructor(){
        this.costoTotal = 0,
        this.ventasTotal = 0,
        this.mayorPrecio = 0,
        this.codigoMayor = 0
    }
    procesarArticulo(a){
        this.ventasTotal += a.precio_venta
        this.costoTotal += a.costo
        if(a.precio_venta > this.mayorPrecio){
            this.mayorPrecio = a.precio_venta
            this.codigoMayor = a.codigo
        }
    }
    ganancia_total(){
        return this.ventasTotal - this.costoTotal
    }
}

let articulo1 = new Articulo(888, 10, 15)
let articulo2 = new Articulo(777, 20, 25)
let articulo3 = new Articulo(333, 25, 35)
let articulo4 = new Articulo(111, 50, 70)
let articulo5 = new Articulo(555, 40, 50)
let articulo6 = new Articulo(444, 80, 100)
let articulo7 = new Articulo(222, 5, 10)
let articulo8 = new Articulo(999, 15, 25)

let proceso = new Procesos()

proceso.procesarArticulo(articulo1)
proceso.procesarArticulo(articulo2)
proceso.procesarArticulo(articulo3)
proceso.procesarArticulo(articulo4)
proceso.procesarArticulo(articulo5)
proceso.procesarArticulo(articulo6)
proceso.procesarArticulo(articulo7)
proceso.procesarArticulo(articulo8)


let salida = document.getElementById('app')

salida.innerHTML = `

Ganancia Total: ${proceso.ganancia_total()}<br>
Código del artículo con mayor precio de venta: ${proceso.codigoMayor}

`