import Link from "next/link";

import { Button } from "@/components/ui/button";
import Openings from "@/components/Careers/Openings";
import Benefits from "@/components/Careers/Benefits";

export default function CareersPage() {
    return (
        <div className="container mx-auto px-4 py-8">
            <header className="text-center mb-12">
                <h1 className="text-4xl font-bold text-primary mb-2">
                    Join Our Team
                </h1>
                <p className="text-xl text-muted-foreground">
                    Shape the Future of Market Research with Us
                </p>
            </header>
            {/* Openings section */}
            <Openings />
            {/* Culture and Benefits section */}
            <Benefits/>
            
            {/* Apply section */}
            <div className="text-center mt-12">
                <h3 className="text-2xl font-semibold mb-4">
                    Ready to Make an Impact?
                </h3>
                <p className="mb-6">
                    Join our team of passionate researchers and innovators.
                    Apply now or reach out to learn more!
                </p>
                <div className="space-x-4">
                    <Button asChild>
                        <Link href="/careers/apply">Apply Now</Link>
                    </Button>
                    <Button variant="outline" asChild>
                        <Link href="mailto:careers@insightfulresearch.com">
                            Contact Us
                        </Link>
                    </Button>
                </div>
            </div>
        </div>
    );
}
