import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-24 overflow-hidden">
      <div className="absolute inset-0 opacity-30"></div>
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="mb-6">
            <div className="inline-flex items-center bg-amber-500/10 border border-amber-500/20 rounded-full px-6 py-2 mb-8">
              <span className="text-amber-400 text-sm font-medium">
                ✦ Юридические услуги премиум класса
              </span>
            </div>
          </div>
          <h1 className="text-6xl md:text-7xl font-bold font-montserrat mb-8 leading-tight">
            Елена Петрова
            <span className="block text-4xl md:text-5xl text-amber-400 font-normal mt-2">
              Адвокат по семейному праву
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 mb-12 leading-relaxed max-w-3xl mx-auto">
            15 лет успешной практики • 500+ выигранных дел • Индивидуальный
            подход к каждому клиенту
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button
              size="lg"
              className="bg-amber-500 hover:bg-amber-600 text-slate-900 font-semibold px-10 py-4 text-lg rounded-full shadow-xl hover:shadow-2xl transition-all hover:scale-105"
            >
              <Icon name="Phone" className="mr-3" size={24} />
              Бесплатная консультация
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-amber-400/30 text-white hover:bg-amber-400/10 hover:border-amber-400 px-10 py-4 text-lg rounded-full backdrop-blur-sm transition-all"
            >
              <Icon name="Award" className="mr-3" size={24} />
              Мои достижения
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
