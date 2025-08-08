/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      // Optimizely CMS
      {
        protocol: "https",
        hostname: "*.cms.optimizely.com",
        pathname: "/**",
      },
      // Optimizely Content Recommendations
      {
        protocol: "https",
        hostname: "*.idio.co",
        pathname: "/**",
      },
      // Optimizely DAM
      {
        protocol: "https",
        hostname: "*.cmp.optimizely.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "niteco-saas-commerce.vercel.app",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "jacksonsfencing-france-configcommerce-d-cl.niteco.dev",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "images.eu-central-1.aws.commercetools.com",
        pathname: "/**",
      },
    ],
    deviceSizes: [
      // Lighthouse test viewport width (mobile)
      412,
      // Common real-world viewport widths
      544, 750,
      // Medium screens
      1200,
      // Lighthouse test viewport width (desktop)
      1350, 1920,
    ],

    // Smaller sizes for UI elements
    // All values smaller than the smallest deviceSize (412)
    imageSizes: [214, 256],
  },
  experimental: {
    serverActions: {
      allowedOrigins: [
        // Optimizely CMP Preview
        "*.webproofing.cmp.optimizely.com",
        // Optimizely Web Experimentation & Personalization Editor
        "www.optimizelyedit.com/",
      ],
    },
  },
};

export default nextConfig;
