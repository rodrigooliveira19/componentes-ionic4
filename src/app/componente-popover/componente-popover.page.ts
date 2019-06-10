import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { ComponentePopoverInternoComponent } from '../componente-popover-interno/componente-popover-interno.component';

@Component({
  selector: 'app-componente-popover',
  templateUrl: './componente-popover.page.html',
  styleUrls: ['./componente-popover.page.scss'],
})
export class ComponentePopoverPage implements OnInit {

  constructor(private popoverCtrl: PopoverController) { }

  ngOnInit() {
  }

  async showPopover(ev: any) {
    let popover = await this.popoverCtrl.create({
      component: ComponentePopoverInternoComponent, 
      event: ev
    }); 

    return await popover.present(); 

  }

}
