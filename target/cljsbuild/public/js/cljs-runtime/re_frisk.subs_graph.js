goog.provide('re_frisk.subs_graph');
if((typeof re_frisk !== 'undefined') && (typeof re_frisk.subs_graph !== 'undefined') && (typeof re_frisk.subs_graph.network !== 'undefined')){
} else {
re_frisk.subs_graph.network = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof re_frisk !== 'undefined') && (typeof re_frisk.subs_graph !== 'undefined') && (typeof re_frisk.subs_graph.reaction__GT_operation !== 'undefined')){
} else {
re_frisk.subs_graph.reaction__GT_operation = re_frisk.inlined_deps.reagent.v1v0v0.reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
if((typeof re_frisk !== 'undefined') && (typeof re_frisk.subs_graph !== 'undefined') && (typeof re_frisk.subs_graph.view__GT_reactions !== 'undefined')){
} else {
re_frisk.subs_graph.view__GT_reactions = re_frisk.inlined_deps.reagent.v1v0v0.reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
if((typeof re_frisk !== 'undefined') && (typeof re_frisk.subs_graph !== 'undefined') && (typeof re_frisk.subs_graph.vis !== 'undefined')){
} else {
re_frisk.subs_graph.vis = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof re_frisk !== 'undefined') && (typeof re_frisk.subs_graph !== 'undefined') && (typeof re_frisk.subs_graph.doc !== 'undefined')){
} else {
re_frisk.subs_graph.doc = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof re_frisk !== 'undefined') && (typeof re_frisk.subs_graph !== 'undefined') && (typeof re_frisk.subs_graph.nodes !== 'undefined')){
} else {
re_frisk.subs_graph.nodes = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
if((typeof re_frisk !== 'undefined') && (typeof re_frisk.subs_graph !== 'undefined') && (typeof re_frisk.subs_graph.edges !== 'undefined')){
} else {
re_frisk.subs_graph.edges = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
if((typeof re_frisk !== 'undefined') && (typeof re_frisk.subs_graph !== 'undefined') && (typeof re_frisk.subs_graph.options !== 'undefined')){
} else {
re_frisk.subs_graph.options = cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"physics","physics",-1254209137),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"solver","solver",-744421825),"forceAtlas2Based",new cljs.core.Keyword(null,"maxVelocity","maxVelocity",1721643083),(30),new cljs.core.Keyword(null,"minVelocity","minVelocity",-32716928),(10),new cljs.core.Keyword(null,"stabilization","stabilization",-1209068026),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"iterations","iterations",-1402710890),(30)], null)], null)], null));
}
re_frisk.subs_graph.init = (function re_frisk$subs_graph$init(win,document){
cljs.core.reset_BANG_(re_frisk.subs_graph.vis,win.vis);

return cljs.core.reset_BANG_(re_frisk.subs_graph.doc,document);
});
re_frisk.subs_graph.set_root_node = (function re_frisk$subs_graph$set_root_node(reaction){
if(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(re_frisk.subs_graph.nodes),reaction))){
return null;
} else {
var data = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),"app-db",new cljs.core.Keyword(null,"label","label",1718410804),"app-db",new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background","background",-863952629),new cljs.core.Keyword(null,"yellow","yellow",-881035449)], null)], null);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frisk.subs_graph.nodes,cljs.core.assoc,reaction,data);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frisk.subs_graph.reaction__GT_operation,cljs.core.assoc,reaction,"app-db");

if(cljs.core.truth_(cljs.core.deref(re_frisk.subs_graph.network))){
return new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(re_frisk.subs_graph.network)).nodes.add(cljs.core.clj__GT_js(data));
} else {
return null;
}
}
});
re_frisk.subs_graph.destroy = (function re_frisk$subs_graph$destroy(){
var temp__5804__auto__ = new cljs.core.Keyword(null,"network","network",2050004697).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(re_frisk.subs_graph.network));
if(cljs.core.truth_(temp__5804__auto__)){
var network_js = temp__5804__auto__;
network_js.destroy();

return cljs.core.reset_BANG_(re_frisk.subs_graph.network,null);
} else {
return null;
}
});
re_frisk.subs_graph.create = (function re_frisk$subs_graph$create(){
re_frisk.subs_graph.destroy();

if(cljs.core.truth_((function (){var and__5043__auto__ = cljs.core.deref(re_frisk.subs_graph.vis);
if(cljs.core.truth_(and__5043__auto__)){
return cljs.core.deref(re_frisk.subs_graph.doc);
} else {
return and__5043__auto__;
}
})())){
var Network = cljs.core.deref(re_frisk.subs_graph.vis).Network;
var DataSet = cljs.core.deref(re_frisk.subs_graph.vis).DataSet;
var nodes_ds = (new DataSet(cljs.core.clj__GT_js(cljs.core.vals(cljs.core.deref(re_frisk.subs_graph.nodes)))));
var edges_ds = (new DataSet(cljs.core.clj__GT_js(cljs.core.vals(cljs.core.deref(re_frisk.subs_graph.edges)))));
var data = ({"nodes": nodes_ds, "edges": edges_ds});
var temp__5804__auto__ = cljs.core.deref(re_frisk.subs_graph.doc).getElementById("global-subs-graph-container");
if(cljs.core.truth_(temp__5804__auto__)){
var container = temp__5804__auto__;
return cljs.core.reset_BANG_(re_frisk.subs_graph.network,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data","data",-232669377),data,new cljs.core.Keyword(null,"network","network",2050004697),(new Network(container,data,re_frisk.subs_graph.options))], null));
} else {
return null;
}
} else {
return null;
}
});
re_frisk.subs_graph.update_subs = (function re_frisk$subs_graph$update_subs(traces){
var temp__5804__auto___58500 = new cljs.core.Keyword(null,"app-db-reaction","app-db-reaction",-269835135).cljs$core$IFn$_invoke$arity$1(cljs.core.first(traces));
if(cljs.core.truth_(temp__5804__auto___58500)){
var app_db_reaction_58501 = temp__5804__auto___58500;
re_frisk.subs_graph.set_root_node(app_db_reaction_58501);
} else {
}

var seq__58182_58502 = cljs.core.seq(traces);
var chunk__58183_58503 = null;
var count__58184_58504 = (0);
var i__58185_58505 = (0);
while(true){
if((i__58185_58505 < count__58184_58504)){
var map__58214_58506 = chunk__58183_58503.cljs$core$IIndexed$_nth$arity$2(null,i__58185_58505);
var map__58214_58507__$1 = cljs.core.__destructure_map(map__58214_58506);
var subs_58508 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58214_58507__$1,new cljs.core.Keyword(null,"subs","subs",-186681991));
var seq__58215_58509 = cljs.core.seq(subs_58508);
var chunk__58216_58510 = null;
var count__58217_58511 = (0);
var i__58218_58512 = (0);
while(true){
if((i__58218_58512 < count__58217_58511)){
var map__58221_58513 = chunk__58216_58510.cljs$core$IIndexed$_nth$arity$2(null,i__58218_58512);
var map__58221_58514__$1 = cljs.core.__destructure_map(map__58221_58513);
var operation_58515 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58221_58514__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var reaction_58516 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58221_58514__$1,new cljs.core.Keyword(null,"reaction","reaction",490869788));
if(cljs.core.truth_(reaction_58516)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frisk.subs_graph.reaction__GT_operation,cljs.core.assoc,reaction_58516,operation_58515);
} else {
}


var G__58518 = seq__58215_58509;
var G__58519 = chunk__58216_58510;
var G__58520 = count__58217_58511;
var G__58521 = (i__58218_58512 + (1));
seq__58215_58509 = G__58518;
chunk__58216_58510 = G__58519;
count__58217_58511 = G__58520;
i__58218_58512 = G__58521;
continue;
} else {
var temp__5804__auto___58522 = cljs.core.seq(seq__58215_58509);
if(temp__5804__auto___58522){
var seq__58215_58523__$1 = temp__5804__auto___58522;
if(cljs.core.chunked_seq_QMARK_(seq__58215_58523__$1)){
var c__5568__auto___58524 = cljs.core.chunk_first(seq__58215_58523__$1);
var G__58526 = cljs.core.chunk_rest(seq__58215_58523__$1);
var G__58527 = c__5568__auto___58524;
var G__58528 = cljs.core.count(c__5568__auto___58524);
var G__58529 = (0);
seq__58215_58509 = G__58526;
chunk__58216_58510 = G__58527;
count__58217_58511 = G__58528;
i__58218_58512 = G__58529;
continue;
} else {
var map__58223_58530 = cljs.core.first(seq__58215_58523__$1);
var map__58223_58531__$1 = cljs.core.__destructure_map(map__58223_58530);
var operation_58532 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58223_58531__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var reaction_58533 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58223_58531__$1,new cljs.core.Keyword(null,"reaction","reaction",490869788));
if(cljs.core.truth_(reaction_58533)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frisk.subs_graph.reaction__GT_operation,cljs.core.assoc,reaction_58533,operation_58532);
} else {
}


var G__58534 = cljs.core.next(seq__58215_58523__$1);
var G__58535 = null;
var G__58536 = (0);
var G__58537 = (0);
seq__58215_58509 = G__58534;
chunk__58216_58510 = G__58535;
count__58217_58511 = G__58536;
i__58218_58512 = G__58537;
continue;
}
} else {
}
}
break;
}


