import { Component, OnInit } from '@angular/core';
import { InstagramApiService } from '../services/instagram-api.service';

@Component({
  selector: 'app-timelinefeed',
  templateUrl: './timelinefeed.component.html',
  styleUrls: ['./timelinefeed.component.scss']
})
export class TimelinefeedComponent implements OnInit {

  constructor(public instagramApiService: InstagramApiService) { }

  ngOnInit() {

  }

}
