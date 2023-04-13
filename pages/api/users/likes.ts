import { NextApiRequest, NextApiResponse } from 'next';
import WithHandler, { ResponseType } from '@/lib/server/withHandler';
import client from '@/lib/server/client';
import { withApiSession } from '@/lib/server/withSession';

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse<ResponseType>
) => {
  const {
    session: { user },
  } = req;
  const likes = await client.like.findMany({
    where: { userId: user?.id },
    include: {
      banana: {
        select: {
          createdAt: true,
          message: true,
          user: {
            select: {
              userName: true,
              userNick: true,
              avatar: true,
            },
          },
        },
      },
    },
  });
  res.json({
    ok: true,
    likes,
  });
};

export default withApiSession(WithHandler({ methods: ['GET'], handler }));
