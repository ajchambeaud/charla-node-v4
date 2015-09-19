function async(val){
  setTimeout( () => { genFun.next(val*2) }, 300);
}

function *gen(){
  var a = yield async(1);
  var b = yield async(2);
  var c = yield async(3);
  console.log(a,b,c);
}

var genFun = gen();
genFun.next();