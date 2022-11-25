import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Persona } from 'src/app/modules/models/persona';
import { PersonaService } from 'src/app/modules/services/persona.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-createpersona',
  templateUrl: './createpersona.component.html',
  styleUrls: ['./createpersona.component.css']
})
export class CreatepersonaComponent implements OnInit {
  persona : Persona = new Persona();

  constructor(private personaService : PersonaService , private route:Router, 
    private activadedRoute: ActivatedRoute) { }

ngOnInit(): void {
    this.activadedRoute.params
    .subscribe(params =>{
      let id: number = params['id'];
      if(id){
        this.personaService.buscarArticulo(id)
        .subscribe(Response=> this.persona = Response);
      }
    })
  }

  crearPersona(){
    this.personaService.crearArticulo(this.persona)
    .subscribe(Response=>{this.route.navigate(['/articulos'])
    console.log(this.personaService);
    Swal.fire('Persona guardada', 
      `guardado con éxito`,
    'question'
    )
  }
 )
}

  actualizarPersona(){
  this.personaService.actalizarArticulo(this.persona)
  .subscribe(Response=>{this.route.navigate(['/articulos'])
    Swal.fire('Persona Actualizada',
    'question'
    )
  }
    )
  }

}

