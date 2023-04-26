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
shadow.remote.runtime.shared.reply = (function shadow$remote$runtime$shared$reply(runtime,p__65183,res){
var map__65184 = p__65183;
var map__65184__$1 = cljs.core.__destructure_map(map__65184);
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65184__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65184__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var res__$1 = (function (){var G__65185 = res;
var G__65185__$1 = (cljs.core.truth_(call_id)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__65185,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id):G__65185);
if(cljs.core.truth_(from)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__65185__$1,new cljs.core.Keyword(null,"to","to",192099007),from);
} else {
return G__65185__$1;
}
})();
return shadow.remote.runtime.api.relay_msg(runtime,res__$1);
});
shadow.remote.runtime.shared.call = (function shadow$remote$runtime$shared$call(var_args){
var G__65203 = arguments.length;
switch (G__65203) {
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

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4 = (function (p__65213,msg,handlers,timeout_after_ms){
var map__65215 = p__65213;
var map__65215__$1 = cljs.core.__destructure_map(map__65215);
var runtime = map__65215__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65215__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var call_id = new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handlers","handlers",79528781),handlers,new cljs.core.Keyword(null,"called-at","called-at",607081160),shadow.remote.runtime.shared.now(),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg,new cljs.core.Keyword(null,"timeout","timeout",-318625318),timeout_after_ms], null));

return shadow.remote.runtime.api.relay_msg(runtime,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id));
}));

(shadow.remote.runtime.shared.call.cljs$lang$maxFixedArity = 4);

shadow.remote.runtime.shared.trigger_BANG_ = (function shadow$remote$runtime$shared$trigger_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___65510 = arguments.length;
var i__5770__auto___65511 = (0);
while(true){
if((i__5770__auto___65511 < len__5769__auto___65510)){
args__5775__auto__.push((arguments[i__5770__auto___65511]));

var G__65512 = (i__5770__auto___65511 + (1));
i__5770__auto___65511 = G__65512;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((2) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((2)),(0),null)):null);
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5776__auto__);
});

(shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__65252,ev,args){
var map__65253 = p__65252;
var map__65253__$1 = cljs.core.__destructure_map(map__65253);
var runtime = map__65253__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65253__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var seq__65254 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__65257 = null;
var count__65258 = (0);
var i__65259 = (0);
while(true){
if((i__65259 < count__65258)){
var ext = chunk__65257.cljs$core$IIndexed$_nth$arity$2(null,i__65259);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__65514 = seq__65254;
var G__65515 = chunk__65257;
var G__65516 = count__65258;
var G__65517 = (i__65259 + (1));
seq__65254 = G__65514;
chunk__65257 = G__65515;
count__65258 = G__65516;
i__65259 = G__65517;
continue;
} else {
var G__65518 = seq__65254;
var G__65519 = chunk__65257;
var G__65520 = count__65258;
var G__65521 = (i__65259 + (1));
seq__65254 = G__65518;
chunk__65257 = G__65519;
count__65258 = G__65520;
i__65259 = G__65521;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__65254);
if(temp__5804__auto__){
var seq__65254__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__65254__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__65254__$1);
var G__65523 = cljs.core.chunk_rest(seq__65254__$1);
var G__65524 = c__5568__auto__;
var G__65525 = cljs.core.count(c__5568__auto__);
var G__65526 = (0);
seq__65254 = G__65523;
chunk__65257 = G__65524;
count__65258 = G__65525;
i__65259 = G__65526;
continue;
} else {
var ext = cljs.core.first(seq__65254__$1);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__65528 = cljs.core.next(seq__65254__$1);
var G__65529 = null;
var G__65530 = (0);
var G__65531 = (0);
seq__65254 = G__65528;
chunk__65257 = G__65529;
count__65258 = G__65530;
i__65259 = G__65531;
continue;
} else {
var G__65532 = cljs.core.next(seq__65254__$1);
var G__65533 = null;
var G__65534 = (0);
var G__65535 = (0);
seq__65254 = G__65532;
chunk__65257 = G__65533;
count__65258 = G__65534;
i__65259 = G__65535;
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
(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$applyTo = (function (seq65244){
var G__65245 = cljs.core.first(seq65244);
var seq65244__$1 = cljs.core.next(seq65244);
var G__65246 = cljs.core.first(seq65244__$1);
var seq65244__$2 = cljs.core.next(seq65244__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__65245,G__65246,seq65244__$2);
}));

shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__65300,p__65301){
var map__65302 = p__65300;
var map__65302__$1 = cljs.core.__destructure_map(map__65302);
var runtime = map__65302__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65302__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__65303 = p__65301;
var map__65303__$1 = cljs.core.__destructure_map(map__65303);
var msg = map__65303__$1;
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65303__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id);

var map__65306 = cljs.core.deref(state_ref);
var map__65306__$1 = cljs.core.__destructure_map(map__65306);
var client_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65306__$1,new cljs.core.Keyword(null,"client-info","client-info",1958982504));
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65306__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
shadow.remote.runtime.shared.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"hello","hello",-245025397),new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info], null));

