var database = {
    "client": "mysql",
    "connection": {
        "host": "127.0.0.1",
        "user": "root",
        "password": "",
        "database": "testdb"
    }
};
module.exports = {
  development: {
    client: database.client,
    connection: database.connection
  },
  database: database
};
