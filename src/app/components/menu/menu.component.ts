import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private router : Router) {
  }

  ngOnInit(): void {
  }

    /**
   * Metodo para regresar
   */
  regresar(){
     this.router.navigateByUrl("/login");
    }

    /**
   * Metodo que navega al modulo de clientes
   */
  navegarModuloClientes(){
    this.router.navigateByUrl("/gestion-clientes");

  }


  }


