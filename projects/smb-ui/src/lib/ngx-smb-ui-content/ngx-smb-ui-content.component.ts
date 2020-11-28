import { ChangeDetectorRef, Component, ElementRef, Host, HostBinding, Input, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { Observable, Subject, Subscription } from 'rxjs';

@Component({
  selector: 'ngx-smb-ui-content',
  templateUrl: './ngx-smb-ui-content.component.html',
  styleUrls: ['./ngx-smb-ui-content.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class NgxSmbUiContentComponent implements OnInit {

  private request: Subscription = null
  @Input('request')
  set _request(value: Observable<any>) {
    if(value) {
      if(this.request) {
        this._resetContentLoaded();
      }
      this._setContentLoaded(value);
    }
  }

  @HostBinding('class.load-finish') loadFinish: boolean = false;

  constructor(
  ) { }

  ngOnInit(): void {
  }

  private _onContentLoaded() {
    this.loadFinish = true;
  }

  private _setContentLoaded(value: Observable<any>) {
    this.request = value.subscribe(() => this._onContentLoaded());
  }

  private _resetContentLoaded() {
    if(this.request?.unsubscribe)
      this.request.unsubscribe();
  
    this.loadFinish = false;
  }

}
