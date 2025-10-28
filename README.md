# U Fandy Web

Moderní redesign webu [u-fandy.cz](https://www.u-fandy.cz/) postavený na Next.js 14 s důrazem na výkon, dostupnost a skvělý obsah.

## Tech stack
- [Next.js 14](https://nextjs.org/) (App Router, React Server Components)
- TypeScript v přísném režimu
- Tailwind CSS
- Zod pro validaci
- Playwright pro end-to-end testy
- Lighthouse CI pro automatické metriky

## Požadavky
- Node.js 18.17+
- [pnpm](https://pnpm.io/) 8.15.5

## Lokální vývoj
```bash
pnpm install
pnpm dev
```
Aplikace poběží na http://localhost:3000.

## Produkční build
```bash
pnpm install --frozen-lockfile
pnpm build
pnpm start
```

## Testy a kontrola kvality
```bash
# statická analýza
pnpm lint
pnpm typecheck

# Playwright (instalace prohlížečů je nutné provést jednou)
pnpm exec playwright install
pnpm test

# Lighthouse CI
npx lhci autorun --config=./lighthouse-ci.config.js
```

## Struktura
```
app/                 # app router, jednotlivé stránky
components/          # sdílené UI komponenty
lib/                 # validace, serverové akce
data/                # obsahové JSON zdroje (menu, pokoje, otevírací doba)
public/images/       # optimalizované placeholdery
```

## Nasazení
Projekt je připraven pro Vercel/edge prostředí (`runtime = 'edge'`). Po build procesu lze aplikaci nasadit na libovolný hostitel kompatibilní s Next.js 14.

## Licence
© 2024 U Fandy. Všechna práva vyhrazena.
