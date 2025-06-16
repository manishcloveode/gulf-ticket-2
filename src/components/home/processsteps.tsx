export default function ProcessSteps() {
    const steps = [
        { number: 1, title: "Register", subtitle: "(OTP)" },
        { number: 2, title: "Deposit", subtitle: "RM50" },
        { number: 3, title: "Pick Numbers", subtitle: "" },
        { number: 4, title: "Watch Live", subtitle: "Draw" },
        { number: 5, title: "Withdraw in", subtitle: "24 hours" },
    ];

    return (
        <>
            <div className="bg-[#191970]" id="how-it-works">
                <h2 className="text-3xl lg:text-4xl font-bold text-white text-center">HOW IT WORKS</h2>

                <div className="relative container mx-auto px-4 py-16">

                    {/* Show line only on md and above */}
                    <div className="hidden md:block absolute top-24 left-1/2 w-full max-w-[80%] transform -translate-x-1/2 h-1 bg-white/30 z-0" />

                    <div className="relative z-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
                        {steps.map((step, index) => (
                            <div key={index} className="text-center">
                                <div className="w-16 h-16 bg-gradient-to-r from-blue-950 to-blue-700 rounded-full flex items-center justify-center mx-auto mb-4 border-4 border-white">
                                    <span className="text-white font-bold text-2xl">{step.number}</span>
                                </div>
                                <h3 className="text-white font-semibold text-xl mb-1">{step.title}</h3>
                                {step.subtitle && <p className="text-white text-xl">{step.subtitle}</p>}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}
