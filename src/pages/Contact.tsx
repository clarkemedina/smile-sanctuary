import { useState } from "react";
import { Button } from "@/components/ui/button";
import PageLayout from "@/components/layout/PageLayout";
import FadeInSection from "@/components/shared/FadeInSection";
import { Phone, MapPin, Clock, Mail, Send, CheckCircle } from "lucide-react";

const FORMSPREE_URL = "https://formspree.io/f/mlgwzyba";

const hours = [
  { day: "Monday", time: "Closed", closed: true },
  { day: "Tuesday", time: "9:00 AM – 5:00 PM", closed: false },
  { day: "Wednesday", time: "9:00 AM – 5:00 PM", closed: false },
  { day: "Thursday", time: "9:00 AM – 5:00 PM", closed: false },
  { day: "Friday", time: "9:00 AM – 5:00 PM", closed: false },
  { day: "Saturday", time: "8:00 AM – 2:00 PM", closed: false },
  { day: "Sunday", time: "8:00 AM – 2:00 PM", closed: false },
];

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch(FORMSPREE_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setSubmitted(true);
      } else {
        setError("Something went wrong. Please call us directly at (562) 809-5988.");
      }
    } catch {
      setError("Something went wrong. Please call us directly at (562) 809-5988.");
    } finally {
      setLoading(false);
    }
  };

  const inputClasses =
    "w-full rounded-md border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent transition";

  return (
    <PageLayout>
      {/* Hero */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8 text-center max-w-2xl">
          <FadeInSection>
            <p className="text-accent font-medium text-sm tracking-widest uppercase mb-6">Contact Us</p>
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">
              Schedule Your{" "}
              <span className="italic font-normal">Visit</span>
            </h1>
            <p className="text-muted-foreground text-lg">
              We'd love to hear from you. Call us, send a message, or stop by — walk-ins are always welcome.
            </p>
          </FadeInSection>
        </div>
      </section>

      {/* Main Content */}
      <section className="pb-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">

            {/* Contact Form */}
            <FadeInSection>
              <div className="bg-card rounded-lg p-8 shadow-sm border border-border">
                {submitted ? (
                  <div className="flex flex-col items-center justify-center text-center py-12 gap-4">
                    <div className="bg-accent/10 rounded-full p-4">
                      <CheckCircle className="w-10 h-10 text-accent" />
                    </div>
                    <h2 className="font-heading text-2xl font-bold text-foreground">Message Sent</h2>
                    <p className="text-muted-foreground max-w-sm">
                      We'll confirm your appointment shortly. Thank you for choosing SJ Summit Dental.
                    </p>
                    <Button
                      variant="hero"
                      className="mt-4"
                      onClick={() => {
                        setSubmitted(false);
                        setForm({ name: "", phone: "", email: "", service: "", message: "" });
                      }}
                    >
                      Send Another Message
                    </Button>
                  </div>
                ) : (
                  <>
                    <h2 className="font-heading text-2xl font-bold text-foreground mb-8">
                      Request an Appointment
                    </h2>
                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div className="grid sm:grid-cols-2 gap-5">
                        <div>
                          <label className="block text-sm font-medium text-foreground mb-2" htmlFor="name">
                            Full Name <span className="text-accent">*</span>
                          </label>
                          <input id="name" name="name" type="text" required value={form.name} onChange={handleChange} placeholder="Jane Smith" className={inputClasses} />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-foreground mb-2" htmlFor="phone">
                            Phone Number <span className="text-accent">*</span>
                          </label>
                          <input id="phone" name="phone" type="tel" required value={form.phone} onChange={handleChange} placeholder="(562) 000-0000" className={inputClasses} />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2" htmlFor="email">Email Address</label>
                        <input id="email" name="email" type="email" value={form.email} onChange={handleChange} placeholder="jane@email.com" className={inputClasses} />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2" htmlFor="service">Service Needed</label>
                        <select id="service" name="service" value={form.service} onChange={handleChange} className={inputClasses}>
                          <option value="">Select a service...</option>
                          <option>Cleaning / Check-up</option>
                          <option>Teeth Whitening</option>
                          <option>Fillings / Composite Resin</option>
                          <option>Crowns &amp; Bridges</option>
                          <option>Root Canal Treatment</option>
                          <option>Dental Implants</option>
                          <option>Veneers</option>
                          <option>Dentures</option>
                          <option>Gum Treatment / Deep Cleaning</option>
                          <option>Mouthguard / Night Guard</option>
                          <option>Sealants</option>
                          <option>Other</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2" htmlFor="message">Additional Notes</label>
                        <textarea id="message" name="message" rows={4} value={form.message} onChange={handleChange} placeholder="Preferred appointment time, insurance info, or any concerns..." className={`${inputClasses} resize-none`} />
                      </div>

                      {error && <p className="text-sm text-destructive">{error}</p>}

                      <Button type="submit" variant="hero" size="lg" className="w-full" disabled={loading}>
                        {loading ? "Sending..." : "Send Message"}
                        {!loading && <Send className="w-4 h-4 ml-2" />}
                      </Button>

                      <p className="text-xs text-muted-foreground text-center">
                        Prefer to call? Reach us at{" "}
                        <a href="tel:+15628095988" className="text-foreground hover:text-accent transition-colors">
                          (562) 809-5988
                        </a>
                      </p>
                    </form>
                  </>
                )}
              </div>
            </FadeInSection>

            {/* Info Panel */}
            <div className="space-y-8">
              <FadeInSection delay={0.1}>
                <div className="bg-card rounded-lg p-6 shadow-sm border border-border space-y-5">
                  <h3 className="font-heading text-xl font-semibold text-foreground">Get in Touch</h3>
                  <a href="tel:+15628095988" className="flex items-center gap-3 text-foreground hover:text-accent transition-colors group">
                    <div className="bg-accent/10 rounded-md w-10 h-10 flex items-center justify-center">
                      <Phone className="w-4 h-4 text-accent" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Call or Text</p>
                      <p className="font-medium text-sm">(562) 809-5988</p>
                    </div>
                  </a>
                  <a href="mailto:sjsummitdental@yahoo.com" className="flex items-center gap-3 text-foreground hover:text-accent transition-colors group">
                    <div className="bg-accent/10 rounded-md w-10 h-10 flex items-center justify-center">
                      <Mail className="w-4 h-4 text-accent" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Email</p>
                      <p className="font-medium text-sm">sjsummitdental@yahoo.com</p>
                    </div>
                  </a>
                  <a href="https://maps.google.com/?q=17808+S+Pioneer+Blvd+Ste+110+Artesia+CA+90701" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-foreground hover:text-accent transition-colors group">
                    <div className="bg-accent/10 rounded-md w-10 h-10 flex items-center justify-center">
                      <MapPin className="w-4 h-4 text-accent" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Located in World Plaza</p>
                      <p className="font-medium text-sm">17808 S. Pioneer Blvd, Ste 110</p>
                      <p className="text-sm text-muted-foreground">Artesia, CA 90701</p>
                    </div>
                  </a>
                </div>
              </FadeInSection>

              <FadeInSection delay={0.15}>
                <div className="bg-card rounded-lg p-6 shadow-sm border border-border">
                  <div className="flex items-center gap-2 mb-5">
                    <Clock className="w-4 h-4 text-accent" />
                    <h3 className="font-heading text-xl font-semibold text-foreground">Office Hours</h3>
                  </div>
                  <ul className="space-y-1.5">
                    {hours.map((h) => {
                      const today = new Date().toLocaleDateString("en-US", { weekday: "long" });
                      const isToday = today === h.day;
                      return (
                        <li key={h.day} className={`flex justify-between items-center text-sm py-2 px-3 rounded-md ${isToday ? "bg-accent/10" : ""}`}>
                          <span className={`font-medium ${isToday ? "text-foreground" : "text-foreground"}`}>
                            {h.day}
                            {isToday && <span className="ml-2 text-xs bg-accent text-accent-foreground px-1.5 py-0.5 rounded-sm font-medium">Today</span>}
                          </span>
                          <span className={h.closed ? "text-muted-foreground" : "text-foreground"}>{h.time}</span>
                        </li>
                      );
                    })}
                  </ul>
                  <p className="text-xs text-muted-foreground mt-5">Walk-ins welcome during office hours.</p>
                </div>
              </FadeInSection>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Contact;
