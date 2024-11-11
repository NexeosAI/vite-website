import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { CheckCircle, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

const plans = [
  {
    name: 'Starter',
    price: '£499',
    description: 'Perfect for small businesses getting started',
    features: [
      'Basic Website Development',
      'SEO Fundamentals',
      'Email Setup',
      'Basic Analytics',
      '5 Pages',
      '3 Months Support',
    ],
    limitations: [
      'Advanced SEO Features',
      'AI Integration',
      'Custom Automation',
      'Priority Support',
    ],
  },
  {
    name: 'Professional',
    price: '£999',
    description: 'Ideal for growing businesses',
    features: [
      'Advanced Website Development',
      'Comprehensive SEO Package',
      'Email Marketing Suite',
      'Advanced Analytics',
      'Unlimited Pages',
      '6 Months Support',
      'Basic AI Integration',
      'Custom Automation',
    ],
    limitations: ['Enterprise AI Features', '24/7 Priority Support'],
    popular: true,
  },
  {
    name: 'Enterprise',
    price: '£2499',
    description: 'Full-scale solution for large organizations',
    features: [
      'Enterprise Website Development',
      'Advanced SEO Suite',
      'Complete Email Marketing Platform',
      'Premium Analytics Dashboard',
      'Unlimited Pages',
      '12 Months Support',
      'Full AI Integration',
      'Advanced Automation',
      '24/7 Priority Support',
      'Custom Development',
    ],
    limitations: [],
  },
];

export default function Products() {
  return (
    <>
      <Helmet>
        <title>Products & Pricing - NEXEOS Digital Solutions</title>
        <meta
          name="description"
          content="Explore NEXEOS's product packages and pricing plans for digital solutions including web development, SEO, and AI integration."
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
              Choose Your
              <span className="text-primary"> Perfect Plan</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Flexible packages designed to meet your business needs and budget
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card
                  className={`h-full flex flex-col ${
                    plan.popular
                      ? 'border-primary shadow-lg scale-105'
                      : ''
                  }`}
                >
                  <CardHeader>
                    {plan.popular && (
                      <div className="text-primary text-sm font-medium mb-2">
                        Most Popular
                      </div>
                    )}
                    <CardTitle className="text-2xl">{plan.name}</CardTitle>
                    <div className="mt-4">
                      <span className="text-4xl font-bold">{plan.price}</span>
                      <span className="text-muted-foreground">/project</span>
                    </div>
                    <CardDescription className="mt-4">
                      {plan.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <div className="space-y-4">
                      {plan.features.map((feature, featureIndex) => (
                        <div
                          key={featureIndex}
                          className="flex items-center gap-3"
                        >
                          <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                          <span>{feature}</span>
                        </div>
                      ))}
                      {plan.limitations.map((limitation, limitationIndex) => (
                        <div
                          key={limitationIndex}
                          className="flex items-center gap-3 text-muted-foreground"
                        >
                          <X className="h-5 w-5 flex-shrink-0" />
                          <span>{limitation}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button
                      className="w-full"
                      variant={plan.popular ? 'default' : 'outline'}
                    >
                      Get Started
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Find answers to common questions about our products and services
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                q: 'What's included in the website development?',
                a: 'Our website development includes responsive design, SEO optimization, content management system, and basic analytics integration.',
              },
              {
                q: 'How long does implementation take?',
                a: 'Implementation typically takes 4-8 weeks depending on the package and specific requirements of your project.',
              },
              {
                q: 'Can I upgrade my plan later?',
                a: 'Yes, you can upgrade your plan at any time. We'll help you transition smoothly to your new package.',
              },
              {
                q: 'What kind of support do you provide?',
                a: 'We provide technical support, maintenance, and consultations throughout your support period, with priority support for higher-tier plans.',
              },
            ].map((faq, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-lg">{faq.q}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{faq.a}</p>
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
              Need a Custom Solution?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Contact us to discuss your specific requirements and get a
              personalized quote.
            </p>
            <div className="flex justify-center gap-4">
              <Button size="lg">Contact Sales</Button>
              <Button size="lg" variant="outline">
                Book a Demo
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}