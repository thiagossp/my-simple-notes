exports.up = function(knex) {
    return knex.schema.createTable('notes', function (table) {
        table.string('id').primary();
        table.string('name').notNullable();
        table.string('body').notNullable();
        table.datetime('datetime').notNullable();

        table.string('user_id').notNullable();
        table.foreign('user_id').references('id').inTable('users');
    });    
};

exports.down = function(knex) {
    return knex.schema.dropTable('notes');
};