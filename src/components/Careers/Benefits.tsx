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
import { motion } from "framer-motion"; // Import Framer Motion

const Benefits = () => {
    return (
        <section>
            <h2 className="text-3xl font-semibold mb-6">
                Our Culture and Benefits
            </h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {/* Benefit cards with animations */}
                {[
                    {
                        icon: <Users className="mr-2" />,
                        title: "Collaborative Environment",
                        description: "Work alongside passionate professionals in a supportive and innovative atmosphere. We believe in the power of teamwork and diverse perspectives."
                    },
                    {
                        icon: <GraduationCap className="mr-2" />,
                        title: "Continuous Learning",
                        description: "Benefit from our comprehensive training programs, conference attendance opportunities, and mentorship initiatives. We invest in your growth and development."
                    },
                    {
                        icon: <Zap className="mr-2" />,
                        title: "Work-Life Balance",
                        description: "Enjoy flexible working hours, remote work options, and generous paid time off. We understand the importance of balancing professional and personal life."
                    },
                    {
                        icon: <Briefcase className="mr-2" />,
                        title: "Competitive Compensation",
                        description: "Receive a competitive salary, performance bonuses, and comprehensive health benefits. We value your contributions and reward excellence."
                    },
                    {
                        icon: <BookOpen className="mr-2" />,
                        title: "Industry Leadership",
                        description: "Be at the forefront of market research innovation. Contribute to industry publications, speak at conferences, and shape the future of our field."
                    },
                    {
                        icon: <Coffee className="mr-2" />,
                        title: "Great Perks",
                        description: "Enjoy our fully stocked kitchen, regular team events, wellness programs, and modern, comfortable office spaces designed for productivity and collaboration."
                    }
                ].map((benefit, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                    >
                        <Card className="border-[#4251f88b]">
                            <CardHeader>
                                <CardTitle className="flex items-center">
                                    <span className="text-[#4251f88b]">{benefit.icon}</span>
                                    {benefit.title}
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p>{benefit.description}</p>
                            </CardContent>
                        </Card>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Benefits;
