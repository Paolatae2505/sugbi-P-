goog.provide('markdown.core');
markdown.core.init_transformer = (function markdown$core$init_transformer(p__69037){
var map__69038 = p__69037;
var map__69038__$1 = cljs.core.__destructure_map(map__69038);
var replacement_transformers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69038__$1,new cljs.core.Keyword(null,"replacement-transformers","replacement-transformers",-2028552897));
var custom_transformers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69038__$1,new cljs.core.Keyword(null,"custom-transformers","custom-transformers",1440601790));
var inhibit_separator = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69038__$1,new cljs.core.Keyword(null,"inhibit-separator","inhibit-separator",1268116222));
return (function (html,line,next_line,state){
var _STAR_inhibit_separator_STAR__orig_val__69039 = markdown.common._STAR_inhibit_separator_STAR_;
var _STAR_inhibit_separator_STAR__temp_val__69040 = inhibit_separator;
(markdown.common._STAR_inhibit_separator_STAR_ = _STAR_inhibit_separator_STAR__temp_val__69040);

try{var vec__69041 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__69044,transformer){
var vec__69045 = p__69044;
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69045,(0),null);
var state__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69045,(1),null);
var G__69048 = text;
var G__69049 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state__$1,new cljs.core.Keyword(null,"next-line","next-line",-1187000287),next_line);
return (transformer.cljs$core$IFn$_invoke$arity$2 ? transformer.cljs$core$IFn$_invoke$arity$2(G__69048,G__69049) : transformer.call(null,G__69048,G__69049));
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [line,state], null),(function (){var or__5045__auto__ = replacement_transformers;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(markdown.transformers.transformer_vector,custom_transformers);
}
})());
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69041,(0),null);
var new_state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69041,(1),null);
html.append(text);

return new_state;
}finally {(markdown.common._STAR_inhibit_separator_STAR_ = _STAR_inhibit_separator_STAR__orig_val__69039);
}});
});
/**
 * Removed from cljs.core 0.0-1885, Ref. http://goo.gl/su7Xkj
 */
