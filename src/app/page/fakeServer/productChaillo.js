const products = [{
        _id: "5b21ca3eeb7f6fbccd471815",
        title: "HŨ ĐỰNG KEM CAO CẤP CHÂN KHÔNG 15GR,30GR,50GR",
        priceHight: 5000,
        priceLow: 2000 , 
        content : "Loại da phù hợp: mọi loại da kể cả da nhạy cảm Sản phẩm từ cánh hoa hồng tươi, Hyaluronic Acid và các thành phần giữ ẩm tự nhiên NMF, nước hoa hồng với công thức dịu nhẹ giúp "
    },
    {
        _id: "5b21ca3eeb7f6fbccd471816",
        title: "CHAI LƯỚI,HŨ LƯỚI CAO CẤP 20GR,30GR",
        priceHight: 5000,
        priceLow: 1000 , 
        content : " Loại da phù hợp: da dầu, mụn, hỗn hợp thiên dầu. Sản phẩm chứa các thành phần tự nhiên gồm bí đao, chiết xuất rau má và tinh dầu tràm trà, bổ sung thêm Vitamin B3, HA và chiết xuất cam thảo giúp "
    },
    {
        _id: "5b21ca3eeb7f6fbccd471817",
        title: "HŨ KEM NHỰA CAO CẤP DÁNG VUÔNG NẮP MẠ VÀNG 20GR,30GR",
        priceHight: 3000,
        priceLow: 1000 , 
        content : "  chai đựng nước hoa, chai đựng nước hoa cao cấp, chai đựng toner lotion, Chai lọ chiết mỹ phẩm, Chai lọ đựng mỹ phẩm, chai lọ mỹ phẩm, chai lọ nhôm đựng mỹ phẩm, chai lọ thủy tinh, chai nước hoa vai vuông, "
    },
    {
        _id: "5b21ca3eeb7f6fbccd471819",
        title: "CHAI NHỰA PET TRẮNG SỨ NẮP VÒI NHẤN CAO CẤP 100ML,150ML,200ML",
        priceHight: 7000,
        priceLow: 4000 , 
        content : ", Cocoon rất vinh dự khi là thương hiệu mỹ phẩm Việt Nam đầu tiên được chấp thuận bởi chương trình Leaping Bunny của tổ chức Cruelty Free International trong việc cam kết không thử nghiệm trên động vậ "
    },
    {
        _id: "5b21ca3eeb7f6fbccd47181a",
        title: "Chai xịt mũi có vòi dung tích 25ml",
        priceHight: 8000,
        priceLow: 6000 , 
        content : " chai bi lăn, Chai c, Cocoon rất vinh dự khi là thương hiệu mỹ phẩm Việt Nam đầu tiên được chấp thuận bởi chương trình Leaping Bunny của tổ chức Cruelty Free International trong việc cam kết không thử nghiệm trên động vậ Chai lọ chiết mỹ phẩm, Chai lọ đựng mỹ phẩm, chai lọ mỹ phẩm, chai lọ nhôm đựng mỹ phẩm, chai lọ thủy tinh, chai nước hoa vai vuông, "
    },
    {
        _id: "5b21ca3eeb7f6fbccd47181b",
        title: "CHAI TINH DẦU,SERUM THỦY TINH NÂU KHOEN BẠC MỜ,BẠC BÓNG 5ML,10ML,15ML,20ML,30ML,50ML,100ML",
        priceHight: 6000,
        priceLow: 3000 , 
        content : " chai bi l Chai lọ chiết mỹ phẩm, Chai lọ đựng mỹ phẩm, chai lọ mỹ phẩm, chai lọ nhôm đựng mỹ phẩm, chai lọ thủy tinh, chai nước hoa vai vuông, "
    },
    {
        _id: "5b21ca3eeb7f6fbccd47181e",
        title: "CHAI SERUM TINH DẦU THUỶ TINH TRẮNG TRONG NẮP XOÁY VÀNG 5ML,10ML,15ML,20ML,30ML,50ML,100ML",
        priceHight: 4000,
        priceLow: 1000 , 
        content : " , Cocoon rất vinh dự khi là thương hiệu mỹ phẩm Việt Nam đầu tiên được chấp thuận bởi chương trình Leaping Bunny của tổ chức Cr "

    },
    {
        _id: "5b21ca3eeb7f6fbccd47181f",
        title: "HŨ ĐỰNG YẾN THỦY TINH TRÒN NẮP THIẾT VÀNG,THIẾT ĐEN 75ML",
        priceHight: 6000,
        priceLow: 2000 , 
        content : " chai bi lăn, Chai chiết nước hoa, chai dầu gội sữa tắm, Chai đựng dầu gội sữa tắm, chai đựng nước hoa, chai đựng nước hoa cao cấp, chai đựng toner lotion, Chai lọ chiết mỹ phẩm, Chai lọ đựng mỹ phẩm, chai lọ mỹ phẩm, chai lọ nhôm đựng mỹ phẩm, chai lọ thủy tinh, chai nước hoa vai vuông, "
    },
    {
        _id: "5b21ca3eeb7f6fbccd471821",
        title: "CHAI LƯỚI,HŨ LƯỚI CAO CẤP 20GR,30GR",
        priceHight: 9000,
        priceLow: 4000 , 
        content : " chai bi lăn, Chai chiết nước hoa, chai dầu gội sữa tắm, Chai đựng dầu gội sữa tắm, chai đựng nước hoa, chai đựng nước hoa cao cấp, chai đựng toner lotion, Chai lọ chiết mỹ phẩm, Chai lọ đựng mỹ phẩm, chai lọ mỹ phẩm, chai lọ nhôm đựng mỹ phẩm, chai lọ thủy tinh, chai nước hoa vai vuông, "
    },
    {
        _id: "5b21ca3eeb7f6bccd4718e",
        title: "CHAI SERUM TINH DẦU THUỶ TINH TRẮNG TRONG NẮP XOÁY VÀNG 5ML,10ML,15ML,20ML,30ML,50ML,100ML",
        priceHight: 4000,
        priceLow: 1000 , 
        content : " chai bi lăn, Chai chiết nước hoa, chai dầu gội sữa tắm, Chai đựng dầu gội sữa tắm, chai đựng nước hoa, chai đựng nước hoa cao cấp, chai đựng toner lotion, Chai lọ chiết mỹ phẩm, Chai lọ đựng mỹ phẩm, chai lọ mỹ phẩm, chai lọ nhôm đựng mỹ phẩm, chai lọ thủy tinh, chai nước hoa vai vuông, "

    },
    {
        _id: "5b21ca3eeb7f6fbcc4781f",
        title: "HŨ ĐỰNG YẾN THỦY TINH TRÒN NẮP THIẾT VÀNG,THIẾT ĐEN 75ML",
        priceHight: 6000,
        priceLow: 2000 , 
        content : " chai bi lăn, Chai chiết nước hoa, chai dầu gội sữa tắm, Chai đựng dầu gội sữa tắm, chai đựng nước hoa, chai đựng nước hoa cao cấp, chai đựng toner lotion, Chai lọ chiết mỹ phẩm, Chai lọ đựng mỹ phẩm, chai lọ mỹ phẩm, chai lọ nhôm đựng mỹ phẩm, chai lọ thủy tinh, chai nước hoa vai vuông, "
    },
    {
        _id: "5b21ca3eeb7f6fbccd821",
        title: "CHAI LƯỚI,HŨ LƯỚI CAO CẤP 20GR,30GR",
        priceHight: 9000,
        priceLow: 4000 , 
        content : " chai bi lăn, Chai chiết nước hoa, chai dầu gội sữa tắm, Chai đựng dầu gội sữa tắm, chai đựng nước hoa, chai đựng nước hoa cao cấp, chai đựng toner lotion, Chai lọ chiết mỹ phẩm, Chai lọ đựng mỹ phẩm, chai lọ mỹ phẩm, chai lọ nhôm đựng mỹ phẩm, chai lọ thủy tinh, chai nước hoa vai vuông, "
    }
];

