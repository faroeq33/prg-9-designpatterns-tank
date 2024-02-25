// Wat zijn de stappen die pikuhr heeft genomen om het naar de strategy pattern te schrijven?

import { GameObject } from "../GameObject";

export interface WeaponStrategy {
  fireRate: number;
  ammoType: GameObject;

  execute(): void;
}
// V 1. Maak een interface aan voor de strategieën
// V 2. Maak een klasse aan die de interface implementeert
// V 3. Voeg een property toe aan de klasse die de interface implementeert
// V 4. Gebruik de property in de execute methode
// x 5. Verplaats de code die de strategie bepaalt naar de klasse die de interface implementeert
