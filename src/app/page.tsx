
import Hero from "@/components/home/hero"
import TrustIndicators from "@/components/home/trustIndicators"
import HowItWorks from "@/components/home/howitworks"
import ProcessSteps from "@/components/home/processsteps"
import Testimonials from "@/components/home/testimonials"
// import WorkSection from "@/components/home/howitwork"
import FaqSection from "@/components/home/faqs"
import Navbar from "@/components/common/navbar"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-900 via-blue-800 to-blue-900">
      <Navbar />
      <Hero />
      <TrustIndicators />

      <ProcessSteps />
      <HowItWorks />
      <Testimonials />
      {/* <WorkSection /> */}
      <FaqSection />

    </div>
  )
}
