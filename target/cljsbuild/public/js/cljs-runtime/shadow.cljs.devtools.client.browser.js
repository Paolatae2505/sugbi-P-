goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__5775__auto__ = [];
var len__5769__auto___68228 = arguments.length;
var i__5770__auto___68229 = (0);
while(true){
if((i__5770__auto___68229 < len__5769__auto___68228)){
args__5775__auto__.push((arguments[i__5770__auto___68229]));

var G__68230 = (i__5770__auto___68229 + (1));
i__5770__auto___68229 = G__68230;
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
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq67780){
var G__67781 = cljs.core.first(seq67780);
var seq67780__$1 = cljs.core.next(seq67780);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__67781,seq67780__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__67785 = cljs.core.seq(sources);
var chunk__67786 = null;
var count__67787 = (0);
var i__67788 = (0);
while(true){
if((i__67788 < count__67787)){
var map__67793 = chunk__67786.cljs$core$IIndexed$_nth$arity$2(null,i__67788);
var map__67793__$1 = cljs.core.__destructure_map(map__67793);
var src = map__67793__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67793__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67793__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67793__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67793__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e67794){var e_68234 = e67794;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_68234);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_68234.message)].join('')));
}

var G__68235 = seq__67785;
var G__68236 = chunk__67786;
var G__68237 = count__67787;
var G__68238 = (i__67788 + (1));
seq__67785 = G__68235;
chunk__67786 = G__68236;
count__67787 = G__68237;
i__67788 = G__68238;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__67785);
if(temp__5804__auto__){
var seq__67785__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__67785__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__67785__$1);
var G__68239 = cljs.core.chunk_rest(seq__67785__$1);
var G__68240 = c__5568__auto__;
var G__68241 = cljs.core.count(c__5568__auto__);
var G__68242 = (0);
seq__67785 = G__68239;
chunk__67786 = G__68240;
count__67787 = G__68241;
i__67788 = G__68242;
continue;
} else {
var map__67799 = cljs.core.first(seq__67785__$1);
var map__67799__$1 = cljs.core.__destructure_map(map__67799);
var src = map__67799__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67799__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67799__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67799__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67799__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e67800){var e_68243 = e67800;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_68243);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_68243.message)].join('')));
}

var G__68244 = cljs.core.next(seq__67785__$1);
var G__68245 = null;
var G__68246 = (0);
var G__68247 = (0);
seq__67785 = G__68244;
chunk__67786 = G__68245;
count__67787 = G__68246;
i__67788 = G__68247;
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
var seq__67807 = cljs.core.seq(js_requires);
var chunk__67808 = null;
var count__67809 = (0);
var i__67810 = (0);
while(true){
if((i__67810 < count__67809)){
var js_ns = chunk__67808.cljs$core$IIndexed$_nth$arity$2(null,i__67810);
var require_str_68248 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_68248);


var G__68249 = seq__67807;
var G__68250 = chunk__67808;
var G__68251 = count__67809;
var G__68252 = (i__67810 + (1));
seq__67807 = G__68249;
chunk__67808 = G__68250;
count__67809 = G__68251;
i__67810 = G__68252;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__67807);
if(temp__5804__auto__){
var seq__67807__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__67807__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__67807__$1);
var G__68253 = cljs.core.chunk_rest(seq__67807__$1);
var G__68254 = c__5568__auto__;
var G__68255 = cljs.core.count(c__5568__auto__);
var G__68256 = (0);
seq__67807 = G__68253;
chunk__67808 = G__68254;
count__67809 = G__68255;
i__67810 = G__68256;
continue;
} else {
var js_ns = cljs.core.first(seq__67807__$1);
var require_str_68257 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_68257);


