import { Directive, ElementRef, HostListener, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[dynamicColor]'
})
export class DynamicColorDirective implements OnInit{
  @Input() dynamicColor: string = "";
  @Input() color: string = "";
  private size: number = 30;

  @HostListener("mouseenter") onMousEenter = () => {
    this.element.nativeElement.style.backgroundColor = this.dynamicColor
  }
  @HostListener("mouseleave") onMousExit = () => {
    this.element.nativeElement.style.backgroundColor = "white"
    this.element.nativeElement.style.color = this.color
    this.element.nativeElement.style.fontSize = "30px"
    this.size = 30
  }

  @HostListener("click") onMousClick = () => {
    this.element.nativeElement.style.backgroundColor = this.color
    this.element.nativeElement.style.color = this.dynamicColor
    this.size += 10;
    this.element.nativeElement.style.fontSize = this.size+"px"
  }

  constructor(private element: ElementRef) {}

  ngOnInit(): void {
    console.log(this.dynamicColor);
    console.log(this.element.nativeElement);
  }

}
