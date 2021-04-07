import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecommendedItemComponent } from './recommended-item.component';

describe('RecommendedItemComponent', () => {
  let component: RecommendedItemComponent;
  let fixture: ComponentFixture<RecommendedItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecommendedItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecommendedItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
