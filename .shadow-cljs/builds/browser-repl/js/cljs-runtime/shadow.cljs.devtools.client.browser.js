goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__5775__auto__ = [];
var len__5769__auto___67314 = arguments.length;
var i__5770__auto___67315 = (0);
while(true){
if((i__5770__auto___67315 < len__5769__auto___67314)){
args__5775__auto__.push((arguments[i__5770__auto___67315]));

var G__67316 = (i__5770__auto___67315 + (1));
i__5770__auto___67315 = G__67316;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(shadow.cljs.devtools.client.env.log){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
} else {
return null;
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq67027){
var G__67028 = cljs.core.first(seq67027);
var seq67027__$1 = cljs.core.next(seq67027);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__67028,seq67027__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__67029 = cljs.core.seq(sources);
var chunk__67031 = null;
var count__67032 = (0);
var i__67033 = (0);
while(true){
if((i__67033 < count__67032)){
var map__67042 = chunk__67031.cljs$core$IIndexed$_nth$arity$2(null,i__67033);
var map__67042__$1 = cljs.core.__destructure_map(map__67042);
var src = map__67042__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67042__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67042__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67042__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67042__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e67043){var e_67317 = e67043;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_67317);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_67317.message)].join('')));
}

var G__67318 = seq__67029;
var G__67319 = chunk__67031;
var G__67320 = count__67032;
var G__67321 = (i__67033 + (1));
seq__67029 = G__67318;
chunk__67031 = G__67319;
count__67032 = G__67320;
i__67033 = G__67321;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__67029);
if(temp__5804__auto__){
var seq__67029__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__67029__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__67029__$1);
var G__67322 = cljs.core.chunk_rest(seq__67029__$1);
var G__67323 = c__5568__auto__;
var G__67324 = cljs.core.count(c__5568__auto__);
var G__67325 = (0);
seq__67029 = G__67322;
chunk__67031 = G__67323;
count__67032 = G__67324;
i__67033 = G__67325;
continue;
} else {
var map__67044 = cljs.core.first(seq__67029__$1);
var map__67044__$1 = cljs.core.__destructure_map(map__67044);
var src = map__67044__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67044__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67044__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67044__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67044__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e67045){var e_67326 = e67045;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_67326);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_67326.message)].join('')));
}

var G__67327 = cljs.core.next(seq__67029__$1);
var G__67328 = null;
var G__67329 = (0);
var G__67330 = (0);
seq__67029 = G__67327;
chunk__67031 = G__67328;
count__67032 = G__67329;
i__67033 = G__67330;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__67046 = cljs.core.seq(js_requires);
var chunk__67047 = null;
var count__67048 = (0);
var i__67049 = (0);
while(true){
if((i__67049 < count__67048)){
var js_ns = chunk__67047.cljs$core$IIndexed$_nth$arity$2(null,i__67049);
var require_str_67331 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_67331);


var G__67332 = seq__67046;
var G__67333 = chunk__67047;
var G__67334 = count__67048;
var G__67335 = (i__67049 + (1));
seq__67046 = G__67332;
chunk__67047 = G__67333;
count__67048 = G__67334;
i__67049 = G__67335;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__67046);
if(temp__5804__auto__){
var seq__67046__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__67046__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__67046__$1);
var G__67336 = cljs.core.chunk_rest(seq__67046__$1);
var G__67337 = c__5568__auto__;
var G__67338 = cljs.core.count(c__5568__auto__);
var G__67339 = (0);
seq__67046 = G__67336;
chunk__67047 = G__67337;
count__67048 = G__67338;
i__67049 = G__67339;
continue;
} else {
var js_ns = cljs.core.first(seq__67046__$1);
var require_str_67340 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_67340);


