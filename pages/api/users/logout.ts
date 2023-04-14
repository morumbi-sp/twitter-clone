import { NextApiRequest, NextApiResponse } from 'next';
import WithHandler, { ResponseType } from '@/lib/server/withHandler';
import { withApiSession } from '@/lib/server/withSession';

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse<ResponseType>
) => {
  req.session.destroy();
  res.json({
    ok: true,
  });
};

export default withApiSession(WithHandler({ methods: ['GET'], handler }));
