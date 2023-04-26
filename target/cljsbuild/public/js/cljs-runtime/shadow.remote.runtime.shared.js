goog.provide('shadow.remote.runtime.shared');
shadow.remote.runtime.shared.init_state = (function shadow$remote$runtime$shared$init_state(client_info){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),(0),new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.PersistentArrayMap.EMPTY], null);
});
shadow.remote.runtime.shared.now = (function shadow$remote$runtime$shared$now(){
return Date.now();
});
shadow.remote.runtime.shared.relay_msg = (function shadow$remote$runtime$shared$relay_msg(runtime,msg){
return shadow.remote.runtime.api.relay_msg(runtime,msg);
});
shadow.remote.runtime.shared.reply = (function shadow$remote$runtime$shared$reply(runtime,p__65767,res){
var map__65768 = p__65767;
var map__65768__$1 = cljs.core.__destructure_map(map__65768);
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65768__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65768__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var res__$1 = (function (){var G__65769 = res;
var G__65769__$1 = (cljs.core.truth_(call_id)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__65769,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id):G__65769);
if(cljs.core.truth_(from)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__65769__$1,new cljs.core.Keyword(null,"to","to",192099007),from);
} else {
return G__65769__$1;
}
})();
return shadow.remote.runtime.api.relay_msg(runtime,res__$1);
});
shadow.remote.runtime.shared.call = (function shadow$remote$runtime$shared$call(var_args){
var G__65773 = arguments.length;
switch (G__65773) {
case 3:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3 = (function (runtime,msg,handlers){
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4(runtime,msg,handlers,(0));
}));

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4 = (function (p__65775,msg,handlers,timeout_after_ms){
var map__65776 = p__65775;
var map__65776__$1 = cljs.core.__destructure_map(map__65776);
var runtime = map__65776__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65776__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var call_id = new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handlers","handlers",79528781),handlers,new cljs.core.Keyword(null,"called-at","called-at",607081160),shadow.remote.runtime.shared.now(),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg,new cljs.core.Keyword(null,"timeout","timeout",-318625318),timeout_after_ms], null));

return shadow.remote.runtime.api.relay_msg(runtime,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id));
}));

(shadow.remote.runtime.shared.call.cljs$lang$maxFixedArity = 4);

shadow.remote.runtime.shared.trigger_BANG_ = (function shadow$remote$runtime$shared$trigger_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___65866 = arguments.length;
var i__5770__auto___65867 = (0);
while(true){
if((i__5770__auto___65867 < len__5769__auto___65866)){
args__5775__auto__.push((arguments[i__5770__auto___65867]));

var G__65869 = (i__5770__auto___65867 + (1));
i__5770__auto___65867 = G__65869;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((2) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((2)),(0),null)):null);
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5776__auto__);
});

(shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__65784,ev,args){
var map__65785 = p__65784;
var map__65785__$1 = cljs.core.__destructure_map(map__65785);
var runtime = map__65785__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65785__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var seq__65786 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__65789 = null;
var count__65790 = (0);
var i__65791 = (0);
while(true){
if((i__65791 < count__65790)){
var ext = chunk__65789.cljs$core$IIndexed$_nth$arity$2(null,i__65791);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__65870 = seq__65786;
var G__65871 = chunk__65789;
var G__65872 = count__65790;
var G__65873 = (i__65791 + (1));
seq__65786 = G__65870;
chunk__65789 = G__65871;
count__65790 = G__65872;
i__65791 = G__65873;
continue;
} else {
var G__65874 = seq__65786;
var G__65875 = chunk__65789;
var G__65876 = count__65790;
var G__65877 = (i__65791 + (1));
seq__65786 = G__65874;
chunk__65789 = G__65875;
count__65790 = G__65876;
i__65791 = G__65877;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__65786);
if(temp__5804__auto__){
var seq__65786__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__65786__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__65786__$1);
var G__65879 = cljs.core.chunk_rest(seq__65786__$1);
var G__65880 = c__5568__auto__;
var G__65881 = cljs.core.count(c__5568__auto__);
var G__65882 = (0);
seq__65786 = G__65879;
chunk__65789 = G__65880;
count__65790 = G__65881;
i__65791 = G__65882;
continue;
} else {
var ext = cljs.core.first(seq__65786__$1);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__65884 = cljs.core.next(seq__65786__$1);
var G__65885 = null;
var G__65886 = (0);
var G__65887 = (0);
seq__65786 = G__65884;
chunk__65789 = G__65885;
count__65790 = G__65886;
i__65791 = G__65887;
continue;
} else {
var G__65888 = cljs.core.next(seq__65786__$1);
var G__65889 = null;
var G__65890 = (0);
var G__65891 = (0);
seq__65786 = G__65888;
chunk__65789 = G__65889;
count__65790 = G__65890;
i__65791 = G__65891;
continue;
}
}
} else {
return null;
}
}
break;
}
}));

