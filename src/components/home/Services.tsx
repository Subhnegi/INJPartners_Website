import type React from "react";
import {
    BarChart2,
    Users,
    TrendingUp,
    LucideIcon
} from "lucide-react";
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import {Tilt} from "react-tilt";
interface Service {
    _id: string;
    title: string;
    content: string;
    icon: string;
}

interface ServicesProps {
    services: Service[];
}

const Services: React.FC<ServicesProps> = ({ services }) => {
    const getIconComponent = (iconName: string): LucideIcon => {
        switch (iconName) {
            case "Users":
                return Users;
            case "BarChart2":
                return BarChart2;
            case "TrendingUp":
                return TrendingUp;
            default:
                return Users;
        }
    };

    return (
        <section className="py-16 bg-background">
            <div className="container mx-auto">
                <h2 className="text-3xl font-bold text-center mb-12">
                    Our Services
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {services.map((service) => {
                        const IconComponent = getIconComponent(service.icon);
                        return (
                            <Link key={service._id} href={`/services/${service._id}`}>
                                <Tilt>
                                <Card className="flex flex-col items-center text-center">
                                    <CardHeader className="flex flex-col items-center">
                                    <IconComponent className="w-12 h-12 text-primary mb-4" />
                                        <CardTitle>{service.title}</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <p>{service.content}</p>
                                    </CardContent>
                                </Card>
                                </Tilt>
                            </Link>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Services;