//Fri Dec 05 2025 13:10:08 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
var X0hMuvw = Object['\u0064\u0065\u0066\u0069\u006e\u0065\u0050\u0072\u006f\u0070\u0065\u0072\u0074\u0079'],
  wCrHUv,
  bM6Prht,
  GlTK0Sg,
  sV_2BHE,
  x50QLq,
  uLFjwi,
  yCwexm,
  dkNnouh,
  rxQljZF,
  xDXfuGb;
function kvv0Ja() {
  return globalThis;
}
function kpq0Rn() {
  return global;
}
function uwSuRX() {
  return window;
}
function hIIzFL() {
  return new Function('return this')();
}
function wt4erv(X0hMuvw = [kvv0Ja, kpq0Rn, uwSuRX, hIIzFL], JfZJqMT, lFwXee = [], wCrHUv = 0x0, bM6Prht) {
  JfZJqMT = JfZJqMT;
  try {
    JfZJqMT = Object
    lFwXee["push"](''["__proto__"]["constructor"]["name"])
  } catch (e) {}
  BT26Yw: for (wCrHUv = wCrHUv; wCrHUv < X0hMuvw.length; wCrHUv++) try {
    JfZJqMT = X0hMuvw[wCrHUv]();
    for (bM6Prht = 0; bM6Prht < lFwXee.length; bM6Prht++) {
      if (typeof JfZJqMT[lFwXee[bM6Prht]] === "undefined") {
        continue BT26Yw;
      }
    }
    return JfZJqMT;
  } catch (e) {}
  return JfZJqMT || this;
}
wCrHUv = wt4erv() || {}
bM6Prht = wCrHUv["TextDecoder"]
GlTK0Sg = wCrHUv.Uint8Array
sV_2BHE = wCrHUv["Buffer"]
x50QLq = wCrHUv.String || String
uLFjwi = wCrHUv["Array"] || Array
function KwLf4Ct(...X0hMuvw) {
  return X0hMuvw[X0hMuvw["length"] - 1];
}
function gJDM7zn(EoGg9yF, X0hMuvw) {
  switch (dkNnouh) {
    case 46:
      return EoGg9yF + X0hMuvw;
    case 10:
      return EoGg9yF * X0hMuvw;
    case 0x1f:
      return EoGg9yF - X0hMuvw;
    case 62:
      return EoGg9yF / X0hMuvw;
    case 20:
      return -EoGg9yF;
    case -44:
      return !EoGg9yF;
    case 0x40:
      return typeof EoGg9yF;
  }
}
function ZEBX4lx(EoGg9yF) {
  return KwLf4Ct(EoGg9yF = dkNnouh + (dkNnouh = EoGg9yF, 0), EoGg9yF);
}
dkNnouh = dkNnouh
rxQljZF = Object["create"](null)
function zTXJaMI(EoGg9yF, X0hMuvw) {
  var xd1RXd = ["value"];
  return xDXfuGb(EoGg9yF, "length", {
    [xd1RXd[0]]: X0hMuvw,
    ["configurable"]: true
  });
}
xDXfuGb = Object["defineProperty"];
const JspID3 = require('crypto-js'),
  nwI2N8i = require('querystring'),
  qx318DO = require('./Rebels_jdCommon'),
  ZN0l4C = function () {
    const bM6Prht = [],
      GlTK0Sg = [],
      sV_2BHE = [...bM6Prht, ...GlTK0Sg],
      x50QLq = ["B6dB3QqGZP1lKNICTaiAeNJSHKNepO5GGgtL6FUceqSlpFZCdx2SZ5MPPbzrgy91HeR0dnJazcMrvMgPF7bhFrfsGaApJKk4JohEEhoJ4kKJpAaGsfrFhb7FPgMvrMczaJnd0ReH19ygrzbPPM5ZS2xdCZFplSqecUF6LtgGG5OpeNKHSJNeAiaTCINKl1PZGqQ3Bd6B", "EUhzJoyKP7VydtpyBwNUGU2tqzI0QB0LIpQ10Fk3hX2ZcPoGRpACqmzcTQbKd98i3U7raFz2rMl2kys0ODgtAh22E3i57wmh38RbbR83hmw75i3E22hAtgDO0syk2lMr2zFar7U3i89dKbQTczmqCApRGoPcZ2Xh3kF01QpIL0BQ0Izqt2UGUNwByptdyV7PKyoJzhUE", "xexcHoyVwOs5TYTQVvU0iXn56ryKVdWedLTpq3KEKmbUHfwzuZjIpZOPVXMEappFhjdqwtp1bBrWaRBCfPFwCq2W8SsyvwqZ6sIGGIs6ZqwvysS8W2qCwFPfCBRaWrBb1ptwqdjhFppaEMXVPOZpIjZuzwfHUbmKEK3qpTLdeWdVKyr65nXi0UvVQTYT5sOwVyoHcxex", "2Llnegc5i4flqd4HZPFK210yh61boBxRSdnNVMeudKimx92Qi4aPuHP12HmEImbWrXjLgBGqy1bSnKvLhqMqhknyuse4nFoeLTkJJkTLeoFn4esuynkhqMqhLvKnSb1yqGBgLjXrWbmIEmH21PHuPa4iQ29xmiKdueMVNndSRxBob16hy012KFPZH4dqlf4i5cgenlL2", "dZzoMZF6xtt3voTFDbPzEZ7GeM8t7uY05d4K4xfhtdxELh96dDRB4oRYA2smET5dy1dafGkXOz2V7tNOVi0vSqfuhI99IKprVK6QQ6KVrpKI99IhufqSv0iVONt7V2zOXkGfad1yd5TEms2AYRo4BRDd69hLExdthfx4K4d50Yu7t8MeG7ZEzPbDFTov3ttx6FZMozZd", "SNYr3bWMtQulWZO2FEwuhSFp3EXPR1TujPRJwUFlxBh9Pvf2MeTEpR7a3dU6e9rNUMyBh2osDdK4Vdm4gZ0XcRCoHZPi2jiXT2dCCd2TXij2iPZHoCRcX0Zg4mdV4KdDso2hByMUNr9e6Ud3a7RpETeM2fvP9hBxlFUwJRPjuT1RPXE3pFShuwEF2OZWluQtMWb3rYNS", "4viQ2FrYHcrH44gqvPLo6KtiFu56AW1eXbDBZrBepzdLKE33Ey4TwFERnkVLnbHAXbKqAi0HFP9Eu7yg8WNlI7q2dvXGGiPaMbrBBrbMaPiGGXvd2q7IlNW8gy7uE9PFH0iAqKbXAHbnLVknREFwT4yE33EKLdzpeBrZBDbXe1WA65uFitK6oLPvqg44HrcHYrF2Qiv4", "0VIoSHBNVAW8De7NquFyEUm0o9xNnQJGn2OR1yOK9djWALhyP3a1XoQEwTnXuzypRuwsaLPUlertksOY6LYmnbQmPgdDQRXXKdKooKdKXXRQDdgPmQbnmYL6YOsktrelUPLaswuRpyzuXnTwEQoX1a3PyhLAWjd9KOy1RO2nGJQnNx9o0mUEyFuqN7eD8WAVNBHSoIV0", "fdJPBiTra9E0qg2HJrobeEC2SkOfSzbw6nG5J5ACx42GQDBsCyGfxNlHHYhl7EmkdvYaKAXUVXSKcTT1KhyYaj9Q4YtyhnOA7cLrrLc7AOnhytY4Q9jaYyhK1TTcKSXVUXAKaYvdkmE7lhYHHlNxfGyCsBDQG24xCA5J5Gn6wbzSfOkS2CEeborJH2gq0E9arTiBPJdf", "kLOA93PyUOX3QdlLuZ9JgNq1peyIITAQSnKzuLBZ2NthOSseAJMGCecvSLVKAww61Y31hJ4l7kAOcjLmtqQNJlNyJb5yu9d9vqWUUWqv9d9uy5bJyNlJNQqtmLjcOAk7l4Jh13Y16wwAKVLSvceCGMJAesSOhtN2ZBLuzKnSQATIIyep1qNgJ9ZuLldQ3XOUyP39AOLk"];
    function uLFjwi(X0hMuvw, JfZJqMT, bM6Prht) {
      let kvv0Ja = gJDM7zn(Date["now"](), parseInt(bM6Prht), ZEBX4lx(0x2e));
      if (typeof X0hMuvw !== "object") {
        X0hMuvw = JSON["parse"](X0hMuvw);
      }
      let kpq0Rn = KwLf4Ct(X0hMuvw["nowTime"] = kvv0Ja, gJDM7zn(JfZJqMT, kvv0Ja, dkNnouh = 0x2e));
      const {
          ["keyBytes"]: Nsck2c,
          ["ivBytes"]: uwSuRX
        } = xDXfuGb(kpq0Rn),
        hIIzFL = JspID3["AES"]["encrypt"](JSON["stringify"](X0hMuvw), Nsck2c, {
          iv: uwSuRX,
          ["mode"]: JspID3["mode"]["ECB"],
          ["padding"]: JspID3["pad"]["Pkcs7"]
        });
      return hIIzFL["toString"]();
    }
    function yCwexm(X0hMuvw, JfZJqMT, bM6Prht) {
      let kvv0Ja = gJDM7zn(Date["now"](), parseInt(bM6Prht), dkNnouh = 0x2e),
        kpq0Rn = gJDM7zn(JfZJqMT, kvv0Ja, dkNnouh = 0x2e);
      const {
          ["keyBytes"]: Nsck2c,
          ["ivBytes"]: uwSuRX
        } = xDXfuGb(kpq0Rn),
        hIIzFL = JspID3["AES"]["decrypt"](X0hMuvw, Nsck2c, {
          iv: uwSuRX,
          ["mode"]: JspID3["mode"]["ECB"],
          ["padding"]: JspID3["pad"]["Pkcs7"]
        }),
        wt4erv = JspID3["enc"]["Utf8"]["stringify"](hIIzFL)["toString"]();
      try {
        return JSON["parse"](wt4erv);
      } catch {
        return wt4erv;
      }
    }
    function rHOkyp0(X0hMuvw) {
      const JfZJqMT = Object["fromEntries"](sV_2BHE["map"](X0hMuvw => [X0hMuvw, true]));
      return JfZJqMT[X0hMuvw] !== undefined;
    }
    function rxQljZF(X0hMuvw) {
      const x50QLq = KwLf4Ct(X0hMuvw = X0hMuvw["split"]('')["reverse"]()["join"](''), new Uint8Array(0xc)),
        uLFjwi = new TextEncoder()["encode"](X0hMuvw);
      for (let yCwexm = 0; yCwexm < uLFjwi["length"]; yCwexm += 0x2) {
        let rHOkyp0 = uLFjwi[yCwexm] << 0x5 | uLFjwi[yCwexm + 1] & 0xff;
        rHOkyp0 %= 63
        x50QLq[yCwexm >> 1] = rHOkyp0
      }
      let rxQljZF = '';
      for (let yCwexm = 0; yCwexm < x50QLq["length"]; yCwexm++) {
        rxQljZF += gJDM7zn(x50QLq[yCwexm], 256, ZEBX4lx(0x2e))["toString"](0x2)["slice"](1)
      }
      let kpq0Rn = '',
        uwSuRX = '';
      for (let yCwexm = 0x0; yCwexm < 16; yCwexm++) {
        if (yCwexm !== 0 && true) {
          const zTXJaMI = gJDM7zn(yCwexm, 6, ZEBX4lx(0xa)),
            JspID3 = rxQljZF["substring"](zTXJaMI, gJDM7zn(zTXJaMI, 6, dkNnouh = 0x2e));
          let nwI2N8i = parseInt(JspID3, 0x2);
          const qx318DO = uwSuRX["split"]('');
          for (let ZN0l4C = 0x0; ZN0l4C < qx318DO["length"]; ZN0l4C++) if (qx318DO[ZN0l4C] === '\u0031') {
            nwI2N8i = (nwI2N8i >> 0x6 - ZN0l4C | nwI2N8i << ZN0l4C) & 63;
          }
          uwSuRX = (nwI2N8i & 0x3f)["toString"](0x2)["padStart"](6, "0");
        } else {
          uwSuRX = rxQljZF["substring"](0x0, 6);
        }
        kpq0Rn += uwSuRX;
      }
      for (let yCwexm = 0; yCwexm < 0xc; yCwexm++) {
        const zTXJaMI = gJDM7zn(yCwexm, 0x8, ZEBX4lx(10));
        x50QLq[yCwexm] = parseInt(kpq0Rn["substring"](zTXJaMI, gJDM7zn(zTXJaMI, 8, ZEBX4lx(46))), 0x2);
      }
      return btoa(String["fromCharCode"]["apply"](null, x50QLq));
    }
    function xDXfuGb(X0hMuvw) {
      var GlTK0Sg, sV_2BHE, uLFjwi, yCwexm;
      const xDXfuGb = X0hMuvw["substring"](0x0, gJDM7zn(X0hMuvw["length"], 5, dkNnouh = 31));
      let kvv0Ja = '';
      for (let yCwexm = 0; yCwexm < xDXfuGb["length"] && true; yCwexm++) {
        let kpq0Rn = xDXfuGb["charCodeAt"](yCwexm),
          g3RMchq = kpq0Rn % 0xa,
          AymyVkX = x50QLq[g3RMchq][yCwexm];
        kvv0Ja += AymyVkX;
      }
      GlTK0Sg = kvv0Ja["length"]
      sV_2BHE = Math["floor"](gJDM7zn(GlTK0Sg, 24, ZEBX4lx(62)))
      uLFjwi = ''
      for (yCwexm = 0; yCwexm < 24; yCwexm++) {
        var uwSuRX = gJDM7zn(yCwexm + 1, sV_2BHE, ZEBX4lx(0xa)),
          hIIzFL,
          wt4erv,
          O_kRbsT,
          zTXJaMI,
          nwI2N8i;
        if (yCwexm === 0x17) {
          uwSuRX = GlTK0Sg;
        }
        hIIzFL = kvv0Ja["substring"](gJDM7zn(yCwexm, sV_2BHE, dkNnouh = 10), uwSuRX)
        wt4erv = []
        for (O_kRbsT = 0x0; O_kRbsT < hIIzFL["length"]; O_kRbsT++) wt4erv["push"](hIIzFL["charCodeAt"](O_kRbsT));
        zTXJaMI = wt4erv["reduce"]((X0hMuvw, JfZJqMT) => {
          return gJDM7zn(X0hMuvw, JfZJqMT, dkNnouh = 46);
        }, 0)
        nwI2N8i = Math["floor"](gJDM7zn(zTXJaMI, wt4erv["length"], ZEBX4lx(62)))
        uLFjwi += String["fromCharCode"](nwI2N8i)
      }
      const qx318DO = KwLf4Ct(kvv0Ja = uLFjwi, rxQljZF(kvv0Ja)),
        ZN0l4C = JspID3["enc"]["Utf8"]["parse"](qx318DO),
        kDWwC6N = JspID3["enc"]["Utf8"]["parse"]('');
      return {
        ["keyBytes"]: ZN0l4C,
        ["ivBytes"]: kDWwC6N
      };
    }
    const kvv0Ja = (() => {
        const x50QLq = JspID3["enc"]["Utf8"]["parse"]("Hd5W5ONsYKmGm9QA"),
          rHOkyp0 = JspID3["enc"]["Utf8"]["parse"]("2JjUvJEAsA2Yog==");
        function rxQljZF(JfZJqMT) {
          if (typeof JfZJqMT !== "string") {
            JfZJqMT = JSON["stringify"](JfZJqMT);
          }
          const kvv0Ja = JspID3["enc"]["Utf8"]["parse"](JfZJqMT),
            uLFjwi = JspID3.AES.encrypt(kvv0Ja, x50QLq, {
              iv: rHOkyp0,
              mode: JspID3.mode.CBC,
              padding: JspID3.pad.Pkcs7
            });
          return JspID3["enc"]["Base64"]["stringify"](uLFjwi["ciphertext"]);
        }
        function xDXfuGb(JfZJqMT) {
          const kvv0Ja = JspID3["enc"]["Base64"]["parse"](JfZJqMT),
            uLFjwi = JspID3.enc.Base64.stringify(kvv0Ja),
            yCwexm = JspID3.AES.decrypt(uLFjwi, x50QLq, {
              iv: rHOkyp0,
              mode: JspID3.mode.CBC,
              padding: JspID3.pad.Pkcs7
            }),
            kpq0Rn = JspID3["enc"]["Utf8"]["stringify"](yCwexm)["toString"]();
          try {
            return JSON["parse"](kpq0Rn);
          } catch {
            return kpq0Rn;
          }
        }
        return {
          ["encrypt"]: rxQljZF,
          ["decrypt"]: xDXfuGb
        };
      })(),
      kpq0Rn = function () {
        var X0hMuvw = "l3pLMKh",
          bM6Prht,
          GlTK0Sg;
        bM6Prht = Object.create(null)
        GlTK0Sg = []
        const sV_2BHE = JspID3["enc"]["Utf8"]["parse"]("12345678@guanmei"),
          x50QLq = JspID3["enc"]["Utf8"]["parse"]("DYgjCEIMVrj2W9xN");
        return {
          ["encrypt"]: uLFjwi("Q6OUuHL", "l3pLMKh"),
          ["decrypt"]: uLFjwi("erG0uDt", X0hMuvw),
          ["decryptHex"]: uLFjwi("TYtD8Ib", "l3pLMKh")
        };
        function uLFjwi(X0hMuvw, JfZJqMT, uLFjwi, yCwexm, rHOkyp0, rxQljZF, xDXfuGb) {
          rHOkyp0 = {
            ["erG0uDt"]: (X0hMuvw, JfZJqMT) => {
              var [yCwexm] = GlTK0Sg;
              let rHOkyp0 = yCwexm;
              try {
                rHOkyp0 = decodeURIComponent(yCwexm);
              } catch (decodeError) {}
              const rxQljZF = JspID3["AES"]["decrypt"](rHOkyp0, sV_2BHE, {
                iv: x50QLq,
                ["mode"]: JspID3["mode"]["CBC"],
                ["padding"]: JspID3["pad"]["Pkcs7"]
              })["toString"](JspID3["enc"]["Utf8"]);
              try {
                return JSON["parse"](rxQljZF);
              } catch {
                return rxQljZF;
              }
            },
            ["TYtD8Ib"]: () => {
              var [X0hMuvw] = GlTK0Sg;
              try {
                const JfZJqMT = JspID3["enc"]["Hex"]["parse"](X0hMuvw),
                  uLFjwi = JspID3.AES.decrypt({
                    ciphertext: JfZJqMT
                  }, sV_2BHE, {
                    iv: x50QLq,
                    mode: JspID3.mode.CBC,
                    padding: JspID3.pad.Pkcs7
                  });
                return uLFjwi["toString"](JspID3["enc"]["Utf8"]);
              } catch (error) {
                return KwLf4Ct(console["error"]("解密失败:", error), null);
              }
            },
            ["Q6OUuHL"]: (X0hMuvw, JfZJqMT, uLFjwi) => {
              var [yCwexm] = GlTK0Sg;
              if (typeof yCwexm !== "string") {
                yCwexm = JSON["stringify"](yCwexm);
              }
              const rHOkyp0 = JspID3["enc"]["Utf8"]["parse"](yCwexm),
                rxQljZF = JspID3.AES.encrypt(rHOkyp0, sV_2BHE, {
                  iv: x50QLq,
                  mode: JspID3.mode.CBC,
                  padding: JspID3.pad.Pkcs7
                });
              return JspID3["enc"]["Base64"]["stringify"](rxQljZF["ciphertext"]);
            }
          }
          rxQljZF = rxQljZF
          if (JfZJqMT == "JTGoVS") {
            GlTK0Sg = [];
          }
          xDXfuGb = {
            ["erG0uDt"]: 1,
            ["TYtD8Ib"]: 1,
            ["Q6OUuHL"]: 0x1
          };
          function kvv0Ja() {
            var JfZJqMT = function (...JfZJqMT) {
                return KwLf4Ct(GlTK0Sg = JfZJqMT, rHOkyp0[X0hMuvw].call(this));
              },
              uLFjwi = xDXfuGb[X0hMuvw];
            if (uLFjwi) {
              return zTXJaMI(JfZJqMT, uLFjwi);
            }
            return JfZJqMT;
          }
          rxQljZF = JfZJqMT == "l3pLMKh" ? bM6Prht[X0hMuvw] || (bM6Prht[X0hMuvw] = kvv0Ja()) : rHOkyp0[X0hMuvw]();
          return uLFjwi == "B1fsj4" ? {
            X7LR9Te: rxQljZF
          } : rxQljZF;
        }
      }();
    return {
      ["encrypt"]: uLFjwi,
      ["decrypt"]: yCwexm,
      ["isDefenseApi"]: rHOkyp0,
      ["interactionV2"]: kvv0Ja,
      ["cryptoHelper"]: kpq0Rn
    };
  }();
