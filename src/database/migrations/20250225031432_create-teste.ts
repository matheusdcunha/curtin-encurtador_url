import type { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable("teste",(table)=>{
    table.increments("id").primary()
  })

}


export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable("teste")
}