(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$applyTo = (function (seq65781){
var G__65782 = cljs.core.first(seq65781);
var seq65781__$1 = cljs.core.next(seq65781);
var G__65783 = cljs.core.first(seq65781__$1);
var seq65781__$2 = cljs.core.next(seq65781__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__65782,G__65783,seq65781__$2);
}));

shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__65796,p__65797){
var map__65798 = p__65796;
var map__65798__$1 = cljs.core.__destructure_map(map__65798);
var runtime = map__65798__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65798__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__65799 = p__65797;
var map__65799__$1 = cljs.core.__destructure_map(map__65799);
var msg = map__65799__$1;
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65799__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id);

var map__65802 = cljs.core.deref(state_ref);
var map__65802__$1 = cljs.core.__destructure_map(map__65802);
var client_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65802__$1,new cljs.core.Keyword(null,"client-info","client-info",1958982504));
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65802__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
shadow.remote.runtime.shared.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"hello","hello",-245025397),new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info], null));

return shadow.remote.runtime.shared.trigger_BANG_(runtime,new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125));
});
shadow.remote.runtime.shared.ping = (function shadow$remote$runtime$shared$ping(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"pong","pong",-172484958)], null));
});
shadow.remote.runtime.shared.get_client_id = (function shadow$remote$runtime$shared$get_client_id(p__65804){
var map__65805 = p__65804;
var map__65805__$1 = cljs.core.__destructure_map(map__65805);
var runtime = map__65805__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65805__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var or__5045__auto__ = new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("runtime has no assigned runtime-id",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null));
}
});
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__65806,msg){
var map__65807 = p__65806;
var map__65807__$1 = cljs.core.__destructure_map(map__65807);
var runtime = map__65807__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65807__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__65811,key,p__65812){
var map__65813 = p__65811;
var map__65813__$1 = cljs.core.__destructure_map(map__65813);
var state = map__65813__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65813__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__65814 = p__65812;
var map__65814__$1 = cljs.core.__destructure_map(map__65814);
var spec = map__65814__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65814__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
if(cljs.core.contains_QMARK_(extensions,key)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("extension already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"spec","spec",347520401),spec], null));
} else {
}

return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("op already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"op","op",-1882987955),op_kw], null));
} else {
}

return cljs.core.assoc_in(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null),op_handler);
}),cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null),spec),ops);
});
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__65815,key,spec){
var map__65816 = p__65815;
var map__65816__$1 = cljs.core.__destructure_map(map__65816);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65816__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(runtime){
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__65818_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__65818_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__65819_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__65819_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__65820_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__65820_SHARP_);
}),new cljs.core.Keyword(null,"ping","ping",-1670114784),(function (p1__65821_SHARP_){
return shadow.remote.runtime.shared.ping(runtime,p1__65821_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__65822_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__65822_SHARP_);
})], null)], null));
});
shadow.remote.runtime.shared.del_extension_STAR_ = (function shadow$remote$runtime$shared$del_extension_STAR_(state,key){
var ext = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null));
if(cljs.core.not(ext)){
return state;
} else {
return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(state__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063)], null),cljs.core.dissoc,op_kw);
}),cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.dissoc,key),new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(ext));
}
});
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__65833,key){
var map__65834 = p__65833;
var map__65834__$1 = cljs.core.__destructure_map(map__65834);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65834__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.unhandled_call_result = (function shadow$remote$runtime$shared$unhandled_call_result(call_config,msg){
return console.warn("unhandled call result",msg,call_config);
});
shadow.remote.runtime.shared.unhandled_client_not_found = (function shadow$remote$runtime$shared$unhandled_client_not_found(p__65841,msg){
var map__65842 = p__65841;
var map__65842__$1 = cljs.core.__destructure_map(map__65842);
var runtime = map__65842__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65842__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic(runtime,new cljs.core.Keyword(null,"on-client-not-found","on-client-not-found",-642452849),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0));
});
shadow.remote.runtime.shared.reply_unknown_op = (function shadow$remote$runtime$shared$reply_unknown_op(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__65845,p__65846){
var map__65848 = p__65845;
var map__65848__$1 = cljs.core.__destructure_map(map__65848);
var runtime = map__65848__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65848__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__65849 = p__65846;
var map__65849__$1 = cljs.core.__destructure_map(map__65849);
var msg = map__65849__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65849__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65849__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var state = cljs.core.deref(state_ref);
var op_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op], null));
if(cljs.core.truth_(call_id)){
var cfg = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null));
var call_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cfg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"handlers","handlers",79528781),op], null));
if(cljs.core.truth_(call_handler)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([call_id], 0));

