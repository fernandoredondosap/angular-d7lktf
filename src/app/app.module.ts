import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { translations, translationChunksConfig } from '@spartacus/assets';
import {B2cStorefrontModule} from '@spartacus/storefront';
//import {CmsLibModule} from '@spartacus/storefront';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';





@NgModule({
  imports:      [ BrowserModule, FormsModule,
   B2cStorefrontModule.withConfig({
      backend: {
        occ: {
          baseUrl: 'https://storefront.c39j2-walkersde1-d4-public.model-t.cc.commerce.ondemand.com/',
          prefix: '/rest/v2/'
        }
      },
      context: {
        baseSite: ['electronics-spa']
      },
      i18n: {
        resources: translations,
        chunks: translationChunksConfig,
        fallbackLang: 'en'
      },
      features: {
        level: '1.4',
        anonymousConsents: true
      }
    }) ],
  declarations: [ AppComponent, HelloComponent ],

  bootstrap:    [ AppComponent ]
})
export class AppModule { }
