const pool = require("../config/database");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

export async function loginUser(req, res) {
  const client = await pool.connect();

  try {
  } catch (error) {
    console.error("Login error : ", error);
  } finally {
    client.release();
  }
}

export async function registerNewUser(req, res) {
  const client = await pool.connect();

  try {
  } catch (error) {
    console.error("Register error : ", error);
  } finally {
    client.release();
  }
}

export async function logoutUser(req, res) {
  const client = await pool.connect();

  try {
  } catch (error) {
    console.error("Logout error : ", error);
  } finally {
    client.release();
  }
}
