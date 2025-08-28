import createMiddleware from 'next-intl/middleware';
import {NextRequest} from 'next/server';
 
export default async function middleware(request: NextRequest) {
  const [, locale, ...segments] = request.nextUrl.pathname.split('/');
 
  if (locale != null && segments.join('/') === 'profile') {
    const usesNewProfile =
      (request.cookies.get('NEW_PROFILE')?.value || 'false') === 'true';
 
    if (usesNewProfile) {
      request.nextUrl.pathname = `/${locale}/profile/new`;
    }
  }
 
  const handleI18nRouting = createMiddleware({
    locales: ['en', 'de'],
    defaultLocale: 'en'
  });
  const response = handleI18nRouting(request);
  return response;
}
 
export const config = {
  matcher: ['/', '/(de|en)/:path*']
};