"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import { useEffect, useState } from "react";
import { type CarouselApi } from "@/components/ui/carousel";
const Blog = () => {
    const [blogApi, setBlogApi] = useState<CarouselApi>();
    const [blogCurrent, setBlogCurrent] = useState(0);
    useEffect(() => {
        if (!blogApi) {
            return;
        }
        blogApi.on("select", () => {
            setBlogCurrent(blogApi.selectedScrollSnap());
        });
    }, [blogApi]);
    return (
        <section className="py-16 bg-background">
            <div className="container mx-auto">
                <h2 className="text-3xl font-bold text-center mb-12">
                    Latest Insights
                </h2>
                <Carousel
                    className="w-full max-w-xs sm:max-w-2xl lg:max-w-5xl mx-auto"
                    setApi={setBlogApi}
                >
                    <CarouselContent className="-ml-4">
                        {[
                            {
                                title: "The Future of AI in Market Research",
                                date: "May 15, 2023",
                            },
                            {
                                title: "Understanding Gen Z Consumer Behavior",
                                date: "May 10, 2023",
                            },
                            {
                                title: "Sustainable Brands: A Market Analysis",
                                date: "May 5, 2023",
                            },
                            {
                                title: "Sustainable Brands: A Market Analysis",
                                date: "May 5, 2023",
                            },
                            {
                                title: "Sustainable Brands: A Market Analysis",
                                date: "May 5, 2023",
                            },
                        ].map((post, index) => (
                            <CarouselItem
                                key={index}
                                className="pl-4 md:basis-1/2 lg:basis-1/3"
                            >
                                <div className="h-full">
                                    <Card className="h-full flex flex-col">
                                        <CardHeader>
                                            <CardTitle>{post.title}</CardTitle>
                                            <CardDescription>
                                                {post.date}
                                            </CardDescription>
                                        </CardHeader>
                                        <CardContent className="flex-grow">
                                            <p>
                                                Lorem ipsum dolor sit amet,
                                                consectetur adipiscing elit. Sed
                                                do eiusmod tempor incididunt ut
                                                labore et dolore magna aliqua.
                                            </p>
                                        </CardContent>
                                        <CardFooter>
                                            <Button
                                                variant="outline"
                                                className="w-full"
                                            >
                                                Read More
                                            </Button>
                                        </CardFooter>
                                    </Card>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>
                <div className="py-2 text-center space-x-1">
                    {[...Array(3)].map((_, i) => (
                        <Button
                            key={i}
                            variant="outline"
                            size="sm"
                            className={`w-2 h-2 rounded-full p-0 ${
                                i === blogCurrent ? "bg-primary" : "bg-muted"
                            }`}
                            onClick={() => blogApi?.scrollTo(i)}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Blog;
