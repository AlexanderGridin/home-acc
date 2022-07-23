export class Tab {
  public id = -1;
  public label!: string;
  public icon!: string | null;
  public isActive = false;

  constructor({ label, icon }: { label: string; icon?: string }) {
    this.label = label;
    this.icon = icon ? icon : null;
  }
}