var G__58538 = seq__58182_58502;
var G__58539 = chunk__58183_58503;
var G__58540 = count__58184_58504;
var G__58541 = (i__58185_58505 + (1));
seq__58182_58502 = G__58538;
chunk__58183_58503 = G__58539;
count__58184_58504 = G__58540;
i__58185_58505 = G__58541;
continue;
} else {
var temp__5804__auto___58542 = cljs.core.seq(seq__58182_58502);
if(temp__5804__auto___58542){
var seq__58182_58543__$1 = temp__5804__auto___58542;
if(cljs.core.chunked_seq_QMARK_(seq__58182_58543__$1)){
var c__5568__auto___58544 = cljs.core.chunk_first(seq__58182_58543__$1);
var G__58545 = cljs.core.chunk_rest(seq__58182_58543__$1);
var G__58546 = c__5568__auto___58544;
var G__58547 = cljs.core.count(c__5568__auto___58544);
var G__58548 = (0);
seq__58182_58502 = G__58545;
chunk__58183_58503 = G__58546;
count__58184_58504 = G__58547;
i__58185_58505 = G__58548;
continue;
} else {
var map__58224_58549 = cljs.core.first(seq__58182_58543__$1);
var map__58224_58550__$1 = cljs.core.__destructure_map(map__58224_58549);
var subs_58551 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58224_58550__$1,new cljs.core.Keyword(null,"subs","subs",-186681991));
var seq__58225_58552 = cljs.core.seq(subs_58551);
var chunk__58226_58553 = null;
var count__58227_58554 = (0);
var i__58228_58555 = (0);
while(true){
if((i__58228_58555 < count__58227_58554)){
var map__58231_58556 = chunk__58226_58553.cljs$core$IIndexed$_nth$arity$2(null,i__58228_58555);
var map__58231_58557__$1 = cljs.core.__destructure_map(map__58231_58556);
var operation_58558 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58231_58557__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var reaction_58559 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58231_58557__$1,new cljs.core.Keyword(null,"reaction","reaction",490869788));
if(cljs.core.truth_(reaction_58559)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frisk.subs_graph.reaction__GT_operation,cljs.core.assoc,reaction_58559,operation_58558);
} else {
}


var G__58560 = seq__58225_58552;
var G__58561 = chunk__58226_58553;
var G__58562 = count__58227_58554;
var G__58563 = (i__58228_58555 + (1));
seq__58225_58552 = G__58560;
chunk__58226_58553 = G__58561;
count__58227_58554 = G__58562;
i__58228_58555 = G__58563;
continue;
} else {
var temp__5804__auto___58565__$1 = cljs.core.seq(seq__58225_58552);
if(temp__5804__auto___58565__$1){
var seq__58225_58566__$1 = temp__5804__auto___58565__$1;
if(cljs.core.chunked_seq_QMARK_(seq__58225_58566__$1)){
var c__5568__auto___58567 = cljs.core.chunk_first(seq__58225_58566__$1);
var G__58568 = cljs.core.chunk_rest(seq__58225_58566__$1);
var G__58569 = c__5568__auto___58567;
var G__58570 = cljs.core.count(c__5568__auto___58567);
var G__58571 = (0);
seq__58225_58552 = G__58568;
chunk__58226_58553 = G__58569;
count__58227_58554 = G__58570;
i__58228_58555 = G__58571;
continue;
} else {
var map__58232_58573 = cljs.core.first(seq__58225_58566__$1);
var map__58232_58574__$1 = cljs.core.__destructure_map(map__58232_58573);
var operation_58575 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58232_58574__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var reaction_58576 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58232_58574__$1,new cljs.core.Keyword(null,"reaction","reaction",490869788));
if(cljs.core.truth_(reaction_58576)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frisk.subs_graph.reaction__GT_operation,cljs.core.assoc,reaction_58576,operation_58575);
} else {
}


var G__58577 = cljs.core.next(seq__58225_58566__$1);
var G__58578 = null;
var G__58579 = (0);
var G__58580 = (0);
seq__58225_58552 = G__58577;
chunk__58226_58553 = G__58578;
count__58227_58554 = G__58579;
i__58228_58555 = G__58580;
continue;
}
} else {
}
}
break;
}


var G__58581 = cljs.core.next(seq__58182_58543__$1);
var G__58582 = null;
var G__58583 = (0);
var G__58584 = (0);
seq__58182_58502 = G__58581;
chunk__58183_58503 = G__58582;
count__58184_58504 = G__58583;
i__58185_58505 = G__58584;
continue;
}
} else {
}
}
break;
}

var new_nodes = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var seq__58233_58585 = cljs.core.seq(traces);
var chunk__58234_58586 = null;
var count__58235_58587 = (0);
var i__58236_58588 = (0);
while(true){
if((i__58236_58588 < count__58235_58587)){
var map__58348_58589 = chunk__58234_58586.cljs$core$IIndexed$_nth$arity$2(null,i__58236_58588);
var map__58348_58590__$1 = cljs.core.__destructure_map(map__58348_58589);
var subs_58591 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58348_58590__$1,new cljs.core.Keyword(null,"subs","subs",-186681991));
var seq__58349_58592 = cljs.core.seq(subs_58591);
var chunk__58350_58593 = null;
var count__58351_58594 = (0);
var i__58352_58595 = (0);
while(true){
if((i__58352_58595 < count__58351_58594)){
var map__58363_58596 = chunk__58350_58593.cljs$core$IIndexed$_nth$arity$2(null,i__58352_58595);
var map__58363_58597__$1 = cljs.core.__destructure_map(map__58363_58596);
var op_type_58598 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58363_58597__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var input_signals_58599 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58363_58597__$1,new cljs.core.Keyword(null,"input-signals","input-signals",563633497));
var operation_58600 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58363_58597__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var reaction_58601 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58363_58597__$1,new cljs.core.Keyword(null,"reaction","reaction",490869788));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(op_type_58598,new cljs.core.Keyword(null,"create-class","create-class",1988524183))){
if(cljs.core.truth_((function (){var and__5043__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(op_type_58598,new cljs.core.Keyword(null,"render","render",-1408033454));
if(and__5043__auto__){
return input_signals_58599;
} else {
return and__5043__auto__;
}
})())){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frisk.subs_graph.view__GT_reactions,cljs.core.assoc,operation_58600,input_signals_58599);
} else {
}

var operation_58603__$1 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(operation_58600);
if(cljs.core.truth_(reaction_58601)){
var temp__5802__auto___58604 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(re_frisk.subs_graph.nodes),operation_58603__$1);
if(cljs.core.truth_(temp__5802__auto___58604)){
var old_reaction_58606 = temp__5802__auto___58604;
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(op_type_58598,new cljs.core.Keyword(null,"op-type","op-type",-1636141668).cljs$core$IFn$_invoke$arity$1(old_reaction_58606))){
var updated_node_58607 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(old_reaction_58606,new cljs.core.Keyword(null,"op-type","op-type",-1636141668),op_type_58598,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background","background",-863952629),cljs.core.get.cljs$core$IFn$_invoke$arity$2(re_frisk.ui.components.colors.sub_colors,op_type_58598)], null)], 0));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frisk.subs_graph.nodes,cljs.core.assoc,operation_58603__$1,updated_node_58607);

if(cljs.core.truth_(cljs.core.deref(re_frisk.subs_graph.network))){
if(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(new_nodes),operation_58603__$1))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(new_nodes,cljs.core.assoc,operation_58603__$1,updated_node_58607);
} else {
new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(re_frisk.subs_graph.network)).nodes.update(cljs.core.clj__GT_js(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [updated_node_58607], null)));
}
} else {
}
} else {
}
} else {
var data_58608 = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),operation_58603__$1,new cljs.core.Keyword(null,"label","label",1718410804),operation_58603__$1,new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background","background",-863952629),cljs.core.get.cljs$core$IFn$_invoke$arity$2(re_frisk.ui.components.colors.sub_colors,op_type_58598)], null),new cljs.core.Keyword(null,"font","font",-1506159249),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"white","white",-483998618)], null),new cljs.core.Keyword(null,"op-type","op-type",-1636141668),op_type_58598], null);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frisk.subs_graph.nodes,cljs.core.assoc,operation_58603__$1,data_58608);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(new_nodes,cljs.core.assoc,operation_58603__$1,data_58608);
}
} else {
}

