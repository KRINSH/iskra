# Image slots

Every image on the site is a **placeholder** drawn as SVG and rendered to PNG/WebP.
Replace a file by dropping in a real one **with the same name** — no HTML changes needed.
Keep the aspect ratio (or close to it): cards crop with `object-fit: cover`.

| File | Size / ratio | Status | Used on | Intended real content |
|---|---|---|---|---|
| `shot-studio.png` | 1600×1000 (16:10) | Placeholder | Hero | Screenshot of the Studio screen (`?preview`, dark theme, English UI) with a prompt typed and a few finished results in the feed. |
| `shot-queue.png` | 1600×1000 (16:10) | Placeholder | Feature “Night queue” (cropped from top-left) | Screenshot of the Queue screen with several ideas: done/checked, one running, some waiting. |
| `shot-constructor.png` | 1600×1000 (16:10) | Placeholder | Feature “Node Constructor” (cropped from top-left) | Screenshot of the Constructor with a small, tidy pipeline (prompt → model → generate → check & fix → upscale → save). |
| `shot-pro.png` | 1600×1000 (16:10) | Placeholder | Pricing → “How Pro unlocks” | Screenshot of the “This is in Iskra Pro” window (price, Buy button, license-key field). |
| `ex-1.webp` | 1200×900 (4:3) | **REAL** | Feature “Studio” (large card) | Real Iskra output: a log cabin with warm windows in snowy mountains at sunset. |
| `ex-2.webp` | 1200×900 (4:3) | Placeholder | Feature “Check & fix defects” (large card) | Before/after pair side by side: a result with a visible defect (bad hands/eyes) and the fixed version. |
| `ex-3.webp` | 1200×900 (4:3) | Placeholder | Feature “Game assets” | A generated sprite sheet on a transparent/checkerboard background (one character, several animation frames). |
| `ex-4.webp` | 1200×900 (4:3) | Placeholder | Feature “Same character in new scenes” | Three panels: the same character in three different scenes. |
| `ex-5.webp` | 1200×900 (4:3) | **REAL** (poster frame for the video) | Feature “Video from image” | Poster frame of the Wan 2.2 clip `ex-video.webm` / `ex-video.mp4`. |
| `ex-video.webm`, `ex-video.mp4` | 480×832 (portrait), ~2 s, looping | **REAL** | Feature “Video from image” (muted, autoplay; paused under reduced motion) | Real Iskra (Wan 2.2) clip. |
| `ex-6.webp` | 1200×900 (4:3) | Placeholder | Feature “Quiet mode for laptops” | Close-up of the Quiet mode toggle + temperature indicator in the top bar (screenshot crop), or a simple illustration. |
| `gallery-1` … `gallery-6.webp` | 720×900 (4:5) | **REAL** | Section “Made with Iskra” | Unedited outputs from Iskra’s engine (MacBook, open SDXL-based models). |
| `og.png` | 1200×630 | Placeholder | Social preview (Open Graph / Twitter) | Can stay; optionally swap the art for real results. Must stay a PNG/JPG under ~1 MB. |
| `apple-touch-icon.png` | 180×180 | Placeholder | iOS home-screen icon | Replace with the final app icon if it changes. |

Tips
- WebP: `cwebp -q 82 in.png -o ex-1.webp`. Screenshots stay PNG (sharp UI text).
- Example images must be honest: real outputs from Iskra (generated in Colab), not stock art.
- After replacing, update the `alt` text in `index.html`, `uk/index.html`, `ru/index.html` if the content differs from the description there.