markdown.core.format = (function markdown$core$format(var_args){
var args__5775__auto__ = [];
var len__5769__auto___69168 = arguments.length;
var i__5770__auto___69169 = (0);
while(true){
if((i__5770__auto___69169 < len__5769__auto___69168)){
args__5775__auto__.push((arguments[i__5770__auto___69169]));

var G__69170 = (i__5770__auto___69169 + (1));
i__5770__auto___69169 = G__69170;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return markdown.core.format.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(markdown.core.format.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(goog.string.format,fmt,args);
}));

(markdown.core.format.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(markdown.core.format.cljs$lang$applyTo = (function (seq69050){
var G__69051 = cljs.core.first(seq69050);
var seq69050__$1 = cljs.core.next(seq69050);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__69051,seq69050__$1);
}));

markdown.core.parse_references = (function markdown$core$parse_references(lines){
var references = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var seq__69058_69183 = cljs.core.seq(lines);
var chunk__69059_69184 = null;
var count__69060_69185 = (0);
var i__69061_69186 = (0);
while(true){
if((i__69061_69186 < count__69060_69185)){
var line_69188 = chunk__69059_69184.cljs$core$IIndexed$_nth$arity$2(null,i__69061_69186);
markdown.links.parse_reference_link(line_69188,references);


var G__69189 = seq__69058_69183;
var G__69190 = chunk__69059_69184;
var G__69191 = count__69060_69185;
var G__69192 = (i__69061_69186 + (1));
seq__69058_69183 = G__69189;
chunk__69059_69184 = G__69190;
count__69060_69185 = G__69191;
i__69061_69186 = G__69192;
continue;
} else {
var temp__5804__auto___69193 = cljs.core.seq(seq__69058_69183);
if(temp__5804__auto___69193){
var seq__69058_69202__$1 = temp__5804__auto___69193;
if(cljs.core.chunked_seq_QMARK_(seq__69058_69202__$1)){
var c__5568__auto___69203 = cljs.core.chunk_first(seq__69058_69202__$1);
var G__69204 = cljs.core.chunk_rest(seq__69058_69202__$1);
var G__69205 = c__5568__auto___69203;
var G__69206 = cljs.core.count(c__5568__auto___69203);
var G__69207 = (0);
seq__69058_69183 = G__69204;
chunk__69059_69184 = G__69205;
count__69060_69185 = G__69206;
i__69061_69186 = G__69207;
continue;
} else {
var line_69208 = cljs.core.first(seq__69058_69202__$1);
markdown.links.parse_reference_link(line_69208,references);


var G__69209 = cljs.core.next(seq__69058_69202__$1);
var G__69210 = null;
var G__69211 = (0);
var G__69212 = (0);
seq__69058_69183 = G__69209;
chunk__69059_69184 = G__69210;
count__69060_69185 = G__69211;
i__69061_69186 = G__69212;
continue;
}
} else {
}
}
break;
}

return cljs.core.deref(references);
});
markdown.core.parse_footnotes = (function markdown$core$parse_footnotes(lines){
var footnotes = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"next-fn-id","next-fn-id",738579636),(1),new cljs.core.Keyword(null,"processed","processed",800622264),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"unprocessed","unprocessed",766771972),cljs.core.PersistentArrayMap.EMPTY], null));
var seq__69076_69213 = cljs.core.seq(lines);
var chunk__69077_69214 = null;
var count__69078_69215 = (0);
var i__69079_69216 = (0);
while(true){
if((i__69079_69216 < count__69078_69215)){
var line_69217 = chunk__69077_69214.cljs$core$IIndexed$_nth$arity$2(null,i__69079_69216);
markdown.links.parse_footnote_link(line_69217,footnotes);


var G__69218 = seq__69076_69213;
var G__69219 = chunk__69077_69214;
var G__69220 = count__69078_69215;
var G__69221 = (i__69079_69216 + (1));
seq__69076_69213 = G__69218;
chunk__69077_69214 = G__69219;
count__69078_69215 = G__69220;
i__69079_69216 = G__69221;
continue;
} else {
var temp__5804__auto___69224 = cljs.core.seq(seq__69076_69213);
if(temp__5804__auto___69224){
var seq__69076_69225__$1 = temp__5804__auto___69224;
if(cljs.core.chunked_seq_QMARK_(seq__69076_69225__$1)){
var c__5568__auto___69226 = cljs.core.chunk_first(seq__69076_69225__$1);
var G__69227 = cljs.core.chunk_rest(seq__69076_69225__$1);
var G__69228 = c__5568__auto___69226;
var G__69229 = cljs.core.count(c__5568__auto___69226);
var G__69230 = (0);
seq__69076_69213 = G__69227;
chunk__69077_69214 = G__69228;
count__69078_69215 = G__69229;
i__69079_69216 = G__69230;
continue;
} else {
var line_69231 = cljs.core.first(seq__69076_69225__$1);
markdown.links.parse_footnote_link(line_69231,footnotes);


var G__69232 = cljs.core.next(seq__69076_69225__$1);
var G__69233 = null;
var G__69234 = (0);
var G__69235 = (0);
seq__69076_69213 = G__69232;
chunk__69077_69214 = G__69233;
count__69078_69215 = G__69234;
i__69079_69216 = G__69235;
continue;
}
} else {
}
}
break;
}

return cljs.core.deref(footnotes);
});
markdown.core.parse_metadata = (function markdown$core$parse_metadata(lines){
var vec__69081 = markdown.transformers.parse_metadata_headers(lines);
var metadata = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69081,(0),null);
var num_lines = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69081,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [metadata,cljs.core.drop.cljs$core$IFn$_invoke$arity$2(num_lines,lines)], null);
});
/**
 * processes input text line by line and outputs an HTML string
 */
