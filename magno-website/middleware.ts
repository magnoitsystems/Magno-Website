import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  // Idiomas que soportás
  locales: ['en', 'es'],
  // Idioma por defecto si el navegador no coincide con ninguno
  defaultLocale: 'es',
  // Detecta idioma del navegador automáticamente
  localeDetection: true
});

export const config = {
  // Se aplica a todas las rutas menos estáticos y API
  matcher: ['/((?!api|_next|.*\\..*).*)']
};
