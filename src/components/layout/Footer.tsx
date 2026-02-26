import { Link } from "react-router-dom";
import { Phone, MapPin, Clock, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <h3 className="font-heading text-xl font-bold mb-3">SJ Summit Dental</h3>
            <p className="text-background/70 text-sm leading-relaxed">
              Your Smile Shines Because We Care. Serving our community with gentle, trusted dental care since 2009.
            </p>
          </div>
          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-lg font-semibold mb-3">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              {[
                { label: "About Us", path: "/about" },
                { label: "Services", path: "/services" },
                { label: "Smile Gallery", path: "/gallery" },
                { label: "Insurance & Payment", path: "/insurance" },
                { label: "Technology", path: "/technology" },
              ].map((l) => (
                <li key={l.path}>
                  <Link to={l.path} className="text-background/70 hover:text-accent transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          {/* Contact */}
          <div>
            <h4 className="font-heading text-lg font-semibold mb-3">Contact</h4>
            <ul className="space-y-3 text-sm text-background/70">
              <li className="flex items-start gap-2">
                <Phone className="w-4 h-4 mt-0.5 text-accent" />
                <span>(562) 809-5988</span>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="w-4 h-4 mt-0.5 text-accent" />
                <span>sjsummitdental@yahoo.com</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 text-accent" />
                <span>17808 S. Pioneer Blvd, #110<br />Artesia, CA 90701</span>
              </li>
            </ul>
          </div>
          {/* Hours */}
          <div>
            <h4 className="font-heading text-lg font-semibold mb-3">Office Hours</h4>
            <ul className="space-y-2 text-sm text-background/70">
              <li className="flex items-start gap-2">
                <Clock className="w-4 h-4 mt-0.5 text-accent flex-shrink-0" />
                <div>
                  <p>Mon: Closed</p>
                  <p>Tue – Fri: 9:00 AM – 5:00 PM</p>
                  <p>Sat – Sun: 8:00 AM – 2:00 PM</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-background/20 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-background/50">
          <p>© {new Date().getFullYear()} SJ Summit Dental. All rights reserved.</p>
          <p>English · Español · Filipino</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
