import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Abonne } from 'src/app/models/abonne';
import { AbonneService } from 'src/app/services/abonne.service';
declare var window:any;
@Component({
  selector: 'app-abonne-details',
  templateUrl: './abonne-details.component.html',
  styleUrls: ['./abonne-details.component.scss']
})
export class AbonneDetailsComponent {
  abonneList: Abonne[];
  AbonneData:any;
  formModal:any;
  formValue:FormGroup;
  number:number;
  showUpdate:boolean;
  abonneModel: Abonne = new Abonne()
  constructor(private route: ActivatedRoute,private formbuilder: FormBuilder,
    private router: Router,
    private abonneService: AbonneService) { }

  ngOnInit() {
    this.number=-1;
    this.formModal = new window.bootstrap.Modal(
      document.getElementById('exampleModal')
    );
    this.formValue = this.formbuilder.group({
      nom : [''],
      prenom : [''],
      age : [''],
      sexe : [''],
      rue : [''],
      profession : [''],
      idmotivation : [''],
      codePostal : [''],
      ville : [''],
      paye : [''],
      telephone : [''],
      email : [''],
    })
  }

  // Manage route to return in page "abonneList"
  goToabonneList() {
    this.router.navigate(['/list_abonne']);
  }

  goToEditabonne(abonne: Abonne) {
    const abonneId: string | null = this.route.snapshot.paramMap.get('id');
    this.router.navigate([`abonne/${abonneId}`])
  }
  
  // affectation des donnees pour modification
  modifierAbonne(abonne:Abonne){
    this.showUpdate= true;
    this.abonneModel.id =abonne.id;
    this.number=+abonne.id;
    this.formValue.controls['nom'].setValue(abonne.nom);
    this.formValue.controls['prenom'].setValue(abonne.prenom);
    this.formValue.controls['age'].setValue(abonne.age);
    this.formValue.controls['rue'].setValue(abonne.rue);
    this.formValue.controls['sexe'].setValue(abonne.sexe);
    this.formValue.controls['profession'].setValue(abonne.profession);
    this.formValue.controls['idmotivation'].setValue(abonne.idmotivation);
    this.formValue.controls['codePostal'].setValue(abonne.codePostal);
    this.formValue.controls['ville'].setValue(abonne.ville);
    this.formValue.controls['paye'].setValue(abonne.pays);
    this.formValue.controls['email'].setValue(abonne.email);
    this.formValue.controls['telephone'].setValue(abonne.telephone);
  }


  // mise ajour

  updateAbonne(){
    this.abonneModel.nom = this.formValue.value.nom;
    this.abonneModel.prenom = this.formValue.value.prenom;
    this.abonneModel.age = this.formValue.value.age;
    this.abonneModel.rue = this.formValue.value.rue;
    this.abonneModel.sexe = this.formValue.value.sexe;
    this.abonneModel.profession = this.formValue.value.profession;
    this.abonneModel.idmotivation = this.formValue.value.id_motivation;
    this.abonneModel.codePostal = this.formValue.value.code_postal;
    this.abonneModel.ville = this.formValue.value.ville;
    this.abonneModel.pays = this.formValue.value.paye;
    this.abonneModel.telephone = this.formValue.value.telephone;
    this.abonneModel.email = this.formValue.value.email;
    this.abonneService.updateAbonne(this.number,this.abonneModel)
    .subscribe(res=>{
      alert('mise ajour effectue avec sucess');
      this.formValue.reset();
      let ref = document.getElementById("cancel");
      ref?.click();
    })
  }
}
