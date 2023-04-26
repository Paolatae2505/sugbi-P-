goog.provide('shadow.test.node');
cljs.test.report.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.test","default","cljs.test/default",-1581405322),new cljs.core.Keyword(null,"end-run-tests","end-run-tests",267300563)], null),(function (m){
if(cljs.test.successful_QMARK_(m)){
return process.exit((0));
} else {
return process.exit((1));
}
}));
shadow.test.node.reset_test_data_BANG_ = (function shadow$test$node$reset_test_data_BANG_(){
return shadow.test.env.reset_test_data_BANG_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"sugbi.core-test","sugbi.core-test",-656491114,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"vars","vars",-2046957217),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Var(function(){return sugbi.core_test.test_home;},new cljs.core.Symbol("sugbi.core-test","test-home","sugbi.core-test/test-home",1255351481,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"sugbi.core-test","sugbi.core-test",-656491114,null),new cljs.core.Symbol(null,"test-home","test-home",1948456799,null),"sugbi/core_test.cljs",19,1,7,7,cljs.core.List.EMPTY,null,(cljs.core.truth_(sugbi.core_test.test_home)?sugbi.core_test.test_home.cljs$lang$test:null)]))], null)], null)], null));
});
shadow.test.node.parse_args = (function shadow$test$node$parse_args(args){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (opts,arg){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("--help",arg)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opts,new cljs.core.Keyword(null,"help","help",-439233446),true);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("--list",arg)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opts,new cljs.core.Keyword(null,"list","list",765357683),true);
} else {
if(clojure.string.starts_with_QMARK_(arg,"--test=")){
var test_arg = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(arg,(7));
var test_syms = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.symbol,clojure.string.split.cljs$core$IFn$_invoke$arity$2(test_arg,","));
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(opts,new cljs.core.Keyword(null,"test-syms","test-syms",338772208),cljs.core.into,test_syms);
} else {
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["Unknown arg: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arg)].join('')], 0));

return opts;

}
}
}
}),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"test-syms","test-syms",338772208),cljs.core.PersistentVector.EMPTY], null),args);
});
shadow.test.node.find_matching_test_vars = (function shadow$test$node$find_matching_test_vars(test_syms){
var test_namespaces = cljs.core.set(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.simple_symbol_QMARK_,test_syms));
var test_var_syms = cljs.core.set(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.qualified_symbol_QMARK_,test_syms));
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (the_var){
var map__64843 = cljs.core.meta(the_var);
var map__64843__$1 = cljs.core.__destructure_map(map__64843);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64843__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64843__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
return ((cljs.core.contains_QMARK_(test_namespaces,ns)) || (cljs.core.contains_QMARK_(test_var_syms,cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(ns,name))));
}),shadow.test.env.get_test_vars());
});
shadow.test.node.execute_cli = (function shadow$test$node$execute_cli(p__64844){
var map__64845 = p__64844;
var map__64845__$1 = cljs.core.__destructure_map(map__64845);
var opts = map__64845__$1;
var test_syms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64845__$1,new cljs.core.Keyword(null,"test-syms","test-syms",338772208));
var help = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64845__$1,new cljs.core.Keyword(null,"help","help",-439233446));
var list = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64845__$1,new cljs.core.Keyword(null,"list","list",765357683));
var test_env = cljs.test.empty_env.cljs$core$IFn$_invoke$arity$0();
if(cljs.core.truth_(help)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Usage:"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  --list (list known test names)"], 0));

return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  --test=<ns-to-test>,<fqn-symbol-to-test> (run test for namespace or single var, separated by comma)"], 0));
} else {
if(cljs.core.truth_(list)){
var seq__64846 = cljs.core.seq(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.first,shadow.test.env.get_tests()));
var chunk__64847 = null;
var count__64848 = (0);
var i__64849 = (0);
while(true){
if((i__64849 < count__64848)){
var vec__64868 = chunk__64847.cljs$core$IIndexed$_nth$arity$2(null,i__64849);
var ns = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64868,(0),null);
var ns_info = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64868,(1),null);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Namespace:",ns], 0));

var seq__64871_64887 = cljs.core.seq(new cljs.core.Keyword(null,"vars","vars",-2046957217).cljs$core$IFn$_invoke$arity$1(ns_info));
var chunk__64873_64888 = null;
var count__64874_64889 = (0);
var i__64875_64890 = (0);
while(true){
if((i__64875_64890 < count__64874_64889)){
var var_64891 = chunk__64873_64888.cljs$core$IIndexed$_nth$arity$2(null,i__64875_64890);
var m_64892 = cljs.core.meta(var_64891);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["  ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m_64892)),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m_64892))].join('')], 0));


var G__64893 = seq__64871_64887;
var G__64894 = chunk__64873_64888;
var G__64895 = count__64874_64889;
var G__64896 = (i__64875_64890 + (1));
seq__64871_64887 = G__64893;
chunk__64873_64888 = G__64894;
count__64874_64889 = G__64895;
i__64875_64890 = G__64896;
continue;
} else {
var temp__5804__auto___64897 = cljs.core.seq(seq__64871_64887);
if(temp__5804__auto___64897){
var seq__64871_64898__$1 = temp__5804__auto___64897;
if(cljs.core.chunked_seq_QMARK_(seq__64871_64898__$1)){
var c__5568__auto___64899 = cljs.core.chunk_first(seq__64871_64898__$1);
var G__64900 = cljs.core.chunk_rest(seq__64871_64898__$1);
var G__64901 = c__5568__auto___64899;
var G__64902 = cljs.core.count(c__5568__auto___64899);
var G__64903 = (0);
seq__64871_64887 = G__64900;
chunk__64873_64888 = G__64901;
count__64874_64889 = G__64902;
i__64875_64890 = G__64903;
continue;
} else {
var var_64904 = cljs.core.first(seq__64871_64898__$1);
var m_64905 = cljs.core.meta(var_64904);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["  ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m_64905)),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m_64905))].join('')], 0));


var G__64906 = cljs.core.next(seq__64871_64898__$1);
var G__64907 = null;
var G__64908 = (0);
var G__64909 = (0);
seq__64871_64887 = G__64906;
chunk__64873_64888 = G__64907;
count__64874_64889 = G__64908;
i__64875_64890 = G__64909;
continue;
}
} else {
}
}
break;
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["---------------------------------"], 0));


var G__64910 = seq__64846;
var G__64911 = chunk__64847;
var G__64912 = count__64848;
var G__64913 = (i__64849 + (1));
seq__64846 = G__64910;
chunk__64847 = G__64911;
count__64848 = G__64912;
i__64849 = G__64913;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__64846);
if(temp__5804__auto__){
var seq__64846__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__64846__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__64846__$1);
var G__64914 = cljs.core.chunk_rest(seq__64846__$1);
var G__64915 = c__5568__auto__;
var G__64916 = cljs.core.count(c__5568__auto__);
var G__64917 = (0);
seq__64846 = G__64914;
chunk__64847 = G__64915;
count__64848 = G__64916;
i__64849 = G__64917;
continue;
} else {
var vec__64877 = cljs.core.first(seq__64846__$1);
var ns = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64877,(0),null);
var ns_info = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64877,(1),null);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Namespace:",ns], 0));

