function slowo (string) {
    let strsplit = string.split('')
    let strreverse = strsplit.reverse()
    let reversejoin = strreverse.join ('')
    console.log (reversejoin)
  }
  
  slowo('test')