import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Profertil';

  onClick() {
    console.log('23333');
    this.showPdf();
  }
  showPdf() {
    const linkSource =
      'data:application/octet-stream;base64,' +
       'Ingrese el codigo aqui';
    const downloadLink = document.createElement('a');
    const fileName = 'sample.docx';

    downloadLink.href = linkSource;
    downloadLink.download = fileName;
    downloadLink.click();
  }
}
