import { Montserrat } from 'next/font/google'
import './globals.css'

const montSerrat = Montserrat({ weight:'400', subsets: ['latin'] })

export const metadata = {
  title: 'Bethesda',
  description: 'Ministério Apostólico Bethesda',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{metadata.title}</title>
      </head>
      <body className={montSerrat.className}>{children}</body>
    </html>
  )
}
