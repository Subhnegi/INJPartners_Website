import Link from "next/link";
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-background border-t">
            <div className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div>
                        <h2 className="text-lg font-semibold mb-4">
                        <img src="/logo.webp" alt="logo" className="w-36"/>
                        </h2>
                        <p className="text-sm text-muted-foreground">
                            Empowering businesses with data-driven market
                            insights.
                        </p>
                    </div>
                    <div>
                        <h3 className="text-sm font-semibold mb-2">Services</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link
                                    href="/services/consumer-behavior"
                                    className="text-sm text-muted-foreground hover:text-primary"
                                >
                                    Consumer Behavior
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/services/competitive-intelligence"
                                    className="text-sm text-muted-foreground hover:text-primary"
                                >
                                    Competitive Intelligence
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/services/trend-forecasting"
                                    className="text-sm text-muted-foreground hover:text-primary"
                                >
                                    Trend Forecasting
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-sm font-semibold mb-2">Company</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link
                                    href="/about"
                                    className="text-sm text-muted-foreground hover:text-primary"
                                >
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/careers"
                                    className="text-sm text-muted-foreground hover:text-primary"
                                >
                                    Careers
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/contact"
                                    className="text-sm text-muted-foreground hover:text-primary"
                                >
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-sm font-semibold mb-2">Legal</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link
                                    href="/privacy-policy"
                                    className="text-sm text-muted-foreground hover:text-primary"
                                >
                                    Privacy Policy
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/terms-of-service"
                                    className="text-sm text-muted-foreground hover:text-primary"
                                >
                                    Terms of Service
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="mt-8 pt-8 border-t border-muted-foreground/10">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <p className="text-sm text-muted-foreground">
                            © 2023 INJ PARTNERS. All rights reserved.
                        </p>
                        <div className="flex space-x-4 mt-4 md:mt-0">
                            <Link
                                href="https://facebook.com"
                                className="text-muted-foreground hover:text-primary"
                            >
                                <Facebook className="h-5 w-5" />
                                <span className="sr-only">Facebook</span>
                            </Link>
                            <Link
                                href="https://twitter.com"
                                className="text-muted-foreground hover:text-primary"
                            >
                                <Twitter className="h-5 w-5" />
                                <span className="sr-only">Twitter</span>
                            </Link>
                            <Link
                                href="https://linkedin.com"
                                className="text-muted-foreground hover:text-primary"
                            >
                                <Linkedin className="h-5 w-5" />
                                <span className="sr-only">LinkedIn</span>
                            </Link>
                            <Link
                                href="https://instagram.com"
                                className="text-muted-foreground hover:text-primary"
                            >
                                <Instagram className="h-5 w-5" />
                                <span className="sr-only">Instagram</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
