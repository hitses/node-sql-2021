export const QUERIES = {
  getProducts: 'SELECT * FROM products',
  getCountProducts: 'SELECT COUNT(*) FROM [nodesql2021].[dbo].[products]',
  getProductById: 'SELECT * FROM products WHERE id = @id',
  createProduct: 'INSERT INTO products (name, description, quantity) VALUES (@name, @description, @quantity)',
  updateProductById: 'UPDATE [nodesql2021].[dbo].[products] SET name = @name, description = @description, quantity = @quantity WHERE id = @id',
  deleteProduct: 'DELETE FROM [nodesql2021].[dbo].[products] WHERE id = @id'
}
