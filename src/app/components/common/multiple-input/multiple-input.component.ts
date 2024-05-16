import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import {  } from 'stream';
import { ButtonComponent } from "../button/button.component";

@Component({
    selector: 'app-multiple-input',
    standalone: true,
    templateUrl: './multiple-input.component.html',
    styleUrl: './multiple-input.component.scss',
    imports: [ButtonComponent]
})
export class MultipleInputComponent implements OnInit{
  @Input() label: string = '';
  @Input() options: any[] = [];
  @Input() selected: any = undefined;
  @Input() disabled: boolean | string = false;
  @Input() dataBsTarget: string = 'dataBs';
  @Input() dataBsToggle: string = 'dataBs';

  @Output() settings = new EventEmitter<any>();
  @Output() change = new EventEmitter<any>();
  ngOnInit(): void {
    if (this.options.length > 0 && this.selected == undefined) {
      this.selected = this.options[0]
    }
  }
  

  handleChange(option:any){
    this.selected = option;
    this.change.emit(this.selected)
  }
  handleCheckBox(){
    const checkbox = document.getElementById(this.label) as HTMLInputElement;
    this.disabled = !checkbox.checked
    if (this.disabled) {
      this.change.emit(null)
    }
  }
  handleSettings(){
    this.settings.emit()
  }

}