var G__67341 = cljs.core.next(seq__67046__$1);
var G__67342 = null;
var G__67343 = (0);
var G__67344 = (0);
seq__67046 = G__67341;
chunk__67047 = G__67342;
count__67048 = G__67343;
i__67049 = G__67344;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__67053){
var map__67054 = p__67053;
var map__67054__$1 = cljs.core.__destructure_map(map__67054);
var msg = map__67054__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67054__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67054__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__5523__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__67055(s__67056){
return (new cljs.core.LazySeq(null,(function (){
var s__67056__$1 = s__67056;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__67056__$1);
if(temp__5804__auto__){
var xs__6360__auto__ = temp__5804__auto__;
var map__67061 = cljs.core.first(xs__6360__auto__);
var map__67061__$1 = cljs.core.__destructure_map(map__67061);
var src = map__67061__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67061__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67061__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__5519__auto__ = ((function (s__67056__$1,map__67061,map__67061__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__67054,map__67054__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__67055_$_iter__67057(s__67058){
return (new cljs.core.LazySeq(null,((function (s__67056__$1,map__67061,map__67061__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__67054,map__67054__$1,msg,info,reload_info){
return (function (){
var s__67058__$1 = s__67058;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__67058__$1);
if(temp__5804__auto____$1){
var s__67058__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__67058__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__67058__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__67060 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__67059 = (0);
while(true){
if((i__67059 < size__5522__auto__)){
var warning = cljs.core._nth(c__5521__auto__,i__67059);
cljs.core.chunk_append(b__67060,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__67345 = (i__67059 + (1));
i__67059 = G__67345;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__67060),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__67055_$_iter__67057(cljs.core.chunk_rest(s__67058__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__67060),null);
}
} else {
var warning = cljs.core.first(s__67058__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__67055_$_iter__67057(cljs.core.rest(s__67058__$2)));
}
} else {
return null;
}
break;
}
});})(s__67056__$1,map__67061,map__67061__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__67054,map__67054__$1,msg,info,reload_info))
,null,null));
});})(s__67056__$1,map__67061,map__67061__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__67054,map__67054__$1,msg,info,reload_info))
;
var fs__5520__auto__ = cljs.core.seq(iterys__5519__auto__(warnings));
if(fs__5520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5520__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__67055(cljs.core.rest(s__67056__$1)));
} else {
var G__67346 = cljs.core.rest(s__67056__$1);
s__67056__$1 = G__67346;
continue;
}
} else {
var G__67347 = cljs.core.rest(s__67056__$1);
s__67056__$1 = G__67347;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
if(shadow.cljs.devtools.client.env.log){
var seq__67062_67348 = cljs.core.seq(warnings);
var chunk__67063_67349 = null;
var count__67064_67350 = (0);
var i__67065_67351 = (0);
while(true){
if((i__67065_67351 < count__67064_67350)){
var map__67068_67352 = chunk__67063_67349.cljs$core$IIndexed$_nth$arity$2(null,i__67065_67351);
var map__67068_67353__$1 = cljs.core.__destructure_map(map__67068_67352);
var w_67354 = map__67068_67353__$1;
var msg_67355__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67068_67353__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_67356 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67068_67353__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_67357 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67068_67353__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_67358 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67068_67353__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_67358)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_67356),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_67357),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_67355__$1)].join(''));


var G__67359 = seq__67062_67348;
var G__67360 = chunk__67063_67349;
var G__67361 = count__67064_67350;
var G__67362 = (i__67065_67351 + (1));
seq__67062_67348 = G__67359;
chunk__67063_67349 = G__67360;
count__67064_67350 = G__67361;
i__67065_67351 = G__67362;
continue;
} else {
var temp__5804__auto___67363 = cljs.core.seq(seq__67062_67348);
if(temp__5804__auto___67363){
var seq__67062_67364__$1 = temp__5804__auto___67363;
if(cljs.core.chunked_seq_QMARK_(seq__67062_67364__$1)){
var c__5568__auto___67365 = cljs.core.chunk_first(seq__67062_67364__$1);
var G__67366 = cljs.core.chunk_rest(seq__67062_67364__$1);
var G__67367 = c__5568__auto___67365;
var G__67368 = cljs.core.count(c__5568__auto___67365);
var G__67369 = (0);
seq__67062_67348 = G__67366;
chunk__67063_67349 = G__67367;
count__67064_67350 = G__67368;
i__67065_67351 = G__67369;
continue;
} else {
var map__67069_67370 = cljs.core.first(seq__67062_67364__$1);
var map__67069_67371__$1 = cljs.core.__destructure_map(map__67069_67370);
var w_67372 = map__67069_67371__$1;
var msg_67373__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67069_67371__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_67374 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67069_67371__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_67375 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67069_67371__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_67376 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67069_67371__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_67376)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_67374),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_67375),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_67373__$1)].join(''));


