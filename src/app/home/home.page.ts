import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonRadioGroup, IonRadio } from '@ionic/angular/standalone';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonRadioGroup, IonRadio, FormsModule],
})
export class HomePage {
  // <!-- custom code begins... -->
  selected: string | undefined = 'strawberries';
  plainSelected: number | undefined = 1;
  // <!-- custom code ends... -->

  constructor() {}
}