var G__68258 = cljs.core.next(seq__67807__$1);
var G__68259 = null;
var G__68260 = (0);
var G__68261 = (0);
seq__67807 = G__68258;
chunk__67808 = G__68259;
count__67809 = G__68260;
i__67810 = G__68261;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__67819){
var map__67820 = p__67819;
var map__67820__$1 = cljs.core.__destructure_map(map__67820);
var msg = map__67820__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67820__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67820__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__5523__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__67821(s__67822){
return (new cljs.core.LazySeq(null,(function (){
var s__67822__$1 = s__67822;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__67822__$1);
if(temp__5804__auto__){
var xs__6360__auto__ = temp__5804__auto__;
var map__67827 = cljs.core.first(xs__6360__auto__);
var map__67827__$1 = cljs.core.__destructure_map(map__67827);
var src = map__67827__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67827__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67827__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__5519__auto__ = ((function (s__67822__$1,map__67827,map__67827__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__67820,map__67820__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__67821_$_iter__67823(s__67824){
return (new cljs.core.LazySeq(null,((function (s__67822__$1,map__67827,map__67827__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__67820,map__67820__$1,msg,info,reload_info){
return (function (){
var s__67824__$1 = s__67824;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__67824__$1);
if(temp__5804__auto____$1){
var s__67824__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__67824__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__67824__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__67826 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__67825 = (0);
while(true){
if((i__67825 < size__5522__auto__)){
var warning = cljs.core._nth(c__5521__auto__,i__67825);
cljs.core.chunk_append(b__67826,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__68263 = (i__67825 + (1));
i__67825 = G__68263;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__67826),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__67821_$_iter__67823(cljs.core.chunk_rest(s__67824__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__67826),null);
}
} else {
var warning = cljs.core.first(s__67824__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__67821_$_iter__67823(cljs.core.rest(s__67824__$2)));
}
} else {
return null;
}
break;
}
});})(s__67822__$1,map__67827,map__67827__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__67820,map__67820__$1,msg,info,reload_info))
,null,null));
});})(s__67822__$1,map__67827,map__67827__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__67820,map__67820__$1,msg,info,reload_info))
;
var fs__5520__auto__ = cljs.core.seq(iterys__5519__auto__(warnings));
if(fs__5520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5520__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__67821(cljs.core.rest(s__67822__$1)));
} else {
var G__68264 = cljs.core.rest(s__67822__$1);
s__67822__$1 = G__68264;
continue;
}
} else {
var G__68265 = cljs.core.rest(s__67822__$1);
s__67822__$1 = G__68265;
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
var seq__67828_68266 = cljs.core.seq(warnings);
var chunk__67829_68267 = null;
var count__67830_68268 = (0);
var i__67831_68269 = (0);
while(true){
if((i__67831_68269 < count__67830_68268)){
var map__67834_68270 = chunk__67829_68267.cljs$core$IIndexed$_nth$arity$2(null,i__67831_68269);
var map__67834_68271__$1 = cljs.core.__destructure_map(map__67834_68270);
var w_68272 = map__67834_68271__$1;
var msg_68273__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67834_68271__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_68274 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67834_68271__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_68275 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67834_68271__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_68276 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67834_68271__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_68276)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_68274),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_68275),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_68273__$1)].join(''));


var G__68277 = seq__67828_68266;
var G__68278 = chunk__67829_68267;
var G__68279 = count__67830_68268;
var G__68280 = (i__67831_68269 + (1));
seq__67828_68266 = G__68277;
chunk__67829_68267 = G__68278;
count__67830_68268 = G__68279;
i__67831_68269 = G__68280;
continue;
} else {
var temp__5804__auto___68281 = cljs.core.seq(seq__67828_68266);
if(temp__5804__auto___68281){
var seq__67828_68282__$1 = temp__5804__auto___68281;
if(cljs.core.chunked_seq_QMARK_(seq__67828_68282__$1)){
var c__5568__auto___68283 = cljs.core.chunk_first(seq__67828_68282__$1);
var G__68284 = cljs.core.chunk_rest(seq__67828_68282__$1);
var G__68285 = c__5568__auto___68283;
var G__68286 = cljs.core.count(c__5568__auto___68283);
var G__68287 = (0);
seq__67828_68266 = G__68284;
chunk__67829_68267 = G__68285;
count__67830_68268 = G__68286;
i__67831_68269 = G__68287;
continue;
} else {
var map__67835_68288 = cljs.core.first(seq__67828_68282__$1);
var map__67835_68289__$1 = cljs.core.__destructure_map(map__67835_68288);
var w_68290 = map__67835_68289__$1;
var msg_68291__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67835_68289__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_68292 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67835_68289__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_68293 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67835_68289__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_68294 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67835_68289__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_68294)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_68292),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_68293),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_68291__$1)].join(''));


