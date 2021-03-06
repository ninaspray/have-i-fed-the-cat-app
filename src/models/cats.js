module.exports = (sequelize, DataTypes) => {
    const schema = {
        name: DataTypes.STRING, 
        breed: DataTypes.STRING,
        birthDay: DataTypes.DATE, 
        legs: DataTypes.INTEGER,
    };
    
}