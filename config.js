
module.exports = {
    database: {
      host: process.env.DB_HOST || 'localhost',
      user: process.env.DB_USER || 'root@localhost',
      password: process.env.DB_PASSWORD || 'dhana',
      database: process.env.DB_NAME || 'test'
    }
  };
  