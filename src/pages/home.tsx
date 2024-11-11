import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import {
  Code2,
  Search,
  Mail,
  Brain,
  ArrowRight,
  CheckCircle,
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
  },
  {
    icon: <Search className="h-12 w-12 mb-4 text-primary" />,
    title: 'SEO Content',
    description:
      'Data-driven SEO strategies to improve your visibility and organic traffic.',
  },
  {
    icon: <Mail className="h-12 w-12 mb-4 text-primary" />,
    title: 'Email Systems',
    description:
      'Robust email infrastructure and marketing solutions for better engagement.',
  },
  {
    icon: <Brain className="h-12 w-12 mb-4 text-primary" />,
    title: 'AI Solutions',
    description:
      'Innovative AI integrations to automate and enhance your business processes.',
  },
];

const testimonials = [
  {
    name: 'Sarah Thompson',
    role: 'CEO, TechStart Edinburgh',
    content:
      'NEXEOS transformed our digital presence completely. Their expertise in web development and AI solutions helped us stay ahead of the competition.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330',
  },
  {
    name: 'James Wilson',
    role: 'Marketing Director, Highland Innovations',
    content:
      'The SEO and email marketing strategies implemented by NEXEOS doubled our conversion rates within months.',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e',
  },
];

export default function Home() {
  return (
    <>
      <Helmet>
        <title>NEXEOS - Digital Solutions Company in Edinburgh</title>
        <meta
          name="description"
          content="NEXEOS is Edinburgh's premier digital solutions company, offering web development, SEO, email systems, and AI solutions for modern businesses."
        />
      </Helmet>

      {/* Hero Section */}
      <section className="relative bg-background py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Transform Your Business with
              <span className="text-primary"> Digital Excellence</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Edinburgh's premier digital solutions company, delivering innovative
              web development, SEO, and AI solutions for modern businesses.
            </p>
            <div className="flex justify-center gap-4">
              <Button size="lg">Get Started</Button>
              <Button size="lg" variant="outline">
                Learn More
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Services</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Comprehensive digital solutions tailored to your business needs
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="text-center h-full">
                  <CardHeader>
                    <div className="flex justify-center">{service.icon}</div>
                    <CardTitle>{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>{service.description}</CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">
                Why Choose NEXEOS?
              </h2>
              <div className="space-y-4">
                {[
                  'Expert team with years of industry experience',
                  'Cutting-edge technology solutions',
                  'Dedicated support and maintenance',
                  'Results-driven approach',
                ].map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
              <Button className="mt-8" size="lg">
                Learn More <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c"
                alt="Team collaboration"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-16">
            What Our Clients Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="h-full">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="h-12 w-12 rounded-full object-cover"
                    />
                    <div>
                      <CardTitle className="text-lg">{testimonial.name}</CardTitle>
                      <CardDescription>{testimonial.role}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{testimonial.content}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Get in touch with us today to discuss how we can help you achieve
              your digital goals.
            </p>
            <Button size="lg">Contact Us</Button>
          </div>
        </div>
      </section>
    </>
  );
}