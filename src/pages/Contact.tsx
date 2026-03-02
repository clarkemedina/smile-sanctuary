import { useState } from "react";
import { Button } from "@/components/ui/button";
import PageLayout from "@/components/layout/PageLayout";
import FadeInSection from "@/components/shared/FadeInSection";
import {
  Phone,
  MapPin,
  Clock,
  Mail,
  Send,
  CheckCircle,
  MessageSquare,
  Printer,
} from "lucide-react";

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
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setSubmitted(true);
      } else {
        setError(
          "Something went wrong. Please call (562) 809-5988 or text (562) 809-5188."
        );
      }
    } catch {
      setError(
        "Something went wrong. Please call (562) 809-5988 or text (562) 809-5188."
      );
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
            <p className="text-primary font-medium text-sm tracking-wide uppercase mb-4">
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

            {/* LEFT: Form + Text Option */}
            <FadeInSection>
              <div className="bg-card rounded-2xl p-8 shadow-sm border border-border">

                {/* TEXT OPTION */}
                <div className="mb-10 text-center">
                  <div className="flex justify-center mb-3 group">
                    <div className="bg-primary/10 rounded-full p-3 transition-transform duration-300 group-hover:scale-105">
                      <MessageSquare className="w-6 h-6 text-primary" />
                    </div>
                  </div>

                  <p className="text-sm text-muted-foreground">
                    Prefer to text?
                  </p>

                  <p className="text-lg font-semibold text-foreground mt-1 mb-4">
                    (562) 809-5188
                  </p>

                  <a
                    href="sms:5628095188?body=Hi%20SJ%20Summit%20Dental,%20I%20would%20like%20to%20schedule%20an%20appointment."
                    className="inline-block bg-primary text-primary-foreground font-medium px-6 py-3 rounded-xl
                               transition-all duration-300 ease-out
                               hover:-translate-y-0.5 hover:shadow-md hover:opacity-95"
                  >
                    Text Us Now
                  </a>

                  <p className="text-xs text-muted-foreground mt-3 max-w-xs mx-auto">
                    Please do not send sensitive medical information via text.
                  </p>

                  <div className="border-t border-border my-10" />
                </div>

                {submitted ? (
                  <div className="flex flex-col items-center justify-center text-center py-12 gap-4">
                    <div className="bg-accent/10 rounded-full p-4">
                      <CheckCircle className="w-10 h-10 text-accent" />
                    </div>
                    <h2 className="font-heading text-2xl font-bold text-foreground">
                      Message Sent!
                    </h2>
                    <p className="text-muted-foreground max-w-sm">
                      Thank you for reaching out. We'll get back to you shortly.
                    </p>
                  </div>
                ) : (
                  <>
                    <h2 className="font-heading text-2xl font-bold text-foreground mb-6">
                      Or Send Us a Message
                    </h2>

                    <form onSubmit={handleSubmit} className="space-y-5">

                      <div className="grid sm:grid-cols-2 gap-5">
                        <input
                          name="name"
                          type="text"
                          required
                          value={form.name}
                          onChange={handleChange}
                          placeholder="Full Name *"
                          className="w-full rounded-xl border border-input bg-background px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-ring transition"
                        />
                        <input
                          name="phone"
                          type="tel"
                          required
                          value={form.phone}
                          onChange={handleChange}
                          placeholder="Phone Number *"
                          className="w-full rounded-xl border border-input bg-background px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-ring transition"
                        />
                      </div>

                      <input
                        name="email"
                        type="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="Email Address"
                        className="w-full rounded-xl border border-input bg-background px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-ring transition"
                      />

                      <textarea
                        name="message"
                        rows={4}
                        value={form.message}
                        onChange={handleChange}
                        placeholder="Additional notes..."
                        className="w-full rounded-xl border border-input bg-background px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-ring transition resize-none"
                      />

                      {error && <p className="text-sm text-destructive">{error}</p>}

                      <Button
                        type="submit"
                        variant="hero"
                        size="lg"
                        className="w-full transition-all duration-300 hover:-translate-y-0.5"
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

            {/* RIGHT: Info Panel */}
            <div className="space-y-8">

              {/* Get in Touch */}
              <FadeInSection delay={0.1}>
                <div className="bg-card rounded-2xl p-6 shadow-sm border border-border space-y-5">
                  <h3 className="font-heading text-xl font-semibold text-foreground">
                    Get in Touch
                  </h3>

                  <a href="tel:+15628095988" className="flex items-center gap-3 group hover:text-primary transition-colors">
                    <Phone className="w-5 h-5 text-primary" />
                    <span>(562) 809-5988</span>
                  </a>

                  <a href="sms:5628095188" className="flex items-center gap-3 group hover:text-primary transition-colors">
                    <MessageSquare className="w-5 h-5 text-primary" />
                    <span>Text (562) 809-5188</span>
                  </a>

                  <div className="flex items-center gap-3">
                    <Printer className="w-5 h-5 text-primary" />
                    <span>Fax (562) 809-0500</span>
                  </div>

                  <a href="mailto:sjsummitdental@yahoo.com" className="flex items-center gap-3 group hover:text-primary transition-colors">
                    <Mail className="w-5 h-5 text-primary" />
                    <span>sjsummitdental@yahoo.com</span>
                  </a>

                  <a
                    href="https://maps.google.com/?q=17808+S+Pioneer+Blvd+Ste+110+Artesia+CA+90701"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 group hover:text-primary transition-colors"
                  >
                    <MapPin className="w-5 h-5 text-primary" />
                    <span>
                      17808 S. Pioneer Blvd, Ste 110
                      <br />
                      Artesia, CA 90701
                    </span>
                  </a>
                </div>
              </FadeInSection>

              {/* Office Hours */}
              <FadeInSection delay={0.15}>
                <div className="bg-card rounded-2xl p-6 shadow-sm border border-border">
                  <div className="flex items-center gap-2 mb-4">
                    <Clock className="w-5 h-5 text-primary" />
                    <h3 className="font-heading text-xl font-semibold text-foreground">
                      Office Hours
                    </h3>
                  </div>

                  <ul className="space-y-2">
                    {hours.map((h) => {
                      const today = new Date().toLocaleDateString("en-US", {
                        weekday: "long",
                      });
                      const isToday = today === h.day;

                      return (
                        <li
                          key={h.day}
                          className={`flex justify-between items-center text-sm py-2 px-3 rounded-lg transition-all ${
                            isToday ? "bg-primary/10" : ""
                          }`}
                        >
                          <span
                            className={`font-medium ${
                              isToday ? "text-primary" : "text-foreground"
                            }`}
                          >
                            {h.day}
                            {isToday && (
                              <span className="ml-2 text-xs bg-primary text-primary-foreground px-2 py-0.5 rounded-full">
                                Today
                              </span>
                            )}
                          </span>

                          <span
                            className={
                              h.closed
                                ? "text-muted-foreground"
                                : "text-foreground"
                            }
                          >
                            {h.time}
                          </span>
                        </li>
                      );
                    })}
                  </ul>

                  <p className="text-xs text-muted-foreground mt-4">
                    Walk-ins welcome during office hours.
                  </p>
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
