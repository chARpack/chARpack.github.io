const s=(r,a="")=>{const t=/([\/\w\-]+?)(\/index)?\.\w+/;return a+r.match(t)[1]},c=r=>Object.keys(r).map(t=>{const n=s(t),o=r[t];return{key:t,path:n,...o}});export{c as g};
