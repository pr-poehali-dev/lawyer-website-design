import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Pricing = () => {
  const prices = [
    {
      title: "Консультация",
      subtitle: "Первичная встреча",
      price: "Бесплатно",
      originalPrice: null,
      duration: "до 30 минут",
      description: "Оценка вашей ситуации и правовых перспектив",
      features: [
        "Анализ документов и ситуации",
        "Оценка шансов на успех",
        "План действий и стратегия",
        "Ответы на все вопросы",
      ],
      popular: false,
      color: "slate",
    },
    {
      title: "Сопровождение дела",
      subtitle: "Полное ведение",
      price: "от 45 000 ₽",
      originalPrice: "60 000 ₽",
      duration: "до решения суда",
      description: "Комплексное юридическое сопровождение",
      features: [
        "Подготовка всех документов",
        "Представительство в суде",
        "Сбор доказательств",
        "Исполнение решения",
        "Постоянная связь и отчёты",
      ],
      popular: true,
      color: "amber",
    },
    {
      title: "Разовые услуги",
      subtitle: "По потребности",
      price: "от 8 000 ₽",
      originalPrice: null,
      duration: "за услугу",
      description: "Отдельные юридические услуги",
      features: [
        "Составление документов",
        "Правовая экспертиза",
        "Участие в одном заседании",
        "Переговоры с оппонентами",
      ],
      popular: false,
      color: "slate",
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-slate-50 to-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <div className="inline-flex items-center bg-amber-500/10 border border-amber-500/20 rounded-full px-6 py-2 mb-6">
            <span className="text-amber-600 text-sm font-medium">
              💰 Прозрачное ценообразование
            </span>
          </div>
          <h2 className="text-5xl font-bold font-montserrat text-slate-900 mb-6">
            Честные цены без скрытых платежей
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Фиксированная стоимость услуг. Оплата по результату. Первая
            консультация всегда бесплатная.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {prices.map((plan, index) => (
            <Card
              key={index}
              className={`relative hover:shadow-2xl transition-all duration-300 border-2 ${
                plan.popular
                  ? "border-amber-500 shadow-xl scale-105 bg-gradient-to-br from-amber-50 to-white"
                  : "border-slate-200 hover:border-slate-300 bg-white"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-amber-500 text-white px-6 py-2 rounded-full text-sm font-semibold shadow-lg">
                    ⭐ Популярный выбор
                  </div>
                </div>
              )}

              <CardHeader className="text-center pb-8 pt-8">
                <div className="mb-4">
                  <CardTitle className="text-2xl font-montserrat text-slate-900 mb-2">
                    {plan.title}
                  </CardTitle>
                  <p className="text-sm text-slate-500 font-medium">
                    {plan.subtitle}
                  </p>
                </div>

                <div className="mb-4">
                  <div className="flex items-center justify-center gap-2">
                    {plan.originalPrice && (
                      <span className="text-lg text-slate-400 line-through">
                        {plan.originalPrice}
                      </span>
                    )}
                    <span
                      className={`text-4xl font-bold ${plan.popular ? "text-amber-600" : "text-slate-900"}`}
                    >
                      {plan.price}
                    </span>
                  </div>
                  <span className="text-slate-500 text-sm">
                    {plan.duration}
                  </span>
                </div>

                <p className="text-slate-600 text-sm leading-relaxed">
                  {plan.description}
                </p>
              </CardHeader>

              <CardContent className="pt-0">
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <div
                        className={`w-5 h-5 rounded-full flex items-center justify-center mr-3 mt-0.5 ${
                          plan.popular ? "bg-amber-100" : "bg-slate-100"
                        }`}
                      >
                        <Icon
                          name="Check"
                          className={
                            plan.popular ? "text-amber-600" : "text-slate-600"
                          }
                          size={12}
                        />
                      </div>
                      <span className="text-slate-700 text-sm leading-relaxed">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <Button
                  className={`w-full py-3 font-semibold rounded-xl transition-all ${
                    plan.popular
                      ? "bg-amber-500 hover:bg-amber-600 text-white shadow-lg hover:shadow-xl hover:scale-105"
                      : "bg-slate-100 hover:bg-slate-200 text-slate-900 hover:shadow-md"
                  }`}
                >
                  {plan.popular ? "Заказать сейчас" : "Связаться"}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-100 max-w-2xl mx-auto">
            <Icon
              name="Shield"
              className="text-amber-500 mx-auto mb-4"
              size={48}
            />
            <h3 className="text-xl font-semibold text-slate-900 mb-3">
              Гарантия результата
            </h3>
            <p className="text-slate-600">
              Если дело будет проиграно по моей вине, верну 100% гонорара.
              Работаю только с делами, в успехе которых уверена.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
