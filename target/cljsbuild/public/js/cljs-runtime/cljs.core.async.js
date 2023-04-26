goog.provide('cljs.core.async');
goog.scope(function(){
  cljs.core.async.goog$module$goog$array = goog.module.get('goog.array');
});
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__61493 = arguments.length;
switch (G__61493) {
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async61495 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async61495 = (function (f,blockable,meta61496){
this.f = f;
this.blockable = blockable;
this.meta61496 = meta61496;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async61495.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_61497,meta61496__$1){
var self__ = this;
var _61497__$1 = this;
return (new cljs.core.async.t_cljs$core$async61495(self__.f,self__.blockable,meta61496__$1));
}));

(cljs.core.async.t_cljs$core$async61495.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_61497){
var self__ = this;
var _61497__$1 = this;
return self__.meta61496;
}));

(cljs.core.async.t_cljs$core$async61495.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async61495.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async61495.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async61495.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async61495.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta61496","meta61496",338141912,null)], null);
}));

(cljs.core.async.t_cljs$core$async61495.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async61495.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async61495");

(cljs.core.async.t_cljs$core$async61495.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async61495");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async61495.
 */
cljs.core.async.__GT_t_cljs$core$async61495 = (function cljs$core$async$__GT_t_cljs$core$async61495(f__$1,blockable__$1,meta61496){
return (new cljs.core.async.t_cljs$core$async61495(f__$1,blockable__$1,meta61496));
});

}

return (new cljs.core.async.t_cljs$core$async61495(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__61505 = arguments.length;
switch (G__61505) {
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
var G__61511 = arguments.length;
switch (G__61511) {
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
var G__61519 = arguments.length;
switch (G__61519) {
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
var val_63227 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_63227) : fn1.call(null,val_63227));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_63227) : fn1.call(null,val_63227));
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
var G__61529 = arguments.length;
switch (G__61529) {
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
var n__5636__auto___63243 = n;
var x_63244 = (0);
while(true){
if((x_63244 < n__5636__auto___63243)){
(a[x_63244] = x_63244);

var G__63245 = (x_63244 + (1));
x_63244 = G__63245;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async61541 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async61541 = (function (flag,meta61542){
this.flag = flag;
this.meta61542 = meta61542;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async61541.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_61543,meta61542__$1){
var self__ = this;
var _61543__$1 = this;
return (new cljs.core.async.t_cljs$core$async61541(self__.flag,meta61542__$1));
}));

(cljs.core.async.t_cljs$core$async61541.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_61543){
var self__ = this;
var _61543__$1 = this;
return self__.meta61542;
}));

(cljs.core.async.t_cljs$core$async61541.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async61541.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async61541.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async61541.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async61541.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta61542","meta61542",-1271165253,null)], null);
}));

(cljs.core.async.t_cljs$core$async61541.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async61541.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async61541");

(cljs.core.async.t_cljs$core$async61541.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async61541");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async61541.
 */
cljs.core.async.__GT_t_cljs$core$async61541 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async61541(flag__$1,meta61542){
return (new cljs.core.async.t_cljs$core$async61541(flag__$1,meta61542));
});

}

return (new cljs.core.async.t_cljs$core$async61541(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async61559 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async61559 = (function (flag,cb,meta61560){
this.flag = flag;
this.cb = cb;
this.meta61560 = meta61560;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async61559.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_61561,meta61560__$1){
var self__ = this;
var _61561__$1 = this;
return (new cljs.core.async.t_cljs$core$async61559(self__.flag,self__.cb,meta61560__$1));
}));

(cljs.core.async.t_cljs$core$async61559.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_61561){
var self__ = this;
var _61561__$1 = this;
return self__.meta61560;
}));

(cljs.core.async.t_cljs$core$async61559.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async61559.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async61559.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async61559.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async61559.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta61560","meta61560",195131985,null)], null);
}));

(cljs.core.async.t_cljs$core$async61559.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async61559.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async61559");

(cljs.core.async.t_cljs$core$async61559.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async61559");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async61559.
 */
cljs.core.async.__GT_t_cljs$core$async61559 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async61559(flag__$1,cb__$1,meta61560){
return (new cljs.core.async.t_cljs$core$async61559(flag__$1,cb__$1,meta61560));
});

}

