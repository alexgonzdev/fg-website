import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'WinterFrost American Wagyu | F&G Meats',
  description: 'Premium American Wagyu beef from WinterFrost. 100% Tajima Black Wagyu lineage, born and raised in the USA with exceptional marbling and flavor.',
};

export default function WinterFrostPage() {
  return (
    <div className="min-h-screen bg-primary-900 bg-cover bg-center bg-no-repeat bg-fixed relative" style={{ backgroundImage: "url('/images/wagyu-grazing.jpg')" }}>
      {/* Dark overlay for entire page */}
      <div className="absolute inset-0 bg-primary-900/80" />
      
      {/* Hero Section */}
      <div className="relative z-10 pt-32 pb-16 lg:pt-40 lg:pb-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-heading text-5xl sm:text-6xl lg:text-7xl text-neutral-100 mb-6 tracking-tight">
            WinterFrost
          </h1>
          
          {/* Logo */}
          <div className="max-w-xs mx-auto mb-8">
            <div className="bg-white rounded-lg p-6">
              <img 
                src="/images/Screenshot_25-1-2026_14140_www.dropbox.com.jpeg" 
                alt="WinterFrost Logo"
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
          
          <p className="font-body text-xl sm:text-2xl text-neutral-200 leading-relaxed max-w-3xl mx-auto drop-shadow-lg">
            American Wagyu Beef — 100% Tajima Black Wagyu lineage delivering buttery, beefy, fork-tender excellence.
          </p>
        </div>
      </div>

      {/* Program Info Section */}
      <div className="relative z-10 py-16 lg:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="font-body text-lg sm:text-xl text-neutral-200 leading-relaxed max-w-4xl mx-auto drop-shadow-lg">
              WinterFrost breeds select American cattle with Tajima Kuroge Washu bulls — the gold standard of Black Wagyu from Japan. Born and raised in the United States, their cattle are fed premium, vegetarian, whole grains and are never given growth promotants or hormones of any kind.
            </p>
          </div>

          {/* Key Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-primary-900/60 backdrop-blur-sm rounded-lg p-8 border border-accent-500/20 text-center">
              <h3 className="font-heading text-2xl text-accent-500 mb-4">100% Tajima Lineage</h3>
              <p className="text-neutral-200">Bred from Tajima Black Wagyu bulls — the legendary bloodline prized for extraordinary intramuscular marbling.</p>
            </div>

            <div className="bg-primary-900/60 backdrop-blur-sm rounded-lg p-8 border border-accent-500/20 text-center">
              <h3 className="font-heading text-2xl text-accent-500 mb-4">Born & Raised USA</h3>
              <p className="text-neutral-200">American cattle fed premium vegetarian whole grains with zero hormones or growth promotants.</p>
            </div>

            <div className="bg-primary-900/60 backdrop-blur-sm rounded-lg p-8 border border-accent-500/20 text-center">
              <h3 className="font-heading text-2xl text-accent-500 mb-4">BMS 6-8 Grade</h3>
              <p className="text-neutral-200">Single-tiered grading system ensuring consistent, exceptional quality with intricate marbling patterns.</p>
            </div>
          </div>

          {/* Quality Standards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6">
              <h2 className="font-heading text-3xl lg:text-4xl text-neutral-100">Raise Your Expectations</h2>
              <div className="space-y-4 text-neutral-200">
                <p>WinterFrost delivers American Wagyu's exceptional flavor and quality with unparalleled predictability. Their breeding program harnesses the superior qualities of 100% Tajima Black Wagyu bloodlines, creating luxurious beef that is buttery, beefy, and tender.</p>
                <p>Produced within Greater Omaha's facility — a name recognized worldwide since 1920 for the finest quality beef — WinterFrost continues their storied legacy with a premium American Wagyu product.</p>
              </div>
              <div className="pt-4">
                <a 
                  href="/contact" 
                  className="inline-flex items-center gap-2 bg-accent-500 hover:bg-accent-600 text-primary-900 font-semibold px-8 py-4 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Inquire About WinterFrost
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-primary-900/60 backdrop-blur-sm rounded-lg p-6 border border-accent-500/20">
                <h3 className="font-heading text-xl text-accent-500 mb-3">On-Site Validation</h3>
                <p className="text-neutral-300">Expert authorization with breed verification: Tajima Wagyu + predominantly Jersey. Premium A-maturity cattle that are age and source verified.</p>
              </div>
              <div className="bg-primary-900/60 backdrop-blur-sm rounded-lg p-6 border border-accent-500/20">
                <h3 className="font-heading text-xl text-accent-500 mb-3">Predictive Technology</h3>
                <p className="text-neutral-300">Cattle are preselected for size, genetics, and marbling using ultrasound predictive technology not seen elsewhere in the industry.</p>
              </div>
              <div className="bg-primary-900/60 backdrop-blur-sm rounded-lg p-6 border border-accent-500/20">
                <h3 className="font-heading text-xl text-accent-500 mb-3">Optimally Sized Cuts</h3>
                <p className="text-neutral-300">Precision cattle production means primals are only available in the most preferred weights — perfect for plating the ideal thick-cut steak.</p>
              </div>
            </div>
          </div>

          {/* Featured Image */}
          <div className="text-center">
            <h2 className="font-heading text-3xl lg:text-4xl text-neutral-100 mb-8">WinterFrost Excellence</h2>
            <div className="max-w-lg mx-auto">
              <div className="aspect-[4/3] rounded-lg overflow-hidden border border-accent-500/20">
                <img 
                  src="/images/wf wagyu cuts.jpeg" 
                  alt="WinterFrost American Wagyu"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
