module.exports = {
  apps: [{
    name: "homepage",
    script: "node_modules/next/dist/bin/next",
    args: ["start"],
    interpreter: "none",
    instances: 1,
    autorestart: true,
    watch: false,
    max_memory_restart: "1G",
    env: {
      NODE_ENV: "production",
      PORT: 3000,  // 添加这行来设置端口
      HOSTNAME: "0.0.0.0"
    }
  }]
}
