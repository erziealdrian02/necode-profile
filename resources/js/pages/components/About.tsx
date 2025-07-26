import { motion } from 'framer-motion';
import { Award, Lightbulb, Target, Users } from 'lucide-react';

const About = () => {
    const values = [
        {
            icon: Target,
            title: 'Fokus pada Kualitas',
            description: 'Kami berkomitmen memberikan hasil terbaik dengan standar kualitas tinggi di setiap project.',
        },
        {
            icon: Users,
            title: 'Tim Profesional',
            description: 'Didukung oleh tim ahli yang berpengalaman di bidang teknologi dan design terkini.',
        },
        {
            icon: Lightbulb,
            title: 'Inovasi Berkelanjutan',
            description: 'Selalu mengikuti perkembangan teknologi terbaru untuk memberikan solusi inovatif.',
        },
        {
            icon: Award,
            title: 'Kepuasan Klien',
            description: 'Mengutamakan kepuasan klien dengan layanan yang responsif dan hasil yang memuaskan.',
        },
    ];

    return (
        <section id="about" className="relative overflow-hidden bg-secondary/20 py-20">
            <div className="tech-grid absolute inset-0 opacity-30"></div>

            <div className="relative z-10 container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="mb-16 text-center"
                >
                    <h2 className="font-space mb-6 text-4xl font-bold md:text-6xl">
                        Tentang <span className="gradient-text">Necode</span>
                    </h2>
                    <p className="mx-auto max-w-3xl text-xl leading-relaxed text-foreground/80">
                        Necode adalah perusahaan teknologi yang berdedikasi untuk menghadirkan solusi digital terdepan. Dengan pengalaman
                        bertahun-tahun, kami telah membantu ratusan klien mewujudkan visi digital mereka.
                    </p>
                </motion.div>

                <div className="mb-20 grid items-center gap-16 md:grid-cols-2">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <img
                            className="neon-glow h-96 w-full rounded-2xl object-cover shadow-2xl"
                            alt="Necode team working on innovative projects"
                            src="https://images.unsplash.com/photo-1531497258014-b5736f376b1b"
                        />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="space-y-6"
                    >
                        <h3 className="font-space gradient-text text-3xl font-bold">Mengapa Memilih Necode?</h3>
                        <p className="text-lg leading-relaxed text-foreground/80">
                            Kami memahami bahwa setiap bisnis memiliki kebutuhan unik. Oleh karena itu, kami menyediakan solusi yang disesuaikan
                            dengan visi dan tujuan spesifik klien kami.
                        </p>
                        <div className="space-y-4">
                            {[
                                'Pengalaman 5+ tahun di industri teknologi',
                                'Tim multidisiplin dengan keahlian beragam',
                                'Menggunakan teknologi dan tools terkini',
                                'Proses development yang agile dan transparan',
                                'Support dan maintenance berkelanjutan',
                            ].map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    className="flex items-center space-x-3"
                                >
                                    <div className="h-2 w-2 rounded-full bg-gradient-to-r from-[#733aff] to-[#f53aff] dark:from-cyan-400 dark:to-purple-400"></div>
                                    <span className="text-foreground/90">{item}</span>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="grid gap-8 md:grid-cols-2 lg:grid-cols-4"
                >
                    {values.map((value, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="glass-effect group rounded-2xl p-8 text-center transition-all duration-500 hover:scale-105 hover:bg-white/20 dark:hover:bg-black/20"
                        >
                            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r from-[#733aff] to-[#f53aff] transition-transform group-hover:scale-110 dark:from-cyan-500 dark:to-purple-500">
                                <value.icon className="h-8 w-8 text-white" />
                            </div>
                            <h4 className="font-space gradient-text mb-4 text-xl font-bold">{value.title}</h4>
                            <p className="leading-relaxed text-foreground/80">{value.description}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default About;
