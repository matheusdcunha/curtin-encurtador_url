import type { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable("urls", (table)=>{
    table.increments("id").primary(),
    table.text("url_original").notNullable(),
    table.text("url_encurtada").notNullable(),
    table.timestamp("created_at").defaultTo(knex.fn.now())
  })
}


export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable("urls")
}
