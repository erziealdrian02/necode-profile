import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Rocket, Zap, Code } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const Hero = () => {
  const { toast } = useToast();

  const handleGetStarted = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleWatchDemo = () => {
    toast({
      title: "🚧 Fitur ini belum diimplementasikan—tapi jangan khawatir! Anda bisa memintanya di prompt berikutnya! 🚀"
    });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden tech-grid pt-20">
      <div className="absolute inset-0">
        <motion.div
          animate={{ rotate: 360, scale: [1, 1.2, 1] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-r from-[#733aff]/20 to-[#f53aff]/20 dark:from-cyan-500/20 dark:to-purple-500/20 rounded-full blur-xl"
        />
        <motion.div
          animate={{ rotate: -360, scale: [1, 1.5, 1] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-20 right-20 w-40 h-40 bg-gradient-to-r from-[#f53aff]/20 to-[#e1ff2b]/20 dark:from-pink-500/20 dark:to-yellow-500/20 rounded-full blur-xl"
        />
        <motion.div
          animate={{ y: [-20, 20, -20] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 left-10 w-24 h-24 bg-gradient-to-r from-[#f53aff]/20 to-[#733aff]/20 dark:from-blue-500/20 dark:to-green-500/20 rounded-full blur-lg"
        />
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center space-x-2 glass-effect rounded-full px-6 py-3 mb-8"
          >
            <Sparkles className="w-5 h-5 text-[#e1ff2b]" />
            <span className="text-sm font-medium text-foreground">Digital Innovation Company</span>
            <Zap className="w-5 h-5 text-[#f53aff] dark:text-cyan-400" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-5xl md:text-7xl font-bold font-space mb-6 leading-tight"
          >
            Wujudkan Visi{' '}
            <span className="gradient-text">Digital</span>{' '}
            Anda Bersama{' '}
            <span className="gradient-text">Necode</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-xl md:text-2xl text-foreground/80 mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            Kami mengkhususkan diri dalam <span className="text-[#733aff] dark:text-cyan-400 font-semibold">design</span>, 
            <span className="text-[#f53aff] dark:text-purple-400 font-semibold"> web system</span>, 
            <span className="text-[#733aff] dark:text-pink-400 font-semibold"> mobile system</span>, 
            dan <span className="text-[#e1ff2b] dark:text-yellow-400 font-semibold"> multimedia</span> untuk solusi terdepan.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6"
          >
            <Button
              onClick={handleGetStarted}
              size="lg"
              className="bg-gradient-to-r from-[#733aff] to-[#f53aff] text-white px-8 py-4 rounded-full font-semibold text-lg neon-glow group"
            >
              Get Started
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button
              onClick={handleWatchDemo}
              variant="outline"
              size="lg"
              className="px-8 py-4 rounded-full font-semibold text-lg backdrop-blur-sm group"
            >
              <Rocket className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
              Watch Demo
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20"
          >
            {[
              { number: '500+', label: 'Projects Completed' },
              { number: '100+', label: 'Happy Clients' },
              { number: '50+', label: 'Team Members' },
              { number: '5+', label: 'Years Experience' }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">
                  {stat.number}
                </div>
                <div className="text-foreground/60 text-sm md:text-base">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 right-10 hidden lg:block"
      >
        <div className="w-16 h-16 glass-effect rounded-2xl flex items-center justify-center">
          <Code className="w-8 h-8 text-primary" />
        </div>
      </motion.div>

      <motion.div
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-1/4 left-10 hidden lg:block"
      >
        <div className="w-20 h-20 glass-effect rounded-full flex items-center justify-center">
          <Sparkles className="w-10 h-10 text-[#e1ff2b]" />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;