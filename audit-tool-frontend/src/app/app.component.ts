import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faBars } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  opened = true;
  faBars = faBars;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  goToOther() {
    this.router.navigate(['/other']);
  }

  goToMain() {
    this.router.navigate(['/main']);
  }

  goToUpload() {
    this.router.navigate(['/upload']);
  }

  goToSingleUpload() {
    this.router.navigate(['/single-upload']);
  }

  goToMultiUpload() {
    this.router.navigate(['/multi-upload']);
  }

  goToDownload() {
    this.router.navigate(['/download']);
  }
}
