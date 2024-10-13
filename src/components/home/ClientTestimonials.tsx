"use client";
import React from "react";
import { useEffect, useState } from "react";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import { type CarouselApi } from "@/components/ui/carousel";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
const ClientTestimonials = () => {
    const [testimonialApi, setTestimonialApi] = useState<CarouselApi>();
    const [testimonialCurrent, setTestimonialCurrent] = useState(0);
    useEffect(() => {
        if (!testimonialApi) {
            return;
        }
        testimonialApi.on("select", () => {
            setTestimonialCurrent(testimonialApi.selectedScrollSnap());
        });

    }, [testimonialApi]);

    const carouselContent=[
        {
            name: "Sarah Johnson",
            role: "CEO, TechInnovate",
            testimonial:
                "InsightPulse's market analysis was instrumental in our successful product launch. Their insights helped us identify key market opportunities we hadn't considered.",
        },
        {
            name: "Michael Chen",
            role: "Marketing Director, GreenLife",
            testimonial:
                "The depth of consumer behavior analysis provided by InsightPulse transformed our marketing strategy. We've seen a 40% increase in customer engagement since implementing their recommendations.",
        },
        {
            name: "Emily Rodriguez",
            role: "Strategy Lead, FutureFinance",
            testimonial:
                "Working with InsightPulse has been a game-changer for our business. Their trend forecasting capabilities have helped us stay ahead of the curve in a rapidly evolving industry.",
        },
        {
            name: "Emily Rodriguez",
            role: "Strategy Lead, FutureFinance",
            testimonial:
                "Working with InsightPulse has been a game-changer for our business. Their trend forecasting capabilities have helped us stay ahead of the curve in a rapidly evolving industry.",
        },
        {
            name: "Emily Rodriguez",
            role: "Strategy Lead, FutureFinance",
            testimonial:
                "Working with InsightPulse has been a game-changer for our business. Their trend forecasting capabilities have helped us stay ahead of the curve in a rapidly evolving industry.",
        },
    ]
    return (
        <section className="py-16 bg-background">
            <div className="container mx-auto">
                <h2 className="text-3xl font-bold text-center mb-12">
                    What Our Clients Say
                </h2>
                <Carousel
                    className="w-full max-w-xs sm:max-w-2xl lg:max-w-5xl mx-auto py-8"
                    setApi={setTestimonialApi}
                >
                    <div className="py-8">
                    <CarouselContent className="-ml-4">
                        {carouselContent.map((testimonial, index) => (
                            <CarouselItem
                                key={index}
                                className="pl-4 md:basis-1/2 lg:basis-1/3"
                            >
                                <div className="h-full">
                                    <Card className="h-full flex flex-col justify-between">
                                        <CardHeader>
                                            <CardTitle>
                                                {testimonial.name}
                                            </CardTitle>
                                            <CardDescription>
                                                {testimonial.role}
                                            </CardDescription>
                                        </CardHeader>
                                        <CardContent>
                                            <p className="italic">
                                                "{testimonial.testimonial}"
                                            </p>
                                        </CardContent>
                                    </Card>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    </div>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>
                <div className="py-2 text-center space-x-1">
                    {[...Array(carouselContent.length)].map((_, i) => (
                        <Button
                            key={i}
                            variant="outline"
                            size="sm"
                            className={`w-2 h-2 rounded-full p-0 ${
                                i === testimonialCurrent
                                    ? "bg-primary"
                                    : "bg-muted"
                            }`}
                            onClick={() => testimonialApi?.scrollTo(i)}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ClientTestimonials;
