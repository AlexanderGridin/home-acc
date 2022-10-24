import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddProductCollapsibleCardComponent } from './add-product-collapsible-card.component';

describe('AddProductCollapsibleCardComponent', () => {
  let component: AddProductCollapsibleCardComponent;
  let fixture: ComponentFixture<AddProductCollapsibleCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddProductCollapsibleCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddProductCollapsibleCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
