import sqlite3 from 'sqlite3'
import fs from 'fs'

const file = 'users.db'
var exists = fs.existsSync(file)
var sqlite = sqlite3.verbose()
var db = new sqlite.Database(file)

db.serialize( () => {
    if(!exists) {
        db.run('CREATE TABLE users (userId TEXT NOT NULL, solvedLevels TEXT)')
    }
})

export const getAllSolvedLevels = (id, cb) => {
    db.each('SELECT * FROM users WHERE userId = ?', [id], (err, row) => {
        console.log("Callback")
        if(err)console.log(err)
        console.log(row)
        cb(JSON.parse(row.solvedLevels))
    }, (err, num) => {
        if(num === 0) {
            const initialSolved = []
            console.log("INSERTING USER "+id)
            db.run('INSERT INTO users VALUES (?,?)', id,JSON.stringify(initialSolved))
            cb(initialSolved)
        }
    })  
    console.log("Out of function")
}

export const solveLevel = (id, level) => {
    console.log("In function")
    db.each('SELECT * FROM users WHERE userId = ?', [id], (err, row) => {
        console.log("CB")
        if(err)console.log(err)
        let solvedNow = JSON.parse(row.solvedLevels)
        console.log({before: solvedNow})
        if(solvedNow.indexOf(level) == -1 ){
            solvedNow.push(level)
            console.log({after: solvedNow})
            db.run("UPDATE users SET solvedLevels = ? WHERE userId = ?", JSON.stringify(solvedNow), id)
        }
    })
    console.log("Out of function")
}
