import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Tilt } from "react-tilt";

const CaseStudies = ({ caseStudies }) => {
    return (
        <section>
            <h2 className="text-3xl font-semibold mb-6">Case Studies</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {caseStudies.map((study, index) => (
                    <motion.div
                        key={study._id}
                        initial={{ opacity: 0, y: 50 }}  // Start hidden and slightly below
                        whileInView={{ opacity: 1, y: 0 }}  // Animate to visible and original position
                        viewport={{ once: true, amount: 0.1 }}  // Trigger animation when 20% in view
                        transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.2 }}
                        className="rounded-sm"  // Staggered animation
                    >
                        <Tilt>
                        <Card className="border-[#4251f88b]">
                            <CardContent className="p-0 ">
                                <Image
                                    src={study.image}
                                    alt={study.title}
                                    width={300}
                                    height={200}
                                    className="w-full h-48 object-cover rounded-sm"
                                />
                                <div className="p-4">
                                    <CardTitle className="text-lg mb-2">
                                        {study.title}
                                    </CardTitle>
                                    <CardDescription className="mb-4">
                                        {study.description}
                                    </CardDescription>
                                    <Button asChild className="button-primary">
                                        <Link href={`/case-studies/${study._id}`}>
                                            Read More
                                        </Link>
                                    </Button>
                                </div>
                            </CardContent>
                        </Card>
                        </Tilt>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default CaseStudies;
