import Navbar from '@/components/Navbar';
import './globals.css';
import Link from 'next/link';

export const metadata = {
  title: 'JG Pharmacy - Your One Stop HealthCare Solutions',
  description: 'Discover amazing destinations with TravelEase',
  
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
    
      
      <body className="min-h-screen bg-gray-50">
        {children}
      </body>
    </html>
  );
}
