import { DataSource } from 'typeorm'

export const Datasource = new DataSource({
  type: 'sqlite',
  database: '/db.sqlite',
  entities: [],
  migrations: [],
})
