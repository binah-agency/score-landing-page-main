---
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

document.addEventListener('DOMContentLoaded', () => {
  // Hero Section
  const heroSection = document.querySelector('.hero-section');
  if (heroSection) {
    gsap.from(heroSection.querySelectorAll('h1, h2'), {
      opacity: 0,
      y: 50,
      duration: 1,
      stagger: 0.2,
      ease: 'power2.out'
    });

    gsap.from(heroSection.querySelectorAll('.hero-content > *'), {
      opacity: 0,
      y: 30,
      duration: 0.8,
      stagger: 0.15,
      delay: 0.3,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: heroSection,
        start: 'top 80%',
        toggleActions: 'play none none reverse'
      }
    });
  }

  // About Section
  const aboutSection = document.getElementById('about');
  if (aboutSection) {
    gsap.from(aboutSection.querySelectorAll('.about-item'), {
      opacity: 0,
      x: -50,
      duration: 0.8,
      stagger: 0.2,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: aboutSection,
        start: 'top 75%',
        toggleActions: 'play none none reverse'
      }
    });
  }

  // PromoSection
  const promoSection = document.getElementById('promo');
  if (promoSection) {
    const promoElements = promoSection.querySelectorAll('.promo-card, .promo-claim, .promo-badge');
    gsap.from(promoElements, {
      opacity: 0,
      y: 60,
      duration: 0.8,
      stagger: 0.15,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: promoSection,
        start: 'top 75%',
        toggleActions: 'play none none reverse'
      }
    });
  }

  // Features Section
  const featuresSection = document.getElementById('features');
  if (featuresSection) {
    gsap.from(featuresSection.querySelectorAll('.feature-card'), {
      opacity: 0,
      scale: 0.8,
      duration: 0.6,
      stagger: 0.15,
      ease: 'back.out(1.7)',
      scrollTrigger: {
        trigger: featuresSection,
        start: 'top 70%',
        toggleActions: 'play none none reverse'
      }
    });
  }

  // CoreModulesSection
  const coreModulesSection = document.getElementById('core-modules');
  if (coreModulesSection) {
    gsap.from(coreModulesSection.querySelectorAll('.module-card'), {
      opacity: 0,
      y: 60,
      duration: 0.8,
      stagger: 0.2,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: coreModulesSection,
        start: 'top 75%',
        toggleActions: 'play none none reverse'
      }
    });
  }

  // CtaSection
  const ctaSection = document.getElementById('cta');
  if (ctaSection) {
    gsap.from(ctaSection.querySelectorAll('.cta-card'), {
      opacity: 0,
      y: 40,
      duration: 0.7,
      stagger: 0.15,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: ctaSection,
        start: 'top 80%',
        toggleActions: 'play none none reverse'
      }
    });
  }

  // UseCases Carousel - already animated

  // FAQ Section - already animated

  // ValueProposal Section
  const valueProposalSection = document.getElementById('value-proposal');
  if (valueProposalSection) {
    gsap.from(valueProposalSection.querySelectorAll('.benefit-item'), {
      opacity: 0,
      x: -30,
      duration: 0.6,
      stagger: 0.1,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: valueProposalSection,
        start: 'top 75%',
        toggleActions: 'play none none reverse'
      }
    });

    gsap.from(valueProposalSection.querySelector('.score-card'), {
      opacity: 0,
      scale: 0.5,
      duration: 1,
      ease: 'back.out(1.5)',
      scrollTrigger: {
        trigger: valueProposalSection,
        start: 'top 70%',
        toggleActions: 'play none none reverse'
      }
    });
  }

  // Modules Section
  const modulesSection = document.getElementById('modules');
  if (modulesSection) {
    gsap.from(modulesSection.querySelectorAll('.module-card'), {
      opacity: 0,
      y: 50,
      duration: 0.7,
      stagger: 0.2,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: modulesSection,
        start: 'top 75%',
        toggleActions: 'play none none reverse'
      }
    });
  }

  // Footer
  const footer = document.getElementById('footer');
  if (footer) {
    gsap.from(footer.querySelectorAll('.footer-section > div'), {
      opacity: 0,
      y: 30,
      duration: 0.8,
      stagger: 0.2,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: footer,
        start: 'top 90%',
        toggleActions: 'play none none reverse'
      }
    });
  }

  // App Download Section
  const appDownloadSection = document.getElementById('app-download');
  if (appDownloadSection) {
    gsap.from(appDownloadSection.querySelector('.phone-mockup'), {
      opacity: 0,
      x: 50,
      rotation: -10,
      duration: 1,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: appDownloadSection,
        start: 'top 75%',
        toggleActions: 'play none none reverse'
      }
    });

    gsap.from(appDownloadSection.querySelector('.download-content'), {
      opacity: 0,
      x: -50,
      duration: 0.8,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: appDownloadSection,
        start: 'top 75%',
        toggleActions: 'play none none reverse'
      }
    });
  }
});
