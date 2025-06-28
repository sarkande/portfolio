import { ApplicationConfig, importProvidersFrom, SecurityContext } from '@angular/core';
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

import { MarkdownModule, MarkedOptions, MARKED_OPTIONS, MarkedRenderer } from 'ngx-markdown';
import { Parser } from 'marked';


import { JwtInterceptor } from './services/jwt.interceptor';

export function markedOptionsFactory(): MarkedOptions {
  const renderer = new MarkedRenderer();
  const slugCounts: Record<string, number> = {};
  const slugify = (text: string): string => {
    let slug = text.toLowerCase().trim().replace(/[^\w]+/g, '-');
    if (slugCounts[slug] !== undefined) {
      const count = ++slugCounts[slug];
      slug = `${slug}-${count}`;
    } else {
      slugCounts[slug] = 0;
    }
    return slug;
  };
  renderer.heading = ({ tokens, depth }) => {
    const text = Parser.parseInline(tokens);
    const slug = slugify(text);
    return (
      `<h${depth} id="${slug}" name="${slug}"  id="${slug}" class="anchor" href="#${slug}">` +
      `<a name="${slug}"  id="${slug}" class="anchor" href="#${slug}">` +
      '<span class="header-link"></span>' +
      `</a>${text}</h${depth}>`
    );

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
        sanitize: SecurityContext.NONE,
        markedOptions: {
          provide: MARKED_OPTIONS,
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
