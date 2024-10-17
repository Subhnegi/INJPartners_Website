"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Briefcase, Upload } from "lucide-react";
import { motion } from "framer-motion"; // Import Framer Motion

export default function JobApplicationPage() {
    const [resumeFile, setResumeFile] = useState<File | null>(null);
    const { toast } = useToast();

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            setResumeFile(e.target.files[0]);
        }
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Here you would typically send the form data to your server
        toast({
            title: "Application Submitted",
            description:
                "Thank you for your application. We will be in touch soon.",
        });
    };

    return (
        <div className="min-h-screen bg-background flex flex-col">
            <header className="bg-primary text-primary-foreground py-6">
                <div className="container mx-auto px-4">
                    <h1 className="text-3xl font-bold flex items-center">
                        <Briefcase className="mr-2" /> CareerLaunch
                    </h1>
                </div>
            </header>

            <main className="flex-grow container mx-auto px-4 py-12">
                <motion.div
                    initial={{ opacity: 0, y: 20 }} // Start slightly below and invisible
                    animate={{ opacity: 1, y: 0 }} // Animate to visible and original position
                    transition={{ duration: 0.5 }} // Duration of animation
                >
                    <Card className="max-w-3xl mx-auto">
                        <CardHeader>
                            <CardTitle className="text-2xl">
                                Job Application
                            </CardTitle>
                            <CardDescription>
                                Fill out the form below to apply for the position
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <Label htmlFor="firstName">
                                            First Name
                                        </Label>
                                        <Input id="firstName" required />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="lastName">Last Name</Label>
                                        <Input id="lastName" required />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="email">Email</Label>
                                    <Input id="email" type="email" required />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="phone">Phone Number</Label>
                                    <Input id="phone" type="tel" required />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="position">
                                        Position Applying For
                                    </Label>
                                    <Select required>
                                        <SelectTrigger id="position">
                                            <SelectValue placeholder="Select a position" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="market-researcher">
                                                Market Researcher
                                            </SelectItem>
                                            <SelectItem value="data-analyst">
                                                Data Analyst
                                            </SelectItem>
                                            <SelectItem value="ux-researcher">
                                                UX Researcher
                                            </SelectItem>
                                            <SelectItem value="project-manager">
                                                Project Manager
                                            </SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="experience">
                                        Years of Experience
                                    </Label>
                                    <Input
                                        id="experience"
                                        type="number"
                                        min="0"
                                        required
                                    />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="resume">Resume</Label>
                                    <div className="flex items-center space-x-2">
                                        <Input
                                            id="resume"
                                            type="file"
                                            accept=".pdf,.doc,.docx"
                                            onChange={handleFileChange}
                                            required
                                            className="file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-primary file:text-primary-foreground hover:file:bg-primary/90"
                                        />
                                        {resumeFile && (
                                            <span className="text-sm text-muted-foreground">
                                                {resumeFile.name}
                                            </span>
                                        )}
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="coverLetter">
                                        Cover Letter
                                    </Label>
                                    <Textarea
                                        id="coverLetter"
                                        rows={5}
                                        placeholder="Tell us why you're a great fit for this position..."
                                    />
                                </div>
                                <Button type="submit" className="w-full">
                                    Submit Application
                                </Button>
                            </form>
                        </CardContent>
                    </Card>
                </motion.div>
            </main>

            <footer className="bg-secondary py-6 mt-12">
                <div className="container mx-auto px-4 text-center text-secondary-foreground">
                    <p>&copy; 2024 CareerLaunch. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
}