var G__67377 = cljs.core.next(seq__67062_67364__$1);
var G__67378 = null;
var G__67379 = (0);
var G__67380 = (0);
seq__67062_67348 = G__67377;
chunk__67063_67349 = G__67378;
count__67064_67350 = G__67379;
i__67065_67351 = G__67380;
continue;
}
} else {
}
}
break;
}
} else {
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__67052_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__67052_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
var and__5043__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())));
if(and__5043__auto__){
var and__5043__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$);
if(and__5043__auto____$1){
return new$;
} else {
return and__5043__auto____$1;
}
} else {
return and__5043__auto__;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__67070){
var map__67071 = p__67070;
var map__67071__$1 = cljs.core.__destructure_map(map__67071);
var msg = map__67071__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67071__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67071__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var seq__67072 = cljs.core.seq(updates);
var chunk__67074 = null;
var count__67075 = (0);
var i__67076 = (0);
while(true){
if((i__67076 < count__67075)){
var path = chunk__67074.cljs$core$IIndexed$_nth$arity$2(null,i__67076);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__67186_67381 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__67190_67382 = null;
var count__67191_67383 = (0);
var i__67192_67384 = (0);
while(true){
if((i__67192_67384 < count__67191_67383)){
var node_67385 = chunk__67190_67382.cljs$core$IIndexed$_nth$arity$2(null,i__67192_67384);
if(cljs.core.not(node_67385.shadow$old)){
var path_match_67386 = shadow.cljs.devtools.client.browser.match_paths(node_67385.getAttribute("href"),path);
if(cljs.core.truth_(path_match_67386)){
var new_link_67387 = (function (){var G__67218 = node_67385.cloneNode(true);
G__67218.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_67386),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__67218;
})();
(node_67385.shadow$old = true);

(new_link_67387.onload = ((function (seq__67186_67381,chunk__67190_67382,count__67191_67383,i__67192_67384,seq__67072,chunk__67074,count__67075,i__67076,new_link_67387,path_match_67386,node_67385,path,map__67071,map__67071__$1,msg,updates,reload_info){
return (function (e){
var seq__67219_67388 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__67221_67389 = null;
var count__67222_67390 = (0);
var i__67223_67391 = (0);
while(true){
if((i__67223_67391 < count__67222_67390)){
var map__67227_67392 = chunk__67221_67389.cljs$core$IIndexed$_nth$arity$2(null,i__67223_67391);
var map__67227_67393__$1 = cljs.core.__destructure_map(map__67227_67392);
var task_67394 = map__67227_67393__$1;
var fn_str_67395 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67227_67393__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_67396 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67227_67393__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_67397 = goog.getObjectByName(fn_str_67395,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_67396)].join(''));

(fn_obj_67397.cljs$core$IFn$_invoke$arity$2 ? fn_obj_67397.cljs$core$IFn$_invoke$arity$2(path,new_link_67387) : fn_obj_67397.call(null,path,new_link_67387));


var G__67398 = seq__67219_67388;
var G__67399 = chunk__67221_67389;
var G__67400 = count__67222_67390;
var G__67401 = (i__67223_67391 + (1));
seq__67219_67388 = G__67398;
chunk__67221_67389 = G__67399;
count__67222_67390 = G__67400;
i__67223_67391 = G__67401;
continue;
} else {
var temp__5804__auto___67402 = cljs.core.seq(seq__67219_67388);
if(temp__5804__auto___67402){
var seq__67219_67403__$1 = temp__5804__auto___67402;
if(cljs.core.chunked_seq_QMARK_(seq__67219_67403__$1)){
var c__5568__auto___67404 = cljs.core.chunk_first(seq__67219_67403__$1);
var G__67405 = cljs.core.chunk_rest(seq__67219_67403__$1);
var G__67406 = c__5568__auto___67404;
var G__67407 = cljs.core.count(c__5568__auto___67404);
var G__67408 = (0);
seq__67219_67388 = G__67405;
chunk__67221_67389 = G__67406;
count__67222_67390 = G__67407;
i__67223_67391 = G__67408;
continue;
} else {
var map__67228_67409 = cljs.core.first(seq__67219_67403__$1);
var map__67228_67410__$1 = cljs.core.__destructure_map(map__67228_67409);
var task_67411 = map__67228_67410__$1;
var fn_str_67412 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67228_67410__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_67413 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67228_67410__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_67414 = goog.getObjectByName(fn_str_67412,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_67413)].join(''));

(fn_obj_67414.cljs$core$IFn$_invoke$arity$2 ? fn_obj_67414.cljs$core$IFn$_invoke$arity$2(path,new_link_67387) : fn_obj_67414.call(null,path,new_link_67387));


var G__67415 = cljs.core.next(seq__67219_67403__$1);
var G__67416 = null;
var G__67417 = (0);
var G__67418 = (0);
seq__67219_67388 = G__67415;
chunk__67221_67389 = G__67416;
count__67222_67390 = G__67417;
i__67223_67391 = G__67418;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_67385);
});})(seq__67186_67381,chunk__67190_67382,count__67191_67383,i__67192_67384,seq__67072,chunk__67074,count__67075,i__67076,new_link_67387,path_match_67386,node_67385,path,map__67071,map__67071__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_67386], 0));

goog.dom.insertSiblingAfter(new_link_67387,node_67385);


var G__67419 = seq__67186_67381;
var G__67420 = chunk__67190_67382;
var G__67421 = count__67191_67383;
var G__67422 = (i__67192_67384 + (1));
seq__67186_67381 = G__67419;
chunk__67190_67382 = G__67420;
count__67191_67383 = G__67421;
i__67192_67384 = G__67422;
continue;
} else {
var G__67423 = seq__67186_67381;
var G__67424 = chunk__67190_67382;
var G__67425 = count__67191_67383;
var G__67426 = (i__67192_67384 + (1));
seq__67186_67381 = G__67423;
chunk__67190_67382 = G__67424;
count__67191_67383 = G__67425;
i__67192_67384 = G__67426;
continue;
}
} else {
var G__67427 = seq__67186_67381;
var G__67428 = chunk__67190_67382;
var G__67429 = count__67191_67383;
var G__67430 = (i__67192_67384 + (1));
seq__67186_67381 = G__67427;
chunk__67190_67382 = G__67428;
count__67191_67383 = G__67429;
i__67192_67384 = G__67430;
continue;
}
} else {
var temp__5804__auto___67431 = cljs.core.seq(seq__67186_67381);
if(temp__5804__auto___67431){
var seq__67186_67432__$1 = temp__5804__auto___67431;
if(cljs.core.chunked_seq_QMARK_(seq__67186_67432__$1)){
var c__5568__auto___67433 = cljs.core.chunk_first(seq__67186_67432__$1);
var G__67434 = cljs.core.chunk_rest(seq__67186_67432__$1);
var G__67435 = c__5568__auto___67433;
var G__67436 = cljs.core.count(c__5568__auto___67433);
var G__67437 = (0);
seq__67186_67381 = G__67434;
chunk__67190_67382 = G__67435;
count__67191_67383 = G__67436;
i__67192_67384 = G__67437;
continue;
} else {
var node_67438 = cljs.core.first(seq__67186_67432__$1);
if(cljs.core.not(node_67438.shadow$old)){
var path_match_67439 = shadow.cljs.devtools.client.browser.match_paths(node_67438.getAttribute("href"),path);
if(cljs.core.truth_(path_match_67439)){
var new_link_67440 = (function (){var G__67229 = node_67438.cloneNode(true);
G__67229.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_67439),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__67229;
})();
(node_67438.shadow$old = true);

(new_link_67440.onload = ((function (seq__67186_67381,chunk__67190_67382,count__67191_67383,i__67192_67384,seq__67072,chunk__67074,count__67075,i__67076,new_link_67440,path_match_67439,node_67438,seq__67186_67432__$1,temp__5804__auto___67431,path,map__67071,map__67071__$1,msg,updates,reload_info){
return (function (e){
var seq__67230_67441 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__67232_67442 = null;
var count__67233_67443 = (0);
var i__67234_67444 = (0);
while(true){
if((i__67234_67444 < count__67233_67443)){
var map__67238_67445 = chunk__67232_67442.cljs$core$IIndexed$_nth$arity$2(null,i__67234_67444);
var map__67238_67446__$1 = cljs.core.__destructure_map(map__67238_67445);
var task_67447 = map__67238_67446__$1;
var fn_str_67448 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67238_67446__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_67449 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67238_67446__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_67450 = goog.getObjectByName(fn_str_67448,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_67449)].join(''));

(fn_obj_67450.cljs$core$IFn$_invoke$arity$2 ? fn_obj_67450.cljs$core$IFn$_invoke$arity$2(path,new_link_67440) : fn_obj_67450.call(null,path,new_link_67440));


var G__67451 = seq__67230_67441;
var G__67452 = chunk__67232_67442;
var G__67453 = count__67233_67443;
var G__67454 = (i__67234_67444 + (1));
seq__67230_67441 = G__67451;
chunk__67232_67442 = G__67452;
count__67233_67443 = G__67453;
i__67234_67444 = G__67454;
continue;
} else {
var temp__5804__auto___67455__$1 = cljs.core.seq(seq__67230_67441);
if(temp__5804__auto___67455__$1){
var seq__67230_67456__$1 = temp__5804__auto___67455__$1;
if(cljs.core.chunked_seq_QMARK_(seq__67230_67456__$1)){
var c__5568__auto___67457 = cljs.core.chunk_first(seq__67230_67456__$1);
var G__67458 = cljs.core.chunk_rest(seq__67230_67456__$1);
var G__67459 = c__5568__auto___67457;
var G__67460 = cljs.core.count(c__5568__auto___67457);
var G__67461 = (0);
seq__67230_67441 = G__67458;
chunk__67232_67442 = G__67459;
count__67233_67443 = G__67460;
i__67234_67444 = G__67461;
continue;
} else {
var map__67239_67462 = cljs.core.first(seq__67230_67456__$1);
var map__67239_67463__$1 = cljs.core.__destructure_map(map__67239_67462);
var task_67464 = map__67239_67463__$1;
var fn_str_67465 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67239_67463__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_67466 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67239_67463__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_67467 = goog.getObjectByName(fn_str_67465,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_67466)].join(''));

(fn_obj_67467.cljs$core$IFn$_invoke$arity$2 ? fn_obj_67467.cljs$core$IFn$_invoke$arity$2(path,new_link_67440) : fn_obj_67467.call(null,path,new_link_67440));


var G__67468 = cljs.core.next(seq__67230_67456__$1);
var G__67469 = null;
var G__67470 = (0);
var G__67471 = (0);
seq__67230_67441 = G__67468;
chunk__67232_67442 = G__67469;
count__67233_67443 = G__67470;
i__67234_67444 = G__67471;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_67438);
});})(seq__67186_67381,chunk__67190_67382,count__67191_67383,i__67192_67384,seq__67072,chunk__67074,count__67075,i__67076,new_link_67440,path_match_67439,node_67438,seq__67186_67432__$1,temp__5804__auto___67431,path,map__67071,map__67071__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_67439], 0));

goog.dom.insertSiblingAfter(new_link_67440,node_67438);


var G__67472 = cljs.core.next(seq__67186_67432__$1);
var G__67473 = null;
var G__67474 = (0);
var G__67475 = (0);
seq__67186_67381 = G__67472;
chunk__67190_67382 = G__67473;
count__67191_67383 = G__67474;
i__67192_67384 = G__67475;
continue;
} else {
var G__67476 = cljs.core.next(seq__67186_67432__$1);
var G__67477 = null;
var G__67478 = (0);
var G__67479 = (0);
seq__67186_67381 = G__67476;
chunk__67190_67382 = G__67477;
count__67191_67383 = G__67478;
i__67192_67384 = G__67479;
continue;
}
} else {
var G__67480 = cljs.core.next(seq__67186_67432__$1);
var G__67481 = null;
var G__67482 = (0);
var G__67483 = (0);
seq__67186_67381 = G__67480;
chunk__67190_67382 = G__67481;
count__67191_67383 = G__67482;
i__67192_67384 = G__67483;
continue;
}
}
} else {
}
}
break;
}


