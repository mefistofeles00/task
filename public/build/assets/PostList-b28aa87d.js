import{D as y,_ as g}from"./SecondaryButton-817d7dac.js";import{l as f,o as a,f as o,d as n,t as d,g as h,b as e,F as i,q as k,a as c,w as b}from"./app-2a40adbd.js";import"./_plugin-vue_export-helper-c27b6911.js";const w={key:0,class:"p-4 mb-4 text-sm text-green-800 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400",role:"alert"},v=e("span",{class:"font-medium"},"Islem basarili",-1),P={class:"w-full min-w-[640px] table-auto"},C=e("thead",null,[e("tr",null,[e("th",{class:"border-b border-blue-gray-50 py-3 px-6 text-left"},[e("p",{class:"block antialiased font-sans text-[11px] font-medium uppercase text-blue-gray-400"},"Başlık")]),e("th",{class:"border-b border-blue-gray-50 py-3 px-6 text-left"},[e("p",{class:"block antialiased font-sans text-[11px] font-medium uppercase text-blue-gray-400"},"Goruntule")]),e("th",{class:"border-b border-blue-gray-50 py-3 px-6 text-left"},[e("p",{class:"block antialiased font-sans text-[11px] font-medium uppercase text-blue-gray-400"},"Sil")]),e("th",{class:"border-b border-blue-gray-50 py-3 px-6 text-left"},[e("p",{class:"block antialiased font-sans text-[11px] font-medium uppercase text-blue-gray-400"},"Guncelle")])])],-1),B={key:0},$={class:"py-3 px-5 border-b border-blue-gray-50"},G={class:"flex items-center gap-4"},N={class:"block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-bold"},V={class:"py-3 px-5 border-b border-blue-gray-50"},D=["onClick"],S={class:"py-3 px-5 border-b border-blue-gray-50"},A={class:"w-10/12"},F={class:"py-3 px-5 border-b border-blue-gray-50"},L={class:"w-10/12"},T={key:1},q=e("tr",null,[e("td",{class:"py-3 px-5 border-b border-blue-gray-50",colspan:"3"},[e("p",{class:"antialiased font-sans text-sm leading-normal text-blue-gray-900 font-bold"},"Paylaşılan post bulunamadı.")])],-1),E=[q],H={__name:"PostList",props:["userPosts"],setup(u){const l=f(""),p=async t=>{try{const s=await axios.delete(`/post/${t}`);s.data&&Array.isArray(s.data)?(l.value=s.data[1],setTimeout(()=>{l.value="",location.reload()},3e3)):l.value="anlamadim lan hatayi"}catch(s){console.error("error deleting post kanka: ",s)}},x=t=>{window.location.href="/posts/"+t},_=t=>{window.location.href="/post-edit/"+t};return(t,s)=>(a(),o(i,null,[l.value?(a(),o("div",w,[v,n(" "+d(l.value),1)])):h("",!0),e("table",P,[C,u.userPosts.length>0?(a(),o("tbody",B,[(a(!0),o(i,null,k(t.$page.props.userPosts,r=>(a(),o("tr",{key:r.id},[e("td",$,[e("div",G,[e("p",N,d(r.title),1)])]),e("td",V,[e("button",{onClick:()=>x(r.id),class:"bg-blue-500 text-white px-4 py-2 rounded-md"},"Görüntüle",8,D)]),e("td",S,[e("div",A,[c(y,{onClick:m=>p(r.id),class:"antialiased font-sans mb-1 block text-xs font-medium text-blue-gray-600"},{default:b(()=>[n("Post Sil")]),_:2},1032,["onClick"])])]),e("td",F,[e("div",L,[c(g,{onClick:m=>_(r.id),class:"antialiased font-sans mb-1 block text-xs font-medium text-blue-gray-600"},{default:b(()=>[n("Guncelle")]),_:2},1032,["onClick"])])])]))),128))])):(a(),o("tbody",T,E))])],64))}};export{H as default};