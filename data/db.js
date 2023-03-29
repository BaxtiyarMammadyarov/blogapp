const config = require("../config/dbconfig") 
const mysql = require("mysql2");
let connection = mysql.createConnection(config.db);

connection.connect(function(err){
if(err){

    console.log(err);
    return
}
console.log("baglanti kuruldu");
});
module.exports = connection.promise();