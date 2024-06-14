const express = require("express")
const port = 3000
const app = express()

const config = {
  host: 'db',
  user: 'root',
  password: 'root',
  database: 'desafio_fullcycle'
};

const mysql = require('mysql')
const connection = mysql.createConnection(config)
app.get("/", (req, res) => {
  const nome = req.query.nome;

  if (nome) {
    var sql  = "INSERT INTO people (nome) VALUES('"+nome+"')"
    connection.query(sql,function(error,results){
      if(error) throw error;
      console.log(results);
    }
  );
  }

  connection.query("SELECT nome FROM people", function (error, results, fields){
    //const html = `
    res.send(`
    <body>  
    <h1>Full Cycle Rocks!</h1>
    <ol>
      ${results && results.map((people) => `<li>${people.nome}</li>`).join("")}
    </ol>
    </body>`
    )
    console.log(results);    
    });
}); 

app.listen(port, () => {
    console.log('Ativo na porta:', port);
});