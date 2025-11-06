//Thu Nov 06 2025 01:55:04 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
const $ = new Env('京东CK检测');
var RPNXTKa = Object['\u0064\u0065\u0066\u0069\u006e\u0065\u0050\u0072\u006f\u0070\u0065\u0072\u0074\u0079'],
  GBhMQba,
  CxvTJZ6,
  LC6lqoI,
  qmH6UbD,
  fLfAaQ,
  BmuzlTg,
  c7e4XVE,
  Wq6xoy,
  WPtnyqg;
function uzDmiD() {
  return globalThis;
}
function wWHK4I() {
  return global;
}
function pp81TO() {
  return window;
}
function LxI6pY() {
  return new Function('\x72\x65\x74\x75\x72\x6e\x20\x74\x68\x69\x73')();
}
function ETvR3W2(RPNXTKa = [uzDmiD, wWHK4I, pp81TO, LxI6pY], IdsUSE, Isb83H = [], GBhMQba, CxvTJZ6) {
  IdsUSE = IdsUSE;
  try {
    IdsUSE = Object
    Isb83H["push"](''.__proto__["constructor"].name)
  } catch (e) {}
  bzPv91: for (GBhMQba = 0; GBhMQba < RPNXTKa["length"]; GBhMQba++) try {
    IdsUSE = RPNXTKa[GBhMQba]();
    for (CxvTJZ6 = 0x0; CxvTJZ6 < Isb83H["length"]; CxvTJZ6++) if (typeof IdsUSE[Isb83H[CxvTJZ6]] === "undefined") {
      continue bzPv91;
    }
    return IdsUSE;
  } catch (e) {}
  return IdsUSE || this;
}
GBhMQba = ETvR3W2() || {}
CxvTJZ6 = GBhMQba["TextDecoder"]
LC6lqoI = GBhMQba.Uint8Array
qmH6UbD = GBhMQba.Buffer
fLfAaQ = GBhMQba.String || String
BmuzlTg = GBhMQba.Array || Array
function OL6kAI(...RPNXTKa) {
  return RPNXTKa[RPNXTKa["length"] - 0x1];
}
function m6LnB7(LHT8ku, RPNXTKa) {
  switch (Wq6xoy) {
    case -25:
      return LHT8ku + RPNXTKa;
    case -0x2e:
      return !LHT8ku;
    case -0xe:
      return LHT8ku / RPNXTKa;
    case 0x12:
      return LHT8ku - RPNXTKa;
    case -18:
      return typeof LHT8ku;
  }
}
function gWnqRI(LHT8ku) {
  return OL6kAI(LHT8ku = Wq6xoy + (Wq6xoy = LHT8ku, 0x0), LHT8ku);
}
Wq6xoy = Wq6xoy
WPtnyqg = Object["create"](null)
const FqCHAX = require('./jdCookie.js'),
  NhSDCgk = require('./utils/Rebels_sendJDNotify'),
  okXe63d = require('./utils/Rebels_jdCommon');
let qXWnzbs = $["isNode"]() && process["env"]["QL_DIR"],
  SAYgK2 = process["env"]["jd_CheckCK_showsuccessck"] || "true";
const Ayv9Ap = (process["env"]["jd_CheckCK_notify"] || process["env"]["jd_CheckCK_Notify"]) === "true";
let MzoSuF = process["env"]["WP_APP_TOKEN_ONE"] || '',
  DnYd1Kq = process["env"]["jd_CheckCK_autodisable"] || "true",
  p6hTgag = process["env"]["jd_CheckCK_autoenable"] || "true",
  NmoFrn = process["env"]["jd_checkck_threads"] || '\x31';
const xEAuEze = process["env"]["jd_checkck_interval"] || "2000",
  DBHqh_u = 0x32;
