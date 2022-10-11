import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appColor]'
})
export class ColorDirective implements OnInit {
  @Input() color: string = "";
  @Input() size: string = "";
  @Input() fontStyle: string = "";

  constructor(private element: ElementRef) {
  }

  ngOnInit(): void{

    this.element.nativeElement.style.color = this.color;
    this.element.nativeElement.style.fontSize = this.size;
    this.element.nativeElement.style.fontStyle = this.fontStyle;
  }

}
