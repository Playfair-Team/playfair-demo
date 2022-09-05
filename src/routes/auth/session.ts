import type {RequestHandler} from '@sveltejs/kit'
import {createSessionCookie, verifyIdToken} from '$lib/firebase/admin'

const ONE_WEEK_IN_SECONDS = 60 * 60 * 24 * 7

// POST /auth/session
export const POST: RequestHandler = async ({request}) => {
  const authHeader = request.headers.get('Authorization')
  const [scheme, token] = authHeader.split(' ')

  if (scheme !== 'Bearer' || !token) {
    return {status: 401, body: 'Invalid authorization header'}
  }

  try{
    const {sub, email} = await verifyIdToken(token)

    const user = {id: sub, email}

    const sessionCookie = createSessionCookie(token, ONE_WEEK_IN_SECONDS)

    return {
      status: 200,
      body: user,
      headers: {
        'Set-Cookie': sessionCookie,
      }
    }


  }catch{
    return {status: 401, body: 'Invalid auth token'}
  }
}
