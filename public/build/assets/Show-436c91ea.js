import{o,f as n,b as t,t as s,k as a}from"./app-2a40adbd.js";const i={class:"flex items-center justify-center min-h-screen"},l={class:"rounded-xl border p-5 shadow-md w-9/12 bg-white"},r={class:"flex w-full items-center justify-between border-b pb-3"},c={class:"flex items-center space-x-3"},d=t("div",{class:"h-8 w-8 rounded-full bg-slate-400 bg-[url('https://i.pravatar.cc/32')]"},null,-1),h={class:"text-lg font-bold text-slate-700"},v=t("div",{class:"flex items-center space-x-8"},[t("button",{class:"rounded-2xl border bg-neutral-100 px-3 py-1 text-xs font-semibold"},"Category")],-1),x={class:"mt-4 mb-6"},p={class:"mb-3 text-xl font-bold"},m={class:"text-sm text-neutral-600"},u=a('<div><div class="flex items-center justify-between text-slate-500"><div class="flex space-x-4 md:space-x-8"><div class="flex cursor-pointer items-center transition hover:text-slate-600"><svg xmlns="http://www.w3.org/2000/svg" class="mr-1.5 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"></path></svg><span>125</span></div><div class="flex cursor-pointer items-center transition hover:text-slate-600"><svg xmlns="http://www.w3.org/2000/svg" class="mr-1.5 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"></path></svg><span>4</span></div></div></div></div>',1),b={__name:"Show",props:["post"],setup(e){return(_,f)=>(o(),n("div",i,[t("div",l,[t("div",r,[t("div",c,[d,t("div",h,s(e.post.users.name),1)]),v]),t("div",x,[t("div",p,s(e.post.title),1),t("div",m,s(e.post.content),1)]),u])]))}};export{b as default};