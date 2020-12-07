import { useState } from "react";
import jwt from 'jsonwebtoken';

export default function Home() {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('You are not logged in')

  async function submitForm() {
    const res = await fetch('api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ username, password })
    }).then((t) => t.json())

    const token = res.token

    if (token) {
      const json = jwt.decode(token) as { [key: string]: string}
      setMessage(`Welcome ${json.username} and you are ${json.admin ? 'an admin' : 'not an admin'}`)
      console.log(json);
      
    } else setMessage('Ca marche pas bordel')
  }

  return (
    <div>
      <h1>{message}</h1>
      <form onSubmit={submitForm} method="POST">
        <input type="text" name="username" value={username} onChange={e => setUsername(e.target.value)} />
        <br/>
        <input type="password" name="password" value={password} onChange={e => setPassword(e.target.value)} />
        <br/>
        <input type="submit" value="Login" />
      </form>
    </div>
  )
}
