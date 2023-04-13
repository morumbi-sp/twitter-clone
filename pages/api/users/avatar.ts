import { NextApiRequest, NextApiResponse } from 'next';
import WithHandler, { ResponseType } from '@/lib/server/withHandler';
import client from '@/lib/server/client';
import { withApiSession } from '@/lib/server/withSession';

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse<ResponseType>
) => {
  if (req.method === 'POST') {
    const {
      body: { avatarNumber },
      session: { user },
    } = req;

    await client.user.update({
      where: {
        id: user?.id,
      },
      data: {
        avatar: avatarNumber,
      },
    });
    return res.json({ ok: true, avatarNumber });
  }
  if (req.method === 'GET') {
    const {
      session: { user },
    } = req;

    const avatar = await client.user.findUnique({
      where: {
        id: user?.id,
      },
      select: {
        avatar: true,
      },
    });
    return res.json({ ok: true, avatar });
  }
};

export default withApiSession(
  WithHandler({ methods: ['GET', 'POST'], handler })
);
