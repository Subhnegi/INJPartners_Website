import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart2, Users, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const OurOffer = ({services}) => {
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
                {services.map((offer) => {
                    const IconComponent = getIconComponent(offer.icon)
                    return (
                        <Card key={offer._id}>
                            <CardHeader>
                                <IconComponent className="w-10 h-10 text-primary mb-4" />
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
                                <Button asChild>
                                    <Link href={`/services/${offer._id}`}>
                                        Read More
                                    </Link>
                                </Button>
                            </CardContent>
                        </Card>
                    );
                })}
            </div>
        </section>
    );
};

export default OurOffer;
