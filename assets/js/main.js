const menuLinks=document.querySelectorAll('a[href^="#"]');
menuLinks.forEach(a=>a.addEventListener('click',e=>{const id=a.getAttribute('href');if(id.length>1){e.preventDefault();document.querySelector(id)?.scrollIntoView({behavior:'smooth'});}}));
