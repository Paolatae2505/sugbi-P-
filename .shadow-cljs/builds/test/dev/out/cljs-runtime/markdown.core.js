goog.provide('markdown.core');
markdown.core.init_transformer = (function markdown$core$init_transformer(p__62880){
var map__62881 = p__62880;
var map__62881__$1 = cljs.core.__destructure_map(map__62881);
var replacement_transformers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62881__$1,new cljs.core.Keyword(null,"replacement-transformers","replacement-transformers",-2028552897));
var custom_transformers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62881__$1,new cljs.core.Keyword(null,"custom-transformers","custom-transformers",1440601790));
var inhibit_separator = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62881__$1,new cljs.core.Keyword(null,"inhibit-separator","inhibit-separator",1268116222));
return (function (html,line,next_line,state){
var _STAR_inhibit_separator_STAR__orig_val__62882 = markdown.common._STAR_inhibit_separator_STAR_;
var _STAR_inhibit_separator_STAR__temp_val__62883 = inhibit_separator;
(markdown.common._STAR_inhibit_separator_STAR_ = _STAR_inhibit_separator_STAR__temp_val__62883);

try{var vec__62886 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__62891,transformer){
var vec__62894 = p__62891;
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62894,(0),null);
var state__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62894,(1),null);
var G__62897 = text;
var G__62898 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state__$1,new cljs.core.Keyword(null,"next-line","next-line",-1187000287),next_line);
return (transformer.cljs$core$IFn$_invoke$arity$2 ? transformer.cljs$core$IFn$_invoke$arity$2(G__62897,G__62898) : transformer.call(null,G__62897,G__62898));
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [line,state], null),(function (){var or__5045__auto__ = replacement_transformers;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(markdown.transformers.transformer_vector,custom_transformers);
}
})());
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62886,(0),null);
var new_state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62886,(1),null);
html.append(text);

return new_state;
}finally {(markdown.common._STAR_inhibit_separator_STAR_ = _STAR_inhibit_separator_STAR__orig_val__62882);
}});
});
/**
 * Removed from cljs.core 0.0-1885, Ref. http://goo.gl/su7Xkj
 */
