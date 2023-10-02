
    const vipSeats = [
        {
            id: 'vip1',
            taken: false,
            price: 55,
            name: 'VIP SEAT 1'
        },
        {
            id: 'vip2',
            taken: false,
            price: 55,
            name: 'VIP SEAT 2'
        },
        {
            id: 'vip3',
            taken: false,
            price: 55,
            name: 'VIP SEAT 3'
        },
        {
            id: 'vip4',
            taken: false,
            price: 55,
            name: 'VIP SEAT 5'
        },
        {
            id: 'vip6',
            taken: false,
            price: 55,
            name: 'VIP SEAT 6'
        },
        {
            id: 'vip7',
            taken: false,
            price: 55,
            name: 'VIP SEAT 7'
        },
        {
            id: 'vip8',
            taken: false,
            price: 55,
            name: 'VIP SEAT 8'
        },
        {
            id: 'vip9',
            taken: false,
            price: 55,
            name: 'VIP SEAT 9'
        },
        {
            id: 'vip10',
            taken: false,
            price: 55,
            name: 'VIP SEAT 10'
        }
    ]



    const vVipSeat = [
        {
            id: 'VVIP1',
            taken: false,
            price: 75,
            name: 'VVIP SEAT 1'
        },
        {
            id: 'VVIP2',
            taken: false,
            price: 75,
            name: 'VVIP SEAT 2'
        },
        {
            id: 'VVIP3',
            taken: false,
            price: 75,
            name: 'VVIP SEAT 3'
        },
        {
            id: 'VVIP4',
            taken: false,
            price: 75,
            name: 'VVIP SEAT 5'
        },
        {
            id: 'VVIP6',
            taken: false,
            price: 75,
            name: 'VVIP SEAT 6'
        },
        {
            id: 'VVIP7',
            taken: false,
            price: 75,
            name: 'VVIP SEAT 7'
        },
        {
            id: 'VVIP8',
            taken: false,
            price: 75,
            name: 'VVIP SEAT 8'
        },
        {
            id: 'VVIP9',
            taken: false,
            price: 75,
            name: 'VVIP SEAT 9'
        },
        {
            id: 'VVIP10',
            taken: false,
            price: 75,
            name: 'VVIP SEAT 10'
        }
    ]

const _vipSeat = document.querySelector('.vip-seats')
console.log(_vipSeat)
vipSeats.map(vipSeat => {
    const seat = document.createElement('div')
    _vipSeat.appendChild(seat)
    seat.textContent = vipSeat.name
})