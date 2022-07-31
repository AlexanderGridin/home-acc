import { ComponentRef, Injectable } from '@angular/core';

@Injectable()
export class PagesService {
  private readonly componentsRefsMap: Record<string, ComponentRef<any>> = {};

  public registerComponentRef(
    componentRef: ComponentRef<any>,
    url: string
  ): void {
    if (this.componentsRefsMap[url]) {
      return;
    }

    this.componentsRefsMap[url] = componentRef;
  }

  public hideAllPages(): void {
    const urls: Array<string> = Object.keys(this.componentsRefsMap);

    if (!urls.length) {
      return;
    }

    urls.forEach(
      (url: string) =>
        (this.componentsRefsMap[url].location.nativeElement.hidden = true)
    );
  }

  public showPage(url: string): void {
    const urls: Array<string> = Object.keys(this.componentsRefsMap);
    const activeUrl: string | undefined = urls.find(
      (url: string) =>
        !this.componentsRefsMap[url].location.nativeElement.hidden
    );

    if (activeUrl) {
      this.componentsRefsMap[activeUrl].location.nativeElement.hidden = true;
    }

    this.componentsRefsMap[url].location.nativeElement.hidden = false;
  }

  public removePage(url: string): number {
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
  }

  public getComponentRef(url: string): ComponentRef<any> | undefined {
    return this.componentsRefsMap[url];
  }
}
