import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from 'src/app/servizi/http.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

visualizza: string = 'nome';
datiPortfolio$: Observable<any>;

  constructor(private servizioHttp:HttpService) { }

  ngOnInit() {

    this.datiPortfolio$ = this.servizioHttp.ottieniDatiPortfolio();
    this.datiPortfolio$.subscribe((x)=>{ console.log(x)});
  }

}