if(cljs.core.truth_(input_signals_58599)){
var seq__58364_58609 = cljs.core.seq(input_signals_58599);
var chunk__58365_58610 = null;
var count__58366_58611 = (0);
var i__58367_58612 = (0);
while(true){
if((i__58367_58612 < count__58366_58611)){
var input_reaction_58614 = chunk__58365_58610.cljs$core$IIndexed$_nth$arity$2(null,i__58367_58612);
var input_operation_58615 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(re_frisk.subs_graph.reaction__GT_operation),input_reaction_58614));
var reaction_path_58616 = [input_operation_58615,"-",operation_58603__$1].join('');
var temp__5802__auto___58617 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(re_frisk.subs_graph.edges),reaction_path_58616);
if(cljs.core.truth_(temp__5802__auto___58617)){
var old_edge_58619 = temp__5802__auto___58617;
var updated_edge_58620 = cljs.core.update.cljs$core$IFn$_invoke$arity$3(old_edge_58619,new cljs.core.Keyword(null,"value","value",305978217),cljs.core.inc);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frisk.subs_graph.edges,cljs.core.assoc,reaction_path_58616,updated_edge_58620);

if(cljs.core.truth_(cljs.core.deref(re_frisk.subs_graph.network))){
new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(re_frisk.subs_graph.network)).edges.update(cljs.core.clj__GT_js(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [updated_edge_58620], null)));
} else {
}
} else {
var data_58621 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),reaction_path_58616,new cljs.core.Keyword(null,"from","from",1815293044),input_operation_58615,new cljs.core.Keyword(null,"to","to",192099007),operation_58603__$1,new cljs.core.Keyword(null,"value","value",305978217),(1)], null);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frisk.subs_graph.edges,cljs.core.assoc,reaction_path_58616,data_58621);

if(cljs.core.truth_(cljs.core.deref(re_frisk.subs_graph.network))){
new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(re_frisk.subs_graph.network)).edges.add(cljs.core.clj__GT_js(data_58621));
} else {
}
}


var G__58622 = seq__58364_58609;
var G__58623 = chunk__58365_58610;
var G__58624 = count__58366_58611;
var G__58625 = (i__58367_58612 + (1));
seq__58364_58609 = G__58622;
chunk__58365_58610 = G__58623;
count__58366_58611 = G__58624;
i__58367_58612 = G__58625;
continue;
} else {
var temp__5804__auto___58626 = cljs.core.seq(seq__58364_58609);
if(temp__5804__auto___58626){
var seq__58364_58627__$1 = temp__5804__auto___58626;
if(cljs.core.chunked_seq_QMARK_(seq__58364_58627__$1)){
var c__5568__auto___58628 = cljs.core.chunk_first(seq__58364_58627__$1);
var G__58629 = cljs.core.chunk_rest(seq__58364_58627__$1);
var G__58630 = c__5568__auto___58628;
var G__58631 = cljs.core.count(c__5568__auto___58628);
var G__58632 = (0);
seq__58364_58609 = G__58629;
chunk__58365_58610 = G__58630;
count__58366_58611 = G__58631;
i__58367_58612 = G__58632;
continue;
} else {
var input_reaction_58633 = cljs.core.first(seq__58364_58627__$1);
var input_operation_58634 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(re_frisk.subs_graph.reaction__GT_operation),input_reaction_58633));
var reaction_path_58635 = [input_operation_58634,"-",operation_58603__$1].join('');
var temp__5802__auto___58636 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(re_frisk.subs_graph.edges),reaction_path_58635);
if(cljs.core.truth_(temp__5802__auto___58636)){
var old_edge_58637 = temp__5802__auto___58636;
var updated_edge_58638 = cljs.core.update.cljs$core$IFn$_invoke$arity$3(old_edge_58637,new cljs.core.Keyword(null,"value","value",305978217),cljs.core.inc);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frisk.subs_graph.edges,cljs.core.assoc,reaction_path_58635,updated_edge_58638);

if(cljs.core.truth_(cljs.core.deref(re_frisk.subs_graph.network))){
new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(re_frisk.subs_graph.network)).edges.update(cljs.core.clj__GT_js(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [updated_edge_58638], null)));
} else {
}
} else {
var data_58639 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),reaction_path_58635,new cljs.core.Keyword(null,"from","from",1815293044),input_operation_58634,new cljs.core.Keyword(null,"to","to",192099007),operation_58603__$1,new cljs.core.Keyword(null,"value","value",305978217),(1)], null);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frisk.subs_graph.edges,cljs.core.assoc,reaction_path_58635,data_58639);

if(cljs.core.truth_(cljs.core.deref(re_frisk.subs_graph.network))){
new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(re_frisk.subs_graph.network)).edges.add(cljs.core.clj__GT_js(data_58639));
} else {
}
}


var G__58640 = cljs.core.next(seq__58364_58627__$1);
var G__58641 = null;
var G__58642 = (0);
var G__58643 = (0);
seq__58364_58609 = G__58640;
chunk__58365_58610 = G__58641;
count__58366_58611 = G__58642;
i__58367_58612 = G__58643;
continue;
}
} else {
}
}
break;
}
} else {
}
} else {
}


var G__58644 = seq__58349_58592;
var G__58645 = chunk__58350_58593;
var G__58646 = count__58351_58594;
var G__58647 = (i__58352_58595 + (1));
seq__58349_58592 = G__58644;
chunk__58350_58593 = G__58645;
count__58351_58594 = G__58646;
i__58352_58595 = G__58647;
continue;
} else {
var temp__5804__auto___58648 = cljs.core.seq(seq__58349_58592);
if(temp__5804__auto___58648){
var seq__58349_58649__$1 = temp__5804__auto___58648;
if(cljs.core.chunked_seq_QMARK_(seq__58349_58649__$1)){
var c__5568__auto___58650 = cljs.core.chunk_first(seq__58349_58649__$1);
var G__58651 = cljs.core.chunk_rest(seq__58349_58649__$1);
var G__58652 = c__5568__auto___58650;
var G__58653 = cljs.core.count(c__5568__auto___58650);
var G__58654 = (0);
seq__58349_58592 = G__58651;
chunk__58350_58593 = G__58652;
count__58351_58594 = G__58653;
i__58352_58595 = G__58654;
continue;
} else {
var map__58368_58655 = cljs.core.first(seq__58349_58649__$1);
var map__58368_58656__$1 = cljs.core.__destructure_map(map__58368_58655);
var op_type_58657 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58368_58656__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var input_signals_58658 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58368_58656__$1,new cljs.core.Keyword(null,"input-signals","input-signals",563633497));
var operation_58659 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58368_58656__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var reaction_58660 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58368_58656__$1,new cljs.core.Keyword(null,"reaction","reaction",490869788));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(op_type_58657,new cljs.core.Keyword(null,"create-class","create-class",1988524183))){
if(cljs.core.truth_((function (){var and__5043__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(op_type_58657,new cljs.core.Keyword(null,"render","render",-1408033454));
if(and__5043__auto__){
return input_signals_58658;
} else {
return and__5043__auto__;
}
})())){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frisk.subs_graph.view__GT_reactions,cljs.core.assoc,operation_58659,input_signals_58658);
} else {
}

