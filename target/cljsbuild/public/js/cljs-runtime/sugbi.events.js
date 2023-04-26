goog.provide('sugbi.events');
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("common","navigate","common/navigate",-1770818836),(function (db,p__70086){
var vec__70087 = p__70086;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70087,(0),null);
var match = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70087,(1),null);
var old_match = new cljs.core.Keyword("common","route","common/route",1651124616).cljs$core$IFn$_invoke$arity$1(db);
var new_match = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(match,new cljs.core.Keyword(null,"controllers","controllers",-1120410624),reitit.frontend.controllers.apply_controllers(new cljs.core.Keyword(null,"controllers","controllers",-1120410624).cljs$core$IFn$_invoke$arity$1(old_match),match));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword("common","route","common/route",1651124616),new_match);
}));
re_frame.core.reg_fx(new cljs.core.Keyword("common","navigate-fx!","common/navigate-fx!",-1088243503),(function (p__70090){
var vec__70091 = p__70090;
var seq__70092 = cljs.core.seq(vec__70091);
var first__70093 = cljs.core.first(seq__70092);
var seq__70092__$1 = cljs.core.next(seq__70092);
var k = first__70093;
var vec__70094 = seq__70092__$1;
var params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70094,(0),null);
var query = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70094,(1),null);
return reitit.frontend.easy.push_state.cljs$core$IFn$_invoke$arity$3(k,params,query);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("common","navigate!","common/navigate!",1409668023),(function (_,p__70097){
var vec__70098 = p__70097;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70098,(0),null);
var url_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70098,(1),null);
var params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70098,(2),null);
var query = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70098,(3),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("common","navigate-fx!","common/navigate-fx!",-1088243503),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [url_key,params,query], null)], null);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"set-docs","set-docs",405672054),(function (db,p__70101){
var vec__70102 = p__70101;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70102,(0),null);
var docs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70102,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"docs","docs",-1974280502),docs);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"fetch-docs","fetch-docs",1057143748),(function (_,___$1){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.Keyword(null,"uri","uri",-774711847),"/docs",new cljs.core.Keyword(null,"response-format","response-format",1664465322),(ajax.core.raw_response_format.cljs$core$IFn$_invoke$arity$0 ? ajax.core.raw_response_format.cljs$core$IFn$_invoke$arity$0() : ajax.core.raw_response_format.call(null)),new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-docs","set-docs",405672054)], null)], null)], null);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("common","set-error","common/set-error",-1337739361),(function (db,p__70105){
var vec__70106 = p__70105;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70106,(0),null);
var error = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70106,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword("common","error","common/error",-1805182973),error);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("page","init-home","page/init-home",-915420304),(function (_,___$1){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fetch-docs","fetch-docs",1057143748)], null)], null);
}));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("common","route","common/route",1651124616),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db,_){
return new cljs.core.Keyword("common","route","common/route",1651124616).cljs$core$IFn$_invoke$arity$1(db);
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("common","page-id","common/page-id",-1732721743),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("common","route","common/route",1651124616)], null),(function (route,_){
return new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(route));
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("common","page","common/page",-2099452134),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("common","route","common/route",1651124616)], null),(function (route,_){
return new cljs.core.Keyword(null,"view","view",1247994814).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(route));
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"docs","docs",-1974280502),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db,_){
return new cljs.core.Keyword(null,"docs","docs",-1974280502).cljs$core$IFn$_invoke$arity$1(db);
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("common","error","common/error",-1805182973),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db,_){
return new cljs.core.Keyword("common","error","common/error",-1805182973).cljs$core$IFn$_invoke$arity$1(db);
})], 0));

//# sourceMappingURL=sugbi.events.js.map
