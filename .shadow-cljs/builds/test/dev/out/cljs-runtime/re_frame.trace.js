goog.provide('re_frame.trace');
re_frame.trace.id = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
re_frame.trace._STAR_current_trace_STAR_ = null;
re_frame.trace.reset_tracing_BANG_ = (function re_frame$trace$reset_tracing_BANG_(){
return cljs.core.reset_BANG_(re_frame.trace.id,(0));
});
/**
 * @define {boolean}
 */
re_frame.trace.trace_enabled_QMARK_ = goog.define("re_frame.trace.trace_enabled_QMARK_",false);
/**
 * See https://groups.google.com/d/msg/clojurescript/jk43kmYiMhA/IHglVr_TPdgJ for more details
 */
re_frame.trace.is_trace_enabled_QMARK_ = (function re_frame$trace$is_trace_enabled_QMARK_(){
return re_frame.trace.trace_enabled_QMARK_;
});
re_frame.trace.trace_cbs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.traces !== 'undefined')){
} else {
re_frame.trace.traces = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
}
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.next_delivery !== 'undefined')){
} else {
re_frame.trace.next_delivery = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
}
/**
 * Registers a tracing callback function which will receive a collection of one or more traces.
 *   Will replace an existing callback function if it shares the same key.
 */
re_frame.trace.register_trace_cb = (function re_frame$trace$register_trace_cb(key,f){
if(re_frame.trace.trace_enabled_QMARK_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frame.trace.trace_cbs,cljs.core.assoc,key,f);
} else {
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Tracing is not enabled. Please set {\"re_frame.trace.trace_enabled_QMARK_\" true} in :closure-defines. See: https://github.com/day8/re-frame-10x#installation."], 0));
}
});
re_frame.trace.remove_trace_cb = (function re_frame$trace$remove_trace_cb(key){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.trace_cbs,cljs.core.dissoc,key);

return null;
});
re_frame.trace.next_id = (function re_frame$trace$next_id(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(re_frame.trace.id,cljs.core.inc);
});
re_frame.trace.start_trace = (function re_frame$trace$start_trace(p__61333){
var map__61334 = p__61333;
var map__61334__$1 = cljs.core.__destructure_map(map__61334);
var operation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61334__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var op_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61334__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var tags = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61334__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));
var child_of = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61334__$1,new cljs.core.Keyword(null,"child-of","child-of",-903376662));
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),re_frame.trace.next_id(),new cljs.core.Keyword(null,"operation","operation",-1267664310),operation,new cljs.core.Keyword(null,"op-type","op-type",-1636141668),op_type,new cljs.core.Keyword(null,"tags","tags",1771418977),tags,new cljs.core.Keyword(null,"child-of","child-of",-903376662),(function (){var or__5045__auto__ = child_of;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_);
}
})(),new cljs.core.Keyword(null,"start","start",-355208981),re_frame.interop.now()], null);
});
re_frame.trace.debounce_time = (50);
re_frame.trace.debounce = (function re_frame$trace$debounce(f,interval){
return goog.functions.debounce(f,interval);
});
re_frame.trace.schedule_debounce = re_frame.trace.debounce((function re_frame$trace$tracing_cb_debounced(){
var seq__61336_61366 = cljs.core.seq(cljs.core.deref(re_frame.trace.trace_cbs));
var chunk__61337_61367 = null;
var count__61338_61368 = (0);
var i__61339_61369 = (0);
while(true){
if((i__61339_61369 < count__61338_61368)){
var vec__61350_61370 = chunk__61337_61367.cljs$core$IIndexed$_nth$arity$2(null,i__61339_61369);
var k_61371 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61350_61370,(0),null);
var cb_61372 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61350_61370,(1),null);
try{var G__61354_61373 = cljs.core.deref(re_frame.trace.traces);
(cb_61372.cljs$core$IFn$_invoke$arity$1 ? cb_61372.cljs$core$IFn$_invoke$arity$1(G__61354_61373) : cb_61372.call(null,G__61354_61373));
}catch (e61353){var e_61374 = e61353;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_61371,"while storing",cljs.core.deref(re_frame.trace.traces),e_61374], 0));
}

var G__61375 = seq__61336_61366;
var G__61376 = chunk__61337_61367;
var G__61377 = count__61338_61368;
var G__61378 = (i__61339_61369 + (1));
seq__61336_61366 = G__61375;
chunk__61337_61367 = G__61376;
count__61338_61368 = G__61377;
i__61339_61369 = G__61378;
continue;
} else {
var temp__5804__auto___61379 = cljs.core.seq(seq__61336_61366);
if(temp__5804__auto___61379){
var seq__61336_61380__$1 = temp__5804__auto___61379;
if(cljs.core.chunked_seq_QMARK_(seq__61336_61380__$1)){
var c__5568__auto___61381 = cljs.core.chunk_first(seq__61336_61380__$1);
var G__61382 = cljs.core.chunk_rest(seq__61336_61380__$1);
var G__61383 = c__5568__auto___61381;
var G__61384 = cljs.core.count(c__5568__auto___61381);
var G__61385 = (0);
seq__61336_61366 = G__61382;
chunk__61337_61367 = G__61383;
count__61338_61368 = G__61384;
i__61339_61369 = G__61385;
continue;
} else {
var vec__61355_61386 = cljs.core.first(seq__61336_61380__$1);
var k_61387 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61355_61386,(0),null);
var cb_61388 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61355_61386,(1),null);
try{var G__61359_61389 = cljs.core.deref(re_frame.trace.traces);
(cb_61388.cljs$core$IFn$_invoke$arity$1 ? cb_61388.cljs$core$IFn$_invoke$arity$1(G__61359_61389) : cb_61388.call(null,G__61359_61389));
}catch (e61358){var e_61392 = e61358;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_61387,"while storing",cljs.core.deref(re_frame.trace.traces),e_61392], 0));
}

var G__61393 = cljs.core.next(seq__61336_61380__$1);
var G__61394 = null;
var G__61395 = (0);
var G__61396 = (0);
seq__61336_61366 = G__61393;
chunk__61337_61367 = G__61394;
count__61338_61368 = G__61395;
i__61339_61369 = G__61396;
continue;
}
} else {
}
}
break;
}

return cljs.core.reset_BANG_(re_frame.trace.traces,cljs.core.PersistentVector.EMPTY);
}),re_frame.trace.debounce_time);
re_frame.trace.run_tracing_callbacks_BANG_ = (function re_frame$trace$run_tracing_callbacks_BANG_(now){
if(((cljs.core.deref(re_frame.trace.next_delivery) - (25)) < now)){
(re_frame.trace.schedule_debounce.cljs$core$IFn$_invoke$arity$0 ? re_frame.trace.schedule_debounce.cljs$core$IFn$_invoke$arity$0() : re_frame.trace.schedule_debounce.call(null));

return cljs.core.reset_BANG_(re_frame.trace.next_delivery,(now + re_frame.trace.debounce_time));
} else {
return null;
}
});

//# sourceMappingURL=re_frame.trace.js.map