var G__67484 = seq__67072;
var G__67485 = chunk__67074;
var G__67486 = count__67075;
var G__67487 = (i__67076 + (1));
seq__67072 = G__67484;
chunk__67074 = G__67485;
count__67075 = G__67486;
i__67076 = G__67487;
continue;
} else {
var G__67488 = seq__67072;
var G__67489 = chunk__67074;
var G__67490 = count__67075;
var G__67491 = (i__67076 + (1));
seq__67072 = G__67488;
chunk__67074 = G__67489;
count__67075 = G__67490;
i__67076 = G__67491;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__67072);
if(temp__5804__auto__){
var seq__67072__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__67072__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__67072__$1);
var G__67492 = cljs.core.chunk_rest(seq__67072__$1);
var G__67493 = c__5568__auto__;
var G__67494 = cljs.core.count(c__5568__auto__);
var G__67495 = (0);
seq__67072 = G__67492;
chunk__67074 = G__67493;
count__67075 = G__67494;
i__67076 = G__67495;
continue;
} else {
var path = cljs.core.first(seq__67072__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__67240_67496 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__67244_67497 = null;
var count__67245_67498 = (0);
var i__67246_67499 = (0);
while(true){
if((i__67246_67499 < count__67245_67498)){
var node_67500 = chunk__67244_67497.cljs$core$IIndexed$_nth$arity$2(null,i__67246_67499);
if(cljs.core.not(node_67500.shadow$old)){
var path_match_67501 = shadow.cljs.devtools.client.browser.match_paths(node_67500.getAttribute("href"),path);
if(cljs.core.truth_(path_match_67501)){
var new_link_67502 = (function (){var G__67272 = node_67500.cloneNode(true);
G__67272.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_67501),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__67272;
})();
(node_67500.shadow$old = true);

(new_link_67502.onload = ((function (seq__67240_67496,chunk__67244_67497,count__67245_67498,i__67246_67499,seq__67072,chunk__67074,count__67075,i__67076,new_link_67502,path_match_67501,node_67500,path,seq__67072__$1,temp__5804__auto__,map__67071,map__67071__$1,msg,updates,reload_info){
return (function (e){
var seq__67273_67503 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__67275_67504 = null;
var count__67276_67505 = (0);
var i__67277_67506 = (0);
while(true){
if((i__67277_67506 < count__67276_67505)){
var map__67281_67507 = chunk__67275_67504.cljs$core$IIndexed$_nth$arity$2(null,i__67277_67506);
var map__67281_67508__$1 = cljs.core.__destructure_map(map__67281_67507);
var task_67509 = map__67281_67508__$1;
var fn_str_67510 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67281_67508__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_67511 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67281_67508__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_67512 = goog.getObjectByName(fn_str_67510,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_67511)].join(''));

(fn_obj_67512.cljs$core$IFn$_invoke$arity$2 ? fn_obj_67512.cljs$core$IFn$_invoke$arity$2(path,new_link_67502) : fn_obj_67512.call(null,path,new_link_67502));


var G__67513 = seq__67273_67503;
var G__67514 = chunk__67275_67504;
var G__67515 = count__67276_67505;
var G__67516 = (i__67277_67506 + (1));
seq__67273_67503 = G__67513;
chunk__67275_67504 = G__67514;
count__67276_67505 = G__67515;
i__67277_67506 = G__67516;
continue;
} else {
var temp__5804__auto___67517__$1 = cljs.core.seq(seq__67273_67503);
if(temp__5804__auto___67517__$1){
var seq__67273_67518__$1 = temp__5804__auto___67517__$1;
if(cljs.core.chunked_seq_QMARK_(seq__67273_67518__$1)){
var c__5568__auto___67519 = cljs.core.chunk_first(seq__67273_67518__$1);
var G__67520 = cljs.core.chunk_rest(seq__67273_67518__$1);
var G__67521 = c__5568__auto___67519;
var G__67522 = cljs.core.count(c__5568__auto___67519);
var G__67523 = (0);
seq__67273_67503 = G__67520;
chunk__67275_67504 = G__67521;
count__67276_67505 = G__67522;
i__67277_67506 = G__67523;
continue;
} else {
var map__67282_67524 = cljs.core.first(seq__67273_67518__$1);
var map__67282_67525__$1 = cljs.core.__destructure_map(map__67282_67524);
var task_67526 = map__67282_67525__$1;
var fn_str_67527 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67282_67525__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_67528 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67282_67525__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_67529 = goog.getObjectByName(fn_str_67527,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_67528)].join(''));

(fn_obj_67529.cljs$core$IFn$_invoke$arity$2 ? fn_obj_67529.cljs$core$IFn$_invoke$arity$2(path,new_link_67502) : fn_obj_67529.call(null,path,new_link_67502));


var G__67530 = cljs.core.next(seq__67273_67518__$1);
var G__67531 = null;
var G__67532 = (0);
var G__67533 = (0);
seq__67273_67503 = G__67530;
chunk__67275_67504 = G__67531;
count__67276_67505 = G__67532;
i__67277_67506 = G__67533;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_67500);
});})(seq__67240_67496,chunk__67244_67497,count__67245_67498,i__67246_67499,seq__67072,chunk__67074,count__67075,i__67076,new_link_67502,path_match_67501,node_67500,path,seq__67072__$1,temp__5804__auto__,map__67071,map__67071__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_67501], 0));

goog.dom.insertSiblingAfter(new_link_67502,node_67500);


var G__67534 = seq__67240_67496;
var G__67535 = chunk__67244_67497;
var G__67536 = count__67245_67498;
var G__67537 = (i__67246_67499 + (1));
seq__67240_67496 = G__67534;
chunk__67244_67497 = G__67535;
count__67245_67498 = G__67536;
i__67246_67499 = G__67537;
continue;
} else {
var G__67538 = seq__67240_67496;
var G__67539 = chunk__67244_67497;
var G__67540 = count__67245_67498;
var G__67541 = (i__67246_67499 + (1));
seq__67240_67496 = G__67538;
chunk__67244_67497 = G__67539;
count__67245_67498 = G__67540;
i__67246_67499 = G__67541;
continue;
}
} else {
var G__67542 = seq__67240_67496;
var G__67543 = chunk__67244_67497;
var G__67544 = count__67245_67498;
var G__67545 = (i__67246_67499 + (1));
seq__67240_67496 = G__67542;
chunk__67244_67497 = G__67543;
count__67245_67498 = G__67544;
i__67246_67499 = G__67545;
continue;
}
} else {
var temp__5804__auto___67546__$1 = cljs.core.seq(seq__67240_67496);
if(temp__5804__auto___67546__$1){
var seq__67240_67547__$1 = temp__5804__auto___67546__$1;
if(cljs.core.chunked_seq_QMARK_(seq__67240_67547__$1)){
var c__5568__auto___67548 = cljs.core.chunk_first(seq__67240_67547__$1);
var G__67549 = cljs.core.chunk_rest(seq__67240_67547__$1);
var G__67550 = c__5568__auto___67548;
var G__67551 = cljs.core.count(c__5568__auto___67548);
var G__67552 = (0);
seq__67240_67496 = G__67549;
chunk__67244_67497 = G__67550;
count__67245_67498 = G__67551;
i__67246_67499 = G__67552;
continue;
} else {
var node_67553 = cljs.core.first(seq__67240_67547__$1);
if(cljs.core.not(node_67553.shadow$old)){
var path_match_67554 = shadow.cljs.devtools.client.browser.match_paths(node_67553.getAttribute("href"),path);
if(cljs.core.truth_(path_match_67554)){
var new_link_67555 = (function (){var G__67283 = node_67553.cloneNode(true);
G__67283.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_67554),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__67283;
})();
(node_67553.shadow$old = true);

(new_link_67555.onload = ((function (seq__67240_67496,chunk__67244_67497,count__67245_67498,i__67246_67499,seq__67072,chunk__67074,count__67075,i__67076,new_link_67555,path_match_67554,node_67553,seq__67240_67547__$1,temp__5804__auto___67546__$1,path,seq__67072__$1,temp__5804__auto__,map__67071,map__67071__$1,msg,updates,reload_info){
return (function (e){
var seq__67284_67556 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__67286_67557 = null;
var count__67287_67558 = (0);
var i__67288_67559 = (0);
while(true){
if((i__67288_67559 < count__67287_67558)){
var map__67292_67560 = chunk__67286_67557.cljs$core$IIndexed$_nth$arity$2(null,i__67288_67559);
var map__67292_67561__$1 = cljs.core.__destructure_map(map__67292_67560);
var task_67562 = map__67292_67561__$1;
var fn_str_67563 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67292_67561__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_67564 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67292_67561__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_67565 = goog.getObjectByName(fn_str_67563,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_67564)].join(''));

(fn_obj_67565.cljs$core$IFn$_invoke$arity$2 ? fn_obj_67565.cljs$core$IFn$_invoke$arity$2(path,new_link_67555) : fn_obj_67565.call(null,path,new_link_67555));


var G__67566 = seq__67284_67556;
var G__67567 = chunk__67286_67557;
var G__67568 = count__67287_67558;
var G__67569 = (i__67288_67559 + (1));
seq__67284_67556 = G__67566;
chunk__67286_67557 = G__67567;
count__67287_67558 = G__67568;
i__67288_67559 = G__67569;
continue;
} else {
var temp__5804__auto___67570__$2 = cljs.core.seq(seq__67284_67556);
if(temp__5804__auto___67570__$2){
var seq__67284_67571__$1 = temp__5804__auto___67570__$2;
if(cljs.core.chunked_seq_QMARK_(seq__67284_67571__$1)){
var c__5568__auto___67572 = cljs.core.chunk_first(seq__67284_67571__$1);
var G__67573 = cljs.core.chunk_rest(seq__67284_67571__$1);
var G__67574 = c__5568__auto___67572;
var G__67575 = cljs.core.count(c__5568__auto___67572);
var G__67576 = (0);
seq__67284_67556 = G__67573;
chunk__67286_67557 = G__67574;
count__67287_67558 = G__67575;
i__67288_67559 = G__67576;
continue;
} else {
var map__67293_67577 = cljs.core.first(seq__67284_67571__$1);
var map__67293_67578__$1 = cljs.core.__destructure_map(map__67293_67577);
var task_67579 = map__67293_67578__$1;
var fn_str_67580 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67293_67578__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_67581 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67293_67578__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_67582 = goog.getObjectByName(fn_str_67580,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_67581)].join(''));

(fn_obj_67582.cljs$core$IFn$_invoke$arity$2 ? fn_obj_67582.cljs$core$IFn$_invoke$arity$2(path,new_link_67555) : fn_obj_67582.call(null,path,new_link_67555));


var G__67583 = cljs.core.next(seq__67284_67571__$1);
var G__67584 = null;
var G__67585 = (0);
var G__67586 = (0);
seq__67284_67556 = G__67583;
chunk__67286_67557 = G__67584;
count__67287_67558 = G__67585;
i__67288_67559 = G__67586;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_67553);
});})(seq__67240_67496,chunk__67244_67497,count__67245_67498,i__67246_67499,seq__67072,chunk__67074,count__67075,i__67076,new_link_67555,path_match_67554,node_67553,seq__67240_67547__$1,temp__5804__auto___67546__$1,path,seq__67072__$1,temp__5804__auto__,map__67071,map__67071__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_67554], 0));

goog.dom.insertSiblingAfter(new_link_67555,node_67553);


var G__67587 = cljs.core.next(seq__67240_67547__$1);
var G__67588 = null;
var G__67589 = (0);
var G__67590 = (0);
seq__67240_67496 = G__67587;
chunk__67244_67497 = G__67588;
count__67245_67498 = G__67589;
i__67246_67499 = G__67590;
continue;
} else {
var G__67591 = cljs.core.next(seq__67240_67547__$1);
var G__67592 = null;
var G__67593 = (0);
var G__67594 = (0);
seq__67240_67496 = G__67591;
chunk__67244_67497 = G__67592;
count__67245_67498 = G__67593;
i__67246_67499 = G__67594;
continue;
}
} else {
var G__67595 = cljs.core.next(seq__67240_67547__$1);
var G__67596 = null;
var G__67597 = (0);
var G__67598 = (0);
seq__67240_67496 = G__67595;
chunk__67244_67497 = G__67596;
count__67245_67498 = G__67597;
i__67246_67499 = G__67598;
continue;
}
}
} else {
}
}
break;
}


