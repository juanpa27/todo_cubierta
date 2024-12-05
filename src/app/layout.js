import { Inter } from 'next/font/google'
import './globals.css'
import Header from './components/Header'
import Footer from './components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Todo Cubierta - Venta de Cubiertas de Calidad',
  description: 'Ofrecemos una amplia gama de cubiertas de las mejores marcas para todo tipo de vehículos. Calidad y servicio garantizado.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={`${inter.className} min-h-screen flex flex-col`}>
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}

