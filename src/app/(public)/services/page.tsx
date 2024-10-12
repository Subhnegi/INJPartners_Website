
import CaseStudies from "@/components/Services/CaseStudies";
import OurOffer from "@/components/Services/OurOffer";

export default function ServicesPage() {
    return (
        <div className="container mx-auto px-4 py-8">
            <header className="text-center mb-12">
                <h1 className="text-4xl font-bold text-primary mb-2">
                    Our Services
                </h1>
                <p className="text-xl text-muted-foreground">
                    Empowering Your Business with Data-Driven Insights
                </p>
            </header>
            {/* What We Offer section */}
            <OurOffer />

            {/* Case Studies section */}
            <CaseStudies/>
        </div>
    );
}
