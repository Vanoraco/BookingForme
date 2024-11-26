const Footer = () => {
  return (
    <footer className="bg-[#d50630] text-white py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Location & Language Selector */}
          <div className="space-y-4">
            <div className="bg-[#ffffff1a] rounded-[10px] p-2.5 inline-flex items-center space-x-2 text-sm">
              <span className="whitespace-nowrap">United States</span>
              <span>·</span>
              <span className="whitespace-nowrap">English (US)</span>
              <span>·</span>
              <span className="whitespace-nowrap">$ USD</span>
            </div>
          </div>

          {/* Help & Login */}
          <div className="space-y-4">
            <h3 className="text-sm font-medium">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-sm hover:underline">Help</a>
              </li>
              <li>
                <a href="#" className="text-sm hover:underline">Log in</a>
              </li>
            </ul>
          </div>

          {/* Legal Links */}
          <div className="space-y-4">
            <h3 className="text-sm font-medium">Legal</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-sm hover:underline">Privacy policy</a>
              </li>
              <li>
                <a href="#" className="text-sm hover:underline">Terms of service</a>
              </li>
              <li>
                <a href="#" className="text-sm hover:underline">Company Details</a>
              </li>
            </ul>
          </div>

          {/* Navigation Links */}
          <div className="space-y-4">
            <h3 className="text-sm font-medium">Navigation</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-sm hover:underline">Explore</a>
              </li>
              <li>
                <a href="#" className="text-sm hover:underline">Company</a>
              </li>
              <li>
                <a href="#" className="text-sm hover:underline">Partners</a>
              </li>
              <li>
                <a href="#" className="text-sm hover:underline">Trips</a>
              </li>
              <li>
                <a href="#" className="text-sm hover:underline">International Sites</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-white/10 text-center">
          <p className="text-sm text-[#eff3f8]">
            © Bookforme Ltd 2002 – 2024
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
