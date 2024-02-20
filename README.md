# Strategy Tank

Startercode voor de opdracht Strategy Tank [PRG09]

![screenshot strategy tank](docs/images/screenshot-strategy-tank.png)

## Installatie

1. Installeer TypeScript
```
npm install -g typescript
```
Mocht het commando tsc niet herkent worden. Sluit Visual Studio Code en start het opnieuw op.

Met CRTL + SHIFT + B kan je de watch starten en de code compileren.

## Spelregels

In deze opdracht werk je een spelletje uit met een tank. De tank zal moeten overleven in een golf van vijanden. Er zijn drie verschillende vijanden (light, medium, heavy) en elke vijand is uit te schakelen met een bepaald projectiel. 
De spelerstank moet over een ammo box rijden om dit type projectiel te activeren. Op dat moment wisselt het type projectiel dat je afvuurt naar het type dat afgebeeld staat op de ammo box. Standaard begin je met bullets en je kunt maar 1 type projectiel per keer afvuren. 
Elk projectiel heeft zijn eigen karakteristieken. Bijvoorbeeld:

1.	Bullet
Schiet twee keer per seconde. 
Vernietigt **Light tank**
2.	Rocket
Schiet een keer per twee seconden
Vernietigt **Medium tank** 
3.	Door jou verzonnen projectiel met door jou verzonnen gedrag die de **Heavy tank** uitschakelt. Bijvoorbeeld:
    - Een Mine die je tank achterlaat en op dezelfde plek blijft liggen. [relatief eenvoudig]
    -	Een Homing Missile die na afvuren zelf een Heavy Tank opzoekt [moeilijker]
    -	Een andere, door jou bedacht projectiel…

Voordat je gaat beginnen aan de uitwerking maak je eerst een klassendiagram waarbij je het Strategy Pattern verwerkt. 

Natuurlijk is het extra leuk om een score toe te voegen, een restart optie en een game over screen. Dit is niet verplicht om de opdracht te halen. 