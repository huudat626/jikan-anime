import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { Card } from './card';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  baseUrl = 'https://api.jikan.moe/v3';
  employ!: Card[];

  constructor(private http: HttpClient) { }

  getAnime(term: string): Observable<Card[]> {
    return this.http.get(`${this.baseUrl}/search/anime?q=${ term }`).pipe(
      map((res: any) => {
        if (!res) {
          throw new Error('Value expected!');
        } else {
          return res;
        }
      }),
      catchError((err) => {
        throw new Error(err.message);
      }));
  }



  // public getAnime(term: string): Observable<Card[]>{
  //   const searchUrl: string = `https://api.jokan.moe/v3/search/anime?q=${ term }`;

  //   this.http.get(searchUrl).pipe(
  //     map((res: any) => {
  //       if (!res) {
  //         throw new Error('Value expected!');
  //       } else {
  //        // console.log('res:', res);
  //         return res;
  //       }
  //     }),
  //     catchError((err) => {
  //       throw new Error(err.message);
  //     }));
  // }

}
