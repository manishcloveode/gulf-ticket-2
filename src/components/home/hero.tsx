import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function Hero() {
    return (
        <section className="bg-[#191970]">
            <div className="container mx-auto px-4 py-16 ">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left Content */}
                    <div className="space-y-8">
                        <div className="space-y-4">
                            <h1 className="text-4xl lg:text-6xl font-semibold text-white leading-tight">
                                Malaysia&apos;s #1
                                <br />
                                Daily Draw Platform
                            </h1>
                            <p className="text-2xl lg:text-3xl text-yellow-400 font-semibold">~80%-90% Winning Chance</p>
                            <p className="text-lg text-blue-100 max-w-md">
                                Win Cars, Motorbikes, Cash & More
                                <br />- Daily Prizes Up To RM 115,000,000
                            </p>
                        </div>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Button size="lg" className="bg-blue-700 hover:bg-blue-800 text-white font-semibold px-8 py-3">
                                Register Now
                            </Button>
                            <Button
                                size="lg"

                                className=" bg-blue-900 text-white hover:bg-blue-800  px-8 py-3"
                            >
                                Watch Live
                            </Button>
                        </div>
                    </div>

                    {/* Right Content - Hero Image */}
                    <div className="relative">


                        <div className="relative">
                            <Image
                                src="/hero.png"
                                alt="Luxury car and motorcycle prizes"
                                width={600}
                                height={400}
                                className="w-full h-auto"
                                priority
                            />

                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
