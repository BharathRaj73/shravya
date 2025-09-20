import { FormEvent, useState } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";

export default function ContactForm() {
  const [loading, setLoading] = useState(false);

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") || "");
    const email = String(data.get("email") || "");
    const phone = String(data.get("phone") || "");
    const message = String(data.get("message") || "");

    if (!name || !email || !phone || !message) {
      toast.error("Please fill in all fields");
      return;
    }

    setLoading(true);
    try {
      await new Promise((r) => setTimeout(r, 800));
      toast.success("Thanks! We'll get back to you shortly.");
      form.reset();
    } catch (err) {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-12 px-4 bg-gray-50">
      <div className="container mx-auto px-4 flex justify-center">
        <div className="w-full max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4 text-center text-blue-600">
            Contact
          </h2>
          <p className="text-center text-gray-600 mb-10 max-w-prose mx-auto">
            Have a question or want to schedule a tour? Send us a message and
            our team will reach out.
          </p>

          <div className="rounded-2xl border border-gray-200 shadow-xl p-8 bg-white/70 backdrop-blur-lg">
            <form onSubmit={onSubmit} className="grid gap-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="grid gap-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    required
                    className="h-12 rounded-lg border border-gray-300 bg-white/50 px-4 outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 backdrop-blur-sm"
                  />
                </div>
                <div className="grid gap-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    required
                    className="h-12 rounded-lg border border-gray-300 bg-white/50 px-4 outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 backdrop-blur-sm"
                  />
                </div>
                <div className="grid gap-2">
                  <label htmlFor="phone" className="text-sm font-medium">
                    Phone
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    inputMode="tel"
                    pattern="^[0-9+()\-\s]{7,}$"
                    required
                    className="h-12 rounded-lg border border-gray-300 bg-white/50 px-4 outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 backdrop-blur-sm"
                  />
                </div>
              </div>

              <div className="grid gap-2">
                <label htmlFor="message" className="text-sm font-medium">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  className="rounded-lg border border-gray-300 bg-white/50 px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 backdrop-blur-sm"
                />
              </div>

              <div className="flex justify-center md:justify-start">
                <Button
                  variant="gradient"
                  type="submit"
                  disabled={loading}
                  className="h-12 px-8 text-white bg-gradient-to-r from-green-600 to-green-500"
                >
                  {loading ? "Sending..." : "Submit"}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
