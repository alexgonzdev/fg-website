import type { Metadata } from 'next';
import { generatePageMetadata } from '@/lib/metadata';

export const metadata: Metadata = generatePageMetadata('vintage-beef-co');

export default function VintageBeefCoPage() {
  return (
    <div className="min-h-screen bg-primary-900">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-b from-primary-800 to-primary-900 py-20 lg:py-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-heading text-5xl sm:text-6xl lg:text-7xl text-neutral-100 mb-6 tracking-tight">
            Vintage Beef Co
          </h1>
          <p className="font-body text-xl sm:text-2xl text-neutral-300 leading-relaxed max-w-2xl mx-auto mb-8">
            Australia's premier aged beef program featuring three distinct tiers of vaca vieja excellence from grass-fed cattle aged 5-15 years.
          </p>
          <a 
            href="/contact" 
            className="inline-flex items-center px-8 py-4 bg-accent-500 text-primary-900 font-semibold rounded-lg hover:bg-accent-400 transition-colors"
          >
            Inquire Now
          </a>
        </div>
      </div>

      {/* Program Details */}
      <div className="py-20 lg:py-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Program Overview */}
          <div className="mb-16">
            <h2 className="font-heading text-3xl lg:text-4xl text-neutral-100 mb-8 text-center">
              The Vaca Vieja Tradition
            </h2>
            <div className="prose prose-lg prose-invert max-w-none">
              <p className="text-neutral-300 text-lg leading-relaxed mb-6">
                Vintage Beef Co represents Australia's interpretation of the Spanish Galician beef tradition, where cattle are deliberately aged far beyond conventional processing times. From the rolling hills of Gippsland, Australia, this unique program allows breeding cattle to graze on pasture for a minimum of 5 years, with some Wagyu cows reaching up to 15 years of age.
              </p>
              <p className="text-neutral-300 text-lg leading-relaxed mb-6">
                These retired breeding cattle are turned out to pasture where they feed exclusively on grass in a relaxed environment. The extended aging process - more than twice the age of regular cattle - develops a rich, complex grass-fed flavor alongside superb marbling that creates a distinct and unforgettable eating experience.
              </p>
              <p className="text-neutral-300 text-lg leading-relaxed">
                All Vintage Beef Co cattle are 100% grass-fed, including the Wagyu, and certified by the third-party audited Greenham Never Ever program, ensuring no antibiotics, hormones, or artificial additives are ever used.
              </p>
            </div>
          </div>

          {/* Three Tiers */}
          <div className="mb-16">
            <h2 className="font-heading text-3xl lg:text-4xl text-neutral-100 mb-12 text-center">
              Three Distinct Tiers
            </h2>
            
            {/* Reserva */}
            <div className="mb-12 p-8 bg-primary-800 rounded-lg">
              <h3 className="font-heading text-2xl lg:text-3xl text-accent-500 mb-4">
                Reserva (MB 1-2)
              </h3>
              <p className="text-neutral-300 text-lg leading-relaxed">
                The entry point into aged beef excellence. Reserva offers authentic "old-cow" beef flavor without breaking the budget. These cattle deliver matured meat flavor with the rich, developed taste that comes from extended grass-fed aging. Perfect for those seeking genuine beef character and a great conversation starter about the perfect steak preparation.
              </p>
            </div>

            {/* Galiciana */}
            <div className="mb-12 p-8 bg-primary-800 rounded-lg">
              <h3 className="font-heading text-2xl lg:text-3xl text-accent-500 mb-4">
                Galiciana (MB 3+)
              </h3>
              <p className="text-neutral-300 text-lg leading-relaxed">
                The premium tier designed to impress the most discerning beef connoisseurs. Galiciana combines full beef flavor with delicious marbling, delivering an experience reminiscent of the finest Basque country dining. This grade represents the perfect balance of age-developed flavor and marbling quality that defines exceptional aged beef.
              </p>
            </div>

            {/* Matriarch */}
            <div className="p-8 bg-primary-800 rounded-lg">
              <h3 className="font-heading text-2xl lg:text-3xl text-accent-500 mb-4">
                The Matriarch (Vintage Wagyu)
              </h3>
              <p className="text-neutral-300 text-lg leading-relaxed">
                The crown jewel of the Vintage Beef Co program. These are breeding stock from Australia's finest Wagyu genetics, chosen for consistent quality and superior marbling characteristics. Aged up to fifteen years, Matriarch beef delivers spectacular depth of flavor alongside creamy, luxurious marbling. Known as "The Grande Dame of old cows," this represents the ultimate expression of aged Wagyu beef - where time, genetics, and grass-fed excellence converge.
              </p>
            </div>
          </div>

          {/* Quality Standards */}
          <div className="mb-16">
            <h2 className="font-heading text-3xl lg:text-4xl text-neutral-100 mb-8 text-center">
              Quality Standards
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-6 bg-primary-800 rounded-lg">
                <h3 className="font-heading text-xl text-accent-500 mb-4">Grass-Fed Excellence</h3>
                <p className="text-neutral-300">100% grass-fed throughout their lives, including Wagyu cattle, ensuring clean flavor development and natural marbling.</p>
              </div>
              <div className="p-6 bg-primary-800 rounded-lg">
                <h3 className="font-heading text-xl text-accent-500 mb-4">Extended Aging</h3>
                <p className="text-neutral-300">Minimum 5 years for British breeds, up to 15 years for Wagyu, allowing full flavor maturation and marbling development.</p>
              </div>
              <div className="p-6 bg-primary-800 rounded-lg">
                <h3 className="font-heading text-xl text-accent-500 mb-4">Never Ever Program</h3>
                <p className="text-neutral-300">Third-party certified program ensuring no antibiotics, hormones, growth promotants, or artificial additives.</p>
              </div>
              <div className="p-6 bg-primary-800 rounded-lg">
                <h3 className="font-heading text-xl text-accent-500 mb-4">Breeding Stock Quality</h3>
                <p className="text-neutral-300">Sourced from retired breeding cattle with superior genetics, ensuring consistent quality and marbling characteristics.</p>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Contact CTA */}
      <div className="bg-primary-800 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="font-heading text-3xl lg:text-4xl text-neutral-100 mb-6">
            Experience Aged Beef Excellence
          </h3>
          <p className="text-neutral-300 text-lg mb-8 max-w-2xl mx-auto">
            Contact our team to discuss availability and specifications for Vintage Beef Co's three distinct tiers.
          </p>
          <a 
            href="/contact" 
            className="inline-flex items-center px-8 py-4 bg-accent-500 text-primary-900 font-semibold rounded-lg hover:bg-accent-400 transition-colors"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </div>
  );
}