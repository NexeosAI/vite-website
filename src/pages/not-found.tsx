import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

export default function NotFound() {
  return (
    <>
      <Helmet>
        <title>Page Not Found - NEXEOS Digital Solutions</title>
        <meta
          name="description"
          content="The page you are looking for does not exist"
        />
      </Helmet>

      <section className="flex items-center justify-center min-h-screen bg-background">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-md p-8"
        >
          <h1 className="text-6xl font-bold text-primary mb-4">404</h1>
          <h2 className="text-2xl font-semibold mb-4">
            Page Not Found
          </h2>
          <p className="text-muted-foreground mb-6">
            Oops! The page you are looking for seems to have wandered off.
            Let's get you back on track.
          </p>
          <div className="flex justify-center gap-4">
            <Link to="/">
              <Button>
                Go Home
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline">
                Contact Support
              </Button>
            </Link>
          </div>
        </motion.div>
      </section>
    </>
  );
}
