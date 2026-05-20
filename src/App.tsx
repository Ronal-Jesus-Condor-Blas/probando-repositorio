import { About } from "@/components/landing/About"
import { BusinessLines } from "@/components/landing/BusinessLines"
import { Contact } from "@/components/landing/Contact"
import { Differentiators } from "@/components/landing/Differentiators"
import { Footer } from "@/components/landing/Footer"
import { Header } from "@/components/landing/Header"
import { Hero } from "@/components/landing/Hero"
import { NewsQuality } from "@/components/landing/NewsQuality"
import { WhatsAppButton } from "@/components/landing/WhatsAppButton"

function App() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Header />
      <Hero />
      <About />
      <BusinessLines />
      <Differentiators />
      <NewsQuality />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}

export default App
