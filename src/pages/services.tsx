import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { 
  Code, 
  Search, 
  Rocket, 
  PenTool, 
  Database, 
  BarChart 
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

const services = [
  {
    icon: Code,
    title: 'Web Development',
    description: 'Custom web solutions using modern technologies like React, TypeScript, and Tailwind CSS.',
    details: [
      'Responsive Design',
      'Frontend & Backend Development',
      'Performance Optimization',
      'Cross-Browser Compatibility'
    ]
  },
  {
    icon: Search,
    title: 'SEO Optimization',
    description: 'Improve your online visibility and search engine rankings.',
    details: [
      'Keyword Research',
      'On-Page SEO',
      'Technical SEO Audit',
      'Content Strategy'
    ]
  },
  {
    icon: Rocket,
    title: 'AI Integration',
    description: 'Leverage artificial intelligence to enhance your digital products.',
    details: [
      'Machine Learning Solutions',
      'Chatbot Development',
      'Predictive Analytics',
      'Natural Language Processing'
    ]
  },
  {
    icon: PenTool,
    title: 'UI/UX Design',
    description: 'Create intuitive and engaging user interfaces and experiences.',
    details: [
      'User Research',
      'Wireframing',
      'Prototype Design',
      'Usability Testing'
    ]
  },
  {
    icon: Database,
    title: 'Database Solutions',
    description: 'Robust and scalable database design and management.',
    details: [
      'Database Architecture',
      'Performance Tuning',
      'Data Migration',
      'Cloud Database Solutions'
    ]
  },
  {
    icon: BarChart,
    title: 'Analytics & Reporting',
    description: 'Data-driven insights to guide your business strategy.',
    details: [
      'Google Analytics Setup',
      'Custom Dashboard Creation',
      'Conversion Tracking',
      'Performance Reporting'
    ]
  }
];

export default function Services() {
  return (
    <>
      <Helmet>
        <title>Our Services - NEXEOS Digital Solutions</title>
        <meta
          name="description"
          content="Comprehensive digital services including web development, SEO, AI integration, and more"
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
              Digital Solutions 
              <span className="text-primary"> Tailored to Your Needs</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive services designed to elevate your digital presence 
              and drive business growth.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full flex flex-col">
                  <CardHeader className="pb-4">
                    <div className="flex items-center gap-4 mb-2">
                      <service.icon className="h-8 w-8 text-primary" />
                      <CardTitle className="text-xl">{service.title}</CardTitle>
                    </div>
                    <p className="text-muted-foreground text-sm">
                      {service.description}
                    </p>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <ul className="space-y-2">
                      {service.details.map((detail, detailIndex) => (
                        <li 
                          key={detailIndex} 
                          className="flex items-center gap-2"
                        >
                          <span className="text-primary">✓</span>
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-center mt-16"
          >
            <h2 className="text-3xl font-bold mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's discuss how our tailored digital solutions can help you 
              achieve your business goals.
            </p>
            <div className="flex justify-center gap-4">
              <Link to="/contact">
                <Button size="lg">
                  Contact Us
                </Button>
              </Link>
              <Link to="/products">
                <Button size="lg" variant="outline">
                  View Packages
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
