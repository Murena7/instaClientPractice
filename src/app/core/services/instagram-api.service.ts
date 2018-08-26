import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { environment } from '../../../environments/environment';
import { UserMedia } from '../../shared/types/userMedia';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { OwnerData } from '../../shared/types/ownerData';

const USER_MEDIA_URL_PREFIX = 'users/self/media/recent/?access_token=';
const OWNER_DATA_URL_PREFIX = 'users/self/?access_token=';

@Injectable()
export class InstagramApiService {
  public userMedia: Array<UserMedia>;
  public ownerData: OwnerData;

  constructor(private http: Http) {
    this.getUserMedia();
    this.getOwnerData();
  }

  public getUserMedia() {
    this.requestUserMedia().subscribe(
      (response) => (this.userMedia = response),
    );
  }

  public getOwnerData() {
    this.requestOwnerData().subscribe(
      (response) => (this.ownerData = response),
    );
  }

  private requestUserMedia(): Observable<Array<UserMedia>> {
    const data = this.http
      .get(environment.instagramApiUrl + USER_MEDIA_URL_PREFIX + environment.instagramStaticAccessToken)
      .pipe(
        map(this.extractUserMedia)
      );
    return data;
  }

  private requestOwnerData(): Observable<OwnerData> {
    const ownerdata = this.http
      .get(environment.instagramApiUrl + OWNER_DATA_URL_PREFIX + environment.instagramStaticAccessToken)
      .pipe(
        map(this.extractOwnerData)
      );
    return ownerdata;
  }

  private extractOwnerData (response: Response): OwnerData {
    const res = response.json();
    const ArrayUserMedia: OwnerData = res.data;
    return ArrayUserMedia;
  }

  private extractUserMedia (response: Response): Array<UserMedia> {
    const res = response.json();
    const ArrayUserMedia: Array<UserMedia> = res.data;
    return ArrayUserMedia;
  }
}
