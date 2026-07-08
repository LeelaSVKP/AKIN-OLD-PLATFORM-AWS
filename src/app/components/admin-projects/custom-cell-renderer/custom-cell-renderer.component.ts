import { Component } from '@angular/core';
import { SharedService } from '../../../services/sharedService/shared.service';

@Component({
  selector: 'app-custom-cell-renderer',
  templateUrl: './custom-cell-renderer.component.html',
  styleUrl: './custom-cell-renderer.component.scss'
})
export class CustomCellRendererComponent {
  item: any;

  constructor(
    private sharedService: SharedService
  ) {
    console.log(this.item);
  }

  onAnalyticsButtonClick() {
    this.sharedService.changeHomeMenuSubject.next('analytics');
  }

}
