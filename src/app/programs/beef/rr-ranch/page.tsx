import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'RR Ranch - American Angus Upper Choice/Prime | F&G Meats',
  description: 'Premium American Angus Upper Choice/Prime beef from RR Ranch. Northwest premium quality with multi-generational ranching expertise.',
};

export default function RRRanchPage() {
  return (
    <div className="min-h-screen bg-primary-900">
      {/* Hero Image Section */}
      <div className="relative h-[60vh] lg:h-[70vh] overflow-hidden">
        {/* Hero Image */}
        <div className="absolute inset-0">
          <img 
            src="/images/ranching.jpg" 
            alt="Double RR Ranch cattle grazing on Northwest pastureland" 
            className="w-full h-full object-cover"
          />
        </div>
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Program Info Section */}
      <div className="relative -mt-32 z-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-primary-900 rounded-lg p-8 lg:p-12 shadow-2xl text-center">
            {/* Program Name */}
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl text-neutral-100 mb-6 tracking-tight">
              RR Ranch
            </h1>
            
            {/* Brief Summary */}
            <p className="font-body text-xl sm:text-2xl text-neutral-200 leading-relaxed mb-8 max-w-2xl mx-auto">
              Northwest beef program delivering consistent marbling and clean flavor through controlled grain-finishing and full processing oversight.
            </p>
            
            {/* Inquire Now Button */}
            <a 
              href="/contact" 
              className="inline-flex items-center px-10 py-4 bg-accent-500 text-primary-900 font-semibold text-lg rounded-lg hover:bg-accent-400 transition-colors shadow-lg"
            >
              Inquire Now
            </a>
          </div>
        </div>
      </div>

      {/* Detailed Description Section */}
      <div className="py-20 lg:py-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg prose-invert max-w-none">
            {/* Detailed Content */}
            <div className="space-y-8">
              <div>
                <p className="text-neutral-200 text-lg leading-relaxed mb-6">
                  Double R Ranch is a Northwest beef program raised across Washington, Oregon, and Idaho, where cooler temperatures, open pastureland, and clean water sources support steady cattle growth. These environmental conditions contribute to consistent marbling development, firmer fat, and a clean beef flavor profile that performs reliably in professional kitchens.
                </p>
                <p className="text-neutral-300 text-lg leading-relaxed mb-6">
                  Cattle are pasture-raised and then grain-finished on Northwest feed rations that include locally sourced corn, wheat, barley, and other grains. This feeding program is designed to produce beef that is balanced in richness, tender in texture, and structurally sound for high-heat cooking, with predictable results across cuts.
                </p>
                <p className="text-neutral-200 text-lg leading-relaxed mb-6">
                  The Double R Ranch program includes both USDA Choice and USDA Prime beef. Cattle are selected for uniform carcass quality, yield, and consistency, allowing for reliable sizing and predictable box performance. This attention to uniformity ensures that chefs receive consistent product specifications with every delivery.
                </p>
                <p className="text-neutral-300 text-lg leading-relaxed mb-6">
                  RR Signature represents the premium tier within the Double R Ranch program, selecting only the upper two-thirds of USDA Choice carcasses. This results in higher marbling than standard Choice and an eating quality that sits closer to Prime while maintaining consistent supply availability for high-volume operations.
                </p>
                <p className="text-neutral-200 text-lg leading-relaxed mb-8">
                  All Double R Ranch beef is processed at Agri Beef–owned facilities in the Northwest, which allows full control over fabrication, trimming, and packaging. This vertical integration ensures consistent specifications, clean cuts, uniform sizing, and dependable yields across all orders, giving chefs the reliability they need for menu planning and cost control.
                </p>
              </div>

              {/* Additional Images Section */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
                <div className="aspect-[4/3] bg-gradient-to-br from-neutral-800 to-neutral-900 rounded-lg overflow-hidden">
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-accent-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-accent-500 text-xl font-bold">🏔️</span>
                      </div>
                      <span className="text-neutral-400">Northwest Pastureland</span>
                    </div>
                  </div>
                </div>
                <div className="aspect-[4/3] bg-gradient-to-br from-neutral-800 to-neutral-900 rounded-lg overflow-hidden">
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-accent-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-accent-500 text-xl font-bold">🥩</span>
                      </div>
                      <span className="text-neutral-400">RR Signature Cuts</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Breadcrumb at bottom */}
      <div className="bg-primary-800 py-4">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex text-sm text-neutral-300">
            <Link href="/" className="hover:text-accent-500 transition-colors">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/programs/beef" className="hover:text-accent-500 transition-colors">Beef Programs</Link>
            <span className="mx-2">/</span>
            <span className="text-neutral-100">RR Ranch</span>
          </nav>
        </div>
      </div>
    </div>
  );
}