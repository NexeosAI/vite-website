import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

export default function About() {
  return (
    <>
      <Helmet>
        <title>About NEXEOS - Our Story and Mission</title>
        <meta
          name="description"
          content="Learn about NEXEOS Digital Solutions, our mission to transform businesses through innovative digital technologies"
        />
      </Helmet>

      {/* Hero Section */}
      <section className="relative bg-background py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Empowering Businesses 
              <span className="text-primary"> Through Technology</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              At NEXEOS, we believe in transforming digital challenges into 
              opportunities for growth and innovation.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <p className="text-muted-foreground mb-4">
                Founded in Edinburgh, NEXEOS emerged from a passion to bridge 
                the gap between cutting-edge technology and business success. 
                Our team of expert developers, designers, and strategists work 
                collaboratively to deliver solutions that not just meet, but 
                exceed our clients' expectations.
              </p>
              <p className="text-muted-foreground">
                With a commitment to innovation, we leverage the latest technologies 
                to create digital experiences that drive growth, enhance user 
                engagement, and provide measurable results.
              </p>
              <div className="mt-8">
                <Link to="/contact">
                  <Button>
                    Get in Touch
                  </Button>
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-muted/20 rounded-lg p-8"
            >
              <h2 className="text-2xl font-semibold mb-6 text-center">
                Our Core Values
              </h2>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="text-primary text-2xl">✦</span>
                  <div>
                    <h3 className="font-semibold">Innovation</h3>
                    <p className="text-muted-foreground text-sm">
                      Constantly pushing boundaries and exploring new technologies
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary text-2xl">✦</span>
                  <div>
                    <h3 className="font-semibold">Collaboration</h3>
                    <p className="text-muted-foreground text-sm">
                      Working closely with clients to understand their unique needs
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary text-2xl">✦</span>
                  <div>
                    <h3 className="font-semibold">Excellence</h3>
                    <p className="text-muted-foreground text-sm">
                      Delivering high-quality, performant, and scalable solutions
                    </p>
                  </div>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
