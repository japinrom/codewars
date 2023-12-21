function quicksum (packet) {
  const letter = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  let total = 0
  if (/[^A-Z\s]/.test(packet)) return 0

  for (let i = 0; i < packet.length; i++) {
    if (letter.includes(packet[i])) {
      total = total + (i + 1) * (letter.indexOf(packet[i]) + 1)
    }
  }

  return total
}

console.log(quicksum('ACM')) // 46
console.log(quicksum('MID CENTRAL')) // 650
console.log(quicksum('BBC')) // 15
