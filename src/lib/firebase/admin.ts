import type {DecodedIdToken} from 'firebase-admin/auth'
import {initializeApp, getApps, getApp, cert} from 'firebase-admin/app'
import {getAuth} from 'firebase-admin/auth'

const projectId = import.meta.env.VITE_FIREBASE_PROJECT_ID
const clientEmail = import.meta.env.VITE_FIREBASE_ADMIN_CLIENT_EMAIL
const privateKey = import.meta.env.VITE_FIREBASE_ADMIN_PRIVATE_KEY.replace(
  /\\n/g,
 	'\n'
)
const apiKey = import.meta.env.VITE_FIREBASE_API_KEY

if (!projectId || !clientEmail || !privateKey || !apiKey) {
	throw new Error('Firebase Admin environment variables not set')
}

const adminConfig = {
  credential: cert({
    projectId,
    clientEmail,
    privateKey,
  })
}

export const getAdminApp = () => getApps().length ? getApp() : initializeApp(adminConfig)

export const verifyIdToken = (token: string) => {
  const auth = getAuth(getAdminApp())

  return auth.verifyIdToken(token)
}

export const createSessionCookie = (token: string, maxAge: number) => {
  const expiresIn = maxAge * 1000 // in milliseconds
  const auth = getAuth(getAdminApp())
  const session = auth.createSessionCookie(token, {expiresIn})
  return `session=${session}; SameSite=Strict; path=/; HttpOnly; Secure; Max-Age=${maxAge}`
}

export const getIdTokenFromSessionCookie = async (
	sessionCookie: string | null
): Promise<DecodedIdToken | null> => {
	if (!sessionCookie) return null

	const auth = getAuth(getAdminApp())

	return auth.verifySessionCookie(sessionCookie, true).catch(() => null)
}