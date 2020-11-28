import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxSmbUiImageButtonComponent } from './ngx-smb-ui-image-button.component';

describe('NgxSmbUiImageButtonComponent', () => {
  let component: NgxSmbUiImageButtonComponent;
  let fixture: ComponentFixture<NgxSmbUiImageButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxSmbUiImageButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxSmbUiImageButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
