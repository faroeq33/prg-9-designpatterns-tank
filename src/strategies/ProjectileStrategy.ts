// Wat zijn de stappen die pikuhr heeft genomen om het naar de strategy pattern te schrijven?

interface ProjectileStrategy {
  update(): void;
}
// V 1. Maak een interface aan voor de strategieën
// x 2. Maak een klasse aan die de interface implementeert
// x 3. Voeg een property toe aan de klasse die de interface implementeert
// x 4. Gebruik de property in de update methode
// x 5. Verplaats de code die de strategie bepaalt naar de klasse die de interface implementeert
