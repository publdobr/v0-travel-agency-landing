import Link from "next/link"
import { ArrowUpRight } from 'lucide-react'

export default function SouthernCityPage() {
  return (
    <main className="min-h-screen bg-[#EEECE8] text-[#1A2B45] font-sans selection:bg-[#1A2B45] selection:text-white">
      <div className="max-w-4xl mx-auto bg-[#EEECE8] min-h-screen shadow-2xl shadow-black/5 relative">
        <div className="p-6 md:p-12 lg:p-20 space-y-12">
          {/* Header */}
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold uppercase leading-[0.9] tracking-tight">
              САМЫЙ ЮЖНЫЙ
              <br />
              ГОРОД ЗЕМЛИ
            </h1>
            <p className="text-lg md:text-xl leading-relaxed max-w-2xl">
              Пешеходная авторская экскурсия от местного
              <br className="hidden md:block" />
              жителя 2–2,5 часа (индивидуально или в группе)
            </p>
          </div>

          {/* Gray Content Box */}
          <div className="bg-[#DDD9D3] p-8 md:p-12 space-y-10">
            {/* Ushuaia Section */}
            <div className="space-y-6">
              <h2 className="text-xl md:text-2xl font-bold uppercase tracking-wide text-[#2C4A7F]">
                УШУАЙЯ БЕЗ СУЕТЫ И ШТАМПОВ:
              </h2>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <span className="text-[#6B7280] font-medium min-w-[24px]">(1)</span>
                  <p className="text-lg text-[#6B7280]">Секретные дворики и скрытые уголки</p>
                </div>
                <div className="flex gap-4">
                  <span className="text-[#6B7280] font-medium min-w-[24px]">(2)</span>
                  <p className="text-lg text-[#6B7280]">
                    Истории о тюрьме на краю света, первооткрывателях и иммигрантах со всего мира
                  </p>
                </div>
                <div className="flex gap-4">
                  <span className="text-[#6B7280] font-medium min-w-[24px]">(3)</span>
                  <p className="text-lg text-[#6B7280]">
                    Легенды о коренных народах Магеллании, живших нагими в холоде
                  </p>
                </div>
                <div className="flex gap-4">
                  <span className="text-[#6B7280] font-medium min-w-[24px]">(4)</span>
                  <p className="text-lg text-[#6B7280]">
                    Антарктический бриз, маяк на краю света и прочая "жюльверновщина"
                  </p>
                </div>
              </div>
            </div>

            <p className="text-lg font-medium text-[#1A2B45]">
              Можно выбрать формат: классика, гастро-тур, что-то особенное под ваши пожелания
            </p>

            {/* Includes Section */}
            <div className="space-y-6">
              <h2 className="text-xl md:text-2xl font-bold uppercase tracking-wide text-[#2C4A7F]">ВКЛЮЧАЕТ:</h2>
              <ul className="space-y-3 list-disc list-outside pl-5 text-lg text-[#6B7280]">
                <li className="pl-2">нескучный рассказ о прошлом, настоящем и будущем Огненной Земли</li>
                <li className="pl-2">Гибкость маршрута под ваши интересы</li>
                <li className="pl-2">
                  Рекомендации для продолжения самостоятельных прогулок, ресторанов и интересных мест
                </li>
              </ul>
            </div>
          </div>

          {/* Pricing */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 pt-4">
            <div className="space-y-1">
              <h3 className="text-xl text-[#6B7280] uppercase tracking-wide">СТОИМОСТЬ:</h3>
              <p className="text-sm text-[#6B7280] max-w-xs">
                *другие форматы — по запросу
                <br />
                (можно расширить авто-экскурсией)
              </p>
            </div>
            <div className="text-right w-full md:w-auto">
              <p className="text-xl md:text-2xl font-bold uppercase">КЛАССИЧЕСКАЯ ПРОГУЛКА — 250 $</p>
              <p className="text-[#6B7280] text-right">до 5 человек</p>
            </div>
          </div>

          {/* Footer Actions */}
          <div className="space-y-0 border-t border-[#1A2B45]">
            {/* Updated link to Telegram */}
            <a
              href="https://t.me/vicky_somewhere"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between py-6 border-b border-[#1A2B45] hover:bg-[#1A2B45] hover:text-white transition-colors px-2"
            >
              <span className="text-xl uppercase tracking-wide">ОСТАВИТЬ ЗАЯВКУ</span>
              <ArrowUpRight className="w-6 h-6 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>
            {/* Updated link to Home */}
            <Link
              href="/"
              className="group flex items-center justify-between py-6 border-b border-[#1A2B45] hover:bg-[#1A2B45] hover:text-white transition-colors px-2"
            >
              <span className="text-xl uppercase tracking-wide text-[#6B7280] group-hover:text-white">
                ВЕРНУТЬСЯ НА ГЛАВНУЮ
              </span>
              <ArrowUpRight className="w-6 h-6 text-[#6B7280] group-hover:text-white transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}
