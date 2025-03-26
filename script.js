const express = require("express") // vado ad importare express
const app = express() // invoco express
const port = 3000 // indico quale porta voglio utilizzare

// aggiungo una rotta
app.get("/", (req, res) => { // chiamo la funzione tramite metodo get
    console.log("sto chiamando la rotta principale")
})

app.listen(port, () => {
    console.log("sono un server attivo sulla porta:" + " " + port)


})

