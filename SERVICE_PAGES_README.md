# 🚀 Reusable Service Page System

This document explains how to use the new reusable service page system to create all 21 service pages efficiently.

## 📋 Overview

We've created a reusable `ServicePage` component that accepts props for all content, making it easy to create consistent service pages with different content. This system allows you to:

- ✅ Create new service pages in minutes
- ✅ Maintain consistent design and functionality
- ✅ Easily update content without touching component code
- ✅ Scale to all 21 service pages efficiently

## 🏗️ Architecture

### Components

- **`ServicePage.tsx`** - Main reusable component
- **`ServicePageProps`** - TypeScript interface for all props
- **Data files** - Separate files for each service's content

### File Structure

```
src/
├── components/
│   └── ServicePage.tsx          # Reusable component
├── data/
│   ├── big-data-cloud-data.ts   # Big Data service data
│   ├── ai-ml-data.ts           # AI/ML service data
│   └── [service-name]-data.ts   # Other service data files
└── pages/
    ├── big-data-cloud-services.tsx
    ├── ai-ml-services.tsx
    └── [service-name].tsx       # Service page components
```

## 🎯 How to Create a New Service Page

### Step 1: Create Data File

Create a new data file in `src/data/` following this pattern:

```typescript
// src/data/your-service-data.ts
import { ServicePageProps } from "../components/ServicePage";

export const yourServiceData: ServicePageProps = {
  // Hero Section
  heroTitle: "Your Service Title",
  heroSubtitle: "Your service description",
  heroGradient: "bg-gradient-to-r from-blue-600 to-purple-600",
  heroBackgroundImage: "https://your-image-url.com",

  // Services Grid
  servicesTitle: "Your Services Title",
  servicesDescription: "Your services description",
  services: [
    {
      title: "Service 1",
      description: "Service description",
      icon: "🏗️",
      features: ["Feature 1", "Feature 2", "Feature 3"],
    },
    // ... more services
  ],

  // Integration Reasons (Hover Cards)
  integrationReasons: [
    {
      title: "Reason 1",
      description: "Description",
      icon: "👥",
    },
    // ... more reasons
  ],

  // Service Blocks (Left/Right Layout)
  serviceBlocks: [
    {
      title: "Block Title",
      description: "Block description",
      features: ["Feature 1", "Feature 2"],
      image: "https://your-image-url.com",
      position: "left", // or 'right'
    },
    // ... more blocks
  ],

  // Roadmap
  roadmapTitle: "How We Solve Problems",
  roadmapDescription: "Roadmap description",
  roadmapSteps: [
    {
      number: 1,
      title: "Step 1",
      description: "Step description",
      position: "right", // or "left"
    },
    // ... more steps
  ],

  // Testimonials
  testimonialsTitle: "What Our Clients Say",
  testimonialsDescription: "Testimonials description",
  testimonials: [
    {
      name: "Client Name",
      role: "Role",
      company: "Company",
      content: "Testimonial content",
      avatar: "https://avatar-url.com",
      rating: 5,
    },
    // ... more testimonials
  ],

  // Blog Section
  blogTitle: "Our Blog",
  blogDescription: "Blog description",
  blogCategories: ["Category 1", "Category 2"],
  blogPosts: [
    {
      id: 1,
      title: "Blog Post Title",
      date: "DATE",
      image: "https://image-url.com",
      category: "Category",
    },
    // ... more posts
  ],

  // FAQ Section
  faqTitle: "FAQ",
  faqDescription: "FAQ description",
  faqs: [
    {
      question: "Your question?",
      answer: "Your answer.",
    },
    // ... more FAQs
  ],

  // CTA Section
  ctaTitle: "Your CTA Title",
  ctaDescription: "Your CTA description",
  ctaGradient: "bg-gradient-to-r from-blue-600 to-purple-600",
};
```

### Step 2: Create Service Page Component

Create a new page component in `src/pages/`:

```typescript
// src/pages/your-service.tsx
"use client";
import { ServicePage } from "../components/ServicePage";
import { yourServiceData } from "../data/your-service-data";

export function YourServicePage() {
  return <ServicePage {...yourServiceData} />;
}
```

### Step 3: Add Route

Add the route to `src/App.tsx`:

```typescript
import { YourServicePage } from "./pages/your-service";

// In the Routes component
<Route path="/your-service" element={<YourServicePage />} />;
```

## 🎨 Available Sections

The `ServicePage` component includes these sections:

### 1. **Hero Section**

- Title and subtitle
- Gradient background
- Optional background image
- Call-to-action buttons

### 2. **Services Grid**

- Grid of service cards
- Icons, titles, descriptions
- Feature lists

### 3. **Integration Reasons (Hover Cards)**

- Hover effects
- Icons and descriptions
- Gradient backgrounds

### 4. **Service Blocks (Left/Right Layout)**

- Alternating left/right layout
- Images and content
- Feature lists

### 5. **Roadmap/Timeline**

- Central timeline design
- Alternating left/right steps
- Numbered progression

### 6. **Testimonials Carousel**

- Carousel functionality
- Star ratings
- Client avatars and info