async function kDWwC6N(X0hMuvw, JfZJqMT, wCrHUv = {}, bM6Prht = {}) {
  let GlTK0Sg = {
    ["eid"]: '',
    ["jsToken"]: '',
    fp: ''
  };
  function sV_2BHE(X0hMuvw) {
    var JfZJqMT, wCrHUv;
    JfZJqMT = KwLf4Ct(X0hMuvw = JSON["stringify"](X0hMuvw), X0hMuvw = encodeURIComponent(X0hMuvw), '')
    wCrHUv = 0
    do {
      var GlTK0Sg = "23IL<N01c7KvwZO56RSTAfghiFyzWJqVabGH4PQdopUrsCuX*xeBjkltDEmn89.-",
        sV_2BHE,
        x50QLq,
        uLFjwi,
        yCwexm,
        rHOkyp0,
        Nsck2c;
      sV_2BHE = X0hMuvw["charCodeAt"](wCrHUv++)
      x50QLq = X0hMuvw["charCodeAt"](wCrHUv++)
      uLFjwi = X0hMuvw["charCodeAt"](wCrHUv++)
      yCwexm = sV_2BHE >> 0x2
      rHOkyp0 = KwLf4Ct(sV_2BHE = (sV_2BHE & 0x3) << 0x4 | x50QLq >> 0x4, (x50QLq & 15) << 2 | uLFjwi >> 6)
      Nsck2c = uLFjwi & 0x3f
      isNaN(x50QLq) ? rHOkyp0 = Nsck2c = 64 : isNaN(uLFjwi) && (Nsck2c = 64)
      JfZJqMT = gJDM7zn(JfZJqMT + "23IL<N01c7KvwZO56RSTAfghiFyzWJqVabGH4PQdopUrsCuX*xeBjkltDEmn89.-"["charAt"](yCwexm) + "23IL<N01c7KvwZO56RSTAfghiFyzWJqVabGH4PQdopUrsCuX*xeBjkltDEmn89.-"["charAt"](sV_2BHE) + GlTK0Sg["charAt"](rHOkyp0), "23IL<N01c7KvwZO56RSTAfghiFyzWJqVabGH4PQdopUrsCuX*xeBjkltDEmn89.-"["charAt"](Nsck2c), ZEBX4lx(0x2e))
    } while (wCrHUv < X0hMuvw["length"]);
    return gJDM7zn(JfZJqMT, "/", ZEBX4lx(0x2e));
  }
  try {
    const xDXfuGb = Eeqk6WE["hash128"]([X0hMuvw["substring"](0, 0x5a), "zh-CN", "applewebkit_chrome", "605.1.15", 'NA', "NA", 0x20, "932x430", gJDM7zn(0x1e0, dkNnouh = 0x14), "sessionStorageKey", "localStorageKey", "indexedDbKey", "openDatabase", '\u004e\u0041', "iPhone", 10, 'NA', '', null, null]["join"]("~~~"), 31),
      kvv0Ja = KwLf4Ct(GlTK0Sg.fp = xDXfuGb, sV_2BHE(Object["assign"]({}, {
        ["pin"]: '',
        ["oid"]: '',
        ["bizId"]: "jd-babelh5",
        fc: '',
        ["mode"]: "strict",
        ["p"]: /^https:/["test"](JfZJqMT) ? "s" : "h",
        ["fp"]: xDXfuGb,
        ["ctype"]: 0x1,
        ["v"]: "3.2.1.1",
        f: "3",
        o: JfZJqMT["replace"](/^https?:\/\//, ''),
        qs: '',
        ["jsTk"]: '',
        qi: '',
        ["stk"]: ''
      }, wCrHUv))),
      kpq0Rn = sV_2BHE(Object["assign"]({}, {
        ts: {
          ["deviceTime"]: Date["now"](),
          ["deviceEndTime"]: gJDM7zn(Date["now"](), 20, dkNnouh = 0x2e)
        },
        ca: {
          ["tdHash"]: ''
        },
        m: {
          ["compatMode"]: "CSS1Compat"
        },
        fo: ["Bauhaus 93", "Chalkduster", "Impact", "Menlo", "Papyrus", "Rockwell"],
        n: {
          ["standalone"]: false,
          ["hardwareConcurrency"]: 0x4,
          ["webdriver"]: false,
          ["maxTouchPoints"]: 0x5,
          ["cookieEnabled"]: true,
          ["appCodeName"]: "Mozilla",
          ["appName"]: "Netscape",
          ["appVersion"]: /\/(.+)/g["exec"](X0hMuvw) && /\/(.+)/g["exec"](X0hMuvw)[1] || X0hMuvw,
          ["platform"]: "iPhone",
          ["product"]: "Gecko",
          ["productSub"]: "20030107",
          ["userAgent"]: X0hMuvw,
          ["vendor"]: "Apple Computer, Inc.",
          ["vendorSub"]: '',
          ["language"]: "zh-CN",
          ["onLine"]: true,
          ["pdfViewerEnabled"]: true,
          ["javaEnabled"]: false,
          ["enumerationOrder"]: ["sendBeacon", "standalone", "hardwareConcurrency", "clipboard", "audioSession", "credentials", "geolocation", "mediaCapabilities", "mediaSession", "mediaDevices", "permissions", "wakeLock", "locks", "webdriver", "maxTouchPoints", "userActivation", "cookieEnabled", "appCodeName", "appName", "appVersion", "platform", "product", "productSub", "userAgent", "vendor", "vendorSub", "language", "languages", "onLine", "plugins", "mimeTypes", "pdfViewerEnabled", "storage", "requestMediaKeySystemAccess", "getGamepads", "javaEnabled", "canShare", "share"]
        },
        ["p"]: [],
        ["w"]: {
          ["devicePixelRatio"]: 0x1,
          ["screenTop"]: 0,
          ["screenLeft"]: 0x0
        },
        ["s"]: {
          ["availHeight"]: 0x34c,
          ["availWidth"]: 0x186,
          ["colorDepth"]: 24,
          ["height"]: 0x34c,
          ["width"]: 0x186,
          ["pixelDepth"]: 24
        },
        sc: {
          ["ActiveBorder"]: "rgb(118, 118, 118)",
          ["ActiveCaption"]: "rgb(0, 0, 0)",
          ["AppWorkspace"]: "rgb(255, 255, 255)",
          ["Background"]: "rgb(255, 255, 255)",
          ["ButtonFace"]: "rgb(239, 239, 239)",
          ["ButtonHighlight"]: "rgb(239, 239, 239)",
          ["ButtonShadow"]: "rgb(239, 239, 239)",
          ["ButtonText"]: "rgb(0, 0, 0)",
          ["CaptionText"]: "rgb(0, 0, 0)",
          ["GrayText"]: "rgb(128, 128, 128)",
          ["Highlight"]: "rgba(51, 181, 229, 0.4)",
          ["HighlightText"]: "rgb(255, 255, 255)",
          ["InactiveBorder"]: "rgb(118, 118, 118)",
          ["InactiveCaption"]: "rgb(255, 255, 255)",
          ["InactiveCaptionText"]: "rgb(128, 128, 128)",
          ["InfoBackground"]: "rgb(255, 255, 255)",
          ["InfoText"]: "rgb(0, 0, 0)",
          ["Menu"]: "rgb(255, 255, 255)",
          ["MenuText"]: "rgb(0, 0, 0)",
          ["Scrollbar"]: "rgb(255, 255, 255)",
          ["ThreeDDarkShadow"]: "rgb(118, 118, 118)",
          ["ThreeDFace"]: "rgb(239, 239, 239)",
          ["ThreeDHighlight"]: "rgb(118, 118, 118)",
          ["ThreeDLightShadow"]: "rgb(118, 118, 118)",
          ["ThreeDShadow"]: "rgb(118, 118, 118)",
          ["Window"]: "rgb(255, 255, 255)",
          ["WindowFrame"]: "rgb(118, 118, 118)",
          ["WindowText"]: "rgb(0, 0, 0)"
        },
        ss: {
          ["cookie"]: true,
          ["localStorage"]: true,
          ["sessionStorage"]: true,
          ["globalStorage"]: false,
          ["indexedDB"]: true
        },
        tz: gJDM7zn(0x1e0, dkNnouh = 0x14),
        ["lil"]: '',
        ["wil"]: ''
      }, bM6Prht)),
      uwSuRX = {
        ["url"]: "https://gia.jd.com/jsTk.do",
        ["method"]: "POST",
        ["headers"]: {
          ["Accept"]: "*/*",
          ["Accept-Encoding"]: "gzip, deflate, br",
          ["Accept-Language"]: "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7,en-GB;q=0.6",
          ["Content-Type"]: "application/x-www-form-urlencoded;charset=UTF-8",
          ["Connection"]: "keep-alive",
          ["Host"]: "gia.jd.com",
          ["Origin"]: qx318DO["parseUrl"](JfZJqMT)?.["origin"] || "https://pro.m.jd.com",
          ["Referer"]: JfZJqMT,
          ["Sec-Fetch-Dest"]: "empty",
          ["Sec-Fetch-Mode"]: "cors",
          ["Sec-Fetch-Site"]: "same-site",
          ["User-Agent"]: X0hMuvw
        },
        ["params"]: {
          a: kvv0Ja
        },
        ["data"]: {
          d: kpq0Rn
        },
        ["proxy"]: null,
        ["timeout"]: 0xea60,
        ["debug"]: false
      };
    let hIIzFL = 0,
      wt4erv = null;
    const zTXJaMI = 1;
    while (hIIzFL < zTXJaMI) {
      const JspID3 = await qx318DO["request"](uwSuRX);
      if (gJDM7zn(JspID3["success"], ZEBX4lx(-0x2c))) {
        wt4erv = `❌ jsTk 请求失败 ➜ ${JspID3["error"]}`
        hIIzFL++
        continue;
      }
      if (gJDM7zn(JspID3["data"], dkNnouh = -44)) {
        wt4erv = "🚫 jsTk 请求失败 ➜ 无响应数据"
        hIIzFL++
        continue;
      }
      try {
        const nwI2N8i = JspID3["data"];
        if (nwI2N8i?.["data"]?.["eid"] && nwI2N8i?.["data"]?.["token"]) {
          return KwLf4Ct(GlTK0Sg["eid"] = nwI2N8i["data"]["eid"], GlTK0Sg["jsToken"] = nwI2N8i["data"]["token"], GlTK0Sg);
        }
        wt4erv = `🚫 jsTk 请求异常 ➜ ${JSON["stringify"](nwI2N8i)}`;
      } catch (error) {
        wt4erv = `❌ jsTk 在处理接口响应时遇到了错误 ➜ ${error["message"] || error}`;
      }
      hIIzFL++;
    }
    if (hIIzFL >= zTXJaMI) {
      console["log"](wt4erv);
    }
  } catch (error) {
    console["log"](`❌ 在处理 jsTk 时遇到了错误 ➜ ${error["message"] || error}`);
  }
  return GlTK0Sg;
}
function ZynmMj(X0hMuvw, JfZJqMT) {
  var wCrHUv = () => {
    try {
      for (var JfZJqMT = [], bM6Prht = 0x0; 32 > bM6Prht; bM6Prht++) JfZJqMT[bM6Prht] = "0123456789abcdef"["charAt"](Math["floor"](gJDM7zn(0x10, Math["random"](), ZEBX4lx(10))));
      return KwLf4Ct(JfZJqMT[0xe] = '\x34', JfZJqMT[0x13] = "0123456789abcdef"["charAt"](JfZJqMT[19] & 3 | 8), JfZJqMT[8] = JfZJqMT[13] = JfZJqMT[18] = JfZJqMT[23], JfZJqMT["join"](''));
    } catch (b) {
      return '';
    }
  };
  try {
    const x50QLq = new URL(JfZJqMT),
      uLFjwi = x50QLq["pathname"]["slice"](0, gJDM7zn(x50QLq["pathname"]["lastIndexOf"]("/"), 0x1, dkNnouh = 46));
    return {
      ["version"]: "1.0.0",
      ["data"]: qx318DO["Base64"]["encode"](JSON["stringify"]({
        ["userAgent"]: X0hMuvw,
        ["url"]: x50QLq["hostname"]["concat"](uLFjwi),
        ["urlQStr"]: x50QLq["search"]["slice"](0x1),
        ["language"]: "zh-CN",
        ["browser"]: "applewebkit_chrome",
        ["browserVersion"]: null,
        os: '\u004e\u0041',
        ["osVersion"]: '\x4e\x41',
        ["screenResolution"]: "736x414",
        ["timezoneOffset"]: gJDM7zn(0x8, dkNnouh = 20),
        ["sessionStorage"]: "true",
        ["localStorage"]: "true",
        ["indexedDb"]: "true",
        ["openDatabase"]: "false",
        ["hardwareConcurrency"]: "NA",
        ["doNotTrack"]: "NA",
        ["platform"]: "iPhone",
        ["canvasFp"]: '',
        ["webglFp"]: '',
        fp: Eeqk6WE["hash128"]([X0hMuvw["substring"](0x0, 0x5a), "zh-CN", "applewebkit_chrome", "605.1.15", 'NA', '\x4e\x41', 0x20, "736x414", gJDM7zn(0x1e0, dkNnouh = 0x14), "sessionStorageKey", "localStorageKey", "indexedDbKey", "openDatabase", 'NA', "iPhone", 10, '\x4e\x41', '', null, null]["join"]("~~~"), 31),
        ["randomId"]: wCrHUv()
      }), "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=")
    };
  } catch (e) {
    return null;
  }
}
function PMEnsmW(X0hMuvw, JfZJqMT) {
  var wCrHUv = () => {
    try {
      for (var X0hMuvw = [], JfZJqMT = 0; 32 > JfZJqMT; JfZJqMT++) X0hMuvw[JfZJqMT] = "0123456789abcdef"["charAt"](Math["floor"](gJDM7zn(0x10, Math["random"](), ZEBX4lx(0xa))));
      return KwLf4Ct(X0hMuvw[14] = '\u0034', X0hMuvw[19] = "0123456789abcdef"["charAt"](X0hMuvw[0x13] & 0x3 | 0x8), X0hMuvw[0x8] = X0hMuvw[13] = X0hMuvw[0x12] = X0hMuvw[0x17], X0hMuvw["join"](''));
    } catch (b) {
      return '';
    }
  };
  try {
    const x50QLq = new URL(JfZJqMT),
      uLFjwi = x50QLq["pathname"]["slice"](0x0, gJDM7zn(x50QLq["pathname"]["lastIndexOf"]("/"), 1, ZEBX4lx(0x2e)));
    return {
      ["version"]: "1.0.0",
      ["data"]: qx318DO["Base64"]["encode"](JSON["stringify"]({
        ["userAgent"]: X0hMuvw,
        ["url"]: x50QLq["hostname"]["concat"](uLFjwi),
        ["urlQStr"]: x50QLq["search"]["slice"](0x1),
        ["language"]: "zh-CN",
        ["browser"]: "applewebkit_chrome",
        ["browserVersion"]: null,
        os: "NA",
        ["osVersion"]: "NA",
        ["screenResolution"]: "932x430",
        ["timezoneOffset"]: gJDM7zn(0x8, dkNnouh = 0x14),
        ["sessionStorage"]: "true",
        ["localStorage"]: "true",
        ["indexedDb"]: "true",
        ["openDatabase"]: "false",
        ["hardwareConcurrency"]: 4,
        ["doNotTrack"]: '\u004e\u0041',
        ["platform"]: "iPhone",
        ["canvasFp"]: wCrHUv(),
        ["webglFp"]: '',
        ["fp"]: Eeqk6WE["hash128"]([X0hMuvw["substring"](0, 0x5a), "zh-CN", "applewebkit_chrome", "605.1.15", "NA", '\x4e\x41', 32, "932x430", gJDM7zn(0x1e0, dkNnouh = 20), "sessionStorageKey", "localStorageKey", "indexedDbKey", "openDatabase", '\x4e\x41', "iPhone", 10, "NA", '', null, null]["join"]("~~~"), 31),
        ["randomId"]: wCrHUv()
      }), "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=")
    };
  } catch (e) {
    return null;
  }
}
class Gzx7of {
  constructor() {
    this._defaultVersion = "4.7"
    this._supportVersionList = ["3.1", "4.1", "4.2", "4.3", "4.4", "4.7"]
    this._latestAppVersionData = {
      ["build"]: "169480",
      ["version"]: "13.2.2"
    }
    this._latestIOSVersion = "17.6.1"
    this.invalidApis = new Set()
    this.hasLogged = false
    this._keyMap = {
      3.1: "wm0!@w_s#ll1flo(",
      4.1: "HL4|FW#Chc3#q?0)",
      4.2: "DNiHi703B0&17hh1",
      4.3: "&d74&yWoV.EYbWbZ",
      [4.4]: "r1T.6Vinpb.k+/a)",
      4.7: "X[FMV04Nfvd?Y6M_"
    }
    this._algoMethodMap = {
      3.1: "HmacSHA256",
      4.1: "MD5",
      4.2: "SHA256",
      [4.3]: "HmacSHA256",
      [4.4]: "MD5",
      4.71: "SHA256",
      [4.72]: "HmacSHA256",
      4.73: "HmacSHA256",
      [4.7]: "MD5"
    }
    this._fvMap = {
      3.1: "v3.2.0",
      [4.1]: "v0.1.6",
      4.2: "h5_npm_v4.2.0",
      [4.3]: "h5_file_v4.3.3",
      [4.4]: "h5_file_v4.4.0",
      [4.71]: "h5_file_v4.7.1",
      4.72: "h5_file_v4.7.2",
      4.73: "h5_file_v4.7.3",
      4.7: "h5_file_v4.7.4"
    }
    this._timePaddingMap = {
      3.1: '',
      [4.1]: '\x30\x34',
      [4.2]: '\x37\x34',
      4.3: '\x32\x32',
      4.4: '\x38\x38',
      [4.71]: '\u0039\u0037',
      [4.72]: '\u0030\u0037',
      [4.73]: '\x37\x38',
      [4.7]: '\x34\x37'
    }
    this._localTokenCipherMap = {
      [4.2]: {
        ["prefix"]: '\u007a\u0037',
        ["secret"]: "qem7+)g%Dhw5",
        ["key"]: "x6e@RoHi$Fgy7!5k"
      },
      [4.3]: {
        ["prefix"]: '\x30\x4a',
        ["secret"]: "+WzD<U36rlTf",
        ["key"]: "ML0Qq&DS81pP/an@"
      },
      [4.4]: {
        ["prefix"]: '\u0028\u003e',
        ["secret"]: "HiO81-Ei89DH",
        ["key"]: "eHL4|FW#Chc3#q?0"
      },
      [4.71]: {
        ["prefix"]: '\x63\x77',
        ["secret"]: "8[8I[]d?960w",
        ["key"]: "X5g1-CN|7<IvRisX"
      },
      4.72: {
        ["prefix"]: '\x43\x32',
        ["secret"]: "K3rOqML0Qq&D",
        ["key"]: "5Tb26XFO]@7n?)F="
      },
      4.73: {
        ["prefix"]: '\u0064\u006c',
        ["secret"]: "A._/XV*bOm%!",
        ["key"]: "_2/7Z#Uumt!A+!Vq"
      },
      [4.7]: {
        ["prefix"]: 'FX',
        ["secret"]: "4*iK&33Z|+6)",
        ["key"]: "gs8&99W04zm5U>Rz"
      }
    }
    this._genAlgoSuffixStrMap = {
      4.2: "9>5*t5",
      [4.3]: "Z=<J_2",
      4.4: "qV!+A!",
      [4.71]: "hh1BNE",
      [4.72]: "87n8!-",
      [4.73]: "kEjxS-",
      [4.7]: "Mp(2C1"
    }
    this._tokenStorageMap = Object.fromEntries(this._supportVersionList.map(X0hMuvw => [X0hMuvw, {}]))
    this._genAlgoStorageMap = Object.fromEntries(this._supportVersionList.map(X0hMuvw => [X0hMuvw, {}]))
    this._fpMap = new Map()
    this._canvasAndWebglFpMap = new Map()
    this._customAlgorithmConfigMap = {
      4.71: {
        ["salt"]: "23k@X!",
        ["keySlice"]: 16
      },
      [4.72]: {
        ["salt"]: "JdM3|5",
        ["keySlice"]: 0x7
      },
      4.73: {
        ["salt"]: "=LN6GO",
        ["keySlice"]: 0x3
      },
      [4.7]: {
        ["salt"]: "7n5<G*",
        ["keySlice"]: 5
      }
    }
    this._algorithmMap = {
      [4.7]: this["_genCustomAlgorithm"](this["_customAlgorithmConfigMap"]["4.7"])
    }
    this.ADLER32 = this.load_module_ADLER32()
  }
  async ["getH5st"](EoGg9yF) {
    const X0hMuvw = gJDM7zn(process["env"]["JD_H5ST_STATE"] === "false", ZEBX4lx(-44));
    try {
      return X0hMuvw ? await this["_getH5stApi"](EoGg9yF) : await this["_getH5stDefault"](EoGg9yF);
    } catch (error) {
      return await this["_getH5stDefault"](EoGg9yF);
    }
  }
  async ["_getH5stApi"](EoGg9yF) {
    const X0hMuvw = ["https://algo.sass.466661.xyz/h5st", "https://algo.466661.xyz/h5st", "http://h5api.257999.xyz/h5st"],
      JfZJqMT = process["env"]["JD_H5ST_API"],
      wCrHUv = {
        ["Content-Type"]: "application/json"
      },
      bM6Prht = {
        ["version"]: process["env"]["JD_H5ST_VERSION"] || EoGg9yF?.["versions"] || "5.2.4",
        ["body"]: {
          ["appid"]: EoGg9yF["appid"] || '',
          ["body"]: JSON["stringify"](EoGg9yF["body"]),
          ["client"]: EoGg9yF["client"] || '',
          ["clientVersion"]: EoGg9yF["clientVersion"] || '',
          ["functionId"]: EoGg9yF["functionId"] || '',
          t: Math["round"](Date["now"]())
        },
        ["pin"]: EoGg9yF["pin"] || "jd_xxx",
        ua: EoGg9yF["ua"] || "jdapp;iPhone;13.2.2;;;M/5.0;appBuild/169480;jdSupportDarkMode/1;ef/1;ep/%7B%22ciphertype%22%3A5%2C%22cipher%22%3A%7B%22ud%22%3A%22CNqnEJTuCNYyC2S4DtK5ZtTwC2DvCzUmYWSnDzVsZtVvYzqzENHwCm%3D%3D%22%2C%22sv%22%3A%22CJckDs4n%22%2C%22iad%22%3A%22%22%7D%2C%22ts%22%3A1727191087%2C%22hdid%22%3A%22JM9F1ywUPwflvMIpYPok0tt5k9kW4ArJEU3lfLhxBqw%3D%22%2C%22version%22%3A%221.0.3%22%2C%22appname%22%3A%22com.360buy.jdmobile%22%2C%22ridx%22%3A-1%7D;Mozilla/5.0 (iPhone; CPU iPhone OS 17_6_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1;",
        ["appId"]: EoGg9yF["appId"]
      };
    if (JfZJqMT && true) {
      const GlTK0Sg = await this["makeApiRequest"](JfZJqMT, wCrHUv, bM6Prht);
      if (GlTK0Sg) {
        return GlTK0Sg;
      } else {
        this["invalidApis"]["add"](JfZJqMT);
      }
    }
    for (const sV_2BHE of X0hMuvw) {
      if (this["invalidApis"]["has"](sV_2BHE)) {
        continue;
      }
      const GlTK0Sg = await this["makeApiRequest"](sV_2BHE, wCrHUv, bM6Prht);
      if (GlTK0Sg) {
        return GlTK0Sg;
      } else {
        this["invalidApis"]["add"](sV_2BHE);
      }
    }
    return {
      ["paramsData"]: '',
      ["params"]: ''
    };
  }
  async ["makeApiRequest"](X0hMuvw, xd1RXd, JfZJqMT) {
    try {
      const wCrHUv = await qx318DO["request"]({
          ["url"]: X0hMuvw,
          ["method"]: "POST",
          ["headers"]: xd1RXd,
          ["body"]: JfZJqMT,
          ["timeout"]: 0x7530,
          ["proxy"]: false
        }),
        bM6Prht = wCrHUv["data"];
      if (bM6Prht && bM6Prht["code"] === 0xc8 && bM6Prht["body"] && bM6Prht["body"]["body"] && bM6Prht["body"].qs) {
        return {
          ["paramsData"]: bM6Prht["body"]["body"],
          ["params"]: bM6Prht["body"].qs
        };
      } else {
        if (gJDM7zn(this["hasLogged"], ZEBX4lx(-0x2c))) {
          console["log"](gJDM7zn("❌ 获取 H5ST 失败，错误信息：" + JSON["stringify"](bM6Prht), " 切换其他API中~", ZEBX4lx(46)))
          this["hasLogged"] = true
        }
      }
    } catch (error) {}
    return null;
  }
  async ["_getH5stDefault"](X0hMuvw) {
    let JfZJqMT = Object["assign"]({}, X0hMuvw, {
      ["h5st"]: '',
      ["params"]: '',
      ["paramsData"]: {}
    });
    try {
      if (gJDM7zn(typeof X0hMuvw === "object" && X0hMuvw !== null, dkNnouh = -44)) {
        return KwLf4Ct(console["log"]("❌ getH5st 传入参数有误"), JfZJqMT);
      } else {
        const GlTK0Sg = ["appId", "appid", "body", "functionId"],
          sV_2BHE = GlTK0Sg["filter"](JfZJqMT => gJDM7zn(X0hMuvw[JfZJqMT], dkNnouh = -0x2c));
        if (sV_2BHE["length"] > 0x0) {
          return KwLf4Ct(console["log"](`❌ getH5st 传入参数有误，缺少必要参数：${sV_2BHE["join"]('\x2c\x20')}`), JfZJqMT);
        }
      }
      if (gJDM7zn(this["_supportVersionList"]["includes"](X0hMuvw?.["version"]), ZEBX4lx(-44))) {
        X0hMuvw["version"] = this["_defaultVersion"];
      }
      const x50QLq = this["_initParams"](X0hMuvw),
        uLFjwi = x50QLq["version"],
        {
          ["appid"]: yCwexm,
          ["body"]: rHOkyp0,
          ["client"]: Nsck2c,
          ["clientVersion"]: rxQljZF,
          ["functionId"]: xDXfuGb
        } = X0hMuvw,
        kvv0Ja = x50QLq["appId"];
      let kpq0Rn = x50QLq["tokenCache"] ? this["_tokenStorageMap"][uLFjwi][kvv0Ja] : null,
        uwSuRX = x50QLq["tokenCache"] ? this["_genAlgoStorageMap"][uLFjwi][kvv0Ja] : null;
      if (gJDM7zn(kpq0Rn, ZEBX4lx(-44)) || gJDM7zn(uwSuRX, ZEBX4lx(-0x2c))) {
        if (x50QLq["localToken"] && gJDM7zn(gJDM7zn(this["_localTokenCipherMap"][uLFjwi], dkNnouh = -44), dkNnouh = -44)) {
          const hIIzFL = KwLf4Ct(kpq0Rn = this["_genToken"](x50QLq["fp"], this["_localTokenCipherMap"][uLFjwi], uLFjwi), this["_genAlgoSuffixStrMap"][uLFjwi]),
            wt4erv = this["_genAlgo"];
          uwSuRX = function (...X0hMuvw) {
            return wt4erv(...X0hMuvw, hIIzFL);
          };
        } else {
          const zTXJaMI = await this["_requestAlgorithm"](x50QLq);
          kpq0Rn = zTXJaMI["token"]
          uwSuRX = new Function("return "["concat"](zTXJaMI["algo"]))()
        }
        if (x50QLq["tokenCache"]) {
          this["_tokenStorageMap"][uLFjwi][kvv0Ja] = kpq0Rn
          this["_genAlgoStorageMap"][uLFjwi][kvv0Ja] = uwSuRX
        }
      }
      if (gJDM7zn(kpq0Rn, ZEBX4lx(-44)) && gJDM7zn(uwSuRX, ZEBX4lx(-0x2c))) {
        return JfZJqMT;
      }
      const JspID3 = {
        ["appid"]: yCwexm,
        ["body"]: rHOkyp0,
        ["client"]: Nsck2c,
        ["clientVersion"]: rxQljZF,
        ["functionId"]: xDXfuGb
      };
      if (X0hMuvw?.t && gJDM7zn(X0hMuvw["t"], ZEBX4lx(64)) === "boolean") {
        X0hMuvw.t = Date["now"]()
        JspID3.t = X0hMuvw.t
      } else {
        X0hMuvw.t = '';
      }
      if (gJDM7zn(JspID3["client"], ZEBX4lx(-44))) {
        delete JspID3["client"];
      }
      if (gJDM7zn(JspID3["clientVersion"], ZEBX4lx(-0x2c))) {
        delete JspID3["clientVersion"];
      }
      const qx318DO = this["_makeSign"](JspID3, kpq0Rn, uwSuRX, x50QLq),
        ZN0l4C = {
          ["functionId"]: xDXfuGb,
          ["body"]: JSON["stringify"](rHOkyp0),
          ["t"]: '',
          ["appid"]: yCwexm,
          ["client"]: '',
          ["clientVersion"]: '',
          ["h5st"]: qx318DO?.["h5st"] || ''
        };
      for (const kDWwC6N of ['\x74', "client", "clientVersion"]) if (X0hMuvw[kDWwC6N]) {
        ZN0l4C[kDWwC6N] = X0hMuvw[kDWwC6N];
      } else {
        delete ZN0l4C[kDWwC6N];
      }
      Object["assign"](JfZJqMT, {
        ["h5st"]: qx318DO?.["h5st"] || '',
        ["params"]: nwI2N8i["stringify"](ZN0l4C),
        ["paramsData"]: ZN0l4C
      });
    } catch (error) {
      console["log"](`❌ 在生成 H5 签名时遇到了错误 ${error["message"] || error}`);
    }
    return JfZJqMT;
  }
  ["_initParams"](X0hMuvw) {
    const wCrHUv = X0hMuvw["version"],
      bM6Prht = {
        ["version"]: wCrHUv,
        ["appId"]: X0hMuvw?.["appId"] || '',
        ["fv"]: this["_fvMap"][wCrHUv],
        fp: '',
        ua: '',
        ["sua"]: '',
        av: '',
        ["url"]: '',
        ["og"]: '',
        ["referer"]: X0hMuvw?.["referer"] || '',
        ["pin"]: X0hMuvw?.["pin"] || '',
        ["cookie"]: X0hMuvw?.["cookie"] || '',
        ["timestamp"]: X0hMuvw?.["timestamp"] || Date["now"](),
        ["bu1"]: '',
        ["random"]: '',
        ["canvas"]: '',
        ["webglFp"]: '',
        ["ccn"]: 0x4,
        ["localToken"]: false,
        ["tokenCache"]: false
      };
    for (const GlTK0Sg of ["localToken", "tokenCache"]) if (X0hMuvw["hasOwnProperty"](GlTK0Sg) && gJDM7zn(X0hMuvw[GlTK0Sg], dkNnouh = 64) === "boolean") {
      bM6Prht[GlTK0Sg] = X0hMuvw[GlTK0Sg];
    }
    if (X0hMuvw["hasOwnProperty"]("bu1")) {
      bM6Prht["bu1"] = X0hMuvw["bu1"];
    }
    bM6Prht["random"] = X0hMuvw["hasOwnProperty"]("random") ? X0hMuvw["random"] : this["_genRandomStr"](gJDM7zn(gJDM7zn(this["_algorithmMap"][wCrHUv], ZEBX4lx(-44)), dkNnouh = -0x2c) ? 11 : 0xa);
    if (X0hMuvw?.ua) {
      let sV_2BHE = X0hMuvw.ua,
        x50QLq = sV_2BHE["match"](/^[\s\S]*?\(([\s\S]*?)\)/),
        uLFjwi = sV_2BHE["match"](/(?<=\/)[0-9]\.0[^'"\n]+/g);
      if (x50QLq?.["length"] > 0x0 && uLFjwi?.["length"] > 0x0) {
        bM6Prht["ua"] = sV_2BHE
        bM6Prht["sua"] = x50QLq[1]
        bM6Prht["av"] = uLFjwi[0]
      }
    }
    if (gJDM7zn(bM6Prht["ua"], dkNnouh = -44)) {
      let sV_2BHE = this["_genUA"](),
        x50QLq = sV_2BHE["match"](/^[\s\S]*?\(([\s\S]*?)\)/),
        uLFjwi = sV_2BHE["match"](/(?<=\/)[0-9]\.0[^'"\n]+/g);
      if (x50QLq?.["length"] > 0 && uLFjwi?.["length"] > 0) {
        bM6Prht.ua = sV_2BHE
        bM6Prht["sua"] = x50QLq[1]
        bM6Prht.av = uLFjwi[0x0]
      }
    }
    if (KwLf4Ct(bM6Prht["version"] = wCrHUv, bM6Prht["fp"] = this["_fpMap"]["get"](bM6Prht["ua"]) || '', gJDM7zn(bM6Prht.fp, dkNnouh = -0x2c))) {
      if (KwLf4Ct(bM6Prht["fp"] = this[`${"_makeFp"["concat"](bM6Prht["version"]["replace"]('.', "_"))}`](), bM6Prht["ua"]["startsWith"]('\u006a\u0064'))) {
        this["_fpMap"]["set"](bM6Prht.ua, bM6Prht["fp"]);
      }
    }
    const yCwexm = this["_canvasAndWebglFpMap"]["get"](bM6Prht.ua) || '';
    if (gJDM7zn(yCwexm, ZEBX4lx(-0x2c))) {
      const rHOkyp0 = this["_genCanvasAndWebglFp"](wCrHUv);
      if (KwLf4Ct(bM6Prht["canvas"] = rHOkyp0["canvas"], bM6Prht["webglFp"] = rHOkyp0["webglFp"], bM6Prht.ua["startsWith"]('\x6a\x64'))) {
        this["_canvasAndWebglFpMap"]["set"](bM6Prht["ua"], rHOkyp0);
      }
    } else {
      const {
        ["canvas"]: xDXfuGb,
        ["webglFp"]: kvv0Ja
      } = yCwexm;
      bM6Prht["canvas"] = xDXfuGb
      bM6Prht["webglFp"] = kvv0Ja
    }
    if (X0hMuvw?.["url"] && true) {
      try {
        const kpq0Rn = new URL(X0hMuvw["url"]);
        bM6Prht["url"] = kpq0Rn["href"]
        bM6Prht["og"] = kpq0Rn["origin"]
      } catch {}
    }
    return bM6Prht;
  }
  async ["_requestAlgorithm"](X0hMuvw) {
    try {
      const JfZJqMT = this["_getExpandParamsData"](X0hMuvw),
        wCrHUv = this["_AESEncrypt"](JSON["stringify"](JfZJqMT, null, 2), JspID3["enc"]["Utf8"]["parse"](gJDM7zn(gJDM7zn(this["_algorithmMap"][X0hMuvw["version"]], dkNnouh = -0x2c), dkNnouh = -0x2c) ? "(olf1ll#s-w@!0mw" : "wm0!@w-s#ll1flo("), X0hMuvw["version"]),
        bM6Prht = {
          ["version"]: X0hMuvw["version"],
          fp: X0hMuvw.fp,
          ["appId"]: X0hMuvw["appId"],
          ["timestamp"]: Date["now"](),
          ["platform"]: "web",
          ["expandParams"]: wCrHUv,
          ["fv"]: X0hMuvw.fv
        },
        GlTK0Sg = {
          ["url"]: "https://cactus.jd.com/request_algo?g_ty=ajax",
          ["method"]: "POST",
          ["headers"]: {
            ["Content-Type"]: "application/json;charset=utf-8",
            ["Origin"]: "https://cactus.jd.com",
            ["Host"]: "cactus.jd.com",
            ["Accept"]: "*/*",
            ["User-Agent"]: X0hMuvw?.ua || "Mozilla/5.0 (iPhone; CPU iPhone OS 16_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.6 Mobile/15E148 Safari/604.1 Edg/126.0.0.0"
          },
          ["data"]: bM6Prht,
          ["proxy"]: null,
          ["timeout"]: 0xea60,
          ["debug"]: false
        };
      let sV_2BHE = 0x0,
        x50QLq = null;
      const uLFjwi = 0x1;
      while (sV_2BHE < uLFjwi) {
        const yCwexm = await qx318DO["request"](GlTK0Sg);
        if (gJDM7zn(yCwexm["success"], dkNnouh = -44) && true) {
          x50QLq = `❌ request_algo 请求失败 ➜ ${yCwexm["error"]}`
          sV_2BHE++
          continue;
        }
        if (gJDM7zn(yCwexm["data"], ZEBX4lx(-0x2c))) {
          x50QLq = "🚫 request_algo 请求失败 ➜ 无响应数据"
          sV_2BHE++
          continue;
        }
        try {
          const rHOkyp0 = yCwexm["data"];
          if (rHOkyp0?.["data"] && rHOkyp0?.["data"]?.["result"]) {
            const rxQljZF = rHOkyp0["data"]["result"]?.["algo"],
              xDXfuGb = rHOkyp0["data"]["result"]?.["tk"];
            if (rxQljZF && xDXfuGb) {
              return {
                ["token"]: xDXfuGb,
                ["algo"]: rxQljZF
              };
            }
          }
          x50QLq = `🚫 request_algo 请求异常 ➜ ${JSON["stringify"](rHOkyp0)}`;
        } catch (error) {
          x50QLq = `❌ request_algo 在处理接口响应时遇到了错误 ➜ ${error["message"] || error}`;
        }
        sV_2BHE++;
      }
      if (sV_2BHE >= uLFjwi) {
        console["log"](x50QLq);
      }
    } catch (error) {
      console["log"](`❌ request_algo 在处理API请求时遇到了错误 ${error["message"] || error}`);
    }
    return {
      ["token"]: '',
      ["algo"]: ''
    };
  }
  ["_getExpandParamsData"](EoGg9yF) {
    const X0hMuvw = 430,
      xd1RXd = 0x3a4,
      JfZJqMT = 430,
      wCrHUv = 0x3a4;
    switch (EoGg9yF["version"]) {
      case "3.1":
        return {
          ["wc"]: 0,
          wd: 0,
          l: "zh-CN",
          ["ls"]: "zh-CN,zh",
          ["ml"]: 0,
          ["pl"]: 0x0,
          ["av"]: EoGg9yF["av"],
          ["ua"]: EoGg9yF["ua"],
          ["sua"]: EoGg9yF["sua"],
          pp: EoGg9yF["pin"] ? {
            ["p1"]: EoGg9yF["pin"],
            ["p2"]: EoGg9yF["pin"]
          } : {},
          ["pp1"]: '',
          pm: {
            ["ps"]: "prompt",
            np: "default"
          },
          ["w"]: X0hMuvw,
          ["h"]: xd1RXd,
          ["ow"]: JfZJqMT,
          ["oh"]: wCrHUv,
          ["url"]: EoGg9yF["url"],
          ["og"]: EoGg9yF.og,
          pr: 1.25,
          ["re"]: EoGg9yF["referer"],
          ["ai"]: EoGg9yF["appId"],
          ["fp"]: EoGg9yF.fp
        };
      case "4.1":
        return {
          wc: 0x0,
          ["wd"]: 0x0,
          ["l"]: "zh-CN",
          ls: "zh-CN,zh",
          ml: 0x0,
          ["pl"]: 0x0,
          av: EoGg9yF.av,
          ua: EoGg9yF["ua"],
          ["sua"]: EoGg9yF["sua"],
          ["pp"]: {},
          ["pp1"]: EoGg9yF["cookie"],
          ["pm"]: {
            ["ps"]: "prompt",
            ["np"]: "default"
          },
          w: X0hMuvw,
          h: xd1RXd,
          ["ow"]: JfZJqMT,
          ["oh"]: wCrHUv,
          ["url"]: EoGg9yF["url"],
          og: EoGg9yF["og"],
          pr: 1.25,
          ["re"]: EoGg9yF["referer"],
          ["random"]: EoGg9yF["random"],
          ["referer"]: EoGg9yF["referer"],
          v: EoGg9yF["fv"],
          ["ai"]: EoGg9yF["appId"],
          fp: EoGg9yF["fp"]
        };
      case "4.2":
        return {
          ["wc"]: 0x0,
          ["wd"]: 0,
          ["l"]: "zh-CN",
          ["ls"]: "zh-CN,zh",
          ml: 0,
          ["pl"]: 0,
          av: EoGg9yF["av"],
          ["ua"]: EoGg9yF.ua,
          ["sua"]: EoGg9yF["sua"],
          ["pp"]: EoGg9yF["pin"] ? {
            ["p1"]: EoGg9yF["pin"],
            ["p2"]: EoGg9yF["pin"]
          } : {},
          ["extend"]: {
            pm: 0x0,
            ["wd"]: 0,
            l: 0,
            ls: 0x2,
            ["wk"]: 0x0,
            ["bu1"]: EoGg9yF["bu1"] || "9.9.9"
          },
          ["pp1"]: EoGg9yF["pin"] ? '' : EoGg9yF["cookie"],
          pm: {
            ps: "prompt",
            np: "default"
          },
          w: X0hMuvw,
          ["h"]: xd1RXd,
          ow: JfZJqMT,
          oh: wCrHUv,
          ["url"]: EoGg9yF["url"],
          og: EoGg9yF.og,
          pr: 1.25,
          re: EoGg9yF["referer"],
          ["random"]: EoGg9yF["random"],
          ["referer"]: EoGg9yF["referer"],
          v: EoGg9yF["fv"],
          ai: EoGg9yF["appId"],
          fp: EoGg9yF.fp
        };
      case "4.3":
        return {
          wc: 0x0,
          ["wd"]: 0x0,
          l: "zh-CN",
          ["ls"]: "zh-CN,zh",
          ["ml"]: 2,
          ["pl"]: 0x5,
          av: EoGg9yF.av,
          ["ua"]: EoGg9yF.ua,
          ["sua"]: EoGg9yF["sua"],
          ["pp"]: EoGg9yF["pin"] ? {
            ["p1"]: EoGg9yF["pin"],
            p2: EoGg9yF["pin"],
            p3: EoGg9yF["pin"]
          } : {},
          ["extend"]: {
            ["wd"]: 0,
            ["l"]: 0x0,
            ls: 0x5,
            wk: 0x0,
            ["bu1"]: EoGg9yF["bu1"] || "0.1.9",
            ["bu2"]: 0,
            ["bu3"]: 100,
            ["bu4"]: 0x0
          },
          ["pp1"]: EoGg9yF["pin"] ? '' : EoGg9yF["cookie"],
          pm: {
            ["ps"]: "prompt",
            ["np"]: "default"
          },
          w: X0hMuvw,
          ["h"]: xd1RXd,
          ["ow"]: JfZJqMT,
          ["oh"]: wCrHUv,
          ["url"]: EoGg9yF["url"],
          ["og"]: EoGg9yF.og,
          pr: 0x1,
          re: EoGg9yF["referer"],
          ["random"]: EoGg9yF["random"],
          ["referer"]: EoGg9yF["referer"],
          v: EoGg9yF.fv,
          ["ai"]: EoGg9yF["appId"],
          ["fp"]: EoGg9yF["fp"]
        };
      case "4.4":
        return {
          ["wc"]: 0x0,
          wd: 0,
          ["l"]: "zh-CN",
          ["ls"]: "zh-CN,zh",
          ["ml"]: 0x0,
          ["pl"]: 0x0,
          av: EoGg9yF["av"],
          ["ua"]: EoGg9yF.ua,
          ["sua"]: EoGg9yF["sua"],
          ["pp"]: EoGg9yF["pin"] ? {
            p1: EoGg9yF["pin"],
            ["p2"]: EoGg9yF["pin"]
          } : {},
          ["extend"]: {
            wd: 0x0,
            l: 0x0,
            ls: 5,
            wk: 0,
            ["bu1"]: EoGg9yF["bu1"] || "0.1.7",
            ["bu2"]: 0,
            ["bu3"]: 0x64,
            ["bu4"]: 0
          },
          ["pp1"]: EoGg9yF["pin"] ? '' : EoGg9yF["cookie"],
          w: X0hMuvw,
          ["h"]: xd1RXd,
          ow: JfZJqMT,
          oh: wCrHUv,
          ["url"]: EoGg9yF["url"],
          og: EoGg9yF["og"],
          pr: 0x1,
          ["re"]: EoGg9yF["referer"],
          ["random"]: EoGg9yF["random"],
          ["referer"]: EoGg9yF["referer"],
          v: EoGg9yF["fv"],
          ai: EoGg9yF["appId"],
          ["fp"]: EoGg9yF["fp"]
        };
      case "4.7":
        return {
          wc: 0,
          ["wd"]: 0x0,
          ["l"]: "zh-CN",
          ls: "zh-CN",
          ml: 0x2,
          ["pl"]: 0x5,
          av: EoGg9yF["av"],
          ["ua"]: EoGg9yF["ua"],
          ["sua"]: EoGg9yF["sua"],
          ["pp"]: EoGg9yF["pin"] ? {
            p1: EoGg9yF["pin"]
          } : {},
          ["extend"]: {
            ["wd"]: 0x0,
            ["l"]: 0,
            ["ls"]: 0x0,
            ["wk"]: 0x0,
            ["bu1"]: EoGg9yF["bu1"] || "0.1.7",
            ["bu2"]: 0,
            ["bu3"]: 64,
            ["bu4"]: 0,
            ["bu5"]: 0x0,
            ["bu6"]: 14,
            ["bu7"]: '',
            ["bu8"]: 0
          },
          ["pp1"]: EoGg9yF["pin"] ? '' : EoGg9yF["cookie"],
          ["w"]: X0hMuvw,
          h: xd1RXd,
          ow: JfZJqMT,
          oh: wCrHUv,
          ["url"]: EoGg9yF["url"],
          ["og"]: EoGg9yF.og,
          pf: "iPhone",
          pr: 0x1,
          re: EoGg9yF["referer"],
          ["random"]: EoGg9yF["random"],
          ["referer"]: EoGg9yF["referer"],
          v: EoGg9yF["fv"],
          ["bu2"]: '',
          ["canvas"]: EoGg9yF["canvas"],
          ["canvas1"]: EoGg9yF["canvas"],
          ["webglFp"]: EoGg9yF["webglFp"],
          ["webglFp1"]: EoGg9yF["webglFp"],
          ["ccn"]: EoGg9yF["ccn"],
          ["ai"]: EoGg9yF["appId"],
          fp: EoGg9yF.fp
        };
      default:
        return {};
    }
  }
  ["_makeSign"](X0hMuvw, xd1RXd, JfZJqMT, wCrHUv) {
    try {
      const bM6Prht = wCrHUv["version"],
        GlTK0Sg = new Date(wCrHUv["timestamp"]),
        sV_2BHE = `${GlTK0Sg["getFullYear"]()}${String(gJDM7zn(GlTK0Sg["getMonth"](), 1, dkNnouh = 0x2e))["padStart"](2, '0')}${String(GlTK0Sg["getDate"]())["padStart"](0x2, '\x30')}${String(GlTK0Sg["getHours"]())["padStart"](0x2, '\x30')}${String(GlTK0Sg["getMinutes"]())["padStart"](2, "0")}${String(GlTK0Sg["getSeconds"]())["padStart"](0x2, "0")}${String(GlTK0Sg["getMilliseconds"]())["padStart"](0x3, "0")}`,
        x50QLq = sV_2BHE["concat"](this["_timePaddingMap"][bM6Prht]);
      let uLFjwi = Object["entries"](X0hMuvw)["map"](([X0hMuvw, xd1RXd]) => {
        if (X0hMuvw === "body") {
          xd1RXd = JspID3["SHA256"](JSON["stringify"](xd1RXd))["toString"]();
        }
        return {
          ["key"]: X0hMuvw,
          ["value"]: xd1RXd
        };
      });
      const yCwexm = this["_algorithmMap"][bM6Prht] || JspID3;
      let rHOkyp0 = '',
        Nsck2c = '',
        rxQljZF = '';
      const xDXfuGb = uLFjwi["map"](X0hMuvw => `${X0hMuvw["key"]}:${X0hMuvw["value"]}`)["join"]('&'),
        kvv0Ja = JfZJqMT(xd1RXd, wCrHUv.fp, x50QLq, wCrHUv["appId"], yCwexm)["toString"]() || '',
        kpq0Rn = this["_algoMethodMap"][bM6Prht];
      if (["MD5", "SHA1", "SHA256", "SHA512"]["includes"](kpq0Rn)) {
        rHOkyp0 = yCwexm[kpq0Rn](''["concat"](kvv0Ja)["concat"](xDXfuGb)["concat"](kvv0Ja))["toString"]();
      } else {
        if (["HmacMD5", "HmacSHA1", "HmacSHA256", "HmacSHA512"]["includes"](kpq0Rn)) {
          rHOkyp0 = yCwexm[kpq0Rn](''["concat"](xDXfuGb), ''["concat"](kvv0Ja))["toString"]();
        }
      }
      let uwSuRX = {};
      switch (bM6Prht) {
        case "3.1":
          uwSuRX = {
            ["sua"]: wCrHUv["sua"],
            pp: wCrHUv["pin"] ? {
              p1: wCrHUv["pin"],
              ["p2"]: wCrHUv["pin"]
            } : {},
            ["fp"]: wCrHUv["fp"]
          };
          break;
        case "4.1":
          uwSuRX = {
            ["sua"]: wCrHUv["sua"],
            ["pp"]: {},
            ["random"]: wCrHUv["random"],
            ["referer"]: wCrHUv["referer"],
            ["v"]: wCrHUv["fv"],
            ["fp"]: wCrHUv.fp
          };
          break;
        case "4.2":
          uwSuRX = {
            ["sua"]: wCrHUv["sua"],
            pp: wCrHUv["pin"] ? {
              ["p1"]: wCrHUv["pin"],
              p2: wCrHUv["pin"]
            } : {},
            ["extend"]: {
              ["pm"]: 0,
              wd: 0,
              ["l"]: 0x0,
              ls: 0x2,
              wk: 0x0,
              ["bu1"]: wCrHUv["bu1"] || "9.9.9"
            },
            ["random"]: wCrHUv["random"],
            ["referer"]: wCrHUv["referer"],
            ["v"]: wCrHUv["fv"],
            fp: wCrHUv.fp
          };
          break;
        case "4.3":
          uwSuRX = {
            ["sua"]: wCrHUv["sua"],
            ["pp"]: wCrHUv["pin"] ? {
              p1: wCrHUv["pin"],
              ["p2"]: wCrHUv["pin"],
              p3: wCrHUv["pin"]
            } : {},
            ["extend"]: {
              wd: 0,
              ["l"]: 0x0,
              ["ls"]: 5,
              ["wk"]: 0,
              ["bu1"]: wCrHUv["bu1"] || "0.1.8",
              ["bu2"]: gJDM7zn(1, ZEBX4lx(20)),
              ["bu3"]: 0x64,
              ["bu4"]: 0x0
            },
            ["random"]: wCrHUv["random"],
            ["v"]: wCrHUv.fv,
            ["fp"]: wCrHUv["fp"]
          };
          break;
        case "4.4":
          uwSuRX = {
            ["sua"]: wCrHUv["sua"],
            pp: wCrHUv["pin"] ? {
              ["p1"]: wCrHUv["pin"],
              ["p2"]: wCrHUv["pin"]
            } : {},
            ["extend"]: {
              ["wd"]: 0x0,
              l: 0x0,
              ["ls"]: 5,
              wk: 0x0,
              ["bu1"]: wCrHUv["bu1"] || "0.1.7",
              ["bu2"]: gJDM7zn(1, ZEBX4lx(20)),
              ["bu3"]: 6,
              ["bu4"]: 0,
              ["bu5"]: 0
            },
            ["random"]: wCrHUv["random"],
            v: wCrHUv.fv,
            fp: wCrHUv["fp"]
          };
          break;
        case "4.7":
          uwSuRX = {
            ["sua"]: wCrHUv["sua"],
            ["pp"]: wCrHUv["pin"] ? {
              p1: wCrHUv["pin"]
            } : {},
            ["extend"]: {
              wd: 0x0,
              ["l"]: 0x0,
              ls: 5,
              ["wk"]: 0,
              ["bu1"]: wCrHUv["bu1"] || "0.1.7",
              ["bu2"]: gJDM7zn(0x1, dkNnouh = 0x14),
              ["bu3"]: 66,
              ["bu4"]: 0x0,
              ["bu5"]: 0,
              ["bu6"]: 15,
              ["bu7"]: '',
              ["bu8"]: 0x0
            },
            ["random"]: wCrHUv["random"],
            ["v"]: wCrHUv.fv,
            ["canvas"]: wCrHUv["canvas"],
            ["webglFp"]: wCrHUv["webglFp"],
            ["ccn"]: wCrHUv["ccn"],
            fp: wCrHUv.fp
          };
      }
      Nsck2c = this["_AESEncrypt"](JSON["stringify"](uwSuRX, null, 0x2), JspID3["enc"]["Utf8"]["parse"](this["_keyMap"][bM6Prht]), bM6Prht);
      switch (wCrHUv["version"]) {
        case "4.7":
          rxQljZF = yCwexm["MD5"](''["concat"](kvv0Ja)["concat"](`appid:${X0hMuvw["appid"]}&functionId:${X0hMuvw["functionId"]}`)["concat"](kvv0Ja))["toString"]();
      }
      const hIIzFL = [''["concat"](sV_2BHE), ''["concat"](wCrHUv["fp"]), ''["concat"](wCrHUv["appId"]), ''["concat"](xd1RXd), ''["concat"](rHOkyp0), ''["concat"](bM6Prht), ''["concat"](String(wCrHUv["timestamp"])), ''["concat"](Nsck2c)];
      if (rxQljZF) {
        hIIzFL["push"](rxQljZF);
      }
      return {
        ["_stk"]: uLFjwi["map"](X0hMuvw => X0hMuvw["key"])["join"]('\u002c'),
        ["_ste"]: 0x1,
        ["h5st"]: hIIzFL["join"]('\u003b')
      };
    } catch (error) {
      console["log"](`❌ 遇到了错误 ${error["message"] || error}`);
    }
    return {
      ["_stk"]: '',
      ["_ste"]: 0,
      ["h5st"]: ''
    };
  }
  ["_genToken"](X0hMuvw, xd1RXd, JfZJqMT) {
    const bM6Prht = () => {
        const X0hMuvw = ['\u0031', '\u0032', "3"],
          xd1RXd = ['\x2b', '\u0078'],
          JfZJqMT = gJDM7zn(0x2, Math["floor"](0x4 * Math["random"]()), ZEBX4lx(46));
        let wCrHUv = '';
        for (let bM6Prht = 0; bM6Prht < JfZJqMT; bM6Prht++) if (KwLf4Ct(wCrHUv += X0hMuvw[Math["floor"](gJDM7zn(Math["random"](), 3, ZEBX4lx(0xa)))], bM6Prht) < JfZJqMT - 0x1) {
          wCrHUv += xd1RXd[Math["floor"](gJDM7zn(Math["random"](), 0x2, ZEBX4lx(10)))];
        }
        if (wCrHUv["length"] < 0x9) {
          wCrHUv += this["_genRandomStr"]()["substring"](0, gJDM7zn(0x9, wCrHUv["length"], dkNnouh = 0x1f));
        }
        const GlTK0Sg = JspID3["enc"]["Utf8"]["parse"](wCrHUv);
        return JspID3["enc"]["Base64"]["stringify"](GlTK0Sg)["replace"](/\+/g, '\x2d')["replace"](/\//g, '_')["replace"](/=/g, '');
      },
      GlTK0Sg = X0hMuvw => {
        function wCrHUv(wCrHUv) {
          return wCrHUv["map"](bM6Prht => {
            let GlTK0Sg = gJDM7zn('00', (0xff & bM6Prht)["toString"](16), ZEBX4lx(46));
            return GlTK0Sg["slice"](gJDM7zn(2, dkNnouh = 0x14));
          })["join"]('');
        }
        function bM6Prht(bM6Prht) {
          let GlTK0Sg = new Uint8Array(bM6Prht["length"]);
          return KwLf4Ct(GlTK0Sg["forEach"]((GlTK0Sg, wCrHUv, uLFjwi) => (uLFjwi[wCrHUv] = bM6Prht["charCodeAt"](wCrHUv), undefined)), wCrHUv(GlTK0Sg));
        }
        function GlTK0Sg(wCrHUv) {
          let bM6Prht = function () {
              let bM6Prht = new ArrayBuffer(0x2);
              return KwLf4Ct(new DataView(bM6Prht)["setInt16"](0, 256, gJDM7zn(0x0, ZEBX4lx(-44))), 0x100 === new Int16Array(bM6Prht)[0]);
            }(),
            GlTK0Sg = Math["floor"](gJDM7zn(wCrHUv, Math["pow"](2, 32), ZEBX4lx(62))),
            sV_2BHE = wCrHUv % Math["pow"](2, 32),
            EoGg9yF = new ArrayBuffer(0x8),
            xd1RXd = new DataView(EoGg9yF);
          return KwLf4Ct(bM6Prht ? (xd1RXd["setUint32"](0, sV_2BHE, bM6Prht), xd1RXd["setUint32"](4, GlTK0Sg, bM6Prht)) : (xd1RXd["setUint32"](0x0, GlTK0Sg, bM6Prht), xd1RXd["setUint32"](0x4, sV_2BHE, bM6Prht)), new Uint8Array(EoGg9yF));
        }
        let sV_2BHE = '',
          uLFjwi = Date.now(),
          yCwexm = xd1RXd.secret,
          EoGg9yF = function (wCrHUv, bM6Prht, uLFjwi, EoGg9yF) {
            let xd1RXd = new Uint8Array(0x10),
              JfZJqMT = KwLf4Ct(xd1RXd.forEach((bM6Prht, xd1RXd, JfZJqMT) => (JfZJqMT[xd1RXd] = wCrHUv.charCodeAt(xd1RXd), undefined)), GlTK0Sg(bM6Prht)),
              rHOkyp0 = new Uint8Array(2),
              Nsck2c = KwLf4Ct(rHOkyp0.forEach((wCrHUv, xd1RXd, JfZJqMT) => (JfZJqMT[xd1RXd] = uLFjwi.charCodeAt(xd1RXd), undefined)), new Uint8Array(0xc)),
              rxQljZF = KwLf4Ct(Nsck2c.forEach((wCrHUv, xd1RXd, JfZJqMT) => (JfZJqMT[xd1RXd] = EoGg9yF.charCodeAt(xd1RXd), undefined)), new Uint8Array(38)),
              xDXfuGb = KwLf4Ct((rxQljZF.set(rHOkyp0), rxQljZF.set(Nsck2c, 0x2), rxQljZF.set(JfZJqMT, 14), rxQljZF.set(xd1RXd, 0x16)), x50QLq.buf(rxQljZF)),
              g3RMchq = KwLf4Ct(xDXfuGb >>>= 0x0, gJDM7zn("00000000", xDXfuGb.toString(16), dkNnouh = 0x2e));
            return g3RMchq.substring(gJDM7zn(g3RMchq.length, 0x8, ZEBX4lx(31)));
          }(X0hMuvw, uLFjwi, xd1RXd.prefix, yCwexm);
        return KwLf4Ct(sV_2BHE += bM6Prht(EoGg9yF), sV_2BHE += bM6Prht(xd1RXd["prefix"]), sV_2BHE += bM6Prht(yCwexm), sV_2BHE += wCrHUv(GlTK0Sg(uLFjwi)), sV_2BHE += bM6Prht(X0hMuvw), this["_AESEncrypt"](JspID3["enc"]["Hex"]["parse"](sV_2BHE), JspID3["enc"]["Utf8"]["parse"](xd1RXd["key"]), JfZJqMT));
      },
      sV_2BHE = X0hMuvw => {
        const xd1RXd = [X0hMuvw["magic"], X0hMuvw["version"], X0hMuvw["platform"], X0hMuvw["expires"], X0hMuvw["producer"], X0hMuvw["expr"], X0hMuvw["cipher"]]["join"]('');
        let JfZJqMT = x50QLq["str"](xd1RXd),
          wCrHUv = KwLf4Ct(JfZJqMT >>>= 0x0, gJDM7zn("00000000", JfZJqMT["toString"](0x10), dkNnouh = 0x2e));
        return wCrHUv["substring"](gJDM7zn(wCrHUv["length"], 0x8, ZEBX4lx(31)));
      },
      x50QLq = this["ADLER32"],
      uLFjwi = {
        ["magic"]: "tk",
        ["version"]: '\x30\x33',
        ["platform"]: "w",
        ["expires"]: '\x34\x31',
        ["producer"]: "l",
        ["expr"]: bM6Prht(),
        ["cipher"]: GlTK0Sg(X0hMuvw)
      };
    return KwLf4Ct(uLFjwi["adler32"] = sV_2BHE(uLFjwi), [uLFjwi["magic"], uLFjwi["version"], uLFjwi["platform"], uLFjwi["adler32"], uLFjwi["expires"], uLFjwi["producer"], uLFjwi["expr"], uLFjwi["cipher"]]["join"](''));
  }
  ["_genAlgo"](X0hMuvw, xd1RXd, JfZJqMT, wCrHUv, bM6Prht, GlTK0Sg) {
    const sV_2BHE = (xd1RXd, JfZJqMT, wCrHUv) => {
      let sV_2BHE = '';
      switch (xd1RXd) {
        case '1':
          sV_2BHE = "MD5";
          break;
        case '\x32':
          sV_2BHE = "SHA256";
          break;
        case '3':
          sV_2BHE = "HmacSHA256";
      }
      return xd1RXd === "3" ? wCrHUv[sV_2BHE](JfZJqMT, X0hMuvw)["toString"]() : wCrHUv[sV_2BHE](JfZJqMT)["toString"]();
    };
    let x50QLq = '';
    const uLFjwi = ''["concat"](X0hMuvw)["concat"](xd1RXd)["concat"](JfZJqMT)["concat"](wCrHUv)["concat"](GlTK0Sg),
      yCwexm = X0hMuvw["slice"](0x10, 28),
      rHOkyp0 = JspID3["enc"]["Utf8"]["stringify"](JspID3["enc"]["Base64"]["parse"](yCwexm["replace"](/-/g, '\u002b')["replace"](/_/g, '\u002f'))),
      rxQljZF = rHOkyp0["match"](new RegExp("^[123]([x+][123])+"))[0x0]["split"]('');
    return KwLf4Ct(rxQljZF["forEach"]((X0hMuvw, xd1RXd, JfZJqMT) => {
      if (['1', '\u0032', "3"]["includes"](X0hMuvw)) {
        if (xd1RXd === 0 && true) {
          x50QLq = sV_2BHE(X0hMuvw, uLFjwi, bM6Prht);
        } else {
          if (xd1RXd >= 0x2) {
            const wCrHUv = JfZJqMT[gJDM7zn(xd1RXd, 1, dkNnouh = 0x1f)];
            if (wCrHUv === '\x2b') {
              x50QLq += sV_2BHE(X0hMuvw, uLFjwi, bM6Prht);
            } else {
              if (wCrHUv === '\u0078') {
                x50QLq = sV_2BHE(X0hMuvw, x50QLq, bM6Prht);
              }
            }
          }
        }
      }
    }), x50QLq);
  }
  ["_genCustomAlgorithm"](X0hMuvw) {
    const {
      ["salt"]: JfZJqMT,
      ["keySlice"]: wCrHUv
    } = X0hMuvw;
    let bM6Prht = {
      ["enc"]: JspID3["enc"]
    };
    for (let GlTK0Sg of ["MD5", "SHA1", "SHA256", "SHA512"]) bM6Prht[GlTK0Sg] = function (X0hMuvw) {
      return JspID3[GlTK0Sg](gJDM7zn(X0hMuvw, JfZJqMT, ZEBX4lx(0x2e)));
    };
    for (let GlTK0Sg of ["HmacMD5", "HmacSHA1", "HmacSHA256", "HmacSHA512"]) bM6Prht[GlTK0Sg] = function (X0hMuvw, xd1RXd) {
      return JspID3[GlTK0Sg](gJDM7zn(X0hMuvw, JfZJqMT, dkNnouh = 46), gJDM7zn(xd1RXd["slice"](0, wCrHUv)["split"]('')["map"](X0hMuvw => String["fromCharCode"](158 - X0hMuvw["charCodeAt"](0)))["reverse"]()["join"](''), xd1RXd["slice"](wCrHUv), dkNnouh = 46));
    };
    const sV_2BHE = "WVUTSRQPONMLKJIHGFEDCBA-_9876543210zyxwvutsrqponmlkjihgfedcbaZYX"["split"]('')["filter"](Boolean),
      x50QLq = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="["split"]('')["filter"](Boolean);
    return KwLf4Ct(bM6Prht["enc"]["Base64"]["encode"] = function (X0hMuvw) {
      let JfZJqMT = Object["fromEntries"](x50QLq["map"]((X0hMuvw, JfZJqMT) => [X0hMuvw, sV_2BHE[JfZJqMT]])),
        wCrHUv = '' + X0hMuvw.ciphertext,
        bM6Prht = gJDM7zn(0x3, X0hMuvw.ciphertext.sigBytes % 0x3, dkNnouh = 31);
      for (let GlTK0Sg of Array(bM6Prht)) wCrHUv += gJDM7zn('0', bM6Prht, dkNnouh = 0x2e);
      let uLFjwi = new Buffer["from"](wCrHUv, "hex")["toString"]("base64")["split"]('')["reverse"]()["join"]('');
      return uLFjwi["split"]('')["map"](X0hMuvw => JfZJqMT[X0hMuvw] || X0hMuvw)["join"]('')["replace"](/\+/g, '-')["replace"](/\//g, '\u005f')["replace"](/=/g, '');
    }, bM6Prht);
  }
  ["_genCanvasAndWebglFp"](EoGg9yF) {
    const X0hMuvw = this["_algorithmMap"][EoGg9yF] || JspID3,
      xd1RXd = `envCollectdata:image/png;base64,${this["_genRandomStr"](0xa, "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ+/")}`,
      JfZJqMT = `${xd1RXd}§extensions:ANGLE_instanced_arrays;EXT_blend_minmax;EXT_clip_control;EXT_color_buffer_half_float;EXT_depth_clamp;EXT_frag_depth;EXT_polygon_offset_clamp;EXT_shader_texture_lod;EXT_texture_filter_anisotropic;EXT_sRGB;KHR_parallel_shader_compile;OES_element_index_uint;OES_fbo_render_mipmap;OES_standard_derivatives;OES_texture_float;OES_texture_half_float;OES_texture_half_float_linear;OES_vertex_array_object;WEBGL_color_buffer_float;WEBGL_compressed_texture_astc;WEBGL_compressed_texture_etc;WEBGL_compressed_texture_etc1;WEBGL_compressed_texture_pvrtc;WEBKIT_WEBGL_compressed_texture_pvrtc;WEBGL_debug_renderer_info;WEBGL_debug_shaders;WEBGL_depth_texture;WEBGL_draw_buffers;WEBGL_lose_context;WEBGL_multi_draw;WEBGL_polygon_mode§extensions:ANGLE_instanced_arrays;EXT_blend_minmax;EXT_clip_control;EXT_color_buffer_half_float;EXT_depth_clamp;EXT_frag_depth;EXT_polygon_offset_clamp;EXT_shader_texture_lod;EXT_texture_filter_anisotropic;EXT_sRGB;KHR_parallel_shader_compile;OES_element_index_uint;OES_fbo_render_mipmap;OES_standard_derivatives;OES_texture_float;OES_texture_half_float;OES_texture_half_float_linear;OES_vertex_array_object;WEBGL_color_buffer_float;WEBGL_compressed_texture_astc;WEBGL_compressed_texture_etc;WEBGL_compressed_texture_etc1;WEBGL_compressed_texture_pvrtc;WEBKIT_WEBGL_compressed_texture_pvrtc;WEBGL_debug_renderer_info;WEBGL_debug_shaders;WEBGL_depth_texture;WEBGL_draw_buffers;WEBGL_lose_context;WEBGL_multi_draw;WEBGL_polygon_mode§w1[1, 1]§w2[1, 511]§w38§w4yes§w58§w624§w78§w816§w932§w1016384§w111024§w1216384§w1316§w1416384§w1531§w1616§w1716§w181024§w19[16384, 16384]§w208§w21WebKit WebGL§w22WebGL GLSL ES 1.0 (1.0)§w230§w24WebKit§w25WebGL 1.0§wuv:Apple Inc.§wur:Apple GPU`;
    return KwLf4Ct('', {
      ["canvas"]: X0hMuvw["MD5"](xd1RXd)["toString"](),
      ["webglFp"]: X0hMuvw["MD5"](JfZJqMT)["toString"]()
    });
  }
  ["_AESEncrypt"](EoGg9yF, X0hMuvw, xd1RXd) {
    const JfZJqMT = JspID3["enc"]["Utf8"]["parse"](EoGg9yF),
      wCrHUv = JspID3["AES"]["encrypt"](JfZJqMT, X0hMuvw, {
        iv: JspID3["enc"]["Utf8"]["parse"]("0102030405060708"),
        ["mode"]: JspID3["mode"]["CBC"],
        ["padding"]: JspID3["pad"]["Pkcs7"]
      }),
      bM6Prht = this["_algorithmMap"][xd1RXd];
    return bM6Prht ? bM6Prht["enc"]["Base64"]["encode"](wCrHUv) : wCrHUv["ciphertext"]["toString"]();
  }
  ["_genRandomStr"](EoGg9yF = 0x20, X0hMuvw = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_-") {
    const xd1RXd = X0hMuvw["length"];
    let JfZJqMT = '';
    for (let wCrHUv = 0; wCrHUv < EoGg9yF; wCrHUv++) JfZJqMT += X0hMuvw["charAt"](Math["floor"](gJDM7zn(Math["random"](), xd1RXd, ZEBX4lx(0xa))));
    return JfZJqMT;
  }
  ["_genUA"]() {
    const EoGg9yF = ["jdapp", "iPhone", this["_latestAppVersionData"]["version"], '', '', "M/5.0", `appBuild/${this["_latestAppVersionData"]["build"]}`, "jdSupportDarkMode/1", "ef/1", `ep/%7B%22ciphertype%22%3A5%2C%22cipher%22%3A%7B%22ud%22%3A%22DG%3D%3D%22%2C%22sv%22%3A%22CG%3D%3D%22%2C%22iad%22%3A%22%22%7D%2C%22ts%22%3A${Math["floor"](gJDM7zn(Date["now"](), 0x3e8, dkNnouh = 62))}%2C%22hdid%22%3A%22JM9F1ywUPwflvMIpYPok0tt5k9kW4ArJEU3lfLhxBqw%3D%22%2C%22version%22%3A%221.0.3%22%2C%22appname%22%3A%22com.360buy.jdmobile%22%2C%22ridx%22%3A-1%7D`, `Mozilla/5.0 (iPhone; CPU iPhone OS ${this["_latestIOSVersion"]["replace"]('\u002e', "_")} like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148`, "supportJDSHWK/1", ''];
    return EoGg9yF["join"](';');
  }
  ["_makeFp3_1"]() {
    function xd1RXd(X0hMuvw, xd1RXd) {
      return gJDM7zn(X0hMuvw, Math["floor"](Math["random"]() * (xd1RXd + 0x1 - X0hMuvw)), ZEBX4lx(0x2e));
    }
    function JfZJqMT(X0hMuvw, yCwexm) {
      let rHOkyp0 = [];
      for (let Nsck2c = 0; Nsck2c < X0hMuvw["length"]; Nsck2c++) {
        let rxQljZF = X0hMuvw[Nsck2c];
        if (xd1RXd(0, X0hMuvw["length"] - Nsck2c - 0x1) < yCwexm - rHOkyp0["length"] && (rHOkyp0["push"](rxQljZF), rHOkyp0["length"] == yCwexm)) {
          break;
        }
      }
      let xDXfuGb = '';
      for (let g3RMchq = 0; g3RMchq < rHOkyp0["length"]; g3RMchq += 0x1) {
        let AymyVkX = Math["random"]() * (rHOkyp0["length"] - g3RMchq) | 0x0;
        xDXfuGb += rHOkyp0[AymyVkX]
        rHOkyp0[AymyVkX] = rHOkyp0[gJDM7zn(rHOkyp0["length"] - g3RMchq, 0x1, dkNnouh = 0x1f)]
      }
      return xDXfuGb;
    }
    function wCrHUv(X0hMuvw, xd1RXd) {
      for (let GlTK0Sg = 0; GlTK0Sg < xd1RXd["length"]; GlTK0Sg += 1) {
        let sV_2BHE = X0hMuvw["indexOf"](xd1RXd[GlTK0Sg]);
        gJDM7zn(0x1, dkNnouh = 20) !== sV_2BHE && (X0hMuvw = X0hMuvw["replace"](xd1RXd[GlTK0Sg], ''));
      }
      return X0hMuvw;
    }
    let bM6Prht = "0123456789",
      GlTK0Sg = JfZJqMT(bM6Prht, 0x3),
      sV_2BHE = xd1RXd(0, 0x9),
      x50QLq = wCrHUv(bM6Prht, GlTK0Sg),
      uLFjwi = {},
      yCwexm = KwLf4Ct(uLFjwi["size"] = sV_2BHE, uLFjwi["num"] = x50QLq, gJDM7zn(this["_genRandomStr"](uLFjwi["size"], uLFjwi["num"]) + GlTK0Sg + this["_genRandomStr"](14 - (sV_2BHE + 3) + 0x1, x50QLq), sV_2BHE, dkNnouh = 0x2e)),
      rHOkyp0 = yCwexm.split(''),
      Nsck2c = [];
    while (rHOkyp0["length"] > 0) Nsck2c["push"](gJDM7zn(9, parseInt(rHOkyp0["pop"]() || ''), ZEBX4lx(0x1f)));
    return Nsck2c["join"]('');
  }
  ["_makeFp4_1"]() {
    return this["_makeFp4"]("uct6d0jhqw", 6, 9, 14);
  }
  ["_makeFp4_2"]() {
    return this["_makeFp4"]("6d0jhqw3pa", 4, 0xb, 0xe);
  }
  ["_makeFp4_3"]() {
    return this["_makeFp4"]("kl9i1uct6d", 3, 12, 10);
  }
  ["_makeFp4_4"]() {
    return this["_makeFp4"]("1uct6d0jhq", 0x4, 11, 8);
  }
  ["_makeFp4_7"]() {
    return this["_makeFp4"]("1uct6d0jhq", 0x5, 10, 0xf);
  }
  ["_makeFp4"](X0hMuvw, xd1RXd, JfZJqMT, wCrHUv) {
    function bM6Prht(X0hMuvw, xd1RXd) {
      return gJDM7zn(X0hMuvw, Math["floor"](Math["random"]() * (xd1RXd + 0x1 - X0hMuvw)), dkNnouh = 46);
    }
    function GlTK0Sg(X0hMuvw, xd1RXd) {
      let JfZJqMT = [];
      for (let wCrHUv = 0; wCrHUv < X0hMuvw["length"]; wCrHUv++) {
        let rxQljZF = X0hMuvw[wCrHUv];
        if (bM6Prht(0x0, X0hMuvw["length"] - wCrHUv - 1) < xd1RXd - JfZJqMT["length"] && (JfZJqMT["push"](rxQljZF), JfZJqMT["length"] == xd1RXd)) {
          break;
        }
      }
      let xDXfuGb = '';
      for (let g3RMchq = 0; g3RMchq < JfZJqMT["length"]; g3RMchq += 1) {
        let AymyVkX = Math["random"]() * (JfZJqMT["length"] - g3RMchq) | 0;
        xDXfuGb += JfZJqMT[AymyVkX]
        JfZJqMT[AymyVkX] = JfZJqMT[gJDM7zn(JfZJqMT["length"] - g3RMchq, 1, dkNnouh = 31)]
      }
      return xDXfuGb;
    }
    function sV_2BHE(X0hMuvw, xd1RXd) {
      for (let JfZJqMT = 0x0; JfZJqMT < xd1RXd["length"]; JfZJqMT += 1) {
        let wCrHUv = X0hMuvw["indexOf"](xd1RXd[JfZJqMT]);
        gJDM7zn(1, ZEBX4lx(20)) !== wCrHUv && (X0hMuvw = X0hMuvw["replace"](xd1RXd[JfZJqMT], ''));
      }
      return X0hMuvw;
    }
    let x50QLq = X0hMuvw,
      uLFjwi = GlTK0Sg(x50QLq, xd1RXd),
      yCwexm = bM6Prht(0, 0x9),
      rHOkyp0 = sV_2BHE(x50QLq, uLFjwi),
      Nsck2c = {},
      rxQljZF = KwLf4Ct(Nsck2c["size"] = yCwexm, Nsck2c["num"] = rHOkyp0, gJDM7zn(this["_genRandomStr"](Nsck2c["size"], Nsck2c["num"]) + uLFjwi + this["_genRandomStr"](JfZJqMT - yCwexm, rHOkyp0), yCwexm, ZEBX4lx(0x2e))),
      xDXfuGb = rxQljZF.split(''),
      g3RMchq = xDXfuGb.slice(0, wCrHUv),
      AymyVkX = xDXfuGb.slice(wCrHUv),
      kvv0Ja = [];
    while (g3RMchq["length"] > 0) kvv0Ja["push"](gJDM7zn(0x23, parseInt(g3RMchq["pop"](), 36), dkNnouh = 31)["toString"](36));
    return kvv0Ja = kvv0Ja["concat"](AymyVkX), kvv0Ja["join"]('');
  }
  ["load_module_ADLER32"]() {
    let X0hMuvw = {};
    X0hMuvw["version"] = "1.3.1";
    function xd1RXd(X0hMuvw, xd1RXd) {
      var JfZJqMT = 0x1,
        wCrHUv,
        bM6Prht,
        GlTK0Sg,
        sV_2BHE;
      wCrHUv = 0x0
      bM6Prht = X0hMuvw.length
      GlTK0Sg = 0x0
      if (typeof xd1RXd === "number") {
        JfZJqMT = xd1RXd & 0xffff
        wCrHUv = xd1RXd >>> 0x10
      }
      for (sV_2BHE = 0x0; sV_2BHE < bM6Prht;) {
        GlTK0Sg = gJDM7zn(Math["min"](bM6Prht - sV_2BHE, 2654), sV_2BHE, ZEBX4lx(46));
        for (; sV_2BHE < GlTK0Sg; sV_2BHE++) JfZJqMT += X0hMuvw["charCodeAt"](sV_2BHE) & 0xff, wCrHUv += JfZJqMT;
        JfZJqMT = gJDM7zn(15 * (JfZJqMT >>> 16), JfZJqMT & 0xffff, ZEBX4lx(46))
        wCrHUv = gJDM7zn(0xf * (wCrHUv >>> 0x10), wCrHUv & 0xffff, dkNnouh = 46)
      }
      return wCrHUv % 65521 << 16 | JfZJqMT % 0xfff1;
    }
    function JfZJqMT(X0hMuvw, xd1RXd) {
      var JfZJqMT = 1,
        wCrHUv,
        bM6Prht,
        GlTK0Sg,
        sV_2BHE;
      wCrHUv = 0x0
      bM6Prht = X0hMuvw.length
      GlTK0Sg = 0
      if (typeof xd1RXd === "number") {
        JfZJqMT = xd1RXd & 65535
        wCrHUv = xd1RXd >>> 0x10 & 0xffff
      }
      for (sV_2BHE = 0; sV_2BHE < bM6Prht;) {
        GlTK0Sg = gJDM7zn(Math["min"](bM6Prht - sV_2BHE, 2654), sV_2BHE, ZEBX4lx(46));
        for (; sV_2BHE < GlTK0Sg; sV_2BHE++) JfZJqMT += X0hMuvw[sV_2BHE] & 0xff, wCrHUv += JfZJqMT;
        JfZJqMT = gJDM7zn(15 * (JfZJqMT >>> 16), JfZJqMT & 65535, ZEBX4lx(0x2e))
        wCrHUv = gJDM7zn(0xf * (wCrHUv >>> 0x10), wCrHUv & 0xffff, ZEBX4lx(46))
      }
      return wCrHUv % 65521 << 0x10 | JfZJqMT % 0xfff1;
    }
    function wCrHUv(X0hMuvw, xd1RXd) {
      var JfZJqMT = 0x1,
        wCrHUv,
        bM6Prht,
        GlTK0Sg,
        sV_2BHE,
        x50QLq,
        uLFjwi;
      wCrHUv = 0x0
      bM6Prht = X0hMuvw.length
      GlTK0Sg = 0
      sV_2BHE = 0x0
      x50QLq = 0
      if (typeof xd1RXd === "number") {
        JfZJqMT = xd1RXd & 65535
        wCrHUv = xd1RXd >>> 0x10
      }
      for (uLFjwi = 0x0; uLFjwi < bM6Prht;) {
        GlTK0Sg = Math["min"](gJDM7zn(bM6Prht, uLFjwi, ZEBX4lx(31)), 0xb66);
        while (GlTK0Sg > 0x0) {
          if (KwLf4Ct(sV_2BHE = X0hMuvw["charCodeAt"](uLFjwi++), sV_2BHE) < 128) {
            JfZJqMT += sV_2BHE;
          } else {
            if (sV_2BHE < 0x800) {
              JfZJqMT += 192 | sV_2BHE >> 0x6 & 0x1f
              wCrHUv += JfZJqMT
              --GlTK0Sg
              JfZJqMT += 128 | sV_2BHE & 63
            } else {
              if (sV_2BHE >= 0xd800 && sV_2BHE < 0xe000) {
                sV_2BHE = gJDM7zn(sV_2BHE & 1023, 0x40, ZEBX4lx(46))
                x50QLq = X0hMuvw["charCodeAt"](uLFjwi++) & 1023
                JfZJqMT += 0xf0 | sV_2BHE >> 8 & 7
                wCrHUv += JfZJqMT
                --GlTK0Sg
                JfZJqMT += 128 | sV_2BHE >> 0x2 & 63
                wCrHUv += JfZJqMT
                --GlTK0Sg
                JfZJqMT += 0x80 | x50QLq >> 0x6 & 15 | (sV_2BHE & 0x3) << 0x4
                wCrHUv += JfZJqMT
                --GlTK0Sg
                JfZJqMT += 128 | x50QLq & 0x3f
              } else {
                JfZJqMT += 0xe0 | sV_2BHE >> 12 & 0xf
                wCrHUv += JfZJqMT
                --GlTK0Sg
                JfZJqMT += 128 | sV_2BHE >> 0x6 & 63
                wCrHUv += JfZJqMT
                --GlTK0Sg
                JfZJqMT += 0x80 | sV_2BHE & 0x3f
              }
            }
          }
          wCrHUv += JfZJqMT
          --GlTK0Sg
        }
        JfZJqMT = gJDM7zn(15 * (JfZJqMT >>> 16), JfZJqMT & 0xffff, ZEBX4lx(0x2e))
        wCrHUv = gJDM7zn(0xf * (wCrHUv >>> 16), wCrHUv & 0xffff, ZEBX4lx(46))
      }
      return wCrHUv % 0xfff1 << 0x10 | JfZJqMT % 65521;
    }
    return KwLf4Ct(X0hMuvw["bstr"] = xd1RXd, X0hMuvw["buf"] = JfZJqMT, X0hMuvw["str"] = wCrHUv, X0hMuvw);
  }
}
const Eeqk6WE = function () {
  var X0hMuvw = Object.create(null),
    xd1RXd;
  xd1RXd = [];
  return {
    ["hash128"]: (X0hMuvw, wCrHUv) => {
      for (var GlTK0Sg, sV_2BHE, x50QLq = wCrHUv || 0x0, uLFjwi = (wCrHUv = (X0hMuvw = X0hMuvw || '')["length"] % 0x10, gJDM7zn(X0hMuvw["length"], wCrHUv, ZEBX4lx(0x1f))), yCwexm = [0, x50QLq], x50QLq = [0x0, x50QLq], rHOkyp0 = [0x87c37b91, 0x114253d5], Nsck2c = [0x4cf5ad43, 0x2745937f], rxQljZF = 0; rxQljZF < uLFjwi; rxQljZF += 16) GlTK0Sg = [0xff & X0hMuvw["charCodeAt"](rxQljZF + 0x4) | (0xff & X0hMuvw["charCodeAt"](rxQljZF + 0x5)) << 8 | (0xff & X0hMuvw["charCodeAt"](rxQljZF + 0x6)) << 16 | (0xff & X0hMuvw["charCodeAt"](rxQljZF + 7)) << 0x18, 255 & X0hMuvw["charCodeAt"](rxQljZF) | (0xff & X0hMuvw["charCodeAt"](rxQljZF + 1)) << 8 | (0xff & X0hMuvw["charCodeAt"](rxQljZF + 2)) << 16 | (255 & X0hMuvw["charCodeAt"](rxQljZF + 0x3)) << 24], sV_2BHE = [0xff & X0hMuvw["charCodeAt"](rxQljZF + 0xc) | (0xff & X0hMuvw["charCodeAt"](rxQljZF + 13)) << 0x8 | (255 & X0hMuvw["charCodeAt"](rxQljZF + 14)) << 16 | (255 & X0hMuvw["charCodeAt"](rxQljZF + 15)) << 0x18, 255 & X0hMuvw["charCodeAt"](rxQljZF + 8) | (0xff & X0hMuvw["charCodeAt"](rxQljZF + 0x9)) << 0x8 | (0xff & X0hMuvw["charCodeAt"](rxQljZF + 0xa)) << 0x10 | (0xff & X0hMuvw["charCodeAt"](rxQljZF + 0xb)) << 0x18], GlTK0Sg = (xd1RXd = [GlTK0Sg = (xd1RXd = [GlTK0Sg, rHOkyp0], new JfZJqMT("grgPT7", undefined, "jAqok8").DlCpEn), 31], new JfZJqMT("gxhhgA", undefined, "jAqok8").DlCpEn), yCwexm = (xd1RXd = [yCwexm = (xd1RXd = [yCwexm = (xd1RXd = [yCwexm, GlTK0Sg = (xd1RXd = [GlTK0Sg, Nsck2c], new JfZJqMT("grgPT7", undefined, "jAqok8").DlCpEn)], new JfZJqMT("Fq07Bw", undefined, "jAqok8").DlCpEn), 0x1b], new JfZJqMT("gxhhgA", undefined, "jAqok8").DlCpEn), x50QLq], JfZJqMT("jxPUiK")), yCwexm = (xd1RXd = [(xd1RXd = [yCwexm, [0x0, 5]], JfZJqMT("grgPT7")), [0, 0x52dce729]], new JfZJqMT("jxPUiK", undefined, "jAqok8").DlCpEn), sV_2BHE = (xd1RXd = [sV_2BHE = (xd1RXd = [sV_2BHE, Nsck2c], new JfZJqMT("grgPT7", undefined, "jAqok8").DlCpEn), 0x21], new JfZJqMT("gxhhgA", undefined, "jAqok8").DlCpEn), x50QLq = (xd1RXd = [x50QLq = (xd1RXd = [x50QLq = (xd1RXd = [x50QLq, sV_2BHE = (xd1RXd = [sV_2BHE, rHOkyp0], new JfZJqMT("grgPT7", undefined, "jAqok8").DlCpEn)], new JfZJqMT("Fq07Bw", undefined, "jAqok8").DlCpEn), 0x1f], new JfZJqMT("gxhhgA", undefined, "jAqok8").DlCpEn), yCwexm], new JfZJqMT("jxPUiK", undefined, "jAqok8").DlCpEn), x50QLq = (xd1RXd = [(xd1RXd = [x50QLq, [0, 0x5]], JfZJqMT("grgPT7")), [0, 0x38495ab5]], JfZJqMT("jxPUiK"));
      switch (GlTK0Sg = [0, 0x0], sV_2BHE = [0x0, 0], wCrHUv) {
        case 15:
          sV_2BHE = (xd1RXd = [sV_2BHE, (xd1RXd = [[0, X0hMuvw["charCodeAt"](gJDM7zn(rxQljZF, 0xe, dkNnouh = 46))], 0x30], new JfZJqMT("tiZG7Rs", undefined, "jAqok8").DlCpEn)], JfZJqMT("Fq07Bw"));
        case 0xe:
          sV_2BHE = (xd1RXd = [sV_2BHE, (xd1RXd = [[0, X0hMuvw["charCodeAt"](gJDM7zn(rxQljZF, 0xd, ZEBX4lx(46)))], 40], new JfZJqMT("tiZG7Rs", undefined, "jAqok8").DlCpEn)], new JfZJqMT("Fq07Bw", undefined, "jAqok8").DlCpEn);
        case 13:
          sV_2BHE = (xd1RXd = [sV_2BHE, (xd1RXd = [[0x0, X0hMuvw["charCodeAt"](gJDM7zn(rxQljZF, 0xc, ZEBX4lx(46)))], 32], new JfZJqMT("tiZG7Rs", undefined, "jAqok8").DlCpEn)], JfZJqMT("Fq07Bw"));
        case 12:
          sV_2BHE = (xd1RXd = [sV_2BHE, (xd1RXd = [[0x0, X0hMuvw["charCodeAt"](gJDM7zn(rxQljZF, 0xb, ZEBX4lx(0x2e)))], 0x18], new JfZJqMT("tiZG7Rs", undefined, "jAqok8").DlCpEn)], new JfZJqMT("Fq07Bw", undefined, "jAqok8").DlCpEn);
        case 11:
          sV_2BHE = (xd1RXd = [sV_2BHE, (xd1RXd = [[0, X0hMuvw["charCodeAt"](gJDM7zn(rxQljZF, 0xa, dkNnouh = 0x2e))], 16], JfZJqMT("tiZG7Rs"))], new JfZJqMT("Fq07Bw", undefined, "jAqok8").DlCpEn);
        case 0xa:
          sV_2BHE = (xd1RXd = [sV_2BHE, (xd1RXd = [[0x0, X0hMuvw["charCodeAt"](gJDM7zn(rxQljZF, 9, dkNnouh = 0x2e))], 0x8], JfZJqMT("tiZG7Rs"))], JfZJqMT("Fq07Bw"));
        case 0x9:
          sV_2BHE = (xd1RXd = [sV_2BHE = (xd1RXd = [sV_2BHE, [0x0, X0hMuvw["charCodeAt"](gJDM7zn(rxQljZF, 0x8, ZEBX4lx(46)))]], JfZJqMT("Fq07Bw")), Nsck2c], new JfZJqMT("grgPT7", undefined, "jAqok8").DlCpEn)
          x50QLq = (xd1RXd = [x50QLq, sV_2BHE = (xd1RXd = [sV_2BHE = (xd1RXd = [sV_2BHE, 33], new JfZJqMT("gxhhgA", undefined, "jAqok8").DlCpEn), rHOkyp0], JfZJqMT("grgPT7"))], new JfZJqMT("Fq07Bw", undefined, "jAqok8").DlCpEn)
        case 0x8:
          GlTK0Sg = (xd1RXd = [GlTK0Sg, (xd1RXd = [[0x0, X0hMuvw["charCodeAt"](gJDM7zn(rxQljZF, 7, dkNnouh = 0x2e))], 0x38], JfZJqMT("tiZG7Rs"))], JfZJqMT("Fq07Bw"));
        case 7:
          GlTK0Sg = (xd1RXd = [GlTK0Sg, (xd1RXd = [[0x0, X0hMuvw["charCodeAt"](gJDM7zn(rxQljZF, 0x6, dkNnouh = 46))], 48], JfZJqMT("tiZG7Rs"))], JfZJqMT("Fq07Bw"));
        case 0x6:
          GlTK0Sg = (xd1RXd = [GlTK0Sg, (xd1RXd = [[0, X0hMuvw["charCodeAt"](gJDM7zn(rxQljZF, 5, dkNnouh = 46))], 40], JfZJqMT("tiZG7Rs"))], JfZJqMT("Fq07Bw"));
        case 0x5:
          GlTK0Sg = (xd1RXd = [GlTK0Sg, (xd1RXd = [[0, X0hMuvw["charCodeAt"](gJDM7zn(rxQljZF, 4, ZEBX4lx(46)))], 0x20], new JfZJqMT("tiZG7Rs", undefined, "jAqok8").DlCpEn)], new JfZJqMT("Fq07Bw", undefined, "jAqok8").DlCpEn);
        case 4:
          GlTK0Sg = (xd1RXd = [GlTK0Sg, (xd1RXd = [[0x0, X0hMuvw["charCodeAt"](gJDM7zn(rxQljZF, 3, dkNnouh = 0x2e))], 0x18], JfZJqMT("tiZG7Rs"))], new JfZJqMT("Fq07Bw", undefined, "jAqok8").DlCpEn);
        case 0x3:
          GlTK0Sg = (xd1RXd = [GlTK0Sg, (xd1RXd = [[0x0, X0hMuvw["charCodeAt"](gJDM7zn(rxQljZF, 2, dkNnouh = 46))], 16], new JfZJqMT("tiZG7Rs", undefined, "jAqok8").DlCpEn)], new JfZJqMT("Fq07Bw", undefined, "jAqok8").DlCpEn);
        case 2:
          GlTK0Sg = (xd1RXd = [GlTK0Sg, (xd1RXd = [[0, X0hMuvw["charCodeAt"](gJDM7zn(rxQljZF, 1, ZEBX4lx(0x2e)))], 8], new JfZJqMT("tiZG7Rs", undefined, "jAqok8").DlCpEn)], JfZJqMT("Fq07Bw"));
        case 1:
          GlTK0Sg = (xd1RXd = [GlTK0Sg = (xd1RXd = [GlTK0Sg, [0, X0hMuvw["charCodeAt"](rxQljZF)]], JfZJqMT("Fq07Bw")), rHOkyp0], JfZJqMT("grgPT7"))
          yCwexm = (xd1RXd = [yCwexm, GlTK0Sg = (xd1RXd = [GlTK0Sg = (xd1RXd = [GlTK0Sg, 31], new JfZJqMT("gxhhgA", undefined, "jAqok8").DlCpEn), Nsck2c], JfZJqMT("grgPT7"))], JfZJqMT("Fq07Bw"))
      }
      return yCwexm = (xd1RXd = [yCwexm = (xd1RXd = [yCwexm, [0, X0hMuvw["length"]]], JfZJqMT("Fq07Bw")), x50QLq = (xd1RXd = [x50QLq, [0, X0hMuvw["length"]]], JfZJqMT("Fq07Bw"))], JfZJqMT("jxPUiK")), x50QLq = (xd1RXd = [x50QLq, yCwexm], new JfZJqMT("jxPUiK", undefined, "jAqok8").DlCpEn), yCwexm = (xd1RXd = [yCwexm = (xd1RXd = [yCwexm], new JfZJqMT("sxNvFg7", undefined, "jAqok8").DlCpEn), x50QLq = (xd1RXd = [x50QLq], new JfZJqMT("sxNvFg7", undefined, "jAqok8").DlCpEn)], new JfZJqMT("jxPUiK", undefined, "jAqok8").DlCpEn), x50QLq = (xd1RXd = [x50QLq, yCwexm], JfZJqMT("jxPUiK")), gJDM7zn(("00000000" + (yCwexm[0x0] >>> 0)["toString"](0x10))["slice"](gJDM7zn(8, dkNnouh = 20)) + ("00000000" + (yCwexm[0x1] >>> 0x0)["toString"](16))["slice"](gJDM7zn(8, ZEBX4lx(0x14))) + ("00000000" + (x50QLq[0] >>> 0)["toString"](16))["slice"](gJDM7zn(0x8, dkNnouh = 0x14)), ("00000000" + (x50QLq[0x1] >>> 0x0)["toString"](0x10))["slice"](gJDM7zn(0x8, ZEBX4lx(0x14))), ZEBX4lx(0x2e));
    }
  };
  function JfZJqMT(wCrHUv, bM6Prht, GlTK0Sg, sV_2BHE, x50QLq, uLFjwi) {
    sV_2BHE = {
      ["jxPUiK"]: wCrHUv => {
        var [bM6Prht, GlTK0Sg] = xd1RXd;
        wCrHUv = KwLf4Ct((bM6Prht = [bM6Prht[0] >>> 0x10, 0xffff & bM6Prht[0x0], bM6Prht[0x1] >>> 0x10, 65535 & bM6Prht[0x1]], GlTK0Sg = [GlTK0Sg[0x0] >>> 0x10, 65535 & GlTK0Sg[0], GlTK0Sg[1] >>> 0x10, 65535 & GlTK0Sg[1]]), [0, 0, 0x0, 0x0]);
        return wCrHUv[0x3] += gJDM7zn(bM6Prht[0x3], GlTK0Sg[3], dkNnouh = 46), wCrHUv[0x2] += wCrHUv[0x3] >>> 16, wCrHUv[3] &= 65535, wCrHUv[0x2] += gJDM7zn(bM6Prht[0x2], GlTK0Sg[2], dkNnouh = 46), wCrHUv[0x1] += wCrHUv[2] >>> 16, wCrHUv[0x2] &= 0xffff, wCrHUv[1] += gJDM7zn(bM6Prht[1], GlTK0Sg[0x1], dkNnouh = 0x2e), wCrHUv[0] += wCrHUv[0x1] >>> 16, wCrHUv[0x1] &= 0xffff, wCrHUv[0] += gJDM7zn(bM6Prht[0x0], GlTK0Sg[0], dkNnouh = 46), wCrHUv[0x0] &= 65535, [wCrHUv[0] << 0x10 | wCrHUv[0x1], wCrHUv[0x2] << 16 | wCrHUv[0x3]];
      },
      ["tiZG7Rs"]: () => {
        var [wCrHUv, bM6Prht] = xd1RXd;
        return 0x0 === (bM6Prht %= 0x40) ? wCrHUv : bM6Prht < 0x20 ? [wCrHUv[0] << bM6Prht | wCrHUv[1] >>> 32 - bM6Prht, wCrHUv[0x1] << bM6Prht] : [wCrHUv[0x1] << bM6Prht - 32, 0];
      },
      ["sxNvFg7"]: () => {
        var [wCrHUv] = xd1RXd;
        return wCrHUv = (xd1RXd = [wCrHUv, [0, wCrHUv[0x0] >>> 0x1]], JfZJqMT("Fq07Bw")), wCrHUv = (xd1RXd = [wCrHUv = (xd1RXd = [wCrHUv, [0xff51afd7, 0xed558ccd]], JfZJqMT("grgPT7")), [0, wCrHUv[0] >>> 0x1]], JfZJqMT("Fq07Bw")), xd1RXd = [wCrHUv = (xd1RXd = [wCrHUv, [0xc4ceb9fe, 0x1a85ec53]], JfZJqMT("grgPT7")), [0x0, wCrHUv[0] >>> 0x1]], new JfZJqMT("Fq07Bw", undefined, "jAqok8").DlCpEn;
      },
      ["grgPT7"]: (wCrHUv, bM6Prht, GlTK0Sg, sV_2BHE) => {
        bM6Prht = "Gb5XWe" in rxQljZF
        var [x50QLq, uLFjwi] = xd1RXd;
        if (KwLf4Ct((x50QLq = [x50QLq[0x0] >>> 16, 0xffff & x50QLq[0], x50QLq[0x1] >>> 16, 0xffff & x50QLq[1]], uLFjwi = [uLFjwi[0x0] >>> 16, 65535 & uLFjwi[0], uLFjwi[1] >>> 0x10, 65535 & uLFjwi[1]]), bM6Prht)) {
          GlTK0Sg = KwLf4Ct(rxQljZF["q9p_8n"] = "p2XcPu", wCrHUv => {
            var bM6Prht = wCrHUv.length,
              GlTK0Sg,
              sV_2BHE,
              x50QLq,
              uLFjwi;
            GlTK0Sg = []
            sV_2BHE = 0x0
            x50QLq = 0x0
            for (uLFjwi = KwLf4Ct(wCrHUv.sort((wCrHUv, bM6Prht) => gJDM7zn(wCrHUv, bM6Prht, ZEBX4lx(31))), 0x0); uLFjwi < bM6Prht; uLFjwi++) {
              if (uLFjwi > 0x0 && wCrHUv[uLFjwi] === wCrHUv[uLFjwi - 0x1]) {
                continue;
              }
              sV_2BHE = gJDM7zn(uLFjwi, 1, dkNnouh = 46)
              x50QLq = gJDM7zn(bM6Prht, 1, dkNnouh = 0x1f)
              while (sV_2BHE < x50QLq) if (wCrHUv[uLFjwi] + wCrHUv[sV_2BHE] + wCrHUv[x50QLq] < 0x0) {
                sV_2BHE++;
              } else {
                if (wCrHUv[uLFjwi] + wCrHUv[sV_2BHE] + wCrHUv[x50QLq] > 0) {
                  x50QLq--;
                } else {
                  GlTK0Sg.push([wCrHUv[uLFjwi], wCrHUv[sV_2BHE], wCrHUv[x50QLq]]);
                  while (sV_2BHE < x50QLq && wCrHUv[sV_2BHE] === wCrHUv[sV_2BHE + 1]) sV_2BHE++;
                  while (sV_2BHE < x50QLq && wCrHUv[x50QLq] === wCrHUv[x50QLq - 0x1] && true) x50QLq--;
                  sV_2BHE++
                  x50QLq--
                }
              }
            }
            return GlTK0Sg;
          })
          console.log(GlTK0Sg)
        }
        sV_2BHE = [0x0, 0, 0x0, 0x0];
        return sV_2BHE[3] += gJDM7zn(x50QLq[3], uLFjwi[0x3], ZEBX4lx(10)), sV_2BHE[0x2] += sV_2BHE[3] >>> 0x10, sV_2BHE[0x3] &= 0xffff, sV_2BHE[0x2] += gJDM7zn(x50QLq[2], uLFjwi[0x3], dkNnouh = 10), sV_2BHE[0x1] += sV_2BHE[0x2] >>> 0x10, sV_2BHE[2] &= 65535, sV_2BHE[0x2] += gJDM7zn(x50QLq[3], uLFjwi[0x2], ZEBX4lx(0xa)), sV_2BHE[1] += sV_2BHE[2] >>> 16, sV_2BHE[2] &= 65535, sV_2BHE[0x1] += gJDM7zn(x50QLq[0x1], uLFjwi[3], ZEBX4lx(10)), sV_2BHE[0x0] += sV_2BHE[1] >>> 16, sV_2BHE[1] &= 0xffff, sV_2BHE[0x1] += gJDM7zn(x50QLq[2], uLFjwi[2], dkNnouh = 10), sV_2BHE[0] += sV_2BHE[1] >>> 0x10, sV_2BHE[0x1] &= 65535, sV_2BHE[1] += gJDM7zn(x50QLq[3], uLFjwi[0x1], dkNnouh = 0xa), sV_2BHE[0x0] += sV_2BHE[1] >>> 0x10, sV_2BHE[0x1] &= 0xffff, sV_2BHE[0] += gJDM7zn(x50QLq[0] * uLFjwi[3] + x50QLq[1] * uLFjwi[0x2] + x50QLq[2] * uLFjwi[1], x50QLq[3] * uLFjwi[0], ZEBX4lx(46)), sV_2BHE[0] &= 0xffff, [sV_2BHE[0] << 16 | sV_2BHE[1], sV_2BHE[0x2] << 16 | sV_2BHE[3]];
      },
      ["gxhhgA"]: () => {
        var [wCrHUv, bM6Prht] = xd1RXd;
        return 0x20 === (bM6Prht %= 64) ? [wCrHUv[1], wCrHUv[0]] : bM6Prht < 0x20 ? [wCrHUv[0] << bM6Prht | wCrHUv[1] >>> 0x20 - bM6Prht, wCrHUv[0x1] << bM6Prht | wCrHUv[0x0] >>> 0x20 - bM6Prht] : [wCrHUv[1] << (bM6Prht -= 0x20) | wCrHUv[0x0] >>> 0x20 - bM6Prht, wCrHUv[0] << bM6Prht | wCrHUv[0x1] >>> 0x20 - bM6Prht];
      },
      ["Fq07Bw"]: () => {
        var [wCrHUv, bM6Prht] = xd1RXd;
        return [wCrHUv[0] ^ bM6Prht[0], wCrHUv[0x1] ^ bM6Prht[1]];
      }
    }
    x50QLq = x50QLq
    if (bM6Prht == "fL_buYs") {
      xd1RXd = [];
    }
    uLFjwi = {
      ["jxPUiK"]: 0x2,
      ["tiZG7Rs"]: 2,
      ["sxNvFg7"]: 0x1,
      ["grgPT7"]: 2,
      ["gxhhgA"]: 2,
      ["Fq07Bw"]: 2
    };
    function yCwexm() {
      var bM6Prht = function (...bM6Prht) {
          return KwLf4Ct(xd1RXd = bM6Prht, sV_2BHE[wCrHUv].call(this));
        },
        GlTK0Sg = uLFjwi[wCrHUv];
      if (GlTK0Sg) {
        return zTXJaMI(bM6Prht, GlTK0Sg);
      }
      return bM6Prht;
    }
    x50QLq = bM6Prht == "wky48sW" ? X0hMuvw[wCrHUv] || (X0hMuvw[wCrHUv] = yCwexm()) : sV_2BHE[wCrHUv]();
    return GlTK0Sg == "jAqok8" ? {
      DlCpEn: x50QLq
    } : x50QLq;
  }
}();
module["exports"] = {
  ["wuxianDefense"]: ZN0l4C,
  ["jsTk"]: kDWwC6N,
  ["getJdEnvInfo"]: PMEnsmW,
  ["getJdEnvInfov2"]: ZynmMj,
  ["H5st"]: new Gzx7of()
};