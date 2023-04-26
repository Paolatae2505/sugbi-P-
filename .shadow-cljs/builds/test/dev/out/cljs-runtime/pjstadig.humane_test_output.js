goog.provide('pjstadig.humane_test_output');
pjstadig.humane_test_output.pprint_map = cljs.core.get_method(cljs.pprint.simple_dispatch,new cljs.core.Keyword(null,"map","map",1371690461));
cljs.pprint.simple_dispatch.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"map","map",1371690461),(function (amap){
if(cljs.core.record_QMARK_(amap)){
return pjstadig.util.pprint_record(amap);
} else {
return (pjstadig.humane_test_output.pprint_map.cljs$core$IFn$_invoke$arity$1 ? pjstadig.humane_test_output.pprint_map.cljs$core$IFn$_invoke$arity$1(amap) : pjstadig.humane_test_output.pprint_map.call(null,amap));
}
}));
pjstadig.util.define_fail_report();

//# sourceMappingURL=pjstadig.humane_test_output.js.map
