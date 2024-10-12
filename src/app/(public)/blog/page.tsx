"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Search } from "lucide-react";

// Sample blog post data
const blogPosts = [
    {
        id: 1,
        title: "The Rise of AI in Market Research",
        category: "Market Trends",
        summary:
            "Explore how artificial intelligence is revolutionizing the field of market research and what it means for businesses.",
        image: "/placeholder.jpg?height=200&width=300",
        date: "2023-05-15",
        author: "Sarah Chen",
    },
    {
        id: 2,
        title: "Effective Survey Design: Best Practices",
        category: "Research Methodologies",
        summary:
            "Learn the key principles of creating surveys that yield accurate and actionable insights for your business.",
        image: "/placeholder.jpg?height=200&width=300",
        date: "2023-05-10",
        author: "Michael Rodriguez",
    },
    {
        id: 3,
        title: "Sustainability in Consumer Goods: A Growing Trend",
        category: "Industry Insights",
        summary:
            "Discover how sustainability is shaping consumer preferences and driving innovation in the consumer goods sector.",
        image: "/placeholder.jpg?height=200&width=300",
        date: "2023-05-05",
        author: "Emily Watson",
    },
    {
        id: 4,
        title: "The Power of Predictive Analytics in Business Strategy",
        category: "Market Trends",
        summary:
            "Uncover how predictive analytics is helping businesses stay ahead of the curve and make informed decisions.",
        image: "/placeholder.jpg?height=200&width=300",
        date: "2023-04-30",
        author: "David Lee",
    },
    {
        id: 5,
        title: "Ethnographic Research: Understanding Consumers in Their Natural Environment",
        category: "Research Methodologies",
        summary:
            "Explore the benefits and techniques of ethnographic research in gaining deep consumer insights.",
        image: "/placeholder.jpg?height=200&width=300",
        date: "2023-04-25",
        author: "Sophia Martinez",
    },
    {
        id: 6,
        title: "The Impact of 5G on IoT and Smart Devices",
        category: "Industry Insights",
        summary:
            "Analyze how the rollout of 5G networks is transforming the Internet of Things (IoT) and smart device landscape.",
        image: "/placeholder.jpg?height=200&width=300",
        date: "2023-04-20",
        author: "Alex Johnson",
    },
];

export default function BlogPage() {
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("All");

    const categories = [
        "All",
        "Market Trends",
        "Research Methodologies",
        "Industry Insights",
    ];

    const filteredPosts = blogPosts.filter(
        (post) =>
            (selectedCategory === "All" ||
                post.category === selectedCategory) &&
            (post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                post.summary.toLowerCase().includes(searchTerm.toLowerCase()))
    );

    return (
        <div className="container mx-auto px-4 py-8">
            <header className="text-center mb-12">
                <h1 className="text-4xl font-bold text-primary mb-2">
                    Insightful Research Blog
                </h1>
                <p className="text-xl text-muted-foreground">
                    Stay Updated with the Latest Market Research Insights
                </p>
            </header>

            <div className="mb-8 flex flex-col sm:flex-row justify-between items-center gap-4">
                <div className="relative w-full sm:w-64">
                    <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input
                        type="search"
                        placeholder="Search articles..."
                        className="pl-8"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
                <div className="flex flex-wrap gap-2">
                    {categories.map((category) => (
                        <Button
                            key={category}
                            variant={
                                selectedCategory === category
                                    ? "default"
                                    : "outline"
                            }
                            onClick={() => setSelectedCategory(category)}
                        >
                            {category}
                        </Button>
                    ))}
                </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {filteredPosts.map((post) => (
                    <Card key={post.id}>
                        <CardHeader className="p-0">
                            <Image
                                src={post.image}
                                alt={post.title}
                                width={300}
                                height={200}
                                className="w-full h-48 object-cover"
                            />
                        </CardHeader>
                        <CardContent className="p-4">
                            <Badge className="mb-2">{post.category}</Badge>
                            <CardTitle className="text-xl mb-2">
                                {post.title}
                            </CardTitle>
                            <CardDescription>{post.summary}</CardDescription>
                        </CardContent>
                        <CardFooter className="flex justify-between items-center p-4">
                            <div className="text-sm text-muted-foreground">
                                By {post.author} | {post.date}
                            </div>
                            <Button asChild>
                                <Link href={`/blog/${post.id}`}>Read More</Link>
                            </Button>
                        </CardFooter>
                    </Card>
                ))}
            </div>
        </div>
    );
}
