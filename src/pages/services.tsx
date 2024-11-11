import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import {
  Code2,
  Search,
  Mail,
  Brain,
  CheckCircle,
  ArrowRight,
  Zap,
  Shield,
  LineChart,
  Users,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

const services = [
  {
    icon: <Code2 className="h-12 w-12 mb-4 text-primary" />,
    title: 'Web Development',
    description:
      'Custom web solutions built with cutting-edge technologies for optimal performance.',
    features: [
      'Responsive Design',
      'Progressive Web Apps',
      'E-commerce Solutions',
      'CMS Integration',
    ],
  },
  {
    icon: <Search className="h-12 w-12 mb-4 text-primary" />,
    title: 'SEO Content',
    description:
      'Data-driven SEO strategies to improve your visibility and organic traffic.',
    features: [
      'Keyword Research',
      'Content Strategy',
      'Technical SEO',
      'Performance Analytics',
    ],
  },
  {
    icon: <Mail className="h-12 w-12 mb-4 text-primary" />,
    title: 'Email Systems',
    description:
      'Robust email infrastructure and marketing solutions for better engagement.',
    features: [
      'Campaign Management',
      'Automation Workflows',
      'Analytics & Reporting',
      'Template Design',
    ],
  },
  {
    icon: <Brain className="h-12 w-12 mb-4 text-primary" />,
    title: 'AI Solutions',
    description:
      'Innovative AI integrations to automate and enhance your business processes.',
    features: [
      'Machine Learning',
      'Natural Language Processing',
      'Predictive Analytics',
      'Automation Tools',
    ],
  },
];

const benefits = [
  {
    icon: <Zap className="h-8 w-8 text-primary" />,
    title: 'Fast Implementation',
    description: 'Quick deployment with minimal disruption to your business.',
  },
  {
    icon: <Shield className="h-8 w-8 text-primary" />,
    title: 'Security First',
    description: 'Enterprise-grade security measures for your peace of mind.',
  },
  {
    icon: <LineChart className="h-8 w-8 text-primary" />,
    title: 'Scalable Solutions',
    description: 'Grow your business with solutions that scale with you.',
  },
  {
    icon: <Users className="h-8 w-8 text-primary" />,
    title: 'Dedicated Support',
    description: '24/7 expert support to ensure smooth operations.',
  },
];

export default function Services() {
  return (
    <>
      <Helmet>
        <title>Services - NEXEOS Digital Solutions</title>
        <meta
          name="description"
          content="Explore NEXEOS's comprehensive digital services including web development, SEO, email systems, and AI solutions."
        />
      </Helmet>

      {/* Hero Section */}
      <section className="relative bg-background py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Digital Solutions for
              <span className="text-primary"> Modern Business</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Comprehensive digital services tailored to help your business thrive
              in the digital age.
            </p>
            <Button size="lg">Schedule a Consultation</Button>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full">
                  <CardHeader>
                    <div className="flex justify-center">{service.icon}</div>
                    <CardTitle className="text-2xl text-center">
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-center mb-6">
                      {service.description}
                    </CardDescription>
                    <div className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <div
                          key={featureIndex}
                          className="flex items-center gap-3"
                        >
                          <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                    <div className="mt-6 text-center">
                      <Button variant="outline">
                        Learn More <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Why Choose Our Services</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Experience the advantages of working with a leading digital solutions
              provider
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="text-center h-full">
                  <CardHeader>
                    <div className="flex justify-center mb-4">{benefit.icon}</div>
                    <CardTitle>{benefit.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>{benefit.description}</CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's discuss how our services can help transform your business.
            </p>
            <div className="flex justify-center gap-4">
              <Button size="lg">Contact Us</Button>
              <Button size="lg" variant="outline">
                View Pricing
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}