markdown.core.md_to_html_string_STAR_ = (function markdown$core$md_to_html_string_STAR_(text,params){
var _STAR_substring_STAR__orig_val__69086 = markdown.common._STAR_substring_STAR_;
var _STAR_formatter_STAR__orig_val__69087 = markdown.transformers._STAR_formatter_STAR_;
var _STAR_substring_STAR__temp_val__69088 = (function (s,n){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.drop.cljs$core$IFn$_invoke$arity$2(n,s));
});
var _STAR_formatter_STAR__temp_val__69089 = markdown.core.format;
(markdown.common._STAR_substring_STAR_ = _STAR_substring_STAR__temp_val__69088);

(markdown.transformers._STAR_formatter_STAR_ = _STAR_formatter_STAR__temp_val__69089);

try{var params__$1 = (cljs.core.truth_(params)?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.assoc,cljs.core.PersistentArrayMap.EMPTY),params):null);
var lines = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text),"\n"].join('').split("\n");
var html = (new goog.string.StringBuffer(""));
var references = (cljs.core.truth_(new cljs.core.Keyword(null,"reference-links?","reference-links?",-2003778981).cljs$core$IFn$_invoke$arity$1(params__$1))?markdown.core.parse_references(lines):null);
var footnotes = (cljs.core.truth_(new cljs.core.Keyword(null,"footnotes?","footnotes?",-1590157845).cljs$core$IFn$_invoke$arity$1(params__$1))?markdown.core.parse_footnotes(lines):null);
var vec__69091 = (cljs.core.truth_(new cljs.core.Keyword(null,"parse-meta?","parse-meta?",-1938948742).cljs$core$IFn$_invoke$arity$1(params__$1))?markdown.core.parse_metadata(lines):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,lines], null));
var metadata = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69091,(0),null);
var lines__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69091,(1),null);
var transformer = markdown.core.init_transformer(params__$1);
var G__69097_69238 = lines__$1;
var vec__69098_69239 = G__69097_69238;
var seq__69099_69240 = cljs.core.seq(vec__69098_69239);
var first__69100_69241 = cljs.core.first(seq__69099_69240);
var seq__69099_69242__$1 = cljs.core.next(seq__69099_69240);
var line_69243 = first__69100_69241;
var more_69244 = seq__69099_69242__$1;
var state_69245 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"clojurescript","clojurescript",-299769403),true,new cljs.core.Keyword(null,"references","references",882562509),references,new cljs.core.Keyword(null,"footnotes","footnotes",-1842778205),footnotes,new cljs.core.Keyword(null,"last-line-empty?","last-line-empty?",1279111527),true], null),params__$1], 0));
var G__69097_69246__$1 = G__69097_69238;
var state_69247__$1 = state_69245;
while(true){
var vec__69106_69248 = G__69097_69246__$1;
var seq__69107_69249 = cljs.core.seq(vec__69106_69248);
var first__69108_69250 = cljs.core.first(seq__69107_69249);
var seq__69107_69251__$1 = cljs.core.next(seq__69107_69249);
var line_69252__$1 = first__69108_69250;
var more_69253__$1 = seq__69107_69251__$1;
var state_69254__$2 = state_69247__$1;
var line_69255__$2 = (cljs.core.truth_(new cljs.core.Keyword(null,"skip-next-line?","skip-next-line?",1683617749).cljs$core$IFn$_invoke$arity$1(state_69254__$2))?"":line_69252__$1);
var state_69256__$3 = (cljs.core.truth_(new cljs.core.Keyword(null,"buf","buf",-213913340).cljs$core$IFn$_invoke$arity$1(state_69254__$2))?transformer(html,new cljs.core.Keyword(null,"buf","buf",-213913340).cljs$core$IFn$_invoke$arity$1(state_69254__$2),new cljs.core.Keyword(null,"next-line","next-line",-1187000287).cljs$core$IFn$_invoke$arity$1(state_69254__$2),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(state_69254__$2,new cljs.core.Keyword(null,"buf","buf",-213913340),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"lists","lists",-884730684),new cljs.core.Keyword(null,"next-line","next-line",-1187000287)], 0)),new cljs.core.Keyword(null,"last-line-empty?","last-line-empty?",1279111527),true)):state_69254__$2);
if(cljs.core.truth_(cljs.core.not_empty(more_69253__$1))){
var G__69257 = more_69253__$1;
var G__69258 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(transformer(html,line_69255__$2,cljs.core.first(more_69253__$1),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(state_69256__$3,new cljs.core.Keyword(null,"skip-next-line?","skip-next-line?",1683617749))),new cljs.core.Keyword(null,"last-line-empty?","last-line-empty?",1279111527),cljs.core.empty_QMARK_(line_69255__$2.trim()));
G__69097_69246__$1 = G__69257;
state_69247__$1 = G__69258;
continue;
} else {
transformer(html.append(markdown.transformers.footer(new cljs.core.Keyword(null,"footnotes","footnotes",-1842778205).cljs$core$IFn$_invoke$arity$1(state_69256__$3))),line_69255__$2,"",cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state_69256__$3,new cljs.core.Keyword(null,"eof","eof",-489063237),true));
}
break;
}

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"metadata","metadata",1799301597),metadata,new cljs.core.Keyword(null,"html","html",-998796897),html.toString()], null);
}finally {(markdown.transformers._STAR_formatter_STAR_ = _STAR_formatter_STAR__orig_val__69087);

(markdown.common._STAR_substring_STAR_ = _STAR_substring_STAR__orig_val__69086);
}});
markdown.core.md__GT_html = (function markdown$core$md__GT_html(var_args){
var args__5775__auto__ = [];
var len__5769__auto___69261 = arguments.length;
var i__5770__auto___69262 = (0);
while(true){
if((i__5770__auto___69262 < len__5769__auto___69261)){
args__5775__auto__.push((arguments[i__5770__auto___69262]));

var G__69265 = (i__5770__auto___69262 + (1));
i__5770__auto___69262 = G__69265;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return markdown.core.md__GT_html.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(markdown.core.md__GT_html.cljs$core$IFn$_invoke$arity$variadic = (function (text,params){
return new cljs.core.Keyword(null,"html","html",-998796897).cljs$core$IFn$_invoke$arity$1(markdown.core.md_to_html_string_STAR_(text,params));
}));

(markdown.core.md__GT_html.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(markdown.core.md__GT_html.cljs$lang$applyTo = (function (seq69119){
var G__69120 = cljs.core.first(seq69119);
var seq69119__$1 = cljs.core.next(seq69119);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__69120,seq69119__$1);
}));

markdown.core.md__GT_html_with_meta = (function markdown$core$md__GT_html_with_meta(var_args){
var args__5775__auto__ = [];
var len__5769__auto___69266 = arguments.length;
var i__5770__auto___69267 = (0);
while(true){
if((i__5770__auto___69267 < len__5769__auto___69266)){
args__5775__auto__.push((arguments[i__5770__auto___69267]));

var G__69268 = (i__5770__auto___69267 + (1));
i__5770__auto___69267 = G__69268;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return markdown.core.md__GT_html_with_meta.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(markdown.core.md__GT_html_with_meta.cljs$core$IFn$_invoke$arity$variadic = (function (text,params){
return markdown.core.md_to_html_string_STAR_(text,cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"parse-meta?","parse-meta?",-1938948742),true], null),params));
}));

(markdown.core.md__GT_html_with_meta.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(markdown.core.md__GT_html_with_meta.cljs$lang$applyTo = (function (seq69130){
var G__69131 = cljs.core.first(seq69130);
var seq69130__$1 = cljs.core.next(seq69130);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__69131,seq69130__$1);
}));

/**
 * Js accessible wrapper
 */
markdown.core.mdToHtml = (function markdown$core$mdToHtml(var_args){
var args__5775__auto__ = [];
var len__5769__auto___69269 = arguments.length;
var i__5770__auto___69270 = (0);
while(true){
if((i__5770__auto___69270 < len__5769__auto___69269)){
args__5775__auto__.push((arguments[i__5770__auto___69270]));

var G__69271 = (i__5770__auto___69270 + (1));
i__5770__auto___69270 = G__69271;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return markdown.core.mdToHtml.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});
goog.exportSymbol('markdown.core.mdToHtml', markdown.core.mdToHtml);

(markdown.core.mdToHtml.cljs$core$IFn$_invoke$arity$variadic = (function (params){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(markdown.core.md__GT_html,params);
}));

(markdown.core.mdToHtml.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(markdown.core.mdToHtml.cljs$lang$applyTo = (function (seq69162){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq69162));
}));

/**
 * Js accessible wrapper
 */
markdown.core.mdToHtmlWithMeta = (function markdown$core$mdToHtmlWithMeta(var_args){
var args__5775__auto__ = [];
var len__5769__auto___69282 = arguments.length;
var i__5770__auto___69284 = (0);
while(true){
if((i__5770__auto___69284 < len__5769__auto___69282)){
args__5775__auto__.push((arguments[i__5770__auto___69284]));

var G__69286 = (i__5770__auto___69284 + (1));
i__5770__auto___69284 = G__69286;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return markdown.core.mdToHtmlWithMeta.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});
goog.exportSymbol('markdown.core.mdToHtmlWithMeta', markdown.core.mdToHtmlWithMeta);

(markdown.core.mdToHtmlWithMeta.cljs$core$IFn$_invoke$arity$variadic = (function (params){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(markdown.core.md__GT_html_with_meta,params);
}));

(markdown.core.mdToHtmlWithMeta.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(markdown.core.mdToHtmlWithMeta.cljs$lang$applyTo = (function (seq69163){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq69163));
}));


//# sourceMappingURL=markdown.core.js.map
