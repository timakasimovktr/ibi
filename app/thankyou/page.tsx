"use client";

import type React from "react";
import { use, useEffect } from "react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import Cookies from "js-cookie";

const translations = {
  uz: {
    navbar: {
      brand: "Konsulting.uz",
      services: "Xizmatlar",
      advantages: "Afzalliklar",
      testimonials: "Mijozlar fikri",
      faq: "Savollar",
      consultation: "Maslahat",
    },
    hero: {
      title:
        "Biznesingiz va shaxsiy ishlaringiz uchun yuridik va buxgalteriya yordami",
      subtitle:
        "Ro'yxatdan o'tkazish, qo'llab-quvvatlash va manfaatlarni himoya qilish uchun kompleks yechimlar",
      quickResponse: "15 daqiqada javob beramiz",
      freeConsultation: "Birinchi maslahat bepul",
      formTitle: "BEPUL maslahat olish",
      formDescription: "Ariza qoldiring va professional maslahatni bepul oling",
    },
    services: {
      title: "Bizning xizmatlarimiz",
      subtitle:
        "Jismoniy va yuridik shaxslar uchun yuridik va buxgalteriya xizmatlarining to'liq spektri",
      consultationTitle: "Xizmatlar bo'yicha maslahat kerakmi?",
      consultationSubtitle:
        "Vaziyatingizni professional baholashni bepul oling",
      submitButton: "Ariza yuborish",
      services: [
        {
          title: "Biznesni ro'yxatdan o'tkazish va qo'llab-quvvatlash",
          description:
            "Kompaniyalarni ro'yxatdan o'tkazish, o'zgarishlar kiritish, tugatish, filiallar ochish",
          items: [
            "MChJ, AJ, YaTT ro'yxatdan o'tkazish",
            "Ta'sis hujjatlariga o'zgarishlar kiritish",
            "Korxonalarni tugatish",
            "Filial va vakolatxonalar ochish",
          ],
        },
        {
          title: "Korporativ qo'llab-quvvatlash",
          description: "Abonent xizmati, hujjatlar va shartnomalar tayyorlash",
          items: [
            "Abonent yuridik xizmati",
            "Korporativ hujjatlar tayyorlash",
            "Shartnomalar tuzish",
            "Korporativ hujjat aylanishini yuritish",
          ],
        },
        {
          title: "Sud va sudgacha tartibga solish",
          description: "Da'vo ishlari, mediatsiya, sudda vakillik",
          items: [
            "Da'vo va shikoyatlar tuzish",
            "Sudgacha nizolarni hal qilish",
            "Sudlarda vakillik",
            "Mediatsiya va arbitraj",
          ],
        },
        {
          title: "Mehnat huquqi va kadrlar qo'llab-quvvatlashi",
          description:
            "Mehnat shartnomalari, nizolarni hal qilish, kadr hujjatlari",
          items: [
            "Mehnat shartnomalarini tuzish",
            "Mehnat nizolarini hal qilish",
            "Kadr hujjatlarini yuritish",
            "Mehnat huquqi bo'yicha maslahatlar",
          ],
        },
        {
          title: "Soliq va moliyaviy huquq",
          description:
            "Soliq rejalashtirish, tekshiruvlarni qo'llab-quvvatlash, e'tirozlar tayyorlash",
          items: [
            "Soliq rejalashtirish",
            "Soliq tekshiruvlarini qo'llab-quvvatlash",
            "E'tirozlar tayyorlash",
            "Soliqqa tortish bo'yicha maslahatlar",
          ],
        },
        {
          title: "Intellektual mulk",
          description:
            "Tovar belgilarini ro'yxatdan o'tkazish, mualliflik huquqlarini himoya qilish",
          items: [
            "Tovar belgilarini ro'yxatdan o'tkazish",
            "Mualliflik huquqlarini himoya qilish",
            "Ixtirolarni patentlash",
            "Litsenziya shartnomalari",
          ],
        },
        {
          title: "Kompleks paketlar",
          description: "Biznesning turli ehtiyojlari uchun tayyor yechimlar",
          items: [
            "Asosiy paket - maslahatlar va hujjat aylanishi",
            "Standart paket - to'liq yuridik qo'llab-quvvatlash",
            "Premium paket - shaxsiy yurist va buxgalter",
          ],
        },
      ],
    },
    advantages: {
      title: "Nima uchun bizni tanlashadi",
      subtitle: "Professional yondashuv va yuqori sifatli xizmatlar",
      items: [
        {
          title: "Individual yondashuv",
          description:
            "Faoliyat xususiyatlarini hisobga olgan holda har bir mijoz uchun shaxsiy yechimlar",
        },
        {
          title: "Tajribali jamoa",
          description:
            "2018 yildan beri ish tajribasi bo'lgan malakali yuristlar va buxgalterlar",
        },
        {
          title: "Maxfiylik",
          description:
            "Mijozlar ma'lumotlarini to'liq himoya qilish va tijoriy sirni saqlash",
        },
        {
          title: "O'zbekiston qonunchiligiga muvofiq ish",
          description:
            "Mahalliy qonunchilik va dolzarb o'zgarishlarni chuqur bilish",
        },
      ],
    },
    testimonials: {
      title: "Mijozlar fikri",
      subtitle: "Mijozlarimiz biz haqimizda nima deyishadi",
      items: [
        {
          name: "Nurber Abdullayev",
          company: "MChJ 'Phoenix Core Laboratory'",
          text: "Ajoyib jamoa! Kompaniyani tez ro'yxatdan o'tkazishga va barcha jarayonlarni sozlashga yordam berishdi. Xizmatdan juda mamnunmiz.",
        },
        {
          name: "Nigora Rahimova",
          company: "YaTT",
          text: "Meni yarim yil azob qilgan murakkab soliq masalasini hal qilishdi. Professional yondashuv va oqilona narxlar.",
        },
        {
          name: "Sherzod Usmanov",
          company: "AJ 'Stroy Invest'",
          text: "Korporativ qo'llab-quvvatlash uchun doimiy foydalanib kelamiz. Har doim tez va sifatli.",
        },
        {
          name: "Dilorom Ahmedova",
          company: "MChJ 'Farmatsiya'",
          text: "Farmatsevtik faoliyat uchun barcha kerakli litsenziyalarni olishga yordam berishdi. Bizga oylar davomidagi ishni tejashdi.",
        },
        {
          name: "Baxtiyor Yusupov",
          company: "YaTT 'Qurilish materiallari'",
          text: "Bizning buxgalteriyamizni 2 yildan beri olib borishadi. Soliq organlari bilan hech qanday muammo yo'q, barcha hisobotlar o'z vaqtida topshiriladi.",
        },
        {
          name: "Malika Tursunova",
          company: "MChJ 'Eksport-Import'",
          text: "Tashqi iqtisodiy faoliyat bo'yicha ajoyib mutaxassislar. Eksport uchun barcha hujjatlarni to'g'ri rasmiylashtirish uchun yordam berishdi.",
        },
      ],
    },
    faq: {
      title: "Tez-tez beriladigan savollar",
      subtitle: "Mijozlarimizning mashhur savollariga javoblar",
      items: [
        {
          question: "MChJ ro'yxatdan o'tkazish qancha vaqt oladi?",
          answer:
            "Odatda MChJ ro'yxatdan o'tkazish jarayoni barcha kerakli hujjatlar topshirilgan kundan boshlab 1-3 ish kuni davom etadi.",
        },
        {
          question: "YaTT ro'yxatdan o'tkazish uchun qanday hujjatlar kerak?",
          answer:
            "YaTT ro'yxatdan o'tkazish uchun kerak: pasport, yashash joyi haqida ma'lumotnoma, belgilangan shakldagi ariza va davlat bojini to'lash kvitansiyasi.",
        },
        {
          question: "Buxgalteriya yuritish xizmatlarini taqdim etasizmi?",
          answer:
            "Ha, biz buxgalteriya xizmatlarining to'liq spektrini taqdim etamiz: hisobni yuritish, hisobotlarni tayyorlash, soliq rejalashtirish.",
        },
        {
          question: "Xorijiy kompaniyalar bilan ishlaysizmi?",
          answer:
            "Ha, biz xorijiy kompaniyalarga O'zbekistonda ro'yxatdan o'tish, litsenziya olish va faoliyat yuritish bo'yicha yordam beramiz.",
        },
        {
          question: "Xizmatlaringiz qancha turadi?",
          answer:
            "Narx vazifaning murakkabligiga bog'liq. Dastlabki maslahat bepul, shundan so'ng aniq smeta taqdim etamiz.",
        },
      ],
    },
    finalCta: {
      title: "BEPUL maslahatni hoziroq oling!",
      subtitle:
        "Vazifangizni tasvirlab bering — 15 daqiqada bog'lanamiz va dastlabki maslahatni bepul beramiz",
      formTitle: "Biz bilan BEPUL bog'laning",
      formDescription: "Savolingiz bo'yicha shaxsiy maslahatni bepul oling",
    },
    footer: {
      copyright:
        "© 2018 Konsulting.uz. Yuridik va buxgalteriya xizmatlari. Barcha huquqlar himoyalangan.",
    },
    form: {
      namePlaceholder: "Ismingiz",
      phonePlaceholder: "+998 XX XXX-XX-XX",
      messagePlaceholder: "Vazifangizni tasvirlab bering",
      submitButton: "Maslahat olish",
      submitting: "Yuborilmoqda...",
      nameError: "Ismingizni kiriting",
      phoneError: "To'g'ri telefon raqamini kiriting",
      successMessage: "Ariza yuborildi! 15 daqiqada siz bilan bog'lanamiz.",
      errorMessage: "Ariza yuborishda xatolik. Qayta urinib ko'ring.",
      guarantee: "⚡ 15 daqiqada javob • 💯 Birinchi maslahat bepul",
    },
    thankYou: {
      title: "Ariza uchun rahmat!",
      subtitle:
        "Arizangiz muvaffaqiyatli yuborildi. Mutaxassisimiz 15 daqiqada siz bilan bog'lanib, bepul maslahat beradi.",
      nextSteps: "Keyingi qadamlar:",
      step1: "• Vazifangizni o'rganamiz",
      step2: "• Dastlabki tavsiyalarni tayyorlaymiz",
      step3: "• Batafsil muhokama uchun siz bilan bog'lanamiz",
      backButton: "Saytga qaytish",
    },
    common: {
      free: "BEPUL",
      quickResponse: "Tez javob",
      confidentiality: "Maxfiylik",
      prevTestimonial: "Oldingi fikr",
      nextTestimonial: "Keyingi fikr",
    },
  },
  ru: {
    navbar: {
      brand: "Konsulting.uz",
      services: "Услуги",
      advantages: "Преимущества",
      testimonials: "Отзывы",
      faq: "Вопросы",
      consultation: "Консультация",
    },
    hero: {
      title:
        "Юридическая и бухгалтерская поддержка для вашего бизнеса и личных дел",
      subtitle:
        "Комплексные решения для регистрации, сопровождения и защиты интересов",
      quickResponse: "Ответим в течение 15 минут",
      freeConsultation: "Первая консультация без оплаты",
      formTitle: "Получить БЕСПЛАТНУЮ консультацию",
      formDescription:
        "Оставьте заявку и получите профессиональную консультацию без оплаты",
    },
    services: {
      title: "Наши услуги",
      subtitle:
        "Полный спектр юридических и бухгалтерских услуг для физических и юридических лиц",
      consultationTitle: "Нужна консультация по услугам?",
      consultationSubtitle:
        "Получите профессиональную оценку вашей ситуации без оплаты",
      submitButton: "Отправить заявку",
      services: [
        {
          title: "Регистрация и сопровождение бизнеса",
          description:
            "Регистрация компаний, внесение изменений, ликвидация, открытие филиалов",
          items: [
            "Регистрация ООО, АО, ИП",
            "Внесение изменений в учредительные документы",
            "Ликвидация предприятий",
            "Открытие филиалов и представительств",
          ],
        },
        {
          title: "Корпоративное сопровождение",
          description:
            "Абонентское обслуживание, подготовка документов и договоров",
          items: [
            "Абонентское юридическое обслуживание",
            "Подготовка корпоративных документов",
            "Составление договоров",
            "Ведение корпоративного документооборота",
          ],
        },
        {
          title: "Судебное и досудебное урегулирование",
          description: "Претензионная работа, медиация, представление в суде",
          items: [
            "Составление претензий и жалоб",
            "Досудебное урегулирование споров",
            "Представление в судах",
            "Медиация и арбитраж",
          ],
        },
        {
          title: "Трудовое право и кадровое сопровождение",
          description:
            "Трудовые договоры, разрешение споров, кадровая документация",
          items: [
            "Составление трудовых договоров",
            "Разрешение трудовых споров",
            "Ведение кадровой документации",
            "Консультации по трудовому праву",
          ],
        },
        {
          title: "Налоговое и финансовое право",
          description:
            "Налоговое планирование, сопровождение проверок, подготовка возражений",
          items: [
            "Налоговое планирование",
            "Сопровождение налоговых проверок",
            "Подготовка возражений",
            "Консультации по налогообложению",
          ],
        },
        {
          title: "Интеллектуальная собственность",
          description: "Регистрация товарных знаков, защита авторских прав",
          items: [
            "Регистрация товарных знаков",
            "Защита авторских прав",
            "Патентование изобретений",
            "Лицензионные договоры",
          ],
        },
        {
          title: "Комплексные пакеты",
          description: "Готовые решения для разных потребностей бизнеса",
          items: [
            "Базовый пакет - консультации и документооборот",
            "Стандартный пакет - полное юридическое сопровождение",
            "Премиум пакет - персональный юрист и бухгалтер",
          ],
        },
      ],
    },
    advantages: {
      title: "Почему выбирают нас",
      subtitle: "Профессиональный подход и высокое качество услуг",
      items: [
        {
          title: "Индивидуальный подход",
          description:
            "Персональные решения для каждого клиента с учетом специфики деятельности",
        },
        {
          title: "Опытная команда",
          description:
            "Квалифицированные юристы и бухгалтеры с опытом работы с 2018 года",
        },
        {
          title: "Конфиденциальность",
          description:
            "Полная защита данных клиентов и соблюдение коммерческой тайны",
        },
        {
          title: "Работа по законодательству Узбекистана",
          description:
            "Глубокое знание местного законодательства и актуальных изменений",
        },
      ],
    },
    testimonials: {
      title: "Отзывы клиентов",
      subtitle: "Что говорят о нас наши клиенты",
      items: [
        {
          name: "Нурбек Абдуллаев",
          company: "ООО 'Phoenix Core Laboratory'",
          text: "Отличная команда! Помогли быстро зарегистрировать компанию и настроить все процессы. Очень довольны сервисом.",
        },
        {
          name: "Нигора Рахимова",
          company: "ИП",
          text: "Решили сложный налоговый вопрос, который мучил меня полгода. Профессиональный подход и разумные цены.",
        },
        {
          name: "Шерзод Усманов",
          company: "АО 'Строй Инвест'",
          text: "Постоянно пользуемся услугами для корпоративного сопровождения. Всегда оперативно и качественно.",
        },
        {
          name: "Дилором Ахмедова",
          company: "ООО 'Фармация'",
          text: "Помогли получить все необходимые лицензии для фармацевтической деятельности. Сэкономили нам месяцы работы.",
        },
        {
          name: "Бахтиёр Юсупов",
          company: "ИП 'Строительные материалы'",
          text: "Ведут нашу бухгалтерию уже 2 года. Никаких проблем с налоговой, все отчеты сдаются вовремя.",
        },
        {
          name: "Малика Турсунова",
          company: "ООО 'Экспорт-Импорт'",
          text: "Отличные специалисты по внешнеэкономической деятельности. Помогли правильно оформить все документы для экспорта.",
        },
      ],
    },
    faq: {
      title: "Часто задаваемые вопросы",
      subtitle: "Ответы на популярные вопросы наших клиентов",
      items: [
        {
          question: "Сколько времени занимает регистрация ООО?",
          answer:
            "Обычно процесс регистрации ООО занимает 1-3 рабочих дней с момента подачи всех необходимых документов.",
        },
        {
          question: "Какие документы нужны для регистрации ИП?",
          answer:
            "Для регистрации ИП необходимы: паспорт, справка о месте жительства, заявление установленной формы и квитанция об уплате госпошлины.",
        },
        {
          question: "Предоставляете ли вы услуги по ведению бухгалтерии?",
          answer:
            "Да, мы предоставляем полный спектр бухгалтерских услуг: ведение учета, подготовка отчетности, налоговое планирование.",
        },
        {
          question: "Работаете ли вы с иностранными компаниями?",
          answer:
            "Да, мы помогаем иностранным компаниям с регистрацией в Узбекистане, получением лицензий и ведением деятельности.",
        },
        {
          question: "Какова стоимость ваших услуг?",
          answer:
            "Стоимость зависит от сложности задачи. Первичная консультация бесплатная, после чего мы предоставим точную смету.",
        },
      ],
    },
    finalCta: {
      title: "Получите БЕСПЛАТНУЮ консультацию прямо сейчас!",
      subtitle:
        "Опишите вашу задачу — мы свяжемся в течение 15 минут и дадим первичную консультацию бесплатно",
      formTitle: "Связаться с нами БЕСПЛАТНО",
      formDescription:
        "Получите персональную консультацию по вашему вопросу без оплаты",
    },
    footer: {
      copyright:
        "© 2018 Konsulting.uz. Юридические и бухгалтерские услуги. Все права защищены.",
    },
    form: {
      namePlaceholder: "Ваше имя",
      phonePlaceholder: "+998 XX XXX-XX-XX",
      messagePlaceholder: "Опишите вашу задачу",
      submitButton: "Получить консультацию",
      submitting: "Отправляем...",
      nameError: "Введите ваше имя",
      phoneError: "Введите корректный номер телефона",
      successMessage:
        "Заявка отправлена! Мы свяжемся с вами в течение 15 минут.",
      errorMessage: "Ошибка при отправке заявки. Попробуйте еще раз.",
      guarantee:
        "⚡ Ответим в течение 15 минут • 💯 Первая консультация бесплатно",
    },
    thankYou: {
      title: "Спасибо за заявку!",
      subtitle:
        "Ваша заявка успешно отправлена. Наш специалист свяжется с вами в течение 15 минут для бесплатной консультации.",
      nextSteps: "Что дальше?",
      step1: "• Мы изучим вашу задачу",
      step2: "• Подготовим предварительные рекомендации",
      step3: "• Свяжемся с вами для детального обсуждения",
      backButton: "Вернуться на сайт",
    },
    common: {
      free: "БЕСПЛАТНО",
      quickResponse: "Быстрый ответ",
      confidentiality: "Конфиденциальность",
      prevTestimonial: "Предыдущий отзыв",
      nextTestimonial: "Следующий отзыв",
    },
  },
};

const Thankyou = () => {
  const [language, setLanguage] = useState<"uz" | "ru">("uz");

  const t = translations[language as keyof typeof translations];
  if (typeof window !== "undefined") {
    useEffect(() => {
      setLanguage(Cookies.get("language") as "uz" | "ru");
    }, [Cookies]);
  }

  return (
    <div className="fixed inset-0 bg-white z-50 flex items-center justify-center p-4">
      <div className="max-w-md mx-auto text-center">
        <div className="mb-6">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg
              className="w-8 h-8 text-green-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-blue-900 mb-2">
            {t.thankYou.title}
          </h2>
          <p className="text-gray-600 mb-6">{t.thankYou.subtitle}</p>
          <div className="bg-blue-50 p-4 rounded-lg mb-6">
            <p className="text-sm text-blue-800">
              <strong>{t.thankYou.nextSteps}</strong>
              <br />
              {t.thankYou.step1}
              <br />
              {t.thankYou.step2}
              <br />
              {t.thankYou.step3}
            </p>
          </div>
          <Button
            onClick={() => {
              window.location.href = "/";
            }}
            className="bg-blue-900 hover:bg-blue-800 text-white px-6 py-2 cursor-pointer"
          >
            {t.thankYou.backButton}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Thankyou;
