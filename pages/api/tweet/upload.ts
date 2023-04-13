import { NextApiRequest, NextApiResponse } from 'next';
import WithHandler, { ResponseType } from '@/lib/server/withHandler';
import client from '@/lib/server/client';
import { withApiSession } from '@/lib/server/withSession';

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse<ResponseType>
) => {
  const {
    body: { message },
    session: { user },
  } = req;

  const banana = await client.banana.create({
    data: {
      message,
      user: {
        connect: {
          id: user?.id,
        },
      },
    },
  });

  return res.json({ ok: true });
};

export default withApiSession(WithHandler({ methods: ['POST'], handler }));
