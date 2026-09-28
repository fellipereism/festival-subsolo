(function(){var b=document.getElementById('bg'),m=matchMedia('(prefers-reduced-motion: reduce)').matches;
function u(){if(m)return;var h=document.documentElement.scrollHeight-innerHeight,p=h>0?scrollY/h:0;b.style.backgroundPosition='0 '+(p*100)+'%'}
addEventListener('scroll',u,{passive:true});u();
var f=document.getElementById('contato');if(f)f.addEventListener('submit',function(e){e.preventDefault();document.getElementById('ok').textContent='Mensagem enviada. Respondemos por e-mail em até 2 dias úteis.';f.reset()})})();
