"use client";
import Image from "next/image";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ArrowRight, Clock, Tag } from "lucide-react";
import { useEffect, useState } from "react";
import axios from "axios";
import { Content } from "@radix-ui/react-navigation-menu";
export default function BlogPostPage({ params }: { params: { id: string } }) {
    const [post, setPost] = useState<any[]>([]);
    const [relatedPosts, setRelatedPosts] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const id = params.id;
    useEffect(() => {
        const fetchPost = async () => {
            try {
                const response = await axios<{ post: any[] }>(
                    `/api/blog/${id}`
                );
                setPost(response.data);
                const response1 = await axios<{ post: any[] }>(
                    `/api/blog/${response.data.relatedPosts[0]}`
                );
                const response2 = await axios<{ post: any[] }>(
                    `/api/blog/${response.data.relatedPosts[1]}`
                );
                setRelatedPosts([response1.data, response2.data]);
                setLoading(false);
            } catch (err) {
                setError("Failed to fetch services. Please try again later.");
                setLoading(false);
            }
        };

        fetchPost();
    }, []);

    if (loading) {
        return <div className="container mx-auto px-4 py-8">Loading...</div>;
    }

    if (error) {
        return (
            <div className="container mx-auto px-4 py-8 text-red-500">
                {error}
            </div>
        );
    }
    return (
        <div className="min-h-screen bg-background">
            <main className="container mx-auto px-4 py-12">
                <article className="max-w-3xl mx-auto">
                    <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
                    <div className="flex items-center space-x-4 mb-6 text-muted-foreground">
                        <div className="flex items-center">
                            <Avatar className="h-8 w-8 mr-2">
                                <AvatarImage
                                    src={post.image}
                                    alt={post.author}
                                />
                                <AvatarFallback>JD</AvatarFallback>
                            </Avatar>
                            <span>{post.author}</span>
                        </div>
                        <Separator orientation="vertical" className="h-4" />
                        <div className="flex items-center">
                            <Clock className="h-4 w-4 mr-1" />
                            <span>{post.readingTime} min read</span>
                        </div>
                        <Separator orientation="vertical" className="h-4" />
                        <div className="flex items-center gap-2 text-xs">
                            <Tag className="h-4 w-4 mr-1 " />
                            {post.tags.map((tag) => (
                                <span key={tag}>{tag}</span>
                            ))}
                        </div>
                    </div>

                    <Image
                        src={post.image}
                        alt={post.title}
                        width={800}
                        height={400}
                        className="rounded-lg mb-6"
                    />

                    <div className="prose prose-lg max-w-none">
                        <div className="prose prose-lg max-w-none">
                            <p>{post.content.introduction}</p>
                            {post.content.sections.map((section) => (
                                <div key={section.title}>
                                    <h2>{section.title}</h2>
                                    
                                        {section.content.map((paragraph,index) => (
                                            <p key={index}>{index+1})&nbsp;{paragraph}</p>
                                        ))}
                                    
                                </div>
                            ))}
                        </div>
                    </div>
                </article>
                <Separator className="my-12" />
                <section className="max-w-3xl mx-auto">
                    <h2 className="text-2xl font-bold mb-6">Related Posts</h2>
                    <div className="grid gap-6 md:grid-cols-2">
                        {relatedPosts.map((relatedPost) => (
                            <Card key={relatedPost.id}>
                                <CardHeader>
                                    <CardTitle>{relatedPost.title}</CardTitle>
                                    <CardDescription>
                                        By {relatedPost.author} •{" "}
                                        {relatedPost.readingTime} min read
                                    </CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <p>{relatedPost.summary}</p>
                                </CardContent>
                                <CardFooter>
                                    <Link href={`/blog/${relatedPost.id}`}>
                                        <Button variant="ghost">
                                            Read More
                                        </Button>
                                    </Link>
                                </CardFooter>
                            </Card>
                        ))}
                    </div>
                </section>
            </main>

            <footer className="bg-secondary mt-12 py-12">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold mb-4">
                        Stay Informed with MarketInsight
                    </h2>
                    <p className="mb-8">
                        Subscribe to our newsletter for the latest market
                        research trends and insights.
                    </p>
                    <Button size="lg">
                        Subscribe Now <ArrowRight className="ml-2" />
                    </Button>
                </div>
            </footer>
        </div>
    );
}
