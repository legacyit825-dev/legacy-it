import MyRoute from "./MyRoute"
import ScrollToTop from "./components/ScrollToTop"
import { ContactSecurityProvider } from "./context/ContactSecurityContext"

function App() {

  return (
    <ContactSecurityProvider>
      <ScrollToTop />
      <MyRoute />
    </ContactSecurityProvider>
  )
}

export default App
