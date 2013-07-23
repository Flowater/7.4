var Anim = function(){
	...
};
Anim.prototype.start = function(){};
Anim.prototype.stop = function(){};

var Anim = function(){
	...
};
Anim.prototype = function(){
	start:function(){},
	stop:function(){}
};


Function.prototype.method = function(name,fun){
	this[name] = fun;
	return this;
};
var Anim = function(){
	...
};
Anim.method('start', function(){}).
	('stop', function(){});
