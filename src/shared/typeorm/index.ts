import { DataSource } from 'typeorm'
import { CreateRolesTable1693576070181 } from './migrations/1693576070181-CreateRolesTable'

export const Datasource = new DataSource({
  type: 'sqlite',
  database: './db.sqlite',
  entities: [],
  migrations: [CreateRolesTable1693576070181],
})
