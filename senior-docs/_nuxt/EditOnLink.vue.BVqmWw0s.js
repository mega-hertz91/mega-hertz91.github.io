import{d as v,y as u,I as d,ab as w,a0 as p}from"./entry.BK3RDgak.js";const S=v({props:{baseUrl:{type:String,default:()=>{var e,t,r;return((r=(t=(e=u())==null?void 0:e.docus)==null?void 0:t.github)==null?void 0:r.baseUrl)||"https://github.com"},required:!1},owner:{type:String,default:()=>{var e,t,r;return(r=(t=(e=u())==null?void 0:e.docus)==null?void 0:t.github)==null?void 0:r.owner},required:!1},repo:{type:String,default:()=>{var e,t,r;return(r=(t=(e=u())==null?void 0:e.docus)==null?void 0:t.github)==null?void 0:r.repo},required:!1},branch:{type:String,default:()=>{var e,t,r;return(r=(t=(e=u())==null?void 0:e.docus)==null?void 0:t.github)==null?void 0:r.branch},required:!1},dir:{type:String,default:()=>{var e,t,r;return(r=(t=(e=u())==null?void 0:e.docus)==null?void 0:t.github)==null?void 0:r.dir},required:!1},source:{type:String,required:!1,default:void 0},page:{type:Object,required:!1,default:void 0},contentDir:{type:String,required:!1,default:()=>{var e,t,r;return((r=(t=(e=u())==null?void 0:e.docus)==null?void 0:t.github)==null?void 0:r.dir)||"content"}},edit:{type:Boolean,required:!1,default:()=>{var e,t,r;return(r=(t=(e=u())==null?void 0:e.docus)==null?void 0:t.github)==null?void 0:r.edit}}},setup(e){if(!e.owner||!e.repo||!e.branch)throw new Error("If you want to use `GithubLink` component, you must specify: `owner`, `repo` and `branch`.");const t=d(()=>{var h,b;let{baseUrl:n,repo:a,owner:c,branch:l,contentDir:f}=e,s="";if((b=(h=u())==null?void 0:h.public)!=null&&b.content){let i;const{sources:g}=u().public.content;for(const y in g||[])if(e.page._id.startsWith(y)){i=g[y];break}(i==null?void 0:i.driver)==="github"&&(a=i.repo||e.repo||"",c=i.owner||e.owner||"",l=i.branch||e.branch||"main",f=i.dir||e.contentDir||"",s=i.prefix||"")}return{baseUrl:n,repo:a,owner:c,branch:l,contentDir:f,prefix:s}}),r=d(()=>w(`${t.value.baseUrl}/${t.value.owner}/${t.value.repo}`)),o=d(()=>{var a;const n=[];return(a=e==null?void 0:e.page)!=null&&a._path?(t.value.contentDir&&n.push(t.value.contentDir),n.push(e.page._file.substring(t.value.prefix.length)),n):(e.dir&&n.push(e.dir),e.source&&n.push(e.source),n)});return{url:d(()=>{var a;const n=[r.value];return e.edit?n.push("edit"):n.push("tree"),n.push(((a=t==null?void 0:t.value)==null?void 0:a.branch)||"",...o.value),n.filter(Boolean).join("/")})}},render(e){var o;const{url:t}=e,r=p();return(o=r==null?void 0:r.default)==null?void 0:o.call(r,{url:t})}});export{S as _};
