import { Shield, Globe, ShieldCheck, EarthLock, TicketCheck } from "lucide-react"

export default function TrustIndicators() {
    const indicators = [
        {
            icon: Globe,
            title: "Licensed Internationally",

        },
        {
            icon: Shield,
            title: " Insurance Regulated  ",

        },
        {
            icon: TicketCheck,
            title: "Certified Technology RNG ",

        },
        {
            icon: ShieldCheck,
            title: "KYC Verified Withdrawals",

        },
        {
            icon: EarthLock,
            title: "End-to-End Encryption ",

        }
    ]

    return (
        <div className="bg-[#191970]">
            <div className="container mx-auto px-4 py-16">
                <div className="text-center text-3xl lg:text-4xl font-bold text-white mb-12">
                    <h1>REGULATION & SECURITY</h1>
                </div>
                <div className="grid grid-cols-2 lg:grid-cols-5 gap-8">
                    {indicators.map((indicator, index) => (
                        <div key={index} className="flex items-center space-x-3 text-white">
                            <div className="w-8 h-8 bg-blue-700/50 rounded-full flex items-center justify-center">
                                <indicator.icon className="w-8 h-8 text-white" />
                            </div>
                            <div>
                                <p className="font-semibold text-lg">{indicator.title}</p>

                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
