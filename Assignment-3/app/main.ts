import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { UserDetailModule } from './userdetail.module';
const platform = platformBrowserDynamic();
platform.bootstrapModule(UserDetailModule);