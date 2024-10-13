import React from 'react'
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
const Team = () => {
    return (
        <section className="mb-16">
            <h2 className="text-3xl font-semibold mb-6">Our Researcher Team</h2>
            <div className="grid md:grid-cols-3 gap-8">
                <Card>
                    <CardContent className="p-6">
                        <div className="flex flex-col items-center">
                            <Image
                                src="/placeholder.jpg?height=120&width=120"
                                alt="Dr. Emily Watson"
                                width={120}
                                height={120}
                                className="rounded-full mb-4"
                            />
                            <h3 className="text-lg font-semibold mb-2">Dr. Emily Watson</h3>
                            <p className="text-muted-foreground mb-2">Lead Research Analyst</p>
                            <p className="text-center text-sm">
                                Specializing in consumer behavior and market trends, Emily brings academic rigor to our research methodologies.
                            </p>
                        </div>
                    </CardContent>
                </Card>
                <Card>
                    <CardContent className="p-6">
                        <div className="flex flex-col items-center">
                            <Image
                                src="/placeholder.jpg?height=120&width=120"
                                alt="Alex Johnson"
                                width={120}
                                height={120}
                                className="rounded-full mb-4"
                            />
                            <h3 className="text-lg font-semibold mb-2">Alex Johnson</h3>
                            <p className="text-muted-foreground mb-2">Data Scientist</p>
                            <p className="text-center text-sm">
                                Alex's expertise in machine learning and predictive modeling helps uncover hidden patterns in complex datasets.
                            </p>
                        </div>
                    </CardContent>
                </Card>
                <Card>
                    <CardContent className="p-6">
                        <div className="flex flex-col items-center">
                            <Image
                                src="/placeholder.jpg?height=120&width=120"
                                alt="Sophia Martinez"
                                width={120}
                                height={120}
                                className="rounded-full mb-4"
                            />
                            <h3 className="text-lg font-semibold mb-2">Sophia Martinez</h3>
                            <p className="text-muted-foreground mb-2">Industry Specialist</p>
                            <p className="text-center text-sm">
                                With a background in multiple industries, Sophia provides valuable context and insights to our research projects.
                            </p>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </section>
    )
}

export default Team