var operation_58661__$1 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(operation_58659);
if(cljs.core.truth_(reaction_58660)){
var temp__5802__auto___58662 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(re_frisk.subs_graph.nodes),operation_58661__$1);
if(cljs.core.truth_(temp__5802__auto___58662)){
var old_reaction_58664 = temp__5802__auto___58662;
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(op_type_58657,new cljs.core.Keyword(null,"op-type","op-type",-1636141668).cljs$core$IFn$_invoke$arity$1(old_reaction_58664))){
var updated_node_58665 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(old_reaction_58664,new cljs.core.Keyword(null,"op-type","op-type",-1636141668),op_type_58657,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background","background",-863952629),cljs.core.get.cljs$core$IFn$_invoke$arity$2(re_frisk.ui.components.colors.sub_colors,op_type_58657)], null)], 0));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frisk.subs_graph.nodes,cljs.core.assoc,operation_58661__$1,updated_node_58665);

if(cljs.core.truth_(cljs.core.deref(re_frisk.subs_graph.network))){
if(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(new_nodes),operation_58661__$1))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(new_nodes,cljs.core.assoc,operation_58661__$1,updated_node_58665);
} else {
new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(re_frisk.subs_graph.network)).nodes.update(cljs.core.clj__GT_js(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [updated_node_58665], null)));
}
} else {
}
} else {
}
} else {
var data_58667 = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),operation_58661__$1,new cljs.core.Keyword(null,"label","label",1718410804),operation_58661__$1,new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background","background",-863952629),cljs.core.get.cljs$core$IFn$_invoke$arity$2(re_frisk.ui.components.colors.sub_colors,op_type_58657)], null),new cljs.core.Keyword(null,"font","font",-1506159249),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"white","white",-483998618)], null),new cljs.core.Keyword(null,"op-type","op-type",-1636141668),op_type_58657], null);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frisk.subs_graph.nodes,cljs.core.assoc,operation_58661__$1,data_58667);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(new_nodes,cljs.core.assoc,operation_58661__$1,data_58667);
}
} else {
}

if(cljs.core.truth_(input_signals_58658)){
var seq__58369_58668 = cljs.core.seq(input_signals_58658);
var chunk__58370_58669 = null;
var count__58371_58670 = (0);
var i__58372_58671 = (0);
while(true){
if((i__58372_58671 < count__58371_58670)){
var input_reaction_58672 = chunk__58370_58669.cljs$core$IIndexed$_nth$arity$2(null,i__58372_58671);
var input_operation_58673 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(re_frisk.subs_graph.reaction__GT_operation),input_reaction_58672));
var reaction_path_58674 = [input_operation_58673,"-",operation_58661__$1].join('');
var temp__5802__auto___58675 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(re_frisk.subs_graph.edges),reaction_path_58674);
if(cljs.core.truth_(temp__5802__auto___58675)){
var old_edge_58676 = temp__5802__auto___58675;
var updated_edge_58677 = cljs.core.update.cljs$core$IFn$_invoke$arity$3(old_edge_58676,new cljs.core.Keyword(null,"value","value",305978217),cljs.core.inc);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frisk.subs_graph.edges,cljs.core.assoc,reaction_path_58674,updated_edge_58677);

if(cljs.core.truth_(cljs.core.deref(re_frisk.subs_graph.network))){
new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(re_frisk.subs_graph.network)).edges.update(cljs.core.clj__GT_js(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [updated_edge_58677], null)));
} else {
}
} else {
var data_58680 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),reaction_path_58674,new cljs.core.Keyword(null,"from","from",1815293044),input_operation_58673,new cljs.core.Keyword(null,"to","to",192099007),operation_58661__$1,new cljs.core.Keyword(null,"value","value",305978217),(1)], null);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frisk.subs_graph.edges,cljs.core.assoc,reaction_path_58674,data_58680);

if(cljs.core.truth_(cljs.core.deref(re_frisk.subs_graph.network))){
new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(re_frisk.subs_graph.network)).edges.add(cljs.core.clj__GT_js(data_58680));
} else {
}
}


var G__58681 = seq__58369_58668;
var G__58682 = chunk__58370_58669;
var G__58683 = count__58371_58670;
var G__58684 = (i__58372_58671 + (1));
seq__58369_58668 = G__58681;
chunk__58370_58669 = G__58682;
count__58371_58670 = G__58683;
i__58372_58671 = G__58684;
continue;
} else {
var temp__5804__auto___58685__$1 = cljs.core.seq(seq__58369_58668);
if(temp__5804__auto___58685__$1){
var seq__58369_58686__$1 = temp__5804__auto___58685__$1;
if(cljs.core.chunked_seq_QMARK_(seq__58369_58686__$1)){
var c__5568__auto___58687 = cljs.core.chunk_first(seq__58369_58686__$1);
var G__58688 = cljs.core.chunk_rest(seq__58369_58686__$1);
var G__58689 = c__5568__auto___58687;
var G__58690 = cljs.core.count(c__5568__auto___58687);
var G__58691 = (0);
seq__58369_58668 = G__58688;
chunk__58370_58669 = G__58689;
count__58371_58670 = G__58690;
i__58372_58671 = G__58691;
continue;
} else {
var input_reaction_58692 = cljs.core.first(seq__58369_58686__$1);
var input_operation_58693 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(re_frisk.subs_graph.reaction__GT_operation),input_reaction_58692));
var reaction_path_58694 = [input_operation_58693,"-",operation_58661__$1].join('');
var temp__5802__auto___58695 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(re_frisk.subs_graph.edges),reaction_path_58694);
if(cljs.core.truth_(temp__5802__auto___58695)){
var old_edge_58696 = temp__5802__auto___58695;
var updated_edge_58697 = cljs.core.update.cljs$core$IFn$_invoke$arity$3(old_edge_58696,new cljs.core.Keyword(null,"value","value",305978217),cljs.core.inc);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frisk.subs_graph.edges,cljs.core.assoc,reaction_path_58694,updated_edge_58697);

if(cljs.core.truth_(cljs.core.deref(re_frisk.subs_graph.network))){
new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(re_frisk.subs_graph.network)).edges.update(cljs.core.clj__GT_js(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [updated_edge_58697], null)));
} else {
}
} else {
var data_58698 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),reaction_path_58694,new cljs.core.Keyword(null,"from","from",1815293044),input_operation_58693,new cljs.core.Keyword(null,"to","to",192099007),operation_58661__$1,new cljs.core.Keyword(null,"value","value",305978217),(1)], null);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frisk.subs_graph.edges,cljs.core.assoc,reaction_path_58694,data_58698);

if(cljs.core.truth_(cljs.core.deref(re_frisk.subs_graph.network))){
new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(re_frisk.subs_graph.network)).edges.add(cljs.core.clj__GT_js(data_58698));
} else {
}
}


var G__58701 = cljs.core.next(seq__58369_58686__$1);
var G__58702 = null;
var G__58703 = (0);
var G__58704 = (0);
seq__58369_58668 = G__58701;
chunk__58370_58669 = G__58702;
count__58371_58670 = G__58703;
i__58372_58671 = G__58704;
continue;
}
} else {
}
}
break;
}
} else {
}
} else {
}


var G__58705 = cljs.core.next(seq__58349_58649__$1);
var G__58706 = null;
var G__58707 = (0);
var G__58708 = (0);
seq__58349_58592 = G__58705;
chunk__58350_58593 = G__58706;
count__58351_58594 = G__58707;
i__58352_58595 = G__58708;
continue;
}
} else {
}
}
break;
}


