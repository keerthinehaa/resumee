
  function linearSearch(arr, target) {
    for (let i in arr) {
      if (arr[i] === target) return i
    }
  
    return("element not found")
  }
  
  console.log(linearSearch([1, 2, 3, 4], 1))
  console.log(linearSearch([1, 2, 3, 4], 4))
  console.log(linearSearch([1, 2, 3, 4], 6)) 
  console.log(linearSearch([3, 4, 1, 6, 3], 6)) 