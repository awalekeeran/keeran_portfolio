# Image Assets Guide

This folder contains all image assets for your portfolio website.

## 📐 **Critical: Portfolio Image Specifications**

Your portfolio uses a **hover overlay effect** that requires specific image dimensions!

### **Required Dimensions:**
- **Size**: 800×600px (landscape/horizontal orientation)
- **Display**: Images show at 300px height, full container width
- **Format**: JPG or PNG
- **File Size**: Keep under 500KB

### **Why These Dimensions?**
The CSS uses:
```css
.portfolio-image img {
    width: 100%;
    height: 300px;
    object-fit: cover;  /* Crops to fit */
}
```

**Landscape images (800×600) work best** because they maintain focus when cropped to 300px height.

---

## 🎯 **How the Hover Overlay Works**

### **Normal State (Before Hover):**
- Full image is visible
- 300px height × full width
- Professional, clean appearance

### **Hover State (What Happens):**
1. Image zooms to 110% (subtle zoom effect)
2. Purple-blue gradient overlay fades in
3. White text appears (project title + tech)
4. Link buttons appear

**This means:** Choose images with good central focus so they look good when zoomed!

---

## 🖼️ **Best Image Types for Each Project**

### **1. Microservices API Platform**
**Best options:**
- ✅ Swagger/OpenAPI documentation screenshot
- ✅ Visual Studio Code with C# code (dark theme)
- ✅ Azure App Service dashboard
- ✅ Postman API testing view

**Sample Search Terms:** "swagger ui dark", "c# code editor", "rest api"

### **2. Azure Cloud Migration**
**Best options:**
- ✅ Azure Kubernetes Service dashboard
- ✅ Azure Portal resource overview
- ✅ Container registry view
- ✅ Cloud migration architecture diagram

**Sample Search Terms:** "azure dashboard", "kubernetes pods", "cloud architecture"

### **3. Event-Driven System (Kafka)**
**Best options:**
- ✅ Kafka topics/consumer groups view
- ✅ Event flow diagram
- ✅ Message streaming visualization
- ✅ Kafka UI/dashboard

**Sample Search Terms:** "kafka dashboard", "event streaming", "message queue"

### **4. Enterprise Portal (Angular)**
**Best options:**
- ✅ Angular application UI screenshot
- ✅ Admin dashboard with charts
- ✅ Data table/grid view
- ✅ Login page with modern design

**Sample Search Terms:** "angular dashboard", "admin panel ui", "web application"

### **5. CI/CD Pipeline (Azure DevOps)**
**Best options:**
- ✅ Azure DevOps pipeline success screen
- ✅ YAML pipeline code view
- ✅ Build/release stages diagram
- ✅ Deployment logs (green checkmarks)

**Sample Search Terms:** "azure devops pipeline", "ci cd", "deployment success"

### **6. Real-Time Dashboard (React)**
**Best options:**
- ✅ React dashboard with charts/graphs
- ✅ Analytics dashboard
- ✅ Real-time data visualization
- ✅ Modern web UI with cards

**Sample Search Terms:** "react dashboard", "analytics ui", "data visualization"

---

## Required Images

### 1. Profile Picture (`profile.jpg`)
- **Location**: `assets/images/profile.jpg`
- **Recommended Size**: 500x500px (square)
- **Format**: JPG or PNG
- **Description**: Your professional headshot for the home section

### 2. About Section Image (`about.jpg`)
- **Location**: `assets/images/about.jpg`
- **Recommended Size**: 800x600px
- **Format**: JPG or PNG
- **Description**: An image representing you or your workspace for the about section

