// import { Sequelize } from 'sequelize';
const { Sequelize } = require('sequelize');
import dotenv from 'dotenv';
dotenv.config();

export const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: 'localhost',
    port: 5433,
    dialect: 'postgres',
});


