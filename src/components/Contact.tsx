import { motion } from "framer-motion";
import { Send } from "lucide-react";
import emailjs from "@emailjs/browser";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export const Contact = () => {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      await emailjs.sendForm(
        "service_47mtjtn",
        "template_lbf9wsj",
        e.currentTarget,
        "y9yeF4h5ICScgCss8"
      );

      alert("Message sent successfully!");
      e.currentTarget.reset();
    } catch (error) {
      console.error(error);
      alert("Failed to send message. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-28 bg-background">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-16">
          <span className="text-secondary font-semibold uppercase tracking-widest text-sm">
            Get In Touch
          </span>
          <h2 className="font-display text-4xl font-bold text-foreground mt-4">
            Let's Build <span className="text-gradient-amber">Together</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Have a project in mind? Get in touch with us to discuss how we can
            bring your vision to life.
          </p>
        </div>

        {/* Form Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto bg-card rounded-2xl shadow-construction p-10"
        >
          <h3 className="font-display text-2xl font-bold text-foreground mb-8">
            Send Us a Message
          </h3>

          <form onSubmit={handleSubmit} className="mt-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-6">
              {/* Name */}
              <input
                name="name"
                required
                placeholder="Your Name"
                className="input"
              />

              {/* Email */}
              <input
                name="email"
                type="email"
                required
                placeholder="Email Address"
                className="input"
              />

              {/* Phone (FULL WIDTH) */}
              <input
                name="phone"
                required
                placeholder="Phone Number"
                className="input md:col-span-2"
              />

              {/* Message (FULL WIDTH) */}
              <textarea
                name="message"
                required
                placeholder="Tell us about your project..."
                rows={6}
                className="input md:col-span-2 resize-none"
              />

              {/* Button (FULL WIDTH) */}
              <button
                type="submit"
                disabled={loading}
                className="md:col-span-2 mt-4 flex items-center justify-center gap-2 rounded-xl bg-[#e18a00] py-4 text-white font-semibold hover:bg-[#c97800] transition"
              >
                <Send className="w-5 h-5" />
                {loading ? "Sending..." : "Send Message"}
              </button>
            </div>
          </form>





        </motion.div>
      </div>
    </section>
  );
};
