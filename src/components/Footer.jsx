import { Link } from 'react-router-dom';

// Correct paths to the SVG icons
import FacebookIcon from '../assets/icons/facebook.svg';
import InstagramIcon from '../assets/icons/instagram.svg';
import PinterestIcon from '../assets/icons/pinterest.svg';

const Footer = () => {
  return (
    <footer className="bg-[#f1d8d8] text-[#7e7064] py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-xl font-semibold mb-2 font-paradise">L&apos;univers créatif de Thyne</h3>
            <p className="text-[#7e7064] font-paradise">Créations artisanales uniques et faites avec passion.</p>
          </div>
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-xl font-semibold mb-2 font-paradise">Liens rapides</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-[#A69483] transition duration-300 font-paradise">Accueil</Link></li>
              <li><Link to="/creations" className="hover:text-[#A69483] transition duration-300 font-paradise">Créations</Link></li>
              <li><Link to="/about" className="hover:text-[#A69483] transition duration-300 font-paradise">À propos</Link></li>
              <li><Link to="/contact" className="hover:text-[#A69483] transition duration-300 font-paradise">Contact</Link></li>
            </ul>
          </div>
          <div className="w-full md:w-1/3">
            <h3 className="text-xl font-semibold mb-2 font-paradise">Suivez-moi</h3>
            <div className="flex space-x-4">
              <a href="https://facebook.com" aria-label="Facebook" target="_blank" rel="noopener noreferrer" className="hover:text-[#A69483] transition duration-300">
                <img src={FacebookIcon} alt="Facebook" className="w-6 h-6" loading="lazy" />
              </a>
              <a href="https://instagram.com" aria-label="Instagram" target="_blank" rel="noopener noreferrer" className="hover:text-[#A69483] transition duration-300">
                <img src={InstagramIcon} alt="Instagram" className="w-6 h-6" loading="lazy" />
              </a>
              <a href="https://pinterest.com" aria-label="Pinterest" target="_blank" rel="noopener noreferrer" className="hover:text-[#A69483] transition duration-300">
                <img src={PinterestIcon} alt="Pinterest" className="w-6 h-6" loading="lazy" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center text-[#7e7064]">
          <p>&copy; {new Date().getFullYear()} L&apos;univers créatif de Thyne. Tous droits réservés. Développé par <a href="https://www.mathieu-soussignan.com" target="_blank" rel="noopener noreferrer">Mathieu Soussignan</a></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;