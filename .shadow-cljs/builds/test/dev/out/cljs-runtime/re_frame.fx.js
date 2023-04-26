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
var _STAR_current_trace_STAR__orig_val__61578 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__61579 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__61579);

try{try{var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5804__auto___61675 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5804__auto___61675)){
var new_db_61676 = temp__5804__auto___61675;
var fexpr__61581_61677 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__61581_61677.cljs$core$IFn$_invoke$arity$1 ? fexpr__61581_61677.cljs$core$IFn$_invoke$arity$1(new_db_61676) : fexpr__61581_61677.call(null,new_db_61676));
} else {
}

var seq__61582 = cljs.core.seq(effects_without_db);
var chunk__61583 = null;
var count__61584 = (0);
var i__61585 = (0);
while(true){
if((i__61585 < count__61584)){
var vec__61598 = chunk__61583.cljs$core$IIndexed$_nth$arity$2(null,i__61585);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61598,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61598,(1),null);
var temp__5802__auto___61678 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___61678)){
var effect_fn_61682 = temp__5802__auto___61678;
(effect_fn_61682.cljs$core$IFn$_invoke$arity$1 ? effect_fn_61682.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_61682.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__61683 = seq__61582;
var G__61684 = chunk__61583;
var G__61685 = count__61584;
var G__61686 = (i__61585 + (1));
seq__61582 = G__61683;
chunk__61583 = G__61684;
count__61584 = G__61685;
i__61585 = G__61686;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__61582);
if(temp__5804__auto__){
var seq__61582__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__61582__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__61582__$1);
var G__61687 = cljs.core.chunk_rest(seq__61582__$1);
var G__61688 = c__5568__auto__;
var G__61689 = cljs.core.count(c__5568__auto__);
var G__61690 = (0);
seq__61582 = G__61687;
chunk__61583 = G__61688;
count__61584 = G__61689;
i__61585 = G__61690;
continue;
} else {
var vec__61604 = cljs.core.first(seq__61582__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61604,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61604,(1),null);
var temp__5802__auto___61691 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___61691)){
var effect_fn_61692 = temp__5802__auto___61691;
(effect_fn_61692.cljs$core$IFn$_invoke$arity$1 ? effect_fn_61692.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_61692.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__61693 = cljs.core.next(seq__61582__$1);
var G__61694 = null;
var G__61695 = (0);
var G__61696 = (0);
seq__61582 = G__61693;
chunk__61583 = G__61694;
count__61584 = G__61695;
i__61585 = G__61696;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__54480__auto___61697 = re_frame.interop.now();
var duration__54481__auto___61698 = (end__54480__auto___61697 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__54481__auto___61698,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__54480__auto___61697);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__61578);
}} else {
var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5804__auto___61702 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5804__auto___61702)){
var new_db_61703 = temp__5804__auto___61702;
var fexpr__61607_61704 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__61607_61704.cljs$core$IFn$_invoke$arity$1 ? fexpr__61607_61704.cljs$core$IFn$_invoke$arity$1(new_db_61703) : fexpr__61607_61704.call(null,new_db_61703));
} else {
}

