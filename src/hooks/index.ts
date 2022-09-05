import { getIdTokenFromSessionCookie } from '$lib/firebase/admin'
import { getCookieValue } from '$lib/getCookieValue'
import type { GetSession, Handle } from '@sveltejs/kit'

export const handle: Handle = async ({event, resolve}) => {
	const cookie = event.request.headers.get('cookie')
	const token = await getIdTokenFromSessionCookie(
		getCookieValue(cookie, 'session')
	)

	event.locals.idToken = token

	return resolve(event)
}

export const getSession: GetSession = ({locals}) => {
	const user = locals.idToken
		? {id: locals.idToken.sub, email: locals.idToken.email}
		: null

	return {user}
}