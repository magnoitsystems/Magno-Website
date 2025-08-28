// app/[locale]/layout.tsx
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { ReactNode } from 'react';
import '../globals.css';

// Lista de idiomas soportados.
const locales = ['es', 'en'];

// Define el tipo de los props que se pasan al layout.
// Los parámetros de la ruta (params) se pasan como un objeto simple, no como una promesa.
type Props = {
  children: ReactNode;
  params: { locale: string };
};

// Next.js usa esta función para pre-generar las rutas estáticas.
export async function generateStaticParams() {
  return await locales.map((locale) => ({ locale }));
}

// El componente del layout es asíncrono para poder obtener los mensajes.
export default async function LocaleLayout({ children, params: { locale } }: Props) {
  // Desestructuramos el "locale" directamente del objeto de parámetros.
  // Esto asegura que siempre obtengas el idioma de la URL.

  // Verificamos si el idioma de la URL es válido.
  if (!locales.includes(locale)) {
    notFound();
  }

  // Obtenemos los mensajes para el idioma actual y se lo pasamos explícitamente a la función.
  const messages = await getMessages({ locale });

  return (
    <html lang={locale}>
      <body>
        {/* El proveedor de next-intl envuelve a todos los componentes hijos,
          proporcionándoles acceso a las traducciones.
          Es una buena práctica pasarle explícitamente el 'locale' al proveedor. */}
        <NextIntlClientProvider messages={messages} locale={locale}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}