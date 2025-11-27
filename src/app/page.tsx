'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import {
  Code,
  Facebook,
  Mail,
  ArrowRight,
  Github,
  Linkedin,
} from 'lucide-react';

export default function Home() {
  const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.8, delay },
    viewport: { once: true },
  });

  const sections = {
    wrapper: 'py-28 relative',
    gradient:
      'absolute inset-0 bg-gradient-to-b from-transparent via-indigo-500/5 to-transparent',
    container: 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8',
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-gray-300">
      {/* ================= HERO SECTION ================= */}
      <section
        id="home"
        className="h-screen flex items-center justify-center relative overflow-hidden"
      >
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-indigo-500/10 via-transparent to-transparent"></div>
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]"></div>
        </div>

        <motion.div
          {...fadeUp()}
          className="relative z-10 text-center max-w-4xl mx-auto px-4"
        >
          <span className="text-indigo-400 font-medium uppercase tracking-wider text-sm mb-3 block">
            Full Stack Developer
          </span>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
            Hi, I&apos;m Abrar Rahman
          </h1>

          <p className="text-xl md:text-2xl mb-12 text-gray-400 font-light max-w-2xl mx-auto">
            Crafting elegant solutions to complex problems through clean,
            efficient code and innovative design.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              className="group bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-6 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all"
            >
              <Link href="#projects" className="flex items-center gap-2">
                View My Work
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>

            <Button
              asChild
              variant="outline"
              className="group border-2 border-gray-700 hover:border-indigo-500 text-white px-8 py-6 rounded-full text-lg font-semibold transition-all"
            >
              <Link href="#contact" className="flex items-center gap-2">
                Get in Touch
                <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </Link>
            </Button>
          </div>
        </motion.div>
      </section>

      {/* ================= ABOUT SECTION ================= */}
      <section id="about" className={sections.wrapper}>
        <div className={`${sections.gradient} pointer-events-none`}></div>
        <div className={sections.container}>
          <motion.div {...fadeUp()} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
              About Me
            </h2>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto leading-relaxed">
              I’m{' '}
              <span className="text-indigo-400 font-semibold">
                Md. Abrar Rahman Shafin
              </span>
              , a{' '}
              <span className="text-indigo-400">
                Computer Science and Engineering
              </span>{' '}
              undergraduate at{' '}
              <span className="text-indigo-400">BRAC University</span> (CGPA:
              3.70/4.00). I specialize in{' '}
              <span className="text-indigo-400">web development</span> and{' '}
              <span className="text-indigo-400">machine learning</span>,
              focusing on clean UI, scalability, and intelligent systems.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              {
                title: '🎓 Education',
                content: (
                  <ul className="space-y-4">
                    <li>
                      <p className="font-semibold text-white">
                        B.Sc. in Computer Science and Engineering
                      </p>
                      <p>BRAC University (2021–2025) — CGPA: 3.70 / 4.00</p>
                    </li>
                    <li>
                      <p className="font-semibold text-white">
                        Higher Secondary Certificate
                      </p>
                      <p>National Ideal College, 2020 — GPA: 5.00</p>
                    </li>
                    <li>
                      <p className="font-semibold text-white">
                        Secondary School Certificate
                      </p>
                      <p>Motijheel Govt. Boys’ High School, 2018 — GPA: 5.00</p>
                    </li>
                  </ul>
                ),
              },
              {
                title: '⚙️ Skills',
                content: (
                  <ul className="space-y-2">
                    <li>
                      <strong>Languages:</strong> Python, Java, JavaScript, PHP
                    </li>
                    <li>
                      <strong>Web:</strong> Django, Flask, React, Express,
                      Node.js, Laravel, Tailwind CSS
                    </li>
                    <li>
                      <strong>Databases:</strong> MySQL, MongoDB
                    </li>
                    <li>
                      <strong>ML / Data:</strong> Pandas, NumPy, Scikit-learn,
                      TensorFlow
                    </li>
                    <li>
                      <strong>Tools:</strong> Git, VS Code, Jupyter, Colab
                    </li>
                  </ul>
                ),
              },
              {
                title: '🌍 Languages',
                content: (
                  <>
                    <ul className="space-y-2">
                      <li>
                        <strong>English:</strong> Fluent
                      </li>
                      <li>
                        <strong>Bengali:</strong> Native
                      </li>
                    </ul>
                    <p className="mt-6 text-sm italic text-gray-400">
                      Core strengths: problem-solving, teamwork, adaptability,
                      and algorithmic thinking.
                    </p>
                  </>
                ),
              },
            ].map((card, i) => (
              <motion.div
                key={card.title}
                {...fadeUp(0.2 * i)}
                className="bg-gray-900/50 p-8 rounded-2xl border border-gray-800 shadow-xl hover:shadow-2xl transition-all"
              >
                <h3 className="text-2xl font-bold mb-4 text-white">
                  {card.title}
                </h3>
                <div className="text-gray-400">{card.content}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= PROJECTS SECTION ================= */}
      <section id="projects" className={sections.wrapper}>
        <div className={`${sections.gradient} pointer-events-none`}></div>
        <div className={sections.container}>
          <motion.div {...fadeUp()} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
              Featured Projects
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              A showcase of my full-stack and machine learning work.
            </p>
          </motion.div>

          {/* Web Projects */}
          <motion.h3
            {...fadeUp()}
            className="text-3xl font-semibold mb-10 text-indigo-400 text-center"
          >
            Web Development
          </motion.h3>

          <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-8 mb-20">
            {[
              {
                title: 'AI-Powered Resume Analyzer',
                description:
                  'Full-stack platform analyzing resumes, providing skill feedback, and generating tailored cover letters.',
                link: 'https://ai-career-coach-one-rho.vercel.app',
              },
              {
                title: 'Mobile Benchmarking',
                description:
                  'Comprehensive mobile device benchmarking app with real-time performance comparison.',
                link: 'https://mobile-benchmarking-frontend.onrender.com',
              },
              {
                title: 'Movie Finder Web App',
                description:
                  'React-based web app to explore trending movies in real-time via the TMDB API. Built with Appwrite and deployed on Vercel.',
                link: 'https://react-movie-webapp-beta.vercel.app/',
              },
              {
                title: 'DayMate - AI Day Planner',
                description:
                  'A personal productivity web app that provides real-time weather, top news, and an AI-powered daily planner. Built with FastAPI, React, and OpenAI API.',
                link: 'https://daymate-ten.vercel.app/',
              },
            ].map((p, i) => (
              <motion.div
                key={p.title}
                {...fadeUp(0.2 * i)}
                whileHover={{ scale: 1.02 }}
                className="bg-gray-900/50 p-8 rounded-2xl border border-gray-800 shadow-xl hover:border-indigo-500/50 transition-all"
              >
                <h3 className="text-2xl font-bold mb-4 text-white">
                  {p.title}
                </h3>
                <p className="text-gray-400 mb-6 leading-relaxed">
                  {p.description}
                </p>
                <Button
                  asChild
                  className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-full"
                >
                  <a
                    href={p.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    View Project <ArrowRight className="w-4 h-4" />
                  </a>
                </Button>
              </motion.div>
            ))}
          </div>

          {/* ML Projects */}
          <motion.h3
            {...fadeUp()}
            className="text-3xl font-semibold mb-10 text-indigo-400 text-center"
          >
            Machine Learning
          </motion.h3>

          <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-8">
            {[
              {
                title: 'Credit Score Prediction Model',
                description:
                  'Predicted credit scores using classification algorithms (KNN, Decision Trees, Random Forest) with preprocessing and feature engineering.',
                link: 'https://github.com/EbrerRamen/CreditScorePrediction',
              },
              {
                title: 'Traffic Situation Prediction',
                description:
                  'Built ML models to classify traffic conditions using ~3,000 records; achieved 89% accuracy after feature engineering.',
                link: 'https://github.com/EbrerRamen/TrafficSituationPrediction',
              },
            ].map((p, i) => (
              <motion.div
                key={p.title}
                {...fadeUp(0.2 * i)}
                whileHover={{ scale: 1.02 }}
                className="bg-gray-900/50 p-8 rounded-2xl border border-gray-800 shadow-xl hover:border-indigo-500/50 transition-all"
              >
                <h3 className="text-2xl font-bold mb-4 text-white">
                  {p.title}
                </h3>
                <p className="text-gray-400 mb-6 leading-relaxed">
                  {p.description}
                </p>
                <Button
                  asChild
                  className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-full"
                >
                  <a
                    href={p.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    View Project <ArrowRight className="w-4 h-4" />
                  </a>
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= THESIS SECTION ================= */}
      <section id="thesis" className={sections.wrapper}>
        <div className={`${sections.gradient} pointer-events-none`}></div>
        <div className={sections.container}>
          <motion.div {...fadeUp()} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
              Research & Thesis
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              My academic research on applying deep learning and computer vision
              for wildlife conservation.
            </p>
          </motion.div>

          <motion.div
            {...fadeUp(0.2)}
            whileHover={{ scale: 1.02 }}
            className="bg-gray-900/50 p-8 rounded-2xl border border-gray-800 shadow-xl max-w-3xl mx-auto"
          >
            <h3 className="text-2xl font-bold mb-4 text-white">
              Thesis – Automated Species Identification in Camera Trap Images
            </h3>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Designed computer vision models for wildlife classification.
              Enhanced Faster R-CNN by integrating
              <strong> Swin Transformer</strong> and <strong>BiFPN</strong>,
              compared with ViT, EfficientNetV2, YOLOv11, and explored zero-shot
              detection using <strong>LlaVa</strong>, <strong>Kosmos</strong>,
              and <strong>Idefics</strong>.
            </p>
            <Button
              asChild
              className="bg-gray-800 text-gray-400 cursor-default px-6 py-3 rounded-full text-sm font-semibold"
            >
              <span>Private / Unpublished Work</span>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-500/5 to-transparent"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
              Get in Touch
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Have a project in mind? Let&apos;s discuss how we can work
              together to bring your ideas to life.
            </p>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            action="https://formspree.io/f/mgvrwgqn"
            method="POST"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6 bg-gray-900/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-800 shadow-xl"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  label: 'Name',
                  type: 'text',
                  id: 'name',
                  placeholder: 'Your Name',
                },
                {
                  label: 'Email',
                  type: 'email',
                  id: 'email',
                  placeholder: 'your.email@example.com',
                },
              ].map((field) => (
                <div key={field.id}>
                  <label
                    htmlFor={field.id}
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    {field.label}
                  </label>
                  <input
                    type={field.type}
                    id={field.id}
                    name={field.id}
                    required
                    placeholder={field.placeholder}
                    className="w-full p-4 bg-gray-800/50 border border-gray-700 rounded-xl text-gray-100 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200"
                  />
                </div>
              ))}
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-300 mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                placeholder="Your message..."
                className="w-full p-4 bg-gray-800/50 border border-gray-700 rounded-xl text-gray-100 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200"
              />
            </div>

            <Button
              type="submit"
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-4 rounded-xl text-lg font-semibold shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5"
            >
              Send Message
            </Button>
          </motion.form>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="py-16 bg-black/50 border-t border-gray-800 text-center">
        <motion.div {...fadeUp()}>
          <h3 className="text-2xl font-bold text-white mb-2">Abrar Rahman</h3>
          <p className="text-gray-400 mb-6">Full Stack Developer</p>
          <div className="flex justify-center gap-6 mb-6">
            {[
              { icon: Github, href: 'https://github.com/EbrerRamen' },
              {
                icon: Linkedin,
                href: 'https://www.linkedin.com/in/md-abrar-rahman-shafin-7a97b825b/',
              },
              { icon: Code, href: 'https://leetcode.com/u/abrar_rayman/' },
              {
                icon: Facebook,
                href: 'https://www.facebook.com/abrar.rahman.752002/',
              },
              { icon: Mail, href: 'mailto:abrarrahman80@gmail.com' },
            ].map(({ icon: Icon, href }) => (
              <a
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-300 hover:scale-110 transform"
              >
                <Icon size={24} />
              </a>
            ))}
          </div>
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Abrar Rahman. All rights reserved.
          </p>
        </motion.div>
      </footer>
    </div>
  );
}
