import { motion } from 'motion/react';

export default function Artisans() {
  const artisans = [
    {
      name: "Ibu Nurul",
      craft: "Master Weaver",
      story: "With over 40 years of experience, Ibu Nurul preserves the intricate patterns of Sasak Songket weaving.",
      image: "https://picsum.photos/seed/artisan1/600/800"
    },
    {
      name: "Pak Wayan",
      craft: "Master Potter",
      story: "Pak Wayan uses traditional earth-firing techniques passed down through seven generations of his family.",
      image: "https://picsum.photos/seed/artisan2/600/800"
    },
    {
      name: "Pak Made",
      craft: "Wood Carver",
      story: "Pak Made specializes in ancestral masks, each hand-carved from sustainably sourced teak wood.",
      image: "https://picsum.photos/seed/artisan3/600/800"
    }
  ];

  return (
    <div className="pt-32 pb-24 px-4 max-w-7xl mx-auto">
      <div className="text-center mb-20 max-w-3xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-serif mb-8">The Hands Behind the Craft</h2>
        <p className="text-sasak-deep/60 leading-relaxed text-lg italic">
          "Every piece we create carries the spirit of our ancestors and the warmth of our hands."
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {artisans.map((artisan, i) => (
          <motion.div
            key={artisan.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.2 }}
            className="group"
          >
            <div className="relative aspect-[3/4] mb-8 overflow-hidden rounded-sm shadow-lg">
              <img
                src={artisan.image}
                alt={artisan.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-sasak-earth/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
            <h4 className="text-2xl font-serif mb-2">{artisan.name}</h4>
            <span className="text-sasak-gold font-medium tracking-widest uppercase text-[10px] mb-4 block">{artisan.craft}</span>
            <p className="text-sasak-deep/60 leading-relaxed">{artisan.story}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
