import { NextApiRequest, NextApiResponse } from "next";
import jwt from 'jsonwebtoken';

const KEY = 'dvrejpgg62ger65ger5g6v5erg'

export default function(req: NextApiRequest, res: NextApiResponse) {
  // it should NOT be a react component
  if (!req.body) {
    res.statusCode = 404
    res.end('Error')
    return
  }

  const { username, password } = req.body
  
  res.json({
    token: jwt.sign({
      username,
      admin: username === 'admin' && password === 'admin'
    }, KEY)
  })

  console.log(req.body);
  
} 