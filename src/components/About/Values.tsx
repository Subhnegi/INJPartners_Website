import React from 'react'
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Users, Lightbulb, Leaf } from "lucide-react";
const Values = () => {
  return (
    <section>
                <h2 className="text-3xl font-semibold mb-6">
                    Our Values and Culture
                </h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <Card>
                        <CardContent className="p-6 flex flex-col items-center text-center">
                            <Shield className="w-12 h-12 text-primary mb-4" />
                            <h3 className="text-xl font-semibold mb-2">
                                Data Privacy
                            </h3>
                            <p>
                                We prioritize the protection and ethical use of
                                data in all our research endeavors.
                            </p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardContent className="p-6 flex flex-col items-center text-center">
                            <Users className="w-12 h-12 text-primary mb-4" />
                            <h3 className="text-xl font-semibold mb-2">
                                Collaboration
                            </h3>
                            <p>
                                We believe in the power of teamwork and
                                fostering strong partnerships with our clients.
                            </p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardContent className="p-6 flex flex-col items-center text-center">
                            <Lightbulb className="w-12 h-12 text-primary mb-4" />
                            <h3 className="text-xl font-semibold mb-2">
                                Innovation
                            </h3>
                            <p>
                                We continuously seek new ways to improve our
                                methodologies and deliver valuable insights.
                            </p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardContent className="p-6 flex flex-col items-center text-center">
                            <Leaf className="w-12 h-12 text-primary mb-4" />
                            <h3 className="text-xl font-semibold mb-2">
                                Sustainability
                            </h3>
                            <p>
                                We are committed to environmentally responsible
                                practices in our operations and research.
                            </p>
                        </CardContent>
                    </Card>
                </div>
            </section>
  )
}

export default Values