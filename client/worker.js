var alg = function (n){s=0;function f(l,o,r,c,t,v){v=~(l|o|r)&c;while(v>0){v^=t=-v&v;f((l|t)<<1,o|t,(r|t)>>1,c)}o==c&&s++}f(0,0,0,(1<<n)-1);return s};
var data = 15;

var result = alg(data);

postMessage(result);