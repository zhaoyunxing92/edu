const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

const getValue=(obj,key,def)=>{
  
   if(undefined==obj||null==obj){
     return def;
   }
   //只处理object对象
   if (typeof (obj) == 'object'){
     let val = obj[key];
     if (val != undefined || val != null) {
       return val;
     }
     return def;
   }
}

module.exports = {
  formatTime: formatTime,
  getValue: getValue
}
