'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

export function NavigationMenu() {
  const [isOpen, setIsOpen] = useState(false)
  const [isHovering, setIsHovering] = useState(false)

  const menuItems = [
    { href: '/', label: 'Главная' },
    { href: '#why-us', label: 'Почему мы' },
    { href: '#who-we-are', label: 'Кто мы' },
    { href: '#target-audience', label: 'Вам к нам, если' },
    { href: '#services', label: 'Наши услуги' },
    { href: '#media', label: 'Интервью и подкасты' },
    { href: '#contact', label: 'Контакты' },
    { href: '/about', label: 'О нас' },
  ]

  return (
    <div 
      className="fixed right-6 top-6 z-50 md:right-12 lg:right-24"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {/* Menu Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex h-12 w-12 items-center justify-center bg-[#1A2B45] text-white transition-colors hover:bg-[#1A2B45]/80 md:h-14 md:w-14"
        aria-label="Открыть меню"
        aria-expanded={isOpen || isHovering}
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Dropdown Menu */}
      {(isOpen || isHovering) && (
        <nav
          className="absolute right-0 top-14 min-w-[280px] bg-[#1A2B45] text-white shadow-xl md:top-16 md:min-w-[320px]"
          aria-label="Основное меню"
        >
          <ul className="py-2">
            {menuItems.map((item, index) => (
              <li key={index}>
                <Link
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="block border-b border-white/10 px-6 py-4 text-base font-medium uppercase tracking-wide transition-colors hover:bg-white/10 md:text-lg"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </div>
  )
}
