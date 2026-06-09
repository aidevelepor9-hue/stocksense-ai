import Head from 'next/head';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Hero from '@/components/sections/Hero';
import Problem from '@/components/sections/Problem';
import Features from '@/components/sections/Features';
import Roadmap from '@/components/sections/Roadmap';
import Pricing from '@/components/sections/Pricing';
import Signup from '@/components/sections/Signup';
import Contact from '@/components/sections/Contact';

export default function Home() {
  return (
    <>
      <Head>
        <title>StockSense AI - AI COO for E-commerce</title>
        <meta name="description" content="Predict stockouts before they kill your profit. AI-powered inventory management for e-commerce sellers." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Header />
      <main>
        <Hero />
        <Problem />
        <Features />
        <Roadmap />
        <Pricing />
        <Signup />
        <Contact />
      </main>
      <Footer />
    </>
  );
}