var G__67599 = cljs.core.next(seq__67072__$1);
var G__67600 = null;
var G__67601 = (0);
var G__67602 = (0);
seq__67072 = G__67599;
chunk__67074 = G__67600;
count__67075 = G__67601;
i__67076 = G__67602;
continue;
} else {
var G__67603 = cljs.core.next(seq__67072__$1);
var G__67604 = null;
var G__67605 = (0);
var G__67606 = (0);
seq__67072 = G__67603;
chunk__67074 = G__67604;
count__67075 = G__67605;
i__67076 = G__67606;
continue;
}
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(runtime,p__67294){
var map__67295 = p__67294;
var map__67295__$1 = cljs.core.__destructure_map(map__67295);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67295__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
return shadow.cljs.devtools.client.shared.load_sources(runtime,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return shadow.cljs.devtools.client.browser.devtools_msg("ready!");
}));
});
shadow.cljs.devtools.client.browser.runtime_info = (((typeof SHADOW_CONFIG !== 'undefined'))?shadow.json.to_clj.cljs$core$IFn$_invoke$arity$1(SHADOW_CONFIG):null);
shadow.cljs.devtools.client.browser.client_info = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.cljs.devtools.client.browser.runtime_info,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"host","host",-1558485167),(cljs.core.truth_(goog.global.document)?new cljs.core.Keyword(null,"browser","browser",828191719):new cljs.core.Keyword(null,"browser-worker","browser-worker",1638998282)),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),[(cljs.core.truth_(goog.userAgent.OPERA)?"Opera":(cljs.core.truth_(goog.userAgent.product.CHROME)?"Chrome":(cljs.core.truth_(goog.userAgent.IE)?"MSIE":(cljs.core.truth_(goog.userAgent.EDGE)?"Edge":(cljs.core.truth_(goog.userAgent.GECKO)?"Firefox":(cljs.core.truth_(goog.userAgent.SAFARI)?"Safari":(cljs.core.truth_(goog.userAgent.WEBKIT)?"Webkit":null)))))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.VERSION)," [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.PLATFORM),"]"].join(''),new cljs.core.Keyword(null,"dom","dom",-1236537922),(!((goog.global.document == null)))], null)], 0));
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_was_welcome_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_was_welcome_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if(((shadow.cljs.devtools.client.env.enabled) && ((shadow.cljs.devtools.client.env.worker_client_id > (0))))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$2 = (function (this$,code){
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(code);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$2 = (function (this$,p__67296){
var map__67297 = p__67296;
var map__67297__$1 = cljs.core.__destructure_map(map__67297);
var _ = map__67297__$1;
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67297__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__67298,done,error){
var map__67299 = p__67298;
var map__67299__$1 = cljs.core.__destructure_map(map__67299);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67299__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__67300,done,error){
var map__67301 = p__67300;
var map__67301__$1 = cljs.core.__destructure_map(map__67301);
var msg = map__67301__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67301__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67301__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67301__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__67302){
var map__67303 = p__67302;
var map__67303__$1 = cljs.core.__destructure_map(map__67303);
var src = map__67303__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67303__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__5043__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__5043__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__5043__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__67304 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__67304) : done.call(null,G__67304));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__67305){
var map__67306 = p__67305;
var map__67306__$1 = cljs.core.__destructure_map(map__67306);
var msg__$1 = map__67306__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67306__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e67307){var ex = e67307;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__67308){
var map__67309 = p__67308;
var map__67309__$1 = cljs.core.__destructure_map(map__67309);
var env = map__67309__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67309__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,true);

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.env.patch_goog_BANG_();

return shadow.cljs.devtools.client.browser.devtools_msg(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))," ready!"].join(''));
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (e){
if(cljs.core.truth_(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_was_welcome_ref))){
shadow.cljs.devtools.client.hud.connection_error("The Websocket connection was closed!");

return cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-reconnect","on-reconnect",1239988702),(function (e){
return shadow.cljs.devtools.client.hud.connection_error("Reconnecting ...");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error(["Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."," Is the watch for this build running?"].join(''));
}),new cljs.core.Keyword(null,"cljs-runtime-init","cljs-runtime-init",1305890232),(function (msg){
return shadow.cljs.devtools.client.browser.repl_init(runtime,msg);
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (msg){
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__67310){
var map__67311 = p__67310;
var map__67311__$1 = cljs.core.__destructure_map(map__67311);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67311__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67311__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was restarted. Reload required!");
} else {
return null;
}
}
})], null)], null));

return svc;
}),(function (p__67312){
var map__67313 = p__67312;
var map__67313__$1 = cljs.core.__destructure_map(map__67313);
var svc = map__67313__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67313__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
