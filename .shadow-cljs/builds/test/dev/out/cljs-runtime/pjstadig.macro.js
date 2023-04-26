goog.provide('pjstadig.macro');
pjstadig.macro.diff = (function pjstadig$macro$diff(var_args){
var args__5775__auto__ = [];
var len__5769__auto___58514 = arguments.length;
var i__5770__auto___58515 = (0);
while(true){
if((i__5770__auto___58515 < len__5769__auto___58514)){
args__5775__auto__.push((arguments[i__5770__auto___58515]));

var G__58516 = (i__5770__auto___58515 + (1));
i__5770__auto___58515 = G__58516;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return pjstadig.macro.diff.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(pjstadig.macro.diff.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(clojure.data.diff,args);
}));

(pjstadig.macro.diff.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(pjstadig.macro.diff.cljs$lang$applyTo = (function (seq58512){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58512));
}));


//# sourceMappingURL=pjstadig.macro.js.map
