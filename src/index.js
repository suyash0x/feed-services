require("dotenv").config();
const express = require("express");
const app = express();
const spinUpDataBase = require("./db");
const authRouter = require("./router/auth.router");
const PORT = process.env.PORT || 3000;

app.use(process.env.API_URL, authRouter);

const startServer = async () => {
	try {
		await spinUpDataBase(process.env.MONGO_URL);
		app.listen(PORT, () => console.log(`Feed services are up and running on port number ${PORT}...`));
	} catch (error) {
		console.log(error);
	}
};

startServer();
