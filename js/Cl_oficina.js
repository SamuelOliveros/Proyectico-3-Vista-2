export default class Cl_oficina{
    constructor(){
        this.prestamos=[];  
      }
      agregarPrestamo(pres){
        this.prestamos.push(pres);
      }
      MontoFinal(){
        let montini=20000;
        let montprest=0;
        for(let i=0; i < this.prestamos.length; i++)
            montprest += this.prestamos[i].prestamo ;
        return montini - montprest ;
}
DosMeses(){
    let auxnom = "" ;
    for(let i=0; i < this.prestamos.length; i++)
        if(this.prestamos[i].meses == 2)
            auxnom = this.prestamos[i].cliente ;
        return auxnom ;
    
} 
PrestMin(){
    let auxmenor="";
    let min = this.prestamos[0].prestamo;
    for(let i=1; i < this.prestamos.length ; i++)
        if(this.prestamos[i].prestamo < min)
           auxmenor = this.prestamos[i].cliente ;
        return auxmenor ;
}
}