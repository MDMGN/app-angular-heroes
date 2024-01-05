export class PanelButtonModel{
    private name:string;
    private bgc:string;
    private txtColor:string;
    private route:string;

    constructor(name:string,txtColor:string,bgc:string,route:string){
        this.name=name ?? '';
        this.bgc=bgc ?? '';
        this.txtColor=txtColor ?? '';
        this.route=route ?? '';
    }
}