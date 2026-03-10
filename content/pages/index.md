---
title: Daniel | Student Portfolio
slug: /
sections:
  - type: GenericSection
    elementId: intro
    title:
      type: TitleBlock
      text: Daniel | Introductory Computer Science Student
      color: text-dark
    subtitle: Building practical web projects while learning core development skills
    text: >-
      Daniel is an entry-level student focused on front-end fundamentals, problem
      solving, and clean user experiences. This portfolio highlights academic
      projects, technical strengths, and current learning goals.
    actions:
      - type: Button
        label: View Projects
        url: /#projects
        style: primary
        showIcon: false
        icon: arrowRight
        iconPosition: right
      - type: Link
        label: Contact Daniel
        url: /#contact
        style: secondary
        showIcon: true
        icon: arrowRight
        iconPosition: right
    media:
      type: ImageBlock
      url: /images/main-hero.svg
      altText: Portfolio hero illustration
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
    subtitle: Current capabilities built through coursework and personal practice
    badge:
      type: Badge
      label: Technical Foundation
      color: text-primary
      styles:
        self:
          textAlign: center
    items:
      - type: FeaturedItem
        title: HTML & Semantic Structure
        subtitle: Strong page structure and accessibility basics
        text: Creates responsive page layouts with semantic tags and clear content hierarchy.
        image:
          type: ImageBlock
          url: /images/icon1.svg
          altText: Skill icon one
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
        title: CSS & Tailwind Styling
        subtitle: Clean styling and component-level consistency
        text: Applies spacing systems, typography, and utility classes to build polished interfaces.
        image:
          type: ImageBlock
          url: /images/icon2.svg
          altText: Skill icon two
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
        title: JavaScript Fundamentals
        subtitle: Interactive behavior and logic building
        text: Uses modern JavaScript for dynamic UI features, validation, and state updates.
        image:
          type: ImageBlock
          url: /images/icon3.svg
          altText: Skill icon three
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
      text: Selected Projects
      color: text-dark
      styles:
        self:
          textAlign: center
    subtitle: Intro-level projects focused on practical outcomes
    items:
      - type: FeaturedItem
        title: Study Planner App
        tagline: Personal productivity tool
        subtitle: HTML, CSS, JavaScript
        text: >-
          Built a lightweight planner to track assignments and deadlines with
          status filters and local browser storage.
        image:
          type: ImageBlock
          url: /images/abstract-feature1.svg
          altText: Study planner project graphic
          styles:
            self:
              borderRadius: x-large
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
        title: Club Event Landing Page
        tagline: Campus communication project
        subtitle: Responsive web design
        text: >-
          Designed and developed a one-page event site with mobile-first layout,
          schedule highlights, and registration call-to-actions.
        image:
          type: ImageBlock
          url: /images/abstract-feature2.svg
          altText: Club event site project graphic
          styles:
            self:
              borderRadius: x-large
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
        title: Beginner Data Dashboard
        tagline: Intro to data presentation
        subtitle: JavaScript + charting basics
        text: >-
          Created a simple dashboard that visualized sample student performance
          data to practice component reuse and visual hierarchy.
        image:
          type: ImageBlock
          url: /images/abstract-feature3.svg
          altText: Dashboard project graphic
          styles:
            self:
              borderRadius: x-large
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

  - type: GenericSection
    elementId: about
    title:
      type: TitleBlock
      text: Education & Career Goal
      color: text-dark
    subtitle: Introductory student profile
    text: >-
      Daniel is currently completing foundational computer science coursework and
      is building a portfolio to prepare for a first internship. Current focus
      areas include front-end engineering, UI accessibility, and collaborative
      Git workflows.
    actions:
      - type: Link
        label: Jump to Contact
        url: /#contact
        style: primary
        showIcon: true
        icon: arrowRight
        iconPosition: right
    media:
      type: ImageBlock
      url: /images/hero3.svg
      altText: Student growth illustration
    badge:
      type: Badge
      label: Learning in public
      color: text-primary
    colors: bg-light-fg-dark
    styles:
      self:
        alignItems: center
        flexDirection: row-reverse

  - type: GenericSection
    elementId: contact
    title:
      type: TitleBlock
      text: Contact Daniel
      color: text-dark
    subtitle: Send a message for internships, project collaboration, or networking
    text: >-
      This form can be connected to Netlify Forms to receive submissions. Use it
      to reach out about opportunities or feedback.
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
      label: Get In Touch
      color: text-primary
    colors: bg-neutral-fg-dark
seo:
  type: Seo
  metaTitle: Daniel | Student Portfolio
  metaDescription: Introductory student portfolio for Daniel featuring projects, skills, and contact details.
  socialImage: /images/main-hero.jpg
type: PageLayout
---
