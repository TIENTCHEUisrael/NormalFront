import { Component,Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Abonne } from 'src/app/models/abonne';
import { AbonneService } from 'src/app/services/abonne.service';

@Component({
  selector: 'app-create-abonne',
  templateUrl: './create-abonne.component.html',
  styleUrls: ['./create-abonne.component.scss']
})
export class CreateAbonneComponent {
  @Input() abonne: Abonne;
  types: string[];
  isAddForm: boolean;
  constructor(private abonneService: AbonneService,
    private router: Router,private route: ActivatedRoute) { }

  ngOnInit()  {
    this.isAddForm = this.router.url.includes('add');
  }

  onSubmit(){
    
    if(this.isAddForm){
      this.abonneService.createAbonne(this.abonne)
      .subscribe((abonne: Abonne) => this.router.navigate(['/abonne', abonne.id]))
    }
    else{
      const abonneId: string|null = this.route.snapshot.paramMap.get('id');
      if(abonneId != null){
        this.abonneService.updateAbonne(+abonneId,this.abonne,)
        .subscribe(() => this.router.navigate([`/abonne/${abonneId}`]));
      }
      
    }
    
  }
  createAbonne(): void {
    this.abonneService.createAbonne(this.abonne)
      .subscribe(
        () => {
          // Opérations supplémentaires après la création de l'abonné
          console.log('Abonné créé avec succès');
          this.resetForm();
        },
        (error) => {
          console.error('Erreur lors de la création de l\'abonné', error);
        }
      );
  }

  resetForm(): void {
    this.abonne = {
      nom: '',
      prenom: '',
      age: 0,
      email: '',
      telephone: '',
      sexe: '',
      codePostal: '',
      ville: '',
      pays: '',
      rue: '',
      profession: '',
      id: '',
      idmotivation: 2,
    };
  }
}
