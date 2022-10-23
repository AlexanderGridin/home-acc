import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable, Subject } from 'rxjs';
import { pairwise, startWith, takeUntil } from 'rxjs/operators';

@Component({
  template: '',
})
export abstract class FormBase<FormType, ValueType>
  implements OnInit, OnDestroy
{
  public abstract readonly controlName: string;
  public abstract readonly form: FormGroup;

  protected readonly destroy$: Subject<void> = new Subject<void>();

  public ngOnInit(): void {
    this.initForm();
  }

  protected abstract initForm(): void;

  public getControl<ValueType>(name: keyof FormType): FormControl<ValueType> {
    return this.form.get(name as string) as FormControl<ValueType>;
  }

  public getFormValue(): Observable<Array<ValueType>> {
    return this.form.valueChanges.pipe(
      startWith(this.form.value),
      pairwise(),
      takeUntil(this.destroy$)
    );
  }

  public ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
