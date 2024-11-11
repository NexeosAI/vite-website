import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Monitor, Moon, Sun, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useTheme } from '@/components/theme-provider';

export default function Navigation() {
  const { setTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="border-b bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <span className="text-2xl font-bold text-primary">NEXEOS</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            <Link
              to="/about"
              className="text-foreground/60 hover:text-foreground transition-colors"
            >
              About
            </Link>
            <Link
              to="/services"
              className="text-foreground/60 hover:text-foreground transition-colors"
            >
              Services
            </Link>
            <Link
              to="/products"
              className="text-foreground/60 hover:text-foreground transition-colors"
            >
              Products
            </Link>
            <Link
              to="/contact"
              className="text-foreground/60 hover:text-foreground transition-colors"
            >
              Contact
            </Link>
            <Link to="/login">
              <Button variant="outline">Login</Button>
            </Link>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="icon">
                  <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                  <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                  <span className="sr-only">Toggle theme</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => setTheme('light')}>
                  <Sun className="mr-2 h-4 w-4" />
                  Light
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme('dark')}>
                  <Moon className="mr-2 h-4 w-4" />
                  Dark
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme('system')}>
                  <Monitor className="mr-2 h-4 w-4" />
                  System
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <Button variant="ghost" size="icon" onClick={toggleMenu}>
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              to="/about"
              className="block px-3 py-2 text-foreground/60 hover:text-foreground transition-colors"
            >
              About
            </Link>
            <Link
              to="/services"
              className="block px-3 py-2 text-foreground/60 hover:text-foreground transition-colors"
            >
              Services
            </Link>
            <Link
              to="/products"
              className="block px-3 py-2 text-foreground/60 hover:text-foreground transition-colors"
            >
              Products
            </Link>
            <Link
              to="/contact"
              className="block px-3 py-2 text-foreground/60 hover:text-foreground transition-colors"
            >
              Contact
            </Link>
            <Link to="/login" className="block px-3 py-2">
              <Button variant="outline" className="w-full">
                Login
              </Button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}