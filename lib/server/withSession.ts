import { withIronSessionApiRoute } from 'iron-session/next';

const cookieOptions = {
  cookieName: 'bananaSession',
  password: process.env.COOKIE_PASSWORD!,
};

export const withApiSession = (fn: any) => {
  return withIronSessionApiRoute(fn, cookieOptions);
};
