import dayjs from 'dayjs'
import 'dayjs/locale/zh'
import 'dayjs/locale/ja'
import 'dayjs/locale/ko'

import i18n from '@/i18n'

const isBetween = require('dayjs/plugin/isBetween')
const duration = require('dayjs/plugin/duration')
dayjs.extend(isBetween)
dayjs.extend(duration)

const FORMATS = {
  MD: 'M.D',
  YMD: 'YY.M.D',
  HM: 'H:mm',
  HMS: 'H:mm:ss'
}

function needYear (moments) {
  for (const index in moments) {
    if (index === '0') continue
    if (!dayjs().isSame(moments[index], 'year') || !(moments[index].isSame.apply(moments[index], [moments[index - 1], 'year']))) {
      return true
    }
  }
  return false
}

export default {
  get dayjs () {
    dayjs.locale(i18n.locale)
    return dayjs
  },
  isOutdated (rangeStart, rangeEnd) {
    return dayjs().isBefore(rangeStart) || dayjs().isAfter(rangeEnd)
  },
  dates (times, includeTime = true) {
    times = times.map(ts => {
      return dayjs(ts)
    })
    const needsYear = needYear(times)
    times = times.map(time => {
      if (includeTime) return time.format(`${needsYear ? FORMATS.YMD : FORMATS.MD} ${FORMATS.HM}`)
      return time.format(`${needsYear ? FORMATS.YMD : FORMATS.MD}`)
    })
    return times
  },
  date (date, detectSameYear = false, includeTime = false) {
    let template = FORMATS.MD
    if (detectSameYear) {
      const isSameYear = dayjs(date).isSame(dayjs(), 'year')
      template = isSameYear ? FORMATS.MD : FORMATS.YMD
    }
    if (includeTime) template += ` ${FORMATS.HMS}`
    return dayjs(date).format(template)
  },
  /** duration: duration in milliseconds; returns: localized string */
  duration (duration, unit = 's') {
    if (!duration) return ''
    let message = ''
    const d = dayjs.duration(duration / 1000, unit)
    if (d.get('minutes') > 0) message += i18n.t('meta.time.minute', { m: d.get('minutes') })
    const ms = d.get('milliseconds') > 0 ? ((d.get('milliseconds') / 1000).toFixed(3)).toString().slice(1) : ''
    if (d.get('seconds') > 0) message += i18n.t('meta.time.second', { s: `${d.get('seconds')}${ms}` })
    return message
  },
  startEnd (start, end, selector = false) {
    if (start && end) {
      return i18n.t('table.timeRange.inBetween', this.dates([start, end], false))
    } else if (start && !end) {
      return i18n.t('table.timeRange.toPresent', { date: this.date(start, true) })
    } else if (!start && end) {
      return i18n.t('table.timeRange.endsAt', { date: this.date(end, true) })
    } else {
      if (selector) return i18n.t('stats.timeRange.notSelected')
      return i18n.t('table.timeRange.unknown')
    }
  }
}
