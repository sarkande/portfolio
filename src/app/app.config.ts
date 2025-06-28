import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import {
  provideHttpClient,
  withInterceptorsFromDi,
} from '@angular/common/http';

import { routes } from './app.routes';

import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { HttpClientModule, HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { provideAnimations } from '@angular/platform-browser/animations';
import { MarkdownModule, MarkedOptions } from 'ngx-markdown';
import { Renderer, Slugger } from 'marked';

import { JwtInterceptor } from './services/jwt.interceptor';

export function markedOptionsFactory(): MarkedOptions {
  const renderer = new Renderer();
  renderer.heading = (text: string, level: number, raw: string, slugger: Slugger): string => {
    const slug = slugger.slug(text);
    return `<h${level} id="${slug}">${text}</h${level}>`;
  };
  return { renderer } as MarkedOptions;
}

export function createTranslateLoader(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http, 'assets/i18n/', '.json');
}

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(withInterceptorsFromDi()),
    provideAnimations(),
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtInterceptor,
      multi: true,
    },
    importProvidersFrom(
      MarkdownModule.forRoot({
        markedOptions: {
          provide: MarkedOptions,
          useFactory: markedOptionsFactory,
        },
      }),
      HttpClientModule,
      TranslateModule.forRoot({
        defaultLanguage: 'fr',
        loader: {
          provide: TranslateLoader,
          useFactory: createTranslateLoader,
          deps: [HttpClient],
        },
      })
    ),
  ],
};
