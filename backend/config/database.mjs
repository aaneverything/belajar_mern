import { Sequelize } from "sequelize";

const db = new Sequelize('mern-db','root','',{
    host: 'localhost',
    dialect: 'mysql'
} )

export default db