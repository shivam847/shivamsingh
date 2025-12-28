
import { Button } from "@/components/Button"
import { ArrowRight, Download } from "lucide-react";

export const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center overflow-hidden ">
            {/* bg */}

            <div className="absolute inset-0">
                <img src="https://png.pngtree.com/thumb_back/fh260/background/20240913/pngtree-stunning-red-and-blue-smoke-images-for-download-image_16191211.jpg" alt="bg" className="w-full h-full object-cover opacity-40" />
                <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/80 to-background " />
            </div>
            {/* green dots */}

            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {[...Array(100)].map((_, i) => (
                    <div className="absolute w-1.5 h-1.5 rounded-full opacity-60" style={{
                        backgroundColor: "#f2f8f7ff",
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                        animation: `slow-drift ${15 + Math.random() * 20}s ease-in-out infinite`,
                        animationDelay: `${Math.random() * 5}s`
                    }} />
                ))}
            </div>

            {/* content */}
            <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* left */}
                    <div className="space-y-8">
                        <div className="animate-fade-in">
                            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary">
                                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                                Software Engineer
                            </span>
                        </div>
                        {/* headline */}

                        <div className="space-y-4">
                            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fade-in animation-delay-100">
                                Crafting <span className="text-primary glow-text">digital</span>
                                <br />
                                experience with
                                <br />
                                <span className="font-serif italic font-normal text-white">precision</span>
                            </h1>
                            <p className="text-lg text-muted-foreground max-w-lg animate-fade-in animation-delay-200">
                                Hi, I'm Shivam Singh - a Software Engineer specialising React, Next.js and Typescript. I build scalable, perfoment web applications that users love.
                            </p>
                        </div>

                        <div className="flex flex-wrap gap-4 animate-fade-in animation-delay-300">
                            <Button size="lg">
                                Contact me <ArrowRight className="h-5 w-5" />
                            </Button>
                            <button className="relative bg-transparent border border-border text-foreground hover:border-primary/50 transition-all duration-1000 focus-outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed group px-8 py-4 text-lg font-medium rounded-full overflow-visible animate-border ">
                                <span className="relative z-10 flex items-center justify-center gap-2">
                                    Download CV <Download className="h-5 w-5"/>
                                </span>
                            </button>
                        </div>
                    </div>
                    {/* right */}
                </div>
            </div>
        </section>
    );
};