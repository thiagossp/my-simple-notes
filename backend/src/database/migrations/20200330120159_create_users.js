exports.up = function(knex) {
    return knex.schema.createTable('users', function (table) {
        table.string('login').primary();
        table.string('password').notNullable();
    });    
};

exports.down = function(knex) {
    return knex.schema.dropTable('users');
};
