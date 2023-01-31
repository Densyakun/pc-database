import type { NextApiRequest, NextApiResponse } from 'next'
import { defaultHandler } from "ra-data-simple-prisma"
import prismaClient from "../../../lib/prisma"

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  defaultHandler(req, res, prismaClient)
}