import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Clock, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    message: ''
  });

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'hello@necode.id',
      description: 'Kirim email untuk inquiry project'
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+62 812-3456-7890',
      description: 'Hubungi kami untuk konsultasi'
    },
    {
      icon: MapPin,
      title: 'Office',
      value: 'Jakarta, Indonesia',
      description: 'Kunjungi kantor kami'
    },
    {
      icon: Clock,
      title: 'Working Hours',
      value: 'Mon - Fri, 9AM - 6PM',
      description: 'Waktu operasional kantor'
    }
  ];

  const services = [
    'Design Graphic',
    'Web System',
    'Mobile App',
    'Editing Video',
    'Konsultasi'
  ];

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toast({
      title: "🚧 Fitur pengiriman form belum diimplementasikan—tapi jangan khawatir! Anda bisa memintanya di prompt berikutnya! 🚀"
    });
  };

  const handleContactClick = (type) => {
    toast({
      title: `🚧 Fitur untuk ${type} belum diimplementasikan—tapi jangan khawatir! Anda bisa memintanya di prompt berikutnya! 🚀`
    });
  };

  return (
    <section id="contact" className="py-20 relative overflow-hidden bg-secondary/20">
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
            Hubungi <span className="gradient-text">Kami</span>
          </h2>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto leading-relaxed">
            Siap untuk memulai project Anda? Mari diskusikan kebutuhan dan visi digital Anda 
            bersama tim profesional kami.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="glass-effect rounded-2xl p-8"
          >
            <h3 className="text-2xl font-bold font-space mb-6 gradient-text">
              Kirim Pesan
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-foreground/90 text-sm font-medium mb-2">
                    Nama Lengkap
                  </label>
                  <Input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Masukkan nama Anda"
                    required
                  />
                </div>
                <div>
                  <label className="block text-foreground/90 text-sm font-medium mb-2">
                    Email
                  </label>
                  <Input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="email@example.com"
                    required
                  />
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-foreground/90 text-sm font-medium mb-2">
                    Perusahaan
                  </label>
                  <Input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    placeholder="Nama perusahaan (opsional)"
                  />
                </div>
                <div>
                  <label className="block text-foreground/90 text-sm font-medium mb-2">
                    Layanan
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    className="flex h-10 w-full items-center justify-between rounded-md border border-input bg-transparent px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    required
                  >
                    <option value="" className="text-black">Pilih layanan</option>
                    {services.map((service, index) => (
                      <option key={index} value={service} className="text-black">
                        {service}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              
              <div>
                <label className="block text-foreground/90 text-sm font-medium mb-2">
                  Pesan
                </label>
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={5}
                  placeholder="Ceritakan tentang project Anda..."
                  required
                />
              </div>
              
              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-[#733aff] to-[#f53aff] text-white py-3 rounded-lg font-semibold neon-glow group"
              >
                <Send className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform" />
                Kirim Pesan
              </Button>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="glass-effect rounded-2xl p-8">
              <h3 className="text-2xl font-bold font-space mb-6 gradient-text">
                Informasi Kontak
              </h3>
              
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start space-x-4 p-4 rounded-xl hover:bg-white/10 dark:hover:bg-black/10 transition-colors cursor-pointer group"
                    onClick={() => handleContactClick(info.title)}
                  >
                    <div className="w-12 h-12 bg-gradient-to-r from-[#733aff] to-[#f53aff] dark:from-cyan-500 dark:to-purple-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                      <info.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-foreground font-semibold mb-1">{info.title}</h4>
                      <p className="text-primary font-medium mb-1">{info.value}</p>
                      <p className="text-foreground/70 text-sm">{info.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="glass-effect rounded-2xl p-8">
              <h3 className="text-xl font-bold font-space mb-4 gradient-text">
                Quick Response
              </h3>
              <div className="flex items-center space-x-3 mb-4">
                <MessageCircle className="w-5 h-5 text-green-400" />
                <span className="text-foreground/90">Biasanya merespon dalam 2-4 jam</span>
              </div>
              <p className="text-foreground/80 text-sm leading-relaxed">
                Tim kami siap membantu Anda dengan respon yang cepat dan solusi yang tepat.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;