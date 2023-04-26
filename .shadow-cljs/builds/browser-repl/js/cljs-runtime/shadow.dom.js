goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_64390 = (function (this$){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (shadow.dom._to_dom[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5394__auto__.call(null,this$));
} else {
var m__5392__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5392__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_64390(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_64392 = (function (this$){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (shadow.dom._to_svg[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5394__auto__.call(null,this$));
} else {
var m__5392__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5392__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_64392(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__63717 = coll;
var G__63718 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__63717,G__63718) : shadow.dom.lazy_native_coll_seq.call(null,G__63717,G__63718));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__5045__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__63727 = arguments.length;
switch (G__63727) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__63731 = arguments.length;
switch (G__63731) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__63734 = arguments.length;
switch (G__63734) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__63736 = arguments.length;
switch (G__63736) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__63739 = arguments.length;
switch (G__63739) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__63746 = arguments.length;
switch (G__63746) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__5045__auto__ = (!((typeof document !== 'undefined')));
if(or__5045__auto__){
return or__5045__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e63755){if((e63755 instanceof Object)){
var e = e63755;
return console.log("didnt support attachEvent",el,e);
} else {
throw e63755;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__5045__auto__ = (!((typeof document !== 'undefined')));
if(or__5045__auto__){
return or__5045__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__63764 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__63765 = null;
var count__63766 = (0);
var i__63767 = (0);
while(true){
if((i__63767 < count__63766)){
var el = chunk__63765.cljs$core$IIndexed$_nth$arity$2(null,i__63767);
var handler_64420__$1 = ((function (seq__63764,chunk__63765,count__63766,i__63767,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__63764,chunk__63765,count__63766,i__63767,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_64420__$1);


var G__64421 = seq__63764;
var G__64422 = chunk__63765;
var G__64423 = count__63766;
var G__64424 = (i__63767 + (1));
seq__63764 = G__64421;
chunk__63765 = G__64422;
count__63766 = G__64423;
i__63767 = G__64424;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__63764);
if(temp__5804__auto__){
var seq__63764__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__63764__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__63764__$1);
var G__64425 = cljs.core.chunk_rest(seq__63764__$1);
var G__64426 = c__5568__auto__;
var G__64427 = cljs.core.count(c__5568__auto__);
var G__64428 = (0);
seq__63764 = G__64425;
chunk__63765 = G__64426;
count__63766 = G__64427;
i__63767 = G__64428;
continue;
} else {
var el = cljs.core.first(seq__63764__$1);
var handler_64431__$1 = ((function (seq__63764,chunk__63765,count__63766,i__63767,el,seq__63764__$1,temp__5804__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__63764,chunk__63765,count__63766,i__63767,el,seq__63764__$1,temp__5804__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_64431__$1);


var G__64432 = cljs.core.next(seq__63764__$1);
var G__64433 = null;
var G__64434 = (0);
var G__64435 = (0);
seq__63764 = G__64432;
chunk__63765 = G__64433;
count__63766 = G__64434;
i__63767 = G__64435;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__63780 = arguments.length;
switch (G__63780) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__63788 = cljs.core.seq(events);
var chunk__63789 = null;
var count__63790 = (0);
var i__63791 = (0);
while(true){
if((i__63791 < count__63790)){
var vec__63802 = chunk__63789.cljs$core$IIndexed$_nth$arity$2(null,i__63791);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63802,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63802,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__64443 = seq__63788;
var G__64444 = chunk__63789;
var G__64445 = count__63790;
var G__64446 = (i__63791 + (1));
seq__63788 = G__64443;
chunk__63789 = G__64444;
count__63790 = G__64445;
i__63791 = G__64446;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__63788);
if(temp__5804__auto__){
var seq__63788__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__63788__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__63788__$1);
var G__64447 = cljs.core.chunk_rest(seq__63788__$1);
var G__64448 = c__5568__auto__;
var G__64449 = cljs.core.count(c__5568__auto__);
var G__64450 = (0);
seq__63788 = G__64447;
chunk__63789 = G__64448;
count__63790 = G__64449;
i__63791 = G__64450;
continue;
} else {
var vec__63810 = cljs.core.first(seq__63788__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63810,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63810,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__64453 = cljs.core.next(seq__63788__$1);
var G__64454 = null;
var G__64455 = (0);
var G__64456 = (0);
seq__63788 = G__64453;
chunk__63789 = G__64454;
count__63790 = G__64455;
i__63791 = G__64456;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__63816 = cljs.core.seq(styles);
var chunk__63817 = null;
var count__63818 = (0);
var i__63819 = (0);
while(true){
if((i__63819 < count__63818)){
var vec__63832 = chunk__63817.cljs$core$IIndexed$_nth$arity$2(null,i__63819);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63832,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63832,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__64459 = seq__63816;
var G__64460 = chunk__63817;
var G__64461 = count__63818;
var G__64462 = (i__63819 + (1));
seq__63816 = G__64459;
chunk__63817 = G__64460;
count__63818 = G__64461;
i__63819 = G__64462;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__63816);
if(temp__5804__auto__){
var seq__63816__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__63816__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__63816__$1);
var G__64464 = cljs.core.chunk_rest(seq__63816__$1);
var G__64465 = c__5568__auto__;
var G__64466 = cljs.core.count(c__5568__auto__);
var G__64467 = (0);
seq__63816 = G__64464;
chunk__63817 = G__64465;
count__63818 = G__64466;
i__63819 = G__64467;
continue;
} else {
var vec__63837 = cljs.core.first(seq__63816__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63837,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63837,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__64468 = cljs.core.next(seq__63816__$1);
var G__64469 = null;
var G__64470 = (0);
var G__64471 = (0);
seq__63816 = G__64468;
chunk__63817 = G__64469;
count__63818 = G__64470;
i__63819 = G__64471;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__63843_64472 = key;
var G__63843_64473__$1 = (((G__63843_64472 instanceof cljs.core.Keyword))?G__63843_64472.fqn:null);
switch (G__63843_64473__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_64475 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__5045__auto__ = goog.string.startsWith(ks_64475,"data-");
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return goog.string.startsWith(ks_64475,"aria-");
}
})())){
el.setAttribute(ks_64475,value);
} else {
(el[ks_64475] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__63864){
var map__63865 = p__63864;
var map__63865__$1 = cljs.core.__destructure_map(map__63865);
var props = map__63865__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63865__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__63867 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63867,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63867,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63867,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__63872 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__63872,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__63872;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__63875 = arguments.length;
switch (G__63875) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5804__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5804__auto__)){
var n = temp__5804__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5804__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5804__auto__)){
var n = temp__5804__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__63878){
var vec__63879 = p__63878;
var seq__63880 = cljs.core.seq(vec__63879);
var first__63881 = cljs.core.first(seq__63880);
var seq__63880__$1 = cljs.core.next(seq__63880);
var nn = first__63881;
var first__63881__$1 = cljs.core.first(seq__63880__$1);
var seq__63880__$2 = cljs.core.next(seq__63880__$1);
var np = first__63881__$1;
var nc = seq__63880__$2;
var node = vec__63879;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__63884 = nn;
var G__63885 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__63884,G__63885) : create_fn.call(null,G__63884,G__63885));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__63887 = nn;
var G__63888 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__63887,G__63888) : create_fn.call(null,G__63887,G__63888));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__63892 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63892,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63892,(1),null);
var seq__63897_64480 = cljs.core.seq(node_children);
var chunk__63898_64481 = null;
var count__63899_64482 = (0);
var i__63900_64483 = (0);
while(true){
if((i__63900_64483 < count__63899_64482)){
var child_struct_64484 = chunk__63898_64481.cljs$core$IIndexed$_nth$arity$2(null,i__63900_64483);
var children_64485 = shadow.dom.dom_node(child_struct_64484);
if(cljs.core.seq_QMARK_(children_64485)){
var seq__63936_64486 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_64485));
var chunk__63938_64487 = null;
var count__63939_64488 = (0);
var i__63940_64489 = (0);
while(true){
if((i__63940_64489 < count__63939_64488)){
var child_64490 = chunk__63938_64487.cljs$core$IIndexed$_nth$arity$2(null,i__63940_64489);
if(cljs.core.truth_(child_64490)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_64490);


var G__64491 = seq__63936_64486;
var G__64492 = chunk__63938_64487;
var G__64493 = count__63939_64488;
var G__64494 = (i__63940_64489 + (1));
seq__63936_64486 = G__64491;
chunk__63938_64487 = G__64492;
count__63939_64488 = G__64493;
i__63940_64489 = G__64494;
continue;
} else {
var G__64495 = seq__63936_64486;
var G__64496 = chunk__63938_64487;
var G__64497 = count__63939_64488;
var G__64498 = (i__63940_64489 + (1));
seq__63936_64486 = G__64495;
chunk__63938_64487 = G__64496;
count__63939_64488 = G__64497;
i__63940_64489 = G__64498;
continue;
}
} else {
var temp__5804__auto___64499 = cljs.core.seq(seq__63936_64486);
if(temp__5804__auto___64499){
var seq__63936_64500__$1 = temp__5804__auto___64499;
if(cljs.core.chunked_seq_QMARK_(seq__63936_64500__$1)){
var c__5568__auto___64501 = cljs.core.chunk_first(seq__63936_64500__$1);
var G__64502 = cljs.core.chunk_rest(seq__63936_64500__$1);
var G__64503 = c__5568__auto___64501;
var G__64504 = cljs.core.count(c__5568__auto___64501);
var G__64505 = (0);
seq__63936_64486 = G__64502;
chunk__63938_64487 = G__64503;
count__63939_64488 = G__64504;
i__63940_64489 = G__64505;
continue;
} else {
var child_64506 = cljs.core.first(seq__63936_64500__$1);
if(cljs.core.truth_(child_64506)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_64506);


var G__64507 = cljs.core.next(seq__63936_64500__$1);
var G__64508 = null;
var G__64509 = (0);
var G__64510 = (0);
seq__63936_64486 = G__64507;
chunk__63938_64487 = G__64508;
count__63939_64488 = G__64509;
i__63940_64489 = G__64510;
continue;
} else {
var G__64512 = cljs.core.next(seq__63936_64500__$1);
var G__64513 = null;
var G__64514 = (0);
var G__64515 = (0);
seq__63936_64486 = G__64512;
chunk__63938_64487 = G__64513;
count__63939_64488 = G__64514;
i__63940_64489 = G__64515;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_64485);
}


var G__64516 = seq__63897_64480;
var G__64517 = chunk__63898_64481;
var G__64518 = count__63899_64482;
var G__64519 = (i__63900_64483 + (1));
seq__63897_64480 = G__64516;
chunk__63898_64481 = G__64517;
count__63899_64482 = G__64518;
i__63900_64483 = G__64519;
continue;
} else {
var temp__5804__auto___64520 = cljs.core.seq(seq__63897_64480);
if(temp__5804__auto___64520){
var seq__63897_64521__$1 = temp__5804__auto___64520;
if(cljs.core.chunked_seq_QMARK_(seq__63897_64521__$1)){
var c__5568__auto___64522 = cljs.core.chunk_first(seq__63897_64521__$1);
var G__64523 = cljs.core.chunk_rest(seq__63897_64521__$1);
var G__64524 = c__5568__auto___64522;
var G__64525 = cljs.core.count(c__5568__auto___64522);
var G__64526 = (0);
seq__63897_64480 = G__64523;
chunk__63898_64481 = G__64524;
count__63899_64482 = G__64525;
i__63900_64483 = G__64526;
continue;
} else {
var child_struct_64527 = cljs.core.first(seq__63897_64521__$1);
var children_64528 = shadow.dom.dom_node(child_struct_64527);
if(cljs.core.seq_QMARK_(children_64528)){
var seq__63951_64529 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_64528));
var chunk__63953_64530 = null;
var count__63954_64531 = (0);
var i__63955_64532 = (0);
while(true){
if((i__63955_64532 < count__63954_64531)){
var child_64533 = chunk__63953_64530.cljs$core$IIndexed$_nth$arity$2(null,i__63955_64532);
if(cljs.core.truth_(child_64533)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_64533);


var G__64534 = seq__63951_64529;
var G__64535 = chunk__63953_64530;
var G__64536 = count__63954_64531;
var G__64537 = (i__63955_64532 + (1));
seq__63951_64529 = G__64534;
chunk__63953_64530 = G__64535;
count__63954_64531 = G__64536;
i__63955_64532 = G__64537;
continue;
} else {
var G__64538 = seq__63951_64529;
var G__64539 = chunk__63953_64530;
var G__64540 = count__63954_64531;
var G__64541 = (i__63955_64532 + (1));
seq__63951_64529 = G__64538;
chunk__63953_64530 = G__64539;
count__63954_64531 = G__64540;
i__63955_64532 = G__64541;
continue;
}
} else {
var temp__5804__auto___64544__$1 = cljs.core.seq(seq__63951_64529);
if(temp__5804__auto___64544__$1){
var seq__63951_64545__$1 = temp__5804__auto___64544__$1;
if(cljs.core.chunked_seq_QMARK_(seq__63951_64545__$1)){
var c__5568__auto___64546 = cljs.core.chunk_first(seq__63951_64545__$1);
var G__64547 = cljs.core.chunk_rest(seq__63951_64545__$1);
var G__64548 = c__5568__auto___64546;
var G__64549 = cljs.core.count(c__5568__auto___64546);
var G__64550 = (0);
seq__63951_64529 = G__64547;
chunk__63953_64530 = G__64548;
count__63954_64531 = G__64549;
i__63955_64532 = G__64550;
continue;
} else {
var child_64551 = cljs.core.first(seq__63951_64545__$1);
if(cljs.core.truth_(child_64551)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_64551);


var G__64552 = cljs.core.next(seq__63951_64545__$1);
var G__64553 = null;
var G__64554 = (0);
var G__64555 = (0);
seq__63951_64529 = G__64552;
chunk__63953_64530 = G__64553;
count__63954_64531 = G__64554;
i__63955_64532 = G__64555;
continue;
} else {
var G__64556 = cljs.core.next(seq__63951_64545__$1);
var G__64557 = null;
var G__64558 = (0);
var G__64559 = (0);
seq__63951_64529 = G__64556;
chunk__63953_64530 = G__64557;
count__63954_64531 = G__64558;
i__63955_64532 = G__64559;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_64528);
}


var G__64560 = cljs.core.next(seq__63897_64521__$1);
var G__64561 = null;
var G__64562 = (0);
var G__64563 = (0);
seq__63897_64480 = G__64560;
chunk__63898_64481 = G__64561;
count__63899_64482 = G__64562;
i__63900_64483 = G__64563;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__63982 = cljs.core.seq(node);
var chunk__63983 = null;
var count__63984 = (0);
var i__63985 = (0);
while(true){
if((i__63985 < count__63984)){
var n = chunk__63983.cljs$core$IIndexed$_nth$arity$2(null,i__63985);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__64565 = seq__63982;
var G__64566 = chunk__63983;
var G__64567 = count__63984;
var G__64568 = (i__63985 + (1));
seq__63982 = G__64565;
chunk__63983 = G__64566;
count__63984 = G__64567;
i__63985 = G__64568;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__63982);
if(temp__5804__auto__){
var seq__63982__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__63982__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__63982__$1);
var G__64571 = cljs.core.chunk_rest(seq__63982__$1);
var G__64572 = c__5568__auto__;
var G__64573 = cljs.core.count(c__5568__auto__);
var G__64574 = (0);
seq__63982 = G__64571;
chunk__63983 = G__64572;
count__63984 = G__64573;
i__63985 = G__64574;
continue;
} else {
var n = cljs.core.first(seq__63982__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__64575 = cljs.core.next(seq__63982__$1);
var G__64576 = null;
var G__64577 = (0);
var G__64578 = (0);
seq__63982 = G__64575;
chunk__63983 = G__64576;
count__63984 = G__64577;
i__63985 = G__64578;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__64001 = arguments.length;
switch (G__64001) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__64007 = arguments.length;
switch (G__64007) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__64020 = arguments.length;
switch (G__64020) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__5045__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__5775__auto__ = [];
var len__5769__auto___64585 = arguments.length;
var i__5770__auto___64586 = (0);
while(true){
if((i__5770__auto___64586 < len__5769__auto___64585)){
args__5775__auto__.push((arguments[i__5770__auto___64586]));

var G__64587 = (i__5770__auto___64586 + (1));
i__5770__auto___64586 = G__64587;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__64040_64591 = cljs.core.seq(nodes);
var chunk__64041_64592 = null;
var count__64042_64593 = (0);
var i__64043_64594 = (0);
while(true){
if((i__64043_64594 < count__64042_64593)){
var node_64595 = chunk__64041_64592.cljs$core$IIndexed$_nth$arity$2(null,i__64043_64594);
fragment.appendChild(shadow.dom._to_dom(node_64595));


var G__64596 = seq__64040_64591;
var G__64597 = chunk__64041_64592;
var G__64598 = count__64042_64593;
var G__64599 = (i__64043_64594 + (1));
seq__64040_64591 = G__64596;
chunk__64041_64592 = G__64597;
count__64042_64593 = G__64598;
i__64043_64594 = G__64599;
continue;
} else {
var temp__5804__auto___64600 = cljs.core.seq(seq__64040_64591);
if(temp__5804__auto___64600){
var seq__64040_64601__$1 = temp__5804__auto___64600;
if(cljs.core.chunked_seq_QMARK_(seq__64040_64601__$1)){
var c__5568__auto___64602 = cljs.core.chunk_first(seq__64040_64601__$1);
var G__64603 = cljs.core.chunk_rest(seq__64040_64601__$1);
var G__64604 = c__5568__auto___64602;
var G__64605 = cljs.core.count(c__5568__auto___64602);
var G__64606 = (0);
seq__64040_64591 = G__64603;
chunk__64041_64592 = G__64604;
count__64042_64593 = G__64605;
i__64043_64594 = G__64606;
continue;
} else {
var node_64607 = cljs.core.first(seq__64040_64601__$1);
fragment.appendChild(shadow.dom._to_dom(node_64607));


var G__64608 = cljs.core.next(seq__64040_64601__$1);
var G__64609 = null;
var G__64610 = (0);
var G__64611 = (0);
seq__64040_64591 = G__64608;
chunk__64041_64592 = G__64609;
count__64042_64593 = G__64610;
i__64043_64594 = G__64611;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq64033){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64033));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__64051_64612 = cljs.core.seq(scripts);
var chunk__64052_64613 = null;
var count__64053_64614 = (0);
var i__64054_64615 = (0);
while(true){
if((i__64054_64615 < count__64053_64614)){
var vec__64063_64620 = chunk__64052_64613.cljs$core$IIndexed$_nth$arity$2(null,i__64054_64615);
var script_tag_64621 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64063_64620,(0),null);
var script_body_64622 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64063_64620,(1),null);
eval(script_body_64622);


var G__64623 = seq__64051_64612;
var G__64624 = chunk__64052_64613;
var G__64625 = count__64053_64614;
var G__64626 = (i__64054_64615 + (1));
seq__64051_64612 = G__64623;
chunk__64052_64613 = G__64624;
count__64053_64614 = G__64625;
i__64054_64615 = G__64626;
continue;
} else {
var temp__5804__auto___64627 = cljs.core.seq(seq__64051_64612);
if(temp__5804__auto___64627){
var seq__64051_64628__$1 = temp__5804__auto___64627;
if(cljs.core.chunked_seq_QMARK_(seq__64051_64628__$1)){
var c__5568__auto___64629 = cljs.core.chunk_first(seq__64051_64628__$1);
var G__64630 = cljs.core.chunk_rest(seq__64051_64628__$1);
var G__64631 = c__5568__auto___64629;
var G__64632 = cljs.core.count(c__5568__auto___64629);
var G__64633 = (0);
seq__64051_64612 = G__64630;
chunk__64052_64613 = G__64631;
count__64053_64614 = G__64632;
i__64054_64615 = G__64633;
continue;
} else {
var vec__64067_64634 = cljs.core.first(seq__64051_64628__$1);
var script_tag_64635 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64067_64634,(0),null);
var script_body_64636 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64067_64634,(1),null);
eval(script_body_64636);


var G__64637 = cljs.core.next(seq__64051_64628__$1);
var G__64638 = null;
var G__64639 = (0);
var G__64640 = (0);
seq__64051_64612 = G__64637;
chunk__64052_64613 = G__64638;
count__64053_64614 = G__64639;
i__64054_64615 = G__64640;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__64070){
var vec__64071 = p__64070;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64071,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64071,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__64081 = arguments.length;
switch (G__64081) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__64082 = cljs.core.seq(style_keys);
var chunk__64083 = null;
var count__64084 = (0);
var i__64085 = (0);
while(true){
if((i__64085 < count__64084)){
var it = chunk__64083.cljs$core$IIndexed$_nth$arity$2(null,i__64085);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__64646 = seq__64082;
var G__64647 = chunk__64083;
var G__64648 = count__64084;
var G__64649 = (i__64085 + (1));
seq__64082 = G__64646;
chunk__64083 = G__64647;
count__64084 = G__64648;
i__64085 = G__64649;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__64082);
if(temp__5804__auto__){
var seq__64082__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__64082__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__64082__$1);
var G__64650 = cljs.core.chunk_rest(seq__64082__$1);
var G__64651 = c__5568__auto__;
var G__64652 = cljs.core.count(c__5568__auto__);
var G__64653 = (0);
seq__64082 = G__64650;
chunk__64083 = G__64651;
count__64084 = G__64652;
i__64085 = G__64653;
continue;
} else {
var it = cljs.core.first(seq__64082__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__64654 = cljs.core.next(seq__64082__$1);
var G__64655 = null;
var G__64656 = (0);
var G__64657 = (0);
seq__64082 = G__64654;
chunk__64083 = G__64655;
count__64084 = G__64656;
i__64085 = G__64657;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5343__auto__,k__5344__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return this__5343__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5344__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5345__auto__,k64092,else__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
var G__64101 = k64092;
var G__64101__$1 = (((G__64101 instanceof cljs.core.Keyword))?G__64101.fqn:null);
switch (G__64101__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k64092,else__5346__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5363__auto__,f__5364__auto__,init__5365__auto__){
var self__ = this;
var this__5363__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5366__auto__,p__64104){
var vec__64105 = p__64104;
var k__5367__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64105,(0),null);
var v__5368__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64105,(1),null);
return (f__5364__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5364__auto__.cljs$core$IFn$_invoke$arity$3(ret__5366__auto__,k__5367__auto__,v__5368__auto__) : f__5364__auto__.call(null,ret__5366__auto__,k__5367__auto__,v__5368__auto__));
}),init__5365__auto__,this__5363__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5358__auto__,writer__5359__auto__,opts__5360__auto__){
var self__ = this;
var this__5358__auto____$1 = this;
var pr_pair__5361__auto__ = (function (keyval__5362__auto__){
return cljs.core.pr_sequential_writer(writer__5359__auto__,cljs.core.pr_writer,""," ","",opts__5360__auto__,keyval__5362__auto__);
});
return cljs.core.pr_sequential_writer(writer__5359__auto__,pr_pair__5361__auto__,"#shadow.dom.Coordinate{",", ","}",opts__5360__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__64091){
var self__ = this;
var G__64091__$1 = this;
return (new cljs.core.RecordIter((0),G__64091__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5341__auto__){
var self__ = this;
var this__5341__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5347__auto__){
var self__ = this;
var this__5347__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5339__auto__){
var self__ = this;
var this__5339__auto____$1 = this;
var h__5154__auto__ = self__.__hash;
if((!((h__5154__auto__ == null)))){
return h__5154__auto__;
} else {
var h__5154__auto____$1 = (function (coll__5340__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__5340__auto__));
})(this__5339__auto____$1);
(self__.__hash = h__5154__auto____$1);

return h__5154__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this64093,other64094){
var self__ = this;
var this64093__$1 = this;
return (((!((other64094 == null)))) && ((((this64093__$1.constructor === other64094.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this64093__$1.x,other64094.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this64093__$1.y,other64094.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this64093__$1.__extmap,other64094.__extmap)))))))));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5353__auto__,k__5354__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__5354__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5353__auto____$1),self__.__meta),k__5354__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5354__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5350__auto__,k64092){
var self__ = this;
var this__5350__auto____$1 = this;
var G__64125 = k64092;
var G__64125__$1 = (((G__64125 instanceof cljs.core.Keyword))?G__64125.fqn:null);
switch (G__64125__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k64092);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5351__auto__,k__5352__auto__,G__64091){
var self__ = this;
var this__5351__auto____$1 = this;
var pred__64128 = cljs.core.keyword_identical_QMARK_;
var expr__64129 = k__5352__auto__;
if(cljs.core.truth_((pred__64128.cljs$core$IFn$_invoke$arity$2 ? pred__64128.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__64129) : pred__64128.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__64129)))){
return (new shadow.dom.Coordinate(G__64091,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__64128.cljs$core$IFn$_invoke$arity$2 ? pred__64128.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__64129) : pred__64128.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__64129)))){
return (new shadow.dom.Coordinate(self__.x,G__64091,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5352__auto__,G__64091),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5356__auto__){
var self__ = this;
var this__5356__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5342__auto__,G__64091){
var self__ = this;
var this__5342__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__64091,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5348__auto__,entry__5349__auto__){
var self__ = this;
var this__5348__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5349__auto__)){
return this__5348__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5349__auto__,(0)),cljs.core._nth(entry__5349__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5348__auto____$1,entry__5349__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__5389__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__5389__auto__,writer__5390__auto__){
return cljs.core._write(writer__5390__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__64095){
var extmap__5385__auto__ = (function (){var G__64136 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__64095,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__64095)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__64136);
} else {
return G__64136;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__64095),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__64095),null,cljs.core.not_empty(extmap__5385__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5343__auto__,k__5344__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return this__5343__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5344__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5345__auto__,k64141,else__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
var G__64146 = k64141;
var G__64146__$1 = (((G__64146 instanceof cljs.core.Keyword))?G__64146.fqn:null);
switch (G__64146__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k64141,else__5346__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5363__auto__,f__5364__auto__,init__5365__auto__){
var self__ = this;
var this__5363__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5366__auto__,p__64147){
var vec__64148 = p__64147;
var k__5367__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64148,(0),null);
var v__5368__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64148,(1),null);
return (f__5364__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5364__auto__.cljs$core$IFn$_invoke$arity$3(ret__5366__auto__,k__5367__auto__,v__5368__auto__) : f__5364__auto__.call(null,ret__5366__auto__,k__5367__auto__,v__5368__auto__));
}),init__5365__auto__,this__5363__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5358__auto__,writer__5359__auto__,opts__5360__auto__){
var self__ = this;
var this__5358__auto____$1 = this;
var pr_pair__5361__auto__ = (function (keyval__5362__auto__){
return cljs.core.pr_sequential_writer(writer__5359__auto__,cljs.core.pr_writer,""," ","",opts__5360__auto__,keyval__5362__auto__);
});
return cljs.core.pr_sequential_writer(writer__5359__auto__,pr_pair__5361__auto__,"#shadow.dom.Size{",", ","}",opts__5360__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__64140){
var self__ = this;
var G__64140__$1 = this;
return (new cljs.core.RecordIter((0),G__64140__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5341__auto__){
var self__ = this;
var this__5341__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5347__auto__){
var self__ = this;
var this__5347__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5339__auto__){
var self__ = this;
var this__5339__auto____$1 = this;
var h__5154__auto__ = self__.__hash;
if((!((h__5154__auto__ == null)))){
return h__5154__auto__;
} else {
var h__5154__auto____$1 = (function (coll__5340__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__5340__auto__));
})(this__5339__auto____$1);
(self__.__hash = h__5154__auto____$1);

return h__5154__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this64142,other64143){
var self__ = this;
var this64142__$1 = this;
return (((!((other64143 == null)))) && ((((this64142__$1.constructor === other64143.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this64142__$1.w,other64143.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this64142__$1.h,other64143.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this64142__$1.__extmap,other64143.__extmap)))))))));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5353__auto__,k__5354__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__5354__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5353__auto____$1),self__.__meta),k__5354__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5354__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5350__auto__,k64141){
var self__ = this;
var this__5350__auto____$1 = this;
var G__64162 = k64141;
var G__64162__$1 = (((G__64162 instanceof cljs.core.Keyword))?G__64162.fqn:null);
switch (G__64162__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k64141);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5351__auto__,k__5352__auto__,G__64140){
var self__ = this;
var this__5351__auto____$1 = this;
var pred__64165 = cljs.core.keyword_identical_QMARK_;
var expr__64166 = k__5352__auto__;
if(cljs.core.truth_((pred__64165.cljs$core$IFn$_invoke$arity$2 ? pred__64165.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__64166) : pred__64165.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__64166)))){
return (new shadow.dom.Size(G__64140,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__64165.cljs$core$IFn$_invoke$arity$2 ? pred__64165.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__64166) : pred__64165.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__64166)))){
return (new shadow.dom.Size(self__.w,G__64140,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5352__auto__,G__64140),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5356__auto__){
var self__ = this;
var this__5356__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5342__auto__,G__64140){
var self__ = this;
var this__5342__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__64140,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5348__auto__,entry__5349__auto__){
var self__ = this;
var this__5348__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5349__auto__)){
return this__5348__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5349__auto__,(0)),cljs.core._nth(entry__5349__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5348__auto____$1,entry__5349__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__5389__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__5389__auto__,writer__5390__auto__){
return cljs.core._write(writer__5390__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__64144){
var extmap__5385__auto__ = (function (){var G__64174 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__64144,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__64144)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__64174);
} else {
return G__64174;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__64144),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__64144),null,cljs.core.not_empty(extmap__5385__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__5633__auto__ = opts;
var l__5634__auto__ = a__5633__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__5634__auto__)){
var G__64682 = (i + (1));
var G__64683 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__64682;
ret = G__64683;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__64193){
var vec__64194 = p__64193;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64194,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64194,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__64200 = arguments.length;
switch (G__64200) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5802__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5802__auto__)){
var child = temp__5802__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__64688 = ps;
var G__64689 = (i + (1));
el__$1 = G__64688;
i = G__64689;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__64227 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64227,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64227,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64227,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__64231_64693 = cljs.core.seq(props);
var chunk__64232_64694 = null;
var count__64233_64695 = (0);
var i__64234_64696 = (0);
while(true){
if((i__64234_64696 < count__64233_64695)){
var vec__64249_64697 = chunk__64232_64694.cljs$core$IIndexed$_nth$arity$2(null,i__64234_64696);
var k_64698 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64249_64697,(0),null);
var v_64699 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64249_64697,(1),null);
el.setAttributeNS((function (){var temp__5804__auto__ = cljs.core.namespace(k_64698);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_64698),v_64699);


var G__64700 = seq__64231_64693;
var G__64701 = chunk__64232_64694;
var G__64702 = count__64233_64695;
var G__64703 = (i__64234_64696 + (1));
seq__64231_64693 = G__64700;
chunk__64232_64694 = G__64701;
count__64233_64695 = G__64702;
i__64234_64696 = G__64703;
continue;
} else {
var temp__5804__auto___64704 = cljs.core.seq(seq__64231_64693);
if(temp__5804__auto___64704){
var seq__64231_64705__$1 = temp__5804__auto___64704;
if(cljs.core.chunked_seq_QMARK_(seq__64231_64705__$1)){
var c__5568__auto___64706 = cljs.core.chunk_first(seq__64231_64705__$1);
var G__64707 = cljs.core.chunk_rest(seq__64231_64705__$1);
var G__64708 = c__5568__auto___64706;
var G__64709 = cljs.core.count(c__5568__auto___64706);
var G__64710 = (0);
seq__64231_64693 = G__64707;
chunk__64232_64694 = G__64708;
count__64233_64695 = G__64709;
i__64234_64696 = G__64710;
continue;
} else {
var vec__64255_64711 = cljs.core.first(seq__64231_64705__$1);
var k_64712 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64255_64711,(0),null);
var v_64713 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64255_64711,(1),null);
el.setAttributeNS((function (){var temp__5804__auto____$1 = cljs.core.namespace(k_64712);
if(cljs.core.truth_(temp__5804__auto____$1)){
var ns = temp__5804__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_64712),v_64713);


var G__64717 = cljs.core.next(seq__64231_64705__$1);
var G__64718 = null;
var G__64719 = (0);
var G__64720 = (0);
seq__64231_64693 = G__64717;
chunk__64232_64694 = G__64718;
count__64233_64695 = G__64719;
i__64234_64696 = G__64720;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__64267 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64267,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64267,(1),null);
var seq__64271_64721 = cljs.core.seq(node_children);
var chunk__64273_64722 = null;
var count__64274_64723 = (0);
var i__64275_64724 = (0);
while(true){
if((i__64275_64724 < count__64274_64723)){
var child_struct_64725 = chunk__64273_64722.cljs$core$IIndexed$_nth$arity$2(null,i__64275_64724);
if((!((child_struct_64725 == null)))){
if(typeof child_struct_64725 === 'string'){
var text_64726 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_64726),child_struct_64725].join(''));
} else {
var children_64727 = shadow.dom.svg_node(child_struct_64725);
if(cljs.core.seq_QMARK_(children_64727)){
var seq__64293_64728 = cljs.core.seq(children_64727);
var chunk__64295_64729 = null;
var count__64296_64730 = (0);
var i__64297_64731 = (0);
while(true){
if((i__64297_64731 < count__64296_64730)){
var child_64732 = chunk__64295_64729.cljs$core$IIndexed$_nth$arity$2(null,i__64297_64731);
if(cljs.core.truth_(child_64732)){
node.appendChild(child_64732);


var G__64733 = seq__64293_64728;
var G__64734 = chunk__64295_64729;
var G__64735 = count__64296_64730;
var G__64736 = (i__64297_64731 + (1));
seq__64293_64728 = G__64733;
chunk__64295_64729 = G__64734;
count__64296_64730 = G__64735;
i__64297_64731 = G__64736;
continue;
} else {
var G__64737 = seq__64293_64728;
var G__64738 = chunk__64295_64729;
var G__64739 = count__64296_64730;
var G__64740 = (i__64297_64731 + (1));
seq__64293_64728 = G__64737;
chunk__64295_64729 = G__64738;
count__64296_64730 = G__64739;
i__64297_64731 = G__64740;
continue;
}
} else {
var temp__5804__auto___64741 = cljs.core.seq(seq__64293_64728);
if(temp__5804__auto___64741){
var seq__64293_64742__$1 = temp__5804__auto___64741;
if(cljs.core.chunked_seq_QMARK_(seq__64293_64742__$1)){
var c__5568__auto___64743 = cljs.core.chunk_first(seq__64293_64742__$1);
var G__64744 = cljs.core.chunk_rest(seq__64293_64742__$1);
var G__64745 = c__5568__auto___64743;
var G__64746 = cljs.core.count(c__5568__auto___64743);
var G__64747 = (0);
seq__64293_64728 = G__64744;
chunk__64295_64729 = G__64745;
count__64296_64730 = G__64746;
i__64297_64731 = G__64747;
continue;
} else {
var child_64749 = cljs.core.first(seq__64293_64742__$1);
if(cljs.core.truth_(child_64749)){
node.appendChild(child_64749);


var G__64753 = cljs.core.next(seq__64293_64742__$1);
var G__64754 = null;
var G__64755 = (0);
var G__64756 = (0);
seq__64293_64728 = G__64753;
chunk__64295_64729 = G__64754;
count__64296_64730 = G__64755;
i__64297_64731 = G__64756;
continue;
} else {
var G__64757 = cljs.core.next(seq__64293_64742__$1);
var G__64758 = null;
var G__64759 = (0);
var G__64760 = (0);
seq__64293_64728 = G__64757;
chunk__64295_64729 = G__64758;
count__64296_64730 = G__64759;
i__64297_64731 = G__64760;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_64727);
}
}


var G__64761 = seq__64271_64721;
var G__64762 = chunk__64273_64722;
var G__64763 = count__64274_64723;
var G__64764 = (i__64275_64724 + (1));
seq__64271_64721 = G__64761;
chunk__64273_64722 = G__64762;
count__64274_64723 = G__64763;
i__64275_64724 = G__64764;
continue;
} else {
var G__64765 = seq__64271_64721;
var G__64766 = chunk__64273_64722;
var G__64767 = count__64274_64723;
var G__64768 = (i__64275_64724 + (1));
seq__64271_64721 = G__64765;
chunk__64273_64722 = G__64766;
count__64274_64723 = G__64767;
i__64275_64724 = G__64768;
continue;
}
} else {
var temp__5804__auto___64769 = cljs.core.seq(seq__64271_64721);
if(temp__5804__auto___64769){
var seq__64271_64770__$1 = temp__5804__auto___64769;
if(cljs.core.chunked_seq_QMARK_(seq__64271_64770__$1)){
var c__5568__auto___64771 = cljs.core.chunk_first(seq__64271_64770__$1);
var G__64772 = cljs.core.chunk_rest(seq__64271_64770__$1);
var G__64773 = c__5568__auto___64771;
var G__64774 = cljs.core.count(c__5568__auto___64771);
var G__64775 = (0);
seq__64271_64721 = G__64772;
chunk__64273_64722 = G__64773;
count__64274_64723 = G__64774;
i__64275_64724 = G__64775;
continue;
} else {
var child_struct_64776 = cljs.core.first(seq__64271_64770__$1);
if((!((child_struct_64776 == null)))){
if(typeof child_struct_64776 === 'string'){
var text_64777 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_64777),child_struct_64776].join(''));
} else {
var children_64778 = shadow.dom.svg_node(child_struct_64776);
if(cljs.core.seq_QMARK_(children_64778)){
var seq__64303_64779 = cljs.core.seq(children_64778);
var chunk__64305_64780 = null;
var count__64306_64781 = (0);
var i__64307_64782 = (0);
while(true){
if((i__64307_64782 < count__64306_64781)){
var child_64783 = chunk__64305_64780.cljs$core$IIndexed$_nth$arity$2(null,i__64307_64782);
if(cljs.core.truth_(child_64783)){
node.appendChild(child_64783);


var G__64784 = seq__64303_64779;
var G__64785 = chunk__64305_64780;
var G__64786 = count__64306_64781;
var G__64787 = (i__64307_64782 + (1));
seq__64303_64779 = G__64784;
chunk__64305_64780 = G__64785;
count__64306_64781 = G__64786;
i__64307_64782 = G__64787;
continue;
} else {
var G__64788 = seq__64303_64779;
var G__64789 = chunk__64305_64780;
var G__64790 = count__64306_64781;
var G__64791 = (i__64307_64782 + (1));
seq__64303_64779 = G__64788;
chunk__64305_64780 = G__64789;
count__64306_64781 = G__64790;
i__64307_64782 = G__64791;
continue;
}
} else {
var temp__5804__auto___64792__$1 = cljs.core.seq(seq__64303_64779);
if(temp__5804__auto___64792__$1){
var seq__64303_64793__$1 = temp__5804__auto___64792__$1;
if(cljs.core.chunked_seq_QMARK_(seq__64303_64793__$1)){
var c__5568__auto___64794 = cljs.core.chunk_first(seq__64303_64793__$1);
var G__64795 = cljs.core.chunk_rest(seq__64303_64793__$1);
var G__64796 = c__5568__auto___64794;
var G__64797 = cljs.core.count(c__5568__auto___64794);
var G__64798 = (0);
seq__64303_64779 = G__64795;
chunk__64305_64780 = G__64796;
count__64306_64781 = G__64797;
i__64307_64782 = G__64798;
continue;
} else {
var child_64799 = cljs.core.first(seq__64303_64793__$1);
if(cljs.core.truth_(child_64799)){
node.appendChild(child_64799);


var G__64800 = cljs.core.next(seq__64303_64793__$1);
var G__64801 = null;
var G__64802 = (0);
var G__64803 = (0);
seq__64303_64779 = G__64800;
chunk__64305_64780 = G__64801;
count__64306_64781 = G__64802;
i__64307_64782 = G__64803;
continue;
} else {
var G__64804 = cljs.core.next(seq__64303_64793__$1);
var G__64805 = null;
var G__64806 = (0);
var G__64807 = (0);
seq__64303_64779 = G__64804;
chunk__64305_64780 = G__64805;
count__64306_64781 = G__64806;
i__64307_64782 = G__64807;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_64778);
}
}


var G__64808 = cljs.core.next(seq__64271_64770__$1);
var G__64809 = null;
var G__64810 = (0);
var G__64811 = (0);
seq__64271_64721 = G__64808;
chunk__64273_64722 = G__64809;
count__64274_64723 = G__64810;
i__64275_64724 = G__64811;
continue;
} else {
var G__64812 = cljs.core.next(seq__64271_64770__$1);
var G__64813 = null;
var G__64814 = (0);
var G__64815 = (0);
seq__64271_64721 = G__64812;
chunk__64273_64722 = G__64813;
count__64274_64723 = G__64814;
i__64275_64724 = G__64815;
continue;
}
}
} else {
}
}
break;
}

return node;
});
(shadow.dom.SVGElement["string"] = true);

(shadow.dom._to_svg["string"] = (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

(shadow.dom.SVGElement["null"] = true);

(shadow.dom._to_svg["null"] = (function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__5775__auto__ = [];
var len__5769__auto___64816 = arguments.length;
var i__5770__auto___64817 = (0);
while(true){
if((i__5770__auto___64817 < len__5769__auto___64816)){
args__5775__auto__.push((arguments[i__5770__auto___64817]));

var G__64818 = (i__5770__auto___64817 + (1));
i__5770__auto___64817 = G__64818;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq64323){
var G__64324 = cljs.core.first(seq64323);
var seq64323__$1 = cljs.core.next(seq64323);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__64324,seq64323__$1);
}));

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__64340 = arguments.length;
switch (G__64340) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});
shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(event),event_fn);

if(cljs.core.truth_((function (){var and__5043__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__5043__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__5043__auto__;
}
})())){
var c__56249__auto___64822 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__56250__auto__ = (function (){var switch__56226__auto__ = (function (state_64359){
var state_val_64360 = (state_64359[(1)]);
if((state_val_64360 === (1))){
var state_64359__$1 = state_64359;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_64359__$1,(2),once_or_cleanup);
} else {
if((state_val_64360 === (2))){
var inst_64356 = (state_64359[(2)]);
var inst_64357 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_64359__$1 = (function (){var statearr_64367 = state_64359;
(statearr_64367[(7)] = inst_64356);

return statearr_64367;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_64359__$1,inst_64357);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__56227__auto__ = null;
var shadow$dom$state_machine__56227__auto____0 = (function (){
var statearr_64368 = [null,null,null,null,null,null,null,null];
(statearr_64368[(0)] = shadow$dom$state_machine__56227__auto__);

(statearr_64368[(1)] = (1));

return statearr_64368;
});
var shadow$dom$state_machine__56227__auto____1 = (function (state_64359){
while(true){
var ret_value__56228__auto__ = (function (){try{while(true){
var result__56229__auto__ = switch__56226__auto__(state_64359);
if(cljs.core.keyword_identical_QMARK_(result__56229__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__56229__auto__;
}
break;
}
}catch (e64370){var ex__56230__auto__ = e64370;
var statearr_64371_64824 = state_64359;
(statearr_64371_64824[(2)] = ex__56230__auto__);


if(cljs.core.seq((state_64359[(4)]))){
var statearr_64372_64825 = state_64359;
(statearr_64372_64825[(1)] = cljs.core.first((state_64359[(4)])));

} else {
throw ex__56230__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__56228__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__64826 = state_64359;
state_64359 = G__64826;
continue;
} else {
return ret_value__56228__auto__;
}
break;
}
});
shadow$dom$state_machine__56227__auto__ = function(state_64359){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__56227__auto____0.call(this);
case 1:
return shadow$dom$state_machine__56227__auto____1.call(this,state_64359);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__56227__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__56227__auto____0;
shadow$dom$state_machine__56227__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__56227__auto____1;
return shadow$dom$state_machine__56227__auto__;
})()
})();
var state__56251__auto__ = (function (){var statearr_64377 = f__56250__auto__();
(statearr_64377[(6)] = c__56249__auto___64822);

return statearr_64377;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__56251__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