var G__58709 = seq__58233_58585;
var G__58710 = chunk__58234_58586;
var G__58711 = count__58235_58587;
var G__58712 = (i__58236_58588 + (1));
seq__58233_58585 = G__58709;
chunk__58234_58586 = G__58710;
count__58235_58587 = G__58711;
i__58236_58588 = G__58712;
continue;
} else {
var temp__5804__auto___58713 = cljs.core.seq(seq__58233_58585);
if(temp__5804__auto___58713){
var seq__58233_58714__$1 = temp__5804__auto___58713;
if(cljs.core.chunked_seq_QMARK_(seq__58233_58714__$1)){
var c__5568__auto___58715 = cljs.core.chunk_first(seq__58233_58714__$1);
var G__58716 = cljs.core.chunk_rest(seq__58233_58714__$1);
var G__58717 = c__5568__auto___58715;
var G__58718 = cljs.core.count(c__5568__auto___58715);
var G__58719 = (0);
seq__58233_58585 = G__58716;
chunk__58234_58586 = G__58717;
count__58235_58587 = G__58718;
i__58236_58588 = G__58719;
continue;
} else {
var map__58373_58720 = cljs.core.first(seq__58233_58714__$1);
var map__58373_58721__$1 = cljs.core.__destructure_map(map__58373_58720);
var subs_58722 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58373_58721__$1,new cljs.core.Keyword(null,"subs","subs",-186681991));
var seq__58374_58723 = cljs.core.seq(subs_58722);
var chunk__58375_58724 = null;
var count__58376_58725 = (0);
var i__58377_58726 = (0);
while(true){
if((i__58377_58726 < count__58376_58725)){
var map__58402_58727 = chunk__58375_58724.cljs$core$IIndexed$_nth$arity$2(null,i__58377_58726);
var map__58402_58728__$1 = cljs.core.__destructure_map(map__58402_58727);
var op_type_58729 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58402_58728__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var input_signals_58730 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58402_58728__$1,new cljs.core.Keyword(null,"input-signals","input-signals",563633497));
var operation_58731 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58402_58728__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var reaction_58732 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58402_58728__$1,new cljs.core.Keyword(null,"reaction","reaction",490869788));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(op_type_58729,new cljs.core.Keyword(null,"create-class","create-class",1988524183))){
if(cljs.core.truth_((function (){var and__5043__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(op_type_58729,new cljs.core.Keyword(null,"render","render",-1408033454));
if(and__5043__auto__){
return input_signals_58730;
} else {
return and__5043__auto__;
}
})())){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frisk.subs_graph.view__GT_reactions,cljs.core.assoc,operation_58731,input_signals_58730);
} else {
}

var operation_58733__$1 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(operation_58731);
if(cljs.core.truth_(reaction_58732)){
var temp__5802__auto___58735 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(re_frisk.subs_graph.nodes),operation_58733__$1);
if(cljs.core.truth_(temp__5802__auto___58735)){
var old_reaction_58736 = temp__5802__auto___58735;
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(op_type_58729,new cljs.core.Keyword(null,"op-type","op-type",-1636141668).cljs$core$IFn$_invoke$arity$1(old_reaction_58736))){
var updated_node_58737 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(old_reaction_58736,new cljs.core.Keyword(null,"op-type","op-type",-1636141668),op_type_58729,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background","background",-863952629),cljs.core.get.cljs$core$IFn$_invoke$arity$2(re_frisk.ui.components.colors.sub_colors,op_type_58729)], null)], 0));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frisk.subs_graph.nodes,cljs.core.assoc,operation_58733__$1,updated_node_58737);

if(cljs.core.truth_(cljs.core.deref(re_frisk.subs_graph.network))){
if(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(new_nodes),operation_58733__$1))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(new_nodes,cljs.core.assoc,operation_58733__$1,updated_node_58737);
} else {
new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(re_frisk.subs_graph.network)).nodes.update(cljs.core.clj__GT_js(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [updated_node_58737], null)));
}
} else {
}
} else {
}
} else {
var data_58739 = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),operation_58733__$1,new cljs.core.Keyword(null,"label","label",1718410804),operation_58733__$1,new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background","background",-863952629),cljs.core.get.cljs$core$IFn$_invoke$arity$2(re_frisk.ui.components.colors.sub_colors,op_type_58729)], null),new cljs.core.Keyword(null,"font","font",-1506159249),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"white","white",-483998618)], null),new cljs.core.Keyword(null,"op-type","op-type",-1636141668),op_type_58729], null);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frisk.subs_graph.nodes,cljs.core.assoc,operation_58733__$1,data_58739);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(new_nodes,cljs.core.assoc,operation_58733__$1,data_58739);
}
} else {
}

if(cljs.core.truth_(input_signals_58730)){
var seq__58404_58740 = cljs.core.seq(input_signals_58730);
var chunk__58405_58741 = null;
var count__58406_58742 = (0);
var i__58407_58743 = (0);
while(true){
if((i__58407_58743 < count__58406_58742)){
var input_reaction_58744 = chunk__58405_58741.cljs$core$IIndexed$_nth$arity$2(null,i__58407_58743);
var input_operation_58745 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(re_frisk.subs_graph.reaction__GT_operation),input_reaction_58744));
var reaction_path_58746 = [input_operation_58745,"-",operation_58733__$1].join('');
var temp__5802__auto___58747 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(re_frisk.subs_graph.edges),reaction_path_58746);
if(cljs.core.truth_(temp__5802__auto___58747)){
var old_edge_58748 = temp__5802__auto___58747;
var updated_edge_58750 = cljs.core.update.cljs$core$IFn$_invoke$arity$3(old_edge_58748,new cljs.core.Keyword(null,"value","value",305978217),cljs.core.inc);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frisk.subs_graph.edges,cljs.core.assoc,reaction_path_58746,updated_edge_58750);

if(cljs.core.truth_(cljs.core.deref(re_frisk.subs_graph.network))){
new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(re_frisk.subs_graph.network)).edges.update(cljs.core.clj__GT_js(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [updated_edge_58750], null)));
} else {
}
} else {
var data_58754 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),reaction_path_58746,new cljs.core.Keyword(null,"from","from",1815293044),input_operation_58745,new cljs.core.Keyword(null,"to","to",192099007),operation_58733__$1,new cljs.core.Keyword(null,"value","value",305978217),(1)], null);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frisk.subs_graph.edges,cljs.core.assoc,reaction_path_58746,data_58754);

if(cljs.core.truth_(cljs.core.deref(re_frisk.subs_graph.network))){
new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(re_frisk.subs_graph.network)).edges.add(cljs.core.clj__GT_js(data_58754));
} else {
}
}


var G__58756 = seq__58404_58740;
var G__58757 = chunk__58405_58741;
var G__58758 = count__58406_58742;
var G__58759 = (i__58407_58743 + (1));
seq__58404_58740 = G__58756;
chunk__58405_58741 = G__58757;
count__58406_58742 = G__58758;
i__58407_58743 = G__58759;
continue;
} else {
var temp__5804__auto___58760__$1 = cljs.core.seq(seq__58404_58740);
if(temp__5804__auto___58760__$1){
var seq__58404_58761__$1 = temp__5804__auto___58760__$1;
if(cljs.core.chunked_seq_QMARK_(seq__58404_58761__$1)){
var c__5568__auto___58762 = cljs.core.chunk_first(seq__58404_58761__$1);
var G__58763 = cljs.core.chunk_rest(seq__58404_58761__$1);
var G__58764 = c__5568__auto___58762;
var G__58765 = cljs.core.count(c__5568__auto___58762);
var G__58766 = (0);
seq__58404_58740 = G__58763;
chunk__58405_58741 = G__58764;
count__58406_58742 = G__58765;
i__58407_58743 = G__58766;
continue;
} else {
var input_reaction_58767 = cljs.core.first(seq__58404_58761__$1);
var input_operation_58768 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(re_frisk.subs_graph.reaction__GT_operation),input_reaction_58767));
var reaction_path_58769 = [input_operation_58768,"-",operation_58733__$1].join('');
var temp__5802__auto___58770 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(re_frisk.subs_graph.edges),reaction_path_58769);
if(cljs.core.truth_(temp__5802__auto___58770)){
var old_edge_58771 = temp__5802__auto___58770;
var updated_edge_58772 = cljs.core.update.cljs$core$IFn$_invoke$arity$3(old_edge_58771,new cljs.core.Keyword(null,"value","value",305978217),cljs.core.inc);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frisk.subs_graph.edges,cljs.core.assoc,reaction_path_58769,updated_edge_58772);

if(cljs.core.truth_(cljs.core.deref(re_frisk.subs_graph.network))){
new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(re_frisk.subs_graph.network)).edges.update(cljs.core.clj__GT_js(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [updated_edge_58772], null)));
} else {
}
} else {
var data_58773 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),reaction_path_58769,new cljs.core.Keyword(null,"from","from",1815293044),input_operation_58768,new cljs.core.Keyword(null,"to","to",192099007),operation_58733__$1,new cljs.core.Keyword(null,"value","value",305978217),(1)], null);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frisk.subs_graph.edges,cljs.core.assoc,reaction_path_58769,data_58773);

if(cljs.core.truth_(cljs.core.deref(re_frisk.subs_graph.network))){
new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(re_frisk.subs_graph.network)).edges.add(cljs.core.clj__GT_js(data_58773));
} else {
}
}


