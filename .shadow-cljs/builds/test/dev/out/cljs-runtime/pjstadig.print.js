goog.provide('pjstadig.print');
if((typeof pjstadig !== 'undefined') && (typeof pjstadig.print !== 'undefined') && (typeof pjstadig.print.sb !== 'undefined')){
} else {
pjstadig.print.sb = (new goog.string.StringBuffer());
}
pjstadig.print.rprint = (function pjstadig$print$rprint(s){
return cljs.core._write(cljs.core._STAR_out_STAR_,s);
});
pjstadig.print.clear = (function pjstadig$print$clear(){
cljs.core._STAR_print_fn_STAR_.call(null,pjstadig.print.sb.toString());

return pjstadig.print.sb.clear();
});
pjstadig.print.with_pretty_writer = (function pjstadig$print$with_pretty_writer(f){
var _STAR_out_STAR__orig_val__59914 = cljs.core._STAR_out_STAR_;
var _STAR_out_STAR__temp_val__59915 = cljs.pprint.get_pretty_writer((new cljs.core.StringBufferWriter(pjstadig.print.sb)));
(cljs.core._STAR_out_STAR_ = _STAR_out_STAR__temp_val__59915);

try{return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
}finally {(cljs.core._STAR_out_STAR_ = _STAR_out_STAR__orig_val__59914);
}});
pjstadig.print.convert_event = (function pjstadig$print$convert_event(p__59917){
var map__59918 = p__59917;
var map__59918__$1 = cljs.core.__destructure_map(map__59918);
var event = map__59918__$1;
var actual = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59918__$1,new cljs.core.Keyword(null,"actual","actual",107306363));
var expected = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59918__$1,new cljs.core.Keyword(null,"expected","expected",1583670997));
var diffs = (cljs.core.truth_((function (){var and__5043__auto__ = cljs.core.seq_QMARK_(actual);
if(and__5043__auto__){
var and__5043__auto____$1 = cljs.core.seq(actual);
if(and__5043__auto____$1){
var and__5043__auto____$2 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"not","not",1044554643,null),cljs.core.first(actual));
if(and__5043__auto____$2){
var and__5043__auto____$3 = cljs.core.seq_QMARK_(cljs.core.second(actual));
if(and__5043__auto____$3){
var and__5043__auto____$4 = cljs.core.seq(cljs.core.second(actual));
if(and__5043__auto____$4){
var and__5043__auto____$5 = (function (){var G__59922 = cljs.core.first(cljs.core.second(actual));
var fexpr__59921 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Symbol("clojure.core","=","clojure.core/=",-1788080406,null),null,new cljs.core.Symbol("cljs.core","=","cljs.core/=",-1891498332,null),null,new cljs.core.Symbol(null,"=","=",-1501502141,null),null], null), null);
return (fexpr__59921.cljs$core$IFn$_invoke$arity$1 ? fexpr__59921.cljs$core$IFn$_invoke$arity$1(G__59922) : fexpr__59921.call(null,G__59922));
})();
if(cljs.core.truth_(and__5043__auto____$5)){
return ((2) < cljs.core.count(cljs.core.second(actual)));
} else {
return and__5043__auto____$5;
}
} else {
return and__5043__auto____$4;
}
} else {
return and__5043__auto____$3;
}
} else {
return and__5043__auto____$2;
}
} else {
return and__5043__auto____$1;
}
} else {
return and__5043__auto__;
}
})())?(function (){var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.second(actual),(1));
var more = cljs.core.drop.cljs$core$IFn$_invoke$arity$2((2),cljs.core.second(actual));
return cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,more,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__59916_SHARP_){
return cljs.core.take.cljs$core$IFn$_invoke$arity$2((2),pjstadig.macro.diff.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,p1__59916_SHARP_], 0)));
}),more));
})():null);
var expected__$1 = ((cljs.core.seq(diffs))?cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.second(actual),(1)):expected);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(event,new cljs.core.Keyword(null,"diffs","diffs",-1720136241),diffs,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"expected","expected",1583670997),expected__$1], 0));
});

//# sourceMappingURL=pjstadig.print.js.map
