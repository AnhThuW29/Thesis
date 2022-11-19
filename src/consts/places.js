const places = [
    {
        id: 1,
        name: 'Vịnh Hạ Long',
        location: 'Quảng Ninh',
        image: require('../assets/VinhHaLong.jpg'),
        tourName: 'Tour Vịnh Hạ Long gói 2 ngày 1 đêm đặc sắc',
        price: '3.000.000',
        start: '20/11/2022',
        end: '20/11/2022',
        range: '2',
        isAvailable: true,
        details: `1 trong 7 kỳ quan thiên nhiên thế giới, du khách sẽ được khám phá nhiều hang động độc đáo, các hòn đảo tuyệt đẹp như đảo Mắt Rồng, Ngọc Vừng, hòn Con Cóc,... Cùng với cảnh đẹp, nơi đây còn có nhiều món đặc sản thơm ngon như chả mực, sá sùng, hàu nướng, chả rươi, sam biển,...`,
    },
    {
        id: 2,
        name: 'Hội An',
        location: 'Đà Nẵng',
        image: require('../assets/HoiAn.jpg'),
        tourName: 'Tour Hội An',
        price: '2.500.000',
        start: '20/11/2022',
        end: '20/11/2022',
        range: '2',
        isAvailable: true,
        details: `Phố cổ Hội An là một thành phố nổi tiếng của tỉnh Quảng Nam, một phố cổ giữ được gần như nguyên vẹn với hơn 1000 di tích kiến trúc từ phố xá, nhà cửa, hội quán, đình, chùa, miếu, nhà thờ tộc, giếng cổ… đến các món ăn truyền thống, tâm hồn của người dân nơi đây. Một lần du lịch Hội An sẽ làm say đắm lòng du khách bởi những nét đẹp trường tồn cùng thời gian, vô cùng mộc mạc, bình dị.
        aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaâ
        aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaâ
        aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaâ
        aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaâ
        aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaâ
        aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaâ
        aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaâ
        aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaâ
        aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaâ
        aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaâ
        aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaâ
        aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaâ
        aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaâ
        aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaâ `,
    },
    {
        id: 3,
        name: 'Bà Nà Hill',
        location: 'Đà Nẵng',
        image: require('../assets/BaNaHill.jpg'),
        tourName: 'Trải nghiệm trọn vẹn Bà Nà Hill 2 ngày 1 đêm',
        price: '2.500.000',
        start: '20/11/2022',
        end: '20/11/2022',
        range: '2',
        isAvailable: true,
        details: `Đến với Sun World Ba Na Hills, du khách sẽ được trải nghiệm khí hậu bốn mùa trong một ngày, chu du trên những tuyến cáp treo, đắm chìm trong cảnh quan thiên nhiên của những cánh rừng nguyên sinh nối tiếp ở Bà Nà Núi Chúa, thưởng thức ẩm thực đa dạng và tận hưởng không khí lễ hội ngập tràn.`,
    },
    {
        id: 4,
        name: 'Braies Lake, Braies',
        location: 'Italy',
        image: require('../assets/location1.jpg'),
        tourName: 'Tour hồ Braies Lake',
        price: '8.000.000',
        start: '20/11/2022',
        end: '20/11/2022',
        range: '2',
        isAvailable: false,
        details: `Hồ Braies là một hồ ở Prags Dolomites ở Nam Tyrol, Ý.`,
    },
    {
        id: 5,
        name: 'Mũi Né',
        location: 'Phan Thiết, Bình Thuận',
        image: require('../assets/MuiNe.jpg'),
        tourName: 'Tour du lịch Mũi Né',
        price: '2.000.000',
        start: '20/11/2022',
        end: '20/11/2022',
        range: '2',
        isAvailable: true,
        details: `Du Lịch Mũi Né là một trong những điểm du lịch sinh thái biển đẹp và thơ mộng nhất của tỉnh Bình Thuận. Du khách đến Mũi Né không chỉ bị hấp dẫn bởi vẻ đẹp hoang sơ của tự nhiên mà còn bị thu hút bởi nét ẩm thực độc đáo cùng sự mến khách của người dân làng chài tốt bụng.`,
    },
]

export default places
