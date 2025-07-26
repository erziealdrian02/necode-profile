import React from 'react';
import { motion } from 'framer-motion';
import { Palette, Globe, Smartphone, Video, Camera, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const Services = () => {
  const { toast } = useToast();

  const services = [
    {
      icon: Palette,
      title: 'Design Graphic',
      description: 'UI/UX Design, Branding, Graphic Design, dan Visual Identity yang memukau dan fungsional.',
      features: ['UI/UX Design', 'Brand Identity', 'Graphic Design', 'Logo Design'],
      color: 'from-[#f53aff] to-[#e1ff2b]'
    },
    {
      icon: Globe,
      title: 'Web System',
      description: 'Pengembangan website dan aplikasi web yang responsif, cepat, dan user-friendly.',
      features: ['Website Development', 'Web Applications', 'E-commerce', 'CMS Development'],
      color: 'from-[#733aff] to-[#f53aff]'
    },
    {
      icon: Smartphone,
      title: 'Mobile App',
      description: 'Aplikasi mobile native dan cross-platform untuk iOS dan Android yang powerful.',
      features: ['iOS Development', 'Android Development', 'Cross-platform', 'App Store Optimization'],
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Video,
      title: 'Editing Video',
      description: 'Layanan editing video profesional untuk konten marketing, corporate, dan entertainment.',
      features: ['Video Editing', 'Motion Graphics', 'Color Grading', 'Sound Design'],
      color: 'from-purple-500 to-violet-500'
    }
  ];

  const handleLearnMore = (service) => {
    toast({
      title: `🚧 Fitur ${service} belum diimplementasikan—tapi jangan khawatir! Anda bisa memintanya di prompt berikutnya! 🚀`
    });
  };

  return (
    <section id="services" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 tech-grid opacity-20"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold font-space mb-6">
            Layanan <span className="gradient-text">Kami</span>
          </h2>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto leading-relaxed">
            Kami menyediakan berbagai layanan teknologi dan kreatif yang komprehensif 
            untuk memenuhi semua kebutuhan digital Anda.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="service-card group"
            >
              <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <service.icon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-2xl font-bold font-space mb-4 gradient-text">
                {service.title}
              </h3>
              
              <p className="text-foreground/80 mb-6 leading-relaxed">
                {service.description}
              </p>
              
              <div className="space-y-2 mb-8">
                {service.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-gradient-to-r from-[#733aff] to-[#f53aff] dark:from-cyan-400 dark:to-purple-400 rounded-full"></div>
                    <span className="text-foreground/90 text-sm">{feature}</span>
                  </div>
                ))}
              </div>
              
              <Button
                onClick={() => handleLearnMore(service.title)}
                variant="outline"
                className="w-full group"
              >
                Learn More
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="glass-effect rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold font-space mb-4 gradient-text">
              Butuh Solusi Custom?
            </h3>
            <p className="text-foreground/80 mb-6">
              Kami juga menyediakan layanan konsultasi dan pengembangan solusi custom 
              sesuai dengan kebutuhan spesifik bisnis Anda.
            </p>
            <Button
              onClick={() => handleLearnMore('Custom Solution')}
              className="bg-gradient-to-r from-[#733aff] to-[#f53aff] text-white px-8 py-3 rounded-full font-semibold neon-glow"
            >
              Konsultasi Gratis
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;