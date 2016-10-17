import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './stockquote.module';

const platform = platformBrowserDynamic();
platform.bootstrapModule(AppModule);