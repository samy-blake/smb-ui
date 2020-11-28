import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxSmbUiLinkComponent } from './ngx-smb-ui-link.component';

describe('NgxSmbUiLinkComponent', () => {
  let component: NgxSmbUiLinkComponent;
  let fixture: ComponentFixture<NgxSmbUiLinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxSmbUiLinkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxSmbUiLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
