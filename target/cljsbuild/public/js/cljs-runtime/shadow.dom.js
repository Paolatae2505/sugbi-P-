goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_65327 = (function (this$){
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
return shadow$dom$IElement$_to_dom$dyn_65327(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_65328 = (function (this$){
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
return shadow$dom$SVGElement$_to_svg$dyn_65328(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__64782 = coll;
var G__64783 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__64782,G__64783) : shadow.dom.lazy_native_coll_seq.call(null,G__64782,G__64783));
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
var G__64827 = arguments.length;
switch (G__64827) {
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
var G__64842 = arguments.length;
switch (G__64842) {
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
var G__64846 = arguments.length;
switch (G__64846) {
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
var G__64864 = arguments.length;
switch (G__64864) {
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
var G__64900 = arguments.length;
switch (G__64900) {
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
var G__64907 = arguments.length;
switch (G__64907) {
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
}catch (e64915){if((e64915 instanceof Object)){
var e = e64915;
return console.log("didnt support attachEvent",el,e);
} else {
throw e64915;

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
var seq__64918 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__64919 = null;
var count__64920 = (0);
var i__64921 = (0);
while(true){
if((i__64921 < count__64920)){
var el = chunk__64919.cljs$core$IIndexed$_nth$arity$2(null,i__64921);
var handler_65335__$1 = ((function (seq__64918,chunk__64919,count__64920,i__64921,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__64918,chunk__64919,count__64920,i__64921,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_65335__$1);


var G__65336 = seq__64918;
var G__65337 = chunk__64919;
var G__65338 = count__64920;
var G__65339 = (i__64921 + (1));
seq__64918 = G__65336;
chunk__64919 = G__65337;
count__64920 = G__65338;
i__64921 = G__65339;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__64918);
if(temp__5804__auto__){
var seq__64918__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__64918__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__64918__$1);
var G__65340 = cljs.core.chunk_rest(seq__64918__$1);
var G__65341 = c__5568__auto__;
var G__65342 = cljs.core.count(c__5568__auto__);
var G__65343 = (0);
seq__64918 = G__65340;
chunk__64919 = G__65341;
count__64920 = G__65342;
i__64921 = G__65343;
continue;
} else {
var el = cljs.core.first(seq__64918__$1);
var handler_65344__$1 = ((function (seq__64918,chunk__64919,count__64920,i__64921,el,seq__64918__$1,temp__5804__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__64918,chunk__64919,count__64920,i__64921,el,seq__64918__$1,temp__5804__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_65344__$1);


var G__65345 = cljs.core.next(seq__64918__$1);
var G__65346 = null;
var G__65347 = (0);
var G__65348 = (0);
seq__64918 = G__65345;
chunk__64919 = G__65346;
count__64920 = G__65347;
i__64921 = G__65348;
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
var G__64926 = arguments.length;
switch (G__64926) {
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
var seq__64927 = cljs.core.seq(events);
var chunk__64928 = null;
var count__64929 = (0);
var i__64930 = (0);
while(true){
if((i__64930 < count__64929)){
var vec__64937 = chunk__64928.cljs$core$IIndexed$_nth$arity$2(null,i__64930);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64937,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64937,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__65350 = seq__64927;
var G__65351 = chunk__64928;
var G__65352 = count__64929;
var G__65353 = (i__64930 + (1));
seq__64927 = G__65350;
chunk__64928 = G__65351;
count__64929 = G__65352;
i__64930 = G__65353;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__64927);
if(temp__5804__auto__){
var seq__64927__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__64927__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__64927__$1);
var G__65354 = cljs.core.chunk_rest(seq__64927__$1);
var G__65355 = c__5568__auto__;
var G__65356 = cljs.core.count(c__5568__auto__);
var G__65357 = (0);
seq__64927 = G__65354;
chunk__64928 = G__65355;
count__64929 = G__65356;
i__64930 = G__65357;
continue;
} else {
var vec__64940 = cljs.core.first(seq__64927__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64940,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64940,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__65358 = cljs.core.next(seq__64927__$1);
var G__65359 = null;
var G__65360 = (0);
var G__65361 = (0);
seq__64927 = G__65358;
chunk__64928 = G__65359;
count__64929 = G__65360;
i__64930 = G__65361;
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
var seq__64943 = cljs.core.seq(styles);
var chunk__64944 = null;
var count__64945 = (0);
var i__64946 = (0);
while(true){
if((i__64946 < count__64945)){
var vec__64953 = chunk__64944.cljs$core$IIndexed$_nth$arity$2(null,i__64946);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64953,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64953,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__65362 = seq__64943;
var G__65363 = chunk__64944;
var G__65364 = count__64945;
var G__65365 = (i__64946 + (1));
seq__64943 = G__65362;
chunk__64944 = G__65363;
count__64945 = G__65364;
i__64946 = G__65365;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__64943);
if(temp__5804__auto__){
var seq__64943__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__64943__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__64943__$1);
var G__65366 = cljs.core.chunk_rest(seq__64943__$1);
var G__65367 = c__5568__auto__;
var G__65368 = cljs.core.count(c__5568__auto__);
var G__65369 = (0);
seq__64943 = G__65366;
chunk__64944 = G__65367;
count__64945 = G__65368;
i__64946 = G__65369;
continue;
} else {
var vec__64956 = cljs.core.first(seq__64943__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64956,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64956,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__65370 = cljs.core.next(seq__64943__$1);
var G__65371 = null;
var G__65372 = (0);
var G__65373 = (0);
seq__64943 = G__65370;
chunk__64944 = G__65371;
count__64945 = G__65372;
i__64946 = G__65373;
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
var G__64959_65375 = key;
var G__64959_65376__$1 = (((G__64959_65375 instanceof cljs.core.Keyword))?G__64959_65375.fqn:null);
switch (G__64959_65376__$1) {
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
var ks_65379 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__5045__auto__ = goog.string.startsWith(ks_65379,"data-");
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return goog.string.startsWith(ks_65379,"aria-");
}
})())){
el.setAttribute(ks_65379,value);
} else {
(el[ks_65379] = value);
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
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__64968){
var map__64969 = p__64968;
var map__64969__$1 = cljs.core.__destructure_map(map__64969);
var props = map__64969__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64969__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__64970 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64970,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64970,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64970,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__64981 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__64981,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__64981;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__64983 = arguments.length;
switch (G__64983) {
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

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__64990){
var vec__64991 = p__64990;
var seq__64992 = cljs.core.seq(vec__64991);
var first__64993 = cljs.core.first(seq__64992);
var seq__64992__$1 = cljs.core.next(seq__64992);
var nn = first__64993;
var first__64993__$1 = cljs.core.first(seq__64992__$1);
var seq__64992__$2 = cljs.core.next(seq__64992__$1);
var np = first__64993__$1;
var nc = seq__64992__$2;
var node = vec__64991;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__64994 = nn;
var G__64995 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__64994,G__64995) : create_fn.call(null,G__64994,G__64995));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__64996 = nn;
var G__64997 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__64996,G__64997) : create_fn.call(null,G__64996,G__64997));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__64998 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64998,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64998,(1),null);
var seq__65001_65382 = cljs.core.seq(node_children);
var chunk__65002_65383 = null;
var count__65003_65384 = (0);
var i__65004_65385 = (0);
while(true){
if((i__65004_65385 < count__65003_65384)){
var child_struct_65386 = chunk__65002_65383.cljs$core$IIndexed$_nth$arity$2(null,i__65004_65385);
var children_65387 = shadow.dom.dom_node(child_struct_65386);
if(cljs.core.seq_QMARK_(children_65387)){
var seq__65017_65388 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_65387));
var chunk__65019_65389 = null;
var count__65020_65390 = (0);
var i__65021_65391 = (0);
while(true){
if((i__65021_65391 < count__65020_65390)){
var child_65392 = chunk__65019_65389.cljs$core$IIndexed$_nth$arity$2(null,i__65021_65391);
if(cljs.core.truth_(child_65392)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_65392);


var G__65393 = seq__65017_65388;
var G__65394 = chunk__65019_65389;
var G__65395 = count__65020_65390;
var G__65396 = (i__65021_65391 + (1));
seq__65017_65388 = G__65393;
chunk__65019_65389 = G__65394;
count__65020_65390 = G__65395;
i__65021_65391 = G__65396;
continue;
} else {
var G__65398 = seq__65017_65388;
var G__65399 = chunk__65019_65389;
var G__65400 = count__65020_65390;
var G__65401 = (i__65021_65391 + (1));
seq__65017_65388 = G__65398;
chunk__65019_65389 = G__65399;
count__65020_65390 = G__65400;
i__65021_65391 = G__65401;
continue;
}
} else {
var temp__5804__auto___65402 = cljs.core.seq(seq__65017_65388);
if(temp__5804__auto___65402){
var seq__65017_65403__$1 = temp__5804__auto___65402;
if(cljs.core.chunked_seq_QMARK_(seq__65017_65403__$1)){
var c__5568__auto___65404 = cljs.core.chunk_first(seq__65017_65403__$1);
var G__65405 = cljs.core.chunk_rest(seq__65017_65403__$1);
var G__65406 = c__5568__auto___65404;
var G__65407 = cljs.core.count(c__5568__auto___65404);
var G__65408 = (0);
seq__65017_65388 = G__65405;
chunk__65019_65389 = G__65406;
count__65020_65390 = G__65407;
i__65021_65391 = G__65408;
continue;
} else {
var child_65409 = cljs.core.first(seq__65017_65403__$1);
if(cljs.core.truth_(child_65409)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_65409);


var G__65410 = cljs.core.next(seq__65017_65403__$1);
var G__65411 = null;
var G__65412 = (0);
var G__65413 = (0);
seq__65017_65388 = G__65410;
chunk__65019_65389 = G__65411;
count__65020_65390 = G__65412;
i__65021_65391 = G__65413;
continue;
} else {
var G__65414 = cljs.core.next(seq__65017_65403__$1);
var G__65415 = null;
var G__65416 = (0);
var G__65417 = (0);
seq__65017_65388 = G__65414;
chunk__65019_65389 = G__65415;
count__65020_65390 = G__65416;
i__65021_65391 = G__65417;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_65387);
}


var G__65418 = seq__65001_65382;
var G__65419 = chunk__65002_65383;
var G__65420 = count__65003_65384;
var G__65421 = (i__65004_65385 + (1));
seq__65001_65382 = G__65418;
chunk__65002_65383 = G__65419;
count__65003_65384 = G__65420;
i__65004_65385 = G__65421;
continue;
} else {
var temp__5804__auto___65423 = cljs.core.seq(seq__65001_65382);
if(temp__5804__auto___65423){
var seq__65001_65424__$1 = temp__5804__auto___65423;
if(cljs.core.chunked_seq_QMARK_(seq__65001_65424__$1)){
var c__5568__auto___65425 = cljs.core.chunk_first(seq__65001_65424__$1);
var G__65426 = cljs.core.chunk_rest(seq__65001_65424__$1);
var G__65427 = c__5568__auto___65425;
var G__65428 = cljs.core.count(c__5568__auto___65425);
var G__65429 = (0);
seq__65001_65382 = G__65426;
chunk__65002_65383 = G__65427;
count__65003_65384 = G__65428;
i__65004_65385 = G__65429;
continue;
} else {
var child_struct_65430 = cljs.core.first(seq__65001_65424__$1);
var children_65431 = shadow.dom.dom_node(child_struct_65430);
if(cljs.core.seq_QMARK_(children_65431)){
var seq__65023_65432 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_65431));
var chunk__65025_65433 = null;
var count__65026_65434 = (0);
var i__65027_65435 = (0);
while(true){
if((i__65027_65435 < count__65026_65434)){
var child_65436 = chunk__65025_65433.cljs$core$IIndexed$_nth$arity$2(null,i__65027_65435);
if(cljs.core.truth_(child_65436)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_65436);


var G__65437 = seq__65023_65432;
var G__65438 = chunk__65025_65433;
var G__65439 = count__65026_65434;
var G__65440 = (i__65027_65435 + (1));
seq__65023_65432 = G__65437;
chunk__65025_65433 = G__65438;
count__65026_65434 = G__65439;
i__65027_65435 = G__65440;
continue;
} else {
var G__65441 = seq__65023_65432;
var G__65442 = chunk__65025_65433;
var G__65443 = count__65026_65434;
var G__65444 = (i__65027_65435 + (1));
seq__65023_65432 = G__65441;
chunk__65025_65433 = G__65442;
count__65026_65434 = G__65443;
i__65027_65435 = G__65444;
continue;
}
} else {
var temp__5804__auto___65445__$1 = cljs.core.seq(seq__65023_65432);
if(temp__5804__auto___65445__$1){
var seq__65023_65446__$1 = temp__5804__auto___65445__$1;
if(cljs.core.chunked_seq_QMARK_(seq__65023_65446__$1)){
var c__5568__auto___65447 = cljs.core.chunk_first(seq__65023_65446__$1);
var G__65448 = cljs.core.chunk_rest(seq__65023_65446__$1);
var G__65449 = c__5568__auto___65447;
var G__65450 = cljs.core.count(c__5568__auto___65447);
var G__65451 = (0);
seq__65023_65432 = G__65448;
chunk__65025_65433 = G__65449;
count__65026_65434 = G__65450;
i__65027_65435 = G__65451;
continue;
} else {
var child_65452 = cljs.core.first(seq__65023_65446__$1);
if(cljs.core.truth_(child_65452)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_65452);


var G__65453 = cljs.core.next(seq__65023_65446__$1);
var G__65454 = null;
var G__65455 = (0);
var G__65456 = (0);
seq__65023_65432 = G__65453;
chunk__65025_65433 = G__65454;
count__65026_65434 = G__65455;
i__65027_65435 = G__65456;
continue;
} else {
var G__65457 = cljs.core.next(seq__65023_65446__$1);
var G__65458 = null;
var G__65459 = (0);
var G__65460 = (0);
seq__65023_65432 = G__65457;
chunk__65025_65433 = G__65458;
count__65026_65434 = G__65459;
i__65027_65435 = G__65460;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_65431);
}


var G__65461 = cljs.core.next(seq__65001_65424__$1);
var G__65462 = null;
var G__65463 = (0);
var G__65464 = (0);
seq__65001_65382 = G__65461;
chunk__65002_65383 = G__65462;
count__65003_65384 = G__65463;
i__65004_65385 = G__65464;
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
var seq__65030 = cljs.core.seq(node);
var chunk__65031 = null;
var count__65032 = (0);
var i__65033 = (0);
while(true){
if((i__65033 < count__65032)){
var n = chunk__65031.cljs$core$IIndexed$_nth$arity$2(null,i__65033);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__65465 = seq__65030;
var G__65466 = chunk__65031;
var G__65467 = count__65032;
var G__65468 = (i__65033 + (1));
seq__65030 = G__65465;
chunk__65031 = G__65466;
count__65032 = G__65467;
i__65033 = G__65468;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__65030);
if(temp__5804__auto__){
var seq__65030__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__65030__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__65030__$1);
var G__65469 = cljs.core.chunk_rest(seq__65030__$1);
var G__65470 = c__5568__auto__;
var G__65471 = cljs.core.count(c__5568__auto__);
var G__65472 = (0);
seq__65030 = G__65469;
chunk__65031 = G__65470;
count__65032 = G__65471;
i__65033 = G__65472;
continue;
} else {
var n = cljs.core.first(seq__65030__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__65474 = cljs.core.next(seq__65030__$1);
var G__65475 = null;
var G__65476 = (0);
var G__65477 = (0);
seq__65030 = G__65474;
chunk__65031 = G__65475;
count__65032 = G__65476;
i__65033 = G__65477;
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
var G__65035 = arguments.length;
switch (G__65035) {
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
var G__65037 = arguments.length;
switch (G__65037) {
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
var G__65039 = arguments.length;
switch (G__65039) {
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
var len__5769__auto___65484 = arguments.length;
var i__5770__auto___65485 = (0);
while(true){
if((i__5770__auto___65485 < len__5769__auto___65484)){
args__5775__auto__.push((arguments[i__5770__auto___65485]));

var G__65486 = (i__5770__auto___65485 + (1));
i__5770__auto___65485 = G__65486;
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
var seq__65045_65489 = cljs.core.seq(nodes);
var chunk__65046_65490 = null;
var count__65047_65491 = (0);
var i__65048_65492 = (0);
while(true){
if((i__65048_65492 < count__65047_65491)){
var node_65493 = chunk__65046_65490.cljs$core$IIndexed$_nth$arity$2(null,i__65048_65492);
fragment.appendChild(shadow.dom._to_dom(node_65493));


var G__65494 = seq__65045_65489;
var G__65495 = chunk__65046_65490;
var G__65496 = count__65047_65491;
var G__65497 = (i__65048_65492 + (1));
seq__65045_65489 = G__65494;
chunk__65046_65490 = G__65495;
count__65047_65491 = G__65496;
i__65048_65492 = G__65497;
continue;
} else {
var temp__5804__auto___65498 = cljs.core.seq(seq__65045_65489);
if(temp__5804__auto___65498){
var seq__65045_65499__$1 = temp__5804__auto___65498;
if(cljs.core.chunked_seq_QMARK_(seq__65045_65499__$1)){
var c__5568__auto___65500 = cljs.core.chunk_first(seq__65045_65499__$1);
var G__65501 = cljs.core.chunk_rest(seq__65045_65499__$1);
var G__65502 = c__5568__auto___65500;
var G__65503 = cljs.core.count(c__5568__auto___65500);
var G__65504 = (0);
seq__65045_65489 = G__65501;
chunk__65046_65490 = G__65502;
count__65047_65491 = G__65503;
i__65048_65492 = G__65504;
continue;
} else {
var node_65506 = cljs.core.first(seq__65045_65499__$1);
fragment.appendChild(shadow.dom._to_dom(node_65506));


var G__65507 = cljs.core.next(seq__65045_65499__$1);
var G__65508 = null;
var G__65509 = (0);
var G__65510 = (0);
seq__65045_65489 = G__65507;
chunk__65046_65490 = G__65508;
count__65047_65491 = G__65509;
i__65048_65492 = G__65510;
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
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq65044){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65044));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__65051_65513 = cljs.core.seq(scripts);
var chunk__65052_65514 = null;
var count__65053_65515 = (0);
var i__65054_65516 = (0);
while(true){
if((i__65054_65516 < count__65053_65515)){
var vec__65061_65517 = chunk__65052_65514.cljs$core$IIndexed$_nth$arity$2(null,i__65054_65516);
var script_tag_65518 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65061_65517,(0),null);
var script_body_65519 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65061_65517,(1),null);
eval(script_body_65519);


var G__65520 = seq__65051_65513;
var G__65521 = chunk__65052_65514;
var G__65522 = count__65053_65515;
var G__65523 = (i__65054_65516 + (1));
seq__65051_65513 = G__65520;
chunk__65052_65514 = G__65521;
count__65053_65515 = G__65522;
i__65054_65516 = G__65523;
continue;
} else {
var temp__5804__auto___65524 = cljs.core.seq(seq__65051_65513);
if(temp__5804__auto___65524){
var seq__65051_65525__$1 = temp__5804__auto___65524;
if(cljs.core.chunked_seq_QMARK_(seq__65051_65525__$1)){
var c__5568__auto___65526 = cljs.core.chunk_first(seq__65051_65525__$1);
var G__65527 = cljs.core.chunk_rest(seq__65051_65525__$1);
var G__65528 = c__5568__auto___65526;
var G__65529 = cljs.core.count(c__5568__auto___65526);
var G__65530 = (0);
seq__65051_65513 = G__65527;
chunk__65052_65514 = G__65528;
count__65053_65515 = G__65529;
i__65054_65516 = G__65530;
continue;
} else {
var vec__65064_65531 = cljs.core.first(seq__65051_65525__$1);
var script_tag_65532 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65064_65531,(0),null);
var script_body_65533 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65064_65531,(1),null);
eval(script_body_65533);


var G__65534 = cljs.core.next(seq__65051_65525__$1);
var G__65535 = null;
var G__65536 = (0);
var G__65537 = (0);
seq__65051_65513 = G__65534;
chunk__65052_65514 = G__65535;
count__65053_65515 = G__65536;
i__65054_65516 = G__65537;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__65067){
var vec__65068 = p__65067;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65068,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65068,(1),null);
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
var G__65072 = arguments.length;
switch (G__65072) {
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
var seq__65077 = cljs.core.seq(style_keys);
var chunk__65078 = null;
var count__65079 = (0);
var i__65080 = (0);
while(true){
if((i__65080 < count__65079)){
var it = chunk__65078.cljs$core$IIndexed$_nth$arity$2(null,i__65080);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__65542 = seq__65077;
var G__65543 = chunk__65078;
var G__65544 = count__65079;
var G__65545 = (i__65080 + (1));
seq__65077 = G__65542;
chunk__65078 = G__65543;
count__65079 = G__65544;
i__65080 = G__65545;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__65077);
if(temp__5804__auto__){
var seq__65077__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__65077__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__65077__$1);
var G__65546 = cljs.core.chunk_rest(seq__65077__$1);
var G__65547 = c__5568__auto__;
var G__65548 = cljs.core.count(c__5568__auto__);
var G__65549 = (0);
seq__65077 = G__65546;
chunk__65078 = G__65547;
count__65079 = G__65548;
i__65080 = G__65549;
continue;
} else {
var it = cljs.core.first(seq__65077__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__65550 = cljs.core.next(seq__65077__$1);
var G__65551 = null;
var G__65552 = (0);
var G__65553 = (0);
seq__65077 = G__65550;
chunk__65078 = G__65551;
count__65079 = G__65552;
i__65080 = G__65553;
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

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5345__auto__,k65086,else__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
var G__65094 = k65086;
var G__65094__$1 = (((G__65094 instanceof cljs.core.Keyword))?G__65094.fqn:null);
switch (G__65094__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k65086,else__5346__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5363__auto__,f__5364__auto__,init__5365__auto__){
var self__ = this;
var this__5363__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5366__auto__,p__65095){
var vec__65096 = p__65095;
var k__5367__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65096,(0),null);
var v__5368__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65096,(1),null);
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

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__65085){
var self__ = this;
var G__65085__$1 = this;
return (new cljs.core.RecordIter((0),G__65085__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this65087,other65088){
var self__ = this;
var this65087__$1 = this;
return (((!((other65088 == null)))) && ((((this65087__$1.constructor === other65088.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this65087__$1.x,other65088.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this65087__$1.y,other65088.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this65087__$1.__extmap,other65088.__extmap)))))))));
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

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5350__auto__,k65086){
var self__ = this;
var this__5350__auto____$1 = this;
var G__65101 = k65086;
var G__65101__$1 = (((G__65101 instanceof cljs.core.Keyword))?G__65101.fqn:null);
switch (G__65101__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k65086);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5351__auto__,k__5352__auto__,G__65085){
var self__ = this;
var this__5351__auto____$1 = this;
var pred__65102 = cljs.core.keyword_identical_QMARK_;
var expr__65103 = k__5352__auto__;
if(cljs.core.truth_((pred__65102.cljs$core$IFn$_invoke$arity$2 ? pred__65102.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__65103) : pred__65102.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__65103)))){
return (new shadow.dom.Coordinate(G__65085,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__65102.cljs$core$IFn$_invoke$arity$2 ? pred__65102.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__65103) : pred__65102.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__65103)))){
return (new shadow.dom.Coordinate(self__.x,G__65085,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5352__auto__,G__65085),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5356__auto__){
var self__ = this;
var this__5356__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5342__auto__,G__65085){
var self__ = this;
var this__5342__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__65085,self__.__extmap,self__.__hash));
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
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__65089){
var extmap__5385__auto__ = (function (){var G__65123 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__65089,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__65089)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__65123);
} else {
return G__65123;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__65089),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__65089),null,cljs.core.not_empty(extmap__5385__auto__),null));
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

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5345__auto__,k65126,else__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
var G__65131 = k65126;
var G__65131__$1 = (((G__65131 instanceof cljs.core.Keyword))?G__65131.fqn:null);
switch (G__65131__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k65126,else__5346__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5363__auto__,f__5364__auto__,init__5365__auto__){
var self__ = this;
var this__5363__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5366__auto__,p__65135){
var vec__65136 = p__65135;
var k__5367__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65136,(0),null);
var v__5368__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65136,(1),null);
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

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__65125){
var self__ = this;
var G__65125__$1 = this;
return (new cljs.core.RecordIter((0),G__65125__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this65127,other65128){
var self__ = this;
var this65127__$1 = this;
return (((!((other65128 == null)))) && ((((this65127__$1.constructor === other65128.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this65127__$1.w,other65128.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this65127__$1.h,other65128.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this65127__$1.__extmap,other65128.__extmap)))))))));
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

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5350__auto__,k65126){
var self__ = this;
var this__5350__auto____$1 = this;
var G__65139 = k65126;
var G__65139__$1 = (((G__65139 instanceof cljs.core.Keyword))?G__65139.fqn:null);
switch (G__65139__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k65126);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5351__auto__,k__5352__auto__,G__65125){
var self__ = this;
var this__5351__auto____$1 = this;
var pred__65140 = cljs.core.keyword_identical_QMARK_;
var expr__65141 = k__5352__auto__;
if(cljs.core.truth_((pred__65140.cljs$core$IFn$_invoke$arity$2 ? pred__65140.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__65141) : pred__65140.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__65141)))){
return (new shadow.dom.Size(G__65125,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__65140.cljs$core$IFn$_invoke$arity$2 ? pred__65140.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__65141) : pred__65140.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__65141)))){
return (new shadow.dom.Size(self__.w,G__65125,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5352__auto__,G__65125),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5356__auto__){
var self__ = this;
var this__5356__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5342__auto__,G__65125){
var self__ = this;
var this__5342__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__65125,self__.__extmap,self__.__hash));
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
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__65130){
var extmap__5385__auto__ = (function (){var G__65143 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__65130,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__65130)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__65143);
} else {
return G__65143;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__65130),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__65130),null,cljs.core.not_empty(extmap__5385__auto__),null));
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
var G__65583 = (i + (1));
var G__65584 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__65583;
ret = G__65584;
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
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__65148){
var vec__65149 = p__65148;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65149,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65149,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__65154 = arguments.length;
switch (G__65154) {
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
var G__65586 = ps;
var G__65587 = (i + (1));
el__$1 = G__65586;
i = G__65587;
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
var vec__65178 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65178,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65178,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65178,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__65182_65590 = cljs.core.seq(props);
var chunk__65183_65591 = null;
var count__65184_65592 = (0);
var i__65185_65593 = (0);
while(true){
if((i__65185_65593 < count__65184_65592)){
var vec__65194_65594 = chunk__65183_65591.cljs$core$IIndexed$_nth$arity$2(null,i__65185_65593);
var k_65595 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65194_65594,(0),null);
var v_65596 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65194_65594,(1),null);
el.setAttributeNS((function (){var temp__5804__auto__ = cljs.core.namespace(k_65595);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_65595),v_65596);


var G__65597 = seq__65182_65590;
var G__65598 = chunk__65183_65591;
var G__65599 = count__65184_65592;
var G__65600 = (i__65185_65593 + (1));
seq__65182_65590 = G__65597;
chunk__65183_65591 = G__65598;
count__65184_65592 = G__65599;
i__65185_65593 = G__65600;
continue;
} else {
var temp__5804__auto___65601 = cljs.core.seq(seq__65182_65590);
if(temp__5804__auto___65601){
var seq__65182_65602__$1 = temp__5804__auto___65601;
if(cljs.core.chunked_seq_QMARK_(seq__65182_65602__$1)){
var c__5568__auto___65604 = cljs.core.chunk_first(seq__65182_65602__$1);
var G__65605 = cljs.core.chunk_rest(seq__65182_65602__$1);
var G__65606 = c__5568__auto___65604;
var G__65607 = cljs.core.count(c__5568__auto___65604);
var G__65608 = (0);
seq__65182_65590 = G__65605;
chunk__65183_65591 = G__65606;
count__65184_65592 = G__65607;
i__65185_65593 = G__65608;
continue;
} else {
var vec__65197_65609 = cljs.core.first(seq__65182_65602__$1);
var k_65610 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65197_65609,(0),null);
var v_65611 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65197_65609,(1),null);
el.setAttributeNS((function (){var temp__5804__auto____$1 = cljs.core.namespace(k_65610);
if(cljs.core.truth_(temp__5804__auto____$1)){
var ns = temp__5804__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_65610),v_65611);


var G__65613 = cljs.core.next(seq__65182_65602__$1);
var G__65614 = null;
var G__65615 = (0);
var G__65616 = (0);
seq__65182_65590 = G__65613;
chunk__65183_65591 = G__65614;
count__65184_65592 = G__65615;
i__65185_65593 = G__65616;
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
var vec__65222 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65222,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65222,(1),null);
var seq__65225_65617 = cljs.core.seq(node_children);
var chunk__65227_65618 = null;
var count__65228_65619 = (0);
var i__65229_65620 = (0);
while(true){
if((i__65229_65620 < count__65228_65619)){
var child_struct_65621 = chunk__65227_65618.cljs$core$IIndexed$_nth$arity$2(null,i__65229_65620);
if((!((child_struct_65621 == null)))){
if(typeof child_struct_65621 === 'string'){
var text_65622 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_65622),child_struct_65621].join(''));
} else {
var children_65623 = shadow.dom.svg_node(child_struct_65621);
if(cljs.core.seq_QMARK_(children_65623)){
var seq__65286_65624 = cljs.core.seq(children_65623);
var chunk__65288_65625 = null;
var count__65289_65626 = (0);
var i__65290_65627 = (0);
while(true){
if((i__65290_65627 < count__65289_65626)){
var child_65628 = chunk__65288_65625.cljs$core$IIndexed$_nth$arity$2(null,i__65290_65627);
if(cljs.core.truth_(child_65628)){
node.appendChild(child_65628);


var G__65629 = seq__65286_65624;
var G__65630 = chunk__65288_65625;
var G__65631 = count__65289_65626;
var G__65632 = (i__65290_65627 + (1));
seq__65286_65624 = G__65629;
chunk__65288_65625 = G__65630;
count__65289_65626 = G__65631;
i__65290_65627 = G__65632;
continue;
} else {
var G__65633 = seq__65286_65624;
var G__65634 = chunk__65288_65625;
var G__65635 = count__65289_65626;
var G__65636 = (i__65290_65627 + (1));
seq__65286_65624 = G__65633;
chunk__65288_65625 = G__65634;
count__65289_65626 = G__65635;
i__65290_65627 = G__65636;
continue;
}
} else {
var temp__5804__auto___65637 = cljs.core.seq(seq__65286_65624);
if(temp__5804__auto___65637){
var seq__65286_65638__$1 = temp__5804__auto___65637;
if(cljs.core.chunked_seq_QMARK_(seq__65286_65638__$1)){
var c__5568__auto___65639 = cljs.core.chunk_first(seq__65286_65638__$1);
var G__65640 = cljs.core.chunk_rest(seq__65286_65638__$1);
var G__65641 = c__5568__auto___65639;
var G__65642 = cljs.core.count(c__5568__auto___65639);
var G__65643 = (0);
seq__65286_65624 = G__65640;
chunk__65288_65625 = G__65641;
count__65289_65626 = G__65642;
i__65290_65627 = G__65643;
continue;
} else {
var child_65644 = cljs.core.first(seq__65286_65638__$1);
if(cljs.core.truth_(child_65644)){
node.appendChild(child_65644);


var G__65645 = cljs.core.next(seq__65286_65638__$1);
var G__65646 = null;
var G__65647 = (0);
var G__65648 = (0);
seq__65286_65624 = G__65645;
chunk__65288_65625 = G__65646;
count__65289_65626 = G__65647;
i__65290_65627 = G__65648;
continue;
} else {
var G__65649 = cljs.core.next(seq__65286_65638__$1);
var G__65650 = null;
var G__65651 = (0);
var G__65652 = (0);
seq__65286_65624 = G__65649;
chunk__65288_65625 = G__65650;
count__65289_65626 = G__65651;
i__65290_65627 = G__65652;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_65623);
}
}


var G__65653 = seq__65225_65617;
var G__65654 = chunk__65227_65618;
var G__65655 = count__65228_65619;
var G__65656 = (i__65229_65620 + (1));
seq__65225_65617 = G__65653;
chunk__65227_65618 = G__65654;
count__65228_65619 = G__65655;
i__65229_65620 = G__65656;
continue;
} else {
var G__65658 = seq__65225_65617;
var G__65659 = chunk__65227_65618;
var G__65660 = count__65228_65619;
var G__65661 = (i__65229_65620 + (1));
seq__65225_65617 = G__65658;
chunk__65227_65618 = G__65659;
count__65228_65619 = G__65660;
i__65229_65620 = G__65661;
continue;
}
} else {
var temp__5804__auto___65665 = cljs.core.seq(seq__65225_65617);
if(temp__5804__auto___65665){
var seq__65225_65666__$1 = temp__5804__auto___65665;
if(cljs.core.chunked_seq_QMARK_(seq__65225_65666__$1)){
var c__5568__auto___65667 = cljs.core.chunk_first(seq__65225_65666__$1);
var G__65668 = cljs.core.chunk_rest(seq__65225_65666__$1);
var G__65669 = c__5568__auto___65667;
var G__65670 = cljs.core.count(c__5568__auto___65667);
var G__65671 = (0);
seq__65225_65617 = G__65668;
chunk__65227_65618 = G__65669;
count__65228_65619 = G__65670;
i__65229_65620 = G__65671;
continue;
} else {
var child_struct_65672 = cljs.core.first(seq__65225_65666__$1);
if((!((child_struct_65672 == null)))){
if(typeof child_struct_65672 === 'string'){
var text_65676 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_65676),child_struct_65672].join(''));
} else {
var children_65677 = shadow.dom.svg_node(child_struct_65672);
if(cljs.core.seq_QMARK_(children_65677)){
var seq__65300_65678 = cljs.core.seq(children_65677);
var chunk__65302_65679 = null;
var count__65303_65680 = (0);
var i__65304_65681 = (0);
while(true){
if((i__65304_65681 < count__65303_65680)){
var child_65682 = chunk__65302_65679.cljs$core$IIndexed$_nth$arity$2(null,i__65304_65681);
if(cljs.core.truth_(child_65682)){
node.appendChild(child_65682);


var G__65683 = seq__65300_65678;
var G__65684 = chunk__65302_65679;
var G__65685 = count__65303_65680;
var G__65686 = (i__65304_65681 + (1));
seq__65300_65678 = G__65683;
chunk__65302_65679 = G__65684;
count__65303_65680 = G__65685;
i__65304_65681 = G__65686;
continue;
} else {
var G__65687 = seq__65300_65678;
var G__65688 = chunk__65302_65679;
var G__65689 = count__65303_65680;
var G__65690 = (i__65304_65681 + (1));
seq__65300_65678 = G__65687;
chunk__65302_65679 = G__65688;
count__65303_65680 = G__65689;
i__65304_65681 = G__65690;
continue;
}
} else {
var temp__5804__auto___65691__$1 = cljs.core.seq(seq__65300_65678);
if(temp__5804__auto___65691__$1){
var seq__65300_65692__$1 = temp__5804__auto___65691__$1;
if(cljs.core.chunked_seq_QMARK_(seq__65300_65692__$1)){
var c__5568__auto___65693 = cljs.core.chunk_first(seq__65300_65692__$1);
var G__65694 = cljs.core.chunk_rest(seq__65300_65692__$1);
var G__65695 = c__5568__auto___65693;
var G__65696 = cljs.core.count(c__5568__auto___65693);
var G__65697 = (0);
seq__65300_65678 = G__65694;
chunk__65302_65679 = G__65695;
count__65303_65680 = G__65696;
i__65304_65681 = G__65697;
continue;
} else {
var child_65698 = cljs.core.first(seq__65300_65692__$1);
if(cljs.core.truth_(child_65698)){
node.appendChild(child_65698);


var G__65699 = cljs.core.next(seq__65300_65692__$1);
var G__65700 = null;
var G__65701 = (0);
var G__65702 = (0);
seq__65300_65678 = G__65699;
chunk__65302_65679 = G__65700;
count__65303_65680 = G__65701;
i__65304_65681 = G__65702;
continue;
} else {
var G__65706 = cljs.core.next(seq__65300_65692__$1);
var G__65707 = null;
var G__65708 = (0);
var G__65709 = (0);
seq__65300_65678 = G__65706;
chunk__65302_65679 = G__65707;
count__65303_65680 = G__65708;
i__65304_65681 = G__65709;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_65677);
}
}


var G__65710 = cljs.core.next(seq__65225_65666__$1);
var G__65711 = null;
var G__65712 = (0);
var G__65713 = (0);
seq__65225_65617 = G__65710;
chunk__65227_65618 = G__65711;
count__65228_65619 = G__65712;
i__65229_65620 = G__65713;
continue;
} else {
var G__65714 = cljs.core.next(seq__65225_65666__$1);
var G__65715 = null;
var G__65716 = (0);
var G__65717 = (0);
seq__65225_65617 = G__65714;
chunk__65227_65618 = G__65715;
count__65228_65619 = G__65716;
i__65229_65620 = G__65717;
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
var len__5769__auto___65721 = arguments.length;
var i__5770__auto___65722 = (0);
while(true){
if((i__5770__auto___65722 < len__5769__auto___65721)){
args__5775__auto__.push((arguments[i__5770__auto___65722]));

var G__65723 = (i__5770__auto___65722 + (1));
i__5770__auto___65722 = G__65723;
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
(shadow.dom.svg.cljs$lang$applyTo = (function (seq65311){
var G__65312 = cljs.core.first(seq65311);
var seq65311__$1 = cljs.core.next(seq65311);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__65312,seq65311__$1);
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
var G__65314 = arguments.length;
switch (G__65314) {
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
var c__61429__auto___65728 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__61430__auto__ = (function (){var switch__61339__auto__ = (function (state_65319){
var state_val_65320 = (state_65319[(1)]);
if((state_val_65320 === (1))){
var state_65319__$1 = state_65319;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_65319__$1,(2),once_or_cleanup);
} else {
if((state_val_65320 === (2))){
var inst_65316 = (state_65319[(2)]);
var inst_65317 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_65319__$1 = (function (){var statearr_65321 = state_65319;
(statearr_65321[(7)] = inst_65316);

return statearr_65321;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_65319__$1,inst_65317);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__61340__auto__ = null;
var shadow$dom$state_machine__61340__auto____0 = (function (){
var statearr_65322 = [null,null,null,null,null,null,null,null];
(statearr_65322[(0)] = shadow$dom$state_machine__61340__auto__);

(statearr_65322[(1)] = (1));

return statearr_65322;
});
var shadow$dom$state_machine__61340__auto____1 = (function (state_65319){
while(true){
var ret_value__61341__auto__ = (function (){try{while(true){
var result__61342__auto__ = switch__61339__auto__(state_65319);
if(cljs.core.keyword_identical_QMARK_(result__61342__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__61342__auto__;
}
break;
}
}catch (e65323){var ex__61343__auto__ = e65323;
var statearr_65324_65731 = state_65319;
(statearr_65324_65731[(2)] = ex__61343__auto__);


if(cljs.core.seq((state_65319[(4)]))){
var statearr_65325_65732 = state_65319;
(statearr_65325_65732[(1)] = cljs.core.first((state_65319[(4)])));

} else {
throw ex__61343__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__61341__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__65733 = state_65319;
state_65319 = G__65733;
continue;
} else {
return ret_value__61341__auto__;
}
break;
}
});
shadow$dom$state_machine__61340__auto__ = function(state_65319){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__61340__auto____0.call(this);
case 1:
return shadow$dom$state_machine__61340__auto____1.call(this,state_65319);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__61340__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__61340__auto____0;
shadow$dom$state_machine__61340__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__61340__auto____1;
return shadow$dom$state_machine__61340__auto__;
})()
})();
var state__61431__auto__ = (function (){var statearr_65326 = f__61430__auto__();
(statearr_65326[(6)] = c__61429__auto___65728);

return statearr_65326;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__61431__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
