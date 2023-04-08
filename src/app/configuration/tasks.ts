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
      imageUrl: 'assets/images/tasks/2/A/foxy.png',
      story: '[ ] [ ] [ ] [ ] [ ] [ ] [ ] [ ] [ ] [ ]',
      subTasks: [
        {
          text: `Készíts egy 10x10-es táblázatot.
          Kigenerálásához használj for ciklust (*ngFor).
          Nem muszáj az Angular Material-os táblázatot használni, lehet sima <table> elem is.`,
          xp: 1
        },
        {
          text: `A táblázat legyen cikk-cakk-osan színezve.
          Azaz a páratlan számú sorok páros illetve a páros számú sorok páratlanadik számú
          mezői kapjanak egy enyhén sötét hátteret.
          Használható például dinamikus osztály-hozzárendelés: [class.slightly-dark-bg]="..."`,
          xp: 1
        },
        {
          text: `A felhasználó tudjon cellát kiválasztani, azaz, amikor a táblázat cellájára
          kattint, a kiválasztott kapjon élén háttérszínt.
          `,
          xp: 1
        },
        {
          text: `A globális stílusokat tartalmazó less fájlban (styles.less) definiáld, hogy
          az oldalon található össze táblázat (<table>) cellája (<td>) legyen egységes méretű
          (például 50px x 50px ).`,
          xp: 1
        },
      ],
      title: `Styling`
    },
    B: {
      imageUrl: 'assets/images/tasks/2/B/2B.jpg',
      story: '',
      subTasks: [],
      title: `Form validation`
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
      imageUrl: 'assets/images/tasks/4/A/futurama.gif',
      story: '11223344-55667788',
      subTasks: [
        {
          text: `Készíts egy bankszámlaszámot validáló direktívát, amely csak <input>
                mezőkre helyezhető.
                Helyezz el egy példa input mezőt a felületen a direktívával, amin egyből
                tesztelhető annak működése.
                Segítség: selector.
          `,
          xp: 1
        },
        {
          text: `A direktíva változtassa zöldre az input hátterét amennyiben, az input
          "12345678-12345678" vagy "12345678-12345678-12345678" formátumú értéket
          tartalmaz.
          `,
          xp: 1
        },
        {
          text: `Amennyiben a felhasználó "12345678 12345678" vagy
          "12345678 12345678 12345678" formátumú bankszámlaszámot ír be a felhasználó,
          akkor automatikusan alakítsa "12345678-12345678" vagy
          "12345678-12345678-12345678" az input értékét.
          Tehát a space karaktereket cserélje "-" karakterre.
          `,
          xp: 1
        },
        {
          text: `
          Az előző részfeladat (az automatikus formázás) legyen ki-be kapcsolható egy
          input paraméter segítségével.
          Tehát meg lehessen mondani a direktívának, hogy végrehajtsa-e az automatikus
          formázást vagy pedig ne.
          `,
          xp: 1
        },
      ],
      title: `Directive`
    },
    B: {
      imageUrl: 'assets/images/tasks/4/B/404.PNG',
      story: '1 2 3 4 5 404',
      subTasks: [
        {
          text: `Legyen 5 gomb a feladathoz tartozó komponensen, amellyel bármelyik
          lépésre átugorhatunk.
          A navigációhoz használhatod a RouterService-ben már megírt függvényt.
          `,
          xp: 1
        },
        {
          text: `Készíts egy globális szolgáltatást, amely menti és tárolja, hogy a
          felhasználó mely lépést nézte utoljára.
          Ehhez szükség lesz már meglevő komponensek kiegészítésére!
          `,
          xp: 1
        },
        {
          text: `Amennyiben már készült mentés az előző lépésben, akkor az oldal
          újratöltésekor automatikusan navigáljuk a felhasználót az utoljára
          megtekintett lépésre.
          `,
          xp: 1
        },
        {
          text: `Amennyiben a felhasználó olyan indexű lépésre próbál navigálni, amely
          nem létezik (>5) akkor ugorjon fel egy üzenet, ami erről tájékoztatja a usert.
          Pl.: http://localhost:4200/task/6
          Használható például a snackbar az üzenet megjelenítésére:
          https://material.angular.io/components/snack-bar/overview
          `,
          xp: 1
        },
      ],
      title: `Service`
    },
  },
  {
    A: {
      imageUrl: 'assets/images/tasks/5/A/crossroads.png',
      story: '-> <-',
      subTasks: [
        {
          text: `Készíts egy service-t, amely paraméterként megadott számú
          random személy adatait generálja.
          Pl.: generator.service.ts
          Az elemek a következő mezőkkel rendelkezzenek:
          "name" (string), "age" (number), "description" (string)
          A generálás legyen randomizált és legalább az age mező nagyjából
          reális (de random) értékeket tartalmazzon.
          `,
          xp: 1
        },
        {
          text: `Az előző feladatban definiált service használatával generálj
          10 személyt és tárold el őket egy komponens-változóban inicializációkor.`,
          xp: 1
        },
        {
          text: `A felületen jelenjen meg két konténer.
          lapból a baloldali konténerben jelenjen meg 10 kártya a személyek nevével.
          A konténerek között húzogathatóak legyenek a személyek, tehát a baloldali
          konténerből lehessen áthúzni a személyt a jobboldaliba, valamint vissza.
          A kártyákat ne lehessen a konténereken kívül dobni.`,
          xp: 1
        },
        {
          text: `Amikor legalább 5 ember jobb oldalra lett húzva váltson a komponens
          háttere zöldre valamint jelenjen meg a következő szöveg:
          "Kiválasztásra került a minimálisan szükséges személy!".`,
          xp: 1
        },
      ],
      title: `Drag & Drop`
    },
    B: {
      imageUrl: 'assets/images/tasks/5/B/burger.PNG',
      story: '*scrolls for hours with great performance*',
      subTasks: [
        {
          text: `Készíts egy service-t, amely paraméterként megadott számú
          random személy adatait generálja.
          Pl.: generator.service.ts
          Az elemek a következő mezőkkel rendelkezzenek:
          "name" (string), "age" (number), "description" (string)
          A generálás legyen randomizált és legalább az age mező nagyjából
          reális (de random) értékeket tartalmazzon.
          `,
          xp: 1
        },
        {
          text: `Az előző feladatban definiált service használatával generálj
          10000 személyt és tárold el őket egy komponens-változóban inicializációkor.`,
          xp: 1
        },
        {
          text: `Készíts egy táblázatot két oszloppal (name, age), amelyben megjeleníted
          az adatokat virtual scrolling használatával.
          Ennek célja az, hogy a DOM-ban ne jelenjen meg 10000 sor, csak azok,
          amelyek éppen látszanak is (plusz egy kevés bufferként).
          Segítség: https://material.angular.io/cdk/scrolling/overview`,
          xp: 1
        },
        {
          text: `A táblázatnak legyen egy 3. oszlopa, egy gombbal, amelyre kattintva egy
          felugró üzenetben jelenjen meg az adott személy "description" mezője.
          Például használható a materialos snackbar:
          https://material.angular.io/components/snack-bar/overview`,
          xp: 1
        }
      ],
      title: `Virtual Scrolling`
    },
    preview: {
      imageUrl: 'assets/images/preview/5.jpg',
      text: 'Csak így tovább, már csak egy feladat van hátra...'
    }
  }
]
