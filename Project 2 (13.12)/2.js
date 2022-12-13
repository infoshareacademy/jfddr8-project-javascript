function zamiana (a, b) {
    let areplace = a.replace(a[0], b[0])
    let breplace = b.replace(b[0], a[0])
    
    console.log(areplace + ' ' + breplace)
  }
  zamiana('hej', 'cześć')