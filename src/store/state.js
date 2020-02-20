let defaultCity = '上海'
// localStorage  用 try catch 包裹 避免隱身瀏覽器拋出異常
try {
  if (localStorage.city) {
    defaultCity = localStorage.city // 記住選擇
  }
} catch (e) {}

export default {
  city: defaultCity
}
