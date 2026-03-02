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

  return (
    <PageLayout>
      <section className="bg-secondary py-16 lg:py-24">
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

      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">

            {/* Contact Form */}
            <FadeInSection>
              <div className="bg-card rounded-2xl p-8 shadow-sm border border-border transition-all duration-300">

                {/* TEXT OPTION */}
                <div className="mb-10 text-center animate-in fade-in slide-in-from-bottom-2 duration-500">
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

                  <div className="border-t border-border my-10 transition-opacity duration-500 opacity-80" />
                </div>

                {submitted ? (
                  <div className="flex flex-col items-center justify-center text-center py-12 gap-4 animate-in fade-in duration-500">
                    <div className="bg-primary/10 rounded-full p-4">
                      <CheckCircle className="w-10 h-10 text-primary" />
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
                          className="w-full rounded-xl border border-input bg-background px-4 py-2.5 text-sm
                                     transition-all duration-200
                                     focus:outline-none focus:ring-2 focus:ring-ring focus:-translate-y-0.5"
                        />
                        <input
                          name="phone"
                          type="tel"
                          required
                          value={form.phone}
                          onChange={handleChange}
                          placeholder="Phone Number *"
                          className="w-full rounded-xl border border-input bg-background px-4 py-2.5 text-sm
                                     transition-all duration-200
                                     focus:outline-none focus:ring-2 focus:ring-ring focus:-translate-y-0.5"
                        />
                      </div>

                      <textarea
                        name="message"
                        rows={4}
                        value={form.message}
                        onChange={handleChange}
                        placeholder="Additional notes..."
                        className="w-full rounded-xl border border-input bg-background px-4 py-2.5 text-sm
                                   transition-all duration-200
                                   focus:outline-none focus:ring-2 focus:ring-ring focus:-translate-y-0.5 resize-none"
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

          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Contact;
