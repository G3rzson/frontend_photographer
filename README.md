# 📸 Fotós Portfólió Weboldal

Modern és elegáns portfólió weboldal fotósok számára, amely lehetőséget ad munkáik bemutatására és ügyfelek vonzására. Responsive design, dark mode támogatás és professzionális UI komponensekkel.

> 🎨 **Demo projekt**: A galéria képek Google Gemini AI és Canva segítségével készült illusztrációk, amelyek bemutatják a weboldal funkcionalitását.

## ✨ Funkciók

- 🎨 **Modern UI/UX**: Shadcn/ui komponenskönyvtár alapú elegáns felület
- 🌓 **Dark/Light Mode**: Automatikus témaváltás a rendszer beállításai alapján
- 📱 **Teljesen Responsive**: Mobil, tablet és desktop optimalizált megjelenés
- 🖼️ **Galéria Rendszer**: Collapsible kategóriák carousel nézettel
- 💰 **Árkalkulátor**: Részletes szolgáltatás csomagok bemutatása
- 📧 **Kapcsolati Űrlap**: Validált form React Hook Form + Zod használatával
- ♿ **Accessibility**: WCAG irányelvek szerinti akadálymentesítés
- ⚡ **Teljesítmény**: Next.js Image optimalizáció és SSR/SSG előnyök

## 🛠️ Technológiai Stack

### Core

- **Framework**: [Next.js 16.2](https://nextjs.org/) (App Router)
- **React**: 19.2.4
- **TypeScript**: 5.x (strict mode)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)

### UI & Components

