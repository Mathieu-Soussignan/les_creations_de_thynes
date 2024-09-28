import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto px-4 py-8 bg-[#f1d8d8]"
    >
      <motion.h1
        initial={{ y: -50 }}
        animate={{ y: 0 }}
        transition={{ delay: 0.2, type: 'spring', stiffness: 120 }}
        className="text-4xl font-bold mb-6 text-[#4c6941]"
      >
        Bienvenue dans l&apos;univers créatif de Thynes
      </motion.h1>
      <motion.p
        variants={fadeInUp}
        initial="initial"
        animate="animate"
        className="text-xl mb-8 text-[#7e7064]"
      >
        Découvrez mes créations uniques faites avec passion : crochet, tricot, sacs, nounours et bien plus encore !
      </motion.p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="bg-white shadow-lg rounded-lg overflow-hidden transition duration-300 hover:shadow-xl border border-[#7e7064]"
        >
          <img
            src={new URL('/src/assets/img/elfes.jpg', import.meta.url).href}
            alt="Créations récentes de Créa'Tine"
            className="w-full h-64 object-cover"
            loading="lazy"
          />
          <div className="p-6">
            <h2 className="text-2xl font-semibold mb-2 text-[#678D58]">Mes dernières créations</h2>
            <p className="mb-4 text-[#7e7064]">Explorez mes projets les plus récents et laissez-vous inspirer.</p>
            <Link
              to="/creations"
              className="bg-[#F2D4D7] text-[#A69483] py-2 px-4 rounded hover:bg-[#A69483] hover:text-white transition duration-300 inline-block"
            >
              Voir les créations
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="bg-white shadow-lg rounded-lg overflow-hidden transition duration-300 hover:shadow-xl border border-[#7e7064]"
        >
          <img
            src={new URL('/src/assets/img/logo.jpg', import.meta.url).href}
            alt="À propos de Créa'Tine"
            className="w-full h-64 object-cover"
            loading="lazy"
          />
          <div className="p-6">
            <h2 className="text-2xl font-semibold mb-2 text-[#678D58]">À propos de moi</h2>
            <p className="mb-4 text-[#7e7064]">
              Apprenez-en plus sur ma passion pour l&apos;artisanat et mon parcours créatif.
            </p>
            <Link
              to="/about"
              className="bg-[#F2D4D7] text-[#A69483] py-2 px-4 rounded hover:bg-[#A69483] hover:text-white transition duration-300 inline-block"
            >
              En savoir plus
            </Link>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Home;