goog.provide('re_frisk.inlined_deps.reagent.v1v0v0.reagent.debug');
re_frisk.inlined_deps.reagent.v1v0v0.reagent.debug.has_console = (typeof console !== 'undefined');
re_frisk.inlined_deps.reagent.v1v0v0.reagent.debug.tracking = false;
if((typeof re_frisk !== 'undefined') && (typeof re_frisk.inlined_deps !== 'undefined') && (typeof re_frisk.inlined_deps.reagent !== 'undefined') && (typeof re_frisk.inlined_deps.reagent.v1v0v0 !== 'undefined') && (typeof re_frisk.inlined_deps.reagent.v1v0v0.reagent !== 'undefined') && (typeof re_frisk.inlined_deps.reagent.v1v0v0.reagent.debug !== 'undefined') && (typeof re_frisk.inlined_deps.reagent.v1v0v0.reagent.debug.warnings !== 'undefined')){
} else {
re_frisk.inlined_deps.reagent.v1v0v0.reagent.debug.warnings = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof re_frisk !== 'undefined') && (typeof re_frisk.inlined_deps !== 'undefined') && (typeof re_frisk.inlined_deps.reagent !== 'undefined') && (typeof re_frisk.inlined_deps.reagent.v1v0v0 !== 'undefined') && (typeof re_frisk.inlined_deps.reagent.v1v0v0.reagent !== 'undefined') && (typeof re_frisk.inlined_deps.reagent.v1v0v0.reagent.debug !== 'undefined') && (typeof re_frisk.inlined_deps.reagent.v1v0v0.reagent.debug.track_console !== 'undefined')){
} else {
re_frisk.inlined_deps.reagent.v1v0v0.reagent.debug.track_console = (function (){var o = ({});
(o.warn = (function() { 
var G__57598__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(re_frisk.inlined_deps.reagent.v1v0v0.reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__57598 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__57599__i = 0, G__57599__a = new Array(arguments.length -  0);
while (G__57599__i < G__57599__a.length) {G__57599__a[G__57599__i] = arguments[G__57599__i + 0]; ++G__57599__i;}
  args = new cljs.core.IndexedSeq(G__57599__a,0,null);
} 
return G__57598__delegate.call(this,args);};
G__57598.cljs$lang$maxFixedArity = 0;
G__57598.cljs$lang$applyTo = (function (arglist__57600){
var args = cljs.core.seq(arglist__57600);
return G__57598__delegate(args);
});
G__57598.cljs$core$IFn$_invoke$arity$variadic = G__57598__delegate;
return G__57598;
})()
);

(o.error = (function() { 
var G__57601__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(re_frisk.inlined_deps.reagent.v1v0v0.reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__57601 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__57602__i = 0, G__57602__a = new Array(arguments.length -  0);
while (G__57602__i < G__57602__a.length) {G__57602__a[G__57602__i] = arguments[G__57602__i + 0]; ++G__57602__i;}
  args = new cljs.core.IndexedSeq(G__57602__a,0,null);
} 
return G__57601__delegate.call(this,args);};
G__57601.cljs$lang$maxFixedArity = 0;
G__57601.cljs$lang$applyTo = (function (arglist__57603){
var args = cljs.core.seq(arglist__57603);
return G__57601__delegate(args);
});
G__57601.cljs$core$IFn$_invoke$arity$variadic = G__57601__delegate;
return G__57601;
})()
);

return o;
})();
}
re_frisk.inlined_deps.reagent.v1v0v0.reagent.debug.track_warnings = (function re_frisk$inlined_deps$reagent$v1v0v0$reagent$debug$track_warnings(f){
(re_frisk.inlined_deps.reagent.v1v0v0.reagent.debug.tracking = true);

cljs.core.reset_BANG_(re_frisk.inlined_deps.reagent.v1v0v0.reagent.debug.warnings,null);

(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

var warns = cljs.core.deref(re_frisk.inlined_deps.reagent.v1v0v0.reagent.debug.warnings);
cljs.core.reset_BANG_(re_frisk.inlined_deps.reagent.v1v0v0.reagent.debug.warnings,null);

(re_frisk.inlined_deps.reagent.v1v0v0.reagent.debug.tracking = false);

return warns;
});

//# sourceMappingURL=re_frisk.inlined_deps.reagent.v1v0v0.reagent.debug.js.map
