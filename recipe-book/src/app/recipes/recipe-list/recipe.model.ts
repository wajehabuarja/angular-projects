export class Recipe {
    public name: string;
    public discription: string;
    public imagePath: string;

    constructor(name: string, discription: string, imagePath: string) {
        this.name = name;
        this.discription = discription;
        this.imagePath = imagePath;
    }
}