
import Hero from "@/components/home/Hero";
import Services from "@/components/home/Services";
import KeyBenefits from "@/components/home/KeyBenefits";
import OurExpertise from "@/components/home/OurExpertise";
import RecentProjects from "@/components/home/RecentProjects";
import ClientTestimonials from "@/components/home/ClientTestimonials";
import Blog from "@/components/home/Blog";
import NewsletterSignup from "@/components/home/NewsletterSignup";

export default function HomePage() {

    

    // useEffect(() => {
    //     if (!testimonialApi || !blogApi) {
    //         return;
    //     }

    //     testimonialApi.on("select", () => {
    //         setTestimonialCurrent(testimonialApi.selectedScrollSnap());
    //     });

    //     blogApi.on("select", () => {
    //         setBlogCurrent(blogApi.selectedScrollSnap());
    //     });
    // }, [testimonialApi, blogApi]);
    
    return (
        <div className="flex flex-col min-h-screen">
            {/* Banner Section */}
            <Hero/>
            {/* Services Overview */}
            <Services/>
            {/* Key Benefits */}
            <KeyBenefits/>

            {/* Our Expertise */}
            <OurExpertise/>
            {/* Recent Projects */}
            <RecentProjects/>
            {/* Client Testimonials */}
            <ClientTestimonials/>
            {/* Blog Section */}
            <Blog/>
            {/* Newsletter Signup */}
            <NewsletterSignup/>
        </div>
    );
}
