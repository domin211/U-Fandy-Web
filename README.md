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

## Nasazení na Netlify
1. V Netlify zvolte **Add new site → Import existing project** a propojte Git repozitář.
2. V sekci **Build settings** nastavte:
   - **Build command:** `pnpm build`
   - **Publish directory:** `.next`
3. Netlify z detekovaného `netlify.toml` automaticky aktivuje plugin `@netlify/next` (sekce `[[plugins]]`).
4. V **Environment variables** přidejte požadované proměnné (Site settings → Build & deploy → Environment) a ujistěte se, že jejich hodnoty odpovídají lokální konfiguraci.
5. Při prvním deployi Netlify automaticky nainstaluje `pnpm` podle `packageManager` a použije Node.js 20 dle `netlify.toml`.

### FAQ
- **Jaká verze Node.js / pnpm se používá?** Deploy běží na Node.js 20 a pnpm 8.15.5, jak je definováno v `netlify.toml`.
- **Je nutné commitovat lockfile?** Ano, `pnpm-lock.yaml` musí být v repozitáři pro deterministickou instalaci.
- **Funguje ISR?** Ano, ISR a revalidace běží automaticky přes Netlify Next.js Runtime.
- **Co middleware a edge runtime?** Existující `runtime = 'edge'` exports jsou nasazeny jako Edge Functions bez dalších úprav.
- **Jak jsou podporovány Route Handlers?** API routy a route handlers jsou převáděny na Netlify Functions v rámci pluginu `@netlify/next`.
- **Je potřeba něco dělat s Netlify pluginy?** Ne, `netlify.toml` již obsahuje sekci `[[plugins]]` s `@netlify/next`, takže se runtime zapne bez dalších kroků.

## Licence
© 2024 U Fandy. Všechna práva vyhrazena.
