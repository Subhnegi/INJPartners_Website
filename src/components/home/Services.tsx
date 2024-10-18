import type React from "react";
import { motion } from "framer-motion";
import { BarChart2, Users, TrendingUp, LucideIcon } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import {Tilt} from "react-tilt";
interface Service {
	_id: string;
	title: string;
	content: string;
	icon: string;
}

interface ServicesProps {
	services: Service[];
}

const Services: React.FC<ServicesProps> = ({ services }) => {
	const getIconComponent = (iconName: string): LucideIcon => {
		switch (iconName) {
			case "Users":
				return Users;
			case "BarChart2":
				return BarChart2;
			case "TrendingUp":
				return TrendingUp;
			default:
				return Users;
		}
	};

	return (
		<section className="py-16 bg-background">
			<div className="container mx-auto">
				<h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
				<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
					{services.map((service, index) => {
						const IconComponent = getIconComponent(service.icon);
						return (
							<Link key={service._id} href={`/services/${service._id}`}>
								<motion.div
									initial={{ opacity: 0, y: 20 }} // Initial state: invisible and slightly below
									whileInView={{ opacity: 1, y: 0 }} // Animate when in view
									viewport={{ once: true, amount: 0.2 }} // Trigger only once when 20% of the card is in view
									transition={{
										duration: 0.5,
										ease: "easeOut",
										delay: index * 0.2,
									}} // Add delay for a staggered effect
								>
									<Tilt>
									<Card className="flex flex-col items-center text-center border-[#4251f88b]">
										<CardHeader>
											<IconComponent className="w-12 h-12 mb-4 self-center text-[#4251f88b]" />
											<CardTitle>{service.title}</CardTitle>
										</CardHeader>
										<CardContent>
											<p>{service.content}</p>
										</CardContent>
									</Card>
									</Tilt>
								</motion.div>
							</Link>
						);
					})}
				</div>
			</div>
		</section>
	);
};

export default Services;
