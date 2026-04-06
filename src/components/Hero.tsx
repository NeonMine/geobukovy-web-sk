import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      <img
        src={heroBg}
        alt="Geodetické meranie v krajine"
        className="absolute inset-0 w-full h-full object-cover"
        width={1920}
        height={1080}
      />
      <div className="absolute inset-0 bg-foreground/60" />
      <div className="relative z-10 container text-center px-4">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-display text-primary-foreground mb-6 animate-fade-in-up">
          Geobukovy
        </h1>
        <p className="text-xl md:text-2xl text-primary-foreground/85 max-w-2xl mx-auto mb-10 font-body animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
          Profesionálne geodetické služby s presnosťou a spoľahlivosťou na celom Slovensku
        </p>
        <a
          href="#kontakt"
          className="inline-block bg-accent text-accent-foreground px-8 py-4 rounded-lg text-lg font-semibold hover:opacity-90 transition-opacity animate-fade-in-up"
          style={{ animationDelay: "0.4s" }}
        >
          Kontaktujte nás
        </a>
      </div>
    </section>
  );
};

export default Hero;
