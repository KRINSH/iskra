# Image slots

Every image on the site is a **placeholder** drawn as SVG and rendered to PNG/WebP.
Replace a file by dropping in a real one **with the same name** — no HTML changes needed.
Keep the aspect ratio (or close to it): cards crop with `object-fit: cover`.

| File | Size / ratio | Used on | Intended real content |
|---|---|---|---|
| `shot-studio.png` | 1600×1000 (16:10) | Hero | Screenshot of the Studio screen (`?preview`, dark theme, English UI) with a prompt typed and a few finished results in the feed. |
| `shot-queue.png` | 1600×1000 (16:10) | Feature “Night queue” (cropped from top-left) | Screenshot of the Queue screen with several ideas: done/checked, one running, some waiting. |
| `shot-constructor.png` | 1600×1000 (16:10) | Feature “Node Constructor” (cropped from top-left) | Screenshot of the Constructor with a small, tidy pipeline (prompt → model → generate → check & fix → upscale → save). |
| `shot-pro.png` | 1600×1000 (16:10) | Pricing → “How Pro unlocks” | Screenshot of the “This is in Iskra Pro” window (price, Buy button, license-key field). |
| `ex-1.webp` | 1200×900 (4:3) | Feature “Studio” (large card) | A strong, attractive Colab-generated image from a simple prompt (e.g. cozy cabin in snowy forest at dusk). |
| `ex-2.webp` | 1200×900 (4:3) | Feature “Check & fix defects” (large card) | Before/after pair side by side: a result with a visible defect (bad hands/eyes) and the fixed version. |
| `ex-3.webp` | 1200×900 (4:3) | Feature “Game assets” | A generated sprite sheet on a transparent/checkerboard background (one character, several animation frames). |
| `ex-4.webp` | 1200×900 (4:3) | Feature “Same character in new scenes” | Three panels: the same character in three different scenes. |
| `ex-5.webp` | 1200×900 (4:3) | Feature “Video from image” | A frame from a Wan 2.2 clip (optionally with a play icon). Could later become a short muted `<video>`. |
| `ex-6.webp` | 1200×900 (4:3) | Feature “Quiet mode for laptops” | Close-up of the Quiet mode toggle + temperature indicator in the top bar (screenshot crop), or a simple illustration. |
| `og.png` | 1200×630 | Social preview (Open Graph / Twitter) | Can stay; optionally swap the art for real results. Must stay a PNG/JPG under ~1 MB. |
| `apple-touch-icon.png` | 180×180 | iOS home-screen icon | Replace with the final app icon if it changes. |

Also: `../favicon.svg` — spark on a dark tile, accent `#ff7a1a`.

Tips
- WebP: `cwebp -q 82 in.png -o ex-1.webp`. Screenshots stay PNG (sharp UI text).
- Example images must be honest: real outputs from Iskra (generated in Colab), not stock art.
- After replacing, update the `alt` text in `index.html`, `uk/index.html`, `ru/index.html` if the content differs from the description there.
