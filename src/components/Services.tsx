import { Card, CardContent } from "@/components/ui/card";
import { Building, PlusCircle, Handshake, Lightbulb } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: <Building className="h-8 w-8 text-accent" />,
      title: "الاستحواذ والاندماج",
      description: "نستهدف الشركات ذات الأداء الواعد والاستراتيجيات المؤثرة لتحويلها إلى كيانات أكبر وأكثر تأثيرًا على الاقتصاد."
    },
    {
      icon: <PlusCircle className="h-8 w-8 text-accent" />,
      title: "تأسيس الشركات",
      description: "نعمل على تحويل الأفكار المبتكرة إلى مشاريع ناجحة من خلال دعم شامل يشمل البنية التحتية والموارد اللازمة."
    },
    {
      icon: <Handshake className="h-8 w-8 text-accent" />,
      title: "الشراكات الاستراتيجية",
      description: "نبني علاقات طويلة الأمد مع كيانات محلية ودولية لتحقيق الأهداف المشتركة والنمو المدروس."
    },
    {
      icon: <Lightbulb className="h-8 w-8 text-accent" />,
      title: "الاستثمار في المشاريع الابتكارية",
      description: "نسعى لدعم المشاريع التي تتميز بالابتكار والاستدامة، والتي تساهم في تطوير القطاعات التقليدية وتلبية احتياجات السوق المتطورة."
    }
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6 arabic-text">
            خدماتنا
          </h2>
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-semibold text-foreground mb-6 arabic-text">
              استراتجياتنا في الاستثمار ؟
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed arabic-text">
              نستثمر برؤية استراتيجية ترتكز على الابتكار والشراكات الفعّالة لتحقيق نمو اقتصادي مستدام وقيمة طويلة الأمد
            </p>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="animate-fade-in-up"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <Card className="h-full bg-gradient-card border-0 shadow-card hover:shadow-hover transition-all duration-300 group cursor-pointer">
                <CardContent className="p-8">
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      {service.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-primary mb-3 arabic-text">
                        {service.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed arabic-text">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;