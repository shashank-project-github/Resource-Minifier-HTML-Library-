# 🚀 Resource Minifier

Resource Minifier is a powerful HTML optimization library designed to improve website performance by providing CSS & JavaScript minification, image and video compression, and lazy loading functionalities.

The library helps developers reduce page load times, optimize bandwidth usage, and enhance overall user experience with simple and easy-to-use custom HTML elements.

---

# 🌐 Live Demo

🔗 **Live Website:  (https://resource-minifier-html-library.vercel.app/)

---

# 📦 npm Package

The package is now publicly available on npm and can be installed easily in any React project.

## Install via npm

```bash
npm install @__shashank__/html-library-react
```

---

# ⚡ Quick Start

Import the package into your React project:

```javascript
import { App } from "@__shashank__/html-library-react";
```

---

# ✨ Features

* ✅ CSS Minification
* ✅ JavaScript Minification
* ✅ Image Compression
* ✅ Video Compression
* ✅ Image Lazy Loading
* ✅ Video Lazy Loading
* ✅ Faster Website Performance
* ✅ Reduced Bandwidth Usage
* ✅ Improved User Experience
* ✅ SEO Friendly Optimization

---

# 📖 Documentation

---

# 🔹 HTML Minifier

HTMLMinifier compresses and optimizes CSS and JS files by removing unnecessary characters and whitespace, making the resulting files smaller in size.

This improves website performance by reducing load times and bandwidth consumption.

## Advantages

* ⚡ Faster loading times
* 🌐 Reduced bandwidth usage
* 🚀 Better website performance
* 💡 Improved user experience

---

## Usage

### Include the `<file-minify>` Tag

```html
<body>

    <file-minify 
        data-file-source="styles.css" 
        data-file-type="css">
    </file-minify>

    <script src="https://YOUR_BACKEND_URL/main.js"></script>

    <file-minify 
        data-file-source="script.js" 
        data-file-type="js">
    </file-minify>

</body>
```

---

## Specify CSS & JS Files

```html
<file-minify 
    data-file-source="your_css_file.css" 
    data-file-type="css">
</file-minify>

<file-minify 
    data-file-source="your_js_file.js" 
    data-file-type="js">
</file-minify>
```

### Save and Refresh

The `<file-minify>` tag automatically minifies the specified files during page load.

---

# 🖼️ Image Compression

Image compression reduces the file size of images without significantly affecting visual quality.

## Why Use Image Compression?

* ⚡ Faster loading times
* 🌐 Reduced bandwidth usage
* 🚀 Better performance
* 📱 Optimized web experience

---

## Usage

### Include the `<img-minified>` Element

```html
<img-minified 
    src="img.jpg" 
    alt="image" 
    style="height: 200px; width: 400px;">
</img-minified>
```

---

## Set the Attributes

```html
<img-minified 
    data-image-source="path/to/your/image.jpg" 
    data-output-format="webp" 
    data-quality="75">
</img-minified>
```

---

# 🎥 Video Compression

Video compression reduces the file size of videos while maintaining visual quality.

## Why Use Video Compression?

* ⚡ Faster loading times
* 🌐 Reduced bandwidth usage
* 📈 Improved SEO
* 🎬 Better streaming experience

---

## Usage

### Include the `<video-minified>` Element

```html
<video-minified 
    src="video.mp4" 
    style="height: 200px; width: 400px;">
</video-minified>
```

---

## Set the Attributes

```html
<video-minified 
    data-video-source="path/to/your/video.mp4" 
    data-output-format="webm" 
    data-quality="80">
</video-minified>
```

---

# 🖼️ Image Lazy Loading

Image lazy loading delays loading images outside the viewport until they are about to become visible to the user.

## Benefits

* ⚡ Faster page load times
* 🚀 Improved user experience
* 🌐 Reduced bandwidth usage

---

## Usage

### Include the `<img-lazy>` Element

```html
<img-lazy 
    src="image-path.jpg" 
    alt="image" 
    style="height: 200px; width: 400px;">
</img-lazy>
```

---

# 🎬 Video Lazy Loading

Video lazy loading delays loading videos outside the viewport until they become visible to the user.

## Benefits

* ⚡ Faster page loading
* 🌐 Reduced bandwidth consumption
* 🚀 Improved performance

---

## Usage

### Include the `<video-lazy>` Element

```html
<video-lazy 
    src="video-path.mp4" 
    alt="video" 
    style="height: 200px; width: 400px;">
</video-lazy>
```

---

# 📈 Performance Benefits

Using Resource Minifier can help:

* Improve website speed
* Optimize frontend resources
* Reduce server load
* Improve SEO rankings
* Enhance overall user experience

---

# 🛠️ Technologies Used

* HTML
* JavaScript
* React
* Next.js
* Node.js

---

# 🤝 Contributing

Contributions are welcome.

Feel free to fork the repository and submit pull requests to improve the project.

---

# 📄 License

This project is licensed under the MIT License.

---

# 👨‍💻 Author

Developed by **Shashank Verma**

🔗 GitHub: [https://github.com/shashank-project-github](https://github.com/shashank-project-github)

---

# ⭐ Support

If you found this project useful, consider giving it a ⭐ on GitHub.
