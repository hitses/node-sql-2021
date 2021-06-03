import { sql, getConnection, QUERIES } from '../database/index'

export const getProducts = async (req, res) => {
  try {
    const POOL = await getConnection()
    const RESULT = await POOL.request()
      .query(QUERIES.getProducts)

    res.json(RESULT.recordsets)
  } catch (error) {
    res.status(500).json({ data: { mess: 'Bad request. Please, fill all fields.' } })
    res.send(error.message)
  }
}

export const getCountProducts = async (req, res) => {
  try {
    const POOL = await getConnection()
    const RESULT = await POOL.request()
      .query(QUERIES.getCountProducts)

    res.status(200).json({ data: { totalProducts: RESULT.recordset[0][''] } })
  } catch (error) {
    res.status(500).json({ data: { mess: 'Bad request. Please, fill all fields.' } })
    res.send(error.message)
  }
}

export const getProductById = async (req, res) => {
  try {
    const { id } = req.params

    const POOL = await getConnection()
    const RESULT = await POOL.request()
      .input('id', sql.Int, id)
      .query(QUERIES.getProductById)

    res.json(RESULT.recordsets[0])
  } catch (error) {
    res.status(500).json({ data: { mess: 'Bad request. Please, fill all fields.' } })
    res.send(error.message)
  }
}

export const createProduct = async (req, res) => {
  try {
    const { name, description } = req.body
    let { quantity } = req.body

    if (!name || !description) {
      return res.status(400).json({ data: { mess: 'Bad request. Please, fill all fields.' } })
    }

    if (!quantity) quantity = 0

    const POOL = await getConnection()
    await POOL.request()
      .input('name', sql.VarChar, name)
      .input('description', sql.Text, description)
      .input('quantity', sql.Int, quantity)
      .query(QUERIES.createProduct)

    res.status(200).json({ data: { name, description, quantity } })
  } catch (error) {
    res.status(500).json({ data: { mess: 'Bad request. Please, fill all fields.' } })
    res.send(error.message)
  }
}

export const updateProductById = async (req, res) => {
  try {
    const { id } = req.params
    const { name, description, quantity } = req.body
    console.log(id, name, description, quantity)

    if (!name || !description || !quantity) {
      return res.status(400).json({ data: { mess: 'Bad request. Please, fill all fields.' } })
    }

    const POOL = await getConnection()
    await POOL.request()
      .input('id', sql.Int, id)
      .input('name', sql.VarChar, name)
      .input('description', sql.Text, description)
      .input('quantity', sql.Int, quantity)
      .query(QUERIES.updateProductById)

    res.status(200).json({ data: { name, description, quantity } })
  } catch (error) {
    res.status(500).json({ data: { mess: 'Bad request. Please, fill all fields.' } })
    res.send(error.message)
  }
}

export const deleteProductById = async (req, res) => {
  try {
    const { id } = req.params

    const POOL = await getConnection()
    await POOL.request()
      .input('id', sql.Int, id)
      .query(QUERIES.deleteProduct)

    res.status(204).json({ mess: `Product ${id} deleted correctly.` })
  } catch (error) {
    res.status(500).json({ data: { mess: 'Bad request. Please, fill all fields.' } })
    res.send(error.message)
  }
}
