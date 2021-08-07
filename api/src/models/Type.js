const { DataTypes } = require('sequelize');

module.exports =  function (sequelize){
	 sequelize.define('type', {
		id: {
			type: DataTypes.UUID,
			//allowNull: false,
			primaryKey: true,
		},
		name: {
			type: DataTypes.STRING,
			allowNull: false,
		
	}
});
};