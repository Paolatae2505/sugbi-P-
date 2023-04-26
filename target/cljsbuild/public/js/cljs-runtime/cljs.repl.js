goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__67106){
var map__67107 = p__67106;
var map__67107__$1 = cljs.core.__destructure_map(map__67107);
var m = map__67107__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67107__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67107__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__5045__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return [(function (){var temp__5804__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__67108_67338 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__67109_67339 = null;
var count__67110_67340 = (0);
var i__67111_67341 = (0);
while(true){
if((i__67111_67341 < count__67110_67340)){
var f_67342 = chunk__67109_67339.cljs$core$IIndexed$_nth$arity$2(null,i__67111_67341);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_67342], 0));


var G__67343 = seq__67108_67338;
var G__67344 = chunk__67109_67339;
var G__67345 = count__67110_67340;
var G__67346 = (i__67111_67341 + (1));
seq__67108_67338 = G__67343;
chunk__67109_67339 = G__67344;
count__67110_67340 = G__67345;
i__67111_67341 = G__67346;
continue;
} else {
var temp__5804__auto___67347 = cljs.core.seq(seq__67108_67338);
if(temp__5804__auto___67347){
var seq__67108_67348__$1 = temp__5804__auto___67347;
if(cljs.core.chunked_seq_QMARK_(seq__67108_67348__$1)){
var c__5568__auto___67349 = cljs.core.chunk_first(seq__67108_67348__$1);
var G__67350 = cljs.core.chunk_rest(seq__67108_67348__$1);
var G__67351 = c__5568__auto___67349;
var G__67352 = cljs.core.count(c__5568__auto___67349);
var G__67353 = (0);
seq__67108_67338 = G__67350;
chunk__67109_67339 = G__67351;
count__67110_67340 = G__67352;
i__67111_67341 = G__67353;
continue;
} else {
var f_67354 = cljs.core.first(seq__67108_67348__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_67354], 0));


var G__67355 = cljs.core.next(seq__67108_67348__$1);
var G__67356 = null;
var G__67357 = (0);
var G__67358 = (0);
seq__67108_67338 = G__67355;
chunk__67109_67339 = G__67356;
count__67110_67340 = G__67357;
i__67111_67341 = G__67358;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_67359 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__5045__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_67359], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_67359)))?cljs.core.second(arglists_67359):arglists_67359)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__67121_67360 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__67122_67361 = null;
var count__67123_67362 = (0);
var i__67124_67363 = (0);
while(true){
if((i__67124_67363 < count__67123_67362)){
var vec__67136_67364 = chunk__67122_67361.cljs$core$IIndexed$_nth$arity$2(null,i__67124_67363);
var name_67365 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67136_67364,(0),null);
var map__67139_67366 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67136_67364,(1),null);
var map__67139_67367__$1 = cljs.core.__destructure_map(map__67139_67366);
var doc_67368 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67139_67367__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_67369 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67139_67367__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_67365], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_67369], 0));

if(cljs.core.truth_(doc_67368)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_67368], 0));
} else {
}


var G__67370 = seq__67121_67360;
var G__67371 = chunk__67122_67361;
var G__67372 = count__67123_67362;
var G__67373 = (i__67124_67363 + (1));
seq__67121_67360 = G__67370;
chunk__67122_67361 = G__67371;
count__67123_67362 = G__67372;
i__67124_67363 = G__67373;
continue;
} else {
var temp__5804__auto___67374 = cljs.core.seq(seq__67121_67360);
if(temp__5804__auto___67374){
var seq__67121_67375__$1 = temp__5804__auto___67374;
if(cljs.core.chunked_seq_QMARK_(seq__67121_67375__$1)){
var c__5568__auto___67376 = cljs.core.chunk_first(seq__67121_67375__$1);
var G__67377 = cljs.core.chunk_rest(seq__67121_67375__$1);
var G__67378 = c__5568__auto___67376;
var G__67379 = cljs.core.count(c__5568__auto___67376);
var G__67380 = (0);
seq__67121_67360 = G__67377;
chunk__67122_67361 = G__67378;
count__67123_67362 = G__67379;
i__67124_67363 = G__67380;
continue;
} else {
var vec__67140_67381 = cljs.core.first(seq__67121_67375__$1);
var name_67382 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67140_67381,(0),null);
var map__67143_67383 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67140_67381,(1),null);
var map__67143_67384__$1 = cljs.core.__destructure_map(map__67143_67383);
var doc_67385 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67143_67384__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_67386 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67143_67384__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_67382], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_67386], 0));

