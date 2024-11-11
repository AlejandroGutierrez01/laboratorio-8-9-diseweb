import express from "express"

const app = express()

app.use(express.json())

app.get("/",(req,res)=>{
    res.send("Pagina Principal")
})
const integrantes = [
    { 
        "id": 1, 
        "nombre": "Jose", 
        "apellido": "Lincango", 
        "edad": 20 
    },
    { 
        "id": 2, 
        "nombre": "Alejandro", 
        "apellido": "Gutierrez", 
        "edad": 20 
    },
    { 
        "id": 3, 
        "nombre": "Wilmer", 
        "apellido": "Vargas", 
        "edad": 20 
    },
    { 
        "id": 4, "nombre": 
        "Darwin", "apellido": 
        "Cachimil", 
        "edad": 27 
    },
    { 
        "id": 5, "nombre": 
        "Anderson", "apellido": 
        "Vilatuna", 
        "edad": 21 
    },
    { 
        "id": 6, 
        "nombre": "Andres", 
        "apellido": "Tufino", 
        "edad": 20 
    },
    { 
        "id": 7, 
        "nombre": "Francis", 
        "apellido": "Guaman", 
        "edad": 22 
    }
]

app.get("/integrantes", (req, res) => {
    res.json(integrantes)
})

app.get("/integrantes/:id", (req, res) => {
    
    const id = parseInt(req.params.id)
    
    const integrante = integrantes.find(i => i.id === id)

    if (integrante) {
        res.json(integrante)
    } else {
        res.status(404).send("Integrante no encontrado")
    }
})

app.get("/products", (req, res) => {
    const productos = [
        { 
            id: 1, 
            nombre: "Arroz", 
            precio: 5.0 
        },
        { 
            id: 2, 
            nombre: "Azucar", 
            precio: 2.5 
        },
        { 
            id: 3, 
            nombre: "Leche", 
            precio: 3.25 
        }
    ]

    let productosHtml = `
    <html>
            <head>
                <title>Catálogo de productos</title>
            </head>
    <body>
        <h1>Catálogo de Productos</h1>`

    productos.forEach(producto => {
        productosHtml += `
            <div class="product">
                <h2>${producto.nombre}</h2>
                <p>Precio: $${producto.precio}</p>
            </div>
        `
    })
    productosHtml += `
        </body>
    </html>`
    //Enviar html al /products
    res.send(productosHtml)
})

app.listen(3000,()=>{
    console.log("Servidor iniciado")
})