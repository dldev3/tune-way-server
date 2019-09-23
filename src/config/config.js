module.exports = {
    port: process.env.PORT || 3344,
    db:{
        database: process.env.DB_NAME || 'tuneway',
        user:  process.env.DB_USER || 'root',
        password:  process.env.DB_PASSWORD || '',
        options: {
            dialect: process.env.DIALECT || 'mysql',
            host: process.env.HOST || 'localhost'
        }
    }
}