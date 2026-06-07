// Brand + menu data. Images in /public/menu/<brand>/. veg/spicy drive the badges
// over the image; kcal/p/c/f render as the macro line.
//
// MOMO macros are OFFICIAL (wowmomodashboard.com nutrition sheet). China, Chicken
// and Kulfi macros + all prices are realistic estimates pending official sheets
// (most are limited/Korean SKUs not in public nutrition tables) — easy to update.
// Momo rows: 1 steamed · 2 fried · 3 pan-fried (saucy).

export const BRANDS = [
  {
    id: 'momo', name: 'Wow! Momo', logo: '/brands/momo.jpg', color: '#F2C200',
    menu: [
      { name: 'Veg Himalayan Steam Momo', img: '/menu/momo/veg-himalayan-steam.webp', veg: true, spicy: false, price: '₹109', desc: 'Soft veg momos, steamed Himalayan-style.', kcal: 175, p: 8, c: 22, f: 6 },
      { name: 'Chicken Himalayan Steam Momo', img: '/menu/momo/chicken-himalayan-steam.webp', veg: false, spicy: false, price: '₹139', desc: 'Juicy chicken momos, steamed to order.', kcal: 214, p: 12, c: 24, f: 8 },
      { name: 'Chicken Pahari Feast Steam Momo', img: '/menu/momo/chicken-pahari-steam.webp', veg: false, spicy: true, price: '₹159', desc: 'Premium Pahari-spiced chicken momos.', kcal: 250, p: 14, c: 28, f: 9 },
      { name: 'Veg Pahari Feast Fried Momo', img: '/menu/momo/veg-pahari-fried.webp', veg: true, spicy: true, price: '₹139', desc: 'Crisp-fried veg Pahari Feast momos.', kcal: 240, p: 8, c: 30, f: 10 },
      { name: 'Chicken Cheese Fried Momo', img: '/menu/momo/chicken-cheese-fried.webp', veg: false, spicy: false, price: '₹169', desc: 'Cheese-loaded chicken momos, fried golden.', kcal: 331, p: 10, c: 39, f: 15 },
      { name: 'Chicken Masala Fried Momo', img: '/menu/momo/chicken-masala-fried.webp', veg: false, spicy: true, price: '₹159', desc: 'Spiced chicken momos, fried crisp.', kcal: 172, p: 12, c: 12, f: 8 },
      { name: 'Chatpata Paneer Pan-Fried Momo', img: '/menu/momo/chatpata-paneer-panfried.webp', veg: true, spicy: true, price: '₹189', desc: 'Pan-fried paneer momos in chatpata sauce.', kcal: 398, p: 11, c: 33, f: 26 },
      { name: 'Chicken Cheese Pan-Fried Momo', img: '/menu/momo/chicken-cheese-panfried.webp', veg: false, spicy: false, price: '₹199', desc: 'Cheesy chicken momos, pan-fried saucy.', kcal: 363, p: 14, c: 27, f: 22 },
      { name: 'Corn Cheese Pan-Fried Momo', img: '/menu/momo/corn-cheese-panfried.webp', veg: true, spicy: false, price: '₹189', desc: 'Corn & cheese momos, pan-fried in sauce.', kcal: 480, p: 9, c: 50, f: 27 },
    ],
  },
  {
    id: 'china', name: 'Wow! China', logo: '/brands/china.jpg', color: '#E2231A',
    menu: [
      { name: 'Honey Chilli Baby Corn', img: '/menu/china/honey-chilli-babycorn.webp', veg: true, spicy: true, price: '₹189', desc: 'Crispy baby corn in sweet-chilli glaze.', kcal: 320, p: 6, c: 38, f: 16 },
      { name: 'Chilli Chicken Dry', img: '/menu/china/chilli-chicken-dry.webp', veg: false, spicy: true, price: '₹229', desc: 'The Chindian classic — dry and fiery.', kcal: 340, p: 22, c: 18, f: 20 },
      { name: 'Chicken Lollypop', img: '/menu/china/chicken-lollypop.webp', veg: false, spicy: true, price: '₹239', desc: 'Frenched wings, crisp and saucy.', kcal: 360, p: 24, c: 14, f: 22 },
      { name: 'Butter Garlic Fish', img: '/menu/china/butter-garlic-fish.webp', veg: false, spicy: false, price: '₹259', desc: 'Fish tossed in buttery garlic.', kcal: 330, p: 26, c: 12, f: 20 },
      { name: 'Chicken Korean Hot Balls', img: '/menu/china/chicken-korean-hot-balls.webp', veg: false, spicy: true, price: '₹239', desc: 'Korean-spiced crispy chicken balls.', kcal: 370, p: 20, c: 26, f: 22 },
      { name: 'Chicken Tom Yum Soup', img: '/menu/china/chicken-tom-yum-soup.webp', veg: false, spicy: true, price: '₹179', desc: 'Hot-and-sour Thai-style broth.', kcal: 140, p: 12, c: 10, f: 6 },
      { name: 'Veggie Fried Rice with Chilli Paneer', img: '/menu/china/veggie-fried-rice-chilli-paneer.webp', veg: true, spicy: true, price: '₹239', desc: 'Wok rice paired with chilli paneer.', kcal: 560, p: 16, c: 72, f: 22 },
      { name: 'Chicken Fried Rice with Chilli Chicken', img: '/menu/china/chicken-fried-rice-chilli-chicken.webp', veg: false, spicy: true, price: '₹269', desc: 'Wok rice paired with chilli chicken.', kcal: 590, p: 26, c: 70, f: 24 },
      { name: 'Chilli Oil Noodles', img: '/menu/china/chilli-oil-noodles.webp', veg: false, spicy: true, price: '₹229', desc: 'Chilli-oil noodles with chicken meatballs.', kcal: 520, p: 18, c: 64, f: 22 },
    ],
  },
  {
    id: 'chicken', name: 'Wow! Chicken', logo: '/brands/chicken.jpg', color: '#F2851F',
    menu: [
      { name: 'Spicy Korean Paneer Burger', img: '/menu/chicken/spicy-korean-paneer-burger.webp', veg: true, spicy: true, price: '₹169', desc: 'Crisp paneer patty, Korean hot sauce.', kcal: 480, p: 16, c: 52, f: 22 },
      { name: 'Korean Barbeque Burger', img: '/menu/chicken/korean-bbq-burger.webp', veg: false, spicy: false, price: '₹189', desc: 'Smoky Korean BBQ chicken burger.', kcal: 520, p: 24, c: 50, f: 24 },
      { name: '2pc Chicken Kurkure Burger', img: '/menu/chicken/chicken-kurkure-burger.webp', veg: false, spicy: true, price: '₹199', desc: 'Double crunchy chicken patties.', kcal: 560, p: 26, c: 52, f: 28 },
      { name: 'Korean Barbecue Grilled', img: '/menu/chicken/korean-bbq-grilled.webp', veg: false, spicy: false, price: '₹229', desc: 'Grilled chicken in Korean BBQ glaze.', kcal: 380, p: 30, c: 18, f: 20 },
      { name: 'Barbecue Korean Wings', img: '/menu/chicken/bbq-korean-wings.webp', veg: false, spicy: true, price: '₹219', desc: 'Sticky, spicy Korean BBQ wings.', kcal: 360, p: 24, c: 16, f: 22 },
      { name: 'Korean Popcorn', img: '/menu/chicken/korean-popcorn.webp', veg: false, spicy: true, price: '₹169', desc: 'Bite-size Korean fried chicken.', kcal: 330, p: 20, c: 26, f: 18 },
      { name: '20pc Special Chicken Pack', img: '/menu/chicken/special-chicken-20pc.webp', veg: false, spicy: false, price: '₹499', desc: 'Twenty-piece sharing bucket.', kcal: 1200, p: 70, c: 80, f: 70 },
      { name: 'K-Pop Meal', img: '/menu/chicken/kpop-meal.webp', veg: false, spicy: true, price: '₹299', desc: 'The full Korean combo meal.', kcal: 780, p: 34, c: 82, f: 34 },
      { name: 'Chicken Popcorn Regular', img: '/menu/chicken/chicken-popcorn-regular.webp', veg: false, spicy: false, price: '₹129', desc: 'Classic popcorn chicken.', kcal: 300, p: 18, c: 24, f: 16 },
    ],
  },
  {
    id: 'kulfi', name: 'Wow! Kulfi', logo: '/brands/kulfi.jpg', color: '#E6157E',
    menu: [
      { name: 'Stick Kulfi Malai', img: '/menu/kulfi/kulfi-malai.webp', veg: true, spicy: false, price: '₹79', desc: 'Classic creamy malai kulfi.', kcal: 180, p: 4, c: 20, f: 9 },
      { name: 'Stick Kulfi Kesar', img: '/menu/kulfi/kulfi-kesar.webp', veg: true, spicy: false, price: '₹89', desc: 'Saffron-kissed creamy kulfi.', kcal: 190, p: 4, c: 21, f: 9 },
      { name: 'Stick Kulfi Paan', img: '/menu/kulfi/kulfi-paan.webp', veg: true, spicy: false, price: '₹89', desc: 'Cooling paan-flavoured kulfi.', kcal: 185, p: 4, c: 22, f: 8 },
      { name: 'Popsicle Mango', img: '/menu/kulfi/popsicle-mango.webp', veg: true, spicy: false, price: '₹69', desc: 'Real mango ice popsicle.', kcal: 120, p: 2, c: 26, f: 2 },
      { name: 'Popsicle Strawberry', img: '/menu/kulfi/popsicle-strawberry.webp', veg: true, spicy: false, price: '₹69', desc: 'Creamy strawberry popsicle.', kcal: 130, p: 2, c: 27, f: 2 },
      { name: 'Popsicle Oreo Ice Cream', img: '/menu/kulfi/popsicle-oreo.webp', veg: true, spicy: false, price: '₹89', desc: 'Cookies-and-cream on a stick.', kcal: 210, p: 3, c: 28, f: 9 },
      { name: 'Rasmalai', img: '/menu/kulfi/rasmalai.webp', veg: true, spicy: false, price: '₹99', desc: 'Soft rasmalai in saffron milk.', kcal: 250, p: 7, c: 34, f: 9 },
      { name: 'Kesar Gulab Jamun', img: '/menu/kulfi/kesar-gulab-jamun.webp', veg: true, spicy: false, price: '₹89', desc: 'Warm saffron gulab jamun.', kcal: 300, p: 4, c: 45, f: 11 },
      { name: 'Choco Lava Cake', img: '/menu/kulfi/choco-lava-cake.webp', veg: true, spicy: false, price: '₹99', desc: 'Molten chocolate lava cake.', kcal: 340, p: 5, c: 45, f: 16 },
    ],
  },
];
