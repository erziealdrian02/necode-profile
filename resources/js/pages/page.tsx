import { AboutSection } from '@/components/welcome-components/about-section';
import { ContactSection } from '@/components/welcome-components/contact-section';
import { Footer } from '@/components/welcome-components/footer';
import { HeroSection } from '@/components/welcome-components/hero-section';
import { Navigation } from '@/components/welcome-components/navigation';
import { ServicesSection } from '@/components/welcome-components/services-section';
import { TeamSection } from '@/components/welcome-components/team-section';

export default function HomePage() {
    return (
        <div className="bg-background min-h-screen">
            <Navigation />
            <HeroSection />
            <AboutSection />
            <ServicesSection />
            {/* <PortfolioSection /> */}
            <TeamSection />
            <ContactSection />
            <Footer />
        </div>
    );
}
