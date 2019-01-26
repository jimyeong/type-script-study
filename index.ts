/*datatype*/



/*control flow analysis*/

function projectStatus (x: string | number){
    if( typeof x === 'string' ){
        // x는 string 이거나 number type
        x = 10;
    }
    return x;
}


console.log(projectStatus("human"));


/*capsulize*/
class News{
    public channelNumber : number;
    public newsTitle : string;
    private url : string;
}

let espn = new News();
espn.channelNumber = 1;
espn.newsTitle = 'NFL Today';

console.log(espn.newsTitle);
console.log(espn.channelNumber);



/*heritage*/
class Editor{
    constructor(public name: string, public isTypeScriptCompatible: Boolean){
    }
    details(){
        console.log(`Editor: ${this.name}`,` TypeScript Installed: ${this.isTypeScriptCompatible} `)
    }
}



class VisualStudioCode extends Editor{
    public OSType: string;
    constructor(name: string, isTypeScriptCompatible: Boolean, OSType: string){
        super(name, isTypeScriptCompatible);
        this.OSType = OSType;
    }
}

let VS = new VisualStudioCode('vsCode',true,'all');

VS.details();



/*INTERFACE*/

/*
let planet: Planet= new Earth();
*/


interface Funiture{
    name: string;
    purpose: string;
    quantity: number;
}


class Chair implements Funiture{
    name: string;
    purpose: string;
    quantity: number
}

let chair: Funiture = new Chair();


interface Planet{
    name: string;
    weather: string
}

class Earth implements Planet{
    name: string;
    weather: string;
}



/*shape*/
class Pluto {
    name: string;
    weather: string
}

let planet: Planet;

planet = new Pluto();


/*pluto는 Planet을 구한혀지 않았지만, pluto의 인스턴스를 planet에 할당했다*/






