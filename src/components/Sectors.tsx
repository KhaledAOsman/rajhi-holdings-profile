import { Card, CardContent } from "@/components/ui/card";
import { 
  Heart, 
  Music, 
  Zap, 
  Building2, 
  Trophy, 
  Monitor, 
  GraduationCap 
} from "lucide-react";

const Sectors = () => {
  const sectors = [
    {
      icon: <Heart className="h-6 w-6 text-white" />,
      title: "الرعاية الصحية",
      description: "دعم الحلول التي ترتقي بخدمات الصحة العامة.",
      color: "bg-red-500"
    },
    {
      icon: <Music className="h-6 w-6 text-white" />,
      title: "الترفيه",
      description: "دعم المشاريع الترفيهية التي تُعزز التجربة الثقافية وتساهم في تنمية اقتصاد الإبداع.",
      color: "bg-purple-500"
    },
    {
      icon: <Zap className="h-6 w-6 text-white" />,
      title: "البتروكيماويات",
      description: "نعزز الابتكار في قطاع البتروكيماويات لدعم الصناعات الأساسية و تحقيق النمو الاقتصادي المستدام.",
      color: "bg-orange-500"
    },
    {
      icon: <Building2 className="h-6 w-6 text-white" />,
      title: "قطاع الاسمنت",
      description: "نعزز الابتكار في قطاع الاسمنت لدعم الصناعات الأساسية و تحقيق النمو الاقتصادي المستدام.",
      color: "bg-gray-600"
    },
    {
      icon: <Trophy className="h-6 w-6 text-white" />,
      title: "الرياضية",
      description: "نستثمر في تطوير البنية التحتية الرياضية وتمكين المواهب لتحقيق التميز على المستوى المحلي والعالمي",
      color: "bg-green-500"
    },
    {
      icon: <Monitor className="h-6 w-6 text-white" />,
      title: "التقنية",
      description: "نستثمر في المجالات التقنية الحديثة والتحول الرقمي لتعزيز الابتكار وبناء اقتصاد قائم على المعرفة.",
      color: "bg-blue-500"
    },
    {
      icon: <GraduationCap className="h-6 w-6 text-white" />,
      title: "التعليمي",
      description: "دعم المبادرات التعليمية التي تُسهم في بناء جيل معرفي مؤهل، وتعزز الابتكار وتنمية رأس المال البشري لبناء اقتصاد قائم على المعرفة",
      color: "bg-indigo-500"
    }
  ];

  return (
    <section id="sectors" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6 arabic-text">
            القطاعات التي نخدمها
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed arabic-text max-w-3xl mx-auto">
            نستثمر في القطاعات التي تُحدث فرقًا وتساهم في تحقيق رؤية المملكة 2030.
          </p>
        </div>

        {/* Sectors Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {sectors.map((sector, index) => (
            <div
              key={index}
              className="animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <Card className="h-full bg-gradient-card border-0 shadow-card hover:shadow-hover transition-all duration-300 group cursor-pointer">
                <CardContent className="p-6">
                  <div className="text-center">
                    <div className={`inline-flex items-center justify-center w-12 h-12 rounded-full ${sector.color} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      {sector.icon}
                    </div>
                    <h3 className="text-lg font-bold text-primary mb-3 arabic-text">
                      {sector.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed arabic-text">
                      {sector.description}
                    </p>
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

export default Sectors;