const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
	// defino el modelo
	sequelize.define('pokemon', {
		id: {
			type: DataTypes.UUID,
			allowNull: false,
			primaryKey: true,
		},
		name: {
			type: DataTypes.STRING,
			unique: true,
			allowNull: false,
			validate: {
				notNull: {
					msg: 'Please enter a name',
				},
			},
		},
		image: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		life: {
			type: DataTypes.INTEGER,
			allowNull: false,
		},
		force: {
			type: DataTypes.INTEGER,
			allowNull: false,
		},
		defence: {
			type: DataTypes.INTEGER,
			allowNull: false,
		},
		velocity: {
			type: DataTypes.INTEGER,
			allowNull: false,
		},
		height: {
			type: DataTypes.INTEGER,
			allowNull: false,
		},
		weight: {
			type: DataTypes.INTEGER,
			allowNull: false,
		},
	});
};
