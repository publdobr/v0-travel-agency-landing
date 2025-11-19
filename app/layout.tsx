import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Вика и Ваня Богатые — Гиды и продюсеры путешествий в Патагонию и Антарктиду",
  description: "Авторские путешествия в Патагонию, Аргентину и Антарктиду. Индивидуальные туры, экспедиции и культурные погружения от опытных полярных гидов с 9-летним опытом.",
  keywords: "Патагония, Аргентина, Антарктида, путешествия, экспедиции, авторские туры, гиды, Ушуайя",
  openGraph: {
    title: "Вика и Ваня Богатые — Авторские путешествия в Патагонию",
    description: "Проектируем путешествия, где важна каждая деталь. 9 лет опыта, 1863 довольных путешественника, 209 авторских маршрутов.",
    type: "website",
  },
    generator: 'v0.app'
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#EEECE8',
  userScalable: true,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      {/* Устанавливаем bg-[#EEECE8] и центрируем дочерний элемент */}
      <body className="antialiased bg-[#EEECE8] min-h-screen flex justify-center">
        {/* Обертка для контента: максимальная ширина 4XL (~900px), центрирование по горизонтали, фон и тень. */}
        <div className="w-full max-w-4xl bg-[#EEECE8] shadow-xl min-h-screen">
          {children}
        </div>
      </body>
    </html>
  );
}
