import { NextApiRequest, NextApiResponse } from 'next';
import WithHandler, { ResponseType } from '@/lib/server/withHandler';
import client from '@/lib/server/client';
import { withApiSession } from '@/lib/server/withSession';
import bcrypt from 'bcryptjs';

declare module 'iron-session' {
  interface IronSessionData {
    user?: {
      id: number;
    };
  }
}

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse<ResponseType>
) => {
  const { username, password } = req.body;
  const foundUserInfo = await client.user.findUnique({
    where: {
      userName: username,
    },
  });

  if (!foundUserInfo) {
    console.log('error');
    return res.json({ ok: false, error: 'Username does not exist!' });
  }

  const passwordMatching = bcrypt.compareSync(
    password,
    foundUserInfo?.password!
  );
  if (!passwordMatching) {
    console.log('pass error');
    return res.json({ ok: false, error: 'Password is not correct!' });
  }

  req.session.user = {
    id: foundUserInfo?.id,
  };
  await req.session.save();

  res.json({ ok: true });
};

export default withApiSession(
  WithHandler({ methods: ['POST'], handler, isPrivate: false })
);
