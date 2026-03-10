---
title: Student Planner Dashboard Case Study
slug: student-planner-dashboard-case-study
date: '2026-02-24'
excerpt: Designed a dashboard for assignment planning with status filters, deadline prioritization, and persistent local state.
featuredImage:
  type: ImageBlock
  url: /images/abstract-feature2.svg
  altText: Student planner dashboard case study thumbnail
  styles:
    self:
      borderRadius: x-large
bottomSections:
  - type: DividerSection
    title: Divider
    colors: bg-light-fg-dark
    styles:
      self:
        padding:
          - pt-7
          - pl-7
          - pb-7
          - pr-7
  - type: FeaturedItemsSection
    variant: small-list
    colors: bg-light-fg-dark
    styles:
      self:
        margin:
          - mb-20
        padding:
          - pt-0
          - pl-0
          - pb-0
          - pr-0
        justifyContent: center
    items:
      - type: FeaturedItem
        title: Project Links
        subtitle: Demo and source repositories
        text: >-
          Live demo: https://example.netlify.app/student-planner\n\nSource:
          https://github.com/daniel-dev-portfolio/student-planner-dashboard
        image:
          type: ImageBlock
          url: /images/icon2.svg
          altText: Planner project links icon
        colors: bg-light-fg-dark
        styles:
          self:
            padding:
              - pt-6
              - pl-6
              - pb-6
              - pr-6
            textAlign: left
            borderRadius: none
            flexDirection: row
isFeatured: true
colors: bg-light-fg-dark
styles:
  self:
    padding:
      - pt-5
      - pl-5
      - pb-5
      - pr-5
    textAlign: center
    borderStyle: none
    borderWidth: 0
    borderRadius: none
    flexDirection: col
author: content/data/person3.json
seo:
  type: Seo
  metaTitle: Student Planner Dashboard Case Study
  metaDescription: Case study covering dashboard planning, data persistence, UX tradeoffs, and measurable outcomes.
  socialImage: /images/abstract-feature2.svg
type: PostLayout
---

## Project Summary

The planner dashboard was built to help students track assignments by urgency and completion state in one view. The main challenge was balancing simple interactions with useful filtering behavior.

## Problem

Early versions supported task entry but lacked sorting and clarity around due dates. Users reported that the interface felt "busy" when multiple classes were active.

## Constraints

- Needed to work without backend services.
- Data had to persist between sessions using local storage.
- UI had to remain understandable for first-time users in under one minute.

## Technical Decisions

1. Created a normalized local data shape for tasks with class, priority, and due date fields.
2. Added filter chips for status and class context, then synced filter state to URL params.
3. Used reusable card components so active/overdue/completed states shared the same baseline markup.
4. Added deadline sorting fallback logic for incomplete records.

## Accessibility and Performance

- Added descriptive button labels and keyboard-friendly filter toggles.
- Reduced layout shift by stabilizing card heights.
- Deferred non-critical illustrations to keep initial paint fast.

## Outcome

- Task completion consistency improved during pilot usage from 58% to 79%.
- Users found overdue items 2x faster compared to list-only prototype.
- Peer review highlighted better scannability and lower interaction friction.

## What Was Learned

State management and information hierarchy were tightly coupled. A clean filtering model made the UI simpler and easier to trust even before visual refinement.
