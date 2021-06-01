import sql from 'mssql'

const DB_SETTINGS = {
  user: 'hola',
  password: 'hola',
  server: 'hola',
  database: 'hola'
}

sql.connect(DB_SETTINGS)
