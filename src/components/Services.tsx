import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Services = () => {
  const services = [
    {
      icon: "Heart",
      title: "Семейное право",
      items: [
        "Развод и раздел имущества",
        "Алименты и содержание",
        "Определение места жительства детей",
        "Лишение родительских прав",
      ],
    },
    {
      icon: "Scale",
      title: "Гражданские споры",
      items: [
        "Взыскание долгов",
        "Споры по договорам",
        "Защита прав потребителей",
        "Наследственные дела",
      ],
    },
    {
      icon: "FileText",
      title: "Правовое сопровождение",
      items: [
        "Составление исковых заявлений",
        "Представительство в суде",
        "Правовая экспертиза документов",
        "Досудебное урегулирование",
      ],
    },
  ];

  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold font-montserrat text-slate-900 mb-4">
            Наши услуги
          </h2>
          <p className="text-xl text-slate-600">
            Комплексная юридическая помощь для защиты ваших прав
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <Card
              key={index}
              className="hover:shadow-lg transition-shadow border-0 shadow-md"
            >
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon
                    name={service.icon as any}
                    className="text-amber-600"
                    size={32}
                  />
                </div>
                <CardTitle className="text-xl font-montserrat text-slate-900">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {service.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start">
                      <Icon
                        name="Check"
                        className="text-amber-500 mr-2 mt-0.5 flex-shrink-0"
                        size={16}
                      />
                      <span className="text-slate-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
