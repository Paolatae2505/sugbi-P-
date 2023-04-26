goog.provide('shadow.test');
/**
 * like ct/test-vars-block but more generic
 * groups vars by namespace, executes fixtures
 */
shadow.test.test_vars_grouped_block = (function shadow$test$test_vars_grouped_block(vars){
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p__64728){
var vec__64729 = p__64728;
var ns = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64729,(0),null);
var vars__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64729,(1),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){
return cljs.test.report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"begin-test-ns","begin-test-ns",-1701237033),new cljs.core.Keyword(null,"ns","ns",441598760),ns], null));
}),(function (){
return cljs.test.block((function (){var env = cljs.test.get_current_env();
var once_fixtures = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"once-fixtures","once-fixtures",1253947167),ns], null));
var each_fixtures = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"each-fixtures","each-fixtures",802243977),ns], null));
var G__64732 = cljs.test.execution_strategy(once_fixtures,each_fixtures);
var G__64732__$1 = (((G__64732 instanceof cljs.core.Keyword))?G__64732.fqn:null);
switch (G__64732__$1) {
case "async":
return cljs.test.wrap_map_fixtures(once_fixtures,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.test.wrap_map_fixtures,each_fixtures),cljs.test.test_var_block),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"test","test",577538877),cljs.core.meta),vars__$1)], 0)));

break;
case "sync":
var each_fixture_fn = cljs.test.join_fixtures(each_fixtures);
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){
var G__64734 = (function (){
var seq__64735 = cljs.core.seq(vars__$1);
var chunk__64736 = null;
var count__64737 = (0);
var i__64738 = (0);
while(true){
if((i__64738 < count__64737)){
var v = chunk__64736.cljs$core$IIndexed$_nth$arity$2(null,i__64738);
var temp__5804__auto___64782 = new cljs.core.Keyword(null,"test","test",577538877).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(v));
if(cljs.core.truth_(temp__5804__auto___64782)){
var t_64783 = temp__5804__auto___64782;
var G__64741_64784 = ((function (seq__64735,chunk__64736,count__64737,i__64738,t_64783,temp__5804__auto___64782,v,each_fixture_fn,G__64732,G__64732__$1,env,once_fixtures,each_fixtures,vec__64729,ns,vars__$1){
return (function (){
return cljs.test.run_block(cljs.test.test_var_block_STAR_(v,cljs.test.disable_async(t_64783)));
});})(seq__64735,chunk__64736,count__64737,i__64738,t_64783,temp__5804__auto___64782,v,each_fixture_fn,G__64732,G__64732__$1,env,once_fixtures,each_fixtures,vec__64729,ns,vars__$1))
;
(each_fixture_fn.cljs$core$IFn$_invoke$arity$1 ? each_fixture_fn.cljs$core$IFn$_invoke$arity$1(G__64741_64784) : each_fixture_fn.call(null,G__64741_64784));
} else {
}


var G__64785 = seq__64735;
var G__64786 = chunk__64736;
var G__64787 = count__64737;
var G__64788 = (i__64738 + (1));
seq__64735 = G__64785;
chunk__64736 = G__64786;
count__64737 = G__64787;
i__64738 = G__64788;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__64735);
if(temp__5804__auto__){
var seq__64735__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__64735__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__64735__$1);
var G__64789 = cljs.core.chunk_rest(seq__64735__$1);
var G__64790 = c__5568__auto__;
var G__64791 = cljs.core.count(c__5568__auto__);
var G__64792 = (0);
seq__64735 = G__64789;
chunk__64736 = G__64790;
count__64737 = G__64791;
i__64738 = G__64792;
continue;
} else {
var v = cljs.core.first(seq__64735__$1);
var temp__5804__auto___64793__$1 = new cljs.core.Keyword(null,"test","test",577538877).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(v));
if(cljs.core.truth_(temp__5804__auto___64793__$1)){
var t_64794 = temp__5804__auto___64793__$1;
var G__64742_64795 = ((function (seq__64735,chunk__64736,count__64737,i__64738,t_64794,temp__5804__auto___64793__$1,v,seq__64735__$1,temp__5804__auto__,each_fixture_fn,G__64732,G__64732__$1,env,once_fixtures,each_fixtures,vec__64729,ns,vars__$1){
return (function (){
return cljs.test.run_block(cljs.test.test_var_block_STAR_(v,cljs.test.disable_async(t_64794)));
});})(seq__64735,chunk__64736,count__64737,i__64738,t_64794,temp__5804__auto___64793__$1,v,seq__64735__$1,temp__5804__auto__,each_fixture_fn,G__64732,G__64732__$1,env,once_fixtures,each_fixtures,vec__64729,ns,vars__$1))
;
(each_fixture_fn.cljs$core$IFn$_invoke$arity$1 ? each_fixture_fn.cljs$core$IFn$_invoke$arity$1(G__64742_64795) : each_fixture_fn.call(null,G__64742_64795));
} else {
}


var G__64796 = cljs.core.next(seq__64735__$1);
var G__64797 = null;
var G__64798 = (0);
var G__64799 = (0);
seq__64735 = G__64796;
chunk__64736 = G__64797;
count__64737 = G__64798;
i__64738 = G__64799;
continue;
}
} else {
return null;
}
}
break;
}
});
var fexpr__64733 = cljs.test.join_fixtures(once_fixtures);
return (fexpr__64733.cljs$core$IFn$_invoke$arity$1 ? fexpr__64733.cljs$core$IFn$_invoke$arity$1(G__64734) : fexpr__64733.call(null,G__64734));
})], null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__64732__$1)].join('')));

}
})());
}),(function (){
return cljs.test.report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"end-test-ns","end-test-ns",1620675645),new cljs.core.Keyword(null,"ns","ns",441598760),ns], null));
})], null);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.group_by((function (p1__64727_SHARP_){
return new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(p1__64727_SHARP_));
}),vars))], 0));
});
/**
 * Like test-ns, but returns a block for further composition and
 *   later execution.  Does not clear the current env.
 */
