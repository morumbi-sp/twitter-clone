import { NextApiRequest, NextApiResponse } from 'next';
import WithHandler, { ResponseType } from '../../../lib/server/withHandler';
import client from '../../../lib/server/client';
import { withApiSession } from '../../../lib/server/withSession';

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
  const { token } = req.body;
  console.log(token);
  const foundToken = await client.token.findUnique({
    where: {
      payload: token,
    },
  });
  console.log(foundToken);
  if (!foundToken) return res.status(404).end();
  req.session.user = {
    id: foundToken?.userId,
  };
  await req.session.save();
  await client.token.deleteMany({
    where: {
      userId: foundToken.userId,
    },
  });
  res.json({ ok: true });
};

export default withApiSession(
  WithHandler({ methods: ['POST'], handler, isPrivate: false })
);
