import React from 'react';
import { motion } from 'framer-motion';
import { Code, Zap, Mail, Phone, MapPin, Linkedin, Twitter, Instagram, Github } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const Footer = () => {
  const { toast } = useToast();

  const services = [
    'Design Graphic',
    'Web System',
    'Mobile App',
    'Editing Video',
    'Branding'
  ];

  const company = [
    'About Us',
    'Our Team',
    'Careers',
    'Portfolio',
    'Blog',
    'Contact'
  ];

  const handleLinkClick = (link) => {
    toast({
      title: `🚧 Fitur ${link} belum diimplementasikan—tapi jangan khawatir! Anda bisa memintanya di prompt berikutnya! 🚀`
    });
  };

  const handleSocialClick = (platform) => {
    toast({
      title: `🚧 Fitur untuk mengakses ${platform} belum diimplementasikan—tapi jangan khawatir! Anda bisa memintanya di prompt berikutnya! 🚀`
    });
  };

  return (
    <footer className="relative overflow-hidden bg-secondary/20">
      <div className="absolute inset-0 tech-grid opacity-10"></div>
      
      <div className="container mx-auto px-6 py-16 relative z-10">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="flex items-center space-x-2">
              <div className="relative">
                <Code className="w-8 h-8 text-primary" />
                <Zap className="w-4 h-4 text-[#e1ff2b] absolute -top-1 -right-1" />
              </div>
              <span className="text-2xl font-bold font-space gradient-text">
                Necode
              </span>
            </div>
            
            <p className="text-foreground/80 leading-relaxed">
              Perusahaan teknologi terdepan yang mengkhususkan diri dalam solusi digital 
              inovatif untuk berbagai kebutuhan bisnis modern.
            </p>
            
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-foreground/80">
                <Mail className="w-4 h-4 text-primary" />
                <span className="text-sm">hello@necode.id</span>
              </div>
              <div className="flex items-center space-x-3 text-foreground/80">
                <Phone className="w-4 h-4 text-primary" />
                <span className="text-sm">+62 812-3456-7890</span>
              </div>
              <div className="flex items-center space-x-3 text-foreground/80">
                <MapPin className="w-4 h-4 text-primary" />
                <span className="text-sm">Jakarta, Indonesia</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <span className="text-lg font-bold font-space gradient-text mb-6 block">
              Layanan
            </span>
            <div className="space-y-3">
              {services.map((service, index) => (
                <button
                  key={index}
                  onClick={() => handleLinkClick(service)}
                  className="block text-foreground/80 hover:text-foreground transition-colors text-sm text-left"
                >
                  {service}
                </button>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <span className="text-lg font-bold font-space gradient-text mb-6 block">
              Perusahaan
            </span>
            <div className="space-y-3">
              {company.map((item, index) => (
                <button
                  key={index}
                  onClick={() => handleLinkClick(item)}
                  className="block text-foreground/80 hover:text-foreground transition-colors text-sm text-left"
                >
                  {item}
                </button>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <span className="text-lg font-bold font-space gradient-text mb-6 block">
              Newsletter
            </span>
            <p className="text-foreground/80 text-sm mb-4 leading-relaxed">
              Dapatkan update terbaru tentang teknologi dan tips digital marketing.
            </p>
            <form onSubmit={(e) => {e.preventDefault(); handleLinkClick('Newsletter')}} className="space-y-3">
              <Input
                type="email"
                placeholder="Email Anda"
                className="text-sm"
              />
              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-[#733aff] to-[#f53aff] text-white py-2 rounded-lg font-medium text-sm transition-all"
              >
                Subscribe
              </Button>
            </form>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="border-t border-border pt-8"
        >
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <p className="text-foreground/60 text-sm">
              © 2025 Necode. All rights reserved.
            </p>
            
            <div className="flex items-center space-x-4">
              {[
                { icon: Linkedin, name: 'LinkedIn' },
                { icon: Twitter, name: 'Twitter' },
                { icon: Instagram, name: 'Instagram' },
                { icon: Github, name: 'GitHub' }
              ].map((social, index) => (
                <button
                  key={index}
                  onClick={() => handleSocialClick(social.name)}
                  className="w-10 h-10 bg-accent hover:bg-accent/80 rounded-full flex items-center justify-center transition-all hover:scale-110 group"
                >
                  <social.icon className="w-4 h-4 text-accent-foreground group-hover:text-foreground" />
                </button>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;