shadow.test.test_ns_block = (function shadow$test$test_ns_block(ns){
if((ns instanceof cljs.core.Symbol)){
} else {
throw (new Error("Assert failed: (symbol? ns)"));
}

var map__64743 = shadow.test.env.get_test_ns_info(ns);
var map__64743__$1 = cljs.core.__destructure_map(map__64743);
var test_ns = map__64743__$1;
var vars = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64743__$1,new cljs.core.Keyword(null,"vars","vars",-2046957217));
if(cljs.core.not(test_ns)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["Namespace: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns)," not found, no tests to run."].join('')], 0));
})], null);
} else {
return shadow.test.test_vars_grouped_block(vars);
}
});
shadow.test.prepare_test_run = (function shadow$test$prepare_test_run(p__64745,vars){
var map__64746 = p__64745;
var map__64746__$1 = cljs.core.__destructure_map(map__64746);
var env = map__64746__$1;
var report_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64746__$1,new cljs.core.Keyword(null,"report-fn","report-fn",-549046115));
var orig_report = cljs.test.report;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){
cljs.test.set_env_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,new cljs.core.Keyword("shadow.test","report-fn","shadow.test/report-fn",1075704061),orig_report));

if(cljs.core.truth_(report_fn)){
(cljs.test.report = report_fn);
} else {
}

var seq__64747_64800 = cljs.core.seq(shadow.test.env.get_tests());
var chunk__64749_64801 = null;
var count__64750_64802 = (0);
var i__64751_64803 = (0);
while(true){
if((i__64751_64803 < count__64750_64802)){
var vec__64761_64804 = chunk__64749_64801.cljs$core$IIndexed$_nth$arity$2(null,i__64751_64803);
var test_ns_64805 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64761_64804,(0),null);
var ns_info_64806 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64761_64804,(1),null);
var map__64764_64807 = ns_info_64806;
var map__64764_64808__$1 = cljs.core.__destructure_map(map__64764_64807);
var fixtures_64809 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64764_64808__$1,new cljs.core.Keyword(null,"fixtures","fixtures",1009814994));
var temp__5804__auto___64810 = new cljs.core.Keyword(null,"once","once",-262568523).cljs$core$IFn$_invoke$arity$1(fixtures_64809);
if(cljs.core.truth_(temp__5804__auto___64810)){
var fix_64811 = temp__5804__auto___64810;
cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"once-fixtures","once-fixtures",1253947167)], null),cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([test_ns_64805,fix_64811], 0));
} else {
}

var temp__5804__auto___64812 = new cljs.core.Keyword(null,"each","each",940016129).cljs$core$IFn$_invoke$arity$1(fixtures_64809);
if(cljs.core.truth_(temp__5804__auto___64812)){
var fix_64813 = temp__5804__auto___64812;
cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"each-fixtures","each-fixtures",802243977)], null),cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([test_ns_64805,fix_64813], 0));
} else {
}


