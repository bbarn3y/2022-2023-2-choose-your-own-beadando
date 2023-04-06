export const tasks = [
  {
    A: {
      imageUrl: 'assets/images/tasks/1/A/master-sword.jpg',
      story: `Hősünk soha nem riadt vissza a harctől, így amikor a távolban meglátott egy kőbe szúrt kardot, azonnal
      futásba kezdett, pár perc után botladozva, lihegve meg is érkezett céljához.`,
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
        ### Komponens
      `
    },
    B: {
      imageUrl: 'assets/images/tasks/1/B/tree.jpg',
      story: 'Hősünk pacifista beállítottságú, így inkább a közeli fára mászott fel nyersanyagokat gyűjteni.',
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
  }
]
