# Image Optimization Guide

## Current Status
The site currently uses PNG images that are optimized by Vite during build. Total image size: ~5.9MB

## Images in Use:
- `hero-bg.png` (1.1MB) - Hero section background
- `bali_rice_fields_learning_1767354545877.png` (1008KB) - Locations page
- `bali_villa_pool_study_1767354565621.png` (1.2MB) - Blog page
- `dp_studying_focused_1767354526083.png` (725KB) - DP page
- `myp_science_experiment_1767354510028.png` (911KB) - MYP page
- `pyp_reading_bali_1767354491003.png` (953KB) - PYP page

## Vercel Automatic Optimization
Vercel automatically optimizes images served from your deployment:
- Automatic format conversion (WebP, AVIF for supported browsers)
- Automatic image compression
- Global CDN caching
- No additional configuration needed

## Future Enhancements (Optional)
If you need more control over image optimization, consider:

1. **Convert to WebP format** (80-90% smaller than PNG):
   ```bash
   # Using ImageMagick, sharp, or online conversion tools
   # Example with sharp-cli (if installed):
   # npx sharp-cli -i "src/assets/*.png" -o "src/assets/" -f webp
   ```

2. **Use Responsive Images**: For critical images, create multiple sizes:
   - Small (640w) for mobile
   - Medium (1024w) for tablet
   - Large (1920w) for desktop

3. **Lazy Loading**: Add loading="lazy" attribute if converting to <img> tags

## Current Implementation
Images are used as CSS background-images, which is appropriate for:
- Hero sections with overlay text
- Decorative backgrounds
- Full-width banner sections

This approach ensures proper text contrast and accessibility.