return (new cljs.core.async.t_cljs$core$async61559(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__61576_SHARP_){
var G__61581 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__61576_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__61581) : fret.call(null,G__61581));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__61577_SHARP_){
var G__61582 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__61577_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__61582) : fret.call(null,G__61582));
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
var G__63257 = (i + (1));
i = G__63257;
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
var len__5769__auto___63258 = arguments.length;
var i__5770__auto___63259 = (0);
while(true){
if((i__5770__auto___63259 < len__5769__auto___63258)){
args__5775__auto__.push((arguments[i__5770__auto___63259]));

var G__63261 = (i__5770__auto___63259 + (1));
i__5770__auto___63259 = G__63261;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__61587){
var map__61589 = p__61587;
var map__61589__$1 = cljs.core.__destructure_map(map__61589);
var opts = map__61589__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq61583){
var G__61584 = cljs.core.first(seq61583);
var seq61583__$1 = cljs.core.next(seq61583);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__61584,seq61583__$1);
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
var G__61591 = arguments.length;
switch (G__61591) {
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
var c__61429__auto___63263 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__61430__auto__ = (function (){var switch__61339__auto__ = (function (state_61622){
var state_val_61623 = (state_61622[(1)]);
if((state_val_61623 === (7))){
var inst_61618 = (state_61622[(2)]);
var state_61622__$1 = state_61622;
var statearr_61628_63266 = state_61622__$1;
(statearr_61628_63266[(2)] = inst_61618);

(statearr_61628_63266[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61623 === (1))){
var state_61622__$1 = state_61622;
var statearr_61629_63267 = state_61622__$1;
(statearr_61629_63267[(2)] = null);

(statearr_61629_63267[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61623 === (4))){
var inst_61600 = (state_61622[(7)]);
var inst_61600__$1 = (state_61622[(2)]);
var inst_61602 = (inst_61600__$1 == null);
var state_61622__$1 = (function (){var statearr_61630 = state_61622;
(statearr_61630[(7)] = inst_61600__$1);

return statearr_61630;
})();
if(cljs.core.truth_(inst_61602)){
var statearr_61631_63268 = state_61622__$1;
(statearr_61631_63268[(1)] = (5));

} else {
var statearr_61632_63269 = state_61622__$1;
(statearr_61632_63269[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61623 === (13))){
var state_61622__$1 = state_61622;
var statearr_61633_63270 = state_61622__$1;
(statearr_61633_63270[(2)] = null);

(statearr_61633_63270[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61623 === (6))){
var inst_61600 = (state_61622[(7)]);
var state_61622__$1 = state_61622;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_61622__$1,(11),to,inst_61600);
} else {
if((state_val_61623 === (3))){
var inst_61620 = (state_61622[(2)]);
var state_61622__$1 = state_61622;
return cljs.core.async.impl.ioc_helpers.return_chan(state_61622__$1,inst_61620);
} else {
if((state_val_61623 === (12))){
var state_61622__$1 = state_61622;
var statearr_61634_63271 = state_61622__$1;
(statearr_61634_63271[(2)] = null);

(statearr_61634_63271[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61623 === (2))){
var state_61622__$1 = state_61622;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_61622__$1,(4),from);
} else {
if((state_val_61623 === (11))){
var inst_61611 = (state_61622[(2)]);
var state_61622__$1 = state_61622;
if(cljs.core.truth_(inst_61611)){
var statearr_61635_63272 = state_61622__$1;
(statearr_61635_63272[(1)] = (12));

} else {
var statearr_61636_63273 = state_61622__$1;
(statearr_61636_63273[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61623 === (9))){
var state_61622__$1 = state_61622;
var statearr_61637_63274 = state_61622__$1;
(statearr_61637_63274[(2)] = null);

(statearr_61637_63274[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61623 === (5))){
var state_61622__$1 = state_61622;
if(cljs.core.truth_(close_QMARK_)){
var statearr_61638_63275 = state_61622__$1;
(statearr_61638_63275[(1)] = (8));

} else {
var statearr_61639_63276 = state_61622__$1;
(statearr_61639_63276[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61623 === (14))){
var inst_61616 = (state_61622[(2)]);
var state_61622__$1 = state_61622;
var statearr_61640_63277 = state_61622__$1;
(statearr_61640_63277[(2)] = inst_61616);

(statearr_61640_63277[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61623 === (10))){
var inst_61608 = (state_61622[(2)]);
var state_61622__$1 = state_61622;
var statearr_61641_63278 = state_61622__$1;
(statearr_61641_63278[(2)] = inst_61608);

(statearr_61641_63278[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61623 === (8))){
var inst_61605 = cljs.core.async.close_BANG_(to);
var state_61622__$1 = state_61622;
var statearr_61642_63279 = state_61622__$1;
(statearr_61642_63279[(2)] = inst_61605);

(statearr_61642_63279[(1)] = (10));


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
var cljs$core$async$state_machine__61340__auto__ = null;
var cljs$core$async$state_machine__61340__auto____0 = (function (){
var statearr_61643 = [null,null,null,null,null,null,null,null];
(statearr_61643[(0)] = cljs$core$async$state_machine__61340__auto__);

(statearr_61643[(1)] = (1));

return statearr_61643;
});
var cljs$core$async$state_machine__61340__auto____1 = (function (state_61622){
while(true){
var ret_value__61341__auto__ = (function (){try{while(true){
var result__61342__auto__ = switch__61339__auto__(state_61622);
if(cljs.core.keyword_identical_QMARK_(result__61342__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__61342__auto__;
}
break;
}
}catch (e61644){var ex__61343__auto__ = e61644;
var statearr_61645_63281 = state_61622;
(statearr_61645_63281[(2)] = ex__61343__auto__);


if(cljs.core.seq((state_61622[(4)]))){
var statearr_61646_63282 = state_61622;
(statearr_61646_63282[(1)] = cljs.core.first((state_61622[(4)])));

} else {
throw ex__61343__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__61341__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__63286 = state_61622;
state_61622 = G__63286;
continue;
} else {
return ret_value__61341__auto__;
}
break;
}
});
cljs$core$async$state_machine__61340__auto__ = function(state_61622){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__61340__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__61340__auto____1.call(this,state_61622);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__61340__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__61340__auto____0;
cljs$core$async$state_machine__61340__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__61340__auto____1;
return cljs$core$async$state_machine__61340__auto__;
})()
})();
var state__61431__auto__ = (function (){var statearr_61647 = f__61430__auto__();
(statearr_61647[(6)] = c__61429__auto___63263);

return statearr_61647;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__61431__auto__);
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
var process__$1 = (function (p__61648){
var vec__61649 = p__61648;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61649,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61649,(1),null);
var job = vec__61649;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__61429__auto___63289 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__61430__auto__ = (function (){var switch__61339__auto__ = (function (state_61656){
var state_val_61657 = (state_61656[(1)]);
if((state_val_61657 === (1))){
var state_61656__$1 = state_61656;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_61656__$1,(2),res,v);
} else {
if((state_val_61657 === (2))){
var inst_61653 = (state_61656[(2)]);
var inst_61654 = cljs.core.async.close_BANG_(res);
var state_61656__$1 = (function (){var statearr_61659 = state_61656;
(statearr_61659[(7)] = inst_61653);

return statearr_61659;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_61656__$1,inst_61654);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__61340__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__61340__auto____0 = (function (){
var statearr_61662 = [null,null,null,null,null,null,null,null];
(statearr_61662[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__61340__auto__);

(statearr_61662[(1)] = (1));

return statearr_61662;
});
var cljs$core$async$pipeline_STAR__$_state_machine__61340__auto____1 = (function (state_61656){
while(true){
var ret_value__61341__auto__ = (function (){try{while(true){
var result__61342__auto__ = switch__61339__auto__(state_61656);
if(cljs.core.keyword_identical_QMARK_(result__61342__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__61342__auto__;
}
break;
}
}catch (e61664){var ex__61343__auto__ = e61664;
var statearr_61666_63310 = state_61656;
(statearr_61666_63310[(2)] = ex__61343__auto__);


if(cljs.core.seq((state_61656[(4)]))){
var statearr_61667_63311 = state_61656;
(statearr_61667_63311[(1)] = cljs.core.first((state_61656[(4)])));

} else {
throw ex__61343__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__61341__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__63312 = state_61656;
state_61656 = G__63312;
continue;
} else {
return ret_value__61341__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__61340__auto__ = function(state_61656){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__61340__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__61340__auto____1.call(this,state_61656);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__61340__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__61340__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__61340__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__61340__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__61340__auto__;
})()
})();
var state__61431__auto__ = (function (){var statearr_61668 = f__61430__auto__();
(statearr_61668[(6)] = c__61429__auto___63289);

return statearr_61668;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__61431__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__61669){
var vec__61670 = p__61669;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61670,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61670,(1),null);
var job = vec__61670;
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
var n__5636__auto___63314 = n;
var __63315 = (0);
while(true){
if((__63315 < n__5636__auto___63314)){
var G__61673_63316 = type;
var G__61673_63317__$1 = (((G__61673_63316 instanceof cljs.core.Keyword))?G__61673_63316.fqn:null);
switch (G__61673_63317__$1) {
case "compute":
var c__61429__auto___63319 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__63315,c__61429__auto___63319,G__61673_63316,G__61673_63317__$1,n__5636__auto___63314,jobs,results,process__$1,async){
return (function (){
var f__61430__auto__ = (function (){var switch__61339__auto__ = ((function (__63315,c__61429__auto___63319,G__61673_63316,G__61673_63317__$1,n__5636__auto___63314,jobs,results,process__$1,async){
return (function (state_61686){
var state_val_61687 = (state_61686[(1)]);
if((state_val_61687 === (1))){
var state_61686__$1 = state_61686;
var statearr_61688_63320 = state_61686__$1;
(statearr_61688_63320[(2)] = null);

(statearr_61688_63320[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61687 === (2))){
var state_61686__$1 = state_61686;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_61686__$1,(4),jobs);
} else {
if((state_val_61687 === (3))){
var inst_61684 = (state_61686[(2)]);
var state_61686__$1 = state_61686;
return cljs.core.async.impl.ioc_helpers.return_chan(state_61686__$1,inst_61684);
} else {
if((state_val_61687 === (4))){
var inst_61676 = (state_61686[(2)]);
var inst_61677 = process__$1(inst_61676);
var state_61686__$1 = state_61686;
if(cljs.core.truth_(inst_61677)){
var statearr_61689_63324 = state_61686__$1;
(statearr_61689_63324[(1)] = (5));

} else {
var statearr_61690_63325 = state_61686__$1;
(statearr_61690_63325[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61687 === (5))){
var state_61686__$1 = state_61686;
var statearr_61691_63326 = state_61686__$1;
(statearr_61691_63326[(2)] = null);

(statearr_61691_63326[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61687 === (6))){
var state_61686__$1 = state_61686;
var statearr_61692_63328 = state_61686__$1;
(statearr_61692_63328[(2)] = null);

(statearr_61692_63328[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61687 === (7))){
var inst_61682 = (state_61686[(2)]);
var state_61686__$1 = state_61686;
var statearr_61693_63330 = state_61686__$1;
(statearr_61693_63330[(2)] = inst_61682);

(statearr_61693_63330[(1)] = (3));


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
});})(__63315,c__61429__auto___63319,G__61673_63316,G__61673_63317__$1,n__5636__auto___63314,jobs,results,process__$1,async))
;
return ((function (__63315,switch__61339__auto__,c__61429__auto___63319,G__61673_63316,G__61673_63317__$1,n__5636__auto___63314,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__61340__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__61340__auto____0 = (function (){
var statearr_61694 = [null,null,null,null,null,null,null];
(statearr_61694[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__61340__auto__);

(statearr_61694[(1)] = (1));

return statearr_61694;
});
var cljs$core$async$pipeline_STAR__$_state_machine__61340__auto____1 = (function (state_61686){
while(true){
var ret_value__61341__auto__ = (function (){try{while(true){
var result__61342__auto__ = switch__61339__auto__(state_61686);
if(cljs.core.keyword_identical_QMARK_(result__61342__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__61342__auto__;
}
break;
}
}catch (e61695){var ex__61343__auto__ = e61695;
var statearr_61696_63332 = state_61686;
(statearr_61696_63332[(2)] = ex__61343__auto__);


if(cljs.core.seq((state_61686[(4)]))){
var statearr_61697_63334 = state_61686;
(statearr_61697_63334[(1)] = cljs.core.first((state_61686[(4)])));

} else {
throw ex__61343__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__61341__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__63336 = state_61686;
state_61686 = G__63336;
continue;
} else {
return ret_value__61341__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__61340__auto__ = function(state_61686){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__61340__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__61340__auto____1.call(this,state_61686);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__61340__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__61340__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__61340__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__61340__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__61340__auto__;
})()
;})(__63315,switch__61339__auto__,c__61429__auto___63319,G__61673_63316,G__61673_63317__$1,n__5636__auto___63314,jobs,results,process__$1,async))
})();
var state__61431__auto__ = (function (){var statearr_61698 = f__61430__auto__();
(statearr_61698[(6)] = c__61429__auto___63319);

return statearr_61698;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__61431__auto__);
});})(__63315,c__61429__auto___63319,G__61673_63316,G__61673_63317__$1,n__5636__auto___63314,jobs,results,process__$1,async))
);


break;
case "async":
var c__61429__auto___63337 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__63315,c__61429__auto___63337,G__61673_63316,G__61673_63317__$1,n__5636__auto___63314,jobs,results,process__$1,async){
return (function (){
var f__61430__auto__ = (function (){var switch__61339__auto__ = ((function (__63315,c__61429__auto___63337,G__61673_63316,G__61673_63317__$1,n__5636__auto___63314,jobs,results,process__$1,async){
return (function (state_61711){
var state_val_61712 = (state_61711[(1)]);
if((state_val_61712 === (1))){
var state_61711__$1 = state_61711;
var statearr_61713_63340 = state_61711__$1;
(statearr_61713_63340[(2)] = null);

(statearr_61713_63340[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61712 === (2))){
var state_61711__$1 = state_61711;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_61711__$1,(4),jobs);
} else {
if((state_val_61712 === (3))){
var inst_61709 = (state_61711[(2)]);
var state_61711__$1 = state_61711;
return cljs.core.async.impl.ioc_helpers.return_chan(state_61711__$1,inst_61709);
} else {
if((state_val_61712 === (4))){
var inst_61701 = (state_61711[(2)]);
var inst_61702 = async(inst_61701);
var state_61711__$1 = state_61711;
if(cljs.core.truth_(inst_61702)){
var statearr_61714_63343 = state_61711__$1;
(statearr_61714_63343[(1)] = (5));

} else {
var statearr_61715_63344 = state_61711__$1;
(statearr_61715_63344[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61712 === (5))){
var state_61711__$1 = state_61711;
var statearr_61716_63345 = state_61711__$1;
(statearr_61716_63345[(2)] = null);

(statearr_61716_63345[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61712 === (6))){
var state_61711__$1 = state_61711;
var statearr_61717_63347 = state_61711__$1;
(statearr_61717_63347[(2)] = null);

(statearr_61717_63347[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61712 === (7))){
var inst_61707 = (state_61711[(2)]);
var state_61711__$1 = state_61711;
var statearr_61718_63348 = state_61711__$1;
(statearr_61718_63348[(2)] = inst_61707);

(statearr_61718_63348[(1)] = (3));


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
});})(__63315,c__61429__auto___63337,G__61673_63316,G__61673_63317__$1,n__5636__auto___63314,jobs,results,process__$1,async))
;
return ((function (__63315,switch__61339__auto__,c__61429__auto___63337,G__61673_63316,G__61673_63317__$1,n__5636__auto___63314,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__61340__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__61340__auto____0 = (function (){
var statearr_61722 = [null,null,null,null,null,null,null];
(statearr_61722[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__61340__auto__);

(statearr_61722[(1)] = (1));

return statearr_61722;
});
var cljs$core$async$pipeline_STAR__$_state_machine__61340__auto____1 = (function (state_61711){
while(true){
var ret_value__61341__auto__ = (function (){try{while(true){
var result__61342__auto__ = switch__61339__auto__(state_61711);
if(cljs.core.keyword_identical_QMARK_(result__61342__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__61342__auto__;
}
break;
}
}catch (e61723){var ex__61343__auto__ = e61723;
var statearr_61724_63350 = state_61711;
(statearr_61724_63350[(2)] = ex__61343__auto__);


if(cljs.core.seq((state_61711[(4)]))){
var statearr_61725_63351 = state_61711;
(statearr_61725_63351[(1)] = cljs.core.first((state_61711[(4)])));

} else {
throw ex__61343__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__61341__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__63353 = state_61711;
state_61711 = G__63353;
continue;
} else {
return ret_value__61341__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__61340__auto__ = function(state_61711){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__61340__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__61340__auto____1.call(this,state_61711);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__61340__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__61340__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__61340__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__61340__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__61340__auto__;
})()
;})(__63315,switch__61339__auto__,c__61429__auto___63337,G__61673_63316,G__61673_63317__$1,n__5636__auto___63314,jobs,results,process__$1,async))
})();
var state__61431__auto__ = (function (){var statearr_61727 = f__61430__auto__();
(statearr_61727[(6)] = c__61429__auto___63337);

return statearr_61727;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__61431__auto__);
});})(__63315,c__61429__auto___63337,G__61673_63316,G__61673_63317__$1,n__5636__auto___63314,jobs,results,process__$1,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__61673_63317__$1)].join('')));

}

var G__63354 = (__63315 + (1));
__63315 = G__63354;
continue;
} else {
}
break;
}

var c__61429__auto___63355 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__61430__auto__ = (function (){var switch__61339__auto__ = (function (state_61749){
var state_val_61750 = (state_61749[(1)]);
if((state_val_61750 === (7))){
var inst_61745 = (state_61749[(2)]);
var state_61749__$1 = state_61749;
var statearr_61753_63357 = state_61749__$1;
(statearr_61753_63357[(2)] = inst_61745);

(statearr_61753_63357[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61750 === (1))){
var state_61749__$1 = state_61749;
var statearr_61754_63358 = state_61749__$1;
(statearr_61754_63358[(2)] = null);

(statearr_61754_63358[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61750 === (4))){
var inst_61730 = (state_61749[(7)]);
var inst_61730__$1 = (state_61749[(2)]);
var inst_61731 = (inst_61730__$1 == null);
var state_61749__$1 = (function (){var statearr_61755 = state_61749;
(statearr_61755[(7)] = inst_61730__$1);

return statearr_61755;
})();
if(cljs.core.truth_(inst_61731)){
var statearr_61756_63359 = state_61749__$1;
(statearr_61756_63359[(1)] = (5));

} else {
var statearr_61757_63360 = state_61749__$1;
(statearr_61757_63360[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61750 === (6))){
var inst_61730 = (state_61749[(7)]);
var inst_61735 = (state_61749[(8)]);
var inst_61735__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_61736 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_61737 = [inst_61730,inst_61735__$1];
var inst_61738 = (new cljs.core.PersistentVector(null,2,(5),inst_61736,inst_61737,null));
var state_61749__$1 = (function (){var statearr_61759 = state_61749;
(statearr_61759[(8)] = inst_61735__$1);

return statearr_61759;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_61749__$1,(8),jobs,inst_61738);
} else {
if((state_val_61750 === (3))){
var inst_61747 = (state_61749[(2)]);
var state_61749__$1 = state_61749;
return cljs.core.async.impl.ioc_helpers.return_chan(state_61749__$1,inst_61747);
} else {
if((state_val_61750 === (2))){
var state_61749__$1 = state_61749;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_61749__$1,(4),from);
} else {
if((state_val_61750 === (9))){
var inst_61742 = (state_61749[(2)]);
var state_61749__$1 = (function (){var statearr_61761 = state_61749;
(statearr_61761[(9)] = inst_61742);

return statearr_61761;
})();
var statearr_61762_63364 = state_61749__$1;
(statearr_61762_63364[(2)] = null);

(statearr_61762_63364[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61750 === (5))){
var inst_61733 = cljs.core.async.close_BANG_(jobs);
var state_61749__$1 = state_61749;
var statearr_61763_63365 = state_61749__$1;
(statearr_61763_63365[(2)] = inst_61733);

(statearr_61763_63365[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61750 === (8))){
var inst_61735 = (state_61749[(8)]);
var inst_61740 = (state_61749[(2)]);
var state_61749__$1 = (function (){var statearr_61766 = state_61749;
(statearr_61766[(10)] = inst_61740);

return statearr_61766;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_61749__$1,(9),results,inst_61735);
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
var cljs$core$async$pipeline_STAR__$_state_machine__61340__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__61340__auto____0 = (function (){
var statearr_61767 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_61767[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__61340__auto__);

(statearr_61767[(1)] = (1));

return statearr_61767;
});
var cljs$core$async$pipeline_STAR__$_state_machine__61340__auto____1 = (function (state_61749){
while(true){
var ret_value__61341__auto__ = (function (){try{while(true){
var result__61342__auto__ = switch__61339__auto__(state_61749);
if(cljs.core.keyword_identical_QMARK_(result__61342__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__61342__auto__;
}
break;
}
}catch (e61768){var ex__61343__auto__ = e61768;
var statearr_61769_63366 = state_61749;
(statearr_61769_63366[(2)] = ex__61343__auto__);


if(cljs.core.seq((state_61749[(4)]))){
var statearr_61770_63367 = state_61749;
(statearr_61770_63367[(1)] = cljs.core.first((state_61749[(4)])));

} else {
throw ex__61343__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__61341__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__63368 = state_61749;
state_61749 = G__63368;
continue;
} else {
return ret_value__61341__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__61340__auto__ = function(state_61749){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__61340__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__61340__auto____1.call(this,state_61749);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__61340__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__61340__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__61340__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__61340__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__61340__auto__;
})()
})();
var state__61431__auto__ = (function (){var statearr_61772 = f__61430__auto__();
(statearr_61772[(6)] = c__61429__auto___63355);

return statearr_61772;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__61431__auto__);
}));


var c__61429__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__61430__auto__ = (function (){var switch__61339__auto__ = (function (state_61812){
var state_val_61813 = (state_61812[(1)]);
if((state_val_61813 === (7))){
var inst_61807 = (state_61812[(2)]);
var state_61812__$1 = state_61812;
var statearr_61814_63369 = state_61812__$1;
(statearr_61814_63369[(2)] = inst_61807);

(statearr_61814_63369[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61813 === (20))){
var state_61812__$1 = state_61812;
var statearr_61815_63370 = state_61812__$1;
(statearr_61815_63370[(2)] = null);

(statearr_61815_63370[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61813 === (1))){
var state_61812__$1 = state_61812;
var statearr_61816_63371 = state_61812__$1;
(statearr_61816_63371[(2)] = null);

(statearr_61816_63371[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61813 === (4))){
var inst_61775 = (state_61812[(7)]);
var inst_61775__$1 = (state_61812[(2)]);
var inst_61776 = (inst_61775__$1 == null);
var state_61812__$1 = (function (){var statearr_61817 = state_61812;
(statearr_61817[(7)] = inst_61775__$1);

return statearr_61817;
})();
if(cljs.core.truth_(inst_61776)){
var statearr_61819_63372 = state_61812__$1;
(statearr_61819_63372[(1)] = (5));

} else {
var statearr_61820_63373 = state_61812__$1;
(statearr_61820_63373[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61813 === (15))){
var inst_61788 = (state_61812[(8)]);
var state_61812__$1 = state_61812;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_61812__$1,(18),to,inst_61788);
} else {
if((state_val_61813 === (21))){
var inst_61802 = (state_61812[(2)]);
var state_61812__$1 = state_61812;
var statearr_61822_63379 = state_61812__$1;
(statearr_61822_63379[(2)] = inst_61802);

(statearr_61822_63379[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61813 === (13))){
var inst_61804 = (state_61812[(2)]);
var state_61812__$1 = (function (){var statearr_61823 = state_61812;
(statearr_61823[(9)] = inst_61804);

return statearr_61823;
})();
var statearr_61824_63381 = state_61812__$1;
(statearr_61824_63381[(2)] = null);

(statearr_61824_63381[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61813 === (6))){
var inst_61775 = (state_61812[(7)]);
var state_61812__$1 = state_61812;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_61812__$1,(11),inst_61775);
} else {
if((state_val_61813 === (17))){
var inst_61796 = (state_61812[(2)]);
var state_61812__$1 = state_61812;
if(cljs.core.truth_(inst_61796)){
var statearr_61825_63382 = state_61812__$1;
(statearr_61825_63382[(1)] = (19));

} else {
var statearr_61826_63383 = state_61812__$1;
(statearr_61826_63383[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61813 === (3))){
var inst_61809 = (state_61812[(2)]);
var state_61812__$1 = state_61812;
return cljs.core.async.impl.ioc_helpers.return_chan(state_61812__$1,inst_61809);
} else {
if((state_val_61813 === (12))){
var inst_61785 = (state_61812[(10)]);
var state_61812__$1 = state_61812;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_61812__$1,(14),inst_61785);
} else {
if((state_val_61813 === (2))){
var state_61812__$1 = state_61812;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_61812__$1,(4),results);
} else {
if((state_val_61813 === (19))){
var state_61812__$1 = state_61812;
var statearr_61829_63387 = state_61812__$1;
(statearr_61829_63387[(2)] = null);

(statearr_61829_63387[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61813 === (11))){
var inst_61785 = (state_61812[(2)]);
var state_61812__$1 = (function (){var statearr_61831 = state_61812;
(statearr_61831[(10)] = inst_61785);

return statearr_61831;
})();
var statearr_61832_63389 = state_61812__$1;
(statearr_61832_63389[(2)] = null);

(statearr_61832_63389[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61813 === (9))){
var state_61812__$1 = state_61812;
var statearr_61833_63394 = state_61812__$1;
(statearr_61833_63394[(2)] = null);

(statearr_61833_63394[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61813 === (5))){
var state_61812__$1 = state_61812;
if(cljs.core.truth_(close_QMARK_)){
var statearr_61834_63395 = state_61812__$1;
(statearr_61834_63395[(1)] = (8));

} else {
var statearr_61835_63396 = state_61812__$1;
(statearr_61835_63396[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61813 === (14))){
var inst_61790 = (state_61812[(11)]);
var inst_61788 = (state_61812[(8)]);
var inst_61788__$1 = (state_61812[(2)]);
var inst_61789 = (inst_61788__$1 == null);
var inst_61790__$1 = cljs.core.not(inst_61789);
var state_61812__$1 = (function (){var statearr_61836 = state_61812;
(statearr_61836[(11)] = inst_61790__$1);

(statearr_61836[(8)] = inst_61788__$1);

return statearr_61836;
})();
if(inst_61790__$1){
var statearr_61837_63398 = state_61812__$1;
(statearr_61837_63398[(1)] = (15));

} else {
var statearr_61838_63399 = state_61812__$1;
(statearr_61838_63399[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61813 === (16))){
var inst_61790 = (state_61812[(11)]);
var state_61812__$1 = state_61812;
var statearr_61839_63405 = state_61812__$1;
(statearr_61839_63405[(2)] = inst_61790);

(statearr_61839_63405[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61813 === (10))){
var inst_61782 = (state_61812[(2)]);
var state_61812__$1 = state_61812;
var statearr_61840_63407 = state_61812__$1;
(statearr_61840_63407[(2)] = inst_61782);

(statearr_61840_63407[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61813 === (18))){
var inst_61793 = (state_61812[(2)]);
var state_61812__$1 = state_61812;
var statearr_61841_63408 = state_61812__$1;
(statearr_61841_63408[(2)] = inst_61793);

(statearr_61841_63408[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61813 === (8))){
var inst_61779 = cljs.core.async.close_BANG_(to);
var state_61812__$1 = state_61812;
var statearr_61842_63409 = state_61812__$1;
(statearr_61842_63409[(2)] = inst_61779);

(statearr_61842_63409[(1)] = (10));


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
var cljs$core$async$pipeline_STAR__$_state_machine__61340__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__61340__auto____0 = (function (){
var statearr_61843 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_61843[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__61340__auto__);

(statearr_61843[(1)] = (1));

return statearr_61843;
});
var cljs$core$async$pipeline_STAR__$_state_machine__61340__auto____1 = (function (state_61812){
while(true){
var ret_value__61341__auto__ = (function (){try{while(true){
var result__61342__auto__ = switch__61339__auto__(state_61812);
if(cljs.core.keyword_identical_QMARK_(result__61342__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__61342__auto__;
}
break;
}
}catch (e61844){var ex__61343__auto__ = e61844;
var statearr_61845_63413 = state_61812;
(statearr_61845_63413[(2)] = ex__61343__auto__);


if(cljs.core.seq((state_61812[(4)]))){
var statearr_61846_63414 = state_61812;
(statearr_61846_63414[(1)] = cljs.core.first((state_61812[(4)])));

} else {
throw ex__61343__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__61341__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__63415 = state_61812;
state_61812 = G__63415;
continue;
} else {
return ret_value__61341__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__61340__auto__ = function(state_61812){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__61340__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__61340__auto____1.call(this,state_61812);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__61340__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__61340__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__61340__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__61340__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__61340__auto__;
})()
})();
var state__61431__auto__ = (function (){var statearr_61847 = f__61430__auto__();
(statearr_61847[(6)] = c__61429__auto__);

return statearr_61847;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__61431__auto__);
}));

return c__61429__auto__;
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
var G__61851 = arguments.length;
switch (G__61851) {
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
var G__61856 = arguments.length;
switch (G__61856) {
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
var G__61859 = arguments.length;
switch (G__61859) {
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
var c__61429__auto___63427 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__61430__auto__ = (function (){var switch__61339__auto__ = (function (state_61891){
var state_val_61892 = (state_61891[(1)]);
if((state_val_61892 === (7))){
var inst_61887 = (state_61891[(2)]);
var state_61891__$1 = state_61891;
var statearr_61893_63428 = state_61891__$1;
(statearr_61893_63428[(2)] = inst_61887);

(statearr_61893_63428[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61892 === (1))){
var state_61891__$1 = state_61891;
var statearr_61894_63429 = state_61891__$1;
(statearr_61894_63429[(2)] = null);

(statearr_61894_63429[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61892 === (4))){
var inst_61868 = (state_61891[(7)]);
var inst_61868__$1 = (state_61891[(2)]);
var inst_61869 = (inst_61868__$1 == null);
var state_61891__$1 = (function (){var statearr_61895 = state_61891;
(statearr_61895[(7)] = inst_61868__$1);

return statearr_61895;
})();
if(cljs.core.truth_(inst_61869)){
var statearr_61896_63433 = state_61891__$1;
(statearr_61896_63433[(1)] = (5));

} else {
var statearr_61897_63434 = state_61891__$1;
(statearr_61897_63434[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61892 === (13))){
var state_61891__$1 = state_61891;
var statearr_61899_63435 = state_61891__$1;
(statearr_61899_63435[(2)] = null);

(statearr_61899_63435[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61892 === (6))){
var inst_61868 = (state_61891[(7)]);
var inst_61874 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_61868) : p.call(null,inst_61868));
var state_61891__$1 = state_61891;
if(cljs.core.truth_(inst_61874)){
var statearr_61900_63436 = state_61891__$1;
(statearr_61900_63436[(1)] = (9));

} else {
var statearr_61901_63437 = state_61891__$1;
(statearr_61901_63437[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61892 === (3))){
var inst_61889 = (state_61891[(2)]);
var state_61891__$1 = state_61891;
return cljs.core.async.impl.ioc_helpers.return_chan(state_61891__$1,inst_61889);
} else {
if((state_val_61892 === (12))){
var state_61891__$1 = state_61891;
var statearr_61904_63440 = state_61891__$1;
(statearr_61904_63440[(2)] = null);

(statearr_61904_63440[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61892 === (2))){
var state_61891__$1 = state_61891;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_61891__$1,(4),ch);
} else {
if((state_val_61892 === (11))){
var inst_61868 = (state_61891[(7)]);
var inst_61878 = (state_61891[(2)]);
var state_61891__$1 = state_61891;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_61891__$1,(8),inst_61878,inst_61868);
} else {
if((state_val_61892 === (9))){
var state_61891__$1 = state_61891;
var statearr_61908_63442 = state_61891__$1;
(statearr_61908_63442[(2)] = tc);

(statearr_61908_63442[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61892 === (5))){
var inst_61871 = cljs.core.async.close_BANG_(tc);
var inst_61872 = cljs.core.async.close_BANG_(fc);
var state_61891__$1 = (function (){var statearr_61910 = state_61891;
(statearr_61910[(8)] = inst_61871);

return statearr_61910;
})();
var statearr_61911_63443 = state_61891__$1;
(statearr_61911_63443[(2)] = inst_61872);

(statearr_61911_63443[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61892 === (14))){
var inst_61885 = (state_61891[(2)]);
var state_61891__$1 = state_61891;
var statearr_61912_63444 = state_61891__$1;
(statearr_61912_63444[(2)] = inst_61885);

(statearr_61912_63444[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61892 === (10))){
var state_61891__$1 = state_61891;
var statearr_61913_63446 = state_61891__$1;
(statearr_61913_63446[(2)] = fc);

(statearr_61913_63446[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61892 === (8))){
var inst_61880 = (state_61891[(2)]);
var state_61891__$1 = state_61891;
if(cljs.core.truth_(inst_61880)){
var statearr_61914_63452 = state_61891__$1;
(statearr_61914_63452[(1)] = (12));

} else {
var statearr_61915_63453 = state_61891__$1;
(statearr_61915_63453[(1)] = (13));

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
var cljs$core$async$state_machine__61340__auto__ = null;
var cljs$core$async$state_machine__61340__auto____0 = (function (){
var statearr_61916 = [null,null,null,null,null,null,null,null,null];
(statearr_61916[(0)] = cljs$core$async$state_machine__61340__auto__);

(statearr_61916[(1)] = (1));

return statearr_61916;
});
var cljs$core$async$state_machine__61340__auto____1 = (function (state_61891){
while(true){
var ret_value__61341__auto__ = (function (){try{while(true){
var result__61342__auto__ = switch__61339__auto__(state_61891);
if(cljs.core.keyword_identical_QMARK_(result__61342__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__61342__auto__;
}
break;
}
}catch (e61917){var ex__61343__auto__ = e61917;
var statearr_61918_63455 = state_61891;
(statearr_61918_63455[(2)] = ex__61343__auto__);


if(cljs.core.seq((state_61891[(4)]))){
var statearr_61919_63457 = state_61891;
(statearr_61919_63457[(1)] = cljs.core.first((state_61891[(4)])));

} else {
throw ex__61343__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__61341__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__63459 = state_61891;
state_61891 = G__63459;
continue;
} else {
return ret_value__61341__auto__;
}
break;
}
});
cljs$core$async$state_machine__61340__auto__ = function(state_61891){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__61340__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__61340__auto____1.call(this,state_61891);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__61340__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__61340__auto____0;
cljs$core$async$state_machine__61340__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__61340__auto____1;
return cljs$core$async$state_machine__61340__auto__;
})()
})();
var state__61431__auto__ = (function (){var statearr_61920 = f__61430__auto__();
(statearr_61920[(6)] = c__61429__auto___63427);

return statearr_61920;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__61431__auto__);
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
var c__61429__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__61430__auto__ = (function (){var switch__61339__auto__ = (function (state_61945){
var state_val_61946 = (state_61945[(1)]);
if((state_val_61946 === (7))){
var inst_61941 = (state_61945[(2)]);
var state_61945__$1 = state_61945;
var statearr_61947_63461 = state_61945__$1;
(statearr_61947_63461[(2)] = inst_61941);

(statearr_61947_63461[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61946 === (1))){
var inst_61922 = init;
var inst_61923 = inst_61922;
var state_61945__$1 = (function (){var statearr_61948 = state_61945;
(statearr_61948[(7)] = inst_61923);

return statearr_61948;
})();
var statearr_61949_63464 = state_61945__$1;
(statearr_61949_63464[(2)] = null);

(statearr_61949_63464[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61946 === (4))){
var inst_61928 = (state_61945[(8)]);
var inst_61928__$1 = (state_61945[(2)]);
var inst_61929 = (inst_61928__$1 == null);
var state_61945__$1 = (function (){var statearr_61950 = state_61945;
(statearr_61950[(8)] = inst_61928__$1);

return statearr_61950;
})();
if(cljs.core.truth_(inst_61929)){
var statearr_61951_63465 = state_61945__$1;
(statearr_61951_63465[(1)] = (5));

} else {
var statearr_61952_63466 = state_61945__$1;
(statearr_61952_63466[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61946 === (6))){
var inst_61923 = (state_61945[(7)]);
var inst_61928 = (state_61945[(8)]);
var inst_61932 = (state_61945[(9)]);
var inst_61932__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_61923,inst_61928) : f.call(null,inst_61923,inst_61928));
var inst_61933 = cljs.core.reduced_QMARK_(inst_61932__$1);
var state_61945__$1 = (function (){var statearr_61953 = state_61945;
(statearr_61953[(9)] = inst_61932__$1);

return statearr_61953;
})();
if(inst_61933){
var statearr_61954_63468 = state_61945__$1;
(statearr_61954_63468[(1)] = (8));

} else {
var statearr_61955_63469 = state_61945__$1;
(statearr_61955_63469[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61946 === (3))){
var inst_61943 = (state_61945[(2)]);
var state_61945__$1 = state_61945;
return cljs.core.async.impl.ioc_helpers.return_chan(state_61945__$1,inst_61943);
} else {
if((state_val_61946 === (2))){
var state_61945__$1 = state_61945;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_61945__$1,(4),ch);
} else {
if((state_val_61946 === (9))){
var inst_61932 = (state_61945[(9)]);
var inst_61923 = inst_61932;
var state_61945__$1 = (function (){var statearr_61956 = state_61945;
(statearr_61956[(7)] = inst_61923);

return statearr_61956;
})();
var statearr_61957_63470 = state_61945__$1;
(statearr_61957_63470[(2)] = null);

(statearr_61957_63470[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61946 === (5))){
var inst_61923 = (state_61945[(7)]);
var state_61945__$1 = state_61945;
var statearr_61958_63471 = state_61945__$1;
(statearr_61958_63471[(2)] = inst_61923);

(statearr_61958_63471[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61946 === (10))){
var inst_61939 = (state_61945[(2)]);
var state_61945__$1 = state_61945;
var statearr_61959_63475 = state_61945__$1;
(statearr_61959_63475[(2)] = inst_61939);

(statearr_61959_63475[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61946 === (8))){
var inst_61932 = (state_61945[(9)]);
var inst_61935 = cljs.core.deref(inst_61932);
var state_61945__$1 = state_61945;
var statearr_61960_63477 = state_61945__$1;
(statearr_61960_63477[(2)] = inst_61935);

(statearr_61960_63477[(1)] = (10));


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
var cljs$core$async$reduce_$_state_machine__61340__auto__ = null;
var cljs$core$async$reduce_$_state_machine__61340__auto____0 = (function (){
var statearr_61961 = [null,null,null,null,null,null,null,null,null,null];
(statearr_61961[(0)] = cljs$core$async$reduce_$_state_machine__61340__auto__);

(statearr_61961[(1)] = (1));

return statearr_61961;
});
var cljs$core$async$reduce_$_state_machine__61340__auto____1 = (function (state_61945){
while(true){
var ret_value__61341__auto__ = (function (){try{while(true){
var result__61342__auto__ = switch__61339__auto__(state_61945);
if(cljs.core.keyword_identical_QMARK_(result__61342__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__61342__auto__;
}
break;
}
}catch (e61962){var ex__61343__auto__ = e61962;
var statearr_61963_63488 = state_61945;
(statearr_61963_63488[(2)] = ex__61343__auto__);


if(cljs.core.seq((state_61945[(4)]))){
var statearr_61964_63489 = state_61945;
(statearr_61964_63489[(1)] = cljs.core.first((state_61945[(4)])));

} else {
throw ex__61343__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__61341__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__63493 = state_61945;
state_61945 = G__63493;
continue;
} else {
return ret_value__61341__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__61340__auto__ = function(state_61945){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__61340__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__61340__auto____1.call(this,state_61945);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__61340__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__61340__auto____0;
cljs$core$async$reduce_$_state_machine__61340__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__61340__auto____1;
return cljs$core$async$reduce_$_state_machine__61340__auto__;
})()
})();
var state__61431__auto__ = (function (){var statearr_61965 = f__61430__auto__();
(statearr_61965[(6)] = c__61429__auto__);

return statearr_61965;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__61431__auto__);
}));

return c__61429__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__61429__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__61430__auto__ = (function (){var switch__61339__auto__ = (function (state_61973){
var state_val_61974 = (state_61973[(1)]);
if((state_val_61974 === (1))){
var inst_61968 = cljs.core.async.reduce(f__$1,init,ch);
var state_61973__$1 = state_61973;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_61973__$1,(2),inst_61968);
} else {
if((state_val_61974 === (2))){
var inst_61970 = (state_61973[(2)]);
var inst_61971 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_61970) : f__$1.call(null,inst_61970));
var state_61973__$1 = state_61973;
return cljs.core.async.impl.ioc_helpers.return_chan(state_61973__$1,inst_61971);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__61340__auto__ = null;
var cljs$core$async$transduce_$_state_machine__61340__auto____0 = (function (){
var statearr_61975 = [null,null,null,null,null,null,null];
(statearr_61975[(0)] = cljs$core$async$transduce_$_state_machine__61340__auto__);

(statearr_61975[(1)] = (1));

return statearr_61975;
});
var cljs$core$async$transduce_$_state_machine__61340__auto____1 = (function (state_61973){
while(true){
var ret_value__61341__auto__ = (function (){try{while(true){
var result__61342__auto__ = switch__61339__auto__(state_61973);
if(cljs.core.keyword_identical_QMARK_(result__61342__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__61342__auto__;
}
break;
}
}catch (e61976){var ex__61343__auto__ = e61976;
var statearr_61977_63506 = state_61973;
(statearr_61977_63506[(2)] = ex__61343__auto__);


if(cljs.core.seq((state_61973[(4)]))){
var statearr_61978_63509 = state_61973;
(statearr_61978_63509[(1)] = cljs.core.first((state_61973[(4)])));

} else {
throw ex__61343__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__61341__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__63513 = state_61973;
state_61973 = G__63513;
continue;
} else {
return ret_value__61341__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__61340__auto__ = function(state_61973){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__61340__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__61340__auto____1.call(this,state_61973);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__61340__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__61340__auto____0;
cljs$core$async$transduce_$_state_machine__61340__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__61340__auto____1;
return cljs$core$async$transduce_$_state_machine__61340__auto__;
})()
})();
var state__61431__auto__ = (function (){var statearr_61979 = f__61430__auto__();
(statearr_61979[(6)] = c__61429__auto__);

return statearr_61979;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__61431__auto__);
}));

return c__61429__auto__;
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
var G__61982 = arguments.length;
switch (G__61982) {
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
var c__61429__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__61430__auto__ = (function (){var switch__61339__auto__ = (function (state_62008){
var state_val_62009 = (state_62008[(1)]);
if((state_val_62009 === (7))){
var inst_61990 = (state_62008[(2)]);
var state_62008__$1 = state_62008;
var statearr_62010_63532 = state_62008__$1;
(statearr_62010_63532[(2)] = inst_61990);

(statearr_62010_63532[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62009 === (1))){
var inst_61983 = cljs.core.seq(coll);
var inst_61984 = inst_61983;
var state_62008__$1 = (function (){var statearr_62011 = state_62008;
(statearr_62011[(7)] = inst_61984);

return statearr_62011;
})();
var statearr_62012_63533 = state_62008__$1;
(statearr_62012_63533[(2)] = null);

(statearr_62012_63533[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62009 === (4))){
var inst_61984 = (state_62008[(7)]);
var inst_61988 = cljs.core.first(inst_61984);
var state_62008__$1 = state_62008;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_62008__$1,(7),ch,inst_61988);
} else {
if((state_val_62009 === (13))){
var inst_62002 = (state_62008[(2)]);
var state_62008__$1 = state_62008;
var statearr_62013_63534 = state_62008__$1;
(statearr_62013_63534[(2)] = inst_62002);

(statearr_62013_63534[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62009 === (6))){
var inst_61993 = (state_62008[(2)]);
var state_62008__$1 = state_62008;
if(cljs.core.truth_(inst_61993)){
var statearr_62014_63535 = state_62008__$1;
(statearr_62014_63535[(1)] = (8));

} else {
var statearr_62015_63536 = state_62008__$1;
(statearr_62015_63536[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62009 === (3))){
var inst_62006 = (state_62008[(2)]);
var state_62008__$1 = state_62008;
return cljs.core.async.impl.ioc_helpers.return_chan(state_62008__$1,inst_62006);
} else {
if((state_val_62009 === (12))){
var state_62008__$1 = state_62008;
var statearr_62016_63538 = state_62008__$1;
(statearr_62016_63538[(2)] = null);

(statearr_62016_63538[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62009 === (2))){
var inst_61984 = (state_62008[(7)]);
var state_62008__$1 = state_62008;
if(cljs.core.truth_(inst_61984)){
var statearr_62017_63542 = state_62008__$1;
(statearr_62017_63542[(1)] = (4));

} else {
var statearr_62018_63545 = state_62008__$1;
(statearr_62018_63545[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62009 === (11))){
var inst_61999 = cljs.core.async.close_BANG_(ch);
var state_62008__$1 = state_62008;
var statearr_62021_63546 = state_62008__$1;
(statearr_62021_63546[(2)] = inst_61999);

(statearr_62021_63546[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62009 === (9))){
var state_62008__$1 = state_62008;
if(cljs.core.truth_(close_QMARK_)){
var statearr_62023_63547 = state_62008__$1;
(statearr_62023_63547[(1)] = (11));

} else {
var statearr_62024_63548 = state_62008__$1;
(statearr_62024_63548[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62009 === (5))){
var inst_61984 = (state_62008[(7)]);
var state_62008__$1 = state_62008;
var statearr_62026_63549 = state_62008__$1;
(statearr_62026_63549[(2)] = inst_61984);

(statearr_62026_63549[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62009 === (10))){
var inst_62004 = (state_62008[(2)]);
var state_62008__$1 = state_62008;
var statearr_62028_63550 = state_62008__$1;
(statearr_62028_63550[(2)] = inst_62004);

(statearr_62028_63550[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62009 === (8))){
var inst_61984 = (state_62008[(7)]);
var inst_61995 = cljs.core.next(inst_61984);
var inst_61984__$1 = inst_61995;
var state_62008__$1 = (function (){var statearr_62029 = state_62008;
(statearr_62029[(7)] = inst_61984__$1);

return statearr_62029;
})();
var statearr_62030_63551 = state_62008__$1;
(statearr_62030_63551[(2)] = null);

(statearr_62030_63551[(1)] = (2));


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
var cljs$core$async$state_machine__61340__auto__ = null;
var cljs$core$async$state_machine__61340__auto____0 = (function (){
var statearr_62031 = [null,null,null,null,null,null,null,null];
(statearr_62031[(0)] = cljs$core$async$state_machine__61340__auto__);

(statearr_62031[(1)] = (1));

return statearr_62031;
});
var cljs$core$async$state_machine__61340__auto____1 = (function (state_62008){
while(true){
var ret_value__61341__auto__ = (function (){try{while(true){
var result__61342__auto__ = switch__61339__auto__(state_62008);
if(cljs.core.keyword_identical_QMARK_(result__61342__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__61342__auto__;
}
break;
}
}catch (e62032){var ex__61343__auto__ = e62032;
var statearr_62033_63557 = state_62008;
(statearr_62033_63557[(2)] = ex__61343__auto__);


if(cljs.core.seq((state_62008[(4)]))){
var statearr_62034_63558 = state_62008;
(statearr_62034_63558[(1)] = cljs.core.first((state_62008[(4)])));

} else {
throw ex__61343__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__61341__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__63559 = state_62008;
state_62008 = G__63559;
continue;
} else {
return ret_value__61341__auto__;
}
break;
}
});
cljs$core$async$state_machine__61340__auto__ = function(state_62008){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__61340__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__61340__auto____1.call(this,state_62008);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__61340__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__61340__auto____0;
cljs$core$async$state_machine__61340__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__61340__auto____1;
return cljs$core$async$state_machine__61340__auto__;
})()
})();
var state__61431__auto__ = (function (){var statearr_62035 = f__61430__auto__();
(statearr_62035[(6)] = c__61429__auto__);

return statearr_62035;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__61431__auto__);
}));

return c__61429__auto__;
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
var G__62040 = arguments.length;
switch (G__62040) {
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

var cljs$core$async$Mux$muxch_STAR_$dyn_63562 = (function (_){
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
return cljs$core$async$Mux$muxch_STAR_$dyn_63562(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_63563 = (function (m,ch,close_QMARK_){
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
return cljs$core$async$Mult$tap_STAR_$dyn_63563(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_63565 = (function (m,ch){
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
return cljs$core$async$Mult$untap_STAR_$dyn_63565(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_63569 = (function (m){
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
return cljs$core$async$Mult$untap_all_STAR_$dyn_63569(m);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async62056 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async62056 = (function (ch,cs,meta62057){
this.ch = ch;
this.cs = cs;
this.meta62057 = meta62057;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async62056.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_62058,meta62057__$1){
var self__ = this;
var _62058__$1 = this;
return (new cljs.core.async.t_cljs$core$async62056(self__.ch,self__.cs,meta62057__$1));
}));

(cljs.core.async.t_cljs$core$async62056.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_62058){
var self__ = this;
var _62058__$1 = this;
return self__.meta62057;
}));

(cljs.core.async.t_cljs$core$async62056.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async62056.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async62056.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async62056.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async62056.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async62056.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async62056.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta62057","meta62057",-890924697,null)], null);
}));

(cljs.core.async.t_cljs$core$async62056.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async62056.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async62056");

(cljs.core.async.t_cljs$core$async62056.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async62056");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async62056.
 */
cljs.core.async.__GT_t_cljs$core$async62056 = (function cljs$core$async$mult_$___GT_t_cljs$core$async62056(ch__$1,cs__$1,meta62057){
return (new cljs.core.async.t_cljs$core$async62056(ch__$1,cs__$1,meta62057));
});

}

return (new cljs.core.async.t_cljs$core$async62056(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__61429__auto___63572 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__61430__auto__ = (function (){var switch__61339__auto__ = (function (state_62211){
var state_val_62212 = (state_62211[(1)]);
if((state_val_62212 === (7))){
var inst_62207 = (state_62211[(2)]);
var state_62211__$1 = state_62211;
var statearr_62215_63575 = state_62211__$1;
(statearr_62215_63575[(2)] = inst_62207);

(statearr_62215_63575[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62212 === (20))){
var inst_62107 = (state_62211[(7)]);
var inst_62120 = cljs.core.first(inst_62107);
var inst_62121 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_62120,(0),null);
var inst_62122 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_62120,(1),null);
var state_62211__$1 = (function (){var statearr_62220 = state_62211;
(statearr_62220[(8)] = inst_62121);

return statearr_62220;
})();
if(cljs.core.truth_(inst_62122)){
var statearr_62221_63577 = state_62211__$1;
(statearr_62221_63577[(1)] = (22));

} else {
var statearr_62222_63579 = state_62211__$1;
(statearr_62222_63579[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62212 === (27))){
var inst_62159 = (state_62211[(9)]);
var inst_62074 = (state_62211[(10)]);
var inst_62154 = (state_62211[(11)]);
var inst_62152 = (state_62211[(12)]);
var inst_62159__$1 = cljs.core._nth(inst_62152,inst_62154);
var inst_62160 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_62159__$1,inst_62074,done);
var state_62211__$1 = (function (){var statearr_62223 = state_62211;
(statearr_62223[(9)] = inst_62159__$1);

return statearr_62223;
})();
if(cljs.core.truth_(inst_62160)){
var statearr_62224_63580 = state_62211__$1;
(statearr_62224_63580[(1)] = (30));

} else {
var statearr_62225_63582 = state_62211__$1;
(statearr_62225_63582[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62212 === (1))){
var state_62211__$1 = state_62211;
var statearr_62226_63584 = state_62211__$1;
(statearr_62226_63584[(2)] = null);

(statearr_62226_63584[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62212 === (24))){
var inst_62107 = (state_62211[(7)]);
var inst_62127 = (state_62211[(2)]);
var inst_62128 = cljs.core.next(inst_62107);
var inst_62083 = inst_62128;
var inst_62084 = null;
var inst_62085 = (0);
var inst_62086 = (0);
var state_62211__$1 = (function (){var statearr_62227 = state_62211;
(statearr_62227[(13)] = inst_62085);

(statearr_62227[(14)] = inst_62083);

(statearr_62227[(15)] = inst_62086);

(statearr_62227[(16)] = inst_62127);

(statearr_62227[(17)] = inst_62084);

return statearr_62227;
})();
var statearr_62228_63586 = state_62211__$1;
(statearr_62228_63586[(2)] = null);

(statearr_62228_63586[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62212 === (39))){
var state_62211__$1 = state_62211;
var statearr_62232_63587 = state_62211__$1;
(statearr_62232_63587[(2)] = null);

(statearr_62232_63587[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62212 === (4))){
var inst_62074 = (state_62211[(10)]);
var inst_62074__$1 = (state_62211[(2)]);
var inst_62075 = (inst_62074__$1 == null);
var state_62211__$1 = (function (){var statearr_62233 = state_62211;
(statearr_62233[(10)] = inst_62074__$1);

return statearr_62233;
})();
if(cljs.core.truth_(inst_62075)){
var statearr_62235_63589 = state_62211__$1;
(statearr_62235_63589[(1)] = (5));

} else {
var statearr_62236_63590 = state_62211__$1;
(statearr_62236_63590[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62212 === (15))){
var inst_62085 = (state_62211[(13)]);
var inst_62083 = (state_62211[(14)]);
var inst_62086 = (state_62211[(15)]);
var inst_62084 = (state_62211[(17)]);
var inst_62103 = (state_62211[(2)]);
var inst_62104 = (inst_62086 + (1));
var tmp62229 = inst_62085;
var tmp62230 = inst_62083;
var tmp62231 = inst_62084;
var inst_62083__$1 = tmp62230;
var inst_62084__$1 = tmp62231;
var inst_62085__$1 = tmp62229;
var inst_62086__$1 = inst_62104;
var state_62211__$1 = (function (){var statearr_62237 = state_62211;
(statearr_62237[(13)] = inst_62085__$1);

(statearr_62237[(18)] = inst_62103);

(statearr_62237[(14)] = inst_62083__$1);

(statearr_62237[(15)] = inst_62086__$1);

(statearr_62237[(17)] = inst_62084__$1);

return statearr_62237;
})();
var statearr_62238_63592 = state_62211__$1;
(statearr_62238_63592[(2)] = null);

(statearr_62238_63592[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62212 === (21))){
var inst_62131 = (state_62211[(2)]);
var state_62211__$1 = state_62211;
var statearr_62244_63593 = state_62211__$1;
(statearr_62244_63593[(2)] = inst_62131);

(statearr_62244_63593[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62212 === (31))){
var inst_62159 = (state_62211[(9)]);
var inst_62163 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_62159);
var state_62211__$1 = state_62211;
var statearr_62245_63596 = state_62211__$1;
(statearr_62245_63596[(2)] = inst_62163);

(statearr_62245_63596[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62212 === (32))){
var inst_62151 = (state_62211[(19)]);
var inst_62153 = (state_62211[(20)]);
var inst_62154 = (state_62211[(11)]);
var inst_62152 = (state_62211[(12)]);
var inst_62165 = (state_62211[(2)]);
var inst_62166 = (inst_62154 + (1));
var tmp62241 = inst_62151;
var tmp62242 = inst_62153;
var tmp62243 = inst_62152;
var inst_62151__$1 = tmp62241;
var inst_62152__$1 = tmp62243;
var inst_62153__$1 = tmp62242;
var inst_62154__$1 = inst_62166;
var state_62211__$1 = (function (){var statearr_62246 = state_62211;
(statearr_62246[(19)] = inst_62151__$1);

(statearr_62246[(20)] = inst_62153__$1);

(statearr_62246[(21)] = inst_62165);

(statearr_62246[(11)] = inst_62154__$1);

(statearr_62246[(12)] = inst_62152__$1);

return statearr_62246;
})();
var statearr_62247_63598 = state_62211__$1;
(statearr_62247_63598[(2)] = null);

(statearr_62247_63598[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62212 === (40))){
var inst_62179 = (state_62211[(22)]);
var inst_62183 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_62179);
var state_62211__$1 = state_62211;
var statearr_62249_63600 = state_62211__$1;
(statearr_62249_63600[(2)] = inst_62183);

(statearr_62249_63600[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62212 === (33))){
var inst_62169 = (state_62211[(23)]);
var inst_62171 = cljs.core.chunked_seq_QMARK_(inst_62169);
var state_62211__$1 = state_62211;
if(inst_62171){
var statearr_62250_63603 = state_62211__$1;
(statearr_62250_63603[(1)] = (36));

} else {
var statearr_62251_63604 = state_62211__$1;
(statearr_62251_63604[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62212 === (13))){
var inst_62097 = (state_62211[(24)]);
var inst_62100 = cljs.core.async.close_BANG_(inst_62097);
var state_62211__$1 = state_62211;
var statearr_62254_63605 = state_62211__$1;
(statearr_62254_63605[(2)] = inst_62100);

(statearr_62254_63605[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62212 === (22))){
var inst_62121 = (state_62211[(8)]);
var inst_62124 = cljs.core.async.close_BANG_(inst_62121);
var state_62211__$1 = state_62211;
var statearr_62255_63607 = state_62211__$1;
(statearr_62255_63607[(2)] = inst_62124);

(statearr_62255_63607[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62212 === (36))){
var inst_62169 = (state_62211[(23)]);
var inst_62173 = cljs.core.chunk_first(inst_62169);
var inst_62174 = cljs.core.chunk_rest(inst_62169);
var inst_62175 = cljs.core.count(inst_62173);
var inst_62151 = inst_62174;
var inst_62152 = inst_62173;
var inst_62153 = inst_62175;
var inst_62154 = (0);
var state_62211__$1 = (function (){var statearr_62256 = state_62211;
(statearr_62256[(19)] = inst_62151);

(statearr_62256[(20)] = inst_62153);

(statearr_62256[(11)] = inst_62154);

(statearr_62256[(12)] = inst_62152);

return statearr_62256;
})();
var statearr_62257_63610 = state_62211__$1;
(statearr_62257_63610[(2)] = null);

(statearr_62257_63610[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62212 === (41))){
var inst_62169 = (state_62211[(23)]);
var inst_62185 = (state_62211[(2)]);
var inst_62186 = cljs.core.next(inst_62169);
var inst_62151 = inst_62186;
var inst_62152 = null;
var inst_62153 = (0);
var inst_62154 = (0);
var state_62211__$1 = (function (){var statearr_62258 = state_62211;
(statearr_62258[(19)] = inst_62151);

(statearr_62258[(20)] = inst_62153);

(statearr_62258[(11)] = inst_62154);

(statearr_62258[(25)] = inst_62185);

(statearr_62258[(12)] = inst_62152);

return statearr_62258;
})();
var statearr_62259_63611 = state_62211__$1;
(statearr_62259_63611[(2)] = null);

(statearr_62259_63611[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62212 === (43))){
var state_62211__$1 = state_62211;
var statearr_62260_63612 = state_62211__$1;
(statearr_62260_63612[(2)] = null);

(statearr_62260_63612[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62212 === (29))){
var inst_62195 = (state_62211[(2)]);
var state_62211__$1 = state_62211;
var statearr_62261_63613 = state_62211__$1;
(statearr_62261_63613[(2)] = inst_62195);

(statearr_62261_63613[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62212 === (44))){
var inst_62204 = (state_62211[(2)]);
var state_62211__$1 = (function (){var statearr_62262 = state_62211;
(statearr_62262[(26)] = inst_62204);

return statearr_62262;
})();
var statearr_62263_63615 = state_62211__$1;
(statearr_62263_63615[(2)] = null);

(statearr_62263_63615[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62212 === (6))){
var inst_62142 = (state_62211[(27)]);
var inst_62141 = cljs.core.deref(cs);
var inst_62142__$1 = cljs.core.keys(inst_62141);
var inst_62143 = cljs.core.count(inst_62142__$1);
var inst_62144 = cljs.core.reset_BANG_(dctr,inst_62143);
var inst_62150 = cljs.core.seq(inst_62142__$1);
var inst_62151 = inst_62150;
var inst_62152 = null;
var inst_62153 = (0);
var inst_62154 = (0);
var state_62211__$1 = (function (){var statearr_62264 = state_62211;
(statearr_62264[(27)] = inst_62142__$1);

(statearr_62264[(19)] = inst_62151);

(statearr_62264[(20)] = inst_62153);

(statearr_62264[(28)] = inst_62144);

(statearr_62264[(11)] = inst_62154);

(statearr_62264[(12)] = inst_62152);

return statearr_62264;
})();
var statearr_62265_63617 = state_62211__$1;
(statearr_62265_63617[(2)] = null);

(statearr_62265_63617[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62212 === (28))){
var inst_62151 = (state_62211[(19)]);
var inst_62169 = (state_62211[(23)]);
var inst_62169__$1 = cljs.core.seq(inst_62151);
var state_62211__$1 = (function (){var statearr_62271 = state_62211;
(statearr_62271[(23)] = inst_62169__$1);

return statearr_62271;
})();
if(inst_62169__$1){
var statearr_62272_63618 = state_62211__$1;
(statearr_62272_63618[(1)] = (33));

} else {
var statearr_62273_63619 = state_62211__$1;
(statearr_62273_63619[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62212 === (25))){
var inst_62153 = (state_62211[(20)]);
var inst_62154 = (state_62211[(11)]);
var inst_62156 = (inst_62154 < inst_62153);
var inst_62157 = inst_62156;
var state_62211__$1 = state_62211;
if(cljs.core.truth_(inst_62157)){
var statearr_62274_63620 = state_62211__$1;
(statearr_62274_63620[(1)] = (27));

} else {
var statearr_62275_63621 = state_62211__$1;
(statearr_62275_63621[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62212 === (34))){
var state_62211__$1 = state_62211;
var statearr_62280_63622 = state_62211__$1;
(statearr_62280_63622[(2)] = null);

(statearr_62280_63622[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62212 === (17))){
var state_62211__$1 = state_62211;
var statearr_62281_63623 = state_62211__$1;
(statearr_62281_63623[(2)] = null);

(statearr_62281_63623[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62212 === (3))){
var inst_62209 = (state_62211[(2)]);
var state_62211__$1 = state_62211;
return cljs.core.async.impl.ioc_helpers.return_chan(state_62211__$1,inst_62209);
} else {
if((state_val_62212 === (12))){
var inst_62136 = (state_62211[(2)]);
var state_62211__$1 = state_62211;
var statearr_62282_63624 = state_62211__$1;
(statearr_62282_63624[(2)] = inst_62136);

(statearr_62282_63624[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62212 === (2))){
var state_62211__$1 = state_62211;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_62211__$1,(4),ch);
} else {
if((state_val_62212 === (23))){
var state_62211__$1 = state_62211;
var statearr_62284_63625 = state_62211__$1;
(statearr_62284_63625[(2)] = null);

(statearr_62284_63625[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62212 === (35))){
var inst_62193 = (state_62211[(2)]);
var state_62211__$1 = state_62211;
var statearr_62285_63628 = state_62211__$1;
(statearr_62285_63628[(2)] = inst_62193);

(statearr_62285_63628[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62212 === (19))){
var inst_62107 = (state_62211[(7)]);
var inst_62112 = cljs.core.chunk_first(inst_62107);
var inst_62113 = cljs.core.chunk_rest(inst_62107);
var inst_62114 = cljs.core.count(inst_62112);
var inst_62083 = inst_62113;
var inst_62084 = inst_62112;
var inst_62085 = inst_62114;
var inst_62086 = (0);
var state_62211__$1 = (function (){var statearr_62290 = state_62211;
(statearr_62290[(13)] = inst_62085);

(statearr_62290[(14)] = inst_62083);

(statearr_62290[(15)] = inst_62086);

(statearr_62290[(17)] = inst_62084);

return statearr_62290;
})();
var statearr_62291_63629 = state_62211__$1;
(statearr_62291_63629[(2)] = null);

(statearr_62291_63629[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62212 === (11))){
var inst_62107 = (state_62211[(7)]);
var inst_62083 = (state_62211[(14)]);
var inst_62107__$1 = cljs.core.seq(inst_62083);
var state_62211__$1 = (function (){var statearr_62292 = state_62211;
(statearr_62292[(7)] = inst_62107__$1);

return statearr_62292;
})();
if(inst_62107__$1){
var statearr_62293_63630 = state_62211__$1;
(statearr_62293_63630[(1)] = (16));

} else {
var statearr_62294_63631 = state_62211__$1;
(statearr_62294_63631[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62212 === (9))){
var inst_62138 = (state_62211[(2)]);
var state_62211__$1 = state_62211;
var statearr_62296_63632 = state_62211__$1;
(statearr_62296_63632[(2)] = inst_62138);

(statearr_62296_63632[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62212 === (5))){
var inst_62081 = cljs.core.deref(cs);
var inst_62082 = cljs.core.seq(inst_62081);
var inst_62083 = inst_62082;
var inst_62084 = null;
var inst_62085 = (0);
var inst_62086 = (0);
var state_62211__$1 = (function (){var statearr_62298 = state_62211;
(statearr_62298[(13)] = inst_62085);

(statearr_62298[(14)] = inst_62083);

(statearr_62298[(15)] = inst_62086);

(statearr_62298[(17)] = inst_62084);

return statearr_62298;
})();
var statearr_62299_63633 = state_62211__$1;
(statearr_62299_63633[(2)] = null);

(statearr_62299_63633[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62212 === (14))){
var state_62211__$1 = state_62211;
var statearr_62301_63634 = state_62211__$1;
(statearr_62301_63634[(2)] = null);

(statearr_62301_63634[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62212 === (45))){
var inst_62201 = (state_62211[(2)]);
var state_62211__$1 = state_62211;
var statearr_62304_63635 = state_62211__$1;
(statearr_62304_63635[(2)] = inst_62201);

(statearr_62304_63635[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62212 === (26))){
var inst_62142 = (state_62211[(27)]);
var inst_62197 = (state_62211[(2)]);
var inst_62198 = cljs.core.seq(inst_62142);
var state_62211__$1 = (function (){var statearr_62305 = state_62211;
(statearr_62305[(29)] = inst_62197);

return statearr_62305;
})();
if(inst_62198){
var statearr_62306_63636 = state_62211__$1;
(statearr_62306_63636[(1)] = (42));

} else {
var statearr_62308_63637 = state_62211__$1;
(statearr_62308_63637[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62212 === (16))){
var inst_62107 = (state_62211[(7)]);
var inst_62109 = cljs.core.chunked_seq_QMARK_(inst_62107);
var state_62211__$1 = state_62211;
if(inst_62109){
var statearr_62311_63639 = state_62211__$1;
(statearr_62311_63639[(1)] = (19));

} else {
var statearr_62312_63642 = state_62211__$1;
(statearr_62312_63642[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62212 === (38))){
var inst_62189 = (state_62211[(2)]);
var state_62211__$1 = state_62211;
var statearr_62313_63644 = state_62211__$1;
(statearr_62313_63644[(2)] = inst_62189);

(statearr_62313_63644[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62212 === (30))){
var state_62211__$1 = state_62211;
var statearr_62314_63650 = state_62211__$1;
(statearr_62314_63650[(2)] = null);

(statearr_62314_63650[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62212 === (10))){
var inst_62086 = (state_62211[(15)]);
var inst_62084 = (state_62211[(17)]);
var inst_62096 = cljs.core._nth(inst_62084,inst_62086);
var inst_62097 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_62096,(0),null);
var inst_62098 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_62096,(1),null);
var state_62211__$1 = (function (){var statearr_62318 = state_62211;
(statearr_62318[(24)] = inst_62097);

return statearr_62318;
})();
if(cljs.core.truth_(inst_62098)){
var statearr_62319_63651 = state_62211__$1;
(statearr_62319_63651[(1)] = (13));

} else {
var statearr_62320_63652 = state_62211__$1;
(statearr_62320_63652[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62212 === (18))){
var inst_62134 = (state_62211[(2)]);
var state_62211__$1 = state_62211;
var statearr_62322_63653 = state_62211__$1;
(statearr_62322_63653[(2)] = inst_62134);

(statearr_62322_63653[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62212 === (42))){
var state_62211__$1 = state_62211;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_62211__$1,(45),dchan);
} else {
if((state_val_62212 === (37))){
var inst_62169 = (state_62211[(23)]);
var inst_62179 = (state_62211[(22)]);
var inst_62074 = (state_62211[(10)]);
var inst_62179__$1 = cljs.core.first(inst_62169);
var inst_62180 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_62179__$1,inst_62074,done);
var state_62211__$1 = (function (){var statearr_62326 = state_62211;
(statearr_62326[(22)] = inst_62179__$1);

return statearr_62326;
})();
if(cljs.core.truth_(inst_62180)){
var statearr_62327_63654 = state_62211__$1;
(statearr_62327_63654[(1)] = (39));

} else {
var statearr_62328_63655 = state_62211__$1;
(statearr_62328_63655[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62212 === (8))){
var inst_62085 = (state_62211[(13)]);
var inst_62086 = (state_62211[(15)]);
var inst_62088 = (inst_62086 < inst_62085);
var inst_62089 = inst_62088;
var state_62211__$1 = state_62211;
if(cljs.core.truth_(inst_62089)){
var statearr_62329_63656 = state_62211__$1;
(statearr_62329_63656[(1)] = (10));

} else {
var statearr_62331_63657 = state_62211__$1;
(statearr_62331_63657[(1)] = (11));

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
var cljs$core$async$mult_$_state_machine__61340__auto__ = null;
var cljs$core$async$mult_$_state_machine__61340__auto____0 = (function (){
var statearr_62332 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_62332[(0)] = cljs$core$async$mult_$_state_machine__61340__auto__);

(statearr_62332[(1)] = (1));

return statearr_62332;
});
var cljs$core$async$mult_$_state_machine__61340__auto____1 = (function (state_62211){
while(true){
var ret_value__61341__auto__ = (function (){try{while(true){
var result__61342__auto__ = switch__61339__auto__(state_62211);
if(cljs.core.keyword_identical_QMARK_(result__61342__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__61342__auto__;
}
break;
}
}catch (e62336){var ex__61343__auto__ = e62336;
var statearr_62337_63658 = state_62211;
(statearr_62337_63658[(2)] = ex__61343__auto__);


if(cljs.core.seq((state_62211[(4)]))){
var statearr_62338_63663 = state_62211;
(statearr_62338_63663[(1)] = cljs.core.first((state_62211[(4)])));

} else {
throw ex__61343__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__61341__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__63664 = state_62211;
state_62211 = G__63664;
continue;
} else {
return ret_value__61341__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__61340__auto__ = function(state_62211){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__61340__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__61340__auto____1.call(this,state_62211);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__61340__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__61340__auto____0;
cljs$core$async$mult_$_state_machine__61340__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__61340__auto____1;
return cljs$core$async$mult_$_state_machine__61340__auto__;
})()
})();
var state__61431__auto__ = (function (){var statearr_62339 = f__61430__auto__();
(statearr_62339[(6)] = c__61429__auto___63572);

return statearr_62339;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__61431__auto__);
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
var G__62344 = arguments.length;
switch (G__62344) {
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

var cljs$core$async$Mix$admix_STAR_$dyn_63666 = (function (m,ch){
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
return cljs$core$async$Mix$admix_STAR_$dyn_63666(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_63667 = (function (m,ch){
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
return cljs$core$async$Mix$unmix_STAR_$dyn_63667(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_63674 = (function (m){
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
return cljs$core$async$Mix$unmix_all_STAR_$dyn_63674(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_63678 = (function (m,state_map){
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
return cljs$core$async$Mix$toggle_STAR_$dyn_63678(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_63682 = (function (m,mode){
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
return cljs$core$async$Mix$solo_mode_STAR_$dyn_63682(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___63696 = arguments.length;
var i__5770__auto___63697 = (0);
while(true){
if((i__5770__auto___63697 < len__5769__auto___63696)){
args__5775__auto__.push((arguments[i__5770__auto___63697]));

var G__63698 = (i__5770__auto___63697 + (1));
i__5770__auto___63697 = G__63698;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((3) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5776__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__62349){
var map__62350 = p__62349;
var map__62350__$1 = cljs.core.__destructure_map(map__62350);
var opts = map__62350__$1;
var statearr_62351_63699 = state;
(statearr_62351_63699[(1)] = cont_block);


var temp__5804__auto__ = cljs.core.async.do_alts((function (val){
var statearr_62352_63700 = state;
(statearr_62352_63700[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5804__auto__)){
var cb = temp__5804__auto__;
var statearr_62353_63701 = state;
(statearr_62353_63701[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq62345){
var G__62346 = cljs.core.first(seq62345);
var seq62345__$1 = cljs.core.next(seq62345);
var G__62347 = cljs.core.first(seq62345__$1);
var seq62345__$2 = cljs.core.next(seq62345__$1);
var G__62348 = cljs.core.first(seq62345__$2);
var seq62345__$3 = cljs.core.next(seq62345__$2);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__62346,G__62347,G__62348,seq62345__$3);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async62354 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async62354 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta62355){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta62355 = meta62355;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async62354.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_62356,meta62355__$1){
var self__ = this;
var _62356__$1 = this;
return (new cljs.core.async.t_cljs$core$async62354(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta62355__$1));
}));

(cljs.core.async.t_cljs$core$async62354.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_62356){
var self__ = this;
var _62356__$1 = this;
return self__.meta62355;
}));

(cljs.core.async.t_cljs$core$async62354.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async62354.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async62354.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async62354.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async62354.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async62354.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async62354.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async62354.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async62354.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta62355","meta62355",-1978256322,null)], null);
}));

(cljs.core.async.t_cljs$core$async62354.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async62354.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async62354");

(cljs.core.async.t_cljs$core$async62354.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async62354");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async62354.
 */
cljs.core.async.__GT_t_cljs$core$async62354 = (function cljs$core$async$mix_$___GT_t_cljs$core$async62354(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta62355){
return (new cljs.core.async.t_cljs$core$async62354(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta62355));
});

}

return (new cljs.core.async.t_cljs$core$async62354(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__61429__auto___63702 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__61430__auto__ = (function (){var switch__61339__auto__ = (function (state_62429){
var state_val_62430 = (state_62429[(1)]);
if((state_val_62430 === (7))){
var inst_62384 = (state_62429[(2)]);
var state_62429__$1 = state_62429;
if(cljs.core.truth_(inst_62384)){
var statearr_62431_63703 = state_62429__$1;
(statearr_62431_63703[(1)] = (8));

} else {
var statearr_62433_63704 = state_62429__$1;
(statearr_62433_63704[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62430 === (20))){
var inst_62377 = (state_62429[(7)]);
var state_62429__$1 = state_62429;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_62429__$1,(23),out,inst_62377);
} else {
if((state_val_62430 === (1))){
var inst_62360 = calc_state();
var inst_62361 = cljs.core.__destructure_map(inst_62360);
var inst_62362 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_62361,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_62363 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_62361,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_62364 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_62361,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_62365 = inst_62360;
var state_62429__$1 = (function (){var statearr_62434 = state_62429;
(statearr_62434[(8)] = inst_62362);

(statearr_62434[(9)] = inst_62364);

(statearr_62434[(10)] = inst_62365);

(statearr_62434[(11)] = inst_62363);

return statearr_62434;
})();
var statearr_62435_63708 = state_62429__$1;
(statearr_62435_63708[(2)] = null);

(statearr_62435_63708[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62430 === (24))){
var inst_62368 = (state_62429[(12)]);
var inst_62365 = inst_62368;
var state_62429__$1 = (function (){var statearr_62440 = state_62429;
(statearr_62440[(10)] = inst_62365);

return statearr_62440;
})();
var statearr_62441_63709 = state_62429__$1;
(statearr_62441_63709[(2)] = null);

(statearr_62441_63709[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62430 === (4))){
var inst_62379 = (state_62429[(13)]);
var inst_62377 = (state_62429[(7)]);
var inst_62376 = (state_62429[(2)]);
var inst_62377__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_62376,(0),null);
var inst_62378 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_62376,(1),null);
var inst_62379__$1 = (inst_62377__$1 == null);
var state_62429__$1 = (function (){var statearr_62442 = state_62429;
(statearr_62442[(13)] = inst_62379__$1);

(statearr_62442[(14)] = inst_62378);

(statearr_62442[(7)] = inst_62377__$1);

return statearr_62442;
})();
if(cljs.core.truth_(inst_62379__$1)){
var statearr_62443_63710 = state_62429__$1;
(statearr_62443_63710[(1)] = (5));

} else {
var statearr_62444_63711 = state_62429__$1;
(statearr_62444_63711[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62430 === (15))){
var inst_62402 = (state_62429[(15)]);
var inst_62369 = (state_62429[(16)]);
var inst_62402__$1 = cljs.core.empty_QMARK_(inst_62369);
var state_62429__$1 = (function (){var statearr_62445 = state_62429;
(statearr_62445[(15)] = inst_62402__$1);

return statearr_62445;
})();
if(inst_62402__$1){
var statearr_62446_63712 = state_62429__$1;
(statearr_62446_63712[(1)] = (17));

} else {
var statearr_62447_63713 = state_62429__$1;
(statearr_62447_63713[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62430 === (21))){
var inst_62368 = (state_62429[(12)]);
var inst_62365 = inst_62368;
var state_62429__$1 = (function (){var statearr_62448 = state_62429;
(statearr_62448[(10)] = inst_62365);

return statearr_62448;
})();
var statearr_62449_63714 = state_62429__$1;
(statearr_62449_63714[(2)] = null);

(statearr_62449_63714[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62430 === (13))){
var inst_62391 = (state_62429[(2)]);
var inst_62392 = calc_state();
var inst_62365 = inst_62392;
var state_62429__$1 = (function (){var statearr_62450 = state_62429;
(statearr_62450[(17)] = inst_62391);

(statearr_62450[(10)] = inst_62365);

return statearr_62450;
})();
var statearr_62451_63715 = state_62429__$1;
(statearr_62451_63715[(2)] = null);

(statearr_62451_63715[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62430 === (22))){
var inst_62423 = (state_62429[(2)]);
var state_62429__$1 = state_62429;
var statearr_62452_63716 = state_62429__$1;
(statearr_62452_63716[(2)] = inst_62423);

(statearr_62452_63716[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62430 === (6))){
var inst_62378 = (state_62429[(14)]);
var inst_62382 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_62378,change);
var state_62429__$1 = state_62429;
var statearr_62453_63717 = state_62429__$1;
(statearr_62453_63717[(2)] = inst_62382);

(statearr_62453_63717[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62430 === (25))){
var state_62429__$1 = state_62429;
var statearr_62454_63718 = state_62429__$1;
(statearr_62454_63718[(2)] = null);

(statearr_62454_63718[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62430 === (17))){
var inst_62378 = (state_62429[(14)]);
var inst_62370 = (state_62429[(18)]);
var inst_62404 = (inst_62370.cljs$core$IFn$_invoke$arity$1 ? inst_62370.cljs$core$IFn$_invoke$arity$1(inst_62378) : inst_62370.call(null,inst_62378));
var inst_62405 = cljs.core.not(inst_62404);
var state_62429__$1 = state_62429;
var statearr_62455_63721 = state_62429__$1;
(statearr_62455_63721[(2)] = inst_62405);

(statearr_62455_63721[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62430 === (3))){
var inst_62427 = (state_62429[(2)]);
var state_62429__$1 = state_62429;
return cljs.core.async.impl.ioc_helpers.return_chan(state_62429__$1,inst_62427);
} else {
if((state_val_62430 === (12))){
var state_62429__$1 = state_62429;
var statearr_62456_63722 = state_62429__$1;
(statearr_62456_63722[(2)] = null);

(statearr_62456_63722[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62430 === (2))){
var inst_62368 = (state_62429[(12)]);
var inst_62365 = (state_62429[(10)]);
var inst_62368__$1 = cljs.core.__destructure_map(inst_62365);
var inst_62369 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_62368__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_62370 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_62368__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_62371 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_62368__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_62429__$1 = (function (){var statearr_62457 = state_62429;
(statearr_62457[(16)] = inst_62369);

(statearr_62457[(18)] = inst_62370);

(statearr_62457[(12)] = inst_62368__$1);

return statearr_62457;
})();
return cljs.core.async.ioc_alts_BANG_(state_62429__$1,(4),inst_62371);
} else {
if((state_val_62430 === (23))){
var inst_62414 = (state_62429[(2)]);
var state_62429__$1 = state_62429;
if(cljs.core.truth_(inst_62414)){
var statearr_62458_63723 = state_62429__$1;
(statearr_62458_63723[(1)] = (24));

} else {
var statearr_62459_63724 = state_62429__$1;
(statearr_62459_63724[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62430 === (19))){
var inst_62408 = (state_62429[(2)]);
var state_62429__$1 = state_62429;
var statearr_62460_63726 = state_62429__$1;
(statearr_62460_63726[(2)] = inst_62408);

(statearr_62460_63726[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62430 === (11))){
var inst_62378 = (state_62429[(14)]);
var inst_62388 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_62378);
var state_62429__$1 = state_62429;
var statearr_62461_63727 = state_62429__$1;
(statearr_62461_63727[(2)] = inst_62388);

(statearr_62461_63727[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62430 === (9))){
var inst_62369 = (state_62429[(16)]);
var inst_62397 = (state_62429[(19)]);
var inst_62378 = (state_62429[(14)]);
var inst_62397__$1 = (inst_62369.cljs$core$IFn$_invoke$arity$1 ? inst_62369.cljs$core$IFn$_invoke$arity$1(inst_62378) : inst_62369.call(null,inst_62378));
var state_62429__$1 = (function (){var statearr_62462 = state_62429;
(statearr_62462[(19)] = inst_62397__$1);

return statearr_62462;
})();
if(cljs.core.truth_(inst_62397__$1)){
var statearr_62463_63728 = state_62429__$1;
(statearr_62463_63728[(1)] = (14));

} else {
var statearr_62464_63729 = state_62429__$1;
(statearr_62464_63729[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62430 === (5))){
var inst_62379 = (state_62429[(13)]);
var state_62429__$1 = state_62429;
var statearr_62466_63730 = state_62429__$1;
(statearr_62466_63730[(2)] = inst_62379);

(statearr_62466_63730[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62430 === (14))){
var inst_62397 = (state_62429[(19)]);
var state_62429__$1 = state_62429;
var statearr_62467_63731 = state_62429__$1;
(statearr_62467_63731[(2)] = inst_62397);

(statearr_62467_63731[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62430 === (26))){
var inst_62419 = (state_62429[(2)]);
var state_62429__$1 = state_62429;
var statearr_62468_63732 = state_62429__$1;
(statearr_62468_63732[(2)] = inst_62419);

(statearr_62468_63732[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62430 === (16))){
var inst_62410 = (state_62429[(2)]);
var state_62429__$1 = state_62429;
if(cljs.core.truth_(inst_62410)){
var statearr_62472_63733 = state_62429__$1;
(statearr_62472_63733[(1)] = (20));

} else {
var statearr_62473_63734 = state_62429__$1;
(statearr_62473_63734[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62430 === (10))){
var inst_62425 = (state_62429[(2)]);
var state_62429__$1 = state_62429;
var statearr_62474_63735 = state_62429__$1;
(statearr_62474_63735[(2)] = inst_62425);

(statearr_62474_63735[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62430 === (18))){
var inst_62402 = (state_62429[(15)]);
var state_62429__$1 = state_62429;
var statearr_62475_63736 = state_62429__$1;
(statearr_62475_63736[(2)] = inst_62402);

(statearr_62475_63736[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62430 === (8))){
var inst_62377 = (state_62429[(7)]);
var inst_62386 = (inst_62377 == null);
var state_62429__$1 = state_62429;
if(cljs.core.truth_(inst_62386)){
var statearr_62476_63737 = state_62429__$1;
(statearr_62476_63737[(1)] = (11));

} else {
var statearr_62477_63738 = state_62429__$1;
(statearr_62477_63738[(1)] = (12));

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
var cljs$core$async$mix_$_state_machine__61340__auto__ = null;
var cljs$core$async$mix_$_state_machine__61340__auto____0 = (function (){
var statearr_62478 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_62478[(0)] = cljs$core$async$mix_$_state_machine__61340__auto__);

(statearr_62478[(1)] = (1));

return statearr_62478;
});
var cljs$core$async$mix_$_state_machine__61340__auto____1 = (function (state_62429){
while(true){
var ret_value__61341__auto__ = (function (){try{while(true){
var result__61342__auto__ = switch__61339__auto__(state_62429);
if(cljs.core.keyword_identical_QMARK_(result__61342__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__61342__auto__;
}
break;
}
}catch (e62479){var ex__61343__auto__ = e62479;
var statearr_62480_63739 = state_62429;
(statearr_62480_63739[(2)] = ex__61343__auto__);


if(cljs.core.seq((state_62429[(4)]))){
var statearr_62481_63740 = state_62429;
(statearr_62481_63740[(1)] = cljs.core.first((state_62429[(4)])));

} else {
throw ex__61343__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__61341__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__63741 = state_62429;
state_62429 = G__63741;
continue;
} else {
return ret_value__61341__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__61340__auto__ = function(state_62429){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__61340__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__61340__auto____1.call(this,state_62429);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__61340__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__61340__auto____0;
cljs$core$async$mix_$_state_machine__61340__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__61340__auto____1;
return cljs$core$async$mix_$_state_machine__61340__auto__;
})()
})();
var state__61431__auto__ = (function (){var statearr_62482 = f__61430__auto__();
(statearr_62482[(6)] = c__61429__auto___63702);

return statearr_62482;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__61431__auto__);
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

var cljs$core$async$Pub$sub_STAR_$dyn_63754 = (function (p,v,ch,close_QMARK_){
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
return cljs$core$async$Pub$sub_STAR_$dyn_63754(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_63755 = (function (p,v,ch){
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
return cljs$core$async$Pub$unsub_STAR_$dyn_63755(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_63756 = (function() {
var G__63757 = null;
var G__63757__1 = (function (p){
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
var G__63757__2 = (function (p,v){
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
G__63757 = function(p,v){
switch(arguments.length){
case 1:
return G__63757__1.call(this,p);
case 2:
return G__63757__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__63757.cljs$core$IFn$_invoke$arity$1 = G__63757__1;
G__63757.cljs$core$IFn$_invoke$arity$2 = G__63757__2;
return G__63757;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__62489 = arguments.length;
switch (G__62489) {
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
return cljs$core$async$Pub$unsub_all_STAR_$dyn_63756(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_63756(p,v);
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
var G__62502 = arguments.length;
switch (G__62502) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__62496_SHARP_){
if(cljs.core.truth_((p1__62496_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__62496_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__62496_SHARP_.call(null,topic)))){
return p1__62496_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__62496_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async62504 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async62504 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta62505){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta62505 = meta62505;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async62504.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_62506,meta62505__$1){
var self__ = this;
var _62506__$1 = this;
return (new cljs.core.async.t_cljs$core$async62504(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta62505__$1));
}));

(cljs.core.async.t_cljs$core$async62504.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_62506){
var self__ = this;
var _62506__$1 = this;
return self__.meta62505;
}));

(cljs.core.async.t_cljs$core$async62504.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async62504.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async62504.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async62504.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async62504.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
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

(cljs.core.async.t_cljs$core$async62504.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async62504.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async62504.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta62505","meta62505",-1136646098,null)], null);
}));

(cljs.core.async.t_cljs$core$async62504.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async62504.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async62504");

(cljs.core.async.t_cljs$core$async62504.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async62504");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async62504.
 */
cljs.core.async.__GT_t_cljs$core$async62504 = (function cljs$core$async$__GT_t_cljs$core$async62504(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta62505){
return (new cljs.core.async.t_cljs$core$async62504(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta62505));
});

}

return (new cljs.core.async.t_cljs$core$async62504(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__61429__auto___63765 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__61430__auto__ = (function (){var switch__61339__auto__ = (function (state_62580){
var state_val_62581 = (state_62580[(1)]);
if((state_val_62581 === (7))){
var inst_62576 = (state_62580[(2)]);
var state_62580__$1 = state_62580;
var statearr_62582_63766 = state_62580__$1;
(statearr_62582_63766[(2)] = inst_62576);

(statearr_62582_63766[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62581 === (20))){
var state_62580__$1 = state_62580;
var statearr_62583_63767 = state_62580__$1;
(statearr_62583_63767[(2)] = null);

(statearr_62583_63767[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62581 === (1))){
var state_62580__$1 = state_62580;
var statearr_62584_63768 = state_62580__$1;
(statearr_62584_63768[(2)] = null);

(statearr_62584_63768[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62581 === (24))){
var inst_62559 = (state_62580[(7)]);
var inst_62568 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_62559);
var state_62580__$1 = state_62580;
var statearr_62585_63769 = state_62580__$1;
(statearr_62585_63769[(2)] = inst_62568);

(statearr_62585_63769[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62581 === (4))){
var inst_62511 = (state_62580[(8)]);
var inst_62511__$1 = (state_62580[(2)]);
var inst_62512 = (inst_62511__$1 == null);
var state_62580__$1 = (function (){var statearr_62586 = state_62580;
(statearr_62586[(8)] = inst_62511__$1);

return statearr_62586;
})();
if(cljs.core.truth_(inst_62512)){
var statearr_62587_63770 = state_62580__$1;
(statearr_62587_63770[(1)] = (5));

} else {
var statearr_62588_63771 = state_62580__$1;
(statearr_62588_63771[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62581 === (15))){
var inst_62553 = (state_62580[(2)]);
var state_62580__$1 = state_62580;
var statearr_62589_63772 = state_62580__$1;
(statearr_62589_63772[(2)] = inst_62553);

(statearr_62589_63772[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62581 === (21))){
var inst_62573 = (state_62580[(2)]);
var state_62580__$1 = (function (){var statearr_62590 = state_62580;
(statearr_62590[(9)] = inst_62573);

return statearr_62590;
})();
var statearr_62591_63773 = state_62580__$1;
(statearr_62591_63773[(2)] = null);

(statearr_62591_63773[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62581 === (13))){
var inst_62535 = (state_62580[(10)]);
var inst_62537 = cljs.core.chunked_seq_QMARK_(inst_62535);
var state_62580__$1 = state_62580;
if(inst_62537){
var statearr_62592_63774 = state_62580__$1;
(statearr_62592_63774[(1)] = (16));

} else {
var statearr_62593_63775 = state_62580__$1;
(statearr_62593_63775[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62581 === (22))){
var inst_62565 = (state_62580[(2)]);
var state_62580__$1 = state_62580;
if(cljs.core.truth_(inst_62565)){
var statearr_62594_63776 = state_62580__$1;
(statearr_62594_63776[(1)] = (23));

} else {
var statearr_62595_63777 = state_62580__$1;
(statearr_62595_63777[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62581 === (6))){
var inst_62511 = (state_62580[(8)]);
var inst_62561 = (state_62580[(11)]);
var inst_62559 = (state_62580[(7)]);
var inst_62559__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_62511) : topic_fn.call(null,inst_62511));
var inst_62560 = cljs.core.deref(mults);
var inst_62561__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_62560,inst_62559__$1);
var state_62580__$1 = (function (){var statearr_62596 = state_62580;
(statearr_62596[(11)] = inst_62561__$1);

(statearr_62596[(7)] = inst_62559__$1);

return statearr_62596;
})();
if(cljs.core.truth_(inst_62561__$1)){
var statearr_62597_63778 = state_62580__$1;
(statearr_62597_63778[(1)] = (19));

} else {
var statearr_62598_63779 = state_62580__$1;
(statearr_62598_63779[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62581 === (25))){
var inst_62570 = (state_62580[(2)]);
var state_62580__$1 = state_62580;
var statearr_62599_63780 = state_62580__$1;
(statearr_62599_63780[(2)] = inst_62570);

(statearr_62599_63780[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62581 === (17))){
var inst_62535 = (state_62580[(10)]);
var inst_62544 = cljs.core.first(inst_62535);
var inst_62545 = cljs.core.async.muxch_STAR_(inst_62544);
var inst_62546 = cljs.core.async.close_BANG_(inst_62545);
var inst_62547 = cljs.core.next(inst_62535);
var inst_62521 = inst_62547;
var inst_62522 = null;
var inst_62523 = (0);
var inst_62524 = (0);
var state_62580__$1 = (function (){var statearr_62600 = state_62580;
(statearr_62600[(12)] = inst_62546);

(statearr_62600[(13)] = inst_62523);

(statearr_62600[(14)] = inst_62521);

(statearr_62600[(15)] = inst_62524);

(statearr_62600[(16)] = inst_62522);

return statearr_62600;
})();
var statearr_62601_63781 = state_62580__$1;
(statearr_62601_63781[(2)] = null);

(statearr_62601_63781[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62581 === (3))){
var inst_62578 = (state_62580[(2)]);
var state_62580__$1 = state_62580;
return cljs.core.async.impl.ioc_helpers.return_chan(state_62580__$1,inst_62578);
} else {
if((state_val_62581 === (12))){
var inst_62555 = (state_62580[(2)]);
var state_62580__$1 = state_62580;
var statearr_62602_63784 = state_62580__$1;
(statearr_62602_63784[(2)] = inst_62555);

(statearr_62602_63784[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62581 === (2))){
var state_62580__$1 = state_62580;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_62580__$1,(4),ch);
} else {
if((state_val_62581 === (23))){
var state_62580__$1 = state_62580;
var statearr_62603_63787 = state_62580__$1;
(statearr_62603_63787[(2)] = null);

(statearr_62603_63787[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62581 === (19))){
var inst_62511 = (state_62580[(8)]);
var inst_62561 = (state_62580[(11)]);
var inst_62563 = cljs.core.async.muxch_STAR_(inst_62561);
var state_62580__$1 = state_62580;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_62580__$1,(22),inst_62563,inst_62511);
} else {
if((state_val_62581 === (11))){
var inst_62521 = (state_62580[(14)]);
var inst_62535 = (state_62580[(10)]);
var inst_62535__$1 = cljs.core.seq(inst_62521);
var state_62580__$1 = (function (){var statearr_62604 = state_62580;
(statearr_62604[(10)] = inst_62535__$1);

return statearr_62604;
})();
if(inst_62535__$1){
var statearr_62605_63788 = state_62580__$1;
(statearr_62605_63788[(1)] = (13));

} else {
var statearr_62606_63789 = state_62580__$1;
(statearr_62606_63789[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62581 === (9))){
var inst_62557 = (state_62580[(2)]);
var state_62580__$1 = state_62580;
var statearr_62607_63790 = state_62580__$1;
(statearr_62607_63790[(2)] = inst_62557);

(statearr_62607_63790[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62581 === (5))){
var inst_62518 = cljs.core.deref(mults);
var inst_62519 = cljs.core.vals(inst_62518);
var inst_62520 = cljs.core.seq(inst_62519);
var inst_62521 = inst_62520;
var inst_62522 = null;
var inst_62523 = (0);
var inst_62524 = (0);
var state_62580__$1 = (function (){var statearr_62608 = state_62580;
(statearr_62608[(13)] = inst_62523);

(statearr_62608[(14)] = inst_62521);

(statearr_62608[(15)] = inst_62524);

(statearr_62608[(16)] = inst_62522);

return statearr_62608;
})();
var statearr_62609_63791 = state_62580__$1;
(statearr_62609_63791[(2)] = null);

(statearr_62609_63791[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62581 === (14))){
var state_62580__$1 = state_62580;
var statearr_62613_63792 = state_62580__$1;
(statearr_62613_63792[(2)] = null);

(statearr_62613_63792[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62581 === (16))){
var inst_62535 = (state_62580[(10)]);
var inst_62539 = cljs.core.chunk_first(inst_62535);
var inst_62540 = cljs.core.chunk_rest(inst_62535);
var inst_62541 = cljs.core.count(inst_62539);
var inst_62521 = inst_62540;
var inst_62522 = inst_62539;
var inst_62523 = inst_62541;
var inst_62524 = (0);
var state_62580__$1 = (function (){var statearr_62614 = state_62580;
(statearr_62614[(13)] = inst_62523);

(statearr_62614[(14)] = inst_62521);

(statearr_62614[(15)] = inst_62524);

(statearr_62614[(16)] = inst_62522);

return statearr_62614;
})();
var statearr_62615_63794 = state_62580__$1;
(statearr_62615_63794[(2)] = null);

(statearr_62615_63794[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62581 === (10))){
var inst_62523 = (state_62580[(13)]);
var inst_62521 = (state_62580[(14)]);
var inst_62524 = (state_62580[(15)]);
var inst_62522 = (state_62580[(16)]);
var inst_62529 = cljs.core._nth(inst_62522,inst_62524);
var inst_62530 = cljs.core.async.muxch_STAR_(inst_62529);
var inst_62531 = cljs.core.async.close_BANG_(inst_62530);
var inst_62532 = (inst_62524 + (1));
var tmp62610 = inst_62523;
var tmp62611 = inst_62521;
var tmp62612 = inst_62522;
var inst_62521__$1 = tmp62611;
var inst_62522__$1 = tmp62612;
var inst_62523__$1 = tmp62610;
var inst_62524__$1 = inst_62532;
var state_62580__$1 = (function (){var statearr_62616 = state_62580;
(statearr_62616[(13)] = inst_62523__$1);

(statearr_62616[(14)] = inst_62521__$1);

(statearr_62616[(15)] = inst_62524__$1);

(statearr_62616[(17)] = inst_62531);

(statearr_62616[(16)] = inst_62522__$1);

return statearr_62616;
})();
var statearr_62617_63795 = state_62580__$1;
(statearr_62617_63795[(2)] = null);

(statearr_62617_63795[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62581 === (18))){
var inst_62550 = (state_62580[(2)]);
var state_62580__$1 = state_62580;
var statearr_62618_63796 = state_62580__$1;
(statearr_62618_63796[(2)] = inst_62550);

(statearr_62618_63796[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62581 === (8))){
var inst_62523 = (state_62580[(13)]);
var inst_62524 = (state_62580[(15)]);
var inst_62526 = (inst_62524 < inst_62523);
var inst_62527 = inst_62526;
var state_62580__$1 = state_62580;
if(cljs.core.truth_(inst_62527)){
var statearr_62619_63797 = state_62580__$1;
(statearr_62619_63797[(1)] = (10));

} else {
var statearr_62620_63798 = state_62580__$1;
(statearr_62620_63798[(1)] = (11));

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
var cljs$core$async$state_machine__61340__auto__ = null;
var cljs$core$async$state_machine__61340__auto____0 = (function (){
var statearr_62621 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_62621[(0)] = cljs$core$async$state_machine__61340__auto__);

(statearr_62621[(1)] = (1));

return statearr_62621;
});
var cljs$core$async$state_machine__61340__auto____1 = (function (state_62580){
while(true){
var ret_value__61341__auto__ = (function (){try{while(true){
var result__61342__auto__ = switch__61339__auto__(state_62580);
if(cljs.core.keyword_identical_QMARK_(result__61342__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__61342__auto__;
}
break;
}
}catch (e62622){var ex__61343__auto__ = e62622;
var statearr_62623_63799 = state_62580;
(statearr_62623_63799[(2)] = ex__61343__auto__);


if(cljs.core.seq((state_62580[(4)]))){
var statearr_62624_63800 = state_62580;
(statearr_62624_63800[(1)] = cljs.core.first((state_62580[(4)])));

} else {
throw ex__61343__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__61341__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__63801 = state_62580;
state_62580 = G__63801;
continue;
} else {
return ret_value__61341__auto__;
}
break;
}
});
cljs$core$async$state_machine__61340__auto__ = function(state_62580){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__61340__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__61340__auto____1.call(this,state_62580);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__61340__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__61340__auto____0;
cljs$core$async$state_machine__61340__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__61340__auto____1;
return cljs$core$async$state_machine__61340__auto__;
})()
})();
var state__61431__auto__ = (function (){var statearr_62625 = f__61430__auto__();
(statearr_62625[(6)] = c__61429__auto___63765);

return statearr_62625;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__61431__auto__);
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
var G__62627 = arguments.length;
switch (G__62627) {
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
var G__62629 = arguments.length;
switch (G__62629) {
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
var G__62631 = arguments.length;
switch (G__62631) {
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
var c__61429__auto___63805 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__61430__auto__ = (function (){var switch__61339__auto__ = (function (state_62674){
var state_val_62675 = (state_62674[(1)]);
if((state_val_62675 === (7))){
var state_62674__$1 = state_62674;
var statearr_62676_63806 = state_62674__$1;
(statearr_62676_63806[(2)] = null);

(statearr_62676_63806[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62675 === (1))){
var state_62674__$1 = state_62674;
var statearr_62677_63807 = state_62674__$1;
(statearr_62677_63807[(2)] = null);

(statearr_62677_63807[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62675 === (4))){
var inst_62635 = (state_62674[(7)]);
var inst_62634 = (state_62674[(8)]);
var inst_62637 = (inst_62635 < inst_62634);
var state_62674__$1 = state_62674;
if(cljs.core.truth_(inst_62637)){
var statearr_62678_63808 = state_62674__$1;
(statearr_62678_63808[(1)] = (6));

} else {
var statearr_62679_63809 = state_62674__$1;
(statearr_62679_63809[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62675 === (15))){
var inst_62660 = (state_62674[(9)]);
var inst_62665 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_62660);
var state_62674__$1 = state_62674;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_62674__$1,(17),out,inst_62665);
} else {
if((state_val_62675 === (13))){
var inst_62660 = (state_62674[(9)]);
var inst_62660__$1 = (state_62674[(2)]);
var inst_62661 = cljs.core.some(cljs.core.nil_QMARK_,inst_62660__$1);
var state_62674__$1 = (function (){var statearr_62680 = state_62674;
(statearr_62680[(9)] = inst_62660__$1);

return statearr_62680;
})();
if(cljs.core.truth_(inst_62661)){
var statearr_62681_63815 = state_62674__$1;
(statearr_62681_63815[(1)] = (14));

} else {
var statearr_62682_63816 = state_62674__$1;
(statearr_62682_63816[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62675 === (6))){
var state_62674__$1 = state_62674;
var statearr_62683_63817 = state_62674__$1;
(statearr_62683_63817[(2)] = null);

(statearr_62683_63817[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62675 === (17))){
var inst_62667 = (state_62674[(2)]);
var state_62674__$1 = (function (){var statearr_62685 = state_62674;
(statearr_62685[(10)] = inst_62667);

return statearr_62685;
})();
var statearr_62686_63818 = state_62674__$1;
(statearr_62686_63818[(2)] = null);

(statearr_62686_63818[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62675 === (3))){
var inst_62672 = (state_62674[(2)]);
var state_62674__$1 = state_62674;
return cljs.core.async.impl.ioc_helpers.return_chan(state_62674__$1,inst_62672);
} else {
if((state_val_62675 === (12))){
var _ = (function (){var statearr_62687 = state_62674;
(statearr_62687[(4)] = cljs.core.rest((state_62674[(4)])));

return statearr_62687;
})();
var state_62674__$1 = state_62674;
var ex62684 = (state_62674__$1[(2)]);
var statearr_62688_63819 = state_62674__$1;
(statearr_62688_63819[(5)] = ex62684);


if((ex62684 instanceof Object)){
var statearr_62689_63820 = state_62674__$1;
(statearr_62689_63820[(1)] = (11));

(statearr_62689_63820[(5)] = null);

} else {
throw ex62684;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62675 === (2))){
var inst_62633 = cljs.core.reset_BANG_(dctr,cnt);
var inst_62634 = cnt;
var inst_62635 = (0);
var state_62674__$1 = (function (){var statearr_62690 = state_62674;
(statearr_62690[(11)] = inst_62633);

(statearr_62690[(7)] = inst_62635);

(statearr_62690[(8)] = inst_62634);

return statearr_62690;
})();
var statearr_62691_63821 = state_62674__$1;
(statearr_62691_63821[(2)] = null);

(statearr_62691_63821[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62675 === (11))){
var inst_62639 = (state_62674[(2)]);
var inst_62640 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_62674__$1 = (function (){var statearr_62692 = state_62674;
(statearr_62692[(12)] = inst_62639);

return statearr_62692;
})();
var statearr_62693_63822 = state_62674__$1;
(statearr_62693_63822[(2)] = inst_62640);

(statearr_62693_63822[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62675 === (9))){
var inst_62635 = (state_62674[(7)]);
var _ = (function (){var statearr_62694 = state_62674;
(statearr_62694[(4)] = cljs.core.cons((12),(state_62674[(4)])));

return statearr_62694;
})();
var inst_62646 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_62635) : chs__$1.call(null,inst_62635));
var inst_62647 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_62635) : done.call(null,inst_62635));
var inst_62648 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_62646,inst_62647);
var ___$1 = (function (){var statearr_62695 = state_62674;
(statearr_62695[(4)] = cljs.core.rest((state_62674[(4)])));

return statearr_62695;
})();
var state_62674__$1 = state_62674;
var statearr_62696_63823 = state_62674__$1;
(statearr_62696_63823[(2)] = inst_62648);

(statearr_62696_63823[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62675 === (5))){
var inst_62658 = (state_62674[(2)]);
var state_62674__$1 = (function (){var statearr_62697 = state_62674;
(statearr_62697[(13)] = inst_62658);

return statearr_62697;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_62674__$1,(13),dchan);
} else {
if((state_val_62675 === (14))){
var inst_62663 = cljs.core.async.close_BANG_(out);
var state_62674__$1 = state_62674;
var statearr_62698_63824 = state_62674__$1;
(statearr_62698_63824[(2)] = inst_62663);

(statearr_62698_63824[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62675 === (16))){
var inst_62670 = (state_62674[(2)]);
var state_62674__$1 = state_62674;
var statearr_62699_63825 = state_62674__$1;
(statearr_62699_63825[(2)] = inst_62670);

(statearr_62699_63825[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62675 === (10))){
var inst_62635 = (state_62674[(7)]);
var inst_62651 = (state_62674[(2)]);
var inst_62652 = (inst_62635 + (1));
var inst_62635__$1 = inst_62652;
var state_62674__$1 = (function (){var statearr_62700 = state_62674;
(statearr_62700[(14)] = inst_62651);

(statearr_62700[(7)] = inst_62635__$1);

return statearr_62700;
})();
var statearr_62701_63826 = state_62674__$1;
(statearr_62701_63826[(2)] = null);

(statearr_62701_63826[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62675 === (8))){
var inst_62656 = (state_62674[(2)]);
var state_62674__$1 = state_62674;
var statearr_62702_63827 = state_62674__$1;
(statearr_62702_63827[(2)] = inst_62656);

(statearr_62702_63827[(1)] = (5));


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
var cljs$core$async$state_machine__61340__auto__ = null;
var cljs$core$async$state_machine__61340__auto____0 = (function (){
var statearr_62703 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_62703[(0)] = cljs$core$async$state_machine__61340__auto__);

(statearr_62703[(1)] = (1));

return statearr_62703;
});
var cljs$core$async$state_machine__61340__auto____1 = (function (state_62674){
while(true){
var ret_value__61341__auto__ = (function (){try{while(true){
var result__61342__auto__ = switch__61339__auto__(state_62674);
if(cljs.core.keyword_identical_QMARK_(result__61342__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__61342__auto__;
}
break;
}
}catch (e62704){var ex__61343__auto__ = e62704;
var statearr_62705_63828 = state_62674;
(statearr_62705_63828[(2)] = ex__61343__auto__);


if(cljs.core.seq((state_62674[(4)]))){
var statearr_62706_63829 = state_62674;
(statearr_62706_63829[(1)] = cljs.core.first((state_62674[(4)])));

} else {
throw ex__61343__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__61341__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__63830 = state_62674;
state_62674 = G__63830;
continue;
} else {
return ret_value__61341__auto__;
}
break;
}
});
cljs$core$async$state_machine__61340__auto__ = function(state_62674){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__61340__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__61340__auto____1.call(this,state_62674);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__61340__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__61340__auto____0;
cljs$core$async$state_machine__61340__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__61340__auto____1;
return cljs$core$async$state_machine__61340__auto__;
})()
})();
var state__61431__auto__ = (function (){var statearr_62707 = f__61430__auto__();
(statearr_62707[(6)] = c__61429__auto___63805);

return statearr_62707;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__61431__auto__);
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
var G__62710 = arguments.length;
switch (G__62710) {
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
var c__61429__auto___63836 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__61430__auto__ = (function (){var switch__61339__auto__ = (function (state_62742){
var state_val_62743 = (state_62742[(1)]);
if((state_val_62743 === (7))){
var inst_62721 = (state_62742[(7)]);
var inst_62722 = (state_62742[(8)]);
var inst_62721__$1 = (state_62742[(2)]);
var inst_62722__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_62721__$1,(0),null);
var inst_62723 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_62721__$1,(1),null);
var inst_62724 = (inst_62722__$1 == null);
var state_62742__$1 = (function (){var statearr_62744 = state_62742;
(statearr_62744[(7)] = inst_62721__$1);

(statearr_62744[(9)] = inst_62723);

(statearr_62744[(8)] = inst_62722__$1);

return statearr_62744;
})();
if(cljs.core.truth_(inst_62724)){
var statearr_62745_63839 = state_62742__$1;
(statearr_62745_63839[(1)] = (8));

} else {
var statearr_62746_63840 = state_62742__$1;
(statearr_62746_63840[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62743 === (1))){
var inst_62711 = cljs.core.vec(chs);
var inst_62712 = inst_62711;
var state_62742__$1 = (function (){var statearr_62747 = state_62742;
(statearr_62747[(10)] = inst_62712);

return statearr_62747;
})();
var statearr_62748_63841 = state_62742__$1;
(statearr_62748_63841[(2)] = null);

(statearr_62748_63841[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62743 === (4))){
var inst_62712 = (state_62742[(10)]);
var state_62742__$1 = state_62742;
return cljs.core.async.ioc_alts_BANG_(state_62742__$1,(7),inst_62712);
} else {
if((state_val_62743 === (6))){
var inst_62738 = (state_62742[(2)]);
var state_62742__$1 = state_62742;
var statearr_62749_63842 = state_62742__$1;
(statearr_62749_63842[(2)] = inst_62738);

(statearr_62749_63842[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62743 === (3))){
var inst_62740 = (state_62742[(2)]);
var state_62742__$1 = state_62742;
return cljs.core.async.impl.ioc_helpers.return_chan(state_62742__$1,inst_62740);
} else {
if((state_val_62743 === (2))){
var inst_62712 = (state_62742[(10)]);
var inst_62714 = cljs.core.count(inst_62712);
var inst_62715 = (inst_62714 > (0));
var state_62742__$1 = state_62742;
if(cljs.core.truth_(inst_62715)){
var statearr_62751_63843 = state_62742__$1;
(statearr_62751_63843[(1)] = (4));

} else {
var statearr_62752_63844 = state_62742__$1;
(statearr_62752_63844[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62743 === (11))){
var inst_62712 = (state_62742[(10)]);
var inst_62731 = (state_62742[(2)]);
var tmp62750 = inst_62712;
var inst_62712__$1 = tmp62750;
var state_62742__$1 = (function (){var statearr_62753 = state_62742;
(statearr_62753[(10)] = inst_62712__$1);

(statearr_62753[(11)] = inst_62731);

return statearr_62753;
})();
var statearr_62754_63845 = state_62742__$1;
(statearr_62754_63845[(2)] = null);

(statearr_62754_63845[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62743 === (9))){
var inst_62722 = (state_62742[(8)]);
var state_62742__$1 = state_62742;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_62742__$1,(11),out,inst_62722);
} else {
if((state_val_62743 === (5))){
var inst_62736 = cljs.core.async.close_BANG_(out);
var state_62742__$1 = state_62742;
var statearr_62755_63846 = state_62742__$1;
(statearr_62755_63846[(2)] = inst_62736);

(statearr_62755_63846[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62743 === (10))){
var inst_62734 = (state_62742[(2)]);
var state_62742__$1 = state_62742;
var statearr_62756_63847 = state_62742__$1;
(statearr_62756_63847[(2)] = inst_62734);

(statearr_62756_63847[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62743 === (8))){
var inst_62721 = (state_62742[(7)]);
var inst_62723 = (state_62742[(9)]);
var inst_62712 = (state_62742[(10)]);
var inst_62722 = (state_62742[(8)]);
var inst_62726 = (function (){var cs = inst_62712;
var vec__62717 = inst_62721;
var v = inst_62722;
var c = inst_62723;
return (function (p1__62708_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__62708_SHARP_);
});
})();
var inst_62727 = cljs.core.filterv(inst_62726,inst_62712);
var inst_62712__$1 = inst_62727;
var state_62742__$1 = (function (){var statearr_62757 = state_62742;
(statearr_62757[(10)] = inst_62712__$1);

return statearr_62757;
})();
var statearr_62758_63848 = state_62742__$1;
(statearr_62758_63848[(2)] = null);

(statearr_62758_63848[(1)] = (2));


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
var cljs$core$async$state_machine__61340__auto__ = null;
var cljs$core$async$state_machine__61340__auto____0 = (function (){
var statearr_62759 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_62759[(0)] = cljs$core$async$state_machine__61340__auto__);

(statearr_62759[(1)] = (1));

return statearr_62759;
});
var cljs$core$async$state_machine__61340__auto____1 = (function (state_62742){
while(true){
var ret_value__61341__auto__ = (function (){try{while(true){
var result__61342__auto__ = switch__61339__auto__(state_62742);
if(cljs.core.keyword_identical_QMARK_(result__61342__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__61342__auto__;
}
break;
}
}catch (e62760){var ex__61343__auto__ = e62760;
var statearr_62761_63849 = state_62742;
(statearr_62761_63849[(2)] = ex__61343__auto__);


if(cljs.core.seq((state_62742[(4)]))){
var statearr_62762_63850 = state_62742;
(statearr_62762_63850[(1)] = cljs.core.first((state_62742[(4)])));

} else {
throw ex__61343__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__61341__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__63851 = state_62742;
state_62742 = G__63851;
continue;
} else {
return ret_value__61341__auto__;
}
break;
}
});
cljs$core$async$state_machine__61340__auto__ = function(state_62742){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__61340__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__61340__auto____1.call(this,state_62742);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__61340__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__61340__auto____0;
cljs$core$async$state_machine__61340__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__61340__auto____1;
return cljs$core$async$state_machine__61340__auto__;
})()
})();
var state__61431__auto__ = (function (){var statearr_62763 = f__61430__auto__();
(statearr_62763[(6)] = c__61429__auto___63836);

return statearr_62763;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__61431__auto__);
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
var G__62765 = arguments.length;
switch (G__62765) {
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
var c__61429__auto___63853 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__61430__auto__ = (function (){var switch__61339__auto__ = (function (state_62790){
var state_val_62791 = (state_62790[(1)]);
if((state_val_62791 === (7))){
var inst_62771 = (state_62790[(7)]);
var inst_62771__$1 = (state_62790[(2)]);
var inst_62772 = (inst_62771__$1 == null);
var inst_62773 = cljs.core.not(inst_62772);
var state_62790__$1 = (function (){var statearr_62792 = state_62790;
(statearr_62792[(7)] = inst_62771__$1);

return statearr_62792;
})();
if(inst_62773){
var statearr_62793_63854 = state_62790__$1;
(statearr_62793_63854[(1)] = (8));

} else {
var statearr_62794_63855 = state_62790__$1;
(statearr_62794_63855[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62791 === (1))){
var inst_62766 = (0);
var state_62790__$1 = (function (){var statearr_62795 = state_62790;
(statearr_62795[(8)] = inst_62766);

return statearr_62795;
})();
var statearr_62796_63856 = state_62790__$1;
(statearr_62796_63856[(2)] = null);

(statearr_62796_63856[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62791 === (4))){
var state_62790__$1 = state_62790;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_62790__$1,(7),ch);
} else {
if((state_val_62791 === (6))){
var inst_62784 = (state_62790[(2)]);
var state_62790__$1 = state_62790;
var statearr_62799_63857 = state_62790__$1;
(statearr_62799_63857[(2)] = inst_62784);

(statearr_62799_63857[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62791 === (3))){
var inst_62786 = (state_62790[(2)]);
var inst_62787 = cljs.core.async.close_BANG_(out);
var state_62790__$1 = (function (){var statearr_62800 = state_62790;
(statearr_62800[(9)] = inst_62786);

return statearr_62800;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_62790__$1,inst_62787);
} else {
if((state_val_62791 === (2))){
var inst_62766 = (state_62790[(8)]);
var inst_62768 = (inst_62766 < n);
var state_62790__$1 = state_62790;
if(cljs.core.truth_(inst_62768)){
var statearr_62801_63858 = state_62790__$1;
(statearr_62801_63858[(1)] = (4));

} else {
var statearr_62802_63859 = state_62790__$1;
(statearr_62802_63859[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62791 === (11))){
var inst_62766 = (state_62790[(8)]);
var inst_62776 = (state_62790[(2)]);
var inst_62777 = (inst_62766 + (1));
var inst_62766__$1 = inst_62777;
var state_62790__$1 = (function (){var statearr_62803 = state_62790;
(statearr_62803[(10)] = inst_62776);

(statearr_62803[(8)] = inst_62766__$1);

return statearr_62803;
})();
var statearr_62804_63860 = state_62790__$1;
(statearr_62804_63860[(2)] = null);

(statearr_62804_63860[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62791 === (9))){
var state_62790__$1 = state_62790;
var statearr_62805_63861 = state_62790__$1;
(statearr_62805_63861[(2)] = null);

(statearr_62805_63861[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62791 === (5))){
var state_62790__$1 = state_62790;
var statearr_62807_63862 = state_62790__$1;
(statearr_62807_63862[(2)] = null);

(statearr_62807_63862[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62791 === (10))){
var inst_62781 = (state_62790[(2)]);
var state_62790__$1 = state_62790;
var statearr_62809_63863 = state_62790__$1;
(statearr_62809_63863[(2)] = inst_62781);

(statearr_62809_63863[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62791 === (8))){
var inst_62771 = (state_62790[(7)]);
var state_62790__$1 = state_62790;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_62790__$1,(11),out,inst_62771);
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
var cljs$core$async$state_machine__61340__auto__ = null;
var cljs$core$async$state_machine__61340__auto____0 = (function (){
var statearr_62810 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_62810[(0)] = cljs$core$async$state_machine__61340__auto__);

(statearr_62810[(1)] = (1));

return statearr_62810;
});
var cljs$core$async$state_machine__61340__auto____1 = (function (state_62790){
while(true){
var ret_value__61341__auto__ = (function (){try{while(true){
var result__61342__auto__ = switch__61339__auto__(state_62790);
if(cljs.core.keyword_identical_QMARK_(result__61342__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__61342__auto__;
}
break;
}
}catch (e62811){var ex__61343__auto__ = e62811;
var statearr_62812_63864 = state_62790;
(statearr_62812_63864[(2)] = ex__61343__auto__);


if(cljs.core.seq((state_62790[(4)]))){
var statearr_62813_63865 = state_62790;
(statearr_62813_63865[(1)] = cljs.core.first((state_62790[(4)])));

} else {
throw ex__61343__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__61341__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__63866 = state_62790;
state_62790 = G__63866;
continue;
} else {
return ret_value__61341__auto__;
}
break;
}
});
cljs$core$async$state_machine__61340__auto__ = function(state_62790){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__61340__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__61340__auto____1.call(this,state_62790);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__61340__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__61340__auto____0;
cljs$core$async$state_machine__61340__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__61340__auto____1;
return cljs$core$async$state_machine__61340__auto__;
})()
})();
var state__61431__auto__ = (function (){var statearr_62814 = f__61430__auto__();
(statearr_62814[(6)] = c__61429__auto___63853);

return statearr_62814;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__61431__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async62817 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async62817 = (function (f,ch,meta62818){
this.f = f;
this.ch = ch;
this.meta62818 = meta62818;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async62817.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_62819,meta62818__$1){
var self__ = this;
var _62819__$1 = this;
return (new cljs.core.async.t_cljs$core$async62817(self__.f,self__.ch,meta62818__$1));
}));

(cljs.core.async.t_cljs$core$async62817.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_62819){
var self__ = this;
var _62819__$1 = this;
return self__.meta62818;
}));

(cljs.core.async.t_cljs$core$async62817.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async62817.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async62817.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async62817.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async62817.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async62821 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async62821 = (function (f,ch,meta62818,_,fn1,meta62822){
this.f = f;
this.ch = ch;
this.meta62818 = meta62818;
this._ = _;
this.fn1 = fn1;
this.meta62822 = meta62822;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async62821.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_62823,meta62822__$1){
var self__ = this;
var _62823__$1 = this;
return (new cljs.core.async.t_cljs$core$async62821(self__.f,self__.ch,self__.meta62818,self__._,self__.fn1,meta62822__$1));
}));

(cljs.core.async.t_cljs$core$async62821.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_62823){
var self__ = this;
var _62823__$1 = this;
return self__.meta62822;
}));

(cljs.core.async.t_cljs$core$async62821.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async62821.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async62821.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async62821.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__62815_SHARP_){
var G__62824 = (((p1__62815_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__62815_SHARP_) : self__.f.call(null,p1__62815_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__62824) : f1.call(null,G__62824));
});
}));

(cljs.core.async.t_cljs$core$async62821.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta62818","meta62818",-360396037,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async62817","cljs.core.async/t_cljs$core$async62817",1428230164,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta62822","meta62822",626391489,null)], null);
}));

(cljs.core.async.t_cljs$core$async62821.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async62821.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async62821");

(cljs.core.async.t_cljs$core$async62821.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async62821");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async62821.
 */
cljs.core.async.__GT_t_cljs$core$async62821 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async62821(f__$1,ch__$1,meta62818__$1,___$2,fn1__$1,meta62822){
return (new cljs.core.async.t_cljs$core$async62821(f__$1,ch__$1,meta62818__$1,___$2,fn1__$1,meta62822));
});

}

return (new cljs.core.async.t_cljs$core$async62821(self__.f,self__.ch,self__.meta62818,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__5043__auto__ = ret;
if(cljs.core.truth_(and__5043__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__5043__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__62825 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__62825) : self__.f.call(null,G__62825));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async62817.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async62817.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async62817.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta62818","meta62818",-360396037,null)], null);
}));

(cljs.core.async.t_cljs$core$async62817.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async62817.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async62817");

(cljs.core.async.t_cljs$core$async62817.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async62817");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async62817.
 */
cljs.core.async.__GT_t_cljs$core$async62817 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async62817(f__$1,ch__$1,meta62818){
return (new cljs.core.async.t_cljs$core$async62817(f__$1,ch__$1,meta62818));
});

}

return (new cljs.core.async.t_cljs$core$async62817(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async62827 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async62827 = (function (f,ch,meta62828){
this.f = f;
this.ch = ch;
this.meta62828 = meta62828;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async62827.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_62829,meta62828__$1){
var self__ = this;
var _62829__$1 = this;
return (new cljs.core.async.t_cljs$core$async62827(self__.f,self__.ch,meta62828__$1));
}));

(cljs.core.async.t_cljs$core$async62827.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_62829){
var self__ = this;
var _62829__$1 = this;
return self__.meta62828;
}));

(cljs.core.async.t_cljs$core$async62827.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async62827.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async62827.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async62827.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async62827.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async62827.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async62827.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta62828","meta62828",192490198,null)], null);
}));

(cljs.core.async.t_cljs$core$async62827.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async62827.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async62827");

(cljs.core.async.t_cljs$core$async62827.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async62827");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async62827.
 */
cljs.core.async.__GT_t_cljs$core$async62827 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async62827(f__$1,ch__$1,meta62828){
return (new cljs.core.async.t_cljs$core$async62827(f__$1,ch__$1,meta62828));
});

}

return (new cljs.core.async.t_cljs$core$async62827(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async62835 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async62835 = (function (p,ch,meta62836){
this.p = p;
this.ch = ch;
this.meta62836 = meta62836;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async62835.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_62837,meta62836__$1){
var self__ = this;
var _62837__$1 = this;
return (new cljs.core.async.t_cljs$core$async62835(self__.p,self__.ch,meta62836__$1));
}));

(cljs.core.async.t_cljs$core$async62835.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_62837){
var self__ = this;
var _62837__$1 = this;
return self__.meta62836;
}));

(cljs.core.async.t_cljs$core$async62835.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async62835.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async62835.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async62835.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async62835.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async62835.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async62835.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async62835.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta62836","meta62836",601879213,null)], null);
}));

(cljs.core.async.t_cljs$core$async62835.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async62835.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async62835");

(cljs.core.async.t_cljs$core$async62835.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async62835");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async62835.
 */
cljs.core.async.__GT_t_cljs$core$async62835 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async62835(p__$1,ch__$1,meta62836){
return (new cljs.core.async.t_cljs$core$async62835(p__$1,ch__$1,meta62836));
});

}

return (new cljs.core.async.t_cljs$core$async62835(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__62840 = arguments.length;
switch (G__62840) {
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
var c__61429__auto___63885 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__61430__auto__ = (function (){var switch__61339__auto__ = (function (state_62861){
var state_val_62862 = (state_62861[(1)]);
if((state_val_62862 === (7))){
var inst_62857 = (state_62861[(2)]);
var state_62861__$1 = state_62861;
var statearr_62863_63887 = state_62861__$1;
(statearr_62863_63887[(2)] = inst_62857);

(statearr_62863_63887[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62862 === (1))){
var state_62861__$1 = state_62861;
var statearr_62864_63888 = state_62861__$1;
(statearr_62864_63888[(2)] = null);

(statearr_62864_63888[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62862 === (4))){
var inst_62843 = (state_62861[(7)]);
var inst_62843__$1 = (state_62861[(2)]);
var inst_62844 = (inst_62843__$1 == null);
var state_62861__$1 = (function (){var statearr_62865 = state_62861;
(statearr_62865[(7)] = inst_62843__$1);

return statearr_62865;
})();
if(cljs.core.truth_(inst_62844)){
var statearr_62866_63889 = state_62861__$1;
(statearr_62866_63889[(1)] = (5));

} else {
var statearr_62867_63890 = state_62861__$1;
(statearr_62867_63890[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62862 === (6))){
var inst_62843 = (state_62861[(7)]);
var inst_62848 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_62843) : p.call(null,inst_62843));
var state_62861__$1 = state_62861;
if(cljs.core.truth_(inst_62848)){
var statearr_62868_63891 = state_62861__$1;
(statearr_62868_63891[(1)] = (8));

} else {
var statearr_62869_63892 = state_62861__$1;
(statearr_62869_63892[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62862 === (3))){
var inst_62859 = (state_62861[(2)]);
var state_62861__$1 = state_62861;
return cljs.core.async.impl.ioc_helpers.return_chan(state_62861__$1,inst_62859);
} else {
if((state_val_62862 === (2))){
var state_62861__$1 = state_62861;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_62861__$1,(4),ch);
} else {
if((state_val_62862 === (11))){
var inst_62851 = (state_62861[(2)]);
var state_62861__$1 = state_62861;
var statearr_62870_63893 = state_62861__$1;
(statearr_62870_63893[(2)] = inst_62851);

(statearr_62870_63893[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62862 === (9))){
var state_62861__$1 = state_62861;
var statearr_62871_63894 = state_62861__$1;
(statearr_62871_63894[(2)] = null);

(statearr_62871_63894[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62862 === (5))){
var inst_62846 = cljs.core.async.close_BANG_(out);
var state_62861__$1 = state_62861;
var statearr_62872_63901 = state_62861__$1;
(statearr_62872_63901[(2)] = inst_62846);

(statearr_62872_63901[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62862 === (10))){
var inst_62854 = (state_62861[(2)]);
var state_62861__$1 = (function (){var statearr_62873 = state_62861;
(statearr_62873[(8)] = inst_62854);

return statearr_62873;
})();
var statearr_62874_63902 = state_62861__$1;
(statearr_62874_63902[(2)] = null);

(statearr_62874_63902[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62862 === (8))){
var inst_62843 = (state_62861[(7)]);
var state_62861__$1 = state_62861;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_62861__$1,(11),out,inst_62843);
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
var cljs$core$async$state_machine__61340__auto__ = null;
var cljs$core$async$state_machine__61340__auto____0 = (function (){
var statearr_62875 = [null,null,null,null,null,null,null,null,null];
(statearr_62875[(0)] = cljs$core$async$state_machine__61340__auto__);

(statearr_62875[(1)] = (1));

return statearr_62875;
});
var cljs$core$async$state_machine__61340__auto____1 = (function (state_62861){
while(true){
var ret_value__61341__auto__ = (function (){try{while(true){
var result__61342__auto__ = switch__61339__auto__(state_62861);
if(cljs.core.keyword_identical_QMARK_(result__61342__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__61342__auto__;
}
break;
}
}catch (e62876){var ex__61343__auto__ = e62876;
var statearr_62877_63903 = state_62861;
(statearr_62877_63903[(2)] = ex__61343__auto__);


if(cljs.core.seq((state_62861[(4)]))){
var statearr_62878_63904 = state_62861;
(statearr_62878_63904[(1)] = cljs.core.first((state_62861[(4)])));

} else {
throw ex__61343__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__61341__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__63905 = state_62861;
state_62861 = G__63905;
continue;
} else {
return ret_value__61341__auto__;
}
break;
}
});
cljs$core$async$state_machine__61340__auto__ = function(state_62861){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__61340__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__61340__auto____1.call(this,state_62861);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__61340__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__61340__auto____0;
cljs$core$async$state_machine__61340__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__61340__auto____1;
return cljs$core$async$state_machine__61340__auto__;
})()
})();
var state__61431__auto__ = (function (){var statearr_62879 = f__61430__auto__();
(statearr_62879[(6)] = c__61429__auto___63885);

return statearr_62879;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__61431__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__62882 = arguments.length;
switch (G__62882) {
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
var c__61429__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__61430__auto__ = (function (){var switch__61339__auto__ = (function (state_62948){
var state_val_62949 = (state_62948[(1)]);
if((state_val_62949 === (7))){
var inst_62944 = (state_62948[(2)]);
var state_62948__$1 = state_62948;
var statearr_62950_63913 = state_62948__$1;
(statearr_62950_63913[(2)] = inst_62944);

(statearr_62950_63913[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62949 === (20))){
var inst_62912 = (state_62948[(7)]);
var inst_62925 = (state_62948[(2)]);
var inst_62926 = cljs.core.next(inst_62912);
var inst_62898 = inst_62926;
var inst_62899 = null;
var inst_62900 = (0);
var inst_62901 = (0);
var state_62948__$1 = (function (){var statearr_62951 = state_62948;
(statearr_62951[(8)] = inst_62901);

(statearr_62951[(9)] = inst_62925);

(statearr_62951[(10)] = inst_62900);

(statearr_62951[(11)] = inst_62898);

(statearr_62951[(12)] = inst_62899);

return statearr_62951;
})();
var statearr_62952_63914 = state_62948__$1;
(statearr_62952_63914[(2)] = null);

(statearr_62952_63914[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62949 === (1))){
var state_62948__$1 = state_62948;
var statearr_62953_63915 = state_62948__$1;
(statearr_62953_63915[(2)] = null);

(statearr_62953_63915[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62949 === (4))){
var inst_62886 = (state_62948[(13)]);
var inst_62886__$1 = (state_62948[(2)]);
var inst_62887 = (inst_62886__$1 == null);
var state_62948__$1 = (function (){var statearr_62954 = state_62948;
(statearr_62954[(13)] = inst_62886__$1);

return statearr_62954;
})();
if(cljs.core.truth_(inst_62887)){
var statearr_62955_63922 = state_62948__$1;
(statearr_62955_63922[(1)] = (5));

} else {
var statearr_62956_63923 = state_62948__$1;
(statearr_62956_63923[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62949 === (15))){
var state_62948__$1 = state_62948;
var statearr_62960_63924 = state_62948__$1;
(statearr_62960_63924[(2)] = null);

(statearr_62960_63924[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62949 === (21))){
var state_62948__$1 = state_62948;
var statearr_62961_63925 = state_62948__$1;
(statearr_62961_63925[(2)] = null);

(statearr_62961_63925[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62949 === (13))){
var inst_62901 = (state_62948[(8)]);
var inst_62900 = (state_62948[(10)]);
var inst_62898 = (state_62948[(11)]);
var inst_62899 = (state_62948[(12)]);
var inst_62908 = (state_62948[(2)]);
var inst_62909 = (inst_62901 + (1));
var tmp62957 = inst_62900;
var tmp62958 = inst_62898;
var tmp62959 = inst_62899;
var inst_62898__$1 = tmp62958;
var inst_62899__$1 = tmp62959;
var inst_62900__$1 = tmp62957;
var inst_62901__$1 = inst_62909;
var state_62948__$1 = (function (){var statearr_62962 = state_62948;
(statearr_62962[(8)] = inst_62901__$1);

(statearr_62962[(14)] = inst_62908);

(statearr_62962[(10)] = inst_62900__$1);

(statearr_62962[(11)] = inst_62898__$1);

(statearr_62962[(12)] = inst_62899__$1);

return statearr_62962;
})();
var statearr_62963_63926 = state_62948__$1;
(statearr_62963_63926[(2)] = null);

(statearr_62963_63926[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62949 === (22))){
var state_62948__$1 = state_62948;
var statearr_62964_63927 = state_62948__$1;
(statearr_62964_63927[(2)] = null);

(statearr_62964_63927[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62949 === (6))){
var inst_62886 = (state_62948[(13)]);
var inst_62896 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_62886) : f.call(null,inst_62886));
var inst_62897 = cljs.core.seq(inst_62896);
var inst_62898 = inst_62897;
var inst_62899 = null;
var inst_62900 = (0);
var inst_62901 = (0);
var state_62948__$1 = (function (){var statearr_62965 = state_62948;
(statearr_62965[(8)] = inst_62901);

(statearr_62965[(10)] = inst_62900);

(statearr_62965[(11)] = inst_62898);

(statearr_62965[(12)] = inst_62899);

return statearr_62965;
})();
var statearr_62966_63928 = state_62948__$1;
(statearr_62966_63928[(2)] = null);

(statearr_62966_63928[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62949 === (17))){
var inst_62912 = (state_62948[(7)]);
var inst_62916 = cljs.core.chunk_first(inst_62912);
var inst_62917 = cljs.core.chunk_rest(inst_62912);
var inst_62918 = cljs.core.count(inst_62916);
var inst_62898 = inst_62917;
var inst_62899 = inst_62916;
var inst_62900 = inst_62918;
var inst_62901 = (0);
var state_62948__$1 = (function (){var statearr_62967 = state_62948;
(statearr_62967[(8)] = inst_62901);

(statearr_62967[(10)] = inst_62900);

(statearr_62967[(11)] = inst_62898);

(statearr_62967[(12)] = inst_62899);

return statearr_62967;
})();
var statearr_62968_63930 = state_62948__$1;
(statearr_62968_63930[(2)] = null);

(statearr_62968_63930[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62949 === (3))){
var inst_62946 = (state_62948[(2)]);
var state_62948__$1 = state_62948;
return cljs.core.async.impl.ioc_helpers.return_chan(state_62948__$1,inst_62946);
} else {
if((state_val_62949 === (12))){
var inst_62934 = (state_62948[(2)]);
var state_62948__$1 = state_62948;
var statearr_62969_63931 = state_62948__$1;
(statearr_62969_63931[(2)] = inst_62934);

(statearr_62969_63931[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62949 === (2))){
var state_62948__$1 = state_62948;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_62948__$1,(4),in$);
} else {
if((state_val_62949 === (23))){
var inst_62942 = (state_62948[(2)]);
var state_62948__$1 = state_62948;
var statearr_62970_63932 = state_62948__$1;
(statearr_62970_63932[(2)] = inst_62942);

(statearr_62970_63932[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62949 === (19))){
var inst_62929 = (state_62948[(2)]);
var state_62948__$1 = state_62948;
var statearr_62971_63934 = state_62948__$1;
(statearr_62971_63934[(2)] = inst_62929);

(statearr_62971_63934[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62949 === (11))){
var inst_62912 = (state_62948[(7)]);
var inst_62898 = (state_62948[(11)]);
var inst_62912__$1 = cljs.core.seq(inst_62898);
var state_62948__$1 = (function (){var statearr_62972 = state_62948;
(statearr_62972[(7)] = inst_62912__$1);

return statearr_62972;
})();
if(inst_62912__$1){
var statearr_62973_63935 = state_62948__$1;
(statearr_62973_63935[(1)] = (14));

} else {
var statearr_62974_63936 = state_62948__$1;
(statearr_62974_63936[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62949 === (9))){
var inst_62936 = (state_62948[(2)]);
var inst_62937 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_62948__$1 = (function (){var statearr_62975 = state_62948;
(statearr_62975[(15)] = inst_62936);

return statearr_62975;
})();
if(cljs.core.truth_(inst_62937)){
var statearr_62976_63938 = state_62948__$1;
(statearr_62976_63938[(1)] = (21));

} else {
var statearr_62977_63939 = state_62948__$1;
(statearr_62977_63939[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62949 === (5))){
var inst_62889 = cljs.core.async.close_BANG_(out);
var state_62948__$1 = state_62948;
var statearr_62978_63940 = state_62948__$1;
(statearr_62978_63940[(2)] = inst_62889);

(statearr_62978_63940[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62949 === (14))){
var inst_62912 = (state_62948[(7)]);
var inst_62914 = cljs.core.chunked_seq_QMARK_(inst_62912);
var state_62948__$1 = state_62948;
if(inst_62914){
var statearr_62979_63941 = state_62948__$1;
(statearr_62979_63941[(1)] = (17));

} else {
var statearr_62980_63942 = state_62948__$1;
(statearr_62980_63942[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62949 === (16))){
var inst_62932 = (state_62948[(2)]);
var state_62948__$1 = state_62948;
var statearr_62981_63943 = state_62948__$1;
(statearr_62981_63943[(2)] = inst_62932);

(statearr_62981_63943[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62949 === (10))){
var inst_62901 = (state_62948[(8)]);
var inst_62899 = (state_62948[(12)]);
var inst_62906 = cljs.core._nth(inst_62899,inst_62901);
var state_62948__$1 = state_62948;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_62948__$1,(13),out,inst_62906);
} else {
if((state_val_62949 === (18))){
var inst_62912 = (state_62948[(7)]);
var inst_62921 = cljs.core.first(inst_62912);
var state_62948__$1 = state_62948;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_62948__$1,(20),out,inst_62921);
} else {
if((state_val_62949 === (8))){
var inst_62901 = (state_62948[(8)]);
var inst_62900 = (state_62948[(10)]);
var inst_62903 = (inst_62901 < inst_62900);
var inst_62904 = inst_62903;
var state_62948__$1 = state_62948;
if(cljs.core.truth_(inst_62904)){
var statearr_62982_63945 = state_62948__$1;
(statearr_62982_63945[(1)] = (10));

} else {
var statearr_62983_63946 = state_62948__$1;
(statearr_62983_63946[(1)] = (11));

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
var cljs$core$async$mapcat_STAR__$_state_machine__61340__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__61340__auto____0 = (function (){
var statearr_62984 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_62984[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__61340__auto__);

(statearr_62984[(1)] = (1));

return statearr_62984;
});
var cljs$core$async$mapcat_STAR__$_state_machine__61340__auto____1 = (function (state_62948){
while(true){
var ret_value__61341__auto__ = (function (){try{while(true){
var result__61342__auto__ = switch__61339__auto__(state_62948);
if(cljs.core.keyword_identical_QMARK_(result__61342__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__61342__auto__;
}
break;
}
}catch (e62985){var ex__61343__auto__ = e62985;
var statearr_62986_63949 = state_62948;
(statearr_62986_63949[(2)] = ex__61343__auto__);


if(cljs.core.seq((state_62948[(4)]))){
var statearr_62987_63950 = state_62948;
(statearr_62987_63950[(1)] = cljs.core.first((state_62948[(4)])));

} else {
throw ex__61343__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__61341__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__63951 = state_62948;
state_62948 = G__63951;
continue;
} else {
return ret_value__61341__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__61340__auto__ = function(state_62948){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__61340__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__61340__auto____1.call(this,state_62948);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__61340__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__61340__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__61340__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__61340__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__61340__auto__;
})()
})();
var state__61431__auto__ = (function (){var statearr_62988 = f__61430__auto__();
(statearr_62988[(6)] = c__61429__auto__);

return statearr_62988;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__61431__auto__);
}));

return c__61429__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__62990 = arguments.length;
switch (G__62990) {
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
var G__62992 = arguments.length;
switch (G__62992) {
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
var G__62994 = arguments.length;
switch (G__62994) {
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
var c__61429__auto___63962 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__61430__auto__ = (function (){var switch__61339__auto__ = (function (state_63018){
var state_val_63019 = (state_63018[(1)]);
if((state_val_63019 === (7))){
var inst_63013 = (state_63018[(2)]);
var state_63018__$1 = state_63018;
var statearr_63020_63963 = state_63018__$1;
(statearr_63020_63963[(2)] = inst_63013);

(statearr_63020_63963[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63019 === (1))){
var inst_62995 = null;
var state_63018__$1 = (function (){var statearr_63021 = state_63018;
(statearr_63021[(7)] = inst_62995);

return statearr_63021;
})();
var statearr_63022_63964 = state_63018__$1;
(statearr_63022_63964[(2)] = null);

(statearr_63022_63964[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63019 === (4))){
var inst_62998 = (state_63018[(8)]);
var inst_62998__$1 = (state_63018[(2)]);
var inst_62999 = (inst_62998__$1 == null);
var inst_63000 = cljs.core.not(inst_62999);
var state_63018__$1 = (function (){var statearr_63023 = state_63018;
(statearr_63023[(8)] = inst_62998__$1);

return statearr_63023;
})();
if(inst_63000){
var statearr_63024_63965 = state_63018__$1;
(statearr_63024_63965[(1)] = (5));

} else {
var statearr_63025_63966 = state_63018__$1;
(statearr_63025_63966[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63019 === (6))){
var state_63018__$1 = state_63018;
var statearr_63026_63967 = state_63018__$1;
(statearr_63026_63967[(2)] = null);

(statearr_63026_63967[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63019 === (3))){
var inst_63015 = (state_63018[(2)]);
var inst_63016 = cljs.core.async.close_BANG_(out);
var state_63018__$1 = (function (){var statearr_63027 = state_63018;
(statearr_63027[(9)] = inst_63015);

return statearr_63027;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_63018__$1,inst_63016);
} else {
if((state_val_63019 === (2))){
var state_63018__$1 = state_63018;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_63018__$1,(4),ch);
} else {
if((state_val_63019 === (11))){
var inst_62998 = (state_63018[(8)]);
var inst_63007 = (state_63018[(2)]);
var inst_62995 = inst_62998;
var state_63018__$1 = (function (){var statearr_63028 = state_63018;
(statearr_63028[(10)] = inst_63007);

(statearr_63028[(7)] = inst_62995);

return statearr_63028;
})();
var statearr_63029_63968 = state_63018__$1;
(statearr_63029_63968[(2)] = null);

(statearr_63029_63968[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63019 === (9))){
var inst_62998 = (state_63018[(8)]);
var state_63018__$1 = state_63018;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_63018__$1,(11),out,inst_62998);
} else {
if((state_val_63019 === (5))){
var inst_62995 = (state_63018[(7)]);
var inst_62998 = (state_63018[(8)]);
var inst_63002 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_62998,inst_62995);
var state_63018__$1 = state_63018;
if(inst_63002){
var statearr_63031_63969 = state_63018__$1;
(statearr_63031_63969[(1)] = (8));

} else {
var statearr_63032_63970 = state_63018__$1;
(statearr_63032_63970[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63019 === (10))){
var inst_63010 = (state_63018[(2)]);
var state_63018__$1 = state_63018;
var statearr_63033_63971 = state_63018__$1;
(statearr_63033_63971[(2)] = inst_63010);

(statearr_63033_63971[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63019 === (8))){
var inst_62995 = (state_63018[(7)]);
var tmp63030 = inst_62995;
var inst_62995__$1 = tmp63030;
var state_63018__$1 = (function (){var statearr_63034 = state_63018;
(statearr_63034[(7)] = inst_62995__$1);

return statearr_63034;
})();
var statearr_63035_63972 = state_63018__$1;
(statearr_63035_63972[(2)] = null);

(statearr_63035_63972[(1)] = (2));


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
var cljs$core$async$state_machine__61340__auto__ = null;
var cljs$core$async$state_machine__61340__auto____0 = (function (){
var statearr_63036 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_63036[(0)] = cljs$core$async$state_machine__61340__auto__);

(statearr_63036[(1)] = (1));

return statearr_63036;
});
var cljs$core$async$state_machine__61340__auto____1 = (function (state_63018){
while(true){
var ret_value__61341__auto__ = (function (){try{while(true){
var result__61342__auto__ = switch__61339__auto__(state_63018);
if(cljs.core.keyword_identical_QMARK_(result__61342__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__61342__auto__;
}
break;
}
}catch (e63037){var ex__61343__auto__ = e63037;
var statearr_63038_63973 = state_63018;
(statearr_63038_63973[(2)] = ex__61343__auto__);


if(cljs.core.seq((state_63018[(4)]))){
var statearr_63039_63974 = state_63018;
(statearr_63039_63974[(1)] = cljs.core.first((state_63018[(4)])));

} else {
throw ex__61343__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__61341__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__63975 = state_63018;
state_63018 = G__63975;
continue;
} else {
return ret_value__61341__auto__;
}
break;
}
});
cljs$core$async$state_machine__61340__auto__ = function(state_63018){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__61340__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__61340__auto____1.call(this,state_63018);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__61340__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__61340__auto____0;
cljs$core$async$state_machine__61340__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__61340__auto____1;
return cljs$core$async$state_machine__61340__auto__;
})()
})();
var state__61431__auto__ = (function (){var statearr_63040 = f__61430__auto__();
(statearr_63040[(6)] = c__61429__auto___63962);

return statearr_63040;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__61431__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__63042 = arguments.length;
switch (G__63042) {
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
var c__61429__auto___63977 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__61430__auto__ = (function (){var switch__61339__auto__ = (function (state_63080){
var state_val_63081 = (state_63080[(1)]);
if((state_val_63081 === (7))){
var inst_63076 = (state_63080[(2)]);
var state_63080__$1 = state_63080;
var statearr_63082_63978 = state_63080__$1;
(statearr_63082_63978[(2)] = inst_63076);

(statearr_63082_63978[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63081 === (1))){
var inst_63043 = (new Array(n));
var inst_63044 = inst_63043;
var inst_63045 = (0);
var state_63080__$1 = (function (){var statearr_63083 = state_63080;
(statearr_63083[(7)] = inst_63045);

(statearr_63083[(8)] = inst_63044);

return statearr_63083;
})();
var statearr_63084_63979 = state_63080__$1;
(statearr_63084_63979[(2)] = null);

(statearr_63084_63979[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63081 === (4))){
var inst_63048 = (state_63080[(9)]);
var inst_63048__$1 = (state_63080[(2)]);
var inst_63049 = (inst_63048__$1 == null);
var inst_63050 = cljs.core.not(inst_63049);
var state_63080__$1 = (function (){var statearr_63085 = state_63080;
(statearr_63085[(9)] = inst_63048__$1);

return statearr_63085;
})();
if(inst_63050){
var statearr_63086_63980 = state_63080__$1;
(statearr_63086_63980[(1)] = (5));

} else {
var statearr_63087_63981 = state_63080__$1;
(statearr_63087_63981[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63081 === (15))){
var inst_63070 = (state_63080[(2)]);
var state_63080__$1 = state_63080;
var statearr_63088_63982 = state_63080__$1;
(statearr_63088_63982[(2)] = inst_63070);

(statearr_63088_63982[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63081 === (13))){
var state_63080__$1 = state_63080;
var statearr_63089_63983 = state_63080__$1;
(statearr_63089_63983[(2)] = null);

(statearr_63089_63983[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63081 === (6))){
var inst_63045 = (state_63080[(7)]);
var inst_63066 = (inst_63045 > (0));
var state_63080__$1 = state_63080;
if(cljs.core.truth_(inst_63066)){
var statearr_63090_63984 = state_63080__$1;
(statearr_63090_63984[(1)] = (12));

} else {
var statearr_63091_63985 = state_63080__$1;
(statearr_63091_63985[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63081 === (3))){
var inst_63078 = (state_63080[(2)]);
var state_63080__$1 = state_63080;
return cljs.core.async.impl.ioc_helpers.return_chan(state_63080__$1,inst_63078);
} else {
if((state_val_63081 === (12))){
var inst_63044 = (state_63080[(8)]);
var inst_63068 = cljs.core.vec(inst_63044);
var state_63080__$1 = state_63080;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_63080__$1,(15),out,inst_63068);
} else {
if((state_val_63081 === (2))){
var state_63080__$1 = state_63080;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_63080__$1,(4),ch);
} else {
if((state_val_63081 === (11))){
var inst_63060 = (state_63080[(2)]);
var inst_63061 = (new Array(n));
var inst_63044 = inst_63061;
var inst_63045 = (0);
var state_63080__$1 = (function (){var statearr_63092 = state_63080;
(statearr_63092[(10)] = inst_63060);

(statearr_63092[(7)] = inst_63045);

(statearr_63092[(8)] = inst_63044);

return statearr_63092;
})();
var statearr_63093_63986 = state_63080__$1;
(statearr_63093_63986[(2)] = null);

(statearr_63093_63986[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63081 === (9))){
var inst_63044 = (state_63080[(8)]);
var inst_63058 = cljs.core.vec(inst_63044);
var state_63080__$1 = state_63080;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_63080__$1,(11),out,inst_63058);
} else {
if((state_val_63081 === (5))){
var inst_63053 = (state_63080[(11)]);
var inst_63045 = (state_63080[(7)]);
var inst_63044 = (state_63080[(8)]);
var inst_63048 = (state_63080[(9)]);
var inst_63052 = (inst_63044[inst_63045] = inst_63048);
var inst_63053__$1 = (inst_63045 + (1));
var inst_63054 = (inst_63053__$1 < n);
var state_63080__$1 = (function (){var statearr_63094 = state_63080;
(statearr_63094[(11)] = inst_63053__$1);

(statearr_63094[(12)] = inst_63052);

return statearr_63094;
})();
if(cljs.core.truth_(inst_63054)){
var statearr_63095_63990 = state_63080__$1;
(statearr_63095_63990[(1)] = (8));

} else {
var statearr_63096_63991 = state_63080__$1;
(statearr_63096_63991[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63081 === (14))){
var inst_63073 = (state_63080[(2)]);
var inst_63074 = cljs.core.async.close_BANG_(out);
var state_63080__$1 = (function (){var statearr_63098 = state_63080;
(statearr_63098[(13)] = inst_63073);

return statearr_63098;
})();
var statearr_63099_63993 = state_63080__$1;
(statearr_63099_63993[(2)] = inst_63074);

(statearr_63099_63993[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63081 === (10))){
var inst_63064 = (state_63080[(2)]);
var state_63080__$1 = state_63080;
var statearr_63100_63994 = state_63080__$1;
(statearr_63100_63994[(2)] = inst_63064);

(statearr_63100_63994[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63081 === (8))){
var inst_63053 = (state_63080[(11)]);
var inst_63044 = (state_63080[(8)]);
var tmp63097 = inst_63044;
var inst_63044__$1 = tmp63097;
var inst_63045 = inst_63053;
var state_63080__$1 = (function (){var statearr_63101 = state_63080;
(statearr_63101[(7)] = inst_63045);

(statearr_63101[(8)] = inst_63044__$1);

return statearr_63101;
})();
var statearr_63103_63995 = state_63080__$1;
(statearr_63103_63995[(2)] = null);

(statearr_63103_63995[(1)] = (2));


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
var cljs$core$async$state_machine__61340__auto__ = null;
var cljs$core$async$state_machine__61340__auto____0 = (function (){
var statearr_63104 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_63104[(0)] = cljs$core$async$state_machine__61340__auto__);

(statearr_63104[(1)] = (1));

return statearr_63104;
});
var cljs$core$async$state_machine__61340__auto____1 = (function (state_63080){
while(true){
var ret_value__61341__auto__ = (function (){try{while(true){
var result__61342__auto__ = switch__61339__auto__(state_63080);
if(cljs.core.keyword_identical_QMARK_(result__61342__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__61342__auto__;
}
break;
}
}catch (e63105){var ex__61343__auto__ = e63105;
var statearr_63106_63997 = state_63080;
(statearr_63106_63997[(2)] = ex__61343__auto__);


if(cljs.core.seq((state_63080[(4)]))){
var statearr_63107_63998 = state_63080;
(statearr_63107_63998[(1)] = cljs.core.first((state_63080[(4)])));

} else {
throw ex__61343__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__61341__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__64002 = state_63080;
state_63080 = G__64002;
continue;
} else {
return ret_value__61341__auto__;
}
break;
}
});
cljs$core$async$state_machine__61340__auto__ = function(state_63080){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__61340__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__61340__auto____1.call(this,state_63080);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__61340__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__61340__auto____0;
cljs$core$async$state_machine__61340__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__61340__auto____1;
return cljs$core$async$state_machine__61340__auto__;
})()
})();
var state__61431__auto__ = (function (){var statearr_63108 = f__61430__auto__();
(statearr_63108[(6)] = c__61429__auto___63977);

return statearr_63108;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__61431__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__63110 = arguments.length;
switch (G__63110) {
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
var c__61429__auto___64005 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__61430__auto__ = (function (){var switch__61339__auto__ = (function (state_63155){
var state_val_63156 = (state_63155[(1)]);
if((state_val_63156 === (7))){
var inst_63151 = (state_63155[(2)]);
var state_63155__$1 = state_63155;
var statearr_63157_64006 = state_63155__$1;
(statearr_63157_64006[(2)] = inst_63151);

(statearr_63157_64006[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63156 === (1))){
var inst_63111 = [];
var inst_63112 = inst_63111;
var inst_63113 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_63155__$1 = (function (){var statearr_63158 = state_63155;
(statearr_63158[(7)] = inst_63112);

(statearr_63158[(8)] = inst_63113);

return statearr_63158;
})();
var statearr_63159_64008 = state_63155__$1;
(statearr_63159_64008[(2)] = null);

(statearr_63159_64008[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63156 === (4))){
var inst_63116 = (state_63155[(9)]);
var inst_63116__$1 = (state_63155[(2)]);
var inst_63117 = (inst_63116__$1 == null);
var inst_63118 = cljs.core.not(inst_63117);
var state_63155__$1 = (function (){var statearr_63160 = state_63155;
(statearr_63160[(9)] = inst_63116__$1);

return statearr_63160;
})();
if(inst_63118){
var statearr_63161_64009 = state_63155__$1;
(statearr_63161_64009[(1)] = (5));

} else {
var statearr_63162_64010 = state_63155__$1;
(statearr_63162_64010[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63156 === (15))){
var inst_63112 = (state_63155[(7)]);
var inst_63143 = cljs.core.vec(inst_63112);
var state_63155__$1 = state_63155;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_63155__$1,(18),out,inst_63143);
} else {
if((state_val_63156 === (13))){
var inst_63138 = (state_63155[(2)]);
var state_63155__$1 = state_63155;
var statearr_63164_64011 = state_63155__$1;
(statearr_63164_64011[(2)] = inst_63138);

(statearr_63164_64011[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63156 === (6))){
var inst_63112 = (state_63155[(7)]);
var inst_63140 = inst_63112.length;
var inst_63141 = (inst_63140 > (0));
var state_63155__$1 = state_63155;
if(cljs.core.truth_(inst_63141)){
var statearr_63166_64012 = state_63155__$1;
(statearr_63166_64012[(1)] = (15));

} else {
var statearr_63167_64013 = state_63155__$1;
(statearr_63167_64013[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63156 === (17))){
var inst_63148 = (state_63155[(2)]);
var inst_63149 = cljs.core.async.close_BANG_(out);
var state_63155__$1 = (function (){var statearr_63168 = state_63155;
(statearr_63168[(10)] = inst_63148);

return statearr_63168;
})();
var statearr_63169_64014 = state_63155__$1;
(statearr_63169_64014[(2)] = inst_63149);

(statearr_63169_64014[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63156 === (3))){
var inst_63153 = (state_63155[(2)]);
var state_63155__$1 = state_63155;
return cljs.core.async.impl.ioc_helpers.return_chan(state_63155__$1,inst_63153);
} else {
if((state_val_63156 === (12))){
var inst_63112 = (state_63155[(7)]);
var inst_63131 = cljs.core.vec(inst_63112);
var state_63155__$1 = state_63155;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_63155__$1,(14),out,inst_63131);
} else {
if((state_val_63156 === (2))){
var state_63155__$1 = state_63155;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_63155__$1,(4),ch);
} else {
if((state_val_63156 === (11))){
var inst_63116 = (state_63155[(9)]);
var inst_63112 = (state_63155[(7)]);
var inst_63120 = (state_63155[(11)]);
var inst_63128 = inst_63112.push(inst_63116);
var tmp63170 = inst_63112;
var inst_63112__$1 = tmp63170;
var inst_63113 = inst_63120;
var state_63155__$1 = (function (){var statearr_63171 = state_63155;
(statearr_63171[(7)] = inst_63112__$1);

(statearr_63171[(12)] = inst_63128);

(statearr_63171[(8)] = inst_63113);

return statearr_63171;
})();
var statearr_63172_64021 = state_63155__$1;
(statearr_63172_64021[(2)] = null);

(statearr_63172_64021[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63156 === (9))){
var inst_63113 = (state_63155[(8)]);
var inst_63124 = cljs.core.keyword_identical_QMARK_(inst_63113,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_63155__$1 = state_63155;
var statearr_63173_64022 = state_63155__$1;
(statearr_63173_64022[(2)] = inst_63124);

(statearr_63173_64022[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63156 === (5))){
var inst_63116 = (state_63155[(9)]);
var inst_63113 = (state_63155[(8)]);
var inst_63120 = (state_63155[(11)]);
var inst_63121 = (state_63155[(13)]);
var inst_63120__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_63116) : f.call(null,inst_63116));
var inst_63121__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_63120__$1,inst_63113);
var state_63155__$1 = (function (){var statearr_63174 = state_63155;
(statearr_63174[(11)] = inst_63120__$1);

(statearr_63174[(13)] = inst_63121__$1);

return statearr_63174;
})();
if(inst_63121__$1){
var statearr_63175_64023 = state_63155__$1;
(statearr_63175_64023[(1)] = (8));

} else {
var statearr_63176_64024 = state_63155__$1;
(statearr_63176_64024[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63156 === (14))){
var inst_63116 = (state_63155[(9)]);
var inst_63120 = (state_63155[(11)]);
var inst_63133 = (state_63155[(2)]);
var inst_63134 = [];
var inst_63135 = inst_63134.push(inst_63116);
var inst_63112 = inst_63134;
var inst_63113 = inst_63120;
var state_63155__$1 = (function (){var statearr_63177 = state_63155;
(statearr_63177[(7)] = inst_63112);

(statearr_63177[(8)] = inst_63113);

(statearr_63177[(14)] = inst_63133);

(statearr_63177[(15)] = inst_63135);

return statearr_63177;
})();
var statearr_63178_64026 = state_63155__$1;
(statearr_63178_64026[(2)] = null);

(statearr_63178_64026[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63156 === (16))){
var state_63155__$1 = state_63155;
var statearr_63179_64027 = state_63155__$1;
(statearr_63179_64027[(2)] = null);

(statearr_63179_64027[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63156 === (10))){
var inst_63126 = (state_63155[(2)]);
var state_63155__$1 = state_63155;
if(cljs.core.truth_(inst_63126)){
var statearr_63180_64028 = state_63155__$1;
(statearr_63180_64028[(1)] = (11));

} else {
var statearr_63181_64029 = state_63155__$1;
(statearr_63181_64029[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63156 === (18))){
var inst_63145 = (state_63155[(2)]);
var state_63155__$1 = state_63155;
var statearr_63182_64030 = state_63155__$1;
(statearr_63182_64030[(2)] = inst_63145);

(statearr_63182_64030[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63156 === (8))){
var inst_63121 = (state_63155[(13)]);
var state_63155__$1 = state_63155;
var statearr_63183_64032 = state_63155__$1;
(statearr_63183_64032[(2)] = inst_63121);

(statearr_63183_64032[(1)] = (10));


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
var cljs$core$async$state_machine__61340__auto__ = null;
var cljs$core$async$state_machine__61340__auto____0 = (function (){
var statearr_63184 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_63184[(0)] = cljs$core$async$state_machine__61340__auto__);

(statearr_63184[(1)] = (1));

return statearr_63184;
});
var cljs$core$async$state_machine__61340__auto____1 = (function (state_63155){
while(true){
var ret_value__61341__auto__ = (function (){try{while(true){
var result__61342__auto__ = switch__61339__auto__(state_63155);
if(cljs.core.keyword_identical_QMARK_(result__61342__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__61342__auto__;
}
break;
}
}catch (e63185){var ex__61343__auto__ = e63185;
var statearr_63186_64033 = state_63155;
(statearr_63186_64033[(2)] = ex__61343__auto__);


if(cljs.core.seq((state_63155[(4)]))){
var statearr_63188_64034 = state_63155;
(statearr_63188_64034[(1)] = cljs.core.first((state_63155[(4)])));

} else {
throw ex__61343__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__61341__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__64035 = state_63155;
state_63155 = G__64035;
continue;
} else {
return ret_value__61341__auto__;
}
break;
}
});
cljs$core$async$state_machine__61340__auto__ = function(state_63155){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__61340__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__61340__auto____1.call(this,state_63155);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__61340__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__61340__auto____0;
cljs$core$async$state_machine__61340__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__61340__auto____1;
return cljs$core$async$state_machine__61340__auto__;
})()
})();
var state__61431__auto__ = (function (){var statearr_63189 = f__61430__auto__();
(statearr_63189[(6)] = c__61429__auto___64005);

return statearr_63189;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__61431__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
