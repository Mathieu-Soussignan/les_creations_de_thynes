import { Link } from 'react-router-dom';
import { Disclosure } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const navigation = [
  { name: 'Accueil', href: '/' },
  { name: 'Créations', href: '/creations' },
  { name: 'À propos', href: '/about' },
  { name: 'Contact', href: '/contact' },
];

const Header = () => {
  return (
    <header>
      <Disclosure as="nav" className="bg-[#f1d8d8] shadow-lg font-paradise">
        {({ open }) => (
          <>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex items-center justify-between h-16">
                {/* Logo Section */}
                <div className="flex items-center">
                  <Link to="/" className="flex-shrink-0">
                    <img
                      className="h-10 w-10 rounded-full"
                      src={new URL('/src/assets/img/logo-thynes.JPEG', import.meta.url).href}
                      alt="Logo Créa'Tine"
                    />
                  </Link>

                  {/* Desktop Navigation */}
                  <div className="hidden md:block">
                    <div className="ml-10 flex items-baseline space-x-4">
                      {navigation.map((item) => (
                        <Link
                          key={item.name}
                          to={item.href}
                          className="text-[#7e7064] hover:bg-[#A69483] hover:text-white px-3 py-2 rounded-md text-sm font-medium transition duration-300 font-paradise"
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden">
                  <Disclosure.Button className="bg-[#F2D4D7] inline-flex items-center justify-center p-2 rounded-md text-[#A69483] hover:text-white hover:bg-[#A69483] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#F2D4D7] font-paradise">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
              </div>
            </div>

            {/* Mobile Navigation */}
            <Disclosure.Panel className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="text-[#7e7064] hover:bg-[#A69483] hover:text-white block px-3 py-2 rounded-md text-base font-medium transition duration-300 font-paradise"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </header>
  );
};

export default Header;