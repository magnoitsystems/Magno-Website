// middleware.ts
import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  // A list of all locales that are supported
  locales: ['en', 'es'],

  // Used when no locale matches
  defaultLocale: 'es'
});

export const config = {
  // Matcher de next.js. Aplica el middleware a todas las rutas que NO incluyan:
  // - Rutas de API
  // - Archivos estáticos
  // - Archivos con extensión
  // El último '.*' se asegura de incluir rutas con y sin prefijo de idioma.
  matcher: ['/', '/(es|en)/:path*']
};