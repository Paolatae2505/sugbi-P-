goog.provide('shadow.remote.runtime.tap_support');
shadow.remote.runtime.tap_support.tap_subscribe = (function shadow$remote$runtime$tap_support$tap_subscribe(p__67557,p__67558){
var map__67559 = p__67557;
var map__67559__$1 = cljs.core.__destructure_map(map__67559);
var svc = map__67559__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67559__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67559__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67559__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__67560 = p__67558;
var map__67560__$1 = cljs.core.__destructure_map(map__67560);
var msg = map__67560__$1;
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67560__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var summary = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67560__$1,new cljs.core.Keyword(null,"summary","summary",380847952));
var history__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67560__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__67560__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(subs_ref,cljs.core.assoc,from,msg);

if(cljs.core.truth_(history__$1)){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-subscribed","tap-subscribed",-1882247432),new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (oid){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"oid","oid",-768692334),oid,new cljs.core.Keyword(null,"summary","summary",380847952),shadow.remote.runtime.obj_support.obj_describe_STAR_(obj_support,oid)], null);
}),shadow.remote.runtime.obj_support.get_tap_history(obj_support,num)))], null));
} else {
return null;
}
});
shadow.remote.runtime.tap_support.tap_unsubscribe = (function shadow$remote$runtime$tap_support$tap_unsubscribe(p__67567,p__67568){
var map__67569 = p__67567;
var map__67569__$1 = cljs.core.__destructure_map(map__67569);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67569__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__67570 = p__67568;
var map__67570__$1 = cljs.core.__destructure_map(map__67570);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67570__$1,new cljs.core.Keyword(null,"from","from",1815293044));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,from);
});
shadow.remote.runtime.tap_support.request_tap_history = (function shadow$remote$runtime$tap_support$request_tap_history(p__67572,p__67573){
var map__67574 = p__67572;
var map__67574__$1 = cljs.core.__destructure_map(map__67574);
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67574__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67574__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__67575 = p__67573;
var map__67575__$1 = cljs.core.__destructure_map(map__67575);
var msg = map__67575__$1;
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__67575__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
var tap_ids = shadow.remote.runtime.obj_support.get_tap_history(obj_support,num);
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-history","tap-history",-282803347),new cljs.core.Keyword(null,"oids","oids",-1580877688),tap_ids], null));
});
shadow.remote.runtime.tap_support.tool_disconnect = (function shadow$remote$runtime$tap_support$tool_disconnect(p__67577,tid){
var map__67578 = p__67577;
var map__67578__$1 = cljs.core.__destructure_map(map__67578);
var svc = map__67578__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67578__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,tid);
});
shadow.remote.runtime.tap_support.start = (function shadow$remote$runtime$tap_support$start(runtime,obj_support){
var subs_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var tap_fn = (function shadow$remote$runtime$tap_support$start_$_runtime_tap(obj){
if((!((obj == null)))){
var oid = shadow.remote.runtime.obj_support.register(obj_support,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"tap","tap",-1086702463)], null));
var seq__67590 = cljs.core.seq(cljs.core.deref(subs_ref));
var chunk__67591 = null;
var count__67592 = (0);
var i__67593 = (0);
while(true){
if((i__67593 < count__67592)){
var vec__67608 = chunk__67591.cljs$core$IIndexed$_nth$arity$2(null,i__67593);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67608,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67608,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__67616 = seq__67590;
var G__67617 = chunk__67591;
var G__67618 = count__67592;
var G__67619 = (i__67593 + (1));
seq__67590 = G__67616;
chunk__67591 = G__67617;
count__67592 = G__67618;
i__67593 = G__67619;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__67590);
if(temp__5804__auto__){
var seq__67590__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__67590__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__67590__$1);
var G__67620 = cljs.core.chunk_rest(seq__67590__$1);
var G__67621 = c__5568__auto__;
var G__67622 = cljs.core.count(c__5568__auto__);
var G__67623 = (0);
seq__67590 = G__67620;
chunk__67591 = G__67621;
count__67592 = G__67622;
i__67593 = G__67623;
continue;
} else {
var vec__67611 = cljs.core.first(seq__67590__$1);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67611,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67611,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__67624 = cljs.core.next(seq__67590__$1);
var G__67625 = null;
var G__67626 = (0);
var G__67627 = (0);
seq__67590 = G__67624;
chunk__67591 = G__67625;
count__67592 = G__67626;
i__67593 = G__67627;
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
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tap-subscribe","tap-subscribe",411179050),(function (p1__67583_SHARP_){
return shadow.remote.runtime.tap_support.tap_subscribe(svc,p1__67583_SHARP_);
}),new cljs.core.Keyword(null,"tap-unsubscribe","tap-unsubscribe",1183890755),(function (p1__67584_SHARP_){
return shadow.remote.runtime.tap_support.tap_unsubscribe(svc,p1__67584_SHARP_);
}),new cljs.core.Keyword(null,"request-tap-history","request-tap-history",-670837812),(function (p1__67585_SHARP_){
return shadow.remote.runtime.tap_support.request_tap_history(svc,p1__67585_SHARP_);
})], null),new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366),(function (p1__67586_SHARP_){
return shadow.remote.runtime.tap_support.tool_disconnect(svc,p1__67586_SHARP_);
})], null));

cljs.core.add_tap(tap_fn);

return svc;
});
shadow.remote.runtime.tap_support.stop = (function shadow$remote$runtime$tap_support$stop(p__67614){
var map__67615 = p__67614;
var map__67615__$1 = cljs.core.__destructure_map(map__67615);
var svc = map__67615__$1;
var tap_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67615__$1,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67615__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
cljs.core.remove_tap(tap_fn);

return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674));
});

//# sourceMappingURL=shadow.remote.runtime.tap_support.js.map
