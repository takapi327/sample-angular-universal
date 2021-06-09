import { Component } from '@angular/core'

@Component({
  templateUrl:   './page-main.html',
  styleUrls:   [ './page-main.scss' ]
})
export class PageMainComponent {
  constructor() {}

  ngOnInit() {
    console.log(window.location.href)
  }
}
