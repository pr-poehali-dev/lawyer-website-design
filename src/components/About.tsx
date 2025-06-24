import Icon from "@/components/ui/icon";

const About = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-white to-slate-50">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
          <div className="order-2 lg:order-1">
            <div className="mb-8">
              <span className="text-amber-600 font-semibold text-sm uppercase tracking-wide">
                О юристе
              </span>
              <h2 className="text-5xl font-bold font-montserrat text-slate-900 mt-2 mb-6">
                Защита ваших интересов — моя миссия
              </h2>
            </div>
            <div className="prose prose-lg text-slate-600 mb-8">
              <p className="text-xl leading-relaxed mb-6">
                Специализируюсь на семейном праве и гражданских спорах. Каждое
                дело для меня — это возможность восстановить справедливость и
                защитить права человека.
              </p>
              <p className="text-lg leading-relaxed">
                Кандидат юридических наук, член Адвокатской палаты Москвы.
                Постоянно совершенствую профессиональные навыки и изучаю
                новейшие изменения в законодательстве.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-slate-100 hover:shadow-xl transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center">
                    <Icon name="Award" className="text-amber-600" size={24} />
                  </div>
                  <div className="ml-4">
                    <div className="text-2xl font-bold text-slate-900">
                      500+
                    </div>
                    <div className="text-sm text-slate-600">Выигранных дел</div>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-slate-100 hover:shadow-xl transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center">
                    <Icon name="Clock" className="text-amber-600" size={24} />
                  </div>
                  <div className="ml-4">
                    <div className="text-2xl font-bold text-slate-900">15</div>
                    <div className="text-sm text-slate-600">Лет опыта</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-amber-500/20 to-slate-500/20 rounded-3xl blur-2xl"></div>
              <div className="relative bg-gradient-to-br from-amber-50 to-slate-50 rounded-3xl p-8 border border-amber-100/50">
                <img
                  src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=500&h=600&fit=crop&crop=face"
                  alt="Елена Петрова"
                  className="w-full rounded-2xl shadow-2xl"
                />
                <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-4 shadow-xl border border-slate-100">
                  <div className="flex items-center space-x-2">
                    <Icon
                      name="Star"
                      className="text-amber-500 fill-current"
                      size={20}
                    />
                    <span className="text-slate-900 font-semibold">
                      4.9/5.0
                    </span>
                  </div>
                  <div className="text-xs text-slate-500 mt-1">
                    Рейтинг клиентов
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
