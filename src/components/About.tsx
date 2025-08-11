import { Card, CardContent } from "@/components/ui/card";
import { Eye, Target, Heart } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: <Eye className="h-8 w-8 text-accent" />,
      title: "رؤيتنا",
      description: "الريادة في بناء شراكات استراتيجية واستثمارات مبتكرة تُسهم في تحقيق النمو الاقتصادي المستدام وإلهام الأجيال القادمة."
    },
    {
      icon: <Target className="h-8 w-8 text-accent" />,
      title: "رسالتنا",
      description: "إيجاد نظام استثماري متكامل يرتكز على الابتكار والاستدامة، يهدف إلى تحويل التحديات إلى فرص اقتصادية واعدة تحقق قيمة طويلة الأمد لجميع شركائنا."
    },
    {
      icon: <Heart className="h-8 w-8 text-accent" />,
      title: "قيمنا",
      description: "نؤمن بأن الأفكار الجديدة هي أساس النجاح، ونتبنى الابتكار كنهج في جميع أعمالنا. كما نلتزم ببناء شراكات قائمة على الثقة والرؤية المشتركة، مع ضمان الشفافية في كل تعاملاتنا."
    }
  ];

  return (
    <section id="about" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6 arabic-text">
            من نحن
          </h2>
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-semibold text-foreground mb-6 arabic-text">
              عن مجموعة غازي الراجحي القابضة
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed arabic-text">
              مجموعة غازي الراجحي القابضة هي مؤسسة استثمارية طموحة تهدف إلى إعادة تعريف مفهوم الشراكات الاقتصادية في المملكة العربية السعودية وخارجها. نحن نركز على تعزيز القيمة الاقتصادية من خلال مجموعة من الأنشطة الحيوية التي تُسهم في تحقيق رؤية المملكة 2030 وبناء مستقبل مستدام.
            </p>
          </div>
        </div>

        {/* Values Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div
              key={index}
              className="animate-fade-in-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <Card className="h-full bg-gradient-card border-0 shadow-card hover:shadow-hover transition-all duration-300 group">
                <CardContent className="p-8 text-center">
                  <div className="mb-6 flex justify-center group-hover:scale-110 transition-transform duration-300">
                    {value.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-primary mb-4 arabic-text">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed arabic-text">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;