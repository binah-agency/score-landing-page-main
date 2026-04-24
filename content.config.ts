import { defineCollection, z } from 'astro:content';

// Define schema for FAQ collection
const faqCollection = defineCollection({
  schema: z.object({
    faqs: z.array(z.object({
      number: z.string(),
      question: z.string(),
      answer: z.string(),
    })),
  }),
});

// Define schema for Hero collection
const heroCollection = defineCollection({
  schema: z.object({
    header: z.object({
      logo: z.object({
        alt: z.string(),
        name: z.object({
          main: z.string(),
          sub: z.string(),
        }),
      }),
      navigation: z.array(z.object({
        text: z.string(),
        href: z.string(),
        active: z.boolean().optional(),
      })),
      actions: z.array(z.object({
        text: z.string(),
        href: z.string(),
        primary: z.boolean(),
        icon: z.string().optional(),
      })),
      mobile: z.object({
        menuToggle: z.object({
          text: z.string(),
          icon: z.string(),
        }).optional(),
      }).optional(),
    }),
    content: z.object({
      badge: z.object({
        text: z.string(),
      }).optional(),
      banner: z.object({
        text: z.string(),
      }).optional(),
      tagline: z.object({
        lines: z.array(z.string()),
      }).optional(),
      claim: z.string().optional(),
      cta: z.object({
        text: z.string(),
        href: z.string(),
      }).optional(),
      mobile: z.object({
        banner: z.object({
          lines: z.array(z.string()),
        }).optional(),
      }).optional(),
    }),
  }),
});

// Define schema for About collection
const aboutCollection = defineCollection({
  schema: z.object({
    section: z.object({
      id: z.string(),
      title: z.object({
        subtitle: z.string(),
        main: z.string(),
      }),
    }),
  }),
});

// Define schema for Value Proposal collection
const valueProposalCollection = defineCollection({
  schema: z.object({
    section: z.object({
      id: z.string(),
      title: z.object({
        line1: z.string(),
        line2: z.string(),
      }),
    }),
  }),
});

// Define schema for Features collection
const featuresCollection = defineCollection({
  schema: z.object({
    section: z.object({
      id: z.string(),
      cards: z.array(z.object({
        title: z.string(),
        range: z.string(),
        iconColor: z.string(),
      })),
    }),
  }),
});

export const collections = {
  faq: faqCollection,
  hero: heroCollection,
  about: aboutCollection,
  valueProposal: valueProposalCollection,
  features: featuresCollection,
};
