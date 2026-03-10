import * as React from 'react';
import NextLink from 'next/link';

export default function Link({ children, href, ...other }) {
    // Pass Any internal link to Next.js Link, for anything else, use <a> tag
    const internal = /^\/(?!\/)/.test(href);
    if (internal) {
        return (
            <NextLink href={href} {...other}>
                {children}
            </NextLink>
        );
    }

    const external = /^https?:\/\//i.test(href || '');
    const rel = external ? 'noopener noreferrer' : other.rel;
    const target = external && !other.target ? '_blank' : other.target;

    return (
        <a href={href} rel={rel} target={target} {...other}>
            {children}
        </a>
    );
}
