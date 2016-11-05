import sqlite3 from 'sqlite3'
import fs from 'fs'

import {resubmit} from './tasks'

const file = 'users.db'
const exists = fs.existsSync(file)
const sqlite = sqlite3.verbose()
const db = new sqlite.Database(file)

const INITIAL_SOLVED = []


db.serialize( () => {
  if(!exists) {
    db.run('CREATE TABLE users (userId TEXT NOT NULL UNIQUE, solvedLevels TEXT)')
  }
})


export const createUser = (id, done) => {
  db.run('INSERT INTO users VALUES (?,?)', id, JSON.stringify(INITIAL_SOLVED), done)
}


const getUser = (id, done, {create = true} = {}) => {
  db.all('SELECT * FROM users WHERE userId = ?', id, (err, rows) => {
    if(err) {
      done(err)
      return
    }
    if(rows.length === 0 && create) {
      createUser(id, (err) => {
        if(err) {
          done(err)
          return
        }
        getUser(id, done, {create: false})
      })
      return
    }
    if(rows.length !== 1) {
      done(`Invalid database user count: ${rows.length}`)
      return
    }
    done(null, rows[0])
  })
}


export const getSolvedLevels = (id, done) => {
  getUser(id, (err, user) => {
    if (err) {
      done(err)
      return
    }
    done(null, JSON.parse(user.solvedLevels))
  })
}

export const solveLevel = (id, level, done) => {
  getSolvedLevels(id, (err, solvedNow) => {
    if (err) {
      done(err)
      return
    }
    if (solvedNow.indexOf(level) === -1 ) {
      const solved = [...solvedNow, level]
      db.run(
        'UPDATE users SET solvedLevels = ? WHERE userId = ?',
        JSON.stringify(solved), id,
        (err) => {
          if (err) {
            done(err)
            return
          }
          resubmit(id, solved, level, done)
        }
      )
      return
    }
    resubmit(id, solvedNow, level, done)
  })
}
