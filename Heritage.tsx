import { motion } from 'motion/react';

export default function Heritage() {
  return (
    <div className="pt-32 pb-24 px-4 max-w-7xl mx-auto">
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h2 className="text-4xl md:text-6xl font-serif mb-8 leading-tight">The Legacy of <br /><span className="italic">Sasak Culture</span></h2>
        <p className="text-sasak-deep/60 leading-relaxed text-lg mb-12">
          From the volcanic slopes of Mount Rinjani to the white sand shores of Senggigi, the Sasak people have cultivated a rich tapestry of artistic traditions for over a millennium.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-24">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative"
        >
          <img
            src="https://picsum.photos/seed/lombok-village/800/1000"
            alt="Traditional Sasak Village"
            className="w-full aspect-[4/5] object-cover rounded-sm shadow-2xl"
            referrerPolicy="no-referrer"
          />
          <div className="absolute -bottom-8 -right-8 w-64 h-64 border-8 border-sasak-gold/20 -z-10" />
        </motion.div>
        <div className="space-y-8">
          <h3 className="text-3xl font-serif">A Living Tradition</h3>
          <p className="text-sasak-deep/60 leading-relaxed">
            Sasak Exotic was founded with a single mission: to preserve the ancient crafts of Lombok. In an era of mass production, we believe in the value of the handmade, the slow, and the intentional.
          </p>
          <div className="grid grid-cols-2 gap-8">
            <div className="p-6 bg-sasak-sand border border-sasak-earth/10">
              <h5 className="text-sasak-gold text-2xl font-serif mb-2">Songket</h5>
              <p className="text-xs text-sasak-deep/60 leading-relaxed">Intricate hand-woven silk using gold and silver threads, often taking months to complete.</p>
            </div>
            <div className="p-6 bg-sasak-sand border border-sasak-earth/10">
              <h5 className="text-sasak-gold text-2xl font-serif mb-2">Gerabah</h5>
              <p className="text-xs text-sasak-deep/60 leading-relaxed">Traditional Lombok pottery, hand-molded and fired in open pits using natural materials.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-sasak-earth text-sasak-sand p-12 md:p-24 text-center">
        <h3 className="text-3xl md:text-4xl font-serif mb-8 italic">"We don't just sell products; we share the soul of our island."</h3>
        <p className="text-sasak-sand/60 max-w-2xl mx-auto mb-12 leading-relaxed">
          Every purchase directly supports our artisan communities, funding local schools, healthcare, and the preservation of traditional workshops.
        </p>
        <div className="flex justify-center gap-12">
          <div>
            <h4 className="text-sasak-gold text-4xl font-serif mb-2">100%</h4>
            <p className="text-[10px] tracking-widest uppercase opacity-60">Ethical Sourcing</p>
          </div>
          <div>
            <h4 className="text-sasak-gold text-4xl font-serif mb-2">500+</h4>
            <p className="text-[10px] tracking-widest uppercase opacity-60">Artisan Families</p>
          </div>
        </div>
      </div>
    </div>
  );
}
