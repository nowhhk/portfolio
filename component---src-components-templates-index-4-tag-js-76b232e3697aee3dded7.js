(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"/8Qj":function(e,t,n){"use strict";var a=n("q1tI"),i=n.n(a),r=n("vOnD").d.p.withConfig({displayName:"textEllipsis__StyledText",componentId:"olu11s-0"})(["overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-line-clamp:",";-webkit-box-orient:vertical;word-wrap:break-word;line-height:24px;height:","px;margin-bottom:5px;color:inherit;"],(function(e){return e.line||1}),(function(e){return 24*e.line||24}));t.a=function(e){var t=e.text,n=e.line,a=e.color;return i.a.createElement(r,{line:n,color:a},t)}},"2Vrv":function(e,t,n){"use strict";n.r(t),n.d(t,"pageQuery",(function(){return c}));var a=n("q1tI"),i=n.n(a),r=n("PZv5"),o=n("vrFN"),l=n("fHdJ"),c="553655629";t.default=function(e){var t=e.location,n=e.pageContext,a=e.data,c=n.tag;return i.a.createElement(r.a,{location:t,title:"Tag: "+c},i.a.createElement("div",null,i.a.createElement(o.a,{title:"Tag: "+c,keywords:[c]}),i.a.createElement(l.a,{data:a.allMarkdownRemark.edges,page:n,path:"/tags/"+c,pageListSize:a.site.siteMetadata.pageListSize})))}},fHdJ:function(e,t,n){"use strict";var a=n("q1tI"),i=n.n(a),r=n("vOnD"),o=n("Wbzz"),l=n("9eSz"),c=n.n(l),m=n("/8Qj"),d=n("quVb"),u=Object(r.d)(o.a).withConfig({displayName:"postListItem__PostItem",componentId:"rydmd2-0"})(["display:flex;justify-content:space-between;margin-bottom:40px;"]),p=r.d.div.withConfig({displayName:"postListItem__TextContents",componentId:"rydmd2-1"})(["display:flex;flex-direction:column;margin-right:20px;h2{margin:0;margin-bottom:5px;padding-bottom:0;border-bottom:none;color:",";}p:nth-child(2){color:",";}div{color:",";#circle{background-color:",";}}"],(function(e){return e.theme.postlistitem.title}),(function(e){return e.theme.postlistitem.content}),(function(e){return e.theme.postlistitem.info}),(function(e){return e.theme.postlistitem.info})),s=Object(r.d)(c.a).withConfig({displayName:"postListItem__Thumbnail",componentId:"rydmd2-2"})(["width:120px;height:120px;border-radius:10px;"]),f=function(e){var t=e.node,n=!!t.frontmatter.cover;return i.a.createElement(u,{to:t.fields.slug},i.a.createElement(p,null,i.a.createElement("h2",null,i.a.createElement(m.a,{line:1,text:t.frontmatter.title})),i.a.createElement(m.a,{line:2,text:t.excerpt}),i.a.createElement(d.a,{date:t.frontmatter.date,category:t.frontmatter.category})),n&&i.a.createElement("div",null,i.a.createElement(s,{fixed:t.frontmatter.cover.childImageSharp.fixed})))},g=Object(r.d)(o.a).withConfig({displayName:"pageButton__StyledLink",componentId:"sc-10ildtq-0"})(["padding:0.5em;font-weight:bold;color:inherit;"]),h=r.d.li.withConfig({displayName:"pageButton__StyledButton",componentId:"sc-10ildtq-1"})(["display:inline-block;border-radius:3px;margin:10px;",";&:hover{color:",";background-color:",";}"],(function(e){return e.active?Object(r.c)(["color:",";background-color:",";"],(function(e){return e.theme.pagination.activeText}),(function(e){return e.theme.pagination.activeBack})):Object(r.c)(["color:",";"],(function(e){return e.theme.pagination.defaultText}))}),(function(e){return e.theme.pagination.activeText}),(function(e){return e.theme.pagination.activeBack})),v=function(e){var t=e.link,n=e.children,a=e.active;return i.a.createElement(h,{active:a},i.a.createElement(g,{to:t},n))},x=r.d.nav.withConfig({displayName:"pagination__StyledPagination",componentId:"sc-10qff8k-0"})(["margin:1em auto;text-align:center;ul{list-style-type:none;margin:0;padding:0.5em;}"]),b=function(e){for(var t=e.page,n=e.path,a=e.listSize,r=t.numberOfPages,o=t.humanPageNumber,l=parseInt((o-1)/a)*a+1,c=l+a-1<r?l+a-1:r,m=Math.ceil(r/a),d=parseInt((o-1)/a)+1,u=d<=1?null:(d-1)*a,p=d<m?d*a+1:null,s=[],f=l;f<=c;f++){var g=1!==f?"/"+f:"";f===o?s.push(i.a.createElement(v,{key:f,link:""+n+g,active:!0},f)):s.push(i.a.createElement(v,{key:f,link:""+n+g},f))}return i.a.createElement(x,null,i.a.createElement("ul",null,u&&i.a.createElement(v,{link:n+"/"+u},i.a.createElement("i",{className:"fas fa-chevron-left"})),s.length>0&&s,p&&i.a.createElement(v,{link:n+"/"+p},i.a.createElement("i",{className:"fas fa-chevron-right"}))))};t.a=function(e){var t=e.data,n=e.page,r=e.path,o=e.pageListSize;return i.a.createElement(a.Fragment,null,t.map((function(e){var t=e.node;return i.a.createElement(f,{key:t.fields.slug,node:t})})),n&&i.a.createElement(b,{page:n,path:r,listSize:o}))}},quVb:function(e,t,n){"use strict";var a=n("q1tI"),i=n.n(a),r=n("vOnD"),o=n("Wbzz"),l=n("3r1a"),c=r.d.div.withConfig({displayName:"postInfo__Container",componentId:"sc-1l1nte-0"})(["font-size:",";span{vertical-align:middle;}a{color:inherit;vertical-align:middle;&:hover{text-decoration:underline;}}div{margin:0 10px;}"],(function(e){return e.size?e.size+"px":"13px"}));t.a=function(e){var t=e.category,n=e.date,r=e.size,m=e.link;return i.a.createElement(c,{size:r},t&&i.a.createElement(a.Fragment,null,m?i.a.createElement(o.a,{to:"/category/"+t},t):i.a.createElement("span",null,t),i.a.createElement(l.a,{size:"3"})),i.a.createElement("span",null,n))}}}]);
//# sourceMappingURL=component---src-components-templates-index-4-tag-js-76b232e3697aee3dded7.js.map