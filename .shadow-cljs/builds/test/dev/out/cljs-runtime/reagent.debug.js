goog.provide('reagent.debug');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
(o.warn = (function() { 
var G__60497__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__60497 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__60498__i = 0, G__60498__a = new Array(arguments.length -  0);
while (G__60498__i < G__60498__a.length) {G__60498__a[G__60498__i] = arguments[G__60498__i + 0]; ++G__60498__i;}
  args = new cljs.core.IndexedSeq(G__60498__a,0,null);
} 
return G__60497__delegate.call(this,args);};
G__60497.cljs$lang$maxFixedArity = 0;
G__60497.cljs$lang$applyTo = (function (arglist__60499){
var args = cljs.core.seq(arglist__60499);
return G__60497__delegate(args);
});
G__60497.cljs$core$IFn$_invoke$arity$variadic = G__60497__delegate;
return G__60497;
})()
);

(o.error = (function() { 
var G__60500__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__60500 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__60501__i = 0, G__60501__a = new Array(arguments.length -  0);
while (G__60501__i < G__60501__a.length) {G__60501__a[G__60501__i] = arguments[G__60501__i + 0]; ++G__60501__i;}
  args = new cljs.core.IndexedSeq(G__60501__a,0,null);
} 
return G__60500__delegate.call(this,args);};
G__60500.cljs$lang$maxFixedArity = 0;
G__60500.cljs$lang$applyTo = (function (arglist__60502){
var args = cljs.core.seq(arglist__60502);
return G__60500__delegate(args);
});
G__60500.cljs$core$IFn$_invoke$arity$variadic = G__60500__delegate;
return G__60500;
})()
);

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
(reagent.debug.tracking = true);

cljs.core.reset_BANG_(reagent.debug.warnings,null);

(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

var warns = cljs.core.deref(reagent.debug.warnings);
cljs.core.reset_BANG_(reagent.debug.warnings,null);

(reagent.debug.tracking = false);

return warns;
});

//# sourceMappingURL=reagent.debug.js.map
