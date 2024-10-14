import { NextResponse } from "next/server";

export async function GET() {
	// In a real application, this data would come from a database
	const faqs = [
        {
            category: "Services",
            questions: [
                {
                    q: "What types of market research services do you offer?",
                    a: "We offer a wide range of services including consumer behavior analysis, competitive intelligence, and trend forecasting. Our methods include surveys, focus groups, data analytics, and more.",
                },
                {
                    q: "How long does a typical research project take?",
                    a: "Project duration varies depending on scope and complexity. A simple survey might take 2-4 weeks, while a comprehensive market analysis could take 2-3 months. We provide detailed timelines during project scoping.",
                },
            ],
        },
        {
            category: "Pricing",
            questions: [
                {
                    q: "How much do your services cost?",
                    a: "Our pricing is customized based on project requirements. We offer flexible options to suit different budgets and needs. Contact us for a personalized quote.",
                },
                {
                    q: "Do you offer any discounts for startups or non-profits?",
                    a: "Yes, we have special pricing packages for startups and non-profit organizations. Please reach out to our sales team for more information.",
                },
            ],
        },
        {
            category: "Data Security",
            questions: [
                {
                    q: "How do you ensure the security of client data?",
                    a: "We employ industry-standard encryption, secure data storage, and strict access controls. Our processes comply with GDPR and other relevant data protection regulations.",
                },
                {
                    q: "Do you sign NDAs with clients?",
                    a: "Yes, we're happy to sign Non-Disclosure Agreements (NDAs) with our clients to ensure the confidentiality of all project-related information.",
                },
            ],
        },
    ];

	return NextResponse.json(faqs);
}