return shadow.remote.runtime.shared.trigger_BANG_(runtime,new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125));
});
shadow.remote.runtime.shared.ping = (function shadow$remote$runtime$shared$ping(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"pong","pong",-172484958)], null));
});
shadow.remote.runtime.shared.get_client_id = (function shadow$remote$runtime$shared$get_client_id(p__65308){
var map__65309 = p__65308;
var map__65309__$1 = cljs.core.__destructure_map(map__65309);
var runtime = map__65309__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65309__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var or__5045__auto__ = new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("runtime has no assigned runtime-id",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null));
}
});
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__65313,msg){
var map__65314 = p__65313;
var map__65314__$1 = cljs.core.__destructure_map(map__65314);
var runtime = map__65314__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65314__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__65322,key,p__65323){
var map__65330 = p__65322;
var map__65330__$1 = cljs.core.__destructure_map(map__65330);
var state = map__65330__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65330__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__65331 = p__65323;
var map__65331__$1 = cljs.core.__destructure_map(map__65331);
var spec = map__65331__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65331__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
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
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__65353,key,spec){
var map__65354 = p__65353;
var map__65354__$1 = cljs.core.__destructure_map(map__65354);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65354__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(runtime){
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__65359_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__65359_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__65360_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__65360_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__65361_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__65361_SHARP_);
}),new cljs.core.Keyword(null,"ping","ping",-1670114784),(function (p1__65362_SHARP_){
return shadow.remote.runtime.shared.ping(runtime,p1__65362_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__65363_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__65363_SHARP_);
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
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__65412,key){
var map__65413 = p__65412;
var map__65413__$1 = cljs.core.__destructure_map(map__65413);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65413__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.unhandled_call_result = (function shadow$remote$runtime$shared$unhandled_call_result(call_config,msg){
return console.warn("unhandled call result",msg,call_config);
});
shadow.remote.runtime.shared.unhandled_client_not_found = (function shadow$remote$runtime$shared$unhandled_client_not_found(p__65446,msg){
var map__65447 = p__65446;
var map__65447__$1 = cljs.core.__destructure_map(map__65447);
var runtime = map__65447__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65447__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic(runtime,new cljs.core.Keyword(null,"on-client-not-found","on-client-not-found",-642452849),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0));
});
shadow.remote.runtime.shared.reply_unknown_op = (function shadow$remote$runtime$shared$reply_unknown_op(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__65472,p__65473){
var map__65477 = p__65472;
var map__65477__$1 = cljs.core.__destructure_map(map__65477);
var runtime = map__65477__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65477__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__65478 = p__65473;
var map__65478__$1 = cljs.core.__destructure_map(map__65478);
var msg = map__65478__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65478__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65478__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
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
var seq__65491 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__65493 = null;
var count__65494 = (0);
var i__65495 = (0);
while(true){
if((i__65495 < count__65494)){
var map__65502 = chunk__65493.cljs$core$IIndexed$_nth$arity$2(null,i__65495);
var map__65502__$1 = cljs.core.__destructure_map(map__65502);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65502__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__65561 = seq__65491;
var G__65562 = chunk__65493;
var G__65563 = count__65494;
var G__65564 = (i__65495 + (1));
seq__65491 = G__65561;
chunk__65493 = G__65562;
count__65494 = G__65563;
i__65495 = G__65564;
continue;
} else {
var G__65565 = seq__65491;
var G__65566 = chunk__65493;
var G__65567 = count__65494;
var G__65568 = (i__65495 + (1));
seq__65491 = G__65565;
chunk__65493 = G__65566;
count__65494 = G__65567;
i__65495 = G__65568;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__65491);
if(temp__5804__auto__){
var seq__65491__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__65491__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__65491__$1);
var G__65569 = cljs.core.chunk_rest(seq__65491__$1);
var G__65570 = c__5568__auto__;
var G__65571 = cljs.core.count(c__5568__auto__);
var G__65572 = (0);
seq__65491 = G__65569;
chunk__65493 = G__65570;
count__65494 = G__65571;
i__65495 = G__65572;
continue;
} else {
var map__65503 = cljs.core.first(seq__65491__$1);
var map__65503__$1 = cljs.core.__destructure_map(map__65503);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65503__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__65573 = cljs.core.next(seq__65491__$1);
var G__65574 = null;
var G__65575 = (0);
var G__65576 = (0);
seq__65491 = G__65573;
chunk__65493 = G__65574;
count__65494 = G__65575;
i__65495 = G__65576;
continue;
} else {
var G__65577 = cljs.core.next(seq__65491__$1);
var G__65578 = null;
var G__65579 = (0);
var G__65580 = (0);
seq__65491 = G__65577;
chunk__65493 = G__65578;
count__65494 = G__65579;
i__65495 = G__65580;
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
