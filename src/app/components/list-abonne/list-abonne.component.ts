import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Abonne } from 'src/app/models/abonne';
import { AbonneService } from 'src/app/services/abonne.service';


@Component({
  selector: 'app-list-abonne',
  templateUrl: './list-abonne.component.html',
  styleUrls: ['./list-abonne.component.scss']
})
export class ListAbonneComponent {
  abonnes: Abonne[];
  constructor(private router: Router,
    private abonneService: AbonneService){}

  goToabonneDetails(abonne: Abonne){
    this.router.navigate([`/abonne/${abonne.id}`])
  }

  goToabonneList(){
    this.router.navigate([`/list_abonne`])
  }
  // To access the data coming from the server.
  ngOnInit(): void {
    this.abonneService.getAbonnes()
    .subscribe(data => {console.log('Getted');console.table(data);this.abonnes = data});
  }
  deleteabonne(abonne: Abonne) {
    this.abonneService.deleteAbonne(+abonne.id)
        .subscribe(() => this.goToabonneList());
    
  }
}
