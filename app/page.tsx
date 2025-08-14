"use client"

import type React from "react"
import { useEffect } from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Phone, Shield, Users, Award, Clock, X, ChevronLeft, ChevronRight, Menu, Globe } from "lucide-react"

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
      title: "Biznesingiz va shaxsiy ishlaringiz uchun yuridik va buxgalteriya yordami",
      subtitle: "Ro'yxatdan o'tkazish, qo'llab-quvvatlash va manfaatlarni himoya qilish uchun kompleks yechimlar",
      quickResponse: "15 daqiqada javob beramiz",
      freeConsultation: "Birinchi maslahat bepul",
      formTitle: "BEPUL maslahat olish",
      formDescription: "Ariza qoldiring va professional maslahatni bepul oling",
    },
    services: {
      title: "Bizning xizmatlarimiz",
      subtitle: "Jismoniy va yuridik shaxslar uchun yuridik va buxgalteriya xizmatlarining to'liq spektri",
      consultationTitle: "Xizmatlar bo'yicha maslahat kerakmi?",
      consultationSubtitle: "Vaziyatingizni professional baholashni bepul oling",
      submitButton: "Ariza yuborish",
      services: [
        {
          title: "Biznesni ro'yxatdan o'tkazish va qo'llab-quvvatlash",
          description: "Kompaniyalarni ro'yxatdan o'tkazish, o'zgarishlar kiritish, tugatish, filiallar ochish",
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
          description: "Mehnat shartnomalari, nizolarni hal qilish, kadr hujjatlari",
          items: [
            "Mehnat shartnomalarini tuzish",
            "Mehnat nizolarini hal qilish",
            "Kadr hujjatlarini yuritish",
            "Mehnat huquqi bo'yicha maslahatlar",
          ],
        },
        {
          title: "Soliq va moliyaviy huquq",
          description: "Soliq rejalashtirish, tekshiruvlarni qo'llab-quvvatlash, e'tirozlar tayyorlash",
          items: [
            "Soliq rejalashtirish",
            "Soliq tekshiruvlarini qo'llab-quvvatlash",
            "E'tirozlar tayyorlash",
            "Soliqqa tortish bo'yicha maslahatlar",
          ],
        },
        {
          title: "Intellektual mulk",
          description: "Tovar belgilarini ro'yxatdan o'tkazish, mualliflik huquqlarini himoya qilish",
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
          description: "Faoliyat xususiyatlarini hisobga olgan holda har bir mijoz uchun shaxsiy yechimlar",
        },
        {
          title: "Tajribali jamoa",
          description: "2018 yildan beri ish tajribasi bo'lgan malakali yuristlar va buxgalterlar",
        },
        {
          title: "Maxfiylik",
          description: "Mijozlar ma'lumotlarini to'liq himoya qilish va tijoriy sirni saqlash",
        },
        {
          title: "O'zbekiston qonunchiligiga muvofiq ish",
          description: "Mahalliy qonunchilik va dolzarb o'zgarishlarni chuqur bilish",
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
      subtitle: "Vazifangizni tasvirlab bering — 15 daqiqada bog'lanamiz va dastlabki maslahatni bepul beramiz",
      formTitle: "Biz bilan BEPUL bog'laning",
      formDescription: "Savolingiz bo'yicha shaxsiy maslahatni bepul oling",
    },
    footer: {
      copyright: "© 2018 Konsulting.uz. Yuridik va buxgalteriya xizmatlari. Barcha huquqlar himoyalangan.",
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
      title: "Юридическая и бухгалтерская поддержка для вашего бизнеса и личных дел",
      subtitle: "Комплексные решения для регистрации, сопровождения и защиты интересов",
      quickResponse: "Ответим в течение 15 минут",
      freeConsultation: "Первая консультация без оплаты",
      formTitle: "Получить БЕСПЛАТНУЮ консультацию",
      formDescription: "Оставьте заявку и получите профессиональную консультацию без оплаты",
    },
    services: {
      title: "Наши услуги",
      subtitle: "Полный спектр юридических и бухгалтерских услуг для физических и юридических лиц",
      consultationTitle: "Нужна консультация по услугам?",
      consultationSubtitle: "Получите профессиональную оценку вашей ситуации без оплаты",
      submitButton: "Отправить заявку",
      services: [
        {
          title: "Регистрация и сопровождение бизнеса",
          description: "Регистрация компаний, внесение изменений, ликвидация, открытие филиалов",
          items: [
            "Регистрация ООО, АО, ИП",
            "Внесение изменений в учредительные документы",
            "Ликвидация предприятий",
            "Открытие филиалов и представительств",
          ],
        },
        {
          title: "Корпоративное сопровождение",
          description: "Абонентское обслуживание, подготовка документов и договоров",
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
          description: "Трудовые договоры, разрешение споров, кадровая документация",
          items: [
            "Составление трудовых договоров",
            "Разрешение трудовых споров",
            "Ведение кадровой документации",
            "Консультации по трудовому праву",
          ],
        },
        {
          title: "Налоговое и финансовое право",
          description: "Налоговое планирование, сопровождение проверок, подготовка возражений",
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
          description: "Персональные решения для каждого клиента с учетом специфики деятельности",
        },
        {
          title: "Опытная команда",
          description: "Квалифицированные юристы и бухгалтеры с опытом работы с 2018 года",
        },
        {
          title: "Конфиденциальность",
          description: "Полная защита данных клиентов и соблюдение коммерческой тайны",
        },
        {
          title: "Работа по законодательству Узбекистана",
          description: "Глубокое знание местного законодательства и актуальных изменений",
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
      subtitle: "Опишите вашу задачу — мы свяжемся в течение 15 минут и дадим первичную консультацию бесплатно",
      formTitle: "Связаться с нами БЕСПЛАТНО",
      formDescription: "Получите персональную консультацию по вашему вопросу без оплаты",
    },
    footer: {
      copyright: "© 2018 Konsulting.uz. Юридические и бухгалтерские услуги. Все права защищены.",
    },
    form: {
      namePlaceholder: "Ваше имя",
      phonePlaceholder: "+998 XX XXX-XX-XX",
      messagePlaceholder: "Опишите вашу задачу",
      submitButton: "Получить консультацию",
      submitting: "Отправляем...",
      nameError: "Введите ваше имя",
      phoneError: "Введите корректный номер телефона",
      successMessage: "Заявка отправлена! Мы свяжемся с вами в течение 15 минут.",
      errorMessage: "Ошибка при отправке заявки. Попробуйте еще раз.",
      guarantee: "⚡ Ответим в течение 15 минут • 💯 Первая консультация бесплатно",
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
}

// Phone validation for Uzbekistan format: +998 XX XXX-XX-XX
const validateUzbekPhone = (phone: string): boolean => {
  const phoneRegex = /^\+998\s\d{2}\s\d{3}-\d{2}-\d{2}$/
  return phoneRegex.test(phone)
}

// Format phone input as user types
const formatPhoneInput = (value: string): string => {
  // Remove all non-digits except +
  const digits = value.replace(/[^\d+]/g, "")

  // If it doesn't start with +998, add it
  if (!digits.startsWith("+998")) {
    return "+998 "
  }

  // Extract digits after +998
  const phoneDigits = digits.slice(4)

  // Format: +998 XX XXX-XX-XX
  let formatted = "+998"
  if (phoneDigits.length > 0) {
    formatted += " " + phoneDigits.slice(0, 2)
  }
  if (phoneDigits.length > 2) {
    formatted += " " + phoneDigits.slice(2, 5)
  }
  if (phoneDigits.length > 5) {
    formatted += "-" + phoneDigits.slice(5, 7)
  }
  if (phoneDigits.length > 7) {
    formatted += "-" + phoneDigits.slice(7, 9)
  }

  return formatted
}

interface ContactFormProps {
  title?: string
  description?: string
  size?: "small" | "large"
  onClose?: () => void
  isModal?: boolean
  onSuccess?: () => void
  language: "uz" | "ru"
}

function ContactForm({
  title,
  description,
  size = "small",
  onClose,
  isModal = false,
  onSuccess,
  language,
}: ContactFormProps) {
  const t = translations[language]
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("+998 ")
  const [message, setMessage] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [errors, setErrors] = useState<{ name?: string; phone?: string }>({})

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatPhoneInput(e.target.value)
    setPhone(formatted)

    // Clear phone error when user starts typing
    if (errors.phone) {
      setErrors((prev) => ({ ...prev, phone: undefined }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    const newErrors: { name?: string; phone?: string } = {}

    if (!name.trim()) {
      newErrors.name = t.form.nameError
    }

    if (!validateUzbekPhone(phone)) {
      newErrors.phone = t.form.phoneError
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }

    setIsSubmitting(true)

    // Simulate form submission
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000))
      alert(t.form.successMessage)
      setName("")
      setPhone("+998 ")
      setMessage("")
      setErrors({})
      if (onClose) onClose()
      if (onSuccess) onSuccess()
    } catch (error) {
      alert(t.form.errorMessage)
    } finally {
      setIsSubmitting(false)
    }
  }

  const cardContent = (
    <Card
      className={`${size === "large" ? "max-w-2xl mx-auto" : "max-w-md"} bg-white border-blue-100 ${isModal ? "w-full max-w-md" : ""}`}
    >
      <CardHeader className={`${size === "large" ? "text-center" : ""} ${isModal ? "relative text-center" : ""}`}>
        {isModal && onClose && (
          <button onClick={onClose} className="absolute right-4 top-4 text-gray-400 hover:text-gray-600 cursor-pointer">
            <X className="h-5 w-5" />
          </button>
        )}
        <CardTitle className="text-blue-900">{title || t.form.submitButton}</CardTitle>
        <div className="flex justify-center mt-2">
          <Badge className="bg-yellow-500 text-yellow-900 font-semibold px-3 py-1">🎁 {t.common.free}</Badge>
        </div>
        {description && <CardDescription className="text-gray-600">{description}</CardDescription>}
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Input
              type="text"
              placeholder={t.form.namePlaceholder}
              value={name}
              onChange={(e) => {
                setName(e.target.value)
                if (errors.name) setErrors((prev) => ({ ...prev, name: undefined }))
              }}
              className={`border-gray-300 focus:border-blue-500 focus:ring-blue-500 ${errors.name ? "border-red-500" : ""}`}
            />
            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
          </div>

          <div>
            <Input
              type="tel"
              placeholder={t.form.phonePlaceholder}
              value={phone}
              onChange={handlePhoneChange}
              className={`border-gray-300 focus:border-blue-500 focus:ring-blue-500 ${errors.phone ? "border-red-500" : ""}`}
            />
            {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
          </div>

          {(size === "large" || isModal) && (
            <div>
              <Textarea
                placeholder={t.form.messagePlaceholder}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="border-gray-300 focus:border-blue-500 focus:ring-blue-500 min-h-[100px]"
              />
            </div>
          )}

          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-blue-900 hover:bg-blue-800 text-white font-medium py-2 px-4 rounded-lg transition-colors cursor-pointer"
          >
            {isSubmitting ? t.form.submitting : t.form.submitButton}
          </Button>
          <p className="text-center text-sm text-gray-500 mt-2">{t.form.guarantee}</p>
        </form>
      </CardContent>
    </Card>
  )

  if (isModal) {
    return (
      <div
        className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center p-4 z-50"
        onClick={(e) => {
          if (e.target === e.currentTarget && onClose) {
            onClose()
          }
        }}
      >
        {cardContent}
      </div>
    )
  }

  return cardContent
}

function CountdownTimer({ language }: { language: "uz" | "ru" }) {
  const [timeLeft, setTimeLeft] = useState(10 * 60) // 10 minutes in seconds

  useEffect(() => {
    if (timeLeft <= 0) return

    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1)
    }, 1000)

    return () => clearInterval(timer)
  }, [timeLeft])

  const minutes = Math.floor(timeLeft / 60)
  const seconds = timeLeft % 60

  const timerText =
    language === "uz" ? "⏰ Chegirmali maslahat vaqti tugaydi:" : "⏰ Время скидочной консультации истекает:"

  if (timeLeft <= 0) {
    return null
  }

  return (
    <div className="text-center mb-6">
      <div className="inline-flex items-center bg-yellow-500 text-yellow-900 px-4 py-2 rounded-lg font-bold text-sm sm:text-base">
        {timerText} {String(minutes).padStart(2, "0")}:{String(seconds).padStart(2, "0")}
      </div>
    </div>
  )
}

export default function ConsultingPage() {
  const [language, setLanguage] = useState<"uz" | "ru">("uz")
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [showThankYou, setShowThankYou] = useState(false)

  const t = translations[language]

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % t.testimonials.items.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + t.testimonials.items.length) % t.testimonials.items.length)
  }

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMobileMenuOpen(false)
  }

  const ThankYouPage = () => (
    <div className="fixed inset-0 bg-white z-50 flex items-center justify-center p-4">
      <div className="max-w-md mx-auto text-center">
        <div className="mb-6">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-blue-900 mb-2">{t.thankYou.title}</h2>
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
            onClick={() => setShowThankYou(false)}
            className="bg-blue-900 hover:bg-blue-800 text-white px-6 py-2 cursor-pointer"
          >
            {t.thankYou.backButton}
          </Button>
        </div>
      </div>
    </div>
  )

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {showThankYou && <ThankYouPage />}

      <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-blue-100 z-40">
        <div className="max-w-6xl mx-auto px-2 sm:px-4">
          <div className="flex items-center justify-between h-14 sm:h-16">
            <div className="flex items-center">
              <div className="text-base sm:text-xl font-bold text-blue-900">{t.navbar.brand}</div>
            </div>
            <div className="hidden md:flex items-center space-x-4 lg:space-x-8">
              <button
                onClick={() => scrollToSection("services")}
                className="text-sm lg:text-base text-gray-700 hover:text-blue-900 transition-colors cursor-pointer"
              >
                {t.navbar.services}
              </button>
              <button
                onClick={() => scrollToSection("advantages")}
                className="text-sm lg:text-base text-gray-700 hover:text-blue-900 transition-colors cursor-pointer"
              >
                {t.navbar.advantages}
              </button>
              <button
                onClick={() => scrollToSection("testimonials")}
                className="text-sm lg:text-base text-gray-700 hover:text-blue-900 transition-colors cursor-pointer"
              >
                {t.navbar.testimonials}
              </button>
              <button
                onClick={() => scrollToSection("faq")}
                className="text-sm lg:text-base text-gray-700 hover:text-blue-900 transition-colors cursor-pointer"
              >
                {t.navbar.faq}
              </button>
              <div className="flex items-center space-x-2">
                <Globe className="h-4 w-4 text-gray-600" />
                <button
                  onClick={() => setLanguage("uz")}
                  className={`text-sm px-2 py-1 rounded cursor-pointer transition-colors ${
                    language === "uz" ? "bg-blue-900 text-white" : "text-gray-700 hover:text-blue-900"
                  }`}
                >
                  UZ
                </button>
                <button
                  onClick={() => setLanguage("ru")}
                  className={`text-sm px-2 py-1 rounded cursor-pointer transition-colors ${
                    language === "ru" ? "bg-blue-900 text-white" : "text-gray-700 hover:text-blue-900"
                  }`}
                >
                  RU
                </button>
              </div>
              <Button
                onClick={() => setIsModalOpen(true)}
                className="bg-blue-900 hover:bg-blue-800 text-white px-3 lg:px-6 py-2 text-sm lg:text-base cursor-pointer"
              >
                {t.navbar.consultation}
              </Button>
            </div>
            <div className="md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-gray-700 hover:text-blue-900 transition-colors cursor-pointer p-2"
              >
                <Menu className="h-5 w-5 sm:h-6 sm:w-6" />
              </button>
            </div>
          </div>
          {isMobileMenuOpen && (
            <div className="md:hidden border-t border-blue-100 bg-white">
              <div className="px-2 pt-2 pb-3 space-y-1">
                <button
                  onClick={() => scrollToSection("services")}
                  className="block px-3 py-2 text-sm text-gray-700 hover:text-blue-900 transition-colors w-full text-left cursor-pointer"
                >
                  {t.navbar.services}
                </button>
                <button
                  onClick={() => scrollToSection("advantages")}
                  className="block px-3 py-2 text-sm text-gray-700 hover:text-blue-900 transition-colors w-full text-left cursor-pointer"
                >
                  {t.navbar.advantages}
                </button>
                <button
                  onClick={() => scrollToSection("testimonials")}
                  className="block px-3 py-2 text-sm text-gray-700 hover:text-blue-900 transition-colors w-full text-left cursor-pointer"
                >
                  {t.navbar.testimonials}
                </button>
                <button
                  onClick={() => scrollToSection("faq")}
                  className="block px-3 py-2 text-sm text-gray-700 hover:text-blue-900 transition-colors w-full text-left cursor-pointer"
                >
                  {t.navbar.faq}
                </button>
                <div className="flex items-center px-3 py-2 space-x-2">
                  <Globe className="h-4 w-4 text-gray-600" />
                  <button
                    onClick={() => setLanguage("uz")}
                    className={`text-sm px-2 py-1 rounded cursor-pointer transition-colors ${
                      language === "uz" ? "bg-blue-900 text-white" : "text-gray-700 hover:text-blue-900"
                    }`}
                  >
                    UZ
                  </button>
                  <button
                    onClick={() => setLanguage("ru")}
                    className={`text-sm px-2 py-1 rounded cursor-pointer transition-colors ${
                      language === "ru" ? "bg-blue-900 text-white" : "text-gray-700 hover:text-blue-900"
                    }`}
                  >
                    RU
                  </button>
                </div>
                <Button
                  onClick={() => setIsModalOpen(true)}
                  className="bg-blue-900 hover:bg-blue-800 text-white w-full mt-2 text-sm cursor-pointer"
                >
                  {t.navbar.consultation}
                </Button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-900 to-blue-800 text-white py-12 sm:py-16 lg:py-20 px-2 sm:px-4 pt-20 sm:pt-24 lg:pt-32">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div>
              <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 sm:mb-6 leading-tight">
                {t.hero.title}
              </h1>
              <p className="text-base sm:text-lg lg:text-xl mb-6 sm:mb-8 text-blue-100">{t.hero.subtitle}</p>
              <div className="space-y-2 sm:space-y-3 text-blue-100">
                <div className="flex items-center space-x-3 sm:space-x-4">
                  <Phone className="h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0" />
                  <span className="text-sm sm:text-base">{t.hero.quickResponse}</span>
                </div>
                <div className="flex items-center space-x-3 sm:space-x-4">
                  <Badge className="bg-yellow-500 text-yellow-900 font-semibold px-2 py-1 text-xs sm:text-sm flex-shrink-0">
                    {t.common.free}
                  </Badge>
                  <span className="text-sm sm:text-base">{t.hero.freeConsultation}</span>
                </div>
              </div>
            </div>
            <div className="mt-8 lg:mt-0 flex flex-col items-center">
              <CountdownTimer language={language} />
              <ContactForm
                title={t.hero.formTitle}
                description={t.hero.formDescription}
                onSuccess={() => setShowThankYou(true)}
                language={language}
              />
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-12 sm:py-16 lg:py-20 px-2 sm:px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-blue-900 mb-3 sm:mb-4">
              {t.services.title}
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              {t.services.subtitle}
            </p>
          </div>

          <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
            {t.services.services.map((service, index) => (
              <Card key={index} className="border-blue-100 hover:shadow-lg transition-shadow">
                <CardHeader className="pb-3 sm:pb-6">
                  <CardTitle className="text-blue-900 text-lg sm:text-xl">{service.title}</CardTitle>
                  <CardDescription className="text-gray-600 text-sm sm:text-base">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start">
                        <Badge
                          variant="outline"
                          className="mr-2 mt-0.5 text-xs bg-blue-50 text-blue-700 border-blue-200 flex-shrink-0"
                        >
                          ✓
                        </Badge>
                        <span className="text-gray-700 text-sm sm:text-base">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 sm:mt-16 text-center px-4">
            <h3 className="text-xl sm:text-2xl font-bold text-blue-900 mb-3 sm:mb-4">{t.services.consultationTitle}</h3>
            <p className="text-gray-600 mb-6 sm:mb-8 text-sm sm:text-base">{t.services.consultationSubtitle}</p>
            <Button
              onClick={() => setIsModalOpen(true)}
              className="bg-blue-900 hover:bg-blue-800 text-white font-medium py-2 sm:py-3 px-6 sm:px-8 rounded-lg text-base sm:text-lg transition-colors cursor-pointer"
            >
              {t.services.submitButton}
            </Button>
          </div>
        </div>
      </section>

      <section id="advantages" className="py-12 sm:py-16 lg:py-20 px-2 sm:px-4 bg-blue-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-blue-900 mb-3 sm:mb-4">
              {t.advantages.title}
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600">{t.advantages.subtitle}</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {t.advantages.items.map((advantage, index) => (
              <Card key={index} className="text-center border-blue-100 bg-white hover:shadow-lg transition-shadow">
                <CardContent className="pt-6 sm:pt-8 pb-6 sm:pb-8 px-4">
                  <div className="flex justify-center mb-3 sm:mb-4">
                    {index === 0 && <Users className="h-8 w-8 text-yellow-600" />}
                    {index === 1 && <Award className="h-8 w-8 text-yellow-600" />}
                    {index === 2 && <Shield className="h-8 w-8 text-yellow-600" />}
                    {index === 3 && <Clock className="h-8 w-8 text-yellow-600" />}
                  </div>
                  <h3 className="text-base sm:text-lg font-semibold text-blue-900 mb-2 sm:mb-3">{advantage.title}</h3>
                  <p className="text-gray-700 text-xs sm:text-sm leading-relaxed">{advantage.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="testimonials" className="py-12 sm:py-16 lg:py-20 px-2 sm:px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-blue-900 mb-3 sm:mb-4">
              {t.testimonials.title}
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600">{t.testimonials.subtitle}</p>
          </div>

          <div className="relative max-w-6xl mx-auto">
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-300 ease-in-out lg:hidden"
                style={{ transform: `translateX(-${currentTestimonial * 100}%)` }}
              >
                {t.testimonials.items.map((testimonial, index) => (
                  <div key={index} className="w-full flex-shrink-0 px-2">
                    <Card className="border-blue-100 bg-white shadow-lg h-full">
                      <CardContent className="pt-6 sm:pt-8 pb-6 sm:pb-8 text-center h-full flex flex-col justify-between">
                        <div>
                          <div className="flex justify-center mb-3 sm:mb-4">
                            {[...Array(5)].map((_, i) => (
                              <span key={i} className="text-yellow-500 text-lg sm:text-xl">
                                ★
                              </span>
                            ))}
                          </div>
                          <p className="text-gray-700 mb-4 sm:mb-6 text-sm sm:text-base italic leading-relaxed">
                            "{testimonial.text}"
                          </p>
                        </div>
                        <div className="border-t pt-3 sm:pt-4">
                          <p className="font-semibold text-blue-900 text-sm sm:text-base">{testimonial.name}</p>
                          <p className="text-gray-600 text-xs sm:text-sm">{testimonial.company}</p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>

              <div
                className="hidden lg:flex transition-transform duration-300 ease-in-out"
                style={{ transform: `translateX(-${Math.floor(currentTestimonial / 3) * 100}%)` }}
              >
                {Array.from({ length: Math.ceil(t.testimonials.items.length / 3) }).map((_, groupIndex) => (
                  <div key={groupIndex} className="w-full flex-shrink-0 flex space-x-4">
                    {t.testimonials.items.slice(groupIndex * 3, (groupIndex + 1) * 3).map((testimonial, index) => (
                      <div key={index} className="w-1/3 px-2">
                        <Card className="border-blue-100 bg-white shadow-lg h-full">
                          <CardContent className="pt-8 pb-8 text-center h-full flex flex-col justify-between">
                            <div>
                              <div className="flex justify-center mb-4">
                                {[...Array(5)].map((_, i) => (
                                  <span key={i} className="text-yellow-500 text-xl">
                                    ★
                                  </span>
                                ))}
                              </div>
                              <p className="text-gray-700 mb-6 text-base italic leading-relaxed">
                                "{testimonial.text}"
                              </p>
                            </div>
                            <div className="border-t pt-4">
                              <p className="font-semibold text-blue-900">{testimonial.name}</p>
                              <p className="text-gray-600 text-sm">{testimonial.company}</p>
                            </div>
                          </CardContent>
                        </Card>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>

            <button
              onClick={prevTestimonial}
              className="absolute left-0 sm:left-2 top-1/2 transform -translate-y-1/2 bg-white shadow-lg rounded-full p-2 sm:p-3 hover:bg-gray-50 transition-colors z-10 cursor-pointer"
              aria-label={t.common.prevTestimonial}
            >
              <ChevronLeft className="h-4 w-4 sm:h-6 sm:w-6 text-blue-900" />
            </button>

            <button
              onClick={nextTestimonial}
              className="absolute right-0 sm:right-2 top-1/2 transform -translate-y-1/2 bg-white shadow-lg rounded-full p-2 sm:p-3 hover:bg-gray-50 transition-colors z-10 cursor-pointer"
              aria-label={t.common.nextTestimonial}
            >
              <ChevronRight className="h-4 w-4 sm:h-6 sm:w-6 text-blue-900" />
            </button>

            <div className="flex justify-center mt-6 sm:mt-8 space-x-2">
              {(typeof window !== "undefined" && window.innerWidth >= 1024
                ? Array.from({ length: Math.ceil(t.testimonials.items.length / 3) })
                : t.testimonials.items
              ).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-colors cursor-pointer ${
                    (
                      typeof window !== "undefined" && window.innerWidth >= 1024
                        ? index === Math.floor(currentTestimonial / 3)
                        : index === currentTestimonial
                    )
                      ? "bg-blue-900"
                      : "bg-gray-300"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="faq" className="py-12 sm:py-16 lg:py-20 px-2 sm:px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-blue-900 mb-3 sm:mb-4">{t.faq.title}</h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600">{t.faq.subtitle}</p>
          </div>

          <div className="space-y-4 sm:space-y-6">
            {t.faq.items.map((faq, index) => (
              <Card key={index} className="border-blue-100 hover:shadow-md transition-shadow">
                <CardHeader className="pb-3 sm:pb-6">
                  <CardTitle className="text-base sm:text-lg text-blue-900">{faq.question}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 text-sm sm:text-base">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-2 sm:px-4 bg-gradient-to-r from-blue-900 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6">{t.finalCta.title}</h2>
          <p className="text-base sm:text-lg lg:text-xl mb-8 sm:mb-12 text-blue-100 px-4">{t.finalCta.subtitle}</p>

          <CountdownTimer language={language} />

          <ContactForm
            title={t.finalCta.formTitle}
            description={t.finalCta.formDescription}
            size="large"
            onSuccess={() => setShowThankYou(true)}
            language={language}
          />

          <div className="mt-8 sm:mt-12 flex flex-col sm:flex-row justify-center items-center space-y-3 sm:space-y-0 sm:space-x-6 lg:space-x-8 text-blue-100 px-4">
            <div className="flex items-center">
              <Phone className="h-4 w-4 sm:h-5 sm:w-5 mr-2 flex-shrink-0" />
              <span className="text-sm sm:text-base">{t.common.quickResponse}</span>
            </div>
            <div className="flex items-center">
              <Badge className="bg-yellow-500 text-yellow-900 font-semibold px-2 py-1 text-xs sm:text-sm mr-2 flex-shrink-0">
                {t.common.free}
              </Badge>
              <span className="text-sm sm:text-base">{t.hero.freeConsultation}</span>
            </div>
            <div className="flex items-center">
              <Shield className="h-4 w-4 sm:h-5 sm:w-5 mr-2 flex-shrink-0" />
              <span className="text-sm sm:text-base">{t.common.confidentiality}</span>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-blue-900 text-white py-6 sm:py-8 px-2 sm:px-4">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-blue-200 text-xs sm:text-sm lg:text-base">{t.footer.copyright}</p>
        </div>
      </footer>

      {isModalOpen && (
        <ContactForm
          title={t.hero.formTitle}
          description={t.hero.formDescription}
          isModal={true}
          onClose={() => setIsModalOpen(false)}
          onSuccess={() => setShowThankYou(true)}
          language={language}
        />
      )}
    </div>
  )
}
