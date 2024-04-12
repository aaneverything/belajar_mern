import { Sequelize } from "sequelize";
import db from '../config/database.mjs'


const {DataTypes} = Sequelize

const userr = db.define('users', {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    gender: DataTypes.STRING
}, {
    freezeTableName: true
});

export default userr;


(async()=>{
    await db.sync()
})()