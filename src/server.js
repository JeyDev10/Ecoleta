const express = require("express")
const server = express()

const nunjucks = require("nunjucks")

const db = require("./database/database.js")
const urlencoded = require("express")

server.use(express.urlencoded({ extended: true }))

nunjucks.configure("src/views", {
    express: server,
    noCache: true
})


server.use(express.static("public"))

server.get("/", (req, res) => {
    return res.render("index.html")
})

server.get("/cadastrar-ponto", (req, res) => {
    return res.render("cadastro.html")
})

server.get("/buscar-pontos", (req, res) => {

    const search = req.query.search

    db.all(`SELECT * FROM places WHERE city like '%${search}%'`, function(err, rows) {
        if (err) {
            console.log(err)
        }
        // console.log("Aqui está seus registros: ")
        // console.log(rows)
        const quantRows = rows.length

        return res.render("search-results.html", { places: rows, results: quantRows })
    })

})

server.post("/saveresults", (req, res) => {

    const dados = req.body


    const sqlQuery = `
        INSERT INTO places(
            name,
            image,
            adress,
            adress2,
            state,
            city,
            items
        ) VALUES (?,?,?,?,?,?,?);
    `
    const values = [
        dados.nome,
        dados.image,
        dados.adress,
        dados.adress2,
        dados.state,
        dados.city,
        dados.items
    ]

    db.run(sqlQuery, values, (err) => {
        if (err) {
            console.log(err)
            return res.send("Erro !!")
        }
    })


    return res.render("cadastro.html", { concluded: true })

})
server.listen(3000)