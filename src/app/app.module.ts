import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { translations, translationChunksConfig } from '@spartacus/assets';
import {B2cStorefrontModule} from '@spartacus/storefront';
//import {CmsLibModule} from '@spartacus/storefront';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';


B2cStorefrontModule.withConfig({backend: {
      occ: {
        baseUrl: 'https://storefront.c39j2-walkersde1-d4-public.model-t.cc.commerce.ondemand.com/',
        prefix: '/rest/v2/',
        legacy: false
      }
    },
    authentication: {
      client_id: 'mobile_android',
      client_secret: 'secret'
    },
    context: {
      baseSite: ['electronics']
    },
    i18n: {
        resources: translations,
        chunks: translationChunksConfig,
        fallbackLang: 'en'
      },
      features: {
        level: '1.3'
      }
    });


@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
