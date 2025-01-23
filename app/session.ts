import { createCookieSessionStorage } from "@remix-run/node";

type User = {
  email: string;
  password: string;
};

type SessionData = {
  user: User;
};

type SessionFlashData = {
  error: string;
};

const { getSession, commitSession, destroySession } =
  createCookieSessionStorage<SessionData, SessionFlashData>({
    cookie: {
        name: "__session",
        secrets: ["r3m1xr0ck5"],
        sameSite: "lax",
    },
  });

export { getSession, commitSession, destroySession };
