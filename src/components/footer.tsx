import { Link } from 'react-router-dom';
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin 
} from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-muted/20 py-12">
      <div className="container max-w-screen-2xl grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-lg font-semibold mb-4 text-primary">NEXEOS</h3>
          <p className="text-muted-foreground text-sm">
            Innovative digital solutions that transform businesses through 
            cutting-edge technology and strategic insights.
          </p>
        </div>
        <div>
          <h4 className="text-md font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2">
            <li>
              <Link 
                to="/" 
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Home
              </Link>
            </li>
            <li>
              <Link 
                to="/services" 
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Services
              </Link>
            </li>
            <li>
              <Link 
                to="/products" 
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Products
              </Link>
            </li>
            <li>
              <Link 
                to="/about" 
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                About
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-md font-semibold mb-4">Support</h4>
          <ul className="space-y-2">
            <li>
              <Link 
                to="/contact" 
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Contact Us
              </Link>
            </li>
            <li>
              <a 
                href="#" 
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                FAQ
              </a>
            </li>
            <li>
              <a 
                href="#" 
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Help Center
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-md font-semibold mb-4">Connect</h4>
          <div className="flex space-x-4">
            <a 
              href="#" 
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Facebook className="h-6 w-6" />
            </a>
            <a 
              href="#" 
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Twitter className="h-6 w-6" />
            </a>
            <a 
              href="#" 
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Instagram className="h-6 w-6" />
            </a>
            <a 
              href="#" 
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Linkedin className="h-6 w-6" />
            </a>
          </div>
          <p className="mt-4 text-muted-foreground text-sm">
            © {new Date().getFullYear()} NEXEOS Digital Solutions
          </p>
        </div>
      </div>
    </footer>
  );
}
