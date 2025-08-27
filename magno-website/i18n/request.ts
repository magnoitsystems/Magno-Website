import { getRequestConfig } from 'next-intl/server';
import { notFound } from 'next/navigation';

// Define los locales soportados
const locales = ['es', 'en'] as const;

export default getRequestConfig(async ({ locale }) => {
  // Validar que el locale existe y hacer type assertion
  if (!locale || !locales.includes(locale as any)) {
    notFound();
  }

  // Type assertion para asegurar que locale es string
  const validLocale = locale as string;

  return {
    locale: validLocale,
    messages: (await import(`../src/messages/${validLocale}.json`)).default
  };
});