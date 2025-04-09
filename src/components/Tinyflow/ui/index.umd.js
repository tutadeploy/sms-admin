;(function (We, Je) {
  typeof exports == 'object' && typeof module < 'u'
    ? Je(exports)
    : typeof define == 'function' && define.amd
      ? define(['exports'], Je)
      : ((We = typeof globalThis < 'u' ? globalThis : We || self), Je((We.Tinyflow = {})))
})(this, function (We) {
  'use strict'
  var fw = Object.defineProperty
  var Rd = (We) => {
    throw TypeError(We)
  }
  var gw = (We, Je, ot) =>
    Je in We
      ? fw(We, Je, { enumerable: !0, configurable: !0, writable: !0, value: ot })
      : (We[Je] = ot)
  var Nt = (We, Je, ot) => gw(We, typeof Je != 'symbol' ? Je + '' : Je, ot),
    ba = (We, Je, ot) => Je.has(We) || Rd('Cannot ' + ot)
  var ut = (We, Je, ot) => (ba(We, Je, 'read from private field'), ot ? ot.call(We) : Je.get(We)),
    wr = (We, Je, ot) =>
      Je.has(We)
        ? Rd('Cannot add the same private member more than once')
        : Je instanceof WeakSet
          ? Je.add(We)
          : Je.set(We, ot),
    zo = (We, Je, ot, Ro) => (
      ba(We, Je, 'write to private field'), Ro ? Ro.call(We, ot) : Je.set(We, ot), ot
    ),
    Bd = (We, Je, ot) => (ba(We, Je, 'access private method'), ot)
  var Md, or, qr, Lo, Gi, Yd, Zn, jt
  const Je = '5'
  typeof window < 'u' &&
    ((Md = window.__svelte ?? (window.__svelte = {})).v ?? (Md.v = new Set())).add(Je)
  let ot = !1,
    Ro = !1
  function Zd() {
    ot = !0
  }
  Zd()
  const es = 1,
    ts = 2,
    Ca = 4,
    Xd = 8,
    Fd = 16,
    Wd = 1,
    Kd = 2,
    ka = 4,
    qd = 8,
    Gd = 16,
    $a = 1,
    Ud = 2,
    ns = '[',
    rs = '[!',
    os = ']',
    _r = {},
    Tt = Symbol(),
    Ea = 'http://www.w3.org/2000/svg',
    Sa = !1,
    Qt = 2,
    Pa = 4,
    Bo = 8,
    is = 16,
    Pn = 32,
    xr = 64,
    Yo = 128,
    Kt = 256,
    Zo = 512,
    yt = 1024,
    Nn = 2048,
    ir = 4096,
    Tn = 8192,
    Xo = 16384,
    jd = 32768,
    br = 65536,
    Jd = 1 << 17,
    Qd = 1 << 19,
    Na = 1 << 20,
    Xn = Symbol('$state'),
    ss = Symbol('legacy props'),
    ef = Symbol('')
  var Gr = Array.isArray,
    tf = Array.prototype.indexOf,
    as = Array.from,
    Fo = Object.keys,
    Ur = Object.defineProperty,
    Mn = Object.getOwnPropertyDescriptor,
    Ta = Object.getOwnPropertyDescriptors,
    nf = Object.prototype,
    rf = Array.prototype,
    ls = Object.getPrototypeOf
  function jr(e) {
    return typeof e == 'function'
  }
  const gt = () => {}
  function of(e) {
    return e()
  }
  function Jr(e) {
    for (var t = 0; t < e.length; t++) e[t]()
  }
  const sf = typeof requestIdleCallback > 'u' ? (e) => setTimeout(e, 1) : requestIdleCallback
  let Qr = [],
    eo = []
  function Ma() {
    var e = Qr
    ;(Qr = []), Jr(e)
  }
  function Ha() {
    var e = eo
    ;(eo = []), Jr(e)
  }
  function to(e) {
    Qr.length === 0 && queueMicrotask(Ma), Qr.push(e)
  }
  function af(e) {
    eo.length === 0 && sf(Ha), eo.push(e)
  }
  function Va() {
    Qr.length > 0 && Ma(), eo.length > 0 && Ha()
  }
  function Da(e) {
    return e === this.v
  }
  function us(e, t) {
    return e != e
      ? t == t
      : e !== t || (e !== null && typeof e == 'object') || typeof e == 'function'
  }
  function cs(e) {
    return !us(e, this.v)
  }
  function lf(e) {
    throw new Error('https://svelte.dev/e/effect_in_teardown')
  }
  function uf() {
    throw new Error('https://svelte.dev/e/effect_in_unowned_derived')
  }
  function cf(e) {
    throw new Error('https://svelte.dev/e/effect_orphan')
  }
  function df() {
    throw new Error('https://svelte.dev/e/effect_update_depth_exceeded')
  }
  function ff() {
    throw new Error('https://svelte.dev/e/hydration_failed')
  }
  function gf(e) {
    throw new Error('https://svelte.dev/e/props_invalid_value')
  }
  function hf() {
    throw new Error('https://svelte.dev/e/state_descriptors_fixed')
  }
  function vf() {
    throw new Error('https://svelte.dev/e/state_prototype_fixed')
  }
  function pf() {
    throw new Error('https://svelte.dev/e/state_unsafe_local_read')
  }
  function mf() {
    throw new Error('https://svelte.dev/e/state_unsafe_mutation')
  }
  function Mt(e, t) {
    var n = { f: 0, v: e, reactions: null, equals: Da, rv: 0, wv: 0 }
    return n
  }
  function Fn(e) {
    return Aa(Mt(e))
  }
  function no(e, t = !1) {
    var r
    const n = Mt(e)
    return (
      t || (n.equals = cs),
      ot && Ye !== null && Ye.l !== null && ((r = Ye.l).s ?? (r.s = [])).push(n),
      n
    )
  }
  function re(e, t = !1) {
    return Aa(no(e, t))
  }
  function Aa(e) {
    return Qe !== null && !en && Qe.f & Qt && (mn === null ? _f([e]) : mn.push(e)), e
  }
  function U(e, t) {
    return (
      Qe !== null && !en && ni() && Qe.f & (Qt | is) && (mn === null || !mn.includes(e)) && mf(),
      ds(e, t)
    )
  }
  function ds(e, t) {
    return (
      e.equals(t) ||
        (e.v,
        (e.v = t),
        (e.wv = Wa()),
        Oa(e, Nn),
        ni() &&
          Ke !== null &&
          Ke.f & yt &&
          !(Ke.f & (Pn | xr)) &&
          (Vn === null ? xf([e]) : Vn.push(e))),
      t
    )
  }
  function La(e, t = 1) {
    var n = h(e),
      r = t === 1 ? n++ : n--
    return U(e, n), r
  }
  function Oa(e, t) {
    var n = e.reactions
    if (n !== null)
      for (var r = ni(), o = n.length, i = 0; i < o; i++) {
        var s = n[i],
          a = s.f
        a & Nn || (!r && s === Ke) || (tn(s, t), a & (yt | Kt) && (a & Qt ? Oa(s, ir) : ei(s)))
      }
  }
  function Ne(e) {
    var t = Qt | Nn,
      n = Qe !== null && Qe.f & Qt ? Qe : null
    return (
      Ke === null || (n !== null && n.f & Kt) ? (t |= Kt) : (Ke.f |= Na),
      {
        ctx: Ye,
        deps: null,
        effects: null,
        equals: Da,
        f: t,
        fn: e,
        reactions: null,
        rv: 0,
        v: null,
        wv: 0,
        parent: n ?? Ke
      }
    )
  }
  function ve(e) {
    const t = Ne(e)
    return (t.equals = cs), t
  }
  function Ia(e) {
    var t = e.effects
    if (t !== null) {
      e.effects = null
      for (var n = 0; n < t.length; n += 1) qt(t[n])
    }
  }
  function yf(e) {
    for (var t = e.parent; t !== null; ) {
      if (!(t.f & Qt)) return t
      t = t.parent
    }
    return null
  }
  function wf(e) {
    var t,
      n = Ke
    Kn(yf(e))
    try {
      Ia(e), (t = qa(e))
    } finally {
      Kn(n)
    }
    return t
  }
  function za(e) {
    var t = wf(e),
      n = (qn || e.f & Kt) && e.deps !== null ? ir : yt
    tn(e, n), e.equals(t) || ((e.v = t), (e.wv = Wa()))
  }
  function Wo(e) {
    console.warn('https://svelte.dev/e/hydration_mismatch')
  }
  let Se = !1
  function It(e) {
    Se = e
  }
  let Ve
  function bt(e) {
    if (e === null) throw (Wo(), _r)
    return (Ve = e)
  }
  function vn() {
    return bt(pn(Ve))
  }
  function Z(e) {
    if (Se) {
      if (pn(Ve) !== null) throw (Wo(), _r)
      Ve = e
    }
  }
  function Pe(e = 1) {
    if (Se) {
      for (var t = e, n = Ve; t--; ) n = pn(n)
      Ve = n
    }
  }
  function fs() {
    for (var e = 0, t = Ve; ; ) {
      if (t.nodeType === 8) {
        var n = t.data
        if (n === os) {
          if (e === 0) return t
          e -= 1
        } else (n === ns || n === rs) && (e += 1)
      }
      var r = pn(t)
      t.remove(), (t = r)
    }
  }
  function Ht(e, t = null, n) {
    if (typeof e != 'object' || e === null || Xn in e) return e
    const r = ls(e)
    if (r !== nf && r !== rf) return e
    var o = new Map(),
      i = Gr(e),
      s = Mt(0)
    i && o.set('length', Mt(e.length))
    var a
    return new Proxy(e, {
      defineProperty(l, u, c) {
        ;(!('value' in c) || c.configurable === !1 || c.enumerable === !1 || c.writable === !1) &&
          hf()
        var f = o.get(u)
        return f === void 0 ? ((f = Mt(c.value)), o.set(u, f)) : U(f, Ht(c.value, a)), !0
      },
      deleteProperty(l, u) {
        var c = o.get(u)
        if (c === void 0) u in l && o.set(u, Mt(Tt))
        else {
          if (i && typeof u == 'string') {
            var f = o.get('length'),
              d = Number(u)
            Number.isInteger(d) && d < f.v && U(f, d)
          }
          U(c, Tt), Ra(s)
        }
        return !0
      },
      get(l, u, c) {
        var p
        if (u === Xn) return e
        var f = o.get(u),
          d = u in l
        if (
          (f === void 0 &&
            (!d || ((p = Mn(l, u)) != null && p.writable)) &&
            ((f = Mt(Ht(d ? l[u] : Tt, a))), o.set(u, f)),
          f !== void 0)
        ) {
          var g = h(f)
          return g === Tt ? void 0 : g
        }
        return Reflect.get(l, u, c)
      },
      getOwnPropertyDescriptor(l, u) {
        var c = Reflect.getOwnPropertyDescriptor(l, u)
        if (c && 'value' in c) {
          var f = o.get(u)
          f && (c.value = h(f))
        } else if (c === void 0) {
          var d = o.get(u),
            g = d == null ? void 0 : d.v
          if (d !== void 0 && g !== Tt)
            return { enumerable: !0, configurable: !0, value: g, writable: !0 }
        }
        return c
      },
      has(l, u) {
        var g
        if (u === Xn) return !0
        var c = o.get(u),
          f = (c !== void 0 && c.v !== Tt) || Reflect.has(l, u)
        if (c !== void 0 || (Ke !== null && (!f || ((g = Mn(l, u)) != null && g.writable)))) {
          c === void 0 && ((c = Mt(f ? Ht(l[u], a) : Tt)), o.set(u, c))
          var d = h(c)
          if (d === Tt) return !1
        }
        return f
      },
      set(l, u, c, f) {
        var _
        var d = o.get(u),
          g = u in l
        if (i && u === 'length')
          for (var p = c; p < d.v; p += 1) {
            var x = o.get(p + '')
            x !== void 0 ? U(x, Tt) : p in l && ((x = Mt(Tt)), o.set(p + '', x))
          }
        d === void 0
          ? (!g || ((_ = Mn(l, u)) != null && _.writable)) &&
            ((d = Mt(void 0)), U(d, Ht(c, a)), o.set(u, d))
          : ((g = d.v !== Tt), U(d, Ht(c, a)))
        var C = Reflect.getOwnPropertyDescriptor(l, u)
        if ((C != null && C.set && C.set.call(f, c), !g)) {
          if (i && typeof u == 'string') {
            var $ = o.get('length'),
              m = Number(u)
            Number.isInteger(m) && m >= $.v && U($, m + 1)
          }
          Ra(s)
        }
        return !0
      },
      ownKeys(l) {
        h(s)
        var u = Reflect.ownKeys(l).filter((d) => {
          var g = o.get(d)
          return g === void 0 || g.v !== Tt
        })
        for (var [c, f] of o) f.v !== Tt && !(c in l) && u.push(c)
        return u
      },
      setPrototypeOf() {
        vf()
      }
    })
  }
  function Ra(e, t = 1) {
    U(e, e.v + t)
  }
  var Vt, Ba, Ya, Za
  function gs() {
    if (Vt === void 0) {
      ;(Vt = window), (Ba = /Firefox/.test(navigator.userAgent))
      var e = Element.prototype,
        t = Node.prototype
      ;(Ya = Mn(t, 'firstChild').get),
        (Za = Mn(t, 'nextSibling').get),
        (e.__click = void 0),
        (e.__className = void 0),
        (e.__attributes = null),
        (e.__styles = null),
        (e.__e = void 0),
        (Text.prototype.__t = void 0)
    }
  }
  function Hn(e = '') {
    return document.createTextNode(e)
  }
  function Ct(e) {
    return Ya.call(e)
  }
  function pn(e) {
    return Za.call(e)
  }
  function X(e, t) {
    if (!Se) return Ct(e)
    var n = Ct(Ve)
    if (n === null) n = Ve.appendChild(Hn())
    else if (t && n.nodeType !== 3) {
      var r = Hn()
      return n == null || n.before(r), bt(r), r
    }
    return bt(n), n
  }
  function xe(e, t) {
    if (!Se) {
      var n = Ct(e)
      return n instanceof Comment && n.data === '' ? pn(n) : n
    }
    return Ve
  }
  function z(e, t = 1, n = !1) {
    let r = Se ? Ve : e
    for (var o; t--; ) (o = r), (r = pn(r))
    if (!Se) return r
    var i = r == null ? void 0 : r.nodeType
    if (n && i !== 3) {
      var s = Hn()
      return r === null ? o == null || o.after(s) : r.before(s), bt(s), s
    }
    return bt(r), r
  }
  function hs(e) {
    e.textContent = ''
  }
  let Ko = !1,
    qo = !1,
    Go = null,
    sr = !1,
    vs = !1
  function Xa(e) {
    vs = e
  }
  let ro = [],
    hw = [],
    Qe = null,
    en = !1
  function Wn(e) {
    Qe = e
  }
  let Ke = null
  function Kn(e) {
    Ke = e
  }
  let mn = null
  function _f(e) {
    mn = e
  }
  let kt = null,
    zt = 0,
    Vn = null
  function xf(e) {
    Vn = e
  }
  let Fa = 1,
    Uo = 0,
    qn = !1
  function Wa() {
    return ++Fa
  }
  function Cr(e) {
    var f
    var t = e.f
    if (t & Nn) return !0
    if (t & ir) {
      var n = e.deps,
        r = (t & Kt) !== 0
      if (n !== null) {
        var o,
          i,
          s = (t & Zo) !== 0,
          a = r && Ke !== null && !qn,
          l = n.length
        if (s || a) {
          var u = e,
            c = u.parent
          for (o = 0; o < l; o++)
            (i = n[o]),
              (s || !((f = i == null ? void 0 : i.reactions) != null && f.includes(u))) &&
                (i.reactions ?? (i.reactions = [])).push(u)
          s && (u.f ^= Zo), a && c !== null && !(c.f & Kt) && (u.f ^= Kt)
        }
        for (o = 0; o < l; o++) if (((i = n[o]), Cr(i) && za(i), i.wv > e.wv)) return !0
      }
      ;(!r || (Ke !== null && !qn)) && tn(e, yt)
    }
    return !1
  }
  function bf(e, t) {
    for (var n = t; n !== null; ) {
      if (n.f & Yo)
        try {
          n.fn(e)
          return
        } catch {
          n.f ^= Yo
        }
      n = n.parent
    }
    throw ((Ko = !1), e)
  }
  function Cf(e) {
    return (e.f & Xo) === 0 && (e.parent === null || (e.parent.f & Yo) === 0)
  }
  function jo(e, t, n, r) {
    if (Ko) {
      if ((n === null && (Ko = !1), Cf(t))) throw e
      return
    }
    n !== null && (Ko = !0)
    {
      bf(e, t)
      return
    }
  }
  function Ka(e, t, n = !0) {
    var r = e.reactions
    if (r !== null)
      for (var o = 0; o < r.length; o++) {
        var i = r[o]
        i.f & Qt ? Ka(i, t, !1) : t === i && (n ? tn(i, Nn) : i.f & yt && tn(i, ir), ei(i))
      }
  }
  function qa(e) {
    var g
    var t = kt,
      n = zt,
      r = Vn,
      o = Qe,
      i = qn,
      s = mn,
      a = Ye,
      l = en,
      u = e.f
    ;(kt = null),
      (zt = 0),
      (Vn = null),
      (qn = (u & Kt) !== 0 && (en || !sr || Qe === null)),
      (Qe = u & (Pn | xr) ? null : e),
      (mn = null),
      rl(e.ctx),
      (en = !1),
      Uo++
    try {
      var c = (0, e.fn)(),
        f = e.deps
      if (kt !== null) {
        var d
        if ((Jo(e, zt), f !== null && zt > 0))
          for (f.length = zt + kt.length, d = 0; d < kt.length; d++) f[zt + d] = kt[d]
        else e.deps = f = kt
        if (!qn)
          for (d = zt; d < f.length; d++) ((g = f[d]).reactions ?? (g.reactions = [])).push(e)
      } else f !== null && zt < f.length && (Jo(e, zt), (f.length = zt))
      if (ni() && Vn !== null && !en && f !== null && !(e.f & (Qt | ir | Nn)))
        for (d = 0; d < Vn.length; d++) Ka(Vn[d], e)
      return o !== null && Uo++, c
    } finally {
      ;(kt = t), (zt = n), (Vn = r), (Qe = o), (qn = i), (mn = s), rl(a), (en = l)
    }
  }
  function kf(e, t) {
    let n = t.reactions
    if (n !== null) {
      var r = tf.call(n, e)
      if (r !== -1) {
        var o = n.length - 1
        o === 0 ? (n = t.reactions = null) : ((n[r] = n[o]), n.pop())
      }
    }
    n === null &&
      t.f & Qt &&
      (kt === null || !kt.includes(t)) &&
      (tn(t, ir), t.f & (Kt | Zo) || (t.f ^= Zo), Ia(t), Jo(t, 0))
  }
  function Jo(e, t) {
    var n = e.deps
    if (n !== null) for (var r = t; r < n.length; r++) kf(e, n[r])
  }
  function Qo(e) {
    var t = e.f
    if (!(t & Xo)) {
      tn(e, yt)
      var n = Ke,
        r = Ye,
        o = sr
      ;(Ke = e), (sr = !0)
      try {
        t & is ? Vf(e) : Qa(e), Ja(e)
        var i = qa(e)
        ;(e.teardown = typeof i == 'function' ? i : null), (e.wv = Fa)
        var s = e.deps,
          a
        Sa && Ro && e.f & Nn
      } catch (l) {
        jo(l, e, n, r || e.ctx)
      } finally {
        ;(sr = o), (Ke = n)
      }
    }
  }
  function $f() {
    try {
      df()
    } catch (e) {
      if (Go !== null) jo(e, Go, null)
      else throw e
    }
  }
  function Ga() {
    var e = sr
    try {
      var t = 0
      for (sr = !0; ro.length > 0; ) {
        t++ > 1e3 && $f()
        var n = ro,
          r = n.length
        ro = []
        for (var o = 0; o < r; o++) {
          var i = n[o]
          i.f & yt || (i.f ^= yt)
          var s = Sf(i)
          Ef(s)
        }
      }
    } finally {
      ;(qo = !1), (sr = e), (Go = null)
    }
  }
  function Ef(e) {
    var t = e.length
    if (t !== 0)
      for (var n = 0; n < t; n++) {
        var r = e[n]
        if (!(r.f & (Xo | Tn)))
          try {
            Cr(r) &&
              (Qo(r),
              r.deps === null &&
                r.first === null &&
                r.nodes_start === null &&
                (r.teardown === null ? el(r) : (r.fn = null)))
          } catch (o) {
            jo(o, r, null, r.ctx)
          }
      }
  }
  function ei(e) {
    qo || ((qo = !0), queueMicrotask(Ga))
    for (var t = (Go = e); t.parent !== null; ) {
      t = t.parent
      var n = t.f
      if (n & (xr | Pn)) {
        if (!(n & yt)) return
        t.f ^= yt
      }
    }
    ro.push(t)
  }
  function Sf(e) {
    for (var t = [], n = e.first; n !== null; ) {
      var r = n.f,
        o = (r & Pn) !== 0,
        i = o && (r & yt) !== 0
      if (!i && !(r & Tn)) {
        if (r & Pa) t.push(n)
        else if (o) n.f ^= yt
        else {
          var s = Qe
          try {
            ;(Qe = n), Cr(n) && Qo(n)
          } catch (u) {
            jo(u, n, null, n.ctx)
          } finally {
            Qe = s
          }
        }
        var a = n.first
        if (a !== null) {
          n = a
          continue
        }
      }
      var l = n.parent
      for (n = n.next; n === null && l !== null; ) (n = l.next), (l = l.parent)
    }
    return t
  }
  function y(e) {
    var t
    for (Va(); ro.length > 0; ) (qo = !0), Ga(), Va()
    return t
  }
  function h(e) {
    var t = e.f,
      n = (t & Qt) !== 0
    if (Qe !== null && !en) {
      mn !== null && mn.includes(e) && pf()
      var r = Qe.deps
      e.rv < Uo &&
        ((e.rv = Uo),
        kt === null && r !== null && r[zt] === e
          ? zt++
          : kt === null
            ? (kt = [e])
            : (!qn || !kt.includes(e)) && kt.push(e))
    } else if (n && e.deps === null && e.effects === null) {
      var o = e,
        i = o.parent
      i !== null && !(i.f & Kt) && (o.f ^= Kt)
    }
    return n && ((o = e), Cr(o) && za(o)), e.v
  }
  function yn(e) {
    var t = en
    try {
      return (en = !0), e()
    } finally {
      en = t
    }
  }
  const Pf = -7169
  function tn(e, t) {
    e.f = (e.f & Pf) | t
  }
  function j(e) {
    if (!(typeof e != 'object' || !e || e instanceof EventTarget)) {
      if (Xn in e) ps(e)
      else if (!Array.isArray(e))
        for (let t in e) {
          const n = e[t]
          typeof n == 'object' && n && Xn in n && ps(n)
        }
    }
  }
  function ps(e, t = new Set()) {
    if (typeof e == 'object' && e !== null && !(e instanceof EventTarget) && !t.has(e)) {
      t.add(e), e instanceof Date && e.getTime()
      for (let r in e)
        try {
          ps(e[r], t)
        } catch {}
      const n = ls(e)
      if (
        n !== Object.prototype &&
        n !== Array.prototype &&
        n !== Map.prototype &&
        n !== Set.prototype &&
        n !== Date.prototype
      ) {
        const r = Ta(n)
        for (let o in r) {
          const i = r[o].get
          if (i)
            try {
              i.call(e)
            } catch {}
        }
      }
    }
  }
  function Ua(e) {
    Ke === null && Qe === null && cf(), Qe !== null && Qe.f & Kt && Ke === null && uf(), vs && lf()
  }
  function Nf(e, t) {
    var n = t.last
    n === null ? (t.last = t.first = e) : ((n.next = e), (e.prev = n), (t.last = e))
  }
  function ar(e, t, n, r = !0) {
    var o = (e & xr) !== 0,
      i = Ke,
      s = {
        ctx: Ye,
        deps: null,
        nodes_start: null,
        nodes_end: null,
        f: e | Nn,
        first: null,
        fn: t,
        last: null,
        next: null,
        parent: o ? null : i,
        prev: null,
        teardown: null,
        transitions: null,
        wv: 0
      }
    if (n)
      try {
        Qo(s), (s.f |= jd)
      } catch (u) {
        throw (qt(s), u)
      }
    else t !== null && ei(s)
    var a =
      n &&
      s.deps === null &&
      s.first === null &&
      s.nodes_start === null &&
      s.teardown === null &&
      (s.f & (Na | Yo)) === 0
    if (!a && !o && r && (i !== null && Nf(s, i), Qe !== null && Qe.f & Qt)) {
      var l = Qe
      ;(l.effects ?? (l.effects = [])).push(s)
    }
    return s
  }
  function ja(e) {
    const t = ar(Bo, null, !1)
    return tn(t, yt), (t.teardown = e), t
  }
  function kr(e) {
    Ua()
    var t = Ke !== null && (Ke.f & Pn) !== 0 && Ye !== null && !Ye.m
    if (t) {
      var n = Ye
      ;(n.e ?? (n.e = [])).push({ fn: e, effect: Ke, reaction: Qe })
    } else {
      var r = Rt(e)
      return r
    }
  }
  function Tf(e) {
    return Ua(), $r(e)
  }
  function Mf(e) {
    const t = ar(xr, e, !0)
    return () => {
      qt(t)
    }
  }
  function Hf(e) {
    const t = ar(xr, e, !0)
    return (n = {}) =>
      new Promise((r) => {
        n.outro
          ? Er(t, () => {
              qt(t), r(void 0)
            })
          : (qt(t), r(void 0))
      })
  }
  function Rt(e) {
    return ar(Pa, e, !1)
  }
  function ge(e, t) {
    var n = Ye,
      r = { effect: null, ran: !1 }
    n.l.r1.push(r),
      (r.effect = $r(() => {
        e(), !r.ran && ((r.ran = !0), U(n.l.r2, !0), yn(t))
      }))
  }
  function vt() {
    var e = Ye
    $r(() => {
      if (h(e.l.r2)) {
        for (var t of e.l.r1) {
          var n = t.effect
          n.f & yt && tn(n, ir), Cr(n) && Qo(n), (t.ran = !1)
        }
        e.l.r2.v = !1
      }
    })
  }
  function $r(e) {
    return ar(Bo, e, !0)
  }
  function Ee(e, t = [], n = Ne) {
    const r = t.map(n)
    return lr(() => e(...r.map(h)))
  }
  function lr(e, t = 0) {
    return ar(Bo | is | t, e, !0)
  }
  function Dn(e, t = !0) {
    return ar(Bo | Pn, e, !0, t)
  }
  function Ja(e) {
    var t = e.teardown
    if (t !== null) {
      const n = vs,
        r = Qe
      Xa(!0), Wn(null)
      try {
        t.call(null)
      } finally {
        Xa(n), Wn(r)
      }
    }
  }
  function Qa(e, t = !1) {
    var n = e.first
    for (e.first = e.last = null; n !== null; ) {
      var r = n.next
      qt(n, t), (n = r)
    }
  }
  function Vf(e) {
    for (var t = e.first; t !== null; ) {
      var n = t.next
      t.f & Pn || qt(t), (t = n)
    }
  }
  function qt(e, t = !0) {
    var n = !1
    if ((t || e.f & Qd) && e.nodes_start !== null) {
      for (var r = e.nodes_start, o = e.nodes_end; r !== null; ) {
        var i = r === o ? null : pn(r)
        r.remove(), (r = i)
      }
      n = !0
    }
    Qa(e, t && !n), Jo(e, 0), tn(e, Xo)
    var s = e.transitions
    if (s !== null) for (const l of s) l.stop()
    Ja(e)
    var a = e.parent
    a !== null && a.first !== null && el(e),
      (e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes_start = e.nodes_end = null)
  }
  function el(e) {
    var t = e.parent,
      n = e.prev,
      r = e.next
    n !== null && (n.next = r),
      r !== null && (r.prev = n),
      t !== null && (t.first === e && (t.first = r), t.last === e && (t.last = n))
  }
  function Er(e, t) {
    var n = []
    ms(e, n, !0),
      tl(n, () => {
        qt(e), t && t()
      })
  }
  function tl(e, t) {
    var n = e.length
    if (n > 0) {
      var r = () => --n || t()
      for (var o of e) o.out(r)
    } else t()
  }
  function ms(e, t, n) {
    if (!(e.f & Tn)) {
      if (((e.f ^= Tn), e.transitions !== null))
        for (const s of e.transitions) (s.is_global || n) && t.push(s)
      for (var r = e.first; r !== null; ) {
        var o = r.next,
          i = (r.f & br) !== 0 || (r.f & Pn) !== 0
        ms(r, t, i ? n : !1), (r = o)
      }
    }
  }
  function oo(e) {
    nl(e, !0)
  }
  function nl(e, t) {
    if (e.f & Tn) {
      ;(e.f ^= Tn), e.f & yt || (e.f ^= yt), Cr(e) && (tn(e, Nn), ei(e))
      for (var n = e.first; n !== null; ) {
        var r = n.next,
          o = (n.f & br) !== 0 || (n.f & Pn) !== 0
        nl(n, o ? t : !1), (n = r)
      }
      if (e.transitions !== null) for (const i of e.transitions) (i.is_global || t) && i.in()
    }
  }
  function ti(e) {
    throw new Error('https://svelte.dev/e/lifecycle_outside_component')
  }
  let Ye = null
  function rl(e) {
    Ye = e
  }
  function ur(e) {
    return ys().get(e)
  }
  function Sr(e, t) {
    return ys().set(e, t), t
  }
  function Df(e) {
    return ys().has(e)
  }
  function ue(e, t = !1, n) {
    ;(Ye = { p: Ye, c: null, e: null, m: !1, s: e, x: null, l: null }),
      ot && !t && (Ye.l = { s: null, u: null, r1: [], r2: Mt(!1) })
  }
  function ce(e) {
    const t = Ye
    if (t !== null) {
      e !== void 0 && (t.x = e)
      const s = t.e
      if (s !== null) {
        var n = Ke,
          r = Qe
        t.e = null
        try {
          for (var o = 0; o < s.length; o++) {
            var i = s[o]
            Kn(i.effect), Wn(i.reaction), Rt(i.fn)
          }
        } finally {
          Kn(n), Wn(r)
        }
      }
      ;(Ye = t.p), (t.m = !0)
    }
    return e || {}
  }
  function ni() {
    return !ot || (Ye !== null && Ye.l === null)
  }
  function ys(e) {
    return Ye === null && ti(), Ye.c ?? (Ye.c = new Map(Af(Ye) || void 0))
  }
  function Af(e) {
    let t = e.p
    for (; t !== null; ) {
      const n = t.c
      if (n !== null) return n
      t = t.p
    }
    return null
  }
  function Lf(e) {
    return e.endsWith('capture') && e !== 'gotpointercapture' && e !== 'lostpointercapture'
  }
  const Of = [
    'beforeinput',
    'click',
    'change',
    'dblclick',
    'contextmenu',
    'focusin',
    'focusout',
    'input',
    'keydown',
    'keyup',
    'mousedown',
    'mousemove',
    'mouseout',
    'mouseover',
    'mouseup',
    'pointerdown',
    'pointermove',
    'pointerout',
    'pointerover',
    'pointerup',
    'touchend',
    'touchmove',
    'touchstart'
  ]
  function If(e) {
    return Of.includes(e)
  }
  const zf = {
    formnovalidate: 'formNoValidate',
    ismap: 'isMap',
    nomodule: 'noModule',
    playsinline: 'playsInline',
    readonly: 'readOnly',
    defaultvalue: 'defaultValue',
    defaultchecked: 'defaultChecked',
    srcobject: 'srcObject',
    novalidate: 'noValidate',
    allowfullscreen: 'allowFullscreen',
    disablepictureinpicture: 'disablePictureInPicture',
    disableremoteplayback: 'disableRemotePlayback'
  }
  function Rf(e) {
    return (e = e.toLowerCase()), zf[e] ?? e
  }
  const Bf = ['touchstart', 'touchmove']
  function Yf(e) {
    return Bf.includes(e)
  }
  const Zf = ['textarea', 'script', 'style', 'title']
  function Xf(e) {
    return Zf.includes(e)
  }
  function Ff(e, t) {
    if (t) {
      const n = document.body
      ;(e.autofocus = !0),
        to(() => {
          document.activeElement === n && e.focus()
        })
    }
  }
  function Wf(e) {
    Se && Ct(e) !== null && hs(e)
  }
  let ol = !1
  function Kf() {
    ol ||
      ((ol = !0),
      document.addEventListener(
        'reset',
        (e) => {
          Promise.resolve().then(() => {
            var t
            if (!e.defaultPrevented)
              for (const n of e.target.elements) (t = n.__on_r) == null || t.call(n)
          })
        },
        { capture: !0 }
      ))
  }
  function qf(e) {
    var t = Qe,
      n = Ke
    Wn(null), Kn(null)
    try {
      return e()
    } finally {
      Wn(t), Kn(n)
    }
  }
  const il = new Set(),
    ws = new Set()
  function sl(e, t, n, r = {}) {
    function o(i) {
      if ((r.capture || io.call(t, i), !i.cancelBubble))
        return qf(() => (n == null ? void 0 : n.call(this, i)))
    }
    return (
      e.startsWith('pointer') || e.startsWith('touch') || e === 'wheel'
        ? to(() => {
            t.addEventListener(e, o, r)
          })
        : t.addEventListener(e, o, r),
      o
    )
  }
  function Ze(e, t, n, r, o) {
    var i = { capture: r, passive: o },
      s = sl(e, t, n, i)
    ;(t === document.body || t === window || t === document) &&
      ja(() => {
        t.removeEventListener(e, s, i)
      })
  }
  function ri(e) {
    for (var t = 0; t < e.length; t++) il.add(e[t])
    for (var n of ws) n(e)
  }
  function io(e) {
    var m
    var t = this,
      n = t.ownerDocument,
      r = e.type,
      o = ((m = e.composedPath) == null ? void 0 : m.call(e)) || [],
      i = o[0] || e.target,
      s = 0,
      a = e.__root
    if (a) {
      var l = o.indexOf(a)
      if (l !== -1 && (t === document || t === window)) {
        e.__root = t
        return
      }
      var u = o.indexOf(t)
      if (u === -1) return
      l <= u && (s = l)
    }
    if (((i = o[s] || e.target), i !== t)) {
      Ur(e, 'currentTarget', {
        configurable: !0,
        get() {
          return i || n
        }
      })
      var c = Qe,
        f = Ke
      Wn(null), Kn(null)
      try {
        for (var d, g = []; i !== null; ) {
          var p = i.assignedSlot || i.parentNode || i.host || null
          try {
            var x = i['__' + r]
            if (x !== void 0 && (!i.disabled || e.target === i))
              if (Gr(x)) {
                var [C, ...$] = x
                C.apply(i, [e, ...$])
              } else x.call(i, e)
          } catch (_) {
            d ? g.push(_) : (d = _)
          }
          if (e.cancelBubble || p === t || p === null) break
          i = p
        }
        if (d) {
          for (let _ of g)
            queueMicrotask(() => {
              throw _
            })
          throw d
        }
      } finally {
        ;(e.__root = t), delete e.currentTarget, Wn(c), Kn(f)
      }
    }
  }
  function _s(e) {
    var t = document.createElement('template')
    return (t.innerHTML = e), t.content
  }
  function Dt(e, t) {
    var n = Ke
    n.nodes_start === null && ((n.nodes_start = e), (n.nodes_end = t))
  }
  function ne(e, t) {
    var n = (t & $a) !== 0,
      r = (t & Ud) !== 0,
      o,
      i = !e.startsWith('<!>')
    return () => {
      if (Se) return Dt(Ve, null), Ve
      o === void 0 && ((o = _s(i ? e : '<!>' + e)), n || (o = Ct(o)))
      var s = r || Ba ? document.importNode(o, !0) : o.cloneNode(!0)
      if (n) {
        var a = Ct(s),
          l = s.lastChild
        Dt(a, l)
      } else Dt(s, s)
      return s
    }
  }
  function _e(e, t, n = 'svg') {
    var r = !e.startsWith('<!>'),
      o = (t & $a) !== 0,
      i = `<${n}>${r ? e : '<!>' + e}</${n}>`,
      s
    return () => {
      if (Se) return Dt(Ve, null), Ve
      if (!s) {
        var a = _s(i),
          l = Ct(a)
        if (o) for (s = document.createDocumentFragment(); Ct(l); ) s.appendChild(Ct(l))
        else s = Ct(l)
      }
      var u = s.cloneNode(!0)
      if (o) {
        var c = Ct(u),
          f = u.lastChild
        Dt(c, f)
      } else Dt(u, u)
      return u
    }
  }
  function Ae(e = '') {
    if (!Se) {
      var t = Hn(e + '')
      return Dt(t, t), t
    }
    var n = Ve
    return n.nodeType !== 3 && (n.before((n = Hn())), bt(n)), Dt(n, n), n
  }
  function tt() {
    if (Se) return Dt(Ve, null), Ve
    var e = document.createDocumentFragment(),
      t = document.createComment(''),
      n = Hn()
    return e.append(t, n), Dt(t, n), e
  }
  function L(e, t) {
    if (Se) {
      ;(Ke.nodes_end = Ve), vn()
      return
    }
    e !== null && e.before(t)
  }
  function Bt(e, t) {
    var n = t == null ? '' : typeof t == 'object' ? t + '' : t
    n !== (e.__t ?? (e.__t = e.nodeValue)) && ((e.__t = n), (e.nodeValue = n + ''))
  }
  function al(e, t) {
    return ll(e, t)
  }
  function Gf(e, t) {
    gs(), (t.intro = t.intro ?? !1)
    const n = t.target,
      r = Se,
      o = Ve
    try {
      for (var i = Ct(n); i && (i.nodeType !== 8 || i.data !== ns); ) i = pn(i)
      if (!i) throw _r
      It(!0), bt(i), vn()
      const s = ll(e, { ...t, anchor: i })
      if (Ve === null || Ve.nodeType !== 8 || Ve.data !== os) throw (Wo(), _r)
      return It(!1), s
    } catch (s) {
      if (s === _r) return t.recover === !1 && ff(), gs(), hs(n), It(!1), al(e, t)
      throw s
    } finally {
      It(r), bt(o)
    }
  }
  const Pr = new Map()
  function ll(e, { target: t, anchor: n, props: r = {}, events: o, context: i, intro: s = !0 }) {
    gs()
    var a = new Set(),
      l = (f) => {
        for (var d = 0; d < f.length; d++) {
          var g = f[d]
          if (!a.has(g)) {
            a.add(g)
            var p = Yf(g)
            t.addEventListener(g, io, { passive: p })
            var x = Pr.get(g)
            x === void 0
              ? (document.addEventListener(g, io, { passive: p }), Pr.set(g, 1))
              : Pr.set(g, x + 1)
          }
        }
      }
    l(as(il)), ws.add(l)
    var u = void 0,
      c = Hf(() => {
        var f = n ?? t.appendChild(Hn())
        return (
          Dn(() => {
            if (i) {
              ue({})
              var d = Ye
              d.c = i
            }
            o && (r.$$events = o),
              Se && Dt(f, null),
              (u = e(f, r) || {}),
              Se && (Ke.nodes_end = Ve),
              i && ce()
          }),
          () => {
            var p
            for (var d of a) {
              t.removeEventListener(d, io)
              var g = Pr.get(d)
              --g === 0 ? (document.removeEventListener(d, io), Pr.delete(d)) : Pr.set(d, g)
            }
            ws.delete(l), f !== n && ((p = f.parentNode) == null || p.removeChild(f))
          }
        )
      })
    return xs.set(u, c), u
  }
  let xs = new WeakMap()
  function Uf(e, t) {
    const n = xs.get(e)
    return n ? (xs.delete(e), n(t)) : Promise.resolve()
  }
  function ke(e, t, [n, r] = [0, 0]) {
    Se && n === 0 && vn()
    var o = e,
      i = null,
      s = null,
      a = Tt,
      l = n > 0 ? br : 0,
      u = !1
    const c = (d, g = !0) => {
        ;(u = !0), f(g, d)
      },
      f = (d, g) => {
        if (a === (a = d)) return
        let p = !1
        if (Se && r !== -1) {
          if (n === 0) {
            const C = o.data
            C === ns
              ? (r = 0)
              : C === rs
                ? (r = 1 / 0)
                : ((r = parseInt(C.substring(1))), r !== r && (r = a ? 1 / 0 : -1))
          }
          const x = r > n
          !!a === x && ((o = fs()), bt(o), It(!1), (p = !0), (r = -1))
        }
        a
          ? (i ? oo(i) : g && (i = Dn(() => g(o))),
            s &&
              Er(s, () => {
                s = null
              }))
          : (s ? oo(s) : g && (s = Dn(() => g(o, [n + 1, r]))),
            i &&
              Er(i, () => {
                i = null
              })),
          p && It(!0)
      }
    lr(() => {
      ;(u = !1), t(c), u || f(null, null)
    }, l),
      Se && (o = Ve)
  }
  function oi(e, t) {
    return t
  }
  function jf(e, t, n, r) {
    for (var o = [], i = t.length, s = 0; s < i; s++) ms(t[s].e, o, !0)
    var a = i > 0 && o.length === 0 && n !== null
    if (a) {
      var l = n.parentNode
      hs(l), l.append(n), r.clear(), Gn(e, t[0].prev, t[i - 1].next)
    }
    tl(o, () => {
      for (var u = 0; u < i; u++) {
        var c = t[u]
        a || (r.delete(c.k), Gn(e, c.prev, c.next)), qt(c.e, !a)
      }
    })
  }
  function Yt(e, t, n, r, o, i = null) {
    var s = e,
      a = { flags: t, items: new Map(), first: null },
      l = (t & Ca) !== 0
    if (l) {
      var u = e
      s = Se ? bt(Ct(u)) : u.appendChild(Hn())
    }
    Se && vn()
    var c = null,
      f = !1,
      d = ve(() => {
        var g = n()
        return Gr(g) ? g : g == null ? [] : as(g)
      })
    lr(() => {
      var g = h(d),
        p = g.length
      if (f && p === 0) return
      f = p === 0
      let x = !1
      if (Se) {
        var C = s.data === rs
        C !== (p === 0) && ((s = fs()), bt(s), It(!1), (x = !0))
      }
      if (Se) {
        for (var $ = null, m, _ = 0; _ < p; _++) {
          if (Ve.nodeType === 8 && Ve.data === os) {
            ;(s = Ve), (x = !0), It(!1)
            break
          }
          var v = g[_],
            b = r(v, _)
          ;(m = ul(Ve, a, $, null, v, b, _, o, t, n)), a.items.set(b, m), ($ = m)
        }
        p > 0 && bt(fs())
      }
      Se || Jf(g, a, s, o, t, r, n),
        i !== null &&
          (p === 0
            ? c
              ? oo(c)
              : (c = Dn(() => i(s)))
            : c !== null &&
              Er(c, () => {
                c = null
              })),
        x && It(!0),
        h(d)
    }),
      Se && (s = Ve)
  }
  function Jf(e, t, n, r, o, i, s) {
    var S, M, k, P
    var a = (o & Xd) !== 0,
      l = (o & (es | ts)) !== 0,
      u = e.length,
      c = t.items,
      f = t.first,
      d = f,
      g,
      p = null,
      x,
      C = [],
      $ = [],
      m,
      _,
      v,
      b
    if (a)
      for (b = 0; b < u; b += 1)
        (m = e[b]),
          (_ = i(m, b)),
          (v = c.get(_)),
          v !== void 0 && ((S = v.a) == null || S.measure(), (x ?? (x = new Set())).add(v))
    for (b = 0; b < u; b += 1) {
      if (((m = e[b]), (_ = i(m, b)), (v = c.get(_)), v === void 0)) {
        var N = d ? d.e.nodes_start : n
        ;(p = ul(N, t, p, p === null ? t.first : p.next, m, _, b, r, o, s)),
          c.set(_, p),
          (C = []),
          ($ = []),
          (d = p.next)
        continue
      }
      if (
        (l && Qf(v, m, b, o),
        v.e.f & Tn &&
          (oo(v.e), a && ((M = v.a) == null || M.unfix(), (x ?? (x = new Set())).delete(v))),
        v !== d)
      ) {
        if (g !== void 0 && g.has(v)) {
          if (C.length < $.length) {
            var E = $[0],
              T
            p = E.prev
            var D = C[0],
              V = C[C.length - 1]
            for (T = 0; T < C.length; T += 1) cl(C[T], E, n)
            for (T = 0; T < $.length; T += 1) g.delete($[T])
            Gn(t, D.prev, V.next),
              Gn(t, p, D),
              Gn(t, V, E),
              (d = E),
              (p = V),
              (b -= 1),
              (C = []),
              ($ = [])
          } else
            g.delete(v),
              cl(v, d, n),
              Gn(t, v.prev, v.next),
              Gn(t, v, p === null ? t.first : p.next),
              Gn(t, p, v),
              (p = v)
          continue
        }
        for (C = [], $ = []; d !== null && d.k !== _; )
          d.e.f & Tn || (g ?? (g = new Set())).add(d), $.push(d), (d = d.next)
        if (d === null) continue
        v = d
      }
      C.push(v), (p = v), (d = v.next)
    }
    if (d !== null || g !== void 0) {
      for (var A = g === void 0 ? [] : as(g); d !== null; ) d.e.f & Tn || A.push(d), (d = d.next)
      var O = A.length
      if (O > 0) {
        var R = o & Ca && u === 0 ? n : null
        if (a) {
          for (b = 0; b < O; b += 1) (k = A[b].a) == null || k.measure()
          for (b = 0; b < O; b += 1) (P = A[b].a) == null || P.fix()
        }
        jf(t, A, R, c)
      }
    }
    a &&
      to(() => {
        var H
        if (x !== void 0) for (v of x) (H = v.a) == null || H.apply()
      }),
      (Ke.first = t.first && t.first.e),
      (Ke.last = p && p.e)
  }
  function Qf(e, t, n, r) {
    r & es && ds(e.v, t), r & ts ? ds(e.i, n) : (e.i = n)
  }
  function ul(e, t, n, r, o, i, s, a, l, u) {
    var c = (l & es) !== 0,
      f = (l & Fd) === 0,
      d = c ? (f ? no(o) : Mt(o)) : o,
      g = l & ts ? Mt(s) : s,
      p = { i: g, v: d, k: i, a: null, e: null, prev: n, next: r }
    try {
      return (
        (p.e = Dn(() => a(e, d, g, u), Se)),
        (p.e.prev = n && n.e),
        (p.e.next = r && r.e),
        n === null ? (t.first = p) : ((n.next = p), (n.e.next = p.e)),
        r !== null && ((r.prev = p), (r.e.prev = p.e)),
        p
      )
    } finally {
    }
  }
  function cl(e, t, n) {
    for (
      var r = e.next ? e.next.e.nodes_start : n, o = t ? t.e.nodes_start : n, i = e.e.nodes_start;
      i !== r;

    ) {
      var s = pn(i)
      o.before(i), (i = s)
    }
  }
  function Gn(e, t, n) {
    t === null ? (e.first = n) : ((t.next = n), (t.e.next = n && n.e)),
      n !== null && ((n.prev = t), (n.e.prev = t && t.e))
  }
  function dl(e, t, n, r, o) {
    var i = e,
      s = '',
      a
    lr(() => {
      if (s === (s = t() ?? '')) {
        Se && vn()
        return
      }
      a !== void 0 && (qt(a), (a = void 0)),
        s !== '' &&
          (a = Dn(() => {
            if (Se) {
              Ve.data
              for (var l = vn(), u = l; l !== null && (l.nodeType !== 8 || l.data !== ''); )
                (u = l), (l = pn(l))
              if (l === null) throw (Wo(), _r)
              Dt(Ve, u), (i = bt(l))
              return
            }
            var c = s + '',
              f = _s(c)
            Dt(Ct(f), f.lastChild), i.before(f)
          }))
    })
  }
  function wt(e, t, n, r, o) {
    var a
    Se && vn()
    var i = (a = t.$$slots) == null ? void 0 : a[n],
      s = !1
    i === !0 && ((i = t[n === 'default' ? 'children' : n]), (s = !0)),
      i === void 0 || i(e, s ? () => r : r)
  }
  function e1(e) {
    const t = {}
    e.children && (t.default = !0)
    for (const n in e.$$slots) t[n] = !0
    return t
  }
  function cr(e, t, ...n) {
    var r = e,
      o = gt,
      i
    lr(() => {
      o !== (o = t()) && (i && (qt(i), (i = null)), (i = Dn(() => o(r, ...n))))
    }, br),
      Se && (r = Ve)
  }
  function fl(e, t, n) {
    Se && vn()
    var r = e,
      o,
      i
    lr(() => {
      o !== (o = t()) && (i && (Er(i), (i = null)), o && (i = Dn(() => n(r, o))))
    }, br),
      Se && (r = Ve)
  }
  function t1(e, t, n, r, o, i) {
    let s = Se
    Se && vn()
    var a,
      l,
      u = null
    Se && Ve.nodeType === 1 && ((u = Ve), vn())
    var c = Se ? Ve : e,
      f
    lr(() => {
      const d = t() || null
      var g = d === 'svg' ? Ea : null
      d !== a &&
        (f &&
          (d === null
            ? Er(f, () => {
                ;(f = null), (l = null)
              })
            : d === l
              ? oo(f)
              : qt(f)),
        d &&
          d !== l &&
          (f = Dn(() => {
            if (
              ((u = Se ? u : g ? document.createElementNS(g, d) : document.createElement(d)),
              Dt(u, u),
              r)
            ) {
              Se && Xf(d) && u.append(document.createComment(''))
              var p = Se ? Ct(u) : u.appendChild(Hn())
              Se && (p === null ? It(!1) : bt(p)), r(u, p)
            }
            ;(Ke.nodes_end = u), c.before(u)
          })),
        (a = d),
        a && (l = a))
    }, br),
      s && (It(!0), bt(c))
  }
  function et(e, t) {
    to(() => {
      var n = e.getRootNode(),
        r = n.host ? n : (n.head ?? n.ownerDocument.head)
      if (!r.querySelector('#' + t.hash)) {
        const o = document.createElement('style')
        ;(o.id = t.hash), (o.textContent = t.code), r.appendChild(o)
      }
    })
  }
  function _t(e, t, n) {
    Rt(() => {
      var r = yn(() => t(e, n == null ? void 0 : n()) || {})
      if (n && r != null && r.update) {
        var o = !1,
          i = {}
        $r(() => {
          var s = n()
          j(s), o && us(i, s) && ((i = s), r.update(s))
        }),
          (o = !0)
      }
      if (r != null && r.destroy) return () => r.destroy()
    })
  }
  function gl(e) {
    var t,
      n,
      r = ''
    if (typeof e == 'string' || typeof e == 'number') r += e
    else if (typeof e == 'object')
      if (Array.isArray(e)) {
        var o = e.length
        for (t = 0; t < o; t++) e[t] && (n = gl(e[t])) && (r && (r += ' '), (r += n))
      } else for (n in e) e[n] && (r && (r += ' '), (r += n))
    return r
  }
  function n1() {
    for (var e, t, n = 0, r = '', o = arguments.length; n < o; n++)
      (e = arguments[n]) && (t = gl(e)) && (r && (r += ' '), (r += t))
    return r
  }
  function wn(e) {
    return typeof e == 'object' ? n1(e) : (e ?? '')
  }
  const hl = [
    ...` 	
\r\f \v\uFEFF`
  ]
  function r1(e, t, n) {
    var r = e == null ? '' : '' + e
    if ((t && (r = r ? r + ' ' + t : t), n)) {
      for (var o in n)
        if (n[o]) r = r ? r + ' ' + o : o
        else if (r.length)
          for (var i = o.length, s = 0; (s = r.indexOf(o, s)) >= 0; ) {
            var a = s + i
            ;(s === 0 || hl.includes(r[s - 1])) && (a === r.length || hl.includes(r[a]))
              ? (r = (s === 0 ? '' : r.substring(0, s)) + r.substring(a + 1))
              : (s = a)
          }
    }
    return r === '' ? null : r
  }
  function $t(e, t, n, r, o, i) {
    var s = e.__className
    if (Se || s !== n) {
      var a = r1(n, r, i)
      ;(!Se || a !== e.getAttribute('class')) &&
        (a == null
          ? e.removeAttribute('class')
          : t
            ? (e.className = a)
            : e.setAttribute('class', a)),
        (e.__className = n)
    } else if (i)
      for (var l in i) {
        var u = !!i[l]
        ;(o == null || u !== !!o[l]) && e.classList.toggle(l, u)
      }
    return i
  }
  const so = Symbol('class')
  function ao(e) {
    if (Se) {
      var t = !1,
        n = () => {
          if (!t) {
            if (((t = !0), e.hasAttribute('value'))) {
              var r = e.value
              de(e, 'value', null), (e.value = r)
            }
            if (e.hasAttribute('checked')) {
              var o = e.checked
              de(e, 'checked', null), (e.checked = o)
            }
          }
        }
      ;(e.__on_r = n), af(n), Kf()
    }
  }
  function bs(e, t) {
    var n = e.__attributes ?? (e.__attributes = {})
    n.value === (n.value = t ?? void 0) ||
      (e.value === t && (t !== 0 || e.nodeName !== 'PROGRESS')) ||
      (e.value = t ?? '')
  }
  function o1(e, t) {
    t ? e.hasAttribute('selected') || e.setAttribute('selected', '') : e.removeAttribute('selected')
  }
  function de(e, t, n, r) {
    var o = e.__attributes ?? (e.__attributes = {})
    ;(Se &&
      ((o[t] = e.getAttribute(t)),
      t === 'src' || t === 'srcset' || (t === 'href' && e.nodeName === 'LINK'))) ||
      (o[t] !== (o[t] = n) &&
        (t === 'style' && '__styles' in e && (e.__styles = {}),
        t === 'loading' && (e[ef] = n),
        n == null
          ? e.removeAttribute(t)
          : typeof n != 'string' && pl(e).includes(t)
            ? (e[t] = n)
            : e.setAttribute(t, n)))
  }
  function nn(e, t, n, r, o = !1, i = !1, s = !1) {
    let a = Se && i
    a && It(!1)
    var l = t || {},
      u = e.tagName === 'OPTION'
    for (var c in t) c in n || (n[c] = null)
    n.class ? (n.class = wn(n.class)) : (r || n[so]) && (n.class = null)
    var f = pl(e),
      d = e.__attributes ?? (e.__attributes = {})
    for (const _ in n) {
      let v = n[_]
      if (u && _ === 'value' && v == null) {
        ;(e.value = e.__value = ''), (l[_] = v)
        continue
      }
      if (_ === 'class') {
        var g = e.namespaceURI === 'http://www.w3.org/1999/xhtml'
        $t(e, g, v, r, t == null ? void 0 : t[so], n[so]), (l[_] = v), (l[so] = n[so])
        continue
      }
      var p = l[_]
      if (v !== p) {
        l[_] = v
        var x = _[0] + _[1]
        if (x !== '$$') {
          if (x === 'on') {
            const b = {},
              N = '$$' + _
            let E = _.slice(2)
            var C = If(E)
            if ((Lf(E) && ((E = E.slice(0, -7)), (b.capture = !0)), !C && p)) {
              if (v != null) continue
              e.removeEventListener(E, l[N], b), (l[N] = null)
            }
            if (v != null)
              if (C) (e[`__${E}`] = v), ri([E])
              else {
                let T = function (D) {
                  l[_].call(this, D)
                }
                l[N] = sl(E, e, T, b)
              }
            else C && (e[`__${E}`] = void 0)
          } else if (_ === 'style' && v != null) e.style.cssText = v + ''
          else if (_ === 'autofocus') Ff(e, !!v)
          else if (!i && (_ === '__value' || (_ === 'value' && v != null))) e.value = e.__value = v
          else if (_ === 'selected' && u) o1(e, v)
          else {
            var $ = _
            o || ($ = Rf($))
            var m = $ === 'defaultValue' || $ === 'defaultChecked'
            if (v == null && !i && !m)
              if (((d[_] = null), $ === 'value' || $ === 'checked')) {
                let b = e
                const N = t === void 0
                if ($ === 'value') {
                  let E = b.defaultValue
                  b.removeAttribute($), (b.defaultValue = E), (b.value = b.__value = N ? E : null)
                } else {
                  let E = b.defaultChecked
                  b.removeAttribute($), (b.defaultChecked = E), (b.checked = N ? E : !1)
                }
              } else e.removeAttribute(_)
            else
              m || (f.includes($) && (i || typeof v != 'string'))
                ? (e[$] = v)
                : typeof v != 'function' && de(e, $, v)
          }
          _ === 'style' && '__styles' in e && (e.__styles = {})
        }
      }
    }
    return a && It(!0), l
  }
  var vl = new Map()
  function pl(e) {
    var t = vl.get(e.nodeName)
    if (t) return t
    vl.set(e.nodeName, (t = []))
    for (var n, r = e, o = Element.prototype; o !== r; ) {
      n = Ta(r)
      for (var i in n) n[i].set && t.push(i)
      r = ls(r)
    }
    return t
  }
  function at(e, t, n, r) {
    var o = e.__styles ?? (e.__styles = {})
    o[t] !== n &&
      ((o[t] = n), n == null ? e.style.removeProperty(t) : e.style.setProperty(t, n, ''))
  }
  const Ui = class Ui {
    constructor(t) {
      wr(this, Gi)
      wr(this, or, new WeakMap())
      wr(this, qr)
      wr(this, Lo)
      zo(this, Lo, t)
    }
    observe(t, n) {
      var r = ut(this, or).get(t) || new Set()
      return (
        r.add(n),
        ut(this, or).set(t, r),
        Bd(this, Gi, Yd).call(this).observe(t, ut(this, Lo)),
        () => {
          var o = ut(this, or).get(t)
          o.delete(n), o.size === 0 && (ut(this, or).delete(t), ut(this, qr).unobserve(t))
        }
      )
    }
  }
  ;(or = new WeakMap()),
    (qr = new WeakMap()),
    (Lo = new WeakMap()),
    (Gi = new WeakSet()),
    (Yd = function () {
      return (
        ut(this, qr) ??
        zo(
          this,
          qr,
          new ResizeObserver((t) => {
            for (var n of t) {
              Ui.entries.set(n.target, n)
              for (var r of ut(this, or).get(n.target) || []) r(n)
            }
          })
        )
      )
    }),
    Nt(Ui, 'entries', new WeakMap())
  let Cs = Ui
  var i1 = new Cs({ box: 'border-box' })
  function ml(e, t, n) {
    var r = i1.observe(e, () => n(e[t]))
    Rt(() => (yn(() => n(e[t])), r))
  }
  function yl(e, t) {
    return e === t || (e == null ? void 0 : e[Xn]) === t
  }
  function An(e = {}, t, n, r) {
    return (
      Rt(() => {
        var o, i
        return (
          $r(() => {
            ;(o = i),
              (i = []),
              yn(() => {
                e !== n(...i) && (t(e, ...i), o && yl(n(...o), e) && t(null, ...o))
              })
          }),
          () => {
            to(() => {
              i && yl(n(...i), e) && t(null, ...i)
            })
          }
        )
      }),
      e
    )
  }
  function ks(e) {
    return function (...t) {
      var n = t[0]
      return n.stopPropagation(), e == null ? void 0 : e.apply(this, t)
    }
  }
  function He(e = !1) {
    const t = Ye,
      n = t.l.u
    if (!n) return
    let r = () => j(t.s)
    if (e) {
      let o = 0,
        i = {}
      const s = Ne(() => {
        let a = !1
        const l = t.s
        for (const u in l) l[u] !== i[u] && ((i[u] = l[u]), (a = !0))
        return a && o++, o
      })
      r = () => h(s)
    }
    n.b.length &&
      Tf(() => {
        wl(t, r), Jr(n.b)
      }),
      kr(() => {
        const o = yn(() => n.m.map(of))
        return () => {
          for (const i of o) typeof i == 'function' && i()
        }
      }),
      n.a.length &&
        kr(() => {
          wl(t, r), Jr(n.a)
        })
  }
  function wl(e, t) {
    if (e.l.s) for (const n of e.l.s) h(n)
    t()
  }
  function De(e, t) {
    var i
    var n = (i = e.$$events) == null ? void 0 : i[t.type],
      r = Gr(n) ? n.slice() : n == null ? [] : [n]
    for (var o of r) o.call(this, t)
  }
  function rn(e) {
    Ye === null && ti(),
      ot && Ye.l !== null
        ? a1(Ye).m.push(e)
        : kr(() => {
            const t = yn(e)
            if (typeof t == 'function') return t
          })
  }
  function $s(e) {
    Ye === null && ti(), rn(() => () => yn(e))
  }
  function s1(e, t, { bubbles: n = !1, cancelable: r = !1 } = {}) {
    return new CustomEvent(e, { detail: t, bubbles: n, cancelable: r })
  }
  function ii() {
    const e = Ye
    return (
      e === null && ti(),
      (t, n, r) => {
        var i
        const o = (i = e.s.$$events) == null ? void 0 : i[t]
        if (o) {
          const s = Gr(o) ? o.slice() : [o],
            a = s1(t, n, r)
          for (const l of s) l.call(e.x, a)
          return !a.defaultPrevented
        }
        return !0
      }
    )
  }
  function a1(e) {
    var t = e.l
    return t.u ?? (t.u = { a: [], b: [], m: [] })
  }
  function Es(e, t, n) {
    if (e == null) return t(void 0), n && n(void 0), gt
    const r = yn(() => e.subscribe(t, n))
    return r.unsubscribe ? () => r.unsubscribe() : r
  }
  const Nr = []
  function Gt(e, t) {
    return { subscribe: we(e, t).subscribe }
  }
  function we(e, t = gt) {
    let n = null
    const r = new Set()
    function o(a) {
      if (us(e, a) && ((e = a), n)) {
        const l = !Nr.length
        for (const u of r) u[1](), Nr.push(u, e)
        if (l) {
          for (let u = 0; u < Nr.length; u += 2) Nr[u][0](Nr[u + 1])
          Nr.length = 0
        }
      }
    }
    function i(a) {
      o(a(e))
    }
    function s(a, l = gt) {
      const u = [a, l]
      return (
        r.add(u),
        r.size === 1 && (n = t(o, i) || gt),
        a(e),
        () => {
          r.delete(u), r.size === 0 && n && (n(), (n = null))
        }
      )
    }
    return { set: o, update: i, subscribe: s }
  }
  function Un(e, t, n) {
    const r = !Array.isArray(e),
      o = r ? [e] : e
    if (!o.every(Boolean)) throw new Error('derived() expects stores as input, got a falsy value')
    const i = t.length < 2
    return Gt(n, (s, a) => {
      let l = !1
      const u = []
      let c = 0,
        f = gt
      const d = () => {
          if (c) return
          f()
          const p = t(r ? u[0] : u, s, a)
          i ? s(p) : (f = typeof p == 'function' ? p : gt)
        },
        g = o.map((p, x) =>
          Es(
            p,
            (C) => {
              ;(u[x] = C), (c &= ~(1 << x)), l && d()
            },
            () => {
              c |= 1 << x
            }
          )
        )
      return (
        (l = !0),
        d(),
        function () {
          Jr(g), f(), (l = !1)
        }
      )
    })
  }
  function q(e) {
    let t
    return Es(e, (n) => (t = n))(), t
  }
  let si = !1,
    Ss = Symbol()
  function Q(e, t, n) {
    const r = n[t] ?? (n[t] = { store: null, source: no(void 0), unsubscribe: gt })
    if (r.store !== e && !(Ss in n))
      if ((r.unsubscribe(), (r.store = e ?? null), e == null))
        (r.source.v = void 0), (r.unsubscribe = gt)
      else {
        var o = !0
        ;(r.unsubscribe = Es(e, (i) => {
          o ? (r.source.v = i) : U(r.source, i)
        })),
          (o = !1)
      }
    return e && Ss in n ? q(e) : h(r.source)
  }
  function l1(e, t, n) {
    let r = n[t]
    return r && r.store !== e && (r.unsubscribe(), (r.unsubscribe = gt)), e
  }
  function ai(e, t) {
    return e.set(t), t
  }
  function nt() {
    const e = {}
    function t() {
      ja(() => {
        for (var n in e) e[n].unsubscribe()
        Ur(e, Ss, { enumerable: !1, value: !0 })
      })
    }
    return [e, t]
  }
  function u1(e) {
    var t = si
    try {
      return (si = !1), [e(), si]
    } finally {
      si = t
    }
  }
  const c1 = {
    get(e, t) {
      if (!e.exclude.includes(t)) return e.props[t]
    },
    set(e, t) {
      return !1
    },
    getOwnPropertyDescriptor(e, t) {
      if (!e.exclude.includes(t) && t in e.props)
        return { enumerable: !0, configurable: !0, value: e.props[t] }
    },
    has(e, t) {
      return e.exclude.includes(t) ? !1 : t in e.props
    },
    ownKeys(e) {
      return Reflect.ownKeys(e.props).filter((t) => !e.exclude.includes(t))
    }
  }
  function xt(e, t, n) {
    return new Proxy({ props: e, exclude: t }, c1)
  }
  const d1 = {
    get(e, t) {
      if (!e.exclude.includes(t)) return h(e.version), t in e.special ? e.special[t]() : e.props[t]
    },
    set(e, t, n) {
      return (
        t in e.special ||
          (e.special[t] = w(
            {
              get [t]() {
                return e.props[t]
              }
            },
            t,
            ka
          )),
        e.special[t](n),
        La(e.version),
        !0
      )
    },
    getOwnPropertyDescriptor(e, t) {
      if (!e.exclude.includes(t) && t in e.props)
        return { enumerable: !0, configurable: !0, value: e.props[t] }
    },
    deleteProperty(e, t) {
      return e.exclude.includes(t) || (e.exclude.push(t), La(e.version)), !0
    },
    has(e, t) {
      return e.exclude.includes(t) ? !1 : t in e.props
    },
    ownKeys(e) {
      return Reflect.ownKeys(e.props).filter((t) => !e.exclude.includes(t))
    }
  }
  function it(e, t) {
    return new Proxy({ props: e, exclude: t, special: {}, version: Mt(0) }, d1)
  }
  const f1 = {
    get(e, t) {
      let n = e.props.length
      for (; n--; ) {
        let r = e.props[n]
        if ((jr(r) && (r = r()), typeof r == 'object' && r !== null && t in r)) return r[t]
      }
    },
    set(e, t, n) {
      let r = e.props.length
      for (; r--; ) {
        let o = e.props[r]
        jr(o) && (o = o())
        const i = Mn(o, t)
        if (i && i.set) return i.set(n), !0
      }
      return !1
    },
    getOwnPropertyDescriptor(e, t) {
      let n = e.props.length
      for (; n--; ) {
        let r = e.props[n]
        if ((jr(r) && (r = r()), typeof r == 'object' && r !== null && t in r)) {
          const o = Mn(r, t)
          return o && !o.configurable && (o.configurable = !0), o
        }
      }
    },
    has(e, t) {
      if (t === Xn || t === ss) return !1
      for (let n of e.props) if ((jr(n) && (n = n()), n != null && t in n)) return !0
      return !1
    },
    ownKeys(e) {
      const t = []
      for (let n of e.props) {
        jr(n) && (n = n())
        for (const r in n) t.includes(r) || t.push(r)
      }
      return t
    }
  }
  function ft(...e) {
    return new Proxy({ props: e }, f1)
  }
  function w(e, t, n, r) {
    var N
    var o = (n & Wd) !== 0,
      i = !ot || (n & Kd) !== 0,
      s = (n & qd) !== 0,
      a = (n & Gd) !== 0,
      l = !1,
      u
    s ? ([u, l] = u1(() => e[t])) : (u = e[t])
    var c = Xn in e || ss in e,
      f =
        (s &&
          (((N = Mn(e, t)) == null ? void 0 : N.set) ?? (c && t in e && ((E) => (e[t] = E))))) ||
        void 0,
      d = r,
      g = !0,
      p = !1,
      x = () => ((p = !0), g && ((g = !1), a ? (d = yn(r)) : (d = r)), d)
    u === void 0 && r !== void 0 && (f && i && gf(), (u = x()), f && f(u))
    var C
    if (i)
      C = () => {
        var E = e[t]
        return E === void 0 ? x() : ((g = !0), (p = !1), E)
      }
    else {
      var $ = (o ? Ne : ve)(() => e[t])
      ;($.f |= Jd),
        (C = () => {
          var E = h($)
          return E !== void 0 && (d = void 0), E === void 0 ? d : E
        })
    }
    if (!(n & ka)) return C
    if (f) {
      var m = e.$$legacy
      return function (E, T) {
        return arguments.length > 0 ? ((!i || !T || m || l) && f(T ? C() : E), E) : C()
      }
    }
    var _ = !1,
      v = no(u),
      b = Ne(() => {
        var E = C(),
          T = h(v)
        return _ ? ((_ = !1), T) : (v.v = E)
      })
    return (
      o || (b.equals = cs),
      function (E, T) {
        if (arguments.length > 0) {
          const D = T ? h(b) : i && s ? Ht(E) : E
          return b.equals(D) || ((_ = !0), U(v, D), p && d !== void 0 && (d = D), yn(() => h(b))), E
        }
        return h(b)
      }
    )
  }
  function g1(e) {
    return new h1(e)
  }
  class h1 {
    constructor(t) {
      wr(this, Zn)
      wr(this, jt)
      var i
      var n = new Map(),
        r = (s, a) => {
          var l = no(a)
          return n.set(s, l), l
        }
      const o = new Proxy(
        { ...(t.props || {}), $$events: {} },
        {
          get(s, a) {
            return h(n.get(a) ?? r(a, Reflect.get(s, a)))
          },
          has(s, a) {
            return a === ss ? !0 : (h(n.get(a) ?? r(a, Reflect.get(s, a))), Reflect.has(s, a))
          },
          set(s, a, l) {
            return U(n.get(a) ?? r(a, l), l), Reflect.set(s, a, l)
          }
        }
      )
      zo(
        this,
        jt,
        (t.hydrate ? Gf : al)(t.component, {
          target: t.target,
          anchor: t.anchor,
          props: o,
          context: t.context,
          intro: t.intro ?? !1,
          recover: t.recover
        })
      ),
        (!((i = t == null ? void 0 : t.props) != null && i.$$host) || t.sync === !1) && y(),
        zo(this, Zn, o.$$events)
      for (const s of Object.keys(ut(this, jt)))
        s === '$set' ||
          s === '$destroy' ||
          s === '$on' ||
          Ur(this, s, {
            get() {
              return ut(this, jt)[s]
            },
            set(a) {
              ut(this, jt)[s] = a
            },
            enumerable: !0
          })
      ;(ut(this, jt).$set = (s) => {
        Object.assign(o, s)
      }),
        (ut(this, jt).$destroy = () => {
          Uf(ut(this, jt))
        })
    }
    $set(t) {
      ut(this, jt).$set(t)
    }
    $on(t, n) {
      ut(this, Zn)[t] = ut(this, Zn)[t] || []
      const r = (...o) => n.call(this, ...o)
      return (
        ut(this, Zn)[t].push(r),
        () => {
          ut(this, Zn)[t] = ut(this, Zn)[t].filter((o) => o !== r)
        }
      )
    }
    $destroy() {
      ut(this, jt).$destroy()
    }
  }
  ;(Zn = new WeakMap()), (jt = new WeakMap())
  let _l
  typeof HTMLElement == 'function' &&
    (_l = class extends HTMLElement {
      constructor(t, n, r) {
        super()
        Nt(this, '$$ctor')
        Nt(this, '$$s')
        Nt(this, '$$c')
        Nt(this, '$$cn', !1)
        Nt(this, '$$d', {})
        Nt(this, '$$r', !1)
        Nt(this, '$$p_d', {})
        Nt(this, '$$l', {})
        Nt(this, '$$l_u', new Map())
        Nt(this, '$$me')
        ;(this.$$ctor = t), (this.$$s = n), r && this.attachShadow({ mode: 'open' })
      }
      addEventListener(t, n, r) {
        if (((this.$$l[t] = this.$$l[t] || []), this.$$l[t].push(n), this.$$c)) {
          const o = this.$$c.$on(t, n)
          this.$$l_u.set(n, o)
        }
        super.addEventListener(t, n, r)
      }
      removeEventListener(t, n, r) {
        if ((super.removeEventListener(t, n, r), this.$$c)) {
          const o = this.$$l_u.get(n)
          o && (o(), this.$$l_u.delete(n))
        }
      }
      async connectedCallback() {
        if (((this.$$cn = !0), !this.$$c)) {
          let t = function (o) {
            return (i) => {
              const s = document.createElement('slot')
              o !== 'default' && (s.name = o), L(i, s)
            }
          }
          if ((await Promise.resolve(), !this.$$cn || this.$$c)) return
          const n = {},
            r = v1(this)
          for (const o of this.$$s)
            o in r &&
              (o === 'default' && !this.$$d.children
                ? ((this.$$d.children = t(o)), (n.default = !0))
                : (n[o] = t(o)))
          for (const o of this.attributes) {
            const i = this.$$g_p(o.name)
            i in this.$$d || (this.$$d[i] = li(i, o.value, this.$$p_d, 'toProp'))
          }
          for (const o in this.$$p_d)
            !(o in this.$$d) && this[o] !== void 0 && ((this.$$d[o] = this[o]), delete this[o])
          ;(this.$$c = g1({
            component: this.$$ctor,
            target: this.shadowRoot || this,
            props: { ...this.$$d, $$slots: n, $$host: this }
          })),
            (this.$$me = Mf(() => {
              $r(() => {
                var o
                this.$$r = !0
                for (const i of Fo(this.$$c)) {
                  if (!((o = this.$$p_d[i]) != null && o.reflect)) continue
                  this.$$d[i] = this.$$c[i]
                  const s = li(i, this.$$d[i], this.$$p_d, 'toAttribute')
                  s == null
                    ? this.removeAttribute(this.$$p_d[i].attribute || i)
                    : this.setAttribute(this.$$p_d[i].attribute || i, s)
                }
                this.$$r = !1
              })
            }))
          for (const o in this.$$l)
            for (const i of this.$$l[o]) {
              const s = this.$$c.$on(o, i)
              this.$$l_u.set(i, s)
            }
          this.$$l = {}
        }
      }
      attributeChangedCallback(t, n, r) {
        var o
        this.$$r ||
          ((t = this.$$g_p(t)),
          (this.$$d[t] = li(t, r, this.$$p_d, 'toProp')),
          (o = this.$$c) == null || o.$set({ [t]: this.$$d[t] }))
      }
      disconnectedCallback() {
        ;(this.$$cn = !1),
          Promise.resolve().then(() => {
            !this.$$cn && this.$$c && (this.$$c.$destroy(), this.$$me(), (this.$$c = void 0))
          })
      }
      $$g_p(t) {
        return (
          Fo(this.$$p_d).find(
            (n) =>
              this.$$p_d[n].attribute === t || (!this.$$p_d[n].attribute && n.toLowerCase() === t)
          ) || t
        )
      }
    })
  function li(e, t, n, r) {
    var i
    const o = (i = n[e]) == null ? void 0 : i.type
    if (((t = o === 'Boolean' && typeof t != 'boolean' ? t != null : t), !r || !n[e])) return t
    if (r === 'toAttribute')
      switch (o) {
        case 'Object':
        case 'Array':
          return t == null ? null : JSON.stringify(t)
        case 'Boolean':
          return t ? '' : null
        case 'Number':
          return t ?? null
        default:
          return t
      }
    else
      switch (o) {
        case 'Object':
        case 'Array':
          return t && JSON.parse(t)
        case 'Boolean':
          return t
        case 'Number':
          return t != null ? +t : t
        default:
          return t
      }
  }
  function v1(e) {
    const t = {}
    return (
      e.childNodes.forEach((n) => {
        t[n.slot || 'default'] = !0
      }),
      t
    )
  }
  function ie(e, t, n, r, o, i) {
    let s = class extends _l {
      constructor() {
        super(e, n, o), (this.$$p_d = t)
      }
      static get observedAttributes() {
        return Fo(t).map((a) => (t[a].attribute || a).toLowerCase())
      }
    }
    return (
      Fo(t).forEach((a) => {
        Ur(s.prototype, a, {
          get() {
            return this.$$c && a in this.$$c ? this.$$c[a] : this.$$d[a]
          },
          set(l) {
            var f
            ;(l = li(a, l, t)), (this.$$d[a] = l)
            var u = this.$$c
            if (u) {
              var c = (f = Mn(u, a)) == null ? void 0 : f.get
              c ? (u[a] = l) : u.$set({ [a]: l })
            }
          }
        })
      }),
      r.forEach((a) => {
        Ur(s.prototype, a, {
          get() {
            var l
            return (l = this.$$c) == null ? void 0 : l[a]
          }
        })
      }),
      (e.element = s),
      s
    )
  }
  function Et(e) {
    if (typeof e == 'string' || typeof e == 'number') return '' + e
    let t = ''
    if (Array.isArray(e))
      for (let n = 0, r; n < e.length; n++) (r = Et(e[n])) !== '' && (t += (t && ' ') + r)
    else for (let n in e) e[n] && (t += (t && ' ') + n)
    return t
  }
  var p1 = { value: () => {} }
  function ui() {
    for (var e = 0, t = arguments.length, n = {}, r; e < t; ++e) {
      if (!(r = arguments[e] + '') || r in n || /[\s.]/.test(r))
        throw new Error('illegal type: ' + r)
      n[r] = []
    }
    return new ci(n)
  }
  function ci(e) {
    this._ = e
  }
  function m1(e, t) {
    return e
      .trim()
      .split(/^|\s+/)
      .map(function (n) {
        var r = '',
          o = n.indexOf('.')
        if ((o >= 0 && ((r = n.slice(o + 1)), (n = n.slice(0, o))), n && !t.hasOwnProperty(n)))
          throw new Error('unknown type: ' + n)
        return { type: n, name: r }
      })
  }
  ci.prototype = ui.prototype = {
    constructor: ci,
    on: function (e, t) {
      var n = this._,
        r = m1(e + '', n),
        o,
        i = -1,
        s = r.length
      if (arguments.length < 2) {
        for (; ++i < s; ) if ((o = (e = r[i]).type) && (o = y1(n[o], e.name))) return o
        return
      }
      if (t != null && typeof t != 'function') throw new Error('invalid callback: ' + t)
      for (; ++i < s; )
        if ((o = (e = r[i]).type)) n[o] = xl(n[o], e.name, t)
        else if (t == null) for (o in n) n[o] = xl(n[o], e.name, null)
      return this
    },
    copy: function () {
      var e = {},
        t = this._
      for (var n in t) e[n] = t[n].slice()
      return new ci(e)
    },
    call: function (e, t) {
      if ((o = arguments.length - 2) > 0)
        for (var n = new Array(o), r = 0, o, i; r < o; ++r) n[r] = arguments[r + 2]
      if (!this._.hasOwnProperty(e)) throw new Error('unknown type: ' + e)
      for (i = this._[e], r = 0, o = i.length; r < o; ++r) i[r].value.apply(t, n)
    },
    apply: function (e, t, n) {
      if (!this._.hasOwnProperty(e)) throw new Error('unknown type: ' + e)
      for (var r = this._[e], o = 0, i = r.length; o < i; ++o) r[o].value.apply(t, n)
    }
  }
  function y1(e, t) {
    for (var n = 0, r = e.length, o; n < r; ++n) if ((o = e[n]).name === t) return o.value
  }
  function xl(e, t, n) {
    for (var r = 0, o = e.length; r < o; ++r)
      if (e[r].name === t) {
        ;(e[r] = p1), (e = e.slice(0, r).concat(e.slice(r + 1)))
        break
      }
    return n != null && e.push({ name: t, value: n }), e
  }
  var Ps = 'http://www.w3.org/1999/xhtml'
  const bl = {
    svg: 'http://www.w3.org/2000/svg',
    xhtml: Ps,
    xlink: 'http://www.w3.org/1999/xlink',
    xml: 'http://www.w3.org/XML/1998/namespace',
    xmlns: 'http://www.w3.org/2000/xmlns/'
  }
  function di(e) {
    var t = (e += ''),
      n = t.indexOf(':')
    return (
      n >= 0 && (t = e.slice(0, n)) !== 'xmlns' && (e = e.slice(n + 1)),
      bl.hasOwnProperty(t) ? { space: bl[t], local: e } : e
    )
  }
  function w1(e) {
    return function () {
      var t = this.ownerDocument,
        n = this.namespaceURI
      return n === Ps && t.documentElement.namespaceURI === Ps
        ? t.createElement(e)
        : t.createElementNS(n, e)
    }
  }
  function _1(e) {
    return function () {
      return this.ownerDocument.createElementNS(e.space, e.local)
    }
  }
  function Cl(e) {
    var t = di(e)
    return (t.local ? _1 : w1)(t)
  }
  function x1() {}
  function Ns(e) {
    return e == null
      ? x1
      : function () {
          return this.querySelector(e)
        }
  }
  function b1(e) {
    typeof e != 'function' && (e = Ns(e))
    for (var t = this._groups, n = t.length, r = new Array(n), o = 0; o < n; ++o)
      for (var i = t[o], s = i.length, a = (r[o] = new Array(s)), l, u, c = 0; c < s; ++c)
        (l = i[c]) &&
          (u = e.call(l, l.__data__, c, i)) &&
          ('__data__' in l && (u.__data__ = l.__data__), (a[c] = u))
    return new Zt(r, this._parents)
  }
  function C1(e) {
    return e == null ? [] : Array.isArray(e) ? e : Array.from(e)
  }
  function k1() {
    return []
  }
  function kl(e) {
    return e == null
      ? k1
      : function () {
          return this.querySelectorAll(e)
        }
  }
  function $1(e) {
    return function () {
      return C1(e.apply(this, arguments))
    }
  }
  function E1(e) {
    typeof e == 'function' ? (e = $1(e)) : (e = kl(e))
    for (var t = this._groups, n = t.length, r = [], o = [], i = 0; i < n; ++i)
      for (var s = t[i], a = s.length, l, u = 0; u < a; ++u)
        (l = s[u]) && (r.push(e.call(l, l.__data__, u, s)), o.push(l))
    return new Zt(r, o)
  }
  function $l(e) {
    return function () {
      return this.matches(e)
    }
  }
  function El(e) {
    return function (t) {
      return t.matches(e)
    }
  }
  var S1 = Array.prototype.find
  function P1(e) {
    return function () {
      return S1.call(this.children, e)
    }
  }
  function N1() {
    return this.firstElementChild
  }
  function T1(e) {
    return this.select(e == null ? N1 : P1(typeof e == 'function' ? e : El(e)))
  }
  var M1 = Array.prototype.filter
  function H1() {
    return Array.from(this.children)
  }
  function V1(e) {
    return function () {
      return M1.call(this.children, e)
    }
  }
  function D1(e) {
    return this.selectAll(e == null ? H1 : V1(typeof e == 'function' ? e : El(e)))
  }
  function A1(e) {
    typeof e != 'function' && (e = $l(e))
    for (var t = this._groups, n = t.length, r = new Array(n), o = 0; o < n; ++o)
      for (var i = t[o], s = i.length, a = (r[o] = []), l, u = 0; u < s; ++u)
        (l = i[u]) && e.call(l, l.__data__, u, i) && a.push(l)
    return new Zt(r, this._parents)
  }
  function Sl(e) {
    return new Array(e.length)
  }
  function L1() {
    return new Zt(this._enter || this._groups.map(Sl), this._parents)
  }
  function fi(e, t) {
    ;(this.ownerDocument = e.ownerDocument),
      (this.namespaceURI = e.namespaceURI),
      (this._next = null),
      (this._parent = e),
      (this.__data__ = t)
  }
  fi.prototype = {
    constructor: fi,
    appendChild: function (e) {
      return this._parent.insertBefore(e, this._next)
    },
    insertBefore: function (e, t) {
      return this._parent.insertBefore(e, t)
    },
    querySelector: function (e) {
      return this._parent.querySelector(e)
    },
    querySelectorAll: function (e) {
      return this._parent.querySelectorAll(e)
    }
  }
  function O1(e) {
    return function () {
      return e
    }
  }
  function I1(e, t, n, r, o, i) {
    for (var s = 0, a, l = t.length, u = i.length; s < u; ++s)
      (a = t[s]) ? ((a.__data__ = i[s]), (r[s] = a)) : (n[s] = new fi(e, i[s]))
    for (; s < l; ++s) (a = t[s]) && (o[s] = a)
  }
  function z1(e, t, n, r, o, i, s) {
    var a,
      l,
      u = new Map(),
      c = t.length,
      f = i.length,
      d = new Array(c),
      g
    for (a = 0; a < c; ++a)
      (l = t[a]) &&
        ((d[a] = g = s.call(l, l.__data__, a, t) + ''), u.has(g) ? (o[a] = l) : u.set(g, l))
    for (a = 0; a < f; ++a)
      (g = s.call(e, i[a], a, i) + ''),
        (l = u.get(g)) ? ((r[a] = l), (l.__data__ = i[a]), u.delete(g)) : (n[a] = new fi(e, i[a]))
    for (a = 0; a < c; ++a) (l = t[a]) && u.get(d[a]) === l && (o[a] = l)
  }
  function R1(e) {
    return e.__data__
  }
  function B1(e, t) {
    if (!arguments.length) return Array.from(this, R1)
    var n = t ? z1 : I1,
      r = this._parents,
      o = this._groups
    typeof e != 'function' && (e = O1(e))
    for (
      var i = o.length, s = new Array(i), a = new Array(i), l = new Array(i), u = 0;
      u < i;
      ++u
    ) {
      var c = r[u],
        f = o[u],
        d = f.length,
        g = Y1(e.call(c, c && c.__data__, u, r)),
        p = g.length,
        x = (a[u] = new Array(p)),
        C = (s[u] = new Array(p)),
        $ = (l[u] = new Array(d))
      n(c, f, x, C, $, g, t)
      for (var m = 0, _ = 0, v, b; m < p; ++m)
        if ((v = x[m])) {
          for (m >= _ && (_ = m + 1); !(b = C[_]) && ++_ < p; );
          v._next = b || null
        }
    }
    return (s = new Zt(s, r)), (s._enter = a), (s._exit = l), s
  }
  function Y1(e) {
    return typeof e == 'object' && 'length' in e ? e : Array.from(e)
  }
  function Z1() {
    return new Zt(this._exit || this._groups.map(Sl), this._parents)
  }
  function X1(e, t, n) {
    var r = this.enter(),
      o = this,
      i = this.exit()
    return (
      typeof e == 'function' ? ((r = e(r)), r && (r = r.selection())) : (r = r.append(e + '')),
      t != null && ((o = t(o)), o && (o = o.selection())),
      n == null ? i.remove() : n(i),
      r && o ? r.merge(o).order() : o
    )
  }
  function F1(e) {
    for (
      var t = e.selection ? e.selection() : e,
        n = this._groups,
        r = t._groups,
        o = n.length,
        i = r.length,
        s = Math.min(o, i),
        a = new Array(o),
        l = 0;
      l < s;
      ++l
    )
      for (var u = n[l], c = r[l], f = u.length, d = (a[l] = new Array(f)), g, p = 0; p < f; ++p)
        (g = u[p] || c[p]) && (d[p] = g)
    for (; l < o; ++l) a[l] = n[l]
    return new Zt(a, this._parents)
  }
  function W1() {
    for (var e = this._groups, t = -1, n = e.length; ++t < n; )
      for (var r = e[t], o = r.length - 1, i = r[o], s; --o >= 0; )
        (s = r[o]) &&
          (i && s.compareDocumentPosition(i) ^ 4 && i.parentNode.insertBefore(s, i), (i = s))
    return this
  }
  function K1(e) {
    e || (e = q1)
    function t(f, d) {
      return f && d ? e(f.__data__, d.__data__) : !f - !d
    }
    for (var n = this._groups, r = n.length, o = new Array(r), i = 0; i < r; ++i) {
      for (var s = n[i], a = s.length, l = (o[i] = new Array(a)), u, c = 0; c < a; ++c)
        (u = s[c]) && (l[c] = u)
      l.sort(t)
    }
    return new Zt(o, this._parents).order()
  }
  function q1(e, t) {
    return e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN
  }
  function G1() {
    var e = arguments[0]
    return (arguments[0] = this), e.apply(null, arguments), this
  }
  function U1() {
    return Array.from(this)
  }
  function j1() {
    for (var e = this._groups, t = 0, n = e.length; t < n; ++t)
      for (var r = e[t], o = 0, i = r.length; o < i; ++o) {
        var s = r[o]
        if (s) return s
      }
    return null
  }
  function J1() {
    let e = 0
    for (const t of this) ++e
    return e
  }
  function Q1() {
    return !this.node()
  }
  function eg(e) {
    for (var t = this._groups, n = 0, r = t.length; n < r; ++n)
      for (var o = t[n], i = 0, s = o.length, a; i < s; ++i)
        (a = o[i]) && e.call(a, a.__data__, i, o)
    return this
  }
  function tg(e) {
    return function () {
      this.removeAttribute(e)
    }
  }
  function ng(e) {
    return function () {
      this.removeAttributeNS(e.space, e.local)
    }
  }
  function rg(e, t) {
    return function () {
      this.setAttribute(e, t)
    }
  }
  function og(e, t) {
    return function () {
      this.setAttributeNS(e.space, e.local, t)
    }
  }
  function ig(e, t) {
    return function () {
      var n = t.apply(this, arguments)
      n == null ? this.removeAttribute(e) : this.setAttribute(e, n)
    }
  }
  function sg(e, t) {
    return function () {
      var n = t.apply(this, arguments)
      n == null
        ? this.removeAttributeNS(e.space, e.local)
        : this.setAttributeNS(e.space, e.local, n)
    }
  }
  function ag(e, t) {
    var n = di(e)
    if (arguments.length < 2) {
      var r = this.node()
      return n.local ? r.getAttributeNS(n.space, n.local) : r.getAttribute(n)
    }
    return this.each(
      (t == null
        ? n.local
          ? ng
          : tg
        : typeof t == 'function'
          ? n.local
            ? sg
            : ig
          : n.local
            ? og
            : rg)(n, t)
    )
  }
  function Pl(e) {
    return (e.ownerDocument && e.ownerDocument.defaultView) || (e.document && e) || e.defaultView
  }
  function lg(e) {
    return function () {
      this.style.removeProperty(e)
    }
  }
  function ug(e, t, n) {
    return function () {
      this.style.setProperty(e, t, n)
    }
  }
  function cg(e, t, n) {
    return function () {
      var r = t.apply(this, arguments)
      r == null ? this.style.removeProperty(e) : this.style.setProperty(e, r, n)
    }
  }
  function dg(e, t, n) {
    return arguments.length > 1
      ? this.each((t == null ? lg : typeof t == 'function' ? cg : ug)(e, t, n ?? ''))
      : Tr(this.node(), e)
  }
  function Tr(e, t) {
    return e.style.getPropertyValue(t) || Pl(e).getComputedStyle(e, null).getPropertyValue(t)
  }
  function fg(e) {
    return function () {
      delete this[e]
    }
  }
  function gg(e, t) {
    return function () {
      this[e] = t
    }
  }
  function hg(e, t) {
    return function () {
      var n = t.apply(this, arguments)
      n == null ? delete this[e] : (this[e] = n)
    }
  }
  function vg(e, t) {
    return arguments.length > 1
      ? this.each((t == null ? fg : typeof t == 'function' ? hg : gg)(e, t))
      : this.node()[e]
  }
  function Nl(e) {
    return e.trim().split(/^|\s+/)
  }
  function Ts(e) {
    return e.classList || new Tl(e)
  }
  function Tl(e) {
    ;(this._node = e), (this._names = Nl(e.getAttribute('class') || ''))
  }
  Tl.prototype = {
    add: function (e) {
      var t = this._names.indexOf(e)
      t < 0 && (this._names.push(e), this._node.setAttribute('class', this._names.join(' ')))
    },
    remove: function (e) {
      var t = this._names.indexOf(e)
      t >= 0 && (this._names.splice(t, 1), this._node.setAttribute('class', this._names.join(' ')))
    },
    contains: function (e) {
      return this._names.indexOf(e) >= 0
    }
  }
  function Ml(e, t) {
    for (var n = Ts(e), r = -1, o = t.length; ++r < o; ) n.add(t[r])
  }
  function Hl(e, t) {
    for (var n = Ts(e), r = -1, o = t.length; ++r < o; ) n.remove(t[r])
  }
  function pg(e) {
    return function () {
      Ml(this, e)
    }
  }
  function mg(e) {
    return function () {
      Hl(this, e)
    }
  }
  function yg(e, t) {
    return function () {
      ;(t.apply(this, arguments) ? Ml : Hl)(this, e)
    }
  }
  function wg(e, t) {
    var n = Nl(e + '')
    if (arguments.length < 2) {
      for (var r = Ts(this.node()), o = -1, i = n.length; ++o < i; )
        if (!r.contains(n[o])) return !1
      return !0
    }
    return this.each((typeof t == 'function' ? yg : t ? pg : mg)(n, t))
  }
  function _g() {
    this.textContent = ''
  }
  function xg(e) {
    return function () {
      this.textContent = e
    }
  }
  function bg(e) {
    return function () {
      var t = e.apply(this, arguments)
      this.textContent = t ?? ''
    }
  }
  function Cg(e) {
    return arguments.length
      ? this.each(e == null ? _g : (typeof e == 'function' ? bg : xg)(e))
      : this.node().textContent
  }
  function kg() {
    this.innerHTML = ''
  }
  function $g(e) {
    return function () {
      this.innerHTML = e
    }
  }
  function Eg(e) {
    return function () {
      var t = e.apply(this, arguments)
      this.innerHTML = t ?? ''
    }
  }
  function Sg(e) {
    return arguments.length
      ? this.each(e == null ? kg : (typeof e == 'function' ? Eg : $g)(e))
      : this.node().innerHTML
  }
  function Pg() {
    this.nextSibling && this.parentNode.appendChild(this)
  }
  function Ng() {
    return this.each(Pg)
  }
  function Tg() {
    this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild)
  }
  function Mg() {
    return this.each(Tg)
  }
  function Hg(e) {
    var t = typeof e == 'function' ? e : Cl(e)
    return this.select(function () {
      return this.appendChild(t.apply(this, arguments))
    })
  }
  function Vg() {
    return null
  }
  function Dg(e, t) {
    var n = typeof e == 'function' ? e : Cl(e),
      r = t == null ? Vg : typeof t == 'function' ? t : Ns(t)
    return this.select(function () {
      return this.insertBefore(n.apply(this, arguments), r.apply(this, arguments) || null)
    })
  }
  function Ag() {
    var e = this.parentNode
    e && e.removeChild(this)
  }
  function Lg() {
    return this.each(Ag)
  }
  function Og() {
    var e = this.cloneNode(!1),
      t = this.parentNode
    return t ? t.insertBefore(e, this.nextSibling) : e
  }
  function Ig() {
    var e = this.cloneNode(!0),
      t = this.parentNode
    return t ? t.insertBefore(e, this.nextSibling) : e
  }
  function zg(e) {
    return this.select(e ? Ig : Og)
  }
  function Rg(e) {
    return arguments.length ? this.property('__data__', e) : this.node().__data__
  }
  function Bg(e) {
    return function (t) {
      e.call(this, t, this.__data__)
    }
  }
  function Yg(e) {
    return e
      .trim()
      .split(/^|\s+/)
      .map(function (t) {
        var n = '',
          r = t.indexOf('.')
        return r >= 0 && ((n = t.slice(r + 1)), (t = t.slice(0, r))), { type: t, name: n }
      })
  }
  function Zg(e) {
    return function () {
      var t = this.__on
      if (t) {
        for (var n = 0, r = -1, o = t.length, i; n < o; ++n)
          (i = t[n]),
            (!e.type || i.type === e.type) && i.name === e.name
              ? this.removeEventListener(i.type, i.listener, i.options)
              : (t[++r] = i)
        ++r ? (t.length = r) : delete this.__on
      }
    }
  }
  function Xg(e, t, n) {
    return function () {
      var r = this.__on,
        o,
        i = Bg(t)
      if (r) {
        for (var s = 0, a = r.length; s < a; ++s)
          if ((o = r[s]).type === e.type && o.name === e.name) {
            this.removeEventListener(o.type, o.listener, o.options),
              this.addEventListener(o.type, (o.listener = i), (o.options = n)),
              (o.value = t)
            return
          }
      }
      this.addEventListener(e.type, i, n),
        (o = { type: e.type, name: e.name, value: t, listener: i, options: n }),
        r ? r.push(o) : (this.__on = [o])
    }
  }
  function Fg(e, t, n) {
    var r = Yg(e + ''),
      o,
      i = r.length,
      s
    if (arguments.length < 2) {
      var a = this.node().__on
      if (a) {
        for (var l = 0, u = a.length, c; l < u; ++l)
          for (o = 0, c = a[l]; o < i; ++o)
            if ((s = r[o]).type === c.type && s.name === c.name) return c.value
      }
      return
    }
    for (a = t ? Xg : Zg, o = 0; o < i; ++o) this.each(a(r[o], t, n))
    return this
  }
  function Vl(e, t, n) {
    var r = Pl(e),
      o = r.CustomEvent
    typeof o == 'function'
      ? (o = new o(t, n))
      : ((o = r.document.createEvent('Event')),
        n
          ? (o.initEvent(t, n.bubbles, n.cancelable), (o.detail = n.detail))
          : o.initEvent(t, !1, !1)),
      e.dispatchEvent(o)
  }
  function Wg(e, t) {
    return function () {
      return Vl(this, e, t)
    }
  }
  function Kg(e, t) {
    return function () {
      return Vl(this, e, t.apply(this, arguments))
    }
  }
  function qg(e, t) {
    return this.each((typeof t == 'function' ? Kg : Wg)(e, t))
  }
  function* Gg() {
    for (var e = this._groups, t = 0, n = e.length; t < n; ++t)
      for (var r = e[t], o = 0, i = r.length, s; o < i; ++o) (s = r[o]) && (yield s)
  }
  var Dl = [null]
  function Zt(e, t) {
    ;(this._groups = e), (this._parents = t)
  }
  function lo() {
    return new Zt([[document.documentElement]], Dl)
  }
  function Ug() {
    return this
  }
  Zt.prototype = lo.prototype = {
    constructor: Zt,
    select: b1,
    selectAll: E1,
    selectChild: T1,
    selectChildren: D1,
    filter: A1,
    data: B1,
    enter: L1,
    exit: Z1,
    join: X1,
    merge: F1,
    selection: Ug,
    order: W1,
    sort: K1,
    call: G1,
    nodes: U1,
    node: j1,
    size: J1,
    empty: Q1,
    each: eg,
    attr: ag,
    style: dg,
    property: vg,
    classed: wg,
    text: Cg,
    html: Sg,
    raise: Ng,
    lower: Mg,
    append: Hg,
    insert: Dg,
    remove: Lg,
    clone: zg,
    datum: Rg,
    on: Fg,
    dispatch: qg,
    [Symbol.iterator]: Gg
  }
  function Ut(e) {
    return typeof e == 'string'
      ? new Zt([[document.querySelector(e)]], [document.documentElement])
      : new Zt([[e]], Dl)
  }
  function jg(e) {
    let t
    for (; (t = e.sourceEvent); ) e = t
    return e
  }
  function on(e, t) {
    if (((e = jg(e)), t === void 0 && (t = e.currentTarget), t)) {
      var n = t.ownerSVGElement || t
      if (n.createSVGPoint) {
        var r = n.createSVGPoint()
        return (
          (r.x = e.clientX),
          (r.y = e.clientY),
          (r = r.matrixTransform(t.getScreenCTM().inverse())),
          [r.x, r.y]
        )
      }
      if (t.getBoundingClientRect) {
        var o = t.getBoundingClientRect()
        return [e.clientX - o.left - t.clientLeft, e.clientY - o.top - t.clientTop]
      }
    }
    return [e.pageX, e.pageY]
  }
  const Jg = { passive: !1 },
    uo = { capture: !0, passive: !1 }
  function Ms(e) {
    e.stopImmediatePropagation()
  }
  function Mr(e) {
    e.preventDefault(), e.stopImmediatePropagation()
  }
  function Al(e) {
    var t = e.document.documentElement,
      n = Ut(e).on('dragstart.drag', Mr, uo)
    'onselectstart' in t
      ? n.on('selectstart.drag', Mr, uo)
      : ((t.__noselect = t.style.MozUserSelect), (t.style.MozUserSelect = 'none'))
  }
  function Ll(e, t) {
    var n = e.document.documentElement,
      r = Ut(e).on('dragstart.drag', null)
    t &&
      (r.on('click.drag', Mr, uo),
      setTimeout(function () {
        r.on('click.drag', null)
      }, 0)),
      'onselectstart' in n
        ? r.on('selectstart.drag', null)
        : ((n.style.MozUserSelect = n.__noselect), delete n.__noselect)
  }
  const gi = (e) => () => e
  function Hs(
    e,
    {
      sourceEvent: t,
      subject: n,
      target: r,
      identifier: o,
      active: i,
      x: s,
      y: a,
      dx: l,
      dy: u,
      dispatch: c
    }
  ) {
    Object.defineProperties(this, {
      type: { value: e, enumerable: !0, configurable: !0 },
      sourceEvent: { value: t, enumerable: !0, configurable: !0 },
      subject: { value: n, enumerable: !0, configurable: !0 },
      target: { value: r, enumerable: !0, configurable: !0 },
      identifier: { value: o, enumerable: !0, configurable: !0 },
      active: { value: i, enumerable: !0, configurable: !0 },
      x: { value: s, enumerable: !0, configurable: !0 },
      y: { value: a, enumerable: !0, configurable: !0 },
      dx: { value: l, enumerable: !0, configurable: !0 },
      dy: { value: u, enumerable: !0, configurable: !0 },
      _: { value: c }
    })
  }
  Hs.prototype.on = function () {
    var e = this._.on.apply(this._, arguments)
    return e === this._ ? this : e
  }
  function Qg(e) {
    return !e.ctrlKey && !e.button
  }
  function eh() {
    return this.parentNode
  }
  function th(e, t) {
    return t ?? { x: e.x, y: e.y }
  }
  function nh() {
    return navigator.maxTouchPoints || 'ontouchstart' in this
  }
  function rh() {
    var e = Qg,
      t = eh,
      n = th,
      r = nh,
      o = {},
      i = ui('start', 'drag', 'end'),
      s = 0,
      a,
      l,
      u,
      c,
      f = 0
    function d(v) {
      v.on('mousedown.drag', g)
        .filter(r)
        .on('touchstart.drag', C)
        .on('touchmove.drag', $, Jg)
        .on('touchend.drag touchcancel.drag', m)
        .style('touch-action', 'none')
        .style('-webkit-tap-highlight-color', 'rgba(0,0,0,0)')
    }
    function g(v, b) {
      if (!(c || !e.call(this, v, b))) {
        var N = _(this, t.call(this, v, b), v, b, 'mouse')
        N &&
          (Ut(v.view).on('mousemove.drag', p, uo).on('mouseup.drag', x, uo),
          Al(v.view),
          Ms(v),
          (u = !1),
          (a = v.clientX),
          (l = v.clientY),
          N('start', v))
      }
    }
    function p(v) {
      if ((Mr(v), !u)) {
        var b = v.clientX - a,
          N = v.clientY - l
        u = b * b + N * N > f
      }
      o.mouse('drag', v)
    }
    function x(v) {
      Ut(v.view).on('mousemove.drag mouseup.drag', null), Ll(v.view, u), Mr(v), o.mouse('end', v)
    }
    function C(v, b) {
      if (e.call(this, v, b)) {
        var N = v.changedTouches,
          E = t.call(this, v, b),
          T = N.length,
          D,
          V
        for (D = 0; D < T; ++D)
          (V = _(this, E, v, b, N[D].identifier, N[D])) && (Ms(v), V('start', v, N[D]))
      }
    }
    function $(v) {
      var b = v.changedTouches,
        N = b.length,
        E,
        T
      for (E = 0; E < N; ++E) (T = o[b[E].identifier]) && (Mr(v), T('drag', v, b[E]))
    }
    function m(v) {
      var b = v.changedTouches,
        N = b.length,
        E,
        T
      for (
        c && clearTimeout(c),
          c = setTimeout(function () {
            c = null
          }, 500),
          E = 0;
        E < N;
        ++E
      )
        (T = o[b[E].identifier]) && (Ms(v), T('end', v, b[E]))
    }
    function _(v, b, N, E, T, D) {
      var V = i.copy(),
        A = on(D || N, b),
        O,
        R,
        S
      if (
        (S = n.call(
          v,
          new Hs('beforestart', {
            sourceEvent: N,
            target: d,
            identifier: T,
            active: s,
            x: A[0],
            y: A[1],
            dx: 0,
            dy: 0,
            dispatch: V
          }),
          E
        )) != null
      )
        return (
          (O = S.x - A[0] || 0),
          (R = S.y - A[1] || 0),
          function M(k, P, H) {
            var I = A,
              B
            switch (k) {
              case 'start':
                ;(o[T] = M), (B = s++)
                break
              case 'end':
                delete o[T], --s
              case 'drag':
                ;(A = on(H || P, b)), (B = s)
                break
            }
            V.call(
              k,
              v,
              new Hs(k, {
                sourceEvent: P,
                subject: S,
                target: d,
                identifier: T,
                active: B,
                x: A[0] + O,
                y: A[1] + R,
                dx: A[0] - I[0],
                dy: A[1] - I[1],
                dispatch: V
              }),
              E
            )
          }
        )
    }
    return (
      (d.filter = function (v) {
        return arguments.length ? ((e = typeof v == 'function' ? v : gi(!!v)), d) : e
      }),
      (d.container = function (v) {
        return arguments.length ? ((t = typeof v == 'function' ? v : gi(v)), d) : t
      }),
      (d.subject = function (v) {
        return arguments.length ? ((n = typeof v == 'function' ? v : gi(v)), d) : n
      }),
      (d.touchable = function (v) {
        return arguments.length ? ((r = typeof v == 'function' ? v : gi(!!v)), d) : r
      }),
      (d.on = function () {
        var v = i.on.apply(i, arguments)
        return v === i ? d : v
      }),
      (d.clickDistance = function (v) {
        return arguments.length ? ((f = (v = +v) * v), d) : Math.sqrt(f)
      }),
      d
    )
  }
  function Vs(e, t, n) {
    ;(e.prototype = t.prototype = n), (n.constructor = e)
  }
  function Ol(e, t) {
    var n = Object.create(e.prototype)
    for (var r in t) n[r] = t[r]
    return n
  }
  function co() {}
  var fo = 0.7,
    hi = 1 / fo,
    Hr = '\\s*([+-]?\\d+)\\s*',
    go = '\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*',
    _n = '\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*',
    oh = /^#([0-9a-f]{3,8})$/,
    ih = new RegExp(`^rgb\\(${Hr},${Hr},${Hr}\\)$`),
    sh = new RegExp(`^rgb\\(${_n},${_n},${_n}\\)$`),
    ah = new RegExp(`^rgba\\(${Hr},${Hr},${Hr},${go}\\)$`),
    lh = new RegExp(`^rgba\\(${_n},${_n},${_n},${go}\\)$`),
    uh = new RegExp(`^hsl\\(${go},${_n},${_n}\\)$`),
    ch = new RegExp(`^hsla\\(${go},${_n},${_n},${go}\\)$`),
    Il = {
      aliceblue: 15792383,
      antiquewhite: 16444375,
      aqua: 65535,
      aquamarine: 8388564,
      azure: 15794175,
      beige: 16119260,
      bisque: 16770244,
      black: 0,
      blanchedalmond: 16772045,
      blue: 255,
      blueviolet: 9055202,
      brown: 10824234,
      burlywood: 14596231,
      cadetblue: 6266528,
      chartreuse: 8388352,
      chocolate: 13789470,
      coral: 16744272,
      cornflowerblue: 6591981,
      cornsilk: 16775388,
      crimson: 14423100,
      cyan: 65535,
      darkblue: 139,
      darkcyan: 35723,
      darkgoldenrod: 12092939,
      darkgray: 11119017,
      darkgreen: 25600,
      darkgrey: 11119017,
      darkkhaki: 12433259,
      darkmagenta: 9109643,
      darkolivegreen: 5597999,
      darkorange: 16747520,
      darkorchid: 10040012,
      darkred: 9109504,
      darksalmon: 15308410,
      darkseagreen: 9419919,
      darkslateblue: 4734347,
      darkslategray: 3100495,
      darkslategrey: 3100495,
      darkturquoise: 52945,
      darkviolet: 9699539,
      deeppink: 16716947,
      deepskyblue: 49151,
      dimgray: 6908265,
      dimgrey: 6908265,
      dodgerblue: 2003199,
      firebrick: 11674146,
      floralwhite: 16775920,
      forestgreen: 2263842,
      fuchsia: 16711935,
      gainsboro: 14474460,
      ghostwhite: 16316671,
      gold: 16766720,
      goldenrod: 14329120,
      gray: 8421504,
      green: 32768,
      greenyellow: 11403055,
      grey: 8421504,
      honeydew: 15794160,
      hotpink: 16738740,
      indianred: 13458524,
      indigo: 4915330,
      ivory: 16777200,
      khaki: 15787660,
      lavender: 15132410,
      lavenderblush: 16773365,
      lawngreen: 8190976,
      lemonchiffon: 16775885,
      lightblue: 11393254,
      lightcoral: 15761536,
      lightcyan: 14745599,
      lightgoldenrodyellow: 16448210,
      lightgray: 13882323,
      lightgreen: 9498256,
      lightgrey: 13882323,
      lightpink: 16758465,
      lightsalmon: 16752762,
      lightseagreen: 2142890,
      lightskyblue: 8900346,
      lightslategray: 7833753,
      lightslategrey: 7833753,
      lightsteelblue: 11584734,
      lightyellow: 16777184,
      lime: 65280,
      limegreen: 3329330,
      linen: 16445670,
      magenta: 16711935,
      maroon: 8388608,
      mediumaquamarine: 6737322,
      mediumblue: 205,
      mediumorchid: 12211667,
      mediumpurple: 9662683,
      mediumseagreen: 3978097,
      mediumslateblue: 8087790,
      mediumspringgreen: 64154,
      mediumturquoise: 4772300,
      mediumvioletred: 13047173,
      midnightblue: 1644912,
      mintcream: 16121850,
      mistyrose: 16770273,
      moccasin: 16770229,
      navajowhite: 16768685,
      navy: 128,
      oldlace: 16643558,
      olive: 8421376,
      olivedrab: 7048739,
      orange: 16753920,
      orangered: 16729344,
      orchid: 14315734,
      palegoldenrod: 15657130,
      palegreen: 10025880,
      paleturquoise: 11529966,
      palevioletred: 14381203,
      papayawhip: 16773077,
      peachpuff: 16767673,
      peru: 13468991,
      pink: 16761035,
      plum: 14524637,
      powderblue: 11591910,
      purple: 8388736,
      rebeccapurple: 6697881,
      red: 16711680,
      rosybrown: 12357519,
      royalblue: 4286945,
      saddlebrown: 9127187,
      salmon: 16416882,
      sandybrown: 16032864,
      seagreen: 3050327,
      seashell: 16774638,
      sienna: 10506797,
      silver: 12632256,
      skyblue: 8900331,
      slateblue: 6970061,
      slategray: 7372944,
      slategrey: 7372944,
      snow: 16775930,
      springgreen: 65407,
      steelblue: 4620980,
      tan: 13808780,
      teal: 32896,
      thistle: 14204888,
      tomato: 16737095,
      turquoise: 4251856,
      violet: 15631086,
      wheat: 16113331,
      white: 16777215,
      whitesmoke: 16119285,
      yellow: 16776960,
      yellowgreen: 10145074
    }
  Vs(co, ho, {
    copy(e) {
      return Object.assign(new this.constructor(), this, e)
    },
    displayable() {
      return this.rgb().displayable()
    },
    hex: zl,
    formatHex: zl,
    formatHex8: dh,
    formatHsl: fh,
    formatRgb: Rl,
    toString: Rl
  })
  function zl() {
    return this.rgb().formatHex()
  }
  function dh() {
    return this.rgb().formatHex8()
  }
  function fh() {
    return Fl(this).formatHsl()
  }
  function Rl() {
    return this.rgb().formatRgb()
  }
  function ho(e) {
    var t, n
    return (
      (e = (e + '').trim().toLowerCase()),
      (t = oh.exec(e))
        ? ((n = t[1].length),
          (t = parseInt(t[1], 16)),
          n === 6
            ? Bl(t)
            : n === 3
              ? new At(
                  ((t >> 8) & 15) | ((t >> 4) & 240),
                  ((t >> 4) & 15) | (t & 240),
                  ((t & 15) << 4) | (t & 15),
                  1
                )
              : n === 8
                ? vi((t >> 24) & 255, (t >> 16) & 255, (t >> 8) & 255, (t & 255) / 255)
                : n === 4
                  ? vi(
                      ((t >> 12) & 15) | ((t >> 8) & 240),
                      ((t >> 8) & 15) | ((t >> 4) & 240),
                      ((t >> 4) & 15) | (t & 240),
                      (((t & 15) << 4) | (t & 15)) / 255
                    )
                  : null)
        : (t = ih.exec(e))
          ? new At(t[1], t[2], t[3], 1)
          : (t = sh.exec(e))
            ? new At((t[1] * 255) / 100, (t[2] * 255) / 100, (t[3] * 255) / 100, 1)
            : (t = ah.exec(e))
              ? vi(t[1], t[2], t[3], t[4])
              : (t = lh.exec(e))
                ? vi((t[1] * 255) / 100, (t[2] * 255) / 100, (t[3] * 255) / 100, t[4])
                : (t = uh.exec(e))
                  ? Xl(t[1], t[2] / 100, t[3] / 100, 1)
                  : (t = ch.exec(e))
                    ? Xl(t[1], t[2] / 100, t[3] / 100, t[4])
                    : Il.hasOwnProperty(e)
                      ? Bl(Il[e])
                      : e === 'transparent'
                        ? new At(NaN, NaN, NaN, 0)
                        : null
    )
  }
  function Bl(e) {
    return new At((e >> 16) & 255, (e >> 8) & 255, e & 255, 1)
  }
  function vi(e, t, n, r) {
    return r <= 0 && (e = t = n = NaN), new At(e, t, n, r)
  }
  function gh(e) {
    return (
      e instanceof co || (e = ho(e)),
      e ? ((e = e.rgb()), new At(e.r, e.g, e.b, e.opacity)) : new At()
    )
  }
  function Ds(e, t, n, r) {
    return arguments.length === 1 ? gh(e) : new At(e, t, n, r ?? 1)
  }
  function At(e, t, n, r) {
    ;(this.r = +e), (this.g = +t), (this.b = +n), (this.opacity = +r)
  }
  Vs(
    At,
    Ds,
    Ol(co, {
      brighter(e) {
        return (
          (e = e == null ? hi : Math.pow(hi, e)),
          new At(this.r * e, this.g * e, this.b * e, this.opacity)
        )
      },
      darker(e) {
        return (
          (e = e == null ? fo : Math.pow(fo, e)),
          new At(this.r * e, this.g * e, this.b * e, this.opacity)
        )
      },
      rgb() {
        return this
      },
      clamp() {
        return new At(dr(this.r), dr(this.g), dr(this.b), pi(this.opacity))
      },
      displayable() {
        return (
          -0.5 <= this.r &&
          this.r < 255.5 &&
          -0.5 <= this.g &&
          this.g < 255.5 &&
          -0.5 <= this.b &&
          this.b < 255.5 &&
          0 <= this.opacity &&
          this.opacity <= 1
        )
      },
      hex: Yl,
      formatHex: Yl,
      formatHex8: hh,
      formatRgb: Zl,
      toString: Zl
    })
  )
  function Yl() {
    return `#${fr(this.r)}${fr(this.g)}${fr(this.b)}`
  }
  function hh() {
    return `#${fr(this.r)}${fr(this.g)}${fr(this.b)}${fr((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`
  }
  function Zl() {
    const e = pi(this.opacity)
    return `${e === 1 ? 'rgb(' : 'rgba('}${dr(this.r)}, ${dr(this.g)}, ${dr(this.b)}${e === 1 ? ')' : `, ${e})`}`
  }
  function pi(e) {
    return isNaN(e) ? 1 : Math.max(0, Math.min(1, e))
  }
  function dr(e) {
    return Math.max(0, Math.min(255, Math.round(e) || 0))
  }
  function fr(e) {
    return (e = dr(e)), (e < 16 ? '0' : '') + e.toString(16)
  }
  function Xl(e, t, n, r) {
    return (
      r <= 0 ? (e = t = n = NaN) : n <= 0 || n >= 1 ? (e = t = NaN) : t <= 0 && (e = NaN),
      new sn(e, t, n, r)
    )
  }
  function Fl(e) {
    if (e instanceof sn) return new sn(e.h, e.s, e.l, e.opacity)
    if ((e instanceof co || (e = ho(e)), !e)) return new sn()
    if (e instanceof sn) return e
    e = e.rgb()
    var t = e.r / 255,
      n = e.g / 255,
      r = e.b / 255,
      o = Math.min(t, n, r),
      i = Math.max(t, n, r),
      s = NaN,
      a = i - o,
      l = (i + o) / 2
    return (
      a
        ? (t === i
            ? (s = (n - r) / a + (n < r) * 6)
            : n === i
              ? (s = (r - t) / a + 2)
              : (s = (t - n) / a + 4),
          (a /= l < 0.5 ? i + o : 2 - i - o),
          (s *= 60))
        : (a = l > 0 && l < 1 ? 0 : s),
      new sn(s, a, l, e.opacity)
    )
  }
  function vh(e, t, n, r) {
    return arguments.length === 1 ? Fl(e) : new sn(e, t, n, r ?? 1)
  }
  function sn(e, t, n, r) {
    ;(this.h = +e), (this.s = +t), (this.l = +n), (this.opacity = +r)
  }
  Vs(
    sn,
    vh,
    Ol(co, {
      brighter(e) {
        return (
          (e = e == null ? hi : Math.pow(hi, e)), new sn(this.h, this.s, this.l * e, this.opacity)
        )
      },
      darker(e) {
        return (
          (e = e == null ? fo : Math.pow(fo, e)), new sn(this.h, this.s, this.l * e, this.opacity)
        )
      },
      rgb() {
        var e = (this.h % 360) + (this.h < 0) * 360,
          t = isNaN(e) || isNaN(this.s) ? 0 : this.s,
          n = this.l,
          r = n + (n < 0.5 ? n : 1 - n) * t,
          o = 2 * n - r
        return new At(
          As(e >= 240 ? e - 240 : e + 120, o, r),
          As(e, o, r),
          As(e < 120 ? e + 240 : e - 120, o, r),
          this.opacity
        )
      },
      clamp() {
        return new sn(Wl(this.h), mi(this.s), mi(this.l), pi(this.opacity))
      },
      displayable() {
        return (
          ((0 <= this.s && this.s <= 1) || isNaN(this.s)) &&
          0 <= this.l &&
          this.l <= 1 &&
          0 <= this.opacity &&
          this.opacity <= 1
        )
      },
      formatHsl() {
        const e = pi(this.opacity)
        return `${e === 1 ? 'hsl(' : 'hsla('}${Wl(this.h)}, ${mi(this.s) * 100}%, ${mi(this.l) * 100}%${e === 1 ? ')' : `, ${e})`}`
      }
    })
  )
  function Wl(e) {
    return (e = (e || 0) % 360), e < 0 ? e + 360 : e
  }
  function mi(e) {
    return Math.max(0, Math.min(1, e || 0))
  }
  function As(e, t, n) {
    return (
      (e < 60
        ? t + ((n - t) * e) / 60
        : e < 180
          ? n
          : e < 240
            ? t + ((n - t) * (240 - e)) / 60
            : t) * 255
    )
  }
  const Kl = (e) => () => e
  function ph(e, t) {
    return function (n) {
      return e + n * t
    }
  }
  function mh(e, t, n) {
    return (
      (e = Math.pow(e, n)),
      (t = Math.pow(t, n) - e),
      (n = 1 / n),
      function (r) {
        return Math.pow(e + r * t, n)
      }
    )
  }
  function yh(e) {
    return (e = +e) == 1
      ? ql
      : function (t, n) {
          return n - t ? mh(t, n, e) : Kl(isNaN(t) ? n : t)
        }
  }
  function ql(e, t) {
    var n = t - e
    return n ? ph(e, n) : Kl(isNaN(e) ? t : e)
  }
  const Gl = (function e(t) {
    var n = yh(t)
    function r(o, i) {
      var s = n((o = Ds(o)).r, (i = Ds(i)).r),
        a = n(o.g, i.g),
        l = n(o.b, i.b),
        u = ql(o.opacity, i.opacity)
      return function (c) {
        return (o.r = s(c)), (o.g = a(c)), (o.b = l(c)), (o.opacity = u(c)), o + ''
      }
    }
    return (r.gamma = e), r
  })(1)
  function jn(e, t) {
    return (
      (e = +e),
      (t = +t),
      function (n) {
        return e * (1 - n) + t * n
      }
    )
  }
  var Ls = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,
    Os = new RegExp(Ls.source, 'g')
  function wh(e) {
    return function () {
      return e
    }
  }
  function _h(e) {
    return function (t) {
      return e(t) + ''
    }
  }
  function xh(e, t) {
    var n = (Ls.lastIndex = Os.lastIndex = 0),
      r,
      o,
      i,
      s = -1,
      a = [],
      l = []
    for (e = e + '', t = t + ''; (r = Ls.exec(e)) && (o = Os.exec(t)); )
      (i = o.index) > n && ((i = t.slice(n, i)), a[s] ? (a[s] += i) : (a[++s] = i)),
        (r = r[0]) === (o = o[0])
          ? a[s]
            ? (a[s] += o)
            : (a[++s] = o)
          : ((a[++s] = null), l.push({ i: s, x: jn(r, o) })),
        (n = Os.lastIndex)
    return (
      n < t.length && ((i = t.slice(n)), a[s] ? (a[s] += i) : (a[++s] = i)),
      a.length < 2
        ? l[0]
          ? _h(l[0].x)
          : wh(t)
        : ((t = l.length),
          function (u) {
            for (var c = 0, f; c < t; ++c) a[(f = l[c]).i] = f.x(u)
            return a.join('')
          })
    )
  }
  var Ul = 180 / Math.PI,
    Is = { translateX: 0, translateY: 0, rotate: 0, skewX: 0, scaleX: 1, scaleY: 1 }
  function jl(e, t, n, r, o, i) {
    var s, a, l
    return (
      (s = Math.sqrt(e * e + t * t)) && ((e /= s), (t /= s)),
      (l = e * n + t * r) && ((n -= e * l), (r -= t * l)),
      (a = Math.sqrt(n * n + r * r)) && ((n /= a), (r /= a), (l /= a)),
      e * r < t * n && ((e = -e), (t = -t), (l = -l), (s = -s)),
      {
        translateX: o,
        translateY: i,
        rotate: Math.atan2(t, e) * Ul,
        skewX: Math.atan(l) * Ul,
        scaleX: s,
        scaleY: a
      }
    )
  }
  var yi
  function bh(e) {
    const t = new (typeof DOMMatrix == 'function' ? DOMMatrix : WebKitCSSMatrix)(e + '')
    return t.isIdentity ? Is : jl(t.a, t.b, t.c, t.d, t.e, t.f)
  }
  function Ch(e) {
    return e == null ||
      (yi || (yi = document.createElementNS('http://www.w3.org/2000/svg', 'g')),
      yi.setAttribute('transform', e),
      !(e = yi.transform.baseVal.consolidate()))
      ? Is
      : ((e = e.matrix), jl(e.a, e.b, e.c, e.d, e.e, e.f))
  }
  function Jl(e, t, n, r) {
    function o(u) {
      return u.length ? u.pop() + ' ' : ''
    }
    function i(u, c, f, d, g, p) {
      if (u !== f || c !== d) {
        var x = g.push('translate(', null, t, null, n)
        p.push({ i: x - 4, x: jn(u, f) }, { i: x - 2, x: jn(c, d) })
      } else (f || d) && g.push('translate(' + f + t + d + n)
    }
    function s(u, c, f, d) {
      u !== c
        ? (u - c > 180 ? (c += 360) : c - u > 180 && (u += 360),
          d.push({ i: f.push(o(f) + 'rotate(', null, r) - 2, x: jn(u, c) }))
        : c && f.push(o(f) + 'rotate(' + c + r)
    }
    function a(u, c, f, d) {
      u !== c
        ? d.push({ i: f.push(o(f) + 'skewX(', null, r) - 2, x: jn(u, c) })
        : c && f.push(o(f) + 'skewX(' + c + r)
    }
    function l(u, c, f, d, g, p) {
      if (u !== f || c !== d) {
        var x = g.push(o(g) + 'scale(', null, ',', null, ')')
        p.push({ i: x - 4, x: jn(u, f) }, { i: x - 2, x: jn(c, d) })
      } else (f !== 1 || d !== 1) && g.push(o(g) + 'scale(' + f + ',' + d + ')')
    }
    return function (u, c) {
      var f = [],
        d = []
      return (
        (u = e(u)),
        (c = e(c)),
        i(u.translateX, u.translateY, c.translateX, c.translateY, f, d),
        s(u.rotate, c.rotate, f, d),
        a(u.skewX, c.skewX, f, d),
        l(u.scaleX, u.scaleY, c.scaleX, c.scaleY, f, d),
        (u = c = null),
        function (g) {
          for (var p = -1, x = d.length, C; ++p < x; ) f[(C = d[p]).i] = C.x(g)
          return f.join('')
        }
      )
    }
  }
  var kh = Jl(bh, 'px, ', 'px)', 'deg)'),
    $h = Jl(Ch, ', ', ')', ')'),
    Eh = 1e-12
  function Ql(e) {
    return ((e = Math.exp(e)) + 1 / e) / 2
  }
  function Sh(e) {
    return ((e = Math.exp(e)) - 1 / e) / 2
  }
  function Ph(e) {
    return ((e = Math.exp(2 * e)) - 1) / (e + 1)
  }
  const Nh = (function e(t, n, r) {
    function o(i, s) {
      var a = i[0],
        l = i[1],
        u = i[2],
        c = s[0],
        f = s[1],
        d = s[2],
        g = c - a,
        p = f - l,
        x = g * g + p * p,
        C,
        $
      if (x < Eh)
        ($ = Math.log(d / u) / t),
          (C = function (E) {
            return [a + E * g, l + E * p, u * Math.exp(t * E * $)]
          })
      else {
        var m = Math.sqrt(x),
          _ = (d * d - u * u + r * x) / (2 * u * n * m),
          v = (d * d - u * u - r * x) / (2 * d * n * m),
          b = Math.log(Math.sqrt(_ * _ + 1) - _),
          N = Math.log(Math.sqrt(v * v + 1) - v)
        ;($ = (N - b) / t),
          (C = function (E) {
            var T = E * $,
              D = Ql(b),
              V = (u / (n * m)) * (D * Ph(t * T + b) - Sh(b))
            return [a + V * g, l + V * p, (u * D) / Ql(t * T + b)]
          })
      }
      return (C.duration = ($ * 1e3 * t) / Math.SQRT2), C
    }
    return (
      (o.rho = function (i) {
        var s = Math.max(0.001, +i),
          a = s * s,
          l = a * a
        return e(s, a, l)
      }),
      o
    )
  })(Math.SQRT2, 2, 4)
  var Vr = 0,
    vo = 0,
    po = 0,
    eu = 1e3,
    wi,
    mo,
    _i = 0,
    gr = 0,
    xi = 0,
    yo = typeof performance == 'object' && performance.now ? performance : Date,
    tu =
      typeof window == 'object' && window.requestAnimationFrame
        ? window.requestAnimationFrame.bind(window)
        : function (e) {
            setTimeout(e, 17)
          }
  function zs() {
    return gr || (tu(Th), (gr = yo.now() + xi))
  }
  function Th() {
    gr = 0
  }
  function bi() {
    this._call = this._time = this._next = null
  }
  bi.prototype = nu.prototype = {
    constructor: bi,
    restart: function (e, t, n) {
      if (typeof e != 'function') throw new TypeError('callback is not a function')
      ;(n = (n == null ? zs() : +n) + (t == null ? 0 : +t)),
        !this._next && mo !== this && (mo ? (mo._next = this) : (wi = this), (mo = this)),
        (this._call = e),
        (this._time = n),
        Rs()
    },
    stop: function () {
      this._call && ((this._call = null), (this._time = 1 / 0), Rs())
    }
  }
  function nu(e, t, n) {
    var r = new bi()
    return r.restart(e, t, n), r
  }
  function Mh() {
    zs(), ++Vr
    for (var e = wi, t; e; ) (t = gr - e._time) >= 0 && e._call.call(void 0, t), (e = e._next)
    --Vr
  }
  function ru() {
    ;(gr = (_i = yo.now()) + xi), (Vr = vo = 0)
    try {
      Mh()
    } finally {
      ;(Vr = 0), Vh(), (gr = 0)
    }
  }
  function Hh() {
    var e = yo.now(),
      t = e - _i
    t > eu && ((xi -= t), (_i = e))
  }
  function Vh() {
    for (var e, t = wi, n, r = 1 / 0; t; )
      t._call
        ? (r > t._time && (r = t._time), (e = t), (t = t._next))
        : ((n = t._next), (t._next = null), (t = e ? (e._next = n) : (wi = n)))
    ;(mo = e), Rs(r)
  }
  function Rs(e) {
    if (!Vr) {
      vo && (vo = clearTimeout(vo))
      var t = e - gr
      t > 24
        ? (e < 1 / 0 && (vo = setTimeout(ru, e - yo.now() - xi)), po && (po = clearInterval(po)))
        : (po || ((_i = yo.now()), (po = setInterval(Hh, eu))), (Vr = 1), tu(ru))
    }
  }
  function ou(e, t, n) {
    var r = new bi()
    return (
      (t = t == null ? 0 : +t),
      r.restart(
        (o) => {
          r.stop(), e(o + t)
        },
        t,
        n
      ),
      r
    )
  }
  var Dh = ui('start', 'end', 'cancel', 'interrupt'),
    Ah = [],
    iu = 0,
    su = 1,
    Bs = 2,
    Ci = 3,
    au = 4,
    Ys = 5,
    ki = 6
  function $i(e, t, n, r, o, i) {
    var s = e.__transition
    if (!s) e.__transition = {}
    else if (n in s) return
    Lh(e, n, {
      name: t,
      index: r,
      group: o,
      on: Dh,
      tween: Ah,
      time: i.time,
      delay: i.delay,
      duration: i.duration,
      ease: i.ease,
      timer: null,
      state: iu
    })
  }
  function Zs(e, t) {
    var n = an(e, t)
    if (n.state > iu) throw new Error('too late; already scheduled')
    return n
  }
  function xn(e, t) {
    var n = an(e, t)
    if (n.state > Ci) throw new Error('too late; already running')
    return n
  }
  function an(e, t) {
    var n = e.__transition
    if (!n || !(n = n[t])) throw new Error('transition not found')
    return n
  }
  function Lh(e, t, n) {
    var r = e.__transition,
      o
    ;(r[t] = n), (n.timer = nu(i, 0, n.time))
    function i(u) {
      ;(n.state = su), n.timer.restart(s, n.delay, n.time), n.delay <= u && s(u - n.delay)
    }
    function s(u) {
      var c, f, d, g
      if (n.state !== su) return l()
      for (c in r)
        if (((g = r[c]), g.name === n.name)) {
          if (g.state === Ci) return ou(s)
          g.state === au
            ? ((g.state = ki),
              g.timer.stop(),
              g.on.call('interrupt', e, e.__data__, g.index, g.group),
              delete r[c])
            : +c < t &&
              ((g.state = ki),
              g.timer.stop(),
              g.on.call('cancel', e, e.__data__, g.index, g.group),
              delete r[c])
        }
      if (
        (ou(function () {
          n.state === Ci && ((n.state = au), n.timer.restart(a, n.delay, n.time), a(u))
        }),
        (n.state = Bs),
        n.on.call('start', e, e.__data__, n.index, n.group),
        n.state === Bs)
      ) {
        for (n.state = Ci, o = new Array((d = n.tween.length)), c = 0, f = -1; c < d; ++c)
          (g = n.tween[c].value.call(e, e.__data__, n.index, n.group)) && (o[++f] = g)
        o.length = f + 1
      }
    }
    function a(u) {
      for (
        var c =
            u < n.duration
              ? n.ease.call(null, u / n.duration)
              : (n.timer.restart(l), (n.state = Ys), 1),
          f = -1,
          d = o.length;
        ++f < d;

      )
        o[f].call(e, c)
      n.state === Ys && (n.on.call('end', e, e.__data__, n.index, n.group), l())
    }
    function l() {
      ;(n.state = ki), n.timer.stop(), delete r[t]
      for (var u in r) return
      delete e.__transition
    }
  }
  function Ei(e, t) {
    var n = e.__transition,
      r,
      o,
      i = !0,
      s
    if (n) {
      t = t == null ? null : t + ''
      for (s in n) {
        if ((r = n[s]).name !== t) {
          i = !1
          continue
        }
        ;(o = r.state > Bs && r.state < Ys),
          (r.state = ki),
          r.timer.stop(),
          r.on.call(o ? 'interrupt' : 'cancel', e, e.__data__, r.index, r.group),
          delete n[s]
      }
      i && delete e.__transition
    }
  }
  function Oh(e) {
    return this.each(function () {
      Ei(this, e)
    })
  }
  function Ih(e, t) {
    var n, r
    return function () {
      var o = xn(this, e),
        i = o.tween
      if (i !== n) {
        r = n = i
        for (var s = 0, a = r.length; s < a; ++s)
          if (r[s].name === t) {
            ;(r = r.slice()), r.splice(s, 1)
            break
          }
      }
      o.tween = r
    }
  }
  function zh(e, t, n) {
    var r, o
    if (typeof n != 'function') throw new Error()
    return function () {
      var i = xn(this, e),
        s = i.tween
      if (s !== r) {
        o = (r = s).slice()
        for (var a = { name: t, value: n }, l = 0, u = o.length; l < u; ++l)
          if (o[l].name === t) {
            o[l] = a
            break
          }
        l === u && o.push(a)
      }
      i.tween = o
    }
  }
  function Rh(e, t) {
    var n = this._id
    if (((e += ''), arguments.length < 2)) {
      for (var r = an(this.node(), n).tween, o = 0, i = r.length, s; o < i; ++o)
        if ((s = r[o]).name === e) return s.value
      return null
    }
    return this.each((t == null ? Ih : zh)(n, e, t))
  }
  function Xs(e, t, n) {
    var r = e._id
    return (
      e.each(function () {
        var o = xn(this, r)
        ;(o.value || (o.value = {}))[t] = n.apply(this, arguments)
      }),
      function (o) {
        return an(o, r).value[t]
      }
    )
  }
  function lu(e, t) {
    var n
    return (typeof t == 'number' ? jn : t instanceof ho ? Gl : (n = ho(t)) ? ((t = n), Gl) : xh)(
      e,
      t
    )
  }
  function Bh(e) {
    return function () {
      this.removeAttribute(e)
    }
  }
  function Yh(e) {
    return function () {
      this.removeAttributeNS(e.space, e.local)
    }
  }
  function Zh(e, t, n) {
    var r,
      o = n + '',
      i
    return function () {
      var s = this.getAttribute(e)
      return s === o ? null : s === r ? i : (i = t((r = s), n))
    }
  }
  function Xh(e, t, n) {
    var r,
      o = n + '',
      i
    return function () {
      var s = this.getAttributeNS(e.space, e.local)
      return s === o ? null : s === r ? i : (i = t((r = s), n))
    }
  }
  function Fh(e, t, n) {
    var r, o, i
    return function () {
      var s,
        a = n(this),
        l
      return a == null
        ? void this.removeAttribute(e)
        : ((s = this.getAttribute(e)),
          (l = a + ''),
          s === l ? null : s === r && l === o ? i : ((o = l), (i = t((r = s), a))))
    }
  }
  function Wh(e, t, n) {
    var r, o, i
    return function () {
      var s,
        a = n(this),
        l
      return a == null
        ? void this.removeAttributeNS(e.space, e.local)
        : ((s = this.getAttributeNS(e.space, e.local)),
          (l = a + ''),
          s === l ? null : s === r && l === o ? i : ((o = l), (i = t((r = s), a))))
    }
  }
  function Kh(e, t) {
    var n = di(e),
      r = n === 'transform' ? $h : lu
    return this.attrTween(
      e,
      typeof t == 'function'
        ? (n.local ? Wh : Fh)(n, r, Xs(this, 'attr.' + e, t))
        : t == null
          ? (n.local ? Yh : Bh)(n)
          : (n.local ? Xh : Zh)(n, r, t)
    )
  }
  function qh(e, t) {
    return function (n) {
      this.setAttribute(e, t.call(this, n))
    }
  }
  function Gh(e, t) {
    return function (n) {
      this.setAttributeNS(e.space, e.local, t.call(this, n))
    }
  }
  function Uh(e, t) {
    var n, r
    function o() {
      var i = t.apply(this, arguments)
      return i !== r && (n = (r = i) && Gh(e, i)), n
    }
    return (o._value = t), o
  }
  function jh(e, t) {
    var n, r
    function o() {
      var i = t.apply(this, arguments)
      return i !== r && (n = (r = i) && qh(e, i)), n
    }
    return (o._value = t), o
  }
  function Jh(e, t) {
    var n = 'attr.' + e
    if (arguments.length < 2) return (n = this.tween(n)) && n._value
    if (t == null) return this.tween(n, null)
    if (typeof t != 'function') throw new Error()
    var r = di(e)
    return this.tween(n, (r.local ? Uh : jh)(r, t))
  }
  function Qh(e, t) {
    return function () {
      Zs(this, e).delay = +t.apply(this, arguments)
    }
  }
  function ev(e, t) {
    return (
      (t = +t),
      function () {
        Zs(this, e).delay = t
      }
    )
  }
  function tv(e) {
    var t = this._id
    return arguments.length
      ? this.each((typeof e == 'function' ? Qh : ev)(t, e))
      : an(this.node(), t).delay
  }
  function nv(e, t) {
    return function () {
      xn(this, e).duration = +t.apply(this, arguments)
    }
  }
  function rv(e, t) {
    return (
      (t = +t),
      function () {
        xn(this, e).duration = t
      }
    )
  }
  function ov(e) {
    var t = this._id
    return arguments.length
      ? this.each((typeof e == 'function' ? nv : rv)(t, e))
      : an(this.node(), t).duration
  }
  function iv(e, t) {
    if (typeof t != 'function') throw new Error()
    return function () {
      xn(this, e).ease = t
    }
  }
  function sv(e) {
    var t = this._id
    return arguments.length ? this.each(iv(t, e)) : an(this.node(), t).ease
  }
  function av(e, t) {
    return function () {
      var n = t.apply(this, arguments)
      if (typeof n != 'function') throw new Error()
      xn(this, e).ease = n
    }
  }
  function lv(e) {
    if (typeof e != 'function') throw new Error()
    return this.each(av(this._id, e))
  }
  function uv(e) {
    typeof e != 'function' && (e = $l(e))
    for (var t = this._groups, n = t.length, r = new Array(n), o = 0; o < n; ++o)
      for (var i = t[o], s = i.length, a = (r[o] = []), l, u = 0; u < s; ++u)
        (l = i[u]) && e.call(l, l.__data__, u, i) && a.push(l)
    return new Ln(r, this._parents, this._name, this._id)
  }
  function cv(e) {
    if (e._id !== this._id) throw new Error()
    for (
      var t = this._groups,
        n = e._groups,
        r = t.length,
        o = n.length,
        i = Math.min(r, o),
        s = new Array(r),
        a = 0;
      a < i;
      ++a
    )
      for (var l = t[a], u = n[a], c = l.length, f = (s[a] = new Array(c)), d, g = 0; g < c; ++g)
        (d = l[g] || u[g]) && (f[g] = d)
    for (; a < r; ++a) s[a] = t[a]
    return new Ln(s, this._parents, this._name, this._id)
  }
  function dv(e) {
    return (e + '')
      .trim()
      .split(/^|\s+/)
      .every(function (t) {
        var n = t.indexOf('.')
        return n >= 0 && (t = t.slice(0, n)), !t || t === 'start'
      })
  }
  function fv(e, t, n) {
    var r,
      o,
      i = dv(t) ? Zs : xn
    return function () {
      var s = i(this, e),
        a = s.on
      a !== r && (o = (r = a).copy()).on(t, n), (s.on = o)
    }
  }
  function gv(e, t) {
    var n = this._id
    return arguments.length < 2 ? an(this.node(), n).on.on(e) : this.each(fv(n, e, t))
  }
  function hv(e) {
    return function () {
      var t = this.parentNode
      for (var n in this.__transition) if (+n !== e) return
      t && t.removeChild(this)
    }
  }
  function vv() {
    return this.on('end.remove', hv(this._id))
  }
  function pv(e) {
    var t = this._name,
      n = this._id
    typeof e != 'function' && (e = Ns(e))
    for (var r = this._groups, o = r.length, i = new Array(o), s = 0; s < o; ++s)
      for (var a = r[s], l = a.length, u = (i[s] = new Array(l)), c, f, d = 0; d < l; ++d)
        (c = a[d]) &&
          (f = e.call(c, c.__data__, d, a)) &&
          ('__data__' in c && (f.__data__ = c.__data__), (u[d] = f), $i(u[d], t, n, d, u, an(c, n)))
    return new Ln(i, this._parents, t, n)
  }
  function mv(e) {
    var t = this._name,
      n = this._id
    typeof e != 'function' && (e = kl(e))
    for (var r = this._groups, o = r.length, i = [], s = [], a = 0; a < o; ++a)
      for (var l = r[a], u = l.length, c, f = 0; f < u; ++f)
        if ((c = l[f])) {
          for (
            var d = e.call(c, c.__data__, f, l), g, p = an(c, n), x = 0, C = d.length;
            x < C;
            ++x
          )
            (g = d[x]) && $i(g, t, n, x, d, p)
          i.push(d), s.push(c)
        }
    return new Ln(i, s, t, n)
  }
  var yv = lo.prototype.constructor
  function wv() {
    return new yv(this._groups, this._parents)
  }
  function _v(e, t) {
    var n, r, o
    return function () {
      var i = Tr(this, e),
        s = (this.style.removeProperty(e), Tr(this, e))
      return i === s ? null : i === n && s === r ? o : (o = t((n = i), (r = s)))
    }
  }
  function uu(e) {
    return function () {
      this.style.removeProperty(e)
    }
  }
  function xv(e, t, n) {
    var r,
      o = n + '',
      i
    return function () {
      var s = Tr(this, e)
      return s === o ? null : s === r ? i : (i = t((r = s), n))
    }
  }
  function bv(e, t, n) {
    var r, o, i
    return function () {
      var s = Tr(this, e),
        a = n(this),
        l = a + ''
      return (
        a == null && (l = a = (this.style.removeProperty(e), Tr(this, e))),
        s === l ? null : s === r && l === o ? i : ((o = l), (i = t((r = s), a)))
      )
    }
  }
  function Cv(e, t) {
    var n,
      r,
      o,
      i = 'style.' + t,
      s = 'end.' + i,
      a
    return function () {
      var l = xn(this, e),
        u = l.on,
        c = l.value[i] == null ? a || (a = uu(t)) : void 0
      ;(u !== n || o !== c) && (r = (n = u).copy()).on(s, (o = c)), (l.on = r)
    }
  }
  function kv(e, t, n) {
    var r = (e += '') == 'transform' ? kh : lu
    return t == null
      ? this.styleTween(e, _v(e, r)).on('end.style.' + e, uu(e))
      : typeof t == 'function'
        ? this.styleTween(e, bv(e, r, Xs(this, 'style.' + e, t))).each(Cv(this._id, e))
        : this.styleTween(e, xv(e, r, t), n).on('end.style.' + e, null)
  }
  function $v(e, t, n) {
    return function (r) {
      this.style.setProperty(e, t.call(this, r), n)
    }
  }
  function Ev(e, t, n) {
    var r, o
    function i() {
      var s = t.apply(this, arguments)
      return s !== o && (r = (o = s) && $v(e, s, n)), r
    }
    return (i._value = t), i
  }
  function Sv(e, t, n) {
    var r = 'style.' + (e += '')
    if (arguments.length < 2) return (r = this.tween(r)) && r._value
    if (t == null) return this.tween(r, null)
    if (typeof t != 'function') throw new Error()
    return this.tween(r, Ev(e, t, n ?? ''))
  }
  function Pv(e) {
    return function () {
      this.textContent = e
    }
  }
  function Nv(e) {
    return function () {
      var t = e(this)
      this.textContent = t ?? ''
    }
  }
  function Tv(e) {
    return this.tween(
      'text',
      typeof e == 'function' ? Nv(Xs(this, 'text', e)) : Pv(e == null ? '' : e + '')
    )
  }
  function Mv(e) {
    return function (t) {
      this.textContent = e.call(this, t)
    }
  }
  function Hv(e) {
    var t, n
    function r() {
      var o = e.apply(this, arguments)
      return o !== n && (t = (n = o) && Mv(o)), t
    }
    return (r._value = e), r
  }
  function Vv(e) {
    var t = 'text'
    if (arguments.length < 1) return (t = this.tween(t)) && t._value
    if (e == null) return this.tween(t, null)
    if (typeof e != 'function') throw new Error()
    return this.tween(t, Hv(e))
  }
  function Dv() {
    for (
      var e = this._name, t = this._id, n = cu(), r = this._groups, o = r.length, i = 0;
      i < o;
      ++i
    )
      for (var s = r[i], a = s.length, l, u = 0; u < a; ++u)
        if ((l = s[u])) {
          var c = an(l, t)
          $i(l, e, n, u, s, {
            time: c.time + c.delay + c.duration,
            delay: 0,
            duration: c.duration,
            ease: c.ease
          })
        }
    return new Ln(r, this._parents, e, n)
  }
  function Av() {
    var e,
      t,
      n = this,
      r = n._id,
      o = n.size()
    return new Promise(function (i, s) {
      var a = { value: s },
        l = {
          value: function () {
            --o === 0 && i()
          }
        }
      n.each(function () {
        var u = xn(this, r),
          c = u.on
        c !== e &&
          ((t = (e = c).copy()), t._.cancel.push(a), t._.interrupt.push(a), t._.end.push(l)),
          (u.on = t)
      }),
        o === 0 && i()
    })
  }
  var Lv = 0
  function Ln(e, t, n, r) {
    ;(this._groups = e), (this._parents = t), (this._name = n), (this._id = r)
  }
  function cu() {
    return ++Lv
  }
  var On = lo.prototype
  Ln.prototype = {
    constructor: Ln,
    select: pv,
    selectAll: mv,
    selectChild: On.selectChild,
    selectChildren: On.selectChildren,
    filter: uv,
    merge: cv,
    selection: wv,
    transition: Dv,
    call: On.call,
    nodes: On.nodes,
    node: On.node,
    size: On.size,
    empty: On.empty,
    each: On.each,
    on: gv,
    attr: Kh,
    attrTween: Jh,
    style: kv,
    styleTween: Sv,
    text: Tv,
    textTween: Vv,
    remove: vv,
    tween: Rh,
    delay: tv,
    duration: ov,
    ease: sv,
    easeVarying: lv,
    end: Av,
    [Symbol.iterator]: On[Symbol.iterator]
  }
  function Ov(e) {
    return ((e *= 2) <= 1 ? e * e * e : (e -= 2) * e * e + 2) / 2
  }
  var Iv = { time: null, delay: 0, duration: 250, ease: Ov }
  function zv(e, t) {
    for (var n; !(n = e.__transition) || !(n = n[t]); )
      if (!(e = e.parentNode)) throw new Error(`transition ${t} not found`)
    return n
  }
  function Rv(e) {
    var t, n
    e instanceof Ln
      ? ((t = e._id), (e = e._name))
      : ((t = cu()), ((n = Iv).time = zs()), (e = e == null ? null : e + ''))
    for (var r = this._groups, o = r.length, i = 0; i < o; ++i)
      for (var s = r[i], a = s.length, l, u = 0; u < a; ++u)
        (l = s[u]) && $i(l, e, t, u, s, n || zv(l, t))
    return new Ln(r, this._parents, e, t)
  }
  ;(lo.prototype.interrupt = Oh), (lo.prototype.transition = Rv)
  const Si = (e) => () => e
  function Bv(e, { sourceEvent: t, target: n, transform: r, dispatch: o }) {
    Object.defineProperties(this, {
      type: { value: e, enumerable: !0, configurable: !0 },
      sourceEvent: { value: t, enumerable: !0, configurable: !0 },
      target: { value: n, enumerable: !0, configurable: !0 },
      transform: { value: r, enumerable: !0, configurable: !0 },
      _: { value: o }
    })
  }
  function In(e, t, n) {
    ;(this.k = e), (this.x = t), (this.y = n)
  }
  In.prototype = {
    constructor: In,
    scale: function (e) {
      return e === 1 ? this : new In(this.k * e, this.x, this.y)
    },
    translate: function (e, t) {
      return (e === 0) & (t === 0) ? this : new In(this.k, this.x + this.k * e, this.y + this.k * t)
    },
    apply: function (e) {
      return [e[0] * this.k + this.x, e[1] * this.k + this.y]
    },
    applyX: function (e) {
      return e * this.k + this.x
    },
    applyY: function (e) {
      return e * this.k + this.y
    },
    invert: function (e) {
      return [(e[0] - this.x) / this.k, (e[1] - this.y) / this.k]
    },
    invertX: function (e) {
      return (e - this.x) / this.k
    },
    invertY: function (e) {
      return (e - this.y) / this.k
    },
    rescaleX: function (e) {
      return e.copy().domain(e.range().map(this.invertX, this).map(e.invert, e))
    },
    rescaleY: function (e) {
      return e.copy().domain(e.range().map(this.invertY, this).map(e.invert, e))
    },
    toString: function () {
      return 'translate(' + this.x + ',' + this.y + ') scale(' + this.k + ')'
    }
  }
  var Pi = new In(1, 0, 0)
  du.prototype = In.prototype
  function du(e) {
    for (; !e.__zoom; ) if (!(e = e.parentNode)) return Pi
    return e.__zoom
  }
  function Fs(e) {
    e.stopImmediatePropagation()
  }
  function wo(e) {
    e.preventDefault(), e.stopImmediatePropagation()
  }
  function Yv(e) {
    return (!e.ctrlKey || e.type === 'wheel') && !e.button
  }
  function Zv() {
    var e = this
    return e instanceof SVGElement
      ? ((e = e.ownerSVGElement || e),
        e.hasAttribute('viewBox')
          ? ((e = e.viewBox.baseVal),
            [
              [e.x, e.y],
              [e.x + e.width, e.y + e.height]
            ])
          : [
              [0, 0],
              [e.width.baseVal.value, e.height.baseVal.value]
            ])
      : [
          [0, 0],
          [e.clientWidth, e.clientHeight]
        ]
  }
  function fu() {
    return this.__zoom || Pi
  }
  function Xv(e) {
    return -e.deltaY * (e.deltaMode === 1 ? 0.05 : e.deltaMode ? 1 : 0.002) * (e.ctrlKey ? 10 : 1)
  }
  function Fv() {
    return navigator.maxTouchPoints || 'ontouchstart' in this
  }
  function Wv(e, t, n) {
    var r = e.invertX(t[0][0]) - n[0][0],
      o = e.invertX(t[1][0]) - n[1][0],
      i = e.invertY(t[0][1]) - n[0][1],
      s = e.invertY(t[1][1]) - n[1][1]
    return e.translate(
      o > r ? (r + o) / 2 : Math.min(0, r) || Math.max(0, o),
      s > i ? (i + s) / 2 : Math.min(0, i) || Math.max(0, s)
    )
  }
  function gu() {
    var e = Yv,
      t = Zv,
      n = Wv,
      r = Xv,
      o = Fv,
      i = [0, 1 / 0],
      s = [
        [-1 / 0, -1 / 0],
        [1 / 0, 1 / 0]
      ],
      a = 250,
      l = Nh,
      u = ui('start', 'zoom', 'end'),
      c,
      f,
      d,
      g = 500,
      p = 150,
      x = 0,
      C = 10
    function $(S) {
      S.property('__zoom', fu)
        .on('wheel.zoom', T, { passive: !1 })
        .on('mousedown.zoom', D)
        .on('dblclick.zoom', V)
        .filter(o)
        .on('touchstart.zoom', A)
        .on('touchmove.zoom', O)
        .on('touchend.zoom touchcancel.zoom', R)
        .style('-webkit-tap-highlight-color', 'rgba(0,0,0,0)')
    }
    ;($.transform = function (S, M, k, P) {
      var H = S.selection ? S.selection() : S
      H.property('__zoom', fu),
        S !== H
          ? b(S, M, k, P)
          : H.interrupt().each(function () {
              N(this, arguments)
                .event(P)
                .start()
                .zoom(null, typeof M == 'function' ? M.apply(this, arguments) : M)
                .end()
            })
    }),
      ($.scaleBy = function (S, M, k, P) {
        $.scaleTo(
          S,
          function () {
            var H = this.__zoom.k,
              I = typeof M == 'function' ? M.apply(this, arguments) : M
            return H * I
          },
          k,
          P
        )
      }),
      ($.scaleTo = function (S, M, k, P) {
        $.transform(
          S,
          function () {
            var H = t.apply(this, arguments),
              I = this.__zoom,
              B = k == null ? v(H) : typeof k == 'function' ? k.apply(this, arguments) : k,
              F = I.invert(B),
              K = typeof M == 'function' ? M.apply(this, arguments) : M
            return n(_(m(I, K), B, F), H, s)
          },
          k,
          P
        )
      }),
      ($.translateBy = function (S, M, k, P) {
        $.transform(
          S,
          function () {
            return n(
              this.__zoom.translate(
                typeof M == 'function' ? M.apply(this, arguments) : M,
                typeof k == 'function' ? k.apply(this, arguments) : k
              ),
              t.apply(this, arguments),
              s
            )
          },
          null,
          P
        )
      }),
      ($.translateTo = function (S, M, k, P, H) {
        $.transform(
          S,
          function () {
            var I = t.apply(this, arguments),
              B = this.__zoom,
              F = P == null ? v(I) : typeof P == 'function' ? P.apply(this, arguments) : P
            return n(
              Pi.translate(F[0], F[1])
                .scale(B.k)
                .translate(
                  typeof M == 'function' ? -M.apply(this, arguments) : -M,
                  typeof k == 'function' ? -k.apply(this, arguments) : -k
                ),
              I,
              s
            )
          },
          P,
          H
        )
      })
    function m(S, M) {
      return (M = Math.max(i[0], Math.min(i[1], M))), M === S.k ? S : new In(M, S.x, S.y)
    }
    function _(S, M, k) {
      var P = M[0] - k[0] * S.k,
        H = M[1] - k[1] * S.k
      return P === S.x && H === S.y ? S : new In(S.k, P, H)
    }
    function v(S) {
      return [(+S[0][0] + +S[1][0]) / 2, (+S[0][1] + +S[1][1]) / 2]
    }
    function b(S, M, k, P) {
      S.on('start.zoom', function () {
        N(this, arguments).event(P).start()
      })
        .on('interrupt.zoom end.zoom', function () {
          N(this, arguments).event(P).end()
        })
        .tween('zoom', function () {
          var H = this,
            I = arguments,
            B = N(H, I).event(P),
            F = t.apply(H, I),
            K = k == null ? v(F) : typeof k == 'function' ? k.apply(H, I) : k,
            se = Math.max(F[1][0] - F[0][0], F[1][1] - F[0][1]),
            ee = H.__zoom,
            W = typeof M == 'function' ? M.apply(H, I) : M,
            fe = l(ee.invert(K).concat(se / ee.k), W.invert(K).concat(se / W.k))
          return function (me) {
            if (me === 1) me = W
            else {
              var Ce = fe(me),
                he = se / Ce[2]
              me = new In(he, K[0] - Ce[0] * he, K[1] - Ce[1] * he)
            }
            B.zoom(null, me)
          }
        })
    }
    function N(S, M, k) {
      return (!k && S.__zooming) || new E(S, M)
    }
    function E(S, M) {
      ;(this.that = S),
        (this.args = M),
        (this.active = 0),
        (this.sourceEvent = null),
        (this.extent = t.apply(S, M)),
        (this.taps = 0)
    }
    E.prototype = {
      event: function (S) {
        return S && (this.sourceEvent = S), this
      },
      start: function () {
        return ++this.active === 1 && ((this.that.__zooming = this), this.emit('start')), this
      },
      zoom: function (S, M) {
        return (
          this.mouse && S !== 'mouse' && (this.mouse[1] = M.invert(this.mouse[0])),
          this.touch0 && S !== 'touch' && (this.touch0[1] = M.invert(this.touch0[0])),
          this.touch1 && S !== 'touch' && (this.touch1[1] = M.invert(this.touch1[0])),
          (this.that.__zoom = M),
          this.emit('zoom'),
          this
        )
      },
      end: function () {
        return --this.active === 0 && (delete this.that.__zooming, this.emit('end')), this
      },
      emit: function (S) {
        var M = Ut(this.that).datum()
        u.call(
          S,
          this.that,
          new Bv(S, {
            sourceEvent: this.sourceEvent,
            target: $,
            transform: this.that.__zoom,
            dispatch: u
          }),
          M
        )
      }
    }
    function T(S, ...M) {
      if (!e.apply(this, arguments)) return
      var k = N(this, M).event(S),
        P = this.__zoom,
        H = Math.max(i[0], Math.min(i[1], P.k * Math.pow(2, r.apply(this, arguments)))),
        I = on(S)
      if (k.wheel)
        (k.mouse[0][0] !== I[0] || k.mouse[0][1] !== I[1]) &&
          (k.mouse[1] = P.invert((k.mouse[0] = I))),
          clearTimeout(k.wheel)
      else {
        if (P.k === H) return
        ;(k.mouse = [I, P.invert(I)]), Ei(this), k.start()
      }
      wo(S),
        (k.wheel = setTimeout(B, p)),
        k.zoom('mouse', n(_(m(P, H), k.mouse[0], k.mouse[1]), k.extent, s))
      function B() {
        ;(k.wheel = null), k.end()
      }
    }
    function D(S, ...M) {
      if (d || !e.apply(this, arguments)) return
      var k = S.currentTarget,
        P = N(this, M, !0).event(S),
        H = Ut(S.view).on('mousemove.zoom', K, !0).on('mouseup.zoom', se, !0),
        I = on(S, k),
        B = S.clientX,
        F = S.clientY
      Al(S.view), Fs(S), (P.mouse = [I, this.__zoom.invert(I)]), Ei(this), P.start()
      function K(ee) {
        if ((wo(ee), !P.moved)) {
          var W = ee.clientX - B,
            fe = ee.clientY - F
          P.moved = W * W + fe * fe > x
        }
        P.event(ee).zoom(
          'mouse',
          n(_(P.that.__zoom, (P.mouse[0] = on(ee, k)), P.mouse[1]), P.extent, s)
        )
      }
      function se(ee) {
        H.on('mousemove.zoom mouseup.zoom', null), Ll(ee.view, P.moved), wo(ee), P.event(ee).end()
      }
    }
    function V(S, ...M) {
      if (e.apply(this, arguments)) {
        var k = this.__zoom,
          P = on(S.changedTouches ? S.changedTouches[0] : S, this),
          H = k.invert(P),
          I = k.k * (S.shiftKey ? 0.5 : 2),
          B = n(_(m(k, I), P, H), t.apply(this, M), s)
        wo(S),
          a > 0
            ? Ut(this).transition().duration(a).call(b, B, P, S)
            : Ut(this).call($.transform, B, P, S)
      }
    }
    function A(S, ...M) {
      if (e.apply(this, arguments)) {
        var k = S.touches,
          P = k.length,
          H = N(this, M, S.changedTouches.length === P).event(S),
          I,
          B,
          F,
          K
        for (Fs(S), B = 0; B < P; ++B)
          (F = k[B]),
            (K = on(F, this)),
            (K = [K, this.__zoom.invert(K), F.identifier]),
            H.touch0
              ? !H.touch1 && H.touch0[2] !== K[2] && ((H.touch1 = K), (H.taps = 0))
              : ((H.touch0 = K), (I = !0), (H.taps = 1 + !!c))
        c && (c = clearTimeout(c)),
          I &&
            (H.taps < 2 &&
              ((f = K[0]),
              (c = setTimeout(function () {
                c = null
              }, g))),
            Ei(this),
            H.start())
      }
    }
    function O(S, ...M) {
      if (this.__zooming) {
        var k = N(this, M).event(S),
          P = S.changedTouches,
          H = P.length,
          I,
          B,
          F,
          K
        for (wo(S), I = 0; I < H; ++I)
          (B = P[I]),
            (F = on(B, this)),
            k.touch0 && k.touch0[2] === B.identifier
              ? (k.touch0[0] = F)
              : k.touch1 && k.touch1[2] === B.identifier && (k.touch1[0] = F)
        if (((B = k.that.__zoom), k.touch1)) {
          var se = k.touch0[0],
            ee = k.touch0[1],
            W = k.touch1[0],
            fe = k.touch1[1],
            me = (me = W[0] - se[0]) * me + (me = W[1] - se[1]) * me,
            Ce = (Ce = fe[0] - ee[0]) * Ce + (Ce = fe[1] - ee[1]) * Ce
          ;(B = m(B, Math.sqrt(me / Ce))),
            (F = [(se[0] + W[0]) / 2, (se[1] + W[1]) / 2]),
            (K = [(ee[0] + fe[0]) / 2, (ee[1] + fe[1]) / 2])
        } else if (k.touch0) (F = k.touch0[0]), (K = k.touch0[1])
        else return
        k.zoom('touch', n(_(B, F, K), k.extent, s))
      }
    }
    function R(S, ...M) {
      if (this.__zooming) {
        var k = N(this, M).event(S),
          P = S.changedTouches,
          H = P.length,
          I,
          B
        for (
          Fs(S),
            d && clearTimeout(d),
            d = setTimeout(function () {
              d = null
            }, g),
            I = 0;
          I < H;
          ++I
        )
          (B = P[I]),
            k.touch0 && k.touch0[2] === B.identifier
              ? delete k.touch0
              : k.touch1 && k.touch1[2] === B.identifier && delete k.touch1
        if ((k.touch1 && !k.touch0 && ((k.touch0 = k.touch1), delete k.touch1), k.touch0))
          k.touch0[1] = this.__zoom.invert(k.touch0[0])
        else if (
          (k.end(), k.taps === 2 && ((B = on(B, this)), Math.hypot(f[0] - B[0], f[1] - B[1]) < C))
        ) {
          var F = Ut(this).on('dblclick.zoom')
          F && F.apply(this, arguments)
        }
      }
    }
    return (
      ($.wheelDelta = function (S) {
        return arguments.length ? ((r = typeof S == 'function' ? S : Si(+S)), $) : r
      }),
      ($.filter = function (S) {
        return arguments.length ? ((e = typeof S == 'function' ? S : Si(!!S)), $) : e
      }),
      ($.touchable = function (S) {
        return arguments.length ? ((o = typeof S == 'function' ? S : Si(!!S)), $) : o
      }),
      ($.extent = function (S) {
        return arguments.length
          ? ((t =
              typeof S == 'function'
                ? S
                : Si([
                    [+S[0][0], +S[0][1]],
                    [+S[1][0], +S[1][1]]
                  ])),
            $)
          : t
      }),
      ($.scaleExtent = function (S) {
        return arguments.length ? ((i[0] = +S[0]), (i[1] = +S[1]), $) : [i[0], i[1]]
      }),
      ($.translateExtent = function (S) {
        return arguments.length
          ? ((s[0][0] = +S[0][0]),
            (s[1][0] = +S[1][0]),
            (s[0][1] = +S[0][1]),
            (s[1][1] = +S[1][1]),
            $)
          : [
              [s[0][0], s[0][1]],
              [s[1][0], s[1][1]]
            ]
      }),
      ($.constrain = function (S) {
        return arguments.length ? ((n = S), $) : n
      }),
      ($.duration = function (S) {
        return arguments.length ? ((a = +S), $) : a
      }),
      ($.interpolate = function (S) {
        return arguments.length ? ((l = S), $) : l
      }),
      ($.on = function () {
        var S = u.on.apply(u, arguments)
        return S === u ? $ : S
      }),
      ($.clickDistance = function (S) {
        return arguments.length ? ((x = (S = +S) * S), $) : Math.sqrt(x)
      }),
      ($.tapDistance = function (S) {
        return arguments.length ? ((C = +S), $) : C
      }),
      $
    )
  }
  const Dr = {
      error001: () =>
        '[React Flow]: Seems like you have not used zustand provider as an ancestor. Help: https://reactflow.dev/error#001',
      error002: () =>
        "It looks like you've created a new nodeTypes or edgeTypes object. If this wasn't on purpose please define the nodeTypes/edgeTypes outside of the component or memoize them.",
      error003: (e) => `Node type "${e}" not found. Using fallback type "default".`,
      error004: () =>
        'The React Flow parent container needs a width and a height to render the graph.',
      error005: () => 'Only child nodes can use a parent extent.',
      error006: () => "Can't create edge. An edge needs a source and a target.",
      error007: (e) => `The old edge with id=${e} does not exist.`,
      error009: (e) => `Marker type "${e}" doesn't exist.`,
      error008: (e, { id: t, sourceHandle: n, targetHandle: r }) =>
        `Couldn't create edge for ${e} handle id: "${e === 'source' ? n : r}", edge id: ${t}.`,
      error010: () =>
        'Handle: No node id found. Make sure to only use a Handle inside a custom Node.',
      error011: (e) => `Edge type "${e}" not found. Using fallback type "default".`,
      error012: (e) =>
        `Node with id "${e}" does not exist, it may have been removed. This can happen when a node is deleted before the "onNodeClick" handler is called.`,
      error013: (e = 'react') =>
        `It seems that you haven't loaded the styles. Please import '@xyflow/${e}/dist/style.css' or base.css to make sure everything is working properly.`,
      error014: () =>
        'useNodeConnections: No node ID found. Call useNodeConnections inside a custom Node or provide a node ID.',
      error015: () =>
        'It seems that you are trying to drag a node that is not initialized. Please use onNodesChange as explained in the docs.'
    },
    Ni = [
      [Number.NEGATIVE_INFINITY, Number.NEGATIVE_INFINITY],
      [Number.POSITIVE_INFINITY, Number.POSITIVE_INFINITY]
    ]
  var hr
  ;(function (e) {
    ;(e.Strict = 'strict'), (e.Loose = 'loose')
  })(hr || (hr = {}))
  var Jn
  ;(function (e) {
    ;(e.Free = 'free'), (e.Vertical = 'vertical'), (e.Horizontal = 'horizontal')
  })(Jn || (Jn = {}))
  var Ti
  ;(function (e) {
    ;(e.Partial = 'partial'), (e.Full = 'full')
  })(Ti || (Ti = {}))
  const Ws = {
    inProgress: !1,
    isValid: null,
    from: null,
    fromHandle: null,
    fromPosition: null,
    fromNode: null,
    to: null,
    toHandle: null,
    toPosition: null,
    toNode: null
  }
  var Ar
  ;(function (e) {
    ;(e.Bezier = 'default'),
      (e.Straight = 'straight'),
      (e.Step = 'step'),
      (e.SmoothStep = 'smoothstep'),
      (e.SimpleBezier = 'simplebezier')
  })(Ar || (Ar = {}))
  var _o
  ;(function (e) {
    ;(e.Arrow = 'arrow'), (e.ArrowClosed = 'arrowclosed')
  })(_o || (_o = {}))
  var $e
  ;(function (e) {
    ;(e.Left = 'left'), (e.Top = 'top'), (e.Right = 'right'), (e.Bottom = 'bottom')
  })($e || ($e = {}))
  const hu = { [$e.Left]: $e.Right, [$e.Right]: $e.Left, [$e.Top]: $e.Bottom, [$e.Bottom]: $e.Top }
  function Kv(e, t) {
    if (!e && !t) return !0
    if (!e || !t || e.size !== t.size) return !1
    if (!e.size && !t.size) return !0
    for (const n of e.keys()) if (!t.has(n)) return !1
    return !0
  }
  function vu(e, t, n) {
    if (!n) return
    const r = []
    e.forEach((o, i) => {
      ;(t != null && t.has(i)) || r.push(o)
    }),
      r.length && n(r)
  }
  function qv(e) {
    return e === null ? null : e ? 'valid' : 'invalid'
  }
  const Gv = (e) => 'id' in e && 'source' in e && 'target' in e,
    Uv = (e) => 'id' in e && 'position' in e && !('source' in e) && !('target' in e),
    Ks = (e) => 'id' in e && 'internals' in e && !('source' in e) && !('target' in e),
    xo = (e, t = [0, 0]) => {
      const { width: n, height: r } = Qn(e),
        o = e.origin ?? t,
        i = n * o[0],
        s = r * o[1]
      return { x: e.position.x - i, y: e.position.y - s }
    },
    jv = (e, t = { nodeOrigin: [0, 0], nodeLookup: void 0 }) => {
      if (e.length === 0) return { x: 0, y: 0, width: 0, height: 0 }
      const n = e.reduce(
        (r, o) => {
          const i = typeof o == 'string'
          let s = !t.nodeLookup && !i ? o : void 0
          t.nodeLookup && (s = i ? t.nodeLookup.get(o) : Ks(o) ? o : t.nodeLookup.get(o.id))
          const a = s ? Vi(s, t.nodeOrigin) : { x: 0, y: 0, x2: 0, y2: 0 }
          return Mi(r, a)
        },
        { x: 1 / 0, y: 1 / 0, x2: -1 / 0, y2: -1 / 0 }
      )
      return Hi(n)
    },
    bo = (e, t = {}) => {
      if (e.size === 0) return { x: 0, y: 0, width: 0, height: 0 }
      let n = { x: 1 / 0, y: 1 / 0, x2: -1 / 0, y2: -1 / 0 }
      return (
        e.forEach((r) => {
          if (t.filter === void 0 || t.filter(r)) {
            const o = Vi(r)
            n = Mi(n, o)
          }
        }),
        Hi(n)
      )
    },
    pu = (e, t, [n, r, o] = [0, 0, 1], i = !1, s = !1) => {
      const a = { ...ko(t, [n, r, o]), width: t.width / o, height: t.height / o },
        l = []
      for (const u of e.values()) {
        const { measured: c, selectable: f = !0, hidden: d = !1 } = u
        if ((s && !f) || d) continue
        const g = c.width ?? u.width ?? u.initialWidth ?? null,
          p = c.height ?? u.height ?? u.initialHeight ?? null,
          x = Co(a, Or(u)),
          C = (g ?? 0) * (p ?? 0),
          $ = i && x > 0
        ;(!u.internals.handleBounds || $ || x >= C || u.dragging) && l.push(u)
      }
      return l
    },
    qs = (e, t) => {
      const n = new Set()
      return (
        e.forEach((r) => {
          n.add(r.id)
        }),
        t.filter((r) => n.has(r.source) || n.has(r.target))
      )
    }
  function mu(e, t) {
    const n = new Map(),
      r = t != null && t.nodes ? new Set(t.nodes.map((o) => o.id)) : null
    return (
      e.forEach((o) => {
        o.measured.width &&
          o.measured.height &&
          ((t == null ? void 0 : t.includeHiddenNodes) || !o.hidden) &&
          (!r || r.has(o.id)) &&
          n.set(o.id, o)
      }),
      n
    )
  }
  async function yu({ nodes: e, width: t, height: n, panZoom: r, minZoom: o, maxZoom: i }, s) {
    if (e.size === 0) return Promise.resolve(!1)
    const a = bo(e),
      l = js(
        a,
        t,
        n,
        (s == null ? void 0 : s.minZoom) ?? o,
        (s == null ? void 0 : s.maxZoom) ?? i,
        (s == null ? void 0 : s.padding) ?? 0.1
      )
    return (
      await r.setViewport(l, { duration: s == null ? void 0 : s.duration }), Promise.resolve(!0)
    )
  }
  function Jv({
    nodeId: e,
    nextPosition: t,
    nodeLookup: n,
    nodeOrigin: r = [0, 0],
    nodeExtent: o,
    onError: i
  }) {
    const s = n.get(e),
      a = s.parentId ? n.get(s.parentId) : void 0,
      { x: l, y: u } = a ? a.internals.positionAbsolute : { x: 0, y: 0 },
      c = s.origin ?? r
    let f = o
    if (s.extent === 'parent' && !s.expandParent)
      if (!a) i == null || i('005', Dr.error005())
      else {
        const g = a.measured.width,
          p = a.measured.height
        g &&
          p &&
          (f = [
            [l, u],
            [l + g, u + p]
          ])
      }
    else
      a &&
        Ir(s.extent) &&
        (f = [
          [s.extent[0][0] + l, s.extent[0][1] + u],
          [s.extent[1][0] + l, s.extent[1][1] + u]
        ])
    const d = Ir(f) ? vr(t, f, s.measured) : t
    return (
      (s.measured.width === void 0 || s.measured.height === void 0) &&
        (i == null || i('015', Dr.error015())),
      {
        position: {
          x: d.x - l + (s.measured.width ?? 0) * c[0],
          y: d.y - u + (s.measured.height ?? 0) * c[1]
        },
        positionAbsolute: d
      }
    )
  }
  async function wu({
    nodesToRemove: e = [],
    edgesToRemove: t = [],
    nodes: n,
    edges: r,
    onBeforeDelete: o
  }) {
    const i = new Set(e.map((d) => d.id)),
      s = []
    for (const d of n) {
      if (d.deletable === !1) continue
      const g = i.has(d.id),
        p = !g && d.parentId && s.find((x) => x.id === d.parentId)
      ;(g || p) && s.push(d)
    }
    const a = new Set(t.map((d) => d.id)),
      l = r.filter((d) => d.deletable !== !1),
      c = qs(s, l)
    for (const d of l) a.has(d.id) && !c.find((p) => p.id === d.id) && c.push(d)
    if (!o) return { edges: c, nodes: s }
    const f = await o({ nodes: s, edges: c })
    return typeof f == 'boolean' ? (f ? { edges: c, nodes: s } : { edges: [], nodes: [] }) : f
  }
  const Lr = (e, t = 0, n = 1) => Math.min(Math.max(e, t), n),
    vr = (e = { x: 0, y: 0 }, t, n) => ({
      x: Lr(e.x, t[0][0], t[1][0] - ((n == null ? void 0 : n.width) ?? 0)),
      y: Lr(e.y, t[0][1], t[1][1] - ((n == null ? void 0 : n.height) ?? 0))
    })
  function _u(e, t, n) {
    const { width: r, height: o } = Qn(n),
      { x: i, y: s } = n.internals.positionAbsolute
    return vr(
      e,
      [
        [i, s],
        [i + r, s + o]
      ],
      t
    )
  }
  const xu = (e, t, n) =>
      e < t ? Lr(Math.abs(e - t), 1, t) / t : e > n ? -Lr(Math.abs(e - n), 1, t) / t : 0,
    bu = (e, t, n = 15, r = 40) => {
      const o = xu(e.x, r, t.width - r) * n,
        i = xu(e.y, r, t.height - r) * n
      return [o, i]
    },
    Mi = (e, t) => ({
      x: Math.min(e.x, t.x),
      y: Math.min(e.y, t.y),
      x2: Math.max(e.x2, t.x2),
      y2: Math.max(e.y2, t.y2)
    }),
    Gs = ({ x: e, y: t, width: n, height: r }) => ({ x: e, y: t, x2: e + n, y2: t + r }),
    Hi = ({ x: e, y: t, x2: n, y2: r }) => ({ x: e, y: t, width: n - e, height: r - t }),
    Or = (e, t = [0, 0]) => {
      var o, i
      const { x: n, y: r } = Ks(e) ? e.internals.positionAbsolute : xo(e, t)
      return {
        x: n,
        y: r,
        width: ((o = e.measured) == null ? void 0 : o.width) ?? e.width ?? e.initialWidth ?? 0,
        height: ((i = e.measured) == null ? void 0 : i.height) ?? e.height ?? e.initialHeight ?? 0
      }
    },
    Vi = (e, t = [0, 0]) => {
      var o, i
      const { x: n, y: r } = Ks(e) ? e.internals.positionAbsolute : xo(e, t)
      return {
        x: n,
        y: r,
        x2: n + (((o = e.measured) == null ? void 0 : o.width) ?? e.width ?? e.initialWidth ?? 0),
        y2: r + (((i = e.measured) == null ? void 0 : i.height) ?? e.height ?? e.initialHeight ?? 0)
      }
    },
    Cu = (e, t) => Hi(Mi(Gs(e), Gs(t))),
    Co = (e, t) => {
      const n = Math.max(0, Math.min(e.x + e.width, t.x + t.width) - Math.max(e.x, t.x)),
        r = Math.max(0, Math.min(e.y + e.height, t.y + t.height) - Math.max(e.y, t.y))
      return Math.ceil(n * r)
    },
    ku = (e) => zn(e.width) && zn(e.height) && zn(e.x) && zn(e.y),
    zn = (e) => !isNaN(e) && isFinite(e),
    Qv = (e, t) => {},
    Us = (e, t = [1, 1]) => ({
      x: t[0] * Math.round(e.x / t[0]),
      y: t[1] * Math.round(e.y / t[1])
    }),
    ko = ({ x: e, y: t }, [n, r, o], i = !1, s = [1, 1]) => {
      const a = { x: (e - n) / o, y: (t - r) / o }
      return i ? Us(a, s) : a
    },
    $u = ({ x: e, y: t }, [n, r, o]) => ({ x: e * o + n, y: t * o + r }),
    js = (e, t, n, r, o, i) => {
      const s = t / (e.width * (1 + i)),
        a = n / (e.height * (1 + i)),
        l = Math.min(s, a),
        u = Lr(l, r, o),
        c = e.x + e.width / 2,
        f = e.y + e.height / 2,
        d = t / 2 - c * u,
        g = n / 2 - f * u
      return { x: d, y: g, zoom: u }
    },
    Di = () => {
      var e
      return (
        typeof navigator < 'u' &&
        ((e = navigator == null ? void 0 : navigator.userAgent) == null
          ? void 0
          : e.indexOf('Mac')) >= 0
      )
    }
  function Ir(e) {
    return e !== void 0 && e !== 'parent'
  }
  function Qn(e) {
    var t, n
    return {
      width: ((t = e.measured) == null ? void 0 : t.width) ?? e.width ?? e.initialWidth ?? 0,
      height: ((n = e.measured) == null ? void 0 : n.height) ?? e.height ?? e.initialHeight ?? 0
    }
  }
  function Eu(e) {
    var t, n
    return (
      (((t = e.measured) == null ? void 0 : t.width) ?? e.width ?? e.initialWidth) !== void 0 &&
      (((n = e.measured) == null ? void 0 : n.height) ?? e.height ?? e.initialHeight) !== void 0
    )
  }
  function e0(e, t = { width: 0, height: 0 }, n, r, o) {
    const i = { ...e },
      s = r.get(n)
    if (s) {
      const a = s.origin || o
      ;(i.x += s.internals.positionAbsolute.x - (t.width ?? 0) * a[0]),
        (i.y += s.internals.positionAbsolute.y - (t.height ?? 0) * a[1])
    }
    return i
  }
  function Js(e, { snapGrid: t = [0, 0], snapToGrid: n = !1, transform: r, containerBounds: o }) {
    const { x: i, y: s } = Rn(e),
      a = ko(
        { x: i - ((o == null ? void 0 : o.left) ?? 0), y: s - ((o == null ? void 0 : o.top) ?? 0) },
        r
      ),
      { x: l, y: u } = n ? Us(a, t) : a
    return { xSnapped: l, ySnapped: u, ...a }
  }
  const Qs = (e) => ({ width: e.offsetWidth, height: e.offsetHeight }),
    t0 = (e) => {
      var t
      return (
        ((t = e == null ? void 0 : e.getRootNode) == null ? void 0 : t.call(e)) ||
        (window == null ? void 0 : window.document)
      )
    },
    n0 = ['INPUT', 'SELECT', 'TEXTAREA']
  function r0(e) {
    var r, o
    const t =
      ((o = (r = e.composedPath) == null ? void 0 : r.call(e)) == null ? void 0 : o[0]) || e.target
    return (t == null ? void 0 : t.nodeType) !== 1
      ? !1
      : n0.includes(t.nodeName) || t.hasAttribute('contenteditable') || !!t.closest('.nokey')
  }
  const Su = (e) => 'clientX' in e,
    Rn = (e, t) => {
      var i, s
      const n = Su(e),
        r = n ? e.clientX : (i = e.touches) == null ? void 0 : i[0].clientX,
        o = n ? e.clientY : (s = e.touches) == null ? void 0 : s[0].clientY
      return {
        x: r - ((t == null ? void 0 : t.left) ?? 0),
        y: o - ((t == null ? void 0 : t.top) ?? 0)
      }
    },
    Pu = (e, t, n, r, o) => {
      const i = t.querySelectorAll(`.${e}`)
      return !i || !i.length
        ? null
        : Array.from(i).map((s) => {
            const a = s.getBoundingClientRect()
            return {
              id: s.getAttribute('data-handleid'),
              type: e,
              nodeId: o,
              position: s.getAttribute('data-handlepos'),
              x: (a.left - n.left) / r,
              y: (a.top - n.top) / r,
              ...Qs(s)
            }
          })
    }
  function o0({
    sourceX: e,
    sourceY: t,
    targetX: n,
    targetY: r,
    sourceControlX: o,
    sourceControlY: i,
    targetControlX: s,
    targetControlY: a
  }) {
    const l = e * 0.125 + o * 0.375 + s * 0.375 + n * 0.125,
      u = t * 0.125 + i * 0.375 + a * 0.375 + r * 0.125,
      c = Math.abs(l - e),
      f = Math.abs(u - t)
    return [l, u, c, f]
  }
  function Ai(e, t) {
    return e >= 0 ? 0.5 * e : t * 25 * Math.sqrt(-e)
  }
  function Nu({ pos: e, x1: t, y1: n, x2: r, y2: o, c: i }) {
    switch (e) {
      case $e.Left:
        return [t - Ai(t - r, i), n]
      case $e.Right:
        return [t + Ai(r - t, i), n]
      case $e.Top:
        return [t, n - Ai(n - o, i)]
      case $e.Bottom:
        return [t, n + Ai(o - n, i)]
    }
  }
  function Tu({
    sourceX: e,
    sourceY: t,
    sourcePosition: n = $e.Bottom,
    targetX: r,
    targetY: o,
    targetPosition: i = $e.Top,
    curvature: s = 0.25
  }) {
    const [a, l] = Nu({ pos: n, x1: e, y1: t, x2: r, y2: o, c: s }),
      [u, c] = Nu({ pos: i, x1: r, y1: o, x2: e, y2: t, c: s }),
      [f, d, g, p] = o0({
        sourceX: e,
        sourceY: t,
        targetX: r,
        targetY: o,
        sourceControlX: a,
        sourceControlY: l,
        targetControlX: u,
        targetControlY: c
      })
    return [`M${e},${t} C${a},${l} ${u},${c} ${r},${o}`, f, d, g, p]
  }
  function Mu({ sourceX: e, sourceY: t, targetX: n, targetY: r }) {
    const o = Math.abs(n - e) / 2,
      i = n < e ? n + o : n - o,
      s = Math.abs(r - t) / 2,
      a = r < t ? r + s : r - s
    return [i, a, o, s]
  }
  function i0({
    sourceNode: e,
    targetNode: t,
    selected: n = !1,
    zIndex: r = 0,
    elevateOnSelect: o = !1
  }) {
    if (!o) return r
    const i = n || t.selected || e.selected,
      s = Math.max(e.internals.z || 0, t.internals.z || 0, 1e3)
    return r + (i ? s : 0)
  }
  function s0({ sourceNode: e, targetNode: t, width: n, height: r, transform: o }) {
    const i = Mi(Vi(e), Vi(t))
    i.x === i.x2 && (i.x2 += 1), i.y === i.y2 && (i.y2 += 1)
    const s = { x: -o[0] / o[2], y: -o[1] / o[2], width: n / o[2], height: r / o[2] }
    return Co(s, Hi(i)) > 0
  }
  const a0 = ({ source: e, sourceHandle: t, target: n, targetHandle: r }) =>
      `xy-edge__${e}${t || ''}-${n}${r || ''}`,
    l0 = (e, t) =>
      t.some(
        (n) =>
          n.source === e.source &&
          n.target === e.target &&
          (n.sourceHandle === e.sourceHandle || (!n.sourceHandle && !e.sourceHandle)) &&
          (n.targetHandle === e.targetHandle || (!n.targetHandle && !e.targetHandle))
      ),
    u0 = (e, t) => {
      if (!e.source || !e.target) return t
      let n
      return (
        Gv(e) ? (n = { ...e }) : (n = { ...e, id: a0(e) }),
        l0(n, t)
          ? t
          : (n.sourceHandle === null && delete n.sourceHandle,
            n.targetHandle === null && delete n.targetHandle,
            t.concat(n))
      )
    }
  function ea({ sourceX: e, sourceY: t, targetX: n, targetY: r }) {
    const [o, i, s, a] = Mu({ sourceX: e, sourceY: t, targetX: n, targetY: r })
    return [`M ${e},${t}L ${n},${r}`, o, i, s, a]
  }
  const Hu = {
      [$e.Left]: { x: -1, y: 0 },
      [$e.Right]: { x: 1, y: 0 },
      [$e.Top]: { x: 0, y: -1 },
      [$e.Bottom]: { x: 0, y: 1 }
    },
    c0 = ({ source: e, sourcePosition: t = $e.Bottom, target: n }) =>
      t === $e.Left || t === $e.Right
        ? e.x < n.x
          ? { x: 1, y: 0 }
          : { x: -1, y: 0 }
        : e.y < n.y
          ? { x: 0, y: 1 }
          : { x: 0, y: -1 },
    Vu = (e, t) => Math.sqrt(Math.pow(t.x - e.x, 2) + Math.pow(t.y - e.y, 2))
  function d0({
    source: e,
    sourcePosition: t = $e.Bottom,
    target: n,
    targetPosition: r = $e.Top,
    center: o,
    offset: i
  }) {
    const s = Hu[t],
      a = Hu[r],
      l = { x: e.x + s.x * i, y: e.y + s.y * i },
      u = { x: n.x + a.x * i, y: n.y + a.y * i },
      c = c0({ source: l, sourcePosition: t, target: u }),
      f = c.x !== 0 ? 'x' : 'y',
      d = c[f]
    let g = [],
      p,
      x
    const C = { x: 0, y: 0 },
      $ = { x: 0, y: 0 },
      [m, _, v, b] = Mu({ sourceX: e.x, sourceY: e.y, targetX: n.x, targetY: n.y })
    if (s[f] * a[f] === -1) {
      ;(p = o.x ?? m), (x = o.y ?? _)
      const E = [
          { x: p, y: l.y },
          { x: p, y: u.y }
        ],
        T = [
          { x: l.x, y: x },
          { x: u.x, y: x }
        ]
      s[f] === d ? (g = f === 'x' ? E : T) : (g = f === 'x' ? T : E)
    } else {
      const E = [{ x: l.x, y: u.y }],
        T = [{ x: u.x, y: l.y }]
      if ((f === 'x' ? (g = s.x === d ? T : E) : (g = s.y === d ? E : T), t === r)) {
        const R = Math.abs(e[f] - n[f])
        if (R <= i) {
          const S = Math.min(i - 1, i - R)
          s[f] === d ? (C[f] = (l[f] > e[f] ? -1 : 1) * S) : ($[f] = (u[f] > n[f] ? -1 : 1) * S)
        }
      }
      if (t !== r) {
        const R = f === 'x' ? 'y' : 'x',
          S = s[f] === a[R],
          M = l[R] > u[R],
          k = l[R] < u[R]
        ;((s[f] === 1 && ((!S && M) || (S && k))) || (s[f] !== 1 && ((!S && k) || (S && M)))) &&
          (g = f === 'x' ? E : T)
      }
      const D = { x: l.x + C.x, y: l.y + C.y },
        V = { x: u.x + $.x, y: u.y + $.y },
        A = Math.max(Math.abs(D.x - g[0].x), Math.abs(V.x - g[0].x)),
        O = Math.max(Math.abs(D.y - g[0].y), Math.abs(V.y - g[0].y))
      A >= O ? ((p = (D.x + V.x) / 2), (x = g[0].y)) : ((p = g[0].x), (x = (D.y + V.y) / 2))
    }
    return [
      [e, { x: l.x + C.x, y: l.y + C.y }, ...g, { x: u.x + $.x, y: u.y + $.y }, n],
      p,
      x,
      v,
      b
    ]
  }
  function f0(e, t, n, r) {
    const o = Math.min(Vu(e, t) / 2, Vu(t, n) / 2, r),
      { x: i, y: s } = t
    if ((e.x === i && i === n.x) || (e.y === s && s === n.y)) return `L${i} ${s}`
    if (e.y === s) {
      const u = e.x < n.x ? -1 : 1,
        c = e.y < n.y ? 1 : -1
      return `L ${i + o * u},${s}Q ${i},${s} ${i},${s + o * c}`
    }
    const a = e.x < n.x ? 1 : -1,
      l = e.y < n.y ? -1 : 1
    return `L ${i},${s + o * l}Q ${i},${s} ${i + o * a},${s}`
  }
  function Li({
    sourceX: e,
    sourceY: t,
    sourcePosition: n = $e.Bottom,
    targetX: r,
    targetY: o,
    targetPosition: i = $e.Top,
    borderRadius: s = 5,
    centerX: a,
    centerY: l,
    offset: u = 20
  }) {
    const [c, f, d, g, p] = d0({
      source: { x: e, y: t },
      sourcePosition: n,
      target: { x: r, y: o },
      targetPosition: i,
      center: { x: a, y: l },
      offset: u
    })
    return [
      c.reduce((C, $, m) => {
        let _ = ''
        return (
          m > 0 && m < c.length - 1
            ? (_ = f0(c[m - 1], $, c[m + 1], s))
            : (_ = `${m === 0 ? 'M' : 'L'}${$.x} ${$.y}`),
          (C += _),
          C
        )
      }, ''),
      f,
      d,
      g,
      p
    ]
  }
  function Du(e) {
    var t
    return (
      e &&
      !!(e.internals.handleBounds || ((t = e.handles) != null && t.length)) &&
      !!(e.measured.width || e.width || e.initialWidth)
    )
  }
  function g0(e) {
    var f
    const { sourceNode: t, targetNode: n } = e
    if (!Du(t) || !Du(n)) return null
    const r = t.internals.handleBounds || Au(t.handles),
      o = n.internals.handleBounds || Au(n.handles),
      i = Lu((r == null ? void 0 : r.source) ?? [], e.sourceHandle),
      s = Lu(
        e.connectionMode === hr.Strict
          ? ((o == null ? void 0 : o.target) ?? [])
          : ((o == null ? void 0 : o.target) ?? []).concat((o == null ? void 0 : o.source) ?? []),
        e.targetHandle
      )
    if (!i || !s)
      return (
        (f = e.onError) == null ||
          f.call(
            e,
            '008',
            Dr.error008(i ? 'target' : 'source', {
              id: e.id,
              sourceHandle: e.sourceHandle,
              targetHandle: e.targetHandle
            })
          ),
        null
      )
    const a = (i == null ? void 0 : i.position) || $e.Bottom,
      l = (s == null ? void 0 : s.position) || $e.Top,
      u = $o(t, i, a),
      c = $o(n, s, l)
    return {
      sourceX: u.x,
      sourceY: u.y,
      targetX: c.x,
      targetY: c.y,
      sourcePosition: a,
      targetPosition: l
    }
  }
  function Au(e) {
    if (!e) return null
    const t = [],
      n = []
    for (const r of e)
      (r.width = r.width ?? 1),
        (r.height = r.height ?? 1),
        r.type === 'source' ? t.push(r) : r.type === 'target' && n.push(r)
    return { source: t, target: n }
  }
  function $o(e, t, n = $e.Left, r = !1) {
    const o = ((t == null ? void 0 : t.x) ?? 0) + e.internals.positionAbsolute.x,
      i = ((t == null ? void 0 : t.y) ?? 0) + e.internals.positionAbsolute.y,
      { width: s, height: a } = t ?? Qn(e)
    if (r) return { x: o + s / 2, y: i + a / 2 }
    switch ((t == null ? void 0 : t.position) ?? n) {
      case $e.Top:
        return { x: o + s / 2, y: i }
      case $e.Right:
        return { x: o + s, y: i + a / 2 }
      case $e.Bottom:
        return { x: o + s / 2, y: i + a }
      case $e.Left:
        return { x: o, y: i + a / 2 }
    }
  }
  function Lu(e, t) {
    return (e && (t ? e.find((n) => n.id === t) : e[0])) || null
  }
  function ta(e, t) {
    return e
      ? typeof e == 'string'
        ? e
        : `${t ? `${t}__` : ''}${Object.keys(e)
            .sort()
            .map((r) => `${r}=${e[r]}`)
            .join('&')}`
      : ''
  }
  function h0(e, { id: t, defaultColor: n, defaultMarkerStart: r, defaultMarkerEnd: o }) {
    const i = new Set()
    return e
      .reduce(
        (s, a) => (
          [a.markerStart || r, a.markerEnd || o].forEach((l) => {
            if (l && typeof l == 'object') {
              const u = ta(l, t)
              i.has(u) || (s.push({ id: u, color: l.color || n, ...l }), i.add(u))
            }
          }),
          s
        ),
        []
      )
      .sort((s, a) => s.id.localeCompare(a.id))
  }
  function v0(e, t, n, r, o) {
    let i = 0.5
    o === 'start' ? (i = 0) : o === 'end' && (i = 1)
    let s = [(e.x + e.width * i) * t.zoom + t.x, e.y * t.zoom + t.y - r],
      a = [-100 * i, -100]
    switch (n) {
      case $e.Right:
        ;(s = [(e.x + e.width) * t.zoom + t.x + r, (e.y + e.height * i) * t.zoom + t.y]),
          (a = [0, -100 * i])
        break
      case $e.Bottom:
        ;(s[1] = (e.y + e.height) * t.zoom + t.y + r), (a[1] = 0)
        break
      case $e.Left:
        ;(s = [e.x * t.zoom + t.x - r, (e.y + e.height * i) * t.zoom + t.y]), (a = [-100, -100 * i])
        break
    }
    return `translate(${s[0]}px, ${s[1]}px) translate(${a[0]}%, ${a[1]}%)`
  }
  const na = { nodeOrigin: [0, 0], nodeExtent: Ni, elevateNodesOnSelect: !0, defaults: {} },
    p0 = { ...na, checkEquality: !0 }
  function ra(e, t) {
    const n = { ...e }
    for (const r in t) t[r] !== void 0 && (n[r] = t[r])
    return n
  }
  function m0(e, t, n) {
    const r = ra(na, n)
    for (const o of e.values())
      if (o.parentId) oa(o, e, t, r)
      else {
        const i = xo(o, r.nodeOrigin),
          s = Ir(o.extent) ? o.extent : r.nodeExtent,
          a = vr(i, s, Qn(o))
        o.internals.positionAbsolute = a
      }
  }
  function Ou(e, t, n, r) {
    var a, l
    const o = ra(p0, r),
      i = new Map(t),
      s = o != null && o.elevateNodesOnSelect ? 1e3 : 0
    t.clear(), n.clear()
    for (const u of e) {
      let c = i.get(u.id)
      if (o.checkEquality && u === (c == null ? void 0 : c.internals.userNode)) t.set(u.id, c)
      else {
        const f = xo(u, o.nodeOrigin),
          d = Ir(u.extent) ? u.extent : o.nodeExtent,
          g = vr(f, d, Qn(u))
        ;(c = {
          ...o.defaults,
          ...u,
          measured: {
            width: (a = u.measured) == null ? void 0 : a.width,
            height: (l = u.measured) == null ? void 0 : l.height
          },
          internals: {
            positionAbsolute: g,
            handleBounds: u.measured ? (c == null ? void 0 : c.internals.handleBounds) : void 0,
            z: Iu(u, s),
            userNode: u
          }
        }),
          t.set(u.id, c)
      }
      u.parentId && oa(c, t, n, r)
    }
  }
  function y0(e, t) {
    if (!e.parentId) return
    const n = t.get(e.parentId)
    n ? n.set(e.id, e) : t.set(e.parentId, new Map([[e.id, e]]))
  }
  function oa(e, t, n, r) {
    const { elevateNodesOnSelect: o, nodeOrigin: i, nodeExtent: s } = ra(na, r),
      a = e.parentId,
      l = t.get(a)
    if (!l) {
      console.warn(
        `Parent node ${a} not found. Please make sure that parent nodes are in front of their child nodes in the nodes array.`
      )
      return
    }
    y0(e, n)
    const u = o ? 1e3 : 0,
      { x: c, y: f, z: d } = w0(e, l, i, s, u),
      { positionAbsolute: g } = e.internals,
      p = c !== g.x || f !== g.y
    ;(p || d !== e.internals.z) &&
      t.set(e.id, {
        ...e,
        internals: { ...e.internals, positionAbsolute: p ? { x: c, y: f } : g, z: d }
      })
  }
  function Iu(e, t) {
    return (zn(e.zIndex) ? e.zIndex : 0) + (e.selected ? t : 0)
  }
  function w0(e, t, n, r, o) {
    const { x: i, y: s } = t.internals.positionAbsolute,
      a = Qn(e),
      l = xo(e, n),
      u = Ir(e.extent) ? vr(l, e.extent, a) : l
    let c = vr({ x: i + u.x, y: s + u.y }, r, a)
    e.extent === 'parent' && (c = _u(c, a, t))
    const f = Iu(e, o),
      d = t.internals.z ?? 0
    return { x: c.x, y: c.y, z: d > f ? d : f }
  }
  function _0(e, t, n, r = [0, 0]) {
    var s
    const o = [],
      i = new Map()
    for (const a of e) {
      const l = t.get(a.parentId)
      if (!l) continue
      const u = ((s = i.get(a.parentId)) == null ? void 0 : s.expandedRect) ?? Or(l),
        c = Cu(u, a.rect)
      i.set(a.parentId, { expandedRect: c, parent: l })
    }
    return (
      i.size > 0 &&
        i.forEach(({ expandedRect: a, parent: l }, u) => {
          var _
          const c = l.internals.positionAbsolute,
            f = Qn(l),
            d = l.origin ?? r,
            g = a.x < c.x ? Math.round(Math.abs(c.x - a.x)) : 0,
            p = a.y < c.y ? Math.round(Math.abs(c.y - a.y)) : 0,
            x = Math.max(f.width, Math.round(a.width)),
            C = Math.max(f.height, Math.round(a.height)),
            $ = (x - f.width) * d[0],
            m = (C - f.height) * d[1]
          ;(g > 0 || p > 0 || $ || m) &&
            (o.push({
              id: u,
              type: 'position',
              position: { x: l.position.x - g + $, y: l.position.y - p + m }
            }),
            (_ = n.get(u)) == null ||
              _.forEach((v) => {
                e.some((b) => b.id === v.id) ||
                  o.push({
                    id: v.id,
                    type: 'position',
                    position: { x: v.position.x + g, y: v.position.y + p }
                  })
              })),
            (f.width < a.width || f.height < a.height || g || p) &&
              o.push({
                id: u,
                type: 'dimensions',
                setAttributes: !0,
                dimensions: {
                  width: x + (g ? d[0] * g - $ : 0),
                  height: C + (p ? d[1] * p - m : 0)
                }
              })
        }),
      o
    )
  }
  function x0(e, t, n, r, o, i) {
    const s = r == null ? void 0 : r.querySelector('.xyflow__viewport')
    let a = !1
    if (!s) return { changes: [], updatedInternals: a }
    const l = [],
      u = window.getComputedStyle(s),
      { m22: c } = new window.DOMMatrixReadOnly(u.transform),
      f = []
    for (const d of e.values()) {
      const g = t.get(d.id)
      if (!g) continue
      if (g.hidden) {
        t.set(g.id, { ...g, internals: { ...g.internals, handleBounds: void 0 } }), (a = !0)
        continue
      }
      const p = Qs(d.nodeElement),
        x = g.measured.width !== p.width || g.measured.height !== p.height
      if (!!(p.width && p.height && (x || !g.internals.handleBounds || d.force))) {
        const $ = d.nodeElement.getBoundingClientRect(),
          m = Ir(g.extent) ? g.extent : i
        let { positionAbsolute: _ } = g.internals
        g.parentId && g.extent === 'parent'
          ? (_ = _u(_, p, t.get(g.parentId)))
          : m && (_ = vr(_, m, p))
        const v = {
          ...g,
          measured: p,
          internals: {
            ...g.internals,
            positionAbsolute: _,
            handleBounds: {
              source: Pu('source', d.nodeElement, $, c, g.id),
              target: Pu('target', d.nodeElement, $, c, g.id)
            }
          }
        }
        t.set(g.id, v),
          g.parentId && oa(v, t, n, { nodeOrigin: o }),
          (a = !0),
          x &&
            (l.push({ id: g.id, type: 'dimensions', dimensions: p }),
            g.expandParent &&
              g.parentId &&
              f.push({ id: g.id, parentId: g.parentId, rect: Or(v, o) }))
      }
    }
    if (f.length > 0) {
      const d = _0(f, t, n, o)
      l.push(...d)
    }
    return { changes: l, updatedInternals: a }
  }
  async function b0({
    delta: e,
    panZoom: t,
    transform: n,
    translateExtent: r,
    width: o,
    height: i
  }) {
    if (!t || (!e.x && !e.y)) return Promise.resolve(!1)
    const s = await t.setViewportConstrained(
        { x: n[0] + e.x, y: n[1] + e.y, zoom: n[2] },
        [
          [0, 0],
          [o, i]
        ],
        r
      ),
      a = !!s && (s.x !== n[0] || s.y !== n[1] || s.k !== n[2])
    return Promise.resolve(a)
  }
  function zu(e, t, n, r, o, i) {
    let s = o
    const a = r.get(s) || new Map()
    r.set(s, a.set(n, t)), (s = `${o}-${e}`)
    const l = r.get(s) || new Map()
    if ((r.set(s, l.set(n, t)), i)) {
      s = `${o}-${e}-${i}`
      const u = r.get(s) || new Map()
      r.set(s, u.set(n, t))
    }
  }
  function Ru(e, t, n) {
    e.clear(), t.clear()
    for (const r of n) {
      const { source: o, target: i, sourceHandle: s = null, targetHandle: a = null } = r,
        l = { edgeId: r.id, source: o, target: i, sourceHandle: s, targetHandle: a },
        u = `${o}-${s}--${i}-${a}`,
        c = `${i}-${a}--${o}-${s}`
      zu('source', l, c, e, o, s), zu('target', l, u, e, i, a), t.set(r.id, r)
    }
  }
  function C0(e, t) {
    if (e === null || t === null) return !1
    const n = Array.isArray(e) ? e : [e],
      r = Array.isArray(t) ? t : [t]
    if (n.length !== r.length) return !1
    for (let o = 0; o < n.length; o++)
      if (n[o].id !== r[o].id || n[o].type !== r[o].type || !Object.is(n[o].data, r[o].data))
        return !1
    return !0
  }
  function Bu(e, t) {
    if (!e.parentId) return !1
    const n = t.get(e.parentId)
    return n ? (n.selected ? !0 : Bu(n, t)) : !1
  }
  function Yu(e, t, n) {
    var o
    let r = e
    do {
      if ((o = r == null ? void 0 : r.matches) != null && o.call(r, t)) return !0
      if (r === n) return !1
      r = r == null ? void 0 : r.parentElement
    } while (r)
    return !1
  }
  function k0(e, t, n, r) {
    const o = new Map()
    for (const [i, s] of e)
      if (
        (s.selected || s.id === r) &&
        (!s.parentId || !Bu(s, e)) &&
        (s.draggable || (t && typeof s.draggable > 'u'))
      ) {
        const a = e.get(i)
        a &&
          o.set(i, {
            id: i,
            position: a.position || { x: 0, y: 0 },
            distance: {
              x: n.x - a.internals.positionAbsolute.x,
              y: n.y - a.internals.positionAbsolute.y
            },
            extent: a.extent,
            parentId: a.parentId,
            origin: a.origin,
            expandParent: a.expandParent,
            internals: { positionAbsolute: a.internals.positionAbsolute || { x: 0, y: 0 } },
            measured: { width: a.measured.width ?? 0, height: a.measured.height ?? 0 }
          })
      }
    return o
  }
  function ia({ nodeId: e, dragItems: t, nodeLookup: n, dragging: r = !0 }) {
    var s, a, l
    const o = []
    for (const [u, c] of t) {
      const f = (s = n.get(u)) == null ? void 0 : s.internals.userNode
      f && o.push({ ...f, position: c.position, dragging: r })
    }
    if (!e) return [o[0], o]
    const i = (a = n.get(e)) == null ? void 0 : a.internals.userNode
    return [
      i
        ? {
            ...i,
            position: ((l = t.get(e)) == null ? void 0 : l.position) || i.position,
            dragging: r
          }
        : o[0],
      o
    ]
  }
  function $0({ onNodeMouseDown: e, getStoreItems: t, onDragStart: n, onDrag: r, onDragStop: o }) {
    let i = { x: null, y: null },
      s = 0,
      a = new Map(),
      l = !1,
      u = { x: 0, y: 0 },
      c = null,
      f = !1,
      d = null,
      g = !1
    function p({
      noDragClassName: C,
      handleSelector: $,
      domNode: m,
      isSelectable: _,
      nodeId: v,
      nodeClickDistance: b = 0
    }) {
      d = Ut(m)
      function N({ x: V, y: A }, O) {
        const {
          nodeLookup: R,
          nodeExtent: S,
          snapGrid: M,
          snapToGrid: k,
          nodeOrigin: P,
          onNodeDrag: H,
          onSelectionDrag: I,
          onError: B,
          updateNodePositions: F
        } = t()
        i = { x: V, y: A }
        let K = !1,
          se = { x: 0, y: 0, x2: 0, y2: 0 }
        if (a.size > 1 && S) {
          const ee = bo(a)
          se = Gs(ee)
        }
        for (const [ee, W] of a) {
          if (!R.has(ee)) continue
          let fe = { x: V - W.distance.x, y: A - W.distance.y }
          k && (fe = Us(fe, M))
          let me = [
            [S[0][0], S[0][1]],
            [S[1][0], S[1][1]]
          ]
          if (a.size > 1 && S && !W.extent) {
            const { positionAbsolute: ze } = W.internals,
              G = ze.x - se.x + S[0][0],
              ae = ze.x + W.measured.width - se.x2 + S[1][0],
              Me = ze.y - se.y + S[0][1],
              Le = ze.y + W.measured.height - se.y2 + S[1][1]
            me = [
              [G, Me],
              [ae, Le]
            ]
          }
          const { position: Ce, positionAbsolute: he } = Jv({
            nodeId: ee,
            nextPosition: fe,
            nodeLookup: R,
            nodeExtent: me,
            nodeOrigin: P,
            onError: B
          })
          ;(K = K || W.position.x !== Ce.x || W.position.y !== Ce.y),
            (W.position = Ce),
            (W.internals.positionAbsolute = he)
        }
        if (K && (F(a, !0), O && (r || H || (!v && I)))) {
          const [ee, W] = ia({ nodeId: v, dragItems: a, nodeLookup: R })
          r == null || r(O, a, ee, W), H == null || H(O, ee, W), v || I == null || I(O, W)
        }
      }
      async function E() {
        if (!c) return
        const { transform: V, panBy: A, autoPanSpeed: O, autoPanOnNodeDrag: R } = t()
        if (!R) {
          ;(l = !1), cancelAnimationFrame(s)
          return
        }
        const [S, M] = bu(u, c, O)
        ;(S !== 0 || M !== 0) &&
          ((i.x = (i.x ?? 0) - S / V[2]),
          (i.y = (i.y ?? 0) - M / V[2]),
          (await A({ x: S, y: M })) && N(i, null)),
          (s = requestAnimationFrame(E))
      }
      function T(V) {
        var K
        const {
          nodeLookup: A,
          multiSelectionActive: O,
          nodesDraggable: R,
          transform: S,
          snapGrid: M,
          snapToGrid: k,
          selectNodesOnDrag: P,
          onNodeDragStart: H,
          onSelectionDragStart: I,
          unselectNodesAndEdges: B
        } = t()
        ;(f = !0),
          (!P || !_) && !O && v && (((K = A.get(v)) != null && K.selected) || B()),
          _ && P && v && (e == null || e(v))
        const F = Js(V.sourceEvent, {
          transform: S,
          snapGrid: M,
          snapToGrid: k,
          containerBounds: c
        })
        if (((i = F), (a = k0(A, R, F, v)), a.size > 0 && (n || H || (!v && I)))) {
          const [se, ee] = ia({ nodeId: v, dragItems: a, nodeLookup: A })
          n == null || n(V.sourceEvent, a, se, ee),
            H == null || H(V.sourceEvent, se, ee),
            v || I == null || I(V.sourceEvent, ee)
        }
      }
      const D = rh()
        .clickDistance(b)
        .on('start', (V) => {
          const { domNode: A, nodeDragThreshold: O, transform: R, snapGrid: S, snapToGrid: M } = t()
          ;(c = (A == null ? void 0 : A.getBoundingClientRect()) || null),
            (g = !1),
            O === 0 && T(V),
            (i = Js(V.sourceEvent, {
              transform: R,
              snapGrid: S,
              snapToGrid: M,
              containerBounds: c
            })),
            (u = Rn(V.sourceEvent, c))
        })
        .on('drag', (V) => {
          const {
              autoPanOnNodeDrag: A,
              transform: O,
              snapGrid: R,
              snapToGrid: S,
              nodeDragThreshold: M,
              nodeLookup: k
            } = t(),
            P = Js(V.sourceEvent, { transform: O, snapGrid: R, snapToGrid: S, containerBounds: c })
          if (
            (((V.sourceEvent.type === 'touchmove' && V.sourceEvent.touches.length > 1) ||
              (v && !k.has(v))) &&
              (g = !0),
            !g)
          ) {
            if ((!l && A && f && ((l = !0), E()), !f)) {
              const H = P.xSnapped - (i.x ?? 0),
                I = P.ySnapped - (i.y ?? 0)
              Math.sqrt(H * H + I * I) > M && T(V)
            }
            ;(i.x !== P.xSnapped || i.y !== P.ySnapped) &&
              a &&
              f &&
              ((u = Rn(V.sourceEvent, c)), N(P, V.sourceEvent))
          }
        })
        .on('end', (V) => {
          if (!(!f || g) && ((l = !1), (f = !1), cancelAnimationFrame(s), a.size > 0)) {
            const {
              nodeLookup: A,
              updateNodePositions: O,
              onNodeDragStop: R,
              onSelectionDragStop: S
            } = t()
            if ((O(a, !1), o || R || (!v && S))) {
              const [M, k] = ia({ nodeId: v, dragItems: a, nodeLookup: A, dragging: !1 })
              o == null || o(V.sourceEvent, a, M, k),
                R == null || R(V.sourceEvent, M, k),
                v || S == null || S(V.sourceEvent, k)
            }
          }
        })
        .filter((V) => {
          const A = V.target
          return !V.button && (!C || !Yu(A, `.${C}`, m)) && (!$ || Yu(A, $, m))
        })
      d.call(D)
    }
    function x() {
      d == null || d.on('.drag', null)
    }
    return { update: p, destroy: x }
  }
  function E0(e, t, n) {
    const r = [],
      o = { x: e.x - n, y: e.y - n, width: n * 2, height: n * 2 }
    for (const i of t.values()) Co(o, Or(i)) > 0 && r.push(i)
    return r
  }
  const S0 = 250
  function P0(e, t, n, r) {
    var a, l
    let o = [],
      i = 1 / 0
    const s = E0(e, n, t + S0)
    for (const u of s) {
      const c = [
        ...(((a = u.internals.handleBounds) == null ? void 0 : a.source) ?? []),
        ...(((l = u.internals.handleBounds) == null ? void 0 : l.target) ?? [])
      ]
      for (const f of c) {
        if (r.nodeId === f.nodeId && r.type === f.type && r.id === f.id) continue
        const { x: d, y: g } = $o(u, f, f.position, !0),
          p = Math.sqrt(Math.pow(d - e.x, 2) + Math.pow(g - e.y, 2))
        p > t ||
          (p < i
            ? ((o = [{ ...f, x: d, y: g }]), (i = p))
            : p === i && o.push({ ...f, x: d, y: g }))
      }
    }
    if (!o.length) return null
    if (o.length > 1) {
      const u = r.type === 'source' ? 'target' : 'source'
      return o.find((c) => c.type === u) ?? o[0]
    }
    return o[0]
  }
  function Zu(e, t, n, r, o, i = !1) {
    var u, c, f
    const s = r.get(e)
    if (!s) return null
    const a =
        o === 'strict'
          ? (u = s.internals.handleBounds) == null
            ? void 0
            : u[t]
          : [
              ...(((c = s.internals.handleBounds) == null ? void 0 : c.source) ?? []),
              ...(((f = s.internals.handleBounds) == null ? void 0 : f.target) ?? [])
            ],
      l = (n ? (a == null ? void 0 : a.find((d) => d.id === n)) : a == null ? void 0 : a[0]) ?? null
    return l && i ? { ...l, ...$o(s, l, l.position, !0) } : l
  }
  function Xu(e, t) {
    return (
      e ||
      (t != null && t.classList.contains('target')
        ? 'target'
        : t != null && t.classList.contains('source')
          ? 'source'
          : null)
    )
  }
  function N0(e, t) {
    let n = null
    return t ? (n = !0) : e && !t && (n = !1), n
  }
  const Fu = () => !0
  function T0(
    e,
    {
      connectionMode: t,
      connectionRadius: n,
      handleId: r,
      nodeId: o,
      edgeUpdaterType: i,
      isTarget: s,
      domNode: a,
      nodeLookup: l,
      lib: u,
      autoPanOnConnect: c,
      flowId: f,
      panBy: d,
      cancelConnection: g,
      onConnectStart: p,
      onConnect: x,
      onConnectEnd: C,
      isValidConnection: $ = Fu,
      onReconnectEnd: m,
      updateConnection: _,
      getTransform: v,
      getFromHandle: b,
      autoPanSpeed: N
    }
  ) {
    const E = t0(e.target)
    let T = 0,
      D
    const { x: V, y: A } = Rn(e),
      O = E == null ? void 0 : E.elementFromPoint(V, A),
      R = Xu(i, O),
      S = a == null ? void 0 : a.getBoundingClientRect()
    if (!S || !R) return
    const M = Zu(o, R, r, l, t)
    if (!M) return
    let k = Rn(e, S),
      P = !1,
      H = null,
      I = !1,
      B = null
    function F() {
      if (!c || !S) return
      const [he, ze] = bu(k, S, N)
      d({ x: he, y: ze }), (T = requestAnimationFrame(F))
    }
    const K = { ...M, nodeId: o, type: R, position: M.position },
      se = l.get(o),
      W = {
        inProgress: !0,
        isValid: null,
        from: $o(se, K, $e.Left, !0),
        fromHandle: K,
        fromPosition: K.position,
        fromNode: se,
        to: k,
        toHandle: null,
        toPosition: hu[K.position],
        toNode: null
      }
    _(W)
    let fe = W
    p == null || p(e, { nodeId: o, handleId: r, handleType: R })
    function me(he) {
      if (!b() || !K) {
        Ce(he)
        return
      }
      const ze = v()
      ;(k = Rn(he, S)), (D = P0(ko(k, ze, !1, [1, 1]), n, l, K)), P || (F(), (P = !0))
      const G = Wu(he, {
        handle: D,
        connectionMode: t,
        fromNodeId: o,
        fromHandleId: r,
        fromType: s ? 'target' : 'source',
        isValidConnection: $,
        doc: E,
        lib: u,
        flowId: f,
        nodeLookup: l
      })
      ;(B = G.handleDomNode), (H = G.connection), (I = N0(!!D, G.isValid))
      const ae = {
        ...fe,
        isValid: I,
        to: D && I ? $u({ x: D.x, y: D.y }, ze) : k,
        toHandle: G.toHandle,
        toPosition: I && G.toHandle ? G.toHandle.position : hu[K.position],
        toNode: G.toHandle ? l.get(G.toHandle.nodeId) : null
      }
      ;(I &&
        D &&
        fe.toHandle &&
        ae.toHandle &&
        fe.toHandle.type === ae.toHandle.type &&
        fe.toHandle.nodeId === ae.toHandle.nodeId &&
        fe.toHandle.id === ae.toHandle.id &&
        fe.to.x === ae.to.x &&
        fe.to.y === ae.to.y) ||
        (_(ae), (fe = ae))
    }
    function Ce(he) {
      ;(D || B) && H && I && (x == null || x(H))
      const { inProgress: ze, ...G } = fe,
        ae = { ...G, toPosition: fe.toHandle ? fe.toPosition : null }
      C == null || C(he, ae),
        i && (m == null || m(he, ae)),
        g(),
        cancelAnimationFrame(T),
        (P = !1),
        (I = !1),
        (H = null),
        (B = null),
        E.removeEventListener('mousemove', me),
        E.removeEventListener('mouseup', Ce),
        E.removeEventListener('touchmove', me),
        E.removeEventListener('touchend', Ce)
    }
    E.addEventListener('mousemove', me),
      E.addEventListener('mouseup', Ce),
      E.addEventListener('touchmove', me),
      E.addEventListener('touchend', Ce)
  }
  function Wu(
    e,
    {
      handle: t,
      connectionMode: n,
      fromNodeId: r,
      fromHandleId: o,
      fromType: i,
      doc: s,
      lib: a,
      flowId: l,
      isValidConnection: u = Fu,
      nodeLookup: c
    }
  ) {
    const f = i === 'target',
      d = t
        ? s.querySelector(
            `.${a}-flow__handle[data-id="${l}-${t == null ? void 0 : t.nodeId}-${t == null ? void 0 : t.id}-${t == null ? void 0 : t.type}"]`
          )
        : null,
      { x: g, y: p } = Rn(e),
      x = s.elementFromPoint(g, p),
      C = x != null && x.classList.contains(`${a}-flow__handle`) ? x : d,
      $ = { handleDomNode: C, isValid: !1, connection: null, toHandle: null }
    if (C) {
      const m = Xu(void 0, C),
        _ = C.getAttribute('data-nodeid'),
        v = C.getAttribute('data-handleid'),
        b = C.classList.contains('connectable'),
        N = C.classList.contains('connectableend')
      if (!_ || !m) return $
      const E = {
        source: f ? _ : r,
        sourceHandle: f ? v : o,
        target: f ? r : _,
        targetHandle: f ? o : v
      }
      $.connection = E
      const D =
        b &&
        N &&
        (n === hr.Strict ? (f && m === 'source') || (!f && m === 'target') : _ !== r || v !== o)
      ;($.isValid = D && u(E)), ($.toHandle = Zu(_, m, v, c, n, !1))
    }
    return $
  }
  const M0 = { onPointerDown: T0, isValid: Wu }
  function H0({ domNode: e, panZoom: t, getTransform: n, getViewScale: r }) {
    const o = Ut(e)
    function i({
      translateExtent: a,
      width: l,
      height: u,
      zoomStep: c = 10,
      pannable: f = !0,
      zoomable: d = !0,
      inversePan: g = !1
    }) {
      const p = (_) => {
        const v = n()
        if (_.sourceEvent.type !== 'wheel' || !t) return
        const b =
            -_.sourceEvent.deltaY *
            (_.sourceEvent.deltaMode === 1 ? 0.05 : _.sourceEvent.deltaMode ? 1 : 0.002) *
            c,
          N = v[2] * Math.pow(2, b)
        t.scaleTo(N)
      }
      let x = [0, 0]
      const C = (_) => {
          ;(_.sourceEvent.type === 'mousedown' || _.sourceEvent.type === 'touchstart') &&
            (x = [
              _.sourceEvent.clientX ?? _.sourceEvent.touches[0].clientX,
              _.sourceEvent.clientY ?? _.sourceEvent.touches[0].clientY
            ])
        },
        $ = (_) => {
          const v = n()
          if ((_.sourceEvent.type !== 'mousemove' && _.sourceEvent.type !== 'touchmove') || !t)
            return
          const b = [
              _.sourceEvent.clientX ?? _.sourceEvent.touches[0].clientX,
              _.sourceEvent.clientY ?? _.sourceEvent.touches[0].clientY
            ],
            N = [b[0] - x[0], b[1] - x[1]]
          x = b
          const E = r() * Math.max(v[2], Math.log(v[2])) * (g ? -1 : 1),
            T = { x: v[0] - N[0] * E, y: v[1] - N[1] * E },
            D = [
              [0, 0],
              [l, u]
            ]
          t.setViewportConstrained({ x: T.x, y: T.y, zoom: v[2] }, D, a)
        },
        m = gu()
          .on('start', C)
          .on('zoom', f ? $ : null)
          .on('zoom.wheel', d ? p : null)
      o.call(m, {})
    }
    function s() {
      o.on('zoom', null)
    }
    return { update: i, destroy: s, pointer: on }
  }
  const V0 = (e, t) => e.x !== t.x || e.y !== t.y || e.zoom !== t.k,
    Oi = (e) => ({ x: e.x, y: e.y, zoom: e.k }),
    sa = ({ x: e, y: t, zoom: n }) => Pi.translate(e, t).scale(n),
    zr = (e, t) => e.target.closest(`.${t}`),
    Ku = (e, t) => t === 2 && Array.isArray(e) && e.includes(2),
    aa = (e, t = 0, n = () => {}) => {
      const r = typeof t == 'number' && t > 0
      return r || n(), r ? e.transition().duration(t).on('end', n) : e
    },
    qu = (e) => {
      const t = e.ctrlKey && Di() ? 10 : 1
      return -e.deltaY * (e.deltaMode === 1 ? 0.05 : e.deltaMode ? 1 : 0.002) * t
    }
  function D0({
    zoomPanValues: e,
    noWheelClassName: t,
    d3Selection: n,
    d3Zoom: r,
    panOnScrollMode: o,
    panOnScrollSpeed: i,
    zoomOnPinch: s,
    onPanZoomStart: a,
    onPanZoom: l,
    onPanZoomEnd: u
  }) {
    return (c) => {
      if (zr(c, t)) return !1
      c.preventDefault(), c.stopImmediatePropagation()
      const f = n.property('__zoom').k || 1
      if (c.ctrlKey && s) {
        const C = on(c),
          $ = qu(c),
          m = f * Math.pow(2, $)
        r.scaleTo(n, m, C, c)
        return
      }
      const d = c.deltaMode === 1 ? 20 : 1
      let g = o === Jn.Vertical ? 0 : c.deltaX * d,
        p = o === Jn.Horizontal ? 0 : c.deltaY * d
      !Di() && c.shiftKey && o !== Jn.Vertical && ((g = c.deltaY * d), (p = 0)),
        r.translateBy(n, -(g / f) * i, -(p / f) * i, { internal: !0 })
      const x = Oi(n.property('__zoom'))
      clearTimeout(e.panScrollTimeout),
        e.isPanScrolling || ((e.isPanScrolling = !0), a == null || a(c, x)),
        e.isPanScrolling &&
          (l == null || l(c, x),
          (e.panScrollTimeout = setTimeout(() => {
            u == null || u(c, x), (e.isPanScrolling = !1)
          }, 150)))
    }
  }
  function A0({ noWheelClassName: e, preventScrolling: t, d3ZoomHandler: n }) {
    return function (r, o) {
      if ((!t && r.type === 'wheel' && !r.ctrlKey) || zr(r, e)) return null
      r.preventDefault(), n.call(this, r, o)
    }
  }
  function L0({ zoomPanValues: e, onDraggingChange: t, onPanZoomStart: n }) {
    return (r) => {
      var i, s, a
      if ((i = r.sourceEvent) != null && i.internal) return
      const o = Oi(r.transform)
      ;(e.mouseButton = ((s = r.sourceEvent) == null ? void 0 : s.button) || 0),
        (e.isZoomingOrPanning = !0),
        (e.prevViewport = o),
        ((a = r.sourceEvent) == null ? void 0 : a.type) === 'mousedown' && t(!0),
        n && (n == null || n(r.sourceEvent, o))
    }
  }
  function O0({
    zoomPanValues: e,
    panOnDrag: t,
    onPaneContextMenu: n,
    onTransformChange: r,
    onPanZoom: o
  }) {
    return (i) => {
      var s, a
      ;(e.usedRightMouseButton = !!(n && Ku(t, e.mouseButton ?? 0))),
        ((s = i.sourceEvent) != null && s.sync) || r([i.transform.x, i.transform.y, i.transform.k]),
        o &&
          !((a = i.sourceEvent) != null && a.internal) &&
          (o == null || o(i.sourceEvent, Oi(i.transform)))
    }
  }
  function I0({
    zoomPanValues: e,
    panOnDrag: t,
    panOnScroll: n,
    onDraggingChange: r,
    onPanZoomEnd: o,
    onPaneContextMenu: i
  }) {
    return (s) => {
      var a
      if (
        !((a = s.sourceEvent) != null && a.internal) &&
        ((e.isZoomingOrPanning = !1),
        i &&
          Ku(t, e.mouseButton ?? 0) &&
          !e.usedRightMouseButton &&
          s.sourceEvent &&
          i(s.sourceEvent),
        (e.usedRightMouseButton = !1),
        r(!1),
        o && V0(e.prevViewport, s.transform))
      ) {
        const l = Oi(s.transform)
        ;(e.prevViewport = l),
          clearTimeout(e.timerId),
          (e.timerId = setTimeout(
            () => {
              o == null || o(s.sourceEvent, l)
            },
            n ? 150 : 0
          ))
      }
    }
  }
  function z0({
    zoomActivationKeyPressed: e,
    zoomOnScroll: t,
    zoomOnPinch: n,
    panOnDrag: r,
    panOnScroll: o,
    zoomOnDoubleClick: i,
    userSelectionActive: s,
    noWheelClassName: a,
    noPanClassName: l,
    lib: u
  }) {
    return (c) => {
      var p
      const f = e || t,
        d = n && c.ctrlKey
      if (
        c.button === 1 &&
        c.type === 'mousedown' &&
        (zr(c, `${u}-flow__node`) || zr(c, `${u}-flow__edge`))
      )
        return !0
      if (
        (!r && !f && !o && !i && !n) ||
        s ||
        (zr(c, a) && c.type === 'wheel') ||
        (zr(c, l) && (c.type !== 'wheel' || (o && c.type === 'wheel' && !e))) ||
        (!n && c.ctrlKey && c.type === 'wheel')
      )
        return !1
      if (!n && c.type === 'touchstart' && ((p = c.touches) == null ? void 0 : p.length) > 1)
        return c.preventDefault(), !1
      if (
        (!f && !o && !d && c.type === 'wheel') ||
        (!r && (c.type === 'mousedown' || c.type === 'touchstart')) ||
        (Array.isArray(r) && !r.includes(c.button) && c.type === 'mousedown')
      )
        return !1
      const g = (Array.isArray(r) && r.includes(c.button)) || !c.button || c.button <= 1
      return (!c.ctrlKey || c.type === 'wheel') && g
    }
  }
  function R0({
    domNode: e,
    minZoom: t,
    maxZoom: n,
    paneClickDistance: r,
    translateExtent: o,
    viewport: i,
    onPanZoom: s,
    onPanZoomStart: a,
    onPanZoomEnd: l,
    onDraggingChange: u
  }) {
    const c = {
        isZoomingOrPanning: !1,
        usedRightMouseButton: !1,
        prevViewport: { x: 0, y: 0, zoom: 0 },
        mouseButton: 0,
        timerId: void 0,
        panScrollTimeout: void 0,
        isPanScrolling: !1
      },
      f = e.getBoundingClientRect(),
      d = gu()
        .clickDistance(!zn(r) || r < 0 ? 0 : r)
        .scaleExtent([t, n])
        .translateExtent(o),
      g = Ut(e).call(d)
    _(
      { x: i.x, y: i.y, zoom: Lr(i.zoom, t, n) },
      [
        [0, 0],
        [f.width, f.height]
      ],
      o
    )
    const p = g.on('wheel.zoom'),
      x = g.on('dblclick.zoom')
    d.wheelDelta(qu)
    function C(O, R) {
      return g
        ? new Promise((S) => {
            d == null ||
              d.transform(
                aa(g, R == null ? void 0 : R.duration, () => S(!0)),
                O
              )
          })
        : Promise.resolve(!1)
    }
    function $({
      noWheelClassName: O,
      noPanClassName: R,
      onPaneContextMenu: S,
      userSelectionActive: M,
      panOnScroll: k,
      panOnDrag: P,
      panOnScrollMode: H,
      panOnScrollSpeed: I,
      preventScrolling: B,
      zoomOnPinch: F,
      zoomOnScroll: K,
      zoomOnDoubleClick: se,
      zoomActivationKeyPressed: ee,
      lib: W,
      onTransformChange: fe
    }) {
      M && !c.isZoomingOrPanning && m()
      const Ce =
        k && !ee && !M
          ? D0({
              zoomPanValues: c,
              noWheelClassName: O,
              d3Selection: g,
              d3Zoom: d,
              panOnScrollMode: H,
              panOnScrollSpeed: I,
              zoomOnPinch: F,
              onPanZoomStart: a,
              onPanZoom: s,
              onPanZoomEnd: l
            })
          : A0({ noWheelClassName: O, preventScrolling: B, d3ZoomHandler: p })
      if ((g.on('wheel.zoom', Ce, { passive: !1 }), !M)) {
        const ze = L0({ zoomPanValues: c, onDraggingChange: u, onPanZoomStart: a })
        d.on('start', ze)
        const G = O0({
          zoomPanValues: c,
          panOnDrag: P,
          onPaneContextMenu: !!S,
          onPanZoom: s,
          onTransformChange: fe
        })
        d.on('zoom', G)
        const ae = I0({
          zoomPanValues: c,
          panOnDrag: P,
          panOnScroll: k,
          onPaneContextMenu: S,
          onPanZoomEnd: l,
          onDraggingChange: u
        })
        d.on('end', ae)
      }
      const he = z0({
        zoomActivationKeyPressed: ee,
        panOnDrag: P,
        zoomOnScroll: K,
        panOnScroll: k,
        zoomOnDoubleClick: se,
        zoomOnPinch: F,
        userSelectionActive: M,
        noPanClassName: R,
        noWheelClassName: O,
        lib: W
      })
      d.filter(he), se ? g.on('dblclick.zoom', x) : g.on('dblclick.zoom', null)
    }
    function m() {
      d.on('zoom', null)
    }
    async function _(O, R, S) {
      const M = sa(O),
        k = d == null ? void 0 : d.constrain()(M, R, S)
      return k && (await C(k)), new Promise((P) => P(k))
    }
    async function v(O, R) {
      const S = sa(O)
      return await C(S, R), new Promise((M) => M(S))
    }
    function b(O) {
      if (g) {
        const R = sa(O),
          S = g.property('__zoom')
        ;(S.k !== O.zoom || S.x !== O.x || S.y !== O.y) &&
          (d == null || d.transform(g, R, null, { sync: !0 }))
      }
    }
    function N() {
      const O = g ? du(g.node()) : { x: 0, y: 0, k: 1 }
      return { x: O.x, y: O.y, zoom: O.k }
    }
    function E(O, R) {
      return g
        ? new Promise((S) => {
            d == null ||
              d.scaleTo(
                aa(g, R == null ? void 0 : R.duration, () => S(!0)),
                O
              )
          })
        : Promise.resolve(!1)
    }
    function T(O, R) {
      return g
        ? new Promise((S) => {
            d == null ||
              d.scaleBy(
                aa(g, R == null ? void 0 : R.duration, () => S(!0)),
                O
              )
          })
        : Promise.resolve(!1)
    }
    function D(O) {
      d == null || d.scaleExtent(O)
    }
    function V(O) {
      d == null || d.translateExtent(O)
    }
    function A(O) {
      const R = !zn(O) || O < 0 ? 0 : O
      d == null || d.clickDistance(R)
    }
    return {
      update: $,
      destroy: m,
      setViewport: v,
      setViewportConstrained: _,
      getViewport: N,
      scaleTo: E,
      scaleBy: T,
      setScaleExtent: D,
      setTranslateExtent: V,
      syncViewport: b,
      setClickDistance: A
    }
  }
  var Gu
  ;(function (e) {
    ;(e.Line = 'line'), (e.Handle = 'handle')
  })(Gu || (Gu = {}))
  var B0 = ne('<div role="button" tabindex="-1"><!></div>')
  function er(e, t) {
    ue(t, !1)
    const [n, r] = nt(),
      o = () => Q(se, '$connectable', n),
      i = () => Q(Ce, '$connectionRadius', n),
      s = () => Q(fe, '$domNode', n),
      a = () => Q(me, '$nodeLookup', n),
      l = () => Q(W, '$connectionMode', n),
      u = () => Q(G, '$lib', n),
      c = () => Q(Fe, '$autoPanOnConnect', n),
      f = () => Q(Ie, '$flowId', n),
      d = () => Q(ze, '$isValidConnectionStore', n),
      g = () => Q(Me, '$onedgecreate', n),
      p = () => Q(oe, '$onConnectAction', n),
      x = () => Q(pe, '$onConnectStartAction', n),
      C = () => Q(be, '$onConnectEndAction', n),
      $ = () => Q(he, '$viewport', n),
      m = () => Q(ht, '$connection', n),
      _ = () => Q(Oe, '$edges', n),
      v = () => Q(rt, '$connectionLookup', n),
      b = re(),
      N = re(),
      E = re(),
      T = re(),
      D = re(),
      V = re(),
      A = re(),
      O = re()
    let R = w(t, 'id', 12, void 0),
      S = w(t, 'type', 12, 'source'),
      M = w(t, 'position', 28, () => $e.Top),
      k = w(t, 'style', 12, void 0),
      P = w(t, 'isValidConnection', 12, void 0),
      H = w(t, 'onconnect', 12, void 0),
      I = w(t, 'ondisconnect', 12, void 0),
      B = w(t, 'isConnectable', 12, void 0),
      F = w(t, 'class', 12, void 0)
    const K = ur('svelteflow__node_id'),
      se = ur('svelteflow__node_connectable'),
      ee = Ue(),
      {
        connectionMode: W,
        domNode: fe,
        nodeLookup: me,
        connectionRadius: Ce,
        viewport: he,
        isValidConnection: ze,
        lib: G,
        addEdge: ae,
        onedgecreate: Me,
        panBy: Le,
        cancelConnection: Xe,
        updateConnection: te,
        autoPanOnConnect: Fe,
        edges: Oe,
        connectionLookup: rt,
        onconnect: oe,
        onconnectstart: pe,
        onconnectend: be,
        flowId: Ie,
        connection: ht
      } = ee
    function dt(Te) {
      const st = Su(Te)
      ;((st && Te.button === 0) || !st) &&
        M0.onPointerDown(Te, {
          handleId: h(E),
          nodeId: K,
          isTarget: h(b),
          connectionRadius: i(),
          domNode: s(),
          nodeLookup: a(),
          connectionMode: l(),
          lib: u(),
          autoPanOnConnect: c(),
          flowId: f(),
          isValidConnection: P() ?? d(),
          updateConnection: te,
          cancelConnection: Xe,
          panBy: Le,
          onConnect: (ye) => {
            var ct
            const lt = g() ? g()(ye) : ye
            lt && (ae(lt), (ct = p()) == null || ct(ye))
          },
          onConnectStart: (ye, lt) => {
            var ct
            ;(ct = x()) == null ||
              ct(ye, { nodeId: lt.nodeId, handleId: lt.handleId, handleType: lt.handleType })
          },
          onConnectEnd: (ye, lt) => {
            var ct
            ;(ct = C()) == null || ct(ye, lt)
          },
          getTransform: () => [$().x, $().y, $().zoom],
          getFromHandle: () => m().fromHandle
        })
    }
    let J = re(null),
      Re = re()
    ge(
      () => j(S()),
      () => {
        U(b, S() === 'target')
      }
    ),
      ge(
        () => (j(B()), o()),
        () => {
          U(N, B() !== void 0 ? B() : o())
        }
      ),
      ge(
        () => j(R()),
        () => {
          U(E, R() || null)
        }
      ),
      ge(
        () => (j(H()), j(I()), _(), v(), j(S()), j(R())),
        () => {
          ;(H() || I()) && (_(), U(Re, v().get(`${K}-${S()}${R() ? `-${R()}` : ''}`)))
        }
      ),
      ge(
        () => (h(J), h(Re), j(I()), j(H())),
        () => {
          if (h(J) && !Kv(h(Re), h(J))) {
            const Te = h(Re) ?? new Map()
            vu(h(J), Te, I()), vu(Te, h(J), H())
          }
          U(J, h(Re) ?? new Map())
        }
      ),
      ge(
        () => m(),
        () => {
          U(T, !!m().fromHandle)
        }
      ),
      ge(
        () => (m(), j(S()), h(E)),
        () => {
          var Te, st, ye
          U(
            D,
            ((Te = m().fromHandle) == null ? void 0 : Te.nodeId) === K &&
              ((st = m().fromHandle) == null ? void 0 : st.type) === S() &&
              ((ye = m().fromHandle) == null ? void 0 : ye.id) === h(E)
          )
        }
      ),
      ge(
        () => (m(), j(S()), h(E)),
        () => {
          var Te, st, ye
          U(
            V,
            ((Te = m().toHandle) == null ? void 0 : Te.nodeId) === K &&
              ((st = m().toHandle) == null ? void 0 : st.type) === S() &&
              ((ye = m().toHandle) == null ? void 0 : ye.id) === h(E)
          )
        }
      ),
      ge(
        () => (l(), m(), j(S()), h(E)),
        () => {
          var Te, st, ye
          U(
            A,
            l() === hr.Strict
              ? ((Te = m().fromHandle) == null ? void 0 : Te.type) !== S()
              : K !== ((st = m().fromHandle) == null ? void 0 : st.nodeId) ||
                  h(E) !== ((ye = m().fromHandle) == null ? void 0 : ye.id)
          )
        }
      ),
      ge(
        () => (h(V), m()),
        () => {
          U(O, h(V) && m().isValid)
        }
      ),
      vt(),
      He()
    var le = B0()
    de(le, 'data-nodeid', K)
    let $n
    var fn = X(le)
    wt(fn, t, 'default', {}),
      Z(le),
      Ee(
        (Te) => {
          de(le, 'data-handleid', h(E)),
            de(le, 'data-handlepos', M()),
            de(le, 'data-id', `${f() ?? ''}-${K ?? ''}-${R() || ''}-${S() ?? ''}`),
            ($n = $t(le, 1, wn(Te), null, $n, {
              valid: h(O),
              connectingto: h(V),
              connectingfrom: h(D),
              source: !h(b),
              target: h(b),
              connectablestart: h(N),
              connectableend: h(N),
              connectable: h(N),
              connectionindicator: h(N) && (!h(T) || h(A))
            })),
            de(le, 'style', k())
        },
        [
          () =>
            Et(['svelte-flow__handle', `svelte-flow__handle-${M()}`, 'nodrag', 'nopan', M(), F()])
        ],
        ve
      ),
      Ze('mousedown', le, dt),
      Ze('touchstart', le, dt),
      L(e, le)
    var En = ce({
      get id() {
        return R()
      },
      set id(Te) {
        R(Te), y()
      },
      get type() {
        return S()
      },
      set type(Te) {
        S(Te), y()
      },
      get position() {
        return M()
      },
      set position(Te) {
        M(Te), y()
      },
      get style() {
        return k()
      },
      set style(Te) {
        k(Te), y()
      },
      get isValidConnection() {
        return P()
      },
      set isValidConnection(Te) {
        P(Te), y()
      },
      get onconnect() {
        return H()
      },
      set onconnect(Te) {
        H(Te), y()
      },
      get ondisconnect() {
        return I()
      },
      set ondisconnect(Te) {
        I(Te), y()
      },
      get isConnectable() {
        return B()
      },
      set isConnectable(Te) {
        B(Te), y()
      },
      get class() {
        return F()
      },
      set class(Te) {
        F(Te), y()
      }
    })
    return r(), En
  }
  ie(
    er,
    {
      id: {},
      type: {},
      position: {},
      style: {},
      isValidConnection: {},
      onconnect: {},
      ondisconnect: {},
      isConnectable: {},
      class: {}
    },
    ['default'],
    [],
    !0
  )
  var Y0 = ne('<!> <!>', 1)
  function Ii(e, t) {
    const n = it(t, ['children', '$$slots', '$$events', '$$legacy', '$$host'])
    it(n, ['data', 'targetPosition', 'sourcePosition']), ue(t, !1)
    let r = w(t, 'data', 28, () => ({ label: 'Node' })),
      o = w(t, 'targetPosition', 12, void 0),
      i = w(t, 'sourcePosition', 12, void 0)
    He()
    var s = Y0(),
      a = xe(s)
    const l = ve(() => o() ?? $e.Top)
    er(a, {
      type: 'target',
      get position() {
        return h(l)
      }
    })
    var u = z(a),
      c = z(u)
    const f = ve(() => i() ?? $e.Bottom)
    return (
      er(c, {
        type: 'source',
        get position() {
          return h(f)
        }
      }),
      Ee(() => {
        var d
        return Bt(u, ` ${((d = r()) == null ? void 0 : d.label) ?? ''} `)
      }),
      L(e, s),
      ce({
        get data() {
          return r()
        },
        set data(d) {
          r(d), y()
        },
        get targetPosition() {
          return o()
        },
        set targetPosition(d) {
          o(d), y()
        },
        get sourcePosition() {
          return i()
        },
        set sourcePosition(d) {
          i(d), y()
        }
      })
    )
  }
  ie(Ii, { data: {}, targetPosition: {}, sourcePosition: {} }, [], [], !0)
  var Z0 = ne(' <!>', 1)
  function Uu(e, t) {
    const n = it(t, ['children', '$$slots', '$$events', '$$legacy', '$$host'])
    it(n, ['data', 'sourcePosition']), ue(t, !1)
    let r = w(t, 'data', 28, () => ({ label: 'Node' })),
      o = w(t, 'sourcePosition', 12, void 0)
    He(), Pe()
    var i = Z0(),
      s = xe(i),
      a = z(s)
    const l = ve(() => o() ?? $e.Bottom)
    return (
      er(a, {
        type: 'source',
        get position() {
          return h(l)
        }
      }),
      Ee(() => {
        var u
        return Bt(s, `${((u = r()) == null ? void 0 : u.label) ?? ''} `)
      }),
      L(e, i),
      ce({
        get data() {
          return r()
        },
        set data(u) {
          r(u), y()
        },
        get sourcePosition() {
          return o()
        },
        set sourcePosition(u) {
          o(u), y()
        }
      })
    )
  }
  ie(Uu, { data: {}, sourcePosition: {} }, [], [], !0)
  var X0 = ne(' <!>', 1)
  function ju(e, t) {
    const n = it(t, ['children', '$$slots', '$$events', '$$legacy', '$$host'])
    it(n, ['data', 'targetPosition']), ue(t, !1)
    let r = w(t, 'data', 28, () => ({ label: 'Node' })),
      o = w(t, 'targetPosition', 12, void 0)
    He(), Pe()
    var i = X0(),
      s = xe(i),
      a = z(s)
    const l = ve(() => o() ?? $e.Top)
    return (
      er(a, {
        type: 'target',
        get position() {
          return h(l)
        }
      }),
      Ee(() => {
        var u
        return Bt(s, `${((u = r()) == null ? void 0 : u.label) ?? ''} `)
      }),
      L(e, i),
      ce({
        get data() {
          return r()
        },
        set data(u) {
          r(u), y()
        },
        get targetPosition() {
          return o()
        },
        set targetPosition(u) {
          o(u), y()
        }
      })
    )
  }
  ie(ju, { data: {}, targetPosition: {} }, [], [], !0)
  function Ju(e, t) {
    const n = it(t, ['children', '$$slots', '$$events', '$$legacy', '$$host'])
    it(n, [])
  }
  ie(Ju, {}, [], [], !0)
  function Qu(e, t, n) {
    if (!t) return
    const r = n ? t.querySelector(n) : t
    r && r.appendChild(e)
  }
  function Rr(e, { target: t, domNode: n }) {
    return (
      Qu(e, n, t),
      {
        async update({ target: r, domNode: o }) {
          Qu(e, o, r)
        },
        destroy() {
          e.parentNode && e.parentNode.removeChild(e)
        }
      }
    )
  }
  var F0 = ne('<div><!></div>')
  function ec(e, t) {
    ue(t, !1)
    const [n, r] = nt(),
      o = () => Q(i, '$domNode', n),
      { domNode: i } = Ue()
    He()
    var s = F0(),
      a = X(s)
    wt(a, t, 'default', {}),
      Z(s),
      _t(
        s,
        (l, u) => (Rr == null ? void 0 : Rr(l, u)),
        () => ({ target: '.svelte-flow__edgelabel-renderer', domNode: o() })
      ),
      L(e, s),
      ce(),
      r()
  }
  ie(ec, {}, ['default'], [], !0)
  function tc() {
    const {
      edgeLookup: e,
      selectionRect: t,
      selectionRectMode: n,
      multiselectionKeyPressed: r,
      addSelectedEdges: o,
      unselectNodesAndEdges: i,
      elementsSelectable: s
    } = Ue()
    return (a) => {
      const l = q(e).get(a)
      if (!l) {
        console.warn('012', Dr.error012(a))
        return
      }
      ;(l.selectable || (q(s) && typeof l.selectable > 'u')) &&
        (t.set(null),
        n.set(null),
        l.selected ? l.selected && q(r) && i({ nodes: [], edges: [l] }) : o([a]))
    }
  }
  var W0 = ne('<div class="svelte-flow__edge-label" role="button" tabindex="-1"><!></div>')
  function nc(e, t) {
    ue(t, !1)
    let n = w(t, 'style', 12, void 0),
      r = w(t, 'x', 12, void 0),
      o = w(t, 'y', 12, void 0)
    const i = tc(),
      s = ur('svelteflow__edge_id')
    return (
      He(),
      ec(e, {
        children: (a, l) => {
          var u = W0(),
            c = X(u)
          wt(c, t, 'default', {}),
            Z(u),
            Ee(() => {
              de(u, 'style', 'pointer-events: all;' + n()),
                at(u, 'transform', `translate(-50%, -50%) translate(${r() ?? ''}px,${o() ?? ''}px)`)
            }),
            Ze('keyup', u, () => {}),
            Ze('click', u, () => {
              s && i(s)
            }),
            L(a, u)
        },
        $$slots: { default: !0 }
      }),
      ce({
        get style() {
          return n()
        },
        set style(a) {
          n(a), y()
        },
        get x() {
          return r()
        },
        set x(a) {
          r(a), y()
        },
        get y() {
          return o()
        },
        set y(a) {
          o(a), y()
        }
      })
    )
  }
  ie(nc, { style: {}, x: {}, y: {} }, ['default'], [], !0)
  var K0 = _e('<path fill="none" class="svelte-flow__edge-interaction"></path>'),
    q0 = _e('<path fill="none"></path><!><!>', 1)
  function Eo(e, t) {
    ue(t, !1)
    let n = w(t, 'id', 12, void 0),
      r = w(t, 'path', 12),
      o = w(t, 'label', 12, void 0),
      i = w(t, 'labelX', 12, void 0),
      s = w(t, 'labelY', 12, void 0),
      a = w(t, 'labelStyle', 12, void 0),
      l = w(t, 'markerStart', 12, void 0),
      u = w(t, 'markerEnd', 12, void 0),
      c = w(t, 'style', 12, void 0),
      f = w(t, 'interactionWidth', 12, 20),
      d = w(t, 'class', 12, void 0),
      g = f() === void 0 ? 20 : f()
    He()
    var p = q0(),
      x = xe(p),
      C = z(x)
    {
      var $ = (v) => {
        var b = K0()
        de(b, 'stroke-opacity', 0), de(b, 'stroke-width', g), Ee(() => de(b, 'd', r())), L(v, b)
      }
      ke(C, (v) => {
        g && v($)
      })
    }
    var m = z(C)
    {
      var _ = (v) => {
        nc(v, {
          get x() {
            return i()
          },
          get y() {
            return s()
          },
          get style() {
            return a()
          },
          children: (b, N) => {
            Pe()
            var E = Ae()
            Ee(() => Bt(E, o())), L(b, E)
          },
          $$slots: { default: !0 }
        })
      }
      ke(m, (v) => {
        o() && v(_)
      })
    }
    return (
      Ee(
        (v) => {
          de(x, 'id', n()),
            de(x, 'd', r()),
            $t(x, 0, wn(v)),
            de(x, 'marker-start', l()),
            de(x, 'marker-end', u()),
            de(x, 'style', c())
        },
        [() => Et(['svelte-flow__edge-path', d()])],
        ve
      ),
      L(e, p),
      ce({
        get id() {
          return n()
        },
        set id(v) {
          n(v), y()
        },
        get path() {
          return r()
        },
        set path(v) {
          r(v), y()
        },
        get label() {
          return o()
        },
        set label(v) {
          o(v), y()
        },
        get labelX() {
          return i()
        },
        set labelX(v) {
          i(v), y()
        },
        get labelY() {
          return s()
        },
        set labelY(v) {
          s(v), y()
        },
        get labelStyle() {
          return a()
        },
        set labelStyle(v) {
          a(v), y()
        },
        get markerStart() {
          return l()
        },
        set markerStart(v) {
          l(v), y()
        },
        get markerEnd() {
          return u()
        },
        set markerEnd(v) {
          u(v), y()
        },
        get style() {
          return c()
        },
        set style(v) {
          c(v), y()
        },
        get interactionWidth() {
          return f()
        },
        set interactionWidth(v) {
          f(v), y()
        },
        get class() {
          return d()
        },
        set class(v) {
          d(v), y()
        }
      })
    )
  }
  ie(
    Eo,
    {
      id: {},
      path: {},
      label: {},
      labelX: {},
      labelY: {},
      labelStyle: {},
      markerStart: {},
      markerEnd: {},
      style: {},
      interactionWidth: {},
      class: {}
    },
    [],
    [],
    !0
  )
  function zi(e, t) {
    const n = it(t, ['children', '$$slots', '$$events', '$$legacy', '$$host'])
    it(n, [
      'label',
      'labelStyle',
      'style',
      'markerStart',
      'markerEnd',
      'interactionWidth',
      'sourceX',
      'sourceY',
      'sourcePosition',
      'targetX',
      'targetY',
      'targetPosition'
    ]),
      ue(t, !1)
    const r = re(),
      o = re(),
      i = re()
    let s = w(t, 'label', 12, void 0),
      a = w(t, 'labelStyle', 12, void 0),
      l = w(t, 'style', 12, void 0),
      u = w(t, 'markerStart', 12, void 0),
      c = w(t, 'markerEnd', 12, void 0),
      f = w(t, 'interactionWidth', 12, void 0),
      d = w(t, 'sourceX', 12),
      g = w(t, 'sourceY', 12),
      p = w(t, 'sourcePosition', 12),
      x = w(t, 'targetX', 12),
      C = w(t, 'targetY', 12),
      $ = w(t, 'targetPosition', 12)
    return (
      ge(
        () => (h(r), h(o), h(i), j(d()), j(g()), j(x()), j(C()), j(p()), j($())),
        () => {
          ;((m) => (U(r, m[0]), U(o, m[1]), U(i, m[2])))(
            Tu({
              sourceX: d(),
              sourceY: g(),
              targetX: x(),
              targetY: C(),
              sourcePosition: p(),
              targetPosition: $()
            })
          )
        }
      ),
      vt(),
      He(),
      Eo(e, {
        get path() {
          return h(r)
        },
        get labelX() {
          return h(o)
        },
        get labelY() {
          return h(i)
        },
        get label() {
          return s()
        },
        get labelStyle() {
          return a()
        },
        get markerStart() {
          return u()
        },
        get markerEnd() {
          return c()
        },
        get interactionWidth() {
          return f()
        },
        get style() {
          return l()
        }
      }),
      ce({
        get label() {
          return s()
        },
        set label(m) {
          s(m), y()
        },
        get labelStyle() {
          return a()
        },
        set labelStyle(m) {
          a(m), y()
        },
        get style() {
          return l()
        },
        set style(m) {
          l(m), y()
        },
        get markerStart() {
          return u()
        },
        set markerStart(m) {
          u(m), y()
        },
        get markerEnd() {
          return c()
        },
        set markerEnd(m) {
          c(m), y()
        },
        get interactionWidth() {
          return f()
        },
        set interactionWidth(m) {
          f(m), y()
        },
        get sourceX() {
          return d()
        },
        set sourceX(m) {
          d(m), y()
        },
        get sourceY() {
          return g()
        },
        set sourceY(m) {
          g(m), y()
        },
        get sourcePosition() {
          return p()
        },
        set sourcePosition(m) {
          p(m), y()
        },
        get targetX() {
          return x()
        },
        set targetX(m) {
          x(m), y()
        },
        get targetY() {
          return C()
        },
        set targetY(m) {
          C(m), y()
        },
        get targetPosition() {
          return $()
        },
        set targetPosition(m) {
          $(m), y()
        }
      })
    )
  }
  ie(
    zi,
    {
      label: {},
      labelStyle: {},
      style: {},
      markerStart: {},
      markerEnd: {},
      interactionWidth: {},
      sourceX: {},
      sourceY: {},
      sourcePosition: {},
      targetX: {},
      targetY: {},
      targetPosition: {}
    },
    [],
    [],
    !0
  )
  function rc(e, t) {
    const n = it(t, ['children', '$$slots', '$$events', '$$legacy', '$$host'])
    it(n, [
      'label',
      'labelStyle',
      'style',
      'markerStart',
      'markerEnd',
      'interactionWidth',
      'sourceX',
      'sourceY',
      'sourcePosition',
      'targetX',
      'targetY',
      'targetPosition'
    ]),
      ue(t, !1)
    const r = re(),
      o = re(),
      i = re()
    let s = w(t, 'label', 12, void 0),
      a = w(t, 'labelStyle', 12, void 0),
      l = w(t, 'style', 12, void 0),
      u = w(t, 'markerStart', 12, void 0),
      c = w(t, 'markerEnd', 12, void 0),
      f = w(t, 'interactionWidth', 12, void 0),
      d = w(t, 'sourceX', 12),
      g = w(t, 'sourceY', 12),
      p = w(t, 'sourcePosition', 12),
      x = w(t, 'targetX', 12),
      C = w(t, 'targetY', 12),
      $ = w(t, 'targetPosition', 12)
    return (
      ge(
        () => (h(r), h(o), h(i), j(d()), j(g()), j(x()), j(C()), j(p()), j($())),
        () => {
          ;((m) => (U(r, m[0]), U(o, m[1]), U(i, m[2])))(
            Li({
              sourceX: d(),
              sourceY: g(),
              targetX: x(),
              targetY: C(),
              sourcePosition: p(),
              targetPosition: $()
            })
          )
        }
      ),
      vt(),
      He(),
      Eo(e, {
        get path() {
          return h(r)
        },
        get labelX() {
          return h(o)
        },
        get labelY() {
          return h(i)
        },
        get label() {
          return s()
        },
        get labelStyle() {
          return a()
        },
        get markerStart() {
          return u()
        },
        get markerEnd() {
          return c()
        },
        get interactionWidth() {
          return f()
        },
        get style() {
          return l()
        }
      }),
      ce({
        get label() {
          return s()
        },
        set label(m) {
          s(m), y()
        },
        get labelStyle() {
          return a()
        },
        set labelStyle(m) {
          a(m), y()
        },
        get style() {
          return l()
        },
        set style(m) {
          l(m), y()
        },
        get markerStart() {
          return u()
        },
        set markerStart(m) {
          u(m), y()
        },
        get markerEnd() {
          return c()
        },
        set markerEnd(m) {
          c(m), y()
        },
        get interactionWidth() {
          return f()
        },
        set interactionWidth(m) {
          f(m), y()
        },
        get sourceX() {
          return d()
        },
        set sourceX(m) {
          d(m), y()
        },
        get sourceY() {
          return g()
        },
        set sourceY(m) {
          g(m), y()
        },
        get sourcePosition() {
          return p()
        },
        set sourcePosition(m) {
          p(m), y()
        },
        get targetX() {
          return x()
        },
        set targetX(m) {
          x(m), y()
        },
        get targetY() {
          return C()
        },
        set targetY(m) {
          C(m), y()
        },
        get targetPosition() {
          return $()
        },
        set targetPosition(m) {
          $(m), y()
        }
      })
    )
  }
  ie(
    rc,
    {
      label: {},
      labelStyle: {},
      style: {},
      markerStart: {},
      markerEnd: {},
      interactionWidth: {},
      sourceX: {},
      sourceY: {},
      sourcePosition: {},
      targetX: {},
      targetY: {},
      targetPosition: {}
    },
    [],
    [],
    !0
  )
  function oc(e, t) {
    const n = it(t, ['children', '$$slots', '$$events', '$$legacy', '$$host'])
    it(n, [
      'label',
      'labelStyle',
      'style',
      'markerStart',
      'markerEnd',
      'interactionWidth',
      'sourceX',
      'sourceY',
      'targetX',
      'targetY'
    ]),
      ue(t, !1)
    const r = re(),
      o = re(),
      i = re()
    let s = w(t, 'label', 12, void 0),
      a = w(t, 'labelStyle', 12, void 0),
      l = w(t, 'style', 12, void 0),
      u = w(t, 'markerStart', 12, void 0),
      c = w(t, 'markerEnd', 12, void 0),
      f = w(t, 'interactionWidth', 12, void 0),
      d = w(t, 'sourceX', 12),
      g = w(t, 'sourceY', 12),
      p = w(t, 'targetX', 12),
      x = w(t, 'targetY', 12)
    return (
      ge(
        () => (h(r), h(o), h(i), j(d()), j(g()), j(p()), j(x())),
        () => {
          ;((C) => (U(r, C[0]), U(o, C[1]), U(i, C[2])))(
            ea({ sourceX: d(), sourceY: g(), targetX: p(), targetY: x() })
          )
        }
      ),
      vt(),
      He(),
      Eo(e, {
        get path() {
          return h(r)
        },
        get labelX() {
          return h(o)
        },
        get labelY() {
          return h(i)
        },
        get label() {
          return s()
        },
        get labelStyle() {
          return a()
        },
        get markerStart() {
          return u()
        },
        get markerEnd() {
          return c()
        },
        get interactionWidth() {
          return f()
        },
        get style() {
          return l()
        }
      }),
      ce({
        get label() {
          return s()
        },
        set label(C) {
          s(C), y()
        },
        get labelStyle() {
          return a()
        },
        set labelStyle(C) {
          a(C), y()
        },
        get style() {
          return l()
        },
        set style(C) {
          l(C), y()
        },
        get markerStart() {
          return u()
        },
        set markerStart(C) {
          u(C), y()
        },
        get markerEnd() {
          return c()
        },
        set markerEnd(C) {
          c(C), y()
        },
        get interactionWidth() {
          return f()
        },
        set interactionWidth(C) {
          f(C), y()
        },
        get sourceX() {
          return d()
        },
        set sourceX(C) {
          d(C), y()
        },
        get sourceY() {
          return g()
        },
        set sourceY(C) {
          g(C), y()
        },
        get targetX() {
          return p()
        },
        set targetX(C) {
          p(C), y()
        },
        get targetY() {
          return x()
        },
        set targetY(C) {
          x(C), y()
        }
      })
    )
  }
  ie(
    oc,
    {
      label: {},
      labelStyle: {},
      style: {},
      markerStart: {},
      markerEnd: {},
      interactionWidth: {},
      sourceX: {},
      sourceY: {},
      targetX: {},
      targetY: {}
    },
    [],
    [],
    !0
  )
  function ic(e, t) {
    const n = it(t, ['children', '$$slots', '$$events', '$$legacy', '$$host'])
    it(n, [
      'label',
      'labelStyle',
      'style',
      'markerStart',
      'markerEnd',
      'interactionWidth',
      'sourceX',
      'sourceY',
      'sourcePosition',
      'targetX',
      'targetY',
      'targetPosition'
    ]),
      ue(t, !1)
    const r = re(),
      o = re(),
      i = re()
    let s = w(t, 'label', 12, void 0),
      a = w(t, 'labelStyle', 12, void 0),
      l = w(t, 'style', 12, void 0),
      u = w(t, 'markerStart', 12, void 0),
      c = w(t, 'markerEnd', 12, void 0),
      f = w(t, 'interactionWidth', 12, void 0),
      d = w(t, 'sourceX', 12),
      g = w(t, 'sourceY', 12),
      p = w(t, 'sourcePosition', 12),
      x = w(t, 'targetX', 12),
      C = w(t, 'targetY', 12),
      $ = w(t, 'targetPosition', 12)
    return (
      ge(
        () => (h(r), h(o), h(i), j(d()), j(g()), j(x()), j(C()), j(p()), j($())),
        () => {
          ;((m) => (U(r, m[0]), U(o, m[1]), U(i, m[2])))(
            Li({
              sourceX: d(),
              sourceY: g(),
              targetX: x(),
              targetY: C(),
              sourcePosition: p(),
              targetPosition: $(),
              borderRadius: 0
            })
          )
        }
      ),
      vt(),
      He(),
      Eo(e, {
        get path() {
          return h(r)
        },
        get labelX() {
          return h(o)
        },
        get labelY() {
          return h(i)
        },
        get label() {
          return s()
        },
        get labelStyle() {
          return a()
        },
        get markerStart() {
          return u()
        },
        get markerEnd() {
          return c()
        },
        get interactionWidth() {
          return f()
        },
        get style() {
          return l()
        }
      }),
      ce({
        get label() {
          return s()
        },
        set label(m) {
          s(m), y()
        },
        get labelStyle() {
          return a()
        },
        set labelStyle(m) {
          a(m), y()
        },
        get style() {
          return l()
        },
        set style(m) {
          l(m), y()
        },
        get markerStart() {
          return u()
        },
        set markerStart(m) {
          u(m), y()
        },
        get markerEnd() {
          return c()
        },
        set markerEnd(m) {
          c(m), y()
        },
        get interactionWidth() {
          return f()
        },
        set interactionWidth(m) {
          f(m), y()
        },
        get sourceX() {
          return d()
        },
        set sourceX(m) {
          d(m), y()
        },
        get sourceY() {
          return g()
        },
        set sourceY(m) {
          g(m), y()
        },
        get sourcePosition() {
          return p()
        },
        set sourcePosition(m) {
          p(m), y()
        },
        get targetX() {
          return x()
        },
        set targetX(m) {
          x(m), y()
        },
        get targetY() {
          return C()
        },
        set targetY(m) {
          C(m), y()
        },
        get targetPosition() {
          return $()
        },
        set targetPosition(m) {
          $(m), y()
        }
      })
    )
  }
  ie(
    ic,
    {
      label: {},
      labelStyle: {},
      style: {},
      markerStart: {},
      markerEnd: {},
      interactionWidth: {},
      sourceX: {},
      sourceY: {},
      sourcePosition: {},
      targetX: {},
      targetY: {},
      targetPosition: {}
    },
    [],
    [],
    !0
  )
  function G0(e, t) {
    const n = e.set,
      r = t.set,
      o = q(e),
      i = q(t)
    let a = o.length === 0 && i.length > 0 ? i : o
    e.set(a)
    const l = (u) => {
      const c = n(u)
      return (a = c), r(a), c
    }
    ;(e.set = t.set = l), (e.update = t.update = (u) => l(u(a)))
  }
  function U0(e, t) {
    const n = e.set,
      r = t.set
    let o = q(t)
    e.set(o)
    const i = (s) => {
      n(s), r(s), (o = s)
    }
    ;(e.set = t.set = i), (e.update = t.update = (s) => i(s(o)))
  }
  const j0 = (e, t, n) => {
      if (!n) return
      const r = q(e),
        o = t.set,
        i = n.set
      let s = n ? q(n) : { x: 0, y: 0, zoom: 1 }
      t.set(s),
        (t.set = (a) => (o(a), i(a), (s = a), a)),
        (n.set = (a) => (r == null || r.syncViewport(a), o(a), i(a), (s = a), a)),
        (t.update = (a) => {
          t.set(a(s))
        }),
        (n.update = (a) => {
          n.set(a(s))
        })
    },
    J0 = (e, t, n, r = [0, 0], o = Ni) => {
      const { subscribe: i, set: s, update: a } = we([])
      let l = e,
        u = {},
        c = !0
      const f = (x) => (
          Ou(x, t, n, {
            elevateNodesOnSelect: c,
            nodeOrigin: r,
            nodeExtent: o,
            defaults: u,
            checkEquality: !1
          }),
          (l = x),
          s(l),
          l
        ),
        d = (x) => f(x(l)),
        g = (x) => {
          u = x
        },
        p = (x) => {
          c = x.elevateNodesOnSelect ?? c
        }
      return f(l), { subscribe: i, set: f, update: d, setDefaultOptions: g, setOptions: p }
    },
    Q0 = (e, t, n, r) => {
      const { subscribe: o, set: i, update: s } = we([])
      let a = e,
        l = {}
      const u = (d) => {
          const g = l ? d.map((p) => ({ ...l, ...p })) : d
          Ru(t, n, g), (a = g), i(a)
        },
        c = (d) => u(d(a)),
        f = (d) => {
          l = d
        }
      return u(a), { subscribe: o, set: u, update: c, setDefaultOptions: f }
    },
    sc = { input: Uu, output: ju, default: Ii, group: Ju },
    ac = { straight: oc, smoothstep: rc, default: zi, step: ic },
    e2 = ({
      nodes: e = [],
      edges: t = [],
      width: n,
      height: r,
      fitView: o,
      nodeOrigin: i,
      nodeExtent: s
    }) => {
      const a = new Map(),
        l = new Map(),
        u = new Map(),
        c = new Map(),
        f = i ?? [0, 0],
        d = s ?? Ni
      Ou(e, a, l, { nodeExtent: d, nodeOrigin: f, elevateNodesOnSelect: !1, checkEquality: !1 }),
        Ru(u, c, t)
      let g = { x: 0, y: 0, zoom: 1 }
      if (o && n && r) {
        const p = bo(a, {
          filter: (x) => !!((x.width || x.initialWidth) && (x.height || x.initialHeight))
        })
        g = js(p, n, r, 0.5, 2, 0.1)
      }
      return {
        flowId: we(null),
        nodes: J0(e, a, l, f, d),
        nodeLookup: Gt(a),
        parentLookup: Gt(l),
        edgeLookup: Gt(c),
        visibleNodes: Gt([]),
        edges: Q0(t, u, c),
        visibleEdges: Gt([]),
        connectionLookup: Gt(u),
        height: we(500),
        width: we(500),
        minZoom: we(0.5),
        maxZoom: we(2),
        nodeOrigin: we(f),
        nodeDragThreshold: we(1),
        nodeExtent: we(d),
        translateExtent: we(Ni),
        autoPanOnNodeDrag: we(!0),
        autoPanOnConnect: we(!0),
        fitViewOnInit: we(!1),
        fitViewOnInitDone: we(!1),
        fitViewOptions: we(void 0),
        panZoom: we(null),
        snapGrid: we(null),
        dragging: we(!1),
        selectionRect: we(null),
        selectionKeyPressed: we(!1),
        multiselectionKeyPressed: we(!1),
        deleteKeyPressed: we(!1),
        panActivationKeyPressed: we(!1),
        zoomActivationKeyPressed: we(!1),
        selectionRectMode: we(null),
        selectionMode: we(Ti.Partial),
        nodeTypes: we(sc),
        edgeTypes: we(ac),
        viewport: we(g),
        connectionMode: we(hr.Strict),
        domNode: we(null),
        connection: Gt(Ws),
        connectionLineType: we(Ar.Bezier),
        connectionRadius: we(20),
        isValidConnection: we(() => !0),
        nodesDraggable: we(!0),
        nodesConnectable: we(!0),
        elementsSelectable: we(!0),
        selectNodesOnDrag: we(!0),
        markers: Gt([]),
        defaultMarkerColor: we('#b1b1b7'),
        lib: Gt('svelte'),
        onlyRenderVisibleElements: we(!1),
        onerror: we(Qv),
        ondelete: we(void 0),
        onedgecreate: we(void 0),
        onconnect: we(void 0),
        onconnectstart: we(void 0),
        onconnectend: we(void 0),
        onbeforedelete: we(void 0),
        nodesInitialized: we(!1),
        edgesInitialized: we(!1),
        viewportInitialized: we(!1),
        initialized: Gt(!1)
      }
    }
  function t2(e) {
    const t = Un(
      [e.edges, e.nodes, e.nodeLookup, e.onlyRenderVisibleElements, e.viewport, e.width, e.height],
      ([n, , r, o, i, s, a]) =>
        o && s && a
          ? n.filter((u) => {
              const c = r.get(u.source),
                f = r.get(u.target)
              return (
                c &&
                f &&
                s0({
                  sourceNode: c,
                  targetNode: f,
                  width: s,
                  height: a,
                  transform: [i.x, i.y, i.zoom]
                })
              )
            })
          : n
    )
    return Un([t, e.nodes, e.nodeLookup, e.connectionMode, e.onerror], ([n, , r, o, i]) =>
      n.reduce((a, l) => {
        const u = r.get(l.source),
          c = r.get(l.target)
        if (!u || !c) return a
        const f = g0({
          id: l.id,
          sourceNode: u,
          targetNode: c,
          sourceHandle: l.sourceHandle || null,
          targetHandle: l.targetHandle || null,
          connectionMode: o,
          onError: i
        })
        return (
          f &&
            a.push({
              ...l,
              zIndex: i0({
                selected: l.selected,
                zIndex: l.zIndex,
                sourceNode: u,
                targetNode: c,
                elevateOnSelect: !1
              }),
              ...f
            }),
          a
        )
      }, [])
    )
  }
  function n2(e) {
    return Un(
      [e.nodeLookup, e.onlyRenderVisibleElements, e.width, e.height, e.viewport, e.nodes],
      ([t, n, r, o, i]) => {
        const s = [i.x, i.y, i.zoom]
        return n ? pu(t, { x: 0, y: 0, width: r, height: o }, s, !0) : Array.from(t.values())
      }
    )
  }
  const Ri = Symbol()
  function lc({
    nodes: e,
    edges: t,
    width: n,
    height: r,
    fitView: o,
    nodeOrigin: i,
    nodeExtent: s
  }) {
    const a = e2({
      nodes: e,
      edges: t,
      width: n,
      height: r,
      fitView: o,
      nodeOrigin: i,
      nodeExtent: s
    })
    function l(k) {
      a.nodeTypes.set({ ...sc, ...k })
    }
    function u(k) {
      a.edgeTypes.set({ ...ac, ...k })
    }
    function c(k) {
      const P = q(a.edges)
      a.edges.set(u0(k, P))
    }
    const f = (k, P = !1) => {
      var I
      const H = q(a.nodeLookup)
      for (const [B, F] of k) {
        const K = (I = H.get(B)) == null ? void 0 : I.internals.userNode
        K && ((K.position = F.position), (K.dragging = P))
      }
      a.nodes.update((B) => B)
    }
    function d(k) {
      var F, K, se
      const P = q(a.nodeLookup),
        H = q(a.parentLookup),
        { changes: I, updatedInternals: B } = x0(
          k,
          P,
          q(a.parentLookup),
          q(a.domNode),
          q(a.nodeOrigin)
        )
      if (B) {
        if (
          (m0(P, H, { nodeOrigin: i, nodeExtent: s }),
          !q(a.fitViewOnInitDone) && q(a.fitViewOnInit))
        ) {
          const ee = q(a.fitViewOptions),
            W = p({ ...ee, nodes: ee == null ? void 0 : ee.nodes })
          a.fitViewOnInitDone.set(W)
        }
        for (const ee of I) {
          const W = (F = P.get(ee.id)) == null ? void 0 : F.internals.userNode
          if (W)
            switch (ee.type) {
              case 'dimensions': {
                const fe = { ...W.measured, ...ee.dimensions }
                ee.setAttributes &&
                  ((W.width = ((K = ee.dimensions) == null ? void 0 : K.width) ?? W.width),
                  (W.height = ((se = ee.dimensions) == null ? void 0 : se.height) ?? W.height)),
                  (W.measured = fe)
                break
              }
              case 'position':
                W.position = ee.position ?? W.position
                break
            }
        }
        a.nodes.update((ee) => ee), q(a.nodesInitialized) || a.nodesInitialized.set(!0)
      }
    }
    function g(k) {
      const P = q(a.panZoom),
        H = q(a.domNode)
      if (!P || !H) return Promise.resolve(!1)
      const { width: I, height: B } = Qs(H),
        F = mu(q(a.nodeLookup), k)
      return yu(
        { nodes: F, width: I, height: B, minZoom: q(a.minZoom), maxZoom: q(a.maxZoom), panZoom: P },
        k
      )
    }
    function p(k) {
      const P = q(a.panZoom)
      if (!P) return !1
      const H = mu(q(a.nodeLookup), k)
      return (
        yu(
          {
            nodes: H,
            width: q(a.width),
            height: q(a.height),
            minZoom: q(a.minZoom),
            maxZoom: q(a.maxZoom),
            panZoom: P
          },
          k
        ),
        H.size > 0
      )
    }
    function x(k, P) {
      const H = q(a.panZoom)
      return H ? H.scaleBy(k, P) : Promise.resolve(!1)
    }
    function C(k) {
      return x(1.2, k)
    }
    function $(k) {
      return x(1 / 1.2, k)
    }
    function m(k) {
      const P = q(a.panZoom)
      P && (P.setScaleExtent([k, q(a.maxZoom)]), a.minZoom.set(k))
    }
    function _(k) {
      const P = q(a.panZoom)
      P && (P.setScaleExtent([q(a.minZoom), k]), a.maxZoom.set(k))
    }
    function v(k) {
      const P = q(a.panZoom)
      P && (P.setTranslateExtent(k), a.translateExtent.set(k))
    }
    function b(k) {
      let P = !1
      return (
        k.forEach((H) => {
          H.selected && ((H.selected = !1), (P = !0))
        }),
        P
      )
    }
    function N(k) {
      var P
      ;(P = q(a.panZoom)) == null || P.setClickDistance(k)
    }
    function E(k) {
      b((k == null ? void 0 : k.nodes) || q(a.nodes)) && a.nodes.set(q(a.nodes)),
        b((k == null ? void 0 : k.edges) || q(a.edges)) && a.edges.set(q(a.edges))
    }
    a.deleteKeyPressed.subscribe(async (k) => {
      var P
      if (k) {
        const H = q(a.nodes),
          I = q(a.edges),
          B = H.filter((ee) => ee.selected),
          F = I.filter((ee) => ee.selected),
          { nodes: K, edges: se } = await wu({
            nodesToRemove: B,
            edgesToRemove: F,
            nodes: H,
            edges: I,
            onBeforeDelete: q(a.onbeforedelete)
          })
        ;(K.length || se.length) &&
          (a.nodes.update((ee) => ee.filter((W) => !K.some((fe) => fe.id === W.id))),
          a.edges.update((ee) => ee.filter((W) => !se.some((fe) => fe.id === W.id))),
          (P = q(a.ondelete)) == null || P({ nodes: K, edges: se }))
      }
    })
    function T(k) {
      const P = q(a.multiselectionKeyPressed)
      a.nodes.update((H) =>
        H.map((I) => {
          const B = k.includes(I.id),
            F = (P && I.selected) || B
          return (I.selected = F), I
        })
      ),
        P || a.edges.update((H) => H.map((I) => ((I.selected = !1), I)))
    }
    function D(k) {
      const P = q(a.multiselectionKeyPressed)
      a.edges.update((H) =>
        H.map((I) => {
          const B = k.includes(I.id),
            F = (P && I.selected) || B
          return (I.selected = F), I
        })
      ),
        P || a.nodes.update((H) => H.map((I) => ((I.selected = !1), I)))
    }
    function V(k) {
      var H
      const P = (H = q(a.nodes)) == null ? void 0 : H.find((I) => I.id === k)
      if (!P) {
        console.warn('012', Dr.error012(k))
        return
      }
      a.selectionRect.set(null),
        a.selectionRectMode.set(null),
        P.selected
          ? P.selected && q(a.multiselectionKeyPressed) && E({ nodes: [P], edges: [] })
          : T([k])
    }
    function A(k) {
      const P = q(a.viewport)
      return b0({
        delta: k,
        panZoom: q(a.panZoom),
        transform: [P.x, P.y, P.zoom],
        translateExtent: q(a.translateExtent),
        width: q(a.width),
        height: q(a.height)
      })
    }
    const O = we(Ws),
      R = (k) => {
        O.set({ ...k })
      }
    function S() {
      O.set(Ws)
    }
    function M() {
      a.fitViewOnInitDone.set(!1),
        a.selectionRect.set(null),
        a.selectionRectMode.set(null),
        a.snapGrid.set(null),
        a.isValidConnection.set(() => !0),
        E(),
        S()
    }
    return {
      ...a,
      visibleEdges: t2(a),
      visibleNodes: n2(a),
      connection: Un([O, a.viewport], ([k, P]) =>
        k.inProgress ? { ...k, to: ko(k.to, [P.x, P.y, P.zoom]) } : { ...k }
      ),
      markers: Un([a.edges, a.defaultMarkerColor, a.flowId], ([k, P, H]) =>
        h0(k, { defaultColor: P, id: H })
      ),
      initialized: (() => {
        let k = !1
        const P = q(a.nodes).length,
          H = q(a.edges).length
        return Un(
          [a.nodesInitialized, a.edgesInitialized, a.viewportInitialized],
          ([I, B, F]) => k || (P === 0 ? (k = F) : H === 0 ? (k = F && I) : (k = F && I && B), k)
        )
      })(),
      syncNodeStores: (k) => G0(a.nodes, k),
      syncEdgeStores: (k) => U0(a.edges, k),
      syncViewport: (k) => j0(a.panZoom, a.viewport, k),
      setNodeTypes: l,
      setEdgeTypes: u,
      addEdge: c,
      updateNodePositions: f,
      updateNodeInternals: d,
      zoomIn: C,
      zoomOut: $,
      fitView: (k) => g(k),
      setMinZoom: m,
      setMaxZoom: _,
      setTranslateExtent: v,
      setPaneClickDistance: N,
      unselectNodesAndEdges: E,
      addSelectedNodes: T,
      addSelectedEdges: D,
      handleNodeSelection: V,
      panBy: A,
      updateConnection: R,
      cancelConnection: S,
      reset: M
    }
  }
  function Ue() {
    const e = ur(Ri)
    if (!e)
      throw new Error(
        'In order to use useStore you need to wrap your component in a <SvelteFlowProvider />'
      )
    return e.getStore()
  }
  function r2({
    nodes: e,
    edges: t,
    width: n,
    height: r,
    fitView: o,
    nodeOrigin: i,
    nodeExtent: s
  }) {
    const a = lc({
      nodes: e,
      edges: t,
      width: n,
      height: r,
      fitView: o,
      nodeOrigin: i,
      nodeExtent: s
    })
    return Sr(Ri, { getStore: () => a }), a
  }
  function la(e, t) {
    const {
        panZoom: n,
        minZoom: r,
        maxZoom: o,
        initialViewport: i,
        viewport: s,
        dragging: a,
        translateExtent: l,
        paneClickDistance: u
      } = t,
      c = R0({
        domNode: e,
        minZoom: r,
        maxZoom: o,
        translateExtent: l,
        viewport: i,
        paneClickDistance: u,
        onDraggingChange: a.set
      }),
      f = c.getViewport()
    return (
      s.set(f),
      n.set(c),
      c.update(t),
      {
        update(d) {
          c.update(d)
        }
      }
    )
  }
  var o2 = ne('<div class="svelte-flow__zoom svelte-4xkw84"><!></div>')
  const i2 = {
    hash: 'svelte-4xkw84',
    code: '.svelte-flow__zoom.svelte-4xkw84 {width:100%;height:100%;position:absolute;top:0;left:0;z-index:4;}'
  }
  function uc(e, t) {
    ue(t, !1), et(e, i2)
    const [n, r] = nt(),
      o = () => Q(H, '$panActivationKeyPressed', n),
      i = () => Q(R, '$minZoom', n),
      s = () => Q(S, '$maxZoom', n),
      a = () => Q(I, '$zoomActivationKeyPressed', n),
      l = () => Q(O, '$selectionRect', n),
      u = () => Q(k, '$translateExtent', n),
      c = () => Q(P, '$lib', n),
      f = re(),
      d = re(),
      g = re()
    let p = w(t, 'initialViewport', 12, void 0),
      x = w(t, 'onMoveStart', 12, void 0),
      C = w(t, 'onMove', 12, void 0),
      $ = w(t, 'onMoveEnd', 12, void 0),
      m = w(t, 'panOnScrollMode', 12),
      _ = w(t, 'preventScrolling', 12),
      v = w(t, 'zoomOnScroll', 12),
      b = w(t, 'zoomOnDoubleClick', 12),
      N = w(t, 'zoomOnPinch', 12),
      E = w(t, 'panOnDrag', 12),
      T = w(t, 'panOnScroll', 12),
      D = w(t, 'paneClickDistance', 12)
    const {
        viewport: V,
        panZoom: A,
        selectionRect: O,
        minZoom: R,
        maxZoom: S,
        dragging: M,
        translateExtent: k,
        lib: P,
        panActivationKeyPressed: H,
        zoomActivationKeyPressed: I,
        viewportInitialized: B
      } = Ue(),
      F = (W) => V.set({ x: W[0], y: W[1], zoom: W[2] })
    rn(() => {
      ai(B, !0)
    }),
      ge(
        () => j(p()),
        () => {
          U(f, p() || { x: 0, y: 0, zoom: 1 })
        }
      ),
      ge(
        () => (o(), j(E())),
        () => {
          U(d, o() || E())
        }
      ),
      ge(
        () => (o(), j(T())),
        () => {
          U(g, o() || T())
        }
      ),
      vt(),
      He()
    var K = o2(),
      se = X(K)
    wt(se, t, 'default', {}),
      Z(K),
      _t(
        K,
        (W, fe) => (la == null ? void 0 : la(W, fe)),
        () => ({
          viewport: V,
          minZoom: i(),
          maxZoom: s(),
          initialViewport: h(f),
          dragging: M,
          panZoom: A,
          onPanZoomStart: x(),
          onPanZoom: C(),
          onPanZoomEnd: $(),
          zoomOnScroll: v(),
          zoomOnDoubleClick: b(),
          zoomOnPinch: N(),
          panOnScroll: h(g),
          panOnDrag: h(d),
          panOnScrollSpeed: 0.5,
          panOnScrollMode: m() || Jn.Free,
          zoomActivationKeyPressed: a(),
          preventScrolling: typeof _() == 'boolean' ? _() : !0,
          noPanClassName: 'nopan',
          noWheelClassName: 'nowheel',
          userSelectionActive: !!l(),
          translateExtent: u(),
          lib: c(),
          paneClickDistance: D(),
          onTransformChange: F
        })
      ),
      L(e, K)
    var ee = ce({
      get initialViewport() {
        return p()
      },
      set initialViewport(W) {
        p(W), y()
      },
      get onMoveStart() {
        return x()
      },
      set onMoveStart(W) {
        x(W), y()
      },
      get onMove() {
        return C()
      },
      set onMove(W) {
        C(W), y()
      },
      get onMoveEnd() {
        return $()
      },
      set onMoveEnd(W) {
        $(W), y()
      },
      get panOnScrollMode() {
        return m()
      },
      set panOnScrollMode(W) {
        m(W), y()
      },
      get preventScrolling() {
        return _()
      },
      set preventScrolling(W) {
        _(W), y()
      },
      get zoomOnScroll() {
        return v()
      },
      set zoomOnScroll(W) {
        v(W), y()
      },
      get zoomOnDoubleClick() {
        return b()
      },
      set zoomOnDoubleClick(W) {
        b(W), y()
      },
      get zoomOnPinch() {
        return N()
      },
      set zoomOnPinch(W) {
        N(W), y()
      },
      get panOnDrag() {
        return E()
      },
      set panOnDrag(W) {
        E(W), y()
      },
      get panOnScroll() {
        return T()
      },
      set panOnScroll(W) {
        T(W), y()
      },
      get paneClickDistance() {
        return D()
      },
      set paneClickDistance(W) {
        D(W), y()
      }
    })
    return r(), ee
  }
  ie(
    uc,
    {
      initialViewport: {},
      onMoveStart: {},
      onMove: {},
      onMoveEnd: {},
      panOnScrollMode: {},
      preventScrolling: {},
      zoomOnScroll: {},
      zoomOnDoubleClick: {},
      zoomOnPinch: {},
      panOnDrag: {},
      panOnScroll: {},
      paneClickDistance: {}
    },
    ['default'],
    [],
    !0
  )
  function cc(e, t) {
    return (n) => {
      n.target === t && (e == null || e(n))
    }
  }
  function dc(e) {
    return (t) => {
      const n = e.includes(t.id)
      return t.selected !== n && (t.selected = n), t
    }
  }
  var s2 = ne('<div><!></div>')
  const a2 = {
    hash: 'svelte-1esy7hx',
    code: '.svelte-flow__pane.svelte-1esy7hx {position:absolute;top:0;left:0;width:100%;height:100%;}'
  }
  function fc(e, t) {
    ue(t, !1), et(e, a2)
    const [n, r] = nt(),
      o = () => Q(S, '$panActivationKeyPressed', n),
      i = () => Q(O, '$selectionKeyPressed', n),
      s = () => Q(V, '$selectionRect', n),
      a = () => Q(D, '$elementsSelectable', n),
      l = () => Q(A, '$selectionRectMode', n),
      u = () => Q(N, '$edges', n),
      c = () => Q(b, '$nodeLookup', n),
      f = () => Q(E, '$viewport', n),
      d = () => Q(R, '$selectionMode', n),
      g = () => Q(T, '$dragging', n),
      p = re(),
      x = re(),
      C = re()
    let $ = w(t, 'panOnDrag', 12, void 0),
      m = w(t, 'selectionOnDrag', 12, void 0)
    const _ = ii(),
      {
        nodes: v,
        nodeLookup: b,
        edges: N,
        viewport: E,
        dragging: T,
        elementsSelectable: D,
        selectionRect: V,
        selectionRectMode: A,
        selectionKeyPressed: O,
        selectionMode: R,
        panActivationKeyPressed: S,
        unselectNodesAndEdges: M
      } = Ue()
    let k = re(),
      P = null,
      H = [],
      I = !1
    function B(G) {
      if (I) {
        I = !1
        return
      }
      _('paneclick', { event: G }), M(), A.set(null)
    }
    function F(G) {
      var Le, Xe
      if (
        ((P = h(k).getBoundingClientRect()),
        !D || !h(x) || G.button !== 0 || G.target !== h(k) || !P)
      )
        return
      ;(Xe = (Le = G.target) == null ? void 0 : Le.setPointerCapture) == null ||
        Xe.call(Le, G.pointerId)
      const { x: ae, y: Me } = Rn(G, P)
      M(), V.set({ width: 0, height: 0, startX: ae, startY: Me, x: ae, y: Me })
    }
    function K(G) {
      if (!h(x) || !P || !s()) return
      I = !0
      const ae = Rn(G, P),
        Me = s().startX ?? 0,
        Le = s().startY ?? 0,
        Xe = {
          ...s(),
          x: ae.x < Me ? ae.x : Me,
          y: ae.y < Le ? ae.y : Le,
          width: Math.abs(ae.x - Me),
          height: Math.abs(ae.y - Le)
        },
        te = H.map((oe) => oe.id),
        Fe = qs(H, u()).map((oe) => oe.id)
      H = pu(c(), Xe, [f().x, f().y, f().zoom], d() === Ti.Partial, !0)
      const Oe = qs(H, u()).map((oe) => oe.id),
        rt = H.map((oe) => oe.id)
      ;(te.length !== rt.length || rt.some((oe) => !te.includes(oe))) &&
        v.update((oe) => oe.map(dc(rt))),
        (Fe.length !== Oe.length || Oe.some((oe) => !Fe.includes(oe))) &&
          N.update((oe) => oe.map(dc(Oe))),
        A.set('user'),
        V.set(Xe)
    }
    function se(G) {
      var ae, Me
      G.button === 0 &&
        ((Me = (ae = G.target) == null ? void 0 : ae.releasePointerCapture) == null ||
          Me.call(ae, G.pointerId),
        !h(x) && l() === 'user' && G.target === h(k) && (B == null || B(G)),
        V.set(null),
        H.length > 0 && ai(A, 'nodes'),
        i() && (I = !1))
    }
    const ee = (G) => {
      var ae
      if (Array.isArray(h(p)) && (ae = h(p)) != null && ae.includes(2)) {
        G.preventDefault()
        return
      }
      _('panecontextmenu', { event: G })
    }
    ge(
      () => (o(), j($())),
      () => {
        U(p, o() || $())
      }
    ),
      ge(
        () => (i(), s(), j(m()), h(p)),
        () => {
          U(x, i() || s() || (m() && h(p) !== !0))
        }
      ),
      ge(
        () => (a(), h(x), l()),
        () => {
          U(C, a() && (h(x) || l() === 'user'))
        }
      ),
      vt(),
      He()
    var W = s2(),
      fe = Ne(() => (h(C) ? void 0 : cc(B, h(k)))),
      me = Ne(() => cc(ee, h(k)))
    let Ce
    var he = X(W)
    wt(he, t, 'default', {}),
      Z(W),
      An(
        W,
        (G) => U(k, G),
        () => h(k)
      ),
      Ee(
        (G) =>
          (Ce = $t(W, 1, 'svelte-flow__pane svelte-1esy7hx', null, Ce, {
            draggable: G,
            dragging: g(),
            selection: h(x)
          })),
        [() => $() === !0 || (Array.isArray($()) && $().includes(0))],
        ve
      ),
      Ze('click', W, function (...G) {
        var ae
        ;(ae = h(fe)) == null || ae.apply(this, G)
      }),
      Ze('pointerdown', W, function (...G) {
        var ae
        ;(ae = h(C) ? F : void 0) == null || ae.apply(this, G)
      }),
      Ze('pointermove', W, function (...G) {
        var ae
        ;(ae = h(C) ? K : void 0) == null || ae.apply(this, G)
      }),
      Ze('pointerup', W, function (...G) {
        var ae
        ;(ae = h(C) ? se : void 0) == null || ae.apply(this, G)
      }),
      Ze('contextmenu', W, function (...G) {
        var ae
        ;(ae = h(me)) == null || ae.apply(this, G)
      }),
      L(e, W)
    var ze = ce({
      get panOnDrag() {
        return $()
      },
      set panOnDrag(G) {
        $(G), y()
      },
      get selectionOnDrag() {
        return m()
      },
      set selectionOnDrag(G) {
        m(G), y()
      }
    })
    return r(), ze
  }
  ie(fc, { panOnDrag: {}, selectionOnDrag: {} }, ['default'], [], !0)
  var l2 = ne('<div class="svelte-flow__viewport xyflow__viewport svelte-1floaup"><!></div>')
  const u2 = {
    hash: 'svelte-1floaup',
    code: '.svelte-flow__viewport.svelte-1floaup {width:100%;height:100%;position:absolute;top:0;left:0;}'
  }
  function gc(e, t) {
    ue(t, !1), et(e, u2)
    const [n, r] = nt(),
      o = () => Q(i, '$viewport', n),
      { viewport: i } = Ue()
    He()
    var s = l2(),
      a = X(s)
    wt(a, t, 'default', {}),
      Z(s),
      Ee(() =>
        de(
          s,
          'style',
          `transform: translate(${o().x ?? ''}px, ${o().y ?? ''}px) scale(${o().zoom ?? ''})`
        )
      ),
      L(e, s),
      ce(),
      r()
  }
  ie(gc, {}, ['default'], [], !0)
  function Br(e, t) {
    const { store: n, onDrag: r, onDragStart: o, onDragStop: i, onNodeMouseDown: s } = t,
      a = $0({
        onDrag: r,
        onDragStart: o,
        onDragStop: i,
        onNodeMouseDown: s,
        getStoreItems: () => {
          const u = q(n.snapGrid),
            c = q(n.viewport)
          return {
            nodes: q(n.nodes),
            nodeLookup: q(n.nodeLookup),
            edges: q(n.edges),
            nodeExtent: q(n.nodeExtent),
            snapGrid: u || [0, 0],
            snapToGrid: !!u,
            nodeOrigin: q(n.nodeOrigin),
            multiSelectionActive: q(n.multiselectionKeyPressed),
            domNode: q(n.domNode),
            transform: [c.x, c.y, c.zoom],
            autoPanOnNodeDrag: q(n.autoPanOnNodeDrag),
            nodesDraggable: q(n.nodesDraggable),
            selectNodesOnDrag: q(n.selectNodesOnDrag),
            nodeDragThreshold: q(n.nodeDragThreshold),
            unselectNodesAndEdges: n.unselectNodesAndEdges,
            updateNodePositions: n.updateNodePositions,
            panBy: n.panBy
          }
        }
      })
    function l(u, c) {
      if (c.disabled) {
        a.destroy()
        return
      }
      a.update({
        domNode: u,
        noDragClassName: c.noDragClass,
        handleSelector: c.handleSelector,
        nodeId: c.nodeId,
        isSelectable: c.isSelectable,
        nodeClickDistance: c.nodeClickDistance
      })
    }
    return (
      l(e, t),
      {
        update(u) {
          l(e, u)
        },
        destroy() {
          a.destroy()
        }
      }
    )
  }
  function c2({
    width: e,
    height: t,
    initialWidth: n,
    initialHeight: r,
    measuredWidth: o,
    measuredHeight: i
  }) {
    if (o === void 0 && i === void 0) {
      const s = e ?? n,
        a = t ?? r
      return { width: s ? `width:${s}px;` : '', height: a ? `height:${a}px;` : '' }
    }
    return { width: e ? `width:${e}px;` : '', height: t ? `height:${t}px;` : '' }
  }
  var d2 = ne('<div><!></div>')
  function hc(e, t) {
    ue(t, !1)
    const [n, r] = nt(),
      o = () => Q(me, '$nodeTypes', n),
      i = () => Q(ae, '$elementsSelectable', n),
      s = () => Q(Me, '$nodesDraggable', n),
      a = () => Q(Fe, '$connectableStore', n),
      l = re(void 0, !0),
      u = re(void 0, !0),
      c = re(void 0, !0),
      f = re(void 0, !0)
    let d = w(t, 'node', 13),
      g = w(t, 'id', 13),
      p = w(t, 'data', 29, () => ({})),
      x = w(t, 'selected', 13, !1),
      C = w(t, 'draggable', 13, void 0),
      $ = w(t, 'selectable', 13, void 0),
      m = w(t, 'connectable', 13, !0),
      _ = w(t, 'deletable', 13, !0),
      v = w(t, 'hidden', 13, !1),
      b = w(t, 'dragging', 13, !1),
      N = w(t, 'resizeObserver', 13, null),
      E = w(t, 'style', 13, void 0),
      T = w(t, 'type', 13, 'default'),
      D = w(t, 'isParent', 13, !1),
      V = w(t, 'positionX', 13),
      A = w(t, 'positionY', 13),
      O = w(t, 'sourcePosition', 13, void 0),
      R = w(t, 'targetPosition', 13, void 0),
      S = w(t, 'zIndex', 13),
      M = w(t, 'measuredWidth', 13, void 0),
      k = w(t, 'measuredHeight', 13, void 0),
      P = w(t, 'initialWidth', 13, void 0),
      H = w(t, 'initialHeight', 13, void 0),
      I = w(t, 'width', 13, void 0),
      B = w(t, 'height', 13, void 0),
      F = w(t, 'dragHandle', 13, void 0),
      K = w(t, 'initialized', 13, !1),
      se = w(t, 'parentId', 13, void 0),
      ee = w(t, 'nodeClickDistance', 13, void 0),
      W = w(t, 'class', 13, '')
    const fe = Ue(),
      {
        nodeTypes: me,
        nodeDragThreshold: Ce,
        selectNodesOnDrag: he,
        handleNodeSelection: ze,
        updateNodeInternals: G,
        elementsSelectable: ae,
        nodesDraggable: Me
      } = fe
    let Le = re(void 0, !0),
      Xe = re(null, !0)
    const te = ii(),
      Fe = we(m())
    let Oe = re(void 0, !0),
      rt = re(void 0, !0),
      oe = re(void 0, !0)
    Sr('svelteflow__node_id', g()),
      Sr('svelteflow__node_connectable', Fe),
      $s(() => {
        var J
        h(Xe) && ((J = N()) == null || J.unobserve(h(Xe)))
      })
    function pe(J) {
      $() && (!q(he) || !C() || q(Ce) > 0) && ze(g()),
        te('nodeclick', { node: d().internals.userNode, event: J })
    }
    ge(
      () => j(T()),
      () => {
        U(l, T() || 'default')
      }
    ),
      ge(
        () => (o(), h(l)),
        () => {
          U(u, !!o()[h(l)])
        }
      ),
      ge(
        () => (o(), h(l), Ii),
        () => {
          U(c, o()[h(l)] || Ii)
        }
      ),
      ge(
        () => (h(u), j(T())),
        () => {
          h(u) || console.warn('003', Dr.error003(T()))
        }
      ),
      ge(
        () => (j(I()), j(B()), j(P()), j(H()), j(M()), j(k())),
        () => {
          U(
            f,
            c2({
              width: I(),
              height: B(),
              initialWidth: P(),
              initialHeight: H(),
              measuredWidth: M(),
              measuredHeight: k()
            })
          )
        }
      ),
      ge(
        () => j(m()),
        () => {
          Fe.set(!!m())
        }
      ),
      ge(
        () => (h(Oe), h(l), h(rt), j(O()), h(oe), j(R()), j(g()), h(Le)),
        () => {
          ;((h(Oe) && h(l) !== h(Oe)) || (h(rt) && O() !== h(rt)) || (h(oe) && R() !== h(oe))) &&
            requestAnimationFrame(() =>
              G(new Map([[g(), { id: g(), nodeElement: h(Le), force: !0 }]]))
            ),
            U(Oe, h(l)),
            U(rt, O()),
            U(oe, R())
        }
      ),
      ge(
        () => (j(N()), h(Le), h(Xe), j(K())),
        () => {
          N() &&
            (h(Le) !== h(Xe) || !K()) &&
            (h(Xe) && N().unobserve(h(Xe)), h(Le) && N().observe(h(Le)), U(Xe, h(Le)))
        }
      ),
      vt(),
      He(!0)
    var be = tt(),
      Ie = xe(be)
    {
      var ht = (J) => {
        var Re = d2()
        let le
        var $n = X(Re)
        const fn = ve(() => x() ?? !1),
          En = ve(() => $() ?? i() ?? !0),
          Te = ve(() => _() ?? !0),
          st = ve(() => C() ?? s() ?? !0)
        fl(
          $n,
          () => h(c),
          (ye, lt) => {
            lt(ye, {
              get data() {
                return p()
              },
              get id() {
                return g()
              },
              get selected() {
                return h(fn)
              },
              get selectable() {
                return h(En)
              },
              get deletable() {
                return h(Te)
              },
              get sourcePosition() {
                return O()
              },
              get targetPosition() {
                return R()
              },
              get zIndex() {
                return S()
              },
              get dragging() {
                return b()
              },
              get draggable() {
                return h(st)
              },
              get dragHandle() {
                return F()
              },
              get parentId() {
                return se()
              },
              get type() {
                return h(l)
              },
              get isConnectable() {
                return a()
              },
              get positionAbsoluteX() {
                return V()
              },
              get positionAbsoluteY() {
                return A()
              },
              get width() {
                return I()
              },
              get height() {
                return B()
              }
            })
          }
        ),
          Z(Re),
          _t(
            Re,
            (ye, lt) => (Br == null ? void 0 : Br(ye, lt)),
            () => ({
              nodeId: g(),
              isSelectable: $(),
              disabled: !1,
              handleSelector: F(),
              noDragClass: 'nodrag',
              nodeClickDistance: ee(),
              onNodeMouseDown: ze,
              onDrag: (ye, lt, ct, Jt) => {
                te('nodedrag', { event: ye, targetNode: ct, nodes: Jt })
              },
              onDragStart: (ye, lt, ct, Jt) => {
                te('nodedragstart', { event: ye, targetNode: ct, nodes: Jt })
              },
              onDragStop: (ye, lt, ct, Jt) => {
                te('nodedragstop', { event: ye, targetNode: ct, nodes: Jt })
              },
              store: fe
            })
          ),
          An(
            Re,
            (ye) => U(Le, ye),
            () => h(Le)
          ),
          Rt(() => Ze('click', Re, pe)),
          Rt(() => Ze('mouseenter', Re, (ye) => te('nodemouseenter', { node: d(), event: ye }))),
          Rt(() => Ze('mouseleave', Re, (ye) => te('nodemouseleave', { node: d(), event: ye }))),
          Rt(() => Ze('mousemove', Re, (ye) => te('nodemousemove', { node: d(), event: ye }))),
          Rt(() => Ze('contextmenu', Re, (ye) => te('nodecontextmenu', { node: d(), event: ye }))),
          Ee(
            (ye) => {
              de(Re, 'data-id', g()),
                (le = $t(Re, 1, wn(ye), null, le, {
                  dragging: b(),
                  selected: x(),
                  draggable: C(),
                  connectable: m(),
                  selectable: $(),
                  nopan: C(),
                  parent: D()
                })),
                de(Re, 'style', `${E() ?? ''};${h(f).width ?? ''}${h(f).height ?? ''}`),
                at(Re, 'z-index', S()),
                at(Re, 'transform', `translate(${V() ?? ''}px, ${A() ?? ''}px)`),
                at(Re, 'visibility', K() ? 'visible' : 'hidden')
            },
            [() => Et(['svelte-flow__node', `svelte-flow__node-${h(l)}`, W()])],
            ve
          ),
          L(J, Re)
      }
      ke(Ie, (J) => {
        v() || J(ht)
      })
    }
    L(e, be)
    var dt = ce({
      get node() {
        return d()
      },
      set node(J) {
        d(J), y()
      },
      get id() {
        return g()
      },
      set id(J) {
        g(J), y()
      },
      get data() {
        return p()
      },
      set data(J) {
        p(J), y()
      },
      get selected() {
        return x()
      },
      set selected(J) {
        x(J), y()
      },
      get draggable() {
        return C()
      },
      set draggable(J) {
        C(J), y()
      },
      get selectable() {
        return $()
      },
      set selectable(J) {
        $(J), y()
      },
      get connectable() {
        return m()
      },
      set connectable(J) {
        m(J), y()
      },
      get deletable() {
        return _()
      },
      set deletable(J) {
        _(J), y()
      },
      get hidden() {
        return v()
      },
      set hidden(J) {
        v(J), y()
      },
      get dragging() {
        return b()
      },
      set dragging(J) {
        b(J), y()
      },
      get resizeObserver() {
        return N()
      },
      set resizeObserver(J) {
        N(J), y()
      },
      get style() {
        return E()
      },
      set style(J) {
        E(J), y()
      },
      get type() {
        return T()
      },
      set type(J) {
        T(J), y()
      },
      get isParent() {
        return D()
      },
      set isParent(J) {
        D(J), y()
      },
      get positionX() {
        return V()
      },
      set positionX(J) {
        V(J), y()
      },
      get positionY() {
        return A()
      },
      set positionY(J) {
        A(J), y()
      },
      get sourcePosition() {
        return O()
      },
      set sourcePosition(J) {
        O(J), y()
      },
      get targetPosition() {
        return R()
      },
      set targetPosition(J) {
        R(J), y()
      },
      get zIndex() {
        return S()
      },
      set zIndex(J) {
        S(J), y()
      },
      get measuredWidth() {
        return M()
      },
      set measuredWidth(J) {
        M(J), y()
      },
      get measuredHeight() {
        return k()
      },
      set measuredHeight(J) {
        k(J), y()
      },
      get initialWidth() {
        return P()
      },
      set initialWidth(J) {
        P(J), y()
      },
      get initialHeight() {
        return H()
      },
      set initialHeight(J) {
        H(J), y()
      },
      get width() {
        return I()
      },
      set width(J) {
        I(J), y()
      },
      get height() {
        return B()
      },
      set height(J) {
        B(J), y()
      },
      get dragHandle() {
        return F()
      },
      set dragHandle(J) {
        F(J), y()
      },
      get initialized() {
        return K()
      },
      set initialized(J) {
        K(J), y()
      },
      get parentId() {
        return se()
      },
      set parentId(J) {
        se(J), y()
      },
      get nodeClickDistance() {
        return ee()
      },
      set nodeClickDistance(J) {
        ee(J), y()
      },
      get class() {
        return W()
      },
      set class(J) {
        W(J), y()
      }
    })
    return r(), dt
  }
  ie(
    hc,
    {
      node: {},
      id: {},
      data: {},
      selected: {},
      draggable: {},
      selectable: {},
      connectable: {},
      deletable: {},
      hidden: {},
      dragging: {},
      resizeObserver: {},
      style: {},
      type: {},
      isParent: {},
      positionX: {},
      positionY: {},
      sourcePosition: {},
      targetPosition: {},
      zIndex: {},
      measuredWidth: {},
      measuredHeight: {},
      initialWidth: {},
      initialHeight: {},
      width: {},
      height: {},
      dragHandle: {},
      initialized: {},
      parentId: {},
      nodeClickDistance: {},
      class: {}
    },
    [],
    [],
    !0
  )
  var f2 = ne('<div class="svelte-flow__nodes svelte-tf4uy4"></div>')
  const g2 = {
    hash: 'svelte-tf4uy4',
    code: '.svelte-flow__nodes.svelte-tf4uy4 {width:100%;height:100%;position:absolute;left:0;top:0;}'
  }
  function vc(e, t) {
    ue(t, !1), et(e, g2)
    const [n, r] = nt(),
      o = () => Q(c, '$visibleNodes', n),
      i = () => Q(f, '$nodesDraggable', n),
      s = () => Q(g, '$elementsSelectable', n),
      a = () => Q(d, '$nodesConnectable', n),
      l = () => Q(x, '$parentLookup', n)
    let u = w(t, 'nodeClickDistance', 12, 0)
    const {
        visibleNodes: c,
        nodesDraggable: f,
        nodesConnectable: d,
        elementsSelectable: g,
        updateNodeInternals: p,
        parentLookup: x
      } = Ue(),
      C =
        typeof ResizeObserver > 'u'
          ? null
          : new ResizeObserver((_) => {
              const v = new Map()
              _.forEach((b) => {
                const N = b.target.getAttribute('data-id')
                v.set(N, { id: N, nodeElement: b.target, force: !0 })
              }),
                p(v)
            })
    $s(() => {
      C == null || C.disconnect()
    }),
      He()
    var $ = f2()
    Yt(
      $,
      5,
      o,
      (_) => _.id,
      (_, v) => {
        const b = ve(() => !!h(v).selected),
          N = ve(() => !!h(v).hidden),
          E = ve(() => !!(h(v).draggable || (i() && typeof h(v).draggable > 'u'))),
          T = ve(() => !!(h(v).selectable || (s() && typeof h(v).selectable > 'u'))),
          D = ve(() => !!(h(v).connectable || (a() && typeof h(v).connectable > 'u'))),
          V = ve(() => h(v).deletable ?? !0),
          A = ve(() => l().has(h(v).id)),
          O = ve(() => h(v).type ?? 'default'),
          R = ve(() => h(v).internals.z ?? 0),
          S = ve(() => Eu(h(v)))
        hc(_, {
          get node() {
            return h(v)
          },
          get id() {
            return h(v).id
          },
          get data() {
            return h(v).data
          },
          get selected() {
            return h(b)
          },
          get hidden() {
            return h(N)
          },
          get draggable() {
            return h(E)
          },
          get selectable() {
            return h(T)
          },
          get connectable() {
            return h(D)
          },
          get deletable() {
            return h(V)
          },
          get positionX() {
            return h(v).internals.positionAbsolute.x
          },
          get positionY() {
            return h(v).internals.positionAbsolute.y
          },
          get isParent() {
            return h(A)
          },
          get style() {
            return h(v).style
          },
          get class() {
            return h(v).class
          },
          get type() {
            return h(O)
          },
          get sourcePosition() {
            return h(v).sourcePosition
          },
          get targetPosition() {
            return h(v).targetPosition
          },
          get dragging() {
            return h(v).dragging
          },
          get zIndex() {
            return h(R)
          },
          get dragHandle() {
            return h(v).dragHandle
          },
          get initialized() {
            return h(S)
          },
          get width() {
            return h(v).width
          },
          get height() {
            return h(v).height
          },
          get initialWidth() {
            return h(v).initialWidth
          },
          get initialHeight() {
            return h(v).initialHeight
          },
          get measuredWidth() {
            return h(v).measured.width
          },
          get measuredHeight() {
            return h(v).measured.height
          },
          get parentId() {
            return h(v).parentId
          },
          resizeObserver: C,
          get nodeClickDistance() {
            return u()
          },
          $$events: {
            nodeclick(M) {
              De.call(this, t, M)
            },
            nodemouseenter(M) {
              De.call(this, t, M)
            },
            nodemousemove(M) {
              De.call(this, t, M)
            },
            nodemouseleave(M) {
              De.call(this, t, M)
            },
            nodedrag(M) {
              De.call(this, t, M)
            },
            nodedragstart(M) {
              De.call(this, t, M)
            },
            nodedragstop(M) {
              De.call(this, t, M)
            },
            nodecontextmenu(M) {
              De.call(this, t, M)
            }
          }
        })
      }
    ),
      Z($),
      L(e, $)
    var m = ce({
      get nodeClickDistance() {
        return u()
      },
      set nodeClickDistance(_) {
        u(_), y()
      }
    })
    return r(), m
  }
  ie(vc, { nodeClickDistance: {} }, [], [], !0)
  var h2 = _e('<svg><g role="img"><!></g></svg>')
  function pc(e, t) {
    ue(t, !1)
    const [n, r] = nt(),
      o = () => Q(W, '$edgeTypes', n),
      i = () => Q(fe, '$flowId', n),
      s = () => Q(me, '$elementsSelectable', n),
      a = () => Q(ee, '$edgeLookup', n),
      l = re(void 0, !0),
      u = re(void 0, !0),
      c = re(void 0, !0),
      f = re(void 0, !0),
      d = re(void 0, !0)
    let g = w(t, 'id', 13),
      p = w(t, 'type', 13, 'default'),
      x = w(t, 'source', 13, ''),
      C = w(t, 'target', 13, ''),
      $ = w(t, 'data', 29, () => ({})),
      m = w(t, 'style', 13, void 0),
      _ = w(t, 'zIndex', 13, void 0),
      v = w(t, 'animated', 13, !1),
      b = w(t, 'selected', 13, !1),
      N = w(t, 'selectable', 13, void 0),
      E = w(t, 'deletable', 13, void 0),
      T = w(t, 'hidden', 13, !1),
      D = w(t, 'label', 13, void 0),
      V = w(t, 'labelStyle', 13, void 0),
      A = w(t, 'markerStart', 13, void 0),
      O = w(t, 'markerEnd', 13, void 0),
      R = w(t, 'sourceHandle', 13, void 0),
      S = w(t, 'targetHandle', 13, void 0),
      M = w(t, 'sourceX', 13),
      k = w(t, 'sourceY', 13),
      P = w(t, 'targetX', 13),
      H = w(t, 'targetY', 13),
      I = w(t, 'sourcePosition', 13),
      B = w(t, 'targetPosition', 13),
      F = w(t, 'ariaLabel', 13, void 0),
      K = w(t, 'interactionWidth', 13, void 0),
      se = w(t, 'class', 13, '')
    Sr('svelteflow__edge_id', g())
    const { edgeLookup: ee, edgeTypes: W, flowId: fe, elementsSelectable: me } = Ue(),
      Ce = ii(),
      he = tc()
    function ze(te) {
      const Fe = a().get(g())
      Fe && (he(g()), Ce('edgeclick', { event: te, edge: Fe }))
    }
    function G(te, Fe) {
      const Oe = a().get(g())
      Oe && Ce(Fe, { event: te, edge: Oe })
    }
    ge(
      () => j(p()),
      () => {
        U(l, p() || 'default')
      }
    ),
      ge(
        () => (o(), h(l), zi),
        () => {
          U(u, o()[h(l)] || zi)
        }
      ),
      ge(
        () => (j(A()), i()),
        () => {
          U(c, A() ? `url('#${ta(A(), i())}')` : void 0)
        }
      ),
      ge(
        () => (j(O()), i()),
        () => {
          U(f, O() ? `url('#${ta(O(), i())}')` : void 0)
        }
      ),
      ge(
        () => (j(N()), s()),
        () => {
          U(d, N() ?? s())
        }
      ),
      vt(),
      He(!0)
    var ae = tt(),
      Me = xe(ae)
    {
      var Le = (te) => {
        var Fe = h2(),
          Oe = X(Fe)
        let rt
        var oe = X(Oe)
        const pe = ve(() => E() ?? !0)
        fl(
          oe,
          () => h(u),
          (be, Ie) => {
            Ie(be, {
              get id() {
                return g()
              },
              get source() {
                return x()
              },
              get target() {
                return C()
              },
              get sourceX() {
                return M()
              },
              get sourceY() {
                return k()
              },
              get targetX() {
                return P()
              },
              get targetY() {
                return H()
              },
              get sourcePosition() {
                return I()
              },
              get targetPosition() {
                return B()
              },
              get animated() {
                return v()
              },
              get selected() {
                return b()
              },
              get label() {
                return D()
              },
              get labelStyle() {
                return V()
              },
              get data() {
                return $()
              },
              get style() {
                return m()
              },
              get interactionWidth() {
                return K()
              },
              get selectable() {
                return h(d)
              },
              get deletable() {
                return h(pe)
              },
              get type() {
                return h(l)
              },
              get sourceHandleId() {
                return R()
              },
              get targetHandleId() {
                return S()
              },
              get markerStart() {
                return h(c)
              },
              get markerEnd() {
                return h(f)
              }
            })
          }
        ),
          Z(Oe),
          Z(Fe),
          Ee(
            (be) => {
              at(Fe, 'z-index', _()),
                (rt = $t(Oe, 0, wn(be), null, rt, {
                  animated: v(),
                  selected: b(),
                  selectable: h(d)
                })),
                de(Oe, 'data-id', g()),
                de(
                  Oe,
                  'aria-label',
                  F() === null ? void 0 : F() ? F() : `Edge from ${x()} to ${C()}`
                )
            },
            [() => Et(['svelte-flow__edge', se()])],
            ve
          ),
          Ze('click', Oe, ze),
          Ze('contextmenu', Oe, (be) => {
            G(be, 'edgecontextmenu')
          }),
          Ze('mouseenter', Oe, (be) => {
            G(be, 'edgemouseenter')
          }),
          Ze('mouseleave', Oe, (be) => {
            G(be, 'edgemouseleave')
          }),
          L(te, Fe)
      }
      ke(Me, (te) => {
        T() || te(Le)
      })
    }
    L(e, ae)
    var Xe = ce({
      get id() {
        return g()
      },
      set id(te) {
        g(te), y()
      },
      get type() {
        return p()
      },
      set type(te) {
        p(te), y()
      },
      get source() {
        return x()
      },
      set source(te) {
        x(te), y()
      },
      get target() {
        return C()
      },
      set target(te) {
        C(te), y()
      },
      get data() {
        return $()
      },
      set data(te) {
        $(te), y()
      },
      get style() {
        return m()
      },
      set style(te) {
        m(te), y()
      },
      get zIndex() {
        return _()
      },
      set zIndex(te) {
        _(te), y()
      },
      get animated() {
        return v()
      },
      set animated(te) {
        v(te), y()
      },
      get selected() {
        return b()
      },
      set selected(te) {
        b(te), y()
      },
      get selectable() {
        return N()
      },
      set selectable(te) {
        N(te), y()
      },
      get deletable() {
        return E()
      },
      set deletable(te) {
        E(te), y()
      },
      get hidden() {
        return T()
      },
      set hidden(te) {
        T(te), y()
      },
      get label() {
        return D()
      },
      set label(te) {
        D(te), y()
      },
      get labelStyle() {
        return V()
      },
      set labelStyle(te) {
        V(te), y()
      },
      get markerStart() {
        return A()
      },
      set markerStart(te) {
        A(te), y()
      },
      get markerEnd() {
        return O()
      },
      set markerEnd(te) {
        O(te), y()
      },
      get sourceHandle() {
        return R()
      },
      set sourceHandle(te) {
        R(te), y()
      },
      get targetHandle() {
        return S()
      },
      set targetHandle(te) {
        S(te), y()
      },
      get sourceX() {
        return M()
      },
      set sourceX(te) {
        M(te), y()
      },
      get sourceY() {
        return k()
      },
      set sourceY(te) {
        k(te), y()
      },
      get targetX() {
        return P()
      },
      set targetX(te) {
        P(te), y()
      },
      get targetY() {
        return H()
      },
      set targetY(te) {
        H(te), y()
      },
      get sourcePosition() {
        return I()
      },
      set sourcePosition(te) {
        I(te), y()
      },
      get targetPosition() {
        return B()
      },
      set targetPosition(te) {
        B(te), y()
      },
      get ariaLabel() {
        return F()
      },
      set ariaLabel(te) {
        F(te), y()
      },
      get interactionWidth() {
        return K()
      },
      set interactionWidth(te) {
        K(te), y()
      },
      get class() {
        return se()
      },
      set class(te) {
        se(te), y()
      }
    })
    return r(), Xe
  }
  ie(
    pc,
    {
      id: {},
      type: {},
      source: {},
      target: {},
      data: {},
      style: {},
      zIndex: {},
      animated: {},
      selected: {},
      selectable: {},
      deletable: {},
      hidden: {},
      label: {},
      labelStyle: {},
      markerStart: {},
      markerEnd: {},
      sourceHandle: {},
      targetHandle: {},
      sourceX: {},
      sourceY: {},
      targetX: {},
      targetY: {},
      sourcePosition: {},
      targetPosition: {},
      ariaLabel: {},
      interactionWidth: {},
      class: {}
    },
    [],
    [],
    !0
  )
  function mc(e, t) {
    ue(t, !1)
    let n = w(t, 'onMount', 12, void 0),
      r = w(t, 'onDestroy', 12, void 0)
    return (
      rn(() => {
        var o
        return (o = n()) == null || o(), r()
      }),
      He(),
      ce({
        get onMount() {
          return n()
        },
        set onMount(o) {
          n(o), y()
        },
        get onDestroy() {
          return r()
        },
        set onDestroy(o) {
          r(o), y()
        }
      })
    )
  }
  ie(mc, { onMount: {}, onDestroy: {} }, [], [], !0)
  var v2 = _e('<defs></defs>')
  function yc(e, t) {
    ue(t, !1)
    const [n, r] = nt(),
      o = () => Q(i, '$markers', n),
      { markers: i } = Ue()
    He()
    var s = v2()
    Yt(
      s,
      5,
      o,
      (a) => a.id,
      (a, l) => {
        wc(
          a,
          ft(() => h(l))
        )
      }
    ),
      Z(s),
      L(e, s),
      ce(),
      r()
  }
  ie(yc, {}, [], [], !0)
  var p2 = _e(
      '<polyline stroke-linecap="round" stroke-linejoin="round" fill="none" points="-5,-4 0,0 -5,4"></polyline>'
    ),
    m2 = _e(
      '<polyline stroke-linecap="round" stroke-linejoin="round" points="-5,-4 0,0 -5,4 -5,-4"></polyline>'
    ),
    y2 = _e(
      '<marker class="svelte-flow__arrowhead" viewBox="-10 -10 20 20" refX="0" refY="0"><!></marker>'
    )
  function wc(e, t) {
    ue(t, !1)
    let n = w(t, 'id', 12),
      r = w(t, 'type', 12),
      o = w(t, 'width', 12, 12.5),
      i = w(t, 'height', 12, 12.5),
      s = w(t, 'markerUnits', 12, 'strokeWidth'),
      a = w(t, 'orient', 12, 'auto-start-reverse'),
      l = w(t, 'color', 12, void 0),
      u = w(t, 'strokeWidth', 12, void 0)
    He()
    var c = y2(),
      f = X(c)
    {
      var d = (p) => {
          var x = p2()
          Ee(() => {
            de(x, 'stroke', l()), de(x, 'stroke-width', u())
          }),
            L(p, x)
        },
        g = (p, x) => {
          {
            var C = ($) => {
              var m = m2()
              Ee(() => {
                de(m, 'stroke', l()), de(m, 'stroke-width', u()), de(m, 'fill', l())
              }),
                L($, m)
            }
            ke(
              p,
              ($) => {
                r() === _o.ArrowClosed && $(C)
              },
              x
            )
          }
        }
      ke(f, (p) => {
        r() === _o.Arrow ? p(d) : p(g, !1)
      })
    }
    return (
      Z(c),
      Ee(() => {
        de(c, 'id', n()),
          de(c, 'markerWidth', `${o()}`),
          de(c, 'markerHeight', `${i()}`),
          de(c, 'markerUnits', s()),
          de(c, 'orient', a())
      }),
      L(e, c),
      ce({
        get id() {
          return n()
        },
        set id(p) {
          n(p), y()
        },
        get type() {
          return r()
        },
        set type(p) {
          r(p), y()
        },
        get width() {
          return o()
        },
        set width(p) {
          o(p), y()
        },
        get height() {
          return i()
        },
        set height(p) {
          i(p), y()
        },
        get markerUnits() {
          return s()
        },
        set markerUnits(p) {
          s(p), y()
        },
        get orient() {
          return a()
        },
        set orient(p) {
          a(p), y()
        },
        get color() {
          return l()
        },
        set color(p) {
          l(p), y()
        },
        get strokeWidth() {
          return u()
        },
        set strokeWidth(p) {
          u(p), y()
        }
      })
    )
  }
  ie(
    wc,
    {
      id: {},
      type: {},
      width: {},
      height: {},
      markerUnits: {},
      orient: {},
      color: {},
      strokeWidth: {}
    },
    [],
    [],
    !0
  )
  var w2 = ne(
    '<div class="svelte-flow__edges"><svg class="svelte-flow__marker"><!></svg> <!> <!></div>'
  )
  function _c(e, t) {
    ue(t, !1)
    const [n, r] = nt(),
      o = () => Q(a, '$visibleEdges', n),
      i = () => Q(c, '$elementsSelectable', n)
    let s = w(t, 'defaultEdgeOptions', 12)
    const {
      visibleEdges: a,
      edgesInitialized: l,
      edges: { setDefaultOptions: u },
      elementsSelectable: c
    } = Ue()
    rn(() => {
      s() && u(s())
    }),
      He()
    var f = w2(),
      d = X(f),
      g = X(d)
    yc(g, {}), Z(d)
    var p = z(d, 2)
    Yt(
      p,
      1,
      o,
      (m) => m.id,
      (m, _) => {
        const v = ve(() => h(_).selectable ?? i()),
          b = ve(() => h(_).type || 'default')
        pc(m, {
          get id() {
            return h(_).id
          },
          get source() {
            return h(_).source
          },
          get target() {
            return h(_).target
          },
          get data() {
            return h(_).data
          },
          get style() {
            return h(_).style
          },
          get animated() {
            return h(_).animated
          },
          get selected() {
            return h(_).selected
          },
          get selectable() {
            return h(v)
          },
          get deletable() {
            return h(_).deletable
          },
          get hidden() {
            return h(_).hidden
          },
          get label() {
            return h(_).label
          },
          get labelStyle() {
            return h(_).labelStyle
          },
          get markerStart() {
            return h(_).markerStart
          },
          get markerEnd() {
            return h(_).markerEnd
          },
          get sourceHandle() {
            return h(_).sourceHandle
          },
          get targetHandle() {
            return h(_).targetHandle
          },
          get sourceX() {
            return h(_).sourceX
          },
          get sourceY() {
            return h(_).sourceY
          },
          get targetX() {
            return h(_).targetX
          },
          get targetY() {
            return h(_).targetY
          },
          get sourcePosition() {
            return h(_).sourcePosition
          },
          get targetPosition() {
            return h(_).targetPosition
          },
          get ariaLabel() {
            return h(_).ariaLabel
          },
          get interactionWidth() {
            return h(_).interactionWidth
          },
          get class() {
            return h(_).class
          },
          get type() {
            return h(b)
          },
          get zIndex() {
            return h(_).zIndex
          },
          $$events: {
            edgeclick(N) {
              De.call(this, t, N)
            },
            edgecontextmenu(N) {
              De.call(this, t, N)
            },
            edgemouseenter(N) {
              De.call(this, t, N)
            },
            edgemouseleave(N) {
              De.call(this, t, N)
            }
          }
        })
      }
    )
    var x = z(p, 2)
    {
      var C = (m) => {
        mc(m, {
          onMount: () => {
            ai(l, !0)
          },
          onDestroy: () => {
            ai(l, !1)
          }
        })
      }
      ke(x, (m) => {
        o().length > 0 && m(C)
      })
    }
    Z(f), L(e, f)
    var $ = ce({
      get defaultEdgeOptions() {
        return s()
      },
      set defaultEdgeOptions(m) {
        s(m), y()
      }
    })
    return r(), $
  }
  ie(_c, { defaultEdgeOptions: {} }, [], [], !0)
  var _2 = ne('<div class="svelte-flow__selection svelte-1iugwpu"></div>')
  const x2 = {
    hash: 'svelte-1iugwpu',
    code: '.svelte-flow__selection.svelte-1iugwpu {position:absolute;top:0;left:0;}'
  }
  function ua(e, t) {
    ue(t, !1), et(e, x2)
    let n = w(t, 'x', 12, 0),
      r = w(t, 'y', 12, 0),
      o = w(t, 'width', 12, 0),
      i = w(t, 'height', 12, 0),
      s = w(t, 'isVisible', 12, !0)
    var a = tt(),
      l = xe(a)
    {
      var u = (c) => {
        var f = _2()
        Ee(() => {
          at(f, 'width', typeof o() == 'string' ? o() : `${o()}px`),
            at(f, 'height', typeof i() == 'string' ? i() : `${i()}px`),
            at(f, 'transform', `translate(${n()}px, ${r()}px)`)
        }),
          L(c, f)
      }
      ke(l, (c) => {
        s() && c(u)
      })
    }
    return (
      L(e, a),
      ce({
        get x() {
          return n()
        },
        set x(c) {
          n(c), y()
        },
        get y() {
          return r()
        },
        set y(c) {
          r(c), y()
        },
        get width() {
          return o()
        },
        set width(c) {
          o(c), y()
        },
        get height() {
          return i()
        },
        set height(c) {
          i(c), y()
        },
        get isVisible() {
          return s()
        },
        set isVisible(c) {
          s(c), y()
        }
      })
    )
  }
  ie(ua, { x: {}, y: {}, width: {}, height: {}, isVisible: {} }, [], [], !0)
  function xc(e, t) {
    ue(t, !1)
    const [n, r] = nt(),
      o = () => Q(s, '$selectionRect', n),
      i = () => Q(a, '$selectionRectMode', n),
      { selectionRect: s, selectionRectMode: a } = Ue()
    He()
    const l = ve(() => !!(o() && i() === 'user')),
      u = ve(() => {
        var g
        return (g = o()) == null ? void 0 : g.width
      }),
      c = ve(() => {
        var g
        return (g = o()) == null ? void 0 : g.height
      }),
      f = ve(() => {
        var g
        return (g = o()) == null ? void 0 : g.x
      }),
      d = ve(() => {
        var g
        return (g = o()) == null ? void 0 : g.y
      })
    ua(e, {
      get isVisible() {
        return h(l)
      },
      get width() {
        return h(u)
      },
      get height() {
        return h(c)
      },
      get x() {
        return h(f)
      },
      get y() {
        return h(d)
      }
    }),
      ce(),
      r()
  }
  ie(xc, {}, [], [], !0)
  var b2 = ne(
    '<div class="selection-wrapper nopan svelte-5pxri" role="button" tabindex="-1"><!></div>'
  )
  const C2 = {
    hash: 'svelte-5pxri',
    code: '.selection-wrapper.svelte-5pxri {position:absolute;top:0;left:0;z-index:7;pointer-events:all;}'
  }
  function bc(e, t) {
    ue(t, !1), et(e, C2)
    const [n, r] = nt(),
      o = () => Q(l, '$selectionRectMode', n),
      i = () => Q(c, '$nodeLookup', n),
      s = () => Q(u, '$nodes', n),
      a = Ue(),
      { selectionRectMode: l, nodes: u, nodeLookup: c } = a,
      f = ii()
    let d = re(null)
    function g(m) {
      const _ = s().filter((v) => v.selected)
      f('selectioncontextmenu', { nodes: _, event: m })
    }
    function p(m) {
      const _ = s().filter((v) => v.selected)
      f('selectionclick', { nodes: _, event: m })
    }
    ge(
      () => (o(), i(), s()),
      () => {
        o() === 'nodes' && (U(d, bo(i(), { filter: (m) => !!m.selected })), s())
      }
    ),
      vt(),
      He()
    var x = tt(),
      C = xe(x)
    {
      var $ = (m) => {
        var _ = b2(),
          v = X(_)
        ua(v, { width: '100%', height: '100%', x: 0, y: 0 }),
          Z(_),
          _t(
            _,
            (b, N) => (Br == null ? void 0 : Br(b, N)),
            () => ({
              disabled: !1,
              store: a,
              onDrag: (b, N, E, T) => {
                f('nodedrag', { event: b, targetNode: null, nodes: T })
              },
              onDragStart: (b, N, E, T) => {
                f('nodedragstart', { event: b, targetNode: null, nodes: T })
              },
              onDragStop: (b, N, E, T) => {
                f('nodedragstop', { event: b, targetNode: null, nodes: T })
              }
            })
          ),
          Rt(() => Ze('contextmenu', _, g)),
          Rt(() => Ze('click', _, p)),
          Rt(() => Ze('keyup', _, () => {})),
          Ee(() =>
            de(
              _,
              'style',
              `width: ${h(d).width ?? ''}px; height: ${h(d).height ?? ''}px; transform: translate(${h(d).x ?? ''}px, ${h(d).y ?? ''}px)`
            )
          ),
          L(m, _)
      }
      ke(C, (m) => {
        o() === 'nodes' && h(d) && zn(h(d).x) && zn(h(d).y) && m($)
      })
    }
    L(e, x), ce(), r()
  }
  ie(bc, {}, [], [], !0)
  function qe(e, t) {
    let { enabled: n = !0, trigger: r, type: o = 'keydown' } = t
    function i(s) {
      const a = Array.isArray(r) ? r : [r],
        l = { alt: s.altKey, ctrl: s.ctrlKey, shift: s.shiftKey, meta: s.metaKey }
      for (const u of a) {
        const c = { modifier: [], preventDefault: !1, enabled: !0, ...u },
          { modifier: f, key: d, callback: g, preventDefault: p, enabled: x } = c
        if (x) {
          if (
            f.length &&
            !(Array.isArray(f) ? f : [f])
              .map((m) => (typeof m == 'string' ? [m] : m))
              .some((m) => m.every((_) => l[_]))
          )
            continue
          if (s.key === d) {
            p && s.preventDefault()
            const C = { node: e, trigger: c, originalEvent: s }
            e.dispatchEvent(new CustomEvent('shortcut', { detail: C })), g == null || g(C)
          }
        }
      }
    }
    return (
      n && e.addEventListener(o, i),
      {
        update: (s) => {
          const { enabled: a = !0, type: l = 'keydown' } = s
          n && (!a || o !== l) ? e.removeEventListener(o, i) : !n && a && e.addEventListener(l, i),
            (n = a),
            (o = l),
            (r = s.trigger)
        },
        destroy: () => {
          e.removeEventListener(o, i)
        }
      }
    )
  }
  function Cc(e, t) {
    ue(t, !1)
    let n = w(t, 'selectionKey', 12, 'Shift'),
      r = w(t, 'multiSelectionKey', 28, () => (Di() ? 'Meta' : 'Control')),
      o = w(t, 'deleteKey', 12, 'Backspace'),
      i = w(t, 'panActivationKey', 12, ' '),
      s = w(t, 'zoomActivationKey', 28, () => (Di() ? 'Meta' : 'Control'))
    const {
      selectionKeyPressed: a,
      multiselectionKeyPressed: l,
      deleteKeyPressed: u,
      panActivationKeyPressed: c,
      zoomActivationKeyPressed: f,
      selectionRect: d
    } = Ue()
    function g(m) {
      return m !== null && typeof m == 'object'
    }
    function p(m) {
      return g(m) ? m.modifier || [] : []
    }
    function x(m) {
      return m == null ? '' : g(m) ? m.key : m
    }
    function C(m, _) {
      return (Array.isArray(m) ? m : [m]).map((b) => {
        const N = x(b)
        return { key: N, modifier: p(b), enabled: N !== null, callback: _ }
      })
    }
    function $() {
      d.set(null), a.set(!1), l.set(!1), u.set(!1), c.set(!1), f.set(!1)
    }
    return (
      He(),
      Ze('blur', Vt, $),
      Ze('contextmenu', Vt, $),
      _t(
        Vt,
        (m, _) => (qe == null ? void 0 : qe(m, _)),
        () => ({ trigger: C(n(), () => a.set(!0)), type: 'keydown' })
      ),
      _t(
        Vt,
        (m, _) => (qe == null ? void 0 : qe(m, _)),
        () => ({ trigger: C(n(), () => a.set(!1)), type: 'keyup' })
      ),
      _t(
        Vt,
        (m, _) => (qe == null ? void 0 : qe(m, _)),
        () => ({ trigger: C(r(), () => l.set(!0)), type: 'keydown' })
      ),
      _t(
        Vt,
        (m, _) => (qe == null ? void 0 : qe(m, _)),
        () => ({ trigger: C(r(), () => l.set(!1)), type: 'keyup' })
      ),
      _t(
        Vt,
        (m, _) => (qe == null ? void 0 : qe(m, _)),
        () => ({
          trigger: C(o(), (m) => {
            !(m.originalEvent.ctrlKey || m.originalEvent.metaKey || m.originalEvent.shiftKey) &&
              !r0(m.originalEvent) &&
              u.set(!0)
          }),
          type: 'keydown'
        })
      ),
      _t(
        Vt,
        (m, _) => (qe == null ? void 0 : qe(m, _)),
        () => ({ trigger: C(o(), () => u.set(!1)), type: 'keyup' })
      ),
      _t(
        Vt,
        (m, _) => (qe == null ? void 0 : qe(m, _)),
        () => ({ trigger: C(i(), () => c.set(!0)), type: 'keydown' })
      ),
      _t(
        Vt,
        (m, _) => (qe == null ? void 0 : qe(m, _)),
        () => ({ trigger: C(i(), () => c.set(!1)), type: 'keyup' })
      ),
      _t(
        Vt,
        (m, _) => (qe == null ? void 0 : qe(m, _)),
        () => ({ trigger: C(s(), () => f.set(!0)), type: 'keydown' })
      ),
      _t(
        Vt,
        (m, _) => (qe == null ? void 0 : qe(m, _)),
        () => ({ trigger: C(s(), () => f.set(!1)), type: 'keyup' })
      ),
      ce({
        get selectionKey() {
          return n()
        },
        set selectionKey(m) {
          n(m), y()
        },
        get multiSelectionKey() {
          return r()
        },
        set multiSelectionKey(m) {
          r(m), y()
        },
        get deleteKey() {
          return o()
        },
        set deleteKey(m) {
          o(m), y()
        },
        get panActivationKey() {
          return i()
        },
        set panActivationKey(m) {
          i(m), y()
        },
        get zoomActivationKey() {
          return s()
        },
        set zoomActivationKey(m) {
          s(m), y()
        }
      })
    )
  }
  ie(
    Cc,
    {
      selectionKey: {},
      multiSelectionKey: {},
      deleteKey: {},
      panActivationKey: {},
      zoomActivationKey: {}
    },
    [],
    [],
    !0
  )
  var k2 = _e('<path fill="none" class="svelte-flow__connection-path"></path>'),
    $2 = _e('<svg class="svelte-flow__connectionline"><g><!><!></g></svg>')
  function kc(e, t) {
    ue(t, !1)
    const [n, r] = nt(),
      o = () => Q(g, '$connection', n),
      i = () => Q(p, '$connectionLineType', n),
      s = () => Q(f, '$width', n),
      a = () => Q(d, '$height', n)
    let l = w(t, 'containerStyle', 12, ''),
      u = w(t, 'style', 12, ''),
      c = w(t, 'isCustomComponent', 12, !1)
    const { width: f, height: d, connection: g, connectionLineType: p } = Ue()
    let x = re(null)
    ge(
      () => (o(), j(c()), i(), h(x), ea),
      () => {
        if (o().inProgress && !c()) {
          const { from: v, to: b, fromPosition: N, toPosition: E } = o(),
            T = {
              sourceX: v.x,
              sourceY: v.y,
              sourcePosition: N,
              targetX: b.x,
              targetY: b.y,
              targetPosition: E
            }
          switch (i()) {
            case Ar.Bezier:
              ;((D) => U(x, D[0]))(Tu(T))
              break
            case Ar.Step:
              ;((D) => U(x, D[0]))(Li({ ...T, borderRadius: 0 }))
              break
            case Ar.SmoothStep:
              ;((D) => U(x, D[0]))(Li(T))
              break
            default:
              ;((D) => U(x, D[0]))(ea(T))
          }
        }
      }
    ),
      vt(),
      He()
    var C = tt(),
      $ = xe(C)
    {
      var m = (v) => {
        var b = $2(),
          N = X(b),
          E = X(N)
        wt(E, t, 'connectionLine', {})
        var T = z(E)
        {
          var D = (V) => {
            var A = k2()
            Ee(() => {
              de(A, 'd', h(x)), de(A, 'style', u())
            }),
              L(V, A)
          }
          ke(T, (V) => {
            c() || V(D)
          })
        }
        Z(N),
          Z(b),
          Ee(
            (V) => {
              de(b, 'width', s()), de(b, 'height', a()), de(b, 'style', l()), $t(N, 0, wn(V))
            },
            [() => Et(['svelte-flow__connection', qv(o().isValid)])],
            ve
          ),
          L(v, b)
      }
      ke($, (v) => {
        o().inProgress && v(m)
      })
    }
    L(e, C)
    var _ = ce({
      get containerStyle() {
        return l()
      },
      set containerStyle(v) {
        l(v), y()
      },
      get style() {
        return u()
      },
      set style(v) {
        u(v), y()
      },
      get isCustomComponent() {
        return c()
      },
      set isCustomComponent(v) {
        c(v), y()
      }
    })
    return r(), _
  }
  ie(kc, { containerStyle: {}, style: {}, isCustomComponent: {} }, ['connectionLine'], [], !0)
  var E2 = ne('<div><!></div>')
  function So(e, t) {
    const n = it(t, ['children', '$$slots', '$$events', '$$legacy', '$$host']),
      r = it(n, ['position', 'style', 'class'])
    ue(t, !1)
    const [o, i] = nt(),
      s = () => Q(f, '$selectionRectMode', o),
      a = re()
    let l = w(t, 'position', 12, 'top-right'),
      u = w(t, 'style', 12, void 0),
      c = w(t, 'class', 12, void 0)
    const { selectionRectMode: f } = Ue()
    ge(
      () => j(l()),
      () => {
        U(a, `${l()}`.split('-'))
      }
    ),
      vt(),
      He()
    var d = E2()
    let g
    var p = X(d)
    wt(p, t, 'default', {}),
      Z(d),
      Ee(
        (C) => {
          ;(g = nn(d, g, { class: C, style: u(), ...r })),
            at(d, 'pointer-events', s() ? 'none' : '')
        },
        [() => Et(['svelte-flow__panel', c(), ...h(a)])],
        ve
      ),
      L(e, d)
    var x = ce({
      get position() {
        return l()
      },
      set position(C) {
        l(C), y()
      },
      get style() {
        return u()
      },
      set style(C) {
        u(C), y()
      },
      get class() {
        return c()
      },
      set class(C) {
        c(C), y()
      }
    })
    return i(), x
  }
  ie(So, { position: {}, style: {}, class: {} }, ['default'], [], !0)
  var S2 = ne(
    '<a href="https://svelteflow.dev" target="_blank" rel="noopener noreferrer" aria-label="Svelte Flow attribution">Svelte Flow</a>'
  )
  function $c(e, t) {
    ue(t, !1)
    let n = w(t, 'proOptions', 12, void 0),
      r = w(t, 'position', 12, 'bottom-right')
    He()
    var o = tt(),
      i = xe(o)
    {
      var s = (a) => {
        So(a, {
          get position() {
            return r()
          },
          class: 'svelte-flow__attribution',
          'data-message':
            'Feel free to remove the attribution or check out how you could support us: https://svelteflow.dev/support-us',
          children: (l, u) => {
            var c = S2()
            L(l, c)
          },
          $$slots: { default: !0 }
        })
      }
      ke(i, (a) => {
        var l
        ;((l = n()) != null && l.hideAttribution) || a(s)
      })
    }
    return (
      L(e, o),
      ce({
        get proOptions() {
          return n()
        },
        set proOptions(a) {
          n(a), y()
        },
        get position() {
          return r()
        },
        set position(a) {
          r(a), y()
        }
      })
    )
  }
  ie($c, { proOptions: {}, position: {} }, [], [], !0)
  function Ec(
    e,
    { nodeTypes: t, edgeTypes: n, minZoom: r, maxZoom: o, translateExtent: i, paneClickDistance: s }
  ) {
    t !== void 0 && e.setNodeTypes(t),
      n !== void 0 && e.setEdgeTypes(n),
      r !== void 0 && e.setMinZoom(r),
      o !== void 0 && e.setMaxZoom(o),
      i !== void 0 && e.setTranslateExtent(i),
      s !== void 0 && e.setPaneClickDistance(s)
  }
  const P2 = (e) => Object.keys(e)
  function Sc(e, t) {
    P2(t).forEach((n) => {
      const r = t[n]
      r !== void 0 && e[n].set(r)
    })
  }
  function N2() {
    return typeof window > 'u' || !window.matchMedia
      ? null
      : window.matchMedia('(prefers-color-scheme: dark)')
  }
  function T2(e = 'light') {
    return Gt('light', (n) => {
      if (e !== 'system') {
        n(e)
        return
      }
      const r = N2(),
        o = () => n(r != null && r.matches ? 'dark' : 'light')
      return (
        n(r != null && r.matches ? 'dark' : 'light'),
        r == null || r.addEventListener('change', o),
        () => {
          r == null || r.removeEventListener('change', o)
        }
      )
    })
  }
  var M2 = ne(
      '<!> <!> <div class="svelte-flow__edgelabel-renderer"></div> <div class="svelte-flow__viewport-portal"></div> <!> <!>',
      1
    ),
    H2 = ne('<!> <!>', 1),
    V2 = ne('<div><!> <!> <!> <!></div>')
  const D2 = {
    hash: 'svelte-12wlba6',
    code: '.svelte-flow.svelte-12wlba6 {width:100%;height:100%;overflow:hidden;position:relative;z-index:0;background-color:var(--background-color, var(--background-color-default));}:root {--background-color-default: #fff;--background-pattern-color-default: #ddd;--minimap-mask-color-default: rgb(240, 240, 240, 0.6);--minimap-mask-stroke-color-default: none;--minimap-mask-stroke-width-default: 1;--controls-button-background-color-default: #fefefe;--controls-button-background-color-hover-default: #f4f4f4;--controls-button-color-default: inherit;--controls-button-color-hover-default: inherit;--controls-button-border-color-default: #eee;}'
  }
  function Pc(e, t) {
    const n = e1(t),
      r = it(t, ['children', '$$slots', '$$events', '$$legacy', '$$host']),
      o = it(r, [
        'id',
        'nodes',
        'edges',
        'fitView',
        'fitViewOptions',
        'minZoom',
        'maxZoom',
        'initialViewport',
        'viewport',
        'nodeTypes',
        'edgeTypes',
        'selectionKey',
        'selectionMode',
        'panActivationKey',
        'multiSelectionKey',
        'zoomActivationKey',
        'nodesDraggable',
        'nodesConnectable',
        'nodeDragThreshold',
        'elementsSelectable',
        'snapGrid',
        'deleteKey',
        'connectionRadius',
        'connectionLineType',
        'connectionMode',
        'connectionLineStyle',
        'connectionLineContainerStyle',
        'onMoveStart',
        'onMove',
        'onMoveEnd',
        'isValidConnection',
        'translateExtent',
        'nodeExtent',
        'onlyRenderVisibleElements',
        'panOnScrollMode',
        'preventScrolling',
        'zoomOnScroll',
        'zoomOnDoubleClick',
        'zoomOnPinch',
        'panOnScroll',
        'panOnDrag',
        'selectionOnDrag',
        'autoPanOnConnect',
        'autoPanOnNodeDrag',
        'onerror',
        'ondelete',
        'onedgecreate',
        'attributionPosition',
        'proOptions',
        'defaultEdgeOptions',
        'width',
        'height',
        'colorMode',
        'onconnect',
        'onconnectstart',
        'onconnectend',
        'onbeforedelete',
        'oninit',
        'nodeOrigin',
        'paneClickDistance',
        'nodeClickDistance',
        'defaultMarkerColor',
        'style',
        'class'
      ])
    ue(t, !1), et(e, D2)
    const [i, s] = nt(),
      a = () => Q(_(), '$viewport', i),
      l = () => Q(xa, '$initialized', i),
      u = () => Q(h(c), '$colorModeClass', i),
      c = re()
    let f = w(t, 'id', 12, '1'),
      d = w(t, 'nodes', 12),
      g = w(t, 'edges', 12),
      p = w(t, 'fitView', 12, void 0),
      x = w(t, 'fitViewOptions', 12, void 0),
      C = w(t, 'minZoom', 12, void 0),
      $ = w(t, 'maxZoom', 12, void 0),
      m = w(t, 'initialViewport', 12, void 0),
      _ = w(t, 'viewport', 12, void 0),
      v = w(t, 'nodeTypes', 12, void 0),
      b = w(t, 'edgeTypes', 12, void 0),
      N = w(t, 'selectionKey', 12, void 0),
      E = w(t, 'selectionMode', 12, void 0),
      T = w(t, 'panActivationKey', 12, void 0),
      D = w(t, 'multiSelectionKey', 12, void 0),
      V = w(t, 'zoomActivationKey', 12, void 0),
      A = w(t, 'nodesDraggable', 12, void 0),
      O = w(t, 'nodesConnectable', 12, void 0),
      R = w(t, 'nodeDragThreshold', 12, void 0),
      S = w(t, 'elementsSelectable', 12, void 0),
      M = w(t, 'snapGrid', 12, void 0),
      k = w(t, 'deleteKey', 12, void 0),
      P = w(t, 'connectionRadius', 12, void 0),
      H = w(t, 'connectionLineType', 12, void 0),
      I = w(t, 'connectionMode', 28, () => hr.Strict),
      B = w(t, 'connectionLineStyle', 12, ''),
      F = w(t, 'connectionLineContainerStyle', 12, ''),
      K = w(t, 'onMoveStart', 12, void 0),
      se = w(t, 'onMove', 12, void 0),
      ee = w(t, 'onMoveEnd', 12, void 0),
      W = w(t, 'isValidConnection', 12, void 0),
      fe = w(t, 'translateExtent', 12, void 0),
      me = w(t, 'nodeExtent', 12, void 0),
      Ce = w(t, 'onlyRenderVisibleElements', 12, void 0),
      he = w(t, 'panOnScrollMode', 28, () => Jn.Free),
      ze = w(t, 'preventScrolling', 12, !0),
      G = w(t, 'zoomOnScroll', 12, !0),
      ae = w(t, 'zoomOnDoubleClick', 12, !0),
      Me = w(t, 'zoomOnPinch', 12, !0),
      Le = w(t, 'panOnScroll', 12, !1),
      Xe = w(t, 'panOnDrag', 12, !0),
      te = w(t, 'selectionOnDrag', 12, void 0),
      Fe = w(t, 'autoPanOnConnect', 12, !0),
      Oe = w(t, 'autoPanOnNodeDrag', 12, !0),
      rt = w(t, 'onerror', 12, void 0),
      oe = w(t, 'ondelete', 12, void 0),
      pe = w(t, 'onedgecreate', 12, void 0),
      be = w(t, 'attributionPosition', 12, void 0),
      Ie = w(t, 'proOptions', 12, void 0),
      ht = w(t, 'defaultEdgeOptions', 12, void 0),
      dt = w(t, 'width', 12, void 0),
      J = w(t, 'height', 12, void 0),
      Re = w(t, 'colorMode', 12, 'light'),
      le = w(t, 'onconnect', 12, void 0),
      $n = w(t, 'onconnectstart', 12, void 0),
      fn = w(t, 'onconnectend', 12, void 0),
      En = w(t, 'onbeforedelete', 12, void 0),
      Te = w(t, 'oninit', 12, void 0),
      st = w(t, 'nodeOrigin', 12, void 0),
      ye = w(t, 'paneClickDistance', 12, 0),
      lt = w(t, 'nodeClickDistance', 12, 0),
      ct = w(t, 'defaultMarkerColor', 12, '#b1b1b7'),
      Jt = w(t, 'style', 12, void 0),
      Oo = w(t, 'class', 12, void 0),
      Wt = re(),
      Ot = re(),
      Sn = re()
    const gn = a() || m(),
      mt = Df(Ri)
        ? Ue()
        : r2({
            nodes: q(d()),
            edges: q(g()),
            width: dt(),
            height: J(),
            fitView: p(),
            nodeOrigin: st(),
            nodeExtent: me()
          })
    rn(
      () => (
        mt.width.set(h(Ot)),
        mt.height.set(h(Sn)),
        mt.domNode.set(h(Wt)),
        mt.syncNodeStores(d()),
        mt.syncEdgeStores(g()),
        mt.syncViewport(_()),
        p() !== void 0 && mt.fitViewOnInit.set(p()),
        x() && mt.fitViewOptions.set(x()),
        Ec(mt, {
          nodeTypes: v(),
          edgeTypes: b(),
          minZoom: C(),
          maxZoom: $(),
          translateExtent: fe(),
          paneClickDistance: ye()
        }),
        () => {
          mt.reset()
        }
      )
    )
    const { initialized: xa } = mt
    let yr = re(!1)
    ge(
      () => (h(Ot), h(Sn)),
      () => {
        h(Ot) !== void 0 && h(Sn) !== void 0 && (mt.width.set(h(Ot)), mt.height.set(h(Sn)))
      }
    ),
      ge(
        () => (h(yr), l(), j(Te())),
        () => {
          var Y
          !h(yr) && l() && ((Y = Te()) == null || Y(), U(yr, !0))
        }
      ),
      ge(
        () => (
          j(f()),
          j(H()),
          j(P()),
          j(E()),
          j(M()),
          j(ct()),
          j(A()),
          j(O()),
          j(S()),
          j(Ce()),
          j(W()),
          j(Fe()),
          j(Oe()),
          j(rt()),
          j(oe()),
          j(pe()),
          j(I()),
          j(R()),
          j(le()),
          j($n()),
          j(fn()),
          j(En()),
          j(st()),
          Sc
        ),
        () => {
          const Y = {
            flowId: f(),
            connectionLineType: H(),
            connectionRadius: P(),
            selectionMode: E(),
            snapGrid: M(),
            defaultMarkerColor: ct(),
            nodesDraggable: A(),
            nodesConnectable: O(),
            elementsSelectable: S(),
            onlyRenderVisibleElements: Ce(),
            isValidConnection: W(),
            autoPanOnConnect: Fe(),
            autoPanOnNodeDrag: Oe(),
            onerror: rt(),
            ondelete: oe(),
            onedgecreate: pe(),
            connectionMode: I(),
            nodeDragThreshold: R(),
            onconnect: le(),
            onconnectstart: $n(),
            onconnectend: fn(),
            onbeforedelete: En(),
            nodeOrigin: st()
          }
          Sc(mt, Y)
        }
      ),
      ge(
        () => (j(v()), j(b()), j(C()), j($()), j(fe()), j(ye())),
        () => {
          Ec(mt, {
            nodeTypes: v(),
            edgeTypes: b(),
            minZoom: C(),
            maxZoom: $(),
            translateExtent: fe(),
            paneClickDistance: ye()
          })
        }
      ),
      ge(
        () => j(Re()),
        () => {
          l1(U(c, T2(Re())), '$colorModeClass', i)
        }
      ),
      vt(),
      He()
    var hn = V2()
    let ji
    var Ji = X(hn)
    Cc(Ji, {
      get selectionKey() {
        return N()
      },
      get deleteKey() {
        return k()
      },
      get panActivationKey() {
        return T()
      },
      get multiSelectionKey() {
        return D()
      },
      get zoomActivationKey() {
        return V()
      }
    })
    var Qi = z(Ji, 2)
    const jy = ve(() => (he() === void 0 ? Jn.Free : he())),
      Jy = ve(() => (ze() === void 0 ? !0 : ze())),
      Qy = ve(() => (G() === void 0 ? !0 : G())),
      ew = ve(() => (ae() === void 0 ? !0 : ae())),
      tw = ve(() => (Me() === void 0 ? !0 : Me())),
      nw = ve(() => (Le() === void 0 ? !1 : Le())),
      rw = ve(() => (Xe() === void 0 ? !0 : Xe())),
      ow = ve(() => (ye() === void 0 ? 0 : ye()))
    uc(Qi, {
      initialViewport: gn,
      get onMoveStart() {
        return K()
      },
      get onMove() {
        return se()
      },
      get onMoveEnd() {
        return ee()
      },
      get panOnScrollMode() {
        return h(jy)
      },
      get preventScrolling() {
        return h(Jy)
      },
      get zoomOnScroll() {
        return h(Qy)
      },
      get zoomOnDoubleClick() {
        return h(ew)
      },
      get zoomOnPinch() {
        return h(tw)
      },
      get panOnScroll() {
        return h(nw)
      },
      get panOnDrag() {
        return h(rw)
      },
      get paneClickDistance() {
        return h(ow)
      },
      children: (Y, pw) => {
        const aw = ve(() => (Xe() === void 0 ? !0 : Xe()))
        fc(Y, {
          get panOnDrag() {
            return h(aw)
          },
          get selectionOnDrag() {
            return te()
          },
          $$events: {
            paneclick(Io) {
              De.call(this, t, Io)
            },
            panecontextmenu(Io) {
              De.call(this, t, Io)
            }
          },
          children: (Io, mw) => {
            var Vd = H2(),
              Dd = xe(Vd)
            gc(Dd, {
              children: (uw, yw) => {
                var Ad = M2(),
                  Ld = xe(Ad)
                _c(Ld, {
                  get defaultEdgeOptions() {
                    return ht()
                  },
                  $$events: {
                    edgeclick(Be) {
                      De.call(this, t, Be)
                    },
                    edgecontextmenu(Be) {
                      De.call(this, t, Be)
                    },
                    edgemouseenter(Be) {
                      De.call(this, t, Be)
                    },
                    edgemouseleave(Be) {
                      De.call(this, t, Be)
                    }
                  }
                })
                var Od = z(Ld, 2)
                kc(Od, {
                  get containerStyle() {
                    return F()
                  },
                  get style() {
                    return B()
                  },
                  isCustomComponent: n.connectionLine,
                  $$slots: {
                    connectionLine: (Be, ww) => {
                      var zd = tt(),
                        dw = xe(zd)
                      wt(dw, t, 'connectionLine', {}), L(Be, zd)
                    }
                  }
                })
                var Id = z(Od, 6)
                vc(Id, {
                  get nodeClickDistance() {
                    return lt()
                  },
                  $$events: {
                    nodeclick(Be) {
                      De.call(this, t, Be)
                    },
                    nodemouseenter(Be) {
                      De.call(this, t, Be)
                    },
                    nodemousemove(Be) {
                      De.call(this, t, Be)
                    },
                    nodemouseleave(Be) {
                      De.call(this, t, Be)
                    },
                    nodedragstart(Be) {
                      De.call(this, t, Be)
                    },
                    nodedrag(Be) {
                      De.call(this, t, Be)
                    },
                    nodedragstop(Be) {
                      De.call(this, t, Be)
                    },
                    nodecontextmenu(Be) {
                      De.call(this, t, Be)
                    }
                  }
                })
                var cw = z(Id, 2)
                bc(cw, {
                  $$events: {
                    selectionclick(Be) {
                      De.call(this, t, Be)
                    },
                    selectioncontextmenu(Be) {
                      De.call(this, t, Be)
                    },
                    nodedragstart(Be) {
                      De.call(this, t, Be)
                    },
                    nodedrag(Be) {
                      De.call(this, t, Be)
                    },
                    nodedragstop(Be) {
                      De.call(this, t, Be)
                    }
                  }
                }),
                  L(uw, Ad)
              },
              $$slots: { default: !0 }
            })
            var lw = z(Dd, 2)
            xc(lw, {}), L(Io, Vd)
          },
          $$slots: { default: !0 }
        })
      },
      $$slots: { default: !0 }
    })
    var Hd = z(Qi, 2)
    $c(Hd, {
      get proOptions() {
        return Ie()
      },
      get position() {
        return be()
      }
    })
    var iw = z(Hd, 2)
    wt(iw, t, 'default', {}),
      Z(hn),
      An(
        hn,
        (Y) => U(Wt, Y),
        () => h(Wt)
      ),
      Ee(
        (Y) =>
          (ji = nn(
            hn,
            ji,
            {
              style: Jt(),
              class: Y,
              'data-testid': 'svelte-flow__wrapper',
              ...o,
              role: 'application'
            },
            'svelte-12wlba6'
          )),
        [() => Et(['svelte-flow', Oo(), u()])],
        ve
      ),
      ml(hn, 'clientWidth', (Y) => U(Ot, Y)),
      ml(hn, 'clientHeight', (Y) => U(Sn, Y)),
      Ze('dragover', hn, function (Y) {
        De.call(this, t, Y)
      }),
      Ze('drop', hn, function (Y) {
        De.call(this, t, Y)
      }),
      L(e, hn)
    var sw = ce({
      get id() {
        return f()
      },
      set id(Y) {
        f(Y), y()
      },
      get nodes() {
        return d()
      },
      set nodes(Y) {
        d(Y), y()
      },
      get edges() {
        return g()
      },
      set edges(Y) {
        g(Y), y()
      },
      get fitView() {
        return p()
      },
      set fitView(Y) {
        p(Y), y()
      },
      get fitViewOptions() {
        return x()
      },
      set fitViewOptions(Y) {
        x(Y), y()
      },
      get minZoom() {
        return C()
      },
      set minZoom(Y) {
        C(Y), y()
      },
      get maxZoom() {
        return $()
      },
      set maxZoom(Y) {
        $(Y), y()
      },
      get initialViewport() {
        return m()
      },
      set initialViewport(Y) {
        m(Y), y()
      },
      get viewport() {
        return _()
      },
      set viewport(Y) {
        _(Y), y()
      },
      get nodeTypes() {
        return v()
      },
      set nodeTypes(Y) {
        v(Y), y()
      },
      get edgeTypes() {
        return b()
      },
      set edgeTypes(Y) {
        b(Y), y()
      },
      get selectionKey() {
        return N()
      },
      set selectionKey(Y) {
        N(Y), y()
      },
      get selectionMode() {
        return E()
      },
      set selectionMode(Y) {
        E(Y), y()
      },
      get panActivationKey() {
        return T()
      },
      set panActivationKey(Y) {
        T(Y), y()
      },
      get multiSelectionKey() {
        return D()
      },
      set multiSelectionKey(Y) {
        D(Y), y()
      },
      get zoomActivationKey() {
        return V()
      },
      set zoomActivationKey(Y) {
        V(Y), y()
      },
      get nodesDraggable() {
        return A()
      },
      set nodesDraggable(Y) {
        A(Y), y()
      },
      get nodesConnectable() {
        return O()
      },
      set nodesConnectable(Y) {
        O(Y), y()
      },
      get nodeDragThreshold() {
        return R()
      },
      set nodeDragThreshold(Y) {
        R(Y), y()
      },
      get elementsSelectable() {
        return S()
      },
      set elementsSelectable(Y) {
        S(Y), y()
      },
      get snapGrid() {
        return M()
      },
      set snapGrid(Y) {
        M(Y), y()
      },
      get deleteKey() {
        return k()
      },
      set deleteKey(Y) {
        k(Y), y()
      },
      get connectionRadius() {
        return P()
      },
      set connectionRadius(Y) {
        P(Y), y()
      },
      get connectionLineType() {
        return H()
      },
      set connectionLineType(Y) {
        H(Y), y()
      },
      get connectionMode() {
        return I()
      },
      set connectionMode(Y) {
        I(Y), y()
      },
      get connectionLineStyle() {
        return B()
      },
      set connectionLineStyle(Y) {
        B(Y), y()
      },
      get connectionLineContainerStyle() {
        return F()
      },
      set connectionLineContainerStyle(Y) {
        F(Y), y()
      },
      get onMoveStart() {
        return K()
      },
      set onMoveStart(Y) {
        K(Y), y()
      },
      get onMove() {
        return se()
      },
      set onMove(Y) {
        se(Y), y()
      },
      get onMoveEnd() {
        return ee()
      },
      set onMoveEnd(Y) {
        ee(Y), y()
      },
      get isValidConnection() {
        return W()
      },
      set isValidConnection(Y) {
        W(Y), y()
      },
      get translateExtent() {
        return fe()
      },
      set translateExtent(Y) {
        fe(Y), y()
      },
      get nodeExtent() {
        return me()
      },
      set nodeExtent(Y) {
        me(Y), y()
      },
      get onlyRenderVisibleElements() {
        return Ce()
      },
      set onlyRenderVisibleElements(Y) {
        Ce(Y), y()
      },
      get panOnScrollMode() {
        return he()
      },
      set panOnScrollMode(Y) {
        he(Y), y()
      },
      get preventScrolling() {
        return ze()
      },
      set preventScrolling(Y) {
        ze(Y), y()
      },
      get zoomOnScroll() {
        return G()
      },
      set zoomOnScroll(Y) {
        G(Y), y()
      },
      get zoomOnDoubleClick() {
        return ae()
      },
      set zoomOnDoubleClick(Y) {
        ae(Y), y()
      },
      get zoomOnPinch() {
        return Me()
      },
      set zoomOnPinch(Y) {
        Me(Y), y()
      },
      get panOnScroll() {
        return Le()
      },
      set panOnScroll(Y) {
        Le(Y), y()
      },
      get panOnDrag() {
        return Xe()
      },
      set panOnDrag(Y) {
        Xe(Y), y()
      },
      get selectionOnDrag() {
        return te()
      },
      set selectionOnDrag(Y) {
        te(Y), y()
      },
      get autoPanOnConnect() {
        return Fe()
      },
      set autoPanOnConnect(Y) {
        Fe(Y), y()
      },
      get autoPanOnNodeDrag() {
        return Oe()
      },
      set autoPanOnNodeDrag(Y) {
        Oe(Y), y()
      },
      get onerror() {
        return rt()
      },
      set onerror(Y) {
        rt(Y), y()
      },
      get ondelete() {
        return oe()
      },
      set ondelete(Y) {
        oe(Y), y()
      },
      get onedgecreate() {
        return pe()
      },
      set onedgecreate(Y) {
        pe(Y), y()
      },
      get attributionPosition() {
        return be()
      },
      set attributionPosition(Y) {
        be(Y), y()
      },
      get proOptions() {
        return Ie()
      },
      set proOptions(Y) {
        Ie(Y), y()
      },
      get defaultEdgeOptions() {
        return ht()
      },
      set defaultEdgeOptions(Y) {
        ht(Y), y()
      },
      get width() {
        return dt()
      },
      set width(Y) {
        dt(Y), y()
      },
      get height() {
        return J()
      },
      set height(Y) {
        J(Y), y()
      },
      get colorMode() {
        return Re()
      },
      set colorMode(Y) {
        Re(Y), y()
      },
      get onconnect() {
        return le()
      },
      set onconnect(Y) {
        le(Y), y()
      },
      get onconnectstart() {
        return $n()
      },
      set onconnectstart(Y) {
        $n(Y), y()
      },
      get onconnectend() {
        return fn()
      },
      set onconnectend(Y) {
        fn(Y), y()
      },
      get onbeforedelete() {
        return En()
      },
      set onbeforedelete(Y) {
        En(Y), y()
      },
      get oninit() {
        return Te()
      },
      set oninit(Y) {
        Te(Y), y()
      },
      get nodeOrigin() {
        return st()
      },
      set nodeOrigin(Y) {
        st(Y), y()
      },
      get paneClickDistance() {
        return ye()
      },
      set paneClickDistance(Y) {
        ye(Y), y()
      },
      get nodeClickDistance() {
        return lt()
      },
      set nodeClickDistance(Y) {
        lt(Y), y()
      },
      get defaultMarkerColor() {
        return ct()
      },
      set defaultMarkerColor(Y) {
        ct(Y), y()
      },
      get style() {
        return Jt()
      },
      set style(Y) {
        Jt(Y), y()
      },
      get class() {
        return Oo()
      },
      set class(Y) {
        Oo(Y), y()
      }
    })
    return s(), sw
  }
  ie(
    Pc,
    {
      id: {},
      nodes: {},
      edges: {},
      fitView: {},
      fitViewOptions: {},
      minZoom: {},
      maxZoom: {},
      initialViewport: {},
      viewport: {},
      nodeTypes: {},
      edgeTypes: {},
      selectionKey: {},
      selectionMode: {},
      panActivationKey: {},
      multiSelectionKey: {},
      zoomActivationKey: {},
      nodesDraggable: {},
      nodesConnectable: {},
      nodeDragThreshold: {},
      elementsSelectable: {},
      snapGrid: {},
      deleteKey: {},
      connectionRadius: {},
      connectionLineType: {},
      connectionMode: {},
      connectionLineStyle: {},
      connectionLineContainerStyle: {},
      onMoveStart: {},
      onMove: {},
      onMoveEnd: {},
      isValidConnection: {},
      translateExtent: {},
      nodeExtent: {},
      onlyRenderVisibleElements: {},
      panOnScrollMode: {},
      preventScrolling: {},
      zoomOnScroll: {},
      zoomOnDoubleClick: {},
      zoomOnPinch: {},
      panOnScroll: {},
      panOnDrag: {},
      selectionOnDrag: {},
      autoPanOnConnect: {},
      autoPanOnNodeDrag: {},
      onerror: {},
      ondelete: {},
      onedgecreate: {},
      attributionPosition: {},
      proOptions: {},
      defaultEdgeOptions: {},
      width: {},
      height: {},
      colorMode: {},
      onconnect: {},
      onconnectstart: {},
      onconnectend: {},
      onbeforedelete: {},
      oninit: {},
      nodeOrigin: {},
      paneClickDistance: {},
      nodeClickDistance: {},
      defaultMarkerColor: {},
      style: {},
      class: {}
    },
    ['connectionLine', 'default'],
    [],
    !0
  )
  function Nc(e, t) {
    ue(t, !1)
    let n = w(t, 'initialNodes', 12, void 0),
      r = w(t, 'initialEdges', 12, void 0),
      o = w(t, 'initialWidth', 12, void 0),
      i = w(t, 'initialHeight', 12, void 0),
      s = w(t, 'fitView', 12, void 0),
      a = w(t, 'nodeOrigin', 12, void 0)
    const l = lc({ nodes: n(), edges: r(), width: o(), height: i(), nodeOrigin: a(), fitView: s() })
    Sr(Ri, { getStore: () => l }),
      $s(() => {
        l.reset()
      }),
      He()
    var u = tt(),
      c = xe(u)
    return (
      wt(c, t, 'default', {}),
      L(e, u),
      ce({
        get initialNodes() {
          return n()
        },
        set initialNodes(f) {
          n(f), y()
        },
        get initialEdges() {
          return r()
        },
        set initialEdges(f) {
          r(f), y()
        },
        get initialWidth() {
          return o()
        },
        set initialWidth(f) {
          o(f), y()
        },
        get initialHeight() {
          return i()
        },
        set initialHeight(f) {
          i(f), y()
        },
        get fitView() {
          return s()
        },
        set fitView(f) {
          s(f), y()
        },
        get nodeOrigin() {
          return a()
        },
        set nodeOrigin(f) {
          a(f), y()
        }
      })
    )
  }
  ie(
    Nc,
    {
      initialNodes: {},
      initialEdges: {},
      initialWidth: {},
      initialHeight: {},
      fitView: {},
      nodeOrigin: {}
    },
    ['default'],
    [],
    !0
  )
  var A2 = ne('<button><!></button>')
  function Po(e, t) {
    const n = it(t, ['children', '$$slots', '$$events', '$$legacy', '$$host']),
      r = it(n, ['class', 'bgColor', 'bgColorHover', 'color', 'colorHover', 'borderColor'])
    ue(t, !1)
    let o = w(t, 'class', 12, void 0),
      i = w(t, 'bgColor', 12, void 0),
      s = w(t, 'bgColorHover', 12, void 0),
      a = w(t, 'color', 12, void 0),
      l = w(t, 'colorHover', 12, void 0),
      u = w(t, 'borderColor', 12, void 0)
    He()
    var c = A2()
    let f
    var d = X(c)
    return (
      wt(d, t, 'default', { class: 'button-svg' }),
      Z(c),
      Ee(
        (g) => {
          ;(f = nn(c, f, { type: 'button', class: g, ...r })),
            at(c, '--xy-controls-button-background-color-props', i()),
            at(c, '--xy-controls-button-background-color-hover-props', s()),
            at(c, '--xy-controls-button-color-props', a()),
            at(c, '--xy-controls-button-color-hover-props', l()),
            at(c, '--xy-controls-button-border-color-props', u())
        },
        [() => Et(['svelte-flow__controls-button', o()])],
        ve
      ),
      Ze('click', c, function (g) {
        De.call(this, t, g)
      }),
      L(e, c),
      ce({
        get class() {
          return o()
        },
        set class(g) {
          o(g), y()
        },
        get bgColor() {
          return i()
        },
        set bgColor(g) {
          i(g), y()
        },
        get bgColorHover() {
          return s()
        },
        set bgColorHover(g) {
          s(g), y()
        },
        get color() {
          return a()
        },
        set color(g) {
          a(g), y()
        },
        get colorHover() {
          return l()
        },
        set colorHover(g) {
          l(g), y()
        },
        get borderColor() {
          return u()
        },
        set borderColor(g) {
          u(g), y()
        }
      })
    )
  }
  ie(
    Po,
    { class: {}, bgColor: {}, bgColorHover: {}, color: {}, colorHover: {}, borderColor: {} },
    ['default'],
    [],
    !0
  )
  var L2 = _e(
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M32 18.133H18.133V32h-4.266V18.133H0v-4.266h13.867V0h4.266v13.867H32z"></path></svg>'
  )
  function Tc(e) {
    var t = L2()
    L(e, t)
  }
  ie(Tc, {}, [], [], !0)
  var O2 = _e(
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 5"><path d="M0 0h32v4.2H0z"></path></svg>'
  )
  function Mc(e) {
    var t = O2()
    L(e, t)
  }
  ie(Mc, {}, [], [], !0)
  var I2 = _e(
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 30"><path d="M3.692 4.63c0-.53.4-.938.939-.938h5.215V0H4.708C2.13 0 0 2.054 0 4.63v5.216h3.692V4.631zM27.354 0h-5.2v3.692h5.17c.53 0 .984.4.984.939v5.215H32V4.631A4.624 4.624 0 0027.354 0zm.954 24.83c0 .532-.4.94-.939.94h-5.215v3.768h5.215c2.577 0 4.631-2.13 4.631-4.707v-5.139h-3.692v5.139zm-23.677.94c-.531 0-.939-.4-.939-.94v-5.138H0v5.139c0 2.577 2.13 4.707 4.708 4.707h5.138V25.77H4.631z"></path></svg>'
  )
  function Hc(e) {
    var t = I2()
    L(e, t)
  }
  ie(Hc, {}, [], [], !0)
  var z2 = _e(
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 32"><path d="M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0 8 0 4.571 3.429 4.571 7.619v3.048H3.048A3.056 3.056 0 000 13.714v15.238A3.056 3.056 0 003.048 32h18.285a3.056 3.056 0 003.048-3.048V13.714a3.056 3.056 0 00-3.048-3.047zM12.19 24.533a3.056 3.056 0 01-3.047-3.047 3.056 3.056 0 013.047-3.048 3.056 3.056 0 013.048 3.048 3.056 3.056 0 01-3.048 3.047zm4.724-13.866H7.467V7.619c0-2.59 2.133-4.724 4.723-4.724 2.591 0 4.724 2.133 4.724 4.724v3.048z"></path></svg>'
  )
  function Vc(e) {
    var t = z2()
    L(e, t)
  }
  ie(Vc, {}, [], [], !0)
  var R2 = _e(
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 32"><path d="M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0c-4.114 1.828-1.37 2.133.305 2.438 1.676.305 4.42 2.59 4.42 5.181v3.048H3.047A3.056 3.056 0 000 13.714v15.238A3.056 3.056 0 003.048 32h18.285a3.056 3.056 0 003.048-3.048V13.714a3.056 3.056 0 00-3.048-3.047zM12.19 24.533a3.056 3.056 0 01-3.047-3.047 3.056 3.056 0 013.047-3.048 3.056 3.056 0 013.048 3.048 3.056 3.056 0 01-3.048 3.047z"></path></svg>'
  )
  function Dc(e) {
    var t = R2()
    L(e, t)
  }
  ie(Dc, {}, [], [], !0)
  var B2 = ne('<!> <!>', 1),
    Y2 = ne('<!> <!> <!> <!> <!> <!>', 1)
  function Ac(e, t) {
    ue(t, !1)
    const [n, r] = nt(),
      o = () => Q(H, '$nodesDraggable', n),
      i = () => Q(I, '$nodesConnectable', n),
      s = () => Q(B, '$elementsSelectable', n),
      a = () => Q(M, '$viewport', n),
      l = () => Q(k, '$minZoom', n),
      u = () => Q(P, '$maxZoom', n),
      c = re(),
      f = re(),
      d = re(),
      g = re()
    let p = w(t, 'position', 12, 'bottom-left'),
      x = w(t, 'showZoom', 12, !0),
      C = w(t, 'showFitView', 12, !0),
      $ = w(t, 'showLock', 12, !0),
      m = w(t, 'buttonBgColor', 12, void 0),
      _ = w(t, 'buttonBgColorHover', 12, void 0),
      v = w(t, 'buttonColor', 12, void 0),
      b = w(t, 'buttonColorHover', 12, void 0),
      N = w(t, 'buttonBorderColor', 12, void 0),
      E = w(t, 'ariaLabel', 12, void 0),
      T = w(t, 'style', 12, void 0),
      D = w(t, 'orientation', 12, 'vertical'),
      V = w(t, 'fitViewOptions', 12, void 0),
      A = w(t, 'class', 12, '')
    const {
        zoomIn: O,
        zoomOut: R,
        fitView: S,
        viewport: M,
        minZoom: k,
        maxZoom: P,
        nodesDraggable: H,
        nodesConnectable: I,
        elementsSelectable: B
      } = Ue(),
      F = { bgColor: m(), bgColorHover: _(), color: v(), colorHover: b(), borderColor: N() },
      K = () => {
        O()
      },
      se = () => {
        R()
      },
      ee = () => {
        S(V())
      },
      W = () => {
        U(c, !h(c)), H.set(h(c)), I.set(h(c)), B.set(h(c))
      }
    ge(
      () => (o(), i(), s()),
      () => {
        U(c, o() || i() || s())
      }
    ),
      ge(
        () => (a(), l()),
        () => {
          U(f, a().zoom <= l())
        }
      ),
      ge(
        () => (a(), u()),
        () => {
          U(d, a().zoom >= u())
        }
      ),
      ge(
        () => j(D()),
        () => {
          U(g, D() === 'horizontal' ? 'horizontal' : 'vertical')
        }
      ),
      vt(),
      He()
    const fe = ve(() => Et(['svelte-flow__controls', h(g), A()])),
      me = ve(() => E() ?? 'Svelte Flow controls')
    So(e, {
      get class() {
        return h(fe)
      },
      get position() {
        return p()
      },
      'data-testid': 'svelte-flow__controls',
      get 'aria-label'() {
        return h(me)
      },
      get style() {
        return T()
      },
      children: (he, ze) => {
        var G = Y2(),
          ae = xe(G)
        wt(ae, t, 'before', {})
        var Me = z(ae, 2)
        {
          var Le = (pe) => {
            var be = B2(),
              Ie = xe(be)
            Po(
              Ie,
              ft(
                {
                  class: 'svelte-flow__controls-zoomin',
                  title: 'zoom in',
                  'aria-label': 'zoom in',
                  get disabled() {
                    return h(d)
                  }
                },
                F,
                {
                  $$events: { click: K },
                  children: (dt, J) => {
                    Tc(dt)
                  },
                  $$slots: { default: !0 }
                }
              )
            )
            var ht = z(Ie, 2)
            Po(
              ht,
              ft(
                {
                  class: 'svelte-flow__controls-zoomout',
                  title: 'zoom out',
                  'aria-label': 'zoom out',
                  get disabled() {
                    return h(f)
                  }
                },
                F,
                {
                  $$events: { click: se },
                  children: (dt, J) => {
                    Mc(dt)
                  },
                  $$slots: { default: !0 }
                }
              )
            ),
              L(pe, be)
          }
          ke(Me, (pe) => {
            x() && pe(Le)
          })
        }
        var Xe = z(Me, 2)
        {
          var te = (pe) => {
            Po(
              pe,
              ft(
                {
                  class: 'svelte-flow__controls-fitview',
                  title: 'fit view',
                  'aria-label': 'fit view'
                },
                F,
                {
                  $$events: { click: ee },
                  children: (be, Ie) => {
                    Hc(be)
                  },
                  $$slots: { default: !0 }
                }
              )
            )
          }
          ke(Xe, (pe) => {
            C() && pe(te)
          })
        }
        var Fe = z(Xe, 2)
        {
          var Oe = (pe) => {
            Po(
              pe,
              ft(
                {
                  class: 'svelte-flow__controls-interactive',
                  title: 'toggle interactivity',
                  'aria-label': 'toggle interactivity'
                },
                F,
                {
                  $$events: { click: W },
                  children: (be, Ie) => {
                    var ht = tt(),
                      dt = xe(ht)
                    {
                      var J = (le) => {
                          Dc(le)
                        },
                        Re = (le) => {
                          Vc(le)
                        }
                      ke(dt, (le) => {
                        h(c) ? le(J) : le(Re, !1)
                      })
                    }
                    L(be, ht)
                  },
                  $$slots: { default: !0 }
                }
              )
            )
          }
          ke(Fe, (pe) => {
            $() && pe(Oe)
          })
        }
        var rt = z(Fe, 2)
        wt(rt, t, 'default', {})
        var oe = z(rt, 2)
        wt(oe, t, 'after', {}), L(he, G)
      },
      $$slots: { default: !0 }
    })
    var Ce = ce({
      get position() {
        return p()
      },
      set position(he) {
        p(he), y()
      },
      get showZoom() {
        return x()
      },
      set showZoom(he) {
        x(he), y()
      },
      get showFitView() {
        return C()
      },
      set showFitView(he) {
        C(he), y()
      },
      get showLock() {
        return $()
      },
      set showLock(he) {
        $(he), y()
      },
      get buttonBgColor() {
        return m()
      },
      set buttonBgColor(he) {
        m(he), y()
      },
      get buttonBgColorHover() {
        return _()
      },
      set buttonBgColorHover(he) {
        _(he), y()
      },
      get buttonColor() {
        return v()
      },
      set buttonColor(he) {
        v(he), y()
      },
      get buttonColorHover() {
        return b()
      },
      set buttonColorHover(he) {
        b(he), y()
      },
      get buttonBorderColor() {
        return N()
      },
      set buttonBorderColor(he) {
        N(he), y()
      },
      get ariaLabel() {
        return E()
      },
      set ariaLabel(he) {
        E(he), y()
      },
      get style() {
        return T()
      },
      set style(he) {
        T(he), y()
      },
      get orientation() {
        return D()
      },
      set orientation(he) {
        D(he), y()
      },
      get fitViewOptions() {
        return V()
      },
      set fitViewOptions(he) {
        V(he), y()
      },
      get class() {
        return A()
      },
      set class(he) {
        A(he), y()
      }
    })
    return r(), Ce
  }
  ie(
    Ac,
    {
      position: {},
      showZoom: {},
      showFitView: {},
      showLock: {},
      buttonBgColor: {},
      buttonBgColorHover: {},
      buttonColor: {},
      buttonColorHover: {},
      buttonBorderColor: {},
      ariaLabel: {},
      style: {},
      orientation: {},
      fitViewOptions: {},
      class: {}
    },
    ['before', 'default', 'after'],
    [],
    !0
  )
  var tr
  ;(function (e) {
    ;(e.Lines = 'lines'), (e.Dots = 'dots'), (e.Cross = 'cross')
  })(tr || (tr = {}))
  var Z2 = _e('<circle></circle>')
  function Lc(e, t) {
    ue(t, !1)
    let n = w(t, 'radius', 12, 5),
      r = w(t, 'class', 12, '')
    He()
    var o = Z2()
    return (
      Ee(
        (i) => {
          de(o, 'cx', n()), de(o, 'cy', n()), de(o, 'r', n()), $t(o, 0, wn(i))
        },
        [() => Et(['svelte-flow__background-pattern', 'dots', r()])],
        ve
      ),
      L(e, o),
      ce({
        get radius() {
          return n()
        },
        set radius(i) {
          n(i), y()
        },
        get class() {
          return r()
        },
        set class(i) {
          r(i), y()
        }
      })
    )
  }
  ie(Lc, { radius: {}, class: {} }, [], [], !0)
  var X2 = _e('<path></path>')
  function Oc(e, t) {
    ue(t, !1)
    let n = w(t, 'lineWidth', 12, 1),
      r = w(t, 'dimensions', 12),
      o = w(t, 'variant', 12, void 0),
      i = w(t, 'class', 12, '')
    He()
    var s = X2()
    return (
      Ee(
        (a) => {
          de(s, 'stroke-width', n()),
            de(s, 'd', `M${r()[0] / 2} 0 V${r()[1]} M0 ${r()[1] / 2} H${r()[0]}`),
            $t(s, 0, wn(a))
        },
        [() => Et(['svelte-flow__background-pattern', o(), i()])],
        ve
      ),
      L(e, s),
      ce({
        get lineWidth() {
          return n()
        },
        set lineWidth(a) {
          n(a), y()
        },
        get dimensions() {
          return r()
        },
        set dimensions(a) {
          r(a), y()
        },
        get variant() {
          return o()
        },
        set variant(a) {
          o(a), y()
        },
        get class() {
          return i()
        },
        set class(a) {
          i(a), y()
        }
      })
    )
  }
  ie(Oc, { lineWidth: {}, dimensions: {}, variant: {}, class: {} }, [], [], !0)
  const F2 = { [tr.Dots]: 1, [tr.Lines]: 1, [tr.Cross]: 6 }
  var W2 = _e(
    '<svg data-testid="svelte-flow__background"><pattern patternUnits="userSpaceOnUse"><!></pattern><rect x="0" y="0" width="100%" height="100%"></rect></svg>'
  )
  const K2 = {
    hash: 'svelte-1r7pe8d',
    code: '.svelte-flow__background.svelte-1r7pe8d {position:absolute;width:100%;height:100%;top:0;left:0;}'
  }
  function Ic(e, t) {
    ue(t, !1), et(e, K2)
    const [n, r] = nt(),
      o = () => Q(b, '$flowId', n),
      i = () => Q(v, '$viewport', n),
      s = re(),
      a = re(),
      l = re(),
      u = re(),
      c = re()
    let f = w(t, 'id', 12, void 0),
      d = w(t, 'variant', 28, () => tr.Dots),
      g = w(t, 'gap', 12, 20),
      p = w(t, 'size', 12, 1),
      x = w(t, 'lineWidth', 12, 1),
      C = w(t, 'bgColor', 12, void 0),
      $ = w(t, 'patternColor', 12, void 0),
      m = w(t, 'patternClass', 12, void 0),
      _ = w(t, 'class', 12, '')
    const { viewport: v, flowId: b } = Ue(),
      N = p() || F2[d()],
      E = d() === tr.Dots,
      T = d() === tr.Cross,
      D = Array.isArray(g()) ? g() : [g(), g()]
    ge(
      () => (o(), j(f())),
      () => {
        U(s, `background-pattern-${o()}-${f() ? f() : ''}`)
      }
    ),
      ge(
        () => i(),
        () => {
          U(a, [D[0] * i().zoom || 1, D[1] * i().zoom || 1])
        }
      ),
      ge(
        () => i(),
        () => {
          U(l, N * i().zoom)
        }
      ),
      ge(
        () => (h(l), h(a)),
        () => {
          U(u, T ? [h(l), h(l)] : h(a))
        }
      ),
      ge(
        () => (h(l), h(u)),
        () => {
          U(c, E ? [h(l) / 2, h(l) / 2] : [h(u)[0] / 2, h(u)[1] / 2])
        }
      ),
      vt(),
      He()
    var V = W2(),
      A = X(V),
      O = X(A)
    {
      var R = (P) => {
          const H = ve(() => h(l) / 2)
          Lc(P, {
            get radius() {
              return h(H)
            },
            get class() {
              return m()
            }
          })
        },
        S = (P) => {
          Oc(P, {
            get dimensions() {
              return h(u)
            },
            get variant() {
              return d()
            },
            get lineWidth() {
              return x()
            },
            get class() {
              return m()
            }
          })
        }
      ke(O, (P) => {
        E ? P(R) : P(S, !1)
      })
    }
    Z(A)
    var M = z(A)
    Z(V),
      Ee(
        (P) => {
          $t(V, 0, wn(P), 'svelte-1r7pe8d'),
            at(V, '--xy-background-color-props', C()),
            at(V, '--xy-background-pattern-color-props', $()),
            de(A, 'id', h(s)),
            de(A, 'x', i().x % h(a)[0]),
            de(A, 'y', i().y % h(a)[1]),
            de(A, 'width', h(a)[0]),
            de(A, 'height', h(a)[1]),
            de(A, 'patternTransform', `translate(-${h(c)[0]},-${h(c)[1]})`),
            de(M, 'fill', `url(#${h(s)})`)
        },
        [() => Et(['svelte-flow__background', _()])],
        ve
      ),
      L(e, V)
    var k = ce({
      get id() {
        return f()
      },
      set id(P) {
        f(P), y()
      },
      get variant() {
        return d()
      },
      set variant(P) {
        d(P), y()
      },
      get gap() {
        return g()
      },
      set gap(P) {
        g(P), y()
      },
      get size() {
        return p()
      },
      set size(P) {
        p(P), y()
      },
      get lineWidth() {
        return x()
      },
      set lineWidth(P) {
        x(P), y()
      },
      get bgColor() {
        return C()
      },
      set bgColor(P) {
        C(P), y()
      },
      get patternColor() {
        return $()
      },
      set patternColor(P) {
        $(P), y()
      },
      get patternClass() {
        return m()
      },
      set patternClass(P) {
        m(P), y()
      },
      get class() {
        return _()
      },
      set class(P) {
        _(P), y()
      }
    })
    return r(), k
  }
  ie(
    Ic,
    {
      id: {},
      variant: {},
      gap: {},
      size: {},
      lineWidth: {},
      bgColor: {},
      patternColor: {},
      patternClass: {},
      class: {}
    },
    [],
    [],
    !0
  )
  var q2 = _e('<rect></rect>')
  function zc(e, t) {
    ue(t, !1)
    let n = w(t, 'x', 12),
      r = w(t, 'y', 12),
      o = w(t, 'width', 12, 0),
      i = w(t, 'height', 12, 0),
      s = w(t, 'borderRadius', 12, 5),
      a = w(t, 'color', 12, void 0),
      l = w(t, 'shapeRendering', 12),
      u = w(t, 'strokeColor', 12, void 0),
      c = w(t, 'strokeWidth', 12, 2),
      f = w(t, 'selected', 12, !1),
      d = w(t, 'class', 12, '')
    He()
    var g = q2()
    let p
    return (
      Ee(
        (x) => {
          ;(p = $t(g, 0, wn(x), null, p, { selected: f() })),
            de(g, 'x', n()),
            de(g, 'y', r()),
            de(g, 'rx', s()),
            de(g, 'ry', s()),
            de(g, 'width', o()),
            de(g, 'height', i()),
            de(
              g,
              'style',
              `${a() ? `fill: ${a()};` : ''}${u() ? `stroke: ${u()};` : ''}${c() ? `stroke-width: ${c()};` : ''}`
            ),
            de(g, 'shape-rendering', l())
        },
        [() => Et(['svelte-flow__minimap-node', d()])],
        ve
      ),
      L(e, g),
      ce({
        get x() {
          return n()
        },
        set x(x) {
          n(x), y()
        },
        get y() {
          return r()
        },
        set y(x) {
          r(x), y()
        },
        get width() {
          return o()
        },
        set width(x) {
          o(x), y()
        },
        get height() {
          return i()
        },
        set height(x) {
          i(x), y()
        },
        get borderRadius() {
          return s()
        },
        set borderRadius(x) {
          s(x), y()
        },
        get color() {
          return a()
        },
        set color(x) {
          a(x), y()
        },
        get shapeRendering() {
          return l()
        },
        set shapeRendering(x) {
          l(x), y()
        },
        get strokeColor() {
          return u()
        },
        set strokeColor(x) {
          u(x), y()
        },
        get strokeWidth() {
          return c()
        },
        set strokeWidth(x) {
          c(x), y()
        },
        get selected() {
          return f()
        },
        set selected(x) {
          f(x), y()
        },
        get class() {
          return d()
        },
        set class(x) {
          d(x), y()
        }
      })
    )
  }
  ie(
    zc,
    {
      x: {},
      y: {},
      width: {},
      height: {},
      borderRadius: {},
      color: {},
      shapeRendering: {},
      strokeColor: {},
      strokeWidth: {},
      selected: {},
      class: {}
    },
    [],
    [],
    !0
  )
  function ca(e, t) {
    const n = H0({
      domNode: e,
      panZoom: t.panZoom,
      getTransform: () => {
        const o = q(t.viewport)
        return [o.x, o.y, o.zoom]
      },
      getViewScale: t.getViewScale
    })
    function r(o) {
      n.update({
        translateExtent: o.translateExtent,
        width: o.width,
        height: o.height,
        inversePan: o.inversePan,
        zoomStep: o.zoomStep,
        pannable: o.pannable,
        zoomable: o.zoomable
      })
    }
    return {
      update: r,
      destroy() {
        n.destroy()
      }
    }
  }
  const da = (e) => (e instanceof Function ? e : () => e)
  var G2 = _e('<title> </title>'),
    U2 = _e(
      '<svg class="svelte-flow__minimap-svg" role="img"><!><!><path class="svelte-flow__minimap-mask" fill-rule="evenodd" pointer-events="none"></path></svg>'
    )
  function Rc(e, t) {
    ue(t, !1)
    const [n, r] = nt(),
      o = () => Q(Xe, '$flowId', n),
      i = () => Q(ae, '$viewport', n),
      s = () => Q(Me, '$containerWidth', n),
      a = () => Q(Le, '$containerHeight', n),
      l = () => Q(G, '$nodeLookup', n),
      u = () => Q(ze, '$nodes', n),
      c = () => Q(te, '$panZoom', n),
      f = () => Q(Fe, '$translateExtent', n),
      d = re(),
      g = re(),
      p = re(),
      x = re(),
      C = re(),
      $ = re(),
      m = re(),
      _ = re(),
      v = re(),
      b = re(),
      N = re(),
      E = re(),
      T = re()
    let D = w(t, 'position', 12, 'bottom-right'),
      V = w(t, 'ariaLabel', 12, 'Mini map'),
      A = w(t, 'nodeStrokeColor', 12, 'transparent'),
      O = w(t, 'nodeColor', 12, void 0),
      R = w(t, 'nodeClass', 12, ''),
      S = w(t, 'nodeBorderRadius', 12, 5),
      M = w(t, 'nodeStrokeWidth', 12, 2),
      k = w(t, 'bgColor', 12, void 0),
      P = w(t, 'maskColor', 12, void 0),
      H = w(t, 'maskStrokeColor', 12, void 0),
      I = w(t, 'maskStrokeWidth', 12, void 0),
      B = w(t, 'width', 12, void 0),
      F = w(t, 'height', 12, void 0),
      K = w(t, 'pannable', 12, !0),
      se = w(t, 'zoomable', 12, !0),
      ee = w(t, 'inversePan', 12, void 0),
      W = w(t, 'zoomStep', 12, void 0),
      fe = w(t, 'style', 12, ''),
      me = w(t, 'class', 12, '')
    const Ce = 200,
      he = 150,
      {
        nodes: ze,
        nodeLookup: G,
        viewport: ae,
        width: Me,
        height: Le,
        flowId: Xe,
        panZoom: te,
        translateExtent: Fe
      } = Ue(),
      Oe = O() === void 0 ? void 0 : da(O()),
      rt = da(A()),
      oe = da(R()),
      pe = typeof window > 'u' || window.chrome ? 'crispEdges' : 'geometricPrecision',
      be = `svelte-flow__minimap-desc-${o()}`
    let Ie = re(h(d))
    const ht = () => h($)
    ge(
      () => (i(), s(), a()),
      () => {
        U(d, {
          x: -i().x / i().zoom,
          y: -i().y / i().zoom,
          width: s() / i().zoom,
          height: a() / i().zoom
        })
      }
    ),
      ge(
        () => (l(), h(d), u()),
        () => {
          U(Ie, l().size > 0 ? Cu(bo(l()), h(d)) : h(d)), u()
        }
      ),
      ge(
        () => j(B()),
        () => {
          U(g, B() ?? Ce)
        }
      ),
      ge(
        () => j(F()),
        () => {
          U(p, F() ?? he)
        }
      ),
      ge(
        () => (h(Ie), h(g)),
        () => {
          U(x, h(Ie).width / h(g))
        }
      ),
      ge(
        () => (h(Ie), h(p)),
        () => {
          U(C, h(Ie).height / h(p))
        }
      ),
      ge(
        () => (h(x), h(C)),
        () => {
          U($, Math.max(h(x), h(C)))
        }
      ),
      ge(
        () => (h($), h(g)),
        () => {
          U(m, h($) * h(g))
        }
      ),
      ge(
        () => (h($), h(p)),
        () => {
          U(_, h($) * h(p))
        }
      ),
      ge(
        () => h($),
        () => {
          U(v, 5 * h($))
        }
      ),
      ge(
        () => (h(Ie), h(m), h(v)),
        () => {
          U(b, h(Ie).x - (h(m) - h(Ie).width) / 2 - h(v))
        }
      ),
      ge(
        () => (h(Ie), h(_), h(v)),
        () => {
          U(N, h(Ie).y - (h(_) - h(Ie).height) / 2 - h(v))
        }
      ),
      ge(
        () => (h(m), h(v)),
        () => {
          U(E, h(m) + h(v) * 2)
        }
      ),
      ge(
        () => (h(_), h(v)),
        () => {
          U(T, h(_) + h(v) * 2)
        }
      ),
      vt(),
      He()
    const dt = ve(() => fe() + (k() ? `;--xy-minimap-background-color-props:${k()}` : '')),
      J = ve(() => Et(['svelte-flow__minimap', me()]))
    So(e, {
      get position() {
        return D()
      },
      get style() {
        return h(dt)
      },
      get class() {
        return h(J)
      },
      'data-testid': 'svelte-flow__minimap',
      children: (le, $n) => {
        var fn = tt(),
          En = xe(fn)
        {
          var Te = (st) => {
            var ye = U2()
            de(ye, 'aria-labelledby', be)
            var lt = X(ye)
            {
              var ct = (Wt) => {
                var Ot = G2()
                de(Ot, 'id', be)
                var Sn = X(Ot, !0)
                Z(Ot), Ee(() => Bt(Sn, V())), L(Wt, Ot)
              }
              ke(lt, (Wt) => {
                V() && Wt(ct)
              })
            }
            var Jt = z(lt)
            Yt(
              Jt,
              1,
              u,
              (Wt) => Wt.id,
              (Wt, Ot) => {
                var Sn = tt()
                const gn = ve(() => l().get(h(Ot).id))
                var mt = xe(Sn)
                {
                  var xa = (yr) => {
                    const hn = ve(() => Qn(h(gn))),
                      ji = ve(() => (Oe == null ? void 0 : Oe(h(gn)))),
                      Ji = ve(() => rt(h(gn))),
                      Qi = ve(() => oe(h(gn)))
                    zc(
                      yr,
                      ft(
                        {
                          get x() {
                            return h(gn).internals.positionAbsolute.x
                          },
                          get y() {
                            return h(gn).internals.positionAbsolute.y
                          }
                        },
                        () => h(hn),
                        {
                          get selected() {
                            return h(gn).selected
                          },
                          get color() {
                            return h(ji)
                          },
                          get borderRadius() {
                            return S()
                          },
                          get strokeColor() {
                            return h(Ji)
                          },
                          get strokeWidth() {
                            return M()
                          },
                          shapeRendering: pe,
                          get class() {
                            return h(Qi)
                          }
                        }
                      )
                    )
                  }
                  ke(mt, (yr) => {
                    h(gn) && Eu(h(gn)) && yr(xa)
                  })
                }
                L(Wt, Sn)
              }
            )
            var Oo = z(Jt)
            Z(ye),
              _t(
                ye,
                (Wt, Ot) => (ca == null ? void 0 : ca(Wt, Ot)),
                () => ({
                  panZoom: c(),
                  viewport: ae,
                  getViewScale: ht,
                  translateExtent: f(),
                  width: s(),
                  height: a(),
                  inversePan: ee(),
                  zoomStep: W(),
                  pannable: K(),
                  zoomable: se()
                })
              ),
              Ee(() => {
                de(ye, 'width', h(g)),
                  de(ye, 'height', h(p)),
                  de(ye, 'viewBox', `${h(b) ?? ''} ${h(N) ?? ''} ${h(E) ?? ''} ${h(T) ?? ''}`),
                  at(ye, '--xy-minimap-mask-background-color-props', P()),
                  at(ye, '--xy-minimap-mask-stroke-color-props', H()),
                  at(ye, '--xy-minimap-mask-stroke-width-props', I() ? I() * h($) : void 0),
                  de(
                    Oo,
                    'd',
                    `M${h(b) - h(v)},${h(N) - h(v)}h${h(E) + h(v) * 2}v${h(T) + h(v) * 2}h${-h(E) - h(v) * 2}z
      M${h(d).x ?? ''},${h(d).y ?? ''}h${h(d).width ?? ''}v${h(d).height ?? ''}h${-h(d).width}z`
                  )
              }),
              L(st, ye)
          }
          ke(En, (st) => {
            c() && st(Te)
          })
        }
        L(le, fn)
      },
      $$slots: { default: !0 }
    })
    var Re = ce({
      get position() {
        return D()
      },
      set position(le) {
        D(le), y()
      },
      get ariaLabel() {
        return V()
      },
      set ariaLabel(le) {
        V(le), y()
      },
      get nodeStrokeColor() {
        return A()
      },
      set nodeStrokeColor(le) {
        A(le), y()
      },
      get nodeColor() {
        return O()
      },
      set nodeColor(le) {
        O(le), y()
      },
      get nodeClass() {
        return R()
      },
      set nodeClass(le) {
        R(le), y()
      },
      get nodeBorderRadius() {
        return S()
      },
      set nodeBorderRadius(le) {
        S(le), y()
      },
      get nodeStrokeWidth() {
        return M()
      },
      set nodeStrokeWidth(le) {
        M(le), y()
      },
      get bgColor() {
        return k()
      },
      set bgColor(le) {
        k(le), y()
      },
      get maskColor() {
        return P()
      },
      set maskColor(le) {
        P(le), y()
      },
      get maskStrokeColor() {
        return H()
      },
      set maskStrokeColor(le) {
        H(le), y()
      },
      get maskStrokeWidth() {
        return I()
      },
      set maskStrokeWidth(le) {
        I(le), y()
      },
      get width() {
        return B()
      },
      set width(le) {
        B(le), y()
      },
      get height() {
        return F()
      },
      set height(le) {
        F(le), y()
      },
      get pannable() {
        return K()
      },
      set pannable(le) {
        K(le), y()
      },
      get zoomable() {
        return se()
      },
      set zoomable(le) {
        se(le), y()
      },
      get inversePan() {
        return ee()
      },
      set inversePan(le) {
        ee(le), y()
      },
      get zoomStep() {
        return W()
      },
      set zoomStep(le) {
        W(le), y()
      },
      get style() {
        return fe()
      },
      set style(le) {
        fe(le), y()
      },
      get class() {
        return me()
      },
      set class(le) {
        me(le), y()
      }
    })
    return r(), Re
  }
  ie(
    Rc,
    {
      position: {},
      ariaLabel: {},
      nodeStrokeColor: {},
      nodeColor: {},
      nodeClass: {},
      nodeBorderRadius: {},
      nodeStrokeWidth: {},
      bgColor: {},
      maskColor: {},
      maskStrokeColor: {},
      maskStrokeWidth: {},
      width: {},
      height: {},
      pannable: {},
      zoomable: {},
      inversePan: {},
      zoomStep: {},
      style: {},
      class: {}
    },
    [],
    [],
    !0
  )
  const Bc = (e) => Uv(e)
  function Lt() {
    const {
        zoomIn: e,
        zoomOut: t,
        fitView: n,
        onbeforedelete: r,
        snapGrid: o,
        viewport: i,
        width: s,
        height: a,
        minZoom: l,
        maxZoom: u,
        panZoom: c,
        nodes: f,
        edges: d,
        domNode: g,
        nodeLookup: p,
        nodeOrigin: x,
        edgeLookup: C,
        connectionLookup: $
      } = Ue(),
      m = (b) => {
        var V, A
        const N = q(p),
          E = Bc(b) ? b : N.get(b.id),
          T = E.parentId ? e0(E.position, E.measured, E.parentId, N, q(x)) : E.position,
          D = {
            ...E,
            position: T,
            width: ((V = E.measured) == null ? void 0 : V.width) ?? E.width,
            height: ((A = E.measured) == null ? void 0 : A.height) ?? E.height
          }
        return Or(D)
      },
      _ = (b, N, E = { replace: !1 }) => {
        var V
        const T = (V = q(p).get(b)) == null ? void 0 : V.internals.userNode
        if (!T) return
        const D = typeof N == 'function' ? N(T) : N
        E.replace
          ? f.update((A) => A.map((O) => (O.id === b ? (Bc(D) ? D : { ...O, ...D }) : O)))
          : (Object.assign(T, D), f.update((A) => A))
      },
      v = (b) => q(p).get(b)
    return {
      zoomIn: e,
      zoomOut: t,
      getInternalNode: v,
      getNode: (b) => {
        var N
        return (N = v(b)) == null ? void 0 : N.internals.userNode
      },
      getNodes: (b) => (b === void 0 ? q(f) : Yc(q(p), b)),
      getEdge: (b) => q(C).get(b),
      getEdges: (b) => (b === void 0 ? q(d) : Yc(q(C), b)),
      setZoom: (b, N) => {
        const E = q(c)
        return E ? E.scaleTo(b, { duration: N == null ? void 0 : N.duration }) : Promise.resolve(!1)
      },
      getZoom: () => q(i).zoom,
      setViewport: async (b, N) => {
        const E = q(i),
          T = q(c)
        return T
          ? (await T.setViewport(
              { x: b.x ?? E.x, y: b.y ?? E.y, zoom: b.zoom ?? E.zoom },
              { duration: N == null ? void 0 : N.duration }
            ),
            Promise.resolve(!0))
          : Promise.resolve(!1)
      },
      getViewport: () => q(i),
      setCenter: async (b, N, E) => {
        const T = typeof (E == null ? void 0 : E.zoom) < 'u' ? E.zoom : q(u),
          D = q(c)
        return D
          ? (await D.setViewport(
              { x: q(s) / 2 - b * T, y: q(a) / 2 - N * T, zoom: T },
              { duration: E == null ? void 0 : E.duration }
            ),
            Promise.resolve(!0))
          : Promise.resolve(!1)
      },
      fitView: n,
      fitBounds: async (b, N) => {
        const E = q(c)
        if (!E) return Promise.resolve(!1)
        const T = js(b, q(s), q(a), q(l), q(u), (N == null ? void 0 : N.padding) ?? 0.1)
        return (
          await E.setViewport(T, { duration: N == null ? void 0 : N.duration }), Promise.resolve(!0)
        )
      },
      getIntersectingNodes: (b, N = !0, E) => {
        const T = ku(b),
          D = T ? b : m(b)
        return D
          ? (E || q(f)).filter((V) => {
              const A = q(p).get(V.id)
              if (!A || (!T && V.id === b.id)) return !1
              const O = Or(A),
                R = Co(O, D)
              return (N && R > 0) || R >= D.width * D.height
            })
          : []
      },
      isNodeIntersecting: (b, N, E = !0) => {
        const D = ku(b) ? b : m(b)
        if (!D) return !1
        const V = Co(D, N)
        return (E && V > 0) || V >= D.width * D.height
      },
      deleteElements: async ({ nodes: b = [], edges: N = [] }) => {
        const { nodes: E, edges: T } = await wu({
          nodesToRemove: b,
          edgesToRemove: N,
          nodes: q(f),
          edges: q(d),
          onBeforeDelete: q(r)
        })
        return (
          E && f.update((D) => D.filter((V) => !E.some(({ id: A }) => A === V.id))),
          T && d.update((D) => D.filter((V) => !T.some(({ id: A }) => A === V.id))),
          { deletedNodes: E, deletedEdges: T }
        )
      },
      screenToFlowPosition: (b, N = { snapToGrid: !0 }) => {
        const E = q(g)
        if (!E) return b
        const T = N.snapToGrid ? q(o) : !1,
          { x: D, y: V, zoom: A } = q(i),
          { x: O, y: R } = E.getBoundingClientRect(),
          S = { x: b.x - O, y: b.y - R }
        return ko(S, [D, V, A], T !== null, T || [1, 1])
      },
      flowToScreenPosition: (b) => {
        const N = q(g)
        if (!N) return b
        const { x: E, y: T, zoom: D } = q(i),
          { x: V, y: A } = N.getBoundingClientRect(),
          O = $u(b, [E, T, D])
        return { x: O.x + V, y: O.y + A }
      },
      toObject: () => ({
        nodes: q(f).map((b) => ({ ...b, position: { ...b.position }, data: { ...b.data } })),
        edges: q(d).map((b) => ({ ...b })),
        viewport: { ...q(i) }
      }),
      updateNode: _,
      updateNodeData: (b, N, E) => {
        var V
        const T = (V = q(p).get(b)) == null ? void 0 : V.internals.userNode
        if (!T) return
        const D = typeof N == 'function' ? N(T) : N
        ;(T.data = E != null && E.replace ? D : { ...T.data, ...D }), f.update((A) => A)
      },
      getNodesBounds: (b) => {
        const N = q(p),
          E = q(x)
        return jv(b, { nodeLookup: N, nodeOrigin: E })
      },
      getHandleConnections: ({ type: b, id: N, nodeId: E }) => {
        var T
        return Array.from(
          ((T = q($).get(`${E}-${b}-${N ?? null}`)) == null ? void 0 : T.values()) ?? []
        )
      },
      viewport: i
    }
  }
  function Yc(e, t) {
    var r
    const n = []
    for (const o of t) {
      const i = e.get(o)
      if (i) {
        const s = 'internals' in i ? ((r = i.internals) == null ? void 0 : r.userNode) : i
        n.push(s)
      }
    }
    return n
  }
  var j2 = ne('<div class="svelte-flow__node-toolbar"><!></div>')
  function Zc(e, t) {
    ue(t, !1)
    const [n, r] = nt(),
      o = () => Q(_, '$nodes', n),
      i = () => Q(m, '$nodeLookup', n),
      s = () => Q($, '$viewport', n),
      a = () => Q(C, '$domNode', n),
      l = re(),
      u = re(),
      c = re()
    let f = w(t, 'nodeId', 12, void 0),
      d = w(t, 'position', 12, void 0),
      g = w(t, 'align', 12, void 0),
      p = w(t, 'offset', 12, void 0),
      x = w(t, 'isVisible', 12, void 0)
    const { domNode: C, viewport: $, nodeLookup: m, nodes: _ } = Ue(),
      { getNodesBounds: v } = Lt(),
      b = ur('svelteflow__node_id')
    let N = re(),
      E = re([]),
      T = p() !== void 0 ? p() : 10,
      D = d() !== void 0 ? d() : $e.Top,
      V = g() !== void 0 ? g() : 'center'
    ge(
      () => (o(), j(f()), i()),
      () => {
        o()
        const M = Array.isArray(f()) ? f() : [f() || b]
        U(
          E,
          M.reduce((k, P) => {
            const H = i().get(P)
            return H && k.push(H), k
          }, [])
        )
      }
    ),
      ge(
        () => (h(E), s()),
        () => {
          const M = v(h(E))
          M && U(N, v0(M, s(), D, T, V))
        }
      ),
      ge(
        () => h(E),
        () => {
          U(l, h(E).length === 0 ? 1 : Math.max(...h(E).map((M) => (M.internals.z || 5) + 1)))
        }
      ),
      ge(
        () => o(),
        () => {
          U(u, o().filter((M) => M.selected).length)
        }
      ),
      ge(
        () => (j(x()), h(E), h(u)),
        () => {
          U(c, typeof x() == 'boolean' ? x() : h(E).length === 1 && h(E)[0].selected && h(u) === 1)
        }
      ),
      vt(),
      He()
    var A = tt(),
      O = xe(A)
    {
      var R = (M) => {
        var k = j2(),
          P = X(k)
        wt(P, t, 'default', {}),
          Z(k),
          _t(
            k,
            (H, I) => (Rr == null ? void 0 : Rr(H, I)),
            () => ({ domNode: a() })
          ),
          Ee(
            (H) => {
              de(k, 'data-id', H),
                at(k, 'position', 'absolute'),
                at(k, 'transform', h(N)),
                at(k, 'z-index', h(l))
            },
            [
              () =>
                h(E)
                  .reduce((H, I) => `${H}${I.id} `, '')
                  .trim()
            ],
            ve
          ),
          L(M, k)
      }
      ke(O, (M) => {
        a() && h(c) && h(E) && M(R)
      })
    }
    L(e, A)
    var S = ce({
      get nodeId() {
        return f()
      },
      set nodeId(M) {
        f(M), y()
      },
      get position() {
        return d()
      },
      set position(M) {
        d(M), y()
      },
      get align() {
        return g()
      },
      set align(M) {
        g(M), y()
      },
      get offset() {
        return p()
      },
      set offset(M) {
        p(M), y()
      },
      get isVisible() {
        return x()
      },
      set isVisible(M) {
        x(M), y()
      }
    })
    return r(), S
  }
  ie(Zc, { nodeId: {}, position: {}, align: {}, offset: {}, isVisible: {} }, ['default'], [], !0)
  function pr(e) {
    const { nodes: t, nodeLookup: n } = Ue()
    let r = [],
      o = !0
    return Un([t, n], ([, i], s) => {
      var c
      const a = [],
        l = Array.isArray(e),
        u = l ? e : [e]
      for (const f of u) {
        const d = (c = i.get(f)) == null ? void 0 : c.internals.userNode
        d && a.push({ id: d.id, type: d.type, data: d.data })
      }
      ;(!C0(a, r) || o) && ((r = a), s(l ? a : (a[0] ?? null)), (o = !1))
    })
  }
  const Xc = 'tinyflow-component'
  class J2 {
    constructor(t) {
      Nt(this, 'options')
      Nt(this, 'rootEl')
      Nt(this, 'svelteFlowInstance')
      if (typeof t.element != 'string' && !(t.element instanceof Element))
        throw new Error('element must be a string or Element')
      this._setOptions(t), this._init()
    }
    _init() {
      if (typeof this.options.element == 'string') {
        if (((this.rootEl = document.querySelector(this.options.element)), !this.rootEl))
          throw new Error(`element not found by document.querySelector('${this.options.element}')`)
      } else if (this.options.element instanceof Element) this.rootEl = this.options.element
      else throw new Error('element must be a string or Element')
      const t = document.createElement(Xc)
      ;(t.style.display = 'block'),
        (t.style.width = '100%'),
        (t.style.height = '100%'),
        t.classList.add('tf-theme-light'),
        (t.options = this.options),
        (t.onInit = (n) => {
          this.svelteFlowInstance = n
        }),
        this.rootEl.appendChild(t)
    }
    _setOptions(t) {
      this.options = { ...t }
    }
    getOptions() {
      return this.options
    }
    getData() {
      return this.svelteFlowInstance.toObject()
    }
    setData(t) {
      this.options.data = t
      const n = document.createElement(Xc)
      ;(n.style.display = 'block'),
        (n.style.width = '100%'),
        (n.style.height = '100%'),
        n.classList.add('tf-theme-light'),
        (n.options = this.options),
        (n.onInit = (r) => {
          this.svelteFlowInstance = r
        }),
        this.destroy(),
        this.rootEl.appendChild(n)
    }
    destroy() {
      for (; this.rootEl.firstChild; ) this.rootEl.removeChild(this.rootEl.firstChild)
    }
  }
  const Bi = (() => {
    const e = we([]),
      t = we([]),
      n = we({ x: 250, y: 100, zoom: 1 })
    return {
      nodes: e,
      edges: t,
      viewport: n,
      init: (r, o) => {
        e.set(r), t.set(o)
      },
      addNode: (r) => {
        e.update((o) => [...o, r])
      },
      removeNode: (r) => {
        e.update((o) => o.filter((i) => i.id !== r))
      },
      updateNode: (r, o) => {
        e.update((i) => i.map((s) => (s.id === r ? o : s)))
      },
      updateNodeData: (r, o) => {
        e.update((i) => i.map((s) => (s.id === r ? { ...s, data: { ...s.data, ...o } } : s)))
      },
      selectNodeOnly: (r) => {
        e.update((o) =>
          o.map((i) => (i.id === r ? { ...i, selected: !0 } : { ...i, selected: !1 }))
        )
      },
      addEdge: (r) => {
        t.update((o) => [...o, r])
      },
      removeEdge: (r) => {
        t.update((o) => o.filter((i) => i.id !== r))
      },
      updateEdge: (r, o) => {
        t.update((i) => i.map((s) => (s.id === r ? o : s)))
      },
      updateEdgeData: (r, o) => {
        t.update((i) => i.map((s) => (s.id === r ? { ...s, data: o } : s)))
      }
    }
  })()
  var Q2 = ne('<button><!></button>')
  function Ge(e, t) {
    ue(t, !0)
    const n = w(t, 'children', 7),
      r = xt(t, ['$$slots', '$$events', '$$legacy', '$$host', 'children'])
    var o = Q2()
    let i
    var s = X(o)
    return (
      cr(s, () => n() ?? gt),
      Z(o),
      Ee(
        () =>
          (i = nn(o, i, { type: 'button', ...r, class: `tf-btn nopan nodrag ${t.class ?? ''}` }))
      ),
      L(e, o),
      ce({
        get children() {
          return n()
        },
        set children(a) {
          n(a), y()
        }
      })
    )
  }
  ie(Ge, { children: {} }, [], [], !0)
  var ep = ne('<input>')
  function Fc(e, t) {
    ue(t, !0)
    const n = xt(t, ['$$slots', '$$events', '$$legacy', '$$host'])
    var r = ep()
    ao(r)
    let o
    Ee(
      () =>
        (o = nn(r, o, {
          type: 'checkbox',
          ...n,
          class: `tf-checkbox nopan nodrag ${t.class ?? ''}`
        }))
    ),
      L(e, r),
      ce()
  }
  ie(Fc, {}, [], [], !0)
  var tp = ne('<input>')
  function St(e, t) {
    ue(t, !0)
    const n = xt(t, ['$$slots', '$$events', '$$legacy', '$$host'])
    var r = tp()
    ao(r)
    let o
    Ee(
      () => (o = nn(r, o, { type: 'text', ...n, class: `tf-input  nopan nodrag ${t.class ?? ''}` }))
    ),
      L(e, r),
      ce()
  }
  ie(St, {}, [], [], !0)
  var np = ne('<textarea></textarea>')
  function Pt(e, t) {
    ue(t, !0)
    const n = xt(t, ['$$slots', '$$events', '$$legacy', '$$host'])
    var r = np()
    Wf(r)
    let o
    Ee(() => (o = nn(r, o, { ...n, class: `tf-textarea nodrag ${t.class ?? ''}` }))), L(e, r), ce()
  }
  ie(Pt, {}, [], [], !0)
  var rp = ne('<div role="button"><!></div>'),
    op = ne('<div></div>')
  function Wc(e, t) {
    const n = it(t, ['children', '$$slots', '$$events', '$$legacy', '$$host']),
      r = it(n, ['items', 'onChange', 'activeIndex'])
    ue(t, !1)
    let o = w(t, 'items', 28, () => []),
      i = w(t, 'onChange', 12, () => {}),
      s = w(t, 'activeIndex', 12, 0)
    function a(c, f) {
      var d
      s(f), (d = i()) == null || d(c, f)
    }
    He()
    var l = op()
    let u
    return (
      Yt(l, 5, o, oi, (c, f, d) => {
        var g = rp()
        de(g, 'tabindex', d),
          (g.__click = () => a(h(f), d)),
          (g.__keydown = ($) => {
            ;($.key === 'Enter' || $.key === ' ') && ($.preventDefault(), a(h(f), d))
          })
        var p = X(g)
        {
          var x = ($) => {
              var m = Ae()
              Ee(() => Bt(m, h(f).label)), L($, m)
            },
            C = ($) => {
              var m = tt(),
                _ = xe(m)
              cr(_, () => h(f).label ?? gt), L($, m)
            }
          ke(p, ($) => {
            typeof h(f).label == 'string' ? $(x) : $(C, !1)
          })
        }
        Z(g), Ee(() => $t(g, 1, `tf-tabs-item ${(d === s() ? 'active' : '') ?? ''}`)), L(c, g)
      }),
      Z(l),
      Ee(() => (u = nn(l, u, { ...r, class: `tf-tabs ${r.class ?? ''}` }))),
      L(e, l),
      ce({
        get items() {
          return o()
        },
        set items(c) {
          o(c), y()
        },
        get onChange() {
          return i()
        },
        set onChange(c) {
          i(c), y()
        },
        get activeIndex() {
          return s()
        },
        set activeIndex(c) {
          s(c), y()
        }
      })
    )
  }
  ri(['click', 'keydown']), ie(Wc, { items: {}, onChange: {}, activeIndex: {} }, [], [], !0)
  var ip = (e, t, n) => t(h(n)),
    sp = (e, t, n) => {
      ;(e.key === 'Enter' || e.key === ' ') && (e.preventDefault(), t(h(n)))
    },
    ap = ne('<span class="tf-collapse-item-title-icon"><!></span>'),
    lp = ne('<div class="tf-collapse-item-description"><!></div>'),
    up = ne('<div class="tf-collapse-item-content"><!></div>'),
    cp = ne(
      '<div class="tf-collapse-item"><div class="tf-collapse-item-title" role="button"><!> <!> <span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M13.1717 12.0007L8.22192 7.05093L9.63614 5.63672L16.0001 12.0007L9.63614 18.3646L8.22192 16.9504L13.1717 12.0007Z"></path></svg></span></div> <!> <!></div>'
    ),
    dp = ne('<div></div>')
  const fp = {
    hash: 'svelte-1jfktzw',
    code: `\r
    /* 定义旋转的 CSS 类 */.rotate-90.svelte-1jfktzw {transform:rotate(90deg);transition:transform 0.3s ease;}`
  }
  function Kc(e, t) {
    ue(t, !0), et(e, fp)
    let n = w(t, 'items', 7),
      r = w(t, 'onChange', 7),
      o = w(t, 'activeKeys', 31, () => Ht([]))
    function i(a) {
      var l
      o().includes(a.key) ? o(o().filter((u) => u !== a.key)) : (o().push(a.key), o(o())),
        (l = r()) == null || l(a, o())
    }
    var s = dp()
    return (
      Yt(s, 21, n, oi, (a, l, u) => {
        var c = cp(),
          f = X(c)
        de(f, 'tabindex', u), (f.__click = [ip, i, l]), (f.__keydown = [sp, i, l])
        var d = X(f)
        {
          var g = (v) => {
            var b = ap(),
              N = X(b)
            nr(N, {
              get target() {
                return h(l).icon
              }
            }),
              Z(b),
              L(v, b)
          }
          ke(d, (v) => {
            h(l).icon && v(g)
          })
        }
        var p = z(d, 2)
        nr(p, {
          get target() {
            return h(l).title
          }
        })
        var x = z(p, 2)
        Z(f)
        var C = z(f, 2)
        {
          var $ = (v) => {
            var b = lp(),
              N = X(b)
            nr(N, {
              get target() {
                return h(l).description
              }
            }),
              Z(b),
              L(v, b)
          }
          ke(C, (v) => {
            h(l).description && v($)
          })
        }
        var m = z(C, 2)
        {
          var _ = (v) => {
            var b = up(),
              N = X(b)
            nr(N, {
              get target() {
                return h(l).content
              }
            }),
              Z(b),
              L(v, b)
          }
          ke(m, (v) => {
            o().includes(h(l).key) && v(_)
          })
        }
        Z(c),
          Ee(
            (v) => $t(x, 1, `tf-collapse-item-title-arrow ${v ?? ''}`, 'svelte-1jfktzw'),
            [() => (o().includes(h(l).key) ? 'rotate-90' : '')]
          ),
          L(a, c)
      }),
      Z(s),
      Ee(() => {
        de(s, 'style', t.style), $t(s, 1, `tf-collapse ${t.class ?? ''}`, 'svelte-1jfktzw')
      }),
      L(e, s),
      ce({
        get items() {
          return n()
        },
        set items(a) {
          n(a), y()
        },
        get onChange() {
          return r()
        },
        set onChange(a) {
          r(a), y()
        },
        get activeKeys() {
          return o()
        },
        set activeKeys(a = []) {
          o(a), y()
        }
      })
    )
  }
  ri(['click', 'keydown']), ie(Kc, { items: {}, onChange: {}, activeKeys: {} }, [], [], !0)
  function nr(e, t) {
    ue(t, !0)
    let n = w(t, 'target', 7)
    typeof n() > 'u' && n('undefined')
    var r = tt(),
      o = xe(r)
    {
      var i = (a) => {
          var l = tt(),
            u = xe(l)
          cr(u, () => n() ?? gt), L(a, l)
        },
        s = (a) => {
          var l = tt(),
            u = xe(l)
          dl(u, n), L(a, l)
        }
      ke(o, (a) => {
        typeof n() == 'function' ? a(i) : a(s, !1)
      })
    }
    return (
      L(e, r),
      ce({
        get target() {
          return n()
        },
        set target(a) {
          n(a), y()
        }
      })
    )
  }
  ie(nr, { target: {} }, [], [], !0)
  var gp = (e, t, n) => t(h(n)),
    hp = _e(
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 14L8 10H16L12 14Z"></path></svg>'
    ),
    vp = ne('<div class="tf-select-content-children"><!></div>'),
    pp = ne('<button class="tf-select-content-item"><span><!></span> <!></button> <!>', 1),
    mp = ne('<div class="tf-select-content nopan nodrag"><!></div>'),
    yp = ne('<!> <!>', 1),
    wp = ne('<div class="tf-select-input-placeholder"> </div>'),
    _p = ne(
      '<button><div class="tf-select-input-value"></div> <div class="tf-select-input-arrow"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11.9999 13.1714L16.9497 8.22168L18.3639 9.63589L11.9999 15.9999L5.63599 9.63589L7.0502 8.22168L11.9999 13.1714Z"></path></svg></div></button>'
    ),
    xp = ne('<div><!></div>')
  function ln(e, t) {
    ue(t, !0)
    const n = (_, v = gt) => {
      var b = tt(),
        N = xe(b)
      Yt(
        N,
        19,
        v,
        (E, T) => `${T}_${E.value}`,
        (E, T) => {
          var D = pp(),
            V = xe(D)
          V.__click = [gp, x, T]
          var A = X(V),
            O = X(A)
          {
            var R = (P) => {
              var H = hp()
              L(P, H)
            }
            ke(O, (P) => {
              h(T).children && h(T).children.length > 0 && P(R)
            })
          }
          Z(A)
          var S = z(A, 2)
          nr(S, {
            get target() {
              return h(T).label
            }
          }),
            Z(V)
          var M = z(V, 2)
          {
            var k = (P) => {
              var H = vp(),
                I = X(H)
              n(I, () => h(T).children), Z(H), L(P, H)
            }
            ke(M, (P) => {
              h(T).children && h(T).children.length > 0 && (l() || c().includes(h(T).value)) && P(k)
            })
          }
          L(E, D)
        }
      ),
        L(_, b)
    }
    let r = w(t, 'items', 7),
      o = w(t, 'onExpand', 7),
      i = w(t, 'onSelect', 7),
      s = w(t, 'value', 23, () => []),
      a = w(t, 'defaultValue', 23, () => []),
      l = w(t, 'expandAll', 7, !0),
      u = w(t, 'multiple', 7, !1),
      c = w(t, 'expandValue', 23, () => []),
      f = w(t, 'placeholder', 7),
      d = xt(t, [
        '$$slots',
        '$$events',
        '$$legacy',
        '$$host',
        'items',
        'onExpand',
        'onSelect',
        'value',
        'defaultValue',
        'expandAll',
        'multiple',
        'expandValue',
        'placeholder'
      ]),
      g = Ne(() => {
        const _ = [],
          v = (b) => {
            for (let N of b)
              s().length > 0
                ? s().includes(N.value) && _.push(N)
                : a().includes(N.value) && _.push(N),
                N.children && N.children.length > 0 && v(N.children)
          }
        return v(r()), _
      }),
      p
    function x(_) {
      var v, b
      if (_.children && _.children.length > 0) {
        ;(v = o()) == null || v(_)
        return
      } else p == null || p.hide(), (b = i()) == null || b(_)
    }
    var C = xp()
    let $
    var m = X(C)
    return (
      An(
        Do(m, {
          floating: (v) => {
            var b = mp(),
              N = X(b)
            n(N, r), Z(b), L(v, b)
          },
          children: (v, b) => {
            var N = _p()
            let E
            var T = X(N)
            Yt(
              T,
              23,
              () => h(g),
              (D, V) => `${V}_${D.value}`,
              (D, V, A) => {
                var O = tt(),
                  R = xe(O)
                {
                  var S = (k) => {
                      var P = tt(),
                        H = xe(P)
                      {
                        var I = (B) => {
                          nr(B, {
                            get target() {
                              return h(V).label
                            }
                          })
                        }
                        ke(H, (B) => {
                          h(A) === 0 && B(I)
                        })
                      }
                      L(k, P)
                    },
                    M = (k) => {
                      var P = yp(),
                        H = xe(P)
                      nr(H, {
                        get target() {
                          return h(V).label
                        }
                      })
                      var I = z(H, 2)
                      {
                        var B = (F) => {
                          var K = Ae(',')
                          L(F, K)
                        }
                        ke(I, (F) => {
                          h(A) < h(g).length - 1 && F(B)
                        })
                      }
                      L(k, P)
                    }
                  ke(R, (k) => {
                    u() ? k(M, !1) : k(S)
                  })
                }
                L(D, O)
              },
              (D) => {
                var V = wp(),
                  A = X(V, !0)
                Z(V), Ee(() => Bt(A, f())), L(D, V)
              }
            ),
              Z(T),
              Pe(2),
              Z(N),
              Ee(() => (E = nn(N, E, { class: 'tf-select-input nopan nodrag', ...d }))),
              L(v, N)
          },
          $$slots: { floating: !0, default: !0 }
        }),
        (v) => (p = v),
        () => p
      ),
      Z(C),
      Ee(() => ($ = nn(C, $, { ...d, class: `tf-select ${d.class ?? ''}` }))),
      L(e, C),
      ce({
        get items() {
          return r()
        },
        set items(_) {
          r(_), y()
        },
        get onExpand() {
          return o()
        },
        set onExpand(_) {
          o(_), y()
        },
        get onSelect() {
          return i()
        },
        set onSelect(_) {
          i(_), y()
        },
        get value() {
          return s()
        },
        set value(_ = []) {
          s(_), y()
        },
        get defaultValue() {
          return a()
        },
        set defaultValue(_ = []) {
          a(_), y()
        },
        get expandAll() {
          return l()
        },
        set expandAll(_ = !0) {
          l(_), y()
        },
        get multiple() {
          return u()
        },
        set multiple(_ = !1) {
          u(_), y()
        },
        get expandValue() {
          return c()
        },
        set expandValue(_ = []) {
          c(_), y()
        },
        get placeholder() {
          return f()
        },
        set placeholder(_) {
          f(_), y()
        }
      })
    )
  }
  ri(['click']),
    ie(
      ln,
      {
        items: {},
        onExpand: {},
        onSelect: {},
        value: {},
        defaultValue: {},
        expandAll: {},
        multiple: {},
        expandValue: {},
        placeholder: {}
      },
      [],
      [],
      !0
    )
  const No = Math.min,
    Yr = Math.max,
    Yi = Math.round,
    bn = (e) => ({ x: e, y: e }),
    bp = { left: 'right', right: 'left', bottom: 'top', top: 'bottom' },
    Cp = { start: 'end', end: 'start' }
  function fa(e, t, n) {
    return Yr(e, No(t, n))
  }
  function To(e, t) {
    return typeof e == 'function' ? e(t) : e
  }
  function mr(e) {
    return e.split('-')[0]
  }
  function Mo(e) {
    return e.split('-')[1]
  }
  function qc(e) {
    return e === 'x' ? 'y' : 'x'
  }
  function ga(e) {
    return e === 'y' ? 'height' : 'width'
  }
  function Zr(e) {
    return ['top', 'bottom'].includes(mr(e)) ? 'y' : 'x'
  }
  function ha(e) {
    return qc(Zr(e))
  }
  function kp(e, t, n) {
    n === void 0 && (n = !1)
    const r = Mo(e),
      o = ha(e),
      i = ga(o)
    let s =
      o === 'x'
        ? r === (n ? 'end' : 'start')
          ? 'right'
          : 'left'
        : r === 'start'
          ? 'bottom'
          : 'top'
    return t.reference[i] > t.floating[i] && (s = Zi(s)), [s, Zi(s)]
  }
  function $p(e) {
    const t = Zi(e)
    return [va(e), t, va(t)]
  }
  function va(e) {
    return e.replace(/start|end/g, (t) => Cp[t])
  }
  function Ep(e, t, n) {
    const r = ['left', 'right'],
      o = ['right', 'left'],
      i = ['top', 'bottom'],
      s = ['bottom', 'top']
    switch (e) {
      case 'top':
      case 'bottom':
        return n ? (t ? o : r) : t ? r : o
      case 'left':
      case 'right':
        return t ? i : s
      default:
        return []
    }
  }
  function Sp(e, t, n, r) {
    const o = Mo(e)
    let i = Ep(mr(e), n === 'start', r)
    return o && ((i = i.map((s) => s + '-' + o)), t && (i = i.concat(i.map(va)))), i
  }
  function Zi(e) {
    return e.replace(/left|right|bottom|top/g, (t) => bp[t])
  }
  function Pp(e) {
    return { top: 0, right: 0, bottom: 0, left: 0, ...e }
  }
  function Gc(e) {
    return typeof e != 'number' ? Pp(e) : { top: e, right: e, bottom: e, left: e }
  }
  function Xi(e) {
    const { x: t, y: n, width: r, height: o } = e
    return { width: r, height: o, top: n, left: t, right: t + r, bottom: n + o, x: t, y: n }
  }
  function Uc(e, t, n) {
    let { reference: r, floating: o } = e
    const i = Zr(t),
      s = ha(t),
      a = ga(s),
      l = mr(t),
      u = i === 'y',
      c = r.x + r.width / 2 - o.width / 2,
      f = r.y + r.height / 2 - o.height / 2,
      d = r[a] / 2 - o[a] / 2
    let g
    switch (l) {
      case 'top':
        g = { x: c, y: r.y - o.height }
        break
      case 'bottom':
        g = { x: c, y: r.y + r.height }
        break
      case 'right':
        g = { x: r.x + r.width, y: f }
        break
      case 'left':
        g = { x: r.x - o.width, y: f }
        break
      default:
        g = { x: r.x, y: r.y }
    }
    switch (Mo(t)) {
      case 'start':
        g[s] -= d * (n && u ? -1 : 1)
        break
      case 'end':
        g[s] += d * (n && u ? -1 : 1)
        break
    }
    return g
  }
  const Np = async (e, t, n) => {
    const {
        placement: r = 'bottom',
        strategy: o = 'absolute',
        middleware: i = [],
        platform: s
      } = n,
      a = i.filter(Boolean),
      l = await (s.isRTL == null ? void 0 : s.isRTL(t))
    let u = await s.getElementRects({ reference: e, floating: t, strategy: o }),
      { x: c, y: f } = Uc(u, r, l),
      d = r,
      g = {},
      p = 0
    for (let x = 0; x < a.length; x++) {
      const { name: C, fn: $ } = a[x],
        {
          x: m,
          y: _,
          data: v,
          reset: b
        } = await $({
          x: c,
          y: f,
          initialPlacement: r,
          placement: d,
          strategy: o,
          middlewareData: g,
          rects: u,
          platform: s,
          elements: { reference: e, floating: t }
        })
      ;(c = m ?? c),
        (f = _ ?? f),
        (g = { ...g, [C]: { ...g[C], ...v } }),
        b &&
          p <= 50 &&
          (p++,
          typeof b == 'object' &&
            (b.placement && (d = b.placement),
            b.rects &&
              (u =
                b.rects === !0
                  ? await s.getElementRects({ reference: e, floating: t, strategy: o })
                  : b.rects),
            ({ x: c, y: f } = Uc(u, d, l))),
          (x = -1))
    }
    return { x: c, y: f, placement: d, strategy: o, middlewareData: g }
  }
  async function jc(e, t) {
    var n
    t === void 0 && (t = {})
    const { x: r, y: o, platform: i, rects: s, elements: a, strategy: l } = e,
      {
        boundary: u = 'clippingAncestors',
        rootBoundary: c = 'viewport',
        elementContext: f = 'floating',
        altBoundary: d = !1,
        padding: g = 0
      } = To(t, e),
      p = Gc(g),
      C = a[d ? (f === 'floating' ? 'reference' : 'floating') : f],
      $ = Xi(
        await i.getClippingRect({
          element:
            (n = await (i.isElement == null ? void 0 : i.isElement(C))) == null || n
              ? C
              : C.contextElement ||
                (await (i.getDocumentElement == null ? void 0 : i.getDocumentElement(a.floating))),
          boundary: u,
          rootBoundary: c,
          strategy: l
        })
      ),
      m =
        f === 'floating'
          ? { x: r, y: o, width: s.floating.width, height: s.floating.height }
          : s.reference,
      _ = await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(a.floating)),
      v = (await (i.isElement == null ? void 0 : i.isElement(_)))
        ? (await (i.getScale == null ? void 0 : i.getScale(_))) || { x: 1, y: 1 }
        : { x: 1, y: 1 },
      b = Xi(
        i.convertOffsetParentRelativeRectToViewportRelativeRect
          ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
              elements: a,
              rect: m,
              offsetParent: _,
              strategy: l
            })
          : m
      )
    return {
      top: ($.top - b.top + p.top) / v.y,
      bottom: (b.bottom - $.bottom + p.bottom) / v.y,
      left: ($.left - b.left + p.left) / v.x,
      right: (b.right - $.right + p.right) / v.x
    }
  }
  const Tp = (e) => ({
      name: 'arrow',
      options: e,
      async fn(t) {
        const {
            x: n,
            y: r,
            placement: o,
            rects: i,
            platform: s,
            elements: a,
            middlewareData: l
          } = t,
          { element: u, padding: c = 0 } = To(e, t) || {}
        if (u == null) return {}
        const f = Gc(c),
          d = { x: n, y: r },
          g = ha(o),
          p = ga(g),
          x = await s.getDimensions(u),
          C = g === 'y',
          $ = C ? 'top' : 'left',
          m = C ? 'bottom' : 'right',
          _ = C ? 'clientHeight' : 'clientWidth',
          v = i.reference[p] + i.reference[g] - d[g] - i.floating[p],
          b = d[g] - i.reference[g],
          N = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(u))
        let E = N ? N[_] : 0
        ;(!E || !(await (s.isElement == null ? void 0 : s.isElement(N)))) &&
          (E = a.floating[_] || i.floating[p])
        const T = v / 2 - b / 2,
          D = E / 2 - x[p] / 2 - 1,
          V = No(f[$], D),
          A = No(f[m], D),
          O = V,
          R = E - x[p] - A,
          S = E / 2 - x[p] / 2 + T,
          M = fa(O, S, R),
          k =
            !l.arrow &&
            Mo(o) != null &&
            S !== M &&
            i.reference[p] / 2 - (S < O ? V : A) - x[p] / 2 < 0,
          P = k ? (S < O ? S - O : S - R) : 0
        return {
          [g]: d[g] + P,
          data: { [g]: M, centerOffset: S - M - P, ...(k && { alignmentOffset: P }) },
          reset: k
        }
      }
    }),
    Mp = function (e) {
      return (
        e === void 0 && (e = {}),
        {
          name: 'flip',
          options: e,
          async fn(t) {
            var n, r
            const {
                placement: o,
                middlewareData: i,
                rects: s,
                initialPlacement: a,
                platform: l,
                elements: u
              } = t,
              {
                mainAxis: c = !0,
                crossAxis: f = !0,
                fallbackPlacements: d,
                fallbackStrategy: g = 'bestFit',
                fallbackAxisSideDirection: p = 'none',
                flipAlignment: x = !0,
                ...C
              } = To(e, t)
            if ((n = i.arrow) != null && n.alignmentOffset) return {}
            const $ = mr(o),
              m = Zr(a),
              _ = mr(a) === a,
              v = await (l.isRTL == null ? void 0 : l.isRTL(u.floating)),
              b = d || (_ || !x ? [Zi(a)] : $p(a)),
              N = p !== 'none'
            !d && N && b.push(...Sp(a, x, p, v))
            const E = [a, ...b],
              T = await jc(t, C),
              D = []
            let V = ((r = i.flip) == null ? void 0 : r.overflows) || []
            if ((c && D.push(T[$]), f)) {
              const S = kp(o, s, v)
              D.push(T[S[0]], T[S[1]])
            }
            if (((V = [...V, { placement: o, overflows: D }]), !D.every((S) => S <= 0))) {
              var A, O
              const S = (((A = i.flip) == null ? void 0 : A.index) || 0) + 1,
                M = E[S]
              if (M) return { data: { index: S, overflows: V }, reset: { placement: M } }
              let k =
                (O = V.filter((P) => P.overflows[0] <= 0).sort(
                  (P, H) => P.overflows[1] - H.overflows[1]
                )[0]) == null
                  ? void 0
                  : O.placement
              if (!k)
                switch (g) {
                  case 'bestFit': {
                    var R
                    const P =
                      (R = V.filter((H) => {
                        if (N) {
                          const I = Zr(H.placement)
                          return I === m || I === 'y'
                        }
                        return !0
                      })
                        .map((H) => [
                          H.placement,
                          H.overflows.filter((I) => I > 0).reduce((I, B) => I + B, 0)
                        ])
                        .sort((H, I) => H[1] - I[1])[0]) == null
                        ? void 0
                        : R[0]
                    P && (k = P)
                    break
                  }
                  case 'initialPlacement':
                    k = a
                    break
                }
              if (o !== k) return { reset: { placement: k } }
            }
            return {}
          }
        }
      )
    }
  async function Hp(e, t) {
    const { placement: n, platform: r, elements: o } = e,
      i = await (r.isRTL == null ? void 0 : r.isRTL(o.floating)),
      s = mr(n),
      a = Mo(n),
      l = Zr(n) === 'y',
      u = ['left', 'top'].includes(s) ? -1 : 1,
      c = i && l ? -1 : 1,
      f = To(t, e)
    let {
      mainAxis: d,
      crossAxis: g,
      alignmentAxis: p
    } = typeof f == 'number'
      ? { mainAxis: f, crossAxis: 0, alignmentAxis: null }
      : { mainAxis: f.mainAxis || 0, crossAxis: f.crossAxis || 0, alignmentAxis: f.alignmentAxis }
    return (
      a && typeof p == 'number' && (g = a === 'end' ? p * -1 : p),
      l ? { x: g * c, y: d * u } : { x: d * u, y: g * c }
    )
  }
  const Vp = function (e) {
      return (
        e === void 0 && (e = 0),
        {
          name: 'offset',
          options: e,
          async fn(t) {
            var n, r
            const { x: o, y: i, placement: s, middlewareData: a } = t,
              l = await Hp(t, e)
            return s === ((n = a.offset) == null ? void 0 : n.placement) &&
              (r = a.arrow) != null &&
              r.alignmentOffset
              ? {}
              : { x: o + l.x, y: i + l.y, data: { ...l, placement: s } }
          }
        }
      )
    },
    Dp = function (e) {
      return (
        e === void 0 && (e = {}),
        {
          name: 'shift',
          options: e,
          async fn(t) {
            const { x: n, y: r, placement: o } = t,
              {
                mainAxis: i = !0,
                crossAxis: s = !1,
                limiter: a = {
                  fn: (C) => {
                    let { x: $, y: m } = C
                    return { x: $, y: m }
                  }
                },
                ...l
              } = To(e, t),
              u = { x: n, y: r },
              c = await jc(t, l),
              f = Zr(mr(o)),
              d = qc(f)
            let g = u[d],
              p = u[f]
            if (i) {
              const C = d === 'y' ? 'top' : 'left',
                $ = d === 'y' ? 'bottom' : 'right',
                m = g + c[C],
                _ = g - c[$]
              g = fa(m, g, _)
            }
            if (s) {
              const C = f === 'y' ? 'top' : 'left',
                $ = f === 'y' ? 'bottom' : 'right',
                m = p + c[C],
                _ = p - c[$]
              p = fa(m, p, _)
            }
            const x = a.fn({ ...t, [d]: g, [f]: p })
            return { ...x, data: { x: x.x - n, y: x.y - r, enabled: { [d]: i, [f]: s } } }
          }
        }
      )
    }
  function Fi() {
    return typeof window < 'u'
  }
  function Xr(e) {
    return Jc(e) ? (e.nodeName || '').toLowerCase() : '#document'
  }
  function Xt(e) {
    var t
    return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window
  }
  function Bn(e) {
    var t
    return (t = (Jc(e) ? e.ownerDocument : e.document) || window.document) == null
      ? void 0
      : t.documentElement
  }
  function Jc(e) {
    return Fi() ? e instanceof Node || e instanceof Xt(e).Node : !1
  }
  function un(e) {
    return Fi() ? e instanceof Element || e instanceof Xt(e).Element : !1
  }
  function Cn(e) {
    return Fi() ? e instanceof HTMLElement || e instanceof Xt(e).HTMLElement : !1
  }
  function Qc(e) {
    return !Fi() || typeof ShadowRoot > 'u'
      ? !1
      : e instanceof ShadowRoot || e instanceof Xt(e).ShadowRoot
  }
  function Ho(e) {
    const { overflow: t, overflowX: n, overflowY: r, display: o } = cn(e)
    return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !['inline', 'contents'].includes(o)
  }
  function Ap(e) {
    return ['table', 'td', 'th'].includes(Xr(e))
  }
  function Wi(e) {
    return [':popover-open', ':modal'].some((t) => {
      try {
        return e.matches(t)
      } catch {
        return !1
      }
    })
  }
  function pa(e) {
    const t = ma(),
      n = un(e) ? cn(e) : e
    return (
      ['transform', 'translate', 'scale', 'rotate', 'perspective'].some((r) =>
        n[r] ? n[r] !== 'none' : !1
      ) ||
      (n.containerType ? n.containerType !== 'normal' : !1) ||
      (!t && (n.backdropFilter ? n.backdropFilter !== 'none' : !1)) ||
      (!t && (n.filter ? n.filter !== 'none' : !1)) ||
      ['transform', 'translate', 'scale', 'rotate', 'perspective', 'filter'].some((r) =>
        (n.willChange || '').includes(r)
      ) ||
      ['paint', 'layout', 'strict', 'content'].some((r) => (n.contain || '').includes(r))
    )
  }
  function Lp(e) {
    let t = rr(e)
    for (; Cn(t) && !Fr(t); ) {
      if (pa(t)) return t
      if (Wi(t)) return null
      t = rr(t)
    }
    return null
  }
  function ma() {
    return typeof CSS > 'u' || !CSS.supports ? !1 : CSS.supports('-webkit-backdrop-filter', 'none')
  }
  function Fr(e) {
    return ['html', 'body', '#document'].includes(Xr(e))
  }
  function cn(e) {
    return Xt(e).getComputedStyle(e)
  }
  function Ki(e) {
    return un(e)
      ? { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop }
      : { scrollLeft: e.scrollX, scrollTop: e.scrollY }
  }
  function rr(e) {
    if (Xr(e) === 'html') return e
    const t = e.assignedSlot || e.parentNode || (Qc(e) && e.host) || Bn(e)
    return Qc(t) ? t.host : t
  }
  function ed(e) {
    const t = rr(e)
    return Fr(t) ? (e.ownerDocument ? e.ownerDocument.body : e.body) : Cn(t) && Ho(t) ? t : ed(t)
  }
  function td(e, t, n) {
    var r
    t === void 0 && (t = [])
    const o = ed(e),
      i = o === ((r = e.ownerDocument) == null ? void 0 : r.body),
      s = Xt(o)
    return i
      ? (ya(s), t.concat(s, s.visualViewport || [], Ho(o) ? o : [], []))
      : t.concat(o, td(o, []))
  }
  function ya(e) {
    return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null
  }
  function nd(e) {
    const t = cn(e)
    let n = parseFloat(t.width) || 0,
      r = parseFloat(t.height) || 0
    const o = Cn(e),
      i = o ? e.offsetWidth : n,
      s = o ? e.offsetHeight : r,
      a = Yi(n) !== i || Yi(r) !== s
    return a && ((n = i), (r = s)), { width: n, height: r, $: a }
  }
  function rd(e) {
    return un(e) ? e : e.contextElement
  }
  function Wr(e) {
    const t = rd(e)
    if (!Cn(t)) return bn(1)
    const n = t.getBoundingClientRect(),
      { width: r, height: o, $: i } = nd(t)
    let s = (i ? Yi(n.width) : n.width) / r,
      a = (i ? Yi(n.height) : n.height) / o
    return (
      (!s || !Number.isFinite(s)) && (s = 1), (!a || !Number.isFinite(a)) && (a = 1), { x: s, y: a }
    )
  }
  const Op = bn(0)
  function od(e) {
    const t = Xt(e)
    return !ma() || !t.visualViewport
      ? Op
      : { x: t.visualViewport.offsetLeft, y: t.visualViewport.offsetTop }
  }
  function Ip(e, t, n) {
    return t === void 0 && (t = !1), !n || (t && n !== Xt(e)) ? !1 : t
  }
  function Vo(e, t, n, r) {
    t === void 0 && (t = !1), n === void 0 && (n = !1)
    const o = e.getBoundingClientRect(),
      i = rd(e)
    let s = bn(1)
    t && (r ? un(r) && (s = Wr(r)) : (s = Wr(e)))
    const a = Ip(i, n, r) ? od(i) : bn(0)
    let l = (o.left + a.x) / s.x,
      u = (o.top + a.y) / s.y,
      c = o.width / s.x,
      f = o.height / s.y
    if (i) {
      const d = Xt(i),
        g = r && un(r) ? Xt(r) : r
      let p = d,
        x = ya(p)
      for (; x && r && g !== p; ) {
        const C = Wr(x),
          $ = x.getBoundingClientRect(),
          m = cn(x),
          _ = $.left + (x.clientLeft + parseFloat(m.paddingLeft)) * C.x,
          v = $.top + (x.clientTop + parseFloat(m.paddingTop)) * C.y
        ;(l *= C.x),
          (u *= C.y),
          (c *= C.x),
          (f *= C.y),
          (l += _),
          (u += v),
          (p = Xt(x)),
          (x = ya(p))
      }
    }
    return Xi({ width: c, height: f, x: l, y: u })
  }
  function wa(e, t) {
    const n = Ki(e).scrollLeft
    return t ? t.left + n : Vo(Bn(e)).left + n
  }
  function id(e, t, n) {
    n === void 0 && (n = !1)
    const r = e.getBoundingClientRect(),
      o = r.left + t.scrollLeft - (n ? 0 : wa(e, r)),
      i = r.top + t.scrollTop
    return { x: o, y: i }
  }
  function zp(e) {
    let { elements: t, rect: n, offsetParent: r, strategy: o } = e
    const i = o === 'fixed',
      s = Bn(r),
      a = t ? Wi(t.floating) : !1
    if (r === s || (a && i)) return n
    let l = { scrollLeft: 0, scrollTop: 0 },
      u = bn(1)
    const c = bn(0),
      f = Cn(r)
    if ((f || (!f && !i)) && ((Xr(r) !== 'body' || Ho(s)) && (l = Ki(r)), Cn(r))) {
      const g = Vo(r)
      ;(u = Wr(r)), (c.x = g.x + r.clientLeft), (c.y = g.y + r.clientTop)
    }
    const d = s && !f && !i ? id(s, l, !0) : bn(0)
    return {
      width: n.width * u.x,
      height: n.height * u.y,
      x: n.x * u.x - l.scrollLeft * u.x + c.x + d.x,
      y: n.y * u.y - l.scrollTop * u.y + c.y + d.y
    }
  }
  function Rp(e) {
    return Array.from(e.getClientRects())
  }
  function Bp(e) {
    const t = Bn(e),
      n = Ki(e),
      r = e.ownerDocument.body,
      o = Yr(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth),
      i = Yr(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight)
    let s = -n.scrollLeft + wa(e)
    const a = -n.scrollTop
    return (
      cn(r).direction === 'rtl' && (s += Yr(t.clientWidth, r.clientWidth) - o),
      { width: o, height: i, x: s, y: a }
    )
  }
  function Yp(e, t) {
    const n = Xt(e),
      r = Bn(e),
      o = n.visualViewport
    let i = r.clientWidth,
      s = r.clientHeight,
      a = 0,
      l = 0
    if (o) {
      ;(i = o.width), (s = o.height)
      const u = ma()
      ;(!u || (u && t === 'fixed')) && ((a = o.offsetLeft), (l = o.offsetTop))
    }
    return { width: i, height: s, x: a, y: l }
  }
  function Zp(e, t) {
    const n = Vo(e, !0, t === 'fixed'),
      r = n.top + e.clientTop,
      o = n.left + e.clientLeft,
      i = Cn(e) ? Wr(e) : bn(1),
      s = e.clientWidth * i.x,
      a = e.clientHeight * i.y,
      l = o * i.x,
      u = r * i.y
    return { width: s, height: a, x: l, y: u }
  }
  function sd(e, t, n) {
    let r
    if (t === 'viewport') r = Yp(e, n)
    else if (t === 'document') r = Bp(Bn(e))
    else if (un(t)) r = Zp(t, n)
    else {
      const o = od(e)
      r = { x: t.x - o.x, y: t.y - o.y, width: t.width, height: t.height }
    }
    return Xi(r)
  }
  function ad(e, t) {
    const n = rr(e)
    return n === t || !un(n) || Fr(n) ? !1 : cn(n).position === 'fixed' || ad(n, t)
  }
  function Xp(e, t) {
    const n = t.get(e)
    if (n) return n
    let r = td(e, []).filter((a) => un(a) && Xr(a) !== 'body'),
      o = null
    const i = cn(e).position === 'fixed'
    let s = i ? rr(e) : e
    for (; un(s) && !Fr(s); ) {
      const a = cn(s),
        l = pa(s)
      !l && a.position === 'fixed' && (o = null),
        (
          i
            ? !l && !o
            : (!l &&
                a.position === 'static' &&
                !!o &&
                ['absolute', 'fixed'].includes(o.position)) ||
              (Ho(s) && !l && ad(e, s))
        )
          ? (r = r.filter((c) => c !== s))
          : (o = a),
        (s = rr(s))
    }
    return t.set(e, r), r
  }
  function Fp(e) {
    let { element: t, boundary: n, rootBoundary: r, strategy: o } = e
    const s = [...(n === 'clippingAncestors' ? (Wi(t) ? [] : Xp(t, this._c)) : [].concat(n)), r],
      a = s[0],
      l = s.reduce(
        (u, c) => {
          const f = sd(t, c, o)
          return (
            (u.top = Yr(f.top, u.top)),
            (u.right = No(f.right, u.right)),
            (u.bottom = No(f.bottom, u.bottom)),
            (u.left = Yr(f.left, u.left)),
            u
          )
        },
        sd(t, a, o)
      )
    return { width: l.right - l.left, height: l.bottom - l.top, x: l.left, y: l.top }
  }
  function Wp(e) {
    const { width: t, height: n } = nd(e)
    return { width: t, height: n }
  }
  function Kp(e, t, n) {
    const r = Cn(t),
      o = Bn(t),
      i = n === 'fixed',
      s = Vo(e, !0, i, t)
    let a = { scrollLeft: 0, scrollTop: 0 }
    const l = bn(0)
    if (r || (!r && !i))
      if (((Xr(t) !== 'body' || Ho(o)) && (a = Ki(t)), r)) {
        const d = Vo(t, !0, i, t)
        ;(l.x = d.x + t.clientLeft), (l.y = d.y + t.clientTop)
      } else o && (l.x = wa(o))
    const u = o && !r && !i ? id(o, a) : bn(0),
      c = s.left + a.scrollLeft - l.x - u.x,
      f = s.top + a.scrollTop - l.y - u.y
    return { x: c, y: f, width: s.width, height: s.height }
  }
  function _a(e) {
    return cn(e).position === 'static'
  }
  function ld(e, t) {
    if (!Cn(e) || cn(e).position === 'fixed') return null
    if (t) return t(e)
    let n = e.offsetParent
    return Bn(e) === n && (n = n.ownerDocument.body), n
  }
  function ud(e, t) {
    const n = Xt(e)
    if (Wi(e)) return n
    if (!Cn(e)) {
      let o = rr(e)
      for (; o && !Fr(o); ) {
        if (un(o) && !_a(o)) return o
        o = rr(o)
      }
      return n
    }
    let r = ld(e, t)
    for (; r && Ap(r) && _a(r); ) r = ld(r, t)
    return r && Fr(r) && _a(r) && !pa(r) ? n : r || Lp(e) || n
  }
  const qp = async function (e) {
    const t = this.getOffsetParent || ud,
      n = this.getDimensions,
      r = await n(e.floating)
    return {
      reference: Kp(e.reference, await t(e.floating), e.strategy),
      floating: { x: 0, y: 0, width: r.width, height: r.height }
    }
  }
  function Gp(e) {
    return cn(e).direction === 'rtl'
  }
  const Up = {
      convertOffsetParentRelativeRectToViewportRelativeRect: zp,
      getDocumentElement: Bn,
      getClippingRect: Fp,
      getOffsetParent: ud,
      getElementRects: qp,
      getClientRects: Rp,
      getDimensions: Wp,
      getScale: Wr,
      isElement: un,
      isRTL: Gp
    },
    jp = Vp,
    Jp = Dp,
    Qp = Mp,
    em = Tp,
    tm = (e, t, n) => {
      const r = new Map(),
        o = { platform: Up, ...n },
        i = { ...o.platform, _c: r }
      return Np(e, t, { ...o, platform: i })
    },
    nm = ({
      trigger: e,
      triggerEvent: t,
      floatContent: n,
      placement: r = 'bottom',
      offsetOptions: o,
      flipOptions: i,
      shiftOptions: s,
      interactive: a,
      showArrow: l
    }) => {
      if (typeof e == 'string') {
        const $ = document.querySelector(e)
        if ($) e = $
        else throw new Error("element not found by document.querySelector('" + e + "')")
      }
      let u
      if (typeof n == 'string') {
        const $ = document.querySelector(n)
        if ($) u = $
        else throw new Error("element not found by document.querySelector('" + n + "')")
      } else u = n
      let c
      l &&
        ((c = document.createElement('div')),
        (c.style.position = 'absolute'),
        (c.style.backgroundColor = '#222'),
        (c.style.width = '8px'),
        (c.style.height = '8px'),
        (c.style.transform = 'rotate(45deg)'),
        (c.style.display = 'none'),
        u.firstElementChild.before(c))
      function f() {
        tm(e, u, {
          placement: r,
          middleware: [jp(o), Qp(i), Jp(s), ...(l ? [em({ element: c })] : [])]
        }).then(({ x: $, y: m, placement: _, middlewareData: v }) => {
          if ((Object.assign(u.style, { left: `${$}px`, top: `${m}px` }), l)) {
            const { x: b, y: N } = v.arrow,
              E = { top: 'bottom', right: 'left', bottom: 'top', left: 'right' }[_.split('-')[0]]
            Object.assign(c.style, {
              zIndex: -1,
              left: b != null ? `${b}px` : '',
              top: N != null ? `${N}px` : '',
              right: '',
              bottom: '',
              [E]: '2px'
            })
          }
        })
      }
      let d = !1
      function g() {
        ;(u.style.display = 'block'),
          (u.style.visibility = 'block'),
          (u.style.position = 'absolute'),
          l && (c.style.display = 'block'),
          (d = !0),
          f()
      }
      function p() {
        ;(u.style.display = 'none'), l && (c.style.display = 'none'), (d = !1)
      }
      function x($) {
        $.stopPropagation(), d ? p() : g()
      }
      function C($) {
        u.contains($.target) || p()
      }
      return (
        (!t || t.length == 0) && (t = ['click']),
        t.forEach(($) => {
          e.addEventListener($, x)
        }),
        document.addEventListener('click', C),
        {
          destroy() {
            t.forEach(($) => {
              e.removeEventListener($, x)
            }),
              document.removeEventListener('click', C)
          },
          hide() {
            p()
          },
          isVisible() {
            return d
          }
        }
      )
    }
  var rm = ne(
    '<div style="position: relative"><div><!></div> <div style="display: none; width: 100%;z-index: 9999"><!></div></div>'
  )
  function Do(e, t) {
    ue(t, !0)
    const n = w(t, 'children', 7),
      r = w(t, 'floating', 7),
      o = w(t, 'placement', 7, 'bottom')
    let i, s, a
    rn(
      () => (
        (a = nm({ trigger: i, floatContent: s, interactive: !0, placement: o() })),
        () => {
          a.destroy()
        }
      )
    )
    function l() {
      a.hide()
    }
    var u = rm(),
      c = X(u),
      f = X(c)
    cr(f, n),
      Z(c),
      An(
        c,
        (p) => (i = p),
        () => i
      )
    var d = z(c, 2),
      g = X(d)
    return (
      cr(g, r),
      Z(d),
      An(
        d,
        (p) => (s = p),
        () => s
      ),
      Z(u),
      L(e, u),
      ce({
        hide: l,
        get children() {
          return n()
        },
        set children(p) {
          n(p), y()
        },
        get floating() {
          return r()
        },
        set floating(p) {
          r(p), y()
        },
        get placement() {
          return o()
        },
        set placement(p = 'bottom') {
          o(p), y()
        }
      })
    )
  }
  ie(Do, { children: {}, floating: {}, placement: {} }, [], ['hide'], !0)
  function je(e, t) {
    ue(t, !0)
    const n = w(t, 'children', 7),
      r = w(t, 'level', 7, 1),
      o = w(t, 'mt', 7),
      i = w(t, 'mb', 7)
    var s = tt(),
      a = xe(s)
    return (
      t1(
        a,
        () => `h${r()}`,
        !1,
        (l, u) => {
          let c
          Ee(
            () =>
              (c = nn(
                l,
                c,
                {
                  class: 'tf-heading',
                  style: `margin-top:${o() || '0'};margin-bottom:${i() || '0'}`
                },
                void 0,
                l.namespaceURI === Ea,
                l.nodeName.includes('-')
              ))
          )
          var f = tt(),
            d = xe(f)
          cr(d, () => n() ?? gt), L(u, f)
        }
      ),
      L(e, s),
      ce({
        get children() {
          return n()
        },
        set children(l) {
          n(l), y()
        },
        get level() {
          return r()
        },
        set level(l = 1) {
          r(l), y()
        },
        get mt() {
          return o()
        },
        set mt(l) {
          o(l), y()
        },
        get mb() {
          return i()
        },
        set mb(l) {
          i(l), y()
        }
      })
    )
  }
  ie(je, { children: {}, level: {}, mt: {}, mb: {} }, [], [], !0)
  var om = _e(
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="svelte-1rvn4a8"><path d="M4.5 10.5C3.675 10.5 3 11.175 3 12C3 12.825 3.675 13.5 4.5 13.5C5.325 13.5 6 12.825 6 12C6 11.175 5.325 10.5 4.5 10.5ZM19.5 10.5C18.675 10.5 18 11.175 18 12C18 12.825 18.675 13.5 19.5 13.5C20.325 13.5 21 12.825 21 12C21 11.175 20.325 10.5 19.5 10.5ZM12 10.5C11.175 10.5 10.5 11.175 10.5 12C10.5 12.825 11.175 13.5 12 13.5C12.825 13.5 13.5 12.825 13.5 12C13.5 11.175 12.825 10.5 12 10.5Z" class="svelte-1rvn4a8"></path></svg>'
  )
  const im = {
    hash: 'svelte-1rvn4a8',
    code: '.input-btn-more {border:1px solid transparent;padding:3px;&:hover {background:#eee;border:1px solid transparent;}}'
  }
  function qi(e, t) {
    ue(t, !0), et(e, im)
    const n = xt(t, ['$$slots', '$$events', '$$legacy', '$$host'])
    Ge(
      e,
      ft(() => n, {
        get class() {
          return `input-btn-more ${t.class ?? ''}`
        },
        children: (r, o) => {
          var i = om()
          L(r, i)
        },
        $$slots: { default: !0 }
      })
    ),
      ce()
  }
  ie(qi, {}, [], [], !0)
  const sm = () => {
      const e = Ue()
      return {
        deleteNode: (n) => {
          e.nodes.update((r) => r.filter((o) => o.id !== n)),
            e.edges.update((r) => r.filter((o) => o.source !== n && o.target !== n))
        }
      }
    },
    Kr = (e = 16) => {
      const t = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789',
        n = new Uint8Array(e)
      return crypto.getRandomValues(n), Array.from(n, (r) => t[r % t.length]).join('')
    },
    am = () => {
      const { nodes: e, nodeLookup: t } = Ue()
      return {
        copyNode: (r) => {
          var s
          const i = (s = q(t).get(r)) == null ? void 0 : s.internals.userNode
          if (i) {
            const a = Kr(),
              l = { ...i, id: a, position: { x: i.position.x + 50, y: i.position.y + 50 } }
            e.update((u) => [...u, l]),
              e.update((u) =>
                u.map((c) => (c.id === a ? { ...c, selected: !0 } : { ...c, selected: !1 }))
              )
          }
        }
      }
    }
  var lm = _e(
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M8 18.3915V5.60846L18.2264 12L8 18.3915ZM6 3.80421V20.1957C6 20.9812 6.86395 21.46 7.53 21.0437L20.6432 12.848C21.2699 12.4563 21.2699 11.5436 20.6432 11.152L7.53 2.95621C6.86395 2.53993 6 3.01878 6 3.80421Z"></path></svg>'
    ),
    um = _e(
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M6.9998 6V3C6.9998 2.44772 7.44752 2 7.9998 2H19.9998C20.5521 2 20.9998 2.44772 20.9998 3V17C20.9998 17.5523 20.5521 18 19.9998 18H16.9998V20.9991C16.9998 21.5519 16.5499 22 15.993 22H4.00666C3.45059 22 3 21.5554 3 20.9991L3.0026 7.00087C3.0027 6.44811 3.45264 6 4.00942 6H6.9998ZM5.00242 8L5.00019 20H14.9998V8H5.00242ZM8.9998 6H16.9998V16H18.9998V4H8.9998V6Z"></path></svg>'
    ),
    cm = _e(
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M17 6H22V8H20V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V8H2V6H7V3C7 2.44772 7.44772 2 8 2H16C16.5523 2 17 2.44772 17 3V6ZM18 8H6V20H18V8ZM9 11H11V17H9V11ZM13 11H15V17H13V11ZM9 4V6H15V4H9Z"></path></svg>'
    ),
    dm = ne('<div class="tf-node-toolbar svelte-44dmwv"><!> <!> <!></div>'),
    fm = ne(
      '<!> <div class="tf-node-wrapper"><div class="tf-node-wrapper-title">TinyFlow.ai</div> <div class="tf-node-wrapper-body"><!></div></div> <!> <!> <!>',
      1
    )
  const gm = {
    hash: 'svelte-44dmwv',
    code: '.tf-node-toolbar.svelte-44dmwv {display:flex;gap:5px;padding:5px;border-radius:5px;background:#fff;border:1px solid #eee;box-shadow:0 0 5px rgba(0, 0, 0, 0.1);}.tf-node-toolbar-item {border:1px solid transparent;}'
  }
  function dn(e, t) {
    ue(t, !0), et(e, gm)
    const n = w(t, 'data', 7),
      r = w(t, 'id', 7, ''),
      o = w(t, 'icon', 7),
      i = w(t, 'handle', 7),
      s = w(t, 'children', 7),
      a = w(t, 'allowExecute', 7, !0),
      l = w(t, 'allowCopy', 7, !0),
      u = w(t, 'allowDelete', 7, !0),
      c = w(t, 'showSourceHandle', 7, !0),
      f = w(t, 'showTargetHandle', 7, !0)
    let d = n().expand ? ['key'] : []
    const { updateNodeData: g } = Lt(),
      p = [{ key: 'key', icon: o(), title: n().title, description: n().description, content: s() }],
      { deleteNode: x } = sm(),
      { copyNode: C } = am()
    var $ = fm(),
      m = xe($)
    {
      var _ = (O) => {
        Zc(O, {
          get position() {
            return $e.Top
          },
          align: 'end',
          children: (R, S) => {
            var M = dm(),
              k = X(M)
            {
              var P = (K) => {
                Ge(K, {
                  class: 'tf-node-toolbar-item',
                  children: (se, ee) => {
                    var W = lm()
                    L(se, W)
                  },
                  $$slots: { default: !0 }
                })
              }
              ke(k, (K) => {
                a() && K(P)
              })
            }
            var H = z(k, 2)
            {
              var I = (K) => {
                Ge(K, {
                  class: 'tf-node-toolbar-item',
                  onclick: () => {
                    C(r())
                  },
                  children: (se, ee) => {
                    var W = um()
                    L(se, W)
                  },
                  $$slots: { default: !0 }
                })
              }
              ke(H, (K) => {
                l() && K(I)
              })
            }
            var B = z(H, 2)
            {
              var F = (K) => {
                Ge(K, {
                  class: 'tf-node-toolbar-item',
                  onclick: () => {
                    x(r())
                  },
                  children: (se, ee) => {
                    var W = cm()
                    L(se, W)
                  },
                  $$slots: { default: !0 }
                })
              }
              ke(B, (K) => {
                u() && K(F)
              })
            }
            Z(M), L(R, M)
          },
          $$slots: { default: !0 }
        })
      }
      ke(m, (O) => {
        ;(a() || l() || u()) && O(_)
      })
    }
    var v = z(m, 2),
      b = z(X(v), 2),
      N = X(b)
    Kc(N, {
      items: p,
      activeKeys: d,
      onChange: (O, R) => {
        g(r(), { expand: R == null ? void 0 : R.includes('key') })
      }
    }),
      Z(b),
      Z(v)
    var E = z(v, 2)
    {
      var T = (O) => {
        er(O, {
          type: 'target',
          get position() {
            return $e.Left
          },
          style: ' left: -12px;top: 20px'
        })
      }
      ke(E, (O) => {
        f() && O(T)
      })
    }
    var D = z(E, 2)
    {
      var V = (O) => {
        er(O, {
          type: 'source',
          get position() {
            return $e.Right
          },
          style: 'right: -12px;top: 20px'
        })
      }
      ke(D, (O) => {
        c() && O(V)
      })
    }
    var A = z(D, 2)
    return (
      cr(A, () => i() ?? gt),
      L(e, $),
      ce({
        get data() {
          return n()
        },
        set data(O) {
          n(O), y()
        },
        get id() {
          return r()
        },
        set id(O = '') {
          r(O), y()
        },
        get icon() {
          return o()
        },
        set icon(O) {
          o(O), y()
        },
        get handle() {
          return i()
        },
        set handle(O) {
          i(O), y()
        },
        get children() {
          return s()
        },
        set children(O) {
          s(O), y()
        },
        get allowExecute() {
          return a()
        },
        set allowExecute(O = !0) {
          a(O), y()
        },
        get allowCopy() {
          return l()
        },
        set allowCopy(O = !0) {
          l(O), y()
        },
        get allowDelete() {
          return u()
        },
        set allowDelete(O = !0) {
          u(O), y()
        },
        get showSourceHandle() {
          return c()
        },
        set showSourceHandle(O = !0) {
          c(O), y()
        },
        get showTargetHandle() {
          return f()
        },
        set showTargetHandle(O = !0) {
          f(O), y()
        }
      })
    )
  }
  ie(
    dn,
    {
      data: {},
      id: {},
      icon: {},
      handle: {},
      children: {},
      allowExecute: {},
      allowCopy: {},
      allowDelete: {},
      showSourceHandle: {},
      showTargetHandle: {}
    },
    [],
    [],
    !0
  )
  function pt() {
    return ur('svelteflow__node_id')
  }
  const cd = [
      { value: 'String', label: 'String' },
      { value: 'Number', label: 'Number' },
      { value: 'Boolean', label: 'Boolean' },
      { value: 'File', label: 'File' },
      { value: 'Object', label: 'Object' },
      { value: 'Array', label: 'Array' }
    ],
    hm = [
      { value: 'ref', label: '引用' },
      { value: 'input', label: '固定值' }
    ]
  var vm = ne(
      '<div class="input-more-setting svelte-laou7w"><div class="input-more-item svelte-laou7w">参数类型： <!></div> <div class="input-more-item svelte-laou7w">默认值： <!></div> <div class="input-more-item svelte-laou7w">参数描述： <!></div> <div class="input-more-item svelte-laou7w"><!></div></div>'
    ),
    pm = _e(
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M4.5 10.5C3.675 10.5 3 11.175 3 12C3 12.825 3.675 13.5 4.5 13.5C5.325 13.5 6 12.825 6 12C6 11.175 5.325 10.5 4.5 10.5ZM19.5 10.5C18.675 10.5 18 11.175 18 12C18 12.825 18.675 13.5 19.5 13.5C20.325 13.5 21 12.825 21 12C21 11.175 20.325 10.5 19.5 10.5ZM12 10.5C11.175 10.5 10.5 11.175 10.5 12C10.5 12.825 11.175 13.5 12 13.5C12.825 13.5 13.5 12.825 13.5 12C13.5 11.175 12.825 10.5 12 10.5Z"></path></svg>'
    ),
    mm = ne(
      '<div class="input-item svelte-laou7w"><!></div> <div class="input-item svelte-laou7w"><!></div> <div class="input-item svelte-laou7w"><!></div>',
      1
    )
  const ym = {
    hash: 'svelte-laou7w',
    code: '.input-item.svelte-laou7w {display:flex;align-items:center;}.input-more-setting.svelte-laou7w {display:flex;flex-direction:column;gap:10px;padding:10px;background:#fff;border:1px solid #ddd;border-radius:5px;width:200px;box-shadow:0 0 10px 2px rgba(0, 0, 0, 0.1);}.input-more-setting.svelte-laou7w .input-more-item:where(.svelte-laou7w) {display:flex;flex-direction:column;gap:3px;font-size:12px;color:#666;}'
  }
  function dd(e, t) {
    ue(t, !0), et(e, ym)
    const [n, r] = nt(),
      o = () => Q(h(l), '$node', n),
      i = w(t, 'parameter', 7),
      s = w(t, 'index', 7)
    let a = pt(),
      l = Ne(() => pr(a)),
      u = Ne(() => {
        var T, D
        return {
          ...i(),
          ...((D = (T = o()) == null ? void 0 : T.data) == null ? void 0 : D.parameters[s()])
        }
      })
    const { updateNodeData: c } = Lt(),
      f = (T) => {
        const D = T.target.value
        c(a, (V) => {
          let A = V.data.parameters
          return (A[s()].name = D), { parameters: A }
        })
      },
      d = (T) => {
        const D = T.target.checked
        c(a, (V) => {
          let A = V.data.parameters
          return (A[s()].required = D), { parameters: A }
        })
      },
      g = (T) => {
        const D = T.value
        D &&
          c(a, (V) => {
            let A = V.data.parameters
            return (A[s()].dataType = D), { parameters: A }
          })
      }
    let p
    const x = () => {
      c(a, (T) => {
        let D = T.data.parameters
        return D.splice(s(), 1), { parameters: [...D] }
      }),
        p == null || p.hide()
    }
    var C = mm(),
      $ = xe(C),
      m = X($)
    St(m, {
      style: 'width: 100%;',
      get value() {
        return h(u).name
      },
      placeholder: '请输入参数名称',
      oninput: f
    }),
      Z($)
    var _ = z($, 2),
      v = X(_)
    Fc(v, {
      get checked() {
        return h(u).required
      },
      onchange: d
    }),
      Z(_)
    var b = z(_, 2),
      N = X(b)
    An(
      Do(N, {
        placement: 'bottom',
        floating: (D) => {
          var V = vm(),
            A = X(V),
            O = z(X(A))
          const R = Ne(() => (h(u).dataType ? [h(u).dataType] : ['String']))
          ln(O, {
            items: cd,
            style: 'width: 100%',
            onSelect: g,
            get value() {
              return h(R)
            }
          }),
            Z(A)
          var S = z(A, 2),
            M = z(X(S))
          Pt(M, { rows: 1, style: 'width: 100%;' }), Z(S)
          var k = z(S, 2),
            P = z(X(k))
          Pt(P, { rows: 3, style: 'width: 100%;' }), Z(k)
          var H = z(k, 2),
            I = X(H)
          Ge(I, {
            onclick: x,
            children: (B, F) => {
              Pe()
              var K = Ae('删除')
              L(B, K)
            },
            $$slots: { default: !0 }
          }),
            Z(H),
            Z(V),
            L(D, V)
        },
        children: (D, V) => {
          Ge(D, {
            class: 'input-btn-more',
            children: (A, O) => {
              var R = pm()
              L(A, R)
            },
            $$slots: { default: !0 }
          })
        },
        $$slots: { floating: !0, default: !0 }
      }),
      (D) => (p = D),
      () => p
    ),
      Z(b),
      L(e, C)
    var E = ce({
      get parameter() {
        return i()
      },
      set parameter(T) {
        i(T), y()
      },
      get index() {
        return s()
      },
      set index(T) {
        s(T), y()
      }
    })
    return r(), E
  }
  ie(dd, { parameter: {}, index: {} }, [], [], !0)
  var wm = ne(
      '<div class="input-header svelte-3n0wca">参数名称</div> <div class="input-header svelte-3n0wca">必填</div> <div class="input-header svelte-3n0wca"></div>',
      1
    ),
    _m = ne('<div class="none-params svelte-3n0wca">无输入参数</div>'),
    xm = ne('<div class="input-container svelte-3n0wca"><!> <!></div>')
  const bm = {
    hash: 'svelte-3n0wca',
    code: `.input-container.svelte-3n0wca {display:grid;grid-template-columns:80% 10% 10%;row-gap:5px;column-gap:3px;}.input-container.svelte-3n0wca .none-params:where(.svelte-3n0wca) {font-size:12px;background:#f8f8f8;height:40px;display:flex;justify-content:center;align-items:center;border-radius:5px;width:calc(100% - 5px);grid-column:1 / -1;
  /* 从第一列开始到最后一列结束 */}.input-container.svelte-3n0wca .input-header:where(.svelte-3n0wca) {font-size:12px;color:#666;}`
  }
  function fd(e, t) {
    ue(t, !0), et(e, bm)
    const [n, r] = nt(),
      o = () => Q(h(s), '$node', n)
    let i = pt(),
      s = Ne(() => pr(i)),
      a = Ne(() => {
        var d, g
        return [
          ...(((g = (d = o()) == null ? void 0 : d.data) == null ? void 0 : g.parameters) || [])
        ]
      })
    var l = xm(),
      u = X(l)
    {
      var c = (d) => {
        var g = wm()
        Pe(4), L(d, g)
      }
      ke(u, (d) => {
        h(a).length !== 0 && d(c)
      })
    }
    var f = z(u, 2)
    Yt(
      f,
      19,
      () => h(a),
      (d) => d.id,
      (d, g, p) => {
        dd(d, {
          get parameter() {
            return h(g)
          },
          get index() {
            return h(p)
          }
        })
      },
      (d) => {
        var g = _m()
        L(d, g)
      }
    ),
      Z(l),
      L(e, l),
      ce(),
      r()
  }
  ie(fd, {}, [], [], !0)
  const gd = (e) => {
      !e ||
        e.length == 0 ||
        e.forEach((t) => {
          t.id || (t.id = Kr()), gd(t.children)
        })
    },
    kn = () => {
      const { updateNodeData: e } = Lt()
      return {
        addParameter: (t, n = 'parameters', r) => {
          gd(r == null ? void 0 : r.children)
          const o = { ...r, id: Kr() }
          e(t, (i) => {
            let s = i.data[n]
            return s ? s.push(o) : (s = [o]), { [n]: [...s] }
          })
        }
      }
    }
  var Cm = _e(
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12C15 13.6569 13.6569 15 12 15Z"></path></svg>'
    ),
    km = _e(
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'
    ),
    $m = ne('<div class="heading svelte-r5g35l"><!> <!></div> <!>', 1)
  const Em = {
    hash: 'svelte-r5g35l',
    code: '.heading.svelte-r5g35l {display:flex;margin-bottom:10px;}.input-btn-more {border:1px solid transparent;padding:3px;}.input-btn-more:hover {background:#eee;border:1px solid transparent;}'
  }
  function hd(e, t) {
    ue(t, !0), et(e, Em)
    const n = w(t, 'data', 7),
      r = xt(t, ['$$slots', '$$events', '$$legacy', '$$host', 'data']),
      o = pt(),
      { addParameter: i } = kn()
    return (
      dn(
        e,
        ft(() => r, {
          get data() {
            return n()
          },
          allowExecute: !1,
          showTargetHandle: !1,
          icon: (a) => {
            var l = Cm()
            L(a, l)
          },
          children: (a, l) => {
            var u = $m(),
              c = xe(u),
              f = X(c)
            je(f, {
              level: 3,
              children: (p, x) => {
                Pe()
                var C = Ae('输入参数')
                L(p, C)
              },
              $$slots: { default: !0 }
            })
            var d = z(f, 2)
            Ge(d, {
              class: 'input-btn-more',
              style: 'margin-left: auto',
              onclick: () => {
                i(o)
              },
              children: (p, x) => {
                var C = km()
                L(p, C)
              },
              $$slots: { default: !0 }
            }),
              Z(c)
            var g = z(c, 2)
            fd(g, {}), L(a, u)
          },
          $$slots: { icon: !0, default: !0 }
        })
      ),
      ce({
        get data() {
          return n()
        },
        set data(s) {
          n(s), y()
        }
      })
    )
  }
  ie(hd, { data: {} }, [], [], !0)
  const vd = (e, t, n) => {
      for (let r of n) r.target === t && r.source && (e.push(r.source), vd(e, r.source, n))
    },
    pd = (e, t) => {
      if (e.type === 'startNode') {
        const n = e.data.parameters,
          r = []
        if (n)
          for (const o of n)
            r.push({
              label:
                o.name +
                (t ? ` (Array<${o.dataType || 'String'}>)` : ` (${o.dataType || 'String'})`),
              value: e.id + '.' + o.name
            })
        return { label: e.data.title, value: e.id, children: r }
      } else {
        if (e.type === 'loopNode' && t)
          return {
            label: e.data.title,
            value: e.id,
            children: [
              { label: 'loopItem', value: e.id + '.loop' },
              { label: 'index (Number)', value: e.id + '.index' }
            ]
          }
        {
          const n = e.data.outputDefs
          if (n) {
            const r = (o, i) =>
              !o || o.length === 0
                ? []
                : o.map((s) => ({
                    label:
                      s.name +
                      (t ? ` (Array<${s.dataType || 'String'}>)` : ` (${s.dataType || 'String'})`),
                    value: i + '.' + s.name,
                    children: r(s.children, i + '.' + s.name)
                  }))
            return { label: e.data.title, value: e.id, children: r(n, e.id) }
          }
        }
      }
    },
    Sm = (e = !1) => {
      const t = pt(),
        n = pr(t),
        { nodes: r, edges: o } = Ue()
      return Un([n, r, o], ([i, s, a]) => {
        const l = []
        if (e) {
          for (let u of s)
            if (u.parentId === i.id) {
              const c = pd(u, u.parentId === i.id)
              c && l.push(c)
            }
        } else {
          const u = []
          vd(u, t, a)
          for (let c of s)
            if (u.includes(c.id)) {
              const f = pd(c, c.parentId === i.id)
              f && l.push(f)
            }
        }
        return l
      })
    }
  var Pm = ne(
      '<div class="input-more-setting svelte-laou7w"><div class="input-more-item svelte-laou7w">数据来源： <!></div> <div class="input-more-item svelte-laou7w">默认值： <!></div> <div class="input-more-item svelte-laou7w">参数描述： <!></div> <div class="input-more-item svelte-laou7w"><!></div></div>'
    ),
    Nm = ne(
      '<div class="input-item svelte-laou7w"><!></div> <div class="input-item svelte-laou7w"><!></div> <div class="input-item svelte-laou7w"><!></div>',
      1
    )
  const Tm = {
    hash: 'svelte-laou7w',
    code: '.input-item.svelte-laou7w {display:flex;align-items:center;}.input-more-setting.svelte-laou7w {display:flex;flex-direction:column;gap:10px;padding:10px;background:#fff;border:1px solid #ddd;border-radius:5px;width:200px;box-shadow:0 0 10px 2px rgba(0, 0, 0, 0.1);}.input-more-setting.svelte-laou7w .input-more-item:where(.svelte-laou7w) {display:flex;flex-direction:column;gap:3px;font-size:12px;color:#666;}'
  }
  function md(e, t) {
    ue(t, !0), et(e, Tm)
    const [n, r] = nt(),
      o = () => Q(h(c), '$node', n),
      i = () => Q(v, '$selectItems', n),
      s = w(t, 'parameter', 7),
      a = w(t, 'index', 7),
      l = w(t, 'dataKeyName', 7)
    let u = pt(),
      c = Ne(() => pr(u)),
      f = Ne(() => {
        var M
        return { ...s(), ...((M = o()) == null ? void 0 : M.data[l()][a()]) }
      })
    const { updateNodeData: d } = Lt(),
      g = (M, k) => {
        d(u, (P) => {
          let H = P.data[l()]
          return (H[a()] = { ...H[a()], [M]: k }), { [l()]: H }
        })
      },
      p = (M) => {
        const k = M.target.value
        g('name', k)
      },
      x = (M) => {
        const k = M.target.value
        g('value', k)
      },
      C = (M) => {
        const k = M.value
        g('ref', k)
      },
      $ = (M) => {
        const k = M.value
        g('refType', k)
      }
    let m
    const _ = () => {
        d(u, (M) => {
          let k = M.data[l()]
          return k.splice(a(), 1), { [l()]: [...k] }
        }),
          m == null || m.hide()
      },
      v = Sm()
    var b = Nm(),
      N = xe(b),
      E = X(N)
    St(E, {
      style: 'width: 100%;',
      get value() {
        return h(f).name
      },
      placeholder: '请输入参数名称',
      oninput: p
    }),
      Z(N)
    var T = z(N, 2),
      D = X(T)
    {
      var V = (M) => {
          St(M, {
            get value() {
              return h(f).value
            },
            placeholder: '请输入参数值',
            oninput: x
          })
        },
        A = (M) => {
          const k = Ne(() => [h(f).ref])
          ln(M, {
            get items() {
              return i()
            },
            style: 'width: 100%',
            defaultValue: ['ref'],
            get value() {
              return h(k)
            },
            expandAll: !0,
            onSelect: C
          })
        }
      ke(D, (M) => {
        h(f).refType === 'input' ? M(V) : M(A, !1)
      })
    }
    Z(T)
    var O = z(T, 2),
      R = X(O)
    An(
      Do(R, {
        placement: 'bottom',
        floating: (k) => {
          var P = Pm(),
            H = X(P),
            I = z(X(H))
          const B = Ne(() => (h(f).refType ? [h(f).refType] : []))
          ln(I, {
            items: hm,
            style: 'width: 100%',
            defaultValue: ['ref'],
            get value() {
              return h(B)
            },
            onSelect: $
          }),
            Z(H)
          var F = z(H, 2),
            K = z(X(F))
          Pt(K, {
            rows: 1,
            style: 'width: 100%;',
            onchange: (me) => {
              const Ce = me.target.value
              g('defaultValue', Ce)
            }
          }),
            Z(F)
          var se = z(F, 2),
            ee = z(X(se))
          Pt(ee, {
            rows: 3,
            style: 'width: 100%;',
            onchange: (me) => {
              const Ce = me.target.value
              g('description', Ce)
            }
          }),
            Z(se)
          var W = z(se, 2),
            fe = X(W)
          Ge(fe, {
            onclick: _,
            children: (me, Ce) => {
              Pe()
              var he = Ae('删除')
              L(me, he)
            },
            $$slots: { default: !0 }
          }),
            Z(W),
            Z(P),
            L(k, P)
        },
        children: (k, P) => {
          qi(k, {})
        },
        $$slots: { floating: !0, default: !0 }
      }),
      (k) => (m = k),
      () => m
    ),
      Z(O),
      L(e, b)
    var S = ce({
      get parameter() {
        return s()
      },
      set parameter(M) {
        s(M), y()
      },
      get index() {
        return a()
      },
      set index(M) {
        a(M), y()
      },
      get dataKeyName() {
        return l()
      },
      set dataKeyName(M) {
        l(M), y()
      }
    })
    return r(), S
  }
  ie(md, { parameter: {}, index: {}, dataKeyName: {} }, [], [], !0)
  var Mm = ne(
      '<div class="input-header svelte-1sm1mgi">参数名称</div> <div class="input-header svelte-1sm1mgi">参数值</div> <div class="input-header svelte-1sm1mgi"></div>',
      1
    ),
    Hm = ne('<div class="none-params svelte-1sm1mgi"> </div>'),
    Vm = ne('<div class="input-container svelte-1sm1mgi"><!> <!></div>')
  const Dm = {
    hash: 'svelte-1sm1mgi',
    code: `.input-container.svelte-1sm1mgi {display:grid;grid-template-columns:40% 50% 10%;row-gap:5px;column-gap:3px;}.input-container.svelte-1sm1mgi .none-params:where(.svelte-1sm1mgi) {font-size:12px;background:#f8f8f8;height:40px;display:flex;justify-content:center;align-items:center;border-radius:5px;width:calc(100% - 5px);grid-column:1 / -1;
  /* 从第一列开始到最后一列结束 */}.input-container.svelte-1sm1mgi .input-header:where(.svelte-1sm1mgi) {font-size:12px;color:#666;}`
  }
  function Ft(e, t) {
    ue(t, !0), et(e, Dm)
    const [n, r] = nt(),
      o = () => Q(h(l), '$node', n),
      i = w(t, 'noneParameterText', 7, '无输入参数'),
      s = w(t, 'dataKeyName', 7, 'parameters')
    let a = pt(),
      l = Ne(() => pr(a)),
      u = Ne(() => {
        var x
        return [...(((x = o()) == null ? void 0 : x.data[s()]) || [])]
      })
    var c = Vm(),
      f = X(c)
    {
      var d = (x) => {
        var C = Mm()
        Pe(4), L(x, C)
      }
      ke(f, (x) => {
        h(u).length !== 0 && x(d)
      })
    }
    var g = z(f, 2)
    Yt(
      g,
      19,
      () => h(u),
      (x) => x.id,
      (x, C, $) => {
        md(x, {
          get parameter() {
            return h(C)
          },
          get index() {
            return h($)
          },
          get dataKeyName() {
            return s()
          }
        })
      },
      (x) => {
        var C = Hm(),
          $ = X(C, !0)
        Z(C), Ee(() => Bt($, i())), L(x, C)
      }
    ),
      Z(c),
      L(e, c)
    var p = ce({
      get noneParameterText() {
        return i()
      },
      set noneParameterText(x = '无输入参数') {
        i(x), y()
      },
      get dataKeyName() {
        return s()
      },
      set dataKeyName(x = 'parameters') {
        s(x), y()
      }
    })
    return r(), p
  }
  ie(Ft, { noneParameterText: {}, dataKeyName: {} }, [], [], !0)
  var Am = _e(
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M6 5.1438V16.0002H18.3391L6 5.1438ZM4 2.932C4 2.07155 5.01456 1.61285 5.66056 2.18123L21.6501 16.2494C22.3423 16.8584 21.9116 18.0002 20.9896 18.0002H6V22H4V2.932Z"></path></svg>'
    ),
    Lm = _e(
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'
    ),
    Om = ne('<div class="heading svelte-11h445j"><!> <!></div> <!>', 1)
  const Im = {
    hash: 'svelte-11h445j',
    code: '.heading.svelte-11h445j {display:flex;margin-bottom:10px;}'
  }
  function yd(e, t) {
    ue(t, !0), et(e, Im)
    const n = w(t, 'data', 7),
      r = xt(t, ['$$slots', '$$events', '$$legacy', '$$host', 'data']),
      o = pt(),
      { addParameter: i } = kn()
    return (
      dn(
        e,
        ft(
          {
            get data() {
              return n()
            }
          },
          () => r,
          {
            allowExecute: !1,
            showSourceHandle: !1,
            icon: (a) => {
              var l = Am()
              L(a, l)
            },
            children: (a, l) => {
              var u = Om(),
                c = xe(u),
                f = X(c)
              je(f, {
                level: 3,
                children: (p, x) => {
                  Pe()
                  var C = Ae('输出参数')
                  L(p, C)
                },
                $$slots: { default: !0 }
              })
              var d = z(f, 2)
              Ge(d, {
                class: 'input-btn-more',
                style: 'margin-left: auto',
                onclick: () => {
                  i(o, 'outputDefs')
                },
                children: (p, x) => {
                  var C = Lm()
                  L(p, C)
                },
                $$slots: { default: !0 }
              }),
                Z(c)
              var g = z(c, 2)
              Ft(g, { noneParameterText: '无输出参数', dataKeyName: 'outputDefs' }), L(a, u)
            },
            $$slots: { icon: !0, default: !0 }
          }
        )
      ),
      ce({
        get data() {
          return n()
        },
        set data(s) {
          n(s), y()
        }
      })
    )
  }
  ie(yd, { data: {} }, [], [], !0)
  const Ao = () => ur('tinyflow_options')
  var zm = _e(
      '<svg style="transform: scaleY(-1)" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M13 8V16C13 17.6569 11.6569 19 10 19H7.82929C7.41746 20.1652 6.30622 21 5 21C3.34315 21 2 19.6569 2 18C2 16.3431 3.34315 15 5 15C6.30622 15 7.41746 15.8348 7.82929 17H10C10.5523 17 11 16.5523 11 16V8C11 6.34315 12.3431 5 14 5H17V2L22 6L17 10V7H14C13.4477 7 13 7.44772 13 8ZM5 19C5.55228 19 6 18.5523 6 18C6 17.4477 5.55228 17 5 17C4.44772 17 4 17.4477 4 18C4 18.5523 4.44772 19 5 19Z"></path></svg>'
    ),
    Rm = ne('<div class="input-more-item svelte-1cfeest"><!></div>'),
    Bm = ne(
      '<div class="input-more-setting svelte-1cfeest"><div class="input-more-item svelte-1cfeest">默认值： <!></div> <div class="input-more-item svelte-1cfeest">参数描述： <!></div> <!></div>'
    ),
    Ym = ne(
      '<div class="input-item svelte-1cfeest"><!> <!></div> <div class="input-item svelte-1cfeest"><!> <!></div> <div class="input-item svelte-1cfeest"><!></div>',
      1
    )
  const Zm = {
    hash: 'svelte-1cfeest',
    code: '.input-item.svelte-1cfeest {display:flex;align-items:center;gap:2px;}.input-more-setting.svelte-1cfeest {display:flex;flex-direction:column;gap:10px;padding:10px;background:#fff;border:1px solid #ddd;border-radius:5px;width:200px;box-shadow:0 0 10px 2px rgba(0, 0, 0, 0.1);}.input-more-setting.svelte-1cfeest .input-more-item:where(.svelte-1cfeest) {display:flex;flex-direction:column;gap:3px;font-size:12px;color:#666;}'
  }
  function wd(e, t) {
    ue(t, !0), et(e, Zm)
    const [n, r] = nt(),
      o = () => Q(h(u), '$node', n),
      i = w(t, 'parameter', 7),
      s = w(t, 'position', 7),
      a = w(t, 'dataKeyName', 7)
    let l = pt(),
      u = Ne(() => pr(l)),
      c = Ne(() => {
        var I
        let P = (I = o()) == null ? void 0 : I.data[a()],
          H
        if (P && s().length > 0) {
          let B = P
          for (let F = 0; F < s().length; F++) {
            const K = s()[F]
            F == s().length - 1 ? (H = B[K]) : (B = B[K].children)
          }
        }
        return { ...i(), ...H }
      })
    const { updateNodeData: f } = Lt(),
      d = (P, H) => {
        f(l, (I) => {
          const B = I.data[a()]
          if (B && s().length > 0) {
            let F = B
            for (let K = 0; K < s().length; K++) {
              const se = s()[K]
              K == s().length - 1 ? (F[se] = { ...F[se], [P]: H }) : (F = B[se].children)
            }
          }
          return { [a()]: B }
        })
      },
      g = (P) => {
        const H = P.target.value
        d('name', H)
      },
      p = (P) => {
        const H = P.value
        d('dataType', H)
      }
    let x
    const C = () => {
        f(l, (P) => {
          let H = P.data[a()]
          if (H && s().length > 0) {
            let I = H
            for (let B = 0; B < s().length; B++) {
              const F = s()[B]
              B == s().length - 1 ? I.splice(F, 1) : (I = I[F].children)
            }
          }
          return { [a()]: [...H] }
        }),
          x == null || x.hide()
      },
      $ = () => {
        f(l, (P) => {
          let H = P.data[a()]
          if (H && s().length > 0) {
            let I = H
            for (let B = 0; B < s().length; B++) {
              const F = s()[B]
              B == s().length - 1
                ? I[F].children
                  ? I[F].children.push({ id: Kr(), name: 'newParam', dataType: 'String' })
                  : (I[F].children = [{ id: Kr(), name: 'newParam', dataType: 'String' }])
                : (I = I[F].children)
            }
          }
          return { [a()]: [...H] }
        })
      }
    var m = Ym(),
      _ = xe(m),
      v = X(_)
    {
      var b = (P) => {
        var H = tt(),
          I = xe(H)
        Yt(I, 17, s, oi, (B, F) => {
          Pe()
          var K = Ae(' ')
          L(B, K)
        }),
          L(P, H)
      }
      ke(v, (P) => {
        s().length > 1 && P(b)
      })
    }
    var N = z(v, 2)
    const E = Ne(() => h(c).nameDisabled === !0)
    St(N, {
      style: 'width: 100%;',
      get value() {
        return h(c).name
      },
      placeholder: '请输入参数名称',
      oninput: g,
      get disabled() {
        return h(E)
      }
    }),
      Z(_)
    var T = z(_, 2),
      D = X(T)
    const V = Ne(() => (h(c).dataType ? [h(c).dataType] : [])),
      A = Ne(() => h(c).dataTypeDisabled === !0)
    ln(D, {
      items: cd,
      style: 'width: 100%',
      defaultValue: ['String'],
      get value() {
        return h(V)
      },
      get disabled() {
        return h(A)
      },
      onSelect: p
    })
    var O = z(D, 2)
    {
      var R = (P) => {
        Ge(P, {
          class: 'input-btn-more',
          style: 'margin-left: auto',
          onclick: $,
          children: (H, I) => {
            var B = zm()
            L(H, B)
          },
          $$slots: { default: !0 }
        })
      }
      ke(O, (P) => {
        ;(h(c).dataType === 'Object' || h(c).dataType === 'Array') &&
          h(c).addChildDisabled !== !0 &&
          P(R)
      })
    }
    Z(T)
    var S = z(T, 2),
      M = X(S)
    An(
      Do(M, {
        placement: 'bottom',
        floating: (H) => {
          var I = Bm(),
            B = X(I),
            F = z(X(B))
          Pt(F, {
            rows: 1,
            style: 'width: 100%;',
            onchange: (fe) => {
              const me = fe.target.value
              d('defaultValue', me)
            }
          }),
            Z(B)
          var K = z(B, 2),
            se = z(X(K))
          Pt(se, {
            rows: 3,
            style: 'width: 100%;',
            onchange: (fe) => {
              const me = fe.target.value
              d('description', me)
            }
          }),
            Z(K)
          var ee = z(K, 2)
          {
            var W = (fe) => {
              var me = Rm(),
                Ce = X(me)
              Ge(Ce, {
                onclick: C,
                children: (he, ze) => {
                  Pe()
                  var G = Ae('删除')
                  L(he, G)
                },
                $$slots: { default: !0 }
              }),
                Z(me),
                L(fe, me)
            }
            ke(ee, (fe) => {
              h(c).deleteDisabled !== !0 && fe(W)
            })
          }
          Z(I), L(H, I)
        },
        children: (H, I) => {
          qi(H, {})
        },
        $$slots: { floating: !0, default: !0 }
      }),
      (H) => (x = H),
      () => x
    ),
      Z(S),
      L(e, m)
    var k = ce({
      get parameter() {
        return i()
      },
      set parameter(P) {
        i(P), y()
      },
      get position() {
        return s()
      },
      set position(P) {
        s(P), y()
      },
      get dataKeyName() {
        return a()
      },
      set dataKeyName(P) {
        a(P), y()
      }
    })
    return r(), k
  }
  ie(wd, { parameter: {}, position: {}, dataKeyName: {} }, [], [], !0)
  var Xm = ne('<!> <!>', 1),
    Fm = ne('<div class="none-params svelte-1sm1mgi"> </div>'),
    Wm = ne(
      '<div class="input-header svelte-1sm1mgi">参数名称</div> <div class="input-header svelte-1sm1mgi">参数类型</div> <div class="input-header svelte-1sm1mgi"></div>',
      1
    ),
    Km = ne('<div class="input-container svelte-1sm1mgi"><!> <!></div>')
  const qm = {
    hash: 'svelte-1sm1mgi',
    code: `.input-container.svelte-1sm1mgi {display:grid;grid-template-columns:40% 50% 10%;row-gap:5px;column-gap:3px;}.input-container.svelte-1sm1mgi .none-params:where(.svelte-1sm1mgi) {font-size:12px;background:#f8f8f8;height:40px;display:flex;justify-content:center;align-items:center;border-radius:5px;width:calc(100% - 5px);grid-column:1 / -1;
  /* 从第一列开始到最后一列结束 */}.input-container.svelte-1sm1mgi .input-header:where(.svelte-1sm1mgi) {font-size:12px;color:#666;}`
  }
  function Yn(e, t) {
    ue(t, !0), et(e, qm)
    const [n, r] = nt(),
      o = () => Q(h(u), '$node', n),
      i = (C, $ = gt, m = gt) => {
        var _ = tt(),
          v = xe(_)
        Yt(
          v,
          19,
          $,
          (b) => `${b.id}_${b.children ? b.children.length : 0}`,
          (b, N, E) => {
            var T = Xm(),
              D = xe(T)
            const V = Ne(() => [...m(), h(E)])
            wd(D, {
              get parameter() {
                return h(N)
              },
              get position() {
                return h(V)
              },
              get dataKeyName() {
                return a()
              }
            })
            var A = z(D, 2)
            {
              var O = (R) => {
                var S = ve(() => [...m(), h(E)])
                i(
                  R,
                  () => h(N).children,
                  () => h(S)
                )
              }
              ke(A, (R) => {
                h(N).children && R(O)
              })
            }
            L(b, T)
          },
          (b) => {
            var N = tt(),
              E = xe(N)
            {
              var T = (D) => {
                var V = Fm(),
                  A = X(V, !0)
                Z(V), Ee(() => Bt(A, s())), L(D, V)
              }
              ke(E, (D) => {
                m().length === 0 && D(T)
              })
            }
            L(b, N)
          }
        ),
          L(C, _)
      },
      s = w(t, 'noneParameterText', 7, '无输出参数'),
      a = w(t, 'dataKeyName', 7, 'outputDefs')
    let l = pt(),
      u = Ne(() => pr(l)),
      c = Ne(() => {
        var C
        return [...(((C = o()) == null ? void 0 : C.data[a()]) || [])]
      })
    var f = Km(),
      d = X(f)
    {
      var g = (C) => {
        var $ = Wm()
        Pe(4), L(C, $)
      }
      ke(d, (C) => {
        h(c).length !== 0 && C(g)
      })
    }
    var p = z(d, 2)
    i(
      p,
      () => h(c) || [],
      () => []
    ),
      Z(f),
      L(e, f)
    var x = ce({
      get noneParameterText() {
        return s()
      },
      set noneParameterText(C = '无输出参数') {
        s(C), y()
      },
      get dataKeyName() {
        return a()
      },
      set dataKeyName(C = 'outputDefs') {
        a(C), y()
      }
    })
    return r(), x
  }
  ie(Yn, { noneParameterText: {}, dataKeyName: {} }, [], [], !0)
  var Gm = _e(
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M20.7134 7.12811L20.4668 7.69379C20.2864 8.10792 19.7136 8.10792 19.5331 7.69379L19.2866 7.12811C18.8471 6.11947 18.0555 5.31641 17.0677 4.87708L16.308 4.53922C15.8973 4.35653 15.8973 3.75881 16.308 3.57612L17.0252 3.25714C18.0384 2.80651 18.8442 1.97373 19.2761 0.930828L19.5293 0.319534C19.7058 -0.106511 20.2942 -0.106511 20.4706 0.319534L20.7238 0.930828C21.1558 1.97373 21.9616 2.80651 22.9748 3.25714L23.6919 3.57612C24.1027 3.75881 24.1027 4.35653 23.6919 4.53922L22.9323 4.87708C21.9445 5.31641 21.1529 6.11947 20.7134 7.12811ZM9 2C13.0675 2 16.426 5.03562 16.9337 8.96494L19.1842 12.5037C19.3324 12.7367 19.3025 13.0847 18.9593 13.2317L17 14.071V17C17 18.1046 16.1046 19 15 19H13.001L13 22H4L4.00025 18.3061C4.00033 17.1252 3.56351 16.0087 2.7555 15.0011C1.65707 13.6313 1 11.8924 1 10C1 5.58172 4.58172 2 9 2ZM9 4C5.68629 4 3 6.68629 3 10C3 11.3849 3.46818 12.6929 4.31578 13.7499C5.40965 15.114 6.00036 16.6672 6.00025 18.3063L6.00013 20H11.0007L11.0017 17H15V12.7519L16.5497 12.0881L15.0072 9.66262L14.9501 9.22118C14.5665 6.25141 12.0243 4 9 4ZM19.4893 16.9929L21.1535 18.1024C22.32 16.3562 23 14.2576 23 12.0001C23 11.317 22.9378 10.6486 22.8186 10L20.8756 10.5C20.9574 10.9878 21 11.489 21 12.0001C21 13.8471 20.4436 15.5642 19.4893 16.9929Z"></path></svg>'
    ),
    Um = _e(
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'
    ),
    jm = _e(
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'
    ),
    Jm = ne(
      '<div class="heading svelte-wn2kra"><!> <!></div> <!> <!> <div class="setting-title svelte-wn2kra">模型</div> <div class="setting-item svelte-wn2kra"><!> <!></div> <div class="setting-title svelte-wn2kra">采样参数</div> <div class="setting-item svelte-wn2kra"><div class="slider-container svelte-wn2kra"><label class="svelte-wn2kra"> </label> <input type="range" min="0" max="1" step="0.1" class="svelte-wn2kra"></div></div> <div class="setting-item svelte-wn2kra"><div class="slider-container svelte-wn2kra"><label class="svelte-wn2kra"> </label> <input type="range" min="0" max="1" step="0.1" class="svelte-wn2kra"></div></div> <div class="setting-item svelte-wn2kra"><div class="slider-container svelte-wn2kra"><label class="svelte-wn2kra"> </label> <input type="range" min="0" max="100" step="1" class="svelte-wn2kra"></div></div> <div class="setting-title svelte-wn2kra">系统提示词</div> <div class="setting-item svelte-wn2kra"><!></div> <div class="setting-title svelte-wn2kra">用户提示词</div> <div class="setting-item svelte-wn2kra"><!></div> <div class="heading svelte-wn2kra"><!> <!></div> <!>',
      1
    )
  const Qm = {
    hash: 'svelte-wn2kra',
    code: `.heading.svelte-wn2kra {display:flex;margin-bottom:10px;}.setting-title.svelte-wn2kra {font-size:12px;color:#999;margin-bottom:4px;margin-top:10px;}.setting-item.svelte-wn2kra {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}\r
    /* 新增样式 */.slider-container.svelte-wn2kra {width:100%;display:flex;flex-direction:column;gap:4px;}.slider-container.svelte-wn2kra label:where(.svelte-wn2kra) {font-size:12px;color:#666;display:flex;justify-content:space-between;align-items:center;}input[type="range"].svelte-wn2kra {width:100%;height:4px;background:#ddd;border-radius:2px;outline:none;-webkit-appearance:none;}input[type="range"].svelte-wn2kra::-webkit-slider-thumb {-webkit-appearance:none;width:14px;height:14px;background:#007bff;border-radius:50%;cursor:pointer;}`
  }
  function _d(e, t) {
    ue(t, !0), et(e, Qm)
    const n = w(t, 'data', 7),
      r = xt(t, ['$$slots', '$$events', '$$legacy', '$$host', 'data']),
      o = pt(),
      { addParameter: i } = kn(),
      s = Ao()
    let a = Fn(Ht([]))
    rn(async () => {
      var c, f
      const u = await ((f = (c = s.provider) == null ? void 0 : c.llm) == null ? void 0 : f.call(c))
      h(a).push(...(u || []))
    })
    const { updateNodeData: l } = Lt()
    return (
      dn(
        e,
        ft(
          {
            get data() {
              return n()
            }
          },
          () => r,
          {
            icon: (c) => {
              var f = Gm()
              L(c, f)
            },
            children: (c, f) => {
              var d = Jm(),
                g = xe(d),
                p = X(g)
              je(p, {
                level: 3,
                children: (G, ae) => {
                  Pe()
                  var Me = Ae('输入参数')
                  L(G, Me)
                },
                $$slots: { default: !0 }
              })
              var x = z(p, 2)
              Ge(x, {
                class: 'input-btn-more',
                style: 'margin-left: auto',
                onclick: () => {
                  i(o)
                },
                children: (G, ae) => {
                  var Me = Um()
                  L(G, Me)
                },
                $$slots: { default: !0 }
              }),
                Z(g)
              var C = z(g, 2)
              Ft(C, {})
              var $ = z(C, 2)
              je($, {
                level: 3,
                mt: '10px',
                children: (G, ae) => {
                  Pe()
                  var Me = Ae('模型设置')
                  L(G, Me)
                },
                $$slots: { default: !0 }
              })
              var m = z($, 4),
                _ = X(m)
              const v = Ne(() => (n().llmId ? [n().llmId] : []))
              ln(_, {
                get items() {
                  return h(a)
                },
                style: 'width: 100%',
                placeholder: '请选择模型',
                onSelect: (G) => {
                  const ae = G.value
                  l(o, () => ({ llmId: ae }))
                },
                get value() {
                  return h(v)
                }
              })
              var b = z(_, 2)
              qi(b, {}), Z(m)
              var N = z(m, 4),
                E = X(N),
                T = X(E),
                D = X(T)
              Z(T)
              var V = z(T, 2)
              ao(V), Z(E), Z(N)
              var A = z(N, 2),
                O = X(A),
                R = X(O),
                S = X(R)
              Z(R)
              var M = z(R, 2)
              ao(M), Z(O), Z(A)
              var k = z(A, 2),
                P = X(k),
                H = X(P),
                I = X(H)
              Z(H)
              var B = z(H, 2)
              ao(B), Z(P), Z(k)
              var F = z(k, 4),
                K = X(F)
              const se = Ne(() => n().systemPrompt || '')
              Pt(K, {
                rows: 5,
                placeholder: '请输入系统提示词',
                style: 'width: 100%',
                get value() {
                  return h(se)
                },
                oninput: (G) => {
                  l(o, { systemPrompt: G.target.value })
                }
              }),
                Z(F)
              var ee = z(F, 4),
                W = X(ee)
              const fe = Ne(() => n().userPrompt || '')
              Pt(W, {
                rows: 5,
                placeholder: '请输入用户提示词',
                style: 'width: 100%',
                get value() {
                  return h(fe)
                },
                oninput: (G) => {
                  l(o, { userPrompt: G.target.value })
                }
              }),
                Z(ee)
              var me = z(ee, 2),
                Ce = X(me)
              je(Ce, {
                level: 3,
                mt: '10px',
                children: (G, ae) => {
                  Pe()
                  var Me = Ae('输出参数')
                  L(G, Me)
                },
                $$slots: { default: !0 }
              })
              var he = z(Ce, 2)
              Ge(he, {
                class: 'input-btn-more',
                style: 'margin-left: auto',
                onclick: () => {
                  i(o, 'outputDefs')
                },
                children: (G, ae) => {
                  var Me = jm()
                  L(G, Me)
                },
                $$slots: { default: !0 }
              }),
                Z(me)
              var ze = z(me, 2)
              Yn(ze, {}),
                Ee(() => {
                  Bt(D, `Temperature: ${n().temperature ?? 0.5}`),
                    bs(V, n().temperature ?? 0.5),
                    Bt(S, `Top P: ${n().topP ?? 0.9}`),
                    bs(M, n().topP ?? 0.9),
                    Bt(I, `Top K: ${n().topK ?? 50}`),
                    bs(B, n().topK ?? 50)
                }),
                Ze(
                  'mousedown',
                  V,
                  ks(function (G) {
                    De.call(this, t, G)
                  })
                ),
                Ze('input', V, (G) => l(o, { temperature: parseFloat(G.target.value) })),
                Ze(
                  'mousedown',
                  M,
                  ks(function (G) {
                    De.call(this, t, G)
                  })
                ),
                Ze('input', M, (G) => l(o, { topP: parseFloat(G.target.value) })),
                Ze(
                  'mousedown',
                  B,
                  ks(function (G) {
                    De.call(this, t, G)
                  })
                ),
                Ze('input', B, (G) => l(o, { topK: parseInt(G.target.value) })),
                L(c, d)
            },
            $$slots: { icon: !0, default: !0 }
          }
        )
      ),
      ce({
        get data() {
          return n()
        },
        set data(u) {
          n(u), y()
        }
      })
    )
  }
  ie(_d, { data: {} }, [], [], !0)
  var ey = _e(
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M23 12L15.9289 19.0711L14.5147 17.6569L20.1716 12L14.5147 6.34317L15.9289 4.92896L23 12ZM3.82843 12L9.48528 17.6569L8.07107 19.0711L1 12L8.07107 4.92896L9.48528 6.34317L3.82843 12Z"></path></svg>'
    ),
    ty = _e(
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'
    ),
    ny = _e(
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'
    ),
    ry = ne(
      '<div class="heading svelte-15t2v24"><!> <!></div> <!> <!> <div class="setting-title svelte-15t2v24">执行引擎</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="setting-title svelte-15t2v24">执行代码</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="heading svelte-15t2v24"><!> <!></div> <!>',
      1
    )
  const oy = {
    hash: 'svelte-15t2v24',
    code: '.heading.svelte-15t2v24 {display:flex;margin-bottom:10px;}.setting-title.svelte-15t2v24 {font-size:12px;color:#999;margin-bottom:4px;margin-top:10px;}.setting-item.svelte-15t2v24 {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}'
  }
  function xd(e, t) {
    ue(t, !0), et(e, oy)
    const n = w(t, 'data', 7),
      r = xt(t, ['$$slots', '$$events', '$$legacy', '$$host', 'data']),
      o = pt(),
      { addParameter: i } = kn(),
      { updateNodeData: s } = Lt(),
      a = [
        { label: 'QLExpress', value: 'qlexpress' },
        { label: 'Groovy', value: 'groovy' },
        { label: 'JavaScript', value: 'js' }
      ]
    return (
      dn(
        e,
        ft(
          {
            get data() {
              return n()
            }
          },
          () => r,
          {
            icon: (u) => {
              var c = ey()
              L(u, c)
            },
            children: (u, c) => {
              var f = ry(),
                d = xe(f),
                g = X(d)
              je(g, {
                level: 3,
                children: (A, O) => {
                  Pe()
                  var R = Ae('输入参数')
                  L(A, R)
                },
                $$slots: { default: !0 }
              })
              var p = z(g, 2)
              Ge(p, {
                class: 'input-btn-more',
                style: 'margin-left: auto',
                onclick: () => {
                  i(o)
                },
                children: (A, O) => {
                  var R = ty()
                  L(A, R)
                },
                $$slots: { default: !0 }
              }),
                Z(d)
              var x = z(d, 2)
              Ft(x, {})
              var C = z(x, 2)
              je(C, {
                level: 3,
                mt: '10px',
                children: (A, O) => {
                  Pe()
                  var R = Ae('代码')
                  L(A, R)
                },
                $$slots: { default: !0 }
              })
              var $ = z(C, 4),
                m = X($)
              const _ = Ne(() => (n().engine ? [n().engine] : ['qlexpress']))
              ln(m, {
                items: a,
                style: 'width: 100%',
                placeholder: '请选择执行引擎',
                onSelect: (A) => {
                  const O = A.value
                  s(o, () => ({ engine: O }))
                },
                get value() {
                  return h(_)
                }
              }),
                Z($)
              var v = z($, 4),
                b = X(v)
              const N = Ne(() => n().code || '')
              Pt(b, {
                rows: 10,
                placeholder:
                  '请输入执行代码，注：输出内容需添加到_result中，如：_result.put(key, value)',
                style: 'width: 100%',
                onchange: (A) => {
                  s(o, () => ({ code: A.target.value }))
                },
                get value() {
                  return h(N)
                }
              }),
                Z(v)
              var E = z(v, 2),
                T = X(E)
              je(T, {
                level: 3,
                mt: '10px',
                children: (A, O) => {
                  Pe()
                  var R = Ae('输出参数')
                  L(A, R)
                },
                $$slots: { default: !0 }
              })
              var D = z(T, 2)
              Ge(D, {
                class: 'input-btn-more',
                style: 'margin-left: auto',
                onclick: () => {
                  i(o, 'outputDefs')
                },
                children: (A, O) => {
                  var R = ny()
                  L(A, R)
                },
                $$slots: { default: !0 }
              }),
                Z(E)
              var V = z(E, 2)
              Yn(V, {}), L(u, f)
            },
            $$slots: { icon: !0, default: !0 }
          }
        )
      ),
      ce({
        get data() {
          return n()
        },
        set data(l) {
          n(l), y()
        }
      })
    )
  }
  ie(xd, { data: {} }, [], [], !0)
  var iy = _e(
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M2 4C2 3.44772 2.44772 3 3 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4ZM4 5V19H20V5H4ZM7 8H17V11H15V10H13V14H14.5V16H9.5V14H11V10H9V11H7V8Z"></path></svg>'
    ),
    sy = _e(
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'
    ),
    ay = ne(
      '<div class="heading svelte-15t2v24"><!> <!></div> <!> <!> <div class="setting-title svelte-15t2v24">执行代码</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="heading svelte-15t2v24"><!></div> <!>',
      1
    )
  const ly = {
    hash: 'svelte-15t2v24',
    code: '.heading.svelte-15t2v24 {display:flex;margin-bottom:10px;}.setting-title.svelte-15t2v24 {font-size:12px;color:#999;margin-bottom:4px;margin-top:10px;}.setting-item.svelte-15t2v24 {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}'
  }
  function bd(e, t) {
    ue(t, !0), et(e, ly)
    const n = w(t, 'data', 7),
      r = xt(t, ['$$slots', '$$events', '$$legacy', '$$host', 'data']),
      o = pt(),
      { addParameter: i } = kn(),
      { updateNodeData: s } = Lt()
    return (
      kr(() => {
        ;(!n().outputDefs || n().outputDefs.length === 0) &&
          i(o, 'outputDefs', {
            name: 'output',
            dataType: 'String',
            dataTypeDisabled: !0,
            deleteDisabled: !0
          })
      }),
      dn(
        e,
        ft(
          {
            get data() {
              return n()
            }
          },
          () => r,
          {
            icon: (l) => {
              var u = iy()
              L(l, u)
            },
            children: (l, u) => {
              var c = ay(),
                f = xe(c),
                d = X(f)
              je(d, {
                level: 3,
                children: (N, E) => {
                  Pe()
                  var T = Ae('输入参数')
                  L(N, T)
                },
                $$slots: { default: !0 }
              })
              var g = z(d, 2)
              Ge(g, {
                class: 'input-btn-more',
                style: 'margin-left: auto',
                onclick: () => {
                  i(o)
                },
                children: (N, E) => {
                  var T = sy()
                  L(N, T)
                },
                $$slots: { default: !0 }
              }),
                Z(f)
              var p = z(f, 2)
              Ft(p, {})
              var x = z(p, 2)
              je(x, {
                level: 3,
                mt: '10px',
                children: (N, E) => {
                  Pe()
                  var T = Ae('代码')
                  L(N, T)
                },
                $$slots: { default: !0 }
              })
              var C = z(x, 4),
                $ = X(C)
              const m = Ne(() => n().template || '')
              Pt($, {
                rows: 10,
                placeholder: '请输入执行代码',
                style: 'width: 100%',
                onchange: (N) => {
                  s(o, () => ({ template: N.target.value }))
                },
                get value() {
                  return h(m)
                }
              }),
                Z(C)
              var _ = z(C, 2),
                v = X(_)
              je(v, {
                level: 3,
                mt: '10px',
                children: (N, E) => {
                  Pe()
                  var T = Ae('输出参数')
                  L(N, T)
                },
                $$slots: { default: !0 }
              }),
                Z(_)
              var b = z(_, 2)
              Yn(b, {}), L(l, c)
            },
            $$slots: { icon: !0, default: !0 }
          }
        )
      ),
      ce({
        get data() {
          return n()
        },
        set data(a) {
          n(a), y()
        }
      })
    )
  }
  ie(bd, { data: {} }, [], [], !0)
  var uy = _e(
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M6.23509 6.45329C4.85101 7.89148 4 9.84636 4 12C4 16.4183 7.58172 20 12 20C13.0808 20 14.1116 19.7857 15.0521 19.3972C15.1671 18.6467 14.9148 17.9266 14.8116 17.6746C14.582 17.115 13.8241 16.1582 12.5589 14.8308C12.2212 14.4758 12.2429 14.2035 12.3636 13.3943L12.3775 13.3029C12.4595 12.7486 12.5971 12.4209 14.4622 12.1248C15.4097 11.9746 15.6589 12.3533 16.0043 12.8777C16.0425 12.9358 16.0807 12.9928 16.1198 13.0499C16.4479 13.5297 16.691 13.6394 17.0582 13.8064C17.2227 13.881 17.428 13.9751 17.7031 14.1314C18.3551 14.504 18.3551 14.9247 18.3551 15.8472V15.9518C18.3551 16.3434 18.3168 16.6872 18.2566 16.9859C19.3478 15.6185 20 13.8854 20 12C20 8.70089 18.003 5.8682 15.1519 4.64482C14.5987 5.01813 13.8398 5.54726 13.575 5.91C13.4396 6.09538 13.2482 7.04166 12.6257 7.11976C12.4626 7.14023 12.2438 7.12589 12.012 7.11097C11.3905 7.07058 10.5402 7.01606 10.268 7.75495C10.0952 8.2232 10.0648 9.49445 10.6239 10.1543C10.7134 10.2597 10.7307 10.4547 10.6699 10.6735C10.59 10.9608 10.4286 11.1356 10.3783 11.1717C10.2819 11.1163 10.0896 10.8931 9.95938 10.7412C9.64554 10.3765 9.25405 9.92233 8.74797 9.78176C8.56395 9.73083 8.36166 9.68867 8.16548 9.64736C7.6164 9.53227 6.99443 9.40134 6.84992 9.09302C6.74442 8.8672 6.74488 8.55621 6.74529 8.22764C6.74529 7.8112 6.74529 7.34029 6.54129 6.88256C6.46246 6.70541 6.35689 6.56446 6.23509 6.45329ZM12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22Z"></path></svg>'
    ),
    cy = _e(
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'
    ),
    dy = _e(
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'
    ),
    fy = _e(
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'
    ),
    gy = ne('<div class="heading svelte-1vtcqdz" style="padding-top: 10px"><!> <!></div> <!>', 1),
    hy = _e(
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'
    ),
    vy = ne('<div class="heading svelte-1vtcqdz" style="padding-top: 10px"><!> <!></div> <!>', 1),
    py = ne('<div style="width: 100%"><!></div>'),
    my = ne('<div style="width: 100%"><!></div>'),
    yy = _e(
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'
    ),
    wy = ne(
      '<div style="display: flex;gap: 2px;width: 100%;padding: 10px 0"><div><!></div> <div style="width: 100%"><!></div></div> <div class="heading svelte-1vtcqdz"><!> <!></div> <!> <div class="heading svelte-1vtcqdz" style="padding-top: 10px"><!> <!></div> <!> <!> <div class="radio-group svelte-1vtcqdz"><label class="svelte-1vtcqdz"><!>none</label> <label class="svelte-1vtcqdz"><!>form-data</label> <label class="svelte-1vtcqdz"><!>x-www-form-urlencoded</label> <label class="svelte-1vtcqdz"><!>json</label> <label class="svelte-1vtcqdz"><!>raw</label></div> <!> <!> <!> <!> <div class="heading svelte-1vtcqdz"><!> <!></div> <!>',
      1
    )
  const _y = {
    hash: 'svelte-1vtcqdz',
    code: '.heading.svelte-1vtcqdz {display:flex;margin-bottom:10px;}.radio-group.svelte-1vtcqdz {display:flex;margin:10px 0;}.radio-group.svelte-1vtcqdz label:where(.svelte-1vtcqdz) {display:flex;font-size:14px;}'
  }
  function Cd(e, t) {
    ue(t, !0), et(e, _y)
    const n = w(t, 'data', 7),
      r = xt(t, ['$$slots', '$$events', '$$legacy', '$$host', 'data']),
      o = [
        { value: 'get', label: 'GET' },
        { value: 'post', label: 'POST' },
        { value: 'put', label: 'PUT' },
        { value: 'delete', label: 'DELETE' },
        { value: 'head', label: 'HEAD' },
        { value: 'patch', label: 'PATCH' }
      ],
      i = pt(),
      { addParameter: s } = kn(),
      { updateNodeData: a } = Lt()
    return (
      dn(
        e,
        ft(
          {
            get data() {
              return n()
            }
          },
          () => r,
          {
            icon: (u) => {
              var c = uy()
              L(u, c)
            },
            children: (u, c) => {
              var f = wy(),
                d = xe(f),
                g = X(d),
                p = X(g)
              const x = Ne(() => (n().method ? [n().method] : ['get']))
              ln(p, {
                items: o,
                style: 'width: 100%',
                placeholder: '请选择请求方式',
                onSelect: (oe) => {
                  const pe = oe.value
                  a(i, () => ({ method: pe }))
                },
                get value() {
                  return h(x)
                }
              }),
                Z(g)
              var C = z(g, 2),
                $ = X(C)
              const m = Ne(() => n().url || '')
              St($, {
                placeholder: '请输入url',
                style: 'width: 100%',
                onchange: (oe) => {
                  a(i, () => ({ url: oe.target.value }))
                },
                get value() {
                  return h(m)
                }
              }),
                Z(C),
                Z(d)
              var _ = z(d, 2),
                v = X(_)
              je(v, {
                level: 3,
                children: (oe, pe) => {
                  Pe()
                  var be = Ae('Http 头信息')
                  L(oe, be)
                },
                $$slots: { default: !0 }
              })
              var b = z(v, 2)
              Ge(b, {
                class: 'input-btn-more',
                style: 'margin-left: auto',
                onclick: () => {
                  s(i, 'headers')
                },
                children: (oe, pe) => {
                  var be = cy()
                  L(oe, be)
                },
                $$slots: { default: !0 }
              }),
                Z(_)
              var N = z(_, 2)
              Ft(N, { dataKeyName: 'headers' })
              var E = z(N, 2),
                T = X(E)
              je(T, {
                level: 3,
                children: (oe, pe) => {
                  Pe()
                  var be = Ae('参数')
                  L(oe, be)
                },
                $$slots: { default: !0 }
              })
              var D = z(T, 2)
              Ge(D, {
                class: 'input-btn-more',
                style: 'margin-left: auto',
                onclick: () => {
                  s(i, 'urlParameters')
                },
                children: (oe, pe) => {
                  var be = dy()
                  L(oe, be)
                },
                $$slots: { default: !0 }
              }),
                Z(E)
              var V = z(E, 2)
              Ft(V, { dataKeyName: 'urlParameters' })
              var A = z(V, 2)
              je(A, {
                level: 3,
                mt: '10px',
                children: (oe, pe) => {
                  Pe()
                  var be = Ae('Body')
                  L(oe, be)
                },
                $$slots: { default: !0 }
              })
              var O = z(A, 2),
                R = X(O),
                S = X(R)
              const M = Ne(() => !n().bodyType)
              St(S, {
                type: 'radio',
                name: 'bodyType',
                value: '',
                get checked() {
                  return h(M)
                },
                onchange: (oe) => {
                  var pe
                  ;(pe = oe.target) != null && pe.checked && a(i, { bodyType: '' })
                }
              }),
                Pe(),
                Z(R)
              var k = z(R, 2),
                P = X(k)
              const H = Ne(() => n().bodyType === 'form-data')
              St(P, {
                type: 'radio',
                name: 'bodyType',
                value: 'form-data',
                get checked() {
                  return h(H)
                },
                onchange: (oe) => {
                  var pe
                  ;(pe = oe.target) != null && pe.checked && a(i, { bodyType: 'form-data' })
                }
              }),
                Pe(),
                Z(k)
              var I = z(k, 2),
                B = X(I)
              const F = Ne(() => n().bodyType === 'x-www-form-urlencoded')
              St(B, {
                type: 'radio',
                name: 'bodyType',
                value: 'x-www-form-urlencoded',
                get checked() {
                  return h(F)
                },
                onchange: (oe) => {
                  var pe
                  ;(pe = oe.target) != null &&
                    pe.checked &&
                    a(i, { bodyType: 'x-www-form-urlencoded' })
                }
              }),
                Pe(),
                Z(I)
              var K = z(I, 2),
                se = X(K)
              const ee = Ne(() => n().bodyType === 'json')
              St(se, {
                type: 'radio',
                name: 'bodyType',
                value: 'json',
                get checked() {
                  return h(ee)
                },
                onchange: (oe) => {
                  var pe
                  ;(pe = oe.target) != null && pe.checked && a(i, { bodyType: 'json' })
                }
              }),
                Pe(),
                Z(K)
              var W = z(K, 2),
                fe = X(W)
              const me = Ne(() => n().bodyType === 'raw')
              St(fe, {
                type: 'radio',
                name: 'bodyType',
                value: 'raw',
                get checked() {
                  return h(me)
                },
                onchange: (oe) => {
                  var pe
                  ;(pe = oe.target) != null && pe.checked && a(i, { bodyType: 'raw' })
                }
              }),
                Pe(),
                Z(W),
                Z(O)
              var Ce = z(O, 2)
              {
                var he = (oe) => {
                  var pe = gy(),
                    be = xe(pe),
                    Ie = X(be)
                  je(Ie, {
                    level: 3,
                    children: (J, Re) => {
                      Pe()
                      var le = Ae('参数')
                      L(J, le)
                    },
                    $$slots: { default: !0 }
                  })
                  var ht = z(Ie, 2)
                  Ge(ht, {
                    class: 'input-btn-more',
                    style: 'margin-left: auto',
                    onclick: () => {
                      s(i, 'fromData')
                    },
                    children: (J, Re) => {
                      var le = fy()
                      L(J, le)
                    },
                    $$slots: { default: !0 }
                  }),
                    Z(be)
                  var dt = z(be, 2)
                  Ft(dt, { dataKeyName: 'fromData' }), L(oe, pe)
                }
                ke(Ce, (oe) => {
                  n().bodyType === 'form-data' && oe(he)
                })
              }
              var ze = z(Ce, 2)
              {
                var G = (oe) => {
                  var pe = vy(),
                    be = xe(pe),
                    Ie = X(be)
                  je(Ie, {
                    level: 3,
                    children: (J, Re) => {
                      Pe()
                      var le = Ae('参数')
                      L(J, le)
                    },
                    $$slots: { default: !0 }
                  })
                  var ht = z(Ie, 2)
                  Ge(ht, {
                    class: 'input-btn-more',
                    style: 'margin-left: auto',
                    onclick: () => {
                      s(i, 'fromUrlencoded')
                    },
                    children: (J, Re) => {
                      var le = hy()
                      L(J, le)
                    },
                    $$slots: { default: !0 }
                  }),
                    Z(be)
                  var dt = z(be, 2)
                  Ft(dt, { dataKeyName: 'fromUrlencoded' }), L(oe, pe)
                }
                ke(ze, (oe) => {
                  n().bodyType === 'x-www-form-urlencoded' && oe(G)
                })
              }
              var ae = z(ze, 2)
              {
                var Me = (oe) => {
                  var pe = py(),
                    be = X(pe)
                  Pt(be, {
                    rows: '5',
                    style: 'width: 100%',
                    placeholder: '请输入 json 信息',
                    get value() {
                      return n().bodyJson
                    },
                    oninput: (Ie) => {
                      a(i, { bodyJson: Ie.target.value })
                    }
                  }),
                    Z(pe),
                    L(oe, pe)
                }
                ke(ae, (oe) => {
                  n().bodyType === 'json' && oe(Me)
                })
              }
              var Le = z(ae, 2)
              {
                var Xe = (oe) => {
                  var pe = my(),
                    be = X(pe)
                  Pt(be, {
                    rows: '5',
                    style: 'width: 100%',
                    placeholder: '请输入请求信息',
                    get value() {
                      return n().bodyRaw
                    },
                    oninput: (Ie) => {
                      a(i, { bodyRaw: Ie.target.value })
                    }
                  }),
                    Z(pe),
                    L(oe, pe)
                }
                ke(Le, (oe) => {
                  n().bodyType === 'raw' && oe(Xe)
                })
              }
              var te = z(Le, 2),
                Fe = X(te)
              je(Fe, {
                level: 3,
                mt: '10px',
                children: (oe, pe) => {
                  Pe()
                  var be = Ae('输出参数')
                  L(oe, be)
                },
                $$slots: { default: !0 }
              })
              var Oe = z(Fe, 2)
              Ge(Oe, {
                class: 'input-btn-more',
                style: 'margin-left: auto',
                onclick: () => {
                  s(i, 'outputDefs')
                },
                children: (oe, pe) => {
                  var be = yy()
                  L(oe, be)
                },
                $$slots: { default: !0 }
              }),
                Z(te)
              var rt = z(te, 2)
              Yn(rt, {}), L(u, f)
            },
            $$slots: { icon: !0, default: !0 }
          }
        )
      ),
      ce({
        get data() {
          return n()
        },
        set data(l) {
          n(l), y()
        }
      })
    )
  }
  ie(Cd, { data: {} }, [], [], !0)
  var xy = _e(
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M15.5 5C13.567 5 12 6.567 12 8.5C12 10.433 13.567 12 15.5 12C17.433 12 19 10.433 19 8.5C19 6.567 17.433 5 15.5 5ZM10 8.5C10 5.46243 12.4624 3 15.5 3C18.5376 3 21 5.46243 21 8.5C21 9.6575 20.6424 10.7315 20.0317 11.6175L22.7071 14.2929L21.2929 15.7071L18.6175 13.0317C17.7315 13.6424 16.6575 14 15.5 14C12.4624 14 10 11.5376 10 8.5ZM3 4H8V6H3V4ZM3 11H8V13H3V11ZM21 18V20H3V18H21Z"></path></svg>'
    ),
    by = _e(
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'
    ),
    Cy = ne(
      '<div class="heading svelte-15t2v24"><!> <!></div> <!> <!> <div class="setting-title svelte-15t2v24">知识库</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="setting-title svelte-15t2v24">获取数据量</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="heading svelte-15t2v24"><!></div> <!>',
      1
    )
  const ky = {
    hash: 'svelte-15t2v24',
    code: '.heading.svelte-15t2v24 {display:flex;margin-bottom:10px;}.setting-title.svelte-15t2v24 {font-size:12px;color:#999;margin-bottom:4px;margin-top:10px;}.setting-item.svelte-15t2v24 {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}'
  }
  function kd(e, t) {
    ue(t, !0), et(e, ky)
    const n = w(t, 'data', 7),
      r = xt(t, ['$$slots', '$$events', '$$legacy', '$$host', 'data']),
      o = pt(),
      { addParameter: i } = kn(),
      s = Ao()
    let a = Fn(Ht([]))
    rn(async () => {
      var c, f
      const u = await ((f = (c = s.provider) == null ? void 0 : c.knowledge) == null
        ? void 0
        : f.call(c))
      h(a).push(...(u || []))
    })
    const { updateNodeData: l } = Lt()
    return (
      kr(() => {
        ;(!n().outputDefs || n().outputDefs.length === 0) &&
          i(o, 'outputDefs', {
            name: 'documents',
            dataType: 'Array',
            nameDisabled: !0,
            dataTypeDisabled: !0,
            addChildDisabled: !0,
            children: [
              { name: 'title', dataType: 'String', nameDisabled: !0, dataTypeDisabled: !0 },
              { name: 'content', dataType: 'String', nameDisabled: !0, dataTypeDisabled: !0 },
              { name: 'documentId', dataType: 'Number', nameDisabled: !0, dataTypeDisabled: !0 },
              { name: 'knowledgeId', dataType: 'Number', nameDisabled: !0, dataTypeDisabled: !0 }
            ]
          })
      }),
      dn(
        e,
        ft(
          {
            get data() {
              return n()
            }
          },
          () => r,
          {
            icon: (c) => {
              var f = xy()
              L(c, f)
            },
            children: (c, f) => {
              var d = Cy(),
                g = xe(d),
                p = X(g)
              je(p, {
                level: 3,
                children: (V, A) => {
                  Pe()
                  var O = Ae('输入参数')
                  L(V, O)
                },
                $$slots: { default: !0 }
              })
              var x = z(p, 2)
              Ge(x, {
                class: 'input-btn-more',
                style: 'margin-left: auto',
                onclick: () => {
                  i(o)
                },
                children: (V, A) => {
                  var O = by()
                  L(V, O)
                },
                $$slots: { default: !0 }
              }),
                Z(g)
              var C = z(g, 2)
              Ft(C, {})
              var $ = z(C, 2)
              je($, {
                level: 3,
                mt: '10px',
                children: (V, A) => {
                  Pe()
                  var O = Ae('知识库设置')
                  L(V, O)
                },
                $$slots: { default: !0 }
              })
              var m = z($, 4),
                _ = X(m)
              const v = Ne(() => (n().knowledgeId ? [n().knowledgeId] : []))
              ln(_, {
                get items() {
                  return h(a)
                },
                style: 'width: 100%',
                placeholder: '请选择知识库',
                onSelect: (V) => {
                  const A = V.value
                  l(o, () => ({ knowledgeId: A }))
                },
                get value() {
                  return h(v)
                }
              }),
                Z(m)
              var b = z(m, 4),
                N = X(b)
              St(N, { placeholder: '搜索的数据条数', style: 'width: 100%' }), Z(b)
              var E = z(b, 2),
                T = X(E)
              je(T, {
                level: 3,
                mt: '10px',
                children: (V, A) => {
                  Pe()
                  var O = Ae('输出参数')
                  L(V, O)
                },
                $$slots: { default: !0 }
              }),
                Z(E)
              var D = z(E, 2)
              Yn(D, {}), L(c, d)
            },
            $$slots: { icon: !0, default: !0 }
          }
        )
      ),
      ce({
        get data() {
          return n()
        },
        set data(u) {
          n(u), y()
        }
      })
    )
  }
  ie(kd, { data: {} }, [], [], !0)
  var $y = _e(
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M18.031 16.6168L22.3137 20.8995L20.8995 22.3137L16.6168 18.031C15.0769 19.263 13.124 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20 13.124 19.263 15.0769 18.031 16.6168ZM16.0247 15.8748C17.2475 14.6146 18 12.8956 18 11C18 7.1325 14.8675 4 11 4C7.1325 4 4 7.1325 4 11C4 14.8675 7.1325 18 11 18C12.8956 18 14.6146 17.2475 15.8748 16.0247L16.0247 15.8748Z"></path></svg>'
    ),
    Ey = _e(
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'
    ),
    Sy = ne(
      '<div class="heading svelte-15t2v24"><!> <!></div> <!> <!> <div class="setting-title svelte-15t2v24">API 服务商</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="setting-title svelte-15t2v24">API Key</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="setting-title svelte-15t2v24">关键字</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="setting-title svelte-15t2v24">数据量</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="setting-title svelte-15t2v24">其他参数</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="heading svelte-15t2v24"><!></div> <!>',
      1
    )
  const Py = {
    hash: 'svelte-15t2v24',
    code: '.heading.svelte-15t2v24 {display:flex;margin-bottom:10px;}.setting-title.svelte-15t2v24 {font-size:12px;color:#999;margin-bottom:4px;margin-top:10px;}.setting-item.svelte-15t2v24 {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}'
  }
  function $d(e, t) {
    ue(t, !0), et(e, Py)
    const n = w(t, 'data', 7),
      r = xt(t, ['$$slots', '$$events', '$$legacy', '$$host', 'data']),
      o = pt(),
      { addParameter: i } = kn(),
      s = Ao()
    let a = Fn(Ht([]))
    rn(async () => {
      var c
      const u = await ((c = s.provider) == null ? void 0 : c.knowledge())
      h(a).push(...(u || []))
    })
    const { updateNodeData: l } = Lt()
    return (
      kr(() => {
        ;(!n().outputDefs || n().outputDefs.length === 0) &&
          i(o, 'outputDefs', {
            name: 'documents',
            dataType: 'Array',
            nameDisabled: !0,
            dataTypeDisabled: !0,
            addChildDisabled: !0,
            children: [
              { name: 'title', dataType: 'String', nameDisabled: !0, dataTypeDisabled: !0 },
              { name: 'content', dataType: 'String', nameDisabled: !0, dataTypeDisabled: !0 },
              { name: 'documentId', dataType: 'Number', nameDisabled: !0, dataTypeDisabled: !0 },
              { name: 'knowledgeId', dataType: 'Number', nameDisabled: !0, dataTypeDisabled: !0 }
            ]
          })
      }),
      dn(
        e,
        ft(
          {
            get data() {
              return n()
            }
          },
          () => r,
          {
            icon: (c) => {
              var f = $y()
              L(c, f)
            },
            children: (c, f) => {
              var d = Sy(),
                g = xe(d),
                p = X(g)
              je(p, {
                level: 3,
                children: (k, P) => {
                  Pe()
                  var H = Ae('输入参数')
                  L(k, H)
                },
                $$slots: { default: !0 }
              })
              var x = z(p, 2)
              Ge(x, {
                class: 'input-btn-more',
                style: 'margin-left: auto',
                onclick: () => {
                  i(o)
                },
                children: (k, P) => {
                  var H = Ey()
                  L(k, H)
                },
                $$slots: { default: !0 }
              }),
                Z(g)
              var C = z(g, 2)
              Ft(C, {})
              var $ = z(C, 2)
              je($, {
                level: 3,
                mt: '10px',
                children: (k, P) => {
                  Pe()
                  var H = Ae('搜索引擎设置')
                  L(k, H)
                },
                $$slots: { default: !0 }
              })
              var m = z($, 4),
                _ = X(m)
              const v = Ne(() => (n().knowledgeId ? [n().knowledgeId] : []))
              ln(_, {
                get items() {
                  return h(a)
                },
                style: 'width: 100%',
                placeholder: '请选择 API 服务商',
                onSelect: (k) => {
                  const P = k.value
                  l(o, () => ({ knowledgeId: P }))
                },
                get value() {
                  return h(v)
                }
              }),
                Z(m)
              var b = z(m, 4),
                N = X(b)
              St(N, { placeholder: '请输入 API Key', style: 'width: 100%' }), Z(b)
              var E = z(b, 4),
                T = X(E)
              St(T, { placeholder: '请输入关键字', style: 'width: 100%' }), Z(E)
              var D = z(E, 4),
                V = X(D)
              St(V, { placeholder: '搜索的数据条数', style: 'width: 100%' }), Z(D)
              var A = z(D, 4),
                O = X(A)
              Pt(O, {
                rows: 3,
                placeholder: '请输入其他参数（Property 格式）',
                style: 'width: 100%'
              }),
                Z(A)
              var R = z(A, 2),
                S = X(R)
              je(S, {
                level: 3,
                mt: '10px',
                children: (k, P) => {
                  Pe()
                  var H = Ae('输出参数')
                  L(k, H)
                },
                $$slots: { default: !0 }
              }),
                Z(R)
              var M = z(R, 2)
              Yn(M, {}), L(c, d)
            },
            $$slots: { icon: !0, default: !0 }
          }
        )
      ),
      ce({
        get data() {
          return n()
        },
        set data(u) {
          n(u), y()
        }
      })
    )
  }
  ie($d, { data: {} }, [], [], !0)
  var Ny = _e(
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M5.46257 4.43262C7.21556 2.91688 9.5007 2 12 2C17.5228 2 22 6.47715 22 12C22 14.1361 21.3302 16.1158 20.1892 17.7406L17 12H20C20 7.58172 16.4183 4 12 4C9.84982 4 7.89777 4.84827 6.46023 6.22842L5.46257 4.43262ZM18.5374 19.5674C16.7844 21.0831 14.4993 22 12 22C6.47715 22 2 17.5228 2 12C2 9.86386 2.66979 7.88416 3.8108 6.25944L7 12H4C4 16.4183 7.58172 20 12 20C14.1502 20 16.1022 19.1517 17.5398 17.7716L18.5374 19.5674Z"></path></svg>'
    ),
    Ty = _e(
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'
    ),
    My = ne(
      '<div class="heading svelte-md8tgj"><!> <!></div> <!> <div class="heading svelte-md8tgj"><!></div> <!>',
      1
    )
  const Hy = {
    hash: 'svelte-md8tgj',
    code: ".heading.svelte-md8tgj {display:flex;margin-bottom:10px;}.loop_handle_wrapper ::after {content:'循环体';width:100px;height:20px;background:#000;color:#fff;display:flex;justify-content:center;align-items:center;}"
  }
  function Ed(e, t) {
    ue(t, !0), et(e, Hy)
    const n = w(t, 'data', 7),
      r = xt(t, ['$$slots', '$$events', '$$legacy', '$$host', 'data']),
      o = pt(),
      { addParameter: i } = kn(),
      s = Ao()
    let a = Fn(Ht([]))
    return (
      rn(async () => {
        var u
        const l = await ((u = s.provider) == null ? void 0 : u.knowledge())
        h(a).push(...(l || []))
      }),
      dn(
        e,
        ft(
          {
            get data() {
              return n()
            }
          },
          () => r,
          {
            icon: (c) => {
              var f = Ny()
              L(c, f)
            },
            handle: (c) => {
              er(c, {
                type: 'source',
                get position() {
                  return $e.Bottom
                },
                id: 'loop_handle',
                style: 'bottom: -12px;width: 100px',
                class: 'loop_handle_wrapper'
              })
            },
            children: (c, f) => {
              var d = My(),
                g = xe(d),
                p = X(g)
              je(p, {
                level: 3,
                children: (v, b) => {
                  Pe()
                  var N = Ae('循环变量')
                  L(v, N)
                },
                $$slots: { default: !0 }
              })
              var x = z(p, 2)
              Ge(x, {
                class: 'input-btn-more',
                style: 'margin-left: auto',
                onclick: () => {
                  i(o)
                },
                children: (v, b) => {
                  var N = Ty()
                  L(v, N)
                },
                $$slots: { default: !0 }
              }),
                Z(g)
              var C = z(g, 2)
              Ft(C, {})
              var $ = z(C, 2),
                m = X($)
              je(m, {
                level: 3,
                mt: '10px',
                children: (v, b) => {
                  Pe()
                  var N = Ae('输出参数')
                  L(v, N)
                },
                $$slots: { default: !0 }
              }),
                Z($)
              var _ = z($, 2)
              Yn(_, {}), L(c, d)
            },
            $$slots: { icon: !0, handle: !0, default: !0 }
          }
        )
      ),
      ce({
        get data() {
          return n()
        },
        set data(l) {
          n(l), y()
        }
      })
    )
  }
  ie(Ed, { data: {} }, [], [], !0)
  var Vy = _e(
      '<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" fill="currentColor" p-id="2577" width="200" height="200"><path d="M312.096 408.576l67.84 67.84 45.312-45.216a32 32 0 0 1 45.248 45.248l-45.28 45.248 90.496 90.496 45.28-45.216a32 32 0 0 1 45.248 45.248l-45.248 45.248 67.904 67.872-90.528 90.528a224.064 224.064 0 0 1-292.544 21.024L176.32 906.368a32 32 0 0 1-45.248-45.248l69.504-69.472a224.064 224.064 0 0 1 21.024-292.576l90.496-90.496z m0 90.496L266.848 544.32a160 160 0 0 0-4.8 221.28l4.8 4.992a160 160 0 0 0 221.248 4.8l5.024-4.8 45.248-45.248-226.272-226.24z m610.272-384a32 32 0 0 1 0 45.248l-69.44 69.504a224.064 224.064 0 0 1-21.056 292.544l-90.528 90.528-316.8-316.8 90.56-90.496a224.064 224.064 0 0 1 292.544-21.024l69.44-69.504a32 32 0 0 1 45.28 0zM565.344 246.08l-5.024 4.8-45.248 45.248 226.272 226.272 45.248-45.248a160 160 0 0 0 4.8-221.28l-4.8-4.992a160 160 0 0 0-221.248-4.8z" p-id="2578"></path></svg>'
    ),
    Dy = _e(
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'
    ),
    Ay = _e(
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'
    ),
    Ly = ne(
      '<div class="heading svelte-15t2v24"><!> <!></div> <!> <!> <div class="setting-title svelte-15t2v24">选择内部接口</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="heading svelte-15t2v24"><!> <!></div> <!>',
      1
    )
  const Oy = {
    hash: 'svelte-15t2v24',
    code: '.heading.svelte-15t2v24 {display:flex;margin-bottom:10px;}.setting-title.svelte-15t2v24 {font-size:12px;color:#999;margin-bottom:4px;margin-top:10px;}.setting-item.svelte-15t2v24 {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}'
  }
  function Sd(e, t) {
    ue(t, !0), et(e, Oy)
    const n = w(t, 'data', 7),
      r = xt(t, ['$$slots', '$$events', '$$legacy', '$$host', 'data']),
      o = pt(),
      { addParameter: i } = kn(),
      { updateNodeData: s } = Lt(),
      a = Ao()
    let l = Fn(Ht([]))
    return (
      rn(async () => {
        var c, f
        const u = await ((f = (c = a.provider) == null ? void 0 : c.internal) == null
          ? void 0
          : f.call(c))
        h(l).push(...(u || []))
      }),
      dn(
        e,
        ft(
          {
            get data() {
              return n()
            }
          },
          () => r,
          {
            icon: (c) => {
              var f = Vy()
              L(c, f)
            },
            children: (c, f) => {
              var d = Ly(),
                g = xe(d),
                p = X(g)
              je(p, {
                level: 3,
                children: (D, V) => {
                  Pe()
                  var A = Ae('输入参数')
                  L(D, A)
                },
                $$slots: { default: !0 }
              })
              var x = z(p, 2)
              Ge(x, {
                class: 'input-btn-more',
                style: 'margin-left: auto',
                onclick: () => {
                  i(o)
                },
                children: (D, V) => {
                  var A = Dy()
                  L(D, A)
                },
                $$slots: { default: !0 }
              }),
                Z(g)
              var C = z(g, 2)
              Ft(C, {})
              var $ = z(C, 2)
              je($, {
                level: 3,
                mt: '10px',
                children: (D, V) => {
                  Pe()
                  var A = Ae('接口')
                  L(D, A)
                },
                $$slots: { default: !0 }
              })
              var m = z($, 4),
                _ = X(m)
              const v = Ne(() => (n().method ? [n().method] : ['']))
              ln(_, {
                get items() {
                  return h(l)
                },
                style: 'width: 100%',
                placeholder: '请选择内部接口',
                onSelect: (D) => {
                  const V = D.value
                  s(o, () => ({ method: V }))
                },
                get value() {
                  return h(v)
                }
              }),
                Z(m)
              var b = z(m, 2),
                N = X(b)
              je(N, {
                level: 3,
                mt: '10px',
                children: (D, V) => {
                  Pe()
                  var A = Ae('输出参数')
                  L(D, A)
                },
                $$slots: { default: !0 }
              })
              var E = z(N, 2)
              Ge(E, {
                class: 'input-btn-more',
                style: 'margin-left: auto',
                onclick: () => {
                  i(o, 'outputDefs')
                },
                children: (D, V) => {
                  var A = Ay()
                  L(D, A)
                },
                $$slots: { default: !0 }
              }),
                Z(b)
              var T = z(b, 2)
              Yn(T, {}), L(c, d)
            },
            $$slots: { icon: !0, default: !0 }
          }
        )
      ),
      ce({
        get data() {
          return n()
        },
        set data(u) {
          n(u), y()
        }
      })
    )
  }
  ie(Sd, { data: {} }, [], [], !0)
  const Iy = {
    startNode: hd,
    codeNode: xd,
    llmNode: _d,
    templateNode: bd,
    httpNode: Cd,
    knowledgeNode: kd,
    searchEngineNode: $d,
    loopNode: Ed,
    internalNode: Sd,
    endNode: yd
  }
  var zy = ne('<!> ', 1)
  function Pd(e, t) {
    ue(t, !0)
    const n = w(t, 'icon', 7),
      r = w(t, 'title', 7),
      o = w(t, 'type', 7),
      i = w(t, 'description', 7),
      s = w(t, 'extra', 7)
    return (
      Ge(e, {
        draggable: !0,
        ondragstart: (l) => {
          if (!l.dataTransfer) return null
          const u = {
            type: o(),
            data: { title: r(), description: i(), systemPrompt: '', userPrompt: '', ...s() }
          }
          l.dataTransfer.setData('application/tinyflow', JSON.stringify(u)),
            (l.dataTransfer.effectAllowed = 'move')
        },
        children: (l, u) => {
          var c = zy(),
            f = xe(c)
          dl(f, n)
          var d = z(f)
          Ee(() => Bt(d, ` ${r() ?? ''}`)), L(l, c)
        },
        $$slots: { default: !0 }
      }),
      ce({
        get icon() {
          return n()
        },
        set icon(l) {
          n(l), y()
        },
        get title() {
          return r()
        },
        set title(l) {
          r(l), y()
        },
        get type() {
          return o()
        },
        set type(l) {
          o(l), y()
        },
        get description() {
          return i()
        },
        set description(l) {
          i(l), y()
        },
        get extra() {
          return s()
        },
        set extra(l) {
          s(l), y()
        }
      })
    )
  }
  ie(Pd, { icon: {}, title: {}, type: {}, description: {}, extra: {} }, [], [], !0)
  var Ry = _e(
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M4.83582 12L11.0429 18.2071L12.4571 16.7929L7.66424 12L12.4571 7.20712L11.0429 5.79291L4.83582 12ZM10.4857 12L16.6928 18.2071L18.107 16.7929L13.3141 12L18.107 7.20712L16.6928 5.79291L10.4857 12Z"></path></svg>'
    ),
    By = _e(
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M19.1642 12L12.9571 5.79291L11.5429 7.20712L16.3358 12L11.5429 16.7929L12.9571 18.2071L19.1642 12ZM13.5143 12L7.30722 5.79291L5.89301 7.20712L10.6859 12L5.89301 16.7929L7.30722 18.2071L13.5143 12Z"></path></svg>'
    ),
    Yy = ne(
      '<div><div class="tf-toolbar-container "><div class="tf-toolbar-container-header"><!></div> <div class="tf-toolbar-container-body"><div class="tf-toolbar-container-base"></div> <div class="tf-toolbar-container-tools"><!></div></div></div> <!></div>'
    )
  function Nd(e) {
    let t = Fn('base'),
      n = Fn('show')
    const r = [
        {
          icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12C15 13.6569 13.6569 15 12 15Z"></path></svg>',
          title: '开始节点',
          type: 'startNode',
          description: '开始定义输入参数'
        },
        {
          icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M5.46257 4.43262C7.21556 2.91688 9.5007 2 12 2C17.5228 2 22 6.47715 22 12C22 14.1361 21.3302 16.1158 20.1892 17.7406L17 12H20C20 7.58172 16.4183 4 12 4C9.84982 4 7.89777 4.84827 6.46023 6.22842L5.46257 4.43262ZM18.5374 19.5674C16.7844 21.0831 14.4993 22 12 22C6.47715 22 2 17.5228 2 12C2 9.86386 2.66979 7.88416 3.8108 6.25944L7 12H4C4 16.4183 7.58172 20 12 20C14.1502 20 16.1022 19.1517 17.5398 17.7716L18.5374 19.5674Z"></path></svg>',
          title: '循环',
          type: 'loopNode',
          description: '用于循环执行任务'
        },
        {
          icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M20.7134 7.12811L20.4668 7.69379C20.2864 8.10792 19.7136 8.10792 19.5331 7.69379L19.2866 7.12811C18.8471 6.11947 18.0555 5.31641 17.0677 4.87708L16.308 4.53922C15.8973 4.35653 15.8973 3.75881 16.308 3.57612L17.0252 3.25714C18.0384 2.80651 18.8442 1.97373 19.2761 0.930828L19.5293 0.319534C19.7058 -0.106511 20.2942 -0.106511 20.4706 0.319534L20.7238 0.930828C21.1558 1.97373 21.9616 2.80651 22.9748 3.25714L23.6919 3.57612C24.1027 3.75881 24.1027 4.35653 23.6919 4.53922L22.9323 4.87708C21.9445 5.31641 21.1529 6.11947 20.7134 7.12811ZM9 2C13.0675 2 16.426 5.03562 16.9337 8.96494L19.1842 12.5037C19.3324 12.7367 19.3025 13.0847 18.9593 13.2317L17 14.071V17C17 18.1046 16.1046 19 15 19H13.001L13 22H4L4.00025 18.3061C4.00033 17.1252 3.56351 16.0087 2.7555 15.0011C1.65707 13.6313 1 11.8924 1 10C1 5.58172 4.58172 2 9 2ZM9 4C5.68629 4 3 6.68629 3 10C3 11.3849 3.46818 12.6929 4.31578 13.7499C5.40965 15.114 6.00036 16.6672 6.00025 18.3063L6.00013 20H11.0007L11.0017 17H15V12.7519L16.5497 12.0881L15.0072 9.66262L14.9501 9.22118C14.5665 6.25141 12.0243 4 9 4ZM19.4893 16.9929L21.1535 18.1024C22.32 16.3562 23 14.2576 23 12.0001C23 11.317 22.9378 10.6486 22.8186 10L20.8756 10.5C20.9574 10.9878 21 11.489 21 12.0001C21 13.8471 20.4436 15.5642 19.4893 16.9929Z"></path></svg>',
          title: '大模型',
          type: 'llmNode',
          description: '使用大模型处理问题'
        },
        {
          icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M15.5 5C13.567 5 12 6.567 12 8.5C12 10.433 13.567 12 15.5 12C17.433 12 19 10.433 19 8.5C19 6.567 17.433 5 15.5 5ZM10 8.5C10 5.46243 12.4624 3 15.5 3C18.5376 3 21 5.46243 21 8.5C21 9.6575 20.6424 10.7315 20.0317 11.6175L22.7071 14.2929L21.2929 15.7071L18.6175 13.0317C17.7315 13.6424 16.6575 14 15.5 14C12.4624 14 10 11.5376 10 8.5ZM3 4H8V6H3V4ZM3 11H8V13H3V11ZM21 18V20H3V18H21Z"></path></svg>',
          title: '知识库',
          type: 'knowledgeNode',
          description: '通过知识库获取内容'
        },
        {
          icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M18.031 16.6168L22.3137 20.8995L20.8995 22.3137L16.6168 18.031C15.0769 19.263 13.124 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20 13.124 19.263 15.0769 18.031 16.6168ZM16.0247 15.8748C17.2475 14.6146 18 12.8956 18 11C18 7.1325 14.8675 4 11 4C7.1325 4 4 7.1325 4 11C4 14.8675 7.1325 18 11 18C12.8956 18 14.6146 17.2475 15.8748 16.0247L16.0247 15.8748Z"></path></svg>',
          title: '搜索引擎',
          type: 'searchEngineNode',
          description: '通过搜索引擎搜索内容'
        },
        {
          icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M6.23509 6.45329C4.85101 7.89148 4 9.84636 4 12C4 16.4183 7.58172 20 12 20C13.0808 20 14.1116 19.7857 15.0521 19.3972C15.1671 18.6467 14.9148 17.9266 14.8116 17.6746C14.582 17.115 13.8241 16.1582 12.5589 14.8308C12.2212 14.4758 12.2429 14.2035 12.3636 13.3943L12.3775 13.3029C12.4595 12.7486 12.5971 12.4209 14.4622 12.1248C15.4097 11.9746 15.6589 12.3533 16.0043 12.8777C16.0425 12.9358 16.0807 12.9928 16.1198 13.0499C16.4479 13.5297 16.691 13.6394 17.0582 13.8064C17.2227 13.881 17.428 13.9751 17.7031 14.1314C18.3551 14.504 18.3551 14.9247 18.3551 15.8472V15.9518C18.3551 16.3434 18.3168 16.6872 18.2566 16.9859C19.3478 15.6185 20 13.8854 20 12C20 8.70089 18.003 5.8682 15.1519 4.64482C14.5987 5.01813 13.8398 5.54726 13.575 5.91C13.4396 6.09538 13.2482 7.04166 12.6257 7.11976C12.4626 7.14023 12.2438 7.12589 12.012 7.11097C11.3905 7.07058 10.5402 7.01606 10.268 7.75495C10.0952 8.2232 10.0648 9.49445 10.6239 10.1543C10.7134 10.2597 10.7307 10.4547 10.6699 10.6735C10.59 10.9608 10.4286 11.1356 10.3783 11.1717C10.2819 11.1163 10.0896 10.8931 9.95938 10.7412C9.64554 10.3765 9.25405 9.92233 8.74797 9.78176C8.56395 9.73083 8.36166 9.68867 8.16548 9.64736C7.6164 9.53227 6.99443 9.40134 6.84992 9.09302C6.74442 8.8672 6.74488 8.55621 6.74529 8.22764C6.74529 7.8112 6.74529 7.34029 6.54129 6.88256C6.46246 6.70541 6.35689 6.56446 6.23509 6.45329ZM12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22Z"></path></svg>',
          title: 'Http 请求',
          type: 'httpNode',
          description: '通过 HTTP 请求获取数据'
        },
        {
          icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M23 12L15.9289 19.0711L14.5147 17.6569L20.1716 12L14.5147 6.34317L15.9289 4.92896L23 12ZM3.82843 12L9.48528 17.6569L8.07107 19.0711L1 12L8.07107 4.92896L9.48528 6.34317L3.82843 12Z"></path></svg>',
          title: '动态代码',
          type: 'codeNode',
          description: '动态执行代码'
        },
        {
          icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M2 4C2 3.44772 2.44772 3 3 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4ZM4 5V19H20V5H4ZM7 8H17V11H15V10H13V14H14.5V16H9.5V14H11V10H9V11H7V8Z"></path></svg>',
          title: '内容模板',
          type: 'templateNode',
          description: '通过模板引擎生成内容'
        },
        {
          icon: '<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" fill="currentColor" p-id="2577" width="200" height="200"><path d="M312.096 408.576l67.84 67.84 45.312-45.216a32 32 0 0 1 45.248 45.248l-45.28 45.248 90.496 90.496 45.28-45.216a32 32 0 0 1 45.248 45.248l-45.248 45.248 67.904 67.872-90.528 90.528a224.064 224.064 0 0 1-292.544 21.024L176.32 906.368a32 32 0 0 1-45.248-45.248l69.504-69.472a224.064 224.064 0 0 1 21.024-292.576l90.496-90.496z m0 90.496L266.848 544.32a160 160 0 0 0-4.8 221.28l4.8 4.992a160 160 0 0 0 221.248 4.8l5.024-4.8 45.248-45.248-226.272-226.24z m610.272-384a32 32 0 0 1 0 45.248l-69.44 69.504a224.064 224.064 0 0 1-21.056 292.544l-90.528 90.528-316.8-316.8 90.56-90.496a224.064 224.064 0 0 1 292.544-21.024l69.44-69.504a32 32 0 0 1 45.28 0zM565.344 246.08l-5.024 4.8-45.248 45.248 226.272 226.272 45.248-45.248a160 160 0 0 0 4.8-221.28l-4.8-4.992a160 160 0 0 0-221.248-4.8z" p-id="2578"></path></svg>',
          title: '内部接口',
          type: 'internalNode',
          description: '执行内部提供接口'
        },
        {
          icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M6 5.1438V16.0002H18.3391L6 5.1438ZM4 2.932C4 2.07155 5.01456 1.61285 5.66056 2.18123L21.6501 16.2494C22.3423 16.8584 21.9116 18.0002 20.9896 18.0002H6V22H4V2.932Z"></path></svg>',
          title: '结束节点',
          type: 'endNode',
          description: '结束定义输出参数'
        }
      ],
      o = [
        { label: '基础节点', value: 'base' },
        { label: '业务工具', value: 'tools' }
      ]
    var i = Yy(),
      s = X(i),
      a = X(s),
      l = X(a)
    Wc(l, {
      style: 'width: 100%',
      items: o,
      onChange: (p) => {
        U(t, Ht(p.value.toString()))
      }
    }),
      Z(a)
    var u = z(a, 2),
      c = X(u)
    Yt(
      c,
      21,
      () => r,
      oi,
      (p, x) => {
        Pd(
          p,
          ft(() => h(x))
        )
      }
    ),
      Z(c)
    var f = z(c, 2),
      d = X(f)
    Ge(d, {
      children: (p, x) => {
        Pe()
        var C = Ae('测试业务按钮')
        L(p, C)
      },
      $$slots: { default: !0 }
    }),
      Z(f),
      Z(u),
      Z(s)
    var g = z(s, 2)
    Ge(g, {
      onclick: () => {
        U(n, Ht(h(n) ? '' : 'show'))
      },
      children: (p, x) => {
        var C = tt(),
          $ = xe(C)
        {
          var m = (v) => {
              var b = Ry()
              L(v, b)
            },
            _ = (v) => {
              var b = By()
              L(v, b)
            }
          ke($, (v) => {
            h(n) === 'show' ? v(m) : v(_, !1)
          })
        }
        L(p, C)
      },
      $$slots: { default: !0 }
    }),
      Z(i),
      Ee(() => {
        $t(i, 1, `tf-toolbar ${h(n) ?? ''}`),
          de(c, 'style', `display: ${(h(t) === 'base' ? 'flex' : 'none') ?? ''}`),
          de(f, 'style', `display: ${(h(t) !== 'base' ? 'flex' : 'none') ?? ''}`)
      }),
      L(e, i)
  }
  ie(Nd, {}, [], [], !0)
  const Zy = () => {
      const { nodeLookup: e } = Ue()
      return {
        getNode: (n) => {
          var o
          return (o = q(e).get(n)) == null ? void 0 : o.internals.userNode
        }
      }
    },
    Xy = () => {
      const { nodes: e } = Ue()
      return {
        ensureParentInNodesBefore: (n, r) => {
          e.update((o) => {
            let i = -1
            for (let l = 0; l < o.length; l++)
              if (o[l].id === n) {
                i = l
                break
              }
            if (i <= 0) return o
            let s = -1
            for (let l = 0; l < i; l++)
              if (o[l].parentId === n || o[l].id === r) {
                s = l
                break
              }
            if (s == -1) return o
            const a = o[i]
            for (let l = i; l > s; l--) o[l] = o[l - 1]
            return (o[s] = a), o
          })
        }
      }
    },
    Fy = () => {
      const { edges: e } = Ue()
      return { getEdgesByTarget: (n) => q(e).filter((o) => o.target === n) }
    }
  var Wy = ne(
      '<div class="panel-content svelte-1oe15vw"><div>边属性设置</div> <div class="setting-title svelte-1oe15vw">边条件设置</div> <div class="setting-item"><!></div></div>'
    ),
    Ky = ne('<!> <!> <!> <!>', 1),
    qy = ne('<div style="position: relative; height: 100%; width: 100%"><!> <!></div>')
  const Gy = {
    hash: 'svelte-1oe15vw',
    code: '.panel-content.svelte-1oe15vw {padding:10px;background-color:#fff;border-radius:5px;box-shadow:0 2px 4px rgba(0, 0, 0, 0.1);width:200px;border:1px solid #efefef;}.setting-title.svelte-1oe15vw {margin:10px 0;font-size:12px;color:#999;}'
  }
  function Td(e, t) {
    ue(t, !0), et(e, Gy)
    const n = w(t, 'onInit', 7),
      r = Lt()
    n()(r)
    let o = Fn(!1)
    const i = (_) => {
        _.preventDefault(), _.dataTransfer && (_.dataTransfer.dropEffect = 'move')
      },
      s = (_) => {
        var T
        _.preventDefault()
        const v = r.screenToFlowPosition({ x: _.clientX - 250, y: _.clientY - 100 }),
          b = (T = _.dataTransfer) == null ? void 0 : T.getData('application/tinyflow'),
          N = b ? JSON.parse(b) : {},
          E = { id: `node_${Kr()}`, position: v, data: {}, ...N }
        Bi.addNode(E), Bi.selectNodeOnly(E.id)
      },
      { getNode: a } = Zy(),
      l = (_) => {
        const v = a(_.source),
          b = a(_.target)
        if (_.sourceHandle === 'loop_handle' || v.parentId) {
          const N = r.getEdges()
          for (let E of N)
            if (E.target === _.target) {
              const T = a(E.source)
              if (
                (_.sourceHandle === 'loop_handle' && T.parentId !== v.id) ||
                (v.parentId && T.parentId !== v.parentId)
              )
                return !1
            }
        }
        return !(!v.parentId && b.parentId && b.parentId !== v.id)
      },
      { ensureParentInNodesBefore: u } = Xy(),
      c = (_, v) => {
        if (!v.isValid) return
        const b = v.toNode
        if (b.parentId) return
        const N = v.fromNode,
          E = v.fromHandle,
          T = { position: { ...b.position } }
        if (
          (E.id === 'loop_handle' ? (T.parentId = N.id) : N.parentId && (T.parentId = N.parentId),
          T.parentId)
        ) {
          const D = a(T.parentId)
          ;(T.position = { x: b.position.x - D.position.x, y: b.position.y - D.position.y }),
            u(T.parentId, b.id),
            r.updateNode(b.id, T)
        }
      },
      { getEdgesByTarget: f } = Fy(),
      d = (_) => {
        _.edges.forEach((b) => {
          const N = a(b.target)
          if (N.parentId) {
            const E = f(b.target),
              T = a(N.parentId)
            if (E.length === 0)
              r.updateNode(N.id, {
                parentId: void 0,
                position: { x: N.position.x + T.position.x, y: N.position.y + T.position.y }
              })
            else {
              let D = !1
              for (let V = 0; V < E.length; V++) {
                const A = E[V],
                  O = a(A.source)
                if (O.parentId || O.type === 'loopNode') {
                  D = !0
                  break
                }
              }
              D ||
                r.updateNode(N.id, {
                  parentId: void 0,
                  position: { x: N.position.x + T.position.x, y: N.position.y + T.position.y }
                })
            }
          }
        })
      },
      g = (_, v) => {
        console.log('onconnectstart: ', _, v)
      },
      p = (_) => {
        console.log('onconnect: ', _)
      }
    var x = qy(),
      C = X(x)
    Nd(C)
    var $ = z(C, 2)
    const m = Ne(() => ({ markerEnd: { type: _o.ArrowClosed, width: 20, height: 20 } }))
    return (
      Pc(
        $,
        ft({ nodeTypes: Iy }, Bi, {
          class: 'tinyflow-logo',
          isValidConnection: l,
          onconnectend: c,
          onconnectstart: g,
          onconnect: p,
          connectionRadius: 50,
          ondelete: d,
          onclick: (_) => {
            const v = _.target
            v.classList.contains('svelte-flow__edge-interaction') ||
              v.classList.contains('panel-content') ||
              v.closest('.panel-content') ||
              U(o, !1)
          },
          get defaultEdgeOptions() {
            return h(m)
          },
          $$events: {
            drop: s,
            dragover: i,
            edgeclick: () => {
              U(o, !0)
            }
          },
          children: (_, v) => {
            var b = Ky(),
              N = xe(b)
            Ic(N, {})
            var E = z(N, 2)
            Ac(E, {})
            var T = z(E, 2)
            Rc(T, {})
            var D = z(T, 2)
            {
              var V = (A) => {
                So(A, {
                  children: (O, R) => {
                    var S = Wy(),
                      M = z(X(S), 4),
                      k = X(M)
                    Pt(k, {
                      rows: 3,
                      placeholder: '请输入边条件',
                      style: 'width: 100%',
                      oninput: (P) => {}
                    }),
                      Z(M),
                      Z(S),
                      L(O, S)
                  },
                  $$slots: { default: !0 }
                })
              }
              ke(D, (A) => {
                h(o) && A(V)
              })
            }
            L(_, b)
          },
          $$slots: { default: !0 }
        })
      ),
      Z(x),
      L(e, x),
      ce({
        get onInit() {
          return n()
        },
        set onInit(_) {
          n(_), y()
        }
      })
    )
  }
  ie(Td, { onInit: {} }, [], [], !0)
  function Uy(e, t) {
    ue(t, !0)
    const n = w(t, 'options', 7),
      r = w(t, 'onInit', 7),
      { data: o } = n()
    return (
      Bi.init((o == null ? void 0 : o.nodes) || [], (o == null ? void 0 : o.edges) || []),
      Sr('tinyflow_options', n()),
      Nc(e, {
        fitView: !0,
        children: (i, s) => {
          Td(i, {
            get onInit() {
              return r()
            }
          })
        },
        $$slots: { default: !0 }
      }),
      ce({
        get options() {
          return n()
        },
        set options(i) {
          n(i), y()
        },
        get onInit() {
          return r()
        },
        set onInit(i) {
          r(i), y()
        }
      })
    )
  }
  customElements.define('tinyflow-component', ie(Uy, { options: {}, onInit: {} }, [], [], !1)),
    (We.Tinyflow = J2),
    Object.defineProperty(We, Symbol.toStringTag, { value: 'Module' })
})
//# sourceMappingURL=index.umd.js.map