var G__58774 = cljs.core.next(seq__58404_58761__$1);
var G__58775 = null;
var G__58776 = (0);
var G__58777 = (0);
seq__58404_58740 = G__58774;
chunk__58405_58741 = G__58775;
count__58406_58742 = G__58776;
i__58407_58743 = G__58777;
continue;
}
} else {
}
}
break;
}
} else {
}
} else {
}


var G__58778 = seq__58374_58723;
var G__58779 = chunk__58375_58724;
var G__58780 = count__58376_58725;
var G__58781 = (i__58377_58726 + (1));
seq__58374_58723 = G__58778;
chunk__58375_58724 = G__58779;
count__58376_58725 = G__58780;
i__58377_58726 = G__58781;
continue;
} else {
var temp__5804__auto___58782__$1 = cljs.core.seq(seq__58374_58723);
if(temp__5804__auto___58782__$1){
var seq__58374_58783__$1 = temp__5804__auto___58782__$1;
if(cljs.core.chunked_seq_QMARK_(seq__58374_58783__$1)){
var c__5568__auto___58784 = cljs.core.chunk_first(seq__58374_58783__$1);
var G__58785 = cljs.core.chunk_rest(seq__58374_58783__$1);
var G__58786 = c__5568__auto___58784;
var G__58787 = cljs.core.count(c__5568__auto___58784);
var G__58788 = (0);
seq__58374_58723 = G__58785;
chunk__58375_58724 = G__58786;
count__58376_58725 = G__58787;
i__58377_58726 = G__58788;
continue;
} else {
var map__58430_58789 = cljs.core.first(seq__58374_58783__$1);
var map__58430_58790__$1 = cljs.core.__destructure_map(map__58430_58789);
var op_type_58791 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58430_58790__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var input_signals_58792 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58430_58790__$1,new cljs.core.Keyword(null,"input-signals","input-signals",563633497));
var operation_58793 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58430_58790__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var reaction_58794 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58430_58790__$1,new cljs.core.Keyword(null,"reaction","reaction",490869788));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(op_type_58791,new cljs.core.Keyword(null,"create-class","create-class",1988524183))){
if(cljs.core.truth_((function (){var and__5043__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(op_type_58791,new cljs.core.Keyword(null,"render","render",-1408033454));
if(and__5043__auto__){
return input_signals_58792;
} else {
return and__5043__auto__;
}
})())){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frisk.subs_graph.view__GT_reactions,cljs.core.assoc,operation_58793,input_signals_58792);
} else {
}

var operation_58795__$1 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(operation_58793);
if(cljs.core.truth_(reaction_58794)){
var temp__5802__auto___58796 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(re_frisk.subs_graph.nodes),operation_58795__$1);
if(cljs.core.truth_(temp__5802__auto___58796)){
var old_reaction_58797 = temp__5802__auto___58796;
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(op_type_58791,new cljs.core.Keyword(null,"op-type","op-type",-1636141668).cljs$core$IFn$_invoke$arity$1(old_reaction_58797))){
var updated_node_58798 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(old_reaction_58797,new cljs.core.Keyword(null,"op-type","op-type",-1636141668),op_type_58791,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background","background",-863952629),cljs.core.get.cljs$core$IFn$_invoke$arity$2(re_frisk.ui.components.colors.sub_colors,op_type_58791)], null)], 0));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frisk.subs_graph.nodes,cljs.core.assoc,operation_58795__$1,updated_node_58798);

if(cljs.core.truth_(cljs.core.deref(re_frisk.subs_graph.network))){
if(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(new_nodes),operation_58795__$1))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(new_nodes,cljs.core.assoc,operation_58795__$1,updated_node_58798);
} else {
new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(re_frisk.subs_graph.network)).nodes.update(cljs.core.clj__GT_js(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [updated_node_58798], null)));
}
} else {
}
} else {
}
} else {
var data_58799 = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),operation_58795__$1,new cljs.core.Keyword(null,"label","label",1718410804),operation_58795__$1,new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background","background",-863952629),cljs.core.get.cljs$core$IFn$_invoke$arity$2(re_frisk.ui.components.colors.sub_colors,op_type_58791)], null),new cljs.core.Keyword(null,"font","font",-1506159249),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"white","white",-483998618)], null),new cljs.core.Keyword(null,"op-type","op-type",-1636141668),op_type_58791], null);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frisk.subs_graph.nodes,cljs.core.assoc,operation_58795__$1,data_58799);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(new_nodes,cljs.core.assoc,operation_58795__$1,data_58799);
}
} else {
}

if(cljs.core.truth_(input_signals_58792)){
var seq__58451_58800 = cljs.core.seq(input_signals_58792);
var chunk__58452_58801 = null;
var count__58453_58802 = (0);
var i__58454_58803 = (0);
while(true){
if((i__58454_58803 < count__58453_58802)){
var input_reaction_58804 = chunk__58452_58801.cljs$core$IIndexed$_nth$arity$2(null,i__58454_58803);
var input_operation_58805 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(re_frisk.subs_graph.reaction__GT_operation),input_reaction_58804));
var reaction_path_58806 = [input_operation_58805,"-",operation_58795__$1].join('');
var temp__5802__auto___58807 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(re_frisk.subs_graph.edges),reaction_path_58806);
if(cljs.core.truth_(temp__5802__auto___58807)){
var old_edge_58808 = temp__5802__auto___58807;
var updated_edge_58809 = cljs.core.update.cljs$core$IFn$_invoke$arity$3(old_edge_58808,new cljs.core.Keyword(null,"value","value",305978217),cljs.core.inc);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frisk.subs_graph.edges,cljs.core.assoc,reaction_path_58806,updated_edge_58809);

if(cljs.core.truth_(cljs.core.deref(re_frisk.subs_graph.network))){
new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(re_frisk.subs_graph.network)).edges.update(cljs.core.clj__GT_js(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [updated_edge_58809], null)));
} else {
}
} else {
var data_58810 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),reaction_path_58806,new cljs.core.Keyword(null,"from","from",1815293044),input_operation_58805,new cljs.core.Keyword(null,"to","to",192099007),operation_58795__$1,new cljs.core.Keyword(null,"value","value",305978217),(1)], null);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frisk.subs_graph.edges,cljs.core.assoc,reaction_path_58806,data_58810);

if(cljs.core.truth_(cljs.core.deref(re_frisk.subs_graph.network))){
new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(re_frisk.subs_graph.network)).edges.add(cljs.core.clj__GT_js(data_58810));
} else {
}
}


var G__58811 = seq__58451_58800;
var G__58812 = chunk__58452_58801;
var G__58813 = count__58453_58802;
var G__58814 = (i__58454_58803 + (1));
seq__58451_58800 = G__58811;
chunk__58452_58801 = G__58812;
count__58453_58802 = G__58813;
i__58454_58803 = G__58814;
continue;
} else {
var temp__5804__auto___58815__$2 = cljs.core.seq(seq__58451_58800);
if(temp__5804__auto___58815__$2){
var seq__58451_58816__$1 = temp__5804__auto___58815__$2;
if(cljs.core.chunked_seq_QMARK_(seq__58451_58816__$1)){
var c__5568__auto___58817 = cljs.core.chunk_first(seq__58451_58816__$1);
var G__58818 = cljs.core.chunk_rest(seq__58451_58816__$1);
var G__58819 = c__5568__auto___58817;
var G__58820 = cljs.core.count(c__5568__auto___58817);
var G__58821 = (0);
seq__58451_58800 = G__58818;
chunk__58452_58801 = G__58819;
count__58453_58802 = G__58820;
i__58454_58803 = G__58821;
continue;
} else {
var input_reaction_58822 = cljs.core.first(seq__58451_58816__$1);
var input_operation_58823 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(re_frisk.subs_graph.reaction__GT_operation),input_reaction_58822));
var reaction_path_58824 = [input_operation_58823,"-",operation_58795__$1].join('');
var temp__5802__auto___58825 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(re_frisk.subs_graph.edges),reaction_path_58824);
if(cljs.core.truth_(temp__5802__auto___58825)){
var old_edge_58826 = temp__5802__auto___58825;
var updated_edge_58827 = cljs.core.update.cljs$core$IFn$_invoke$arity$3(old_edge_58826,new cljs.core.Keyword(null,"value","value",305978217),cljs.core.inc);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frisk.subs_graph.edges,cljs.core.assoc,reaction_path_58824,updated_edge_58827);

