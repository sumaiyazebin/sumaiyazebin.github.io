# Sumaiya Zebin — Portfolio

Static website. No build step: open `index.html` in a browser, or upload this folder to any static host (GitHub Pages, Netlify, etc.).

```
./
├── index.html                 Page content and structure
├── css/
│   ├── base.css               Colour tokens (light/dark), reset, typography
│   ├── layout.css             Sticky header, section headings
│   ├── hero.css               Name, portrait, red pathway line
│   ├── projects.css           Project title blocks and image galleries
│   ├── about.css              About, skills, experience/education/certifications
│   ├── contact.css            Contact footer
│   └── lightbox.css           Full-size image viewer
├── js/
│   └── lightbox.js            Opens gallery images full size
├── images/
│   ├── profile/               Portrait
│   └── projects/
│       ├── campus/            Pathway of Sacred Unity and Learning
│       ├── transit/           Urban Amenities with Transit Stops (TOD)
│       ├── katabon/           Pet-Friendly Space in Katabon
│       └── benarasi/          Reviving Benarasi Palli
└── documents/
    └── Sumaiya-Zebin-CV.pdf
```

To add a project, copy one `<article class="sheet">` block in `index.html`, put its images in a new folder under `images/projects/`, and update the sheet numbers.
