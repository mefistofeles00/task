import{o as a,f as o,q as r,F as i,b as e,t as s,a as c,w as n,d,u as h,i as u}from"./app-e46c25f8.js";const _={class:"max-w-4xl px-10 py-6 mx-auto bg-white rounded-lg shadow-md"},m={class:"mt-2"},f={href:"#",class:"text-2xl font-bold text-gray-700 hover:underline"},x={class:"mt-2 text-gray-600"},b={class:"flex items-center justify-between mt-4"},p={href:"#",class:"flex items-center"},v=e("img",{src:"https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=731&q=80",alt:"avatar",class:"hidden object-cover w-10 h-10 mx-4 rounded-full sm:block"},null,-1),y={class:"font-bold text-gray-700 hover:underline"},j={__name:"Posts",props:{posts:Object},setup(l){return(g,k)=>(a(!0),o(i,null,r(l.posts.data,t=>(a(),o("div",{class:"mt-6",key:t.id},[e("div",_,[e("div",m,[e("a",f,s(t.title),1),e("p",x,s(t.content),1)]),e("div",b,[c(h(u),{href:"/posts/"+t.id,class:"text-blue-500 hover:underline"},{default:n(()=>[d("Daha Fazla Oku")]),_:2},1032,["href"]),e("div",null,[e("a",p,[v,e("h1",y,s(t.users?t.users.name:"İlişkili kullanıcı yok"),1)])])])])]))),128))}};export{j as default};