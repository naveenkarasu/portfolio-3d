# Lab Section - Adding New Entries

This guide explains how to add new blog posts or experiments to the Lab section of your portfolio.

## Quick Start

1. Prepare your image (JPG/PNG)
2. Convert to KTX format
3. Add entry to `sources/data/lab.js`

---

## Step 1: Prepare Your Image

### Dimension Requirements (CRITICAL)

**Both width and height MUST be divisible by 4** for WebGPU BC7 texture compression.

| Image Type | Recommended Size | Notes |
|------------|------------------|-------|
| Main image | 960 x 540 | Same as existing images |
| Mini thumbnail | 240 x 136 | Same as existing images |

#### Why divisible by 4?
WebGPU uses block compression (BC7) which processes textures in 4x4 pixel blocks. Non-compliant dimensions cause rendering errors:
```
The size ([Extent3D width:480, height:270...]) is not a multiple of
the block width (4) and height (4) of the texture format (TextureFormat::BC7RGBAUnormSrgb)
```

#### Quick dimension check:
- 960 ÷ 4 = 240 ✓
- 540 ÷ 4 = 135 ✓
- 270 ÷ 4 = 67.5 ✗ (INVALID)

### Resize with Sharp (Node.js)

```javascript
// Run from portfolio-new directory
const sharp = require('sharp');

// Main image (960x540)
sharp('your-image.jpg')
  .resize(960, 540, { fit: 'cover' })
  .toFile('static/lab/images/your-image-resized.jpg');

// Mini thumbnail (240x136)
sharp('your-image.jpg')
  .resize(240, 136, { fit: 'cover' })
  .toFile('static/lab/images/your-image-mini-resized.jpg');
```

---

## Step 2: Convert to KTX Format

### Prerequisites

Install KTX-Software from: https://github.com/KhronosGroup/KTX-Software/releases

### Conversion Command

```bash
# Main image
toktx --nowarn --2d --t2 --encode etc1s --qlevel 255 --assign_oetf srgb --target_type RGB "static/lab/images/your-image.ktx" "static/lab/images/your-image-resized.jpg"

# Mini thumbnail
toktx --nowarn --2d --t2 --encode etc1s --qlevel 255 --assign_oetf srgb --target_type RGB "static/lab/images/your-image-mini.ktx" "static/lab/images/your-image-mini-resized.jpg"
```

### Verify Dimensions

```bash
ktxinfo static/lab/images/your-image.ktx | grep pixel
# Should show: pixelWidth: 960, pixelHeight: 540
```

---

## Step 3: Add Entry to lab.js

Edit `sources/data/lab.js`:

```javascript
export default [
    // Blog entry example
    {
        title: 'Your Blog Title',
        url: 'https://medium.com/your-article',
        image: 'your-image.ktx',
        imageMini: 'your-image-mini.ktx',
        type: 'blog',
    },

    // Experiment/demo example
    {
        title: 'Your Experiment',
        url: 'https://your-demo-url.com',
        image: 'experiment-image.ktx',
        imageMini: 'experiment-image-mini.ktx',
        type: 'experiment',
    }
]
```

### Entry Fields

| Field | Required | Description |
|-------|----------|-------------|
| `title` | Yes | Display name (keep short) |
| `url` | Yes | Link when clicked |
| `image` | Yes | Main KTX image filename |
| `imageMini` | Yes | Thumbnail KTX filename |
| `type` | Yes | `'blog'` or `'experiment'` |

---

## Troubleshooting

### Error: "texture is not a multiple of block width (4)"
- **Cause**: Image dimensions not divisible by 4
- **Fix**: Resize image to compliant dimensions (e.g., 960x540)

### Error: "Invalid Texture" / "Invalid BindGroup"
- **Cause**: Usually follows the dimension error above
- **Fix**: Same as above - ensure dimensions are multiples of 4

### Image not showing
- Verify KTX file exists in `static/lab/images/`
- Check filename matches exactly in `lab.js`
- Hard refresh browser (Ctrl+Shift+R)

---

## Valid Dimension Examples

All dimensions must be divisible by 4:

| Width | Height | Valid? |
|-------|--------|--------|
| 960 | 540 | ✓ |
| 480 | 272 | ✓ |
| 240 | 136 | ✓ |
| 800 | 450 | ✗ (450÷4=112.5) |
| 750 | 500 | ✗ (750÷4=187.5) |

---

## File Locations

```
portfolio-new/
├── sources/
│   └── data/
│       └── lab.js          # Entry definitions
└── static/
    └── lab/
        └── images/
            ├── your-image.ktx
            └── your-image-mini.ktx
```
