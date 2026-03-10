---
title: Resume
slug: resume
sections:
  - type: GenericSection
    elementId: resume-hero
    title:
      type: TitleBlock
      text: Resume & Availability
      color: text-dark
      styles:
        self:
          textAlign: center
    subtitle: Internship-ready profile with current focus areas
    text: >-
      Daniel is currently pursuing front-end engineering internship opportunities.
      Preferred work includes React/Next.js interfaces, accessibility-focused UI,
      and production-quality project documentation.
    actions:
      - type: Button
        label: Download Resume
        altText: Download Daniel resume
        url: /resume-daniel.txt
        style: primary
        showIcon: true
        icon: arrowDown
        iconPosition: right
      - type: Link
        label: Open LinkedIn Profile
        altText: Open Daniel LinkedIn profile
        url: https://www.linkedin.com/in/daniel-dev-portfolio
        style: secondary
        showIcon: true
        icon: arrowRight
        iconPosition: right
    media:
      type: ImageBlock
      url: /images/hero3.svg
      altText: Resume overview illustration
    badge:
      type: Badge
      label: Resume
      color: text-primary
    colors: bg-light-fg-dark
    styles:
      self:
        padding:
          - pt-20
          - pl-4
          - pb-16
          - pr-4
        alignItems: center
        justifyContent: center

  - type: PricingSection
    title:
      type: TitleBlock
      text: Experience Highlights
      color: text-dark
      styles:
        self:
          textAlign: center
    subtitle: Key competencies presented as portfolio-ready proof points
    plans:
      - type: PricingPlan
        title: Education
        price: Ongoing
        details: Computer Science Track
        description: >-
          Current focus includes data structures, web fundamentals, and software
          engineering practices used in collaborative projects.
        features:
          - Coursework in programming fundamentals and problem solving
          - Accessibility and semantic HTML emphasis in front-end assignments
          - Regular project documentation and code review participation
        image:
          type: ImageBlock
          url: /images/abstract-feature1.svg
          altText: Education highlight illustration
        actions:
          - type: Button
            label: Read About Timeline
            url: /about
            style: secondary
            showIcon: true
            icon: arrowRight
            iconPosition: right
        colors: bg-neutral-fg-dark
        styles:
          self:
            padding:
              - pt-6
              - pb-10
              - pl-6
              - pr-6
            borderRadius: large
      - type: PricingPlan
        title: Project Delivery
        price: 3+
        details: Complete Case Studies
        description: >-
          Built and documented practical web projects including planning,
          implementation, testing, and post-launch optimization.
        features:
          - Problem/constraint breakdown for each major project
          - Performance and accessibility improvements tracked by outcome
          - Demo + source links attached to project writeups
        image:
          type: ImageBlock
          url: /images/abstract-feature2.svg
          altText: Project delivery highlight illustration
        actions:
          - type: Button
            label: View Case Studies
            url: /blog
            style: secondary
            showIcon: true
            icon: arrowRight
            iconPosition: right
        colors: bg-neutral-fg-dark
        styles:
          self:
            padding:
              - pt-6
              - pb-10
              - pl-6
              - pr-6
            borderRadius: large
      - type: PricingPlan
        title: Collaboration
        price: Active
        details: Team Projects + Reviews
        description: >-
          Worked in small student teams using Git workflows, peer feedback loops,
          and milestone-based delivery to improve reliability.
        features:
          - Branch-based collaboration and pull request reviews
          - Clear issue scoping and status reporting
          - Consistent communication with mentors and peers
        image:
          type: ImageBlock
          url: /images/abstract-feature3.svg
          altText: Collaboration highlight illustration
        actions:
          - type: Button
            label: Contact Daniel
            url: /#contact
            style: secondary
            showIcon: true
            icon: arrowRight
            iconPosition: right
        colors: bg-neutral-fg-dark
        styles:
          self:
            padding:
              - pt-6
              - pb-10
              - pl-6
              - pr-6
            borderRadius: large
    colors: bg-light-fg-dark
    styles:
      self:
        justifyContent: center
      subtitle:
        textAlign: center

seo:
  type: Seo
  metaTitle: Resume | Daniel Student Portfolio
  metaDescription: Resume overview with education, case studies, and collaboration highlights.
  socialImage: /images/main-hero.jpg
type: PageLayout
---
