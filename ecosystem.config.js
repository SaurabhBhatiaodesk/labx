// module.exports = {
//   apps: [{
//     name: "my-nextjs-app",
//     script: "npm",
//     args: "start",
//     watch: true,
//     env: {
//       NODE_ENV: "development",
//     },
//     env_production: {
//       NODE_ENV: "production",
//     }
//   }]
// };



module.exports = {
  apps: [{
    name: "my-nextjs-app",
    script: "node_modules/next/dist/bin/next",  // Start Next.js directly
    args: "start",  // Production start command for Next.js
    watch: false,  // Disable watching for production
    env: {
      NODE_ENV: "development",
    },
    env_production: {
      NODE_ENV: "production",
      NEXT_PUBLIC_API_URL: "https://labxrepair.com.au",  // Example environment variable
    },
    out_file: "/var/log/my-nextjs-app/out.log",
    error_file: "/var/log/my-nextjs-app/error.log",
    log_date_format: "YYYY-MM-DD HH:mm Z",  // Log date format for better readability
  }]
};
