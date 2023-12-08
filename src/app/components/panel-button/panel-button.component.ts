import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { PanelButtonModel } from '../../models/panel-button.model';

@Component({
  selector: 'app-panel-button',
  standalone: true,
  imports: [],
  templateUrl: './panel-button.component.html',
  styleUrl: './panel-button.component.css'
})
export class PanelButtonComponent {
  @Input() public props:any;
  constructor(private router:Router){}
 navigateTo(){
  this.router.navigate([this.props.route]);
 }
}
