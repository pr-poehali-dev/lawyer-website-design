import Icon from "@/components/ui/icon";

const About = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div>
            <h2 className="text-4xl font-bold font-montserrat text-slate-900 mb-6">
              Елена Владимировна Петрова
            </h2>
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              15 лет успешной юридической практики в области семейного права и
              гражданских споров. Более 500 выигранных дел, индивидуальный
              подход к каждому клиенту.
            </p>

            <div className="space-y-4">
              <div className="flex items-center">
                <Icon name="Award" className="text-amber-500 mr-3" size={24} />
                <span className="text-slate-700">
                  Кандидат юридических наук
                </span>
              </div>
              <div className="flex items-center">
                <Icon name="Users" className="text-amber-500 mr-3" size={24} />
                <span className="text-slate-700">
                  500+ успешно решенных дел
                </span>
              </div>
              <div className="flex items-center">
                <Icon name="Clock" className="text-amber-500 mr-3" size={24} />
                <span className="text-slate-700">15 лет практики</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-amber-100 to-amber-50 rounded-2xl p-8">
              <img
                src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=500&fit=crop&crop=face"
                alt="Елена Петрова"
                className="w-full rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
