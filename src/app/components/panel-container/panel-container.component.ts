import { Component, Input, OnInit } from '@angular/core';
import { ComponentsModule } from '../components.module';
import { PanelButtonModel } from '../../models/panel-button.model';

@Component({
  selector: 'app-panel-container',
  standalone: true,
  imports: [ComponentsModule],
  templateUrl: './panel-container.component.html',
  styleUrl: './panel-container.component.css'
})
export class PanelContainerComponent{
  @Input() public panelbuttons:PanelButtonModel[]=[]

}