if(cljs.core.truth_(doc_67385)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_67385], 0));
} else {
}


var G__67387 = cljs.core.next(seq__67121_67375__$1);
var G__67388 = null;
var G__67389 = (0);
var G__67390 = (0);
seq__67121_67360 = G__67387;
chunk__67122_67361 = G__67388;
count__67123_67362 = G__67389;
i__67124_67363 = G__67390;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5804__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5804__auto__)){
var fnspec = temp__5804__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__67182 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__67183 = null;
var count__67184 = (0);
var i__67185 = (0);
while(true){
if((i__67185 < count__67184)){
var role = chunk__67183.cljs$core$IIndexed$_nth$arity$2(null,i__67185);
var temp__5804__auto___67395__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___67395__$1)){
var spec_67399 = temp__5804__auto___67395__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_67399)], 0));
} else {
}


var G__67401 = seq__67182;
var G__67402 = chunk__67183;
var G__67403 = count__67184;
var G__67404 = (i__67185 + (1));
seq__67182 = G__67401;
chunk__67183 = G__67402;
count__67184 = G__67403;
i__67185 = G__67404;
continue;
} else {
var temp__5804__auto____$1 = cljs.core.seq(seq__67182);
if(temp__5804__auto____$1){
var seq__67182__$1 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__67182__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__67182__$1);
var G__67405 = cljs.core.chunk_rest(seq__67182__$1);
var G__67406 = c__5568__auto__;
var G__67407 = cljs.core.count(c__5568__auto__);
var G__67408 = (0);
seq__67182 = G__67405;
chunk__67183 = G__67406;
count__67184 = G__67407;
i__67185 = G__67408;
continue;
} else {
var role = cljs.core.first(seq__67182__$1);
var temp__5804__auto___67409__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___67409__$2)){
var spec_67410 = temp__5804__auto___67409__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_67410)], 0));
} else {
}


