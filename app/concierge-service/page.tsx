import { ArrowUpRight } from "lucide-react"
import Link from "next/link"

export default function ConciergeServicePage() {
  return (
    <main className="min-h-screen bg-[#EEECE8] px-6 py-12 text-[#1A2B45] md:px-12 lg:px-24">
      <div className="mx-auto max-w-4xl">
        {/* Header */}
        <header className="mb-12">
          <h1 className="mb-6 text-4xl font-bold uppercase leading-tight md:text-5xl lg:text-6xl text-balance">
            КОНСЬЕРЖ-СЕРВИС ДЛЯ ПУТЕШЕСТВИЙ (БЕЗ ГИДА)
          </h1>
          <p className="text-lg text-[#1A2B45]/60 md:text-xl">
            Вы путешествуете самостоятельно, а я составляю для вас детальный маршрут и поддерживаю онлайн
          </p>
        </header>

        {/* Main Content Card */}
        <div className="mb-12 space-y-8 bg-[#E5E5E5] p-8 md:p-12">
          <div>
            <h2 className="mb-4 text-2xl font-bold uppercase text-[#1A2B45] md:text-3xl">КАК ЭТО РАБОТАЕТ?</h2>
            <ul className="space-y-3">
              <li className="text-lg leading-relaxed text-[#1A2B45]/80">
                <span className="font-medium">(1)</span> Вы рассказываете о планах и пожеланиях
              </li>
              <li className="text-lg leading-relaxed text-[#1A2B45]/80">
                <span className="font-medium">(2)</span> Я разрабатываю маршрут, бронирую ключевые точки
              </li>
              <li className="text-lg leading-relaxed text-[#1A2B45]/80">
                <span className="font-medium">(3)</span> Вы получаете подробный роад-мап
              </li>
              <li className="text-lg leading-relaxed text-[#1A2B45]/80">
                <span className="font-medium">(4)</span> Я остаюсь на связи и помогаю при необходимости
              </li>
            </ul>
          </div>

          <div>
            <h2 className="mb-4 text-2xl font-bold uppercase text-[#1A2B45] md:text-3xl">ЧТО ВХОДИТ:</h2>
            <ul className="space-y-2">
              <li className="text-lg leading-relaxed text-[#1A2B45]/80">• Персональный маршрут под вас</li>
              <li className="text-lg leading-relaxed text-[#1A2B45]/80">• Подбор отелей, транспорта и экскурсий</li>
              <li className="text-lg leading-relaxed text-[#1A2B45]/80">
                • Советы по кафе, ресторанам, уникальным местам
              </li>
              <li className="text-lg leading-relaxed text-[#1A2B45]/80">• Поддержка 24/7 в экстренных ситуациях</li>
            </ul>
          </div>
        </div>

        {/* Footer / Cost */}
        <div className="mb-12 border-t border-[#1A2B45] pt-6">
          <div className="flex flex-wrap items-baseline justify-between gap-4">
            <div>
              <p className="mb-1 text-sm uppercase tracking-wide text-[#1A2B45]/60">СТОИМОСТЬ:</p>
              <p className="text-sm text-[#1A2B45]/60">*зависит от маршрута и длительности</p>
            </div>
            <p className="text-2xl font-bold md:text-3xl">РАССЧИТЫВАЕТСЯ ИНДИВИДУАЛЬНО</p>
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
