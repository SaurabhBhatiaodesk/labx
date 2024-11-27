// /** @type {import('next').NextConfig} */
// const nextConfig = {};

// export default nextConfig;



/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack(config) {
      // Disable CSS minification to avoid issues with special characters like '/'
      config.optimization.minimize = false;
      return config;
    },
  };

  export default nextConfig;
