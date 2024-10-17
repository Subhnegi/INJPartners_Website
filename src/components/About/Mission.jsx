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
                            Our purpose is to find the areas that haven't been exposed to the light of the day in order to keep it as effective as possible while assisting our clients in overcoming their professional challenges.
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
                            With our expert team, customized solutions, innovative research methods, and exceptional customer service, we are committed to helping our clients succeed in the dynamic and ever-changing business landscape of Hong Kong and beyond.
                            </p>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </section>
    )
}

export default Mission