goog.provide('shadow.cljs.devtools.client.node');
goog.scope(function(){
  shadow.cljs.devtools.client.node.goog$module$goog$object = goog.module.get('goog.object');
});
shadow.cljs.devtools.client.node.node_eval = (function shadow$cljs$devtools$client$node$node_eval(p__62796){
var map__62797 = p__62796;
var map__62797__$1 = cljs.core.__destructure_map(map__62797);
var msg = map__62797__$1;
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62797__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var source_map_json = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62797__$1,new cljs.core.Keyword(null,"source-map-json","source-map-json",-299460036));
var result = SHADOW_NODE_EVAL(js,source_map_json);
return result;
});
shadow.cljs.devtools.client.node.is_loaded_QMARK_ = (function shadow$cljs$devtools$client$node$is_loaded_QMARK_(src){
return shadow.cljs.devtools.client.node.goog$module$goog$object.get(SHADOW_IMPORTED,src) === true;
});
shadow.cljs.devtools.client.node.closure_import = (function shadow$cljs$devtools$client$node$closure_import(src){
if(typeof src === 'string'){
} else {
throw (new Error("Assert failed: (string? src)"));
}

return SHADOW_IMPORT(src);
});
shadow.cljs.devtools.client.node.handle_build_complete = (function shadow$cljs$devtools$client$node$handle_build_complete(runtime,p__62804){
var map__62805 = p__62804;
var map__62805__$1 = cljs.core.__destructure_map(map__62805);
var msg = map__62805__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62805__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62805__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var map__62807 = info;
var map__62807__$1 = cljs.core.__destructure_map(map__62807);
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62807__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var compiled = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62807__$1,new cljs.core.Keyword(null,"compiled","compiled",850043082));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62807__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(((shadow.cljs.devtools.client.env.autoload) && (((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))))){
var files_to_require = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"output-name","output-name",-1769107767),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__62816){
var map__62817 = p__62816;
var map__62817__$1 = cljs.core.__destructure_map(map__62817);
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62817__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62817__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
return ((cljs.core.contains_QMARK_(compiled,resource_id)) || (cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"always-load","always-load",66405637).cljs$core$IFn$_invoke$arity$1(reload_info),ns)));
}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__62818){
var map__62819 = p__62818;
var map__62819__$1 = cljs.core.__destructure_map(map__62819);
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62819__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
return cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"never-load","never-load",1300896819).cljs$core$IFn$_invoke$arity$1(reload_info),ns);
}),sources))));
if(cljs.core.seq(files_to_require)){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$2(msg,(function (){
var seq__62820 = cljs.core.seq(files_to_require);
var chunk__62821 = null;
var count__62822 = (0);
var i__62823 = (0);
while(true){
if((i__62823 < count__62822)){
var src = chunk__62821.cljs$core$IIndexed$_nth$arity$2(null,i__62823);
shadow.cljs.devtools.client.env.before_load_src(src);

shadow.cljs.devtools.client.node.closure_import(src);


var G__62863 = seq__62820;
var G__62864 = chunk__62821;
var G__62865 = count__62822;
var G__62866 = (i__62823 + (1));
seq__62820 = G__62863;
chunk__62821 = G__62864;
count__62822 = G__62865;
i__62823 = G__62866;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__62820);
if(temp__5804__auto__){
var seq__62820__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__62820__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__62820__$1);
var G__62867 = cljs.core.chunk_rest(seq__62820__$1);
var G__62868 = c__5568__auto__;
var G__62869 = cljs.core.count(c__5568__auto__);
var G__62870 = (0);
seq__62820 = G__62867;
chunk__62821 = G__62868;
count__62822 = G__62869;
i__62823 = G__62870;
continue;
} else {
var src = cljs.core.first(seq__62820__$1);
shadow.cljs.devtools.client.env.before_load_src(src);

shadow.cljs.devtools.client.node.closure_import(src);


var G__62871 = cljs.core.next(seq__62820__$1);
var G__62872 = null;
var G__62873 = (0);
var G__62874 = (0);
seq__62820 = G__62871;
chunk__62821 = G__62872;
count__62822 = G__62873;
i__62823 = G__62874;
continue;
}
} else {
return null;
}
}
break;
}
}));
} else {
return null;
}
} else {
return null;
}
});
shadow.cljs.devtools.client.node.client_info = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"host","host",-1558485167),new cljs.core.Keyword(null,"node","node",581201198),new cljs.core.Keyword(null,"desc","desc",2093485764),["Node ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(process.version)].join('')], null);
shadow.cljs.devtools.client.node.start = (function shadow$cljs$devtools$client$node$start(runtime){
var ws_url = shadow.cljs.devtools.client.env.get_ws_relay_url();
var socket = (new shadow.js.shim.module$ws(ws_url,({"rejectUnauthorized": false})));
var ws_active_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
socket.on("message",(function (data){
if(cljs.core.truth_(cljs.core.deref(ws_active_ref))){
return shadow.cljs.devtools.client.shared.remote_msg(runtime,data);
} else {
return null;
}
}));

socket.on("open",(function (e){
if(cljs.core.truth_(cljs.core.deref(ws_active_ref))){
return shadow.cljs.devtools.client.shared.remote_open(runtime,e);
} else {
return null;
}
}));

socket.on("close",(function (e){
if(cljs.core.truth_(cljs.core.deref(ws_active_ref))){
return shadow.cljs.devtools.client.shared.remote_close(runtime,e,ws_url);
} else {
return null;
}
}));

socket.on("error",(function (e){
if(cljs.core.truth_(cljs.core.deref(ws_active_ref))){
return shadow.cljs.devtools.client.shared.remote_error(runtime,e);
} else {
return null;
}
}));

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"socket","socket",59137063),socket,new cljs.core.Keyword(null,"ws-active-ref","ws-active-ref",804496391),ws_active_ref], null);
});
shadow.cljs.devtools.client.node.send = (function shadow$cljs$devtools$client$node$send(p__62826,msg){
var map__62827 = p__62826;
var map__62827__$1 = cljs.core.__destructure_map(map__62827);
var socket = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62827__$1,new cljs.core.Keyword(null,"socket","socket",59137063));
return socket.send(msg);
});
shadow.cljs.devtools.client.node.stop = (function shadow$cljs$devtools$client$node$stop(p__62829){
var map__62830 = p__62829;
var map__62830__$1 = cljs.core.__destructure_map(map__62830);
var socket = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62830__$1,new cljs.core.Keyword(null,"socket","socket",59137063));
var ws_active_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62830__$1,new cljs.core.Keyword(null,"ws-active-ref","ws-active-ref",804496391));
cljs.core.reset_BANG_(ws_active_ref,false);

