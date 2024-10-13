"use client";

import { useState } from "react";
import Link from "next/link";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
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

// Mock data for demonstration purposes
const pageData = [
    { id: 1, title: "Home", status: "Published", lastUpdated: "2023-05-15" },
    {
        id: 2,
        title: "About Us",
        status: "Published",
        lastUpdated: "2023-05-10",
    },
    { id: 3, title: "Services", status: "Draft", lastUpdated: "2023-05-20" },
    { id: 4, title: "Blog", status: "Published", lastUpdated: "2023-05-18" },
    { id: 5, title: "Contact", status: "Published", lastUpdated: "2023-05-12" },
];

const userData = [
    {
        id: 1,
        name: "John Doe",
        email: "john@example.com",
        role: "Admin",
        lastLogin: "2023-05-21",
    },
    {
        id: 2,
        name: "Jane Smith",
        email: "jane@example.com",
        role: "Editor",
        lastLogin: "2023-05-20",
    },
    {
        id: 3,
        name: "Bob Johnson",
        email: "bob@example.com",
        role: "Viewer",
        lastLogin: "2023-05-19",
    },
];

const sections = [
    { id: "pages", name: "Pages", icon: FileText },
    { id: "users", name: "Users", icon: Users },
    { id: "testimonials", name: "Testimonials", icon: MessageSquare },
    { id: "blogs", name: "Blogs", icon: BookOpen },
    { id: "caseStudies", name: "Case Studies", icon: BarChart },
    { id: "jobs", name: "Jobs", icon: Briefcase },
    { id: "members", name: "Members", icon: User },
    { id: "faqs", name: "FAQs", icon: HelpCircle },
];

export default function AdminDashboard() {
    const [activeSection, setActiveSection] = useState("pages");
    const [searchTerm, setSearchTerm] = useState("");
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const filteredData = activeSection === "pages" ? pageData : userData;

    const renderTable = () => {
        switch (activeSection) {
            case "pages":
                return (
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Title</TableHead>
                                <TableHead>Status</TableHead>
                                <TableHead>Last Updated</TableHead>
                                <TableHead>Actions</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {filteredData.map((item: any) => (
                                <TableRow key={item.id}>
                                    <TableCell>{item.title}</TableCell>
                                    <TableCell>{item.status}</TableCell>
                                    <TableCell>{item.lastUpdated}</TableCell>
                                    <TableCell>
                                        <Button
                                            variant="outline"
                                            size="sm"
                                            asChild
                                        >
                                            <Link
                                                href={`/admin/${activeSection}/${item.id}`}
                                            >
                                                Edit
                                            </Link>
                                        </Button>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                );
            case "users":
                return (
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Name</TableHead>
                                <TableHead>Email</TableHead>
                                <TableHead>Role</TableHead>
                                <TableHead>Last Login</TableHead>
                                <TableHead>Actions</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {filteredData.map((item: any) => (
                                <TableRow key={item.id}>
                                    <TableCell>{item.name}</TableCell>
                                    <TableCell>{item.email}</TableCell>
                                    <TableCell>{item.role}</TableCell>
                                    <TableCell>{item.lastLogin}</TableCell>
                                    <TableCell>
                                        <Button
                                            variant="outline"
                                            size="sm"
                                            asChild
                                        >
                                            <Link
                                                href={`/admin/${activeSection}/${item.id}`}
                                            >
                                                Edit
                                            </Link>
                                        </Button>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                );
            default:
                return (
                    <div className="text-center py-4">
                        <p>No data available for this section yet.</p>
                        <Button className="mt-2">
                            Add New {activeSection.slice(0, -1)}
                        </Button>
                    </div>
                );
        }
    };

    const SidebarContent = () => (
        <div className="p-4">
            <h2 className="text-2xl font-bold text-primary mb-4">
                Admin Panel
            </h2>
            <nav>
                {sections.map((section) => (
                    <button
                        type="button"
                        key={section.id}
                        onClick={() => {
                            setActiveSection(section.id);
                            setIsSidebarOpen(false);
                        }}
                        className={`flex items-center w-full px-4 py-2 mt-2 text-sm font-semibold text-left rounded-lg ${
                            activeSection === section.id
                                ? "bg-gray-200 text-gray-900"
                                : "bg-transparent text-gray-600 hover:bg-gray-200 hover:text-gray-900"
                        }`}
                    >
                        <section.icon className="w-5 h-5 mr-2" />
                        {section.name}
                    </button>
                ))}
            </nav>
        </div>
    );

    return (
        <div className="flex h-screen bg-gray-100">
            {/* Sidebar for larger screens */}
            <div className="hidden md:block w-64 bg-white shadow-md">
                <SidebarContent />
            </div>

            {/* Sidebar for mobile screens */}
            <Sheet open={isSidebarOpen} onOpenChange={setIsSidebarOpen}>
                <SheetContent side="left" className="w-64 p-0">
                    <SidebarContent />
                </SheetContent>
                <SheetTrigger asChild className="md:hidden">
                            <Button variant="outline" size="icon">
                                <Menu className="h-6 w-6" />
                            </Button>
                </SheetTrigger>
            </Sheet>

            {/* Main Content */}
            <div className="flex-1 overflow-auto">
                <div className="container mx-auto px-4 py-8">
                    <header className="mb-8 flex justify-between items-center">
                        <div>
                            <h1 className="text-4xl font-bold text-primary mb-2">
                                {
                                    sections.find((s) => s.id === activeSection)
                                        ?.name
                                }
                            </h1>
                            <p className="text-xl text-muted-foreground">
                                Manage your {activeSection}
                            </p>
                        </div>
                    </header>

                    <Card className="mb-8">
                        <CardHeader>
                            <CardTitle>Quick Stats</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                                <Card>
                                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                        <CardTitle className="text-sm font-medium">
                                            Total {activeSection}
                                        </CardTitle>
                                        <FileText className="h-4 w-4 text-muted-foreground" />
                                    </CardHeader>
                                    <CardContent>
                                        <div className="text-2xl font-bold">
                                            {filteredData.length}
                                        </div>
                                    </CardContent>
                                </Card>
                                {/* Add more stat cards as needed */}
                            </div>
                        </CardContent>
                    </Card>

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
                                <Button>
                                    Add New {activeSection.slice(0, -1)}
                                </Button>
                            </div>
                            <div className="overflow-x-auto">
                                {renderTable()}
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
}
