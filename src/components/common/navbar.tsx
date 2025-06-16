import Link from "next/link"
import { Button } from "@/components/ui/button"
import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton } from "@clerk/nextjs"

export default function Navbar() {
    const navItems = [
        { name: "Home", href: "/" },
        { name: "How It Works", href: "#how-it-works" },
        { name: "Live Draw", href: "#live-draw" },
        { name: "Winners", href: "#winners" },
    ]

    return (
        <nav className="bg-[#191970] backdrop-blur-sm  ">
            <div className="container mx-auto px-4 py-4">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <div className="flex items-center space-x-2">
                        <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center">
                            <span className="text-blue-900 font-bold text-sm">GT</span>
                        </div>
                        <span className="text-white font-bold text-xl">GulfTicket</span>
                    </div>
                    <div className="hidden md:flex items-center space-x-8">
                        {navItems.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className="text-white  font-medium"
                            >
                                {item.name}
                            </Link>
                        ))}
                    </div>

                    <div className="flex justify-end items-center p-4 gap-4 h-16">
                        <SignedOut>
                            <div className="flex gap-4">
                                <Button asChild className="bg-[#191970] hover:bg-[#191970] text-white font-semibold px-6 cursor-pointer">
                                    <SignInButton mode="modal">
                                        <span>Sign In</span>
                                    </SignInButton>
                                </Button>
                                <Button asChild className="bg-[#191970] hover:bg-[#191970] text-white font-semibold px-6 cursor-pointer">
                                    <SignUpButton mode="modal">
                                        <span>Register</span>
                                    </SignUpButton>
                                </Button>
                            </div>
                        </SignedOut>

                        <SignedIn>
                            <UserButton />
                        </SignedIn>
                    </div>
                </div>
            </div>
        </nav>
    )
}
