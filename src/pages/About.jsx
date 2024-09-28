import PropTypes from 'prop-types';

// Composant réutilisable pour les paragraphes
const Paragraph = ({ children }) => (
  <p className="mb-4 text-gray-600">{children}</p>
);

Paragraph.propTypes = {
  children: PropTypes.node.isRequired,
};

const About = () => {
  return (
    <section className="container mx-auto px-4 py-8">
      <header>
        <h1 className="text-4xl font-bold mb-6 text-[#4c6941]">À propos de moi</h1>
      </header>
      
      <article className="flex flex-col md:flex-row items-center md:items-start gap-8">
        {/* Image avec lazy loading et meilleure description pour l'accessibilité */}
        <img 
          src="/path/to/image.jpg" 
          srcSet="/path/to/image-400.jpg 400w, /path/to/image-800.jpg 800w" 
          sizes="(max-width: 768px) 400px, 800px"
          alt="Portrait de Créa'Tine, passionnée d'artisanat" 
          className="w-64 h-64 rounded-full object-cover shadow-lg" 
          loading="lazy"
        />
        
        <div className="bg-white shadow-lg rounded-lg p-6">
          <Paragraph>
            Hello ! Je suis Thynes, une passionnée d&apos;artisanat et de création depuis toujours.
          </Paragraph>
          <Paragraph>
            J&apos;ai découvert ma passion pour le tricot et le crochet il y a plusieurs années, et depuis, je ne cesse d&apos;explorer de nouvelles techniques et de créer des pièces uniques. Chacune de mes créations est faite avec amour et attention aux détails.
          </Paragraph>
          <Paragraph>
            Mon inspiration vient de la nature, des couleurs qui m&apos;entourent et des gens que je rencontre. J&apos;aime particulièrement créer des objets qui apportent de la joie et du réconfort, comme des nounours en crochet pour les enfants ou des accessoires douillets pour l&apos;hiver.
          </Paragraph>
          <Paragraph>
            À travers ce site, je souhaite partager ma passion avec vous et peut-être vous inspirer à découvrir votre propre créativité !
          </Paragraph>
        </div>
      </article>
    </section>
  );
};

export default About;