import Link from "next/link"
import { ArrowUpRight } from 'lucide-react'

export default function PicnicPage() {
  return (
    <main className="min-h-screen bg-[#EEECE8] text-[#1A2B45] font-sans selection:bg-[#1A2B45] selection:text-white">
      <div className="max-w-4xl mx-auto bg-[#EEECE8] min-h-screen shadow-2xl shadow-black/5 relative">
        <div className="p-6 md:p-12 lg:p-20 space-y-12">
          {/* Header */}
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold uppercase leading-[0.9] tracking-tight">
              ПИКНИК НА
              <br />
              КРАЮ СВЕТА
            </h1>
            <p className="text-lg md:text-xl leading-relaxed max-w-2xl">
              Уединённый обед или лёгкий вечерний фуршет
              <br className="hidden md:block" />
              наедине с природой
            </p>
          </div>

          {/* Gray Content Box */}
          <div className="bg-[#DDD9D3] p-8 md:p-12 space-y-10">
            {/* Menu Section */}
            <div className="space-y-6">
              <h2 className="text-xl md:text-2xl font-bold uppercase tracking-wide text-[#2C4A7F]">
                В МЕНЮ:
              </h2>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <span className="text-[#6B7280] font-medium min-w-[24px]">(1)</span>
                  <p className="text-lg text-[#6B7280]">
                    Свежие эмпанады с начинками, сырное и мясное ассорти,
                    закуски-мезе с гриссини, десертный стол: фрукты, орехи,
                    знаменитая аргентинская выпечка, свежесваренный спешлти-кофе или листовой чай
                  </p>
                </div>
                <div className="flex gap-4">
                  <span className="text-[#6B7280] font-medium min-w-[24px]">(2)</span>
                  <p className="text-lg text-[#6B7280]">
                    Эстетичная подача: стеклянные бокалы, скатерть, стол и лёгкая
                    музыка создают уют и элегантность, контрастируя с окружающей стихией
                  </p>
                </div>
              </div>
            </div>

            <p className="text-lg font-medium text-[#1A2B45]">
              По желанию — игристое или ваш любимый напиток, чтобы отметить момент
            </p>

            {/* Guests Say Section */}
            <div className="space-y-6">
              <h2 className="text-xl md:text-2xl font-bold uppercase tracking-wide text-[#2C4A7F]">НАШИ ГОСТИ ГОВОРЯТ:</h2>
              <ul className="space-y-3 list-disc list-outside pl-5 text-lg text-[#6B7280]">
                <li className="pl-2">«современная роскошь — быть там, где никого нет»</li>
                <li className="pl-2">
                  Ветер в волосах, горы вокруг, завораживающий вид, аромат свежих эмпанад,
                  локальный обед и горячий кофе — тишина на краю Земли.
                </li>
              </ul>
            </div>

            {/* Special For You Section - Adjusted to fit style */}
            <div className="space-y-6">
              <h2 className="text-xl md:text-2xl font-bold uppercase tracking-wide text-[#2C4A7F]">
                СПЕЦИАЛЬНО ДЛЯ ВАС
              </h2>
              <p className="text-lg text-[#6B7280]">
                Мы подбираем место, учитывая маршрут и погоду
              </p>
            </div>
          </div>

          {/* Pricing */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 pt-4">
            <div className="space-y-1">
              <h3 className="text-xl text-[#6B7280] uppercase tracking-wide">СТОИМОСТЬ:</h3>
              <p className="text-sm text-[#6B7280] max-w-xs">
                *минимальный заказ - 300$
              </p>
            </div>
            <div className="text-right w-full md:w-auto">
              <p className="text-xl md:text-2xl font-bold uppercase">60 $ / ЗА ЧЕЛ</p>
            </div>
          </div>

          {/* Footer Actions */}
          <div className="space-y-0 border-t border-[#1A2B45]">
            {/* Updated link to Telegram - CTA */}
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
