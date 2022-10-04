import { Component, Input, OnDestroy } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subject } from 'rxjs';

@Component({
  template: '',
})
export abstract class FormControlBase implements OnDestroy {
  @Input() public control: FormControl = new FormControl(null);
  @Input() public label = '';
  @Input() public placeholder = '';
  @Input() public id = '';
  @Input() public disabled = false;

  protected readonly destroy$: Subject<void> = new Subject<void>();

  public ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
