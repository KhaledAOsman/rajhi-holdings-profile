const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold arabic-text">
              مجموعة غازي الراجحي القابضة
            </h3>
            <p className="text-primary-foreground/80 leading-relaxed arabic-text">
              مؤسسة استثمارية طموحة تهدف إلى إعادة تعريف مفهوم الشراكات الاقتصادية في المملكة العربية السعودية وخارجها.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold arabic-text">
              روابط سريعة
            </h4>
            <ul className="space-y-2">
              {[
                { name: "الصفحة الرئيسية", href: "#home" },
                { name: "من نحن", href: "#about" },
                { name: "خدماتنا", href: "#services" },
                { name: "القطاعات التي نخدمها", href: "#sectors" },
              ].map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' })}
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-300 arabic-text"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Vision 2030 */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold arabic-text">
              رؤية المملكة 2030
            </h4>
            <p className="text-primary-foreground/80 leading-relaxed arabic-text">
              نحن ملتزمون بالمساهمة في تحقيق رؤية المملكة 2030 من خلال استثماراتنا المبتكرة وشراكاتنا الاستراتيجية.
            </p>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-primary-foreground/60 arabic-text">
            جميع الحقوق محفوظة © 2024 مجموعة غازي الراجحي القابضة
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;