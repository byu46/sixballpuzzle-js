import ColourConstants from './ColourConstants';

class Random {
  private colourBag: Array<ColourConstants> = [
    ColourConstants.RED,
    ColourConstants.YELLOW,
    ColourConstants.GREEN,
    ColourConstants.BLUE,
    ColourConstants.PURPLE,
  ];

  private getRandomColour(): ColourConstants {
    return this.colourBag[Math.floor(Math.random() * this.colourBag.length)];
  }

  public getRandomColours(): Array<ColourConstants> {
    return [
      this.getRandomColour(),
      this.getRandomColour(),
      this.getRandomColour(),
    ];
  }

  public getRandomDropArea(): number {
    return 0;
  }
}