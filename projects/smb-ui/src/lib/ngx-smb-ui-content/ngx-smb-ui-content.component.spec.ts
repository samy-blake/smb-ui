import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxSmbUiContentComponent } from './ngx-smb-ui-content.component';

describe('NgxSmbUiContentComponent', () => {
  let component: NgxSmbUiContentComponent;
  let fixture: ComponentFixture<NgxSmbUiContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxSmbUiContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxSmbUiContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
