"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import axios from "axios";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
    BarChart,
    Users,
    FileText,
    Settings,
    Search,
    MessageSquare,
    BookOpen,
    Briefcase,
    User,
    HelpCircle,
    Menu,
} from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { toast } from "@/hooks/use-toast";
import Blog from "@/components/Admin/Blogs";
import CaseStudy from "@/components/Admin/CaseStudies";
import Job from "@/components/Admin/Jobs";
import Member from "@/components/Admin/Members";
import FAQ from "@/components/Admin/Faqs";
import Testimonial from "@/components/Admin/Testimonials";

const sections = [
    { id: "blogs", name: "Blogs", icon: BookOpen },
    { id: "case-studies", name: "Case Studies", icon: FileText },
    { id: "jobs", name: "Jobs", icon: Briefcase },
    { id: "members", name: "Members", icon: Users },
    { id: "faqs", name: "FAQs", icon: HelpCircle },
    { id: "testimonials", name: "Testimonials", icon: MessageSquare },
];

export default function AdminDashboard() {
    const [activeSection, setActiveSection] = useState("blogs");
    const [searchTerm, setSearchTerm] = useState("");
    const [blogs, setBlogs] = useState([]);
    const [caseStudies, setCaseStudies] = useState([]);
    const [jobs, setJobs] = useState([]);
    const [members, setMembers] = useState([]);
    const [faqCategories, setFaqCategory] = useState([]);
    const [testimonials, setTestimonials] = useState([]);

    useEffect(() => {
        fetchData();
    }, [activeSection]);

    const fetchData = async () => {
        try {
            let response;
            switch (activeSection) {
                case "blogs":
                    response = await axios("/api/blog");
                    setBlogs(response.data);
                    break;
                case "case-studies":
                    response = await axios.get(
                        "/api/case-studies"
                    );
                    setCaseStudies(response.data);
                    break;
                case "jobs":
                    response = await axios("/api/careers");
                    setJobs(response.data);
                    break;
                case "members":
                    response = await axios.get("/api/about/team");
                    setMembers(response.data);
                    break;
                case "faqs":
                    response = await axios.get("/api/faqs");
                    setFaqCategory(response.data);
                    break;
                case "testimonials":
                    response = await axios.get(
                        "/api/testimonials"
                    );
                    setTestimonials(response.data);
                    break;
            }
        } catch (error) {
            console.error(`Error fetching ${activeSection}:`, error);
            toast({
                title: "Error",
                description: `Failed to fetch ${activeSection}`,
                variant: "destructive",
            });
        }
    };

    return (
        <div className="flex h-screen bg-gray-100">
            {/* Sidebar */}
            <Sheet>
                <SheetTrigger asChild>
                    <Button
                        variant="outline"
                        size="icon"
                        className="shrink-0 md:hidden"
                    >
                        <Menu className="h-5 w-5" />
                        <span className="sr-only">Toggle navigation menu</span>
                    </Button>
                </SheetTrigger>
                <SheetContent side="left">
                    <nav className="grid gap-2 py-6">
                        {sections.map((section) => (
                            <Link
                                key={section.id}
                                href="#"
                                onClick={() => setActiveSection(section.id)}
                                className={`flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 ${
                                    activeSection === section.id
                                        ? "bg-gray-100 text-gray-900"
                                        : ""
                                }`}
                            >
                                <section.icon className="h-4 w-4" />
                                {section.name}
                            </Link>
                        ))}
                    </nav>
                </SheetContent>
            </Sheet>
            <div className="hidden border-r bg-gray-100/40 md:block dark:bg-gray-800/40">
                <div className="flex h-full max-h-screen flex-col gap-2">
                    <div className="flex h-[60px] items-center border-b px-6">
                        <Link
                            className="flex items-center gap-2 font-semibold"
                            href="#"
                        >
                            <BarChart className="h-6 w-6" />
                            <span className="">Acme Inc</span>
                        </Link>
                    </div>
                    <div className="flex-1 overflow-auto py-2">
                        <nav className="grid items-start px-4 text-sm font-medium">
                            {sections.map((section) => (
                                <Link
                                    key={section.id}
                                    href="#"
                                    onClick={() => setActiveSection(section.id)}
                                    className={`flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 ${
                                        activeSection === section.id
                                            ? "bg-gray-100 text-gray-900"
                                            : ""
                                    }`}
                                >
                                    <section.icon className="h-4 w-4" />
                                    {section.name}
                                </Link>
                            ))}
                        </nav>
                    </div>
                </div>
            </div>
            {/* Main Content */}
            <div className="flex-1 overflow-auto">
                <div className="container mx-auto px-4 py-8">
                    <header className="flex items-center justify-between mb-8">
                        <h1 className="text-3xl font-bold">Admin Dashboard</h1>
                        <Button variant="outline" size="icon">
                            <Settings className="h-4 w-4" />
                            <span className="sr-only">Settings</span>
                        </Button>
                    </header>
                    <Card>
                        <CardHeader>
                            <CardTitle>
                                {
                                    sections.find((s) => s.id === activeSection)
                                        ?.name
                                }{" "}
                                List
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="mb-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                                <div className="relative w-full sm:w-64">
                                    <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                                    <Input
                                        placeholder={`Search ${activeSection}...`}
                                        value={searchTerm}
                                        onChange={(e) =>
                                            setSearchTerm(e.target.value)
                                        }
                                        className="pl-8"
                                    />
                                </div>
                            </div>
                            <div className="overflow-x-auto">
                                {activeSection === "blogs" && (
                                    <Blog
                                        blogs={blogs}
                                    />
                                )}
                                {activeSection === "case-studies" && (
                                    <CaseStudy
                                        caseStudies={caseStudies}
                                    />
                                )}
                                {activeSection === "jobs" && (
                                    <Job
                                        jobs={jobs}
                                    />
                                )}
                                {activeSection === "members" && (
                                    <Member
                                        members={members}
                                    />
                                )}
                                {activeSection === "faqs" && (
                                    <FAQ
                                    faqCategories={faqCategories}
                                    />
                                )}
                                {activeSection === "testimonials" && (
                                    <Testimonial
                                        testimonials={testimonials}
                                    />
                                )}
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
}
