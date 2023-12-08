export class PanelButtonModel{
    private name:string;
    private bgc:string;
    private route:string;

    constructor(name:string,bgc:string,route:string){
        this.name=name ?? '';
        this.bgc=bgc ?? '';
        this.route=route ?? '';
    }
}