var G__67411 = cljs.core.next(seq__67182__$1);
var G__67412 = null;
var G__67413 = (0);
var G__67414 = (0);
seq__67182 = G__67411;
chunk__67183 = G__67412;
count__67184 = G__67413;
i__67185 = G__67414;
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
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol("cljs.core","ExceptionInfo","cljs.core/ExceptionInfo",701839050,null):(((t instanceof Error))?cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("js",t.name):null
))], null),(function (){var temp__5804__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5804__auto__)){
var msg = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5804__auto__)){
var ed = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})()], 0));
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__67415 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__67416 = cljs.core.ex_cause(t);
via = G__67415;
t = G__67416;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5804__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5804__auto__)){
var root_msg = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5804__auto__)){
var data = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5804__auto__)){
var phase = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})()], 0));
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__67259 = datafied_throwable;
var map__67259__$1 = cljs.core.__destructure_map(map__67259);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67259__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67259__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__67259__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__67260 = cljs.core.last(via);
var map__67260__$1 = cljs.core.__destructure_map(map__67260);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67260__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67260__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67260__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__67261 = data;
var map__67261__$1 = cljs.core.__destructure_map(map__67261);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67261__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67261__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67261__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__67262 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__67262__$1 = cljs.core.__destructure_map(map__67262);
var top_data = map__67262__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67262__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__67263 = phase;
var G__67263__$1 = (((G__67263 instanceof cljs.core.Keyword))?G__67263.fqn:null);
switch (G__67263__$1) {
case "read-source":
var map__67264 = data;
var map__67264__$1 = cljs.core.__destructure_map(map__67264);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67264__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67264__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__67265 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__67265__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__67265,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__67265);
var G__67265__$2 = (cljs.core.truth_((function (){var fexpr__67266 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__67266.cljs$core$IFn$_invoke$arity$1 ? fexpr__67266.cljs$core$IFn$_invoke$arity$1(source) : fexpr__67266.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__67265__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__67265__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__67265__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__67265__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__67267 = top_data;
var G__67267__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__67267,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__67267);
var G__67267__$2 = (cljs.core.truth_((function (){var fexpr__67268 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__67268.cljs$core$IFn$_invoke$arity$1 ? fexpr__67268.cljs$core$IFn$_invoke$arity$1(source) : fexpr__67268.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__67267__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__67267__$1);
var G__67267__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__67267__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__67267__$2);
var G__67267__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__67267__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__67267__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__67267__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__67267__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__67270 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67270,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67270,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67270,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67270,(3),null);
var G__67273 = top_data;
var G__67273__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__67273,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__67273);
var G__67273__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__67273__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__67273__$1);
var G__67273__$3 = (cljs.core.truth_((function (){var and__5043__auto__ = source__$1;
if(cljs.core.truth_(and__5043__auto__)){
return method;
} else {
return and__5043__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__67273__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__67273__$2);
var G__67273__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__67273__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__67273__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__67273__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__67273__$4;
}

break;
case "execution":
var vec__67275 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67275,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67275,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67275,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67275,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__67254_SHARP_){
var or__5045__auto__ = (p1__67254_SHARP_ == null);
if(or__5045__auto__){
return or__5045__auto__;
} else {
var fexpr__67278 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__67278.cljs$core$IFn$_invoke$arity$1 ? fexpr__67278.cljs$core$IFn$_invoke$arity$1(p1__67254_SHARP_) : fexpr__67278.call(null,p1__67254_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__5045__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return line;
}
})();
var G__67279 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__67279__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__67279,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__67279);
var G__67279__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__67279__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__67279__$1);
var G__67279__$3 = (cljs.core.truth_((function (){var or__5045__auto__ = fn;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var and__5043__auto__ = source__$1;
if(cljs.core.truth_(and__5043__auto__)){
return method;
} else {
return and__5043__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__67279__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__5045__auto__ = fn;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__67279__$2);
var G__67279__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__67279__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__67279__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__67279__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__67279__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__67263__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__67282){
var map__67283 = p__67282;
var map__67283__$1 = cljs.core.__destructure_map(map__67283);
var triage_data = map__67283__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67283__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67283__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67283__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67283__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67283__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67283__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67283__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67283__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5045__auto__ = source;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5045__auto__ = line;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__5045__auto__ = class$;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__67287 = phase;
var G__67287__$1 = (((G__67287 instanceof cljs.core.Keyword))?G__67287.fqn:null);
switch (G__67287__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__67288 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__67289 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__67290 = loc;
var G__67291 = (cljs.core.truth_(spec)?(function (){var sb__5690__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__67293_67426 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__67295_67427 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__67296_67428 = true;
var _STAR_print_fn_STAR__temp_val__67297_67429 = (function (x__5691__auto__){
return sb__5690__auto__.append(x__5691__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__67296_67428);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__67297_67429);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__67280_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__67280_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__67295_67427);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__67293_67426);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5690__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__67288,G__67289,G__67290,G__67291) : format.call(null,G__67288,G__67289,G__67290,G__67291));

break;
case "macroexpansion":
var G__67298 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__67299 = cause_type;
var G__67300 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__67301 = loc;
var G__67302 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__67298,G__67299,G__67300,G__67301,G__67302) : format.call(null,G__67298,G__67299,G__67300,G__67301,G__67302));

break;
case "compile-syntax-check":
var G__67303 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__67304 = cause_type;
var G__67305 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__67306 = loc;
var G__67307 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__67303,G__67304,G__67305,G__67306,G__67307) : format.call(null,G__67303,G__67304,G__67305,G__67306,G__67307));

break;
case "compilation":
var G__67308 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__67309 = cause_type;
var G__67310 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__67311 = loc;
var G__67312 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__67308,G__67309,G__67310,G__67311,G__67312) : format.call(null,G__67308,G__67309,G__67310,G__67311,G__67312));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__67313 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__67314 = symbol;
var G__67315 = loc;
var G__67316 = (function (){var sb__5690__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__67317_67439 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__67318_67440 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__67319_67441 = true;
var _STAR_print_fn_STAR__temp_val__67320_67442 = (function (x__5691__auto__){
return sb__5690__auto__.append(x__5691__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__67319_67441);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__67320_67442);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__67281_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__67281_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__67318_67440);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__67317_67439);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5690__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__67313,G__67314,G__67315,G__67316) : format.call(null,G__67313,G__67314,G__67315,G__67316));
} else {
var G__67321 = "Execution error%s at %s(%s).\n%s\n";
var G__67322 = cause_type;
var G__67323 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__67324 = loc;
var G__67325 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__67321,G__67322,G__67323,G__67324,G__67325) : format.call(null,G__67321,G__67322,G__67323,G__67324,G__67325));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__67287__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
