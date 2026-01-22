import type { Metadata } from 'next';
import { generatePageMetadata } from '@/lib/metadata';

export const metadata: Metadata = generatePageMetadata('beef-program');

export default function BeefProgramPage() {
  return (
    <div className="min-h-screen bg-primary-900">
      {/* Hero Section */}
      <div className="bg-gradient-to-b from-primary-800 to-primary-900 py-20 lg:py-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-heading text-5xl sm:text-6xl lg:text-7xl text-neutral-100 mb-6 tracking-tight">
            Beef Programs
          </h1>
          <p className="font-body text-xl sm:text-2xl text-neutral-300 leading-relaxed max-w-2xl mx-auto">
            Partnering with the world's finest ranchers and producers to bring you premium beef selections
          </p>
        </div>
      </div>

      {/* Products Grid */}
      <div className="py-20 lg:py-32">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20">
            
            {/* St. Helens Beef */}
            <div className="group">
              <div className="aspect-[4/3] bg-gradient-to-br from-neutral-800 to-neutral-900 rounded-lg mb-8 overflow-hidden">
                <div className="w-full h-full flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-accent-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-accent-500 text-2xl font-bold">SHB</span>
                    </div>
                    <p className="text-neutral-400 text-sm">Volcanic Soil Raised</p>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <h2 className="font-heading text-2xl lg:text-3xl text-neutral-100 text-center">St. Helens Beef</h2>
                <p className="text-neutral-300 text-lg leading-relaxed text-center">
                  American Angus Choice
                </p>
                <div className="pt-2 text-center">
                  <a href="/programs/beef/st-helens" className="text-accent-500 hover:text-accent-400 transition-colors font-medium">
                    Learn More →
                  </a>
                </div>
              </div>
            </div>

            {/* RR Ranch */}
            <div className="group">
              <div className="aspect-[4/3] bg-gradient-to-br from-neutral-800 to-neutral-900 rounded-lg mb-8 overflow-hidden">
                <div className="w-full h-full flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-accent-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-accent-500 text-2xl font-bold">RR</span>
                    </div>
                    <p className="text-neutral-400 text-sm">Northwest Premium</p>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <h2 className="font-heading text-2xl lg:text-3xl text-neutral-100 text-center">RR Ranch</h2>
                <p className="text-neutral-300 text-lg leading-relaxed text-center">
                  American Angus Upper Choice/Prime
                </p>
                <div className="pt-2 text-center">
                  <a href="/programs/beef/rr-ranch" className="text-accent-500 hover:text-accent-400 transition-colors font-medium">
                    Learn More →
                  </a>
                </div>
              </div>
            </div>

            {/* Snake River Farms */}
            <div className="group">
              <div className="aspect-[4/3] bg-gradient-to-br from-neutral-800 to-neutral-900 rounded-lg mb-8 overflow-hidden">
                <div className="w-full h-full flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-accent-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-accent-500 text-2xl font-bold">SRF</span>
                    </div>
                    <p className="text-neutral-400 text-sm">Premium American Wagyu</p>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <h2 className="font-heading text-2xl lg:text-3xl text-neutral-100 text-center">Snake River Farms</h2>
                <p className="text-neutral-300 text-lg leading-relaxed text-center">
                  American Wagyu
                </p>
                <div className="pt-2 text-center">
                  <a href="/programs/beef/snake-river-farms" className="text-accent-500 hover:text-accent-400 transition-colors font-medium">
                    Learn More →
                  </a>
                </div>
              </div>
            </div>

            {/* F&G Wagyu */}
            <div className="group">
              <div className="aspect-[4/3] bg-gradient-to-br from-neutral-800 to-neutral-900 rounded-lg mb-8 overflow-hidden">
                <div className="w-full h-full flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-accent-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-accent-500 text-2xl font-bold">F&G</span>
                    </div>
                    <p className="text-neutral-400 text-sm">Authentic Japanese A5</p>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <h2 className="font-heading text-2xl lg:text-3xl text-neutral-100 text-center">F&G Meats Wagyu</h2>
                <p className="text-neutral-300 text-lg leading-relaxed text-center">
                  American Wagyu
                </p>
                <div className="pt-2 text-center">
                  <a href="/programs/beef/fg-wagyu" className="text-accent-500 hover:text-accent-400 transition-colors font-medium">
                    Learn More →
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Contact CTA */}
      <div className="bg-primary-800 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="font-heading text-3xl lg:text-4xl text-neutral-100 mb-6">
            Ready to elevate your menu?
          </h3>
          <p className="text-neutral-300 text-lg mb-8 max-w-2xl mx-auto">
            Contact our team to discuss pricing, availability, and custom cuts for your establishment.
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