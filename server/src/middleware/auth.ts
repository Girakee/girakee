import type { NextFunction, Request, Response } from 'express'
import jwt from 'jsonwebtoken'
import { config } from '../config.js'

export interface AuthRequest extends Request {
  admin?: { id: string; email: string }
}

export function requireAdmin(req: AuthRequest, res: Response, next: NextFunction) {
  const header = req.headers.authorization
  if (!header?.startsWith('Bearer ')) {
    return res.status(401).json({ error: 'Unauthorized' })
  }

  try {
    const token = header.slice(7)
    const payload = jwt.verify(token, config.jwtSecret) as { sub: string; email: string }
    req.admin = { id: payload.sub, email: payload.email }
    return next()
  } catch {
    return res.status(401).json({ error: 'Invalid or expired token' })
  }
}
