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
reitit.frontend.controllers.get_identity = (function reitit$frontend$controllers$get_identity(p__69952,match){
var map__69953 = p__69952;
var map__69953__$1 = cljs.core.__destructure_map(map__69953);
var identity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69953__$1,new cljs.core.Keyword(null,"identity","identity",1647396035));
var parameters = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69953__$1,new cljs.core.Keyword(null,"parameters","parameters",-1229919748));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69953__$1,new cljs.core.Keyword(null,"params","params",710516235));
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
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__5523__auto__ = (function reitit$frontend$controllers$get_identity_$_iter__69955(s__69956){
return (new cljs.core.LazySeq(null,(function (){
var s__69956__$1 = s__69956;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__69956__$1);
if(temp__5804__auto__){
var s__69956__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__69956__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__69956__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__69958 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__69957 = (0);
while(true){
if((i__69957 < size__5522__auto__)){
var vec__69959 = cljs.core._nth(c__5521__auto__,i__69957);
var param_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69959,(0),null);
var ks = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69959,(1),null);
cljs.core.chunk_append(b__69958,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [param_type,cljs.core.select_keys(cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"parameters","parameters",-1229919748).cljs$core$IFn$_invoke$arity$1(match),param_type),ks)], null));

var G__69982 = (i__69957 + (1));
i__69957 = G__69982;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__69958),reitit$frontend$controllers$get_identity_$_iter__69955(cljs.core.chunk_rest(s__69956__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__69958),null);
}
} else {
var vec__69962 = cljs.core.first(s__69956__$2);
var param_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69962,(0),null);
var ks = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69962,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [param_type,cljs.core.select_keys(cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"parameters","parameters",-1229919748).cljs$core$IFn$_invoke$arity$1(match),param_type),ks)], null),reitit$frontend$controllers$get_identity_$_iter__69955(cljs.core.rest(s__69956__$2)));
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
var G__69967 = new cljs.core.Keyword("reitit.frontend.controllers","identity","reitit.frontend.controllers/identity",-806277693).cljs$core$IFn$_invoke$arity$1(controller);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__69967) : f.call(null,G__69967));
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
var seq__69971_69984 = cljs.core.seq(cljs.core.reverse(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"old","old",-1825222690),changed_controllers)));
var chunk__69972_69985 = null;
var count__69973_69986 = (0);
var i__69974_69987 = (0);
while(true){
if((i__69974_69987 < count__69973_69986)){
var controller_69988 = chunk__69972_69985.cljs$core$IIndexed$_nth$arity$2(null,i__69974_69987);
reitit.frontend.controllers.apply_controller(controller_69988,new cljs.core.Keyword(null,"stop","stop",-2140911342));


var G__69989 = seq__69971_69984;
var G__69990 = chunk__69972_69985;
var G__69991 = count__69973_69986;
var G__69992 = (i__69974_69987 + (1));
seq__69971_69984 = G__69989;
chunk__69972_69985 = G__69990;
count__69973_69986 = G__69991;
i__69974_69987 = G__69992;
continue;
} else {
var temp__5804__auto___69993 = cljs.core.seq(seq__69971_69984);
if(temp__5804__auto___69993){
var seq__69971_69994__$1 = temp__5804__auto___69993;
if(cljs.core.chunked_seq_QMARK_(seq__69971_69994__$1)){
var c__5568__auto___69995 = cljs.core.chunk_first(seq__69971_69994__$1);
var G__69996 = cljs.core.chunk_rest(seq__69971_69994__$1);
var G__69997 = c__5568__auto___69995;
var G__69998 = cljs.core.count(c__5568__auto___69995);
var G__69999 = (0);
seq__69971_69984 = G__69996;
chunk__69972_69985 = G__69997;
count__69973_69986 = G__69998;
i__69974_69987 = G__69999;
continue;
} else {
var controller_70000 = cljs.core.first(seq__69971_69994__$1);
reitit.frontend.controllers.apply_controller(controller_70000,new cljs.core.Keyword(null,"stop","stop",-2140911342));


var G__70001 = cljs.core.next(seq__69971_69994__$1);
var G__70002 = null;
var G__70003 = (0);
var G__70004 = (0);
seq__69971_69984 = G__70001;
chunk__69972_69985 = G__70002;
count__69973_69986 = G__70003;
i__69974_69987 = G__70004;
continue;
}
} else {
}
}
break;
}

var seq__69978_70005 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"new","new",-2085437848),changed_controllers));
var chunk__69979_70006 = null;
var count__69980_70007 = (0);
var i__69981_70008 = (0);
while(true){
if((i__69981_70008 < count__69980_70007)){
var controller_70009 = chunk__69979_70006.cljs$core$IIndexed$_nth$arity$2(null,i__69981_70008);
reitit.frontend.controllers.apply_controller(controller_70009,new cljs.core.Keyword(null,"start","start",-355208981));


var G__70010 = seq__69978_70005;
var G__70011 = chunk__69979_70006;
var G__70012 = count__69980_70007;
var G__70013 = (i__69981_70008 + (1));
seq__69978_70005 = G__70010;
chunk__69979_70006 = G__70011;
count__69980_70007 = G__70012;
i__69981_70008 = G__70013;
continue;
} else {
var temp__5804__auto___70014 = cljs.core.seq(seq__69978_70005);
if(temp__5804__auto___70014){
var seq__69978_70015__$1 = temp__5804__auto___70014;
if(cljs.core.chunked_seq_QMARK_(seq__69978_70015__$1)){
var c__5568__auto___70016 = cljs.core.chunk_first(seq__69978_70015__$1);
var G__70017 = cljs.core.chunk_rest(seq__69978_70015__$1);
var G__70018 = c__5568__auto___70016;
var G__70019 = cljs.core.count(c__5568__auto___70016);
var G__70020 = (0);
seq__69978_70005 = G__70017;
chunk__69979_70006 = G__70018;
count__69980_70007 = G__70019;
i__69981_70008 = G__70020;
continue;
} else {
var controller_70021 = cljs.core.first(seq__69978_70015__$1);
reitit.frontend.controllers.apply_controller(controller_70021,new cljs.core.Keyword(null,"start","start",-355208981));


var G__70022 = cljs.core.next(seq__69978_70015__$1);
var G__70023 = null;
var G__70024 = (0);
var G__70025 = (0);
seq__69978_70005 = G__70022;
chunk__69979_70006 = G__70023;
count__69980_70007 = G__70024;
i__69981_70008 = G__70025;
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