- **Component Library**: [Shadcn/ui](https://ui.shadcn.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Carousel**: [Embla Carousel](https://www.embla-carousel.com/)
- **Theme**: [next-themes](https://github.com/pacocoursey/next-themes)

### Form & Validation

- **Form Management**: [React Hook Form](https://react-hook-form.com/)
- **Schema Validation**: [Zod](https://zod.dev/)
- **Resolver**: @hookform/resolvers

### Dev Tools

- **Linting**: ESLint 9 (Next.js config)
- **PostCSS**: Tailwind PostCSS plugin

### Testing

- **Test Framework**: [Vitest](https://vitest.dev/) 4.1.1
- **Testing Library**: [@testing-library/react](https://testing-library.com/react) 16.1.0
- **DOM Testing**: [@testing-library/dom](https://testing-library.com/) 10.4.0
- **Test Environment**: jsdom
- **Coverage**: 19 tesztek, 6 test fájl

## 📁 Projekt Struktúra

```
frontend_photographer/
├── app/                      # Next.js App Router
│   ├── layout.tsx           # Root layout (Theme Provider, Header, Footer)
│   ├── page.tsx             # Főoldal
│   ├── Page.test.tsx        # ✅ Főoldal tesztek
│   ├── contacts/            # Kapcsolat oldal
│   │   └── ContactsPage.test.tsx  # ✅ Kapcsolat tesztek
│   ├── prices/              # Árak oldal
│   │   └── PricesPage.test.tsx    # ✅ Árak tesztek
│   └── works/               # Munkák galéria
│       └── WorksPage.test.tsx     # ✅ Munkák tesztek
├── components/
│   └── ui/                  # Shadcn UI komponensek
├── features/                # Feature-based komponensek
│   ├── Contacts/           # Kapcsolati űrlap + validáció
│   ├── Footer/             # Footer komponens
│   ├── Header/             # Navigation (Desktop + Mobile)
│   │   └── Header.test.tsx # ✅ Header tesztek
│   └── ThemeSwicher/       # Dark/Light mode toggle
├── Constants/              # Statikus adatok (nav, galéria, árak)
├── lib/                    # Utility függvények
├── vitest.config.ts        # Vitest konfiguráció
├── vitest.setup.ts         # Test setup fájl
└── public/                 # Statikus assets (képek)
    ├── birthday/
    ├── wedding/
    └── contacts/
```

## 🧪 Tesztelés

A projekt **Vitest** és **React Testing Library** használatával írt unit teszteket tartalmaz.

### Tesztelt komponensek

| Komponens          | Tesztek | Leírás                                |
| ------------------ | ------- | ------------------------------------- |
| **Header**         | 6 teszt | Navigation, logo, linkek, mobile menu |
| **ContactsPage**   | 5 teszt | Form mezők, submit gomb, validáció    |
| **contactsSchema** | 2 teszt | Zod schema validáció                  |
| **HomePage**       | 2 teszt | Főcím, profilkép megjelenítés         |
| **PricesPage**     | 2 teszt | Árlista megjelenítés                  |
| **WorksPage**      | 2 teszt | Projekt gombok, galéria               |

### Tesztelési elvek

- 🎯 **Robosztus tesztek**: Strukturális megközelítés, nem törik szöveg változtatásra
- ♿ **Accessibility-first**: Role-based selectorok (`getByRole`, `getByLabelText`)
- 📦 **Feature-based szervezés**: Tesztek a komponensek mellett
- 🔄 **Konstans alapú**: `NAV_LINKS` és más konstansok használata

### Tesztek futtatása

```bash
# Watch mód (automatikus újrafuttatás)
npm run test

# Egyetlen futtatás (CI/CD-hez)
npm run test:run

# UI felülettel (vizuális debug)
npm run test:ui

# Specifikus teszt fájl
npx vitest run features/Header/Header.test.tsx
```

## 🚀 Telepítés és Futtatás

### Előfeltételek

- Node.js 20.x vagy újabb
- npm, yarn, pnpm, vagy bun package manager

### Lépések

1. **Repository klónozása**

```bash
git clone https://github.com/G3rzson/frontend_photographer.git
cd frontend_photographer
```

2. **Függőségek telepítése**

```bash
npm install
# vagy
yarn install
# vagy
pnpm install
```

3. **Fejlesztői szerver indítása**

```bash
npm run dev
# vagy
yarn dev
# vagy
pnpm dev
```

4. **Böngészőben megnyitás**

```
http://localhost:3000
```

### Build és Production

```bash
# Production build készítése
npm run build

# Production szerver indítása
npm run start
```

### Tesztelés

```bash
# Tesztek futtatása watch módban (fejlesztéshez)
npm run test

# Tesztek egyszeri futtatása
npm run test:run

# Tesztek futtatása UI felülettel
npm run test:ui

# Specific teszt fájl futtatása
npx vitest run app/Page.test.tsx
```

## 📖 Használat

### Képek hozzáadása

1. Helyezd el a képeket a `public/` mappában (pl. `public/wedding/`, `public/birthday/`)
2. Frissítsd a `Constants/constants.ts` fájlt:

```typescript
export const PROJEKTS = [
  {
    title: "Kategória neve",
    images: [
      { src: "/mappa/kep1.png", alt: "Kép leírása" },
      // ... további képek
    ],
  },
];
```

> **Megjegyzés**: A jelenlegi galéria képek Google Gemini AI és Canva használatával készült demó tartalmak, amelyek bemutatják a portfólió funkcionalitását.

### Árak módosítása

Szerkeszd a `Constants/constants.ts` fájlt:

```typescript
export const PRICE_LIST = [
  {
    event: "Szolgáltatás neve",
    price: 50000,
    time: "2 óra",
    description: "Részletes leírás...",
  },
];
```

### Navigáció frissítése

```typescript
export const NAV_LINKS = [{ href: "/uj-oldal", title: "Új oldal" }];
```

## 🎯 Roadmap & Fejlesztési Lehetőségek

### Tervezett funkciók

- [ ] **Backend integráció**: Email küldés (pl. Resend, SendGrid, vagy Nodemailer)
- [ ] **Form submission**: Valós adatküldés és visszajelzés
- [ ] **CMS integráció**: Sanity vagy ContentLayer tartalomkezeléshez
- [ ] **Képfeltöltés**: Admin felület galériák kezeléséhez
- [ ] **Blog/Hírek szekció**: SEO optimalizált tartalmak
- [ ] **Többnyelvűség**: i18n támogatás (magyar + angol)
- [ ] **Foglalási rendszer**: Időpontfoglalás naptárral
- [ ] **Admin Dashboard**: Tartalom és foglalások kezelése

### Javasolt fejlesztések

- [x] Unit tesztek (Vitest + Testing Library) - **Implementálva ✅**
- [ ] E2E tesztek (Playwright/Cypress)
- [ ] Integration tesztek (form submission, navigation)
- [ ] Visual regression tesztek (Chromatic/Percy)
- [ ] Lighthouse score optimalizálás (100/100)
- [ ] Progressive Web App (PWA) funkciók
- [ ] Sitemap és robots.txt generálás
- [ ] OpenGraph meta tagek finomítása
- [ ] Google Analytics / Vercel Analytics integráció
- [ ] Image lazy loading és blur placeholder

## 🔧 Konfiguráció

### Environment Variables (jövőbeli használatra)

Hozz létre egy `.env.local` fájlt:

```env
# Email szolgáltatás (pl. Resend)
RESEND_API_KEY=your_api_key_here
EMAIL_TO=your@email.com

# Analytics (opcionális)
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

## 📄 License

Ez a projekt tanulási/portfólió célra készült.

## 👤 Készítő

**G3rzson**

- GitHub: [@G3rzson](https://github.com/G3rzson)

## 🙏 Köszönetnyilvánítás

- [Next.js](https://nextjs.org/) - A React framework
- [Shadcn/ui](https://ui.shadcn.com/) - UI komponensek
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS
- [Vercel](https://vercel.com/) - Hosting és deployment
- [Google Gemini](https://gemini.google.com/) - AI-generált demó képek készítése
- [Canva](https://www.canva.com/) - Képszerkesztés és design elemek

---

**Megjegyzés**: A kapcsolati űrlap jelenleg fejlesztés alatt áll. Az adatok elküldése még nem működik (csak frontend validáció van implementálva).
