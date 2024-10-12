
import Form from "@/components/Contact/Form";
import Address from "@/components/Contact/Address";
import FAQs from "@/components/Contact/FAQs";



export default function ContactPage() {
    return (
        <div className="container mx-auto px-4 py-8">
            <header className="text-center mb-12">
                <h1 className="text-4xl font-bold text-primary mb-2">
                    Contact Us
                </h1>
                <p className="text-xl text-muted-foreground">
                    Get in touch with our expert team
                </p>
            </header>

            <div className="grid gap-8 md:grid-cols-2">
                {/* Contact form */}
                <Form/>
                {/* Address */}
                <Address/>
            </div>

            {/* FAQs */}
            <FAQs/>
        </div>
    );
}
