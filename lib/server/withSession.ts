import { withIronSessionApiRoute } from 'iron-session/next';

const cookieOptions = {
  cookieName: 'bananaSession',
  password: '20381absefs20381absefs20381absefs20381absefs20381absefs',
};

export const withApiSession = (fn: any) => {
  return withIronSessionApiRoute(fn, cookieOptions);
};
