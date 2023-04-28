goog.provide('shadow.remote.runtime.tap_support');
shadow.remote.runtime.tap_support.tap_subscribe = (function shadow$remote$runtime$tap_support$tap_subscribe(p__62583,p__62584){
var map__62585 = p__62583;
var map__62585__$1 = cljs.core.__destructure_map(map__62585);
var svc = map__62585__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62585__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62585__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62585__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__62586 = p__62584;
var map__62586__$1 = cljs.core.__destructure_map(map__62586);
var msg = map__62586__$1;
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62586__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var summary = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62586__$1,new cljs.core.Keyword(null,"summary","summary",380847952));
var history__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62586__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__62586__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(subs_ref,cljs.core.assoc,from,msg);

if(cljs.core.truth_(history__$1)){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-subscribed","tap-subscribed",-1882247432),new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (oid){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"oid","oid",-768692334),oid,new cljs.core.Keyword(null,"summary","summary",380847952),shadow.remote.runtime.obj_support.obj_describe_STAR_(obj_support,oid)], null);
}),shadow.remote.runtime.obj_support.get_tap_history(obj_support,num)))], null));
} else {
return null;
}
});
shadow.remote.runtime.tap_support.tap_unsubscribe = (function shadow$remote$runtime$tap_support$tap_unsubscribe(p__62591,p__62592){
var map__62593 = p__62591;
var map__62593__$1 = cljs.core.__destructure_map(map__62593);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62593__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__62594 = p__62592;
var map__62594__$1 = cljs.core.__destructure_map(map__62594);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62594__$1,new cljs.core.Keyword(null,"from","from",1815293044));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,from);
});
shadow.remote.runtime.tap_support.request_tap_history = (function shadow$remote$runtime$tap_support$request_tap_history(p__62602,p__62603){
var map__62605 = p__62602;
var map__62605__$1 = cljs.core.__destructure_map(map__62605);
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62605__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62605__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__62606 = p__62603;
var map__62606__$1 = cljs.core.__destructure_map(map__62606);
var msg = map__62606__$1;
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__62606__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
var tap_ids = shadow.remote.runtime.obj_support.get_tap_history(obj_support,num);
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-history","tap-history",-282803347),new cljs.core.Keyword(null,"oids","oids",-1580877688),tap_ids], null));
});
shadow.remote.runtime.tap_support.tool_disconnect = (function shadow$remote$runtime$tap_support$tool_disconnect(p__62609,tid){
var map__62610 = p__62609;
var map__62610__$1 = cljs.core.__destructure_map(map__62610);
var svc = map__62610__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62610__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,tid);
});
shadow.remote.runtime.tap_support.start = (function shadow$remote$runtime$tap_support$start(runtime,obj_support){
var subs_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var tap_fn = (function shadow$remote$runtime$tap_support$start_$_runtime_tap(obj){
if((!((obj == null)))){
var oid = shadow.remote.runtime.obj_support.register(obj_support,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"tap","tap",-1086702463)], null));
var seq__62617 = cljs.core.seq(cljs.core.deref(subs_ref));
var chunk__62618 = null;
var count__62619 = (0);
var i__62620 = (0);
while(true){
if((i__62620 < count__62619)){
var vec__62627 = chunk__62618.cljs$core$IIndexed$_nth$arity$2(null,i__62620);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62627,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62627,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__62645 = seq__62617;
var G__62646 = chunk__62618;
var G__62647 = count__62619;
var G__62648 = (i__62620 + (1));
seq__62617 = G__62645;
chunk__62618 = G__62646;
count__62619 = G__62647;
i__62620 = G__62648;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__62617);
if(temp__5804__auto__){
var seq__62617__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__62617__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__62617__$1);
var G__62649 = cljs.core.chunk_rest(seq__62617__$1);
var G__62650 = c__5568__auto__;
var G__62651 = cljs.core.count(c__5568__auto__);
var G__62652 = (0);
seq__62617 = G__62649;
chunk__62618 = G__62650;
count__62619 = G__62651;
i__62620 = G__62652;
continue;
} else {
var vec__62630 = cljs.core.first(seq__62617__$1);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62630,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62630,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__62653 = cljs.core.next(seq__62617__$1);
var G__62654 = null;
var G__62655 = (0);
var G__62656 = (0);
seq__62617 = G__62653;
chunk__62618 = G__62654;
count__62619 = G__62655;
i__62620 = G__62656;
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
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tap-subscribe","tap-subscribe",411179050),(function (p1__62611_SHARP_){
return shadow.remote.runtime.tap_support.tap_subscribe(svc,p1__62611_SHARP_);
}),new cljs.core.Keyword(null,"tap-unsubscribe","tap-unsubscribe",1183890755),(function (p1__62612_SHARP_){
return shadow.remote.runtime.tap_support.tap_unsubscribe(svc,p1__62612_SHARP_);
}),new cljs.core.Keyword(null,"request-tap-history","request-tap-history",-670837812),(function (p1__62613_SHARP_){
return shadow.remote.runtime.tap_support.request_tap_history(svc,p1__62613_SHARP_);
})], null),new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366),(function (p1__62614_SHARP_){
return shadow.remote.runtime.tap_support.tool_disconnect(svc,p1__62614_SHARP_);
})], null));

cljs.core.add_tap(tap_fn);

return svc;
});
shadow.remote.runtime.tap_support.stop = (function shadow$remote$runtime$tap_support$stop(p__62636){
var map__62637 = p__62636;
var map__62637__$1 = cljs.core.__destructure_map(map__62637);
var svc = map__62637__$1;
var tap_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62637__$1,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62637__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
cljs.core.remove_tap(tap_fn);

return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674));
});

//# sourceMappingURL=shadow.remote.runtime.tap_support.js.map
