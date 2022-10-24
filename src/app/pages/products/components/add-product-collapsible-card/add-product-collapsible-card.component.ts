import { Component, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { CollapsibleCardComponent } from '@components-lib/collapsible-card/collapsible-card.component';

@Component({
  selector: 'hac-add-product-collapsible-card',
  templateUrl: './add-product-collapsible-card.component.html',
  styleUrls: ['./add-product-collapsible-card.component.scss'],
})
export class AddProductCollapsibleCardComponent {
  public readonly form = new FormGroup({});

  @ViewChild(CollapsibleCardComponent)
  private collapsibleCard!: CollapsibleCardComponent;

  public handleSaveClick(): void {
    this.form.markAllAsTouched();

    if (this.form.valid) {
      console.log(this.form.value);
      this.form.reset();
      this.collapsibleCard.close();
    }
  }

  public handleSaveAndNewClick(): void {}

  public handleCancelClick(): void {
    this.form.reset();
  }
}
