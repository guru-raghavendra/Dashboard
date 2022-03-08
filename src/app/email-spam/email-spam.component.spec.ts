import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailSpamComponent } from './email-spam.component';

describe('EmailSpamComponent', () => {
  let component: EmailSpamComponent;
  let fixture: ComponentFixture<EmailSpamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmailSpamComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmailSpamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
