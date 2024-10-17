import React from "react";
import Image from "next/image";
import Link from "next/link";
import { MapPin, Turtle} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
const Address = () => {
    return (
        <div className="space-y-8">
            <Card >
                <CardHeader>
                    <CardTitle>Our Offices</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="space-y-4">
                        <div className="flex items-start space-x-2">
                            <MapPin className="w-5 h-5 mt-1" />
                            <div>
                                <h3 className="font-semibold">
                                INDIA (Headquarters)
                                </h3>
                                <p>Suite 307, Third Floor, ARV Business Park, H-28, Sec - 63, Noida (U.P.) India, 201301</p>
                                <Link
                                    href="https://goo.gl/maps/123"
                                    className="text-primary hover:underline"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Get Directions
                                </Link>
                            </div>
                        </div>
                        <div className="flex items-start space-x-2">
                            <MapPin className="w-5 h-5 mt-1" />
                            <div>
                                <h3 className="font-semibold">USA</h3>
                                <p>
                                4100 SW Modern Way(107), Bentonville, Arkansas- 72713
                                </p>
                                <Link
                                    href="https://goo.gl/maps/456"
                                    className="text-primary hover:underline"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Get Directions
                                </Link>
                            </div>
                        </div>
                        <div className="flex items-start space-x-2">
                            <MapPin className="w-5 h-5 mt-1" />
                            <div>
                                <h3 className="font-semibold">HONG KONG</h3>
                                <p>
                                Unit 305-7, 3/F​., Laford Center, 838 Lai Chi Kok Road, Cheung Sha Wan, Kawloon, Hong Kong
                                </p>
                                <Link
                                    href="https://goo.gl/maps/456"
                                    className="text-primary hover:underline"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Get Directions
                                </Link>
                            </div>
                        </div>
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
