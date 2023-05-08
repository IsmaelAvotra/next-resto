import "./globals.css";
import Navbar from "./components/navbar/navbar";
import Categories from "./components/categories/categories";
import Footer from "./components/footer/footer";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body>
        <Navbar />
        <Categories />
        {children}
        <Footer />
      </body>
    </html>
  );
}
