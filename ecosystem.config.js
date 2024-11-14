module.exports = {
  apps: [{
    name: "my-nextjs-app",
    script: "npm",
    args: "start -p 3002",
    watch: true,
    env: {
      NODE_ENV: "development",
    },
    env_production: {
      NODE_ENV: "production",
    }
  }]
};
