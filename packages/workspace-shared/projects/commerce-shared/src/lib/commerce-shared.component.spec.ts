import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommerceSharedComponent } from './commerce-shared.component';

describe('CommerceSharedComponent', () => {
  let component: CommerceSharedComponent;
  let fixture: ComponentFixture<CommerceSharedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommerceSharedComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommerceSharedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
