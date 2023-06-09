import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Calculadora de Macros - Dieta Flexível',
  description:
    'Calcule seu gasto energético e sua Taxa Metabólica Basal (TMB). Planeje os macros para sua Dieta Flexível com base nas mais modernas técnicas nutricionais. Saiba exatamente quantas Proteínas, Carboidratos e Gordura você precisa para um processo de emagrecimento saudável.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
