// script.js for MetaEye - Forensic-Level Metadata Extractor

const fileInput = document.getElementById('fileInput');
const dropZone = document.getElementById('dropZone');
const output = document.getElementById('output');

function formatBytes(bytes) {
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];
  if (bytes === 0) return '0 Byte';
  const i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)));
  return Math.round(bytes / Math.pow(1024, i), 2) + ' ' + sizes[i];
}

function displayMetadata(data) {
  output.innerHTML = '';
  const pre = document.createElement('pre');
  pre.textContent = JSON.stringify(data, null, 2);
  output.appendChild(pre);
}

function extractMetadata(file) {
  if (!file || !file.type.startsWith('image/')) {
    output.innerHTML = '<p>❌ Please upload a valid image file.</p>';
    return;
  }

  const reader = new FileReader();

  reader.onload = function (e) {
    const img = new Image();
    img.onload = function () {
      const metadata = {
        'File Name': file.name,
        'File Size': formatBytes(file.size),
        'Resolution': `${img.naturalWidth} x ${img.naturalHeight}`,
      };

      EXIF.getData(img, function () {
        const exifData = EXIF.getAllTags(this);
        Object.assign(metadata, exifData);

        if (exifData.GPSLatitude && exifData.GPSLongitude) {
          metadata['GPS Coordinates'] = `${exifData.GPSLatitude}, ${exifData.GPSLongitude}`;
        }

        displayMetadata(metadata);
      });
    };
    img.src = e.target.result;
  };

  reader.readAsDataURL(file);
}

function handleFiles(files) {
  if (files.length) {
    extractMetadata(files[0]);
  }
}

fileInput.addEventListener('change', (e) => {
  handleFiles(e.target.files);
});

dropZone.addEventListener('dragover', (e) => {
  e.preventDefault();
  dropZone.classList.add('dragover');
});

dropZone.addEventListener('dragleave', () => {
  dropZone.classList.remove('dragover');
});

dropZone.addEventListener('drop', (e) => {
  e.preventDefault();
  dropZone.classList.remove('dragover');
  handleFiles(e.dataTransfer.files);
});
