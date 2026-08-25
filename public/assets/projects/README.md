# Project Assets Directory

Place your project icons and store screenshots here. Next.js serves all files in `public/` directly.

## Structure:

```
public/assets/projects/
├── epik/
│   ├── icon.png
│   └── screenshots/
│       ├── screen1.jpg
│       ├── screen2.jpg
│       └── screen3.jpg
├── et-app/
│   ├── icon.png
│   └── screenshots/
├── pathconnect/
│   ├── icon.png
│   └── screenshots/
├── ticc-lite/
│   ├── icon.png
│   └── screenshots/
├── pawzy/
│   ├── icon.png
│   └── screenshots/
├── nayomi/
│   ├── icon.png
│   └── screenshots/
├── mihyar/
│   ├── icon.png
│   └── screenshots/
├── body-shop/
│   ├── icon.png
│   └── screenshots/
└── lego/
    ├── icon.png
    └── screenshots/
```

## How to use in `lib/data.ts`:

- **Icon**: `image: "/assets/projects/epik/icon.png"`
- **Screenshots Library**:
  ```ts
  screenshots: [
    "/assets/projects/epik/screenshots/screen1.jpg",
    "/assets/projects/epik/screenshots/screen2.jpg",
  ]
  ```
