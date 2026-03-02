import { useState } from "react";
import { Button } from "@/components/ui/button";
import PageLayout from "@/components/layout/PageLayout";
import FadeInSection from "@/components/shared/FadeInSection";
import { Phone, MapPin, Clock, Mail, Send, CheckCircle, MessageSquare } from "lucide-react";

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
        setError("Something went wrong. Please call or text us at (562) 809-5988.");
      }
    } catch {
      setError("Something went wrong. Please call or text us at (562) 809-5988.");
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
            <p className="text-accent font-medium text-sm tracking-widest uppercase mb-6">
              Contact Us
            </p>
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">
              We’re Here to Help
            </h1>
            <p className="text-muted-foreground text-lg">
              Call, text, or send us a message — we’ll respond as soon as possible.
            </p>
          </FadeInSection>
        </div>
      </section>

      <section className="pb-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">

            {/* Contact Form */}
            <FadeInSection>
              <div className="bg-card rounded-lg p-8 shadow-sm border border-border">

                {/* TEXT OPTION */}
                <div className="mb-10 text-center">
                  <div className="flex justify-center mb-4">
                    <div className="bg-accent/10 rounded-full p-3">
                      <MessageSquare className="w-6 h-6 text-accent" />
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">Prefer to text?</p>
                  <a
                    href="sms:5628095988?body=Hi%20SJ%20Summit%20Dental,%20I%20would%20like%20to%20schedule%20an%20appointment."
                    className="inline-block bg-accent text-accent-foreground font-medium px-6 py-3 rounded-md hover:opacity-90 transition"
                  >
                    Text Us Now
                  </a>
                  <p className="text-xs text-muted-foreground mt-3 max-w-xs mx-auto">
                    Please do not send sensitive medical information via text.
                  </p>
                </div>

                <div className="border-t border-border my-8" />

                {submitted ? (
                  <div className="flex flex-col items-center justify-center text-center py-12 gap-4">
                    <div className="bg-accent/10 rounded-full p-4">
                      <CheckCircle className="w-10 h-10 text-accent" />
                    </div>
                    <h2 className="font-heading text-2xl font-bold text-foreground">
                      Message Sent
                    </h2>
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
                      Or Send Us a Message
                    </h2>

                    <form onSubmit={handleSubmit} className="space-y-5">

                      <div className="grid sm:grid-cols-2 gap-5">
                        <div>
                          <label className="block text-sm font-medium text-foreground mb-2">
                            Full Name *
                          </label>
                          <input
                            name="name"
                            type="text"
                            required
                            value={form.name}
                            onChange={handleChange}
                            placeholder="Jane Smith"
                            className={inputClasses}
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-foreground mb-2">
                            Phone Number *
                          </label>
                          <input
                            name="phone"
                            type="tel"
                            required
                            value={form.phone}
                            onChange={handleChange}
                            placeholder="(562) 000-0000"
                            className={inputClasses}
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Email Address
                        </label>
                        <input
                          name="email"
                          type="email"
                          value={form.email}
                          onChange={handleChange}
                          placeholder="jane@email.com"
                          className={inputClasses}
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Service Needed
                        </label>
                        <select
                          name="service"
                          value={form.service}
                          onChange={handleChange}
                          className={inputClasses}
                        >
                          <option value="">Select a service...</option>
                          <option>Cleaning / Check-up</option>
                          <option>Teeth Whitening</option>
                          <option>Fillings / Composite Resin</option>
                          <option>Crowns & Bridges</option>
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
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Additional Notes
                        </label>
                        <textarea
                          name="message"
                          rows={4}
                          value={form.message}
                          onChange={handleChange}
                          placeholder="Preferred appointment time or any concerns..."
                          className={`${inputClasses} resize-none`}
                        />
                      </div>

                      <p className="text-xs text-muted-foreground text-center">
                        By submitting this form, you consent to being contacted by phone, text, or email regarding your inquiry.
                      </p>

                      {error && <p className="text-sm text-destructive">{error}</p>}

                      <Button
                        type="submit"
                        variant="hero"
                        size="lg"
                        className="w-full"
                        disabled={loading}
                      >
                        {loading ? "Sending..." : "Send Message"}
                        {!loading && <Send className="w-4 h-4 ml-2" />}
                      </Button>
                    </form>
                  </>
                )}
              </div>
            </FadeInSection>

            {/* Info Panel */}
            <div className="space-y-8">
              <FadeInSection>
                <div className="bg-card rounded-lg p-6 shadow-sm border border-border space-y-5">
                  <h3 className="font-heading text-xl font-semibold text-foreground">
                    Get in Touch
                  </h3>

                  <a href="tel:+15628095988" className="flex items-center gap-3 hover:text-accent transition-colors">
                    <Phone className="w-4 h-4 text-accent" />
                    <span>(562) 809-5988</span>
                  </a>

                  <a
                    href="sms:5628095988?body=Hi%20SJ%20Summit%20Dental,%20I%20would%20like%20to%20schedule%20an%20appointment."
                    className="flex items-center gap-3 hover:text-accent transition-colors"
                  >
                    <MessageSquare className="w-4 h-4 text-accent" />
                    <span>Text (562) 809-5988</span>
                  </a>

                  <a href="mailto:sjsummitdental@yahoo.com" className="flex items-center gap-3 hover:text-accent transition-colors">
                    <Mail className="w-4 h-4 text-accent" />
                    <span>sjsummitdental@yahoo.com</span>
                  </a>

                  <a
                    href="https://maps.google.com/?q=17808+S+Pioneer+Blvd+Ste+110+Artesia+CA+90701"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 hover:text-accent transition-colors"
                  >
                    <MapPin className="w-4 h-4 text-accent" />
                    <span>17808 S. Pioneer Blvd, Ste 110<br />Artesia, CA 90701</span>
                  </a>
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
