import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';

enum PAISES{
  "MEXICO",
  "JAPON",
  "RUSIA",
}

@Component({
  selector: 'app-primero',
  templateUrl: './primero.component.html',
  styleUrls: ['./primero.component.scss']
})
export class PrimeroComponent implements OnInit {
  @ViewChild("texto", {static:true}) texto!: ElementRef;
  @ViewChild("div", {static:true}) div!: ElementRef;

  public flag: boolean = true;
  public PAISES = PAISES
  public paises: any[] = [
    {
      id: "21",
      nombre: "México",
    },
    {
      id: "22",
      nombre: "Colombia",
    },
    {
      id: "23",
      nombre: "Peru",
    },
  ];

  public platillos: any[] = [
    {
      platillo: "Tacos",
      pais: PAISES.MEXICO,
    },
    {
      platillo: "Mole Rojo",
      pais: PAISES.MEXICO,
    },
    {
      platillo: "Suchi",
      nombre: PAISES.JAPON,
    },
    {
      platillo: "Ramen",
      pais: PAISES.JAPON,
    },
  ];


  constructor(private rendered2: Renderer2) { }

  ngOnInit(): void {
    this.clickBtn()
    console.log(this.texto);
    this.rendered2.setAttribute(this.texto.nativeElement,"id","hi")
    this.rendered2.setStyle(this.texto.nativeElement,"color","blue")

    this.rendered2.setValue(this.div.nativeElement,"Hola mundo!")
  }

  clickBtn(){
    let btn = document.getElementById("btn") as HTMLInputElement

    btn.addEventListener("click", () => {
      this.flag = !this.flag;
    })
  }
}