return (call_handler.cljs$core$IFn$_invoke$arity$1 ? call_handler.cljs$core$IFn$_invoke$arity$1(msg) : call_handler.call(null,msg));
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
return shadow.remote.runtime.shared.unhandled_call_result(cfg,msg);

}
}
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-not-found","client-not-found",-1754042614),op)){
return shadow.remote.runtime.shared.unhandled_client_not_found(runtime,msg);
} else {
return shadow.remote.runtime.shared.reply_unknown_op(runtime,msg);

}
}
}
});
shadow.remote.runtime.shared.run_on_idle = (function shadow$remote$runtime$shared$run_on_idle(state_ref){
var seq__65851 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__65853 = null;
var count__65854 = (0);
var i__65855 = (0);
while(true){
if((i__65855 < count__65854)){
var map__65859 = chunk__65853.cljs$core$IIndexed$_nth$arity$2(null,i__65855);
var map__65859__$1 = cljs.core.__destructure_map(map__65859);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65859__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__65902 = seq__65851;
var G__65903 = chunk__65853;
var G__65904 = count__65854;
var G__65905 = (i__65855 + (1));
seq__65851 = G__65902;
chunk__65853 = G__65903;
count__65854 = G__65904;
i__65855 = G__65905;
continue;
} else {
var G__65906 = seq__65851;
var G__65907 = chunk__65853;
var G__65908 = count__65854;
var G__65909 = (i__65855 + (1));
seq__65851 = G__65906;
chunk__65853 = G__65907;
count__65854 = G__65908;
i__65855 = G__65909;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__65851);
if(temp__5804__auto__){
var seq__65851__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__65851__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__65851__$1);
var G__65913 = cljs.core.chunk_rest(seq__65851__$1);
var G__65914 = c__5568__auto__;
var G__65915 = cljs.core.count(c__5568__auto__);
var G__65916 = (0);
seq__65851 = G__65913;
chunk__65853 = G__65914;
count__65854 = G__65915;
i__65855 = G__65916;
continue;
} else {
var map__65860 = cljs.core.first(seq__65851__$1);
var map__65860__$1 = cljs.core.__destructure_map(map__65860);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65860__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__65917 = cljs.core.next(seq__65851__$1);
var G__65918 = null;
var G__65919 = (0);
var G__65920 = (0);
seq__65851 = G__65917;
chunk__65853 = G__65918;
count__65854 = G__65919;
i__65855 = G__65920;
continue;
} else {
var G__65921 = cljs.core.next(seq__65851__$1);
var G__65922 = null;
var G__65923 = (0);
var G__65924 = (0);
seq__65851 = G__65921;
chunk__65853 = G__65922;
count__65854 = G__65923;
i__65855 = G__65924;
continue;
}
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=shadow.remote.runtime.shared.js.map
