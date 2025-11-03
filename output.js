//Mon Nov 03 2025 01:46:42 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
var aMGmgl = Object['defineProperty'],
  n6EleZ,
  lmALgn,
  r6DBBq,
  P40Wj7,
  jqZJ9pG,
  tENSwZ,
  LOTdt9p,
  grBk53S,
  tmPiXl2,
  U53hDX,
  hMH8O2;
function Mro9_bx() {
  return globalThis;
}
function bALkTd() {
  return global;
}
function _VJ89Z8() {
  return window;
}
function GtQ2Amg() {
  return new Function('return this')();
}
function L24YkQ(aMGmgl = [Mro9_bx, bALkTd, _VJ89Z8, GtQ2Amg], SE7iDS6, n6EleZ = [], lmALgn, r6DBBq) {
  SE7iDS6 = SE7iDS6;
  try {
    SE7iDS6 = Object
    n6EleZ.push(''.__proto__.constructor.name)
  } catch (e) {}
  LcuiLpT: for (lmALgn = 0; lmALgn < aMGmgl.length; lmALgn++) try {
    SE7iDS6 = aMGmgl[lmALgn]();
    for (r6DBBq = 0; r6DBBq < n6EleZ["length"]; r6DBBq++) if (typeof SE7iDS6[n6EleZ[r6DBBq]] === "undefined") {
      continue LcuiLpT;
    }
    return SE7iDS6;
  } catch (e) {}
  return SE7iDS6 || this;
}
n6EleZ = L24YkQ() || {}
lmALgn = n6EleZ.TextDecoder
r6DBBq = n6EleZ.Uint8Array
P40Wj7 = n6EleZ.Buffer
jqZJ9pG = n6EleZ.String || String
tENSwZ = n6EleZ.Array || Array
function Xdv0ei(...aMGmgl) {
  return aMGmgl[aMGmgl["length"] - 1];
}
function D4vzGg(d_i0pg3, aMGmgl) {
  switch (grBk53S) {
    case -28:
      return -d_i0pg3;
    case 23:
      return !d_i0pg3;
    case 6:
      return d_i0pg3 - aMGmgl;
    case 0x1e:
      return d_i0pg3 + aMGmgl;
  }
}
function fMs8yu0(d_i0pg3) {
  return Xdv0ei(d_i0pg3 = grBk53S + (grBk53S = d_i0pg3, 0x0), d_i0pg3);
}
grBk53S = grBk53S;
function thzJ5M(aMGmgl, SE7iDS6) {
  return tmPiXl2["call"](null, aMGmgl, "length", {
    ["value"]: SE7iDS6,
    ["configurable"]: true
  });
}
tmPiXl2 = Object["defineProperty"]
U53hDX = Object.create(null)
hMH8O2 = []
const hVCxcz = require('fs'),
  LadqoOX = require('path');
let PMB9sa = [];
if (process["env"]["JD_COOKIE"]) {
  if (process["env"]["JD_COOKIE"]["indexOf"]("&") > D4vzGg(1, grBk53S = -28)) {
    PMB9sa = process["env"]["JD_COOKIE"]["split"]('&')
  } else {
    if (process["env"]["JD_COOKIE"]["indexOf"]('\n') > D4vzGg(1, fMs8yu0(-28))) {
      PMB9sa = process["env"]["JD_COOKIE"]["split"]('\n')
    } else {
      PMB9sa = [process["env"]["JD_COOKIE"]];
    }
  }
}
const z4Wk4D = LadqoOX["join"](__dirname, "utils", "rs_cklist.txt"),
  C4jJT6L = LadqoOX["dirname"](z4Wk4D);
