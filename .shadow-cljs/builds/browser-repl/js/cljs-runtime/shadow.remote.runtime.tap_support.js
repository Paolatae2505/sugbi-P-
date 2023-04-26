goog.provide('shadow.remote.runtime.tap_support');
shadow.remote.runtime.tap_support.tap_subscribe = (function shadow$remote$runtime$tap_support$tap_subscribe(p__66795,p__66796){
var map__66798 = p__66795;
var map__66798__$1 = cljs.core.__destructure_map(map__66798);
var svc = map__66798__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66798__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66798__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66798__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__66799 = p__66796;
var map__66799__$1 = cljs.core.__destructure_map(map__66799);
var msg = map__66799__$1;
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66799__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var summary = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66799__$1,new cljs.core.Keyword(null,"summary","summary",380847952));
var history__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66799__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__66799__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(subs_ref,cljs.core.assoc,from,msg);

if(cljs.core.truth_(history__$1)){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-subscribed","tap-subscribed",-1882247432),new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (oid){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"oid","oid",-768692334),oid,new cljs.core.Keyword(null,"summary","summary",380847952),shadow.remote.runtime.obj_support.obj_describe_STAR_(obj_support,oid)], null);
}),shadow.remote.runtime.obj_support.get_tap_history(obj_support,num)))], null));
} else {
return null;
}
});
shadow.remote.runtime.tap_support.tap_unsubscribe = (function shadow$remote$runtime$tap_support$tap_unsubscribe(p__66810,p__66811){
var map__66812 = p__66810;
var map__66812__$1 = cljs.core.__destructure_map(map__66812);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66812__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__66813 = p__66811;
var map__66813__$1 = cljs.core.__destructure_map(map__66813);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66813__$1,new cljs.core.Keyword(null,"from","from",1815293044));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,from);
});
shadow.remote.runtime.tap_support.request_tap_history = (function shadow$remote$runtime$tap_support$request_tap_history(p__66814,p__66815){
var map__66819 = p__66814;
var map__66819__$1 = cljs.core.__destructure_map(map__66819);
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66819__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66819__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__66820 = p__66815;
var map__66820__$1 = cljs.core.__destructure_map(map__66820);
var msg = map__66820__$1;
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__66820__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
var tap_ids = shadow.remote.runtime.obj_support.get_tap_history(obj_support,num);
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-history","tap-history",-282803347),new cljs.core.Keyword(null,"oids","oids",-1580877688),tap_ids], null));
});
shadow.remote.runtime.tap_support.tool_disconnect = (function shadow$remote$runtime$tap_support$tool_disconnect(p__66824,tid){
var map__66825 = p__66824;
var map__66825__$1 = cljs.core.__destructure_map(map__66825);
var svc = map__66825__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66825__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,tid);
});
shadow.remote.runtime.tap_support.start = (function shadow$remote$runtime$tap_support$start(runtime,obj_support){
var subs_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var tap_fn = (function shadow$remote$runtime$tap_support$start_$_runtime_tap(obj){
if((!((obj == null)))){
var oid = shadow.remote.runtime.obj_support.register(obj_support,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"tap","tap",-1086702463)], null));
var seq__66836 = cljs.core.seq(cljs.core.deref(subs_ref));
var chunk__66837 = null;
var count__66838 = (0);
var i__66839 = (0);
while(true){
if((i__66839 < count__66838)){
var vec__66854 = chunk__66837.cljs$core$IIndexed$_nth$arity$2(null,i__66839);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66854,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66854,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__66862 = seq__66836;
var G__66863 = chunk__66837;
var G__66864 = count__66838;
var G__66865 = (i__66839 + (1));
seq__66836 = G__66862;
chunk__66837 = G__66863;
count__66838 = G__66864;
i__66839 = G__66865;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__66836);
if(temp__5804__auto__){
var seq__66836__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__66836__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__66836__$1);
var G__66866 = cljs.core.chunk_rest(seq__66836__$1);
var G__66867 = c__5568__auto__;
var G__66868 = cljs.core.count(c__5568__auto__);
var G__66869 = (0);
seq__66836 = G__66866;
chunk__66837 = G__66867;
count__66838 = G__66868;
i__66839 = G__66869;
continue;
} else {
var vec__66857 = cljs.core.first(seq__66836__$1);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66857,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66857,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__66870 = cljs.core.next(seq__66836__$1);
var G__66871 = null;
var G__66872 = (0);
var G__66873 = (0);
seq__66836 = G__66870;
chunk__66837 = G__66871;
count__66838 = G__66872;
i__66839 = G__66873;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
});
var svc = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229),obj_support,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461),tap_fn,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911),subs_ref], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tap-subscribe","tap-subscribe",411179050),(function (p1__66831_SHARP_){
return shadow.remote.runtime.tap_support.tap_subscribe(svc,p1__66831_SHARP_);
}),new cljs.core.Keyword(null,"tap-unsubscribe","tap-unsubscribe",1183890755),(function (p1__66832_SHARP_){
return shadow.remote.runtime.tap_support.tap_unsubscribe(svc,p1__66832_SHARP_);
}),new cljs.core.Keyword(null,"request-tap-history","request-tap-history",-670837812),(function (p1__66833_SHARP_){
return shadow.remote.runtime.tap_support.request_tap_history(svc,p1__66833_SHARP_);
})], null),new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366),(function (p1__66834_SHARP_){
return shadow.remote.runtime.tap_support.tool_disconnect(svc,p1__66834_SHARP_);
})], null));

cljs.core.add_tap(tap_fn);

return svc;
});
shadow.remote.runtime.tap_support.stop = (function shadow$remote$runtime$tap_support$stop(p__66860){
var map__66861 = p__66860;
var map__66861__$1 = cljs.core.__destructure_map(map__66861);
var svc = map__66861__$1;
var tap_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66861__$1,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66861__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
cljs.core.remove_tap(tap_fn);

return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674));
});

//# sourceMappingURL=shadow.remote.runtime.tap_support.js.map
