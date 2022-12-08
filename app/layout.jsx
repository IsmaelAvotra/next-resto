import './globals.css'
import Navbar from './components/navbar'
import Categories from './components/categories'
import Footer from './components/footer'

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      {/*
        <head /> will contain the components returned by the nearest parent
        head.jsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <Navbar />
        <Categories />
        {children}
        <Footer />
      </body>
    </html>
  )
}
