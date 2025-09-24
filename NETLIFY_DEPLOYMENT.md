# 🚀 NETLIFY DEPLOYMENT GUIDE - SUPABASE DATABASE

## ✅ ENVIRONMENT SETUP

### **Option 1: Using netlify.toml (Recommended)**
Your `netlify.toml` file now includes the Supabase environment variables automatically.

### **Option 2: Manual Environment Variables**
If you prefer to set them manually in Netlify Dashboard:

Go to: **Netlify Dashboard** → **Your Site** → **Site Settings** → **Environment Variables**

Add these variables:
```
VITE_SUPABASE_URL = https://cifznoilfpusmwxtmjqc.supabase.co
VITE_SUPABASE_ANON_KEY = eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNpZnpub2lsZnB1c213eHRtanFjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTg2MTc4MDEsImV4cCI6MjA3NDE5MzgwMX0.LPHyEzeZo5i5k9yUngG77otY7vjb9H14cuLn4Gy5QLg
```

## 📁 DEPLOYMENT FILES READY:

- ✅ `dist/index.html` - Fixed HTML with proper script tags
- ✅ `dist/assets/` - CSS and JS bundles  
- ✅ `dist/_redirects` - SPA routing support
- ✅ `dist/test.html` - Debug test page
- ✅ `netlify.toml` - Deployment configuration with Supabase env vars

## 🎯 DEPLOYMENT METHODS:

### **Method 1: Drag & Drop**
1. Zip the entire `dist/` folder
2. Go to Netlify Dashboard
3. Drag the zip to "Deploy" area

### **Method 2: GitHub Integration** 
1. Push code to GitHub
2. Connect GitHub repo to Netlify
3. Netlify will use `netlify.toml` automatically

### **Method 3: Netlify CLI**
```bash
npm install -g netlify-cli
netlify deploy --prod --dir dist
```

## 🔧 TROUBLESHOOTING:

### **If you still see black screen:**
1. Visit `https://yoursite.netlify.app/test.html` first
2. If test page works, the issue is environment variables
3. Check browser console (F12) for errors
4. Verify Supabase credentials are correct

### **Common Issues:**
- ❌ Wrong environment variable names (must start with `VITE_`)
- ❌ Missing `_redirects` file (causes 404 on refresh)  
- ❌ Old Neon database variables still present

## 🎉 SUCCESS INDICATORS:

When working correctly, you should see:
- ✅ Loading spinner (briefly)
- ✅ Za Website with your branding
- ✅ Khxzi's Dev Services server (auto-added)
- ✅ Owner login functionality
- ✅ Theme switching
- ✅ All UI components rendering

## 🎨 FEATURES INCLUDED:

- 🖼️ Image upload system
- 🎯 Server management (CRUD)  
- 🔐 Owner authentication
- 🎨 6 theme variants
- 📱 Responsive design
- ⚡ Real-time updates
- 🔍 Search functionality
- 🎮 Discord integration
- ⭐ Featured server (Khxzi's)

**Your site is ready to deploy! 🚀**
