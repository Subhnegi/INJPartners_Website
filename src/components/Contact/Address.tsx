import React from "react";
import Image from "next/image";
import Link from "next/link";
import { MapPin } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion"; // Import Framer Motion

const Address = () => {
    return (
        <div className="space-y-8">
            <Card>
                <CardHeader>
                    <CardTitle>Our Offices</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="space-y-4">
                        {/* Office locations with animations */}
                        {[
                            {
                                title: "New York (Headquarters)",
                                address: "123 Research Avenue, New York, NY 10001",
                                link: "https://goo.gl/maps/123",
                            },
                            {
                                title: "San Francisco",
                                address: "456 Market Street, San Francisco, CA 94105",
                                link: "https://goo.gl/maps/456",
                            },
                        ].map((office, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.3, delay: index * 0.1 }}
                                className="flex items-start space-x-2"
                            >
                                <MapPin className="w-5 h-5 mt-1" />
                                <div>
                                    <h3 className="font-semibold">{office.title}</h3>
                                    <p>{office.address}</p>
                                    <Link
                                        href={office.link}
                                        className="text-primary hover:underline"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Get Directions
                                    </Link>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                    <div className="mt-4">
                        <Image
                            src="/placeholder.jpg"
                            alt="Office Locations Map"
                            width={400}
                            height={200}
                            className="w-96 h-auto rounded-lg"
                        />
                    </div>
                </CardContent>
            </Card>
        </div>
    );
};

export default Address;
