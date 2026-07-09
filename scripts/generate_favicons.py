from PIL import Image
import os

# Source image
src = r"D:\kiru\jp-residency\jp-residency\src\assets\logo\img1.png"
output_dir = r"D:\kiru\jp-residency\jp-residency\public"

img = Image.open(src)
print(f"Image size: {img.size}, mode: {img.mode}")

# Ensure RGBA mode for transparency
if img.mode != 'RGBA':
    img = img.convert('RGBA')

# Generate PNG favicons
sizes = {
    "favicon-16x16.png": (16, 16),
    "favicon-32x32.png": (32, 32),
    "apple-touch-icon.png": (180, 180),
    "android-chrome-192x192.png": (192, 192),
    "android-chrome-512x512.png": (512, 512),
}

for filename, (w, h) in sizes.items():
    resized = img.resize((w, h), Image.LANCZOS)
    filepath = os.path.join(output_dir, filename)
    resized.save(filepath, "PNG")
    print(f"Created {filepath} ({w}x{h})")

# Generate .ico (multi-size)
ico_sizes = [16, 32, 48]
ico_images = []
for s in ico_sizes:
    resized = img.resize((s, s), Image.LANCZOS)
    ico_images.append(resized)

ico_path = os.path.join(output_dir, "favicon.ico")
ico_images[0].save(ico_path, format="ICO", sizes=[(s, s) for s in ico_sizes], append_images=ico_images[1:])
print(f"Created {ico_path} (sizes: {ico_sizes})")

print("\nAll favicon files generated successfully!")