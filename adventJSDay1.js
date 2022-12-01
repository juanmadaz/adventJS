function wrapping(gifts) {
    return gifts.map((gift) => {
        return ("*".repeat(gift.length + 2) + "\n*" + gift + "*\n" + "*".repeat(gift.length + 2))
    });
};

const gifts = ['book', 'game', 'socks']
const wrapped = wrapping(gifts)
console.log(wrapped)

//Output:
/* [
  "******\n*book*\n******",
  "******\n*game*\n******",
  "*******\n*socks*\n*******"
] */