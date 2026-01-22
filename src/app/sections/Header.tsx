'use client';

import Button from '@/components/Button';
import { Menu } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useState, useRef, useEffect } from 'react';
import { useRouter } from 'next/navigation';

const navItems = [
  {
    name: 'О нас',
    href: '#about',
  },
  {
    name: 'Услуги',
    href: '#services',
  },
  {
    name: 'Контакты',
    href: '#contacts',
  },
];

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const goToContacts = () => router.push("/#contacts");
  // Закрытие меню при клике вне его
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header>
      <div className="container mx-auto max-w-5xl flex justify-between items-center bg-white shadow-md px-4 py-2">
        <div className="flex items-center gap-2">
          <Image src="/logo.png" alt="logo" width={50} height={50} />
          <div className="flex flex-col">
            <p className="font-neucha text-2xl md:text-3xl lg:text-4xl">
              Учёный Кот
            </p>
            <p className="text-xs sm:text-base text-[var(--secondary)]">Студия раннего развития</p>
          </div>
        </div>
        <div className="hidden lg:block">
          <nav className="flex items-center gap-6 lg:gap-10 text-xs sm:text-xl text-[var(--secondary)] roboto">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="hover:text-[var(--secondary)]/60 transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
        <div className="menu relative lg:hidden" ref={menuRef}>
          <button
            onClick={toggleMenu}
            className="p-2 hover:bg-gray-100 rounded-md transition-colors"
            aria-label={isMenuOpen ? 'Закрыть меню' : 'Открыть меню'}
            aria-expanded={isMenuOpen}
            aria-haspopup="true"
          >
            <Menu />
          </button>

          {/* Дропдаун меню */}
          <div
            className={`absolute text-xl right-0 w-auto top-full mt-2 px-4 bg-white rounded-md shadow-lg border border-gray-200 py-2 z-50 transition-all duration-200 ease-in-out ${
              isMenuOpen
                ? 'opacity-100 visible transform translate-y-0'
                : 'opacity-0 invisible transform -translate-y-2'
            }`}
            role="menu"
            aria-hidden={!isMenuOpen}
          >
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block px-4 py-2 text-[var(--foreground)] hover:bg-gray-100 transition-colors"
                onClick={() => setIsMenuOpen(false)}
                role="menuitem"
              >
                {item.name}
              </Link>
            ))}
            <Button
              variant="primary"
              onClick={() => {
                setIsMenuOpen(false);
                goToContacts();
              }}
            >
              Записаться
            </Button>
          </div>
        </div>
        <div className="hidden lg:block">
          <Button variant="primary" onClick={goToContacts}>
            Записаться
          </Button>
        </div>
      </div>
    </header>
  );
}

export default Header;
