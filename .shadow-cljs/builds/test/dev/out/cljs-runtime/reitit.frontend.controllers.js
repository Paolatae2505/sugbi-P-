goog.provide('reitit.frontend.controllers');
reitit.frontend.controllers.pad_same_length = (function reitit$frontend$controllers$pad_same_length(a,b){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(a,cljs.core.take.cljs$core$IFn$_invoke$arity$2((cljs.core.count(b) - cljs.core.count(a)),cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(null)));
});
reitit.frontend.controllers.params_warning = (new cljs.core.Delay((function (){
return console.warn("Reitit-frontend controller :params is deprecated. Replace with :identity or :parameters option.");
}),null));
/**
 * Get controller identity given controller and match.
 * 
 *   To select interesting properties from Match :parameters option can be set.
 *   Value should be param-type => [param-key]
 *   Resulting value is map of param-type => param-key => value.
 * 
 *   For other uses, :identity option can be used to provide function from
 *   Match to identity.
 * 
 *   Default value is nil, i.e. controller identity doesn't depend on Match.
 */
reitit.frontend.controllers.get_identity = (function reitit$frontend$controllers$get_identity(p__64586,match){
var map__64587 = p__64586;
var map__64587__$1 = cljs.core.__destructure_map(map__64587);
var identity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64587__$1,new cljs.core.Keyword(null,"identity","identity",1647396035));
var parameters = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64587__$1,new cljs.core.Keyword(null,"parameters","parameters",-1229919748));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64587__$1,new cljs.core.Keyword(null,"params","params",710516235));
if(cljs.core.not((function (){var and__5043__auto__ = identity;
if(cljs.core.truth_(and__5043__auto__)){
return parameters;
} else {
return and__5043__auto__;
}
})())){
} else {
throw (new Error(["Assert failed: ","Use either :identity or :parameters for controller, not both.","\n","(not (and identity parameters))"].join('')));
}

if(cljs.core.truth_(params)){
cljs.core.deref(reitit.frontend.controllers.params_warning);
} else {
}

if(cljs.core.truth_(parameters)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__5523__auto__ = (function reitit$frontend$controllers$get_identity_$_iter__64588(s__64589){
return (new cljs.core.LazySeq(null,(function (){
var s__64589__$1 = s__64589;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__64589__$1);
if(temp__5804__auto__){
var s__64589__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__64589__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__64589__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__64591 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__64590 = (0);
while(true){
if((i__64590 < size__5522__auto__)){
var vec__64592 = cljs.core._nth(c__5521__auto__,i__64590);
var param_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64592,(0),null);
var ks = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64592,(1),null);
cljs.core.chunk_append(b__64591,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [param_type,cljs.core.select_keys(cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"parameters","parameters",-1229919748).cljs$core$IFn$_invoke$arity$1(match),param_type),ks)], null));

var G__64615 = (i__64590 + (1));
i__64590 = G__64615;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__64591),reitit$frontend$controllers$get_identity_$_iter__64588(cljs.core.chunk_rest(s__64589__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__64591),null);
}
} else {
var vec__64595 = cljs.core.first(s__64589__$2);
var param_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64595,(0),null);
var ks = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64595,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [param_type,cljs.core.select_keys(cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"parameters","parameters",-1229919748).cljs$core$IFn$_invoke$arity$1(match),param_type),ks)], null),reitit$frontend$controllers$get_identity_$_iter__64588(cljs.core.rest(s__64589__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(parameters);
})());
} else {
if(cljs.core.truth_(identity)){
return (identity.cljs$core$IFn$_invoke$arity$1 ? identity.cljs$core$IFn$_invoke$arity$1(match) : identity.call(null,match));
} else {
if(cljs.core.truth_(params)){
return (params.cljs$core$IFn$_invoke$arity$1 ? params.cljs$core$IFn$_invoke$arity$1(match) : params.call(null,match));
} else {
return null;

}
}
}
});
/**
 * Run side-effects (:start or :stop) for controller.
 *   The side-effect function is called with controller identity value.
 */
reitit.frontend.controllers.apply_controller = (function reitit$frontend$controllers$apply_controller(controller,method){
var temp__5804__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(controller,method);
if(cljs.core.truth_(temp__5804__auto__)){
var f = temp__5804__auto__;
var G__64598 = new cljs.core.Keyword("reitit.frontend.controllers","identity","reitit.frontend.controllers/identity",-806277693).cljs$core$IFn$_invoke$arity$1(controller);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__64598) : f.call(null,G__64598));
} else {
return null;
}
});
/**
 * Applies changes between current controllers and
 *   those previously enabled. Reinitializes controllers whose
 *   identity has changed.
 */
