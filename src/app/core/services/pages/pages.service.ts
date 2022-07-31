import { ComponentRef, Injectable } from '@angular/core';

@Injectable()
export class PagesService {
  private readonly _componentsRefsMap: Record<string, ComponentRef<any>> = {};

  public registerComponentRef(
    componentRef: ComponentRef<any>,
    url: string
  ): void {
    if (this._componentsRefsMap[url]) {
      return;
    }

    this._componentsRefsMap[url] = componentRef;
  }

  public hideAllPages(): void {
    const urls: Array<string> = Object.keys(this._componentsRefsMap);

    if (!urls.length) {
      return;
    }

    urls.forEach(
      (url: string) =>
        (this._componentsRefsMap[url].location.nativeElement.hidden = true)
    );
  }

  public showPage(url: string): void {
    const urls: Array<string> = Object.keys(this._componentsRefsMap);
    const activeUrl: string | undefined = urls.find(
      (url: string) =>
        !this._componentsRefsMap[url].location.nativeElement.hidden
    );

    if (activeUrl) {
      this._componentsRefsMap[activeUrl].location.nativeElement.hidden = true;
    }

    this._componentsRefsMap[url].location.nativeElement.hidden = false;
  }

  public removePage(url: string): number {
    const urls: Array<string> = Object.keys(this._componentsRefsMap);
    const componentRefIndex: number = urls.findIndex(
      (existingUrl) => existingUrl === url
    );

    if (componentRefIndex === -1) {
      return -1;
    }

    this._componentsRefsMap[url].destroy();
    delete this._componentsRefsMap[url];

    return componentRefIndex;
  }

  public getComponentRef(url: string): ComponentRef<any> | undefined {
    return this._componentsRefsMap[url];
  }
}