### 7. **Blog Carousel**

- Category filters
- Blog post cards
- Links to blog page

### 8. **FAQ Section**

- Expandable accordion
- Click to expand/collapse
- Smooth animations

### 9. **CTA Section**

- Call-to-action
- Gradient background
- Action buttons

## 🎨 Customization Options

### Gradients

Use Tailwind gradient classes:

```typescript
heroGradient: "bg-gradient-to-r from-blue-600 to-purple-600";
heroGradient: "bg-gradient-to-r from-purple-600 to-pink-600";
heroGradient: "bg-gradient-to-r from-green-600 to-teal-600";
heroGradient: "bg-gradient-to-r from-indigo-600 to-purple-600";
```

### Icons

Use emoji icons or custom SVG:

```typescript
icon: "🏗️"; // Emoji
icon: "⚙️"; // Emoji
icon: "📊"; // Emoji
```

### Images

Use Unsplash or any image URL:

```typescript
image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop";
```

## 📝 Content Guidelines

### Hero Section

- **Title**: Keep it concise and impactful
- **Subtitle**: 1-2 sentences describing the service
- **Gradient**: Choose colors that match your brand

### Services Grid

- **Title**: "Our [Service] Services"
- **Description**: Brief overview of services
- **Services**: 6-8 service cards with features

### Integration Reasons

- **Title**: "Why Do You Want to Integrate This Service?"
- **Reasons**: 6 reasons with icons and descriptions

### Service Blocks

- **Layout**: Alternate left/right positioning
- **Content**: Detailed descriptions with features
- **Images**: Relevant high-quality images

### Roadmap

- **Steps**: 4 steps with alternating positions
- **Content**: Clear progression from strategy to maintenance

### Testimonials

- **Content**: Realistic client testimonials
- **Ratings**: 5-star ratings
- **Avatars**: Professional headshots

### Blog Section

- **Posts**: 3 recent blog posts
- **Categories**: Relevant to the service
- **Images**: High-quality blog post images

### FAQ Section

- **Questions**: Common questions about the service
- **Answers**: Clear, helpful responses
- **Count**: 6-8 FAQs

## 🚀 Quick Start Template

Here's a minimal template to get started:

```typescript
export const templateData: ServicePageProps = {
  heroTitle: "Your Service",
  heroSubtitle: "Transform your business with our solutions",
  heroGradient: "bg-gradient-to-r from-blue-600 to-purple-600",

  servicesTitle: "Our Services",
  servicesDescription: "Comprehensive solutions for your business",
  services: [
    {
      title: "Service 1",
      description: "Description",
      icon: "🏗️",
      features: ["Feature 1", "Feature 2"],
    },
  ],

  integrationReasons: [
    {
      title: "Benefit 1",
      description: "Description",
      icon: "👥",
    },
  ],

  serviceBlocks: [
    {
      title: "Block 1",
      description: "Description",
      features: ["Feature 1"],
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      position: "left",
    },
  ],

  roadmapTitle: "How We Solve Problems",
  roadmapDescription: "Our methodology",
  roadmapSteps: [
    {
      number: 1,
      title: "Step 1",
      description: "Description",
      position: "right",
    },
  ],

  testimonialsTitle: "What Our Clients Say",
  testimonialsDescription: "Client feedback",
  testimonials: [
    {
      name: "Client",
      role: "Role",
      company: "Company",
      content: "Testimonial",
      avatar:
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face",
      rating: 5,
    },
  ],

  blogTitle: "Our Blog",
  blogDescription: "Latest insights",
  blogCategories: ["Category 1"],
  blogPosts: [
    {
      id: 1,
      title: "Blog Post",
      date: "DATE",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop",
      category: "Category",
    },
  ],

  faqTitle: "FAQ",
  faqDescription: "Common questions",
  faqs: [
    {
      question: "Question?",
      answer: "Answer.",
    },
  ],

  ctaTitle: "Ready to Get Started?",
  ctaDescription: "Contact us today",
  ctaGradient: "bg-gradient-to-r from-blue-600 to-purple-600",
};
```

## 🔧 Maintenance

### Adding New Sections

To add new sections to the `ServicePage` component:

1. Update the `ServicePageProps` interface
2. Add the section to the component
3. Update all data files with the new props

### Updating Styles

All styling is done with Tailwind CSS classes. To update styles:

1. Modify the classes in `ServicePage.tsx`
2. Changes will apply to all service pages automatically

### Adding Animations

The component uses Framer Motion for animations. To add new animations:

1. Import motion from "motion/react"
2. Wrap elements with motion components
3. Add animation props

## 📊 Performance

- **Bundle Size**: Minimal impact as the component is shared
- **Loading**: Fast loading with optimized images
- **SEO**: Each page can have unique meta tags
- **Accessibility**: Built-in accessibility features

## 🎯 Next Steps

1. **Create data files** for all remaining services
2. **Add routes** to App.tsx
3. **Customize content** for each service
4. **Add meta tags** for SEO
5. **Test responsiveness** on all devices

This system makes it easy to create all 21 service pages efficiently while maintaining consistency and quality! 🚀
