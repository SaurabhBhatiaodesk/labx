// /** @type {import('next').NextConfig} */
// const nextConfig = {};

// export default nextConfig;



/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack(config) {
      // Disable CSS minification to avoid issues with special characters like '/'
      config.optimization.minimize = false;
  
      // Add custom Webpack rules or resolve any other issues if necessary
      return config;
    },
  };
  
  export default nextConfig;
  