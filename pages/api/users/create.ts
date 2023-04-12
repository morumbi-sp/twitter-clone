import { NextApiRequest, NextApiResponse } from 'next';
import WithHandler, { ResponseType } from '../../../lib/server/withHandler';
import client from '../../../lib/server/client';

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse<ResponseType>
) => {
  const { username, hashedPassword } = req.body;

  const searchUser = await client.user.findUnique({
    where: {
      userName: username,
    },
  });

  if (searchUser) {
    return res.json({ ok: false, error: 'Username is already existed!' });
  }
  const user = await client.user.create({
    data: {
      userName: username,
      userId: `@${username}`,
      password: hashedPassword,
    },
  });

  return res.json({ ok: true });
};

export default WithHandler({ methods: ['POST'], handler, isPrivate: false });
