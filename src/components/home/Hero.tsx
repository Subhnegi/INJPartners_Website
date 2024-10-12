import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
const Hero = () => {
    return (
        <div>
            <section className="bg-gradient-to-r from-primary to-primary-foreground text-white py-20">
                <div className="container mx-auto text-center">
                    <h1 className="text-4xl font-bold mb-4">
                        Unlock Market Insights with InsightPulse
                    </h1>
                    <p className="text-xl mb-8">
                        Data-driven decisions for your business growth
                    </p>
                    <Button asChild size="lg">
                        <Link href="/services">Explore Our Services</Link>
                    </Button>
                </div>
            </section>
        </div>
    );
};

export default Hero;