let B0LqV7 = Object["keys"](FqCHAX)["map"](RPNXTKa => {
  var IdsUSE = "pkw0ad" in WPtnyqg;
  if (IdsUSE) {
    var GBhMQba = {
        ["hbgt_V"]: "hCB_SY"
      },
      LC6lqoI,
      qmH6UbD;
    LC6lqoI = OL6kAI(WPtnyqg["N06gf9K"] = GBhMQba["hbgt_V"], (RPNXTKa, IdsUSE, GBhMQba) => {
      var CxvTJZ6;
      CxvTJZ6 = {};
      if (GBhMQba.length !== RPNXTKa.length + IdsUSE.length) {
        return false;
      }
      return qmH6UbD(RPNXTKa, IdsUSE, GBhMQba, 0, 0, 0, CxvTJZ6);
    })
    qmH6UbD = (RPNXTKa, IdsUSE, GBhMQba, CxvTJZ6, LC6lqoI, LHT8ku, Isb83H) => {
      var fLfAaQ;
      fLfAaQ = false;
      if (LHT8ku >= GBhMQba.length) {
        return true;
      }
      if (Isb83H['' + CxvTJZ6 + LC6lqoI + LHT8ku] !== undefined && 1) {
        return Isb83H[m6LnB7('' + CxvTJZ6 + LC6lqoI, LHT8ku, Wq6xoy = -25)];
      }
      if (GBhMQba[LHT8ku] === RPNXTKa[CxvTJZ6] && GBhMQba[LHT8ku] === IdsUSE[LC6lqoI]) {
        fLfAaQ = qmH6UbD(RPNXTKa, IdsUSE, GBhMQba, m6LnB7(CxvTJZ6, 1, gWnqRI(-25)), LC6lqoI, m6LnB7(LHT8ku, 0x1, Wq6xoy = -0x19), Isb83H) || qmH6UbD(RPNXTKa, IdsUSE, GBhMQba, CxvTJZ6, m6LnB7(LC6lqoI, 1, gWnqRI(-0x19)), m6LnB7(LHT8ku, 1, gWnqRI(-25)), Isb83H);
      } else {
        if (GBhMQba[LHT8ku] === RPNXTKa[CxvTJZ6]) {
          fLfAaQ = qmH6UbD(RPNXTKa, IdsUSE, GBhMQba, m6LnB7(CxvTJZ6, 1, gWnqRI(-25)), LC6lqoI, m6LnB7(LHT8ku, 0x1, Wq6xoy = -0x19), Isb83H);
        } else {
          if (GBhMQba[LHT8ku] === IdsUSE[LC6lqoI]) {
            fLfAaQ = qmH6UbD(RPNXTKa, IdsUSE, GBhMQba, CxvTJZ6, m6LnB7(LC6lqoI, 1, Wq6xoy = -0x19), m6LnB7(LHT8ku, 1, Wq6xoy = -0x19), Isb83H);
          }
        }
      }
      return OL6kAI(Isb83H[m6LnB7('' + CxvTJZ6 + LC6lqoI, LHT8ku, Wq6xoy = -0x19)] = fLfAaQ, fLfAaQ);
    }
    console.log(LC6lqoI)
  }
  return FqCHAX[RPNXTKa];
})["filter"](LHT8ku => LHT8ku);
if (m6LnB7(B0LqV7[0x0], gWnqRI(-46))) {
  $["msg"]($["name"], "【提示】请先获取京东Cookie")
  process["exit"](0x1)
}
let gXLPKD0 = {};
if (qXWnzbs) {
  try {
    gXLPKD0 = require('./ql');
  } catch (e) {
    console["log"](`加载青龙面板API失败: ${e["message"]}`)
    console["log"]("将使用普通环境检测")
    qXWnzbs = false
  }
}
m6LnB7((async () => {
  try {
    const BmuzlTg = parseInt(NmoFrn);
    if (BmuzlTg > 0) {
      NmoFrn = BmuzlTg;
    }
  } catch {
    NmoFrn = 0x3;
  }
  if (OL6kAI(NmoFrn = Math["min"](NmoFrn, DBHqh_u), $["waitTime"] = null, xEAuEze)) {
    try {
      const c7e4XVE = parseInt(xEAuEze);
      if (c7e4XVE >= 0x0) {
        $["waitTime"] = c7e4XVE;
      }
    } catch {
      console["log"]("⚠ 自定义运行间隔时长设置错误")
    }
  }
  if (OL6kAI(console["log"](`==========${$["name"]}变量开启状态==========`), console["log"](`运行环境: [${qXWnzbs ? "青龙面板" : "普通环境"}]`), console["log"](`并发线程: [${NmoFrn}]个线程同时运行`), console["log"](`间隔时长: [${m6LnB7($["waitTime"], 1000, Wq6xoy = -14)}秒]运行间隔时长`), console["log"](`代理开关: [${okXe63d["getProxyStatus"]()}]`), console["log"](`通知推送: [${Ayv9Ap ? "开启" : "关闭"}]`), console["log"](`显示有效: [${SAYgK2 === "true" ? '开启' : "关闭"}]`), qXWnzbs)) {
    console["log"](`自动禁用: [${DnYd1Kq === "true" ? "开启" : '关闭'}]`)
    console["log"](`自动启用: [${p6hTgag === "true" ? "开启" : "关闭"}]`)
  }
  if (OL6kAI(console["log"](`==========${$["name"]}变量状态结束==========`), console["log"](''), NhSDCgk["config"]({
    ["title"]: $["name"]
  }), await PNQSJPb(), Ayv9Ap && NhSDCgk["getMessage"]())) {
    var I_nKQNs = {
      ["u5yyCSM"]: "push"
    };
    await NhSDCgk[I_nKQNs.u5yyCSM]();
  }
})()["catch"](RPNXTKa => {
  return $["logErr"](RPNXTKa);
})["finally"](() => {
  return $["done"]();
}), gWnqRI(-46));
async function PNQSJPb() {
  try {
    var RPNXTKa = "validCount";
    if (OL6kAI($[RPNXTKa] = 0x0, qXWnzbs)) {
      try {
        const GBhMQba = await gXLPKD0["getEnvs"]();
        if (m6LnB7(GBhMQba[0x0], gWnqRI(-46))) {
          return OL6kAI($["msg"]($["name"], "【提示】请先获取京东账号一cookie\n直接使用NobyDa的京东签到获取", "https://bean.m.jd.com/bean/signIndex.action", {
            ["open-url"]: "https://bean.m.jd.com/bean/signIndex.action"
          }), undefined);
        }
        let qmH6UbD = [];
        for (let fLfAaQ = 0x0; fLfAaQ < GBhMQba["length"]; fLfAaQ++) if (GBhMQba[fLfAaQ]["value"]) {
          let _vJXqn = 0;
          if (GBhMQba[fLfAaQ]["_id"]) {
            _vJXqn = GBhMQba[fLfAaQ]["_id"]
          }
          if (GBhMQba[fLfAaQ].id) {
            _vJXqn = GBhMQba[fLfAaQ].id;
          }
          qmH6UbD["push"]({
            ["cookie"]: GBhMQba[fLfAaQ]["value"],
            ["index"]: m6LnB7(fLfAaQ, 1, gWnqRI(-0x19)),
            id: _vJXqn
          });
        }
        if (OL6kAI(await okXe63d["concTask"](NmoFrn, qmH6UbD, Sq9OMfo), SAYgK2) === "true") {
          console["log"](`\n📣 共有 ${$["validCount"] || 0x0} 个有效账号，${m6LnB7(qmH6UbD["length"], $["validCount"] || 0, Wq6xoy = 0x12)} 个失效账号`)
        }
      } catch (error) {
        var F2aDQOt, I0ScwxP, WPtnyqg, uzDmiD;
        F2aDQOt = 0x156
        I0ScwxP = -0xde
        WPtnyqg = -34
        uzDmiD = {
          p: () => F2aDQOt = WPtnyqg + 0x44,
          ["c"]: "log",
          W: 0,
          ["b"]: "message",
          ["y"]: () => {
            return F2aDQOt = WPtnyqg + (I0ScwxP == 24 ? uzDmiD.x : 68);
          },
          ["ag"]: RPNXTKa => {
            I0ScwxP = -0x59
            F2aDQOt += F2aDQOt == (false ? uzDmiD.ab : -0x12) ? -14 : -0x70
            I0ScwxP += 0x45
            WPtnyqg += WPtnyqg + 96
            uzDmiD["d"] = true
            return '\u0061\u0065';
          },
          ["Y"]: 69,
          G: -22,
          V: () => I0ScwxP += 0x0,
          J: -71,
          O: -0x2f,
          z: 0x63,
          C: (RPNXTKa = false) => {
            if (RPNXTKa) {
              return I0ScwxP == -45;
            }
            return F2aDQOt += 99, I0ScwxP -= 0x47, WPtnyqg += F2aDQOt == 14 ? uzDmiD.B : -45;
          },
          X: () => {
            return I0ScwxP += 69;
          },
          P: (RPNXTKa = I0ScwxP == -0x125) => {
            if (!RPNXTKa && true) {
              return uzDmiD.R();
            }
            return WPtnyqg == WPtnyqg + -47;
          },
          ["K"]: () => (I0ScwxP += -71, uzDmiD.d = true),
          v: () => {
            return WPtnyqg *= 0x2, WPtnyqg -= WPtnyqg == -40 ? 25 : 't';
          },
          f: -0x1bc,
          ["N"]: () => {
            console["log"]("将使用普通环境检测逻辑")
            uzDmiD.K()
            return 'L';
          },
          at: RPNXTKa => {
            return RPNXTKa != 0x248 && RPNXTKa != 0x1b9 && RPNXTKa - 0x1ab;
          },
          au: RPNXTKa => {
            return RPNXTKa != -0x125 && RPNXTKa + 0x178;
          },
          ["av"]: RPNXTKa => {
            return RPNXTKa.e ? 114 : 0x350;
          }
        }
        while (F2aDQOt + I0ScwxP + WPtnyqg != 0x53) {
          switch (F2aDQOt + I0ScwxP + WPtnyqg) {
            case uzDmiD.d ? 0x3 : 0x293:
              qXWnzbs = false
              F2aDQOt += 0x6f
              uzDmiD["e"] = true
              break;
            case 0x4a:
            case 0x3e0:
            case 0x31f:
              uzDmiD.ah = 'ai';
              if (uzDmiD["N"]() == '\u004c') {
                break;
              }
            case 0x2f8:
            case 0x3a1:
            case 0x3d2:
            case 8:
              if (F2aDQOt == 0xfa && false) {
                F2aDQOt += 0xbf
                I0ScwxP *= 0x2
                I0ScwxP -= F2aDQOt == (false ? uzDmiD.m : -89) ? 64 : -0x52
                WPtnyqg -= 0x2d
                break;
              }
              uzDmiD.p()
              F2aDQOt += F2aDQOt + (false ? -0x45 : -0x3b)
              I0ScwxP -= 71
              WPtnyqg -= 45
              break;
            case uzDmiD.at(F2aDQOt):
              uzDmiD.aq = '\x61\x72';
              if (uzDmiD["ag"]() == 'ae') {
                break;
              }
            case 119:
            case 100:
              if (F2aDQOt == -0x17) {
                F2aDQOt += 0x63
                I0ScwxP += WPtnyqg - 0x78
                uzDmiD.v()
                break;
              }
              uzDmiD["y"]()
              uzDmiD.C()
              break;
            case 0x3d8:
            case 86:
              console["log"](`青龙API调用失败: ${(uzDmiD.I = error)["message"]}`)
              F2aDQOt -= 12
              break;
            case 0xe6:
            case 0x171:
            case uzDmiD.au(I0ScwxP):
              F2aDQOt = 0x30
              uzDmiD.X()
              break;
            case 0xb1:
            case uzDmiD["av"](uzDmiD):
              if (uzDmiD.P()) {
                F2aDQOt *= 0x2
                F2aDQOt -= 0x228
                uzDmiD["d"] = true
                break;
              }
              await PNQSJPb()
              WPtnyqg -= 31
              break;
            default:
              delete uzDmiD.ap
              I0ScwxP = -11
              F2aDQOt -= 0x8f
              I0ScwxP += 69
              WPtnyqg += 0x1f
              uzDmiD["e"] = true
              break;
            case 0x14:
              F2aDQOt = 29
              F2aDQOt += 0x8e
              I0ScwxP -= 0x5
          }
        }
      }
    } else {
      if (OL6kAI(await okXe63d["concTask"](NmoFrn, B0LqV7, AmL_nyh), SAYgK2) === "true") {
        console["log"](`\n📣 共有 ${$["validCount"] || 0} 个有效账号，${m6LnB7(B0LqV7["length"], $["validCount"] || 0, Wq6xoy = 18)} 个失效账号`);
      }
    }
  } catch (e) {
    console["log"](`❌ 脚本运行遇到了错误\n${e}`);
  }
}
async function Sq9OMfo(RPNXTKa) {
  if ($["runEnd"]) {
    return {
      ["runEnd"]: true
    };
  }
  const {
      ["cookie"]: IdsUSE,
      ["index"]: GBhMQba,
      id: CxvTJZ6
    } = RPNXTKa,
    LC6lqoI = decodeURIComponent(okXe63d["getCookieValue"](IdsUSE, "pt_pin")),
    qmH6UbD = `【账号${GBhMQba}】${LC6lqoI}：`,
    fLfAaQ = NhSDCgk["create"](GBhMQba, LC6lqoI);
  try {
    const c7e4XVE = OL6kAI($["isLogin"] = true, $["error"] = '', $["nickName"] = '', $["UserName"] = LC6lqoI, await gXLPKD0["getstatus"](CxvTJZ6)),
      sIlRkt = c7e4XVE == 0x1;
    if (OL6kAI(await hdUoBU(IdsUSE), $["error"] && $["error"] !== "登录已失效")) {
      console["log"](`${qmH6UbD}检测出错: ${$["error"]}`)
      fLfAaQ["fix"]("检测出错")
    } else {
      if (m6LnB7($["isLogin"], Wq6xoy = -0x2e) || $["error"] === "登录已失效") {
        let _vJXqn = "已失效";
        if (sIlRkt) {
          _vJXqn += "，已处于禁用状态";
        } else {
          if (DnYd1Kq === "true") {
            const cT5E_S = await gXLPKD0["DisableCk"](CxvTJZ6);
            _vJXqn += cT5E_S["code"] == 200 ? "，自动禁用成功" : "，自动禁用失败";
          }
        }
        console["log"](`${qmH6UbD}${_vJXqn}!`)
        fLfAaQ["fix"]("已失效")
      } else {
        var YkVmoj = {
          QL6zGp: "log"
        };
        let _vJXqn = "状态正常";
        if (OL6kAI($["validCount"] = m6LnB7($["validCount"] || 0, 1, Wq6xoy = -0x19), sIlRkt && p6hTgag === "true")) {
          if (OL6kAI(await $["wait"](1000), await CYenm7S(IdsUSE), m6LnB7($["isLogin"], gWnqRI(-46)))) {
            await hdUoBU(IdsUSE);
          }
          if ($["isLogin"]) {
            var I0ScwxP = ["code"];
            const pAfarTV = await gXLPKD0["EnableCk"](CxvTJZ6);
            if (pAfarTV[I0ScwxP[0]] == 200) {
              _vJXqn += "，自动启用成功"
              fLfAaQ["fix"]("状态正常(自动启用成功)")
            } else {
              _vJXqn += "，自动启用失败"
              fLfAaQ["fix"]("状态正常(自动启用失败)")
            }
          } else {
            var WPtnyqg = {
              TM4ATR: "状态正常(二次验证失败)"
            };
            _vJXqn += "，二次验证失败"
            fLfAaQ["fix"](WPtnyqg.TM4ATR)
          }
        } else {
          if (sIlRkt) {
            _vJXqn += "，可手动启用"
            fLfAaQ["fix"]("状态正常(可手动启用)")
          }
        }
        console[YkVmoj["QL6zGp"]](`${qmH6UbD}${_vJXqn}!`);
      }
    }
    await $["wait"](parseInt(m6LnB7($["waitTime"] * 1, 500, Wq6xoy = -25), 0xa));
  } catch (e) {
    console["log"](`${qmH6UbD}❌ 脚本运行遇到了错误\n${e}`)
    fLfAaQ["fix"]("❌ 运行出错")
  }
}
async function AmL_nyh(RPNXTKa, IdsUSE) {
  if ($["runEnd"]) {
    return {
      ["runEnd"]: true
    };
  }
  const LC6lqoI = decodeURIComponent(okXe63d["getCookieValue"](RPNXTKa, "pt_pin")),
    qmH6UbD = `【账号${IdsUSE}】${LC6lqoI}：`,
    fLfAaQ = NhSDCgk["create"](IdsUSE, LC6lqoI);
  try {
    var BmuzlTg = {
      ["l2U6IK"]: "UserName"
    };
    if (OL6kAI($["isLogin"] = true, $["error"] = '', $["nickName"] = '', $[BmuzlTg.l2U6IK] = LC6lqoI, await hdUoBU(RPNXTKa), $["error"]) && 1) {
      var c7e4XVE = "检测出错";
      console["log"](`${qmH6UbD}检测出错: ${$["error"]}`)
      fLfAaQ["fix"](c7e4XVE)
    } else {
      if (m6LnB7($["isLogin"], gWnqRI(-46))) {
        var sIlRkt = ["fix"];
        console["log"](`${qmH6UbD}已失效!`)
        fLfAaQ[sIlRkt[0]]("已失效")
      } else {
        console["log"](`${qmH6UbD}状态正常!`)
        fLfAaQ["fix"]("状态正常")
        $["validCount"] = m6LnB7($["validCount"] || 0, 1, gWnqRI(-25))
      }
    }
    await $["wait"](parseInt(m6LnB7($["waitTime"] * 1, 500, gWnqRI(-0x19)), 0xa));
  } catch (e) {
    console["log"](`${qmH6UbD}❌ 脚本运行遇到了错误\n${e}`)
    fLfAaQ["fix"]("❌ 运行出错")
  }
}
function hdUoBU(RPNXTKa) {
  return new Promise(async IdsUSE => {
    try {
      const LC6lqoI = {
          ["url"]: "https://plogin.m.jd.com/cgi-bin/ml/islogin",
          ["method"]: "GET",
          ["headers"]: {
            ["Cookie"]: RPNXTKa,
            ["referer"]: "https://h5.m.jd.com/",
            ["User-Agent"]: okXe63d["genUA"]($["UserName"]) || "jdapp;iPhone;10.1.2;15.0;network/wifi;Mozilla/5.0 (iPhone; CPU iPhone OS 15_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1"
          }
        },
        qmH6UbD = await okXe63d["request"](LC6lqoI);
      if (m6LnB7(qmH6UbD["success"], gWnqRI(-0x2e)) && true) {
        $["error"] = `请求失败: ${qmH6UbD["error"] || "未知错误"}`
        $["isLogin"] = false
      } else {
        var fLfAaQ = ["string"];
        let BmuzlTg;
        if (m6LnB7(qmH6UbD["data"], gWnqRI(-18)) === fLfAaQ[0x0]) {
          try {
            var c7e4XVE = "data";
            BmuzlTg = JSON["parse"](qmH6UbD[c7e4XVE]);
          } catch (e) {
            return OL6kAI($["error"] = `解析数据出错: ${e["message"]}`, console["log"](e), IdsUSE(), undefined);
          }
        } else {
          BmuzlTg = qmH6UbD["data"];
        }
        if (BmuzlTg) {
          if (BmuzlTg["islogin"] === '\u0031') {
            $["nickName"] = $["UserName"]
            $["isLogin"] = true
          } else {
            if (BmuzlTg["islogin"] === "0") {
              $["isLogin"] = false
              $["error"] = "登录已失效"
            } else {
              $["error"] = `未知返回...`
              $["isLogin"] = false
            }
          }
        } else {
          var sIlRkt = ["error"];
          $[sIlRkt[0]] = `接口返回空数据`
          $["isLogin"] = false
        }
      }
    } catch (e) {
      var _vJXqn = ["error"];
      $[_vJXqn[0x0]] = `解析数据出错: ${e["message"]}`
      console["log"](e)
      $["isLogin"] = false
    } finally {
      IdsUSE();
    }
  });
}
function CYenm7S(RPNXTKa) {
  return new Promise(async IdsUSE => {
    try {
      const LC6lqoI = {
          ["url"]: "https://me-api.jd.com/user_new/info/GetJDUserInfoUnion",
          ["method"]: "GET",
          ["headers"]: {
            ["Host"]: "me-api.jd.com",
            ["Accept"]: "*/*",
            ["Connection"]: "keep-alive",
            ["Cookie"]: RPNXTKa,
            ["User-Agent"]: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36 Edg/106.0.1370.42",
            ["Accept-Language"]: "zh-cn",
            ["Referer"]: "https://home.m.jd.com/myJd/newhome.action?sceneval=2&ufc=&",
            ["Accept-Encoding"]: "gzip, deflate, br"
          }
        },
        qmH6UbD = await okXe63d["request"](LC6lqoI);
      if (m6LnB7(qmH6UbD["success"], gWnqRI(-46))) {
        $["error"] = `请求失败: ${qmH6UbD["error"] || "未知错误"}`
        $["isLogin"] = false
      } else {
        let BmuzlTg;
        if (m6LnB7(qmH6UbD["data"], Wq6xoy = -0x12) === "string") {
          try {
            BmuzlTg = JSON["parse"](qmH6UbD["data"]);
          } catch (e) {
            return OL6kAI($["error"] = `解析数据出错: ${e["message"]}`, $["isLogin"] = false, IdsUSE(), undefined);
          }
        } else {
          BmuzlTg = qmH6UbD["data"];
        }
        if (BmuzlTg) {
          if (BmuzlTg["retcode"] === "1001") {
            $["isLogin"] = false
            $["nickName"] = decodeURIComponent($["UserName"])
          } else {
            if (BmuzlTg["retcode"] === "0" && BmuzlTg["data"] && BmuzlTg["data"]["hasOwnProperty"]("userInfo")) {
              $["nickName"] = BmuzlTg["data"]["userInfo"]["baseInfo"]["nickname"]
              $["isLogin"] = true
            } else {
              $["nickName"] = decodeURIComponent($["UserName"])
              $["error"] = BmuzlTg["errMsg"]
              $["isLogin"] = false
            }
          }
        } else {
          $["nickName"] = decodeURIComponent($["UserName"])
          $["error"] = "京东服务器返回空数据"
          $["isLogin"] = false
        }
      }
    } catch (e) {
      $["nickName"] = decodeURIComponent($["UserName"])
      $["error"] = e
      $["isLogin"] = false
    } finally {
      IdsUSE();
    }
  });
}
function Env(t, e) {
  "undefined" != typeof process && JSON.stringify(process.env).indexOf("GITHUB") > -1 && process.exit(0);
  class s {
    constructor(t) {
      this.env = t;
    }
    send(t, e = "GET") {
      t = "string" == typeof t ? {
        url: t
      } : t;
      let s = this.get;
      return "POST" === e && (s = this.post), new Promise((e, i) => {
        s.call(this, t, (t, s, r) => {
          t ? i(t) : e(s);
        });
      });
    }
    get(t) {
      return this.send.call(this.env, t);
    }
    post(t) {
      return this.send.call(this.env, t, "POST");
    }
  }
  return new class {
    constructor(t, e) {
      this.name = t, this.http = new s(this), this.data = null, this.dataFile = "box.dat", this.logs = [], this.isMute = false, this.isNeedRewrite = false, this.logSeparator = "\n", this.startTime = new Date().getTime(), Object.assign(this, e), this.log("", `🔔${this.name}, 开始!`);
    }
    isNode() {
      return "undefined" != typeof module && !!module.exports;
    }
    isQuanX() {
      return "undefined" != typeof $task;
    }
    isSurge() {
      return "undefined" != typeof $httpClient && "undefined" == typeof $loon;
    }
    isLoon() {
      return "undefined" != typeof $loon;
    }
    toObj(t, e = null) {
      try {
        return JSON.parse(t);
      } catch {
        return e;
      }
    }
    toStr(t, e = null) {
      try {
        return JSON.stringify(t);
      } catch {
        return e;
      }
    }
    getjson(t, e) {
      let s = e;
      const i = this.getdata(t);
      if (i) try {
        s = JSON.parse(this.getdata(t));
      } catch {}
      return s;
    }
    setjson(t, e) {
      try {
        return this.setdata(JSON.stringify(t), e);
      } catch {
        return false;
      }
    }
    getScript(t) {
      return new Promise(e => {
        this.get({
          url: t
        }, (t, s, i) => e(i));
      });
    }
    runScript(t, e) {
      return new Promise(s => {
        let i = this.getdata("@chavy_boxjs_userCfgs.httpapi");
        i = i ? i.replace(/\n/g, "").trim() : i;
        let r = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");
        r = r ? 1 * r : 20, r = e && e.timeout ? e.timeout : r;
        const [o, h] = i.split("@"),
          n = {
            url: `http://${h}/v1/scripting/evaluate`,
            body: {
              script_text: t,
              mock_type: "cron",
              timeout: r
            },
            headers: {
              "X-Key": o,
              Accept: "*/*"
            }
          };
        this.post(n, (t, e, i) => s(i));
      }).catch(t => this.logErr(t));
    }
    loaddata() {
      if (!this.isNode()) return {};
      {
        this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path");
        const t = this.path.resolve(this.dataFile),
          e = this.path.resolve(process.cwd(), this.dataFile),
          s = this.fs.existsSync(t),
          i = !s && this.fs.existsSync(e);
        if (!s && !i) return {};
        {
          const i = s ? t : e;
          try {
            return JSON.parse(this.fs.readFileSync(i));
          } catch (t) {
            return {};
          }
        }
      }
    }
    writedata() {
      if (this.isNode()) {
        this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path");
        const t = this.path.resolve(this.dataFile),
          e = this.path.resolve(process.cwd(), this.dataFile),
          s = this.fs.existsSync(t),
          i = !s && this.fs.existsSync(e),
          r = JSON.stringify(this.data);
        s ? this.fs.writeFileSync(t, r) : i ? this.fs.writeFileSync(e, r) : this.fs.writeFileSync(t, r);
      }
    }
    lodash_get(t, e, s) {
      const i = e.replace(/\[(\d+)\]/g, ".$1").split(".");
      let r = t;
      for (const t of i) if (r = Object(r)[t], undefined === r) return s;
      return r;
    }
    lodash_set(t, e, s) {
      return Object(t) !== t ? t : (Array.isArray(e) || (e = e.toString().match(/[^.[\]]+/g) || []), e.slice(0, -1).reduce((t, s, i) => Object(t[s]) === t[s] ? t[s] : t[s] = Math.abs(e[i + 1]) >> 0 == +e[i + 1] ? [] : {}, t)[e[e.length - 1]] = s, t);
    }
    getdata(t) {
      let e = this.getval(t);
      if (/^@/.test(t)) {
        const [, s, i] = /^@(.*?)\.(.*?)$/.exec(t),
          r = s ? this.getval(s) : "";
        if (r) try {
          const t = JSON.parse(r);
          e = t ? this.lodash_get(t, i, "") : e;
        } catch (t) {
          e = "";
        }
      }
      return e;
    }
    setdata(t, e) {
      let s = false;
      if (/^@/.test(e)) {
        const [, i, r] = /^@(.*?)\.(.*?)$/.exec(e),
          o = this.getval(i),
          h = i ? "null" === o ? null : o || "{}" : "{}";
        try {
          const e = JSON.parse(h);
          this.lodash_set(e, r, t), s = this.setval(JSON.stringify(e), i);
        } catch (e) {
          const o = {};
          this.lodash_set(o, r, t), s = this.setval(JSON.stringify(o), i);
        }
      } else s = this.setval(t, e);
      return s;
    }
    getval(t) {
      return this.isSurge() || this.isLoon() ? $persistentStore.read(t) : this.isQuanX() ? $prefs.valueForKey(t) : this.isNode() ? (this.data = this.loaddata(), this.data[t]) : this.data && this.data[t] || null;
    }
    setval(t, e) {
      return this.isSurge() || this.isLoon() ? $persistentStore.write(t, e) : this.isQuanX() ? $prefs.setValueForKey(t, e) : this.isNode() ? (this.data = this.loaddata(), this.data[e] = t, this.writedata(), true) : this.data && this.data[e] || null;
    }
    initGotEnv(t) {
      this.got = this.got ? this.got : require("got"), this.cktough = this.cktough ? this.cktough : require("tough-cookie"), this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar(), t && (t.headers = t.headers ? t.headers : {}, undefined === t.headers.Cookie && undefined === t.cookieJar && (t.cookieJar = this.ckjar));
    }
    get(t, e = () => {}) {
      t.headers && (delete t.headers["Content-Type"], delete t.headers["Content-Length"]), this.isSurge() || this.isLoon() ? (this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {
        "X-Surge-Skip-Scripting": false
      })), $httpClient.get(t, (t, s, i) => {
        !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i);
      })) : this.isQuanX() ? (this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {
        hints: false
      })), $task.fetch(t).then(t => {
        const {
          statusCode: s,
          statusCode: i,
          headers: r,
          body: o
        } = t;
        e(null, {
          status: s,
          statusCode: i,
          headers: r,
          body: o
        }, o);
      }, t => e(t))) : this.isNode() && (this.initGotEnv(t), this.got(t).on("redirect", (t, e) => {
        try {
          if (t.headers["set-cookie"]) {
            const s = t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();
            s && this.ckjar.setCookieSync(s, null), e.cookieJar = this.ckjar;
          }
        } catch (t) {
          this.logErr(t);
        }
      }).then(t => {
        const {
          statusCode: s,
          statusCode: i,
          headers: r,
          body: o
        } = t;
        e(null, {
          status: s,
          statusCode: i,
          headers: r,
          body: o
        }, o);
      }, t => {
        const {
          message: s,
          response: i
        } = t;
        e(s, i, i && i.body);
      }));
    }
    post(t, e = () => {}) {
      if (t.body && t.headers && !t.headers["Content-Type"] && (t.headers["Content-Type"] = "application/x-www-form-urlencoded"), t.headers && delete t.headers["Content-Length"], this.isSurge() || this.isLoon()) this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {
        "X-Surge-Skip-Scripting": false
      })), $httpClient.post(t, (t, s, i) => {
        !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i);
      });else if (this.isQuanX()) t.method = "POST", this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {
        hints: false
      })), $task.fetch(t).then(t => {
        const {
          statusCode: s,
          statusCode: i,
          headers: r,
          body: o
        } = t;
        e(null, {
          status: s,
          statusCode: i,
          headers: r,
          body: o
        }, o);
      }, t => e(t));else if (this.isNode()) {
        this.initGotEnv(t);
        const {
          url: s,
          ...i
        } = t;
        this.got.post(s, i).then(t => {
          const {
            statusCode: s,
            statusCode: i,
            headers: r,
            body: o
          } = t;
          e(null, {
            status: s,
            statusCode: i,
            headers: r,
            body: o
          }, o);
        }, t => {
          const {
            message: s,
            response: i
          } = t;
          e(s, i, i && i.body);
        });
      }
    }
    time(t, e = null) {
      const s = e ? new Date(e) : new Date();
      let i = {
        "M+": s.getMonth() + 1,
        "d+": s.getDate(),
        "H+": s.getHours(),
        "m+": s.getMinutes(),
        "s+": s.getSeconds(),
        "q+": Math.floor((s.getMonth() + 3) / 3),
        S: s.getMilliseconds()
      };
      /(y+)/.test(t) && (t = t.replace(RegExp.$1, (s.getFullYear() + "").substr(4 - RegExp.$1.length)));
      for (let e in i) new RegExp("(" + e + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? i[e] : ("00" + i[e]).substr(("" + i[e]).length)));
      return t;
    }
    msg(e = t, s = "", i = "", r) {
      const o = t => {
        if (!t) return t;
        if ("string" == typeof t) return this.isLoon() ? t : this.isQuanX() ? {
          "open-url": t
        } : this.isSurge() ? {
          url: t
        } : undefined;
        if ("object" == typeof t) {
          if (this.isLoon()) {
            let e = t.openUrl || t.url || t["open-url"],
              s = t.mediaUrl || t["media-url"];
            return {
              openUrl: e,
              mediaUrl: s
            };
          }
          if (this.isQuanX()) {
            let e = t["open-url"] || t.url || t.openUrl,
              s = t["media-url"] || t.mediaUrl;
            return {
              "open-url": e,
              "media-url": s
            };
          }
          if (this.isSurge()) {
            let e = t.url || t.openUrl || t["open-url"];
            return {
              url: e
            };
          }
        }
      };
      if (this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(e, s, i, o(r)) : this.isQuanX() && $notify(e, s, i, o(r))), !this.isMuteLog) {
        let t = ["", "==============📣系统通知📣=============="];
        t.push(e), s && t.push(s), i && t.push(i), console.log(t.join("\n")), this.logs = this.logs.concat(t);
      }
    }
    log(...t) {
      t.length > 0 && (this.logs = [...this.logs, ...t]), console.log(t.join(this.logSeparator));
    }
    logErr(t, e) {
      const s = !this.isSurge() && !this.isQuanX() && !this.isLoon();
      s ? this.log("", `❗️${this.name}, 错误!`, t.stack) : this.log("", `❗️${this.name}, 错误!`, t);
    }
    wait(t) {
      return new Promise(e => setTimeout(e, t));
    }
    done(t = {}) {
      const e = new Date().getTime(),
        s = (e - this.startTime) / 1e3;
      this.log("", `🔔${this.name}, 结束! 🕛 ${s} 秒`), this.log(), (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(t);
    }
  }(t, e);
}