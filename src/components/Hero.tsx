import heroImage from "@/assets/hero-building.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-l from-primary/80 to-primary-light/70"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 arabic-text leading-tight">
            مجموعة غازي الراجحي القابضة
          </h1>
          <p className="text-xl md:text-2xl mb-8 arabic-text leading-relaxed opacity-90">
            مؤسسة استثمارية طموحة تهدف إلى إعادة تعريف مفهوم الشراكات الاقتصادية في المملكة العربية السعودية وخارجها
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 bg-accent hover:bg-accent-light text-accent-foreground font-semibold rounded-lg transition-all duration-300 hover:shadow-hover arabic-text"
            >
              اكتشف المزيد
            </button>
            <button 
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-lg backdrop-blur-sm border border-white/20 transition-all duration-300 arabic-text"
            >
              تواصل معنا
            </button>
          </div>
        </div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
};

export default Hero;