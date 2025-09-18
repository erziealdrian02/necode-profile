import { Head } from '@inertiajs/react';
import { ThemeToggle } from '../components/ThemeToggle';

export default function Welcome() {
    return (
        <>
            <Head title="Necode - Wujudkan Visi Digital Anda" />

            <div className="bg-background text-foreground min-h-screen">
                {/* Navigation */}
                <nav className="bg-background/80 border-border fixed left-0 right-0 top-0 z-50 border-b backdrop-blur-md">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <div className="flex h-16 items-center justify-between">
                            <div className="flex items-center">
                                <span className="text-primary text-2xl font-bold">Necode</span>
                            </div>

                            <div className="hidden items-center space-x-8 md:flex">
                                <a href="#home" className="text-foreground hover:text-primary transition-colors">
                                    Home
                                </a>
                                <a href="#about" className="text-foreground hover:text-primary transition-colors">
                                    About
                                </a>
                                <a href="#services" className="text-foreground hover:text-primary transition-colors">
                                    Services
                                </a>
                                <a href="#portfolio" className="text-foreground hover:text-primary transition-colors">
                                    Portfolio
                                </a>
                                <a href="#team" className="text-foreground hover:text-primary transition-colors">
                                    Team
                                </a>
                                <a href="#contact" className="text-foreground hover:text-primary transition-colors">
                                    Contact
                                </a>
                            </div>

                            <div className="flex items-center space-x-4">
                                <ThemeToggle />
                                <button className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-lg px-6 py-2 transition-colors">
                                    Get Started
                                </button>
                            </div>
                        </div>
                    </div>
                </nav>

                {/* Hero Section */}
                <section id="home" className="gradient-bg flex min-h-screen items-center pt-16">
                    <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
                        <h1 className="mb-6 text-5xl font-bold md:text-7xl">
                            Wujudkan Visi <span className="text-primary">Digital</span> Anda
                            <br />
                            Bersama <span className="text-primary">Necode</span>
                        </h1>
                        <p className="text-muted-foreground mx-auto mb-8 max-w-3xl text-xl md:text-2xl">
                            Kami menghadirkan solusi digital terdepan dengan teknologi modern untuk mengembangkan bisnis Anda
                        </p>

                        <div className="mb-16 flex flex-col justify-center gap-4 sm:flex-row">
                            <button className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-lg px-8 py-4 text-lg font-semibold transition-colors">
                                Mulai Project
                            </button>
                            <button className="border-border bg-background/50 text-foreground hover:bg-background/80 rounded-lg border px-8 py-4 text-lg font-semibold transition-colors">
                                Lihat Portfolio
                            </button>
                        </div>

                        {/* Statistics */}
                        <div className="mx-auto grid max-w-4xl grid-cols-2 gap-8 md:grid-cols-4">
                            <div className="text-center">
                                <div className="text-primary mb-2 text-4xl font-bold md:text-5xl">500+</div>
                                <div className="text-muted-foreground">Project Selesai</div>
                            </div>
                            <div className="text-center">
                                <div className="text-primary mb-2 text-4xl font-bold md:text-5xl">100+</div>
                                <div className="text-muted-foreground">Client Puas</div>
                            </div>
                            <div className="text-center">
                                <div className="text-primary mb-2 text-4xl font-bold md:text-5xl">50+</div>
                                <div className="text-muted-foreground">Tim Ahli</div>
                            </div>
                            <div className="text-center">
                                <div className="text-primary mb-2 text-4xl font-bold md:text-5xl">5+</div>
                                <div className="text-muted-foreground">Tahun Pengalaman</div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}
