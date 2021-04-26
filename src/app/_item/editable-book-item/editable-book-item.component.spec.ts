import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditableBookItemComponent } from './editable-book-item.component';

describe('EditableBookItemComponent', () => {
  let component: EditableBookItemComponent;
  let fixture: ComponentFixture<EditableBookItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditableBookItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditableBookItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
