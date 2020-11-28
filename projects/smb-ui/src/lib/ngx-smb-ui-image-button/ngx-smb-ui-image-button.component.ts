import { Component, EventEmitter, Input, OnInit, Output, SecurityContext } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'ngx-smb-ui-image-button',
  templateUrl: './ngx-smb-ui-image-button.component.html',
  styleUrls: ['./ngx-smb-ui-image-button.component.scss']
})
export class NgxSmbUiImageButtonComponent implements OnInit {

  public safeImage: any = '';
  @Input('image')
  set _image(value: string) {
    if(value) {
      this.safeImage = this.sanitizer.bypassSecurityTrustStyle(`url(${value})`);
    }
  }

  @Output() action: EventEmitter<any> = new EventEmitter();

  constructor(
    private sanitizer: DomSanitizer
  ) { }

  ngOnInit(): void {
  }

  public onButtonClick() {
    this.action.emit();
  }

}
