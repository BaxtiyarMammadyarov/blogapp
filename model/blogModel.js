const { DataTypes } = require("sequelize");
const sequelize = require("../data/db");

const blog = sequelize.define("blog",{

    blogid : {
        blogid: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        title: {
            type: DataTypes.STRING,
            
            allowNull: false
        },
        subtitle: {
            type: DataTypes.STRING,
            
            allowNull: false,
        
        },
        img: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        homePage: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
        },
        isActive: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
        },
        categoryid: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },

    }
}
);

async function sync() {
    await blog.sync({ force: true });
    console.log("blog tablosu eklendi");
}

// migrations

sync();

module.exports = blog;