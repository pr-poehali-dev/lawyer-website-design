import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Pricing = () => {
  const prices = [
    {
      title: "Консультация",
      price: "Бесплатно",
      duration: "30 минут",
      description: "Первичная оценка вашей ситуации",
      features: [
        "Анализ документов",
        "Оценка перспектив дела",
        "Рекомендации по действиям",
      ],
    },
    {
      title: "Представительство",
      price: "от 15 000 ₽",
      duration: "за заседание",
      description: "Защита ваших интересов в суде",
      features: [
        "Подготовка процессуальных документов",
        "Участие в судебных заседаниях",
        "Профессиональная защита",
      ],
    },
    {
      title: "Полное сопровождение",
      price: "от 50 000 ₽",
      duration: "до решения",
      description: "Комплексное ведение дела",
      features: [
        "Все этапы судебного процесса",
        "Сбор доказательств",
        "Исполнение решения суда",
      ],
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold font-montserrat text-slate-900 mb-4">
            Прозрачные цены
          </h2>
          <p className="text-xl text-slate-600">
            Честная стоимость без скрытых платежей
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {prices.map((plan, index) => (
            <Card
              key={index}
              className={`hover:shadow-xl transition-all ${index === 1 ? "border-amber-500 shadow-lg scale-105" : "border-slate-200"}`}
            >
              <CardHeader className="text-center">
                <CardTitle className="text-xl font-montserrat text-slate-900 mb-2">
                  {plan.title}
                </CardTitle>
                <div className="mb-2">
                  <span className="text-3xl font-bold text-amber-600">
                    {plan.price}
                  </span>
                  <span className="text-slate-500 ml-2">{plan.duration}</span>
                </div>
                <p className="text-slate-600 text-sm">{plan.description}</p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <Icon
                        name="Check"
                        className="text-amber-500 mr-2 mt-0.5 flex-shrink-0"
                        size={16}
                      />
                      <span className="text-slate-600 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  className={`w-full ${index === 1 ? "bg-amber-500 hover:bg-amber-600" : "bg-slate-200 hover:bg-slate-300 text-slate-900"}`}
                >
                  Связаться
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
