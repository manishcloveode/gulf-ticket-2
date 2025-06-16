export default function Testimonials() {
    const testimonials = [
        {
            text: "Won RM10K first week",
            author: "Azlan (KL) ",
        },
        {
            text: "Easy withdrawal",
            author: "Siti (JB)  ",
        },
        {
            text: "Daily draws are fun",
            author: "Lim (Penang)",
        },
    ]

    return (
        <section className="bg-[#191970]">
            <div className="container mx-auto px-4 py-16" id="winners">
                <div className="grid md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className="bg-blue-800/30 backdrop-blur-sm rounded-lg p-6">
                            <div className="text-yellow-400 text-4xl mb-2">&quot;<span className="text-white mb-4 text-2xl italic">{testimonial.text}</span></div>
                            {/* <p className="text-white mb-4 text-2xl italic">{testimonial.text}</p> */}
                            {testimonial.author && <p className="text-blue-200 text-lg italic">- {testimonial.author}</p>}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