var G__68295 = cljs.core.next(seq__67828_68282__$1);
var G__68296 = null;
var G__68297 = (0);
var G__68298 = (0);
seq__67828_68266 = G__68295;
chunk__67829_68267 = G__68296;
count__67830_68268 = G__68297;
i__67831_68269 = G__68298;
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

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__67818_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__67818_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
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
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__67836){
var map__67837 = p__67836;
var map__67837__$1 = cljs.core.__destructure_map(map__67837);
var msg = map__67837__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67837__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67837__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var seq__67838 = cljs.core.seq(updates);
var chunk__67840 = null;
var count__67841 = (0);
var i__67842 = (0);
while(true){
if((i__67842 < count__67841)){
var path = chunk__67840.cljs$core$IIndexed$_nth$arity$2(null,i__67842);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__68016_68301 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__68020_68302 = null;
var count__68021_68303 = (0);
var i__68022_68304 = (0);
while(true){
if((i__68022_68304 < count__68021_68303)){
var node_68305 = chunk__68020_68302.cljs$core$IIndexed$_nth$arity$2(null,i__68022_68304);
if(cljs.core.not(node_68305.shadow$old)){
var path_match_68306 = shadow.cljs.devtools.client.browser.match_paths(node_68305.getAttribute("href"),path);
if(cljs.core.truth_(path_match_68306)){
var new_link_68307 = (function (){var G__68059 = node_68305.cloneNode(true);
G__68059.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_68306),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__68059;
})();
(node_68305.shadow$old = true);

(new_link_68307.onload = ((function (seq__68016_68301,chunk__68020_68302,count__68021_68303,i__68022_68304,seq__67838,chunk__67840,count__67841,i__67842,new_link_68307,path_match_68306,node_68305,path,map__67837,map__67837__$1,msg,updates,reload_info){
return (function (e){
var seq__68061_68308 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__68063_68309 = null;
var count__68064_68310 = (0);
var i__68065_68311 = (0);
while(true){
if((i__68065_68311 < count__68064_68310)){
var map__68086_68312 = chunk__68063_68309.cljs$core$IIndexed$_nth$arity$2(null,i__68065_68311);
var map__68086_68313__$1 = cljs.core.__destructure_map(map__68086_68312);
var task_68314 = map__68086_68313__$1;
var fn_str_68315 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68086_68313__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_68316 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68086_68313__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_68317 = goog.getObjectByName(fn_str_68315,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_68316)].join(''));

(fn_obj_68317.cljs$core$IFn$_invoke$arity$2 ? fn_obj_68317.cljs$core$IFn$_invoke$arity$2(path,new_link_68307) : fn_obj_68317.call(null,path,new_link_68307));


var G__68318 = seq__68061_68308;
var G__68319 = chunk__68063_68309;
var G__68320 = count__68064_68310;
var G__68321 = (i__68065_68311 + (1));
seq__68061_68308 = G__68318;
chunk__68063_68309 = G__68319;
count__68064_68310 = G__68320;
i__68065_68311 = G__68321;
continue;
} else {
var temp__5804__auto___68322 = cljs.core.seq(seq__68061_68308);
if(temp__5804__auto___68322){
var seq__68061_68323__$1 = temp__5804__auto___68322;
if(cljs.core.chunked_seq_QMARK_(seq__68061_68323__$1)){
var c__5568__auto___68324 = cljs.core.chunk_first(seq__68061_68323__$1);
var G__68325 = cljs.core.chunk_rest(seq__68061_68323__$1);
var G__68326 = c__5568__auto___68324;
var G__68327 = cljs.core.count(c__5568__auto___68324);
var G__68328 = (0);
seq__68061_68308 = G__68325;
chunk__68063_68309 = G__68326;
count__68064_68310 = G__68327;
i__68065_68311 = G__68328;
continue;
} else {
var map__68089_68329 = cljs.core.first(seq__68061_68323__$1);
var map__68089_68330__$1 = cljs.core.__destructure_map(map__68089_68329);
var task_68331 = map__68089_68330__$1;
var fn_str_68332 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68089_68330__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_68333 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68089_68330__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_68334 = goog.getObjectByName(fn_str_68332,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_68333)].join(''));

(fn_obj_68334.cljs$core$IFn$_invoke$arity$2 ? fn_obj_68334.cljs$core$IFn$_invoke$arity$2(path,new_link_68307) : fn_obj_68334.call(null,path,new_link_68307));


var G__68335 = cljs.core.next(seq__68061_68323__$1);
var G__68336 = null;
var G__68337 = (0);
var G__68338 = (0);
seq__68061_68308 = G__68335;
chunk__68063_68309 = G__68336;
count__68064_68310 = G__68337;
i__68065_68311 = G__68338;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_68305);
});})(seq__68016_68301,chunk__68020_68302,count__68021_68303,i__68022_68304,seq__67838,chunk__67840,count__67841,i__67842,new_link_68307,path_match_68306,node_68305,path,map__67837,map__67837__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_68306], 0));

goog.dom.insertSiblingAfter(new_link_68307,node_68305);


var G__68339 = seq__68016_68301;
var G__68340 = chunk__68020_68302;
var G__68341 = count__68021_68303;
var G__68342 = (i__68022_68304 + (1));
seq__68016_68301 = G__68339;
chunk__68020_68302 = G__68340;
count__68021_68303 = G__68341;
i__68022_68304 = G__68342;
continue;
} else {
var G__68343 = seq__68016_68301;
var G__68344 = chunk__68020_68302;
var G__68345 = count__68021_68303;
var G__68346 = (i__68022_68304 + (1));
seq__68016_68301 = G__68343;
chunk__68020_68302 = G__68344;
count__68021_68303 = G__68345;
i__68022_68304 = G__68346;
continue;
}
} else {
var G__68347 = seq__68016_68301;
var G__68348 = chunk__68020_68302;
var G__68349 = count__68021_68303;
var G__68350 = (i__68022_68304 + (1));
seq__68016_68301 = G__68347;
chunk__68020_68302 = G__68348;
count__68021_68303 = G__68349;
i__68022_68304 = G__68350;
continue;
}
} else {
var temp__5804__auto___68351 = cljs.core.seq(seq__68016_68301);
if(temp__5804__auto___68351){
var seq__68016_68352__$1 = temp__5804__auto___68351;
if(cljs.core.chunked_seq_QMARK_(seq__68016_68352__$1)){
var c__5568__auto___68353 = cljs.core.chunk_first(seq__68016_68352__$1);
var G__68354 = cljs.core.chunk_rest(seq__68016_68352__$1);
var G__68355 = c__5568__auto___68353;
var G__68356 = cljs.core.count(c__5568__auto___68353);
var G__68357 = (0);
seq__68016_68301 = G__68354;
chunk__68020_68302 = G__68355;
count__68021_68303 = G__68356;
i__68022_68304 = G__68357;
continue;
} else {
var node_68358 = cljs.core.first(seq__68016_68352__$1);
if(cljs.core.not(node_68358.shadow$old)){
var path_match_68360 = shadow.cljs.devtools.client.browser.match_paths(node_68358.getAttribute("href"),path);
if(cljs.core.truth_(path_match_68360)){
var new_link_68361 = (function (){var G__68090 = node_68358.cloneNode(true);
G__68090.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_68360),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__68090;
})();
(node_68358.shadow$old = true);

(new_link_68361.onload = ((function (seq__68016_68301,chunk__68020_68302,count__68021_68303,i__68022_68304,seq__67838,chunk__67840,count__67841,i__67842,new_link_68361,path_match_68360,node_68358,seq__68016_68352__$1,temp__5804__auto___68351,path,map__67837,map__67837__$1,msg,updates,reload_info){
return (function (e){
var seq__68091_68363 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__68093_68364 = null;
var count__68094_68365 = (0);
var i__68095_68366 = (0);
while(true){
if((i__68095_68366 < count__68094_68365)){
var map__68103_68367 = chunk__68093_68364.cljs$core$IIndexed$_nth$arity$2(null,i__68095_68366);
var map__68103_68368__$1 = cljs.core.__destructure_map(map__68103_68367);
var task_68369 = map__68103_68368__$1;
var fn_str_68370 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68103_68368__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_68371 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68103_68368__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_68372 = goog.getObjectByName(fn_str_68370,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_68371)].join(''));

(fn_obj_68372.cljs$core$IFn$_invoke$arity$2 ? fn_obj_68372.cljs$core$IFn$_invoke$arity$2(path,new_link_68361) : fn_obj_68372.call(null,path,new_link_68361));


var G__68373 = seq__68091_68363;
var G__68374 = chunk__68093_68364;
var G__68375 = count__68094_68365;
var G__68376 = (i__68095_68366 + (1));
seq__68091_68363 = G__68373;
chunk__68093_68364 = G__68374;
count__68094_68365 = G__68375;
i__68095_68366 = G__68376;
continue;
} else {
var temp__5804__auto___68377__$1 = cljs.core.seq(seq__68091_68363);
if(temp__5804__auto___68377__$1){
var seq__68091_68378__$1 = temp__5804__auto___68377__$1;
if(cljs.core.chunked_seq_QMARK_(seq__68091_68378__$1)){
var c__5568__auto___68379 = cljs.core.chunk_first(seq__68091_68378__$1);
var G__68380 = cljs.core.chunk_rest(seq__68091_68378__$1);
var G__68381 = c__5568__auto___68379;
var G__68382 = cljs.core.count(c__5568__auto___68379);
var G__68383 = (0);
seq__68091_68363 = G__68380;
chunk__68093_68364 = G__68381;
count__68094_68365 = G__68382;
i__68095_68366 = G__68383;
continue;
} else {
var map__68104_68384 = cljs.core.first(seq__68091_68378__$1);
var map__68104_68385__$1 = cljs.core.__destructure_map(map__68104_68384);
var task_68386 = map__68104_68385__$1;
var fn_str_68387 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68104_68385__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_68388 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68104_68385__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_68389 = goog.getObjectByName(fn_str_68387,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_68388)].join(''));

(fn_obj_68389.cljs$core$IFn$_invoke$arity$2 ? fn_obj_68389.cljs$core$IFn$_invoke$arity$2(path,new_link_68361) : fn_obj_68389.call(null,path,new_link_68361));


var G__68390 = cljs.core.next(seq__68091_68378__$1);
var G__68391 = null;
var G__68392 = (0);
var G__68393 = (0);
seq__68091_68363 = G__68390;
chunk__68093_68364 = G__68391;
count__68094_68365 = G__68392;
i__68095_68366 = G__68393;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_68358);
});})(seq__68016_68301,chunk__68020_68302,count__68021_68303,i__68022_68304,seq__67838,chunk__67840,count__67841,i__67842,new_link_68361,path_match_68360,node_68358,seq__68016_68352__$1,temp__5804__auto___68351,path,map__67837,map__67837__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_68360], 0));

goog.dom.insertSiblingAfter(new_link_68361,node_68358);


var G__68394 = cljs.core.next(seq__68016_68352__$1);
var G__68395 = null;
var G__68396 = (0);
var G__68397 = (0);
seq__68016_68301 = G__68394;
chunk__68020_68302 = G__68395;
count__68021_68303 = G__68396;
i__68022_68304 = G__68397;
continue;
} else {
var G__68398 = cljs.core.next(seq__68016_68352__$1);
var G__68399 = null;
var G__68400 = (0);
var G__68401 = (0);
seq__68016_68301 = G__68398;
chunk__68020_68302 = G__68399;
count__68021_68303 = G__68400;
i__68022_68304 = G__68401;
continue;
}
} else {
var G__68402 = cljs.core.next(seq__68016_68352__$1);
var G__68403 = null;
var G__68404 = (0);
var G__68405 = (0);
seq__68016_68301 = G__68402;
chunk__68020_68302 = G__68403;
count__68021_68303 = G__68404;
i__68022_68304 = G__68405;
continue;
}
}
} else {
}
}
break;
}


