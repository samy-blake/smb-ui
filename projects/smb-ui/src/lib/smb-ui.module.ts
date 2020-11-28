import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgxSmbUiContentComponent } from './ngx-smb-ui-content/ngx-smb-ui-content.component';
import { NgxSmbUiImageButtonComponent } from './ngx-smb-ui-image-button/ngx-smb-ui-image-button.component';
import { NgxSmbUiLinkComponent } from './ngx-smb-ui-link/ngx-smb-ui-link.component';



@NgModule({
  declarations: [NgxSmbUiContentComponent, NgxSmbUiImageButtonComponent, NgxSmbUiLinkComponent],
  imports: [
    CommonModule
  ],
  exports: [NgxSmbUiContentComponent, NgxSmbUiImageButtonComponent, NgxSmbUiLinkComponent]
})
export class SmbUiModule { }
