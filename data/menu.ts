import type { Locale } from '@/lib/i18n/config';

export interface MenuItem {
  title: string;
  description: string;
  price: string;
}

export interface MenuSection {
  title: string;
  items: MenuItem[];
}

const menu: Record<Locale, { sections: MenuSection[] }> = {
  cs: {
    sections: [
      {
        title: 'Chefovo doporučení',
        items: [
          {
            title: 'Hovězí líčka na červeném víně',
            description: 'Pomalé vaření, krémová bramborová kaše, kořenová zelenina, demi glace.',
            price: 'od — Kč'
          },
          {
            title: 'Pstruh z horského potoka',
            description: 'Bylinkové máslo, citrónová emulze, šťouchané brambory s koprem.',
            price: 'od — Kč'
          }
        ]
      },
      {
        title: 'Vegetariánské menu',
        items: [
          {
            title: 'Pečená dýně Hokkaido',
            description: 'Fermentované chilli, kozí sýr z lokální farmy, semínkový crumble.',
            price: 'od — Kč'
          },
          {
            title: 'Domácí těstoviny s lanýžem',
            description: 'Krém z parmezánu, lanýžový olej, pečené lískové oříšky.',
            price: 'od — Kč'
          }
        ]
      },
      {
        title: 'Dezerty',
        items: [
          {
            title: 'Tvarohový cheesecake se smrkovým sirupem',
            description: 'Pražené pistácie, borůvkový prach.',
            price: 'od — Kč'
          },
          {
            title: 'Čokoládový fondant',
            description: '70% čokoláda, sorbet z lesního ovoce, limetková pěna.',
            price: 'od — Kč'
          }
        ]
      }
    ]
  },
  en: {
    sections: [
      {
        title: "Chef's Specials",
        items: [
          {
            title: 'Beef cheeks in red wine',
            description: 'Slow cooked, creamy mashed potatoes, root vegetables, demi-glace.',
            price: 'from — CZK'
          },
          {
            title: 'Mountain brook trout',
            description: 'Herb butter, lemon emulsion, mashed potatoes with dill.',
            price: 'from — CZK'
          }
        ]
      },
      {
        title: 'Vegetarian menu',
        items: [
          {
            title: 'Roasted Hokkaido pumpkin',
            description: 'Fermented chilli, local goat cheese, seed crumble.',
            price: 'from — CZK'
          },
          {
            title: 'Homemade pasta with truffle',
            description: 'Parmesan cream, truffle oil, roasted hazelnuts.',
            price: 'from — CZK'
          }
        ]
      },
      {
        title: 'Desserts',
        items: [
          {
            title: 'Quark cheesecake with spruce syrup',
            description: 'Roasted pistachios, blueberry dust.',
            price: 'from — CZK'
          },
          {
            title: 'Chocolate fondant',
            description: '70% chocolate, forest fruit sorbet, lime foam.',
            price: 'from — CZK'
          }
        ]
      }
    ]
  },
  pl: {
    sections: [
      {
        title: 'Specjały szefa kuchni',
        items: [
          {
            title: 'Policzki wołowe w czerwonym winie',
            description: 'Powolne gotowanie, kremowe puree ziemniaczane, warzywa korzeniowe, demi-glace.',
            price: 'od — CZK'
          },
          {
            title: 'Pstrąg z górskiego potoku',
            description: 'Masło ziołowe, emulsja cytrynowa, tłuczone ziemniaki z koperkiem.',
            price: 'od — CZK'
          }
        ]
      },
      {
        title: 'Menu wegetariańskie',
        items: [
          {
            title: 'Pieczona dynia Hokkaido',
            description: 'Fermentowane chilli, kozi ser z lokalnej farmy, posypka z nasion.',
            price: 'od — CZK'
          },
          {
            title: 'Domowy makaron z truflą',
            description: 'Krem z parmezanu, olej truflowy, prażone orzechy laskowe.',
            price: 'od — CZK'
          }
        ]
      },
      {
        title: 'Desery',
        items: [
          {
            title: 'Sernik twarogowy ze świerkowym syropem',
            description: 'Prażone pistacje, jagodowy pył.',
            price: 'od — CZK'
          },
          {
            title: 'Fondant czekoladowy',
            description: 'Czekolada 70%, sorbet z leśnych owoców, pianka limonkowa.',
            price: 'od — CZK'
          }
        ]
      }
    ]
  },
  de: {
    sections: [
      {
        title: 'Empfehlung des Küchenchefs',
        items: [
          {
            title: 'Rinderbäckchen in Rotwein',
            description: 'Slow Cooking, cremiges Kartoffelpüree, Wurzelgemüse, Demi-Glace.',
            price: 'ab — CZK'
          },
          {
            title: 'Forelle aus dem Bergbach',
            description: 'Kräuterbutter, Zitronenemulsion, Stampfkartoffeln mit Dill.',
            price: 'ab — CZK'
          }
        ]
      },
      {
        title: 'Vegetarisches Menü',
        items: [
          {
            title: 'Gerösteter Hokkaido-Kürbis',
            description: 'Fermentiertes Chili, Ziegenkäse vom Hof, Saaten-Crumble.',
            price: 'ab — CZK'
          },
          {
            title: 'Hausgemachte Pasta mit Trüffel',
            description: 'Parmesancreme, Trüffelöl, geröstete Haselnüsse.',
            price: 'ab — CZK'
          }
        ]
      },
      {
        title: 'Desserts',
        items: [
          {
            title: 'Topfen-Cheesecake mit Fichtensirup',
            description: 'Geröstete Pistazien, Heidelbeerpulver.',
            price: 'ab — CZK'
          },
          {
            title: 'Schokoladenfondant',
            description: '70% Schokolade, Waldbeer-Sorbet, Limettenschaum.',
            price: 'ab — CZK'
          }
        ]
      }
    ]
  },
  sk: {
    sections: [
      {
        title: 'Šéfkuchárovo odporúčanie',
        items: [
          {
            title: 'Hovädzie líčka na červenom víne',
            description: 'Pomalé varenie, krémová zemiaková kaša, koreňová zelenina, demi glace.',
            price: 'od — CZK'
          },
          {
            title: 'Pstruh z horského potoka',
            description: 'Bylinkové maslo, citrónová emulzia, šťouchané zemiaky s kôprom.',
            price: 'od — CZK'
          }
        ]
      },
      {
        title: 'Vegetariánske menu',
        items: [
          {
            title: 'Pečená tekvica Hokkaido',
            description: 'Fermentované chilli, kozí syr z lokálnej farmy, semienkový crumble.',
            price: 'od — CZK'
          },
          {
            title: 'Domáce cestoviny s lanýžom',
            description: 'Parmezánový krém, lanýžový olej, pražené lieskovce.',
            price: 'od — CZK'
          }
        ]
      },
      {
        title: 'Dezerty',
        items: [
          {
            title: 'Tvarohový cheesecake so smrekovým sirupom',
            description: 'Pražené pistácie, čučoriedkový prach.',
            price: 'od — CZK'
          },
          {
            title: 'Čokoládový fondant',
            description: '70% čokoláda, sorbet z lesného ovocia, limetková pena.',
            price: 'od — CZK'
          }
        ]
      }
    ]
  }
};

export default menu;
