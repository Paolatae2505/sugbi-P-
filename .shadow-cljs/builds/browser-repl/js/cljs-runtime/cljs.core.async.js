goog.provide('cljs.core.async');
goog.scope(function(){
  cljs.core.async.goog$module$goog$array = goog.module.get('goog.array');
});
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__62249 = arguments.length;
switch (G__62249) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async62260 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async62260 = (function (f,blockable,meta62261){
this.f = f;
this.blockable = blockable;
this.meta62261 = meta62261;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async62260.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_62262,meta62261__$1){
var self__ = this;
var _62262__$1 = this;
return (new cljs.core.async.t_cljs$core$async62260(self__.f,self__.blockable,meta62261__$1));
}));

(cljs.core.async.t_cljs$core$async62260.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_62262){
var self__ = this;
var _62262__$1 = this;
return self__.meta62261;
}));

(cljs.core.async.t_cljs$core$async62260.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async62260.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async62260.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async62260.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async62260.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta62261","meta62261",627875889,null)], null);
}));

(cljs.core.async.t_cljs$core$async62260.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async62260.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async62260");

(cljs.core.async.t_cljs$core$async62260.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async62260");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async62260.
 */
cljs.core.async.__GT_t_cljs$core$async62260 = (function cljs$core$async$__GT_t_cljs$core$async62260(f__$1,blockable__$1,meta62261){
return (new cljs.core.async.t_cljs$core$async62260(f__$1,blockable__$1,meta62261));
});

}

return (new cljs.core.async.t_cljs$core$async62260(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__62299 = arguments.length;
switch (G__62299) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__62304 = arguments.length;
switch (G__62304) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__62306 = arguments.length;
switch (G__62306) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_63724 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_63724) : fn1.call(null,val_63724));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_63724) : fn1.call(null,val_63724));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__62308 = arguments.length;
switch (G__62308) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5802__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5802__auto__)){
var ret = temp__5802__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5802__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5802__auto__)){
var retb = temp__5802__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__5636__auto___63729 = n;
var x_63730 = (0);
while(true){
if((x_63730 < n__5636__auto___63729)){
(a[x_63730] = x_63730);

var G__63732 = (x_63730 + (1));
x_63730 = G__63732;
continue;
} else {
}
break;
}

cljs.core.async.goog$module$goog$array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async62309 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async62309 = (function (flag,meta62310){
this.flag = flag;
this.meta62310 = meta62310;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async62309.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_62311,meta62310__$1){
var self__ = this;
var _62311__$1 = this;
return (new cljs.core.async.t_cljs$core$async62309(self__.flag,meta62310__$1));
}));

(cljs.core.async.t_cljs$core$async62309.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_62311){
var self__ = this;
var _62311__$1 = this;
return self__.meta62310;
}));

(cljs.core.async.t_cljs$core$async62309.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async62309.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async62309.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async62309.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async62309.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta62310","meta62310",-1221442377,null)], null);
}));

(cljs.core.async.t_cljs$core$async62309.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async62309.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async62309");

(cljs.core.async.t_cljs$core$async62309.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async62309");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async62309.
 */
cljs.core.async.__GT_t_cljs$core$async62309 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async62309(flag__$1,meta62310){
return (new cljs.core.async.t_cljs$core$async62309(flag__$1,meta62310));
});

}

return (new cljs.core.async.t_cljs$core$async62309(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async62312 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async62312 = (function (flag,cb,meta62313){
this.flag = flag;
this.cb = cb;
this.meta62313 = meta62313;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async62312.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_62314,meta62313__$1){
var self__ = this;
var _62314__$1 = this;
return (new cljs.core.async.t_cljs$core$async62312(self__.flag,self__.cb,meta62313__$1));
}));

(cljs.core.async.t_cljs$core$async62312.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_62314){
var self__ = this;
var _62314__$1 = this;
return self__.meta62313;
}));

(cljs.core.async.t_cljs$core$async62312.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async62312.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async62312.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async62312.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async62312.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta62313","meta62313",133381088,null)], null);
}));

(cljs.core.async.t_cljs$core$async62312.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async62312.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async62312");

(cljs.core.async.t_cljs$core$async62312.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async62312");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async62312.
 */
cljs.core.async.__GT_t_cljs$core$async62312 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async62312(flag__$1,cb__$1,meta62313){
return (new cljs.core.async.t_cljs$core$async62312(flag__$1,cb__$1,meta62313));
});

}