var seq__64880_64918 = cljs.core.seq(new cljs.core.Keyword(null,"vars","vars",-2046957217).cljs$core$IFn$_invoke$arity$1(ns_info));
var chunk__64882_64919 = null;
var count__64883_64920 = (0);
var i__64884_64921 = (0);
while(true){
if((i__64884_64921 < count__64883_64920)){
var var_64922 = chunk__64882_64919.cljs$core$IIndexed$_nth$arity$2(null,i__64884_64921);
var m_64923 = cljs.core.meta(var_64922);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["  ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m_64923)),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m_64923))].join('')], 0));


var G__64924 = seq__64880_64918;
var G__64925 = chunk__64882_64919;
var G__64926 = count__64883_64920;
var G__64927 = (i__64884_64921 + (1));
seq__64880_64918 = G__64924;
chunk__64882_64919 = G__64925;
count__64883_64920 = G__64926;
i__64884_64921 = G__64927;
continue;
} else {
var temp__5804__auto___64928__$1 = cljs.core.seq(seq__64880_64918);
if(temp__5804__auto___64928__$1){
var seq__64880_64929__$1 = temp__5804__auto___64928__$1;
if(cljs.core.chunked_seq_QMARK_(seq__64880_64929__$1)){
var c__5568__auto___64930 = cljs.core.chunk_first(seq__64880_64929__$1);
var G__64931 = cljs.core.chunk_rest(seq__64880_64929__$1);
var G__64932 = c__5568__auto___64930;
var G__64933 = cljs.core.count(c__5568__auto___64930);
var G__64934 = (0);
seq__64880_64918 = G__64931;
chunk__64882_64919 = G__64932;
count__64883_64920 = G__64933;
i__64884_64921 = G__64934;
continue;
} else {
var var_64935 = cljs.core.first(seq__64880_64929__$1);
var m_64936 = cljs.core.meta(var_64935);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["  ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m_64936)),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m_64936))].join('')], 0));


var G__64937 = cljs.core.next(seq__64880_64929__$1);
var G__64938 = null;
var G__64939 = (0);
var G__64940 = (0);
seq__64880_64918 = G__64937;
chunk__64882_64919 = G__64938;
count__64883_64920 = G__64939;
i__64884_64921 = G__64940;
continue;
}
} else {
}
}
break;
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["---------------------------------"], 0));


var G__64941 = cljs.core.next(seq__64846__$1);
var G__64942 = null;
var G__64943 = (0);
var G__64944 = (0);
seq__64846 = G__64941;
chunk__64847 = G__64942;
count__64848 = G__64943;
i__64849 = G__64944;
continue;
}
} else {
return null;
}
}
break;
}
} else {
if(cljs.core.seq(test_syms)){
var test_vars = shadow.test.node.find_matching_test_vars(test_syms);
return shadow.test.run_test_vars.cljs$core$IFn$_invoke$arity$2(test_env,test_vars);
} else {
return shadow.test.run_all_tests.cljs$core$IFn$_invoke$arity$2(test_env,null);

}
}
}
});
shadow.test.node.main = (function shadow$test$node$main(var_args){
var args__5775__auto__ = [];
var len__5769__auto___64945 = arguments.length;
var i__5770__auto___64946 = (0);
while(true){
if((i__5770__auto___64946 < len__5769__auto___64945)){
args__5775__auto__.push((arguments[i__5770__auto___64946]));

var G__64947 = (i__5770__auto___64946 + (1));
i__5770__auto___64946 = G__64947;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return shadow.test.node.main.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(shadow.test.node.main.cljs$core$IFn$_invoke$arity$variadic = (function (args){
shadow.test.node.reset_test_data_BANG_();

if(shadow.test.env.UI_DRIVEN){
return console.log("Waiting for UI ...");
} else {
var opts = shadow.test.node.parse_args(args);
return shadow.test.node.execute_cli(opts);
}
}));

(shadow.test.node.main.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.test.node.main.cljs$lang$applyTo = (function (seq64886){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64886));
}));


//# sourceMappingURL=shadow.test.node.js.map
