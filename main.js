function Developer (first, last){
this.firstName = first;
this.lastName = last;

this.getName=function(){
    console.log(this.firstName+' '+this.lastName);
}

let owlMan = new Developer ('Brian', 'Saint-Hilaire');


}

owlMan.getName();

JavaScriptDeveloper.extends(Developer);
function JavaScriptDeveloper(){
    
}