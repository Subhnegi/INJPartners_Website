"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
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
import { Label } from "@/components/ui/label";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Lock } from "lucide-react";

export default function AdminLoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError("");
        setIsLoading(true);

        // Here you would typically make an API call to your authentication endpoint
        try {
            // Simulating an API call
            await new Promise((resolve) => setTimeout(resolve, 1000));

            // For demonstration purposes, we're using a hardcoded check
            // In a real application, this would be handled by your backend
            if (email === "admin@example.com" && password === "password123") {
                // Successful login
                router.push("/admin/dashboard");
            } else {
                setError("Invalid email or password");
            }
        } catch (err) {
            setError("An error occurred. Please try again.");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <Card className="w-full max-w-md">
                <CardHeader className="space-y-1">
                    <CardTitle className="text-2xl font-bold text-center">
                        Admin Login
                    </CardTitle>
                    <CardDescription className="text-center">
                        Enter your credentials to access the admin panel
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="space-y-2">
                            <Label htmlFor="email">Email</Label>
                            <Input
                                id="email"
                                type="email"
                                placeholder="admin@example.com"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="password">Password</Label>
                            <Input
                                id="password"
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>
                        {error && (
                            <Alert variant="destructive">
                                <AlertDescription>{error}</AlertDescription>
                            </Alert>
                        )}
                        <Button
                            type="submit"
                            className="w-full"
                            disabled={isLoading}
                        >
                            {isLoading ? "Logging in..." : "Log in"}
                        </Button>
                    </form>
                </CardContent>
                <CardFooter className="flex flex-col items-center">
                    <Link
                        href="/admin/forgot-password"
                        className="text-sm text-blue-600 hover:underline"
                    >
                        Forgot password?
                    </Link>
                    <div className="mt-4 text-center text-sm text-gray-500">
                        <Lock className="inline-block w-4 h-4 mr-1" />
                        Secure login for authorized personnel only
                    </div>
                </CardFooter>
            </Card>
        </div>
    );
}
