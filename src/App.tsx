import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from '@/components/ui/sonner';
import AppRoutes from '@/routes';
import Navigation from '@/components/navigation';
import Footer from '@/components/footer';

function App() {
  return (
    <HelmetProvider>
      <ThemeProvider defaultTheme="system" storageKey="nexeos-theme">
        <Router>
          <div className="min-h-screen flex flex-col">
            <Navigation />
            <main className="flex-grow">
              <AppRoutes />
            </main>
            <Footer />
          </div>
          <Toaster />
        </Router>
      </ThemeProvider>
    </HelmetProvider>
  );
}

export default App;