import ColourConstants from '../logic/ColourConstants';

class Hexagon {
  private colour: ColourConstants;
  private rotation: number;

  constructor(colour: ColourConstants) {
    this.colour = colour;
    this.rotation = 0;
  }

  public isEmpty(): boolean {
    return this.colour === ColourConstants.BLACK;
  }

  public getColour(): ColourConstants {
    return this.colour;
  }

  public setColour(colour: ColourConstants): void {
    this.colour = colour;
  }

  public getRotation(): number {
    return this.rotation;
  }

  public setRotation(state: number): void {
    this.rotation = state;
  }

  // public fall(): void {

  // }
}