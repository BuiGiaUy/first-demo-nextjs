import type { NextApiRequest, NextApiResponse } from '../../node_modules/next/dist/shared/lib/utils'

export default function handler(req :NextApiRequest, res : NextApiResponse) {
  res.status(200).json({ name: 'John Doe' })
}
