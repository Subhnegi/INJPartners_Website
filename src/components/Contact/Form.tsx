"use client";
import React from "react";
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Phone, Mail } from "lucide-react"
const Form = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [isHuman, setIsHuman] = useState(false);
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (isHuman) {
            console.log("Form submitted:", { name, email, message });
            // Here you would typically send the form data to your server
            alert("Thank you for your message. We'll get back to you soon!");
        } else {
            alert("Please confirm that you are human.");
        }
    };
    return (
            <Card>
                <CardHeader>
                    <CardTitle>Send us a message</CardTitle>
                </CardHeader>
                <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <label
                                htmlFor="name"
                                className="block text-sm font-medium text-gray-700"
                            >
                                Name
                            </label>
                            <Input
                                id="name"
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                            />
                        </div>
                        <div>
                            <label
                                htmlFor="email"
                                className="block text-sm font-medium text-gray-700"
                            >
                                Email
                            </label>
                            <Input
                                id="email"
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                        <div>
                            <label
                                htmlFor="message"
                                className="block text-sm font-medium text-gray-700"
                            >
                                Message
                            </label>
                            <Textarea
                                id="message"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                required
                            />
                        </div>
                        <div className="flex items-center space-x-2">
                            <Checkbox
                                id="human"
                                checked={isHuman}
                                onCheckedChange={(checked) =>
                                    setIsHuman(checked as boolean)
                                }
                            />
                            <label
                                htmlFor="human"
                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            >
                                I'm not a robot
                            </label>
                        </div>
                        <Button type="submit">Send Message</Button>
                    </form>
                </CardContent>
                <Card>
                    <CardHeader>
                        <CardTitle>Contact Information</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-4">
                            <div className="flex items-center space-x-2">
                                <Phone className="w-5 h-5" />
                                <span>+1 (555) 123-4567</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <Mail className="w-5 h-5" />
                                <a
                                    href="mailto:info@insightfulresearch.com"
                                    className="text-primary hover:underline"
                                >
                                    info@insightfulresearch.com
                                </a>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </Card>
        
    );
};

export default Form;