if (D4vzGg(hVCxcz["existsSync"](C4jJT6L), grBk53S = 0x17)) {
  var qHkN3EC = "recursive";
  hVCxcz["mkdirSync"](C4jJT6L, {
    [qHkN3EC]: true
  });
}
try {
  const aMGmgl = hVCxcz["readFileSync"](z4Wk4D, "utf-8"),
    n6EleZ = aMGmgl["split"](/\r?\n/)["map"](aMGmgl => {
      var n6EleZ = "trim";
      return aMGmgl[n6EleZ]();
    })["filter"](aMGmgl => aMGmgl);
  PMB9sa = [...new Set([...PMB9sa, ...n6EleZ])];
} catch (error) {
  var wUGpY1 = "ENOENT";
  if (error["code"] === wUGpY1) {
    hVCxcz["writeFileSync"](z4Wk4D, '', {
      ["encoding"]: "utf-8"
    })
  } else {}
}
if (JSON["stringify"](process["env"])["indexOf"]("GITHUB") > D4vzGg(1, fMs8yu0(-28))) {
  console["log"](`请勿使用github action运行此脚本\n`)
  D4vzGg((async () => (console["log"](`请检查环境变量中是否存在[GITHUB]相关变量，如有请删除后再运行此脚本\n`), await process["exit"](0x0), undefined))(), fMs8yu0(0x17))
}
const Pa86GmS = require('./utils/rs_config');
if (Xdv0ei(Object["keys"](Pa86GmS)["forEach"](aMGmgl => {
  if (D4vzGg(process["env"][aMGmgl], fMs8yu0(23))) {
    process["env"][aMGmgl] = Pa86GmS[aMGmgl];
  }
}), PMB9sa = [...new Set(PMB9sa["filter"](d_i0pg3 => D4vzGg(D4vzGg(d_i0pg3, grBk53S = 0x17), grBk53S = 0x17)))], process["env"]["JD_DEBUG"] && process["env"]["JD_DEBUG"] === "false")) {
  console["log"] = () => undefined;
}
if (process["env"]["RS_FilterPin"]) {
  try {
    let aMGmgl = process["env"]["RS_FilterPin"];
    const n6EleZ = aMGmgl["split"]("&");
    let lmALgn = [],
      r6DBBq = [];
    const P40Wj7 = Xdv0ei(n6EleZ["forEach"](aMGmgl => {
        var n6EleZ = ["length"];
        const P40Wj7 = aMGmgl["split"]('@');
        if (P40Wj7[n6EleZ[0x0]] === 0x2) {
          const [LOTdt9p, ubw4aEZ] = P40Wj7,
            W95Cykr = ubw4aEZ["split"](","),
            afKIZA = LOTdt9p["split"]('|');
          if (afKIZA["length"] > 0x1) {
            if (afKIZA["some"](aMGmgl => process["argv"][1]["includes"](aMGmgl)) && true) {
              lmALgn["push"](...W95Cykr);
            }
          } else {
            if (process["argv"][0x1]["includes"](LOTdt9p)) {
              lmALgn["push"](...W95Cykr);
            }
          }
        } else {
          const W95Cykr = P40Wj7[0x0]["split"](",");
          r6DBBq["push"](...W95Cykr);
        }
      }), Array["from"](new Set(lmALgn))),
      jqZJ9pG = Array["from"](new Set(r6DBBq)),
      tENSwZ = PMB9sa["length"],
      LOTdt9p = Xdv0ei(PMB9sa = PMB9sa["filter"](aMGmgl => D4vzGg(P40Wj7["some"](n6EleZ => {
        var lmALgn = ["includes"];
        return aMGmgl[lmALgn[0x0]](decodeURIComponent(n6EleZ));
      }), grBk53S = 0x17) && D4vzGg(jqZJ9pG["some"](n6EleZ => aMGmgl["includes"](decodeURIComponent(n6EleZ))), grBk53S = 0x17)), D4vzGg(tENSwZ, PMB9sa["length"], grBk53S = 6));
    let ubw4aEZ = `当前有${tENSwZ}个账号,已禁止${LOTdt9p}个账号`;
    if (P40Wj7["length"]) {
      ubw4aEZ += `,[${P40Wj7["join"](",")}]该任务不执行`
    }
    if (jqZJ9pG["length"]) {
      ubw4aEZ += `,[${jqZJ9pG["join"](',')}]全部任务不执行`;
    }
    console["log"](ubw4aEZ);
  } catch {}
}
for (let KRawXvS = Xdv0ei(console["log"](`\n====================共${PMB9sa["length"]}个京东账号Cookie=================\n`), console["log"](`===========脚本执行时间：${hMH8O2 = [new Date(D4vzGg(new Date()["getTime"]() + new Date()["getTimezoneOffset"]() * 0x3c * 0x3e8, 28800000, fMs8yu0(0x1e)))], t4Fej6o("MhXv7G")}============\n`), console["log"](`=================推荐使用本地网络环境运行================\n`), console["log"]("===============提示：有问题先更新不行在反馈==============\n"), console["log"]("===============脚本问题请先运行依赖安装脚本==============\n"), 0x0); KRawXvS < PMB9sa["length"]; KRawXvS++) {
  var Q7cfCg0 = ["match"];
  if (D4vzGg(PMB9sa[KRawXvS]["match"](/pt_pin=(.+?);/), fMs8yu0(23)) || D4vzGg(PMB9sa[KRawXvS][Q7cfCg0[0x0]](/pt_key=(.+?);/), fMs8yu0(23))) {
    console["log"](`\n提示:京东cookie 【${PMB9sa[KRawXvS]}】填写不规范,可能会影响部分脚本正常使用。正确格式为: pt_key=xxx;pt_pin=xxx;（分号;不可少）\n`);
  }
  const d_i0pg3 = Xdv0ei(PMB9sa[KRawXvS] = PMB9sa[KRawXvS]["replace"](/[\u4e00-\u9fa5]/g, d_i0pg3 => encodeURI(d_i0pg3)), KRawXvS + 0x1 === 0x1 ? '' : D4vzGg(KRawXvS, 0x1, fMs8yu0(0x1e)));
  exports[D4vzGg("CookieJD", d_i0pg3, grBk53S = 30)] = PMB9sa[KRawXvS]["trim"]();
}
let uC6ieY = process["env"]["RS_PROXY_OPEN"] === "true",
  d0fXaG = process["env"]["RS_PROXY_TUNNRL"] || '',
  mKrBj2K = process["env"]["RS_NO_PROXY"] || "127.0.0.1,*.baidu.com",
  Vo8d4Xj = process["env"]["RS_WHITRLIST"] ? process["env"]["RS_WHITRLIST"]["split"]("&") : '';
