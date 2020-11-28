import strings from '@/utils/strings'
import i18n from '@/i18n'

const VALID_FAILS = 5

const PenguinData = {
  _cache: null
}

function validate (data) {
  const errors = []
  if (data.error) {
    errors.push(data.error)
    return errors
  }
  for (const [key, value] of Object.entries(data.cache)) {
    if (value.failures && value.failures > VALID_FAILS) {
      errors.push({
        type: 'TooManyFailures',
        details: key
      })
    }
  }
  return errors
}

PenguinData.raw = function () {
  // eslint-disable-next-line
  /* #  by ItemID # */ const prefilled = {"query":{"itemId":"30012"},"cache":{"item":{"updated":"2020-11-29T00:27:49.772362+08:00"},"matrix":{"updated":"2020-11-29T00:47:57.820064+08:00"},"stage":{"updated":"2020-11-29T00:27:59.037051+08:00"},"zone":{"updated":"2020-11-29T00:27:59.673256+08:00"}},"items":[{"itemId":"30012","name_i18n":{"en":"Orirock Cube","ja":"初級源岩","ko":"원암 큐브","zh":"固源岩"},"spriteCoord":[5,0]}],"matrix":[{"stageId":"main_04-01","itemId":"30012","quantity":55,"times":165,"start":1577174400000,"end":1605384000000},{"stageId":"main_04-04","itemId":"30012","quantity":7251,"times":22892,"start":1577174400000},{"stageId":"main_04-03","itemId":"30012","quantity":8,"times":37,"start":1577174400000,"end":1605384000000},{"stageId":"main_04-06","itemId":"30012","quantity":5080,"times":16040,"start":1577174400000},{"stageId":"main_04-07","itemId":"30012","quantity":8038,"times":25519,"start":1577174400000},{"stageId":"main_03-02","itemId":"30012","quantity":8987,"times":42510,"start":1556676000000},{"stageId":"main_03-03","itemId":"30012","quantity":4451,"times":21178,"start":1556676000000},{"stageId":"main_08-14","itemId":"30012","quantity":224,"times":650,"start":1604217600000},{"stageId":"main_08-13","itemId":"30012","quantity":1704,"times":4639,"start":1604217600000},{"stageId":"main_03-04","itemId":"30012","quantity":5824,"times":27953,"start":1556676000000},{"stageId":"main_03-05","itemId":"30012","quantity":13,"times":59,"start":1577174400000,"end":1604217600000},{"stageId":"randomMaterial_3","itemId":"30012","quantity":5265,"times":30185,"start":1589529600000},{"stageId":"randomMaterial_4","itemId":"30012","quantity":2492,"times":14166,"start":1604217600000},{"stageId":"randomMaterial_1","itemId":"30012","quantity":1033,"times":14562,"start":1577174400000},{"stageId":"randomMaterial_2","itemId":"30012","quantity":805,"times":12952,"start":1581105600000},{"stageId":"sub_05-1-1","itemId":"30012","quantity":414,"times":244,"start":1562659200000,"end":1605384000000},{"stageId":"main_05-02","itemId":"30012","quantity":218,"times":667,"start":1577174400000},{"stageId":"main_05-05","itemId":"30012","quantity":1115,"times":3397,"start":1577174400000},{"stageId":"main_05-01","itemId":"30012","quantity":150,"times":490,"start":1577174400000},{"stageId":"main_05-09","itemId":"30012","quantity":54,"times":170,"start":1577174400000},{"stageId":"sub_02-10","itemId":"30012","quantity":2,"times":58,"start":1556676000000},{"stageId":"sub_04-4-1","itemId":"30012","quantity":742,"times":2463,"start":1577174400000},{"stageId":"sub_02-12","itemId":"30012","quantity":7957,"times":3497,"start":1556676000000},{"stageId":"main_05-10","itemId":"30012","quantity":43517,"times":23451,"start":1562659200000},{"stageId":"main_04-10","itemId":"30012","quantity":4496,"times":12585,"start":1577174400000},{"stageId":"sub_06-1-2","itemId":"30012","quantity":162,"times":101,"start":1577174400000,"end":1605384000000},{"stageId":"main_06-12","itemId":"30012","quantity":334,"times":1068,"start":1577174400000},{"stageId":"main_01-07","itemId":"30012","quantity":321188,"times":258202,"start":1556676000000},{"stageId":"sub_03-1-2","itemId":"30012","quantity":496,"times":2396,"start":1556676000000},{"stageId":"sub_05-4-2","itemId":"30012","quantity":1137,"times":3545,"start":1577174400000},{"stageId":"sub_07-1-1","itemId":"30012","quantity":22,"times":75,"start":1588320000000,"end":1605384000000},{"stageId":"sub_02-07","itemId":"30012","quantity":10,"times":328,"start":1556676000000},{"stageId":"sub_02-05","itemId":"30012","quantity":9,"times":376,"start":1556676000000},{"stageId":"main_06-03","itemId":"30012","quantity":179,"times":540,"start":1577174400000},{"stageId":"sub_03-3-1","itemId":"30012","quantity":726,"times":3414,"start":1577174400000},{"stageId":"sub_03-3-2","itemId":"30012","quantity":1620,"times":767,"start":1604217600000},{"stageId":"main_08-06","itemId":"30012","quantity":9,"times":22,"start":1604217600000},{"stageId":"main_08-01","itemId":"30012","quantity":29,"times":94,"start":1604217600000},{"stageId":"sub_03-2-2","itemId":"30012","quantity":988,"times":4722,"start":1556676000000},{"stageId":"main_07-14","itemId":"30012","quantity":21874,"times":21254,"start":1588320000000},{"stageId":"main_07-11","itemId":"30012","quantity":19,"times":63,"start":1588320000000,"end":1605384000000},{"stageId":"main_02-09","itemId":"30012","quantity":131,"times":4458,"start":1556676000000},{"stageId":"main_02-03","itemId":"30012","quantity":9,"times":369,"start":1556676000000},{"stageId":"main_02-04","itemId":"30012","quantity":189,"times":7336,"start":1556676000000},{"stageId":"main_02-06","itemId":"30012","quantity":228,"times":8639,"start":1556676000000}],"stages":[{"zoneId":"main_8","stageId":"main_08-14","code_i18n":{"en":"M8-8","ja":"M8-8","ko":"M8-8","zh":"M8-8"},"apCost":18,"minClearTime":257000},{"zoneId":"gachabox","stageId":"randomMaterial_2","code_i18n":{"en":"New Year's Lantern","ja":"年関ランタン","ko":"축제 등불","zh":"岁过华灯"},"apCost":99},{"zoneId":"main_5","stageId":"main_05-10","code_i18n":{"en":"5-10","ja":"5-10","ko":"5-10","zh":"5-10"},"apCost":21,"minClearTime":337000},{"zoneId":"main_6","stageId":"sub_06-1-2","code_i18n":{"en":"S6-2","ja":"S6-2","ko":"S6-2","zh":"S6-2"},"apCost":18,"minClearTime":203000},{"zoneId":"main_2","stageId":"sub_02-05","code_i18n":{"en":"S2-5","ja":"S2-5","ko":"S2-5","zh":"S2-5"},"apCost":12,"minClearTime":178000},{"zoneId":"main_8","stageId":"main_08-01","code_i18n":{"en":"R8-1","ja":"R8-1","ko":"R8-1","zh":"R8-1"},"apCost":18,"minClearTime":187000},{"zoneId":"main_4","stageId":"main_04-06","code_i18n":{"en":"4-6","ja":"4-6","ko":"4-6","zh":"4-6"},"apCost":18,"minClearTime":198000},{"zoneId":"main_3","stageId":"main_03-02","code_i18n":{"en":"3-2","ja":"3-2","ko":"3-2","zh":"3-2"},"apCost":15,"minClearTime":173000},{"zoneId":"main_7","stageId":"main_07-11","code_i18n":{"en":"7-13","ja":"7-13","ko":"7-13","zh":"7-13"},"apCost":18,"minClearTime":183000},{"zoneId":"main_3","stageId":"sub_03-3-1","code_i18n":{"en":"S3-6","ja":"S3-6","ko":"S3-6","zh":"S3-6"},"apCost":15,"minClearTime":122000},{"zoneId":"main_3","stageId":"main_03-05","code_i18n":{"en":"3-5","ja":"3-5","ko":"3-5","zh":"3-5"},"apCost":15,"minClearTime":165000},{"zoneId":"main_5","stageId":"main_05-01","code_i18n":{"en":"5-1","ja":"5-1","ko":"5-1","zh":"5-1"},"apCost":18,"minClearTime":166000},{"zoneId":"main_5","stageId":"sub_05-4-2","code_i18n":{"en":"S5-8","ja":"S5-8","ko":"S5-8","zh":"S5-8"},"apCost":18,"minClearTime":148000},{"zoneId":"main_3","stageId":"sub_03-3-2","code_i18n":{"en":"S3-7","ja":"S3-7","ko":"S3-7","zh":"S3-7"},"apCost":18,"minClearTime":147000},{"zoneId":"main_2","stageId":"main_02-06","code_i18n":{"en":"2-6","ja":"2-6","ko":"2-6","zh":"2-6"},"apCost":12,"minClearTime":174000},{"zoneId":"gachabox","stageId":"randomMaterial_4","code_i18n":{"en":"感谢庆典物资补给","ja":"感谢庆典物资补给","ko":"感谢庆典物资补给","zh":"感谢庆典物资补给"},"apCost":99},{"zoneId":"main_2","stageId":"sub_02-12","code_i18n":{"en":"S2-12","ja":"S2-12","ko":"S2-12","zh":"S2-12"},"apCost":15,"minClearTime":135000},{"zoneId":"main_5","stageId":"sub_05-1-1","code_i18n":{"en":"S5-1","ja":"S5-1","ko":"S5-1","zh":"S5-1"},"apCost":18,"minClearTime":193000},{"zoneId":"main_5","stageId":"main_05-02","code_i18n":{"en":"5-2","ja":"5-2","ko":"5-2","zh":"5-2"},"apCost":18,"minClearTime":187000},{"zoneId":"main_4","stageId":"sub_04-4-1","code_i18n":{"en":"S4-10","ja":"S4-10","ko":"S4-10","zh":"S4-10"},"apCost":18,"minClearTime":129000},{"zoneId":"main_6","stageId":"main_06-12","code_i18n":{"en":"6-14","ja":"6-14","ko":"6-14","zh":"6-14"},"apCost":18,"minClearTime":194000},{"zoneId":"main_2","stageId":"sub_02-07","code_i18n":{"en":"S2-7","ja":"S2-7","ko":"S2-7","zh":"S2-7"},"apCost":12,"minClearTime":166000},{"zoneId":"main_4","stageId":"main_04-03","code_i18n":{"en":"4-3","ja":"4-3","ko":"4-3","zh":"4-3"},"apCost":18,"minClearTime":217500},{"zoneId":"main_3","stageId":"main_03-04","code_i18n":{"en":"3-4","ja":"3-4","ko":"3-4","zh":"3-4"},"apCost":15,"minClearTime":216400},{"zoneId":"main_2","stageId":"sub_02-10","code_i18n":{"en":"S2-10","ja":"S2-10","ko":"S2-10","zh":"S2-10"},"apCost":12,"minClearTime":172000},{"zoneId":"main_4","stageId":"main_04-10","code_i18n":{"en":"4-10","ja":"4-10","ko":"4-10","zh":"4-10"},"apCost":21,"minClearTime":240500},{"zoneId":"main_6","stageId":"main_06-03","code_i18n":{"en":"6-3","ja":"6-3","ko":"6-3","zh":"6-3"},"apCost":18,"minClearTime":172000},{"zoneId":"main_8","stageId":"main_08-06","code_i18n":{"en":"R8-6","ja":"R8-6","ko":"R8-6","zh":"R8-6"},"apCost":18,"minClearTime":193000},{"zoneId":"main_3","stageId":"sub_03-2-2","code_i18n":{"en":"S3-4","ja":"S3-4","ko":"S3-4","zh":"S3-4"},"apCost":15,"minClearTime":136000},{"zoneId":"main_2","stageId":"main_02-09","code_i18n":{"en":"2-9","ja":"2-9","ko":"2-9","zh":"2-9"},"apCost":12,"minClearTime":193000},{"zoneId":"main_4","stageId":"main_04-07","code_i18n":{"en":"4-7","ja":"4-7","ko":"4-7","zh":"4-7"},"apCost":18,"minClearTime":200000},{"zoneId":"gachabox","stageId":"randomMaterial_3","code_i18n":{"en":"32h战略配给","ja":"32h战略配给","ko":"32h战略配给","zh":"32h战略配给"},"apCost":99},{"zoneId":"main_2","stageId":"main_02-04","code_i18n":{"en":"2-4","ja":"2-4","ko":"2-4","zh":"2-4"},"apCost":12,"minClearTime":149000},{"zoneId":"main_3","stageId":"main_03-03","code_i18n":{"en":"3-3","ja":"3-3","ko":"3-3","zh":"3-3"},"apCost":15,"minClearTime":172700},{"zoneId":"main_5","stageId":"main_05-09","code_i18n":{"en":"5-9","ja":"5-9","ko":"5-9","zh":"5-9"},"apCost":18,"minClearTime":194000},{"zoneId":"main_7","stageId":"sub_07-1-1","code_i18n":{"en":"S7-1","ja":"S7-1","ko":"S7-1","zh":"S7-1"},"apCost":18,"minClearTime":141000},{"zoneId":"main_7","stageId":"main_07-14","code_i18n":{"en":"7-16","ja":"7-16","ko":"7-16","zh":"7-16"},"apCost":18,"minClearTime":195000},{"zoneId":"main_4","stageId":"main_04-01","code_i18n":{"en":"4-1","ja":"4-1","ko":"4-1","zh":"4-1"},"apCost":18,"minClearTime":201000},{"zoneId":"main_4","stageId":"main_04-04","code_i18n":{"en":"4-4","ja":"4-4","ko":"4-4","zh":"4-4"},"apCost":18,"minClearTime":174000},{"zoneId":"main_1","stageId":"main_01-07","code_i18n":{"en":"1-7","ja":"1-7","ko":"1-7","zh":"1-7"},"apCost":6,"minClearTime":118000},{"zoneId":"main_3","stageId":"sub_03-1-2","code_i18n":{"en":"S3-2","ja":"S3-2","ko":"S3-2","zh":"S3-2"},"apCost":15,"minClearTime":125000},{"zoneId":"main_2","stageId":"main_02-03","code_i18n":{"en":"2-3","ja":"2-3","ko":"2-3","zh":"2-3"},"apCost":12,"minClearTime":218700},{"zoneId":"main_8","stageId":"main_08-13","code_i18n":{"en":"R8-11","ja":"R8-11","ko":"R8-11","zh":"R8-11"},"apCost":21,"minClearTime":274000},{"zoneId":"main_5","stageId":"main_05-05","code_i18n":{"en":"5-5","ja":"5-5","ko":"5-5","zh":"5-5"},"apCost":18,"minClearTime":193000},{"zoneId":"gachabox","stageId":"randomMaterial_1","code_i18n":{"en":"Rhodes Island Supplies","ja":"補給物資・ロドス","ko":"로도스 아일랜드 보급 물자","zh":"罗德岛物资补给"},"apCost":99}],"zones":[{"zoneId":"gachabox","type":"ACTIVITY","zoneName_i18n":{"en":"Supplies","ja":"補給物資","ko":"보급물자","zh":"物资补给"}},{"zoneId":"main_5","type":"MAINLINE","zoneName_i18n":{"en":"Episode 5","ja":"第五章","ko":"에피소드 5","zh":"第五章"}},{"zoneId":"main_6","type":"MAINLINE","zoneName_i18n":{"en":"Episode 6","ja":"第六章","ko":"에피소드 6","zh":"第六章"}},{"zoneId":"main_1","type":"MAINLINE","zoneName_i18n":{"en":"Episode 1","ja":"第一章","ko":"에피소드 1","zh":"第一章"}},{"zoneId":"main_7","type":"MAINLINE","zoneName_i18n":{"en":"Episode 7","ja":"第七章","ko":"에피소드 7","zh":"第七章"}},{"zoneId":"main_8","type":"MAINLINE","zoneName_i18n":{"en":"Episode 8","ja":"第八章","ko":"에피소드 8","zh":"第八章"}},{"zoneId":"main_2","type":"MAINLINE","zoneName_i18n":{"en":"Episode 2","ja":"第二章","ko":"에피소드 2","zh":"第二章"}},{"zoneId":"main_4","type":"MAINLINE","zoneName_i18n":{"en":"Episode 4","ja":"第四章","ko":"에피소드 4","zh":"第四章"}},{"zoneId":"main_3","type":"MAINLINE","zoneName_i18n":{"en":"Episode 3","ja":"第三章","ko":"에피소드 3","zh":"第三章"}}]}
  /* # by StageID # */ // const prefilled = {"query":{"stageId":"main_01-07"},"cache":{"item":{"updated":"2020-11-28T17:48:05.574587+08:00"},"matrix":{"updated":"2020-11-28T17:48:06.578839+08:00"},"stage":{"updated":"2020-11-28T17:48:09.924366+08:00"},"zone":{"updated":"2020-11-28T17:48:10.460206+08:00"}},"items":[{"itemId":"randomMaterial_4","name_i18n":{"en":"感谢庆典物资补给","ja":"感谢庆典物资补给","ko":"感谢庆典物资补给","zh":"感谢庆典物资补给"},"spriteCoord":[4,13]},{"itemId":"furni","name_i18n":{"en":"Furniture","ja":"家具","ko":"가구","zh":"家具"}},{"itemId":"30012","name_i18n":{"en":"Orirock Cube","ja":"初級源岩","ko":"원암 큐브","zh":"固源岩"},"spriteCoord":[5,0]},{"itemId":"3003","name_i18n":{"en":"Pure Gold","ja":"純金","ko":"순금","zh":"赤金"},"spriteCoord":[0,2]},{"itemId":"30021","name_i18n":{"en":"Sugar Substitute","ja":"ブドウ糖","ko":"대체당","zh":"代糖"},"spriteCoord":[2,1]},{"itemId":"ap_supply_lt_010","name_i18n":{"en":"Emergency Sanity Sampler","ja":"試供理性回復剤","ko":"응급 이성 샘플","zh":"应急理智小样"},"spriteCoord":[0,9]},{"itemId":"randomMaterial_2","name_i18n":{"en":"New Year's Lantern","ja":"年関ランタン","ko":"축제 등불","zh":"岁过华灯"},"spriteCoord":[1,9]},{"itemId":"30061","name_i18n":{"en":"Damaged Device","ja":"破損装置","ko":"파손된 장치","zh":"破损装置"},"spriteCoord":[1,4]},{"itemId":"30051","name_i18n":{"en":"Diketon","ja":"アケトン試剤","ko":"디케톤","zh":"双酮"},"spriteCoord":[3,3]},{"itemId":"30031","name_i18n":{"en":"Ester","ja":"エステル原料","ko":"에스테르 원료","zh":"酯原料"},"spriteCoord":[1,2]},{"itemId":"30041","name_i18n":{"en":"Oriron Shard","ja":"異鉄の欠片","ko":"이철 조각","zh":"异铁碎片"},"spriteCoord":[5,2]},{"itemId":"30011","name_i18n":{"en":"Orirock","ja":"源岩鉱","ko":"원암","zh":"源岩"},"spriteCoord":[4,0]},{"itemId":"randomMaterial_3","name_i18n":{"en":"32h战略配给","ja":"32h战略配给","ko":"32h战略配给","zh":"32h战略配给"},"spriteCoord":[0,10]},{"itemId":"2001","name_i18n":{"en":"Drill Battle Record","ja":"入門作戦記録","ko":"기초작전기록","zh":"基础作战记录"},"spriteCoord":[0,0]},{"itemId":"randomMaterial_1","name_i18n":{"en":"Rhodes Island Supplies","ja":"補給物資・ロドス","ko":"로도스 아일랜드 보급 물자","zh":"罗德岛物资补给"},"spriteCoord":[5,8]}],"matrix":[{"stageId":"main_01-07","itemId":"randomMaterial_3","quantity":5405,"times":48956,"start":1589529600000,"end":1590696000000},{"stageId":"main_01-07","itemId":"randomMaterial_4","quantity":3687,"times":33460,"start":1604217600000,"end":1605384000000},{"stageId":"main_01-07","itemId":"randomMaterial_1","quantity":3699,"times":31437,"start":1577174400000,"end":1578340800000},{"stageId":"main_01-07","itemId":"randomMaterial_2","quantity":2060,"times":17393,"start":1581105600000,"end":1582315200000},{"stageId":"main_01-07","itemId":"2001","quantity":316784,"times":258008,"start":1556676000000},{"stageId":"main_01-07","itemId":"furni","quantity":1893,"times":258008,"start":1556676000000},{"stageId":"main_01-07","itemId":"30051","quantity":12106,"times":258008,"start":1556676000000},{"stageId":"main_01-07","itemId":"30061","quantity":8792,"times":258008,"start":1556676000000},{"stageId":"main_01-07","itemId":"30012","quantity":320946,"times":258008,"start":1556676000000},{"stageId":"main_01-07","itemId":"30031","quantity":15228,"times":258008,"start":1556676000000},{"stageId":"main_01-07","itemId":"30041","quantity":11997,"times":258008,"start":1556676000000},{"stageId":"main_01-07","itemId":"30011","quantity":30909,"times":258008,"start":1556676000000},{"stageId":"main_01-07","itemId":"3003","quantity":23073,"times":258008,"start":1556676000000},{"stageId":"main_01-07","itemId":"30021","quantity":14573,"times":258008,"start":1556676000000},{"stageId":"main_01-07","itemId":"ap_supply_lt_010","quantity":2936,"times":33460,"start":1604217600000,"end":1605384000000}],"stages":[{"zoneId":"main_1","stageId":"main_01-07","code_i18n":{"en":"1-7","ja":"1-7","ko":"1-7","zh":"1-7"},"apCost":6,"minClearTime":118000}],"zones":[{"zoneId":"main_1","type":"MAINLINE","zoneName_i18n":{"en":"Episode 1","ja":"第一章","ko":"에피소드 1","zh":"第一章"}}]}
  /* #      Error # */ // const prefilled = { error: { type: 'CantMarshal', details: 'malformed parameter `server` provided' } }
  const errors = validate(prefilled)
  if (errors.length > 0) return { errors }

  let type
  if (prefilled.query.stageId) {
    if (prefilled.query.itemId) {
      type = 'exact'
    } else {
      type = 'stage'
    }
  } else {
    type = 'item'
  }
  return {
    type,
    ...prefilled
  }
  // return JSON.parse(window.document.querySelector("script#widgetData").textContent)
}

