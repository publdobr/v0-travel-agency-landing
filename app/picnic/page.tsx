import { ArrowUpRight, ArrowRight } from 'lucide-react'
import Link from 'next/link'

export default function PicnicPage() {
  return (
    <main className="min-h-screen bg-[#EEECE8] px-6 py-12 text-[#1A2B45] md:px-12 lg:px-24">
      <div className="mx-auto max-w-4xl">
        {/* Header */}
        <header className="mb-12">
          <h1 className="mb-6 text-4xl font-bold uppercase leading-tight md:text-5xl lg:text-6xl text-balance">
            ПИКНИК НА КРАЮ СВЕТА
          </h1>
          <p className="text-lg text-[#1A2B45]/60 md:text-xl">
            Уединённый обед или лёгкий вечерний фуршет
            <br className="hidden md:block" />
            наедине с природой
          </p>
        </header>

        {/* Main Content Card */}
        <div className="mb-12 bg-[#E5E5E5] p-8 md:p-12">
          {/* Menu Section */}
          <div className="mb-12">
            <h2 className="mb-6 text-xl font-bold uppercase tracking-wide text-[#1A2B45]/60 md:text-2xl">
              В МЕНЮ:
            </h2>
            <div className="space-y-6 text-lg leading-relaxed md:text-xl">
              <div className="flex gap-4">
                <span className="font-medium text-[#1A2B45]/60">(1)</span>
                <p className="text-pretty">
                  <span className="font-bold">Свежие эмпанады с начинками, сырное и мясное ассорти, закуски-мезе с гриссини, десертный стол:</span> фрукты, орехи, знаменитая аргентинская выпечка, свежесваренный спешлти-кофе или листовой чай
                  <br />
                  <br />
                  <span className="font-bold">По желанию</span> — игристое или ваш любимый напиток, чтобы отметить момент
                </p>
              </div>
              <div className="flex gap-4">
                <span className="font-medium text-[#1A2B45]/60">(2)</span>
                <p className="text-pretty">
                  <span className="font-bold">Эстетичная подача:</span> стеклянные бокалы, скатерть, стол и лёгкая музыка создают уют и элегантность, контрастируя с окружающей стихией
                </p>
              </div>
            </div>
          </div>

          {/* Guests Say Section */}
          <div className="mb-8">
            <h2 className="mb-4 text-xl font-bold uppercase tracking-wide text-[#1A2B45]/60 md:text-2xl">
              НАШИ ГОСТИ ГОВОРЯТ:
            </h2>
            <blockquote className="text-xl font-medium italic md:text-2xl">
              «современная роскошь — быть там, где никого нет»
            </blockquote>
          </div>

          {/* Atmosphere Description */}
          <p className="mb-12 text-lg leading-relaxed md:text-xl text-pretty">
            Ветер в волосах, горы вокруг, завораживающий вид, аромат свежих эмпанад, локальный обед и горячий кофе — тишина на краю Земли.
          </p>

          {/* Special For You Section */}
          <div>
            <h2 className="mb-2 text-xl font-bold uppercase tracking-wide text-[#1A2B45]/60 md:text-2xl">
              СПЕЦИАЛЬНО ДЛЯ ВАС
            </h2>
            <p className="text-lg leading-relaxed md:text-xl">
              Мы подбираем место, учитывая маршрут и погоду
            </p>
          </div>
        </div>

        {/* Footer / Cost */}
        <div className="mb-12 flex flex-wrap items-baseline justify-between gap-4 border-t border-[#1A2B45] pt-6">
          <div>
            <p className="mb-1 text-sm uppercase tracking-wide text-[#1A2B45]/60">СТОИМОСТЬ:</p>
            <p className="text-sm text-[#1A2B45]/60">*минимальный заказ - 300$</p>
          </div>
          <p className="text-2xl font-bold md:text-3xl">60 $ / ЗА ЧЕЛ</p>
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
