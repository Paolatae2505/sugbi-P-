goog.provide('pjstadig.util');
pjstadig.util.print_seq = (function pjstadig$util$print_seq(aseq){
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR__orig_val__60137_60282 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR__orig_val__60138_60283 = cljs.pprint._STAR_current_length_STAR_;
var _STAR_current_level_STAR__temp_val__60139_60284 = (cljs.pprint._STAR_current_level_STAR_ + (1));
var _STAR_current_length_STAR__temp_val__60140_60285 = (0);
(cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__temp_val__60139_60284);

(cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__temp_val__60140_60285);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,null,null,null);

cljs.pprint.write_out(cljs.core.ffirst(aseq));

pjstadig.print.rprint(" ");

cljs.pprint.pprint_newline(new cljs.core.Keyword(null,"linear","linear",872268697));

(cljs.pprint._STAR_current_length_STAR_ = (0));

cljs.pprint.write_out(cljs.core.fnext(cljs.core.first(aseq)));

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {(cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__orig_val__60138_60283);

(cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__orig_val__60137_60282);
}}

return null;
});
pjstadig.util.pprint_record = (function pjstadig$util$pprint_record(arec){
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR__orig_val__60145_60294 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR__orig_val__60146_60295 = cljs.pprint._STAR_current_length_STAR_;
var _STAR_current_level_STAR__temp_val__60147_60296 = (cljs.pprint._STAR_current_level_STAR_ + (1));
var _STAR_current_length_STAR__temp_val__60148_60297 = (0);
(cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__temp_val__60147_60296);

(cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__temp_val__60148_60297);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,cljs.core.re_find(/.*?\{/,(function (){var sb__5690__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__60152_60298 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__60153_60299 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__60154_60300 = true;
var _STAR_print_fn_STAR__temp_val__60155_60301 = (function (x__5691__auto__){
return sb__5690__auto__.append(x__5691__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__60154_60300);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__60155_60301);

try{cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arec], 0));
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__60153_60299);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__60152_60298);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5690__auto__);
})()),null,"}");

var length_count60156_60304 = (0);
var aseq_60305 = cljs.core.seq(arec);
while(true){
if(((cljs.core.not(cljs.core._STAR_print_length_STAR_)) || ((length_count60156_60304 < cljs.core._STAR_print_length_STAR_)))){
if(aseq_60305){
pjstadig.util.print_seq(aseq_60305);

if(cljs.core.next(aseq_60305)){
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([", "], 0));

cljs.pprint.pprint_newline(new cljs.core.Keyword(null,"linear","linear",872268697));

var G__60306 = (length_count60156_60304 + (1));
var G__60307 = cljs.core.next(aseq_60305);
length_count60156_60304 = G__60306;
aseq_60305 = G__60307;
continue;
} else {
}
} else {
}
} else {
cljs.core._write(cljs.core._STAR_out_STAR_,"...");
}
break;
}

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {(cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__orig_val__60146_60295);

(cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__orig_val__60145_60294);
}}

return null;
});
pjstadig.util.report_ = (function pjstadig$util$report_(p__60196){
var map__60197 = p__60196;
var map__60197__$1 = cljs.core.__destructure_map(map__60197);
var event = map__60197__$1;
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60197__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var expected = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60197__$1,new cljs.core.Keyword(null,"expected","expected",1583670997));
var actual = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60197__$1,new cljs.core.Keyword(null,"actual","actual",107306363));
var diffs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60197__$1,new cljs.core.Keyword(null,"diffs","diffs",-1720136241));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60197__$1,new cljs.core.Keyword(null,"message","message",-406056002));
cljs.test.inc_report_counter_BANG_(new cljs.core.Keyword(null,"fail","fail",1706214930));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["\nFAIL in",cljs.test.testing_vars_str(event)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523).cljs$core$IFn$_invoke$arity$1(cljs.test.get_current_env()))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.test.testing_contexts_str()], 0));
} else {
}

if(cljs.core.truth_(message)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([message], 0));
} else {
}

return pjstadig.print.with_pretty_writer((function (){
var print_expected = (function (actual__$1){
pjstadig.print.rprint("expected: ");

cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$2(expected,cljs.core._STAR_out_STAR_);

pjstadig.print.rprint("  actual: ");

cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$2(actual__$1,cljs.core._STAR_out_STAR_);

return pjstadig.print.clear();
});
if(cljs.core.seq(diffs)){
var seq__60202 = cljs.core.seq(diffs);
var chunk__60203 = null;
var count__60204 = (0);
var i__60205 = (0);
while(true){
if((i__60205 < count__60204)){
var vec__60244 = chunk__60203.cljs$core$IIndexed$_nth$arity$2(null,i__60205);
var actual__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60244,(0),null);
var vec__60247 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60244,(1),null);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60247,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60247,(1),null);
print_expected(actual__$1);

if((((!((expected == null)))) && ((!((actual__$1 == null)))))){
pjstadig.print.rprint("    diff:");

if(cljs.core.truth_(a)){
pjstadig.print.rprint(" - ");

cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$2(a,cljs.core._STAR_out_STAR_);

pjstadig.print.rprint("          + ");
} else {
pjstadig.print.rprint(" + ");
}

if(cljs.core.truth_(b)){
cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$2(b,cljs.core._STAR_out_STAR_);
} else {
}

pjstadig.print.clear();
} else {
}


var G__60314 = seq__60202;
var G__60315 = chunk__60203;
var G__60316 = count__60204;
var G__60317 = (i__60205 + (1));
seq__60202 = G__60314;
chunk__60203 = G__60315;
count__60204 = G__60316;
i__60205 = G__60317;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__60202);
if(temp__5804__auto__){
var seq__60202__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__60202__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__60202__$1);
var G__60318 = cljs.core.chunk_rest(seq__60202__$1);
var G__60319 = c__5568__auto__;
var G__60320 = cljs.core.count(c__5568__auto__);
var G__60321 = (0);
seq__60202 = G__60318;
chunk__60203 = G__60319;
count__60204 = G__60320;
i__60205 = G__60321;
continue;
} else {
var vec__60267 = cljs.core.first(seq__60202__$1);
var actual__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60267,(0),null);
var vec__60270 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60267,(1),null);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60270,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60270,(1),null);
print_expected(actual__$1);

if((((!((expected == null)))) && ((!((actual__$1 == null)))))){
pjstadig.print.rprint("    diff:");

if(cljs.core.truth_(a)){
pjstadig.print.rprint(" - ");

cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$2(a,cljs.core._STAR_out_STAR_);

pjstadig.print.rprint("          + ");
} else {
pjstadig.print.rprint(" + ");
}

if(cljs.core.truth_(b)){
cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$2(b,cljs.core._STAR_out_STAR_);
} else {
}

pjstadig.print.clear();
} else {
}


var G__60322 = cljs.core.next(seq__60202__$1);
var G__60323 = null;
var G__60324 = (0);
var G__60325 = (0);
seq__60202 = G__60322;
chunk__60203 = G__60323;
count__60204 = G__60324;
i__60205 = G__60325;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return print_expected(actual);
}
}));
});
pjstadig.util.define_fail_report = (function pjstadig$util$define_fail_report(){
return cljs.test.report.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.test","default","cljs.test/default",-1581405322),new cljs.core.Keyword(null,"fail","fail",1706214930)], null),(function (event){
return pjstadig.util.report_(pjstadig.print.convert_event(event));
}));
});

//# sourceMappingURL=pjstadig.util.js.map
