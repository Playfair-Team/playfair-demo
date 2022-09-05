interface ImportMetaEnv {
  // Safe to share with client
  readonly VITE_FIREBASE_PROJECT_ID: string
  readonly VITE_FIREBASE_AUTH_DOMAIN: string
  readonly VITE_FIREBASE_API_KEY: string
  // Never expose to client
  readonly VITE_FIREBASE_ADMIN_CLIENT_EMAIL: string
  readonly VITE_FIREBASE_ADMIN_PRIVATE_KEY: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}