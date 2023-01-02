const mongoose = require("mongoose");

const spinUpDatabase = async (databaseUrl) => {
	mongoose.set("strictQuery", false);
	return mongoose.connect(databaseUrl);
};

module.exports = spinUpDatabase;
