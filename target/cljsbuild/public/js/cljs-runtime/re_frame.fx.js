goog.provide('re_frame.fx');
re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_((re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1 ? re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1(re_frame.fx.kind) : re_frame.registrar.kinds.call(null,re_frame.fx.kind)))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
re_frame.fx.reg_fx = (function re_frame$fx$reg_fx(id,handler){
return re_frame.registrar.register_handler(re_frame.fx.kind,id,handler);
});
/**
 * An interceptor whose `:after` actions the contents of `:effects`. As a result,
 *   this interceptor is Domino 3.
 * 
 *   This interceptor is silently added (by reg-event-db etc) to the front of
 *   interceptor chains for all events.
 * 
 *   For each key in `:effects` (a map), it calls the registered `effects handler`
 *   (see `reg-fx` for registration of effect handlers).
 * 
 *   So, if `:effects` was:
 *    {:dispatch  [:hello 42]
 *     :db        {...}
 *     :undo      "set flag"}
 * 
 *   it will call the registered effect handlers for each of the map's keys:
 *   `:dispatch`, `:undo` and `:db`. When calling each handler, provides the map
 *   value for that key - so in the example above the effect handler for :dispatch
 *   will be given one arg `[:hello 42]`.
 * 
 *   You cannot rely on the ordering in which effects are executed, other than that
 *   `:db` is guaranteed to be executed first.
 */
re_frame.fx.do_fx = re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function re_frame$fx$do_fx_after(context){
if(re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR__orig_val__57255 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__57256 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__57256);

try{try{var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5804__auto___57365 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5804__auto___57365)){
var new_db_57366 = temp__5804__auto___57365;
var fexpr__57260_57367 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__57260_57367.cljs$core$IFn$_invoke$arity$1 ? fexpr__57260_57367.cljs$core$IFn$_invoke$arity$1(new_db_57366) : fexpr__57260_57367.call(null,new_db_57366));
} else {
}

var seq__57261 = cljs.core.seq(effects_without_db);
var chunk__57262 = null;
var count__57263 = (0);
var i__57264 = (0);
while(true){
if((i__57264 < count__57263)){
var vec__57278 = chunk__57262.cljs$core$IIndexed$_nth$arity$2(null,i__57264);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57278,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57278,(1),null);
var temp__5802__auto___57372 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___57372)){
var effect_fn_57373 = temp__5802__auto___57372;
(effect_fn_57373.cljs$core$IFn$_invoke$arity$1 ? effect_fn_57373.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_57373.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__57374 = seq__57261;
var G__57375 = chunk__57262;
var G__57376 = count__57263;
var G__57377 = (i__57264 + (1));
seq__57261 = G__57374;
chunk__57262 = G__57375;
count__57263 = G__57376;
i__57264 = G__57377;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__57261);
if(temp__5804__auto__){
var seq__57261__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__57261__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__57261__$1);
var G__57378 = cljs.core.chunk_rest(seq__57261__$1);
var G__57379 = c__5568__auto__;
var G__57380 = cljs.core.count(c__5568__auto__);
var G__57381 = (0);
seq__57261 = G__57378;
chunk__57262 = G__57379;
count__57263 = G__57380;
i__57264 = G__57381;
continue;
} else {
var vec__57285 = cljs.core.first(seq__57261__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57285,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57285,(1),null);
var temp__5802__auto___57383 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___57383)){
var effect_fn_57384 = temp__5802__auto___57383;
(effect_fn_57384.cljs$core$IFn$_invoke$arity$1 ? effect_fn_57384.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_57384.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__57385 = cljs.core.next(seq__57261__$1);
var G__57386 = null;
var G__57387 = (0);
var G__57388 = (0);
seq__57261 = G__57385;
chunk__57262 = G__57386;
count__57263 = G__57387;
i__57264 = G__57388;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__56987__auto___57389 = re_frame.interop.now();
var duration__56988__auto___57390 = (end__56987__auto___57389 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__56988__auto___57390,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__56987__auto___57389);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__57255);
}} else {
var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5804__auto___57391 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5804__auto___57391)){
var new_db_57392 = temp__5804__auto___57391;
var fexpr__57288_57393 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__57288_57393.cljs$core$IFn$_invoke$arity$1 ? fexpr__57288_57393.cljs$core$IFn$_invoke$arity$1(new_db_57392) : fexpr__57288_57393.call(null,new_db_57392));
} else {
}

