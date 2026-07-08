import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-upload-progress-bar',
  templateUrl: './upload-progress-bar.component.html',
  styleUrls: ['./upload-progress-bar.component.scss']
})
export class UploadProgressBarComponent implements OnInit {
  @Input() progress = 0;

  constructor() { }

  ngOnInit(): void { }

}
