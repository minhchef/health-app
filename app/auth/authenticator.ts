import { Authenticator } from "remix-auth";
import { FormStrategy } from "remix-auth-form";

type User = {
  email: string;
  password: string;
};

let authenticator = new Authenticator<User>();

authenticator.use(
  new FormStrategy(async ({ form }) => {
    let email = form.get("email") ?? "";
    let password = form.get("password") ?? "";

    return await login(email.toString(), password.toString());
  }),
  "user-pass"
);

const login = async (email: string, password: string): Promise<User> => {
  return new Promise((resolve) => resolve({ email, password }));
};


export default authenticator