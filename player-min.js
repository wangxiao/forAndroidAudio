void function(a){function f(){return c=document.documentElement.getElementsByTagName("audio")[0],!c&&d>e&&setTimeout(function(){f(),e+=50},50),c&&(b.sendToNative("onready",""),g()),c}function g(){c.play(),c.addEventListener("loadedmetadata",function(){wandoujia.audio.duration()}),c.addEventListener("play",function(){b.sendToNative("onplay","")}),c.addEventListener("ended",function(){b.sendToNative("onended","")}),c.addEventListener("pause",function(){b.sendToNative("onpause","")}),c.addEventListener("error",function(a){b.sendToNative("onerror",JSON.stringify(a))})}var b,c,d,e;a.wandoujia=a.wandoujia||{},b=a.NativeCallback||{},b.sendToNative=b.sendToNative||function(){},d=5e4,e=0,f(),wandoujia.audio={audioDom:c,hasAudio:function(){return!!c},play:function(){c.play()},pause:function(){c.pause()},stop:function(){c.pause(),c.currentTime=0},progress:function(a){arguments.length?c.currentTime=Number(a):b.sendToNative("progress",JSON.stringify({progress:c.currentTime}))},duration:function(){c.duration?b.sendToNative("duration",JSON.stringify({duration:c.duration})):setTimeout(function(){wandoujia.audio.duration()},100)}}}(window);