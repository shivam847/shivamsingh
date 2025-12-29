import { Code2, Lightbulb, Rocket, Users2 } from "lucide-react";

const highlights=[
    {
        icon:Code2,
        title:"Clean Code",
        descryption:"Adhering to best practices to ensure maintainable and efficient codebases.",
    },
    {
        icon:Rocket,
        title:"Performance",
        descryption:"Adhering to best practices to ensure maintainable and efficient codebases.",
    },
    {
        icon:Users2,
        title:"collaboration",
        descryption:"Adhering to best practices to ensure maintainable and efficient codebases.",
    },
    {
        icon:Lightbulb,
        title:"Innovation",
        descryption:"Adhering to best practices to ensure maintainable and efficient codebases.",
    }
]



export const About = () => {
    return (
        <section id="about" className="relative overflow-hidden py-32 ">
            <div className="container mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* left column */}

                    <div className="space-y-8">
                    <div className="animate-fade-in">
                        <span className="text-secondary-foregroung text-sm font-medium tracking-wider uppercase">About me</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animtion-delay-300 text-secondary-foreground">
                        Building the future,
                        <span className="font-serif italic font-normal text-white"> 
                             {""}One component at a time
                        </span>
                    </h2>
                    <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">
                        <p>
                            I’m a passionate React Developer who loves turning ideas into interactive, visually appealing web applications. I work with React.js, hooks, state management, and modern UI frameworks to build fast, responsive, and scalable products. I enjoy solving real-world problems through clean code and thoughtful design.
                        </p>
                        <p>
                            Aspiring React Developer with a strong foundation in JavaScript, React.js, and frontend development. Experienced in building projects using functional components, hooks, and responsive design. Eager to learn, grow, and contribute to real-world applications in a collaborative environment.
                        </p>
                    </div>
                </div>
                {/* right */}
                <div className="grid sm:grid-cols-2 gap-6">
                    {highlights.map((item,idx)=>(
                        <div key={idx} className="glass p-6 rounded-2xl animate-fade-in" style={{animationDelay:`${(idx+1)*100}ms`}}>
                            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20">
                                <item.icon className="text-primary w-6 h-6"/>
                            </div>
                            <h3 text-lg font-semibold mb-2 >{item.title}</h3>
                            <p className="text-sm text-muted-foreground">{item.descryption}</p>
                        </div>
                    ))}
                </div>
                </div>
            </div>
        </section>
    );
};