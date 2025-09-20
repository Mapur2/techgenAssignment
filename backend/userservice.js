// services/user.service.js
import { User } from "./user.model.js";

export const registerUser = async (email, password,name ) => {
  const existingUser = await User.findOne({ email });
  if (existingUser) {
    throw new Error("User already exists");
  }
  const newUser = await User.create({ email, password,name });
  return newUser;
};

export const loginUser = async (email, password) => {
  const user = await User.findOne({ email, password });
  if (!user) {
    throw new Error("Invalid email or password");
  }
  return user;
};
