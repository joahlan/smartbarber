const express = require('express');
const path = require('path');
const sqlite = require('sqlite3').verbose();

const app = express();

app.use(express.json());

app.use(express.static(path.join(__dirname, 'public')));

const db = new sqlite.Database('SmartBarber.sqlite');

function Clientes() {
    var query = "CREATE TABLE IF NOT EXISTS CLIENTES("
    query += 'ID INTEGER PRIMARY KEY AUTOINCREMENT,';
    query += 'NOME VARCHAR(60),';
    query += 'EMAIL VARCHAR(60),';
    query += 'TELEFONE VARCHAR(11),';
    query += 'SENHA VARCHAR(60)'
    query += ');';
}

//Clientes()

app.listen(7071, console.log('Rodando...'))

