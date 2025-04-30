
## Vad ska vi bygga?

Det första steget är att skapa `canvas`-elementet som vi kommer att rita på. Spelet kommer att vara ett 2D spel som vi ritar ut på canvas. Vi kommer att använda oss av `requestAnimationFrame` för att rita ut spelet. Detta är en funktion som gör att vi kan rita ut spelet i en loop. För att göra detta så kommer vi redigera och ta bort lite av startkoden från vite.

### CSS

I nuläget behöver du inte ändra något i `index.html`-filen.
Du kan låta `css`-filen vara som den är, men jag rensade lite och la till kod för att skala `canvas`-elementet. 

```css
/* src/style.css */
:root {
    font-family: sans-serif;
    line-height: 1.5;
    font-weight: 400;

    color-scheme: light dark;
    color: rgba(255, 255, 255, 0.87);
    background-color: #242424;
}

body {
    margin: 0;
    display: flex;
    place-items: center;
    min-width: 320px;
    min-height: 100vh;
}

canvas {
    display: block;
    margin: auto;
    max-width: 100%;
    border: 4px solid #646cff;
}
```

## Skapa canvas

När projektet startas upp så körs `main.ts`-filen. I denna fil kommer vi att skapa `canvas`-elementet och rita ut det på sidan. När vi skapat `canvas`-elementet så kommer vi att använda det för att initiera spelet och starta spelets loop.

```typescript
// src/main.ts
import './style.css'

const canvas = document.createElement('canvas')
document.body.appendChild(canvas)
```

Testkör nu och du bör sen se en tom canvas på sidan. Om du öppnar devtools så kan du se att det är en `canvas`-tagg som skapats.

## Game klassen

Spelet kommer att utgå från en klass som heter `Game`. I game kommer vi att starta igång spelets huvudloop och hantera logiken för att styra det.

### Variabler

I typescript så kan vi skapa klasser med hjälp av `class`-nyckelordet.
Det första som följer i klassen är sedan variablerna som vi kommer att använda i klassen, tillsammans med deras typ.

### Konstruktor

En konstruktor är en speciell metod som körs när klassen instansieras. I denna metod kommer vi att använda `canvas`-elementet som vi skapade tidigare för att sätta upp spelet. Vi kommer också att sätta upp `canvas`-elementet så att det har en bredd och höjd på 854x480 pixlar. Sist så skapar vi en `ctx`-variabel som är en referens till `canvas`-elementets `2d`-kontext. Denna kontext kommer vi att använda för att rita ut spelet på canvas.

```typescript
// src/Game.ts
export class Game {
    canvas: HTMLCanvasElement
    ctx: CanvasRenderingContext2D
    
    constructor(canvas: HTMLCanvasElement) {
        this.canvas = canvas
        this.canvas.width = 854
        this.canvas.height = 480
        this.ctx = canvas.getContext('2d') as CanvasRenderingContext2D
    }
}
```

## Initiera spelet

Nu när vi har skapat klassen så kan vi instansiera den i `main.ts`-filen. Vi kommer att skicka in `canvas`-elementet som vi skapade tidigare som argument till konstruktorn. Detta gör vi genom att skapa en ny instans av klassen och spara den i en variabel.

```typescript
// src/main.ts
import './style.css'
import { Game } from './Game'
const canvas = document.createElement('canvas')
document.body.appendChild(canvas)
const game = new Game(canvas)
```

## Spelloopen

De flesta spel, eller kanske alla har en loop som körs hela tiden. I spelloopen kommer vi att uppdatera spelet, rita ut det och generellt se till att det kör på.

För att köra spelloopen så kommer vi att använda `requestAnimationFrame`-metoden. Denna metod kommer att kalla på en funktion som vi skickar in som argument. Denna funktion kommer att köras varje gång webbläsaren är redo att rita ut en ny bild. 

### start

I `start`-metoden kommer vi att köra igång det som behövs för spelloopen. Vi håller även reda på tiden som har gått sedan förra gången vi körde loopen. Detta gör vi genom att spara tidstämpeln i en variabel som heter `lastTime`. Vi kommer också att rensa canvas varje gång vi kör loopen så att vi kan rita ut det nya spelet.

Här kan vi sedan kalla på metoderna som behövs för att uppdatera och rita ut spelet.

Slutligen kallar vi på `requestAnimationFrame`-metoden och skickar in `start`-metoden som argument. Detta gör att loopen kommer att köras hela tiden.

```typescript
// src/Game.ts
start(timeStamp: number = 0) {
    const deltaTime = timeStamp - (this.lastTime || 0)
    this.lastTime = timeStamp
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)

    requestAnimationFrame((timeStamp) => this.start(timeStamp))
}
```

Uppdatera `main.ts`-filen så att den ser ut som nedan. Vi kommer att kalla på `start`-metoden i `Game`-klassen.

```typescript
// src/main.ts
... // ... betyder är att här är samma kod som tidigare
game.start()
```

### update och draw

Nu när vi har en loop som körs hela tiden så kan vi börja bygga ut spelet. Vi kommer att skapa två metoder i `Game`-klassen som heter `update` och `draw`. Dessa metoder kommer att användas för att uppdatera och rita ut spelet.
`update`-metoden kommer att användas för att uppdatera spelet. Detta kan vara att flytta objekt, kolla kollisioner eller vad som helst som behöver göras för att uppdatera spelet. `draw`-metoden kommer att användas för att rita ut spelet på canvas. Detta kan vara att rita ut bakgrunden, objekt eller vad som helst som behöver ritas ut.

Skapa metoderna i `Game`-klassen så att de ser ut som nedan. Vi kommer att kalla på dessa metoder i `start`-metoden.

```typescript
// src/Game.ts
...
update(deltaTime: number) {
    // uppdatera spelet
}

draw() {
    // rita ut spelet
}

start(timeStamp: number = 0) {
    ...
    this.update(deltaTime)
    this.draw()
    ...
}
```

Du kan testa att köra spelet nu och du bör se en tom canvas som ritas ut. För att se att loopen fungerar så kan vi lägga till en `console.log` i `update`-metoden. Detta gör att vi kan se att loopen körs hela tiden.

```typescript
// src/Game.ts
...
update(deltaTime: number) {
    console.log('uppdatera spelet')
}
draw() {
    console.log('rita ut spelet')
}
```
Nu kan du se att `uppdatera spelet` och `rita ut spelet` skrivs ut i konsolen hela tiden. Detta betyder att loopen fungerar som den ska.

## Sammanfattning

Nu har vi skapat en grundläggande spelmotor som kan rita ut på canvas. Vi har också skapat en loop som körs hela tiden och uppdaterar och ritar ut spelet. Vi har också skapat en klass som heter `Game` som hanterar spelet.

Nu kan vi börja bygga!