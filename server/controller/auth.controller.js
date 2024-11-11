const pool = require("../config/database");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");


module.exports.login = async (req, res) => {
  const client = await pool.connect();

  try {
  } catch (error) {
    console.error("Login error : ", error);
  } finally {
    client.release();
  }
};

module.exports.register = async (req, res) => {
  const client = await pool.connect();

  try {
  } catch (error) {
    console.error("Register error : ", error);
  } finally {
    client.release();
  }
};

module.exports.logout = async (req, res) => {
  const client = await pool.connect();

  try {
  } catch (error) {
    console.error("Logout error : ", error);
  } finally {
    client.release();
  }
};
