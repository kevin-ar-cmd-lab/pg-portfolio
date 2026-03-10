---
title: Daniel | Student Portfolio
slug: /
sections:
  - type: GenericSection
    elementId: intro
    title:
      type: TitleBlock
      text: Daniel | Student Developer Portfolio
      color: text-dark
    subtitle: Practical front-end work with measurable outcomes and clear engineering decisions
    text: >-
      Daniel is an entry-level computer science student building production-style
      web projects. This site showcases detailed case studies, technical writeups,
      and collaboration evidence for internship applications.
    actions:
      - type: Button
        label: View Case Studies
        url: /blog
        style: primary
        showIcon: true
        icon: arrowRight
        iconPosition: right
      - type: Link
        label: Download Resume
        url: /resume-daniel.txt
        style: secondary
        showIcon: true
        icon: arrowDown
        iconPosition: right
    media:
      type: ImageBlock
      url: /images/main-hero.svg
      altText: Portfolio hero illustration for student developer
    badge:
      type: Badge
      label: Open to internship opportunities
      color: text-primary
    colors: bg-light-fg-dark
    styles:
      self:
        alignItems: center
        flexDirection: row
        padding:
          - pt-16
          - pl-16
          - pb-16
          - pr-16

  - type: FeaturedItemsSection
    elementId: skills
    title:
      type: TitleBlock
      text: Core Skills
      color: text-dark
      styles:
        self:
          textAlign: center
    subtitle: Foundation used to deliver complete portfolio projects
    badge:
      type: Badge
      label: Technical Foundation
      color: text-primary
      styles:
        self:
          textAlign: center
    items:
      - type: FeaturedItem
        title: Front-end Architecture
        subtitle: Semantic HTML, accessible structure, scalable CSS
        text: >-
          Builds responsive page systems with reusable sections, semantic heading
          order, and consistent spacing/typography for maintainability.
        image:
          type: ImageBlock
          url: /images/icon1.svg
          altText: Front-end architecture icon
        actions: []
        colors: bg-neutralAlt-fg-dark
        styles:
          self:
            padding:
              - pt-8
              - pl-8
              - pb-8
              - pr-8
            borderRadius: x-large
            flexDirection: row
            textAlign: left
      - type: FeaturedItem
        title: JavaScript + React Workflows
        subtitle: Interactive features and component-driven implementation
        text: >-
          Implements dynamic UI behavior, data handling, and component state with
          clear code organization and predictable user interactions.
        image:
          type: ImageBlock
          url: /images/icon2.svg
          altText: JavaScript and React workflow icon
        actions: []
        colors: bg-neutralAlt-fg-dark
        styles:
          self:
            padding:
              - pt-8
              - pl-8
              - pb-8
              - pr-8
            borderRadius: x-large
            flexDirection: row
            textAlign: left
      - type: FeaturedItem
        title: Quality Optimization
        subtitle: Accessibility, SEO, and performance improvements
        text: >-
          Applies Lighthouse and usability checks, improves metadata quality, and
          reduces avoidable page weight to improve real browsing experience.
        image:
          type: ImageBlock
          url: /images/icon3.svg
          altText: Optimization icon
        actions: []
        colors: bg-neutralAlt-fg-dark
        styles:
          self:
            padding:
              - pt-8
              - pl-8
              - pb-8
              - pr-8
            borderRadius: x-large
            flexDirection: row
            textAlign: left
    actions: []
    variant: three-col-grid
    colors: bg-neutral-fg-dark
    styles:
      self:
        padding:
          - pt-16
          - pl-16
          - pb-16
          - pr-16
        justifyContent: center
      subtitle:
        textAlign: center

  - type: FeaturedItemsSection
    elementId: projects
    title:
      type: TitleBlock
      text: Detailed Project Pages
      color: text-dark
      styles:
        self:
          textAlign: center
    subtitle: Case studies with problem framing, constraints, decisions, and outcomes
    items:
      - type: FeaturedItem
        title: Campus Club Event Platform
        tagline: Case Study 1
        subtitle: Next.js, Netlify Forms, responsive UI
        text: >-
          Rebuilt event registration around clear information hierarchy and mobile
          completion flow. Documented architecture, accessibility constraints, and
          conversion improvements.
        image:
          type: ImageBlock
          url: /images/abstract-feature1.svg
          altText: Campus club event platform visual
          styles:
            self:
              borderRadius: x-large
        actions:
          - type: Link
            label: Read Case Study
            url: /blog/campus-club-event-platform-case-study
            style: primary
            showIcon: true
            icon: arrowRight
            iconPosition: right
        colors: bg-light-fg-dark
        styles:
          self:
            padding:
              - pt-8
              - pl-8
              - pb-8
              - pr-8
            borderRadius: x-large
            flexDirection: col
      - type: FeaturedItem
        title: Student Planner Dashboard
        tagline: Case Study 2
        subtitle: Component design, local persistence, filtering UX
        text: >-
          Designed and shipped a dashboard to manage assignments by status and
          deadline priority with keyboard-friendly controls and stronger visual
          hierarchy.
        image:
          type: ImageBlock
          url: /images/abstract-feature2.svg
          altText: Student planner dashboard visual
          styles:
            self:
              borderRadius: x-large
        actions:
          - type: Link
            label: Read Case Study
            url: /blog/student-planner-dashboard-case-study
            style: primary
            showIcon: true
            icon: arrowRight
            iconPosition: right
        colors: bg-light-fg-dark
        styles:
          self:
            padding:
              - pt-8
              - pl-8
              - pb-8
              - pr-8
            borderRadius: x-large
            flexDirection: col
      - type: FeaturedItem
        title: Beginner Metrics Dashboard
        tagline: Case Study 3
        subtitle: Data visualization fundamentals and performance iteration
        text: >-
          Built a lightweight metrics dashboard with interactive charts and
          documented tradeoffs between readability, speed, and implementation
          complexity.
        image:
          type: ImageBlock
          url: /images/abstract-feature3.svg
          altText: Beginner metrics dashboard visual
          styles:
            self:
              borderRadius: x-large
        actions:
          - type: Link
            label: Read Case Study
            url: /blog/beginner-metrics-dashboard-case-study
            style: primary
            showIcon: true
            icon: arrowRight
            iconPosition: right
        colors: bg-light-fg-dark
        styles:
          self:
            padding:
              - pt-8
              - pl-8
              - pb-8
              - pr-8
            borderRadius: x-large
            flexDirection: col
    variant: three-col-grid
    colors: bg-light-fg-dark
    styles:
      self:
        padding:
          - pt-16
          - pl-8
          - pb-16
          - pr-8
        justifyContent: center
      subtitle:
        textAlign: center

  - type: FeaturedItemsSection
    elementId: credibility
    title:
      type: TitleBlock
      text: Credibility Assets
      color: text-dark
      styles:
        self:
          textAlign: center
    subtitle: Resume, profiles, and references in one place
    variant: three-col-grid
    items:
      - type: FeaturedItem
        title: Resume Snapshot
        subtitle: Education, tools, and project outcomes
        text: >-
          Includes current coursework, core technologies, delivery examples, and
          internship availability details.
        actions:
          - type: Button
            label: Download Resume
            url: /resume-daniel.txt
            style: primary
            showIcon: true
            icon: arrowDown
            iconPosition: right
        image:
          type: ImageBlock
          url: /images/hero.svg
          altText: Resume document illustration
        colors: bg-neutral-fg-dark
        styles:
          self:
            padding:
              - pt-8
              - pl-8
              - pb-8
              - pr-8
            borderRadius: x-large
            flexDirection: col
      - type: FeaturedItem
        title: Professional Profiles
        subtitle: Public engineering presence
        text: >-
          GitHub and LinkedIn profiles include project repositories, activity
          history, and collaboration context.
        actions:
          - type: Link
            label: GitHub
            url: https://github.com/daniel-dev-portfolio
            style: primary
            showIcon: true
            icon: arrowRight
            iconPosition: right
          - type: Link
            label: LinkedIn
            url: https://www.linkedin.com/in/daniel-dev-portfolio
            style: secondary
            showIcon: true
            icon: arrowRight
            iconPosition: right
        image:
          type: ImageBlock
          url: /images/hero2.svg
          altText: Professional profile links illustration
        colors: bg-neutral-fg-dark
        styles:
          self:
            padding:
              - pt-8
              - pl-8
              - pb-8
              - pr-8
            borderRadius: x-large
            flexDirection: col
      - type: FeaturedItem
        title: Testimonials
        subtitle: Mentor and teammate references
        text: >-
          References highlight reliability, communication quality, and code
          review readiness across class and team settings.
        actions:
          - type: Link
            label: Read Testimonials
            url: /about#testimonials
            style: primary
            showIcon: true
            icon: arrowRight
            iconPosition: right
        image:
          type: ImageBlock
          url: /images/hero3.svg
          altText: Testimonials illustration
        colors: bg-neutral-fg-dark
        styles:
          self:
            padding:
              - pt-8
              - pl-8
              - pb-8
              - pr-8
            borderRadius: x-large
            flexDirection: col
    colors: bg-neutral-fg-dark
    styles:
      self:
        padding:
          - pt-16
          - pl-8
          - pb-16
          - pr-8
        justifyContent: center
      subtitle:
        textAlign: center

  - type: GenericSection
    elementId: contact
    title:
      type: TitleBlock
      text: Contact Daniel
      color: text-dark
    subtitle: Internship opportunities, collaboration requests, and portfolio feedback
    text: >-
      The form is configured for Netlify Forms compatibility and can be used for
      recruiting outreach or project collaboration discussions.
    media:
      type: FormBlock
      elementId: contact-form
      fields:
        - type: TextFormControl
          name: name
          label: Name
          hideLabel: true
          placeholder: Your name
          isRequired: true
          width: full
        - type: EmailFormControl
          name: email
          label: Email
          hideLabel: true
          placeholder: Your email
          isRequired: true
          width: full
        - type: TextareaFormControl
          name: message
          label: Message
          hideLabel: true
          placeholder: Your message
          width: full
      submitButton:
        type: SubmitButtonFormControl
        label: Send Message
        showIcon: false
        icon: arrowRight
        iconPosition: right
        style: primary
      styles:
        self:
          padding:
            - pt-6
            - pb-6
            - pl-6
            - pr-6
          borderColor: border-dark
          borderStyle: solid
          borderWidth: 1
          borderRadius: large
    badge:
      type: Badge
      label: Contact
      color: text-primary
    colors: bg-light-fg-dark
seo:
  type: Seo
  metaTitle: Daniel | Front-end Student Portfolio
  metaDescription: Portfolio of Daniel featuring case studies, resume links, testimonials, and contact information.
  socialImage: /images/main-hero.jpg
type: PageLayout
---
