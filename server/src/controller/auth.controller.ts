import { Request, Response } from "express";
import { LoginUser } from "../models/Login.models";
import { User } from "../models/User.models";

const pool = require("../config/database");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

export async function loginUser(
  req: Request<{}, {}, LoginUser>,
  res: Response
) {
  const client = await pool.connect();

  try {
  } catch (error) {
    console.error("Login error : ", error);
  } finally {
    client.release();
  }
}

export async function registerNewUser(
  req: Request<{}, {}, User>,
  res: Response
) {
  const client = await pool.connect();

  try {
  } catch (error) {
    console.error("Register error : ", error);
  } finally {
    client.release();
  }
}

export async function logoutUser(req: Request, res: Response) {
  const client = await pool.connect();

  try {
  } catch (error) {
    console.error("Logout error : ", error);
  } finally {
    client.release();
  }
}
