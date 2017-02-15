import { Component, Input } from '@angular/core';
import { FotoComponent } from '../foto/foto.component';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { FotoService } from '../foto/foto.service';


@Component({
  moduleId: module.id,
  selector: 'cadastro',
  templateUrl: './cadastro.component.html'
})

export class CadastroComponent {

    foto: FotoComponent = new FotoComponent();
    service: FotoService;
    meuForm: FormGroup;

    constructor(service: FotoService, fbuilder: FormBuilder){
      this.service = service;
      this.meuForm = fbuilder.group({
          titulo: ['', Validators.compose([Validators.required, Validators.minLength(4)])],
          url: ['', Validators.required],
          descricao: [''],
      });
    }

    cadastrar(event) {
        event.preventDefault();
        console.log(this.foto);


/*
        this.http.post('v1/fotos', JSON.stringify(this.foto), { headers: headers })
            .subscribe( () => {
                this.foto = new FotoComponent();
                console.log('Foto salva');
            }, erro => console.log(erro));*/
        this.service.cadastrar(this.foto)
            .subscribe(() => {
                this.foto = new FotoComponent();
                console.log('Foto salva');
            }, erro => {
                console.log(erro);
            });
    }

}