return socket.close();
});
if((shadow.cljs.devtools.client.env.worker_client_id > (0))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$2 = (function (this$,code){
var this$__$1 = this;
return SHADOW_NODE_EVAL(code);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$2 = (function (this$,msg){
var this$__$1 = this;
return shadow.cljs.devtools.client.node.node_eval(msg);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__62833,done,error){
var map__62834 = p__62833;
var map__62834__$1 = cljs.core.__destructure_map(map__62834);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62834__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
try{var seq__62836_62875 = cljs.core.seq(repl_sources);
var chunk__62838_62876 = null;
var count__62839_62877 = (0);
var i__62840_62878 = (0);
while(true){
if((i__62840_62878 < count__62839_62877)){
var map__62844_62879 = chunk__62838_62876.cljs$core$IIndexed$_nth$arity$2(null,i__62840_62878);
var map__62844_62880__$1 = cljs.core.__destructure_map(map__62844_62879);
var src_62881 = map__62844_62880__$1;
var output_name_62882 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62844_62880__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
if((!(shadow.cljs.devtools.client.node.is_loaded_QMARK_(output_name_62882)))){
shadow.cljs.devtools.client.node.closure_import(output_name_62882);


var G__62883 = seq__62836_62875;
var G__62884 = chunk__62838_62876;
var G__62885 = count__62839_62877;
var G__62886 = (i__62840_62878 + (1));
seq__62836_62875 = G__62883;
chunk__62838_62876 = G__62884;
count__62839_62877 = G__62885;
i__62840_62878 = G__62886;
continue;
} else {
var G__62887 = seq__62836_62875;
var G__62888 = chunk__62838_62876;
var G__62889 = count__62839_62877;
var G__62890 = (i__62840_62878 + (1));
seq__62836_62875 = G__62887;
chunk__62838_62876 = G__62888;
count__62839_62877 = G__62889;
i__62840_62878 = G__62890;
continue;
}
} else {
var temp__5804__auto___62891 = cljs.core.seq(seq__62836_62875);
if(temp__5804__auto___62891){
var seq__62836_62892__$1 = temp__5804__auto___62891;
if(cljs.core.chunked_seq_QMARK_(seq__62836_62892__$1)){
var c__5568__auto___62893 = cljs.core.chunk_first(seq__62836_62892__$1);
var G__62894 = cljs.core.chunk_rest(seq__62836_62892__$1);
var G__62895 = c__5568__auto___62893;
var G__62896 = cljs.core.count(c__5568__auto___62893);
var G__62897 = (0);
seq__62836_62875 = G__62894;
chunk__62838_62876 = G__62895;
count__62839_62877 = G__62896;
i__62840_62878 = G__62897;
continue;
} else {
var map__62845_62898 = cljs.core.first(seq__62836_62892__$1);
var map__62845_62899__$1 = cljs.core.__destructure_map(map__62845_62898);
var src_62900 = map__62845_62899__$1;
var output_name_62901 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62845_62899__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
if((!(shadow.cljs.devtools.client.node.is_loaded_QMARK_(output_name_62901)))){
shadow.cljs.devtools.client.node.closure_import(output_name_62901);


var G__62902 = cljs.core.next(seq__62836_62892__$1);
var G__62903 = null;
var G__62904 = (0);
var G__62905 = (0);
seq__62836_62875 = G__62902;
chunk__62838_62876 = G__62903;
count__62839_62877 = G__62904;
i__62840_62878 = G__62905;
continue;
} else {
var G__62906 = cljs.core.next(seq__62836_62892__$1);
var G__62907 = null;
var G__62908 = (0);
var G__62909 = (0);
seq__62836_62875 = G__62906;
chunk__62838_62876 = G__62907;
count__62839_62877 = G__62908;
i__62840_62878 = G__62909;
continue;
}
}
} else {
}
}
break;
}

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}catch (e62835){var e = e62835;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(e) : error.call(null,e));
}}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (this$,p__62846,done,error){
var map__62847 = p__62846;
var map__62847__$1 = cljs.core.__destructure_map(map__62847);
var msg = map__62847__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62847__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62847__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var this$__$1 = this;
try{var seq__62849_62910 = cljs.core.seq(sources);
var chunk__62850_62911 = null;
var count__62851_62912 = (0);
var i__62852_62913 = (0);
while(true){
if((i__62852_62913 < count__62851_62912)){
var map__62855_62914 = chunk__62850_62911.cljs$core$IIndexed$_nth$arity$2(null,i__62852_62913);
var map__62855_62915__$1 = cljs.core.__destructure_map(map__62855_62914);
var src_62916 = map__62855_62915__$1;
var provides_62917 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62855_62915__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var output_name_62918 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62855_62915__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
if(cljs.core.truth_((function (){var or__5045__auto__ = (!(shadow.cljs.devtools.client.node.is_loaded_QMARK_(output_name_62918)));
if(or__5045__auto__){
return or__5045__auto__;
} else {
return cljs.core.some(reload_namespaces,provides_62917);
}
})())){
shadow.cljs.devtools.client.node.closure_import(output_name_62918);
} else {
}


var G__62919 = seq__62849_62910;
var G__62920 = chunk__62850_62911;
var G__62921 = count__62851_62912;
var G__62922 = (i__62852_62913 + (1));
seq__62849_62910 = G__62919;
chunk__62850_62911 = G__62920;
count__62851_62912 = G__62921;
i__62852_62913 = G__62922;
continue;
} else {
var temp__5804__auto___62923 = cljs.core.seq(seq__62849_62910);
if(temp__5804__auto___62923){
var seq__62849_62924__$1 = temp__5804__auto___62923;
if(cljs.core.chunked_seq_QMARK_(seq__62849_62924__$1)){
var c__5568__auto___62925 = cljs.core.chunk_first(seq__62849_62924__$1);
var G__62926 = cljs.core.chunk_rest(seq__62849_62924__$1);
var G__62927 = c__5568__auto___62925;
var G__62928 = cljs.core.count(c__5568__auto___62925);
var G__62929 = (0);
seq__62849_62910 = G__62926;
chunk__62850_62911 = G__62927;
count__62851_62912 = G__62928;
i__62852_62913 = G__62929;
continue;
} else {
var map__62856_62930 = cljs.core.first(seq__62849_62924__$1);
var map__62856_62931__$1 = cljs.core.__destructure_map(map__62856_62930);
var src_62932 = map__62856_62931__$1;
var provides_62933 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62856_62931__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var output_name_62934 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62856_62931__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
if(cljs.core.truth_((function (){var or__5045__auto__ = (!(shadow.cljs.devtools.client.node.is_loaded_QMARK_(output_name_62934)));
if(or__5045__auto__){
return or__5045__auto__;
} else {
return cljs.core.some(reload_namespaces,provides_62933);
}
})())){
shadow.cljs.devtools.client.node.closure_import(output_name_62934);
} else {
}


var G__62935 = cljs.core.next(seq__62849_62924__$1);
var G__62936 = null;
var G__62937 = (0);
var G__62938 = (0);
seq__62849_62910 = G__62935;
chunk__62850_62911 = G__62936;
count__62851_62912 = G__62937;
i__62852_62913 = G__62938;
continue;
}
} else {
}
}
break;
}

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}catch (e62848){var e = e62848;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(e) : error.call(null,e));
}}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.node","client","shadow.cljs.devtools.client.node/client",1327452098),cljs.core.PersistentHashSet.EMPTY,(function (p__62857){
var map__62858 = p__62857;
var map__62858__$1 = cljs.core.__destructure_map(map__62858);
var env = map__62858__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62858__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.node","client","shadow.cljs.devtools.client.node/client",1327452098),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
shadow.cljs.devtools.client.env.patch_goog_BANG_();

if(shadow.cljs.devtools.client.env.log){
return console.log(["shadow-cljs - #",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))," ready!"].join(''));
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (){
return console.warn("The shadow-cljs Websocket was disconnected.");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
return console.error(["Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."," Is the watch for this build running?"].join(''));
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.node.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__62859){
var map__62860 = p__62859;
var map__62860__$1 = cljs.core.__destructure_map(map__62860);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62860__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62860__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
return console.warn("shadow-cljs - The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
return console.warn("shadow-cljs - A new watch for this build was started, restart of this process required!");
} else {
return null;

}
}
})], null)], null));

return svc;
}),(function (p__62861){
var map__62862 = p__62861;
var map__62862__$1 = cljs.core.__destructure_map(map__62862);
var svc = map__62862__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62862__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.node","client","shadow.cljs.devtools.client.node/client",1327452098));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.node.client_info,shadow.cljs.devtools.client.node.start,shadow.cljs.devtools.client.node.send,shadow.cljs.devtools.client.node.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.node.js.map
