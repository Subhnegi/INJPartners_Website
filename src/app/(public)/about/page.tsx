

import Story from "@/components/About/Story";
import Founder from "@/components/About/Founder";
import Values from "@/components/About/Values";
import Mission from "@/components/About/Mission";
import Team from "@/components/About/Team";

export default function About() {
    return (
        <div className="container mx-auto px-4 py-8">
            <header className="text-center mb-12">
                <h1 className="text-4xl font-bold text-primary mb-2">
                    Insightful Research Solutions
                </h1>
                <p className="text-xl text-muted-foreground">
                    Illuminating Markets, Empowering Decisions
                </p>
            </header>

            {/* Story section */}
            <Story/>
            {/* Mission and Vision section */}
            <Mission/>
            {/* Founders section */}
            <Founder/>
            {/* Our Team section */}
            <Team/>
            {/* Values and Culture section */}
            <Values/>
        </div>
    );
}
