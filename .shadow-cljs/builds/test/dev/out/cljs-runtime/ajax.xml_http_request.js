goog.provide('ajax.xml_http_request');
ajax.xml_http_request.ready_state = (function ajax$xml_http_request$ready_state(e){
var G__63167 = e.target.readyState;
var fexpr__63166 = new cljs.core.PersistentArrayMap(null, 5, [(0),new cljs.core.Keyword(null,"not-initialized","not-initialized",-1937378906),(1),new cljs.core.Keyword(null,"connection-established","connection-established",-1403749733),(2),new cljs.core.Keyword(null,"request-received","request-received",2110590540),(3),new cljs.core.Keyword(null,"processing-request","processing-request",-264947221),(4),new cljs.core.Keyword(null,"response-ready","response-ready",245208276)], null);
return (fexpr__63166.cljs$core$IFn$_invoke$arity$1 ? fexpr__63166.cljs$core$IFn$_invoke$arity$1(G__63167) : fexpr__63166.call(null,G__63167));
});
ajax.xml_http_request.append = (function ajax$xml_http_request$append(current,next){
if(cljs.core.truth_(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current),", ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(next)].join('');
} else {
return next;
}
});
ajax.xml_http_request.process_headers = (function ajax$xml_http_request$process_headers(header_str){
if(cljs.core.truth_(header_str)){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (headers,header_line){
if(cljs.core.truth_(goog.string.isEmptyOrWhitespace(header_line))){
return headers;
} else {
var key_value = goog.string.splitLimit(header_line,": ",(2));
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(headers,(key_value[(0)]),ajax.xml_http_request.append,(key_value[(1)]));
}
}),cljs.core.PersistentArrayMap.EMPTY,header_str.split("\r\n"));
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
});
ajax.xml_http_request.xmlhttprequest = (((typeof goog !== 'undefined') && (typeof goog.global !== 'undefined') && (typeof goog.global.XMLHttpRequest !== 'undefined'))?goog.global.XMLHttpRequest:(((typeof require !== 'undefined'))?(function (){var req = require;
return (req.cljs$core$IFn$_invoke$arity$1 ? req.cljs$core$IFn$_invoke$arity$1("xmlhttprequest") : req.call(null,"xmlhttprequest")).XMLHttpRequest;
})():null));
(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxImpl$ = cljs.core.PROTOCOL_SENTINEL);

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxImpl$_js_ajax_request$arity$3 = (function (this$,p__63182,handler){
var map__63183 = p__63182;
var map__63183__$1 = cljs.core.__destructure_map(map__63183);
var uri = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63183__$1,new cljs.core.Keyword(null,"uri","uri",-774711847));
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63183__$1,new cljs.core.Keyword(null,"method","method",55703592));
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63183__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63183__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var timeout = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__63183__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318),(0));
var with_credentials = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__63183__$1,new cljs.core.Keyword(null,"with-credentials","with-credentials",-1163127235),false);
var response_format = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63183__$1,new cljs.core.Keyword(null,"response-format","response-format",1664465322));
var this$__$1 = this;
(this$__$1.withCredentials = with_credentials);

(this$__$1.onreadystatechange = (function (p1__63181_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"response-ready","response-ready",245208276),ajax.xml_http_request.ready_state(p1__63181_SHARP_))){
return (handler.cljs$core$IFn$_invoke$arity$1 ? handler.cljs$core$IFn$_invoke$arity$1(this$__$1) : handler.call(null,this$__$1));
} else {
return null;
}
}));

this$__$1.open(method,uri,true);

(this$__$1.timeout = timeout);

var temp__5804__auto___63206 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(response_format);
if(cljs.core.truth_(temp__5804__auto___63206)){
var response_type_63207 = temp__5804__auto___63206;
(this$__$1.responseType = cljs.core.name(response_type_63207));
} else {
}

var seq__63185_63208 = cljs.core.seq(headers);
var chunk__63186_63209 = null;
var count__63187_63210 = (0);
var i__63188_63211 = (0);
while(true){
if((i__63188_63211 < count__63187_63210)){
var vec__63198_63212 = chunk__63186_63209.cljs$core$IIndexed$_nth$arity$2(null,i__63188_63211);
var k_63213 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63198_63212,(0),null);
var v_63214 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63198_63212,(1),null);
this$__$1.setRequestHeader(k_63213,v_63214);


var G__63215 = seq__63185_63208;
var G__63216 = chunk__63186_63209;
var G__63217 = count__63187_63210;
var G__63218 = (i__63188_63211 + (1));
seq__63185_63208 = G__63215;
chunk__63186_63209 = G__63216;
count__63187_63210 = G__63217;
i__63188_63211 = G__63218;
continue;
} else {
var temp__5804__auto___63219 = cljs.core.seq(seq__63185_63208);
if(temp__5804__auto___63219){
var seq__63185_63220__$1 = temp__5804__auto___63219;
if(cljs.core.chunked_seq_QMARK_(seq__63185_63220__$1)){
var c__5568__auto___63221 = cljs.core.chunk_first(seq__63185_63220__$1);
var G__63222 = cljs.core.chunk_rest(seq__63185_63220__$1);
var G__63223 = c__5568__auto___63221;
var G__63224 = cljs.core.count(c__5568__auto___63221);
var G__63225 = (0);
seq__63185_63208 = G__63222;
chunk__63186_63209 = G__63223;
count__63187_63210 = G__63224;
i__63188_63211 = G__63225;
continue;
} else {
var vec__63201_63226 = cljs.core.first(seq__63185_63220__$1);
var k_63227 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63201_63226,(0),null);
var v_63228 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63201_63226,(1),null);
this$__$1.setRequestHeader(k_63227,v_63228);


var G__63229 = cljs.core.next(seq__63185_63220__$1);
var G__63230 = null;
var G__63231 = (0);
var G__63232 = (0);
seq__63185_63208 = G__63229;
chunk__63186_63209 = G__63230;
count__63187_63210 = G__63231;
i__63188_63211 = G__63232;
continue;
}
} else {
}
}
break;
}

this$__$1.send((function (){var or__5045__auto__ = body;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return "";
}
})());

return this$__$1;
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxRequest$ = cljs.core.PROTOCOL_SENTINEL);

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxRequest$_abort$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.abort();
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$ = cljs.core.PROTOCOL_SENTINEL);

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_body$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.response;
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_status$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.status;
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_status_text$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.statusText;
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_get_all_headers$arity$1 = (function (this$){
var this$__$1 = this;
return ajax.xml_http_request.process_headers(this$__$1.getAllResponseHeaders());
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_get_response_header$arity$2 = (function (this$,header){
var this$__$1 = this;
return this$__$1.getResponseHeader(header);
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_was_aborted$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),this$__$1.readyState);
}));

//# sourceMappingURL=ajax.xml_http_request.js.map
