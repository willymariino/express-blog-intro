const express = require("express") // vado ad importare express
const app = express() // invoco express
const port = 3000 // indico quale porta voglio utilizzare

app.use(express.static("public"))

// aggiungo una rotta
app.get("/", (req, res) => { // chiamo la funzione tramite metodo get
    console.log("sto chiamando la rotta principale")

    res.send("server del mio blog") // fornisco una risposta in modo che la risposa non rimanga in sospeso
})

app.get("/bacheca", (req, res) => {
    console.log("bacheca")

    //  res.send("descrizione dolci")

    const menu = [

        {

            nome: "ciambellone",
            immagine: "/images/ciambellone.jpeg",

        },
        {
            nome: "cracker",
            immagine: "/images/cracker_barbabietola.jpeg",
        },
        {
            nome: "pane fritto",
            immagine: "/images/pane_fritto_dolce.jpeg",
        },
        {
            nome: "pasta barbabietola",
            immagine: "/images/pasta_barbabietola.jpeg",
        },

        {
            nome: "torta paesana",
            immagine: "/images/torta_paesana.jpeg",
        }


    ]

    res.type("json").send(menu)

})

app.listen(port, () => {
    console.log("server avviato su http://127.0.0.1:" + " " + port)


})

