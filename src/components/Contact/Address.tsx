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
                    <div className="mt-4 w-full">
                    <iframe title="India office" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.0024498303405!2d77.37591307528898!3d28.629688675666227!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cefdf5ddf90f9%3A0x6a833fbc984860c5!2sINJ%20Market%20Intelligence%20Pvt.%20Ltd.!5e0!3m2!1sen!2sin!4v1729086704058!5m2!1sen!2sin" width="100%" allowFullScreen={true} loading="lazy" referrerPolicy="no-referrer-when-downgrade"/>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
};

export default Address;