var G__68406 = seq__67838;
var G__68407 = chunk__67840;
var G__68408 = count__67841;
var G__68409 = (i__67842 + (1));
seq__67838 = G__68406;
chunk__67840 = G__68407;
count__67841 = G__68408;
i__67842 = G__68409;
continue;
} else {
var G__68410 = seq__67838;
var G__68411 = chunk__67840;
var G__68412 = count__67841;
var G__68413 = (i__67842 + (1));
seq__67838 = G__68410;
chunk__67840 = G__68411;
count__67841 = G__68412;
i__67842 = G__68413;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__67838);
if(temp__5804__auto__){
var seq__67838__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__67838__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__67838__$1);
var G__68414 = cljs.core.chunk_rest(seq__67838__$1);
var G__68415 = c__5568__auto__;
var G__68416 = cljs.core.count(c__5568__auto__);
var G__68417 = (0);
seq__67838 = G__68414;
chunk__67840 = G__68415;
count__67841 = G__68416;
i__67842 = G__68417;
continue;
} else {
var path = cljs.core.first(seq__67838__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__68111_68420 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__68115_68421 = null;
var count__68116_68422 = (0);
var i__68117_68423 = (0);
while(true){
if((i__68117_68423 < count__68116_68422)){
var node_68424 = chunk__68115_68421.cljs$core$IIndexed$_nth$arity$2(null,i__68117_68423);
if(cljs.core.not(node_68424.shadow$old)){
var path_match_68425 = shadow.cljs.devtools.client.browser.match_paths(node_68424.getAttribute("href"),path);
if(cljs.core.truth_(path_match_68425)){
var new_link_68426 = (function (){var G__68170 = node_68424.cloneNode(true);
G__68170.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_68425),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__68170;
})();
(node_68424.shadow$old = true);

(new_link_68426.onload = ((function (seq__68111_68420,chunk__68115_68421,count__68116_68422,i__68117_68423,seq__67838,chunk__67840,count__67841,i__67842,new_link_68426,path_match_68425,node_68424,path,seq__67838__$1,temp__5804__auto__,map__67837,map__67837__$1,msg,updates,reload_info){
return (function (e){
var seq__68171_68427 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__68173_68428 = null;
var count__68174_68429 = (0);
var i__68175_68430 = (0);
while(true){
if((i__68175_68430 < count__68174_68429)){
var map__68179_68431 = chunk__68173_68428.cljs$core$IIndexed$_nth$arity$2(null,i__68175_68430);
var map__68179_68432__$1 = cljs.core.__destructure_map(map__68179_68431);
var task_68433 = map__68179_68432__$1;
var fn_str_68434 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68179_68432__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_68435 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68179_68432__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_68436 = goog.getObjectByName(fn_str_68434,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_68435)].join(''));

(fn_obj_68436.cljs$core$IFn$_invoke$arity$2 ? fn_obj_68436.cljs$core$IFn$_invoke$arity$2(path,new_link_68426) : fn_obj_68436.call(null,path,new_link_68426));


var G__68437 = seq__68171_68427;
var G__68438 = chunk__68173_68428;
var G__68439 = count__68174_68429;
var G__68440 = (i__68175_68430 + (1));
seq__68171_68427 = G__68437;
chunk__68173_68428 = G__68438;
count__68174_68429 = G__68439;
i__68175_68430 = G__68440;
continue;
} else {
var temp__5804__auto___68441__$1 = cljs.core.seq(seq__68171_68427);
if(temp__5804__auto___68441__$1){
var seq__68171_68442__$1 = temp__5804__auto___68441__$1;
if(cljs.core.chunked_seq_QMARK_(seq__68171_68442__$1)){
var c__5568__auto___68443 = cljs.core.chunk_first(seq__68171_68442__$1);
var G__68444 = cljs.core.chunk_rest(seq__68171_68442__$1);
var G__68445 = c__5568__auto___68443;
var G__68446 = cljs.core.count(c__5568__auto___68443);
var G__68447 = (0);
seq__68171_68427 = G__68444;
chunk__68173_68428 = G__68445;
count__68174_68429 = G__68446;
i__68175_68430 = G__68447;
continue;
} else {
var map__68180_68448 = cljs.core.first(seq__68171_68442__$1);
var map__68180_68449__$1 = cljs.core.__destructure_map(map__68180_68448);
var task_68450 = map__68180_68449__$1;
var fn_str_68451 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68180_68449__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_68452 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68180_68449__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_68453 = goog.getObjectByName(fn_str_68451,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_68452)].join(''));

(fn_obj_68453.cljs$core$IFn$_invoke$arity$2 ? fn_obj_68453.cljs$core$IFn$_invoke$arity$2(path,new_link_68426) : fn_obj_68453.call(null,path,new_link_68426));


var G__68454 = cljs.core.next(seq__68171_68442__$1);
var G__68455 = null;
var G__68456 = (0);
var G__68457 = (0);
seq__68171_68427 = G__68454;
chunk__68173_68428 = G__68455;
count__68174_68429 = G__68456;
i__68175_68430 = G__68457;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_68424);
});})(seq__68111_68420,chunk__68115_68421,count__68116_68422,i__68117_68423,seq__67838,chunk__67840,count__67841,i__67842,new_link_68426,path_match_68425,node_68424,path,seq__67838__$1,temp__5804__auto__,map__67837,map__67837__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_68425], 0));

goog.dom.insertSiblingAfter(new_link_68426,node_68424);


var G__68458 = seq__68111_68420;
var G__68459 = chunk__68115_68421;
var G__68460 = count__68116_68422;
var G__68461 = (i__68117_68423 + (1));
seq__68111_68420 = G__68458;
chunk__68115_68421 = G__68459;
count__68116_68422 = G__68460;
i__68117_68423 = G__68461;
continue;
} else {
var G__68462 = seq__68111_68420;
var G__68463 = chunk__68115_68421;
var G__68464 = count__68116_68422;
var G__68465 = (i__68117_68423 + (1));
seq__68111_68420 = G__68462;
chunk__68115_68421 = G__68463;
count__68116_68422 = G__68464;
i__68117_68423 = G__68465;
continue;
}
} else {
var G__68466 = seq__68111_68420;
var G__68467 = chunk__68115_68421;
var G__68468 = count__68116_68422;
var G__68469 = (i__68117_68423 + (1));
seq__68111_68420 = G__68466;
chunk__68115_68421 = G__68467;
count__68116_68422 = G__68468;
i__68117_68423 = G__68469;
continue;
}
} else {
var temp__5804__auto___68470__$1 = cljs.core.seq(seq__68111_68420);
if(temp__5804__auto___68470__$1){
var seq__68111_68471__$1 = temp__5804__auto___68470__$1;
if(cljs.core.chunked_seq_QMARK_(seq__68111_68471__$1)){
var c__5568__auto___68472 = cljs.core.chunk_first(seq__68111_68471__$1);
var G__68473 = cljs.core.chunk_rest(seq__68111_68471__$1);
var G__68474 = c__5568__auto___68472;
var G__68475 = cljs.core.count(c__5568__auto___68472);
var G__68476 = (0);
seq__68111_68420 = G__68473;
chunk__68115_68421 = G__68474;
count__68116_68422 = G__68475;
i__68117_68423 = G__68476;
continue;
} else {
var node_68477 = cljs.core.first(seq__68111_68471__$1);
if(cljs.core.not(node_68477.shadow$old)){
var path_match_68479 = shadow.cljs.devtools.client.browser.match_paths(node_68477.getAttribute("href"),path);
if(cljs.core.truth_(path_match_68479)){
var new_link_68480 = (function (){var G__68181 = node_68477.cloneNode(true);
G__68181.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_68479),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__68181;
})();
(node_68477.shadow$old = true);

(new_link_68480.onload = ((function (seq__68111_68420,chunk__68115_68421,count__68116_68422,i__68117_68423,seq__67838,chunk__67840,count__67841,i__67842,new_link_68480,path_match_68479,node_68477,seq__68111_68471__$1,temp__5804__auto___68470__$1,path,seq__67838__$1,temp__5804__auto__,map__67837,map__67837__$1,msg,updates,reload_info){
return (function (e){
var seq__68185_68481 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__68187_68482 = null;
var count__68188_68483 = (0);
var i__68189_68484 = (0);
while(true){
if((i__68189_68484 < count__68188_68483)){
var map__68193_68485 = chunk__68187_68482.cljs$core$IIndexed$_nth$arity$2(null,i__68189_68484);
var map__68193_68486__$1 = cljs.core.__destructure_map(map__68193_68485);
var task_68487 = map__68193_68486__$1;
var fn_str_68488 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68193_68486__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_68489 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68193_68486__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_68490 = goog.getObjectByName(fn_str_68488,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_68489)].join(''));

(fn_obj_68490.cljs$core$IFn$_invoke$arity$2 ? fn_obj_68490.cljs$core$IFn$_invoke$arity$2(path,new_link_68480) : fn_obj_68490.call(null,path,new_link_68480));


var G__68491 = seq__68185_68481;
var G__68492 = chunk__68187_68482;
var G__68493 = count__68188_68483;
var G__68494 = (i__68189_68484 + (1));
seq__68185_68481 = G__68491;
chunk__68187_68482 = G__68492;
count__68188_68483 = G__68493;
i__68189_68484 = G__68494;
continue;
} else {
var temp__5804__auto___68496__$2 = cljs.core.seq(seq__68185_68481);
if(temp__5804__auto___68496__$2){
var seq__68185_68497__$1 = temp__5804__auto___68496__$2;
if(cljs.core.chunked_seq_QMARK_(seq__68185_68497__$1)){
var c__5568__auto___68498 = cljs.core.chunk_first(seq__68185_68497__$1);
var G__68499 = cljs.core.chunk_rest(seq__68185_68497__$1);
var G__68500 = c__5568__auto___68498;
var G__68501 = cljs.core.count(c__5568__auto___68498);
var G__68502 = (0);
seq__68185_68481 = G__68499;
chunk__68187_68482 = G__68500;
count__68188_68483 = G__68501;
i__68189_68484 = G__68502;
continue;
} else {
var map__68194_68503 = cljs.core.first(seq__68185_68497__$1);
var map__68194_68504__$1 = cljs.core.__destructure_map(map__68194_68503);
var task_68505 = map__68194_68504__$1;
var fn_str_68506 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68194_68504__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_68507 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68194_68504__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_68508 = goog.getObjectByName(fn_str_68506,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_68507)].join(''));

(fn_obj_68508.cljs$core$IFn$_invoke$arity$2 ? fn_obj_68508.cljs$core$IFn$_invoke$arity$2(path,new_link_68480) : fn_obj_68508.call(null,path,new_link_68480));


var G__68509 = cljs.core.next(seq__68185_68497__$1);
var G__68510 = null;
var G__68511 = (0);
var G__68512 = (0);
seq__68185_68481 = G__68509;
chunk__68187_68482 = G__68510;
count__68188_68483 = G__68511;
i__68189_68484 = G__68512;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_68477);
});})(seq__68111_68420,chunk__68115_68421,count__68116_68422,i__68117_68423,seq__67838,chunk__67840,count__67841,i__67842,new_link_68480,path_match_68479,node_68477,seq__68111_68471__$1,temp__5804__auto___68470__$1,path,seq__67838__$1,temp__5804__auto__,map__67837,map__67837__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_68479], 0));

goog.dom.insertSiblingAfter(new_link_68480,node_68477);


var G__68513 = cljs.core.next(seq__68111_68471__$1);
var G__68514 = null;
var G__68515 = (0);
var G__68516 = (0);
seq__68111_68420 = G__68513;
chunk__68115_68421 = G__68514;
count__68116_68422 = G__68515;
i__68117_68423 = G__68516;
continue;
} else {
var G__68517 = cljs.core.next(seq__68111_68471__$1);
var G__68518 = null;
var G__68519 = (0);
var G__68520 = (0);
seq__68111_68420 = G__68517;
chunk__68115_68421 = G__68518;
count__68116_68422 = G__68519;
i__68117_68423 = G__68520;
continue;
}
} else {
var G__68521 = cljs.core.next(seq__68111_68471__$1);
var G__68522 = null;
var G__68523 = (0);
var G__68524 = (0);
seq__68111_68420 = G__68521;
chunk__68115_68421 = G__68522;
count__68116_68422 = G__68523;
i__68117_68423 = G__68524;
continue;
}
}
} else {
}
}
break;
}


