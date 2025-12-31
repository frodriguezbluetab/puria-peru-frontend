import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';

async function main() {
  await bootstrapApplication(App, appConfig)
    .catch((err) => console.error(err));
}

main().catch((err) => console.error(err));