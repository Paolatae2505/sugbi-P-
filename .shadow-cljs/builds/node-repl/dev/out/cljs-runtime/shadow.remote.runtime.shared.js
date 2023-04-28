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
shadow.remote.runtime.shared.reply = (function shadow$remote$runtime$shared$reply(runtime,p__60747,res){
var map__60748 = p__60747;
var map__60748__$1 = cljs.core.__destructure_map(map__60748);
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60748__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60748__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var res__$1 = (function (){var G__60749 = res;
var G__60749__$1 = (cljs.core.truth_(call_id)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__60749,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id):G__60749);
if(cljs.core.truth_(from)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__60749__$1,new cljs.core.Keyword(null,"to","to",192099007),from);
} else {
return G__60749__$1;
}
})();
return shadow.remote.runtime.api.relay_msg(runtime,res__$1);
});
shadow.remote.runtime.shared.call = (function shadow$remote$runtime$shared$call(var_args){
var G__60751 = arguments.length;
switch (G__60751) {
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

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4 = (function (p__60752,msg,handlers,timeout_after_ms){
var map__60753 = p__60752;
var map__60753__$1 = cljs.core.__destructure_map(map__60753);
var runtime = map__60753__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60753__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var call_id = new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handlers","handlers",79528781),handlers,new cljs.core.Keyword(null,"called-at","called-at",607081160),shadow.remote.runtime.shared.now(),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg,new cljs.core.Keyword(null,"timeout","timeout",-318625318),timeout_after_ms], null));

return shadow.remote.runtime.api.relay_msg(runtime,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id));
}));

(shadow.remote.runtime.shared.call.cljs$lang$maxFixedArity = 4);

shadow.remote.runtime.shared.trigger_BANG_ = (function shadow$remote$runtime$shared$trigger_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___60861 = arguments.length;
var i__5770__auto___60862 = (0);
while(true){
if((i__5770__auto___60862 < len__5769__auto___60861)){
args__5775__auto__.push((arguments[i__5770__auto___60862]));

var G__60863 = (i__5770__auto___60862 + (1));
i__5770__auto___60862 = G__60863;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((2) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((2)),(0),null)):null);
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5776__auto__);
});

(shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__60757,ev,args){
var map__60758 = p__60757;
var map__60758__$1 = cljs.core.__destructure_map(map__60758);
var runtime = map__60758__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60758__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var seq__60759 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__60762 = null;
var count__60763 = (0);
var i__60764 = (0);
while(true){
if((i__60764 < count__60763)){
var ext = chunk__60762.cljs$core$IIndexed$_nth$arity$2(null,i__60764);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__60866 = seq__60759;
var G__60867 = chunk__60762;
var G__60868 = count__60763;
var G__60869 = (i__60764 + (1));
seq__60759 = G__60866;
chunk__60762 = G__60867;
count__60763 = G__60868;
i__60764 = G__60869;
continue;
} else {
var G__60870 = seq__60759;
var G__60871 = chunk__60762;
var G__60872 = count__60763;
var G__60873 = (i__60764 + (1));
seq__60759 = G__60870;
chunk__60762 = G__60871;
count__60763 = G__60872;
i__60764 = G__60873;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__60759);
if(temp__5804__auto__){
var seq__60759__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__60759__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__60759__$1);
var G__60878 = cljs.core.chunk_rest(seq__60759__$1);
var G__60879 = c__5568__auto__;
var G__60880 = cljs.core.count(c__5568__auto__);
var G__60881 = (0);
seq__60759 = G__60878;
chunk__60762 = G__60879;
count__60763 = G__60880;
i__60764 = G__60881;
continue;
} else {
var ext = cljs.core.first(seq__60759__$1);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__60882 = cljs.core.next(seq__60759__$1);
var G__60883 = null;
var G__60884 = (0);
var G__60885 = (0);
seq__60759 = G__60882;
chunk__60762 = G__60883;
count__60763 = G__60884;
i__60764 = G__60885;
continue;
} else {
var G__60886 = cljs.core.next(seq__60759__$1);
var G__60887 = null;
var G__60888 = (0);
var G__60889 = (0);
seq__60759 = G__60886;
chunk__60762 = G__60887;
count__60763 = G__60888;
i__60764 = G__60889;
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
(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$applyTo = (function (seq60754){
var G__60755 = cljs.core.first(seq60754);
var seq60754__$1 = cljs.core.next(seq60754);
var G__60756 = cljs.core.first(seq60754__$1);
var seq60754__$2 = cljs.core.next(seq60754__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__60755,G__60756,seq60754__$2);
}));

shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__60773,p__60774){
var map__60775 = p__60773;
var map__60775__$1 = cljs.core.__destructure_map(map__60775);
var runtime = map__60775__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60775__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__60776 = p__60774;
var map__60776__$1 = cljs.core.__destructure_map(map__60776);
var msg = map__60776__$1;
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60776__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id);

var map__60785 = cljs.core.deref(state_ref);
var map__60785__$1 = cljs.core.__destructure_map(map__60785);
var client_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60785__$1,new cljs.core.Keyword(null,"client-info","client-info",1958982504));
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60785__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
shadow.remote.runtime.shared.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"hello","hello",-245025397),new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info], null));