if(cljs.core.truth_(cljs.core.deref(re_frisk.subs_graph.network))){
new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(re_frisk.subs_graph.network)).edges.update(cljs.core.clj__GT_js(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [updated_edge_58827], null)));
} else {
}
} else {
var data_58828 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),reaction_path_58824,new cljs.core.Keyword(null,"from","from",1815293044),input_operation_58823,new cljs.core.Keyword(null,"to","to",192099007),operation_58795__$1,new cljs.core.Keyword(null,"value","value",305978217),(1)], null);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frisk.subs_graph.edges,cljs.core.assoc,reaction_path_58824,data_58828);

if(cljs.core.truth_(cljs.core.deref(re_frisk.subs_graph.network))){
new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(re_frisk.subs_graph.network)).edges.add(cljs.core.clj__GT_js(data_58828));
} else {
}
}


var G__58829 = cljs.core.next(seq__58451_58816__$1);
var G__58830 = null;
var G__58831 = (0);
var G__58832 = (0);
seq__58451_58800 = G__58829;
chunk__58452_58801 = G__58830;
count__58453_58802 = G__58831;
i__58454_58803 = G__58832;
continue;
}
} else {
}
}
break;
}
} else {
}
} else {
}


var G__58833 = cljs.core.next(seq__58374_58783__$1);
var G__58834 = null;
var G__58835 = (0);
var G__58836 = (0);
seq__58374_58723 = G__58833;
chunk__58375_58724 = G__58834;
count__58376_58725 = G__58835;
i__58377_58726 = G__58836;
continue;
}
} else {
}
}
break;
}


var G__58837 = cljs.core.next(seq__58233_58714__$1);
var G__58838 = null;
var G__58839 = (0);
var G__58840 = (0);
seq__58233_58585 = G__58837;
chunk__58234_58586 = G__58838;
count__58235_58587 = G__58839;
i__58236_58588 = G__58840;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cljs.core.deref(re_frisk.subs_graph.network))){
if((cljs.core.count(cljs.core.deref(new_nodes)) > (20))){
return re_frisk.subs_graph.create();
} else {
var seq__58455 = cljs.core.seq(cljs.core.vals(cljs.core.deref(new_nodes)));
var chunk__58456 = null;
var count__58457 = (0);
var i__58458 = (0);
while(true){
if((i__58458 < count__58457)){
var data = chunk__58456.cljs$core$IIndexed$_nth$arity$2(null,i__58458);
new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(re_frisk.subs_graph.network)).nodes.add(cljs.core.clj__GT_js(data));


var G__58841 = seq__58455;
var G__58842 = chunk__58456;
var G__58843 = count__58457;
var G__58844 = (i__58458 + (1));
seq__58455 = G__58841;
chunk__58456 = G__58842;
count__58457 = G__58843;
i__58458 = G__58844;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__58455);
if(temp__5804__auto__){
var seq__58455__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__58455__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__58455__$1);
var G__58845 = cljs.core.chunk_rest(seq__58455__$1);
var G__58846 = c__5568__auto__;
var G__58847 = cljs.core.count(c__5568__auto__);
var G__58848 = (0);
seq__58455 = G__58845;
chunk__58456 = G__58846;
count__58457 = G__58847;
i__58458 = G__58848;
continue;
} else {
var data = cljs.core.first(seq__58455__$1);
new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(re_frisk.subs_graph.network)).nodes.add(cljs.core.clj__GT_js(data));


var G__58849 = cljs.core.next(seq__58455__$1);
var G__58850 = null;
var G__58851 = (0);
var G__58852 = (0);
seq__58455 = G__58849;
chunk__58456 = G__58850;
count__58457 = G__58851;
i__58458 = G__58852;
continue;
}
} else {
return null;
}
}
break;
}
}
} else {
return null;
}
});
if((typeof re_frisk !== 'undefined') && (typeof re_frisk.subs_graph !== 'undefined') && (typeof re_frisk.subs_graph.event_network !== 'undefined')){
} else {
re_frisk.subs_graph.event_network = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
re_frisk.subs_graph.create_event_subs = (function re_frisk$subs_graph$create_event_subs(p__58459){
var map__58460 = p__58459;
var map__58460__$1 = cljs.core.__destructure_map(map__58460);
var app_db_reaction = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58460__$1,new cljs.core.Keyword(null,"app-db-reaction","app-db-reaction",-269835135));
var subs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58460__$1,new cljs.core.Keyword(null,"subs","subs",-186681991));
if(cljs.core.truth_(cljs.core.deref(re_frisk.subs_graph.event_network))){
cljs.core.deref(re_frisk.subs_graph.event_network).destroy();

cljs.core.reset_BANG_(re_frisk.subs_graph.event_network,null);
} else {
}

if(cljs.core.truth_((function (){var and__5043__auto__ = cljs.core.deref(re_frisk.subs_graph.vis);
if(cljs.core.truth_(and__5043__auto__)){
return cljs.core.deref(re_frisk.subs_graph.doc);
} else {
return and__5043__auto__;
}
})())){
var temp__5804__auto__ = cljs.core.deref(re_frisk.subs_graph.doc).getElementById("event-subs-graph-container");
if(cljs.core.truth_(temp__5804__auto__)){
var container = temp__5804__auto__;
var Network = cljs.core.deref(re_frisk.subs_graph.vis).Network;
var DataSet = cljs.core.deref(re_frisk.subs_graph.vis).DataSet;
var nodes = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.createAsIfByAssoc([app_db_reaction,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),app_db_reaction,new cljs.core.Keyword(null,"label","label",1718410804),"app-db",new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background","background",-863952629),new cljs.core.Keyword(null,"yellow","yellow",-881035449)], null)], null)]));
var edges = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var seq__58461_58857 = cljs.core.seq(subs);
var chunk__58462_58858 = null;
var count__58463_58859 = (0);
var i__58464_58860 = (0);
while(true){
if((i__58464_58860 < count__58463_58859)){
var map__58483_58862 = chunk__58462_58858.cljs$core$IIndexed$_nth$arity$2(null,i__58464_58860);
var map__58483_58863__$1 = cljs.core.__destructure_map(map__58483_58862);
var op_type_58864 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58483_58863__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var reaction_58865 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58483_58863__$1,new cljs.core.Keyword(null,"reaction","reaction",490869788));
var input_signals_58866 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58483_58863__$1,new cljs.core.Keyword(null,"input-signals","input-signals",563633497));
var operation_58867 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58483_58863__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var temp__5802__auto___58868 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(nodes),reaction_58865);
if(cljs.core.truth_(temp__5802__auto___58868)){
var old_reaction_58869 = temp__5802__auto___58868;
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(op_type_58864,new cljs.core.Keyword(null,"op-type","op-type",-1636141668).cljs$core$IFn$_invoke$arity$1(old_reaction_58869))){
var updated_node_58870 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(old_reaction_58869,new cljs.core.Keyword(null,"op-type","op-type",-1636141668),op_type_58864,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background","background",-863952629),cljs.core.get.cljs$core$IFn$_invoke$arity$2(re_frisk.ui.components.colors.sub_colors,op_type_58864)], null)], 0));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(nodes,cljs.core.assoc,reaction_58865,updated_node_58870);
} else {
}
} else {
var data_58871 = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),reaction_58865,new cljs.core.Keyword(null,"label","label",1718410804),operation_58867,new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background","background",-863952629),cljs.core.get.cljs$core$IFn$_invoke$arity$2(re_frisk.ui.components.colors.sub_colors,op_type_58864)], null),new cljs.core.Keyword(null,"font","font",-1506159249),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"white","white",-483998618)], null),new cljs.core.Keyword(null,"op-type","op-type",-1636141668),op_type_58864], null);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(nodes,cljs.core.assoc,reaction_58865,data_58871);
}

if(cljs.core.truth_(input_signals_58866)){
var seq__58484_58872 = cljs.core.seq(input_signals_58866);
var chunk__58485_58873 = null;
var count__58486_58874 = (0);
var i__58487_58875 = (0);
while(true){
if((i__58487_58875 < count__58486_58874)){
var input_reaction_58876 = chunk__58485_58873.cljs$core$IIndexed$_nth$arity$2(null,i__58487_58875);
if(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(edges),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(input_reaction_58876),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(reaction_58865)].join('')))){
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(edges,cljs.core.assoc,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(input_reaction_58876),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(reaction_58865)].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"from","from",1815293044),input_reaction_58876,new cljs.core.Keyword(null,"to","to",192099007),reaction_58865], null));
}


