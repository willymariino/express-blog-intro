const express = require("express") // vado ad importare express
const app = express() // invoco express
const port = 3000 // indico quale porta voglio utilizzare

// aggiungo una rotta
app.get("/", (req, res) => { // chiamo la funzione tramite metodo get
    console.log("sto chiamando la rotta principale")

    res.send("dolci disponibili sul menù") // fornisco una risposta in modo che la risposa non rimanga in sospeso
})

app.get("/dolci", (req, res) => {
    console.log("oggetti")

    res.send("descrizione dolci")

})

app.listen(port, () => {
    console.log("server avviato su http://127.0.0.1:" + " " + port)


})

