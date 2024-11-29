/** @type {import('next').NextConfig} */
const nextConfig = {
<<<<<<< HEAD
    images: {
      domains: ['labxbackend.s3.us-east-2.amazonaws.com'], // Add your S3 bucket domain here
    },
  };

  export default nextConfig;
=======
  images: {
    domains: ["labxbackend.s3.us-east-2.amazonaws.com"], // Add your S3 bucket domain here
  },
};

export default nextConfig;

// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   images: {
//     domains: ["labxbackend.s3.us-east-2.amazonaws.com"], // Add your S3 bucket domain here
//   },
//   webpack(config, { isServer }) {
//     if (!isServer) {
//       config.optimization.minimize = false;
//     }
//     return config;
//   },
// };

// export default nextConfig;
>>>>>>> 31c11e323d7f42a3fa92dd85d59fb27c021fdbfd
