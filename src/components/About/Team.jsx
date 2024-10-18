import React from 'react'
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Tilt } from 'react-tilt'
const Team = ({ team }) => {
    return (
        <section className="mb-16">
            <h2 className="text-3xl font-semibold mb-6">Our Researcher Team</h2>
            <div className="grid md:grid-cols-3 gap-8">
                {team.map((member) => (
                    <Tilt key={member._id} >
                    <Card className='border-[#4251f88b]'>
                        <CardContent className="p-6">
                            <div className="flex flex-col items-center">
                                <Image
                                    src={member.imageUrl}
                                    alt={member.name}
                                    width={120}
                                    height={120}
                                    className="rounded-full mb-4"
                                />
                                <h3 className="text-lg font-semibold mb-2">{member.name}</h3>
                                <p className="text-muted-foreground mb-2">{member.role}</p>
                                <p className="text-center text-sm">
                                    {member.bio}
                                </p>
                            </div>
                        </CardContent>
                    </Card>
                    </Tilt>
                ))}
            </div>
        </section>
    )
}

export default Team