import React from "react";
import Image from "next/image";
import Link from "next/link";
import { MapPin} from "lucide-react";
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
                                    New York (Headquarters)
                                </h3>
                                <p>123 Research Avenue, New York, NY 10001</p>
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
                                <h3 className="font-semibold">San Francisco</h3>
                                <p>
                                    456 Market Street, San Francisco, CA 94105
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