reitit.frontend.controllers.apply_controllers = (function reitit$frontend$controllers$apply_controllers(old_controllers,new_match){
var new_controllers = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (controller){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(controller,new cljs.core.Keyword("reitit.frontend.controllers","identity","reitit.frontend.controllers/identity",-806277693),reitit.frontend.controllers.get_identity(controller,new_match));
}),new cljs.core.Keyword(null,"controllers","controllers",-1120410624).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(new_match)));
var changed_controllers = cljs.core.vec(cljs.core.keep.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,cljs.core.map.cljs$core$IFn$_invoke$arity$3((function (old,new$){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(old,new$)){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"old","old",-1825222690),old,new cljs.core.Keyword(null,"new","new",-2085437848),new$], null);
} else {
return null;
}
}),reitit.frontend.controllers.pad_same_length(old_controllers,new_controllers),reitit.frontend.controllers.pad_same_length(new_controllers,old_controllers))));
var seq__64600_64617 = cljs.core.seq(cljs.core.reverse(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"old","old",-1825222690),changed_controllers)));
var chunk__64601_64618 = null;
var count__64602_64619 = (0);
var i__64603_64620 = (0);
while(true){
if((i__64603_64620 < count__64602_64619)){
var controller_64621 = chunk__64601_64618.cljs$core$IIndexed$_nth$arity$2(null,i__64603_64620);
reitit.frontend.controllers.apply_controller(controller_64621,new cljs.core.Keyword(null,"stop","stop",-2140911342));


var G__64623 = seq__64600_64617;
var G__64624 = chunk__64601_64618;
var G__64625 = count__64602_64619;
var G__64626 = (i__64603_64620 + (1));
seq__64600_64617 = G__64623;
chunk__64601_64618 = G__64624;
count__64602_64619 = G__64625;
i__64603_64620 = G__64626;
continue;
} else {
var temp__5804__auto___64627 = cljs.core.seq(seq__64600_64617);
if(temp__5804__auto___64627){
var seq__64600_64628__$1 = temp__5804__auto___64627;
if(cljs.core.chunked_seq_QMARK_(seq__64600_64628__$1)){
var c__5568__auto___64630 = cljs.core.chunk_first(seq__64600_64628__$1);
var G__64631 = cljs.core.chunk_rest(seq__64600_64628__$1);
var G__64632 = c__5568__auto___64630;
var G__64633 = cljs.core.count(c__5568__auto___64630);
var G__64634 = (0);
seq__64600_64617 = G__64631;
chunk__64601_64618 = G__64632;
count__64602_64619 = G__64633;
i__64603_64620 = G__64634;
continue;
} else {
var controller_64635 = cljs.core.first(seq__64600_64628__$1);
reitit.frontend.controllers.apply_controller(controller_64635,new cljs.core.Keyword(null,"stop","stop",-2140911342));


var G__64636 = cljs.core.next(seq__64600_64628__$1);
var G__64637 = null;
var G__64638 = (0);
var G__64639 = (0);
seq__64600_64617 = G__64636;
chunk__64601_64618 = G__64637;
count__64602_64619 = G__64638;
i__64603_64620 = G__64639;
continue;
}
} else {
}
}
break;
}

var seq__64606_64640 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"new","new",-2085437848),changed_controllers));
var chunk__64607_64641 = null;
var count__64608_64642 = (0);
var i__64609_64643 = (0);
while(true){
if((i__64609_64643 < count__64608_64642)){
var controller_64644 = chunk__64607_64641.cljs$core$IIndexed$_nth$arity$2(null,i__64609_64643);
reitit.frontend.controllers.apply_controller(controller_64644,new cljs.core.Keyword(null,"start","start",-355208981));


var G__64645 = seq__64606_64640;
var G__64646 = chunk__64607_64641;
var G__64647 = count__64608_64642;
var G__64648 = (i__64609_64643 + (1));
seq__64606_64640 = G__64645;
chunk__64607_64641 = G__64646;
count__64608_64642 = G__64647;
i__64609_64643 = G__64648;
continue;
} else {
var temp__5804__auto___64649 = cljs.core.seq(seq__64606_64640);
if(temp__5804__auto___64649){
var seq__64606_64650__$1 = temp__5804__auto___64649;
if(cljs.core.chunked_seq_QMARK_(seq__64606_64650__$1)){
var c__5568__auto___64651 = cljs.core.chunk_first(seq__64606_64650__$1);
var G__64652 = cljs.core.chunk_rest(seq__64606_64650__$1);
var G__64653 = c__5568__auto___64651;
var G__64654 = cljs.core.count(c__5568__auto___64651);
var G__64655 = (0);
seq__64606_64640 = G__64652;
chunk__64607_64641 = G__64653;
count__64608_64642 = G__64654;
i__64609_64643 = G__64655;
continue;
} else {
var controller_64656 = cljs.core.first(seq__64606_64650__$1);
reitit.frontend.controllers.apply_controller(controller_64656,new cljs.core.Keyword(null,"start","start",-355208981));


var G__64657 = cljs.core.next(seq__64606_64650__$1);
var G__64658 = null;
var G__64659 = (0);
var G__64660 = (0);
seq__64606_64640 = G__64657;
chunk__64607_64641 = G__64658;
count__64608_64642 = G__64659;
i__64609_64643 = G__64660;
continue;
}
} else {
}
}
break;
}

return new_controllers;
});

//# sourceMappingURL=reitit.frontend.controllers.js.map
