export const tasks = [
  {
    A: {
      imageUrl: 'assets/images/tasks/1/A/loading.png',
      story: ``,
      subTasks: [
        {
          text: `Készíts egy új komponenst, amely inputként egy kép elérhetőségét
          (realtív URL-jét) várja.

A felhaznált képeket helyezd be a projekt többi assetje közé.

A Task1AComponent-be vegyél fel három darabot a komponensből, mindegyik más képpel
legyen felparaméterezve.
          `,
          xp: 1
        },
        {
          text: `Az előző feladatban felvett komponensekben található képek legyenek kattinhatóak.
          A Task1AComponent számolja hány kattintás történt a képeken.
          Tehát nem számít melyik kép lett kattintva, egy közös számláló értéke növekedjen.`,
          xp: 1
        },
        {
          text: `A kattintások számát és, hogy még hány kattintás van hátra 5-ből egy Angular Materialos
          progress baron jelezd:
          https://material.angular.io/components/progress-bar/overview`,
          xp: 1
        },
        {
          text: 'Az 5. kattintás elérésével a komponens háttere változzon zöldre.',
          xp: 1
        }
      ],
      title: `
        Komponens
      `
    },
    B: {
      imageUrl: 'assets/images/tasks/1/B/object.jpg',
      story: '',
      subTasks: [
        {
          text: `Készíts egy tömböt legalább 3 elemmel, amiben tárgyak adatait tárolod.
           Az elemek adatai randomizált adatot minden tárgyról:
           kép (random választott, helyezz a projekt asset-jei közé képeket),
           név és érték (random egész szám).`,
          xp: 1
        },
        {
          text: `Egy template segítségével definiáld, hogy az egyes tárgyakohz tartozó HTML
          elemek hogy nézzenenk ki.
          A template-ben csak a kép illetve a név szerepeljen.
          Jelenítsd is meg az előző feladatban létrehozott tárgyakat a template segítségével.
          `,
          xp: 1
        },
        {
          text: `Egy tárgy felé mozgatva az egeret jelenjen meg egy tooltip,
          ami kiírja az tárgy értékét.

Segítség: https://material.angular.io/components/tooltip/overview`,
          xp: 1
        },
        {
          text: `Tárgyak legyenek kiválaszthatóak kattintással.
          A kiválasztott elem vastag borderrel legyen kiemelve.
          Egyszerre mindig csak 1 tárgy lehessen kiválasztott.`,
          xp: 1
        }
      ],
      title: `Template`
    },
  },
  {
    A: {
      imageUrl: 'assets/images/tasks/2/A/foxy.png',
      story: '',
      subTasks: [
        {
          text: `Készíts egy 10x10-es táblázatot.
          Kigenerálásához használj for ciklust (*ngFor).
          Nem muszáj az Angular Material-os táblázatot használni, lehet sima \`<table>\` elem is.`,
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
          az oldalon található össze táblázat (\`<table>\`) cellája (\`<td>\`) legyen egységes méretű
          (például 50px x 50px).`,
          xp: 1
        },
      ],
      title: `Styling`
    },
    B: {
      imageUrl: 'assets/images/tasks/2/B/2B.jpg',
      story: '',
      subTasks: [
        {
          text: `Készíts egy reaktív űrlapot.
          Az űrlap tartalmazzon 3 mezőt:
          szoftver neve (sztring), aktivációs kulcs (sztring), érvényesség (date).
          Az űrlaphoz hozz létre egy FormGroup-ot is TypeScriptben, amit köss
          is össze ( [formGroup]="" ) a .html fájlban létrehozott űrlappal.
          Segítség: https://angular.io/guide/reactive-forms`,
          xp: 1
        },
        {
          text: `Adj két validációt az előző részben létrehozott űrlaphoz:

- A szoftver neve legyen kötelező mező.
- Az aktivációs kulcsot a következő formátumban kelljen megadni:
XXXX-XXXX-XXXX, ahol az X lehet szám vagy nagybetű.

 A fenti validációkhoz használd az Angular alapvalidátorait, nem szükséges
sajátot létrehozni.`,
          xp: 1
        },
        {
          text: `Az "érvényesség" mezőre készíts egy saját validátort.
          Csak a mai napnál későbbi dátumot fogadjon el az űrlap.`,
          xp: 1
        },
        {
          text: `Az űrlapon szerepeljen egy submit gomb is.
          Ez a gomb legyen inaktív (disabled), amikor az űrlap nem valid.
          Valid form esetén gombnyomásra egy felugró alert-be írasd ki az űrlapon
          szereplő adatokat.
          Például:

          Név: Windows 11

          Kulcs: 1234-ABCD-AB12

          Érvényesség: 2023. 12. 31.`,
          xp: 1
        },
      ],
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
          A további részfeladatok alapján hozz helyes döntést abban,
          hogy pure vagy impure pipe-ot kell-e itt használni.`,
          xp: 1
        },
        {
          text: `A pipe fordítsa meg a paraméterként fogadott sztringet,
          mintha azt visszafelé olvasnánk.
          A komponenshez tartozó HTML-ben szűrj be egy példát a pipe működésére.`,
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
          a pipe használatával!`,
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
          text: `A nyelvi fájlokban definiálj egy új kulcsot:
          "CURRENT_LANGUAGE".
          A nyelvválasztó felett jelenjen meg ehhez a kulcshoz tartozó fordítást,
          magyar nyelv esetén:
          "Jelenleg magyar nyelven jelenik meg az oldal."
          A "magyar" szó interpolált legyen, tehát változóként helyettesítsd be a
          2. részfeladatban már definiált nyelvi fordításokat.

Segítség: https://www.vitamindev.com/angular/how-to-use-parameters-in-ngx-translate/`,
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
          text: `Készíts egy bankszámlaszámot validáló direktívát, amely csak \`<input>\`
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
          text: `Amennyiben "12345678 12345678" vagy
          "12345678 12345678 12345678" formátumú bankszámlaszámot ír be a felhasználó,
          akkor a direktíva automatikusan alakítsa "12345678-12345678" vagy
          "12345678-12345678-12345678" formátumra az input értékét.
          Tehát a space karaktereket cserélje "-" karakterre ebben a két esetben.
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
          text: `Készíts egy szolgáltatást (service), amely menti és tárolja, hogy a
          felhasználó mely lépést (1, 2, 3, 4 vagy 5) nézte utoljára.
          Ehhez szükség lesz már meglevő komponensek kiegészítésére!
          `,
          xp: 1
        },
        {
          text: `Amennyiben már készült mentés az előző lépésben, akkor az oldal
          újratöltésekor automatikusan navigáljuk a felhasználót az utoljára
          megtekintett lépésre.
          Tehát például, ha a "/task/4" URL-t próbáljuk megnyitni, de azt tároltuk
          el, hogy utoljára a 2. lépés nézte, akkor navigáljuk át a 2. lépésre!
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
- "name" (string)
- "age" (number)
- "description" (string)

A generálás legyen randomizált és legalább az age mező nagyjából
reális (de random) értékeket tartalmazzon.`,
          xp: 1
        },
        {
          text: `Az előző feladatban definiált service használatával generálj
          10 személyt és tárold el őket egy komponens-változóban inicializációkor.`,
          xp: 1
        },
        {
          text: `A felületen jelenjen meg két konténer.
          Alapból a baloldali konténerben szerepeljen 10 kártya a személyek nevével.
          A konténerek között húzogathatóak legyenek a személyek, tehát a baloldali
          konténerből lehessen áthúzni a személyt a jobboldaliba, valamint vissza.
          A kártyákat ne lehessen a konténereken kívül dobni.

Segítség: https://material.angular.io/cdk/drag-drop/overview`,
          xp: 1
        },
        {
          text: `Amikor már legalább 5 ember átkerült jobb oldalra, akkor a
          komponens háttere váltson zöldre valamint jelenjen meg a következő szöveg:
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
          amelyek éppen látszanak is (plusz pár sor bufferként).

Segítség: https://material.angular.io/cdk/scrolling/overview`,
          xp: 1
        },
        {
          text: `A táblázatnak legyen egy 3. oszlopa, egy gombbal, amelyre kattintva
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
