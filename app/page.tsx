'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, Shield, Zap, ChevronRight, Github, Twitter } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white selection:bg-white/10">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-black/50 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2 font-bold text-xl tracking-tighter">
            <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
              <div className="w-4 h-4 bg-black rotate-45" />
            </div>
            <span>NEXUS</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-400">
            <a href="#" className="hover:text-white transition-colors">Features</a>
            <a href="#" className="hover:text-white transition-colors">Solutions</a>
            <a href="#" className="hover:text-white transition-colors">Pricing</a>
            <a href="#" className="hover:text-white transition-colors">Docs</a>
          </div>
          <div className="flex items-center gap-4">
            <button className="text-sm font-medium text-zinc-400 hover:text-white transition-colors">Log in</button>
            <button className="bg-white text-black px-4 py-2 rounded-full text-sm font-bold hover:bg-zinc-200 transition-colors">
              Get Started
            </button>
          </div>
        </div>
      </nav>

      <main>
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 px-6 overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10">
            <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-blue-500/10 blur-[120px] rounded-full" />
            <div className="absolute top-[10%] left-1/3 -translate-x-1/2 w-[600px] h-[400px] bg-purple-500/10 blur-[120px] rounded-full" />
          </div>

          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-widest uppercase bg-white/5 border border-white/10 rounded-full text-zinc-400">
                Introducing Nexus v2.0
              </span>
              <h1 className="text-5xl md:text-8xl font-bold tracking-tighter mb-8 bg-gradient-to-b from-white to-zinc-500 bg-clip-text text-transparent">
                Build faster than <br /> ever before.
              </h1>
              <p className="max-w-2xl mx-auto text-lg md:text-xl text-zinc-400 mb-10 leading-relaxed">
                The ultimate foundation for your next big idea. Powered by Bun, Next.js 15, and the speed of light.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <button className="w-full sm:w-auto bg-white text-black px-8 py-4 rounded-full font-bold text-lg hover:bg-zinc-200 transition-all flex items-center justify-center gap-2 group">
                  Start Building
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="w-full sm:w-auto bg-white/5 border border-white/10 px-8 py-4 rounded-full font-bold text-lg hover:bg-white/10 transition-all">
                  View Demo
                </button>
              </div>
            </motion.div>

            {/* Dashboard Preview */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mt-20 relative"
            >
              <div className="relative rounded-2xl border border-white/10 bg-zinc-900/50 p-2 backdrop-blur-sm">
                <div className="rounded-xl border border-white/5 bg-black overflow-hidden aspect-video flex items-center justify-center">
                   <div className="grid grid-cols-3 gap-4 p-8 w-full h-full">
                      {[1,2,3,4,5,6].map((i) => (
                        <div key={i} className="bg-zinc-900/50 rounded-lg border border-white/5 animate-pulse" />
                      ))}
                   </div>
                </div>
              </div>
              <div className="absolute -inset-4 bg-gradient-to-b from-white/5 to-transparent -z-10 blur-2xl opacity-50" />
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-24 px-6 bg-white/[0.02]">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-3 gap-12">
              <FeatureCard 
                icon={<Zap className="w-6 h-6" />}
                title="Lightning Fast"
                description="Optimized for Bun runtime, ensuring your applications start and run with minimal latency."
              />
              <FeatureCard 
                icon={<Shield className="w-6 h-6" />}
                title="Secure by Default"
                description="Enterprise-grade security protocols integrated into every layer of your application."
              />
              <FeatureCard 
                icon={<Rocket className="w-6 h-6" />}
                title="Scale Effortlessly"
                description="Built on a serverless-first architecture that grows with your user base automatically."
              />
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/5 py-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2 font-bold text-lg tracking-tighter">
            <div className="w-6 h-6 bg-white rounded flex items-center justify-center">
              <div className="w-3 h-3 bg-black rotate-45" />
            </div>
            <span>NEXUS</span>
          </div>
          <p className="text-zinc-500 text-sm">© 2024 Nexus Inc. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Github className="w-5 h-5 text-zinc-400 hover:text-white cursor-pointer transition-colors" />
            <Twitter className="w-5 h-5 text-zinc-400 hover:text-white cursor-pointer transition-colors" />
          </div>
        </div>
      </footer>
    </div>
  );
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
  return (
    <div className="group p-8 rounded-3xl border border-white/5 bg-white/[0.01] hover:bg-white/[0.03] transition-all">
      <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-zinc-400 leading-relaxed">{description}</p>
    </div>
  );
}
