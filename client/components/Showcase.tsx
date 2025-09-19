import { motion } from "framer-motion";
import { MapPin, FileCheck2, IndianRupee, TrendingUp } from "lucide-react";

const FEATURES = [
  {
    icon: FileCheck2,
    title: "Clear Titles & Documents",
    desc: "Legally verified properties with hassle-free registration and approvals.",
  },
  {
    icon: MapPin,
    title: "Prime Locations",
    desc: "Well-connected layouts near highways, schools, and upcoming developments.",
  },
  {
    icon: IndianRupee,
    title: "Affordable Investment",
    desc: "Plots starting at competitive prices with flexible payment options.",
  },
  {
    icon: TrendingUp,
    title: "High Appreciation Value",
    desc: "Properties in fast-growing neighborhoods with strong ROI potential.",
  },
];

const PROJECTS = [
  {
    img: "https://scontent.fblr20-3.fna.fbcdn.net/v/t39.30808-6/531392765_737589559180680_1128503915069635466_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=127cfc&_nc_ohc=-xbTRWLkmmIQ7kNvwFVhKnG&_nc_oc=Adnn_qgl7hdz9FMwgWQ1-pLk1wOkRu4O942IP7X2j1K0PgNJHqPAPmk317HWJzLIAJUhIvwC0V-CjcA2qG6rPgWH&_nc_zt=23&_nc_ht=scontent.fblr20-3.fna&_nc_gid=GQgRmp_g_lW4xzeoBV8Duw&oh=00_AfYKd8KLjRElSgErM7IgZQRKqJ0JNWsHeCDh71T8rSj4hg&oe=68D32A39",
  },
  {
    img: "https://scontent.fblr20-3.fna.fbcdn.net/v/t39.30808-6/533065889_737589442514025_846784601271423019_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=127cfc&_nc_ohc=8T5pdvhzijYQ7kNvwE1a8tG&_nc_oc=AdlrM6wp3ic2I3mwvMV0GX8eqfxZk_oi1Hjln0bubjY6OBYiEvhYi0vIVB4B65p9d-mSv9WIfA5zflE0Ys9MtkOV&_nc_zt=23&_nc_ht=scontent.fblr20-3.fna&_nc_gid=DzWdzmhqQEM0fXRokqSWDA&oh=00_AfYQWqLiwR0e35-nhgFiLh6YLXHuINnW7R1_H8wgG3n6sA&oe=68D3271E",
  },
  {
    img: "https://scontent.fblr20-3.fna.fbcdn.net/v/t39.30808-6/532228920_737589565847346_9197387267928735956_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=127cfc&_nc_ohc=h9Wp4XBMDToQ7kNvwFSWSFa&_nc_oc=AdnUkdO0UXlZQQlqFEPk8m5XPzWZ5LX4Y7Ai73Mq1oH_0JfAmYYFgVJ33Y0hSTogZGlmGhqPfWXOoVF3DPfO4jbf&_nc_zt=23&_nc_ht=scontent.fblr20-3.fna&_nc_gid=c_yCCNjdx9fqe8704mLc5w&oh=00_AfbAHQcWdMI0ZpBnvja9rIUbHzZz9143NiQXH4cwYqvBPg&oe=68D31188",
  },
];

export default function Showcase() {
  return (
    <section id="showcase" className="container mx-auto py-12 px-4">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.5 }}
        className="rounded-3xl border border-blue-100 bg-white/30 backdrop-blur-md p-6 md:p-10 shadow-lg"
      >
        <div className="grid gap-10 md:grid-cols-2 md:gap-12 items-center">
          {/* Left Section - Features */}
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border bg-blue-50/70 px-3 py-1 text-xs text-blue-700 backdrop-blur">
              Investment you can trust
            </span>
            <h2 className="mt-3 text-3xl md:text-4xl font-extrabold tracking-tight text-gray-900">
              Secure your future with premium plots
            </h2>
            <p className="mt-3 text-gray-700 max-w-prose">
              Explore handpicked layouts and land properties with clear titles,
              prime locations, and excellent growth potential.
            </p>

            <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {FEATURES.map(({ icon: Icon, title, desc }) => (
                <li
                  key={title}
                  className="group rounded-xl border border-blue-100 p-4 transition-all hover:shadow-lg hover:border-blue-300 active:scale-[0.99]"
                >
                  <div className="flex items-start gap-3">
                    <div className="rounded-md p-2 bg-blue-100 text-blue-600">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">{title}</div>
                      <p className="text-sm text-gray-600 mt-1">{desc}</p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Section - Projects */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {PROJECTS.map((p, i) => (
              <motion.div
                key={i}
                className={`group relative overflow-hidden rounded-2xl border border-blue-100 bg-white/30 backdrop-blur-md ${
                  i === 0 ? "sm:col-span-2 sm:row-span-2" : ""
                } aspect-square`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.05 * i }}
              >
                <img
                  src={p.img}
                  alt="Property showcase"
                  className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
