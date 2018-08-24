import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { environment } from '../../../environments/environment';
import { UserMedia } from '../../shared/types/userMedia';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

const USER_MEDIA_URL_PREFIX = 'users/self/media/recent/?access_token=';

@Injectable()
export class InstagramApiService {
  public ArrayUserMedia: Array<UserMedia>;

  constructor(private http: Http) {
    this.getUserMedia();
  }

  public getUserMedia() {
    this.requestUserMedia().subscribe(
      (response) => (this.ArrayUserMedia = response),
    );
  }

  private requestUserMedia(): Observable<Array<UserMedia>> {
    const ArrayUserMedia = this.http
      .get(environment.instagramApiUrl + USER_MEDIA_URL_PREFIX + environment.instagramStaticAccessToken)
      .pipe(
        map(this.extractUserMedia)
      );
    return ArrayUserMedia;
  }

  private extractUserMedia (response: Response): Array<UserMedia> {
    const res = response.json();
    const ArrayUserMedia: Array<UserMedia> = res.data;
    return ArrayUserMedia;
  }
}