export function getProducts() {
    return products;
}

const forms = [{
        _id: '5fb5233v37',
        name: 'Họ và tên',
        placeholder: 'Nhập họ và tên ...',
        type: 'name'
    },
    {
        _id: '5fb5233v36',
        name: 'Số điện thoại',
        placeholder: 'Nhập số điện thoại',
        type: 'number'
    },
    {
        _id: '5fb5233v35',
        name: 'Tỉnh/ Thành Phố',
        placeholder: 'chọn tỉnh/thành phố',
        type: 'address'
    },
    {
        _id: '5fb5233v34',
        name: 'Quận/ Huyện',
        placeholder: 'Chọn Quận/huyện',
        type: 'address'
    },
    {
        _id: '5fb5233v33',
        name: 'Xã/Phường',
        placeholder: 'chọn Xã/ phường',
        type: 'address'
    },
    {
        _id: '5fb5233v32',
        name: 'địa chỉ cụ thể',
        placeholder: 'VD: 2a Lương Thế Vinh,Phước Long,Nha Trang,...',
        type: 'text'
    },
    {
        _id: '5fb5233v31',
        name: 'Tên sản phẩm',
        placeholder: 'Nhập tên sản phẩm ...',
        type: 'text'
    },
    {
        _id: '5fb5233v30',
        name: 'Số lượng',
        placeholder: 'Nhập số lượng ...',
        type: 'number'
    },
];

export function getForms() {
    return forms;
}