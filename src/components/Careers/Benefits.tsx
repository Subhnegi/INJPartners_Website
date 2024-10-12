import React from "react";
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

import {
    Briefcase,
    GraduationCap,
    Users,
    Zap,
    BookOpen,
    Coffee,
} from "lucide-react";
const Benefits = () => {
    return (
        <section>
            <h2 className="text-3xl font-semibold mb-6">
                Our Culture and Benefits
            </h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center">
                            <Users className="mr-2" />
                            Collaborative Environment
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p>
                            Work alongside passionate professionals in a
                            supportive and innovative atmosphere. We believe in
                            the power of teamwork and diverse perspectives.
                        </p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center">
                            <GraduationCap className="mr-2" />
                            Continuous Learning
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p>
                            Benefit from our comprehensive training programs,
                            conference attendance opportunities, and mentorship
                            initiatives. We invest in your growth and
                            development.
                        </p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center">
                            <Zap className="mr-2" />
                            Work-Life Balance
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p>
                            Enjoy flexible working hours, remote work options,
                            and generous paid time off. We understand the
                            importance of balancing professional and personal
                            life.
                        </p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center">
                            <Briefcase className="mr-2" />
                            Competitive Compensation
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p>
                            Receive a competitive salary, performance bonuses,
                            and comprehensive health benefits. We value your
                            contributions and reward excellence.
                        </p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center">
                            <BookOpen className="mr-2" />
                            Industry Leadership
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p>
                            Be at the forefront of market research innovation.
                            Contribute to industry publications, speak at
                            conferences, and shape the future of our field.
                        </p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center">
                            <Coffee className="mr-2" />
                            Great Perks
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p>
                            Enjoy our fully stocked kitchen, regular team
                            events, wellness programs, and modern, comfortable
                            office spaces designed for productivity and
                            collaboration.
                        </p>
                    </CardContent>
                </Card>
            </div>
        </section>
    );
};

export default Benefits;
