import { NextApiRequest, NextApiResponse } from 'next';
import WithHandler, { ResponseType } from '@/lib/server/withHandler';
import client from '@/lib/server/client';
import { withApiSession } from '@/lib/server/withSession';

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse<ResponseType>
) => {
  if (req.method === 'GET') {
    const profile = await client.user.findUnique({
      where: { id: req.session.user?.id },
      include: {
        banana: {},
      },
    });

    res.json({ ok: true, profile });
  }

  if (req.method === 'POST') {
    const {
      body: { username, userNick, email, avatar },
      session: { user },
    } = req;
    const userNameAlreadyExists = Boolean(
      await client.user.findFirst({
        where: {
          userName: username,
          id: { not: user?.id },
        },
      })
    );
    if (userNameAlreadyExists) {
      return res.json({
        ok: false,
        error: 'Username is already taken.',
      });
    }
    const userNickAlreadyExists = Boolean(
      await client.user.findFirst({
        where: {
          userNick,
          id: { not: user?.id },
        },
      })
    );
    if (userNickAlreadyExists) {
      return res.json({
        ok: false,
        error: 'User ID is already taken.',
      });
    }
    if (email) {
      const emailAlreadyExists = Boolean(
        await client.user.findFirst({
          where: {
            email,
            id: { not: user?.id },
          },
        })
      );
      if (emailAlreadyExists) {
        return res.json({
          ok: false,
          error: 'Email is already taken.',
        });
      } else {
        await client.user.update({
          where: {
            id: user?.id,
          },
          data: {
            email,
          },
        });
      }
    }
    await client.user.update({
      where: {
        id: user?.id,
      },
      data: {
        userName: username,
        userNick,
      },
    });
    return res.json({ ok: true });
  }
};

export default withApiSession(
  WithHandler({ methods: ['GET', 'POST'], handler })
);
