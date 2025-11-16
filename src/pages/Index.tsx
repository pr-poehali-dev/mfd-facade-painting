import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

const Index = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: 'Заявка отправлена!',
      description: 'Мы свяжемся с вами в ближайшее время.',
    });
    setFormData({ name: '', phone: '', email: '', message: '' });
  };

  const advantages = [
    {
      icon: 'Award',
      title: 'Опыт с 2009 года',
      description: 'Более 15 лет успешной работы на рынке Карелии',
    },
    {
      icon: 'Shield',
      title: 'Гарантия качества',
      description: 'Все работы выполняются с соблюдением технологий',
    },
    {
      icon: 'Palette',
      title: 'Широкая палитра',
      description: 'Любые цвета и оттенки для ваших проектов',
    },
    {
      icon: 'Clock',
      title: 'Быстрые сроки',
      description: 'Оперативное выполнение заказов любого объёма',
    },
    {
      icon: 'Users',
      title: 'Надёжный партнёр',
      description: 'Постоянные клиенты доверяют нам свои проекты',
    },
    {
      icon: 'Truck',
      title: 'Удобная логистика',
      description: 'Доставка комплектующих по Республике Карелия',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <img 
            src="https://cdn.poehali.dev/files/f28982ee-c232-4da6-831a-f207ddd0c7f7.png" 
            alt="Карелия-Плит" 
            className="h-12"
          />
          <Button 
            size="lg"
            className="bg-primary hover:bg-primary/90 text-white font-semibold"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Связаться с нами
          </Button>
        </div>
      </header>

      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <h1 className="text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                Профессиональная покраска мебельных фасадов из МДФ
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Надёжный поставщик мебельных комплектующих в Республике Карелия с 2009 года
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <Button 
                  size="lg" 
                  className="bg-primary hover:bg-primary/90 text-white px-8 font-semibold"
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Оставить заявку
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  className="border-2 border-primary text-primary hover:bg-primary/5 px-8 font-semibold"
                  onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  О компании
                </Button>
              </div>
            </div>
            <div className="relative animate-fade-in">
              <img 
                src="https://cdn.poehali.dev/projects/379ee735-c35a-4be4-bb2a-1147e7df4eae/files/0fb62cd2-4ab8-48f0-9008-a01b4d525a4a.jpg"
                alt="Мебельные фасады"
                className="rounded-2xl shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative order-2 lg:order-1">
              <img 
                src="https://cdn.poehali.dev/projects/379ee735-c35a-4be4-bb2a-1147e7df4eae/files/c0e01f90-8954-4906-b2e3-986d0386e38d.jpg"
                alt="Производство"
                className="rounded-2xl shadow-2xl w-full"
              />
            </div>
            <div className="space-y-6 order-1 lg:order-2">
              <h2 className="text-4xl lg:text-5xl font-bold text-foreground">О компании</h2>
              <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                <p>
                  <strong className="text-foreground">ООО «Карелия-Плит»</strong> — надёжный поставщик мебельных комплектующих, который зарекомендовал себя как проверенного партнёра с 2009 года в Республике Карелия.
                </p>
                <p>
                  Мы специализируемся на профессиональной покраске мебельных фасадов из МДФ, обеспечивая высочайшее качество покрытия и широкую палитру цветов для реализации любых дизайнерских решений.
                </p>
                <p>
                  За годы работы мы накопили огромный опыт, современное оборудование и команду профессионалов, которые гарантируют безупречный результат каждому клиенту.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Почему выбирают нас
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Преимущества работы с Карелия-Плит
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {advantages.map((advantage, index) => (
              <Card 
                key={index} 
                className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300 hover-scale"
              >
                <CardContent className="p-8 space-y-4">
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center">
                    <Icon name={advantage.icon} size={32} className="text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">
                    {advantage.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {advantage.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img 
                src="https://cdn.poehali.dev/projects/379ee735-c35a-4be4-bb2a-1147e7df4eae/files/fe9953a1-8e10-4c19-bdc1-257b14354d67.jpg"
                alt="Готовые изделия"
                className="rounded-2xl shadow-2xl w-full"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
                Наши услуги
              </h2>
              <ul className="space-y-4">
                {[
                  'Покраска мебельных фасадов из МДФ',
                  'Поставка мебельных комплектующих',
                  'Индивидуальный подбор цветов',
                  'Консультации по выбору материалов',
                  'Работа с дизайнерами и производителями',
                  'Гибкие условия сотрудничества',
                ].map((service, index) => (
                  <li key={index} className="flex items-start gap-3 text-lg">
                    <Icon name="CheckCircle2" size={24} className="text-secondary mt-1 flex-shrink-0" />
                    <span className="text-foreground">{service}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Свяжитесь с нами
            </h2>
            <p className="text-xl text-muted-foreground">
              Оставьте заявку, и мы свяжемся с вами в ближайшее время
            </p>
          </div>

          <Card className="border-none shadow-2xl">
            <CardContent className="p-8 lg:p-12">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-semibold text-foreground">
                      Ваше имя *
                    </label>
                    <Input
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Иван Иванов"
                      className="h-12"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-semibold text-foreground">
                      Телефон *
                    </label>
                    <Input
                      id="phone"
                      required
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+7 (___) ___-__-__"
                      className="h-12"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-semibold text-foreground">
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="example@mail.ru"
                    className="h-12"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-semibold text-foreground">
                    Сообщение
                  </label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Расскажите о вашем проекте..."
                    className="min-h-32 resize-none"
                  />
                </div>

                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full bg-primary hover:bg-primary/90 text-white font-semibold h-14 text-lg"
                >
                  Отправить заявку
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="bg-foreground text-white py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <img 
                src="https://cdn.poehali.dev/files/f28982ee-c232-4da6-831a-f207ddd0c7f7.png" 
                alt="Карелия-Плит" 
                className="h-12 mb-4 brightness-0 invert"
              />
              <p className="text-white/70">
                Надёжный партнёр с 2009 года
              </p>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Контакты</h3>
              <div className="space-y-2 text-white/70">
                <p>Республика Карелия</p>
                <p>Телефон: +7 (XXX) XXX-XX-XX</p>
                <p>Email: info@kareliaplit.ru</p>
              </div>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Режим работы</h3>
              <div className="space-y-2 text-white/70">
                <p>Пн-Пт: 9:00 - 18:00</p>
                <p>Сб-Вс: выходной</p>
              </div>
            </div>
          </div>
          <div className="border-t border-white/20 pt-8 text-center text-white/70">
            <p>© 2024 ООО «Карелия-Плит». Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
