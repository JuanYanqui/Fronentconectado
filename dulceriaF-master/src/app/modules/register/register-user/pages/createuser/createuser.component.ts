import { Component, OnInit } from '@angular/core';
import { BasePersonaService } from 'src/app/modules/services/consultarpersona';
import { Persona } from 'src/app/modules/models/persona';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Usuario } from 'src/app/modules/models/usuario';
import { ThisReceiver } from '@angular/compiler';
@Component({
  selector: 'app-createuser',
  templateUrl: './createuser.component.html',
  styleUrls: ['./createuser.component.css']
})
export class CreateuserComponent implements OnInit {
  public usuario: Usuario = new Usuario();
  public persona: Persona= new Persona();
  constructor(private bd_Persona: BasePersonaService, private route:Router, 
    private activadedRoute: ActivatedRoute) { }

  ngOnInit(): void {
  }

  cap_id_articulo_final: number;
  cap_id_articulo: number[];
  apellido: String;

  cap_cedula: String ="";
  CapturarCedula(e) {
    this.cap_cedula=e.target.value;
}

  traerElIddelArticulo(): void {
    
    this.bd_Persona.traerIdArticulo(this.cap_cedula).subscribe({
      next: data => {
        console.log('Este es el id del enca a enviar' + this.cap_cedula)
        console.log(data);

        this.cap_id_articulo = data;

        this.cap_id_articulo.forEach(f =>{
          console.log("id sin nadad de corchetes => " + f)
          this.cap_id_articulo_final = f;
          this.MostrarDatosAcaja();
        })

      },
      error: err => {
        console.log('Error al acapturar el conteo')
      }
    });
  }


  MostrarDatosAcaja(): void { 

  if (this.cap_cedula.length == 10) {
  
    console.log('paso con 10');
    console.log(this.cap_id_articulo_final);
    this.bd_Persona.consultarPersona(this.cap_id_articulo_final).subscribe((response) => {
      console.log(response)
      console.log(response.nombres)
      if (response == null) {
        Swal.fire(
          'Docente no registrado en FENIX',
          `Verifique si su cedula esta correcta.`,
          'warning'
        );
      } else {
        this.usuario.nombres = response.nombres+" "+response.apellidos;
        this.apellido = response.apellidos;
        console.log(response.nombres)
      }

    });
  } 
}

}
