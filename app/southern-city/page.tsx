import { ArrowUpRight } from "lucide-react"
import Link from "next/link"

export default function SouthernCityPage() {
  return (
    <main className="min-h-screen bg-[#EEECE8] px-6 py-12 text-[#1A2B45] md:px-12 lg:px-24">
      <div className="mx-auto max-w-4xl">
        {/* Header */}
        <header className="mb-12">
          <h1 className="mb-6 text-4xl font-bold uppercase leading-tight md:text-5xl lg:text-6xl text-balance">
            САМЫЙ ЮЖНЫЙ ГОРОД ЗЕМЛИ
          </h1>
          <p className="text-lg text-[#1A2B45]/60 md:text-xl">
            Пешеходная авторская экскурсия от местного жителя 2–2,5 часа (индивидуально или в группе)
          </p>
        </header>

        {/* Main Content Card */}
        <div className="mb-12 bg-[#E5E5E5] p-8 md:p-12">
          {/* Ushuaia Section */}
          <div className="mb-12">
            <h2 className="mb-6 text-xl font-bold uppercase tracking-wide text-[#1A2B45]/60 md:text-2xl">
              УШУАЙЯ БЕЗ СУЕТЫ И ШТАМПОВ:
            </h2>
            <div className="space-y-6 text-lg leading-relaxed md:text-xl">
              <div className="flex gap-4">
                <span className="font-medium text-[#1A2B45]/60">(1)</span>
                <p className="text-[#1A2B45]/60">Секретные дворики и скрытые уголки</p>
              </div>
              <div className="flex gap-4">
                <span className="font-medium text-[#1A2B45]/60">(2)</span>
                <p className="text-[#1A2B45]/60">
                  Истории о тюрьме на краю света, первооткрывателях и иммигрантах со всего мира
                </p>
              </div>
              <div className="flex gap-4">
                <span className="font-medium text-[#1A2B45]/60">(3)</span>
                <p className="text-[#1A2B45]/60">Легенды о коренных народах Магеллании, живших нагими в холоде</p>
              </div>
              <div className="flex gap-4">
                <span className="font-medium text-[#1A2B45]/60">(4)</span>
                <p className="text-[#1A2B45]/60">Антарктический бриз, маяк на краю света и прочая "жюльверновщина"</p>
              </div>
            </div>
          </div>

          <p className="mb-12 text-lg leading-relaxed md:text-xl">
            Можно выбрать формат: классика, гастро-тур, что-то особенное под ваши пожелания
          </p>

          {/* Includes Section */}
          <div>
            <h2 className="mb-2 text-xl font-bold uppercase tracking-wide text-[#1A2B45]/60 md:text-2xl">ВКЛЮЧАЕТ:</h2>
            <ul className="list-disc space-y-3 pl-5 text-lg leading-relaxed text-[#1A2B45]/60 md:text-xl">
              <li>нескучный рассказ о прошлом, настоящем и будущем Огненной Земли</li>
              <li>Гибкость маршрута под ваши интересы</li>
              <li>Рекомендации для продолжения самостоятельных прогулок, ресторанов и интересных мест</li>
            </ul>
          </div>
        </div>

        {/* Footer / Cost */}
        <div className="mb-12 flex flex-wrap items-baseline justify-between gap-4 border-t border-[#1A2B45] pt-6">
          <div>
            <p className="mb-1 text-sm uppercase tracking-wide text-[#1A2B45]/60">СТОИМОСТЬ:</p>
            <p className="text-sm text-[#1A2B45]/60">
              *другие форматы — по запросу
              <br />
              (можно расширить авто-экскурсией)
            </p>
          </div>
          <div className="text-right">
            <p className="text-2xl font-bold md:text-3xl">КЛАССИЧЕСКАЯ ПРОГУЛКА — 250 $</p>
            <p className="text-sm text-[#1A2B45]/60">до 5 человек</p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="space-y-4">
          <a
            href="https://t.me/vicky_somewhere"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex w-full items-center justify-between border-b border-[#1A2B45] py-4 text-left text-lg font-medium uppercase tracking-wide transition-colors hover:border-[#1A2B45]/60 md:text-xl"
          >
            ОСТАВИТЬ ЗАЯВКУ
            <ArrowUpRight className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </a>

          <Link
            href="/#services"
            className="group flex w-full items-center justify-between border-b border-[#1A2B45]/30 py-4 text-left text-lg font-medium uppercase tracking-wide text-[#1A2B45]/60 transition-colors hover:border-[#1A2B45] hover:text-[#1A2B45] md:text-xl"
          >
            ВЕРНУТЬСЯ НА ГЛАВНУЮ
            <ArrowUpRight className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </Link>
        </div>
      </div>
    </main>
  )
}
