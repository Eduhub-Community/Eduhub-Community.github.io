import Footer from '@/components/footer'
import Navigation from '@/components/navigation'
import { ThemeProvider } from '@/components/theme-provider'
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <ThemeProvider attribute="class" defaultTheme="dark">
          <Navigation />
          <Main />
          <Footer />
        </ThemeProvider>
        <NextScript />
      </body>
    </Html>
  )
}
