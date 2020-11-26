const sqlite3 = require("sqlite3").verbose()

const db = new sqlite3.Database("./src/database/database.db")

module.exports = db


// db.serialize(() => {
//     const query = `
//             INSERT INTO places(
//                 name,
//                 image,
//                 adress,
//                 adress2,
//                 state,
//                 city,
//                 items
//             ) VALUES(?,?,?,?,?,?,?);
//         `

//     const values = [
//         "pinstori",
//         "https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/v211-bb-08-environment_1.jpg?w=800&dpr=1&fit=default&crop=default&q=65&vib=3&con=3&usm=15&bg=F4F4F3&ixlib=js-2.2.1&s=4445b6d65b0a86ed1f0f733b138f6aa3",
//         "Rua sss, sapequinha",
//         "N°265",
//         "Rio de Janeiro",
//         "Lapa",
//         "Lâmpadas"


//     ]

// //db.run(query, values, function(err) {
// if (err) {
//     console.log(err)
// }
// console.log("registro feito")
// console.log(this)
//     // })

// db.run('DELETE FROM places WHERE id=?', [3], function(err) {
//     if (err) {
//         console.log(err)

//     }

//     console.log("item deletado !")

// })

// })

// db.serialize(() => {

//     // Criando uma TABELA no sqlite3
//     // db.run(`
//     //     CREATE TABLE IF NOT EXISTS places(
//     //         id INTEGER PRIMARY KEY AUTOINCREMENT,
//     //         name TEXT,
//     //         image TEXT,
//     //         adress TEXT,
//     //         adress2 TEXT,
//     //         state TEXT,
//     //         city TEXT,
//     //         items TEXT
//     //     );
//     // `)

//     const query = `
//         INSERT INTO places(
//             name,
//             image,
//             adress,
//             adress2,
//             state,
//             city,
//             items
//         ) VALUES(?,?,?,?,?,?,?);
//     `
//     const value = [
//         "Colectoria",
//         "https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/pf-lukestackpoole5-pine-forest-road.jpg?w=1000&dpr=1&fit=default&crop=default&q=65&vib=3&con=3&usm=15&bg=F4F4F3&ixlib=js-2.2.1&s=3067090d97b494ccbb6dbae364d79c28",
//         "Guilherme Gemballa, Jardim América",
//         "N°260",
//         "Santa Catarina",
//         "Rio do sul",
//         "Resíduos Eletrônicos, Lâmpadas"


//     ]

//     const value2 = [
//         "Papersider",
//         "https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/k-pf-name-159-job4.jpg?w=800&dpr=1&fit=default&crop=default&q=65&vib=3&con=3&usm=15&bg=F4F4F3&ixlib=js-2.2.1&s=61cc7bdb0c2b3daded4b4195c6e66efc",
//         "Guilherme Gemballa, Jardim América",
//         "N°320",
//         "Minas Gerais",
//         "Contagem",
//         "Papéis e Papelão"


//     ]

//     function afterInsertData(err) {
//         if (err) {
//             return console.log(err)
//         }
//         console.log("Cadastrado com sucesso !")
//         console.log(this)

//     }
//     // Inserindo dados na tabel

//     db.run(query, value, afterInsertData)
//     db.run(query, value2, afterInsertData)

//     //Consultar dados

// db.all('SELECT * FROM places', function(err, rows) {
//     if (err) {
//         console.log(err)
//     }
//     console.log("Aqui está seus registros: ")
//     console.log(rows)
// })

//     //4 Dletar um dado da tabela

// db.run(`DELETE FROM places WHERE id = ?`, [7], function(err) {
//     if (err) {
//         console.log(err)
//     }
//     console.log("Registro deletado !")
// })




// })