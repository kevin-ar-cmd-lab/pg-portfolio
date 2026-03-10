export function seoGenerateMetaTags(page, site) {
    let pageMetaTags = {};

    if (site.defaultMetaTags?.length) {
        site.defaultMetaTags.forEach((metaTag) => {
            pageMetaTags[metaTag.property] = metaTag.content;
        });
    }

    const seoTitle = seoGenerateTitle(page, site);
    const ogImage = seoGenerateOgImage(page, site);
    const twitterCard = ogImage ? 'summary_large_image' : 'summary';

    pageMetaTags = {
        ...pageMetaTags,
        ...(seoTitle && { 'og:title': seoTitle }),
        ...(ogImage && { 'og:image': ogImage }),
        ...(seoTitle && { 'twitter:title': seoTitle }),
        ...(ogImage && { 'twitter:image': ogImage }),
        'twitter:card': twitterCard
    };

    if (page.seo?.metaTags?.length) {
        page.seo?.metaTags.forEach((metaTag) => {
            pageMetaTags[metaTag.property] = metaTag.content;
        });
    }

    let metaTags = [];
    Object.keys(pageMetaTags).forEach((key) => {
        if (pageMetaTags[key] !== null) {
            metaTags.push({
                property: key,
                content: pageMetaTags[key],
                format: key.startsWith('og') ? 'property' : 'name'
            });
        }
    });

    return metaTags;
}

export function seoGenerateTitle(page, site) {
    let title = page.seo?.metaTitle ? page.seo?.metaTitle : page.title;
    if (site.titleSuffix && page.seo?.addTitleSuffix !== false) {
        title = `${title} - ${site.titleSuffix}`;
    }
    return title;
}

export function seoGenerateMetaDescription(page, site) {
    let metaDescription = null;
    // Blog posts use the exceprt as the default meta description
    if (page.__metadata.modelName === 'PostLayout') {
        metaDescription = page.excerpt;
    }
    // page metaDescription field overrides all others
    if (page.seo?.metaDescription) {
        metaDescription = page.seo?.metaDescription;
    }
    return metaDescription;
}

export function seoGenerateOgImage(page, site) {
    let ogImage = null;
    // Use the sites default og:image field
    if (site.defaultSocialImage) {
        ogImage = site.defaultSocialImage;
    }
    // Blog posts use the featuredImage as the default og:image
    if (page.__metadata.modelName === 'PostLayout') {
        if (page.featuredImage?.url) {
            ogImage = page.featuredImage.url;
        }
    }
    // page socialImage field overrides all others
    if (page.seo?.socialImage) {
        ogImage = page.seo?.socialImage;
    }

    // ogImage should use an absolute URL. Get the Netlify domain URL from the Netlify environment variable process.env.URL
    const domainUrl = site.env?.URL ? site.env.URL : null;

    if (ogImage) {
        if (domainUrl) {
            return domainUrl + ogImage;
        } else {
            return ogImage;
        }
    }
    return null;
}

export function seoGenerateCanonicalUrl(page, site) {
    if (page.seo?.canonicalUrl) {
        return page.seo.canonicalUrl;
    }
    const domainUrl = site.env?.URL ? site.env.URL : null;
    const urlPath = page.__metadata?.urlPath ? page.__metadata.urlPath : null;
    if (!domainUrl || !urlPath) {
        return null;
    }
    return `${domainUrl}${urlPath}`;
}

export function seoGenerateJsonLd(page, site) {
    const canonicalUrl = seoGenerateCanonicalUrl(page, site);
    const siteUrl = site.env?.URL ? site.env.URL : null;
    const title = seoGenerateTitle(page, site);
    const description = seoGenerateMetaDescription(page, site);
    const image = seoGenerateOgImage(page, site);

    const schemas = [];

    if (page.__metadata?.urlPath === '/') {
        schemas.push({
            '@context': 'https://schema.org',
            '@type': 'WebSite',
            name: site.titleSuffix || 'Portfolio',
            url: siteUrl || canonicalUrl || '/'
        });
        schemas.push({
            '@context': 'https://schema.org',
            '@type': 'Person',
            name: 'Daniel',
            url: canonicalUrl || siteUrl || '/',
            sameAs: ['https://github.com/daniel-dev-portfolio', 'https://www.linkedin.com/in/daniel-dev-portfolio'],
            jobTitle: 'Computer Science Student',
            description: description || undefined
        });
    }

    if (page.__metadata?.modelName === 'PostLayout') {
        schemas.push({
            '@context': 'https://schema.org',
            '@type': 'BlogPosting',
            headline: title,
            description: description || undefined,
            datePublished: page.date,
            author: {
                '@type': 'Person',
                name: page.author?.name || 'Daniel'
            },
            image: image || undefined,
            mainEntityOfPage: canonicalUrl || undefined
        });
    }

    if (page.__metadata?.modelName === 'PostFeedLayout' && page.__metadata?.urlPath === '/blog') {
        schemas.push({
            '@context': 'https://schema.org',
            '@type': 'CollectionPage',
            name: title,
            description: description || undefined,
            url: canonicalUrl || undefined
        });
    }

    return schemas;
}
