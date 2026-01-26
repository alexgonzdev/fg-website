import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Greater Omaha Packing | F&G Meats',
  description: 'Premium Midwest Angus and Hereford beef from Greater Omaha Packing. Since 1920, delivering unparalleled quality from family-owned producers.',
};

export default function GreaterOmahaPage() {
  return (
    <div className="min-h-screen bg-primary-900 bg-cover bg-center bg-no-repeat bg-fixed relative" style={{ backgroundImage: "url('/images/ranching.jpg')" }}>
      {/* Dark overlay for entire page */}
      <div className="absolute inset-0 bg-primary-900/80" />
      
      {/* Hero Section */}
      <div className="relative z-10 pt-32 pb-16 lg:pt-40 lg:pb-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-heading text-5xl sm:text-6xl lg:text-7xl text-neutral-100 mb-6 tracking-tight">
            Greater Omaha Packing
          </h1>
          
          {/* Logo */}
          <div className="max-w-xs mx-auto mb-8">
            <div className="bg-white rounded-lg p-6">
              <img 
                src="/images/Screenshot_25-1-2026_133933_www.dropbox.com.jpeg" 
                alt="Greater Omaha Packing Logo"
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
          
          <p className="font-body text-xl sm:text-2xl text-neutral-200 leading-relaxed max-w-3xl mx-auto drop-shadow-lg">
            Premium Midwest Angus & Hereford beef since 1920. An uncompromising commitment to quality, delivering excellence to customers worldwide.
          </p>
        </div>
      </div>

      {/* Program Info Section */}
      <div className="relative z-10 py-16 lg:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="font-body text-lg sm:text-xl text-neutral-200 leading-relaxed max-w-4xl mx-auto drop-shadow-lg">
              Greater Omaha Packing has been in the beef business since 1920. Located in the heart of the world's finest natural environment for raising beef cattle, they source premium corn-fed cattle from small, family-owned producers within 250 miles of Omaha. As a single-source processor, they maintain maximum control from pasture to plate.
            </p>
          </div>

          {/* Brand Programs */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {/* 1920 Angus */}
            <div className="bg-primary-900/60 backdrop-blur-sm rounded-lg p-8 border border-accent-500/20">
              <h3 className="font-heading text-2xl text-accent-500 mb-4">1920 Angus</h3>
              <p className="text-neutral-300 mb-4">Top Choice or Higher Marbling (G-104)</p>
              <p className="text-neutral-200">Premium Angus beef with exceptional marbling, representing the finest quality from Greater Omaha's heritage program.</p>
            </div>

            {/* Classic Angus */}
            <div className="bg-primary-900/60 backdrop-blur-sm rounded-lg p-8 border border-accent-500/20">
              <h3 className="font-heading text-2xl text-accent-500 mb-4">Classic Angus</h3>
              <p className="text-neutral-300 mb-4">USDA Choice or Higher (G-104A)</p>
              <p className="text-neutral-200">Consistent, high-quality Angus beef delivering reliable performance for foodservice and retail.</p>
            </div>

            {/* 1881 Hereford */}
            <div className="bg-primary-900/60 backdrop-blur-sm rounded-lg p-8 border border-accent-500/20">
              <h3 className="font-heading text-2xl text-accent-500 mb-4">1881 Hereford</h3>
              <p className="text-neutral-300 mb-4">Upper 2/3 Choice or Higher (G-103)</p>
              <p className="text-neutral-200">Premium Hereford beef known for its rich flavor and tenderness, sourced from heritage cattle.</p>
            </div>

            {/* Classic Hereford */}
            <div className="bg-primary-900/60 backdrop-blur-sm rounded-lg p-8 border border-accent-500/20">
              <h3 className="font-heading text-2xl text-accent-500 mb-4">Classic Hereford</h3>
              <p className="text-neutral-300 mb-4">USDA High Select or Higher (G-103A)</p>
              <p className="text-neutral-200">Quality Hereford beef with consistent flavor profiles, perfect for everyday excellence.</p>
            </div>
          </div>

          {/* Quality Standards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="font-heading text-3xl lg:text-4xl text-neutral-100">Cattle Supply & Quality</h2>
              <div className="space-y-4 text-neutral-200">
                <p>Greater Omaha's cattle buyers source Hereford, Angus, and Black Baldy cattle from trusted family-owned producers. Only cattle with an English heritage matching strict feed and age requirements are chosen.</p>
                <p>Their grading is considerably higher than the industry average, allowing them to deliver consistent, high-quality beef products to every U.S. state and over 70 countries around the globe.</p>
              </div>
              <div className="pt-4">
                <a 
                  href="/contact" 
                  className="inline-flex items-center gap-2 bg-accent-500 hover:bg-accent-600 text-primary-900 font-semibold px-8 py-4 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Inquire About Greater Omaha
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-primary-900/60 backdrop-blur-sm rounded-lg p-6 border border-accent-500/20">
                <h3 className="font-heading text-xl text-accent-500 mb-3">Since 1920</h3>
                <p className="text-neutral-300">Over a century of excellence in the beef business, constantly at the forefront of innovation in food safety and humane treatment of animals.</p>
              </div>
              <div className="bg-primary-900/60 backdrop-blur-sm rounded-lg p-6 border border-accent-500/20">
                <h3 className="font-heading text-xl text-accent-500 mb-3">Single-Source Processing</h3>
                <p className="text-neutral-300">Maximum control from pasture to plate, hand-picking small family-owned producers to ensure cattle are cared for humanely, corn fed, and healthy.</p>
              </div>
              <div className="bg-primary-900/60 backdrop-blur-sm rounded-lg p-6 border border-accent-500/20">
                <h3 className="font-heading text-xl text-accent-500 mb-3">Global Reach</h3>
                <p className="text-neutral-300">Shipping premium beef to every U.S. state and over 70 countries worldwide with unmatched consistency and quality.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
