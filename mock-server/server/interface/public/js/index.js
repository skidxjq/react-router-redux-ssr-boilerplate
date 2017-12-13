const APIs = {
  'GET_ALL': '/interface-admin/list',
  'SET_KEY': '/interface-admin/set'
}
window.onload = function () {
  getList()

  document.addEventListener('change', function (event) {
    setKey({
      key: event.target.value,
      api: event.target.name
    }).then(() => {

    })
  })
}

function setKey (payload) {
  return axios.post(APIs.SET_KEY, {
    key: payload.key,
    api: payload.api
  })
}

function setDelay (payload) {

}

function getList () {
  axios.get(APIs.GET_ALL)
    .then((response) => {
      renderTable(response.data)
    })
}

function renderTable (response) {
  var $table = document.querySelector('.j-list')
  var trs = response.data.map((item) => {
    var str = `<tr>`

    var radioStr = Object.keys(item.keys).length > 0 ? renderRadioGroup(item) : ''
    str += `<td>${item.api}</td>`

    str += `<td>${item.desc}</td>`
    str += `<td>${radioStr}</td>`
    str += `<td>${item.delay}</td>`
    str += `</tr>`

    return str
  })

  $table.innerHTML = renderThead() + trs.join('')
}
function renderThead () {
  return `<thread>
    <tr>
      <th>接口名称</th>
      <th>接口说明</th>
      <th>当前选项</th>
      <th>延迟(ms)</th>
    </tr>
    </thread>`
}

function renderDelay (item) {
  var msArr = [0, 500, 1000, 5000]
  var delayArr = msArr.map((ms) => {
    return `<label><input type='radio' name='delay_${item.api}' value='${ms}' ${item.delay === ms ? `checked` : ''}/>${ms}</label>`
  })
  return delayArr.join('')
}

function renderRadioGroup (item) {
  var radioStr
  // var keys = Object.keys(item.keys)

  if (typeof item.default === 'string') {
    radioStr = renderRadioLine(item.default, item)
    // radioStr = radioArr.join('')
  } else if (typeof item.default === 'object') {
    var defaultKeys = Object.keys(item.default)

    radioStr = defaultKeys.map((key) => renderRadioLine(key, item, item.default[key])).join('')
    // var defaultKeys = Object.keys(items.default)
    // var radioArr = defaultKeys.map(key => )
  }
  return radioStr
}

function renderRadioLine (key, item, keyname = '') {
  var itemKeys = Object.keys(item.keys)
  var str = ''
  var arr = []
  if (!keyname) {
    arr = itemKeys.map(itemKey => {
      var labelStart = `<label title=${xss(item.keys[itemKey])}>`
      var radio = `<input type='radio' value=${itemKey} name='${item.api}' ${key === itemKey ? `checked` : ``}/>`
      var labelEnd = `${itemKey}</label > `

      return labelStart + radio + labelEnd
    })
  } else {
    str = `<p>子类别${key}</p>`
    arr = itemKeys.map((itemKey) => {
      var labelStart = `<label title='${xss(item.keys[itemKey])}'>`
      var radio = `<input type='radio' value='${itemKey}' name='${item.api}##${key}' ${keyname === itemKey ? `checked` : ``} />`
      var labelEnd = `${itemKey}</label > `

      return labelStart + radio + labelEnd
      // return `<label title=${xss(item.keys[itemKey])}><input type='radio' name='${item.api}##${keyname}' ${keyname === itemKey ? `checked` : ``} value=${itemKey}/>${itemKey}</label > `
    })
  }

  return str + arr.join('')
}

function xss (str) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;')
}
