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

  const alreadyExists = await client.like.findFirst({
    where: {
      userId: user?.id,
      bananaId: Number(id),
    },
  });

  if (alreadyExists) {
    await client.like.delete({
      where: {
        id: alreadyExists.id,
      },
    });
  } else {
    await client.like.create({
      data: {
        banana: {
          connect: {
            id: Number(id),
          },
        },
        user: {
          connect: {
            id: user?.id,
          },
        },
      },
    });
  }

  return res.json({ ok: true });
};

export default withApiSession(WithHandler({ methods: ['POST'], handler }));
