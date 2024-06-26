import { Response, NextFunction } from "express";
import User from "../../models/entities/user";
import bcrypt from "bcrypt";
import { type CookieOptions } from "express";
import jwt from "jsonwebtoken";

import { Custom_Req } from "../../types/custom_params";

// TODO: Fix the type issue.
function sign_access_token(userid: any) {
  const token = jwt.sign({ userid }, process.env.JWT_SECRET as string, {
    expiresIn: "4d",
  });

  return token;
}

export default async function login(
  req: Custom_Req,
  res: Response,
  next: NextFunction,
) {
  let { email, password } = req.body;
  try {
    //TODO: Make this more moduler
    // 1. Find the user.
    email = email.toLowerCase();
    const user = await User.findOne({ email });

    // 2. Compare the has with the 'password'
    if (!user) throw new Error("user not found, please signup");
    const match = await bcrypt.compare(password, user?.password as string);

    if (!match) throw new Error("email or password is incorrect");
    // 3. Generate a token.
    const token = sign_access_token(user?._id);
    // 4. Set cookie

    const expires_in = process.env.TOKEN_COOKIE_EXPIRES_IN as any;
    const cookie_options = {
      // miliseconds in a day: 86400000
      expires: new Date(Date.now() + expires_in * 86400000),
      httpOnly: true,
      secure: true,
      sameSite: "none",
    } as CookieOptions;
    res.cookie("auth_token", token, cookie_options);

    // TODO: Do I need to do it here.
    req.user = user;

    res.send(user);
  } catch (error) {
    next(error);
  }
}
