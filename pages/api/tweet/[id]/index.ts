import { NextApiRequest, NextApiResponse } from 'next';
import WithHandler, { ResponseType } from '@/lib/server/withHandler';
import client from '@/lib/server/client';
import { withApiSession } from '@/lib/server/withSession';

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse<ResponseType>
) => {
  const {
    query: { id },
    session: { user },
  } = req;

  const banana = await client.banana.findUnique({
    where: {
      id: Number(id),
    },
    include: {
      user: {
        select: {
          userName: true,
          userNick: true,
        },
      },
    },
  });

  const isLiked = Boolean(
    await client.like.findFirst({
      where: {
        bananaId: banana?.id,
        userId: user?.id,
      },
      select: {
        id: true,
      },
    })
  );

  res.json({
    ok: true,
    banana,
    isLiked,
  });
};

export default withApiSession(WithHandler({ methods: ['GET'], handler }));
