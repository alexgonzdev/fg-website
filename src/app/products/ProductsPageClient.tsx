'use client';

import AnimatedSection from '@/components/ui/AnimatedSection';
import Button from '@/components/ui/Button';
import CategorySection from '@/components/products/CategorySection';
import { PRODUCT_CATEGORIES, getBrandsByCategory, ProductCategory } from '@/lib/constants';
import { MessageSquare, Phone } from 'lucide-react';

/**
 * Products Page Client Component
 * 
 * Client-side component for the Products & Brands page with animations and interactivity.
 * 
 * Requirements Addressed:
 * - Requirement 5.1: Organizes products into clear categories
 * - Requirement 5.2: Displays associated brand information for each category
 * - Requirement 5.3: Displays beef brands (Snake River Farms, Double R Ranch, St. Helens Beef)
 * - Requirement 5.4: Displays Casa Wagyu in Wagyu category
 * - Requirement 5.5: Displays Culver Duck and Tasty Duck in Duck category
 * - Requirement 5.6: Displays Patagonian Sea in Seafood category
 * - Requirement 5.8: Includes high-quality imagery for each category and brand
 * - Requirement 5.9: Includes a CTA encouraging visitors to inquire about specific products
 */
export default function ProductsPageClient() {
  // Define the order of categories to display (excluding 'other' which has no brands)
  const categoryOrder: ProductCategory[] = ['beef', 'wagyu', 'duck', 'seafood'];

  return (
    <main className="min-h-screen bg-primary-900">
      {/* Page Header */}
      <AnimatedSection animation="fadeIn" className="pt-32 pb-12 md:pt-40 md:pb-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            {/* Page Title */}
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-100 mb-6">
              Our Premium Products & Brands
            </h1>
            
            {/* Page Description */}
            <p className="text-neutral-300 text-lg md:text-xl leading-relaxed">
              F&G partners with the finest producers to bring exceptional quality proteins to your establishment. 
              Explore our curated selection of premium beef, wagyu, duck, and sustainable seafood from 
              industry-leading brands.
            </p>
          </div>
        </div>
      </AnimatedSection>

      {/* Decorative Divider */}
      <div className="container mx-auto px-4 md:px-6">
        <div className="h-px bg-gradient-to-r from-transparent via-accent-500 to-transparent" />
      </div>

      {/* Category Sections */}
      <div className="space-y-8 md:space-y-12">
        {categoryOrder.map((categoryKey) => {
          const category = PRODUCT_CATEGORIES[categoryKey];
          const brands = getBrandsByCategory(categoryKey);

          // Skip categories with no brands
          if (brands.length === 0) {
            return null;
          }

          return (
            <CategorySection
              key={categoryKey}
              categoryName={category.name}
              description={category.description}
              brands={brands.map((brand) => ({
                id: brand.id,
                name: brand.name,
                category: brand.category,
                logo: brand.logo,
                description: brand.description,
                highlights: brand.highlights,
                image: brand.image,
              }))}
            />
          );
        })}
      </div>

      {/* Inquiry CTA Section */}
      <section
        className="bg-primary-800 py-16 sm:py-20 lg:py-24 mt-8 md:mt-12 relative overflow-hidden"
        aria-labelledby="inquiry-cta-heading"
      >
        {/* Decorative Background Elements */}
        <div 
          className="absolute inset-0 opacity-5"
          aria-hidden="true"
        >
          <div className="absolute top-0 left-0 w-96 h-96 bg-accent-500 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent-500 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          {/* Headline */}
          <AnimatedSection animation="slideUp" delay={0}>
            <h2
              id="inquiry-cta-heading"
              className="font-heading text-3xl sm:text-4xl lg:text-5xl text-neutral-100 mb-4"
            >
              Interested in Our Products?
            </h2>
            
            {/* Accent Divider */}
            <div className="flex justify-center mb-6 sm:mb-8">
              <div className="w-24 h-1 bg-accent-500 rounded-full" aria-hidden="true" />
            </div>
          </AnimatedSection>

          {/* Supporting Text */}
          <AnimatedSection animation="fadeIn" delay={0.2}>
            <p className="font-body text-lg sm:text-xl text-neutral-200 leading-relaxed max-w-2xl mx-auto mb-8 sm:mb-10">
              Have questions about specific products or brands? Our team of experts is ready to help 
              you find the perfect proteins for your establishment. Whether you&apos;re looking for 
              premium wagyu, sustainable seafood, or specialty cuts, we&apos;re here to assist.
            </p>
          </AnimatedSection>

          {/* CTA Button */}
          <AnimatedSection animation="slideUp" delay={0.4}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
              {/* Primary Contact CTA Button */}
              <Button
                href="/contact"
                variant="primary"
                size="lg"
                leftIcon={<MessageSquare className="w-5 h-5" aria-hidden="true" />}
              >
                Inquire About Products
              </Button>

              {/* Secondary Phone CTA Button */}
              <Button
                href="/contact"
                variant="secondary"
                size="lg"
                leftIcon={<Phone className="w-5 h-5" aria-hidden="true" />}
              >
                Contact Our Team
              </Button>
            </div>
          </AnimatedSection>

          {/* Additional Supporting Text */}
          <AnimatedSection animation="fadeIn" delay={0.6}>
            <p className="font-body text-sm sm:text-base text-neutral-400 mt-8 sm:mt-10">
              We offer personalized consultations to help you select the best products for your menu.
            </p>
          </AnimatedSection>
        </div>
      </section>
    </main>
  );
}
