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
import axios from "axios";

const ClientTestimonials = ({ testimonials }) => {
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
                            {testimonials.map((testimonial) => (
                                <CarouselItem
                                    key={testimonial.id}
                                    className="pl-4 md:basis-1/2 lg:basis-1/3"
                                >
                                    <div className="h-full">
                                        <Card className="h-full flex flex-col justify-between border-[#4251f88b]">
                                            <CardHeader>
                                                <CardTitle className="text-[#4251f88b]">
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
                    <CarouselPrevious className="border-[#4251f88b]"/>
                    <CarouselNext className="border-[#4251f88b]"/>
                </Carousel>
                <div className="py-2 text-center space-x-1">
                    {[...Array(testimonials.length)].map((_, i) => (
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
