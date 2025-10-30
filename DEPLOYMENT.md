# 🚀 Deployment Guide - GitHub Pages

## ✅ What I've Fixed

1. **Added `base: '/Portfolio/'`** to `vite.config.js` - This tells Vite to use the correct path for GitHub Pages
2. **Created GitHub Actions workflow** - Automatic deployment on every push to main branch

## 📝 Steps to Deploy

### Option 1: Automatic Deployment (Recommended)

1. **Enable GitHub Pages in your repository:**
   - Go to your GitHub repository: https://github.com/zaakiraza/Portfolio
   - Click on **Settings** → **Pages**
   - Under **Source**, select: **GitHub Actions**
   
2. **Build and push your changes:**
   ```bash
   cd c:\Users\Zakir\Desktop\Portfolio
   npm run build
   git add .
   git commit -m "Add GitHub Actions deployment workflow"
   git push origin main
   ```

3. **Wait for deployment:**
   - Go to the **Actions** tab in your GitHub repo
   - Watch the deployment workflow complete
   - Your site will be live at: https://zaakiraza.github.io/Portfolio/

### Option 2: Manual Deployment

If automatic deployment doesn't work, use this:

1. **Build the project:**
   ```bash
   cd c:\Users\Zakir\Desktop\Portfolio
   npm run build
   ```

2. **Install gh-pages package:**
   ```bash
   npm install --save-dev gh-pages
   ```

3. **Add deploy script to package.json:**
   Add this to the "scripts" section:
   ```json
   "deploy": "gh-pages -d dist"
   ```

4. **Deploy:**
   ```bash
   npm run deploy
   ```

## 🔧 Troubleshooting

### If you get 404 errors:

1. **Check GitHub Pages settings:**
   - Make sure **Source** is set to **GitHub Actions** or **gh-pages branch**

2. **Verify base path:**
   - The `vite.config.js` should have `base: '/Portfolio/'`
   - Repository name must match (case-sensitive)

3. **Clear cache:**
   - Hard refresh your browser (Ctrl + Shift + R)
   - Wait 5-10 minutes for GitHub Pages to update

### If assets don't load:

1. **Check the build output:**
   ```bash
   npm run build
   ```
   - Look for any errors during build

2. **Preview locally:**
   ```bash
   npm run preview
   ```
   - Test if it works on http://localhost:4173/Portfolio/

## 📂 File Structure for Deployment

```
Portfolio/
├── .github/
│   └── workflows/
│       └── deploy.yml       # ✅ GitHub Actions workflow
├── dist/                     # Built files (generated)
├── src/                      # Your source code
├── vite.config.js           # ✅ Updated with base path
└── package.json             # Build scripts
```

## 🌐 Your Portfolio URLs

- **GitHub Repository**: https://github.com/zaakiraza/Portfolio
- **Live Site**: https://zaakiraza.github.io/Portfolio/
- **Actions**: https://github.com/zaakiraza/Portfolio/actions

## 🚀 Next Steps

1. Run the build command
2. Commit and push all changes
3. Enable GitHub Pages in repository settings
4. Wait for GitHub Actions to deploy
5. Visit your live site!

## 💡 Important Notes

- Every push to `main` branch will trigger automatic deployment
- Build takes 2-5 minutes typically
- First deployment might take longer
- Make sure your repository is **public** or you have GitHub Pro for Pages on private repos

---

**Need help?** Check the Actions tab for deployment logs!