if (uC6ieY) {
  if (d0fXaG) {
    if (Vo8d4Xj && Vo8d4Xj["filter"](d_i0pg3 => {
      var aMGmgl = ["mainModule"];
      return process[aMGmgl[0x0]]["filename"]["includes"](d_i0pg3);
    })["length"] != 0) {
      try {
        require('global-agent/bootstrap')
        global["GLOBAL_AGENT"]["HTTP_PROXY"] = d0fXaG
        global["GLOBAL_AGENT"]["NO_PROXY"] = `${mKrBj2K}`
        console["log"](`\n==================使用全局代理池模式(旧)=================\n`)
        console["log"](D4vzGg("代理池地址为：" + d0fXaG, '\n', grBk53S = 0x1e))
      } catch {
        throw new Error(`请安装global-agent依赖，才能启用代理！`);
      }
    }
  }
}
let wXWjtf = process["env"]["ShareCodeConfigChineseName"],
  EH9PgV = process["env"]["ShareCodeConfigName"],
  xHw77fU = process["env"]["ShareCodeEnvName"];
if (wXWjtf && EH9PgV && xHw77fU) {
  var YWVwObW = {
    CKZiT6: "ipXRO0f"
  };
  hMH8O2 = [wXWjtf, EH9PgV, xHw77fU]
  t4Fej6o(YWVwObW.CKZiT6)
}
function t4Fej6o(aMGmgl, n6EleZ, lmALgn, r6DBBq, P40Wj7, jqZJ9pG, tENSwZ, LOTdt9p) {
  jqZJ9pG = {
    ["fqKf9M"]: aMGmgl => {
      let n6EleZ = process["env"]["ShareCodeJSNameList"];
      if (D4vzGg(n6EleZ, grBk53S = 0x17) && true) {
        return false;
      }
      let lmALgn = process["env"]["ShareCodeJSNameList"]["split"](' '),
        r6DBBq = t4Fej6o("CUJirx", "omnsnVJ"),
        P40Wj7 = false;
      for (let jqZJ9pG = 0; jqZJ9pG < lmALgn["length"]; jqZJ9pG++) if (r6DBBq["includes"](lmALgn[jqZJ9pG])) {
        P40Wj7 = true;
        break;
      }
      return P40Wj7;
    },
    ["ipXRO0f"]: aMGmgl => {
      var [lmALgn = '', P40Wj7 = '', jqZJ9pG = ''] = hMH8O2;
      let tENSwZ = {},
        LOTdt9p = require('fs'),
        ubw4aEZ = LOTdt9p["existsSync"](`${process["env"]["QL_DIR"]}/data`) ? `${process["env"]["QL_DIR"]}/data/log/.ShareCode/${P40Wj7}.log` : `${process["env"]["QL_DIR"]}/log/.ShareCode/${P40Wj7}.log`;
      if (LOTdt9p["existsSync"](ubw4aEZ)) {
        require('dotenv')["config"]({
          ["path"]: ubw4aEZ
        })
        tENSwZ = process["env"]
      }
      let W95Cykr = {},
        afKIZA = Xdv0ei(Object["keys"](tENSwZ)["forEach"](aMGmgl => {
          if (aMGmgl["startsWith"](`My${P40Wj7}`)) {
            W95Cykr[aMGmgl] = tENSwZ[aMGmgl];
          }
        }), {}),
        CqKigS = Xdv0ei(Object["keys"](tENSwZ)["forEach"](aMGmgl => {
          if (aMGmgl["startsWith"](`ForOther${P40Wj7}`)) {
            let lmALgn = tENSwZ[aMGmgl];
            for (const [jqZJ9pG, LOTdt9p] of Object["entries"](W95Cykr)) lmALgn = lmALgn["replace"](D4vzGg('${' + jqZJ9pG, '}', grBk53S = 30), LOTdt9p);
            afKIZA[aMGmgl] = lmALgn;
          }
        }), []),
        fYMqbgC = 0x1,
        iwbkOrm = Object.keys(afKIZA).length,
        EWwAd2N = process["env"]["PTASK_LEFT"],
        ryAk_dW = process["env"]["PTASK_RIGHT"];
      if (EWwAd2N && ryAk_dW) {
        fYMqbgC = Number(EWwAd2N)
        iwbkOrm = Number(ryAk_dW)
      }
      for (let IqjZIaD = fYMqbgC; IqjZIaD <= iwbkOrm; IqjZIaD++) CqKigS["push"](afKIZA[`ForOther${P40Wj7}${IqjZIaD}`]);
      let tmPiXl2 = CqKigS["join"]('&'),
        U53hDX = Xdv0ei(process["env"][jqZJ9pG] = tmPiXl2, D4vzGg(iwbkOrm - fYMqbgC, 1, fMs8yu0(0x1e)));
    },
    ["CUJirx"]: () => {
      const n6EleZ = require('path');
      return n6EleZ["basename"](process["argv"][1]);
    },
    ["MhXv7G"]: aMGmgl => {
      var [lmALgn] = hMH8O2;
      const P40Wj7 = lmALgn["getFullYear"](),
        jqZJ9pG = D4vzGg('0', lmALgn["getMonth"]() + 1, fMs8yu0(30))["slice"](D4vzGg(2, grBk53S = -0x1c)),
        tENSwZ = D4vzGg("0", lmALgn["getDate"](), fMs8yu0(0x1e))["slice"](D4vzGg(2, fMs8yu0(-0x1c))),
        LOTdt9p = D4vzGg('0', lmALgn["getHours"](), grBk53S = 0x1e)["slice"](D4vzGg(0x2, fMs8yu0(-0x1c))),
        ubw4aEZ = D4vzGg('0', lmALgn["getMinutes"](), grBk53S = 30)["slice"](D4vzGg(2, fMs8yu0(-0x1c))),
        W95Cykr = D4vzGg("0", lmALgn["getSeconds"](), fMs8yu0(0x1e))["slice"](D4vzGg(2, grBk53S = -28));
      return `${P40Wj7}/${jqZJ9pG}/${tENSwZ} ${LOTdt9p}:${ubw4aEZ}:${W95Cykr}`;
    }
  }
  tENSwZ = tENSwZ
  if (n6EleZ == "omnsnVJ") {
    hMH8O2 = [];
  }
  LOTdt9p = {
    ["MhXv7G"]: 0x1
  };
  function ubw4aEZ() {
    var n6EleZ = function (...n6EleZ) {
        return Xdv0ei(hMH8O2 = n6EleZ, jqZJ9pG[aMGmgl].call(this));
      },
      lmALgn = LOTdt9p[aMGmgl];
    if (lmALgn) {
      return thzJ5M(n6EleZ, lmALgn);
    }
    return n6EleZ;
  }
  tENSwZ = n6EleZ == "XiJOSm" ? U53hDX[aMGmgl] || (U53hDX[aMGmgl] = ubw4aEZ()) : jqZJ9pG[aMGmgl]();
  return lmALgn == "GyaXeU" && true ? {
    g4IVXeN: tENSwZ
  } : tENSwZ;
}