export class Serie {
    constructor(
      public name: string,
      public releaseYear: number,
      public seasons: number,
      public director: string,
      public cast: string[],
      public studio: string,
      public platform: string,
      public link: string,
      public description: string,
    ) {}
  }