var G__64814 = seq__64747_64800;
var G__64815 = chunk__64749_64801;
var G__64816 = count__64750_64802;
var G__64817 = (i__64751_64803 + (1));
seq__64747_64800 = G__64814;
chunk__64749_64801 = G__64815;
count__64750_64802 = G__64816;
i__64751_64803 = G__64817;
continue;
} else {
var temp__5804__auto___64818 = cljs.core.seq(seq__64747_64800);
if(temp__5804__auto___64818){
var seq__64747_64819__$1 = temp__5804__auto___64818;
if(cljs.core.chunked_seq_QMARK_(seq__64747_64819__$1)){
var c__5568__auto___64820 = cljs.core.chunk_first(seq__64747_64819__$1);
var G__64821 = cljs.core.chunk_rest(seq__64747_64819__$1);
var G__64822 = c__5568__auto___64820;
var G__64823 = cljs.core.count(c__5568__auto___64820);
var G__64824 = (0);
seq__64747_64800 = G__64821;
chunk__64749_64801 = G__64822;
count__64750_64802 = G__64823;
i__64751_64803 = G__64824;
continue;
} else {
var vec__64765_64825 = cljs.core.first(seq__64747_64819__$1);
var test_ns_64826 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64765_64825,(0),null);
var ns_info_64827 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64765_64825,(1),null);
var map__64768_64828 = ns_info_64827;
var map__64768_64829__$1 = cljs.core.__destructure_map(map__64768_64828);
var fixtures_64830 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64768_64829__$1,new cljs.core.Keyword(null,"fixtures","fixtures",1009814994));
var temp__5804__auto___64831__$1 = new cljs.core.Keyword(null,"once","once",-262568523).cljs$core$IFn$_invoke$arity$1(fixtures_64830);
if(cljs.core.truth_(temp__5804__auto___64831__$1)){
var fix_64832 = temp__5804__auto___64831__$1;
cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"once-fixtures","once-fixtures",1253947167)], null),cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([test_ns_64826,fix_64832], 0));
} else {
}

var temp__5804__auto___64833__$1 = new cljs.core.Keyword(null,"each","each",940016129).cljs$core$IFn$_invoke$arity$1(fixtures_64830);
if(cljs.core.truth_(temp__5804__auto___64833__$1)){
var fix_64834 = temp__5804__auto___64833__$1;
cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"each-fixtures","each-fixtures",802243977)], null),cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([test_ns_64826,fix_64834], 0));
} else {
}


var G__64835 = cljs.core.next(seq__64747_64819__$1);
var G__64836 = null;
var G__64837 = (0);
var G__64838 = (0);
seq__64747_64800 = G__64835;
chunk__64749_64801 = G__64836;
count__64750_64802 = G__64837;
i__64751_64803 = G__64838;
continue;
}
} else {
}
}
break;
}

return cljs.test.report.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"begin-run-tests","begin-run-tests",309363062),new cljs.core.Keyword(null,"var-count","var-count",-1513152110),cljs.core.count(vars),new cljs.core.Keyword(null,"ns-count","ns-count",-1269070724),cljs.core.count(cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__64744_SHARP_){
return new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(p1__64744_SHARP_));
}),vars)))], null));
})], null);
});
shadow.test.finish_test_run = (function shadow$test$finish_test_run(block){
if(cljs.core.vector_QMARK_(block)){
} else {
throw (new Error("Assert failed: (vector? block)"));
}

return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(block,(function (){
var map__64769 = cljs.test.get_current_env();
var map__64769__$1 = cljs.core.__destructure_map(map__64769);
var env = map__64769__$1;
var report_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64769__$1,new cljs.core.Keyword("shadow.test","report-fn","shadow.test/report-fn",1075704061));
var report_counters = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64769__$1,new cljs.core.Keyword(null,"report-counters","report-counters",-1702609242));
cljs.test.report.call(null,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(report_counters,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"summary","summary",380847952)));

cljs.test.report.call(null,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(report_counters,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"end-run-tests","end-run-tests",267300563)));

return (cljs.test.report = report_fn);
}));
});
/**
 * tests all vars grouped by namespace, expects seq of test vars, can be obtained from env
 */