markdown.core.format = (function markdown$core$format(var_args){
var args__5775__auto__ = [];
var len__5769__auto___62962 = arguments.length;
var i__5770__auto___62963 = (0);
while(true){
if((i__5770__auto___62963 < len__5769__auto___62962)){
args__5775__auto__.push((arguments[i__5770__auto___62963]));

var G__62964 = (i__5770__auto___62963 + (1));
i__5770__auto___62963 = G__62964;
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
(markdown.core.format.cljs$lang$applyTo = (function (seq62899){
var G__62900 = cljs.core.first(seq62899);
var seq62899__$1 = cljs.core.next(seq62899);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__62900,seq62899__$1);
}));

markdown.core.parse_references = (function markdown$core$parse_references(lines){
var references = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var seq__62908_62965 = cljs.core.seq(lines);
var chunk__62909_62966 = null;
var count__62910_62967 = (0);
var i__62911_62968 = (0);
while(true){
if((i__62911_62968 < count__62910_62967)){
var line_62969 = chunk__62909_62966.cljs$core$IIndexed$_nth$arity$2(null,i__62911_62968);
markdown.links.parse_reference_link(line_62969,references);


var G__62970 = seq__62908_62965;
var G__62971 = chunk__62909_62966;
var G__62972 = count__62910_62967;
var G__62973 = (i__62911_62968 + (1));
seq__62908_62965 = G__62970;
chunk__62909_62966 = G__62971;
count__62910_62967 = G__62972;
i__62911_62968 = G__62973;
continue;
} else {
var temp__5804__auto___62974 = cljs.core.seq(seq__62908_62965);
if(temp__5804__auto___62974){
var seq__62908_62975__$1 = temp__5804__auto___62974;
if(cljs.core.chunked_seq_QMARK_(seq__62908_62975__$1)){
var c__5568__auto___62976 = cljs.core.chunk_first(seq__62908_62975__$1);
var G__62977 = cljs.core.chunk_rest(seq__62908_62975__$1);
var G__62978 = c__5568__auto___62976;
var G__62979 = cljs.core.count(c__5568__auto___62976);
var G__62980 = (0);
seq__62908_62965 = G__62977;
chunk__62909_62966 = G__62978;
count__62910_62967 = G__62979;
i__62911_62968 = G__62980;
continue;
} else {
var line_62981 = cljs.core.first(seq__62908_62975__$1);
markdown.links.parse_reference_link(line_62981,references);


var G__62982 = cljs.core.next(seq__62908_62975__$1);
var G__62983 = null;
var G__62984 = (0);
var G__62985 = (0);
seq__62908_62965 = G__62982;
chunk__62909_62966 = G__62983;
count__62910_62967 = G__62984;
i__62911_62968 = G__62985;
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
var seq__62918_62986 = cljs.core.seq(lines);
var chunk__62919_62987 = null;
var count__62920_62988 = (0);
var i__62921_62989 = (0);
while(true){
if((i__62921_62989 < count__62920_62988)){
var line_62990 = chunk__62919_62987.cljs$core$IIndexed$_nth$arity$2(null,i__62921_62989);
markdown.links.parse_footnote_link(line_62990,footnotes);


var G__62991 = seq__62918_62986;
var G__62992 = chunk__62919_62987;
var G__62993 = count__62920_62988;
var G__62994 = (i__62921_62989 + (1));
seq__62918_62986 = G__62991;
chunk__62919_62987 = G__62992;
count__62920_62988 = G__62993;
i__62921_62989 = G__62994;
continue;
} else {
var temp__5804__auto___62995 = cljs.core.seq(seq__62918_62986);
if(temp__5804__auto___62995){
var seq__62918_62996__$1 = temp__5804__auto___62995;
if(cljs.core.chunked_seq_QMARK_(seq__62918_62996__$1)){
var c__5568__auto___62997 = cljs.core.chunk_first(seq__62918_62996__$1);
var G__62998 = cljs.core.chunk_rest(seq__62918_62996__$1);
var G__62999 = c__5568__auto___62997;
var G__63000 = cljs.core.count(c__5568__auto___62997);
var G__63001 = (0);
seq__62918_62986 = G__62998;
chunk__62919_62987 = G__62999;
count__62920_62988 = G__63000;
i__62921_62989 = G__63001;
continue;
} else {
var line_63002 = cljs.core.first(seq__62918_62996__$1);
markdown.links.parse_footnote_link(line_63002,footnotes);


var G__63003 = cljs.core.next(seq__62918_62996__$1);
var G__63004 = null;
var G__63005 = (0);
var G__63006 = (0);
seq__62918_62986 = G__63003;
chunk__62919_62987 = G__63004;
count__62920_62988 = G__63005;
i__62921_62989 = G__63006;
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
var vec__62925 = markdown.transformers.parse_metadata_headers(lines);
var metadata = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62925,(0),null);
var num_lines = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62925,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [metadata,cljs.core.drop.cljs$core$IFn$_invoke$arity$2(num_lines,lines)], null);
});
/**
 * processes input text line by line and outputs an HTML string
 */
markdown.core.md_to_html_string_STAR_ = (function markdown$core$md_to_html_string_STAR_(text,params){
var _STAR_substring_STAR__orig_val__62928 = markdown.common._STAR_substring_STAR_;
var _STAR_formatter_STAR__orig_val__62929 = markdown.transformers._STAR_formatter_STAR_;
var _STAR_substring_STAR__temp_val__62930 = (function (s,n){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.drop.cljs$core$IFn$_invoke$arity$2(n,s));
});
var _STAR_formatter_STAR__temp_val__62931 = markdown.core.format;
(markdown.common._STAR_substring_STAR_ = _STAR_substring_STAR__temp_val__62930);

(markdown.transformers._STAR_formatter_STAR_ = _STAR_formatter_STAR__temp_val__62931);

try{var params__$1 = (cljs.core.truth_(params)?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.assoc,cljs.core.PersistentArrayMap.EMPTY),params):null);
var lines = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text),"\n"].join('').split("\n");
var html = (new goog.string.StringBuffer(""));
var references = (cljs.core.truth_(new cljs.core.Keyword(null,"reference-links?","reference-links?",-2003778981).cljs$core$IFn$_invoke$arity$1(params__$1))?markdown.core.parse_references(lines):null);
var footnotes = (cljs.core.truth_(new cljs.core.Keyword(null,"footnotes?","footnotes?",-1590157845).cljs$core$IFn$_invoke$arity$1(params__$1))?markdown.core.parse_footnotes(lines):null);
var vec__62932 = (cljs.core.truth_(new cljs.core.Keyword(null,"parse-meta?","parse-meta?",-1938948742).cljs$core$IFn$_invoke$arity$1(params__$1))?markdown.core.parse_metadata(lines):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,lines], null));
var metadata = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62932,(0),null);
var lines__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62932,(1),null);
var transformer = markdown.core.init_transformer(params__$1);
var G__62938_63007 = lines__$1;
var vec__62939_63008 = G__62938_63007;
var seq__62940_63009 = cljs.core.seq(vec__62939_63008);
var first__62941_63010 = cljs.core.first(seq__62940_63009);
var seq__62940_63011__$1 = cljs.core.next(seq__62940_63009);
var line_63012 = first__62941_63010;
var more_63013 = seq__62940_63011__$1;
var state_63014 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"clojurescript","clojurescript",-299769403),true,new cljs.core.Keyword(null,"references","references",882562509),references,new cljs.core.Keyword(null,"footnotes","footnotes",-1842778205),footnotes,new cljs.core.Keyword(null,"last-line-empty?","last-line-empty?",1279111527),true], null),params__$1], 0));
var G__62938_63015__$1 = G__62938_63007;
var state_63016__$1 = state_63014;
while(true){
var vec__62947_63017 = G__62938_63015__$1;
var seq__62948_63018 = cljs.core.seq(vec__62947_63017);
var first__62949_63019 = cljs.core.first(seq__62948_63018);
var seq__62948_63020__$1 = cljs.core.next(seq__62948_63018);
var line_63021__$1 = first__62949_63019;
var more_63022__$1 = seq__62948_63020__$1;
var state_63023__$2 = state_63016__$1;
var line_63024__$2 = (cljs.core.truth_(new cljs.core.Keyword(null,"skip-next-line?","skip-next-line?",1683617749).cljs$core$IFn$_invoke$arity$1(state_63023__$2))?"":line_63021__$1);
var state_63025__$3 = (cljs.core.truth_(new cljs.core.Keyword(null,"buf","buf",-213913340).cljs$core$IFn$_invoke$arity$1(state_63023__$2))?transformer(html,new cljs.core.Keyword(null,"buf","buf",-213913340).cljs$core$IFn$_invoke$arity$1(state_63023__$2),new cljs.core.Keyword(null,"next-line","next-line",-1187000287).cljs$core$IFn$_invoke$arity$1(state_63023__$2),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(state_63023__$2,new cljs.core.Keyword(null,"buf","buf",-213913340),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"lists","lists",-884730684),new cljs.core.Keyword(null,"next-line","next-line",-1187000287)], 0)),new cljs.core.Keyword(null,"last-line-empty?","last-line-empty?",1279111527),true)):state_63023__$2);
if(cljs.core.truth_(cljs.core.not_empty(more_63022__$1))){
var G__63026 = more_63022__$1;
var G__63027 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(transformer(html,line_63024__$2,cljs.core.first(more_63022__$1),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(state_63025__$3,new cljs.core.Keyword(null,"skip-next-line?","skip-next-line?",1683617749))),new cljs.core.Keyword(null,"last-line-empty?","last-line-empty?",1279111527),cljs.core.empty_QMARK_(line_63024__$2.trim()));
G__62938_63015__$1 = G__63026;
state_63016__$1 = G__63027;
continue;
} else {
transformer(html.append(markdown.transformers.footer(new cljs.core.Keyword(null,"footnotes","footnotes",-1842778205).cljs$core$IFn$_invoke$arity$1(state_63025__$3))),line_63024__$2,"",cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state_63025__$3,new cljs.core.Keyword(null,"eof","eof",-489063237),true));
}
break;
}

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"metadata","metadata",1799301597),metadata,new cljs.core.Keyword(null,"html","html",-998796897),html.toString()], null);
}finally {(markdown.transformers._STAR_formatter_STAR_ = _STAR_formatter_STAR__orig_val__62929);

(markdown.common._STAR_substring_STAR_ = _STAR_substring_STAR__orig_val__62928);
}});
markdown.core.md__GT_html = (function markdown$core$md__GT_html(var_args){
var args__5775__auto__ = [];
var len__5769__auto___63028 = arguments.length;
var i__5770__auto___63029 = (0);
while(true){
if((i__5770__auto___63029 < len__5769__auto___63028)){
args__5775__auto__.push((arguments[i__5770__auto___63029]));

var G__63030 = (i__5770__auto___63029 + (1));
i__5770__auto___63029 = G__63030;
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
(markdown.core.md__GT_html.cljs$lang$applyTo = (function (seq62950){
var G__62951 = cljs.core.first(seq62950);
var seq62950__$1 = cljs.core.next(seq62950);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__62951,seq62950__$1);
}));

markdown.core.md__GT_html_with_meta = (function markdown$core$md__GT_html_with_meta(var_args){
var args__5775__auto__ = [];
var len__5769__auto___63031 = arguments.length;
var i__5770__auto___63032 = (0);
while(true){
if((i__5770__auto___63032 < len__5769__auto___63031)){
args__5775__auto__.push((arguments[i__5770__auto___63032]));

var G__63033 = (i__5770__auto___63032 + (1));
i__5770__auto___63032 = G__63033;
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
(markdown.core.md__GT_html_with_meta.cljs$lang$applyTo = (function (seq62955){
var G__62956 = cljs.core.first(seq62955);
var seq62955__$1 = cljs.core.next(seq62955);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__62956,seq62955__$1);
}));

/**
 * Js accessible wrapper
 */
markdown.core.mdToHtml = (function markdown$core$mdToHtml(var_args){
var args__5775__auto__ = [];
var len__5769__auto___63034 = arguments.length;
var i__5770__auto___63035 = (0);
while(true){
if((i__5770__auto___63035 < len__5769__auto___63034)){
args__5775__auto__.push((arguments[i__5770__auto___63035]));

var G__63036 = (i__5770__auto___63035 + (1));
i__5770__auto___63035 = G__63036;
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
(markdown.core.mdToHtml.cljs$lang$applyTo = (function (seq62957){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62957));
}));

/**
 * Js accessible wrapper
 */
markdown.core.mdToHtmlWithMeta = (function markdown$core$mdToHtmlWithMeta(var_args){
var args__5775__auto__ = [];
var len__5769__auto___63037 = arguments.length;
var i__5770__auto___63038 = (0);
while(true){
if((i__5770__auto___63038 < len__5769__auto___63037)){
args__5775__auto__.push((arguments[i__5770__auto___63038]));

var G__63039 = (i__5770__auto___63038 + (1));
i__5770__auto___63038 = G__63039;
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
(markdown.core.mdToHtmlWithMeta.cljs$lang$applyTo = (function (seq62961){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62961));
}));


//# sourceMappingURL=markdown.core.js.map
