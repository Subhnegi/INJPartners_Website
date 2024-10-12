import React from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
const Founder = () => {
    return (
        <section className="mb-16">
            <h2 className="text-3xl font-semibold mb-6">Meet Our Founders</h2>
            <div className="grid md:grid-cols-2 gap-8">
                <Card>
                    <CardContent className="p-6">
                        <div className="flex flex-col items-center">
                            <Image
                                src="/placeholder.jpg?height=150&width=150"
                                alt="Sarah Chen"
                                width={150}
                                height={150}
                                className="rounded-full mb-4"
                            />
                            <h3 className="text-xl font-semibold mb-2">
                                Sarah Chen
                            </h3>
                            <p className="text-muted-foreground mb-4">
                                Co-Founder & CEO
                            </p>
                            <p className="text-center">
                                With over 15 years of experience in market
                                research and analytics, Sarah leads our
                                company's strategic vision. Her innovative
                                approach to research methodologies has
                                revolutionized how we gather and analyze data.
                            </p>
                        </div>
                    </CardContent>
                </Card>
                <Card>
                    <CardContent className="p-6">
                        <div className="flex flex-col items-center">
                            <Image
                                src="/placeholder.jpg?height=150&width=150"
                                alt="Michael Rodriguez"
                                width={150}
                                height={150}
                                className="rounded-full mb-4"
                            />
                            <h3 className="text-xl font-semibold mb-2">
                                Michael Rodriguez
                            </h3>
                            <p className="text-muted-foreground mb-4">
                                Co-Founder & CTO
                            </p>
                            <p className="text-center">
                                Michael brings a wealth of technical expertise
                                to our team. His background in data science and
                                machine learning drives our commitment to
                                leveraging cutting-edge technology in our
                                research processes.
                            </p>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </section>
    );
};

export default Founder;