var G__68525 = cljs.core.next(seq__67838__$1);
var G__68526 = null;
var G__68527 = (0);
var G__68528 = (0);
seq__67838 = G__68525;
chunk__67840 = G__68526;
count__67841 = G__68527;
i__67842 = G__68528;
continue;
} else {
var G__68529 = cljs.core.next(seq__67838__$1);
var G__68530 = null;
var G__68531 = (0);
var G__68532 = (0);
seq__67838 = G__68529;
chunk__67840 = G__68530;
count__67841 = G__68531;
i__67842 = G__68532;
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
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(runtime,p__68196){
var map__68197 = p__68196;
var map__68197__$1 = cljs.core.__destructure_map(map__68197);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68197__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
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

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$2 = (function (this$,p__68204){
var map__68206 = p__68204;
var map__68206__$1 = cljs.core.__destructure_map(map__68206);
var _ = map__68206__$1;
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68206__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__68207,done,error){
var map__68208 = p__68207;
var map__68208__$1 = cljs.core.__destructure_map(map__68208);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68208__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__68209,done,error){
var map__68210 = p__68209;
var map__68210__$1 = cljs.core.__destructure_map(map__68210);
var msg = map__68210__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68210__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68210__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68210__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__68214){
var map__68215 = p__68214;
var map__68215__$1 = cljs.core.__destructure_map(map__68215);
var src = map__68215__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68215__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__5043__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__5043__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__5043__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__68218 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__68218) : done.call(null,G__68218));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__68219){
var map__68220 = p__68219;
var map__68220__$1 = cljs.core.__destructure_map(map__68220);
var msg__$1 = map__68220__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68220__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e68221){var ex = e68221;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__68222){
var map__68223 = p__68222;
var map__68223__$1 = cljs.core.__destructure_map(map__68223);
var env = map__68223__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68223__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
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
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__68224){
var map__68225 = p__68224;
var map__68225__$1 = cljs.core.__destructure_map(map__68225);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68225__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68225__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
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
}),(function (p__68226){
var map__68227 = p__68226;
var map__68227__$1 = cljs.core.__destructure_map(map__68227);
var svc = map__68227__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68227__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
