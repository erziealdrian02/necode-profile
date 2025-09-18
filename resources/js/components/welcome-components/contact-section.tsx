'use client';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import * as React from 'react';
// import { Textarea } from "@/components/ui/textarea"
import { Label } from '@/components/ui/label';
import { Clock, Mail, MapPin, MessageCircle, Phone, Send } from 'lucide-react';

const contactInfo = [
    {
        icon: MapPin,
        title: 'Alamat Kantor',
        content: 'Jl. Sudirman No. 123, Jakarta Pusat\nDKI Jakarta 10220, Indonesia',
        color: 'from-blue-500 to-cyan-500',
    },
    {
        icon: Phone,
        title: 'Nomor Telepon',
        content: '+62 21 1234 5678\n+62 812 3456 7890',
        color: 'from-green-500 to-emerald-500',
    },
    {
        icon: Mail,
        title: 'Email',
        content: 'hello@necode.dev\ninfo@necode.dev',
        color: 'from-purple-500 to-pink-500',
    },
    {
        icon: Clock,
        title: 'Jam Operasional',
        content: 'Senin - Jumat: 09:00 - 18:00\nSabtu: 09:00 - 15:00',
        color: 'from-orange-500 to-red-500',
    },
];

export function ContactSection() {
    const [isVisible, setIsVisible] = React.useState(false);
    const [formData, setFormData] = React.useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
    });
    const [isSubmitting, setIsSubmitting] = React.useState(false);
    const ref = React.useRef<HTMLElement>(null);

    React.useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.1 },
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => observer.disconnect();
    }, []);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate form submission
        await new Promise((resolve) => setTimeout(resolve, 2000));

        console.log('Form submitted:', formData);
        setIsSubmitting(false);
        setFormData({ name: '', email: '', phone: '', subject: '', message: '' });

        // Show success message (you can implement toast notification here)
        alert('Pesan Anda telah terkirim! Kami akan segera menghubungi Anda.');
    };

    return (
        <section ref={ref} id="contact" className="bg-muted/30 py-20">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="mb-16 text-center">
                    <Badge variant="outline" className="mb-4 px-4 py-2">
                        Hubungi Kami
                    </Badge>
                    <h2 className="mb-6 text-3xl font-bold text-balance md:text-4xl">
                        Hubungi <span className="gradient-text">Kami</span>
                    </h2>
                    <p className="mx-auto max-w-3xl text-lg text-pretty text-muted-foreground">
                        Siap memulai proyek digital Anda? Mari diskusikan kebutuhan dan ide Anda dengan tim ahli kami. Kami siap membantu mewujudkan
                        visi digital Anda.
                    </p>
                </div>

                <div className="grid gap-12 lg:grid-cols-2">
                    {/* Contact Information */}
                    <div className={`transform transition-all duration-700 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'}`}>
                        <div className="mb-8">
                            <h3 className="mb-4 text-2xl font-bold">Mari Berkolaborasi</h3>
                            <p className="text-pretty text-muted-foreground">
                                Kami percaya bahwa setiap proyek dimulai dengan percakapan yang baik. Hubungi kami melalui berbagai channel yang
                                tersedia atau kunjungi kantor kami untuk diskusi lebih mendalam.
                            </p>
                        </div>

                        <div className="grid gap-6">
                            {contactInfo.map((info, index) => {
                                const Icon = info.icon;
                                return (
                                    <Card
                                        key={index}
                                        className={`glass-effect transform border-0 transition-all duration-300 hover:shadow-lg ${
                                            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                                        }`}
                                        style={{ transitionDelay: `${index * 100}ms` }}
                                    >
                                        <CardContent className="flex items-start gap-4 p-6">
                                            <div
                                                className={`h-12 w-12 bg-gradient-to-r ${info.color} flex flex-shrink-0 items-center justify-center rounded-xl`}
                                            >
                                                <Icon className="h-6 w-6 text-white" />
                                            </div>
                                            <div>
                                                <h4 className="mb-2 font-semibold">{info.title}</h4>
                                                <p className="text-sm whitespace-pre-line text-muted-foreground">{info.content}</p>
                                            </div>
                                        </CardContent>
                                    </Card>
                                );
                            })}
                        </div>

                        {/* Quick Contact Buttons */}
                        <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                            <Button
                                size="lg"
                                className="flex-1 bg-gradient-to-r from-green-500 to-emerald-500 text-white hover:from-green-600 hover:to-emerald-600"
                            >
                                <MessageCircle className="mr-2 h-5 w-5" />
                                WhatsApp
                            </Button>
                            <Button variant="outline" size="lg" className="flex-1 bg-transparent hover:border-primary/50 hover:bg-primary/10">
                                <Phone className="mr-2 h-5 w-5" />
                                Telepon
                            </Button>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className={`transform transition-all duration-700 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'}`}>
                        <Card className="glass-effect border-0 shadow-xl">
                            <CardHeader>
                                <CardTitle className="text-xl">Kirim Pesan</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="grid gap-4 md:grid-cols-2">
                                        <div className="space-y-2">
                                            <Label htmlFor="name">Nama Lengkap *</Label>
                                            <Input
                                                id="name"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleInputChange}
                                                placeholder="Masukkan nama lengkap"
                                                required
                                                className="bg-background/50"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="email">Email *</Label>
                                            <Input
                                                id="email"
                                                name="email"
                                                type="email"
                                                value={formData.email}
                                                onChange={handleInputChange}
                                                placeholder="nama@email.com"
                                                required
                                                className="bg-background/50"
                                            />
                                        </div>
                                    </div>

                                    <div className="grid gap-4 md:grid-cols-2">
                                        <div className="space-y-2">
                                            <Label htmlFor="phone">Nomor Telepon</Label>
                                            <Input
                                                id="phone"
                                                name="phone"
                                                value={formData.phone}
                                                onChange={handleInputChange}
                                                placeholder="+62 812 3456 7890"
                                                className="bg-background/50"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="subject">Subjek *</Label>
                                            <Input
                                                id="subject"
                                                name="subject"
                                                value={formData.subject}
                                                onChange={handleInputChange}
                                                placeholder="Subjek pesan"
                                                required
                                                className="bg-background/50"
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="message">Pesan *</Label>
                                        {/* <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Ceritakan tentang proyek atau kebutuhan Anda..."
                      rows={5}
                      required
                      className="bg-background/50 resize-none"
                    /> */}
                                    </div>

                                    <Button
                                        type="submit"
                                        size="lg"
                                        disabled={isSubmitting}
                                        className="w-full bg-gradient-to-r from-primary to-accent text-primary-foreground hover:from-primary/90 hover:to-accent/90"
                                    >
                                        {isSubmitting ? (
                                            <>
                                                <div className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-primary-foreground border-t-transparent" />
                                                Mengirim...
                                            </>
                                        ) : (
                                            <>
                                                <Send className="mr-2 h-5 w-5" />
                                                Kirim Pesan
                                            </>
                                        )}
                                    </Button>
                                </form>
                            </CardContent>
                        </Card>
                    </div>
                </div>

                {/* FAQ Section */}
                <div className="mt-20">
                    <div
                        className={`mb-12 transform text-center transition-all duration-700 ${
                            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                        }`}
                        style={{ transitionDelay: '600ms' }}
                    >
                        <h3 className="mb-4 text-2xl font-bold">Butuh Solusi Cepat?</h3>
                        <p className="mx-auto max-w-2xl text-pretty text-muted-foreground">
                            Untuk pertanyaan umum atau konsultasi cepat, Anda dapat menghubungi kami melalui WhatsApp atau email. Tim kami siap
                            membantu Anda 24/7.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
