import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                      */const s="feedback-form-state";let e={email:"",message:""};const t=document.querySelector(".feedback-form"),m=t.elements.email,r=t.elements.message,l=localStorage.getItem(s);l&&(e=JSON.parse(l),m.value=e.email||"",r.value=e.message||"");t.addEventListener("input",a=>{e[a.target.name]=a.target.value.trim(),localStorage.setItem(s,JSON.stringify(e))});t.addEventListener("submit",a=>{if(a.preventDefault(),!e.email||!e.message){alert("Fill please all fields");return}console.log("Form Data:",e),localStorage.removeItem(s),e={email:"",message:""},t.reset()});
//# sourceMappingURL=2-form.js.map
