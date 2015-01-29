# sql-fixtures-issue
This is to reproduce issue https://github.com/city41/node-sql-fixtures/issues/22

nodejs version 0.11.14

##steps to reproduce

1. `git clone git@github.com:taurencoder/sql-fixtures-issue.git`
2. create a sample database `testdb` in mysql, you can also change the db config in `knexfile.js`
2. run `npm install -d`
3. run `knex migrate:latest`
4. run `node create-fixtures` for more than 2 times
5. query table product_settings to check its `product_id` column's references
