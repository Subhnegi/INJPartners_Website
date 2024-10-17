import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";
const NewsletterSignup = () => {
	return (
		<motion.section
			className="py-16 bg-primary text-primary-foreground"
			initial={{ opacity: 0, y: 50 }} // Start with hidden and below position
			whileInView={{ opacity: 1, y: 0 }} // Animate to visible and original position
			transition={{ duration: 0.6, ease: "easeOut" }} // Smooth transition effect
			viewport={{ once: true, amount: 0.2 }} // Trigger once when 20% of section is in view
		>
			<div className="container mx-auto text-center">
				<h2 className="text-3xl font-bold mb-4">Stay Informed</h2>
				<p className="mb-8">
					Subscribe to our newsletter for the latest market insights and trends.
				</p>
				<form className="flex flex-col md:flex-row justify-center items-center gap-4">
					<Input
						type="email"
						placeholder="Enter your email"
						className="max-w-sm bg-white text-primary"
					/>
					<Button type="submit" variant="secondary">
						Subscribe
					</Button>
				</form>
			</div>
		</motion.section>
	);
};

export default NewsletterSignup;
