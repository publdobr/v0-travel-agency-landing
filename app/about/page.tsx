import Link from "next/link"
import Image from "next/image"
import { ArrowUpRight } from 'lucide-react'

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#EEECE8] text-[#1A2B45] overflow-hidden relative">
      {/* Dotted Path Background - Simplified for responsiveness */}
      <div className="absolute inset-0 pointer-events-none hidden md:block z-0">
        <svg
          className="w-full h-full"
          viewBox="0 0 1440 3200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMin slice"
        >
          <path
            d="M720 400 C 720 400, 1200 600, 1200 900 C 1200 1200, 240 1400, 240 1700 C 240 2000, 1200 2200, 1200 2500 C 1200 2800, 720 3000, 720 3000"
            stroke="#1A2B45"
            strokeOpacity="0.2"
            strokeWidth="2"
            strokeDasharray="8 8"
          />
        </svg>
      </div>

      <div className="container mx-auto px-4 py-12 md:py-24 relative z-10 max-w-5xl">
        {/* Header */}
        <header className="mb-20 md:mb-32">
          <p className="text-sm md:text-base font-medium mb-4">[Гиды и продюсеры путешествий]</p>
          <h1 className="text-6xl md:text-8xl font-bold text-[#0B2341] mb-8">О нас</h1>
          <div className="max-w-2xl text-lg md:text-xl leading-relaxed">
            <p className="font-bold mb-2">Мы — Вика и Ваня. Команда в жизни и в путешествиях.</p>
            <p className="text-[#4A5568]">
              Нас соединяют Арктика, Антарктика и дороги Южной Америки. Вместе — тысячи километров, морских миль,
              десятки экспедиций, пара иммиграций, годы родительства и проекты по всему миру.
            </p>
          </div>
        </header>

        {/* Section 1: Начало пути */}
        <section className="grid md:grid-cols-2 gap-12 mb-32 items-center">
          <div className="order-2 md:order-1 relative">
            <div className="relative h-[400px] w-full">
              {/* Collage placeholder using existing images */}
              <div className="absolute top-0 left-0 w-3/4 h-3/4 z-10 transform -rotate-3 border-4 border-white shadow-lg overflow-hidden">
                <Image
                  src="/two-travelers-in-red-winter-jackets-standing-by-th.jpg"
                  alt="Вика и Ваня в начале пути"
                  fill
                  className="object-cover grayscale hover:grayscale-0 transition-all duration-500"
                />
              </div>
              <div className="absolute bottom-0 right-0 w-2/3 h-2/3 z-0 transform rotate-6 border-4 border-white shadow-lg overflow-hidden">
                <Image
                  src="/couple-of-travelers-standing-together-in-patagonia.jpg"
                  alt="Работа в горах"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
          <div className="order-1 md:order-2">
            <div className="flex items-baseline gap-4 mb-4">
              <span className="text-[#4A5568] text-xl">(1)</span>
              <h2 className="text-2xl font-bold text-[#2C5282]">#НАЧАЛОПУТИ</h2>
            </div>
            <div className="prose prose-lg text-[#1A2B45]">
              <p>
                <strong>Когда-то мы, как «нормальные» люди, ходили в офис:</strong> Вика — в документалистике, Ваня — в
                IT. Но десять лет назад нас обоиx переехала Арктика — и мы поменяли всё.
              </p>
            </div>
          </div>
        </section>

        {/* Section 2: Арктика */}
        <section className="grid md:grid-cols-2 gap-12 mb-32 items-center">
          <div className="md:text-right">
            <div className="flex items-baseline gap-4 mb-4 md:justify-end">
              <span className="text-[#4A5568] text-xl">(2)</span>
              <h2 className="text-2xl font-bold text-[#2C5282]">#АРКТИКА</h2>
            </div>
            <div className="prose prose-lg text-[#1A2B45] md:ml-auto">
              <p className="font-bold mb-2">Мы встретились у Северного полюса.</p>
              <p className="mb-4">
                Три года жили и работали на Шпицбергене: Ваня водил каякерские и снегоходные группы, Вика рассказывала
                истории и осваивала международный экспедиционный туризм.
              </p>
              <p className="font-medium">
                Арктика стала школой — дала нам профессию, умение работать с людьми и создавать впечатления.
              </p>
            </div>
          </div>
          <div className="relative h-[400px] w-full rounded-lg overflow-hidden shadow-xl">
            <Image
              src="/two-travelers-in-red-winter-jackets-standing-by-th.jpg"
              alt="Арктическая экспедиция"
              fill
              className="object-cover"
            />
          </div>
        </section>

        {/* Section 3: Дагестан */}
        <section className="grid md:grid-cols-2 gap-12 mb-32 items-center">
          <div className="relative h-[500px] w-full">
            <div className="absolute top-0 left-10 w-2/3 h-2/3 z-10 shadow-xl transform -rotate-2">
              <Image
                src="/couple-of-travelers-standing-together-in-patagonia.jpg"
                alt="Дагестан культура"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute bottom-0 right-10 w-2/3 h-2/3 z-0 shadow-xl transform rotate-3">
              <Image
                src="/dramatic-lighthouse-on-rocky-shore-with-snow-cappe.jpg"
                alt="Горы Дагестана"
                fill
                className="object-cover"
              />
            </div>
          </div>
          <div>
            <div className="flex items-baseline gap-4 mb-4">
              <span className="text-[#4A5568] text-xl">(3)</span>
              <h2 className="text-2xl font-bold text-[#2C5282]">#ДАГЕСТАН</h2>
            </div>
            <div className="prose prose-lg text-[#1A2B45]">
              <p className="font-bold mb-2">
                Во время пандемии мы вернулись в Россию и выбрали Дагестан — за горы и культуру.
              </p>
              <p>
                Создавали бутиковые путешествия, арт-походы, лагеря для взрослых на Каспии и мечтали восстановить
                горскую саклю. Это были два абсолютно счастливых года.
              </p>
            </div>
          </div>
        </section>

        {/* Section 4: Аргентина */}
        <section className="grid md:grid-cols-2 gap-12 mb-32 items-center">
          <div className="md:text-right order-2 md:order-1">
            <div className="flex items-baseline gap-4 mb-4 md:justify-end">
              <span className="text-[#4A5568] text-xl">(4)</span>
              <h2 className="text-2xl font-bold text-[#2C5282]">#АРГЕНТИНА</h2>
            </div>
            <div className="prose prose-lg text-[#1A2B45] md:ml-auto">
              <p className="font-bold mb-2">В 2023 году в Буэнос-Айресе родилась наша дочь Агата.</p>
              <p>
                С ней, ещё младенцем, мы отправились в автодомную экспедицию по Аргентине — и нашли дом в Патагонии.
              </p>
            </div>
          </div>
          <div className="relative h-[300px] w-full order-1 md:order-2">
            <div className="absolute inset-0 transform rotate-1 shadow-lg rounded-lg overflow-hidden">
              <Image
                src="/couple-of-travelers-standing-together-in-patagonia.jpg"
                alt="Семья в Аргентине"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </section>

        {/* Section 5: Патагония */}
        <section className="grid md:grid-cols-2 gap-12 mb-32 items-center">
          <div className="relative h-[500px] w-full">
            <div className="grid grid-cols-2 gap-4 h-full">
              <div className="relative h-full rounded-lg overflow-hidden shadow-md transform translate-y-8">
                <Image
                  src="/dramatic-lighthouse-on-rocky-shore-with-snow-cappe.jpg"
                  alt="Ушуайя"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-full rounded-lg overflow-hidden shadow-md transform -translate-y-8">
                <Image
                  src="/couple-of-travelers-standing-together-in-patagonia.jpg"
                  alt="Патагония трекинг"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
          <div>
            <div className="flex items-baseline gap-4 mb-4">
              <span className="text-[#4A5568] text-xl">(5)</span>
              <h2 className="text-2xl font-bold text-[#2C5282]">#ПАТАГОНИЯ</h2>
            </div>
            <div className="prose prose-lg text-[#1A2B45]">
              <p className="font-bold mb-2">
                Здесь, в Ушуайе, гудят корабли перед Антарктидой, а жизнь напоминает истории Жюль Верна.
              </p>
              <p>
                Андский хребет, холодные моря, трекинги прямо из дома, каяки, нетронутая природа и дух приключений -{" "}
                <strong>всё, что мы любим, мы нашли здесь, на краю Земли.</strong>
              </p>
            </div>
          </div>
        </section>

        {/* Section 6: Сейчас */}
        <section className="grid md:grid-cols-2 gap-12 mb-32 items-center">
          <div className="md:text-right order-2 md:order-1">
            <div className="flex items-baseline gap-4 mb-4 md:justify-end">
              <span className="text-[#4A5568] text-xl">(6)</span>
              <h2 className="text-2xl font-bold text-[#2C5282]">#СЕЙЧАС</h2>
            </div>
            <div className="prose prose-lg text-[#1A2B45] md:ml-auto">
              <p className="mb-4">
                Половину 2025 года мы провели в экспедиции на автодоме по Южной Америке — проехали от Колумбии до Перу,
                вместе с нашей 2-летней дочкой.
              </p>
              <p className="font-bold mb-4">Сегодня мы на Острове, который называется Огненная Земля.</p>
              <p className="mb-4">
                Учимся жить осёдло и строим туристическую компанию, основанную на внимании к людям.
              </p>
              <ul className="list-none space-y-2">
                <li>— проводим туры по Патагонии, Огненной Земле, Аргентине и Чили;</li>
                <li>— организуем экспедиции в Антарктиду.</li>
              </ul>
            </div>
          </div>
          <div className="relative h-[400px] w-full order-1 md:order-2">
            <div className="absolute top-0 right-0 w-3/4 h-3/4 z-10 shadow-xl transform rotate-2 border-4 border-white">
              <Image
                src="/two-travelers-in-red-winter-jackets-standing-by-th.jpg"
                alt="Экспедиция на автодоме"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute bottom-0 left-0 w-2/3 h-2/3 z-0 shadow-lg transform -rotate-3 border-4 border-white">
              <Image
                src="/couple-of-travelers-standing-together-in-patagonia.jpg"
                alt="Огненная Земля"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </section>

        {/* Section 7: Верим */}
        <section className="max-w-3xl mx-auto text-center mb-32">
          <div className="flex items-center justify-center gap-4 mb-8">
            <span className="text-[#4A5568] text-xl">(7)</span>
            <h2 className="text-2xl font-bold text-[#2C5282]">#ВЕРИМ</h2>
          </div>
          <div className="text-xl md:text-2xl font-medium leading-relaxed space-y-6">
            <p>Мы знаем: путешествия меняют людей.</p>
            <p>Создаём живые, глубокие, настоящие маршруты — с историей, смыслом и душой.</p>
            <p>Любим приключения и превращаем хаос дорог в чёткий план.</p>
          </div>
        </section>

        {/* Footer Navigation */}
        <footer className="border-t border-[#1A2B45]/20 pt-12">
          <div className="grid gap-6">
            <Link
              href="/#contact"
              className="group flex items-center justify-between text-xl md:text-2xl font-medium border-b border-[#1A2B45] pb-4 hover:text-[#2C5282] transition-colors"
            >
              <span>ОСТАВИТЬ ЗАЯВКУ</span>
              <ArrowUpRight className="w-6 h-6 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </Link>
            <Link
              href="/"
              className="group flex items-center justify-between text-xl md:text-2xl font-medium border-b border-[#1A2B45]/50 pb-4 text-[#4A5568] hover:text-[#1A2B45] transition-colors"
            >
              <span>ВЕРНУТЬСЯ НА ГЛАВНУЮ</span>
              <ArrowUpRight className="w-6 h-6 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </Link>
          </div>
        </footer>
      </div>
    </main>
  )
}
