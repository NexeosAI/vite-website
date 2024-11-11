import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <>
      <Helmet>
        <title>NEXEOS Digital Solutions - Transform Your Business</title>
        <meta
          name="description"
          content="NEXEOS Digital Solutions: Innovative web development, SEO, and digital transformation services"
        />
      </Helmet>

      {/* Hero Section */}
      <section className="relative bg-background py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 items-center gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Transform Your 
              <span className="text-primary"> Digital Presence</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Cutting-edge web solutions that drive growth, enhance user experience, 
              and propel your business into the digital future.
            </p>
            <div className="flex gap-4">
              <Link to="/products">
                <Button size="lg">
                  Our Services
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline">
                  Contact Us
                </Button>
              </Link>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex justify-center"
          >
            <div className="w-full max-w-md bg-muted/20 rounded-lg p-8">
              <h2 className="text-2xl font-semibold mb-4 text-center">
                Why Choose NEXEOS?
              </h2>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <span className="text-primary">✓</span>
                  Innovative Web Development
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-primary">✓</span>
                  SEO Optimization
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-primary">✓</span>
                  AI-Powered Solutions
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-primary">✓</span>
                  Custom Digital Strategies
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
