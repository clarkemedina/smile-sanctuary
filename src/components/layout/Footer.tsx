import { Phone, MessageSquare, Mail, MapPin, Printer, Clock } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background pt-16 pb-10">
      <div className="container mx-auto px-6">

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Column 1 – Brand */}
          <div>
            <h3 className="text-xl font-heading font-semibold mb-4">
              SJ Summit Dental
            </h3>
            <p className="text-sm text-background/70 leading-relaxed">
              Your Smile Shines Because We Care. Serving our community with
              gentle, trusted dental care since 2009.
            </p>
          </div>

          {/* Column 2 – Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3 text-sm text-background/70">
              <li>
                <a href="/about" className="hover:text-white transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="/services" className="hover:text-white transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="/smile-gallery" className="hover:text-white transition-colors">
                  Smile Gallery
                </a>
              </li>
              <li>
                <a href="/insurance" className="hover:text-white transition-colors">
                  Insurance & Payment
                </a>
              </li>
              <li>
                <a href="/technology" className="hover:text-white transition-colors">
                  Technology
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3 – Contact (Mobile Priority Section) */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>

            <div className="space-y-4 text-sm">

              {/* Call */}
              <a
                href="tel:+15628095988"
                className="flex items-start gap-3 hover:text-white transition-colors group"
              >
                <Phone className="w-4 h-4 mt-1 text-primary group-hover:scale-110 transition-transform" />
                <span>(562) 809-5988</span>
              </a>

              {/* Text */}
              <a
                href="sms:5628095188"
                className="flex items-start gap-3 hover:text-white transition-colors group"
              >
                <MessageSquare className="w-4 h-4 mt-1 text-primary group-hover:scale-110 transition-transform" />
                <span>Text (562) 809-5188</span>
              </a>

              {/* Fax */}
              <div className="flex items-start gap-3 text-background/70">
                <Printer className="w-4 h-4 mt-1 text-primary" />
                <span>Fax (562) 809-0500</span>
              </div>

              {/* Email */}
              <a
                href="mailto:sjsummitdental@yahoo.com"
                className="flex items-start gap-3 hover:text-white transition-colors group"
              >
                <Mail className="w-4 h-4 mt-1 text-primary group-hover:scale-110 transition-transform" />
                <span>sjsummitdental@yahoo.com</span>
              </a>

              {/* Address */}
              <a
                href="https://maps.google.com/?q=17808+S+Pioneer+Blvd+Ste+110+Artesia+CA+90701"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 hover:text-white transition-colors group"
              >
                <MapPin className="w-4 h-4 mt-1 text-primary group-hover:scale-110 transition-transform" />
                <span>
                  17808 S. Pioneer Blvd, #110
                  <br />
                  Artesia, CA 90701
                </span>
              </a>

            </div>
          </div>

          {/* Column 4 – Office Hours */}
          <div>
            <h4 className="font-semibold mb-4">Office Hours</h4>

            <div className="flex items-start gap-3 text-sm text-background/70">
              <Clock className="w-4 h-4 mt-1 text-primary" />
              <div>
                <p>Mon: Closed</p>
                <p>Tue – Fri: 9:00 AM – 5:00 PM</p>
                <p>Sat – Sun: 8:00 AM – 2:00 PM</p>
              </div>
            </div>
          </div>

        </div>

        {/* Divider */}
        <div className="border-t border-background/20 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-background/60">

          <p>© {new Date().getFullYear()} SJ Summit Dental. All rights reserved.</p>

          <div className="flex gap-3">
            <span>English</span>
            <span>•</span>
            <span>Español</span>
            <span>•</span>
            <span>Filipino</span>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
