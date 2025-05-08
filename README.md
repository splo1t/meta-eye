# 🕵️‍♂️ MetaEye – Web-Based Image Metadata Extractor

MetaEye is a **forensic-level web-based metadata extractor** for image files. It allows users to **upload or drag & drop** image files (JPEG, PNG, etc.) and extract detailed metadata such as EXIF, GPS, camera settings, and more directly from the browser.

---

## 🌐 Live Usage

MetaEye runs **entirely in the browser** — no server or backend required.

- ✅ No installation needed
- ✅ Works on both desktop and mobile browsers
- ✅ Completely client-side for privacy

---

## 📂 Supported File Types

- `.jpg`, `.jpeg`, `.png`, `.tiff`, and other standard image formats

---

## 🧠 Extracted Metadata Includes

- **File Name**
- **File Size**
- **Image Resolution**
- **Camera Make and Model**
- **ISO, Aperture (F-stop), Exposure Time**
- **Date Taken, Modified**
- **GPS Coordinates** (if embedded)
- **All available EXIF data**
- *(Future versions may add IPTC and XMP support)*

---

## 🚀 How to Use

1. Open the HTML file in your browser *(or deploy to GitHub Pages / a static web host)*.
2. Drag and drop an image into the drop area or use the file selector.
3. The extracted metadata will be displayed in a formatted section.
4. If no metadata is found, a friendly message will appear.

---

## 🧾 Files Included

- `index.html` – Main web page
- `styles.css` – Styling for the interface
- `script.js` – Handles file input and metadata extraction logic
- `exif.js` – External library used to parse EXIF data

---

## 📌 Notes

- Metadata visibility depends on the image's embedded data.
- Some formats like PNG may not contain EXIF metadata.
- Fully browser-based: no image is uploaded to a server.

---

## 🔒 Privacy

All metadata extraction happens **locally in your browser**. Images are **never uploaded** or stored remotely.

---

## 📧 Contact

For improvements, issues, or contributions, please open an issue or submit a pull request.

---

**Project Status:** `v1.0.0` ✅ Stable and publicly usable.

