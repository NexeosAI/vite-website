import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import {
  Users,
  Target,
  Rocket,
  Award,
  MapPin,
  Mail,
  Phone,
  Clock,
} from 'lucide-react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const teamMembers = [
  {
    name: 'Dr. Emma Mitchell',
    role: 'CEO & Founder',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956',
    description:
      'Former tech consultant with 15+ years of experience in digital transformation.',
  },
  {
    name: 'James Anderson',
    role: 'Technical Director',
    image: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef',
    description:
      'Full-stack developer turned director, specializing in scalable solutions.',
  },
  {
    name: 'Sarah MacLeod',
    role: 'Head of Marketing',
    image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e',
    description:
      'Digital marketing expert with a focus on data-driven strategies.',
  },
];

const values = [
  {
    icon: <Target className="h-8 w-8 text-primary" />,
    title: 'Innovation First',
    description:
      'We stay ahead of technological trends to deliver cutting-edge solutions.',
  },
  {
    icon: <Users className="h-8 w-8 text-primary" />,
    title: 'Client-Centric',
    description:
      'Your success is our priority. We build lasting partnerships through dedication.',
  },
  {
    icon: <Award className="h-8 w-8 text-primary" />,
    title: 'Excellence',
    description:
      'We maintain the highest standards in every project we undertake.',
  },
  {
    icon: <Rocket className="h-8 w-8 text-primary" />,
    title: 'Growth-Focused',
    description:
      'We help businesses scale through strategic digital solutions.',
  },
];

export default function About() {
  return (
    <>
      <Helmet>
        <title>About NEXEOS - Leading Digital Solutions in Edinburgh</title>
        <meta
          name="description"
          content="Learn about NEXEOS, Edinburgh's premier digital solutions company. Meet our expert team and discover our values, mission, and commitment to excellence."
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
              Transforming Digital
              <span className="text-primary"> Landscapes</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Founded in Edinburgh, NEXEOS has been at the forefront of digital
              innovation, helping businesses thrive in the digital age.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Founded in 2018, NEXEOS emerged from a vision to bridge the gap
                  between traditional businesses and the digital frontier. Our
                  journey began in the heart of Edinburgh's tech community.
                </p>
                <p>
                  What started as a small web development agency has grown into a
                  comprehensive digital solutions provider, serving clients across
                  Scotland and beyond.
                </p>
                <p>
                  Today, we're proud to be leading the charge in digital
                  transformation, helping businesses of all sizes harness the power
                  of technology to achieve their goals.
                </p>
              </div>
              <Button className="mt-8" size="lg">
                Join Our Journey
              </Button>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab"
                alt="Edinburgh business district"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Values</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              The principles that guide our work and relationships
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="text-center h-full">
                  <CardHeader>
                    <div className="flex justify-center mb-4">{value.icon}</div>
                    <CardTitle>{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>{value.description}</CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Meet Our Team</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              The experts behind NEXEOS's success
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="text-center">
                  <CardHeader>
                    <div className="flex justify-center mb-4">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="h-32 w-32 rounded-full object-cover"
                      />
                    </div>
                    <CardTitle>{member.name}</CardTitle>
                    <CardDescription className="text-primary font-medium">
                      {member.role}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{member.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Visit Our Office</h2>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-primary" />
                  <span>123 Tech Street, Edinburgh, EH1 1AA</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-primary" />
                  <a
                    href="mailto:info@nexeos.com"
                    className="hover:text-primary transition-colors"
                  >
                    info@nexeos.com
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-primary" />
                  <a
                    href="tel:+441234567890"
                    className="hover:text-primary transition-colors"
                  >
                    +44 123 456 7890
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="h-5 w-5 text-primary" />
                  <span>Monday - Friday: 9:00 AM - 5:30 PM</span>
                </div>
              </div>
              <Button className="mt-8" size="lg">
                Get Directions
              </Button>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1509041322357-8a3f9757a475"
                alt="Edinburgh city view"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}