// 云函数入口文件
const cloud = require('wx-server-sdk')

const got = require('got')

cloud.init()

// 云函数入口函数 
exports.main = async (event, context) => {
    // npm i got@9.6.0 --save 
    // got新版的js文件在云函数端无法正常解析语法function*，可能是因为云函数端的nodejs版本较低。所以得使用9.6.0版本
    const getResponse = await got('https://api.github.com/users/aquanlerou')

    return getResponse.body

}