shadow.test.run_test_vars = (function shadow$test$run_test_vars(var_args){
var G__64771 = arguments.length;
switch (G__64771) {
case 1:
return shadow.test.run_test_vars.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.test.run_test_vars.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.test.run_test_vars.cljs$core$IFn$_invoke$arity$1 = (function (test_vars){
return shadow.test.run_test_vars.cljs$core$IFn$_invoke$arity$2(cljs.test.empty_env.cljs$core$IFn$_invoke$arity$0(),test_vars);
}));

(shadow.test.run_test_vars.cljs$core$IFn$_invoke$arity$2 = (function (env,vars){
return cljs.test.run_block(shadow.test.finish_test_run(cljs.core.into.cljs$core$IFn$_invoke$arity$2(shadow.test.prepare_test_run(env,vars),shadow.test.test_vars_grouped_block(vars))));
}));

(shadow.test.run_test_vars.cljs$lang$maxFixedArity = 2);

/**
 * test all vars for given namespace symbol
 */
shadow.test.test_ns = (function shadow$test$test_ns(var_args){
var G__64773 = arguments.length;
switch (G__64773) {
case 1:
return shadow.test.test_ns.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.test.test_ns.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.test.test_ns.cljs$core$IFn$_invoke$arity$1 = (function (ns){
return shadow.test.test_ns.cljs$core$IFn$_invoke$arity$2(cljs.test.empty_env.cljs$core$IFn$_invoke$arity$0(),ns);
}));

(shadow.test.test_ns.cljs$core$IFn$_invoke$arity$2 = (function (env,ns){
var map__64774 = shadow.test.env.get_test_ns_info(ns);
var map__64774__$1 = cljs.core.__destructure_map(map__64774);
var vars = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64774__$1,new cljs.core.Keyword(null,"vars","vars",-2046957217));
return cljs.test.run_block(shadow.test.finish_test_run(cljs.core.into.cljs$core$IFn$_invoke$arity$2(shadow.test.prepare_test_run(env,vars),shadow.test.test_vars_grouped_block(vars))));
}));

(shadow.test.test_ns.cljs$lang$maxFixedArity = 2);

/**
 * test all vars in specified namespace symbol set
 */
shadow.test.run_tests = (function shadow$test$run_tests(var_args){
var G__64777 = arguments.length;
switch (G__64777) {
case 0:
return shadow.test.run_tests.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return shadow.test.run_tests.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.test.run_tests.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.test.run_tests.cljs$core$IFn$_invoke$arity$0 = (function (){
return shadow.test.run_tests.cljs$core$IFn$_invoke$arity$1(cljs.test.empty_env.cljs$core$IFn$_invoke$arity$0());
}));

(shadow.test.run_tests.cljs$core$IFn$_invoke$arity$1 = (function (env){
return shadow.test.run_tests.cljs$core$IFn$_invoke$arity$2(env,shadow.test.env.get_test_namespaces());
}));

(shadow.test.run_tests.cljs$core$IFn$_invoke$arity$2 = (function (env,namespaces){
if(cljs.core.set_QMARK_(namespaces)){
} else {
throw (new Error("Assert failed: (set? namespaces)"));
}

var vars = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__64775_SHARP_){
return cljs.core.contains_QMARK_(namespaces,new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(p1__64775_SHARP_)));
}),shadow.test.env.get_test_vars());
return cljs.test.run_block(shadow.test.finish_test_run(cljs.core.into.cljs$core$IFn$_invoke$arity$2(shadow.test.prepare_test_run(env,vars),shadow.test.test_vars_grouped_block(vars))));
}));

(shadow.test.run_tests.cljs$lang$maxFixedArity = 2);

/**
 * Runs all tests in all namespaces; prints results.
 *   Optional argument is a regular expression; only namespaces with
 *   names matching the regular expression (with re-matches) will be
 *   tested.
 */
shadow.test.run_all_tests = (function shadow$test$run_all_tests(var_args){
var G__64780 = arguments.length;
switch (G__64780) {
case 0:
return shadow.test.run_all_tests.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return shadow.test.run_all_tests.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.test.run_all_tests.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.test.run_all_tests.cljs$core$IFn$_invoke$arity$0 = (function (){
return shadow.test.run_all_tests.cljs$core$IFn$_invoke$arity$2(cljs.test.empty_env.cljs$core$IFn$_invoke$arity$0(),null);
}));

(shadow.test.run_all_tests.cljs$core$IFn$_invoke$arity$1 = (function (env){
return shadow.test.run_all_tests.cljs$core$IFn$_invoke$arity$2(env,null);
}));

(shadow.test.run_all_tests.cljs$core$IFn$_invoke$arity$2 = (function (env,re){
return shadow.test.run_tests.cljs$core$IFn$_invoke$arity$2(env,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__64778_SHARP_){
var or__5045__auto__ = (re == null);
if(or__5045__auto__){
return or__5045__auto__;
} else {
return cljs.core.re_matches(re,cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__64778_SHARP_));
}
}),shadow.test.env.get_test_namespaces())));
}));

(shadow.test.run_all_tests.cljs$lang$maxFixedArity = 2);


//# sourceMappingURL=shadow.test.js.map
