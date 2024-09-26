const tsuru = {
    model: 2000,
    color: 'verde',
    kilometraje: 200000,
    enige: '2.0 litros'
}
console.log(tsuru);
console.log(tsuru.model);
console.log(tsuru.color);
tsuru.enige = '4.0 litros'
console.log(tsuru);

tsuru.collitiones = 5;
console.log(tsuru);
tsuru['numero de placas'] = 'XD 666 X'
console.log(tsuru);
tsuru.services = [2005, 2010 , 2015, 2020];
console.log(tsuru['services']);
tsuru.status = 'apagado';

tsuru.start = function(){

    console.log('Revision de sistema');
    console.log('Revisionando niveles');
    console.log('GRRRRRRRRRRRRR!');
    console.log('R!');
    console.log('R!');
    console.log('R!');
    this.status = 'Encendido';
}
tsuru.start();
console.log(tsuru.status);

tsuru['turn off'] = function(){
    console.log('Apagandonse.............')
    this.status= 'Apagado';
    console.log(this.status);
}
tsuru['turn off']();
delete tsuru['numeros de placas'] 
console.log(tsuru);