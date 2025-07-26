import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Twitter, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const Team = () => {
  const { toast } = useToast();

  const teamMembers = [
    {
      name: 'Alex Rodriguez',
      role: 'CEO & Founder',
      specialty: 'Strategic Leadership',
      description: 'Visioner dengan pengalaman 10+ tahun dalam industri teknologi dan startup.',
      image: 'Professional headshot of a confident CEO in modern office setting'
    },
    {
      name: 'Sarah Chen',
      role: 'Creative Director',
      specialty: 'UI/UX Design',
      description: 'Expert dalam design thinking dan user experience dengan portfolio internasional.',
      image: 'Creative professional woman working on design projects with multiple monitors'
    },
    {
      name: 'Michael Johnson',
      role: 'Lead Developer',
      specialty: 'Full-Stack Development',
      description: 'Senior developer dengan keahlian dalam berbagai teknologi modern dan architecture.',
      image: 'Skilled software developer coding on multiple screens in modern workspace'
    },
    {
      name: 'Emily Davis',
      role: 'Mobile App Specialist',
      specialty: 'iOS & Android Development',
      description: 'Spesialis mobile development dengan pengalaman membangun 50+ aplikasi mobile.',
      image: 'Mobile app developer testing applications on various devices and smartphones'
    },
    {
      name: 'David Kim',
      role: 'Video Production Lead',
      specialty: 'Video Editing & Motion Graphics',
      description: 'Creative professional dengan keahlian dalam storytelling visual dan motion design.',
      image: 'Video editor working with professional editing equipment and multiple monitors'
    },
    {
      name: 'Lisa Wang',
      role: 'Photography Director',
      specialty: 'Commercial Photography',
      description: 'Fotografer profesional dengan pengalaman dalam product dan corporate photography.',
      image: 'Professional photographer in studio setting with high-end camera equipment'
    }
  ];

  const handleSocialClick = (platform, name) => {
    toast({
      title: `🚧 Fitur untuk mengakses ${platform} ${name} belum diimplementasikan—tapi jangan khawatir! Anda bisa memintanya di prompt berikutnya! 🚀`
    });
  };

  return (
    <section id="team" className="py-20 relative overflow-hidden">
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
            Tim <span className="gradient-text">Profesional</span>
          </h2>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto leading-relaxed">
            Bertemu dengan tim ahli kami yang berdedikasi untuk menghadirkan solusi teknologi 
            terbaik dan inovatif untuk setiap project.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass-effect rounded-2xl p-6 text-center hover:bg-white/20 dark:hover:bg-black/20 transition-all duration-500 hover:scale-105 group"
            >
              <div className="relative mb-6">
                <img  
                  className="w-24 h-24 rounded-full mx-auto object-cover border-4 border-primary group-hover:scale-110 transition-transform"
                  alt={`${member.name} - ${member.role} at Necode`}
                  src="https://images.unsplash.com/photo-1595872018818-97555653a011" />
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-[#733aff] to-[#f53aff] text-white px-3 py-1 rounded-full text-xs font-medium">
                    {member.specialty}
                  </div>
                </div>
              </div>
              
              <h3 className="text-xl font-bold font-space mb-2 gradient-text">
                {member.name}
              </h3>
              
              <p className="text-foreground/90 font-medium mb-4">
                {member.role}
              </p>
              
              <p className="text-foreground/80 text-sm mb-6 leading-relaxed">
                {member.description}
              </p>
              
              <div className="flex justify-center space-x-4">
                <Button
                  onClick={() => handleSocialClick('LinkedIn', member.name)}
                  size="icon"
                  variant="outline"
                  className="rounded-full group"
                >
                  <Linkedin className="w-4 h-4 group-hover:scale-110 transition-transform" />
                </Button>
                <Button
                  onClick={() => handleSocialClick('Twitter', member.name)}
                  size="icon"
                  variant="outline"
                  className="rounded-full group"
                >
                  <Twitter className="w-4 h-4 group-hover:scale-110 transition-transform" />
                </Button>
                <Button
                  onClick={() => handleSocialClick('GitHub', member.name)}
                  size="icon"
                  variant="outline"
                  className="rounded-full group"
                >
                  <Github className="w-4 h-4 group-hover:scale-110 transition-transform" />
                </Button>
              </div>
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
              Bergabung dengan Tim Kami
            </h3>
            <p className="text-foreground/80 mb-6">
              Kami selalu mencari talenta terbaik untuk bergabung dengan tim profesional kami. 
              Jika Anda passionate tentang teknologi dan inovasi, mari berkarya bersama!
            </p>
            <Button
              onClick={() => handleSocialClick('Career', 'Necode')}
              className="bg-gradient-to-r from-[#733aff] to-[#f53aff] text-white px-8 py-3 rounded-full font-semibold neon-glow"
            >
              Lihat Lowongan Kerja
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Team;