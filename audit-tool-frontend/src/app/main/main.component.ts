import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  fileContent: string | ArrayBuffer;

  @ViewChild('inputFile')
  mainInputFile: ElementRef;

  constructor() { }

  ngOnInit(): void { }

  public onChange(fileList: FileList): void {
    const file = fileList[0];
    const fileReader: FileReader = new FileReader();
    const self = this;
    // tslint:disable-next-line: only-arrow-functions
    fileReader.onloadend = function(x) {
      self.fileContent = fileReader.result;
    };
    if (fileReader != null) {
      fileReader.readAsText(file);
      console.log('File send');
    }
  }

  resetInputFile() {
    this.mainInputFile.nativeElement.value = '';
    this.fileContent = null;
    console.log('Input cleared');
  }
}