var G__58877 = seq__58484_58872;
var G__58878 = chunk__58485_58873;
var G__58879 = count__58486_58874;
var G__58880 = (i__58487_58875 + (1));
seq__58484_58872 = G__58877;
chunk__58485_58873 = G__58878;
count__58486_58874 = G__58879;
i__58487_58875 = G__58880;
continue;
} else {
var temp__5804__auto___58881__$1 = cljs.core.seq(seq__58484_58872);
if(temp__5804__auto___58881__$1){
var seq__58484_58882__$1 = temp__5804__auto___58881__$1;
if(cljs.core.chunked_seq_QMARK_(seq__58484_58882__$1)){
var c__5568__auto___58883 = cljs.core.chunk_first(seq__58484_58882__$1);
var G__58884 = cljs.core.chunk_rest(seq__58484_58882__$1);
var G__58885 = c__5568__auto___58883;
var G__58886 = cljs.core.count(c__5568__auto___58883);
var G__58887 = (0);
seq__58484_58872 = G__58884;
chunk__58485_58873 = G__58885;
count__58486_58874 = G__58886;
i__58487_58875 = G__58887;
continue;
} else {
var input_reaction_58888 = cljs.core.first(seq__58484_58882__$1);
if(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(edges),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(input_reaction_58888),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(reaction_58865)].join('')))){
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(edges,cljs.core.assoc,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(input_reaction_58888),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(reaction_58865)].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"from","from",1815293044),input_reaction_58888,new cljs.core.Keyword(null,"to","to",192099007),reaction_58865], null));
}


var G__58889 = cljs.core.next(seq__58484_58882__$1);
var G__58890 = null;
var G__58891 = (0);
var G__58892 = (0);
seq__58484_58872 = G__58889;
chunk__58485_58873 = G__58890;
count__58486_58874 = G__58891;
i__58487_58875 = G__58892;
continue;
}
} else {
}
}
break;
}
} else {
}


var G__58893 = seq__58461_58857;
var G__58894 = chunk__58462_58858;
var G__58895 = count__58463_58859;
var G__58896 = (i__58464_58860 + (1));
seq__58461_58857 = G__58893;
chunk__58462_58858 = G__58894;
count__58463_58859 = G__58895;
i__58464_58860 = G__58896;
continue;
} else {
var temp__5804__auto___58897__$1 = cljs.core.seq(seq__58461_58857);
if(temp__5804__auto___58897__$1){
var seq__58461_58898__$1 = temp__5804__auto___58897__$1;
if(cljs.core.chunked_seq_QMARK_(seq__58461_58898__$1)){
var c__5568__auto___58899 = cljs.core.chunk_first(seq__58461_58898__$1);
var G__58900 = cljs.core.chunk_rest(seq__58461_58898__$1);
var G__58901 = c__5568__auto___58899;
var G__58902 = cljs.core.count(c__5568__auto___58899);
var G__58903 = (0);
seq__58461_58857 = G__58900;
chunk__58462_58858 = G__58901;
count__58463_58859 = G__58902;
i__58464_58860 = G__58903;
continue;
} else {
var map__58490_58904 = cljs.core.first(seq__58461_58898__$1);
var map__58490_58905__$1 = cljs.core.__destructure_map(map__58490_58904);
var op_type_58906 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58490_58905__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var reaction_58907 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58490_58905__$1,new cljs.core.Keyword(null,"reaction","reaction",490869788));
var input_signals_58908 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58490_58905__$1,new cljs.core.Keyword(null,"input-signals","input-signals",563633497));
var operation_58909 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58490_58905__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var temp__5802__auto___58910 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(nodes),reaction_58907);
if(cljs.core.truth_(temp__5802__auto___58910)){
var old_reaction_58911 = temp__5802__auto___58910;
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(op_type_58906,new cljs.core.Keyword(null,"op-type","op-type",-1636141668).cljs$core$IFn$_invoke$arity$1(old_reaction_58911))){
var updated_node_58912 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(old_reaction_58911,new cljs.core.Keyword(null,"op-type","op-type",-1636141668),op_type_58906,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background","background",-863952629),cljs.core.get.cljs$core$IFn$_invoke$arity$2(re_frisk.ui.components.colors.sub_colors,op_type_58906)], null)], 0));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(nodes,cljs.core.assoc,reaction_58907,updated_node_58912);
} else {
}
} else {
var data_58913 = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),reaction_58907,new cljs.core.Keyword(null,"label","label",1718410804),operation_58909,new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background","background",-863952629),cljs.core.get.cljs$core$IFn$_invoke$arity$2(re_frisk.ui.components.colors.sub_colors,op_type_58906)], null),new cljs.core.Keyword(null,"font","font",-1506159249),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"white","white",-483998618)], null),new cljs.core.Keyword(null,"op-type","op-type",-1636141668),op_type_58906], null);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(nodes,cljs.core.assoc,reaction_58907,data_58913);
}

if(cljs.core.truth_(input_signals_58908)){
var seq__58491_58914 = cljs.core.seq(input_signals_58908);
var chunk__58492_58915 = null;
var count__58493_58916 = (0);
var i__58494_58917 = (0);
while(true){
if((i__58494_58917 < count__58493_58916)){
var input_reaction_58918 = chunk__58492_58915.cljs$core$IIndexed$_nth$arity$2(null,i__58494_58917);
if(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(edges),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(input_reaction_58918),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(reaction_58907)].join('')))){
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(edges,cljs.core.assoc,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(input_reaction_58918),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(reaction_58907)].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"from","from",1815293044),input_reaction_58918,new cljs.core.Keyword(null,"to","to",192099007),reaction_58907], null));
}


var G__58919 = seq__58491_58914;
var G__58920 = chunk__58492_58915;
var G__58921 = count__58493_58916;
var G__58922 = (i__58494_58917 + (1));
seq__58491_58914 = G__58919;
chunk__58492_58915 = G__58920;
count__58493_58916 = G__58921;
i__58494_58917 = G__58922;
continue;
} else {
var temp__5804__auto___58923__$2 = cljs.core.seq(seq__58491_58914);
if(temp__5804__auto___58923__$2){
var seq__58491_58924__$1 = temp__5804__auto___58923__$2;
if(cljs.core.chunked_seq_QMARK_(seq__58491_58924__$1)){
var c__5568__auto___58925 = cljs.core.chunk_first(seq__58491_58924__$1);
var G__58926 = cljs.core.chunk_rest(seq__58491_58924__$1);
var G__58927 = c__5568__auto___58925;
var G__58928 = cljs.core.count(c__5568__auto___58925);
var G__58929 = (0);
seq__58491_58914 = G__58926;
chunk__58492_58915 = G__58927;
count__58493_58916 = G__58928;
i__58494_58917 = G__58929;
continue;
} else {
var input_reaction_58930 = cljs.core.first(seq__58491_58924__$1);
if(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(edges),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(input_reaction_58930),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(reaction_58907)].join('')))){
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(edges,cljs.core.assoc,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(input_reaction_58930),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(reaction_58907)].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"from","from",1815293044),input_reaction_58930,new cljs.core.Keyword(null,"to","to",192099007),reaction_58907], null));
}


var G__58931 = cljs.core.next(seq__58491_58924__$1);
var G__58932 = null;
var G__58933 = (0);
var G__58934 = (0);
seq__58491_58914 = G__58931;
chunk__58492_58915 = G__58932;
count__58493_58916 = G__58933;
i__58494_58917 = G__58934;
continue;
}
} else {
}
}
break;
}
} else {
}


var G__58935 = cljs.core.next(seq__58461_58898__$1);
var G__58936 = null;
var G__58937 = (0);
var G__58938 = (0);
seq__58461_58857 = G__58935;
chunk__58462_58858 = G__58936;
count__58463_58859 = G__58937;
i__58464_58860 = G__58938;
continue;
}
} else {
}
}
break;
}

return cljs.core.reset_BANG_(re_frisk.subs_graph.event_network,(new Network(container,({"nodes": (new DataSet(cljs.core.clj__GT_js(cljs.core.vals(cljs.core.deref(nodes))))), "edges": (new DataSet(cljs.core.clj__GT_js(cljs.core.vals(cljs.core.deref(edges)))))}),re_frisk.subs_graph.options)));
} else {
return null;
}
} else {
return null;
}
});

//# sourceMappingURL=re_frisk.subs_graph.js.map
