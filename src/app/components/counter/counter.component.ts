import { outputAst } from '@angular/compiler';
import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {
@Input() counter:number=0;
@Output() emitCounter=new EventEmitter<number>();
    resetCounter(){
      this.emitCounter.emit(0);
    }
    
}
