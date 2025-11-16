class  Student{
    //USe to initilize Properties
    constructor(name, age){
        this.name = name;
        this.age = age
    }

    introduce(){
        console.log("Hi Iam ${this.name} & I am ${this.age} years old.")
    }
}

const s1 = new Student("Anuj", 20);
const s2 = new Student("SRam", 22);
const s3 = new Student("RRam", 22);
const s4 = new Student("ARam", 22);
const s5 = new Student("DRam", 22);

s1.introduce()
s2.introduce()