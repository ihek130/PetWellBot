#!/bin/bash

# PetWellBot Deployment Script for Oracle Cloud
# Run this script on your server via PuTTY

echo "🚀 Starting PetWellBot deployment..."

# Update system
echo "📦 Updating system packages..."
sudo apt update && sudo apt upgrade -y

# Install Node.js 18
echo "📦 Installing Node.js..."
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt install -y nodejs

# Install additional tools
echo "📦 Installing additional tools..."
sudo apt install -y nginx git
sudo npm install -g pm2

# Clone repository (replace with your GitHub URL)
echo "📥 Cloning repository..."
git clone https://github.com/YOURUSERNAME/BlogPlatform.git
cd BlogPlatform

# Create environment file
echo "⚙️ Setting up environment variables..."
echo "🔑 Please enter your Groq API key when prompted..."

# Prompt user for API key
read -p "Enter your Groq API key: " GROQ_API_KEY

cat > .env << EOL
GROQ_API_KEY=${GROQ_API_KEY}
GROQ_API_URL=https://api.groq.com/openai/v1/chat/completions
GROQ_MODEL=llama-3.1-8b-instant
NODE_ENV=production
PORT=5000
EOL

# Secure the .env file
chmod 600 .env

# Install dependencies and build
echo "📦 Installing dependencies..."
npm install --production

echo "🏗️ Building application..."
npm run build

# Start with PM2
echo "🚀 Starting application with PM2..."
pm2 start server/index.js --name "petwellbot"
pm2 startup
pm2 save

# Configure Nginx
echo "🌐 Configuring Nginx..."
sudo tee /etc/nginx/sites-available/petwellbot > /dev/null << 'EOL'
server {
    listen 80;
    server_name _;
    
    location / {
        proxy_pass http://localhost:5000;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
EOL

# Enable site
sudo ln -sf /etc/nginx/sites-available/petwellbot /etc/nginx/sites-enabled/
sudo rm -f /etc/nginx/sites-enabled/default
sudo nginx -t && sudo systemctl restart nginx

echo "✅ Deployment complete!"
echo "🌐 Your app should be running at http://YOUR_SERVER_IP"
echo "📋 Check status with: pm2 status"
echo "📋 View logs with: pm2 logs petwellbot"