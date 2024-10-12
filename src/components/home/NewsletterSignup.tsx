import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
const NewsletterSignup = () => {
    return (
        <section className="py-16 bg-primary text-primary-foreground">
            <div className="container mx-auto text-center">
                <h2 className="text-3xl font-bold mb-4">Stay Informed</h2>
                <p className="mb-8">
                    Subscribe to our newsletter for the latest market insights
                    and trends.
                </p>
                <form className="flex flex-col md:flex-row justify-center items-center gap-4">
                    <Input
                        type="email"
                        placeholder="Enter your email"
                        className="max-w-sm bg-white text-primary"
                    />
                    <Button type="submit" variant="secondary">
                        Subscribe
                    </Button>
                </form>
            </div>
        </section>
    );
};

export default NewsletterSignup;
