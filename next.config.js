/** @type {import('next').NextConfig} */

const securityHeaders = [
  // Prevents your site from being embedded in iframes (clickjacking protection)
  {
    key: "X-Frame-Options",
    value: "SAMEORIGIN",
  },
  // Stops browsers from guessing file types (MIME sniffing attacks)
  {
    key: "X-Content-Type-Options",
    value: "nosniff",
  },
  // Controls how much referrer info is sent when navigating away
  {
    key: "Referrer-Policy",
    value: "strict-origin-when-cross-origin",
  },
  // Forces HTTPS for 2 years, includes subdomains
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
  // Disables access to camera, mic, geolocation unless explicitly needed
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=()",
  },
  // Content Security Policy — controls what can load on your site
  {
    key: "Content-Security-Policy",
    value: [
      "default-src 'self'",
      // Allow Next.js scripts + Calendly widget
      "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://assets.calendly.com https://js.stripe.com",
      // Allow styles from self + Google Fonts + Calendly
      "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com https://assets.calendly.com",
      // Allow fonts from Google
      "font-src 'self' https://fonts.gstatic.com",
      // Allow images from self + Stripe + data URIs
      "img-src 'self' data: https://*.stripe.com https://*.calendly.com",
      // Allow frames for Calendly and Stripe
      "frame-src https://calendly.com https://js.stripe.com https://hooks.stripe.com https://buy.stripe.com",
      // Allow connections to Calendly and Stripe APIs
      "connect-src 'self' https://assets.calendly.com https://api.stripe.com",
    ].join("; "),
  },
];

const nextConfig = {
  async headers() {
    return [
      {
        // Apply to all routes
        source: "/(.*)",
        headers: securityHeaders,
      },
    ];
  },
};

module.exports = nextConfig;
