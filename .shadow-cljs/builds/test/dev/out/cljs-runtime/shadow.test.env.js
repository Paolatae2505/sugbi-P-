goog.provide('shadow.test.env');
/**
 * @define {boolean}
 */
shadow.test.env.UI_DRIVEN = goog.define("shadow.test.env.UI_DRIVEN",false);
if((typeof shadow !== 'undefined') && (typeof shadow.test !== 'undefined') && (typeof shadow.test.env !== 'undefined') && (typeof shadow.test.env.tests_ref !== 'undefined')){
} else {
shadow.test.env.tests_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),cljs.core.PersistentArrayMap.EMPTY], null));
}
shadow.test.env.reset_test_data_BANG_ = (function shadow$test$env$reset_test_data_BANG_(test_data){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(shadow.test.env.tests_ref,cljs.core.assoc,new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),test_data);
});
shadow.test.env.get_tests = (function shadow$test$env$get_tests(){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.test.env.tests_ref),new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469));
});
shadow.test.env.get_test_vars = (function shadow$test$env$get_test_vars(){
var iter__5523__auto__ = (function shadow$test$env$get_test_vars_$_iter__58075(s__58076){
return (new cljs.core.LazySeq(null,(function (){
var s__58076__$1 = s__58076;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__58076__$1);
if(temp__5804__auto__){
var xs__6360__auto__ = temp__5804__auto__;
var vec__58082 = cljs.core.first(xs__6360__auto__);
var ns = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58082,(0),null);
var ns_info = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58082,(1),null);
var iterys__5519__auto__ = ((function (s__58076__$1,vec__58082,ns,ns_info,xs__6360__auto__,temp__5804__auto__){
return (function shadow$test$env$get_test_vars_$_iter__58075_$_iter__58077(s__58078){
return (new cljs.core.LazySeq(null,((function (s__58076__$1,vec__58082,ns,ns_info,xs__6360__auto__,temp__5804__auto__){
return (function (){
var s__58078__$1 = s__58078;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__58078__$1);
if(temp__5804__auto____$1){
var s__58078__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__58078__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__58078__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__58080 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__58079 = (0);
while(true){
if((i__58079 < size__5522__auto__)){
var var$ = cljs.core._nth(c__5521__auto__,i__58079);
cljs.core.chunk_append(b__58080,var$);

var G__58099 = (i__58079 + (1));
i__58079 = G__58099;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58080),shadow$test$env$get_test_vars_$_iter__58075_$_iter__58077(cljs.core.chunk_rest(s__58078__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58080),null);
}
} else {
var var$ = cljs.core.first(s__58078__$2);
return cljs.core.cons(var$,shadow$test$env$get_test_vars_$_iter__58075_$_iter__58077(cljs.core.rest(s__58078__$2)));
}
} else {
return null;
}
break;
}
});})(s__58076__$1,vec__58082,ns,ns_info,xs__6360__auto__,temp__5804__auto__))
,null,null));
});})(s__58076__$1,vec__58082,ns,ns_info,xs__6360__auto__,temp__5804__auto__))
;
var fs__5520__auto__ = cljs.core.seq(iterys__5519__auto__(new cljs.core.Keyword(null,"vars","vars",-2046957217).cljs$core$IFn$_invoke$arity$1(ns_info)));
if(fs__5520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5520__auto__,shadow$test$env$get_test_vars_$_iter__58075(cljs.core.rest(s__58076__$1)));
} else {
var G__58100 = cljs.core.rest(s__58076__$1);
s__58076__$1 = G__58100;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(shadow.test.env.get_tests());
});
shadow.test.env.get_test_ns_info = (function shadow$test$env$get_test_ns_info(ns){
if((ns instanceof cljs.core.Symbol)){
} else {
throw (new Error("Assert failed: (symbol? ns)"));
}

return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.test.env.tests_ref),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),ns], null));
});
/**
 * returns all the registered test namespaces and symbols
 * use (get-test-ns-info the-sym) to get the details
 */
shadow.test.env.get_test_namespaces = (function shadow$test$env$get_test_namespaces(){
return cljs.core.keys(new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(shadow.test.env.tests_ref)));
});
shadow.test.env.get_test_count = (function shadow$test$env$get_test_count(){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._PLUS_,(0),(function (){var iter__5523__auto__ = (function shadow$test$env$get_test_count_$_iter__58088(s__58089){
return (new cljs.core.LazySeq(null,(function (){
var s__58089__$1 = s__58089;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__58089__$1);
if(temp__5804__auto__){
var s__58089__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__58089__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__58089__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__58091 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__58090 = (0);
while(true){
if((i__58090 < size__5522__auto__)){
var map__58092 = cljs.core._nth(c__5521__auto__,i__58090);
var map__58092__$1 = cljs.core.__destructure_map(map__58092);
var test_ns = map__58092__$1;
var vars = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58092__$1,new cljs.core.Keyword(null,"vars","vars",-2046957217));
cljs.core.chunk_append(b__58091,cljs.core.count(vars));

var G__58101 = (i__58090 + (1));
i__58090 = G__58101;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58091),shadow$test$env$get_test_count_$_iter__58088(cljs.core.chunk_rest(s__58089__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58091),null);
}
} else {
var map__58093 = cljs.core.first(s__58089__$2);
var map__58093__$1 = cljs.core.__destructure_map(map__58093);
var test_ns = map__58093__$1;
var vars = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58093__$1,new cljs.core.Keyword(null,"vars","vars",-2046957217));
return cljs.core.cons(cljs.core.count(vars),shadow$test$env$get_test_count_$_iter__58088(cljs.core.rest(s__58089__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(cljs.core.vals(new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(shadow.test.env.tests_ref))));
})());
});

//# sourceMappingURL=shadow.test.env.js.map
