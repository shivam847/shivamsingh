
import { Button } from "@/components/Button"
import { ArrowRight, Download, Github, Linkedin, Twitter } from "lucide-react";


const skills=[
    "React",
    "Node.js",
    "React",
    "Node.js",
    "React",
    "Node.js",
    "React",
    "Node.js",
    "React",
    "Node.js",
    "React",
    "Node.js",
];

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
                                    Download CV <Download className="h-5 w-5" />
                                </span>
                            </button>
                        </div>
                        {/* social links */}

                        <div className="flex items-center animate-fade-in animation-delay-300 gap-4">
                            <span className="text-sm text-muted-foreground">Follow:</span>
                            {[
                                { icon: Linkedin, href: "#" },
                                { icon: Github, href: "#" },
                                { icon: Twitter, href: "#" },
                            ].map((social, idx) => (
                                <a href={social.href} key={idx} className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all duration-300">{<social.icon className="w-5 h-5" />}</a>
                            ))}

                        </div>
                    </div>
                    {/* right */}

                    <div className="relative animate-fade-in animation-delay-300">
                        <div className="relative max-w-md mx-auto">
                            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/30 via-transparent to-primary/10 blur-2xl animate-pulse"/>
                            <div className="relative glass rounded-3xl p-2 glow-border">
                                <img src="https://www.shutterstock.com/image-vector/anime-boy-black-hair-hoodie-600nw-2078861473.jpg" alt="profile" className="w-full aspect-[4/5] object-cover rounded-2xl " />

                                <div className="absolute -bottom-4 -right-4 glass rounded-xl px-4 py-3 animate-float">
                                    <div className="flex items-center gap-3">
                                        <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"/>
                                            <span className="text-sm font-medium">Available for work</span>
                                        
                                    </div>
                                </div>
                                {/* stats */}

                                
                            </div>
                        </div>
                    </div>
                </div>
                {/* skills */}

                <div className="mt-20 animate-fade-in animation-delay-600">
                    <p className="text-sm text-muted-foreground mb-6 text-center">Technologies I work with</p>
                    <div className="relative overflow-hidden">
                        <div className="flex animate-marquee">
                            {[...skills,...skills].map((skill,idx)=>(
                                <div key={idx} className="flex-shrink-0 px-8 py-4">
                                    <span className="text-xl font-semibold text-muted-foreground/50 hover:text-muted-foreground transition-colors">{skill}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};