import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  logo = "AniSite"
  firstlink = "Movies"
  seclink ="Ghibli Studio"
 thirdlink ="Wit Studio"
 fourthlink = "Animes"
}