var seq__57289 = cljs.core.seq(effects_without_db);
var chunk__57290 = null;
var count__57291 = (0);
var i__57292 = (0);
while(true){
if((i__57292 < count__57291)){
var vec__57302 = chunk__57290.cljs$core$IIndexed$_nth$arity$2(null,i__57292);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57302,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57302,(1),null);
var temp__5802__auto___57394 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___57394)){
var effect_fn_57395 = temp__5802__auto___57394;
(effect_fn_57395.cljs$core$IFn$_invoke$arity$1 ? effect_fn_57395.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_57395.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__57396 = seq__57289;
var G__57397 = chunk__57290;
var G__57398 = count__57291;
var G__57399 = (i__57292 + (1));
seq__57289 = G__57396;
chunk__57290 = G__57397;
count__57291 = G__57398;
i__57292 = G__57399;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__57289);
if(temp__5804__auto__){
var seq__57289__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__57289__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__57289__$1);
var G__57400 = cljs.core.chunk_rest(seq__57289__$1);
var G__57401 = c__5568__auto__;
var G__57402 = cljs.core.count(c__5568__auto__);
var G__57403 = (0);
seq__57289 = G__57400;
chunk__57290 = G__57401;
count__57291 = G__57402;
i__57292 = G__57403;
continue;
} else {
var vec__57308 = cljs.core.first(seq__57289__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57308,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57308,(1),null);
var temp__5802__auto___57404 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___57404)){
var effect_fn_57405 = temp__5802__auto___57404;
(effect_fn_57405.cljs$core$IFn$_invoke$arity$1 ? effect_fn_57405.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_57405.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__57406 = cljs.core.next(seq__57289__$1);
var G__57407 = null;
var G__57408 = (0);
var G__57409 = (0);
seq__57289 = G__57406;
chunk__57290 = G__57407;
count__57291 = G__57408;
i__57292 = G__57409;
continue;
}
} else {
return null;
}
}
break;
}
}
})], 0));
re_frame.fx.dispatch_later = (function re_frame$fx$dispatch_later(p__57311){
var map__57313 = p__57311;
var map__57313__$1 = cljs.core.__destructure_map(map__57313);
var effect = map__57313__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57313__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57313__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
return re_frame.interop.set_timeout_BANG_((function (){
return re_frame.router.dispatch(dispatch);
}),ms);
}
});
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
if(cljs.core.map_QMARK_(value)){
return re_frame.fx.dispatch_later(value);
} else {
var seq__57314 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__57315 = null;
var count__57316 = (0);
var i__57317 = (0);
while(true){
if((i__57317 < count__57316)){
var effect = chunk__57315.cljs$core$IIndexed$_nth$arity$2(null,i__57317);
re_frame.fx.dispatch_later(effect);


var G__57410 = seq__57314;
var G__57411 = chunk__57315;
var G__57412 = count__57316;
var G__57413 = (i__57317 + (1));
seq__57314 = G__57410;
chunk__57315 = G__57411;
count__57316 = G__57412;
i__57317 = G__57413;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__57314);
if(temp__5804__auto__){
var seq__57314__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__57314__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__57314__$1);
var G__57414 = cljs.core.chunk_rest(seq__57314__$1);
var G__57415 = c__5568__auto__;
var G__57416 = cljs.core.count(c__5568__auto__);
var G__57417 = (0);
seq__57314 = G__57414;
chunk__57315 = G__57415;
count__57316 = G__57416;
i__57317 = G__57417;
continue;
} else {
var effect = cljs.core.first(seq__57314__$1);
re_frame.fx.dispatch_later(effect);


var G__57418 = cljs.core.next(seq__57314__$1);
var G__57419 = null;
var G__57420 = (0);
var G__57421 = (0);
seq__57314 = G__57418;
chunk__57315 = G__57419;
count__57316 = G__57420;
i__57317 = G__57421;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"fx","fx",-1237829572),(function (seq_of_effects){
if((!(cljs.core.sequential_QMARK_(seq_of_effects)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect expects a seq, but was given ",cljs.core.type(seq_of_effects)], 0));
} else {
var seq__57334 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,seq_of_effects));
var chunk__57335 = null;
var count__57336 = (0);
var i__57337 = (0);
while(true){
if((i__57337 < count__57336)){
var vec__57346 = chunk__57335.cljs$core$IIndexed$_nth$arity$2(null,i__57337);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57346,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57346,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5802__auto___57427 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___57427)){
var effect_fn_57428 = temp__5802__auto___57427;
(effect_fn_57428.cljs$core$IFn$_invoke$arity$1 ? effect_fn_57428.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_57428.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__57429 = seq__57334;
var G__57430 = chunk__57335;
var G__57431 = count__57336;
var G__57432 = (i__57337 + (1));
seq__57334 = G__57429;
chunk__57335 = G__57430;
count__57336 = G__57431;
i__57337 = G__57432;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__57334);
if(temp__5804__auto__){
var seq__57334__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__57334__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__57334__$1);
var G__57433 = cljs.core.chunk_rest(seq__57334__$1);
var G__57434 = c__5568__auto__;
var G__57435 = cljs.core.count(c__5568__auto__);
var G__57436 = (0);
seq__57334 = G__57433;
chunk__57335 = G__57434;
count__57336 = G__57435;
i__57337 = G__57436;
continue;
} else {
var vec__57351 = cljs.core.first(seq__57334__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57351,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57351,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5802__auto___57437 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___57437)){
var effect_fn_57438 = temp__5802__auto___57437;
(effect_fn_57438.cljs$core$IFn$_invoke$arity$1 ? effect_fn_57438.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_57438.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__57439 = cljs.core.next(seq__57334__$1);
var G__57440 = null;
var G__57441 = (0);
var G__57442 = (0);
seq__57334 = G__57439;
chunk__57335 = G__57440;
count__57336 = G__57441;
i__57337 = G__57442;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if((!(cljs.core.vector_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value], 0));
} else {
return re_frame.router.dispatch(value);
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if((!(cljs.core.sequential_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-n value. Expected a collection, but got:",value], 0));
} else {
var seq__57356 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__57357 = null;
var count__57358 = (0);
var i__57359 = (0);
while(true){
if((i__57359 < count__57358)){
var event = chunk__57357.cljs$core$IIndexed$_nth$arity$2(null,i__57359);
re_frame.router.dispatch(event);


var G__57443 = seq__57356;
var G__57444 = chunk__57357;
var G__57445 = count__57358;
var G__57446 = (i__57359 + (1));
seq__57356 = G__57443;
chunk__57357 = G__57444;
count__57358 = G__57445;
i__57359 = G__57446;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__57356);
if(temp__5804__auto__){
var seq__57356__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__57356__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__57356__$1);
var G__57447 = cljs.core.chunk_rest(seq__57356__$1);
var G__57448 = c__5568__auto__;
var G__57449 = cljs.core.count(c__5568__auto__);
var G__57450 = (0);
seq__57356 = G__57447;
chunk__57357 = G__57448;
count__57358 = G__57449;
i__57359 = G__57450;
continue;
} else {
var event = cljs.core.first(seq__57356__$1);
re_frame.router.dispatch(event);


var G__57451 = cljs.core.next(seq__57356__$1);
var G__57452 = null;
var G__57453 = (0);
var G__57454 = (0);
seq__57356 = G__57451;
chunk__57357 = G__57452;
count__57358 = G__57453;
i__57359 = G__57454;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(re_frame.registrar.clear_handlers,re_frame.events.kind);
if(cljs.core.sequential_QMARK_(value)){
var seq__57361 = cljs.core.seq(value);
var chunk__57362 = null;
var count__57363 = (0);
var i__57364 = (0);
while(true){
if((i__57364 < count__57363)){
var event = chunk__57362.cljs$core$IIndexed$_nth$arity$2(null,i__57364);
clear_event(event);


var G__57457 = seq__57361;
var G__57458 = chunk__57362;
var G__57459 = count__57363;
var G__57460 = (i__57364 + (1));
seq__57361 = G__57457;
chunk__57362 = G__57458;
count__57363 = G__57459;
i__57364 = G__57460;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__57361);
if(temp__5804__auto__){
var seq__57361__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__57361__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__57361__$1);
var G__57461 = cljs.core.chunk_rest(seq__57361__$1);
var G__57462 = c__5568__auto__;
var G__57463 = cljs.core.count(c__5568__auto__);
var G__57464 = (0);
seq__57361 = G__57461;
chunk__57362 = G__57462;
count__57363 = G__57463;
i__57364 = G__57464;
continue;
} else {
var event = cljs.core.first(seq__57361__$1);
clear_event(event);


var G__57465 = cljs.core.next(seq__57361__$1);
var G__57466 = null;
var G__57467 = (0);
var G__57468 = (0);
seq__57361 = G__57465;
chunk__57362 = G__57466;
count__57363 = G__57467;
i__57364 = G__57468;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return clear_event(value);
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"db","db",993250759),(function (value){
if((!((cljs.core.deref(re_frame.db.app_db) === value)))){
return cljs.core.reset_BANG_(re_frame.db.app_db,value);
} else {
return null;
}
}));

//# sourceMappingURL=re_frame.fx.js.map
