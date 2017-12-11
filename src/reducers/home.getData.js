const initialData = window['__INITIAL_DATA']
module.exports = {
  news: initialData ? initialData['news'] : []
}