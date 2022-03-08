import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailStarredComponent } from './email-starred.component';

describe('EmailStarredComponent', () => {
  let component: EmailStarredComponent;
  let fixture: ComponentFixture<EmailStarredComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmailStarredComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmailStarredComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