return (new cljs.core.async.t_cljs$core$async62312(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__62315_SHARP_){
var G__62317 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__62315_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__62317) : fret.call(null,G__62317));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__62316_SHARP_){
var G__62318 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__62316_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__62318) : fret.call(null,G__62318));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__5045__auto__ = wport;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return port;
}
})()], null));
} else {
var G__63737 = (i + (1));
i = G__63737;
continue;
}
} else {
return null;
}
break;
}
})();
var or__5045__auto__ = ret;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5804__auto__ = (function (){var and__5043__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__5043__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__5043__auto__;
}
})();
if(cljs.core.truth_(temp__5804__auto__)){
var got = temp__5804__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___63740 = arguments.length;
var i__5770__auto___63741 = (0);
while(true){
if((i__5770__auto___63741 < len__5769__auto___63740)){
args__5775__auto__.push((arguments[i__5770__auto___63741]));

var G__63742 = (i__5770__auto___63741 + (1));
i__5770__auto___63741 = G__63742;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__62321){
var map__62322 = p__62321;
var map__62322__$1 = cljs.core.__destructure_map(map__62322);
var opts = map__62322__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq62319){
var G__62320 = cljs.core.first(seq62319);
var seq62319__$1 = cljs.core.next(seq62319);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__62320,seq62319__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__62324 = arguments.length;
switch (G__62324) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__56249__auto___63744 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__56250__auto__ = (function (){var switch__56226__auto__ = (function (state_62348){
var state_val_62349 = (state_62348[(1)]);
if((state_val_62349 === (7))){
var inst_62344 = (state_62348[(2)]);
var state_62348__$1 = state_62348;
var statearr_62350_63747 = state_62348__$1;
(statearr_62350_63747[(2)] = inst_62344);

(statearr_62350_63747[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62349 === (1))){
var state_62348__$1 = state_62348;
var statearr_62351_63748 = state_62348__$1;
(statearr_62351_63748[(2)] = null);

(statearr_62351_63748[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62349 === (4))){
var inst_62327 = (state_62348[(7)]);
var inst_62327__$1 = (state_62348[(2)]);
var inst_62328 = (inst_62327__$1 == null);
var state_62348__$1 = (function (){var statearr_62352 = state_62348;
(statearr_62352[(7)] = inst_62327__$1);

return statearr_62352;
})();
if(cljs.core.truth_(inst_62328)){
var statearr_62353_63749 = state_62348__$1;
(statearr_62353_63749[(1)] = (5));

} else {
var statearr_62354_63750 = state_62348__$1;
(statearr_62354_63750[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62349 === (13))){
var state_62348__$1 = state_62348;
var statearr_62355_63751 = state_62348__$1;
(statearr_62355_63751[(2)] = null);

(statearr_62355_63751[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62349 === (6))){
var inst_62327 = (state_62348[(7)]);
var state_62348__$1 = state_62348;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_62348__$1,(11),to,inst_62327);
} else {
if((state_val_62349 === (3))){
var inst_62346 = (state_62348[(2)]);
var state_62348__$1 = state_62348;
return cljs.core.async.impl.ioc_helpers.return_chan(state_62348__$1,inst_62346);
} else {
if((state_val_62349 === (12))){
var state_62348__$1 = state_62348;
var statearr_62356_63752 = state_62348__$1;
(statearr_62356_63752[(2)] = null);

(statearr_62356_63752[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62349 === (2))){
var state_62348__$1 = state_62348;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_62348__$1,(4),from);
} else {
if((state_val_62349 === (11))){
var inst_62337 = (state_62348[(2)]);
var state_62348__$1 = state_62348;
if(cljs.core.truth_(inst_62337)){
var statearr_62357_63753 = state_62348__$1;
(statearr_62357_63753[(1)] = (12));

} else {
var statearr_62358_63754 = state_62348__$1;
(statearr_62358_63754[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62349 === (9))){
var state_62348__$1 = state_62348;
var statearr_62359_63756 = state_62348__$1;
(statearr_62359_63756[(2)] = null);

(statearr_62359_63756[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62349 === (5))){
var state_62348__$1 = state_62348;
if(cljs.core.truth_(close_QMARK_)){
var statearr_62360_63757 = state_62348__$1;
(statearr_62360_63757[(1)] = (8));

} else {
var statearr_62361_63758 = state_62348__$1;
(statearr_62361_63758[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62349 === (14))){
var inst_62342 = (state_62348[(2)]);
var state_62348__$1 = state_62348;
var statearr_62362_63759 = state_62348__$1;
(statearr_62362_63759[(2)] = inst_62342);

(statearr_62362_63759[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62349 === (10))){
var inst_62334 = (state_62348[(2)]);
var state_62348__$1 = state_62348;
var statearr_62363_63760 = state_62348__$1;
(statearr_62363_63760[(2)] = inst_62334);

(statearr_62363_63760[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62349 === (8))){
var inst_62331 = cljs.core.async.close_BANG_(to);
var state_62348__$1 = state_62348;
var statearr_62364_63761 = state_62348__$1;
(statearr_62364_63761[(2)] = inst_62331);

(statearr_62364_63761[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__56227__auto__ = null;
var cljs$core$async$state_machine__56227__auto____0 = (function (){
var statearr_62365 = [null,null,null,null,null,null,null,null];
(statearr_62365[(0)] = cljs$core$async$state_machine__56227__auto__);

(statearr_62365[(1)] = (1));

return statearr_62365;
});
var cljs$core$async$state_machine__56227__auto____1 = (function (state_62348){
while(true){
var ret_value__56228__auto__ = (function (){try{while(true){
var result__56229__auto__ = switch__56226__auto__(state_62348);
if(cljs.core.keyword_identical_QMARK_(result__56229__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__56229__auto__;
}
break;
}
}catch (e62366){var ex__56230__auto__ = e62366;
var statearr_62367_63762 = state_62348;
(statearr_62367_63762[(2)] = ex__56230__auto__);


if(cljs.core.seq((state_62348[(4)]))){
var statearr_62368_63763 = state_62348;
(statearr_62368_63763[(1)] = cljs.core.first((state_62348[(4)])));

} else {
throw ex__56230__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__56228__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__63768 = state_62348;
state_62348 = G__63768;
continue;
} else {
return ret_value__56228__auto__;
}
break;
}
});
cljs$core$async$state_machine__56227__auto__ = function(state_62348){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__56227__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__56227__auto____1.call(this,state_62348);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__56227__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__56227__auto____0;
cljs$core$async$state_machine__56227__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__56227__auto____1;
return cljs$core$async$state_machine__56227__auto__;
})()
})();
var state__56251__auto__ = (function (){var statearr_62369 = f__56250__auto__();
(statearr_62369[(6)] = c__56249__auto___63744);

return statearr_62369;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__56251__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process__$1 = (function (p__62370){
var vec__62371 = p__62370;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62371,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62371,(1),null);
var job = vec__62371;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__56249__auto___63769 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__56250__auto__ = (function (){var switch__56226__auto__ = (function (state_62378){
var state_val_62379 = (state_62378[(1)]);
if((state_val_62379 === (1))){
var state_62378__$1 = state_62378;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_62378__$1,(2),res,v);
} else {
if((state_val_62379 === (2))){
var inst_62375 = (state_62378[(2)]);
var inst_62376 = cljs.core.async.close_BANG_(res);
var state_62378__$1 = (function (){var statearr_62380 = state_62378;
(statearr_62380[(7)] = inst_62375);

return statearr_62380;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_62378__$1,inst_62376);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__56227__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__56227__auto____0 = (function (){
var statearr_62381 = [null,null,null,null,null,null,null,null];
(statearr_62381[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__56227__auto__);

(statearr_62381[(1)] = (1));

return statearr_62381;
});
var cljs$core$async$pipeline_STAR__$_state_machine__56227__auto____1 = (function (state_62378){
while(true){
var ret_value__56228__auto__ = (function (){try{while(true){
var result__56229__auto__ = switch__56226__auto__(state_62378);
if(cljs.core.keyword_identical_QMARK_(result__56229__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__56229__auto__;
}
break;
}
}catch (e62382){var ex__56230__auto__ = e62382;
var statearr_62383_63770 = state_62378;
(statearr_62383_63770[(2)] = ex__56230__auto__);


if(cljs.core.seq((state_62378[(4)]))){
var statearr_62384_63771 = state_62378;
(statearr_62384_63771[(1)] = cljs.core.first((state_62378[(4)])));

} else {
throw ex__56230__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__56228__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__63772 = state_62378;
state_62378 = G__63772;
continue;
} else {
return ret_value__56228__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__56227__auto__ = function(state_62378){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__56227__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__56227__auto____1.call(this,state_62378);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__56227__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__56227__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__56227__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__56227__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__56227__auto__;
})()
})();
var state__56251__auto__ = (function (){var statearr_62385 = f__56250__auto__();
(statearr_62385[(6)] = c__56249__auto___63769);

return statearr_62385;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__56251__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__62386){
var vec__62387 = p__62386;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62387,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62387,(1),null);
var job = vec__62387;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__5636__auto___63773 = n;
var __63774 = (0);
while(true){
if((__63774 < n__5636__auto___63773)){
var G__62390_63775 = type;
var G__62390_63776__$1 = (((G__62390_63775 instanceof cljs.core.Keyword))?G__62390_63775.fqn:null);
switch (G__62390_63776__$1) {
case "compute":
var c__56249__auto___63778 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__63774,c__56249__auto___63778,G__62390_63775,G__62390_63776__$1,n__5636__auto___63773,jobs,results,process__$1,async){
return (function (){
var f__56250__auto__ = (function (){var switch__56226__auto__ = ((function (__63774,c__56249__auto___63778,G__62390_63775,G__62390_63776__$1,n__5636__auto___63773,jobs,results,process__$1,async){
return (function (state_62403){
var state_val_62404 = (state_62403[(1)]);
if((state_val_62404 === (1))){
var state_62403__$1 = state_62403;
var statearr_62405_63781 = state_62403__$1;
(statearr_62405_63781[(2)] = null);

(statearr_62405_63781[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62404 === (2))){
var state_62403__$1 = state_62403;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_62403__$1,(4),jobs);
} else {
if((state_val_62404 === (3))){
var inst_62401 = (state_62403[(2)]);
var state_62403__$1 = state_62403;
return cljs.core.async.impl.ioc_helpers.return_chan(state_62403__$1,inst_62401);
} else {
if((state_val_62404 === (4))){
var inst_62393 = (state_62403[(2)]);
var inst_62394 = process__$1(inst_62393);
var state_62403__$1 = state_62403;
if(cljs.core.truth_(inst_62394)){
var statearr_62406_63782 = state_62403__$1;
(statearr_62406_63782[(1)] = (5));

} else {
var statearr_62407_63783 = state_62403__$1;
(statearr_62407_63783[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62404 === (5))){
var state_62403__$1 = state_62403;
var statearr_62408_63784 = state_62403__$1;
(statearr_62408_63784[(2)] = null);

(statearr_62408_63784[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62404 === (6))){
var state_62403__$1 = state_62403;
var statearr_62409_63785 = state_62403__$1;
(statearr_62409_63785[(2)] = null);

(statearr_62409_63785[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62404 === (7))){
var inst_62399 = (state_62403[(2)]);
var state_62403__$1 = state_62403;
var statearr_62410_63786 = state_62403__$1;
(statearr_62410_63786[(2)] = inst_62399);

(statearr_62410_63786[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__63774,c__56249__auto___63778,G__62390_63775,G__62390_63776__$1,n__5636__auto___63773,jobs,results,process__$1,async))
;
return ((function (__63774,switch__56226__auto__,c__56249__auto___63778,G__62390_63775,G__62390_63776__$1,n__5636__auto___63773,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__56227__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__56227__auto____0 = (function (){
var statearr_62411 = [null,null,null,null,null,null,null];
(statearr_62411[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__56227__auto__);

(statearr_62411[(1)] = (1));

return statearr_62411;
});
var cljs$core$async$pipeline_STAR__$_state_machine__56227__auto____1 = (function (state_62403){
while(true){
var ret_value__56228__auto__ = (function (){try{while(true){
var result__56229__auto__ = switch__56226__auto__(state_62403);
if(cljs.core.keyword_identical_QMARK_(result__56229__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__56229__auto__;
}
break;
}
}catch (e62412){var ex__56230__auto__ = e62412;
var statearr_62413_63787 = state_62403;
(statearr_62413_63787[(2)] = ex__56230__auto__);


if(cljs.core.seq((state_62403[(4)]))){
var statearr_62414_63792 = state_62403;
(statearr_62414_63792[(1)] = cljs.core.first((state_62403[(4)])));

} else {
throw ex__56230__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__56228__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__63796 = state_62403;
state_62403 = G__63796;
continue;
} else {
return ret_value__56228__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__56227__auto__ = function(state_62403){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__56227__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__56227__auto____1.call(this,state_62403);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__56227__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__56227__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__56227__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__56227__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__56227__auto__;
})()
;})(__63774,switch__56226__auto__,c__56249__auto___63778,G__62390_63775,G__62390_63776__$1,n__5636__auto___63773,jobs,results,process__$1,async))
})();
var state__56251__auto__ = (function (){var statearr_62415 = f__56250__auto__();
(statearr_62415[(6)] = c__56249__auto___63778);

return statearr_62415;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__56251__auto__);
});})(__63774,c__56249__auto___63778,G__62390_63775,G__62390_63776__$1,n__5636__auto___63773,jobs,results,process__$1,async))
);


break;
case "async":
var c__56249__auto___63797 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__63774,c__56249__auto___63797,G__62390_63775,G__62390_63776__$1,n__5636__auto___63773,jobs,results,process__$1,async){
return (function (){
var f__56250__auto__ = (function (){var switch__56226__auto__ = ((function (__63774,c__56249__auto___63797,G__62390_63775,G__62390_63776__$1,n__5636__auto___63773,jobs,results,process__$1,async){
return (function (state_62428){
var state_val_62429 = (state_62428[(1)]);
if((state_val_62429 === (1))){
var state_62428__$1 = state_62428;
var statearr_62430_63801 = state_62428__$1;
(statearr_62430_63801[(2)] = null);

(statearr_62430_63801[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62429 === (2))){
var state_62428__$1 = state_62428;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_62428__$1,(4),jobs);
} else {
if((state_val_62429 === (3))){
var inst_62426 = (state_62428[(2)]);
var state_62428__$1 = state_62428;
return cljs.core.async.impl.ioc_helpers.return_chan(state_62428__$1,inst_62426);
} else {
if((state_val_62429 === (4))){
var inst_62418 = (state_62428[(2)]);
var inst_62419 = async(inst_62418);
var state_62428__$1 = state_62428;
if(cljs.core.truth_(inst_62419)){
var statearr_62431_63805 = state_62428__$1;
(statearr_62431_63805[(1)] = (5));

} else {
var statearr_62432_63806 = state_62428__$1;
(statearr_62432_63806[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62429 === (5))){
var state_62428__$1 = state_62428;
var statearr_62433_63807 = state_62428__$1;
(statearr_62433_63807[(2)] = null);

(statearr_62433_63807[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62429 === (6))){
var state_62428__$1 = state_62428;
var statearr_62434_63808 = state_62428__$1;
(statearr_62434_63808[(2)] = null);

(statearr_62434_63808[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62429 === (7))){
var inst_62424 = (state_62428[(2)]);
var state_62428__$1 = state_62428;
var statearr_62435_63809 = state_62428__$1;
(statearr_62435_63809[(2)] = inst_62424);

(statearr_62435_63809[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__63774,c__56249__auto___63797,G__62390_63775,G__62390_63776__$1,n__5636__auto___63773,jobs,results,process__$1,async))
;
return ((function (__63774,switch__56226__auto__,c__56249__auto___63797,G__62390_63775,G__62390_63776__$1,n__5636__auto___63773,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__56227__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__56227__auto____0 = (function (){
var statearr_62436 = [null,null,null,null,null,null,null];
(statearr_62436[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__56227__auto__);

(statearr_62436[(1)] = (1));

return statearr_62436;
});
var cljs$core$async$pipeline_STAR__$_state_machine__56227__auto____1 = (function (state_62428){
while(true){
var ret_value__56228__auto__ = (function (){try{while(true){
var result__56229__auto__ = switch__56226__auto__(state_62428);
if(cljs.core.keyword_identical_QMARK_(result__56229__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__56229__auto__;
}
break;
}
}catch (e62437){var ex__56230__auto__ = e62437;
var statearr_62438_63813 = state_62428;
(statearr_62438_63813[(2)] = ex__56230__auto__);


if(cljs.core.seq((state_62428[(4)]))){
var statearr_62439_63814 = state_62428;
(statearr_62439_63814[(1)] = cljs.core.first((state_62428[(4)])));

} else {
throw ex__56230__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__56228__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__63815 = state_62428;
state_62428 = G__63815;
continue;
} else {
return ret_value__56228__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__56227__auto__ = function(state_62428){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__56227__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__56227__auto____1.call(this,state_62428);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__56227__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__56227__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__56227__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__56227__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__56227__auto__;
})()
;})(__63774,switch__56226__auto__,c__56249__auto___63797,G__62390_63775,G__62390_63776__$1,n__5636__auto___63773,jobs,results,process__$1,async))
})();
var state__56251__auto__ = (function (){var statearr_62440 = f__56250__auto__();
(statearr_62440[(6)] = c__56249__auto___63797);

return statearr_62440;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__56251__auto__);
});})(__63774,c__56249__auto___63797,G__62390_63775,G__62390_63776__$1,n__5636__auto___63773,jobs,results,process__$1,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__62390_63776__$1)].join('')));

}

var G__63820 = (__63774 + (1));
__63774 = G__63820;
continue;
} else {
}
break;
}

var c__56249__auto___63821 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__56250__auto__ = (function (){var switch__56226__auto__ = (function (state_62462){
var state_val_62463 = (state_62462[(1)]);
if((state_val_62463 === (7))){
var inst_62458 = (state_62462[(2)]);
var state_62462__$1 = state_62462;
var statearr_62464_63825 = state_62462__$1;
(statearr_62464_63825[(2)] = inst_62458);

(statearr_62464_63825[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62463 === (1))){
var state_62462__$1 = state_62462;
var statearr_62465_63826 = state_62462__$1;
(statearr_62465_63826[(2)] = null);

(statearr_62465_63826[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62463 === (4))){
var inst_62443 = (state_62462[(7)]);
var inst_62443__$1 = (state_62462[(2)]);
var inst_62444 = (inst_62443__$1 == null);
var state_62462__$1 = (function (){var statearr_62466 = state_62462;
(statearr_62466[(7)] = inst_62443__$1);

return statearr_62466;
})();
if(cljs.core.truth_(inst_62444)){
var statearr_62467_63827 = state_62462__$1;
(statearr_62467_63827[(1)] = (5));

} else {
var statearr_62468_63831 = state_62462__$1;
(statearr_62468_63831[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62463 === (6))){
var inst_62443 = (state_62462[(7)]);
var inst_62448 = (state_62462[(8)]);
var inst_62448__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_62449 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_62450 = [inst_62443,inst_62448__$1];
var inst_62451 = (new cljs.core.PersistentVector(null,2,(5),inst_62449,inst_62450,null));
var state_62462__$1 = (function (){var statearr_62469 = state_62462;
(statearr_62469[(8)] = inst_62448__$1);

return statearr_62469;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_62462__$1,(8),jobs,inst_62451);
} else {
if((state_val_62463 === (3))){
var inst_62460 = (state_62462[(2)]);
var state_62462__$1 = state_62462;
return cljs.core.async.impl.ioc_helpers.return_chan(state_62462__$1,inst_62460);
} else {
if((state_val_62463 === (2))){
var state_62462__$1 = state_62462;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_62462__$1,(4),from);
} else {
if((state_val_62463 === (9))){
var inst_62455 = (state_62462[(2)]);
var state_62462__$1 = (function (){var statearr_62470 = state_62462;
(statearr_62470[(9)] = inst_62455);

return statearr_62470;
})();
var statearr_62471_63835 = state_62462__$1;
(statearr_62471_63835[(2)] = null);

(statearr_62471_63835[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62463 === (5))){
var inst_62446 = cljs.core.async.close_BANG_(jobs);
var state_62462__$1 = state_62462;
var statearr_62472_63836 = state_62462__$1;
(statearr_62472_63836[(2)] = inst_62446);

(statearr_62472_63836[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62463 === (8))){
var inst_62448 = (state_62462[(8)]);
var inst_62453 = (state_62462[(2)]);
var state_62462__$1 = (function (){var statearr_62473 = state_62462;
(statearr_62473[(10)] = inst_62453);

return statearr_62473;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_62462__$1,(9),results,inst_62448);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__56227__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__56227__auto____0 = (function (){
var statearr_62474 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_62474[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__56227__auto__);

(statearr_62474[(1)] = (1));

return statearr_62474;
});
var cljs$core$async$pipeline_STAR__$_state_machine__56227__auto____1 = (function (state_62462){
while(true){
var ret_value__56228__auto__ = (function (){try{while(true){
var result__56229__auto__ = switch__56226__auto__(state_62462);
if(cljs.core.keyword_identical_QMARK_(result__56229__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__56229__auto__;
}
break;
}
}catch (e62475){var ex__56230__auto__ = e62475;
var statearr_62476_63840 = state_62462;
(statearr_62476_63840[(2)] = ex__56230__auto__);


if(cljs.core.seq((state_62462[(4)]))){
var statearr_62477_63841 = state_62462;
(statearr_62477_63841[(1)] = cljs.core.first((state_62462[(4)])));

} else {
throw ex__56230__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__56228__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__63842 = state_62462;
state_62462 = G__63842;
continue;
} else {
return ret_value__56228__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__56227__auto__ = function(state_62462){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__56227__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__56227__auto____1.call(this,state_62462);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__56227__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__56227__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__56227__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__56227__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__56227__auto__;
})()
})();
var state__56251__auto__ = (function (){var statearr_62478 = f__56250__auto__();
(statearr_62478[(6)] = c__56249__auto___63821);

return statearr_62478;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__56251__auto__);
}));


var c__56249__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__56250__auto__ = (function (){var switch__56226__auto__ = (function (state_62516){
var state_val_62517 = (state_62516[(1)]);
if((state_val_62517 === (7))){
var inst_62512 = (state_62516[(2)]);
var state_62516__$1 = state_62516;
var statearr_62518_63844 = state_62516__$1;
(statearr_62518_63844[(2)] = inst_62512);

(statearr_62518_63844[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62517 === (20))){
var state_62516__$1 = state_62516;
var statearr_62519_63845 = state_62516__$1;
(statearr_62519_63845[(2)] = null);

(statearr_62519_63845[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62517 === (1))){
var state_62516__$1 = state_62516;
var statearr_62520_63846 = state_62516__$1;
(statearr_62520_63846[(2)] = null);

(statearr_62520_63846[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62517 === (4))){
var inst_62481 = (state_62516[(7)]);
var inst_62481__$1 = (state_62516[(2)]);
var inst_62482 = (inst_62481__$1 == null);
var state_62516__$1 = (function (){var statearr_62521 = state_62516;
(statearr_62521[(7)] = inst_62481__$1);

return statearr_62521;
})();
if(cljs.core.truth_(inst_62482)){
var statearr_62522_63847 = state_62516__$1;
(statearr_62522_63847[(1)] = (5));

} else {
var statearr_62523_63848 = state_62516__$1;
(statearr_62523_63848[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62517 === (15))){
var inst_62494 = (state_62516[(8)]);
var state_62516__$1 = state_62516;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_62516__$1,(18),to,inst_62494);
} else {
if((state_val_62517 === (21))){
var inst_62507 = (state_62516[(2)]);
var state_62516__$1 = state_62516;
var statearr_62524_63849 = state_62516__$1;
(statearr_62524_63849[(2)] = inst_62507);

(statearr_62524_63849[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62517 === (13))){
var inst_62509 = (state_62516[(2)]);
var state_62516__$1 = (function (){var statearr_62525 = state_62516;
(statearr_62525[(9)] = inst_62509);

return statearr_62525;
})();
var statearr_62526_63850 = state_62516__$1;
(statearr_62526_63850[(2)] = null);

(statearr_62526_63850[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62517 === (6))){
var inst_62481 = (state_62516[(7)]);
var state_62516__$1 = state_62516;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_62516__$1,(11),inst_62481);
} else {
if((state_val_62517 === (17))){
var inst_62502 = (state_62516[(2)]);
var state_62516__$1 = state_62516;
if(cljs.core.truth_(inst_62502)){
var statearr_62527_63851 = state_62516__$1;
(statearr_62527_63851[(1)] = (19));

} else {
var statearr_62528_63852 = state_62516__$1;
(statearr_62528_63852[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62517 === (3))){
var inst_62514 = (state_62516[(2)]);
var state_62516__$1 = state_62516;
return cljs.core.async.impl.ioc_helpers.return_chan(state_62516__$1,inst_62514);
} else {
if((state_val_62517 === (12))){
var inst_62491 = (state_62516[(10)]);
var state_62516__$1 = state_62516;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_62516__$1,(14),inst_62491);
} else {
if((state_val_62517 === (2))){
var state_62516__$1 = state_62516;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_62516__$1,(4),results);
} else {
if((state_val_62517 === (19))){
var state_62516__$1 = state_62516;
var statearr_62529_63853 = state_62516__$1;
(statearr_62529_63853[(2)] = null);

(statearr_62529_63853[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62517 === (11))){
var inst_62491 = (state_62516[(2)]);
var state_62516__$1 = (function (){var statearr_62530 = state_62516;
(statearr_62530[(10)] = inst_62491);

return statearr_62530;
})();
var statearr_62531_63854 = state_62516__$1;
(statearr_62531_63854[(2)] = null);

(statearr_62531_63854[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62517 === (9))){
var state_62516__$1 = state_62516;
var statearr_62532_63855 = state_62516__$1;
(statearr_62532_63855[(2)] = null);

(statearr_62532_63855[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62517 === (5))){
var state_62516__$1 = state_62516;
if(cljs.core.truth_(close_QMARK_)){
var statearr_62533_63856 = state_62516__$1;
(statearr_62533_63856[(1)] = (8));

} else {
var statearr_62534_63857 = state_62516__$1;
(statearr_62534_63857[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62517 === (14))){
var inst_62494 = (state_62516[(8)]);
var inst_62496 = (state_62516[(11)]);
var inst_62494__$1 = (state_62516[(2)]);
var inst_62495 = (inst_62494__$1 == null);
var inst_62496__$1 = cljs.core.not(inst_62495);
var state_62516__$1 = (function (){var statearr_62535 = state_62516;
(statearr_62535[(8)] = inst_62494__$1);

(statearr_62535[(11)] = inst_62496__$1);

return statearr_62535;
})();
if(inst_62496__$1){
var statearr_62536_63858 = state_62516__$1;
(statearr_62536_63858[(1)] = (15));

} else {
var statearr_62537_63859 = state_62516__$1;
(statearr_62537_63859[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62517 === (16))){
var inst_62496 = (state_62516[(11)]);
var state_62516__$1 = state_62516;
var statearr_62538_63860 = state_62516__$1;
(statearr_62538_63860[(2)] = inst_62496);

(statearr_62538_63860[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62517 === (10))){
var inst_62488 = (state_62516[(2)]);
var state_62516__$1 = state_62516;
var statearr_62539_63861 = state_62516__$1;
(statearr_62539_63861[(2)] = inst_62488);

(statearr_62539_63861[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62517 === (18))){
var inst_62499 = (state_62516[(2)]);
var state_62516__$1 = state_62516;
var statearr_62540_63862 = state_62516__$1;
(statearr_62540_63862[(2)] = inst_62499);

(statearr_62540_63862[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62517 === (8))){
var inst_62485 = cljs.core.async.close_BANG_(to);
var state_62516__$1 = state_62516;
var statearr_62541_63863 = state_62516__$1;
(statearr_62541_63863[(2)] = inst_62485);

(statearr_62541_63863[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__56227__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__56227__auto____0 = (function (){
var statearr_62542 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_62542[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__56227__auto__);

(statearr_62542[(1)] = (1));

return statearr_62542;
});
var cljs$core$async$pipeline_STAR__$_state_machine__56227__auto____1 = (function (state_62516){
while(true){
var ret_value__56228__auto__ = (function (){try{while(true){
var result__56229__auto__ = switch__56226__auto__(state_62516);
if(cljs.core.keyword_identical_QMARK_(result__56229__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__56229__auto__;
}
break;
}
}catch (e62543){var ex__56230__auto__ = e62543;
var statearr_62544_63866 = state_62516;
(statearr_62544_63866[(2)] = ex__56230__auto__);


if(cljs.core.seq((state_62516[(4)]))){
var statearr_62545_63870 = state_62516;
(statearr_62545_63870[(1)] = cljs.core.first((state_62516[(4)])));

} else {
throw ex__56230__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__56228__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__63871 = state_62516;
state_62516 = G__63871;
continue;
} else {
return ret_value__56228__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__56227__auto__ = function(state_62516){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__56227__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__56227__auto____1.call(this,state_62516);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__56227__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__56227__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__56227__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__56227__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__56227__auto__;
})()
})();
var state__56251__auto__ = (function (){var statearr_62546 = f__56250__auto__();
(statearr_62546[(6)] = c__56249__auto__);

return statearr_62546;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__56251__auto__);
}));

return c__56249__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). The
 *   presumption is that af will return immediately, having launched some
 *   asynchronous operation whose completion/callback will put results on
 *   the channel, then close! it. Outputs will be returned in order
 *   relative to the inputs. By default, the to channel will be closed
 *   when the from channel closes, but can be determined by the close?
 *   parameter. Will stop consuming the from channel if the to channel
 *   closes. See also pipeline, pipeline-blocking.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__62548 = arguments.length;
switch (G__62548) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__62550 = arguments.length;
switch (G__62550) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__62552 = arguments.length;
switch (G__62552) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__56249__auto___63882 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__56250__auto__ = (function (){var switch__56226__auto__ = (function (state_62578){
var state_val_62579 = (state_62578[(1)]);
if((state_val_62579 === (7))){
var inst_62574 = (state_62578[(2)]);
var state_62578__$1 = state_62578;
var statearr_62580_63883 = state_62578__$1;
(statearr_62580_63883[(2)] = inst_62574);

(statearr_62580_63883[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62579 === (1))){
var state_62578__$1 = state_62578;
var statearr_62581_63886 = state_62578__$1;
(statearr_62581_63886[(2)] = null);

(statearr_62581_63886[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62579 === (4))){
var inst_62555 = (state_62578[(7)]);
var inst_62555__$1 = (state_62578[(2)]);
var inst_62556 = (inst_62555__$1 == null);
var state_62578__$1 = (function (){var statearr_62582 = state_62578;
(statearr_62582[(7)] = inst_62555__$1);

return statearr_62582;
})();
if(cljs.core.truth_(inst_62556)){
var statearr_62583_63889 = state_62578__$1;
(statearr_62583_63889[(1)] = (5));

} else {
var statearr_62584_63890 = state_62578__$1;
(statearr_62584_63890[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62579 === (13))){
var state_62578__$1 = state_62578;
var statearr_62585_63891 = state_62578__$1;
(statearr_62585_63891[(2)] = null);

(statearr_62585_63891[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62579 === (6))){
var inst_62555 = (state_62578[(7)]);
var inst_62561 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_62555) : p.call(null,inst_62555));
var state_62578__$1 = state_62578;
if(cljs.core.truth_(inst_62561)){
var statearr_62586_63895 = state_62578__$1;
(statearr_62586_63895[(1)] = (9));

} else {
var statearr_62587_63896 = state_62578__$1;
(statearr_62587_63896[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62579 === (3))){
var inst_62576 = (state_62578[(2)]);
var state_62578__$1 = state_62578;
return cljs.core.async.impl.ioc_helpers.return_chan(state_62578__$1,inst_62576);
} else {
if((state_val_62579 === (12))){
var state_62578__$1 = state_62578;
var statearr_62588_63901 = state_62578__$1;
(statearr_62588_63901[(2)] = null);

(statearr_62588_63901[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62579 === (2))){
var state_62578__$1 = state_62578;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_62578__$1,(4),ch);
} else {
if((state_val_62579 === (11))){
var inst_62555 = (state_62578[(7)]);
var inst_62565 = (state_62578[(2)]);
var state_62578__$1 = state_62578;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_62578__$1,(8),inst_62565,inst_62555);
} else {
if((state_val_62579 === (9))){
var state_62578__$1 = state_62578;
var statearr_62589_63908 = state_62578__$1;
(statearr_62589_63908[(2)] = tc);

(statearr_62589_63908[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62579 === (5))){
var inst_62558 = cljs.core.async.close_BANG_(tc);
var inst_62559 = cljs.core.async.close_BANG_(fc);
var state_62578__$1 = (function (){var statearr_62590 = state_62578;
(statearr_62590[(8)] = inst_62558);

return statearr_62590;
})();
var statearr_62591_63909 = state_62578__$1;
(statearr_62591_63909[(2)] = inst_62559);

(statearr_62591_63909[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62579 === (14))){
var inst_62572 = (state_62578[(2)]);
var state_62578__$1 = state_62578;
var statearr_62592_63910 = state_62578__$1;
(statearr_62592_63910[(2)] = inst_62572);

(statearr_62592_63910[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62579 === (10))){
var state_62578__$1 = state_62578;
var statearr_62593_63911 = state_62578__$1;
(statearr_62593_63911[(2)] = fc);

(statearr_62593_63911[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62579 === (8))){
var inst_62567 = (state_62578[(2)]);
var state_62578__$1 = state_62578;
if(cljs.core.truth_(inst_62567)){
var statearr_62594_63912 = state_62578__$1;
(statearr_62594_63912[(1)] = (12));

} else {
var statearr_62595_63913 = state_62578__$1;
(statearr_62595_63913[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__56227__auto__ = null;
var cljs$core$async$state_machine__56227__auto____0 = (function (){
var statearr_62596 = [null,null,null,null,null,null,null,null,null];
(statearr_62596[(0)] = cljs$core$async$state_machine__56227__auto__);

(statearr_62596[(1)] = (1));

return statearr_62596;
});
var cljs$core$async$state_machine__56227__auto____1 = (function (state_62578){
while(true){
var ret_value__56228__auto__ = (function (){try{while(true){
var result__56229__auto__ = switch__56226__auto__(state_62578);
if(cljs.core.keyword_identical_QMARK_(result__56229__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__56229__auto__;
}
break;
}
}catch (e62597){var ex__56230__auto__ = e62597;
var statearr_62598_63914 = state_62578;
(statearr_62598_63914[(2)] = ex__56230__auto__);


if(cljs.core.seq((state_62578[(4)]))){
var statearr_62599_63915 = state_62578;
(statearr_62599_63915[(1)] = cljs.core.first((state_62578[(4)])));

} else {
throw ex__56230__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__56228__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__63916 = state_62578;
state_62578 = G__63916;
continue;
} else {
return ret_value__56228__auto__;
}
break;
}
});
cljs$core$async$state_machine__56227__auto__ = function(state_62578){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__56227__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__56227__auto____1.call(this,state_62578);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__56227__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__56227__auto____0;
cljs$core$async$state_machine__56227__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__56227__auto____1;
return cljs$core$async$state_machine__56227__auto__;
})()
})();
var state__56251__auto__ = (function (){var statearr_62600 = f__56250__auto__();
(statearr_62600[(6)] = c__56249__auto___63882);

return statearr_62600;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__56251__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__56249__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__56250__auto__ = (function (){var switch__56226__auto__ = (function (state_62622){
var state_val_62623 = (state_62622[(1)]);
if((state_val_62623 === (7))){
var inst_62618 = (state_62622[(2)]);
var state_62622__$1 = state_62622;
var statearr_62624_63917 = state_62622__$1;
(statearr_62624_63917[(2)] = inst_62618);

(statearr_62624_63917[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62623 === (1))){
var inst_62601 = init;
var inst_62602 = inst_62601;
var state_62622__$1 = (function (){var statearr_62625 = state_62622;
(statearr_62625[(7)] = inst_62602);

return statearr_62625;
})();
var statearr_62626_63924 = state_62622__$1;
(statearr_62626_63924[(2)] = null);

(statearr_62626_63924[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62623 === (4))){
var inst_62605 = (state_62622[(8)]);
var inst_62605__$1 = (state_62622[(2)]);
var inst_62606 = (inst_62605__$1 == null);
var state_62622__$1 = (function (){var statearr_62627 = state_62622;
(statearr_62627[(8)] = inst_62605__$1);

return statearr_62627;
})();
if(cljs.core.truth_(inst_62606)){
var statearr_62628_63925 = state_62622__$1;
(statearr_62628_63925[(1)] = (5));

} else {
var statearr_62629_63926 = state_62622__$1;
(statearr_62629_63926[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62623 === (6))){
var inst_62605 = (state_62622[(8)]);
var inst_62609 = (state_62622[(9)]);
var inst_62602 = (state_62622[(7)]);
var inst_62609__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_62602,inst_62605) : f.call(null,inst_62602,inst_62605));
var inst_62610 = cljs.core.reduced_QMARK_(inst_62609__$1);
var state_62622__$1 = (function (){var statearr_62630 = state_62622;
(statearr_62630[(9)] = inst_62609__$1);

return statearr_62630;
})();
if(inst_62610){
var statearr_62631_63927 = state_62622__$1;
(statearr_62631_63927[(1)] = (8));

} else {
var statearr_62632_63928 = state_62622__$1;
(statearr_62632_63928[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62623 === (3))){
var inst_62620 = (state_62622[(2)]);
var state_62622__$1 = state_62622;
return cljs.core.async.impl.ioc_helpers.return_chan(state_62622__$1,inst_62620);
} else {
if((state_val_62623 === (2))){
var state_62622__$1 = state_62622;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_62622__$1,(4),ch);
} else {
if((state_val_62623 === (9))){
var inst_62609 = (state_62622[(9)]);
var inst_62602 = inst_62609;
var state_62622__$1 = (function (){var statearr_62633 = state_62622;
(statearr_62633[(7)] = inst_62602);

return statearr_62633;
})();
var statearr_62634_63929 = state_62622__$1;
(statearr_62634_63929[(2)] = null);

(statearr_62634_63929[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62623 === (5))){
var inst_62602 = (state_62622[(7)]);
var state_62622__$1 = state_62622;
var statearr_62635_63930 = state_62622__$1;
(statearr_62635_63930[(2)] = inst_62602);

(statearr_62635_63930[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62623 === (10))){
var inst_62616 = (state_62622[(2)]);
var state_62622__$1 = state_62622;
var statearr_62636_63931 = state_62622__$1;
(statearr_62636_63931[(2)] = inst_62616);

(statearr_62636_63931[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62623 === (8))){
var inst_62609 = (state_62622[(9)]);
var inst_62612 = cljs.core.deref(inst_62609);
var state_62622__$1 = state_62622;
var statearr_62637_63932 = state_62622__$1;
(statearr_62637_63932[(2)] = inst_62612);

(statearr_62637_63932[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$reduce_$_state_machine__56227__auto__ = null;
var cljs$core$async$reduce_$_state_machine__56227__auto____0 = (function (){
var statearr_62638 = [null,null,null,null,null,null,null,null,null,null];
(statearr_62638[(0)] = cljs$core$async$reduce_$_state_machine__56227__auto__);

(statearr_62638[(1)] = (1));

return statearr_62638;
});
var cljs$core$async$reduce_$_state_machine__56227__auto____1 = (function (state_62622){
while(true){
var ret_value__56228__auto__ = (function (){try{while(true){
var result__56229__auto__ = switch__56226__auto__(state_62622);
if(cljs.core.keyword_identical_QMARK_(result__56229__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__56229__auto__;
}
break;
}
}catch (e62639){var ex__56230__auto__ = e62639;
var statearr_62640_63933 = state_62622;
(statearr_62640_63933[(2)] = ex__56230__auto__);


if(cljs.core.seq((state_62622[(4)]))){
var statearr_62641_63934 = state_62622;
(statearr_62641_63934[(1)] = cljs.core.first((state_62622[(4)])));

} else {
throw ex__56230__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__56228__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__63935 = state_62622;
state_62622 = G__63935;
continue;
} else {
return ret_value__56228__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__56227__auto__ = function(state_62622){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__56227__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__56227__auto____1.call(this,state_62622);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__56227__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__56227__auto____0;
cljs$core$async$reduce_$_state_machine__56227__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__56227__auto____1;
return cljs$core$async$reduce_$_state_machine__56227__auto__;
})()
})();
var state__56251__auto__ = (function (){var statearr_62642 = f__56250__auto__();
(statearr_62642[(6)] = c__56249__auto__);

return statearr_62642;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__56251__auto__);
}));

return c__56249__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__56249__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__56250__auto__ = (function (){var switch__56226__auto__ = (function (state_62648){
var state_val_62649 = (state_62648[(1)]);
if((state_val_62649 === (1))){
var inst_62643 = cljs.core.async.reduce(f__$1,init,ch);
var state_62648__$1 = state_62648;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_62648__$1,(2),inst_62643);
} else {
if((state_val_62649 === (2))){
var inst_62645 = (state_62648[(2)]);
var inst_62646 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_62645) : f__$1.call(null,inst_62645));
var state_62648__$1 = state_62648;
return cljs.core.async.impl.ioc_helpers.return_chan(state_62648__$1,inst_62646);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__56227__auto__ = null;
var cljs$core$async$transduce_$_state_machine__56227__auto____0 = (function (){
var statearr_62650 = [null,null,null,null,null,null,null];
(statearr_62650[(0)] = cljs$core$async$transduce_$_state_machine__56227__auto__);

(statearr_62650[(1)] = (1));

return statearr_62650;
});
var cljs$core$async$transduce_$_state_machine__56227__auto____1 = (function (state_62648){
while(true){
var ret_value__56228__auto__ = (function (){try{while(true){
var result__56229__auto__ = switch__56226__auto__(state_62648);
if(cljs.core.keyword_identical_QMARK_(result__56229__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__56229__auto__;
}
break;
}
}catch (e62651){var ex__56230__auto__ = e62651;
var statearr_62652_63942 = state_62648;
(statearr_62652_63942[(2)] = ex__56230__auto__);


if(cljs.core.seq((state_62648[(4)]))){
var statearr_62653_63943 = state_62648;
(statearr_62653_63943[(1)] = cljs.core.first((state_62648[(4)])));

} else {
throw ex__56230__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__56228__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__63944 = state_62648;
state_62648 = G__63944;
continue;
} else {
return ret_value__56228__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__56227__auto__ = function(state_62648){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__56227__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__56227__auto____1.call(this,state_62648);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__56227__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__56227__auto____0;
cljs$core$async$transduce_$_state_machine__56227__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__56227__auto____1;
return cljs$core$async$transduce_$_state_machine__56227__auto__;
})()
})();
var state__56251__auto__ = (function (){var statearr_62654 = f__56250__auto__();
(statearr_62654[(6)] = c__56249__auto__);

return statearr_62654;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__56251__auto__);
}));

return c__56249__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__62656 = arguments.length;
switch (G__62656) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__56249__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__56250__auto__ = (function (){var switch__56226__auto__ = (function (state_62681){
var state_val_62682 = (state_62681[(1)]);
if((state_val_62682 === (7))){
var inst_62663 = (state_62681[(2)]);
var state_62681__$1 = state_62681;
var statearr_62683_63946 = state_62681__$1;
(statearr_62683_63946[(2)] = inst_62663);

(statearr_62683_63946[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62682 === (1))){
var inst_62657 = cljs.core.seq(coll);
var inst_62658 = inst_62657;
var state_62681__$1 = (function (){var statearr_62684 = state_62681;
(statearr_62684[(7)] = inst_62658);

return statearr_62684;
})();
var statearr_62685_63947 = state_62681__$1;
(statearr_62685_63947[(2)] = null);

(statearr_62685_63947[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62682 === (4))){
var inst_62658 = (state_62681[(7)]);
var inst_62661 = cljs.core.first(inst_62658);
var state_62681__$1 = state_62681;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_62681__$1,(7),ch,inst_62661);
} else {
if((state_val_62682 === (13))){
var inst_62675 = (state_62681[(2)]);
var state_62681__$1 = state_62681;
var statearr_62686_63948 = state_62681__$1;
(statearr_62686_63948[(2)] = inst_62675);

(statearr_62686_63948[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62682 === (6))){
var inst_62666 = (state_62681[(2)]);
var state_62681__$1 = state_62681;
if(cljs.core.truth_(inst_62666)){
var statearr_62687_63949 = state_62681__$1;
(statearr_62687_63949[(1)] = (8));

} else {
var statearr_62688_63950 = state_62681__$1;
(statearr_62688_63950[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62682 === (3))){
var inst_62679 = (state_62681[(2)]);
var state_62681__$1 = state_62681;
return cljs.core.async.impl.ioc_helpers.return_chan(state_62681__$1,inst_62679);
} else {
if((state_val_62682 === (12))){
var state_62681__$1 = state_62681;
var statearr_62689_63957 = state_62681__$1;
(statearr_62689_63957[(2)] = null);

(statearr_62689_63957[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62682 === (2))){
var inst_62658 = (state_62681[(7)]);
var state_62681__$1 = state_62681;
if(cljs.core.truth_(inst_62658)){
var statearr_62690_63958 = state_62681__$1;
(statearr_62690_63958[(1)] = (4));

} else {
var statearr_62691_63959 = state_62681__$1;
(statearr_62691_63959[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62682 === (11))){
var inst_62672 = cljs.core.async.close_BANG_(ch);
var state_62681__$1 = state_62681;
var statearr_62692_63960 = state_62681__$1;
(statearr_62692_63960[(2)] = inst_62672);

(statearr_62692_63960[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62682 === (9))){
var state_62681__$1 = state_62681;
if(cljs.core.truth_(close_QMARK_)){
var statearr_62693_63961 = state_62681__$1;
(statearr_62693_63961[(1)] = (11));

} else {
var statearr_62694_63962 = state_62681__$1;
(statearr_62694_63962[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62682 === (5))){
var inst_62658 = (state_62681[(7)]);
var state_62681__$1 = state_62681;
var statearr_62695_63963 = state_62681__$1;
(statearr_62695_63963[(2)] = inst_62658);

(statearr_62695_63963[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62682 === (10))){
var inst_62677 = (state_62681[(2)]);
var state_62681__$1 = state_62681;
var statearr_62696_63964 = state_62681__$1;
(statearr_62696_63964[(2)] = inst_62677);

(statearr_62696_63964[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62682 === (8))){
var inst_62658 = (state_62681[(7)]);
var inst_62668 = cljs.core.next(inst_62658);
var inst_62658__$1 = inst_62668;
var state_62681__$1 = (function (){var statearr_62697 = state_62681;
(statearr_62697[(7)] = inst_62658__$1);

return statearr_62697;
})();
var statearr_62698_63965 = state_62681__$1;
(statearr_62698_63965[(2)] = null);

(statearr_62698_63965[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__56227__auto__ = null;
var cljs$core$async$state_machine__56227__auto____0 = (function (){
var statearr_62699 = [null,null,null,null,null,null,null,null];
(statearr_62699[(0)] = cljs$core$async$state_machine__56227__auto__);

(statearr_62699[(1)] = (1));

return statearr_62699;
});
var cljs$core$async$state_machine__56227__auto____1 = (function (state_62681){
while(true){
var ret_value__56228__auto__ = (function (){try{while(true){
var result__56229__auto__ = switch__56226__auto__(state_62681);
if(cljs.core.keyword_identical_QMARK_(result__56229__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__56229__auto__;
}
break;
}
}catch (e62700){var ex__56230__auto__ = e62700;
var statearr_62701_63966 = state_62681;
(statearr_62701_63966[(2)] = ex__56230__auto__);


if(cljs.core.seq((state_62681[(4)]))){
var statearr_62702_63967 = state_62681;
(statearr_62702_63967[(1)] = cljs.core.first((state_62681[(4)])));

} else {
throw ex__56230__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__56228__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__63968 = state_62681;
state_62681 = G__63968;
continue;
} else {
return ret_value__56228__auto__;
}
break;
}
});
cljs$core$async$state_machine__56227__auto__ = function(state_62681){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__56227__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__56227__auto____1.call(this,state_62681);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__56227__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__56227__auto____0;
cljs$core$async$state_machine__56227__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__56227__auto____1;
return cljs$core$async$state_machine__56227__auto__;
})()
})();
var state__56251__auto__ = (function (){var statearr_62703 = f__56250__auto__();
(statearr_62703[(6)] = c__56249__auto__);

return statearr_62703;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__56251__auto__);
}));

return c__56249__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__62705 = arguments.length;
switch (G__62705) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_63970 = (function (_){
var x__5393__auto__ = (((_ == null))?null:_);
var m__5394__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5394__auto__.call(null,_));
} else {
var m__5392__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5392__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_63970(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_63971 = (function (m,ch,close_QMARK_){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5394__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__5392__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5392__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_63971(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_63972 = (function (m,ch){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5394__auto__.call(null,m,ch));
} else {
var m__5392__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5392__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_63972(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_63973 = (function (m){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5394__auto__.call(null,m));
} else {
var m__5392__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5392__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_63973(m);
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async62706 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async62706 = (function (ch,cs,meta62707){
this.ch = ch;
this.cs = cs;
this.meta62707 = meta62707;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async62706.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_62708,meta62707__$1){
var self__ = this;
var _62708__$1 = this;
return (new cljs.core.async.t_cljs$core$async62706(self__.ch,self__.cs,meta62707__$1));
}));

(cljs.core.async.t_cljs$core$async62706.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_62708){
var self__ = this;
var _62708__$1 = this;
return self__.meta62707;
}));

(cljs.core.async.t_cljs$core$async62706.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async62706.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async62706.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async62706.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async62706.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async62706.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async62706.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta62707","meta62707",-861958516,null)], null);
}));

(cljs.core.async.t_cljs$core$async62706.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async62706.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async62706");

(cljs.core.async.t_cljs$core$async62706.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async62706");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async62706.
 */
cljs.core.async.__GT_t_cljs$core$async62706 = (function cljs$core$async$mult_$___GT_t_cljs$core$async62706(ch__$1,cs__$1,meta62707){
return (new cljs.core.async.t_cljs$core$async62706(ch__$1,cs__$1,meta62707));
});

}

return (new cljs.core.async.t_cljs$core$async62706(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__56249__auto___63974 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__56250__auto__ = (function (){var switch__56226__auto__ = (function (state_62841){
var state_val_62842 = (state_62841[(1)]);
if((state_val_62842 === (7))){
var inst_62837 = (state_62841[(2)]);
var state_62841__$1 = state_62841;
var statearr_62843_63975 = state_62841__$1;
(statearr_62843_63975[(2)] = inst_62837);

(statearr_62843_63975[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62842 === (20))){
var inst_62742 = (state_62841[(7)]);
var inst_62754 = cljs.core.first(inst_62742);
var inst_62755 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_62754,(0),null);
var inst_62756 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_62754,(1),null);
var state_62841__$1 = (function (){var statearr_62844 = state_62841;
(statearr_62844[(8)] = inst_62755);

return statearr_62844;
})();
if(cljs.core.truth_(inst_62756)){
var statearr_62845_63976 = state_62841__$1;
(statearr_62845_63976[(1)] = (22));

} else {
var statearr_62846_63977 = state_62841__$1;
(statearr_62846_63977[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62842 === (27))){
var inst_62784 = (state_62841[(9)]);
var inst_62791 = (state_62841[(10)]);
var inst_62711 = (state_62841[(11)]);
var inst_62786 = (state_62841[(12)]);
var inst_62791__$1 = cljs.core._nth(inst_62784,inst_62786);
var inst_62792 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_62791__$1,inst_62711,done);
var state_62841__$1 = (function (){var statearr_62847 = state_62841;
(statearr_62847[(10)] = inst_62791__$1);

return statearr_62847;
})();
if(cljs.core.truth_(inst_62792)){
var statearr_62848_63978 = state_62841__$1;
(statearr_62848_63978[(1)] = (30));

} else {
var statearr_62849_63980 = state_62841__$1;
(statearr_62849_63980[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62842 === (1))){
var state_62841__$1 = state_62841;
var statearr_62850_63981 = state_62841__$1;
(statearr_62850_63981[(2)] = null);

(statearr_62850_63981[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62842 === (24))){
var inst_62742 = (state_62841[(7)]);
var inst_62761 = (state_62841[(2)]);
var inst_62762 = cljs.core.next(inst_62742);
var inst_62720 = inst_62762;
var inst_62721 = null;
var inst_62722 = (0);
var inst_62723 = (0);
var state_62841__$1 = (function (){var statearr_62851 = state_62841;
(statearr_62851[(13)] = inst_62721);

(statearr_62851[(14)] = inst_62720);

(statearr_62851[(15)] = inst_62761);

(statearr_62851[(16)] = inst_62723);

(statearr_62851[(17)] = inst_62722);

return statearr_62851;
})();
var statearr_62852_63986 = state_62841__$1;
(statearr_62852_63986[(2)] = null);

(statearr_62852_63986[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62842 === (39))){
var state_62841__$1 = state_62841;
var statearr_62856_63987 = state_62841__$1;
(statearr_62856_63987[(2)] = null);

(statearr_62856_63987[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62842 === (4))){
var inst_62711 = (state_62841[(11)]);
var inst_62711__$1 = (state_62841[(2)]);
var inst_62712 = (inst_62711__$1 == null);
var state_62841__$1 = (function (){var statearr_62857 = state_62841;
(statearr_62857[(11)] = inst_62711__$1);

return statearr_62857;
})();
if(cljs.core.truth_(inst_62712)){
var statearr_62858_63988 = state_62841__$1;
(statearr_62858_63988[(1)] = (5));

} else {
var statearr_62859_63989 = state_62841__$1;
(statearr_62859_63989[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62842 === (15))){
var inst_62721 = (state_62841[(13)]);
var inst_62720 = (state_62841[(14)]);
var inst_62723 = (state_62841[(16)]);
var inst_62722 = (state_62841[(17)]);
var inst_62738 = (state_62841[(2)]);
var inst_62739 = (inst_62723 + (1));
var tmp62853 = inst_62721;
var tmp62854 = inst_62720;
var tmp62855 = inst_62722;
var inst_62720__$1 = tmp62854;
var inst_62721__$1 = tmp62853;
var inst_62722__$1 = tmp62855;
var inst_62723__$1 = inst_62739;
var state_62841__$1 = (function (){var statearr_62860 = state_62841;
(statearr_62860[(13)] = inst_62721__$1);

(statearr_62860[(14)] = inst_62720__$1);

(statearr_62860[(16)] = inst_62723__$1);

(statearr_62860[(17)] = inst_62722__$1);

(statearr_62860[(18)] = inst_62738);

return statearr_62860;
})();
var statearr_62861_63990 = state_62841__$1;
(statearr_62861_63990[(2)] = null);

(statearr_62861_63990[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62842 === (21))){
var inst_62765 = (state_62841[(2)]);
var state_62841__$1 = state_62841;
var statearr_62865_63991 = state_62841__$1;
(statearr_62865_63991[(2)] = inst_62765);

(statearr_62865_63991[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62842 === (31))){
var inst_62791 = (state_62841[(10)]);
var inst_62795 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_62791);
var state_62841__$1 = state_62841;
var statearr_62866_63992 = state_62841__$1;
(statearr_62866_63992[(2)] = inst_62795);

(statearr_62866_63992[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62842 === (32))){
var inst_62785 = (state_62841[(19)]);
var inst_62784 = (state_62841[(9)]);
var inst_62783 = (state_62841[(20)]);
var inst_62786 = (state_62841[(12)]);
var inst_62797 = (state_62841[(2)]);
var inst_62798 = (inst_62786 + (1));
var tmp62862 = inst_62785;
var tmp62863 = inst_62784;
var tmp62864 = inst_62783;
var inst_62783__$1 = tmp62864;
var inst_62784__$1 = tmp62863;
var inst_62785__$1 = tmp62862;
var inst_62786__$1 = inst_62798;
var state_62841__$1 = (function (){var statearr_62867 = state_62841;
(statearr_62867[(19)] = inst_62785__$1);

(statearr_62867[(21)] = inst_62797);

(statearr_62867[(9)] = inst_62784__$1);

(statearr_62867[(20)] = inst_62783__$1);

(statearr_62867[(12)] = inst_62786__$1);

return statearr_62867;
})();
var statearr_62868_63993 = state_62841__$1;
(statearr_62868_63993[(2)] = null);

(statearr_62868_63993[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62842 === (40))){
var inst_62810 = (state_62841[(22)]);
var inst_62814 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_62810);
var state_62841__$1 = state_62841;
var statearr_62869_63994 = state_62841__$1;
(statearr_62869_63994[(2)] = inst_62814);

(statearr_62869_63994[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62842 === (33))){
var inst_62801 = (state_62841[(23)]);
var inst_62803 = cljs.core.chunked_seq_QMARK_(inst_62801);
var state_62841__$1 = state_62841;
if(inst_62803){
var statearr_62870_63995 = state_62841__$1;
(statearr_62870_63995[(1)] = (36));

} else {
var statearr_62871_63996 = state_62841__$1;
(statearr_62871_63996[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62842 === (13))){
var inst_62732 = (state_62841[(24)]);
var inst_62735 = cljs.core.async.close_BANG_(inst_62732);
var state_62841__$1 = state_62841;
var statearr_62872_63997 = state_62841__$1;
(statearr_62872_63997[(2)] = inst_62735);

(statearr_62872_63997[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62842 === (22))){
var inst_62755 = (state_62841[(8)]);
var inst_62758 = cljs.core.async.close_BANG_(inst_62755);
var state_62841__$1 = state_62841;
var statearr_62873_63998 = state_62841__$1;
(statearr_62873_63998[(2)] = inst_62758);

(statearr_62873_63998[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62842 === (36))){
var inst_62801 = (state_62841[(23)]);
var inst_62805 = cljs.core.chunk_first(inst_62801);
var inst_62806 = cljs.core.chunk_rest(inst_62801);
var inst_62807 = cljs.core.count(inst_62805);
var inst_62783 = inst_62806;
var inst_62784 = inst_62805;
var inst_62785 = inst_62807;
var inst_62786 = (0);
var state_62841__$1 = (function (){var statearr_62874 = state_62841;
(statearr_62874[(19)] = inst_62785);

(statearr_62874[(9)] = inst_62784);

(statearr_62874[(20)] = inst_62783);

(statearr_62874[(12)] = inst_62786);

return statearr_62874;
})();
var statearr_62875_63999 = state_62841__$1;
(statearr_62875_63999[(2)] = null);

(statearr_62875_63999[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62842 === (41))){
var inst_62801 = (state_62841[(23)]);
var inst_62816 = (state_62841[(2)]);
var inst_62817 = cljs.core.next(inst_62801);
var inst_62783 = inst_62817;
var inst_62784 = null;
var inst_62785 = (0);
var inst_62786 = (0);
var state_62841__$1 = (function (){var statearr_62876 = state_62841;
(statearr_62876[(19)] = inst_62785);

(statearr_62876[(9)] = inst_62784);

(statearr_62876[(25)] = inst_62816);

(statearr_62876[(20)] = inst_62783);

(statearr_62876[(12)] = inst_62786);

return statearr_62876;
})();
var statearr_62877_64002 = state_62841__$1;
(statearr_62877_64002[(2)] = null);

(statearr_62877_64002[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62842 === (43))){
var state_62841__$1 = state_62841;
var statearr_62878_64003 = state_62841__$1;
(statearr_62878_64003[(2)] = null);

(statearr_62878_64003[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62842 === (29))){
var inst_62825 = (state_62841[(2)]);
var state_62841__$1 = state_62841;
var statearr_62879_64004 = state_62841__$1;
(statearr_62879_64004[(2)] = inst_62825);

(statearr_62879_64004[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62842 === (44))){
var inst_62834 = (state_62841[(2)]);
var state_62841__$1 = (function (){var statearr_62880 = state_62841;
(statearr_62880[(26)] = inst_62834);

return statearr_62880;
})();
var statearr_62881_64005 = state_62841__$1;
(statearr_62881_64005[(2)] = null);

(statearr_62881_64005[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62842 === (6))){
var inst_62775 = (state_62841[(27)]);
var inst_62774 = cljs.core.deref(cs);
var inst_62775__$1 = cljs.core.keys(inst_62774);
var inst_62776 = cljs.core.count(inst_62775__$1);
var inst_62777 = cljs.core.reset_BANG_(dctr,inst_62776);
var inst_62782 = cljs.core.seq(inst_62775__$1);
var inst_62783 = inst_62782;
var inst_62784 = null;
var inst_62785 = (0);
var inst_62786 = (0);
var state_62841__$1 = (function (){var statearr_62882 = state_62841;
(statearr_62882[(27)] = inst_62775__$1);

(statearr_62882[(28)] = inst_62777);

(statearr_62882[(19)] = inst_62785);

(statearr_62882[(9)] = inst_62784);

(statearr_62882[(20)] = inst_62783);

(statearr_62882[(12)] = inst_62786);

return statearr_62882;
})();
var statearr_62883_64008 = state_62841__$1;
(statearr_62883_64008[(2)] = null);

(statearr_62883_64008[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62842 === (28))){
var inst_62801 = (state_62841[(23)]);
var inst_62783 = (state_62841[(20)]);
var inst_62801__$1 = cljs.core.seq(inst_62783);
var state_62841__$1 = (function (){var statearr_62884 = state_62841;
(statearr_62884[(23)] = inst_62801__$1);

return statearr_62884;
})();
if(inst_62801__$1){
var statearr_62885_64009 = state_62841__$1;
(statearr_62885_64009[(1)] = (33));

} else {
var statearr_62886_64010 = state_62841__$1;
(statearr_62886_64010[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62842 === (25))){
var inst_62785 = (state_62841[(19)]);
var inst_62786 = (state_62841[(12)]);
var inst_62788 = (inst_62786 < inst_62785);
var inst_62789 = inst_62788;
var state_62841__$1 = state_62841;
if(cljs.core.truth_(inst_62789)){
var statearr_62887_64011 = state_62841__$1;
(statearr_62887_64011[(1)] = (27));

} else {
var statearr_62888_64012 = state_62841__$1;
(statearr_62888_64012[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62842 === (34))){
var state_62841__$1 = state_62841;
var statearr_62889_64013 = state_62841__$1;
(statearr_62889_64013[(2)] = null);

(statearr_62889_64013[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62842 === (17))){
var state_62841__$1 = state_62841;
var statearr_62890_64014 = state_62841__$1;
(statearr_62890_64014[(2)] = null);

(statearr_62890_64014[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62842 === (3))){
var inst_62839 = (state_62841[(2)]);
var state_62841__$1 = state_62841;
return cljs.core.async.impl.ioc_helpers.return_chan(state_62841__$1,inst_62839);
} else {
if((state_val_62842 === (12))){
var inst_62770 = (state_62841[(2)]);
var state_62841__$1 = state_62841;
var statearr_62891_64015 = state_62841__$1;
(statearr_62891_64015[(2)] = inst_62770);

(statearr_62891_64015[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62842 === (2))){
var state_62841__$1 = state_62841;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_62841__$1,(4),ch);
} else {
if((state_val_62842 === (23))){
var state_62841__$1 = state_62841;
var statearr_62892_64016 = state_62841__$1;
(statearr_62892_64016[(2)] = null);

(statearr_62892_64016[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62842 === (35))){
var inst_62823 = (state_62841[(2)]);
var state_62841__$1 = state_62841;
var statearr_62893_64017 = state_62841__$1;
(statearr_62893_64017[(2)] = inst_62823);

(statearr_62893_64017[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62842 === (19))){
var inst_62742 = (state_62841[(7)]);
var inst_62746 = cljs.core.chunk_first(inst_62742);
var inst_62747 = cljs.core.chunk_rest(inst_62742);
var inst_62748 = cljs.core.count(inst_62746);
var inst_62720 = inst_62747;
var inst_62721 = inst_62746;
var inst_62722 = inst_62748;
var inst_62723 = (0);
var state_62841__$1 = (function (){var statearr_62894 = state_62841;
(statearr_62894[(13)] = inst_62721);

(statearr_62894[(14)] = inst_62720);

(statearr_62894[(16)] = inst_62723);

(statearr_62894[(17)] = inst_62722);

return statearr_62894;
})();
var statearr_62895_64019 = state_62841__$1;
(statearr_62895_64019[(2)] = null);

(statearr_62895_64019[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62842 === (11))){
var inst_62720 = (state_62841[(14)]);
var inst_62742 = (state_62841[(7)]);
var inst_62742__$1 = cljs.core.seq(inst_62720);
var state_62841__$1 = (function (){var statearr_62896 = state_62841;
(statearr_62896[(7)] = inst_62742__$1);

return statearr_62896;
})();
if(inst_62742__$1){
var statearr_62897_64021 = state_62841__$1;
(statearr_62897_64021[(1)] = (16));

} else {
var statearr_62898_64022 = state_62841__$1;
(statearr_62898_64022[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62842 === (9))){
var inst_62772 = (state_62841[(2)]);
var state_62841__$1 = state_62841;
var statearr_62899_64023 = state_62841__$1;
(statearr_62899_64023[(2)] = inst_62772);

(statearr_62899_64023[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62842 === (5))){
var inst_62718 = cljs.core.deref(cs);
var inst_62719 = cljs.core.seq(inst_62718);
var inst_62720 = inst_62719;
var inst_62721 = null;
var inst_62722 = (0);
var inst_62723 = (0);
var state_62841__$1 = (function (){var statearr_62900 = state_62841;
(statearr_62900[(13)] = inst_62721);

(statearr_62900[(14)] = inst_62720);

(statearr_62900[(16)] = inst_62723);

(statearr_62900[(17)] = inst_62722);

return statearr_62900;
})();
var statearr_62901_64024 = state_62841__$1;
(statearr_62901_64024[(2)] = null);

(statearr_62901_64024[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62842 === (14))){
var state_62841__$1 = state_62841;
var statearr_62902_64025 = state_62841__$1;
(statearr_62902_64025[(2)] = null);

(statearr_62902_64025[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62842 === (45))){
var inst_62831 = (state_62841[(2)]);
var state_62841__$1 = state_62841;
var statearr_62903_64026 = state_62841__$1;
(statearr_62903_64026[(2)] = inst_62831);

(statearr_62903_64026[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62842 === (26))){
var inst_62775 = (state_62841[(27)]);
var inst_62827 = (state_62841[(2)]);
var inst_62828 = cljs.core.seq(inst_62775);
var state_62841__$1 = (function (){var statearr_62904 = state_62841;
(statearr_62904[(29)] = inst_62827);

return statearr_62904;
})();
if(inst_62828){
var statearr_62905_64027 = state_62841__$1;
(statearr_62905_64027[(1)] = (42));

} else {
var statearr_62906_64028 = state_62841__$1;
(statearr_62906_64028[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62842 === (16))){
var inst_62742 = (state_62841[(7)]);
var inst_62744 = cljs.core.chunked_seq_QMARK_(inst_62742);
var state_62841__$1 = state_62841;
if(inst_62744){
var statearr_62907_64029 = state_62841__$1;
(statearr_62907_64029[(1)] = (19));

} else {
var statearr_62908_64030 = state_62841__$1;
(statearr_62908_64030[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62842 === (38))){
var inst_62820 = (state_62841[(2)]);
var state_62841__$1 = state_62841;
var statearr_62909_64031 = state_62841__$1;
(statearr_62909_64031[(2)] = inst_62820);

(statearr_62909_64031[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62842 === (30))){
var state_62841__$1 = state_62841;
var statearr_62910_64032 = state_62841__$1;
(statearr_62910_64032[(2)] = null);

(statearr_62910_64032[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62842 === (10))){
var inst_62721 = (state_62841[(13)]);
var inst_62723 = (state_62841[(16)]);
var inst_62731 = cljs.core._nth(inst_62721,inst_62723);
var inst_62732 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_62731,(0),null);
var inst_62733 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_62731,(1),null);
var state_62841__$1 = (function (){var statearr_62911 = state_62841;
(statearr_62911[(24)] = inst_62732);

return statearr_62911;
})();
if(cljs.core.truth_(inst_62733)){
var statearr_62912_64034 = state_62841__$1;
(statearr_62912_64034[(1)] = (13));

} else {
var statearr_62913_64035 = state_62841__$1;
(statearr_62913_64035[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62842 === (18))){
var inst_62768 = (state_62841[(2)]);
var state_62841__$1 = state_62841;
var statearr_62914_64036 = state_62841__$1;
(statearr_62914_64036[(2)] = inst_62768);

(statearr_62914_64036[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62842 === (42))){
var state_62841__$1 = state_62841;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_62841__$1,(45),dchan);
} else {
if((state_val_62842 === (37))){
var inst_62810 = (state_62841[(22)]);
var inst_62801 = (state_62841[(23)]);
var inst_62711 = (state_62841[(11)]);
var inst_62810__$1 = cljs.core.first(inst_62801);
var inst_62811 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_62810__$1,inst_62711,done);
var state_62841__$1 = (function (){var statearr_62915 = state_62841;
(statearr_62915[(22)] = inst_62810__$1);

return statearr_62915;
})();
if(cljs.core.truth_(inst_62811)){
var statearr_62916_64037 = state_62841__$1;
(statearr_62916_64037[(1)] = (39));

} else {
var statearr_62917_64038 = state_62841__$1;
(statearr_62917_64038[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62842 === (8))){
var inst_62723 = (state_62841[(16)]);
var inst_62722 = (state_62841[(17)]);
var inst_62725 = (inst_62723 < inst_62722);
var inst_62726 = inst_62725;
var state_62841__$1 = state_62841;
if(cljs.core.truth_(inst_62726)){
var statearr_62918_64039 = state_62841__$1;
(statearr_62918_64039[(1)] = (10));

} else {
var statearr_62919_64044 = state_62841__$1;
(statearr_62919_64044[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__56227__auto__ = null;
var cljs$core$async$mult_$_state_machine__56227__auto____0 = (function (){
var statearr_62920 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_62920[(0)] = cljs$core$async$mult_$_state_machine__56227__auto__);

(statearr_62920[(1)] = (1));

return statearr_62920;
});
var cljs$core$async$mult_$_state_machine__56227__auto____1 = (function (state_62841){
while(true){
var ret_value__56228__auto__ = (function (){try{while(true){
var result__56229__auto__ = switch__56226__auto__(state_62841);
if(cljs.core.keyword_identical_QMARK_(result__56229__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__56229__auto__;
}
break;
}
}catch (e62921){var ex__56230__auto__ = e62921;
var statearr_62922_64045 = state_62841;
(statearr_62922_64045[(2)] = ex__56230__auto__);


if(cljs.core.seq((state_62841[(4)]))){
var statearr_62923_64046 = state_62841;
(statearr_62923_64046[(1)] = cljs.core.first((state_62841[(4)])));

} else {
throw ex__56230__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__56228__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__64047 = state_62841;
state_62841 = G__64047;
continue;
} else {
return ret_value__56228__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__56227__auto__ = function(state_62841){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__56227__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__56227__auto____1.call(this,state_62841);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__56227__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__56227__auto____0;
cljs$core$async$mult_$_state_machine__56227__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__56227__auto____1;
return cljs$core$async$mult_$_state_machine__56227__auto__;
})()
})();
var state__56251__auto__ = (function (){var statearr_62924 = f__56250__auto__();
(statearr_62924[(6)] = c__56249__auto___63974);

return statearr_62924;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__56251__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__62926 = arguments.length;
switch (G__62926) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_64049 = (function (m,ch){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5394__auto__.call(null,m,ch));
} else {
var m__5392__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5392__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_64049(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_64050 = (function (m,ch){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5394__auto__.call(null,m,ch));
} else {
var m__5392__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5392__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_64050(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_64058 = (function (m){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5394__auto__.call(null,m));
} else {
var m__5392__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5392__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_64058(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_64062 = (function (m,state_map){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5394__auto__.call(null,m,state_map));
} else {
var m__5392__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5392__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_64062(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_64066 = (function (m,mode){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5394__auto__.call(null,m,mode));
} else {
var m__5392__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5392__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_64066(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___64074 = arguments.length;
var i__5770__auto___64075 = (0);
while(true){
if((i__5770__auto___64075 < len__5769__auto___64074)){
args__5775__auto__.push((arguments[i__5770__auto___64075]));

var G__64076 = (i__5770__auto___64075 + (1));
i__5770__auto___64075 = G__64076;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((3) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5776__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__62931){
var map__62932 = p__62931;
var map__62932__$1 = cljs.core.__destructure_map(map__62932);
var opts = map__62932__$1;
var statearr_62933_64077 = state;
(statearr_62933_64077[(1)] = cont_block);


var temp__5804__auto__ = cljs.core.async.do_alts((function (val){
var statearr_62934_64078 = state;
(statearr_62934_64078[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5804__auto__)){
var cb = temp__5804__auto__;
var statearr_62935_64079 = state;
(statearr_62935_64079[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq62927){
var G__62928 = cljs.core.first(seq62927);
var seq62927__$1 = cljs.core.next(seq62927);
var G__62929 = cljs.core.first(seq62927__$1);
var seq62927__$2 = cljs.core.next(seq62927__$1);
var G__62930 = cljs.core.first(seq62927__$2);
var seq62927__$3 = cljs.core.next(seq62927__$2);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__62928,G__62929,G__62930,seq62927__$3);
}));

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async62936 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async62936 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta62937){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta62937 = meta62937;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async62936.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_62938,meta62937__$1){
var self__ = this;
var _62938__$1 = this;
return (new cljs.core.async.t_cljs$core$async62936(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta62937__$1));
}));

(cljs.core.async.t_cljs$core$async62936.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_62938){
var self__ = this;
var _62938__$1 = this;
return self__.meta62937;
}));

(cljs.core.async.t_cljs$core$async62936.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async62936.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async62936.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async62936.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async62936.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async62936.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async62936.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async62936.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async62936.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta62937","meta62937",-1269326361,null)], null);
}));

(cljs.core.async.t_cljs$core$async62936.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async62936.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async62936");

(cljs.core.async.t_cljs$core$async62936.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async62936");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async62936.
 */
cljs.core.async.__GT_t_cljs$core$async62936 = (function cljs$core$async$mix_$___GT_t_cljs$core$async62936(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta62937){
return (new cljs.core.async.t_cljs$core$async62936(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta62937));
});

}

return (new cljs.core.async.t_cljs$core$async62936(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__56249__auto___64086 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__56250__auto__ = (function (){var switch__56226__auto__ = (function (state_63006){
var state_val_63007 = (state_63006[(1)]);
if((state_val_63007 === (7))){
var inst_62966 = (state_63006[(2)]);
var state_63006__$1 = state_63006;
if(cljs.core.truth_(inst_62966)){
var statearr_63008_64087 = state_63006__$1;
(statearr_63008_64087[(1)] = (8));

} else {
var statearr_63009_64088 = state_63006__$1;
(statearr_63009_64088[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63007 === (20))){
var inst_62959 = (state_63006[(7)]);
var state_63006__$1 = state_63006;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_63006__$1,(23),out,inst_62959);
} else {
if((state_val_63007 === (1))){
var inst_62942 = calc_state();
var inst_62943 = cljs.core.__destructure_map(inst_62942);
var inst_62944 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_62943,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_62945 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_62943,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_62946 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_62943,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_62947 = inst_62942;
var state_63006__$1 = (function (){var statearr_63010 = state_63006;
(statearr_63010[(8)] = inst_62946);

(statearr_63010[(9)] = inst_62947);

(statearr_63010[(10)] = inst_62945);

(statearr_63010[(11)] = inst_62944);

return statearr_63010;
})();
var statearr_63011_64089 = state_63006__$1;
(statearr_63011_64089[(2)] = null);

(statearr_63011_64089[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63007 === (24))){
var inst_62950 = (state_63006[(12)]);
var inst_62947 = inst_62950;
var state_63006__$1 = (function (){var statearr_63012 = state_63006;
(statearr_63012[(9)] = inst_62947);

return statearr_63012;
})();
var statearr_63013_64090 = state_63006__$1;
(statearr_63013_64090[(2)] = null);

(statearr_63013_64090[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63007 === (4))){
var inst_62959 = (state_63006[(7)]);
var inst_62961 = (state_63006[(13)]);
var inst_62958 = (state_63006[(2)]);
var inst_62959__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_62958,(0),null);
var inst_62960 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_62958,(1),null);
var inst_62961__$1 = (inst_62959__$1 == null);
var state_63006__$1 = (function (){var statearr_63014 = state_63006;
(statearr_63014[(7)] = inst_62959__$1);

(statearr_63014[(13)] = inst_62961__$1);

(statearr_63014[(14)] = inst_62960);

return statearr_63014;
})();
if(cljs.core.truth_(inst_62961__$1)){
var statearr_63015_64096 = state_63006__$1;
(statearr_63015_64096[(1)] = (5));

} else {
var statearr_63016_64097 = state_63006__$1;
(statearr_63016_64097[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63007 === (15))){
var inst_62951 = (state_63006[(15)]);
var inst_62980 = (state_63006[(16)]);
var inst_62980__$1 = cljs.core.empty_QMARK_(inst_62951);
var state_63006__$1 = (function (){var statearr_63017 = state_63006;
(statearr_63017[(16)] = inst_62980__$1);

return statearr_63017;
})();
if(inst_62980__$1){
var statearr_63018_64098 = state_63006__$1;
(statearr_63018_64098[(1)] = (17));

} else {
var statearr_63019_64099 = state_63006__$1;
(statearr_63019_64099[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63007 === (21))){
var inst_62950 = (state_63006[(12)]);
var inst_62947 = inst_62950;
var state_63006__$1 = (function (){var statearr_63020 = state_63006;
(statearr_63020[(9)] = inst_62947);

return statearr_63020;
})();
var statearr_63021_64100 = state_63006__$1;
(statearr_63021_64100[(2)] = null);

(statearr_63021_64100[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63007 === (13))){
var inst_62973 = (state_63006[(2)]);
var inst_62974 = calc_state();
var inst_62947 = inst_62974;
var state_63006__$1 = (function (){var statearr_63022 = state_63006;
(statearr_63022[(17)] = inst_62973);

(statearr_63022[(9)] = inst_62947);

return statearr_63022;
})();
var statearr_63023_64102 = state_63006__$1;
(statearr_63023_64102[(2)] = null);

(statearr_63023_64102[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63007 === (22))){
var inst_63000 = (state_63006[(2)]);
var state_63006__$1 = state_63006;
var statearr_63024_64103 = state_63006__$1;
(statearr_63024_64103[(2)] = inst_63000);

(statearr_63024_64103[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63007 === (6))){
var inst_62960 = (state_63006[(14)]);
var inst_62964 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_62960,change);
var state_63006__$1 = state_63006;
var statearr_63025_64108 = state_63006__$1;
(statearr_63025_64108[(2)] = inst_62964);

(statearr_63025_64108[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63007 === (25))){
var state_63006__$1 = state_63006;
var statearr_63026_64109 = state_63006__$1;
(statearr_63026_64109[(2)] = null);

(statearr_63026_64109[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63007 === (17))){
var inst_62960 = (state_63006[(14)]);
var inst_62952 = (state_63006[(18)]);
var inst_62982 = (inst_62952.cljs$core$IFn$_invoke$arity$1 ? inst_62952.cljs$core$IFn$_invoke$arity$1(inst_62960) : inst_62952.call(null,inst_62960));
var inst_62983 = cljs.core.not(inst_62982);
var state_63006__$1 = state_63006;
var statearr_63027_64110 = state_63006__$1;
(statearr_63027_64110[(2)] = inst_62983);

(statearr_63027_64110[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63007 === (3))){
var inst_63004 = (state_63006[(2)]);
var state_63006__$1 = state_63006;
return cljs.core.async.impl.ioc_helpers.return_chan(state_63006__$1,inst_63004);
} else {
if((state_val_63007 === (12))){
var state_63006__$1 = state_63006;
var statearr_63028_64111 = state_63006__$1;
(statearr_63028_64111[(2)] = null);

(statearr_63028_64111[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63007 === (2))){
var inst_62947 = (state_63006[(9)]);
var inst_62950 = (state_63006[(12)]);
var inst_62950__$1 = cljs.core.__destructure_map(inst_62947);
var inst_62951 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_62950__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_62952 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_62950__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_62953 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_62950__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_63006__$1 = (function (){var statearr_63029 = state_63006;
(statearr_63029[(15)] = inst_62951);

(statearr_63029[(12)] = inst_62950__$1);

(statearr_63029[(18)] = inst_62952);

return statearr_63029;
})();
return cljs.core.async.ioc_alts_BANG_(state_63006__$1,(4),inst_62953);
} else {
if((state_val_63007 === (23))){
var inst_62991 = (state_63006[(2)]);
var state_63006__$1 = state_63006;
if(cljs.core.truth_(inst_62991)){
var statearr_63030_64112 = state_63006__$1;
(statearr_63030_64112[(1)] = (24));

} else {
var statearr_63031_64113 = state_63006__$1;
(statearr_63031_64113[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63007 === (19))){
var inst_62986 = (state_63006[(2)]);
var state_63006__$1 = state_63006;
var statearr_63032_64114 = state_63006__$1;
(statearr_63032_64114[(2)] = inst_62986);

(statearr_63032_64114[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63007 === (11))){
var inst_62960 = (state_63006[(14)]);
var inst_62970 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_62960);
var state_63006__$1 = state_63006;
var statearr_63033_64115 = state_63006__$1;
(statearr_63033_64115[(2)] = inst_62970);

(statearr_63033_64115[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63007 === (9))){
var inst_62977 = (state_63006[(19)]);
var inst_62951 = (state_63006[(15)]);
var inst_62960 = (state_63006[(14)]);
var inst_62977__$1 = (inst_62951.cljs$core$IFn$_invoke$arity$1 ? inst_62951.cljs$core$IFn$_invoke$arity$1(inst_62960) : inst_62951.call(null,inst_62960));
var state_63006__$1 = (function (){var statearr_63034 = state_63006;
(statearr_63034[(19)] = inst_62977__$1);

return statearr_63034;
})();
if(cljs.core.truth_(inst_62977__$1)){
var statearr_63035_64116 = state_63006__$1;
(statearr_63035_64116[(1)] = (14));

} else {
var statearr_63036_64117 = state_63006__$1;
(statearr_63036_64117[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63007 === (5))){
var inst_62961 = (state_63006[(13)]);
var state_63006__$1 = state_63006;
var statearr_63037_64118 = state_63006__$1;
(statearr_63037_64118[(2)] = inst_62961);

(statearr_63037_64118[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63007 === (14))){
var inst_62977 = (state_63006[(19)]);
var state_63006__$1 = state_63006;
var statearr_63038_64119 = state_63006__$1;
(statearr_63038_64119[(2)] = inst_62977);

(statearr_63038_64119[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63007 === (26))){
var inst_62996 = (state_63006[(2)]);
var state_63006__$1 = state_63006;
var statearr_63039_64120 = state_63006__$1;
(statearr_63039_64120[(2)] = inst_62996);

(statearr_63039_64120[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63007 === (16))){
var inst_62988 = (state_63006[(2)]);
var state_63006__$1 = state_63006;
if(cljs.core.truth_(inst_62988)){
var statearr_63040_64121 = state_63006__$1;
(statearr_63040_64121[(1)] = (20));

} else {
var statearr_63041_64122 = state_63006__$1;
(statearr_63041_64122[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63007 === (10))){
var inst_63002 = (state_63006[(2)]);
var state_63006__$1 = state_63006;
var statearr_63042_64123 = state_63006__$1;
(statearr_63042_64123[(2)] = inst_63002);

(statearr_63042_64123[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63007 === (18))){
var inst_62980 = (state_63006[(16)]);
var state_63006__$1 = state_63006;
var statearr_63043_64124 = state_63006__$1;
(statearr_63043_64124[(2)] = inst_62980);

(statearr_63043_64124[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63007 === (8))){
var inst_62959 = (state_63006[(7)]);
var inst_62968 = (inst_62959 == null);
var state_63006__$1 = state_63006;
if(cljs.core.truth_(inst_62968)){
var statearr_63044_64126 = state_63006__$1;
(statearr_63044_64126[(1)] = (11));

} else {
var statearr_63045_64127 = state_63006__$1;
(statearr_63045_64127[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__56227__auto__ = null;
var cljs$core$async$mix_$_state_machine__56227__auto____0 = (function (){
var statearr_63046 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_63046[(0)] = cljs$core$async$mix_$_state_machine__56227__auto__);

(statearr_63046[(1)] = (1));

return statearr_63046;
});
var cljs$core$async$mix_$_state_machine__56227__auto____1 = (function (state_63006){
while(true){
var ret_value__56228__auto__ = (function (){try{while(true){
var result__56229__auto__ = switch__56226__auto__(state_63006);
if(cljs.core.keyword_identical_QMARK_(result__56229__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__56229__auto__;
}
break;
}
}catch (e63047){var ex__56230__auto__ = e63047;
var statearr_63048_64131 = state_63006;
(statearr_63048_64131[(2)] = ex__56230__auto__);


if(cljs.core.seq((state_63006[(4)]))){
var statearr_63049_64132 = state_63006;
(statearr_63049_64132[(1)] = cljs.core.first((state_63006[(4)])));

} else {
throw ex__56230__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__56228__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__64133 = state_63006;
state_63006 = G__64133;
continue;
} else {
return ret_value__56228__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__56227__auto__ = function(state_63006){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__56227__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__56227__auto____1.call(this,state_63006);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__56227__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__56227__auto____0;
cljs$core$async$mix_$_state_machine__56227__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__56227__auto____1;
return cljs$core$async$mix_$_state_machine__56227__auto__;
})()
})();
var state__56251__auto__ = (function (){var statearr_63050 = f__56250__auto__();
(statearr_63050[(6)] = c__56249__auto___64086);

return statearr_63050;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__56251__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_64134 = (function (p,v,ch,close_QMARK_){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5394__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__5392__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5392__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_64134(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_64135 = (function (p,v,ch){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5394__auto__.call(null,p,v,ch));
} else {
var m__5392__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5392__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_64135(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_64137 = (function() {
var G__64138 = null;
var G__64138__1 = (function (p){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5394__auto__.call(null,p));
} else {
var m__5392__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5392__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__64138__2 = (function (p,v){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5394__auto__.call(null,p,v));
} else {
var m__5392__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5392__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__64138 = function(p,v){
switch(arguments.length){
case 1:
return G__64138__1.call(this,p);
case 2:
return G__64138__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__64138.cljs$core$IFn$_invoke$arity$1 = G__64138__1;
G__64138.cljs$core$IFn$_invoke$arity$2 = G__64138__2;
return G__64138;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__63052 = arguments.length;
switch (G__63052) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_64137(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_64137(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__63055 = arguments.length;
switch (G__63055) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__5045__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__63053_SHARP_){
if(cljs.core.truth_((p1__63053_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__63053_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__63053_SHARP_.call(null,topic)))){
return p1__63053_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__63053_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async63056 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async63056 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta63057){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta63057 = meta63057;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async63056.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_63058,meta63057__$1){
var self__ = this;
var _63058__$1 = this;
return (new cljs.core.async.t_cljs$core$async63056(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta63057__$1));
}));

(cljs.core.async.t_cljs$core$async63056.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_63058){
var self__ = this;
var _63058__$1 = this;
return self__.meta63057;
}));

(cljs.core.async.t_cljs$core$async63056.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async63056.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async63056.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async63056.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async63056.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5804__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5804__auto__)){
var m = temp__5804__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async63056.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async63056.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async63056.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta63057","meta63057",-1942843138,null)], null);
}));

(cljs.core.async.t_cljs$core$async63056.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async63056.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async63056");

(cljs.core.async.t_cljs$core$async63056.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async63056");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async63056.
 */
cljs.core.async.__GT_t_cljs$core$async63056 = (function cljs$core$async$__GT_t_cljs$core$async63056(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta63057){
return (new cljs.core.async.t_cljs$core$async63056(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta63057));
});

}

return (new cljs.core.async.t_cljs$core$async63056(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__56249__auto___64151 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__56250__auto__ = (function (){var switch__56226__auto__ = (function (state_63130){
var state_val_63131 = (state_63130[(1)]);
if((state_val_63131 === (7))){
var inst_63126 = (state_63130[(2)]);
var state_63130__$1 = state_63130;
var statearr_63132_64152 = state_63130__$1;
(statearr_63132_64152[(2)] = inst_63126);

(statearr_63132_64152[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63131 === (20))){
var state_63130__$1 = state_63130;
var statearr_63133_64153 = state_63130__$1;
(statearr_63133_64153[(2)] = null);

(statearr_63133_64153[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63131 === (1))){
var state_63130__$1 = state_63130;
var statearr_63134_64154 = state_63130__$1;
(statearr_63134_64154[(2)] = null);

(statearr_63134_64154[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63131 === (24))){
var inst_63109 = (state_63130[(7)]);
var inst_63118 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_63109);
var state_63130__$1 = state_63130;
var statearr_63135_64155 = state_63130__$1;
(statearr_63135_64155[(2)] = inst_63118);

(statearr_63135_64155[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63131 === (4))){
var inst_63061 = (state_63130[(8)]);
var inst_63061__$1 = (state_63130[(2)]);
var inst_63062 = (inst_63061__$1 == null);
var state_63130__$1 = (function (){var statearr_63136 = state_63130;
(statearr_63136[(8)] = inst_63061__$1);

return statearr_63136;
})();
if(cljs.core.truth_(inst_63062)){
var statearr_63137_64156 = state_63130__$1;
(statearr_63137_64156[(1)] = (5));

} else {
var statearr_63138_64157 = state_63130__$1;
(statearr_63138_64157[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63131 === (15))){
var inst_63103 = (state_63130[(2)]);
var state_63130__$1 = state_63130;
var statearr_63139_64158 = state_63130__$1;
(statearr_63139_64158[(2)] = inst_63103);

(statearr_63139_64158[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63131 === (21))){
var inst_63123 = (state_63130[(2)]);
var state_63130__$1 = (function (){var statearr_63140 = state_63130;
(statearr_63140[(9)] = inst_63123);

return statearr_63140;
})();
var statearr_63141_64159 = state_63130__$1;
(statearr_63141_64159[(2)] = null);

(statearr_63141_64159[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63131 === (13))){
var inst_63085 = (state_63130[(10)]);
var inst_63087 = cljs.core.chunked_seq_QMARK_(inst_63085);
var state_63130__$1 = state_63130;
if(inst_63087){
var statearr_63142_64160 = state_63130__$1;
(statearr_63142_64160[(1)] = (16));

} else {
var statearr_63143_64161 = state_63130__$1;
(statearr_63143_64161[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63131 === (22))){
var inst_63115 = (state_63130[(2)]);
var state_63130__$1 = state_63130;
if(cljs.core.truth_(inst_63115)){
var statearr_63144_64163 = state_63130__$1;
(statearr_63144_64163[(1)] = (23));

} else {
var statearr_63145_64164 = state_63130__$1;
(statearr_63145_64164[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63131 === (6))){
var inst_63061 = (state_63130[(8)]);
var inst_63109 = (state_63130[(7)]);
var inst_63111 = (state_63130[(11)]);
var inst_63109__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_63061) : topic_fn.call(null,inst_63061));
var inst_63110 = cljs.core.deref(mults);
var inst_63111__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_63110,inst_63109__$1);
var state_63130__$1 = (function (){var statearr_63146 = state_63130;
(statearr_63146[(7)] = inst_63109__$1);

(statearr_63146[(11)] = inst_63111__$1);

return statearr_63146;
})();
if(cljs.core.truth_(inst_63111__$1)){
var statearr_63147_64168 = state_63130__$1;
(statearr_63147_64168[(1)] = (19));

} else {
var statearr_63148_64169 = state_63130__$1;
(statearr_63148_64169[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63131 === (25))){
var inst_63120 = (state_63130[(2)]);
var state_63130__$1 = state_63130;
var statearr_63149_64170 = state_63130__$1;
(statearr_63149_64170[(2)] = inst_63120);

(statearr_63149_64170[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63131 === (17))){
var inst_63085 = (state_63130[(10)]);
var inst_63094 = cljs.core.first(inst_63085);
var inst_63095 = cljs.core.async.muxch_STAR_(inst_63094);
var inst_63096 = cljs.core.async.close_BANG_(inst_63095);
var inst_63097 = cljs.core.next(inst_63085);
var inst_63071 = inst_63097;
var inst_63072 = null;
var inst_63073 = (0);
var inst_63074 = (0);
var state_63130__$1 = (function (){var statearr_63150 = state_63130;
(statearr_63150[(12)] = inst_63072);

(statearr_63150[(13)] = inst_63071);

(statearr_63150[(14)] = inst_63073);

(statearr_63150[(15)] = inst_63074);

(statearr_63150[(16)] = inst_63096);

return statearr_63150;
})();
var statearr_63151_64171 = state_63130__$1;
(statearr_63151_64171[(2)] = null);

(statearr_63151_64171[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63131 === (3))){
var inst_63128 = (state_63130[(2)]);
var state_63130__$1 = state_63130;
return cljs.core.async.impl.ioc_helpers.return_chan(state_63130__$1,inst_63128);
} else {
if((state_val_63131 === (12))){
var inst_63105 = (state_63130[(2)]);
var state_63130__$1 = state_63130;
var statearr_63152_64172 = state_63130__$1;
(statearr_63152_64172[(2)] = inst_63105);

(statearr_63152_64172[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63131 === (2))){
var state_63130__$1 = state_63130;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_63130__$1,(4),ch);
} else {
if((state_val_63131 === (23))){
var state_63130__$1 = state_63130;
var statearr_63153_64173 = state_63130__$1;
(statearr_63153_64173[(2)] = null);

(statearr_63153_64173[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63131 === (19))){
var inst_63061 = (state_63130[(8)]);
var inst_63111 = (state_63130[(11)]);
var inst_63113 = cljs.core.async.muxch_STAR_(inst_63111);
var state_63130__$1 = state_63130;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_63130__$1,(22),inst_63113,inst_63061);
} else {
if((state_val_63131 === (11))){
var inst_63071 = (state_63130[(13)]);
var inst_63085 = (state_63130[(10)]);
var inst_63085__$1 = cljs.core.seq(inst_63071);
var state_63130__$1 = (function (){var statearr_63154 = state_63130;
(statearr_63154[(10)] = inst_63085__$1);

return statearr_63154;
})();
if(inst_63085__$1){
var statearr_63155_64175 = state_63130__$1;
(statearr_63155_64175[(1)] = (13));

} else {
var statearr_63156_64176 = state_63130__$1;
(statearr_63156_64176[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63131 === (9))){
var inst_63107 = (state_63130[(2)]);
var state_63130__$1 = state_63130;
var statearr_63157_64177 = state_63130__$1;
(statearr_63157_64177[(2)] = inst_63107);

(statearr_63157_64177[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63131 === (5))){
var inst_63068 = cljs.core.deref(mults);
var inst_63069 = cljs.core.vals(inst_63068);
var inst_63070 = cljs.core.seq(inst_63069);
var inst_63071 = inst_63070;
var inst_63072 = null;
var inst_63073 = (0);
var inst_63074 = (0);
var state_63130__$1 = (function (){var statearr_63158 = state_63130;
(statearr_63158[(12)] = inst_63072);

(statearr_63158[(13)] = inst_63071);

(statearr_63158[(14)] = inst_63073);

(statearr_63158[(15)] = inst_63074);

return statearr_63158;
})();
var statearr_63159_64178 = state_63130__$1;
(statearr_63159_64178[(2)] = null);

(statearr_63159_64178[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63131 === (14))){
var state_63130__$1 = state_63130;
var statearr_63163_64179 = state_63130__$1;
(statearr_63163_64179[(2)] = null);

(statearr_63163_64179[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63131 === (16))){
var inst_63085 = (state_63130[(10)]);
var inst_63089 = cljs.core.chunk_first(inst_63085);
var inst_63090 = cljs.core.chunk_rest(inst_63085);
var inst_63091 = cljs.core.count(inst_63089);
var inst_63071 = inst_63090;
var inst_63072 = inst_63089;
var inst_63073 = inst_63091;
var inst_63074 = (0);
var state_63130__$1 = (function (){var statearr_63164 = state_63130;
(statearr_63164[(12)] = inst_63072);

(statearr_63164[(13)] = inst_63071);

(statearr_63164[(14)] = inst_63073);

(statearr_63164[(15)] = inst_63074);

return statearr_63164;
})();
var statearr_63165_64180 = state_63130__$1;
(statearr_63165_64180[(2)] = null);

(statearr_63165_64180[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63131 === (10))){
var inst_63072 = (state_63130[(12)]);
var inst_63071 = (state_63130[(13)]);
var inst_63073 = (state_63130[(14)]);
var inst_63074 = (state_63130[(15)]);
var inst_63079 = cljs.core._nth(inst_63072,inst_63074);
var inst_63080 = cljs.core.async.muxch_STAR_(inst_63079);
var inst_63081 = cljs.core.async.close_BANG_(inst_63080);
var inst_63082 = (inst_63074 + (1));
var tmp63160 = inst_63072;
var tmp63161 = inst_63071;
var tmp63162 = inst_63073;
var inst_63071__$1 = tmp63161;
var inst_63072__$1 = tmp63160;
var inst_63073__$1 = tmp63162;
var inst_63074__$1 = inst_63082;
var state_63130__$1 = (function (){var statearr_63166 = state_63130;
(statearr_63166[(12)] = inst_63072__$1);

(statearr_63166[(13)] = inst_63071__$1);

(statearr_63166[(14)] = inst_63073__$1);

(statearr_63166[(15)] = inst_63074__$1);

(statearr_63166[(17)] = inst_63081);

return statearr_63166;
})();
var statearr_63167_64181 = state_63130__$1;
(statearr_63167_64181[(2)] = null);

(statearr_63167_64181[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63131 === (18))){
var inst_63100 = (state_63130[(2)]);
var state_63130__$1 = state_63130;
var statearr_63168_64182 = state_63130__$1;
(statearr_63168_64182[(2)] = inst_63100);

(statearr_63168_64182[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63131 === (8))){
var inst_63073 = (state_63130[(14)]);
var inst_63074 = (state_63130[(15)]);
var inst_63076 = (inst_63074 < inst_63073);
var inst_63077 = inst_63076;
var state_63130__$1 = state_63130;
if(cljs.core.truth_(inst_63077)){
var statearr_63169_64183 = state_63130__$1;
(statearr_63169_64183[(1)] = (10));

} else {
var statearr_63170_64184 = state_63130__$1;
(statearr_63170_64184[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__56227__auto__ = null;
var cljs$core$async$state_machine__56227__auto____0 = (function (){
var statearr_63171 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_63171[(0)] = cljs$core$async$state_machine__56227__auto__);

(statearr_63171[(1)] = (1));

return statearr_63171;
});
var cljs$core$async$state_machine__56227__auto____1 = (function (state_63130){
while(true){
var ret_value__56228__auto__ = (function (){try{while(true){
var result__56229__auto__ = switch__56226__auto__(state_63130);
if(cljs.core.keyword_identical_QMARK_(result__56229__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__56229__auto__;
}
break;
}
}catch (e63172){var ex__56230__auto__ = e63172;
var statearr_63173_64185 = state_63130;
(statearr_63173_64185[(2)] = ex__56230__auto__);


if(cljs.core.seq((state_63130[(4)]))){
var statearr_63174_64186 = state_63130;
(statearr_63174_64186[(1)] = cljs.core.first((state_63130[(4)])));

} else {
throw ex__56230__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__56228__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__64188 = state_63130;
state_63130 = G__64188;
continue;
} else {
return ret_value__56228__auto__;
}
break;
}
});
cljs$core$async$state_machine__56227__auto__ = function(state_63130){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__56227__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__56227__auto____1.call(this,state_63130);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__56227__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__56227__auto____0;
cljs$core$async$state_machine__56227__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__56227__auto____1;
return cljs$core$async$state_machine__56227__auto__;
})()
})();
var state__56251__auto__ = (function (){var statearr_63175 = f__56250__auto__();
(statearr_63175[(6)] = c__56249__auto___64151);

return statearr_63175;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__56251__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__63177 = arguments.length;
switch (G__63177) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__63179 = arguments.length;
switch (G__63179) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__63181 = arguments.length;
switch (G__63181) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
if((cnt === (0))){
cljs.core.async.close_BANG_(out);
} else {
var c__56249__auto___64201 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__56250__auto__ = (function (){var switch__56226__auto__ = (function (state_63224){
var state_val_63225 = (state_63224[(1)]);
if((state_val_63225 === (7))){
var state_63224__$1 = state_63224;
var statearr_63226_64202 = state_63224__$1;
(statearr_63226_64202[(2)] = null);

(statearr_63226_64202[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63225 === (1))){
var state_63224__$1 = state_63224;
var statearr_63227_64203 = state_63224__$1;
(statearr_63227_64203[(2)] = null);

(statearr_63227_64203[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63225 === (4))){
var inst_63185 = (state_63224[(7)]);
var inst_63184 = (state_63224[(8)]);
var inst_63187 = (inst_63185 < inst_63184);
var state_63224__$1 = state_63224;
if(cljs.core.truth_(inst_63187)){
var statearr_63228_64204 = state_63224__$1;
(statearr_63228_64204[(1)] = (6));

} else {
var statearr_63229_64205 = state_63224__$1;
(statearr_63229_64205[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63225 === (15))){
var inst_63210 = (state_63224[(9)]);
var inst_63215 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_63210);
var state_63224__$1 = state_63224;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_63224__$1,(17),out,inst_63215);
} else {
if((state_val_63225 === (13))){
var inst_63210 = (state_63224[(9)]);
var inst_63210__$1 = (state_63224[(2)]);
var inst_63211 = cljs.core.some(cljs.core.nil_QMARK_,inst_63210__$1);
var state_63224__$1 = (function (){var statearr_63230 = state_63224;
(statearr_63230[(9)] = inst_63210__$1);

return statearr_63230;
})();
if(cljs.core.truth_(inst_63211)){
var statearr_63231_64206 = state_63224__$1;
(statearr_63231_64206[(1)] = (14));

} else {
var statearr_63232_64207 = state_63224__$1;
(statearr_63232_64207[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63225 === (6))){
var state_63224__$1 = state_63224;
var statearr_63233_64208 = state_63224__$1;
(statearr_63233_64208[(2)] = null);

(statearr_63233_64208[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63225 === (17))){
var inst_63217 = (state_63224[(2)]);
var state_63224__$1 = (function (){var statearr_63235 = state_63224;
(statearr_63235[(10)] = inst_63217);

return statearr_63235;
})();
var statearr_63236_64209 = state_63224__$1;
(statearr_63236_64209[(2)] = null);

(statearr_63236_64209[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63225 === (3))){
var inst_63222 = (state_63224[(2)]);
var state_63224__$1 = state_63224;
return cljs.core.async.impl.ioc_helpers.return_chan(state_63224__$1,inst_63222);
} else {
if((state_val_63225 === (12))){
var _ = (function (){var statearr_63237 = state_63224;
(statearr_63237[(4)] = cljs.core.rest((state_63224[(4)])));

return statearr_63237;
})();
var state_63224__$1 = state_63224;
var ex63234 = (state_63224__$1[(2)]);
var statearr_63238_64210 = state_63224__$1;
(statearr_63238_64210[(5)] = ex63234);


if((ex63234 instanceof Object)){
var statearr_63239_64211 = state_63224__$1;
(statearr_63239_64211[(1)] = (11));

(statearr_63239_64211[(5)] = null);

} else {
throw ex63234;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63225 === (2))){
var inst_63183 = cljs.core.reset_BANG_(dctr,cnt);
var inst_63184 = cnt;
var inst_63185 = (0);
var state_63224__$1 = (function (){var statearr_63240 = state_63224;
(statearr_63240[(7)] = inst_63185);

(statearr_63240[(11)] = inst_63183);

(statearr_63240[(8)] = inst_63184);

return statearr_63240;
})();
var statearr_63241_64212 = state_63224__$1;
(statearr_63241_64212[(2)] = null);

(statearr_63241_64212[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63225 === (11))){
var inst_63189 = (state_63224[(2)]);
var inst_63190 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_63224__$1 = (function (){var statearr_63242 = state_63224;
(statearr_63242[(12)] = inst_63189);

return statearr_63242;
})();
var statearr_63243_64213 = state_63224__$1;
(statearr_63243_64213[(2)] = inst_63190);

(statearr_63243_64213[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63225 === (9))){
var inst_63185 = (state_63224[(7)]);
var _ = (function (){var statearr_63244 = state_63224;
(statearr_63244[(4)] = cljs.core.cons((12),(state_63224[(4)])));

return statearr_63244;
})();
var inst_63196 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_63185) : chs__$1.call(null,inst_63185));
var inst_63197 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_63185) : done.call(null,inst_63185));
var inst_63198 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_63196,inst_63197);
var ___$1 = (function (){var statearr_63245 = state_63224;
(statearr_63245[(4)] = cljs.core.rest((state_63224[(4)])));

return statearr_63245;
})();
var state_63224__$1 = state_63224;
var statearr_63246_64214 = state_63224__$1;
(statearr_63246_64214[(2)] = inst_63198);

(statearr_63246_64214[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63225 === (5))){
var inst_63208 = (state_63224[(2)]);
var state_63224__$1 = (function (){var statearr_63247 = state_63224;
(statearr_63247[(13)] = inst_63208);

return statearr_63247;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_63224__$1,(13),dchan);
} else {
if((state_val_63225 === (14))){
var inst_63213 = cljs.core.async.close_BANG_(out);
var state_63224__$1 = state_63224;
var statearr_63248_64215 = state_63224__$1;
(statearr_63248_64215[(2)] = inst_63213);

(statearr_63248_64215[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63225 === (16))){
var inst_63220 = (state_63224[(2)]);
var state_63224__$1 = state_63224;
var statearr_63249_64216 = state_63224__$1;
(statearr_63249_64216[(2)] = inst_63220);

(statearr_63249_64216[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63225 === (10))){
var inst_63185 = (state_63224[(7)]);
var inst_63201 = (state_63224[(2)]);
var inst_63202 = (inst_63185 + (1));
var inst_63185__$1 = inst_63202;
var state_63224__$1 = (function (){var statearr_63250 = state_63224;
(statearr_63250[(7)] = inst_63185__$1);

(statearr_63250[(14)] = inst_63201);

return statearr_63250;
})();
var statearr_63251_64217 = state_63224__$1;
(statearr_63251_64217[(2)] = null);

(statearr_63251_64217[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63225 === (8))){
var inst_63206 = (state_63224[(2)]);
var state_63224__$1 = state_63224;
var statearr_63252_64218 = state_63224__$1;
(statearr_63252_64218[(2)] = inst_63206);

(statearr_63252_64218[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__56227__auto__ = null;
var cljs$core$async$state_machine__56227__auto____0 = (function (){
var statearr_63253 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_63253[(0)] = cljs$core$async$state_machine__56227__auto__);

(statearr_63253[(1)] = (1));

return statearr_63253;
});
var cljs$core$async$state_machine__56227__auto____1 = (function (state_63224){
while(true){
var ret_value__56228__auto__ = (function (){try{while(true){
var result__56229__auto__ = switch__56226__auto__(state_63224);
if(cljs.core.keyword_identical_QMARK_(result__56229__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__56229__auto__;
}
break;
}
}catch (e63254){var ex__56230__auto__ = e63254;
var statearr_63255_64219 = state_63224;
(statearr_63255_64219[(2)] = ex__56230__auto__);


if(cljs.core.seq((state_63224[(4)]))){
var statearr_63256_64220 = state_63224;
(statearr_63256_64220[(1)] = cljs.core.first((state_63224[(4)])));

} else {
throw ex__56230__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__56228__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__64221 = state_63224;
state_63224 = G__64221;
continue;
} else {
return ret_value__56228__auto__;
}
break;
}
});
cljs$core$async$state_machine__56227__auto__ = function(state_63224){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__56227__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__56227__auto____1.call(this,state_63224);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__56227__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__56227__auto____0;
cljs$core$async$state_machine__56227__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__56227__auto____1;
return cljs$core$async$state_machine__56227__auto__;
})()
})();
var state__56251__auto__ = (function (){var statearr_63257 = f__56250__auto__();
(statearr_63257[(6)] = c__56249__auto___64201);

return statearr_63257;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__56251__auto__);
}));

}

return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__63260 = arguments.length;
switch (G__63260) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__56249__auto___64223 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__56250__auto__ = (function (){var switch__56226__auto__ = (function (state_63292){
var state_val_63293 = (state_63292[(1)]);
if((state_val_63293 === (7))){
var inst_63271 = (state_63292[(7)]);
var inst_63272 = (state_63292[(8)]);
var inst_63271__$1 = (state_63292[(2)]);
var inst_63272__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_63271__$1,(0),null);
var inst_63273 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_63271__$1,(1),null);
var inst_63274 = (inst_63272__$1 == null);
var state_63292__$1 = (function (){var statearr_63294 = state_63292;
(statearr_63294[(7)] = inst_63271__$1);

(statearr_63294[(9)] = inst_63273);

(statearr_63294[(8)] = inst_63272__$1);

return statearr_63294;
})();
if(cljs.core.truth_(inst_63274)){
var statearr_63295_64224 = state_63292__$1;
(statearr_63295_64224[(1)] = (8));

} else {
var statearr_63296_64225 = state_63292__$1;
(statearr_63296_64225[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63293 === (1))){
var inst_63261 = cljs.core.vec(chs);
var inst_63262 = inst_63261;
var state_63292__$1 = (function (){var statearr_63297 = state_63292;
(statearr_63297[(10)] = inst_63262);

return statearr_63297;
})();
var statearr_63298_64226 = state_63292__$1;
(statearr_63298_64226[(2)] = null);

(statearr_63298_64226[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63293 === (4))){
var inst_63262 = (state_63292[(10)]);
var state_63292__$1 = state_63292;
return cljs.core.async.ioc_alts_BANG_(state_63292__$1,(7),inst_63262);
} else {
if((state_val_63293 === (6))){
var inst_63288 = (state_63292[(2)]);
var state_63292__$1 = state_63292;
var statearr_63299_64230 = state_63292__$1;
(statearr_63299_64230[(2)] = inst_63288);

(statearr_63299_64230[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63293 === (3))){
var inst_63290 = (state_63292[(2)]);
var state_63292__$1 = state_63292;
return cljs.core.async.impl.ioc_helpers.return_chan(state_63292__$1,inst_63290);
} else {
if((state_val_63293 === (2))){
var inst_63262 = (state_63292[(10)]);
var inst_63264 = cljs.core.count(inst_63262);
var inst_63265 = (inst_63264 > (0));
var state_63292__$1 = state_63292;
if(cljs.core.truth_(inst_63265)){
var statearr_63301_64235 = state_63292__$1;
(statearr_63301_64235[(1)] = (4));

} else {
var statearr_63302_64236 = state_63292__$1;
(statearr_63302_64236[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63293 === (11))){
var inst_63262 = (state_63292[(10)]);
var inst_63281 = (state_63292[(2)]);
var tmp63300 = inst_63262;
var inst_63262__$1 = tmp63300;
var state_63292__$1 = (function (){var statearr_63303 = state_63292;
(statearr_63303[(10)] = inst_63262__$1);

(statearr_63303[(11)] = inst_63281);

return statearr_63303;
})();
var statearr_63304_64240 = state_63292__$1;
(statearr_63304_64240[(2)] = null);

(statearr_63304_64240[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63293 === (9))){
var inst_63272 = (state_63292[(8)]);
var state_63292__$1 = state_63292;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_63292__$1,(11),out,inst_63272);
} else {
if((state_val_63293 === (5))){
var inst_63286 = cljs.core.async.close_BANG_(out);
var state_63292__$1 = state_63292;
var statearr_63305_64241 = state_63292__$1;
(statearr_63305_64241[(2)] = inst_63286);

(statearr_63305_64241[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63293 === (10))){
var inst_63284 = (state_63292[(2)]);
var state_63292__$1 = state_63292;
var statearr_63306_64242 = state_63292__$1;
(statearr_63306_64242[(2)] = inst_63284);

(statearr_63306_64242[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63293 === (8))){
var inst_63271 = (state_63292[(7)]);
var inst_63262 = (state_63292[(10)]);
var inst_63273 = (state_63292[(9)]);
var inst_63272 = (state_63292[(8)]);
var inst_63276 = (function (){var cs = inst_63262;
var vec__63267 = inst_63271;
var v = inst_63272;
var c = inst_63273;
return (function (p1__63258_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__63258_SHARP_);
});
})();
var inst_63277 = cljs.core.filterv(inst_63276,inst_63262);
var inst_63262__$1 = inst_63277;
var state_63292__$1 = (function (){var statearr_63307 = state_63292;
(statearr_63307[(10)] = inst_63262__$1);

return statearr_63307;
})();
var statearr_63308_64246 = state_63292__$1;
(statearr_63308_64246[(2)] = null);

(statearr_63308_64246[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__56227__auto__ = null;
var cljs$core$async$state_machine__56227__auto____0 = (function (){
var statearr_63309 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_63309[(0)] = cljs$core$async$state_machine__56227__auto__);

(statearr_63309[(1)] = (1));

return statearr_63309;
});
var cljs$core$async$state_machine__56227__auto____1 = (function (state_63292){
while(true){
var ret_value__56228__auto__ = (function (){try{while(true){
var result__56229__auto__ = switch__56226__auto__(state_63292);
if(cljs.core.keyword_identical_QMARK_(result__56229__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__56229__auto__;
}
break;
}
}catch (e63310){var ex__56230__auto__ = e63310;
var statearr_63311_64247 = state_63292;
(statearr_63311_64247[(2)] = ex__56230__auto__);


if(cljs.core.seq((state_63292[(4)]))){
var statearr_63312_64248 = state_63292;
(statearr_63312_64248[(1)] = cljs.core.first((state_63292[(4)])));

} else {
throw ex__56230__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__56228__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__64252 = state_63292;
state_63292 = G__64252;
continue;
} else {
return ret_value__56228__auto__;
}
break;
}
});
cljs$core$async$state_machine__56227__auto__ = function(state_63292){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__56227__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__56227__auto____1.call(this,state_63292);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__56227__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__56227__auto____0;
cljs$core$async$state_machine__56227__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__56227__auto____1;
return cljs$core$async$state_machine__56227__auto__;
})()
})();
var state__56251__auto__ = (function (){var statearr_63313 = f__56250__auto__();
(statearr_63313[(6)] = c__56249__auto___64223);

return statearr_63313;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__56251__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__63315 = arguments.length;
switch (G__63315) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__56249__auto___64254 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__56250__auto__ = (function (){var switch__56226__auto__ = (function (state_63339){
var state_val_63340 = (state_63339[(1)]);
if((state_val_63340 === (7))){
var inst_63321 = (state_63339[(7)]);
var inst_63321__$1 = (state_63339[(2)]);
var inst_63322 = (inst_63321__$1 == null);
var inst_63323 = cljs.core.not(inst_63322);
var state_63339__$1 = (function (){var statearr_63341 = state_63339;
(statearr_63341[(7)] = inst_63321__$1);

return statearr_63341;
})();
if(inst_63323){
var statearr_63342_64258 = state_63339__$1;
(statearr_63342_64258[(1)] = (8));

} else {
var statearr_63343_64259 = state_63339__$1;
(statearr_63343_64259[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63340 === (1))){
var inst_63316 = (0);
var state_63339__$1 = (function (){var statearr_63344 = state_63339;
(statearr_63344[(8)] = inst_63316);

return statearr_63344;
})();
var statearr_63345_64260 = state_63339__$1;
(statearr_63345_64260[(2)] = null);

(statearr_63345_64260[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63340 === (4))){
var state_63339__$1 = state_63339;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_63339__$1,(7),ch);
} else {
if((state_val_63340 === (6))){
var inst_63334 = (state_63339[(2)]);
var state_63339__$1 = state_63339;
var statearr_63346_64261 = state_63339__$1;
(statearr_63346_64261[(2)] = inst_63334);

(statearr_63346_64261[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63340 === (3))){
var inst_63336 = (state_63339[(2)]);
var inst_63337 = cljs.core.async.close_BANG_(out);
var state_63339__$1 = (function (){var statearr_63347 = state_63339;
(statearr_63347[(9)] = inst_63336);

return statearr_63347;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_63339__$1,inst_63337);
} else {
if((state_val_63340 === (2))){
var inst_63316 = (state_63339[(8)]);
var inst_63318 = (inst_63316 < n);
var state_63339__$1 = state_63339;
if(cljs.core.truth_(inst_63318)){
var statearr_63348_64263 = state_63339__$1;
(statearr_63348_64263[(1)] = (4));

} else {
var statearr_63349_64264 = state_63339__$1;
(statearr_63349_64264[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63340 === (11))){
var inst_63316 = (state_63339[(8)]);
var inst_63326 = (state_63339[(2)]);
var inst_63327 = (inst_63316 + (1));
var inst_63316__$1 = inst_63327;
var state_63339__$1 = (function (){var statearr_63350 = state_63339;
(statearr_63350[(10)] = inst_63326);

(statearr_63350[(8)] = inst_63316__$1);

return statearr_63350;
})();
var statearr_63351_64265 = state_63339__$1;
(statearr_63351_64265[(2)] = null);

(statearr_63351_64265[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63340 === (9))){
var state_63339__$1 = state_63339;
var statearr_63352_64266 = state_63339__$1;
(statearr_63352_64266[(2)] = null);

(statearr_63352_64266[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63340 === (5))){
var state_63339__$1 = state_63339;
var statearr_63353_64270 = state_63339__$1;
(statearr_63353_64270[(2)] = null);

(statearr_63353_64270[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63340 === (10))){
var inst_63331 = (state_63339[(2)]);
var state_63339__$1 = state_63339;
var statearr_63354_64277 = state_63339__$1;
(statearr_63354_64277[(2)] = inst_63331);

(statearr_63354_64277[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63340 === (8))){
var inst_63321 = (state_63339[(7)]);
var state_63339__$1 = state_63339;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_63339__$1,(11),out,inst_63321);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__56227__auto__ = null;
var cljs$core$async$state_machine__56227__auto____0 = (function (){
var statearr_63355 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_63355[(0)] = cljs$core$async$state_machine__56227__auto__);

(statearr_63355[(1)] = (1));

return statearr_63355;
});
var cljs$core$async$state_machine__56227__auto____1 = (function (state_63339){
while(true){
var ret_value__56228__auto__ = (function (){try{while(true){
var result__56229__auto__ = switch__56226__auto__(state_63339);
if(cljs.core.keyword_identical_QMARK_(result__56229__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__56229__auto__;
}
break;
}
}catch (e63356){var ex__56230__auto__ = e63356;
var statearr_63357_64284 = state_63339;
(statearr_63357_64284[(2)] = ex__56230__auto__);


if(cljs.core.seq((state_63339[(4)]))){
var statearr_63358_64285 = state_63339;
(statearr_63358_64285[(1)] = cljs.core.first((state_63339[(4)])));

} else {
throw ex__56230__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__56228__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__64286 = state_63339;
state_63339 = G__64286;
continue;
} else {
return ret_value__56228__auto__;
}
break;
}
});
cljs$core$async$state_machine__56227__auto__ = function(state_63339){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__56227__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__56227__auto____1.call(this,state_63339);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__56227__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__56227__auto____0;
cljs$core$async$state_machine__56227__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__56227__auto____1;
return cljs$core$async$state_machine__56227__auto__;
})()
})();
var state__56251__auto__ = (function (){var statearr_63359 = f__56250__auto__();
(statearr_63359[(6)] = c__56249__auto___64254);

return statearr_63359;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__56251__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async63361 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async63361 = (function (f,ch,meta63362){
this.f = f;
this.ch = ch;
this.meta63362 = meta63362;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async63361.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_63363,meta63362__$1){
var self__ = this;
var _63363__$1 = this;
return (new cljs.core.async.t_cljs$core$async63361(self__.f,self__.ch,meta63362__$1));
}));

(cljs.core.async.t_cljs$core$async63361.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_63363){
var self__ = this;
var _63363__$1 = this;
return self__.meta63362;
}));

(cljs.core.async.t_cljs$core$async63361.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async63361.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async63361.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async63361.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async63361.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async63364 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async63364 = (function (f,ch,meta63362,_,fn1,meta63365){
this.f = f;
this.ch = ch;
this.meta63362 = meta63362;
this._ = _;
this.fn1 = fn1;
this.meta63365 = meta63365;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async63364.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_63366,meta63365__$1){
var self__ = this;
var _63366__$1 = this;
return (new cljs.core.async.t_cljs$core$async63364(self__.f,self__.ch,self__.meta63362,self__._,self__.fn1,meta63365__$1));
}));

(cljs.core.async.t_cljs$core$async63364.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_63366){
var self__ = this;
var _63366__$1 = this;
return self__.meta63365;
}));

(cljs.core.async.t_cljs$core$async63364.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async63364.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async63364.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async63364.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__63360_SHARP_){
var G__63367 = (((p1__63360_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__63360_SHARP_) : self__.f.call(null,p1__63360_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__63367) : f1.call(null,G__63367));
});
}));

(cljs.core.async.t_cljs$core$async63364.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta63362","meta63362",-1172966809,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async63361","cljs.core.async/t_cljs$core$async63361",536352293,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta63365","meta63365",-1271775412,null)], null);
}));

(cljs.core.async.t_cljs$core$async63364.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async63364.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async63364");

(cljs.core.async.t_cljs$core$async63364.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async63364");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async63364.
 */
cljs.core.async.__GT_t_cljs$core$async63364 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async63364(f__$1,ch__$1,meta63362__$1,___$2,fn1__$1,meta63365){
return (new cljs.core.async.t_cljs$core$async63364(f__$1,ch__$1,meta63362__$1,___$2,fn1__$1,meta63365));
});

}

return (new cljs.core.async.t_cljs$core$async63364(self__.f,self__.ch,self__.meta63362,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__5043__auto__ = ret;
if(cljs.core.truth_(and__5043__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__5043__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__63368 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__63368) : self__.f.call(null,G__63368));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async63361.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async63361.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async63361.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta63362","meta63362",-1172966809,null)], null);
}));

(cljs.core.async.t_cljs$core$async63361.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async63361.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async63361");

(cljs.core.async.t_cljs$core$async63361.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async63361");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async63361.
 */
cljs.core.async.__GT_t_cljs$core$async63361 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async63361(f__$1,ch__$1,meta63362){
return (new cljs.core.async.t_cljs$core$async63361(f__$1,ch__$1,meta63362));
});

}

return (new cljs.core.async.t_cljs$core$async63361(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async63369 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async63369 = (function (f,ch,meta63370){
this.f = f;
this.ch = ch;
this.meta63370 = meta63370;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async63369.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_63371,meta63370__$1){
var self__ = this;
var _63371__$1 = this;
return (new cljs.core.async.t_cljs$core$async63369(self__.f,self__.ch,meta63370__$1));
}));

(cljs.core.async.t_cljs$core$async63369.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_63371){
var self__ = this;
var _63371__$1 = this;
return self__.meta63370;
}));

(cljs.core.async.t_cljs$core$async63369.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async63369.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async63369.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async63369.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async63369.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async63369.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async63369.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta63370","meta63370",-831992652,null)], null);
}));

(cljs.core.async.t_cljs$core$async63369.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async63369.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async63369");

(cljs.core.async.t_cljs$core$async63369.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async63369");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async63369.
 */
cljs.core.async.__GT_t_cljs$core$async63369 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async63369(f__$1,ch__$1,meta63370){
return (new cljs.core.async.t_cljs$core$async63369(f__$1,ch__$1,meta63370));
});

}

return (new cljs.core.async.t_cljs$core$async63369(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async63372 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async63372 = (function (p,ch,meta63373){
this.p = p;
this.ch = ch;
this.meta63373 = meta63373;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async63372.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_63374,meta63373__$1){
var self__ = this;
var _63374__$1 = this;
return (new cljs.core.async.t_cljs$core$async63372(self__.p,self__.ch,meta63373__$1));
}));

(cljs.core.async.t_cljs$core$async63372.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_63374){
var self__ = this;
var _63374__$1 = this;
return self__.meta63373;
}));

(cljs.core.async.t_cljs$core$async63372.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async63372.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async63372.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async63372.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async63372.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async63372.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async63372.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async63372.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta63373","meta63373",-21400152,null)], null);
}));

(cljs.core.async.t_cljs$core$async63372.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async63372.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async63372");

(cljs.core.async.t_cljs$core$async63372.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async63372");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async63372.
 */
cljs.core.async.__GT_t_cljs$core$async63372 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async63372(p__$1,ch__$1,meta63373){
return (new cljs.core.async.t_cljs$core$async63372(p__$1,ch__$1,meta63373));
});

}

return (new cljs.core.async.t_cljs$core$async63372(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__63376 = arguments.length;
switch (G__63376) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__56249__auto___64300 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__56250__auto__ = (function (){var switch__56226__auto__ = (function (state_63397){
var state_val_63398 = (state_63397[(1)]);
if((state_val_63398 === (7))){
var inst_63393 = (state_63397[(2)]);
var state_63397__$1 = state_63397;
var statearr_63399_64301 = state_63397__$1;
(statearr_63399_64301[(2)] = inst_63393);

(statearr_63399_64301[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63398 === (1))){
var state_63397__$1 = state_63397;
var statearr_63400_64302 = state_63397__$1;
(statearr_63400_64302[(2)] = null);

(statearr_63400_64302[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63398 === (4))){
var inst_63379 = (state_63397[(7)]);
var inst_63379__$1 = (state_63397[(2)]);
var inst_63380 = (inst_63379__$1 == null);
var state_63397__$1 = (function (){var statearr_63401 = state_63397;
(statearr_63401[(7)] = inst_63379__$1);

return statearr_63401;
})();
if(cljs.core.truth_(inst_63380)){
var statearr_63402_64309 = state_63397__$1;
(statearr_63402_64309[(1)] = (5));

} else {
var statearr_63403_64310 = state_63397__$1;
(statearr_63403_64310[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63398 === (6))){
var inst_63379 = (state_63397[(7)]);
var inst_63384 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_63379) : p.call(null,inst_63379));
var state_63397__$1 = state_63397;
if(cljs.core.truth_(inst_63384)){
var statearr_63404_64311 = state_63397__$1;
(statearr_63404_64311[(1)] = (8));

} else {
var statearr_63405_64312 = state_63397__$1;
(statearr_63405_64312[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63398 === (3))){
var inst_63395 = (state_63397[(2)]);
var state_63397__$1 = state_63397;
return cljs.core.async.impl.ioc_helpers.return_chan(state_63397__$1,inst_63395);
} else {
if((state_val_63398 === (2))){
var state_63397__$1 = state_63397;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_63397__$1,(4),ch);
} else {
if((state_val_63398 === (11))){
var inst_63387 = (state_63397[(2)]);
var state_63397__$1 = state_63397;
var statearr_63406_64313 = state_63397__$1;
(statearr_63406_64313[(2)] = inst_63387);

(statearr_63406_64313[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63398 === (9))){
var state_63397__$1 = state_63397;
var statearr_63407_64314 = state_63397__$1;
(statearr_63407_64314[(2)] = null);

(statearr_63407_64314[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63398 === (5))){
var inst_63382 = cljs.core.async.close_BANG_(out);
var state_63397__$1 = state_63397;
var statearr_63408_64315 = state_63397__$1;
(statearr_63408_64315[(2)] = inst_63382);

(statearr_63408_64315[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63398 === (10))){
var inst_63390 = (state_63397[(2)]);
var state_63397__$1 = (function (){var statearr_63409 = state_63397;
(statearr_63409[(8)] = inst_63390);

return statearr_63409;
})();
var statearr_63410_64316 = state_63397__$1;
(statearr_63410_64316[(2)] = null);

(statearr_63410_64316[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63398 === (8))){
var inst_63379 = (state_63397[(7)]);
var state_63397__$1 = state_63397;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_63397__$1,(11),out,inst_63379);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__56227__auto__ = null;
var cljs$core$async$state_machine__56227__auto____0 = (function (){
var statearr_63411 = [null,null,null,null,null,null,null,null,null];
(statearr_63411[(0)] = cljs$core$async$state_machine__56227__auto__);

(statearr_63411[(1)] = (1));

return statearr_63411;
});
var cljs$core$async$state_machine__56227__auto____1 = (function (state_63397){
while(true){
var ret_value__56228__auto__ = (function (){try{while(true){
var result__56229__auto__ = switch__56226__auto__(state_63397);
if(cljs.core.keyword_identical_QMARK_(result__56229__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__56229__auto__;
}
break;
}
}catch (e63412){var ex__56230__auto__ = e63412;
var statearr_63413_64317 = state_63397;
(statearr_63413_64317[(2)] = ex__56230__auto__);


if(cljs.core.seq((state_63397[(4)]))){
var statearr_63414_64318 = state_63397;
(statearr_63414_64318[(1)] = cljs.core.first((state_63397[(4)])));

} else {
throw ex__56230__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__56228__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__64319 = state_63397;
state_63397 = G__64319;
continue;
} else {
return ret_value__56228__auto__;
}
break;
}
});
cljs$core$async$state_machine__56227__auto__ = function(state_63397){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__56227__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__56227__auto____1.call(this,state_63397);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__56227__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__56227__auto____0;
cljs$core$async$state_machine__56227__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__56227__auto____1;
return cljs$core$async$state_machine__56227__auto__;
})()
})();
var state__56251__auto__ = (function (){var statearr_63415 = f__56250__auto__();
(statearr_63415[(6)] = c__56249__auto___64300);

return statearr_63415;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__56251__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__63417 = arguments.length;
switch (G__63417) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__56249__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__56250__auto__ = (function (){var switch__56226__auto__ = (function (state_63479){
var state_val_63480 = (state_63479[(1)]);
if((state_val_63480 === (7))){
var inst_63475 = (state_63479[(2)]);
var state_63479__$1 = state_63479;
var statearr_63481_64321 = state_63479__$1;
(statearr_63481_64321[(2)] = inst_63475);

(statearr_63481_64321[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63480 === (20))){
var inst_63445 = (state_63479[(7)]);
var inst_63456 = (state_63479[(2)]);
var inst_63457 = cljs.core.next(inst_63445);
var inst_63431 = inst_63457;
var inst_63432 = null;
var inst_63433 = (0);
var inst_63434 = (0);
var state_63479__$1 = (function (){var statearr_63482 = state_63479;
(statearr_63482[(8)] = inst_63432);

(statearr_63482[(9)] = inst_63433);

(statearr_63482[(10)] = inst_63431);

(statearr_63482[(11)] = inst_63456);

(statearr_63482[(12)] = inst_63434);

return statearr_63482;
})();
var statearr_63483_64322 = state_63479__$1;
(statearr_63483_64322[(2)] = null);

(statearr_63483_64322[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63480 === (1))){
var state_63479__$1 = state_63479;
var statearr_63484_64325 = state_63479__$1;
(statearr_63484_64325[(2)] = null);

(statearr_63484_64325[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63480 === (4))){
var inst_63420 = (state_63479[(13)]);
var inst_63420__$1 = (state_63479[(2)]);
var inst_63421 = (inst_63420__$1 == null);
var state_63479__$1 = (function (){var statearr_63485 = state_63479;
(statearr_63485[(13)] = inst_63420__$1);

return statearr_63485;
})();
if(cljs.core.truth_(inst_63421)){
var statearr_63486_64326 = state_63479__$1;
(statearr_63486_64326[(1)] = (5));

} else {
var statearr_63487_64327 = state_63479__$1;
(statearr_63487_64327[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63480 === (15))){
var state_63479__$1 = state_63479;
var statearr_63491_64328 = state_63479__$1;
(statearr_63491_64328[(2)] = null);

(statearr_63491_64328[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63480 === (21))){
var state_63479__$1 = state_63479;
var statearr_63492_64329 = state_63479__$1;
(statearr_63492_64329[(2)] = null);

(statearr_63492_64329[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63480 === (13))){
var inst_63432 = (state_63479[(8)]);
var inst_63433 = (state_63479[(9)]);
var inst_63431 = (state_63479[(10)]);
var inst_63434 = (state_63479[(12)]);
var inst_63441 = (state_63479[(2)]);
var inst_63442 = (inst_63434 + (1));
var tmp63488 = inst_63432;
var tmp63489 = inst_63433;
var tmp63490 = inst_63431;
var inst_63431__$1 = tmp63490;
var inst_63432__$1 = tmp63488;
var inst_63433__$1 = tmp63489;
var inst_63434__$1 = inst_63442;
var state_63479__$1 = (function (){var statearr_63493 = state_63479;
(statearr_63493[(8)] = inst_63432__$1);

(statearr_63493[(14)] = inst_63441);

(statearr_63493[(9)] = inst_63433__$1);

(statearr_63493[(10)] = inst_63431__$1);

(statearr_63493[(12)] = inst_63434__$1);

return statearr_63493;
})();
var statearr_63494_64330 = state_63479__$1;
(statearr_63494_64330[(2)] = null);

(statearr_63494_64330[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63480 === (22))){
var state_63479__$1 = state_63479;
var statearr_63495_64331 = state_63479__$1;
(statearr_63495_64331[(2)] = null);

(statearr_63495_64331[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63480 === (6))){
var inst_63420 = (state_63479[(13)]);
var inst_63429 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_63420) : f.call(null,inst_63420));
var inst_63430 = cljs.core.seq(inst_63429);
var inst_63431 = inst_63430;
var inst_63432 = null;
var inst_63433 = (0);
var inst_63434 = (0);
var state_63479__$1 = (function (){var statearr_63496 = state_63479;
(statearr_63496[(8)] = inst_63432);

(statearr_63496[(9)] = inst_63433);

(statearr_63496[(10)] = inst_63431);

(statearr_63496[(12)] = inst_63434);

return statearr_63496;
})();
var statearr_63497_64332 = state_63479__$1;
(statearr_63497_64332[(2)] = null);

(statearr_63497_64332[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63480 === (17))){
var inst_63445 = (state_63479[(7)]);
var inst_63449 = cljs.core.chunk_first(inst_63445);
var inst_63450 = cljs.core.chunk_rest(inst_63445);
var inst_63451 = cljs.core.count(inst_63449);
var inst_63431 = inst_63450;
var inst_63432 = inst_63449;
var inst_63433 = inst_63451;
var inst_63434 = (0);
var state_63479__$1 = (function (){var statearr_63498 = state_63479;
(statearr_63498[(8)] = inst_63432);

(statearr_63498[(9)] = inst_63433);

(statearr_63498[(10)] = inst_63431);

(statearr_63498[(12)] = inst_63434);

return statearr_63498;
})();
var statearr_63499_64333 = state_63479__$1;
(statearr_63499_64333[(2)] = null);

(statearr_63499_64333[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63480 === (3))){
var inst_63477 = (state_63479[(2)]);
var state_63479__$1 = state_63479;
return cljs.core.async.impl.ioc_helpers.return_chan(state_63479__$1,inst_63477);
} else {
if((state_val_63480 === (12))){
var inst_63465 = (state_63479[(2)]);
var state_63479__$1 = state_63479;
var statearr_63500_64334 = state_63479__$1;
(statearr_63500_64334[(2)] = inst_63465);

(statearr_63500_64334[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63480 === (2))){
var state_63479__$1 = state_63479;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_63479__$1,(4),in$);
} else {
if((state_val_63480 === (23))){
var inst_63473 = (state_63479[(2)]);
var state_63479__$1 = state_63479;
var statearr_63501_64335 = state_63479__$1;
(statearr_63501_64335[(2)] = inst_63473);

(statearr_63501_64335[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63480 === (19))){
var inst_63460 = (state_63479[(2)]);
var state_63479__$1 = state_63479;
var statearr_63502_64336 = state_63479__$1;
(statearr_63502_64336[(2)] = inst_63460);

(statearr_63502_64336[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63480 === (11))){
var inst_63445 = (state_63479[(7)]);
var inst_63431 = (state_63479[(10)]);
var inst_63445__$1 = cljs.core.seq(inst_63431);
var state_63479__$1 = (function (){var statearr_63503 = state_63479;
(statearr_63503[(7)] = inst_63445__$1);

return statearr_63503;
})();
if(inst_63445__$1){
var statearr_63504_64338 = state_63479__$1;
(statearr_63504_64338[(1)] = (14));

} else {
var statearr_63505_64339 = state_63479__$1;
(statearr_63505_64339[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63480 === (9))){
var inst_63467 = (state_63479[(2)]);
var inst_63468 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_63479__$1 = (function (){var statearr_63506 = state_63479;
(statearr_63506[(15)] = inst_63467);

return statearr_63506;
})();
if(cljs.core.truth_(inst_63468)){
var statearr_63507_64341 = state_63479__$1;
(statearr_63507_64341[(1)] = (21));

} else {
var statearr_63508_64342 = state_63479__$1;
(statearr_63508_64342[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63480 === (5))){
var inst_63423 = cljs.core.async.close_BANG_(out);
var state_63479__$1 = state_63479;
var statearr_63509_64343 = state_63479__$1;
(statearr_63509_64343[(2)] = inst_63423);

(statearr_63509_64343[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63480 === (14))){
var inst_63445 = (state_63479[(7)]);
var inst_63447 = cljs.core.chunked_seq_QMARK_(inst_63445);
var state_63479__$1 = state_63479;
if(inst_63447){
var statearr_63510_64344 = state_63479__$1;
(statearr_63510_64344[(1)] = (17));

} else {
var statearr_63511_64345 = state_63479__$1;
(statearr_63511_64345[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63480 === (16))){
var inst_63463 = (state_63479[(2)]);
var state_63479__$1 = state_63479;
var statearr_63512_64346 = state_63479__$1;
(statearr_63512_64346[(2)] = inst_63463);

(statearr_63512_64346[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63480 === (10))){
var inst_63432 = (state_63479[(8)]);
var inst_63434 = (state_63479[(12)]);
var inst_63439 = cljs.core._nth(inst_63432,inst_63434);
var state_63479__$1 = state_63479;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_63479__$1,(13),out,inst_63439);
} else {
if((state_val_63480 === (18))){
var inst_63445 = (state_63479[(7)]);
var inst_63454 = cljs.core.first(inst_63445);
var state_63479__$1 = state_63479;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_63479__$1,(20),out,inst_63454);
} else {
if((state_val_63480 === (8))){
var inst_63433 = (state_63479[(9)]);
var inst_63434 = (state_63479[(12)]);
var inst_63436 = (inst_63434 < inst_63433);
var inst_63437 = inst_63436;
var state_63479__$1 = state_63479;
if(cljs.core.truth_(inst_63437)){
var statearr_63513_64347 = state_63479__$1;
(statearr_63513_64347[(1)] = (10));

} else {
var statearr_63514_64348 = state_63479__$1;
(statearr_63514_64348[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__56227__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__56227__auto____0 = (function (){
var statearr_63515 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_63515[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__56227__auto__);

(statearr_63515[(1)] = (1));

return statearr_63515;
});
var cljs$core$async$mapcat_STAR__$_state_machine__56227__auto____1 = (function (state_63479){
while(true){
var ret_value__56228__auto__ = (function (){try{while(true){
var result__56229__auto__ = switch__56226__auto__(state_63479);
if(cljs.core.keyword_identical_QMARK_(result__56229__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__56229__auto__;
}
break;
}
}catch (e63516){var ex__56230__auto__ = e63516;
var statearr_63517_64349 = state_63479;
(statearr_63517_64349[(2)] = ex__56230__auto__);


if(cljs.core.seq((state_63479[(4)]))){
var statearr_63518_64350 = state_63479;
(statearr_63518_64350[(1)] = cljs.core.first((state_63479[(4)])));

} else {
throw ex__56230__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__56228__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__64351 = state_63479;
state_63479 = G__64351;
continue;
} else {
return ret_value__56228__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__56227__auto__ = function(state_63479){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__56227__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__56227__auto____1.call(this,state_63479);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__56227__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__56227__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__56227__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__56227__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__56227__auto__;
})()
})();
var state__56251__auto__ = (function (){var statearr_63519 = f__56250__auto__();
(statearr_63519[(6)] = c__56249__auto__);

return statearr_63519;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__56251__auto__);
}));

return c__56249__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__63521 = arguments.length;
switch (G__63521) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__63523 = arguments.length;
switch (G__63523) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__63525 = arguments.length;
switch (G__63525) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__56249__auto___64361 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__56250__auto__ = (function (){var switch__56226__auto__ = (function (state_63549){
var state_val_63550 = (state_63549[(1)]);
if((state_val_63550 === (7))){
var inst_63544 = (state_63549[(2)]);
var state_63549__$1 = state_63549;
var statearr_63551_64362 = state_63549__$1;
(statearr_63551_64362[(2)] = inst_63544);

(statearr_63551_64362[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63550 === (1))){
var inst_63526 = null;
var state_63549__$1 = (function (){var statearr_63552 = state_63549;
(statearr_63552[(7)] = inst_63526);

return statearr_63552;
})();
var statearr_63553_64363 = state_63549__$1;
(statearr_63553_64363[(2)] = null);

(statearr_63553_64363[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63550 === (4))){
var inst_63529 = (state_63549[(8)]);
var inst_63529__$1 = (state_63549[(2)]);
var inst_63530 = (inst_63529__$1 == null);
var inst_63531 = cljs.core.not(inst_63530);
var state_63549__$1 = (function (){var statearr_63554 = state_63549;
(statearr_63554[(8)] = inst_63529__$1);

return statearr_63554;
})();
if(inst_63531){
var statearr_63555_64364 = state_63549__$1;
(statearr_63555_64364[(1)] = (5));

} else {
var statearr_63556_64365 = state_63549__$1;
(statearr_63556_64365[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63550 === (6))){
var state_63549__$1 = state_63549;
var statearr_63557_64366 = state_63549__$1;
(statearr_63557_64366[(2)] = null);

(statearr_63557_64366[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63550 === (3))){
var inst_63546 = (state_63549[(2)]);
var inst_63547 = cljs.core.async.close_BANG_(out);
var state_63549__$1 = (function (){var statearr_63558 = state_63549;
(statearr_63558[(9)] = inst_63546);

return statearr_63558;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_63549__$1,inst_63547);
} else {
if((state_val_63550 === (2))){
var state_63549__$1 = state_63549;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_63549__$1,(4),ch);
} else {
if((state_val_63550 === (11))){
var inst_63529 = (state_63549[(8)]);
var inst_63538 = (state_63549[(2)]);
var inst_63526 = inst_63529;
var state_63549__$1 = (function (){var statearr_63559 = state_63549;
(statearr_63559[(7)] = inst_63526);

(statearr_63559[(10)] = inst_63538);

return statearr_63559;
})();
var statearr_63560_64369 = state_63549__$1;
(statearr_63560_64369[(2)] = null);

(statearr_63560_64369[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63550 === (9))){
var inst_63529 = (state_63549[(8)]);
var state_63549__$1 = state_63549;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_63549__$1,(11),out,inst_63529);
} else {
if((state_val_63550 === (5))){
var inst_63526 = (state_63549[(7)]);
var inst_63529 = (state_63549[(8)]);
var inst_63533 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_63529,inst_63526);
var state_63549__$1 = state_63549;
if(inst_63533){
var statearr_63562_64373 = state_63549__$1;
(statearr_63562_64373[(1)] = (8));

} else {
var statearr_63563_64374 = state_63549__$1;
(statearr_63563_64374[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63550 === (10))){
var inst_63541 = (state_63549[(2)]);
var state_63549__$1 = state_63549;
var statearr_63564_64375 = state_63549__$1;
(statearr_63564_64375[(2)] = inst_63541);

(statearr_63564_64375[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63550 === (8))){
var inst_63526 = (state_63549[(7)]);
var tmp63561 = inst_63526;
var inst_63526__$1 = tmp63561;
var state_63549__$1 = (function (){var statearr_63565 = state_63549;
(statearr_63565[(7)] = inst_63526__$1);

return statearr_63565;
})();
var statearr_63566_64376 = state_63549__$1;
(statearr_63566_64376[(2)] = null);

(statearr_63566_64376[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__56227__auto__ = null;
var cljs$core$async$state_machine__56227__auto____0 = (function (){
var statearr_63567 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_63567[(0)] = cljs$core$async$state_machine__56227__auto__);

(statearr_63567[(1)] = (1));

return statearr_63567;
});
var cljs$core$async$state_machine__56227__auto____1 = (function (state_63549){
while(true){
var ret_value__56228__auto__ = (function (){try{while(true){
var result__56229__auto__ = switch__56226__auto__(state_63549);
if(cljs.core.keyword_identical_QMARK_(result__56229__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__56229__auto__;
}
break;
}
}catch (e63568){var ex__56230__auto__ = e63568;
var statearr_63569_64378 = state_63549;
(statearr_63569_64378[(2)] = ex__56230__auto__);


if(cljs.core.seq((state_63549[(4)]))){
var statearr_63570_64379 = state_63549;
(statearr_63570_64379[(1)] = cljs.core.first((state_63549[(4)])));

} else {
throw ex__56230__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__56228__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__64380 = state_63549;
state_63549 = G__64380;
continue;
} else {
return ret_value__56228__auto__;
}
break;
}
});
cljs$core$async$state_machine__56227__auto__ = function(state_63549){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__56227__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__56227__auto____1.call(this,state_63549);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__56227__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__56227__auto____0;
cljs$core$async$state_machine__56227__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__56227__auto____1;
return cljs$core$async$state_machine__56227__auto__;
})()
})();
var state__56251__auto__ = (function (){var statearr_63571 = f__56250__auto__();
(statearr_63571[(6)] = c__56249__auto___64361);

return statearr_63571;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__56251__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__63573 = arguments.length;
switch (G__63573) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__56249__auto___64382 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__56250__auto__ = (function (){var switch__56226__auto__ = (function (state_63611){
var state_val_63612 = (state_63611[(1)]);
if((state_val_63612 === (7))){
var inst_63607 = (state_63611[(2)]);
var state_63611__$1 = state_63611;
var statearr_63613_64383 = state_63611__$1;
(statearr_63613_64383[(2)] = inst_63607);

(statearr_63613_64383[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63612 === (1))){
var inst_63574 = (new Array(n));
var inst_63575 = inst_63574;
var inst_63576 = (0);
var state_63611__$1 = (function (){var statearr_63614 = state_63611;
(statearr_63614[(7)] = inst_63575);

(statearr_63614[(8)] = inst_63576);

return statearr_63614;
})();
var statearr_63615_64384 = state_63611__$1;
(statearr_63615_64384[(2)] = null);

(statearr_63615_64384[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63612 === (4))){
var inst_63579 = (state_63611[(9)]);
var inst_63579__$1 = (state_63611[(2)]);
var inst_63580 = (inst_63579__$1 == null);
var inst_63581 = cljs.core.not(inst_63580);
var state_63611__$1 = (function (){var statearr_63616 = state_63611;
(statearr_63616[(9)] = inst_63579__$1);

return statearr_63616;
})();
if(inst_63581){
var statearr_63617_64385 = state_63611__$1;
(statearr_63617_64385[(1)] = (5));

} else {
var statearr_63618_64386 = state_63611__$1;
(statearr_63618_64386[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63612 === (15))){
var inst_63601 = (state_63611[(2)]);
var state_63611__$1 = state_63611;
var statearr_63619_64387 = state_63611__$1;
(statearr_63619_64387[(2)] = inst_63601);

(statearr_63619_64387[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63612 === (13))){
var state_63611__$1 = state_63611;
var statearr_63620_64388 = state_63611__$1;
(statearr_63620_64388[(2)] = null);

(statearr_63620_64388[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63612 === (6))){
var inst_63576 = (state_63611[(8)]);
var inst_63597 = (inst_63576 > (0));
var state_63611__$1 = state_63611;
if(cljs.core.truth_(inst_63597)){
var statearr_63621_64389 = state_63611__$1;
(statearr_63621_64389[(1)] = (12));

} else {
var statearr_63622_64391 = state_63611__$1;
(statearr_63622_64391[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63612 === (3))){
var inst_63609 = (state_63611[(2)]);
var state_63611__$1 = state_63611;
return cljs.core.async.impl.ioc_helpers.return_chan(state_63611__$1,inst_63609);
} else {
if((state_val_63612 === (12))){
var inst_63575 = (state_63611[(7)]);
var inst_63599 = cljs.core.vec(inst_63575);
var state_63611__$1 = state_63611;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_63611__$1,(15),out,inst_63599);
} else {
if((state_val_63612 === (2))){
var state_63611__$1 = state_63611;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_63611__$1,(4),ch);
} else {
if((state_val_63612 === (11))){
var inst_63591 = (state_63611[(2)]);
var inst_63592 = (new Array(n));
var inst_63575 = inst_63592;
var inst_63576 = (0);
var state_63611__$1 = (function (){var statearr_63623 = state_63611;
(statearr_63623[(10)] = inst_63591);

(statearr_63623[(7)] = inst_63575);

(statearr_63623[(8)] = inst_63576);

return statearr_63623;
})();
var statearr_63624_64393 = state_63611__$1;
(statearr_63624_64393[(2)] = null);

(statearr_63624_64393[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63612 === (9))){
var inst_63575 = (state_63611[(7)]);
var inst_63589 = cljs.core.vec(inst_63575);
var state_63611__$1 = state_63611;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_63611__$1,(11),out,inst_63589);
} else {
if((state_val_63612 === (5))){
var inst_63575 = (state_63611[(7)]);
var inst_63579 = (state_63611[(9)]);
var inst_63576 = (state_63611[(8)]);
var inst_63584 = (state_63611[(11)]);
var inst_63583 = (inst_63575[inst_63576] = inst_63579);
var inst_63584__$1 = (inst_63576 + (1));
var inst_63585 = (inst_63584__$1 < n);
var state_63611__$1 = (function (){var statearr_63625 = state_63611;
(statearr_63625[(12)] = inst_63583);

(statearr_63625[(11)] = inst_63584__$1);

return statearr_63625;
})();
if(cljs.core.truth_(inst_63585)){
var statearr_63626_64394 = state_63611__$1;
(statearr_63626_64394[(1)] = (8));

} else {
var statearr_63627_64395 = state_63611__$1;
(statearr_63627_64395[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63612 === (14))){
var inst_63604 = (state_63611[(2)]);
var inst_63605 = cljs.core.async.close_BANG_(out);
var state_63611__$1 = (function (){var statearr_63629 = state_63611;
(statearr_63629[(13)] = inst_63604);

return statearr_63629;
})();
var statearr_63630_64396 = state_63611__$1;
(statearr_63630_64396[(2)] = inst_63605);

(statearr_63630_64396[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63612 === (10))){
var inst_63595 = (state_63611[(2)]);
var state_63611__$1 = state_63611;
var statearr_63631_64397 = state_63611__$1;
(statearr_63631_64397[(2)] = inst_63595);

(statearr_63631_64397[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63612 === (8))){
var inst_63575 = (state_63611[(7)]);
var inst_63584 = (state_63611[(11)]);
var tmp63628 = inst_63575;
var inst_63575__$1 = tmp63628;
var inst_63576 = inst_63584;
var state_63611__$1 = (function (){var statearr_63632 = state_63611;
(statearr_63632[(7)] = inst_63575__$1);

(statearr_63632[(8)] = inst_63576);

return statearr_63632;
})();
var statearr_63633_64398 = state_63611__$1;
(statearr_63633_64398[(2)] = null);

(statearr_63633_64398[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__56227__auto__ = null;
var cljs$core$async$state_machine__56227__auto____0 = (function (){
var statearr_63634 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_63634[(0)] = cljs$core$async$state_machine__56227__auto__);

(statearr_63634[(1)] = (1));

return statearr_63634;
});
var cljs$core$async$state_machine__56227__auto____1 = (function (state_63611){
while(true){
var ret_value__56228__auto__ = (function (){try{while(true){
var result__56229__auto__ = switch__56226__auto__(state_63611);
if(cljs.core.keyword_identical_QMARK_(result__56229__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__56229__auto__;
}
break;
}
}catch (e63635){var ex__56230__auto__ = e63635;
var statearr_63636_64400 = state_63611;
(statearr_63636_64400[(2)] = ex__56230__auto__);


if(cljs.core.seq((state_63611[(4)]))){
var statearr_63637_64401 = state_63611;
(statearr_63637_64401[(1)] = cljs.core.first((state_63611[(4)])));

} else {
throw ex__56230__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__56228__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__64402 = state_63611;
state_63611 = G__64402;
continue;
} else {
return ret_value__56228__auto__;
}
break;
}
});
cljs$core$async$state_machine__56227__auto__ = function(state_63611){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__56227__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__56227__auto____1.call(this,state_63611);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__56227__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__56227__auto____0;
cljs$core$async$state_machine__56227__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__56227__auto____1;
return cljs$core$async$state_machine__56227__auto__;
})()
})();
var state__56251__auto__ = (function (){var statearr_63638 = f__56250__auto__();
(statearr_63638[(6)] = c__56249__auto___64382);

return statearr_63638;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__56251__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__63640 = arguments.length;
switch (G__63640) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__56249__auto___64406 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__56250__auto__ = (function (){var switch__56226__auto__ = (function (state_63685){
var state_val_63686 = (state_63685[(1)]);
if((state_val_63686 === (7))){
var inst_63681 = (state_63685[(2)]);
var state_63685__$1 = state_63685;
var statearr_63687_64407 = state_63685__$1;
(statearr_63687_64407[(2)] = inst_63681);

(statearr_63687_64407[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63686 === (1))){
var inst_63641 = [];
var inst_63642 = inst_63641;
var inst_63643 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_63685__$1 = (function (){var statearr_63688 = state_63685;
(statearr_63688[(7)] = inst_63642);

(statearr_63688[(8)] = inst_63643);

return statearr_63688;
})();
var statearr_63689_64409 = state_63685__$1;
(statearr_63689_64409[(2)] = null);

(statearr_63689_64409[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63686 === (4))){
var inst_63646 = (state_63685[(9)]);
var inst_63646__$1 = (state_63685[(2)]);
var inst_63647 = (inst_63646__$1 == null);
var inst_63648 = cljs.core.not(inst_63647);
var state_63685__$1 = (function (){var statearr_63690 = state_63685;
(statearr_63690[(9)] = inst_63646__$1);

return statearr_63690;
})();
if(inst_63648){
var statearr_63691_64410 = state_63685__$1;
(statearr_63691_64410[(1)] = (5));

} else {
var statearr_63692_64411 = state_63685__$1;
(statearr_63692_64411[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63686 === (15))){
var inst_63642 = (state_63685[(7)]);
var inst_63673 = cljs.core.vec(inst_63642);
var state_63685__$1 = state_63685;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_63685__$1,(18),out,inst_63673);
} else {
if((state_val_63686 === (13))){
var inst_63668 = (state_63685[(2)]);
var state_63685__$1 = state_63685;
var statearr_63693_64413 = state_63685__$1;
(statearr_63693_64413[(2)] = inst_63668);

(statearr_63693_64413[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63686 === (6))){
var inst_63642 = (state_63685[(7)]);
var inst_63670 = inst_63642.length;
var inst_63671 = (inst_63670 > (0));
var state_63685__$1 = state_63685;
if(cljs.core.truth_(inst_63671)){
var statearr_63694_64414 = state_63685__$1;
(statearr_63694_64414[(1)] = (15));

} else {
var statearr_63695_64415 = state_63685__$1;
(statearr_63695_64415[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63686 === (17))){
var inst_63678 = (state_63685[(2)]);
var inst_63679 = cljs.core.async.close_BANG_(out);
var state_63685__$1 = (function (){var statearr_63696 = state_63685;
(statearr_63696[(10)] = inst_63678);

return statearr_63696;
})();
var statearr_63697_64417 = state_63685__$1;
(statearr_63697_64417[(2)] = inst_63679);

(statearr_63697_64417[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63686 === (3))){
var inst_63683 = (state_63685[(2)]);
var state_63685__$1 = state_63685;
return cljs.core.async.impl.ioc_helpers.return_chan(state_63685__$1,inst_63683);
} else {
if((state_val_63686 === (12))){
var inst_63642 = (state_63685[(7)]);
var inst_63661 = cljs.core.vec(inst_63642);
var state_63685__$1 = state_63685;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_63685__$1,(14),out,inst_63661);
} else {
if((state_val_63686 === (2))){
var state_63685__$1 = state_63685;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_63685__$1,(4),ch);
} else {
if((state_val_63686 === (11))){
var inst_63646 = (state_63685[(9)]);
var inst_63642 = (state_63685[(7)]);
var inst_63650 = (state_63685[(11)]);
var inst_63658 = inst_63642.push(inst_63646);
var tmp63698 = inst_63642;
var inst_63642__$1 = tmp63698;
var inst_63643 = inst_63650;
var state_63685__$1 = (function (){var statearr_63699 = state_63685;
(statearr_63699[(7)] = inst_63642__$1);

(statearr_63699[(8)] = inst_63643);

(statearr_63699[(12)] = inst_63658);

return statearr_63699;
})();
var statearr_63700_64418 = state_63685__$1;
(statearr_63700_64418[(2)] = null);

(statearr_63700_64418[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63686 === (9))){
var inst_63643 = (state_63685[(8)]);
var inst_63654 = cljs.core.keyword_identical_QMARK_(inst_63643,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_63685__$1 = state_63685;
var statearr_63701_64419 = state_63685__$1;
(statearr_63701_64419[(2)] = inst_63654);

(statearr_63701_64419[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63686 === (5))){
var inst_63646 = (state_63685[(9)]);
var inst_63650 = (state_63685[(11)]);
var inst_63643 = (state_63685[(8)]);
var inst_63651 = (state_63685[(13)]);
var inst_63650__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_63646) : f.call(null,inst_63646));
var inst_63651__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_63650__$1,inst_63643);
var state_63685__$1 = (function (){var statearr_63702 = state_63685;
(statearr_63702[(11)] = inst_63650__$1);

(statearr_63702[(13)] = inst_63651__$1);

return statearr_63702;
})();
if(inst_63651__$1){
var statearr_63703_64429 = state_63685__$1;
(statearr_63703_64429[(1)] = (8));

} else {
var statearr_63704_64430 = state_63685__$1;
(statearr_63704_64430[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63686 === (14))){
var inst_63646 = (state_63685[(9)]);
var inst_63650 = (state_63685[(11)]);
var inst_63663 = (state_63685[(2)]);
var inst_63664 = [];
var inst_63665 = inst_63664.push(inst_63646);
var inst_63642 = inst_63664;
var inst_63643 = inst_63650;
var state_63685__$1 = (function (){var statearr_63705 = state_63685;
(statearr_63705[(14)] = inst_63663);

(statearr_63705[(7)] = inst_63642);

(statearr_63705[(15)] = inst_63665);

(statearr_63705[(8)] = inst_63643);

return statearr_63705;
})();
var statearr_63706_64437 = state_63685__$1;
(statearr_63706_64437[(2)] = null);

(statearr_63706_64437[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63686 === (16))){
var state_63685__$1 = state_63685;
var statearr_63707_64438 = state_63685__$1;
(statearr_63707_64438[(2)] = null);

(statearr_63707_64438[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63686 === (10))){
var inst_63656 = (state_63685[(2)]);
var state_63685__$1 = state_63685;
if(cljs.core.truth_(inst_63656)){
var statearr_63708_64439 = state_63685__$1;
(statearr_63708_64439[(1)] = (11));

} else {
var statearr_63709_64440 = state_63685__$1;
(statearr_63709_64440[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63686 === (18))){
var inst_63675 = (state_63685[(2)]);
var state_63685__$1 = state_63685;
var statearr_63710_64441 = state_63685__$1;
(statearr_63710_64441[(2)] = inst_63675);

(statearr_63710_64441[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63686 === (8))){
var inst_63651 = (state_63685[(13)]);
var state_63685__$1 = state_63685;
var statearr_63711_64442 = state_63685__$1;
(statearr_63711_64442[(2)] = inst_63651);

(statearr_63711_64442[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__56227__auto__ = null;
var cljs$core$async$state_machine__56227__auto____0 = (function (){
var statearr_63712 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_63712[(0)] = cljs$core$async$state_machine__56227__auto__);

(statearr_63712[(1)] = (1));

return statearr_63712;
});
var cljs$core$async$state_machine__56227__auto____1 = (function (state_63685){
while(true){
var ret_value__56228__auto__ = (function (){try{while(true){
var result__56229__auto__ = switch__56226__auto__(state_63685);
if(cljs.core.keyword_identical_QMARK_(result__56229__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__56229__auto__;
}
break;
}
}catch (e63713){var ex__56230__auto__ = e63713;
var statearr_63714_64451 = state_63685;
(statearr_63714_64451[(2)] = ex__56230__auto__);


if(cljs.core.seq((state_63685[(4)]))){
var statearr_63715_64452 = state_63685;
(statearr_63715_64452[(1)] = cljs.core.first((state_63685[(4)])));

} else {
throw ex__56230__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__56228__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__64457 = state_63685;
state_63685 = G__64457;
continue;
} else {
return ret_value__56228__auto__;
}
break;
}
});
cljs$core$async$state_machine__56227__auto__ = function(state_63685){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__56227__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__56227__auto____1.call(this,state_63685);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__56227__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__56227__auto____0;
cljs$core$async$state_machine__56227__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__56227__auto____1;
return cljs$core$async$state_machine__56227__auto__;
})()
})();
var state__56251__auto__ = (function (){var statearr_63716 = f__56250__auto__();
(statearr_63716[(6)] = c__56249__auto___64406);

return statearr_63716;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__56251__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