### 3. Favicon (`favicon.ico`)
- **Location**: `assets/images/favicon.ico`
- **Recommended Size**: 32x32px or 64x64px
- **Format**: ICO, PNG, or SVG
- **Description**: Browser tab icon
- **Tool**: Use [favicon.io](https://favicon.io/) to create from image or text

## Portfolio Project Images

### Location: `assets/images/portfolio/`

Add your project screenshots/thumbnails here:

- **project1.jpg** - Microservices API Platform
- **project2.jpg** - Azure Cloud Migration
- **project3.jpg** - Event-Driven System
- **project4.jpg** - Enterprise Portal
- **project5.jpg** - CI/CD Pipeline
- **project6.jpg** - Real-Time Dashboard

**Recommended Specifications:**
- **Size**: 800x600px (4:3 ratio) - LANDSCAPE/HORIZONTAL
- **Format**: JPG or PNG
- **Quality**: High quality but optimized for web (< 500KB per image)
- **Orientation**: HORIZONTAL (landscape) works best with overlay
- **Content**: Screenshots, diagrams, or code views

---

## 🎨 **Quick Image Sources**

### **Option 1: Temporary Placeholders**
Use these URLs directly in your HTML while preparing real images:

```html
<!-- Replace src in index.html temporarily -->
<img src="https://source.unsplash.com/800x600/?programming,code" alt="Project 1">
<img src="https://source.unsplash.com/800x600/?azure,cloud" alt="Project 2">
<img src="https://source.unsplash.com/800x600/?kubernetes,devops" alt="Project 3">
```

### **Option 2: Create Code Screenshots**
1. Go to **Carbon.now.sh** - https://carbon.now.sh/
2. Paste sample C# or .NET code
3. Choose dark theme (Dracula, Night Owl)
4. Export as PNG (800×600)
5. Save to this folder

### **Option 3: Use Your Real Projects**
1. Open your actual projects
2. Take screenshots (Win + Shift + S on Windows)
3. Crop to focus area
4. Resize to 800×600px
5. Compress with TinyPNG.com
6. Save here with correct names

---

## Image Optimization Tips

1. **Compress Images**: Use tools like:
   - [TinyPNG](https://tinypng.com/)
   - [Squoosh](https://squoosh.app/)
   - [ImageOptim](https://imageoptim.com/) (Mac)

2. **Use Appropriate Formats**:
   - JPG for screenshots/photos
   - PNG for images with transparency
   - SVG for logos and icons
   - WebP for better compression (modern browsers)

3. **Resize Before Upload**:
   - Use Photopea.com (free online editor)
   - GIMP (free desktop app)
   - Paint.NET (Windows)

4. **Enhance for Overlay**:
   - Increase brightness slightly (10-20%)
   - Boost contrast
   - Helps text remain readable when purple overlay appears

---

## ✅ **Image Checklist Before Adding**

For each portfolio image:

- [ ] Dimensions: 800×600px (landscape)
- [ ] File size: < 500KB
- [ ] Horizontal orientation (not vertical)
- [ ] Good contrast and brightness
- [ ] Professional appearance
- [ ] Relevant to project description
- [ ] File named correctly (project1.jpg, etc.)
- [ ] Placed in `assets/images/portfolio/`

---

## Placeholder Images (Temporary)

If you don't have images yet, you can use placeholder services:

- [Unsplash Source](https://source.unsplash.com/): `https://source.unsplash.com/800x600/?technology`
- [Lorem Picsum](https://picsum.photos/): `https://picsum.photos/800/600`
- [Placeholder.com](https://placeholder.com/): `https://via.placeholder.com/800x600`

---

## Example: Adding Images to HTML

```html
<!-- Profile Image -->
<img src="assets/images/profile.jpg" alt="Kiran Awale - Senior Software Engineer">

<!-- Portfolio Image -->
<img src="assets/images/portfolio/project1.jpg" alt="Microservices API Platform">
```

---

## 📚 More Details

See **`docs/IMAGE_GUIDE.md`** for:
- Detailed image examples
- Step-by-step creation guide
- Tools and resources
- Sample image sources specific to .NET/Azure projects

---

## Next Steps

1. ✅ Create `assets/images/` folder structure (Done)
2. ⬜ Add your profile picture (500×500px, square)
3. ⬜ Add your about section image (800×600px)
4. ⬜ Create and add favicon
5. ⬜ Add 6 portfolio project images (800×600px each, LANDSCAPE)
6. ⬜ Optimize all images for web (< 500KB each)
7. ⬜ Test hover overlay effect in browser
8. ⬜ Update image paths in `index.html` if needed