var seq__61609 = cljs.core.seq(effects_without_db);
var chunk__61610 = null;
var count__61611 = (0);
var i__61612 = (0);
while(true){
if((i__61612 < count__61611)){
var vec__61624 = chunk__61610.cljs$core$IIndexed$_nth$arity$2(null,i__61612);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61624,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61624,(1),null);
var temp__5802__auto___61705 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___61705)){
var effect_fn_61706 = temp__5802__auto___61705;
(effect_fn_61706.cljs$core$IFn$_invoke$arity$1 ? effect_fn_61706.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_61706.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__61707 = seq__61609;
var G__61708 = chunk__61610;
var G__61709 = count__61611;
var G__61710 = (i__61612 + (1));
seq__61609 = G__61707;
chunk__61610 = G__61708;
count__61611 = G__61709;
i__61612 = G__61710;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__61609);
if(temp__5804__auto__){
var seq__61609__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__61609__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__61609__$1);
var G__61711 = cljs.core.chunk_rest(seq__61609__$1);
var G__61712 = c__5568__auto__;
var G__61713 = cljs.core.count(c__5568__auto__);
var G__61714 = (0);
seq__61609 = G__61711;
chunk__61610 = G__61712;
count__61611 = G__61713;
i__61612 = G__61714;
continue;
} else {
var vec__61627 = cljs.core.first(seq__61609__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61627,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61627,(1),null);
var temp__5802__auto___61715 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___61715)){
var effect_fn_61716 = temp__5802__auto___61715;
(effect_fn_61716.cljs$core$IFn$_invoke$arity$1 ? effect_fn_61716.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_61716.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__61717 = cljs.core.next(seq__61609__$1);
var G__61718 = null;
var G__61719 = (0);
var G__61720 = (0);
seq__61609 = G__61717;
chunk__61610 = G__61718;
count__61611 = G__61719;
i__61612 = G__61720;
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
re_frame.fx.dispatch_later = (function re_frame$fx$dispatch_later(p__61632){
var map__61633 = p__61632;
var map__61633__$1 = cljs.core.__destructure_map(map__61633);
var effect = map__61633__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61633__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61633__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
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
var seq__61639 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__61640 = null;
var count__61641 = (0);
var i__61642 = (0);
while(true){
if((i__61642 < count__61641)){
var effect = chunk__61640.cljs$core$IIndexed$_nth$arity$2(null,i__61642);
re_frame.fx.dispatch_later(effect);


var G__61721 = seq__61639;
var G__61722 = chunk__61640;
var G__61723 = count__61641;
var G__61724 = (i__61642 + (1));
seq__61639 = G__61721;
chunk__61640 = G__61722;
count__61641 = G__61723;
i__61642 = G__61724;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__61639);
if(temp__5804__auto__){
var seq__61639__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__61639__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__61639__$1);
var G__61725 = cljs.core.chunk_rest(seq__61639__$1);
var G__61726 = c__5568__auto__;
var G__61727 = cljs.core.count(c__5568__auto__);
var G__61728 = (0);
seq__61639 = G__61725;
chunk__61640 = G__61726;
count__61641 = G__61727;
i__61642 = G__61728;
continue;
} else {
var effect = cljs.core.first(seq__61639__$1);
re_frame.fx.dispatch_later(effect);


var G__61729 = cljs.core.next(seq__61639__$1);
var G__61730 = null;
var G__61731 = (0);
var G__61732 = (0);
seq__61639 = G__61729;
chunk__61640 = G__61730;
count__61641 = G__61731;
i__61642 = G__61732;
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
var seq__61651 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,seq_of_effects));
var chunk__61652 = null;
var count__61653 = (0);
var i__61654 = (0);
while(true){
if((i__61654 < count__61653)){
var vec__61661 = chunk__61652.cljs$core$IIndexed$_nth$arity$2(null,i__61654);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61661,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61661,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5802__auto___61733 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___61733)){
var effect_fn_61734 = temp__5802__auto___61733;
(effect_fn_61734.cljs$core$IFn$_invoke$arity$1 ? effect_fn_61734.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_61734.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__61735 = seq__61651;
var G__61736 = chunk__61652;
var G__61737 = count__61653;
var G__61738 = (i__61654 + (1));
seq__61651 = G__61735;
chunk__61652 = G__61736;
count__61653 = G__61737;
i__61654 = G__61738;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__61651);
if(temp__5804__auto__){
var seq__61651__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__61651__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__61651__$1);
var G__61741 = cljs.core.chunk_rest(seq__61651__$1);
var G__61742 = c__5568__auto__;
var G__61743 = cljs.core.count(c__5568__auto__);
var G__61744 = (0);
seq__61651 = G__61741;
chunk__61652 = G__61742;
count__61653 = G__61743;
i__61654 = G__61744;
continue;
} else {
var vec__61664 = cljs.core.first(seq__61651__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61664,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61664,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5802__auto___61746 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___61746)){
var effect_fn_61747 = temp__5802__auto___61746;
(effect_fn_61747.cljs$core$IFn$_invoke$arity$1 ? effect_fn_61747.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_61747.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__61748 = cljs.core.next(seq__61651__$1);
var G__61749 = null;
var G__61750 = (0);
var G__61751 = (0);
seq__61651 = G__61748;
chunk__61652 = G__61749;
count__61653 = G__61750;
i__61654 = G__61751;
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
var seq__61667 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__61668 = null;
var count__61669 = (0);
var i__61670 = (0);
while(true){
if((i__61670 < count__61669)){
var event = chunk__61668.cljs$core$IIndexed$_nth$arity$2(null,i__61670);
re_frame.router.dispatch(event);


var G__61753 = seq__61667;
var G__61754 = chunk__61668;
var G__61755 = count__61669;
var G__61756 = (i__61670 + (1));
seq__61667 = G__61753;
chunk__61668 = G__61754;
count__61669 = G__61755;
i__61670 = G__61756;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__61667);
if(temp__5804__auto__){
var seq__61667__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__61667__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__61667__$1);
var G__61757 = cljs.core.chunk_rest(seq__61667__$1);
var G__61758 = c__5568__auto__;
var G__61759 = cljs.core.count(c__5568__auto__);
var G__61760 = (0);
seq__61667 = G__61757;
chunk__61668 = G__61758;
count__61669 = G__61759;
i__61670 = G__61760;
continue;
} else {
var event = cljs.core.first(seq__61667__$1);
re_frame.router.dispatch(event);


var G__61761 = cljs.core.next(seq__61667__$1);
var G__61762 = null;
var G__61763 = (0);
var G__61764 = (0);
seq__61667 = G__61761;
chunk__61668 = G__61762;
count__61669 = G__61763;
i__61670 = G__61764;
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
var seq__61671 = cljs.core.seq(value);
var chunk__61672 = null;
var count__61673 = (0);
var i__61674 = (0);
while(true){
if((i__61674 < count__61673)){
var event = chunk__61672.cljs$core$IIndexed$_nth$arity$2(null,i__61674);
clear_event(event);


var G__61765 = seq__61671;
var G__61766 = chunk__61672;
var G__61767 = count__61673;
var G__61768 = (i__61674 + (1));
seq__61671 = G__61765;
chunk__61672 = G__61766;
count__61673 = G__61767;
i__61674 = G__61768;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__61671);
if(temp__5804__auto__){
var seq__61671__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__61671__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__61671__$1);
var G__61769 = cljs.core.chunk_rest(seq__61671__$1);
var G__61770 = c__5568__auto__;
var G__61771 = cljs.core.count(c__5568__auto__);
var G__61772 = (0);
seq__61671 = G__61769;
chunk__61672 = G__61770;
count__61673 = G__61771;
i__61674 = G__61772;
continue;
} else {
var event = cljs.core.first(seq__61671__$1);
clear_event(event);


var G__61773 = cljs.core.next(seq__61671__$1);
var G__61774 = null;
var G__61775 = (0);
var G__61776 = (0);
seq__61671 = G__61773;
chunk__61672 = G__61774;
count__61673 = G__61775;
i__61674 = G__61776;
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
