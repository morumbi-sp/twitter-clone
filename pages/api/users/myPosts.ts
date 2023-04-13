import { NextApiRequest, NextApiResponse } from 'next';
import WithHandler, { ResponseType } from '@/lib/server/withHandler';
import client from '@/lib/server/client';
import { withApiSession } from '@/lib/server/withSession';

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse<ResponseType>
) => {
  const bananas = await client.banana.findMany({
    where: { userId: req.session.user?.id },
    include: {
      user: {},
    },
  });

  res.json({ ok: true, bananas });
};

export default withApiSession(WithHandler({ methods: ['GET'], handler }));
