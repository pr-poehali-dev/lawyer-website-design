import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Contact = () => {
  return (
    <section className="py-20 bg-slate-900 text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold font-montserrat mb-4">
            Связаться с нами
          </h2>
          <p className="text-xl text-slate-300">
            Готовы помочь решить вашу правовую задачу
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          <div>
            <h3 className="text-2xl font-montserrat font-semibold mb-6">
              Контактная информация
            </h3>

            <div className="space-y-6">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-amber-500 rounded-full flex items-center justify-center mr-4">
                  <Icon name="Phone" className="text-slate-900" size={20} />
                </div>
                <div>
                  <p className="text-slate-300">Телефон</p>
                  <p className="text-lg font-semibold">+7 (495) 123-45-67</p>
                </div>
              </div>

              <div className="flex items-center">
                <div className="w-12 h-12 bg-amber-500 rounded-full flex items-center justify-center mr-4">
                  <Icon name="Mail" className="text-slate-900" size={20} />
                </div>
                <div>
                  <p className="text-slate-300">Email</p>
                  <p className="text-lg font-semibold">petrova@lawyer.ru</p>
                </div>
              </div>

              <div className="flex items-center">
                <div className="w-12 h-12 bg-amber-500 rounded-full flex items-center justify-center mr-4">
                  <Icon name="MapPin" className="text-slate-900" size={20} />
                </div>
                <div>
                  <p className="text-slate-300">Адрес</p>
                  <p className="text-lg font-semibold">
                    г. Москва, ул. Тверская, д. 10
                  </p>
                </div>
              </div>

              <div className="flex items-center">
                <div className="w-12 h-12 bg-amber-500 rounded-full flex items-center justify-center mr-4">
                  <Icon name="Clock" className="text-slate-900" size={20} />
                </div>
                <div>
                  <p className="text-slate-300">Режим работы</p>
                  <p className="text-lg font-semibold">Пн-Пт: 9:00-18:00</p>
                </div>
              </div>
            </div>
          </div>

          <Card className="bg-slate-800 border-slate-700">
            <CardContent className="p-8">
              <h3 className="text-2xl font-montserrat font-semibold text-white mb-6">
                Записаться на консультацию
              </h3>
              <div className="space-y-4">
                <input
                  type="text"
                  placeholder="Ваше имя"
                  className="w-full p-3 rounded-lg bg-slate-700 text-white placeholder-slate-400 border border-slate-600 focus:border-amber-500 focus:outline-none"
                />
                <input
                  type="tel"
                  placeholder="Телефон"
                  className="w-full p-3 rounded-lg bg-slate-700 text-white placeholder-slate-400 border border-slate-600 focus:border-amber-500 focus:outline-none"
                />
                <textarea
                  placeholder="Опишите вашу ситуацию"
                  rows={4}
                  className="w-full p-3 rounded-lg bg-slate-700 text-white placeholder-slate-400 border border-slate-600 focus:border-amber-500 focus:outline-none resize-none"
                />
                <Button className="w-full bg-amber-500 hover:bg-amber-600 text-slate-900 font-semibold py-3">
                  <Icon name="Send" className="mr-2" size={20} />
                  Отправить заявку
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
