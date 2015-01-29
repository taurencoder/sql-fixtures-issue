'use strict';

exports.up = function(knex, Promise) {
  return knex.schema.createTable('products', function(table) {
    table.increments();
    table.decimal('price');
  })
  .createTable('product_settings', function(table) {
    table.increments();
    table.integer('quantity');
    table.integer('product_id').unsigned().references('products.id');
  }); 
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('product_settings').dropTable('products'); 
};
