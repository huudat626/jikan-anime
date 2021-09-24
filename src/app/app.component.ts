import { Component } from '@angular/core';
import { SearchService } from './search.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public listAnime: any[] = [];

  constructor( private searchService: SearchService, private router: Router ) { /*empty*/ }
  public search(term: string): void {
   // this.router.navigate(['search', term]);
setTimeout(()=>{
  this.searchService.getAnime(term).subscribe((data: any) => {
    console.log("Data ", data);
    this.listAnime = data.results;

  });
},1500)

}
}
