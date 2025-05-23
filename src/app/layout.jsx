import "../assets/styles/globals.scss"
import Nav from "./components/Nav/index"
import Footer from "./components/Footer"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const metadata = {
  title: 'JAXA - Инновационные решения',
  description: 'Инновационные решения для цифрового будущего',
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body>
        <Nav />
        <main>
          {children}
        </main>
        <Footer />
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
      </body>
    </html>
  )
}
