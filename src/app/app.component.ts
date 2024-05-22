import { Component, Inject, OnInit } from '@angular/core';
import { MetadataService } from './services/metadata.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  name = 'Angular';
  metadata$: any;
  //this.service.getMetadata();
  //
  constructor(@Inject(MetadataService) service: MetadataService) {
    console.log('service ', service);
    this.metadata$ = service.getMetadata();
  } //private service: MetadataService
  ngOnInit() {
    //  this.metadata$ = this.service.getMetadata();
    // console.log('test data ',this.metadata$);
  }
}
