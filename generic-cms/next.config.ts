const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
    deviceSizes: [
      // Lighthouse test viewport width (mobile)
      412,
      // Common real-world viewport widths
      // 640, 750, 828,
      544, 750,
      // Medium screens
      //1080, 1200,
      1200,
      // Lighthouse test viewport width (desktop)
      1350,
      // Larger screens
      // 1920, 2048, 3840,
      1920,
    ],
    // Smaller sizes for UI elements
    // All values smaller than the smallest deviceSize (412)
    imageSizes: [214, 256],
    //imageSizes: [16, 32, 64, 96, 128, 256, 384],
    domains: ["t1.gstatic.com"],
    // loader: 'custom',
    // deviceSizes: [640, 1920],
    formats: ["image/avif", "image/webp"],
    // qualities: [60, 80, 90],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  //compress: true, // Enable compression
  async rewrites() {
    return [
      {
        source: "/storage/:path*",
        destination: "https://jacksonsfencing-litium-d-cl.niteco.dev/storage/:path*",
      },
    ];
  },
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    // Add packages folder to module resolution
    config.resolve.alias = {
      ...config.resolve.alias,
      "@packages": require("path").resolve(__dirname, "../packages"),
    };

    // Add packages folder to module resolution paths
    config.resolve.modules = [...(config.resolve.modules || []), require("path").resolve(__dirname, "../packages")];

    return config;
  },
};

export default nextConfig;
