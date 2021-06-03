import sql from 'mssql'
import config from '../config'

const DB_SETTINGS = {
  user: config.user,
  password: config.password,
  server: config.server,
  database: config.database,
  options: {
    encrypt: true,
    trustServerCertificate: true // Chnge to false in production environments
  }
}

export async function getConnection () {
  try {
    const POOL = await sql.connect(DB_SETTINGS)

    return POOL
  } catch (error) {
    console.error(error)
  }
}

export { sql }