return shadow.remote.runtime.shared.trigger_BANG_(runtime,new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125));
});
shadow.remote.runtime.shared.ping = (function shadow$remote$runtime$shared$ping(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"pong","pong",-172484958)], null));
});
shadow.remote.runtime.shared.get_client_id = (function shadow$remote$runtime$shared$get_client_id(p__60798){
var map__60799 = p__60798;
var map__60799__$1 = cljs.core.__destructure_map(map__60799);
var runtime = map__60799__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60799__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var or__5045__auto__ = new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("runtime has no assigned runtime-id",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null));
}
});
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__60803,msg){
var map__60804 = p__60803;
var map__60804__$1 = cljs.core.__destructure_map(map__60804);
var runtime = map__60804__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60804__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__60807,key,p__60808){
var map__60809 = p__60807;
var map__60809__$1 = cljs.core.__destructure_map(map__60809);
var state = map__60809__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60809__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__60810 = p__60808;
var map__60810__$1 = cljs.core.__destructure_map(map__60810);
var spec = map__60810__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60810__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
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
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__60812,key,spec){
var map__60813 = p__60812;
var map__60813__$1 = cljs.core.__destructure_map(map__60813);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60813__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(runtime){
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__60814_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__60814_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__60815_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__60815_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__60816_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__60816_SHARP_);
}),new cljs.core.Keyword(null,"ping","ping",-1670114784),(function (p1__60817_SHARP_){
return shadow.remote.runtime.shared.ping(runtime,p1__60817_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__60818_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__60818_SHARP_);
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
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__60828,key){
var map__60829 = p__60828;
var map__60829__$1 = cljs.core.__destructure_map(map__60829);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60829__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.unhandled_call_result = (function shadow$remote$runtime$shared$unhandled_call_result(call_config,msg){
return console.warn("unhandled call result",msg,call_config);
});
shadow.remote.runtime.shared.unhandled_client_not_found = (function shadow$remote$runtime$shared$unhandled_client_not_found(p__60830,msg){
var map__60831 = p__60830;
var map__60831__$1 = cljs.core.__destructure_map(map__60831);
var runtime = map__60831__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60831__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic(runtime,new cljs.core.Keyword(null,"on-client-not-found","on-client-not-found",-642452849),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0));
});
shadow.remote.runtime.shared.reply_unknown_op = (function shadow$remote$runtime$shared$reply_unknown_op(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__60833,p__60834){
var map__60835 = p__60833;
var map__60835__$1 = cljs.core.__destructure_map(map__60835);
var runtime = map__60835__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60835__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__60839 = p__60834;
var map__60839__$1 = cljs.core.__destructure_map(map__60839);
var msg = map__60839__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60839__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60839__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
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
var seq__60848 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__60850 = null;
var count__60851 = (0);
var i__60852 = (0);
while(true){
if((i__60852 < count__60851)){
var map__60856 = chunk__60850.cljs$core$IIndexed$_nth$arity$2(null,i__60852);
var map__60856__$1 = cljs.core.__destructure_map(map__60856);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60856__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__60901 = seq__60848;
var G__60902 = chunk__60850;
var G__60903 = count__60851;
var G__60904 = (i__60852 + (1));
seq__60848 = G__60901;
chunk__60850 = G__60902;
count__60851 = G__60903;
i__60852 = G__60904;
continue;
} else {
var G__60923 = seq__60848;
var G__60924 = chunk__60850;
var G__60925 = count__60851;
var G__60926 = (i__60852 + (1));
seq__60848 = G__60923;
chunk__60850 = G__60924;
count__60851 = G__60925;
i__60852 = G__60926;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__60848);
if(temp__5804__auto__){
var seq__60848__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__60848__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__60848__$1);
var G__60928 = cljs.core.chunk_rest(seq__60848__$1);
var G__60929 = c__5568__auto__;
var G__60930 = cljs.core.count(c__5568__auto__);
var G__60931 = (0);
seq__60848 = G__60928;
chunk__60850 = G__60929;
count__60851 = G__60930;
i__60852 = G__60931;
continue;
} else {
var map__60857 = cljs.core.first(seq__60848__$1);
var map__60857__$1 = cljs.core.__destructure_map(map__60857);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60857__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__60932 = cljs.core.next(seq__60848__$1);
var G__60933 = null;
var G__60934 = (0);
var G__60935 = (0);
seq__60848 = G__60932;
chunk__60850 = G__60933;
count__60851 = G__60934;
i__60852 = G__60935;
continue;
} else {
var G__60936 = cljs.core.next(seq__60848__$1);
var G__60937 = null;
var G__60938 = (0);
var G__60939 = (0);
seq__60848 = G__60936;
chunk__60850 = G__60937;
count__60851 = G__60938;
i__60852 = G__60939;
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
