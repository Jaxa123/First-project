import "../assets/styles/globals.scss"
import NavBar from "./components/Nav"


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={"lending-page-wrapper"}>
        <NavBar />
        {children}
      </body>
    </html>
  )
}
