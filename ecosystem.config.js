module.exports = {
  apps: [{
    name: "my-nextjs-app",
    script: "npm",
    args: "start",
    watch: true,
    env: {
      NODE_ENV: "development",
    },
    env_production: {
      NODE_ENV: "production",
    }
  }]
};
