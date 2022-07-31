export class Tab {
  public id = -1;
  public label!: string;
  public icon!: string | null;
  public isActive: boolean;
  public url!: string;

  constructor({
    label,
    icon = '',
    url,
    isActive = false,
  }: {
    label: string;
    icon?: string;
    url: string;
    isActive?: boolean;
  }) {
    this.label = label;
    this.icon = icon ? icon : null;
    this.isActive = isActive;
    this.url = url;
  }
}
