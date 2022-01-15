import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DatiPortfolio } from 'src/app/entita/dati-portfolio';
import { HttpService } from 'src/app/servizi/http.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

visualizza: string = 'nome';
datiPortfolio: DatiPortfolio;

  constructor(private servizioHttp:HttpService) { 
    
  }

  ngOnInit() {

    this.servizioHttp.ottieniDatiPortfolio().subscribe(x=>{
      this.datiPortfolio = new DatiPortfolio();
      this.datiPortfolio.url_immagine = x.picture.large;
      this.datiPortfolio.nome = x.name.first;
      this.datiPortfolio.cognome = x.name.last;
      this.datiPortfolio.email = x.email;
      this.datiPortfolio.data_di_nascita = new Date(x.dob.date);
      this.datiPortfolio.strada = x.location.street.name;
      this.datiPortfolio.numero = x.location.street.number;
      this.datiPortfolio.telefono = x.phone;
      this.datiPortfolio.password = x.login.password;

    });


  }

}
