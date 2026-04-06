import aboutImg from "@/assets/about-image.jpg";

const About = () => {
  return (
    <section id="o-nas" className="py-24">
      <div className="container px-4">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <img
              src={aboutImg}
              alt="Geodet pri práci"
              className="rounded-lg shadow-lg w-full object-cover"
              loading="lazy"
              width={800}
              height={600}
            />
          </div>
          <div>
            <h2 className="text-4xl md:text-5xl font-display text-foreground mb-6">O nás</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Geobukovy je tím skúsených geodetov s dlhoročnou praxou v oblasti geodézie a kartografie.
              Naším cieľom je poskytovať presné, spoľahlivé a rýchle geodetické služby pre našich klientov.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Využívame najmodernejšiu geodetickú techniku a softvér, vďaka čomu dokážeme
              zabezpečiť najvyššiu presnosť meraní. Pôsobíme na celom území Slovenska.
            </p>
            <div className="flex gap-12">
              <div>
                <div className="text-3xl font-display text-primary">15+</div>
                <div className="text-muted-foreground text-sm mt-1">rokov skúseností</div>
              </div>
              <div>
                <div className="text-3xl font-display text-primary">2000+</div>
                <div className="text-muted-foreground text-sm mt-1">dokončených projektov</div>
              </div>
              <div>
                <div className="text-3xl font-display text-primary">100%</div>
                <div className="text-muted-foreground text-sm mt-1">spokojnosť klientov</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
