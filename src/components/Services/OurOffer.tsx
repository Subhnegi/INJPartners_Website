import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart2, Users, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";
import { Tilt } from "react-tilt";

const OurOffer = ({ services }) => {
    const getIconComponent = (iconName: string) => {
        switch (iconName) {
            case "Users":
                return Users;
            case "BarChart2":
                return BarChart2;
            case "TrendingUp":
                return TrendingUp;
            default:
                return Users;
        }
    };

    return (
        <section className="mb-16">
            <h2 className="text-3xl font-semibold mb-6">What We Offer</h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {services.map((offer, index) => {
                    const IconComponent = getIconComponent(offer.icon);
                    return (
                        <motion.div
                            key={offer._id}
                            initial={{ opacity: 0, y: 50 }}  // Start with hidden and below position
                            whileInView={{ opacity: 1, y: 0 }}  // Fade in and slide up when in view
                            viewport={{ once: true, amount: 0.2 }}  // Trigger once when 20% of card is visible
                            transition={{
                                duration: 0.5,
                                ease: "easeOut",
                                delay: index * 0.2,  // Staggered effect for each card
                            }}
                        >   
                            <Tilt>
                            <Card className="border-[#4251f88b]">
                                <CardHeader>
                                    <IconComponent className="w-10 h-10  mb-4 text-[#4251f88b]" />
                                    <CardTitle>{offer.title}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="mb-4">{offer.content}</p>
                                    <h4 className="font-semibold mb-2">
                                        Methodologies:
                                    </h4>
                                    <ul className="list-disc list-inside mb-4">
                                        {offer.methodologies.map((method) => (
                                            <li key={method}>{method}</li>
                                        ))}
                                    </ul>
                                    <h4 className="font-semibold mb-2">
                                        Benefits:
                                    </h4>
                                    <ul className="list-disc list-inside mb-4">
                                        {offer.benefits.map((benefit) => (
                                            <li key={benefit}>{benefit}</li>
                                        ))}
                                    </ul>
                                    <Button asChild className="button-primary">
                                        <Link href={`/services/${offer._id}`}>
                                            Read More
                                        </Link>
                                    </Button>
                                </CardContent>
                            </Card>
                            </Tilt>
                        </motion.div>
                    );
                })}
            </div>
        </section>
    );
};

export default OurOffer;
