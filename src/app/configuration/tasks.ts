export const tasks = [
  {
    A: {
      imageUrl: 'assets/images/tasks/1/A/master-sword.jpg',
      story: `Zöld`,
      subTasks: [
        {
          text: `Készíts egy új komponenst, amely egy képet tartalmaz:
                 assets/images/tasks/1/A/master-sword-clickable.png
          `,
          xp: 1
        },
        {
          text: 'A komponens egy változóban trackelje, hogy a felhasználó hányszor kattintott a kardot ábrázoló képre.',
          xp: 1
        },
        {
          text: 'A kattintások számát és, hogy még hány kattintás van hátra egy Angular materialos progress baron jelezd:\n' +
                '  https://material.angular.io/components/progress-bar/overview',
          xp: 1
        },
        {
          text: 'Az 5. kattintás után a komponens háttere változzon zöldre.',
          xp: 1
        }
      ],
      title: `
        Komponens
      `
    },
    B: {
      imageUrl: 'assets/images/tasks/1/B/tree.jpg',
      story: '',
      subTasks: [
        {
          text: `Készíts egy tömböt legalább 5 elemmel, amiben az egyes ágak adatait tárolod.
           Legalább három adatot tárolj minden ágról:
           kép (random választott branch, apple és egg képekből),
           név, hossz (random tört szám) és távolság (random egész szám).`,
          xp: 1
        },
        {
          text: `Egy template segítségével definiáld, hogy az egyes ágakhoz tartozó HTML elemek hogy nézzenenk ki.
          A template-ben szerepljen a kép illetve a név.
          Jelenítsd is meg az előző feladatban létrehozott ágakat a template segítségével.
          `,
          xp: 1
        },
        {
          text: `Egy ág felé mozgatva az egeret jelenjen meg egy tooltip, ami kiírja az ág többi adatát (hossz, távolság).`,
          xp: 1
        },
        {
          text: `Ágak legyenek kiválaszthatóak kattintással.
                 Lehessen akár több ágat is kiválasztani, de legfeljebb hármat.`,
          xp: 1
        }
      ],
      title: `Template`
    },
  },
  {
    A: {
      imageUrl: '',
      story: '',
      subTasks: [],
      title: ``
    },
    B: {
      imageUrl: '',
      story: '',
      subTasks: [],
      title: ``
    },
  },
  {
    A: {
      imageUrl: 'assets/images/tasks/3/A/nou.webp',
      story: 'Példa: {{ "radahn" | reverse }} kimenete: "Nhadar"',
      subTasks: [
        {
          text: `Készíts egy saját pipe-ot.
          Hozz helyes döntést abban, hogy pure vagy impure pipe-ot kell-e itt használni.`,
          xp: 1
        },
        {
          text: `A pipe fordítsa meg a paraméterként fogadott sztringet,
          mintha visszafelé olvasnánk.`,
          xp: 1
        },
        {
          text: `Az eredmény első betűje mindig legyen nagybetűs, akkor is,
          ha az eredeti szövegben nem így volt.`,
          xp: 1
        },
        {
          text: `Definiálj a komponens TS részében egy tömböt:
          ['Malenia', 'Mohg', 'Morgott']
          A komponens inicializációjakor írasd ki konzolra a tömb elemeit revertálva,
          a pipe használatával!
          `,
          xp: 1
        }
      ],
      title: `Pipe`
    },
    B: {
      imageUrl: 'assets/images/tasks/3/B/babel.jpg',
      story: 'Megjelenő szöveg: Jelenleg magyar nyelven jelenik meg az oldal.',
      subTasks: [
        {
          text: `Integráld az ngx-translate (
          https://www.npmjs.com/package/@ngx-translate/core,
          https://www.npmjs.com/package/@ngx-translate/http-loader)
          csomagot a projektbe.
          Az AppModule-ban állítsd be, hogy mindenhol használható legyen.
          Hozz létre legalább 2 nyelvi fájlt.`,
          xp: 1
        },
        {
          text: `A felületen jeleníts meg egy Materialos Select
          (https://material.angular.io/components/select/overview)
          elemet. Az elérhető opciók a támogatott nyelvek legyenek.
          Maguk az opciók az éppen kiválasztott nyelven jelenítsék
          meg az adott nyelvet (pl. magyar nyelv esetén a két opció
          lehet "Angol" és "Magyar", angol nyelvnél pedig "English"
          és "Hungarian").
          Alapból legyen kiválasztva a default nyelv.
          A kiválasztás módosításakor váltson nyelvet a felület.`,
          xp: 1
        },
        {
          text: `A kiválasztott nyelvet tárold el valahol (pl.: localStorage).
          A program inicializációjakor az utoljára kiválasztott nyelven töltsd
          be a felületet.
          Figyelj arra, hogy akkor se szálljon el a program, amikor még nem
          lett kiválasztva nyelv!`,
          xp: 1
        },
        {
          text: `A nyelvi fájlokban definiálj legalább egy kulcsot:
          "CURRENT_LANGUAGE".
          A nyelvválasztó felett jelenjen meg ehhez a kulcshoz tartozó fordítás:
          "Jelenleg magyar nyelven jelenik meg az oldal."
          A "magyar" szó interpolált legyen, tehát változóként helyettesítsd be a
          2. részfeladatban már definiált nyelvi fordításokat.`,
          xp: 1
        },
      ],
      title: `Translate`
    },
  },
  {
    A: {
      imageUrl: '',
      story: '',
      subTasks: [],
      title: ``
    },
    B: {
      imageUrl: '',
      story: '',
      subTasks: [],
      title: ``
    },
  },
  {
    A: {
      imageUrl: '',
      story: '',
      subTasks: [],
      title: ``
    },
    B: {
      imageUrl: '',
      story: '',
      subTasks: [],
      title: ``
    },
    preview: {
      imageUrl: 'assets/images/preview/5.jpg',
      text: 'Csak így tovább, már csak egy feladat van hátra...'
    }
  }
]
