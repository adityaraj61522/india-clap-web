import { Component, OnInit, Renderer2, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-user-account',
  templateUrl: './user-account.component.html',
  styleUrls: ['./user-account.component.css']
})
export class UserAccountComponent implements OnInit {

  @ViewChild('message', { static: false }) messageRef: ElementRef;
  constructor(
    private renderer: Renderer2
  ) { }

  ngOnInit() {
  }

  showArchiveJobAlert() {
    this.renderer.setStyle(this.messageRef.nativeElement, 'display', 'block');
  }

}
