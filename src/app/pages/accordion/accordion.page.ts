import { Component, OnInit } from '@angular/core';
// import { IonAccordionGroup } from '@ionic/angular';


@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.page.html',
  styleUrls: ['./accordion.page.scss'],
})
export class AccordionPage implements OnInit {
  // @ViewChild(IonAccordionGroup, { static: true }) accordionGroup: IonAccordionGroup;


  constructor() { }
  logAccordionValue() {
    // console.log(this.accordionGroup.value);
  }
  closeAccordion() {
    // this.accordionGroup.value = undefined;
  }  
  ngOnInit() {
  }

}
