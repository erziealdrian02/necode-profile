import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const Portfolio = () => {
  const { toast } = useToast();

  const allProjects = [
    {
      title: 'E-Commerce Platform',
      category: 'Web System',
      description: 'Platform e-commerce modern dengan fitur lengkap dan dashboard admin yang powerful.',
      tech: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      image: 'Modern e-commerce website interface with clean design and shopping cart functionality'
    },
    {
      title: 'Mobile Banking App',
      category: 'Mobile App',
      description: 'Aplikasi mobile banking dengan keamanan tinggi dan UX yang intuitif.',
      tech: ['React Native', 'Firebase', 'Biometric Auth'],
      image: 'Sleek mobile banking app interface showing transaction history and account balance'
    },
    {
      title: 'Corporate Video',
      category: 'Editing Video',
      description: 'Video corporate profesional dengan motion graphics dan storytelling yang engaging.',
      tech: ['Premiere Pro', 'After Effects', 'Cinema 4D'],
      image: 'Professional corporate video production setup with cameras and lighting equipment'
    },
    {
      title: 'Brand Identity',
      category: 'Design Graphic',
      description: 'Desain identitas brand lengkap untuk startup teknologi dengan konsep futuristik.',
      tech: ['Figma', 'Illustrator', 'Photoshop'],
      image: 'Modern brand identity design with logo, business cards, and brand guidelines'
    },
    {
      title: 'SaaS Dashboard',
      category: 'Web System',
      description: 'Dashboard analytics untuk SaaS dengan visualisasi data yang interaktif.',
      tech: ['Vue.js', 'D3.js', 'Python', 'PostgreSQL'],
      image: 'Modern SaaS dashboard with charts, graphs, and analytics data visualization'
    },
    {
        title: 'Social Media App',
        category: 'Mobile App',
        description: 'Aplikasi media sosial dengan fitur real-time chat dan push notifications.',
        tech: ['Flutter', 'Dart', 'Firebase'],
        image: 'Social media app on a smartphone screen showing a user profile and posts'
    },
  ];

  const [activeFilter, setActiveFilter] = useState('All');
  
  const filteredProjects = activeFilter === 'All' 
    ? allProjects 
    : allProjects.filter(p => p.category === activeFilter);
  
  const categories = ['All', 'Web System', 'Mobile App', 'Editing Video', 'Design Graphic'];

  const handleViewProject = (project) => {
    toast({
      title: `🚧 Fitur untuk melihat ${project} belum diimplementasikan—tapi jangan khawatir! Anda bisa memintanya di prompt berikutnya! 🚀`
    });
  };

  const handleViewCode = (project) => {
    toast({
      title: `🚧 Fitur untuk melihat kode ${project} belum diimplementasikan—tapi jangan khawatir! Anda bisa memintanya di prompt berikutnya! 🚀`
    });
  };

  return (
    <section id="portfolio" className="py-20 relative overflow-hidden bg-secondary/20">
      <div className="absolute inset-0 tech-grid opacity-20"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-6xl font-bold font-space mb-6">
            Portfolio <span className="gradient-text">Kami</span>
          </h2>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto leading-relaxed">
            Lihat beberapa project terbaik yang telah kami kerjakan untuk berbagai klien 
            dari berbagai industri dan skala bisnis.
          </p>
        </motion.div>

        <div className="flex justify-center flex-wrap gap-4 mb-12">
            {categories.map(category => (
                <Button 
                    key={category}
                    onClick={() => setActiveFilter(category)}
                    variant={activeFilter === category ? 'default' : 'outline'}
                    className={`rounded-full transition-all duration-300 ${activeFilter === category ? 'bg-gradient-to-r from-[#733aff] to-[#f53aff] text-white neon-glow' : ''}`}
                >
                    {category}
                </Button>
            ))}
        </div>

        <motion.div
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              layout
              key={project.title}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -50, scale: 0.9 }}
              transition={{ duration: 0.5 }}
              className="portfolio-card group"
            >
              <div className="relative overflow-hidden">
                <img  
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  alt={`${project.title} project showcase`}
                  src="https://images.unsplash.com/photo-1572177812156-58036aae439c" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="bg-gradient-to-r from-[#733aff] to-[#f53aff] text-white px-3 py-1 rounded-full text-sm font-medium">
                    {project.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold font-space mb-2 gradient-text">
                  {project.title}
                </h3>
                
                <p className="text-foreground/80 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, idx) => (
                    <span
                      key={idx}
                      className="bg-primary/10 text-primary px-2 py-1 rounded-md text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex space-x-3">
                  <Button
                    onClick={() => handleViewProject(project.title)}
                    size="sm"
                    className="flex-1 bg-gradient-to-r from-[#733aff] to-[#f53aff] text-white rounded-lg group"
                  >
                    <ExternalLink className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                    View
                  </Button>
                  <Button
                    onClick={() => handleViewCode(project.title)}
                    size="sm"
                    variant="outline"
                    className="rounded-lg group"
                  >
                    <Github className="w-4 h-4 group-hover:scale-110 transition-transform" />
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;