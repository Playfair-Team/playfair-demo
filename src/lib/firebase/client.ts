import { getApp, getApps, initializeApp } from 'firebase/app';
import { getAuth, setPersistence, inMemoryPersistence, sendSignInLinkToEmail, isSignInWithEmailLink, signInWithEmailLink } from 'firebase/auth';

if(!import.meta.env.VITE_FIREBASE_PROJECT_ID || !import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || !import.meta.env.VITE_FIREBASE_API_KEY){
    throw new Error("Firebase client env variables not set")
}
const firebaseConfig = {
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
};

export const getClientApp = () => {
  if(getApps().length) return getApp();

  const app = initializeApp(firebaseConfig);

  const auth = getAuth(app)
  setPersistence(auth, inMemoryPersistence)

  return app;
}

export const sendMagicLink = (email:string, redirectUrl: string) => {
  const auth = getAuth(getClientApp())
  const actionCodeSettings = {
    url: redirectUrl,
    handleCodeInApp: true
  }

  return sendSignInLinkToEmail(auth, email, actionCodeSettings)
}

export const isMagicLink = (link: string) => {
  const auth = getAuth(getClientApp())
  return isSignInWithEmailLink(auth, link)
}

export const signInWithMagicLink = (email: string, link: string) => {
  const auth = getAuth(getClientApp())
  return signInWithEmailLink(auth, email, link)
}