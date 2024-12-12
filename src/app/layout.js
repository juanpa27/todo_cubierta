import { Inter } from 'next/font/google'
import './globals.css'
import Header from './components/Header'
import Footer from './components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: {
    default: 'Todo Cubierta - Venta y Servicio de Neumáticos',
    template: '%s | Todo Cubierta'
  },
  description: 'Ofrecemos una amplia gama de cubiertas de las mejores marcas para todo tipo de vehículos. Calidad y servicio garantizado en Paraguay.',
  keywords: ['neumáticos', 'cubiertas', 'servicio automotriz', 'Paraguay', 'Todo Cubierta'],
  authors: [{ name: 'Todo Cubierta' }],
  creator: 'Todo Cubierta',
  publisher: 'Todo Cubierta',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: 'Todo Cubierta - Venta y Servicio de Neumáticos',
    description: 'Ofrecemos una amplia gama de cubiertas de las mejores marcas para todo tipo de vehículos. Calidad y servicio garantizado en Paraguay.',
    url: 'https://www.todocubierta.com',
    siteName: 'Todo Cubierta',
    images: [
      {
        url: 'https://www.todocubierta.com/og-image.jpeg', // Asegúrate de tener esta imagen en tu carpeta public
        width: 1200,
        height: 630,
        alt: 'Todo Cubierta - Venta y Servicio de Neumáticos',
      },
    ],
    locale: 'es_PY',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Todo Cubierta - Venta y Servicio de Neumáticos',
    description: 'Ofrecemos una amplia gama de cubiertas de las mejores marcas para todo tipo de vehículos. Calidad y servicio garantizado en Paraguay.',
    images: ['https://www.todocubierta.com/twitter-image.jpg'], // Asegúrate de tener esta imagen en tu carpeta public
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={`${inter.className} flex flex-col min-h-screen`}>
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}

