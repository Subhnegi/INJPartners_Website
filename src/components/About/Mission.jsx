import React from 'react'
import { Card, CardContent } from "@/components/ui/card"
import { Target, Eye } from "lucide-react"
const Mission = () => {
    return (
        <section className="mb-16">
            <div className="grid md:grid-cols-2 gap-8">
                <Card>
                    <CardContent className="p-6">
                        <div className="flex flex-col items-center text-center">
                            <Target className="w-12 h-12 text-primary mb-4" />
                            <h3 className="text-2xl font-semibold mb-4">Our Mission</h3>
                            <p className="text-lg">
                                To empower businesses of all sizes with actionable market insights, enabling them to make informed decisions,
                                drive innovation, and achieve sustainable growth in an ever-evolving marketplace.
                            </p>
                        </div>
                    </CardContent>
                </Card>
                <Card>
                    <CardContent className="p-6">
                        <div className="flex flex-col items-center text-center">
                            <Eye className="w-12 h-12 text-primary mb-4" />
                            <h3 className="text-2xl font-semibold mb-4">Our Vision</h3>
                            <p className="text-lg">
                                To be the global leader in democratizing market research, creating a world where data-driven decision-making
                                is accessible to every business, fostering innovation and economic growth across all industries and regions.
                            </p>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </section>
    )
}

export default Mission