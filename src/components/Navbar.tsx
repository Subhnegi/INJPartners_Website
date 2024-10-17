"use client";
import * as React from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Moon, Sun, Search, Menu } from "lucide-react";
import { cn } from "@/lib/utils";
import axios from "axios";
interface Service {
	_id: string;
	title: string;
	content: string;
	icon: string;
    methodologies: string[];
    benefits: string[];
};
export default function Navbar() {
    const { setTheme, theme } = useTheme();
    const [services, setServices] = React.useState<Service[]>([]);
    React.useEffect(() => {
        const fetchServices = async () => {
            try {
                const response = await axios< Service[]>(
                    "/api/services"
                );
                setServices(response.data);
            } catch (err) {
                console.log("error in navbar",err);
            }
        };
        fetchServices();
    },[])

    return (
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container flex h-14 items-center">
                <Link href="/" className="flex items-center space-x-2">
                    <span className="font-bold text-xl"><img src="/logo.webp" alt="logo" className="w-36"/></span>
                </Link>
                <div className="flex-1" />
                <div className="hidden md:flex">
                    <NavigationMenu>
                        <NavigationMenuList>
                            <NavigationMenuItem>
                                <NavigationMenuTrigger>
                                    Services
                                </NavigationMenuTrigger>
                                <NavigationMenuContent>
                                    <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                                        <li className="row-span-3">
                                            <NavigationMenuLink asChild>
                                                <a
                                                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                                                    href="/services"
                                                >
                                                    <div className="mb-2 mt-4 text-lg font-medium">
                                                        Our Services
                                                    </div>
                                                    <p className="text-sm leading-tight text-muted-foreground">
                                                        Explore our range of
                                                        market research services
                                                    </p>
                                                </a>
                                            </NavigationMenuLink>
                                        </li>
                                        {services.map((service)=>(
                                            <ListItem
                                            href={`/services/${service._id}`}
                                            title={service.title}
                                            key={service._id}
                                        >
                                            {service.content}
                                        </ListItem>))}
                                    </ul>
                                </NavigationMenuContent>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <Link href="/about" legacyBehavior passHref>
                                    <NavigationMenuLink
                                        className={navigationMenuTriggerStyle()}
                                    >
                                        About
                                    </NavigationMenuLink>
                                </Link>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <Link href="/contact" legacyBehavior passHref>
                                    <NavigationMenuLink
                                        className={navigationMenuTriggerStyle()}
                                    >
                                        Contact
                                    </NavigationMenuLink>
                                </Link>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <Link href="/blog" legacyBehavior passHref>
                                    <NavigationMenuLink
                                        className={navigationMenuTriggerStyle()}
                                    >
                                        Blog
                                    </NavigationMenuLink>
                                </Link>
                                </NavigationMenuItem>
                            <NavigationMenuItem>
                                <Link href="/careers" legacyBehavior passHref>
                                    <NavigationMenuLink
                                        className={navigationMenuTriggerStyle()}
                                    >
                                        Careers
                                    </NavigationMenuLink>
                                </Link>
                            </NavigationMenuItem>
                        </NavigationMenuList>
                    </NavigationMenu>
                </div>
                <div className="flex items-center space-x-4">
                    <form
                        onSubmit={(e) => e.preventDefault()}
                        className="relative hidden md:block"
                    >
                        <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                        <Input
                            type="search"
                            placeholder="Search..."
                            className="pl-8 md:w-[200px] lg:w-[300px]"
                        />
                    </form>
                    <Button
                        variant="ghost"
                        size="icon"
                        aria-label="Toggle theme"
                        className="mr-6"
                        onClick={() =>
                            setTheme(theme === "light" ? "dark" : "light")
                        }
                    >
                        <Sun className="h-6 w-6 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                        <Moon className="absolute h-6 w-6 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                        <span className="sr-only">Toggle theme</span>
                    </Button>
                    <Sheet>
                        <SheetTrigger asChild>
                            <Button
                                variant="ghost"
                                size="icon"
                                className="md:hidden"
                            >
                                <Menu className="h-5 w-5" />
                                <span className="sr-only">Toggle menu</span>
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="right">
                            <nav className="flex flex-col space-y-4">
                                <Link href="/" className="text-lg font-medium">
                                    Home
                                </Link>
                                <Link
                                    href="/services"
                                    className="text-lg font-medium"
                                >
                                    Services
                                </Link>
                                <Link
                                    href="/about"
                                    className="text-lg font-medium"
                                >
                                    About
                                </Link>
                                <Link
                                    href="/contact"
                                    className="text-lg font-medium"
                                >
                                    Contact
                                </Link>
                                <Link
                                    href="/blog"
                                    className="text-lg font-medium"
                                >
                                    Blog
                                </Link>
                                <Link
                                    href="/careers"
                                    className="text-lg font-medium"
                                >
                                    Careers
                                </Link>
                                <form
                                    onSubmit={(e) => e.preventDefault()}
                                    className="relative"
                                >
                                    <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                                    <Input
                                        type="search"
                                        placeholder="Search..."
                                        className="pl-8 w-full"
                                    />
                                </form>
                            </nav>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </header>
    );
}

const ListItem = React.forwardRef<
    React.ElementRef<"a">,
    React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
    return (
        <li>
            <NavigationMenuLink asChild>
                <a
                    ref={ref}
                    className={cn(
                        "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                        className
                    )}
                    {...props}
                >
                    <div className="text-sm font-medium leading-none">
                        {title}
                    </div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        {children}
                    </p>
                </a>
            </NavigationMenuLink>
        </li>
    );
});
ListItem.displayName = "ListItem";
