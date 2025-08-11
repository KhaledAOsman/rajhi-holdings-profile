import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/hooks/use-toast";
import { Mail, Phone, User, MessageSquare } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    message: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.fullName || !formData.email || !formData.message) {
      toast({
        title: "خطأ في النموذج",
        description: "يرجى ملء جميع الحقول المطلوبة",
        variant: "destructive",
      });
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({
        title: "خطأ في البريد الإلكتروني",
        description: "يرجى إدخال بريد إلكتروني صحيح",
        variant: "destructive",
      });
      return;
    }

    // Simulate form submission
    toast({
      title: "تم إرسال الرسالة بنجاح",
      description: "شكراً لتواصلك معنا. سنقوم بالرد عليك في أقرب وقت ممكن.",
    });

    // Reset form
    setFormData({
      fullName: "",
      phone: "",
      email: "",
      message: ""
    });
  };

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6 arabic-text">
            تواصل معنا
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed arabic-text max-w-3xl mx-auto">
            نحن هنا للإجابة على جميع استفساراتك وتقديم الدعم اللازم لك. سواء كنت مهتمًا بالشراكة أو ترغب في معرفة المزيد عن استثماراتنا، لا تتردد في التواصل معنا.
          </p>
        </div>

        {/* Contact Form */}
        <div className="max-w-2xl mx-auto">
          <Card className="bg-gradient-card border-0 shadow-corporate">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Full Name */}
                <div className="space-y-2">
                  <label htmlFor="fullName" className="flex items-center gap-2 text-sm font-medium text-foreground arabic-text">
                    <User className="h-4 w-4 text-accent" />
                    الاسم الكامل
                  </label>
                  <Input
                    id="fullName"
                    name="fullName"
                    type="text"
                    placeholder="اكتب اسمك بالكامل"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    className="arabic-text"
                    required
                  />
                </div>

                {/* Phone */}
                <div className="space-y-2">
                  <label htmlFor="phone" className="flex items-center gap-2 text-sm font-medium text-foreground arabic-text">
                    <Phone className="h-4 w-4 text-accent" />
                    رقم الهاتف
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="ادخل رقم هاتفك"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="arabic-text"
                  />
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <label htmlFor="email" className="flex items-center gap-2 text-sm font-medium text-foreground arabic-text">
                    <Mail className="h-4 w-4 text-accent" />
                    البريد الإلكتروني
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="ادخل بريدك الإلكتروني"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="arabic-text"
                    required
                  />
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <label htmlFor="message" className="flex items-center gap-2 text-sm font-medium text-foreground arabic-text">
                    <MessageSquare className="h-4 w-4 text-accent" />
                    رسالتك
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="اكتب رسالتك هنا..."
                    value={formData.message}
                    onChange={handleInputChange}
                    className="min-h-[120px] arabic-text"
                    required
                  />
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  className="w-full bg-accent hover:bg-accent-light text-accent-foreground font-semibold py-3 transition-all duration-300 hover:shadow-hover arabic-text"
                >
                  إرسال الرسالة
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;