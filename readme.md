# Spelmotor

Jag ska försöka gå igenom samtliga steg i hur denna spelmotor byggs upp och fungerar. 

För att bygga den kommer vi att försöka jobba objektorienterat tillsammans med typescript. För att köra det kommer vi att använda oss av vite.

## Setup

Om du skapar ett nytt projekt så är det första du behöver göra att scaffolda igång det med vite. Det gör du genom att köra kommandot nedan i terminalen:

```bash
npm create vite@latest
```

Välj sedan ett namn för projektet följt av `vanilla` och `typescript`. Följ sedan instruktionerna i terminalen. När du är klar så har du en grundläggande setup för ett typescript-projekt med vite.

## Hur fungerar det?

När vite bygger projektet så kommer den att skapa en `dist`-mapp där den lägger alla filer som behövs för att köra spelet. Den kommer också att skapa en `index.html`-fil som är ingångspunkten för spelet. I denna fil kommer vi att länka in vår `main.ts`-fil som är vår huvudsakliga typescript-fil.

Du kan starta vite genom att köra kommandot nedan i terminalen:

```bash
npm run dev
```

Läs vidare i [Vad, setup och spelmotor](docs/1-setup-spelmotor.md).