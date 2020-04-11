const cloud = require('wx-server-sdk')

const Sequelize = require('sequelize')
// const sequelize = new Sequelize('数据库名称', '用户名', '密码', {
const sequelize = new Sequelize('xx', 'xx', 'xx', {
    host: '119.28.161.110',//云数据库IP地址
    port: 3306,
    dialect: 'mysql',
    operatorsAliases: false,
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
})

const User = sequelize.define('user', {
    firstName: {
        type: Sequelize.STRING
    },
    lastName: {
        type: Sequelize.STRING
    }
})

cloud.init()

exports.main = async (event, context) => {

    return await User.sync({ force: true }).then(() => User.create({
        firstName: 'Huangquan',
        lastName: 'Wu'
    })).then(res => {
        return res.toJSON()
    })

}