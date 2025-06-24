import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-20">
      <div className="container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold font-montserrat mb-6 leading-tight">
            Защита ваших интересов —
            <span className="text-amber-400"> наш приоритет</span>
          </h1>
          <p className="text-xl text-slate-300 mb-8 leading-relaxed">
            Семейное право и гражданские spoры. Профессиональная юридическая
            помощь с 15-летним опытом успешной практики.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-amber-500 hover:bg-amber-600 text-slate-900 font-semibold px-8 py-3"
            >
              <Icon name="Phone" className="mr-2" size={20} />
              Бесплатная консультация
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-slate-400 text-white hover:bg-slate-700 px-8 py-3"
            >
              <Icon name="FileText" className="mr-2" size={20} />
              Узнать больше
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
