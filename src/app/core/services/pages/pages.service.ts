import { ComponentRef, Injectable } from '@angular/core';

@Injectable()
export class PagesService {
  private readonly componentsRefsMap: Record<string, ComponentRef<any>> = {};

  public componentsRefs = {
    add: (componentRef: ComponentRef<any>, url: string): void => {
      if (this.componentsRefsMap[url]) {
        return;
      }

      this.componentsRefsMap[url] = componentRef;
    },

    get: (url: string): ComponentRef<any> | undefined => {
      return this.componentsRefsMap[url];
    },
  };

  public pages = {
    hideAll: (): void => {
      const urls: Array<string> = Object.keys(this.componentsRefsMap);

      if (!urls.length) {
        return;
      }

      urls.forEach(
        (url: string) =>
          (this.componentsRefsMap[url].location.nativeElement.hidden = true)
      );
    },

    show: (url: string): void => {
      const urls: Array<string> = Object.keys(this.componentsRefsMap);
      const activeUrl: string | undefined = urls.find(
        (url: string) =>
          !this.componentsRefsMap[url].location.nativeElement.hidden
      );

      if (activeUrl) {
        this.componentsRefsMap[activeUrl].location.nativeElement.hidden = true;
      }

      this.componentsRefsMap[url].location.nativeElement.hidden = false;
    },

    remove: (url: string): number => {
      const urls: Array<string> = Object.keys(this.componentsRefsMap);
      const componentRefIndex: number = urls.findIndex(
        (existingUrl) => existingUrl === url
      );

      if (componentRefIndex === -1) {
        return -1;
      }

      this.componentsRefsMap[url].destroy();
      delete this.componentsRefsMap[url];

      return componentRefIndex;
    },
  };
}
