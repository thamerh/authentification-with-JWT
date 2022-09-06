
import {Sequelize} from "sequelize";

const db = new Sequelize('authentification','root','',{
    host: "localhost",
    dialect: "mysql"
});

export default db;