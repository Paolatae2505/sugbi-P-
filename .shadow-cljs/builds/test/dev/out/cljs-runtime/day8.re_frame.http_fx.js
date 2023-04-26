goog.provide('day8.re_frame.http_fx');
/**
 * ajax-request only provides a single handler for success and errors
 */
day8.re_frame.http_fx.ajax_xhrio_handler = (function day8$re_frame$http_fx$ajax_xhrio_handler(on_success,on_failure,xhrio,p__62097){
var vec__62098 = p__62097;
var success_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62098,(0),null);
var response = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62098,(1),null);
if(cljs.core.truth_(success_QMARK_)){
return (on_success.cljs$core$IFn$_invoke$arity$1 ? on_success.cljs$core$IFn$_invoke$arity$1(response) : on_success.call(null,response));
} else {
var details = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"uri","uri",-774711847),xhrio.getLastUri(),new cljs.core.Keyword(null,"last-method","last-method",-563909920),xhrio.lastMethod_,new cljs.core.Keyword(null,"last-error","last-error",1848699973),xhrio.getLastError(),new cljs.core.Keyword(null,"last-error-code","last-error-code",276598110),xhrio.getLastErrorCode(),new cljs.core.Keyword(null,"debug-message","debug-message",-502855302),goog.net.ErrorCode.getDebugMessage(xhrio.getLastErrorCode())], null),response], 0));
return (on_failure.cljs$core$IFn$_invoke$arity$1 ? on_failure.cljs$core$IFn$_invoke$arity$1(details) : on_failure.call(null,details));
}
});
day8.re_frame.http_fx.request__GT_xhrio_options = (function day8$re_frame$http_fx$request__GT_xhrio_options(p__62103){
var map__62104 = p__62103;
var map__62104__$1 = cljs.core.__destructure_map(map__62104);
var request = map__62104__$1;
var on_success = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__62104__$1,new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"http-no-on-success","http-no-on-success",-1593227158)], null));
var on_failure = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__62104__$1,new cljs.core.Keyword(null,"on-failure","on-failure",842888245),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"http-no-on-failure","http-no-on-failure",962976084)], null));
var api = (new goog.net.XhrIo());
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(request,new cljs.core.Keyword(null,"api","api",-899839580),api,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"handler","handler",-195596612),cljs.core.partial.cljs$core$IFn$_invoke$arity$4(day8.re_frame.http_fx.ajax_xhrio_handler,(function (p1__62101_SHARP_){
return re_frame.core.dispatch(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(on_success,p1__62101_SHARP_));
}),(function (p1__62102_SHARP_){
return re_frame.core.dispatch(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(on_failure,p1__62102_SHARP_));
}),api)], 0)),new cljs.core.Keyword(null,"on-success","on-success",1786904109),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"on-failure","on-failure",842888245),new cljs.core.Keyword(null,"on-request","on-request",972531605)], 0));
});
day8.re_frame.http_fx.dispatch_on_request = (function day8$re_frame$http_fx$dispatch_on_request(request,xhrio){
var temp__5802__auto__ = new cljs.core.Keyword(null,"on-request","on-request",972531605).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__5802__auto__)){
var on_request = temp__5802__auto__;
return re_frame.core.dispatch(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(on_request,xhrio));
} else {
return null;
}
});
day8.re_frame.http_fx.http_effect = (function day8$re_frame$http_fx$http_effect(request){
var seq_request_maps = ((cljs.core.sequential_QMARK_(request))?request:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [request], null));
var seq__62105 = cljs.core.seq(seq_request_maps);
var chunk__62106 = null;
var count__62107 = (0);
var i__62108 = (0);
while(true){
if((i__62108 < count__62107)){
var request__$1 = chunk__62106.cljs$core$IIndexed$_nth$arity$2(null,i__62108);
var xhrio_62113 = ajax.simple.ajax_request(day8.re_frame.http_fx.request__GT_xhrio_options(request__$1));
day8.re_frame.http_fx.dispatch_on_request(request__$1,xhrio_62113);


var G__62116 = seq__62105;
var G__62117 = chunk__62106;
var G__62118 = count__62107;
var G__62119 = (i__62108 + (1));
seq__62105 = G__62116;
chunk__62106 = G__62117;
count__62107 = G__62118;
i__62108 = G__62119;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__62105);
if(temp__5804__auto__){
var seq__62105__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__62105__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__62105__$1);
var G__62120 = cljs.core.chunk_rest(seq__62105__$1);
var G__62121 = c__5568__auto__;
var G__62122 = cljs.core.count(c__5568__auto__);
var G__62123 = (0);
seq__62105 = G__62120;
chunk__62106 = G__62121;
count__62107 = G__62122;
i__62108 = G__62123;
continue;
} else {
var request__$1 = cljs.core.first(seq__62105__$1);
var xhrio_62124 = ajax.simple.ajax_request(day8.re_frame.http_fx.request__GT_xhrio_options(request__$1));
day8.re_frame.http_fx.dispatch_on_request(request__$1,xhrio_62124);


var G__62125 = cljs.core.next(seq__62105__$1);
var G__62126 = null;
var G__62127 = (0);
var G__62128 = (0);
seq__62105 = G__62125;
chunk__62106 = G__62126;
count__62107 = G__62127;
i__62108 = G__62128;
continue;
}
} else {
return null;
}
}
break;
}
});
re_frame.core.reg_fx(new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714),day8.re_frame.http_fx.http_effect);

//# sourceMappingURL=day8.re_frame.http_fx.js.map
