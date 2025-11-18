import { ArrowUpRight, ArrowRight } from 'lucide-react'

export default function Home() {
  return (
    <main className="bg-[#EEECE8] text-[#1A2B45]">
      {/* Hero Section */}
      <header className="relative min-h-screen px-6 py-12 md:px-12 lg:px-24">
        <div className="mx-auto max-w-7xl">
          <p className="mb-8 text-sm uppercase tracking-wider text-[#1A2B45]/60 md:text-base">
            [Гиды и продюсеры путешествий]
          </p>
          
          <h1 className="mb-8 font-bold leading-[0.9] text-[#1A2B45] text-balance" style={{ fontSize: 'clamp(3rem, 10vw, 7rem)' }}>
            Вика и Ваня<br />Богатые
          </h1>

          <p className="mb-12 max-w-2xl text-lg leading-relaxed text-[#1A2B45]/80 md:text-xl text-pretty">
            Мы проектируем путешествия, где важна каждая деталь: от маршрута и логистики до культурных и гастрономических акцентов.
          </p>

          <div className="mb-16">
            <p className="mb-6 text-sm font-bold uppercase tracking-wide md:text-base">
              ИНДИВИДУАЛЬНО ИЛИ В КОМАНДЕ — МЫ СОЗДАЁМ:
            </p>
            <ol className="space-y-3 text-base md:text-lg">
              <li className="leading-relaxed">
                <span className="font-medium">(1)</span> авторские маршруты
              </li>
              <li className="leading-relaxed">
                <span className="font-medium">(2)</span> корпоративные и семейные туры
              </li>
              <li className="leading-relaxed">
                <span className="font-medium">(3)</span> экспедиции и особые концепт-путешествия
              </li>
              <li className="leading-relaxed">
                <span className="font-medium">(4)</span> погружения в культуру и атмосферу региона
              </li>
            </ol>
          </div>

          {/* Hero Image with МИР overlay */}
          <div className="relative mb-8 overflow-hidden">
            <img 
              src="/dramatic-lighthouse-on-rocky-shore-with-snow-cappe.jpg"
              alt="Маяк на краю света в Патагонии с заснеженными горами"
              className="h-[500px] w-full object-cover md:h-[700px]"
            />
            <div className="absolute inset-0 flex items-end justify-center pb-12">
              <h2 
                className="font-bold text-white mix-blend-overlay" 
                style={{ fontSize: 'clamp(6rem, 20vw, 15rem)', letterSpacing: '0.1em' }}
                aria-label="Мир"
              >
                МИР
              </h2>
            </div>
            {/* Map markers */}
            <div className="absolute left-[15%] top-[30%] hidden md:block">
              <div className="relative">
                <div className="h-3 w-3 rounded-full bg-white"></div>
                <p className="absolute left-6 top-0 whitespace-nowrap text-sm font-medium text-white">Патагония</p>
              </div>
            </div>
            <div className="absolute left-[25%] top-[55%] hidden md:block">
              <div className="relative">
                <div className="h-3 w-3 rounded-full bg-white"></div>
                <p className="absolute left-6 top-0 whitespace-nowrap text-sm font-medium text-white">Аргентина</p>
              </div>
            </div>
            <div className="absolute left-[45%] top-[35%] hidden md:block">
              <div className="relative">
                <div className="h-3 w-3 rounded-full bg-white"></div>
                <p className="absolute left-6 top-0 whitespace-nowrap text-sm font-medium text-white">Антарктида</p>
              </div>
            </div>
            <div className="absolute right-[20%] top-[50%] hidden md:block">
              <div className="relative">
                <div className="h-3 w-3 rounded-full bg-white"></div>
                <p className="absolute left-6 top-0 whitespace-nowrap text-sm font-medium text-white">Южная Америка</p>
              </div>
            </div>
          </div>

          <button 
            className="group flex w-full items-center justify-between border-b-2 border-[#1A2B45] py-4 text-left text-lg font-medium uppercase tracking-wide transition-colors hover:border-[#1A2B45]/60 md:text-xl"
            aria-label="Оставить заявку на путешествие"
          >
            ОСТАВИТЬ ЗАЯВКУ
            <ArrowRight className="transition-transform group-hover:translate-x-2" />
          </button>
        </div>
      </header>

      {/* Why Us Section */}
      <section className="px-6 py-20 md:px-12 lg:px-24" aria-labelledby="why-us-heading">
        <div className="mx-auto max-w-7xl">
          <h2 id="why-us-heading" className="mb-12 text-5xl font-bold md:text-6xl lg:text-7xl">
            ПОЧЕМУ МЫ?
          </h2>

          <div className="grid gap-px bg-[#1A2B45]/20 md:grid-cols-2">
            <div className="bg-[#EEECE8] p-8 md:p-12">
              <p className="mb-4 text-4xl font-bold md:text-5xl">9 ЛЕТ</p>
              <p className="text-lg leading-relaxed text-[#1A2B45]/80">
                В экспедиционном<br />и люкс-туризме
              </p>
            </div>
            <div className="bg-[#EEECE8] p-8 md:p-12">
              <p className="mb-4 text-4xl font-bold md:text-5xl">1863 ПУТЕШЕСТВЕННИКА</p>
              <p className="text-lg leading-relaxed text-[#1A2B45]/80">
                доверили организацию<br />своего отпуска
              </p>
            </div>
            <div className="bg-[#EEECE8] p-8 md:p-12">
              <p className="mb-4 text-4xl font-bold md:text-5xl">70 СТРАН МИРА</p>
              <p className="text-lg leading-relaxed text-[#1A2B45]/80">мы посетили</p>
            </div>
            <div className="bg-[#EEECE8] p-8 md:p-12">
              <p className="mb-4 text-4xl font-bold md:text-5xl">&gt;3000 ЭКСКУРСИЙ</p>
              <p className="text-lg leading-relaxed text-[#1A2B45]/80">Лично провели</p>
            </div>
          </div>

          <div className="mt-px bg-[#EEECE8] p-8 md:p-12">
            <p className="mb-4 text-4xl font-bold md:text-5xl">209 АВТОРСКИХ МАРШРУТОВ</p>
            <p className="text-lg leading-relaxed text-[#1A2B45]/80">Создали в 6 странах</p>
          </div>
        </div>
      </section>

      {/* Who We Are Section */}
      <section 
        style={{
          backgroundImage: 'url(/two-travelers-in-red-winter-jackets-standing-by-th.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
        className="relative px-6 py-20 md:px-12 lg:px-24" 
        aria-labelledby="who-we-are-heading"
      >
        <div className="absolute inset-0 bg-[#1A2B45]/60"></div>

        <div className="relative mx-auto max-w-7xl">
          <h2 id="who-we-are-heading" className="mb-12 text-5xl font-bold text-white md:text-6xl lg:text-7xl">
            КТО МЫ?
          </h2>

          <p className="mb-16 text-xl leading-relaxed text-white md:text-2xl text-pretty">
            От ледяного Шпицбергена до ветров Патагонии. Мы — семья полярных гидов, исследователей и мечтателей, которые однажды просто выбрали жизнь на краю карты.
          </p>

          <div className="grid gap-12 md:grid-cols-2 md:gap-16">
            <article className="space-y-4">
              <h3 className="text-3xl font-bold uppercase tracking-wide text-white">ВИКА</h3>
              <p className="text-lg leading-relaxed text-white/90 text-pretty">
                гид и рассказчица, внимательная к деталям культуры и повседневности. Любит гастрономию, антропологию и истории мест. Бывший режиссёр и журналист, теперь исследует глубину реального мира и драматургию путешествий.
              </p>
            </article>

            <article className="space-y-4">
              <h3 className="text-3xl font-bold uppercase tracking-wide text-white">ВАНЯ</h3>
              <p className="text-lg leading-relaxed text-white/90 text-pretty">
                adventure-гид, FPV пилот и кофе-энтузиаст. Его стихия — горы, снегоходы, ледники, трекинг и тундра. Умеет сочетать драйв и безопасность, создаёт комфорт даже там, где суровая природа диктует свои правила.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* Target Audience Section */}
      <section className="px-6 py-20 md:px-12 lg:px-24" aria-labelledby="target-audience-heading">
        <div className="mx-auto max-w-7xl">
          <h2 id="target-audience-heading" className="mb-12 text-5xl font-bold md:text-6xl lg:text-7xl">
            ВАМ К НАМ, ЕСЛИ:
          </h2>

          <ol className="space-y-8">
            <li className="grid gap-6 md:grid-cols-12 md:gap-12">
              <div className="md:col-span-7 md:col-start-1">
                <span className="mb-2 inline-block text-xl font-bold">(1)</span>
                <p className="text-lg leading-relaxed text-[#1A2B45]/80 md:text-xl text-pretty">
                  Хотите освободиться от бесконечных поисков маршрутов и билетов, доверив детали тем, кто знает регион
                </p>
              </div>
            </li>

            <li className="grid gap-6 md:grid-cols-12 md:gap-12">
              <div className="md:col-span-7 md:col-start-6">
                <span className="mb-2 inline-block text-xl font-bold">(2)</span>
                <p className="text-lg leading-relaxed text-[#1A2B45]/80 md:text-xl text-pretty">
                  Ищете живые, аутентичные впечатления — вне туристических троп, в балансе комфорта и приключений
                </p>
              </div>
            </li>

            <li className="grid gap-6 md:grid-cols-12 md:gap-12">
              <div className="md:col-span-7 md:col-start-1">
                <span className="mb-2 inline-block text-xl font-bold">(3)</span>
                <p className="text-lg leading-relaxed text-[#1A2B45]/80 md:text-xl text-pretty">
                  Чувствуете трудности с языком или логистикой региона — перелётами, погранпереходами, маршрутом
                </p>
              </div>
            </li>

            <li className="grid gap-6 md:grid-cols-12 md:gap-12">
              <div className="md:col-span-7 md:col-start-6">
                <span className="mb-2 inline-block text-xl font-bold">(4)</span>
                <p className="text-lg leading-relaxed text-[#1A2B45]/80 md:text-xl text-pretty">
                  Устали от отмен и нестыковок, цените осмысленное путешествие без хаоса и спешки
                </p>
              </div>
            </li>

            <li className="grid gap-6 md:grid-cols-12 md:gap-12">
              <div className="md:col-span-7 md:col-start-1">
                <span className="mb-2 inline-block text-xl font-bold">(5)</span>
                <p className="text-lg leading-relaxed text-[#1A2B45]/80 md:text-xl text-pretty">
                  Любите опыты, где можно быть свободным и расслабленным — зная, что обо всём уже позаботились
                </p>
              </div>
            </li>

            <li className="grid gap-6 md:grid-cols-12 md:gap-12">
              <div className="md:col-span-7 md:col-start-6">
                <span className="mb-2 inline-block text-xl font-bold">(6)</span>
                <p className="text-lg leading-relaxed text-[#1A2B45]/80 md:text-xl text-pretty">
                  Предпочитаете ясность и надёжность вместо затяжной «маньяны» и лишней неопределённости
                </p>
              </div>
            </li>
          </ol>
        </div>
      </section>

      {/* Services Section */}
      <section className="px-6 py-20 md:px-12 lg:px-24" aria-labelledby="services-heading">
        <div className="mx-auto max-w-7xl">
          <h2 id="services-heading" className="mb-12 text-5xl font-bold md:text-6xl lg:text-7xl">
            НАШИ УСЛУГИ
          </h2>

          <div className="space-y-12">
            {/* Service 1 */}
            <article className="space-y-6 border-b border-[#1A2B45]/20 pb-12">
              <div className="bg-[#DDD9D3] p-8 md:p-12">
                <h3 className="mb-4 text-2xl font-bold uppercase tracking-wide md:text-3xl">
                  САМЫЙ ЮЖНЫЙ ГОРОД ЗЕМЛИ
                </h3>
                <p className="mb-6 text-lg leading-relaxed text-[#1A2B45]/80 text-pretty">
                  Пешеходная авторская экскурсия от местного жителя 2–2,5 часа (индивидуально или в группе)
                </p>
                <div className="flex flex-wrap items-baseline justify-between gap-4">
                  <div>
                    <p className="mb-1 text-sm uppercase tracking-wide text-[#1A2B45]/60">СТОИМОСТЬ:</p>
                    <p className="text-xl font-bold md:text-2xl">КЛАССИЧЕСКАЯ ПРОГУЛКА — 250 $</p>
                    <p className="text-sm text-[#1A2B45]/60">до 5 человек</p>
                  </div>
                </div>
              </div>
              <button className="group flex items-center gap-2 text-base font-medium uppercase tracking-wide transition-colors hover:text-[#1A2B45]/60">
                ПОДРОБНЕЕ
                <ArrowUpRight className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" size={20} />
              </button>
            </article>

            {/* Service 2 */}
            <article className="space-y-6 border-b border-[#1A2B45]/20 pb-12">
              <h3 className="text-2xl font-bold uppercase tracking-wide md:text-3xl">
                ПИКНИК НА КРАЮ СВЕТА
              </h3>
              <p className="text-lg leading-relaxed text-[#1A2B45]/80 text-pretty">
                Уединённый обед наедине с Патагонией: ветер в волосах, горы вокруг, ни души рядом. Эмпанады, сыр, фрукты и кофе или игристое — современная роскошь, когда мир замирает только для вас
              </p>
              <div className="flex flex-wrap items-baseline justify-between gap-4">
                <p className="text-sm uppercase tracking-wide text-[#1A2B45]/60">СТОИМОСТЬ:</p>
                <p className="text-xl font-bold md:text-2xl">ОТ 300 $ / 5 ЧЕЛ</p>
              </div>
              <button className="group flex items-center gap-2 text-base font-medium uppercase tracking-wide transition-colors hover:text-[#1A2B45]/60">
                ПОДРОБНЕЕ
                <ArrowUpRight className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" size={20} />
              </button>
            </article>

            {/* Service 3 */}
            <article className="space-y-6 border-b border-[#1A2B45]/20 pb-12">
              <h3 className="text-2xl font-bold uppercase tracking-wide md:text-3xl">
                ИНДИВИДУАЛЬНЫЙ ТУР С ГИДОМ
              </h3>
              <p className="text-lg leading-relaxed text-[#1A2B45]/80 text-pretty">
                Мы вместе: я сопровождаю вас в поездке, беру на себя организацию, переводы и любые вопросы на месте. Ваша задача — отдыхать и проживать каждую минуту
              </p>
              <div className="flex flex-wrap items-baseline justify-between gap-4">
                <p className="text-sm uppercase tracking-wide text-[#1A2B45]/60">СТОИМОСТЬ:</p>
                <p className="text-xl font-bold md:text-2xl">ОТ 350 $ / ДЕНЬ СОПРОВОЖДЕНИЯ</p>
              </div>
              <button className="group flex items-center gap-2 text-base font-medium uppercase tracking-wide transition-colors hover:text-[#1A2B45]/60">
                ПОДРОБНЕЕ
                <ArrowUpRight className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" size={20} />
              </button>
            </article>

            {/* Service 4 */}
            <article className="space-y-6 border-b border-[#1A2B45]/20 pb-12">
              <h3 className="text-2xl font-bold uppercase tracking-wide md:text-3xl">
                КОНСЬЕРЖ-СЕРВИС ДЛЯ ПУТЕШЕСТВИЙ (БЕЗ ГИДА)
              </h3>
              <p className="text-lg leading-relaxed text-[#1A2B45]/80 text-pretty">
                Вы путешествуете самостоятельно, а я составляю для вас детальный маршрут и поддерживаю онлайн
              </p>
              <div className="flex flex-wrap items-baseline justify-between gap-4">
                <p className="text-sm uppercase tracking-wide text-[#1A2B45]/60">СТОИМОСТЬ:</p>
                <p className="text-xl font-bold md:text-2xl">РАССЧИТЫВАЕТСЯ ИНДИВИДУАЛЬНО</p>
              </div>
              <button className="group flex items-center gap-2 text-base font-medium uppercase tracking-wide transition-colors hover:text-[#1A2B45]/60">
                ПОДРОБНЕЕ
                <ArrowUpRight className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" size={20} />
              </button>
            </article>

            {/* Service 5 */}
            <article className="space-y-6 border-b border-[#1A2B45]/20 pb-12">
              <h3 className="text-2xl font-bold uppercase tracking-wide md:text-3xl">
                ЭКСПРЕСС-КОНСУЛЬТАЦИЯ (ОНЛАЙН)
              </h3>
              <p className="text-lg leading-relaxed text-[#1A2B45]/80 text-pretty">
                Быстрый бесплатный звонок (10–30 минут) Чтобы задать свои вопросы и получить конкретные ответы.
              </p>
              <div className="flex flex-wrap items-baseline justify-between gap-4">
                <p className="text-sm uppercase tracking-wide text-[#1A2B45]/60">СТОИМОСТЬ:</p>
                <p className="text-xl font-bold md:text-2xl">БЕСПЛАТНО</p>
              </div>
              <button className="group flex items-center gap-2 text-base font-medium uppercase tracking-wide transition-colors hover:text-[#1A2B45]/60">
                ПОДРОБНЕЕ
                <ArrowUpRight className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" size={20} />
              </button>
            </article>

            {/* Service 6 */}
            <article className="space-y-6 pb-12">
              <h3 className="text-2xl font-bold uppercase tracking-wide md:text-3xl">
                ГАЙДЫ ДЛЯ САМОСТОЯТЕЛЬНЫХ ПУТЕШЕСТВИЙ
              </h3>
              <p className="text-lg leading-relaxed text-[#1A2B45]/80 text-pretty">
                Любите путешествовать сами, но не хотите тратить часы на подготовку. Увидеть главное и не пропустить скрытое.
              </p>
              <button className="group flex items-center gap-2 text-base font-medium uppercase tracking-wide transition-colors hover:text-[#1A2B45]/60">
                ПОДРОБНЕЕ
                <ArrowUpRight className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" size={20} />
              </button>
            </article>
          </div>
        </div>
      </section>

      {/* Media Section */}
      <section className="px-6 py-20 md:px-12 lg:px-24" aria-labelledby="media-heading">
        <div className="mx-auto max-w-7xl">
          <h2 id="media-heading" className="mb-12 text-5xl font-bold md:text-6xl lg:text-7xl">
            ИНТЕРВЬЮ И ПОДКАСТЫ
          </h2>

          <nav aria-label="Медиа-контент">
            <ul className="space-y-6">
              <li>
                <a href="#" className="group flex items-center justify-between border-b border-[#1A2B45]/20 py-4 transition-colors hover:border-[#1A2B45]">
                  <span className="text-lg md:text-xl">СМОТРЕТЬ НАШ ЮТУБ-КАНАЛ</span>
                  <ArrowUpRight className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" size={24} />
                </a>
              </li>
              <li>
                <a href="#" className="group flex items-center justify-between border-b border-[#1A2B45]/20 py-4 transition-colors hover:border-[#1A2B45]">
                  <span className="text-lg md:text-xl">ПОДКАСТ «ВАЖНОЕ РЕШЕНИЕ»</span>
                  <ArrowUpRight className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" size={24} />
                </a>
              </li>
              <li>
                <a href="#" className="group flex items-center justify-between border-b border-[#1A2B45]/20 py-4 transition-colors hover:border-[#1A2B45]">
                  <span className="text-lg md:text-xl">«СЕВЕР»</span>
                  <ArrowUpRight className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" size={24} />
                </a>
              </li>
              <li>
                <a href="#" className="group flex items-center justify-between border-b border-[#1A2B45]/20 py-4 transition-colors hover:border-[#1A2B45]">
                  <span className="text-lg md:text-xl">ПОДКАСТ «Я СМОГЛА И ТЫ СМОЖЕШЬ»</span>
                  <ArrowUpRight className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" size={24} />
                </a>
              </li>
              <li>
                <a href="#" className="group flex items-center justify-between border-b border-[#1A2B45]/20 py-4 transition-colors hover:border-[#1A2B45]">
                  <span className="text-lg md:text-xl">ЗАЧЕМ ЖИТЬ НА КРАЮ СВЕТА?</span>
                  <ArrowUpRight className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" size={24} />
                </a>
              </li>
              <li>
                <a href="#" className="group flex items-center justify-between border-b border-[#1A2B45]/20 py-4 transition-colors hover:border-[#1A2B45]">
                  <span className="text-lg md:text-xl">Т-Ж ПРО ТУРБЮРО В ДАГЕСТАНЕ</span>
                  <ArrowUpRight className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" size={24} />
                </a>
              </li>
              <li>
                <a href="#" className="group flex items-center justify-between border-b border-[#1A2B45]/20 py-4 transition-colors hover:border-[#1A2B45]">
                  <span className="text-lg md:text-xl">ИНТЕРВЬЮ ПРО СЕМЕЙНОЕ ПУТЕШЕСТВИЕ В АВТОДОМЕ ПО АРГЕНТИНЕ</span>
                  <ArrowUpRight className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" size={24} />
                </a>
              </li>
              <li>
                <a href="#" className="group flex items-center justify-between border-b border-[#1A2B45]/20 py-4 transition-colors hover:border-[#1A2B45]">
                  <span className="text-lg md:text-xl">ВЫПУСК «РЕДАКЦИИ» ПРО ДАГЕСТАН</span>
                  <ArrowUpRight className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" size={24} />
                </a>
              </li>
              <li>
                <a href="#" className="group flex items-center justify-between border-b border-[#1A2B45]/20 py-4 transition-colors hover:border-[#1A2B45]">
                  <span className="text-lg md:text-xl">ВЫСТУПЛЕНИЕ В СПОРТМАРАФОНЕ</span>
                  <ArrowUpRight className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" size={24} />
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </section>

      {/* Contact Footer */}
      <footer 
        style={{
          backgroundImage: 'url(/couple-of-travelers-standing-together-in-patagonia.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
        className="relative px-6 py-24 md:px-12 lg:px-24" 
        aria-labelledby="contact-heading"
      >
        <div className="absolute inset-0 bg-[#1A2B45]/60"></div>

        <div className="relative mx-auto max-w-7xl">
          <h2 id="contact-heading" className="mb-12 text-5xl font-bold text-white md:text-6xl lg:text-7xl">
            НА СВЯЗИ!
          </h2>

          <p className="mb-12 max-w-2xl text-lg leading-relaxed text-white md:text-xl text-pretty">
            Напишите нам в любую удобную соц. сеть и мы подберем для вас лучшие условия для путешествия!
          </p>

          <nav aria-label="Социальные сети">
            <ul className="flex flex-wrap gap-6">
              <li>
                <a 
                  href="#"
                  className="group flex items-center gap-2 text-lg font-medium text-white transition-colors hover:text-white/70"
                  aria-label="Написать в Telegram"
                >
                  Telegram
                  <ArrowUpRight className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" size={20} />
                </a>
              </li>
              <li>
                <a 
                  href="#"
                  className="group flex items-center gap-2 text-lg font-medium text-white transition-colors hover:text-white/70"
                  aria-label="Написать в Instagram"
                >
                  Instagram
                  <ArrowUpRight className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" size={20} />
                </a>
              </li>
              <li>
                <a 
                  href="#"
                  className="group flex items-center gap-2 text-lg font-medium text-white transition-colors hover:text-white/70"
                  aria-label="Написать в WhatsApp"
                >
                  WhatsApp
                  <ArrowUpRight className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" size={20} />
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </footer>
    </main>
  )
}
