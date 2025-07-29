import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white w-full border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Info */}
          <div className="md:col-span-2 lg:col-span-1">
            <div className="flex items-center mb-4">
              <Image className="rounded" src={'/JG_Healthcare_Logo_updated (1).webp'} alt="company logo" width={200} height={200} />
            </div>
            <p className="text-gray-300 mb-2">
              Connect our specialist doctor at any time from anywhere
            </p>
            <p className="text-gray-400 text-sm">
            {"Bangladesh's only LegitScript certified online healthcare platform"}
              </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              {['Careers', 'Privacy Policy', 'Terms', 'Refund Policy'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              {['Medicine', 'Healthcare', 'Lab Tests', 'Consultation'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <address className="not-italic text-gray-400">
              <p className="mb-2">Mirpur, Dhaka-1216</p>
              <p className="mb-2">Phone: 09610016778</p>
              <p>WhatsApp: 01810-117100</p>
            </address>
          </div>
        </div>

        {/* App Download */}
        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-lg font-semibold mb-4">Get Our App</h3>
            <div className="flex gap-3">
              <a href="#" className="inline-block">
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Google_Play_Store_badge_EN.svg/2560px-Google_Play_Store_badge_EN.svg.png" 
                  alt="Play Store" 
                  className="h-10" 
                />
              </a>
              <a href="#" className="inline-block">
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Download_on_the_App_Store_Badge.svg/2560px-Download_on_the_App_Store_Badge.svg.png" 
                  alt="App Store" 
                  className="h-10" 
                />
              </a>
            </div>
          </div>

          {/* Payment Methods */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-center md:text-left">We Accept</h3>
            <div className="flex flex-wrap justify-center md:justify-start gap-3">
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Visa_Inc._logo.svg/2560px-Visa_Inc._logo.svg.png" 
                alt="Visa" 
                className="h-8" 
              />
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Mastercard-logo.svg/1280px-Mastercard-logo.svg.png" 
                alt="Mastercard" 
                className="h-8" 
              />
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/BKash_logo.svg/1200px-BKash_logo.svg.png" 
                alt="bKash" 
                className="h-8" 
              />
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Nagad-Logo.wine.svg/1200px-Nagad-Logo.wine.svg.png" 
                alt="Nagad" 
                className="h-8" 
              />
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400 text-sm">
          <p>©2025 Arogga Limited. All rights reserved.</p>
          <p className="mt-1">License: TRAD/DNCC/057602/2022 | DBID: 915741315</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;