PenguinData.all = function () {
  if (!this._cache) this._cache = this.raw()
  return this._cache
}

PenguinData.items = {
  byItemId (itemId) {
    return PenguinData.all().items
      .find(el => el.itemId === itemId)
  }
}

PenguinData.stages = {
  byStageId (stageId) {
    return PenguinData.all().stages
      .find(el => el.stageId === stageId)
  }
}

PenguinData.zones = {
  byZoneId (zoneId) {
    return PenguinData.all().zones
      .find(el => el.zoneId === zoneId)
  }
}

PenguinData.matrix = {
  _cache: null,
  data () {
    if (!this._cache) {
      const raw = PenguinData.all()
      this._cache = raw.matrix.map(el => {
        const stage = PenguinData.stages.byStageId(el.stageId)
        const zone = PenguinData.zones.byZoneId(stage.zoneId)
        const item = PenguinData.items.byItemId(el.itemId)
        const percentage = el.quantity / el.times
        return {
          ...el,
          stage,
          zone,
          item,
          percentage,
          percentageText: `${(percentage * 100).toFixed(2)}%`,
          apPPR: (stage.apCost / percentage).toFixed(2)
        }
      })
    }
    return {
      ...PenguinData._cache,
      matrix: this._cache
    }
  }
}

PenguinData.meta = function () {
  const { errors, type, query } = PenguinData.all()
  if (errors) {
    return {
      title: i18n.t('app.name'),
      url: strings.link()
    }
  }
  let item, itemName, stage, stageName
  if (query.itemId) {
    item = PenguinData.items.byItemId(query.itemId)
    itemName = strings.translate(item, 'name')
  }
  if (query.stageId) {
    stage = PenguinData.stages.byStageId(query.stageId)
    stageName = strings.translate(stage, 'code')
  }

  if (type === 'item') {
    return {
      title: i18n.t('title.item', { itemName }),
      url: PenguinData.mirror().site + '/result/item/' + item.itemId
    }
  } else if (type === 'stage') {
    return {
      title: i18n.t('title.stage', { stageName }),
      url: PenguinData.mirror().site + '/result/stage/' + stage.zoneId + '/' + stage.stageId
    }
  } else if (type === 'exact') {
    return {
      title: i18n.t('title.exact', { itemName, stageName }),
      url: PenguinData.mirror().site + '/result/stage/' + stage.zoneId + '/' + stage.stageId
    }
  }
}

PenguinData.mirror = function () {
  return {
    site: 'https://penguin-stats.io',
    cdn: 'https://penguin.upyun.galvincdn.com'
  }
}

export default PenguinData
