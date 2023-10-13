import Vue from 'vue';
import Vuex from 'vuex';
// import axios from 'axios';
// import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

const store = new Vuex.Store({
    state:{
        products: [
            {
                id: 1,
                image: 'https://rukminim2.flixcart.com/image/832/832/knyxqq80/dslr-camera/r/y/x/digital-camera-eos-m50-mark-ii-eos-m50-mark-ii-canon-original-imag2gzkexzqhyhu.jpeg?q=70',
                name: 'Camera',
                brand: 'Canon',
                category:'appliances',
                price: 'price: 29999',
                rating:'3.4',
                define:"Camera : 14 - 42 mm Lens, Body Cap, Hot Shoe Cover, Battery Pack, AC Adapter, USB Cable, Shoulder Strap",
                offers: ['Bank Offer5% Cashback on Flipkart Axis Bank CardT&C','Extra ₹500 Off on Bikes & Scooters on purchase of ₹30,000 or moreT&C','Partner OfferSign-up for Flipkart Pay Later & get free Times Prime Benefits worth ₹10,000*Know More','Partner OfferPurchase now & get 1 surprise cashback coupon in FutureKnow More'],
            },
            {
                id: 2,
                image: 'https://rukminim2.flixcart.com/image/832/832/kr3tj0w0/acoustic-guitar/f/d/d/med-blu-c-medellin-original-imag4yumsu5qmwca.jpeg?q=70',
                name: 'Guitar',
                category:'appliances',
                brand: 'noymi',
                price: 'price: 1,329',
                rating:'3.1',
                define:"Bestor Mic Kit Adjustable Mic Microphone Stand, Studio Microphone Stand, Recording Mic Stand, Microphone for Pc, Microphone for Singing , Microphone for Voice Recording, Microphone with Speaker, Recording Microphone, ( Metal Stand NB-35 + Microphone Pop Filter + Microphone Microphone",
                offers:['Special PriceGet extra ₹1000 off (price inclusive of cashback/coupon)T&C',
                        'Bank Offer10% off on Bank of Baroda Credit Card EMI Txns, up to ₹2,000 on orders of ₹10,000 and aboveT&C',
                        'Bank Offer10% off on Bank of Baroda Credit Card Txns, up to ₹1,500 on orders of ₹10,000 and aboveT&C',
                        'Bank OfferExtra ₹1,000 off on Bank of Baroda Credit Card EMI Txns on Net Cart Value of ₹29,999 and aboveT&C'
                        ]
            },
            {
                id: 3,
                image: 'https://rukminim2.flixcart.com/image/832/832/kxxl9jk0/bar/n/u/h/high-density-pvc-pp-push-up-bar-stand-for-home-exercise-dips-original-imaga9rrdx6rb79n.jpeg?q=70',
                name: 'Push-up Bar ',
                brand: 'noymi',
                price: 'price: 239',
                category:'Others',
                rating: '3.0',
                offers:['Bank OfferFlat ₹200 off on HDFC Bank Credit/Debit Card on 3 months EMI Txns, Min Txn Value ₹10,000T&C',
                    'Bank OfferFlat ₹500 off on HDFC Bank Credit/Debit Card on 6 months EMI Txns, Min Txn Value ₹10,000T&C',
                    'Bank OfferFlat ₹500 off on HDFC Bank Credit/Debit Card on 9 months EMI Txns, Min Txn Value ₹10,000T&C',
                    'Extra ₹500 Off on Bikes & Scooters on purchase of ₹30,000 or moreT&C',
                    'Partner OfferSign-up for Flipkart Pay Later & get free Times Prime Benefits worth ₹10,000*Know More',
                    'Bank OfferFlat ₹500 off on HDFC Bank Credit/Debit Card on 12 months and above EMI Txns, Min Txn Value ₹10,000T&C',
                    'Bank OfferFlat ₹450 off on HDFC Bank Credit/Debit Card on 3 months EMI Txns, Min Txn Value ₹15,000T&C',
                    'Bank OfferFlat ₹900 off on HDFC Bank Credit/Debit Card on 6 months EMI Txns, Min Txn Value ₹15,000T&C',
                    'Bank OfferFlat ₹900 off on HDFC Bank Credit/Debit Card on 9 months EMI Txns, Min Txn Value ₹15,000T&C'],
                define:'PRO365 High-density PVC & PP Push Up Bar Stand For Home Exercise Dips Chest pres training Push-up Bar'
            }, 
            {
                id: 4,
                name: 'welcome',
                image: 'https://rukminim2.flixcart.com/image/832/832/xif0q/wind-chime/g/c/o/17-canvasgoodvibesmediumdc-pastelmulti-duli-original-imagmu28zwch44s6.jpeg?q=70',
                brand: 'Canon',
                category:'Others',
                price: 'price: 29999',
                rating:'3.3',
                offers:['Special PriceGet extra 5% off (price inclusive of cashback/coupon)T&C',
                        'Partner OfferSign-up for Flipkart Pay Later & get free Times Prime Benefits worth ₹10,000*Know More',
                        'Partner OfferPurchase now & get 1 surprise cashback coupon in FutureKnow More',
                        'Bank OfferFlat ₹200 off on HDFC Bank Credit/Debit Card on 3 months EMI Txns, Min Txn Value ₹10,000T&C'
                        ],
                define:'Fing Rose Diamond Crystal Table Lamp USB Rechargeable Touch Lamp Table Lamp  (12 cm, Clear)',
            },
            {
                id: 5,
                image: 'https://rukminim2.flixcart.com/image/832/832/xif0q/remote-control-toy/8/r/f/high-speed-mini-1-24-scale-rechargeable-remote-control-car-with-original-imagkw4cvsh73vdn.jpeg?q=70',
                name: 'car',
                brand: 'KIA',
                rating:'3.3',
                category:'Others',
                offers:['Extra ₹500 Off on Bikes & Scooters on purchase of ₹30,000 or moreT&C',
                        'Partner OfferSign-up for Flipkart Pay Later & get free Times Prime Benefits worth ₹10,000*Know More',
                        'Special PriceGet extra 25% off (price inclusive of cashback/coupon)T&C',
                        'Bank Offer5% Cashback on Flipkart Axis Bank CardT&C'
                        ],
                define:'Fing Rose Diamond Crystal Table Lamp USB Rechargeable Touch Lamp Table Lamp  (12 cm, Clear)',
                price: 'price: 1,329',
            },
            {
                id: 6,
                image: 'https://rukminim2.flixcart.com/image/832/832/l1qrjbk0/microphone/2/o/a/mic-kit-adjustable-mic-microphone-stand-studio-microphone-stand-original-imagd8n4jfgyzzha.jpeg?q=70',
                name: 'Mic Kit',
                brand: 'Bestor',
                category:'appliances',
                price: 'price: 1,999',
                rating:'3.3',
                offers:['Bank Offer10% off on Bank of Baroda Credit Card EMI Txns, up to ₹2,000 on orders of ₹10,000 and aboveT&C',
                        'Bank Offer10% off on Bank of Baroda Credit Card Txns, up to ₹1,500 on orders of ₹10,000 and aboveT&C',
                        'Bank OfferExtra ₹1,000 off on Bank of Baroda Credit Card EMI Txns on Net Cart Value of ₹29,999 and aboveT&C',
                        'Extra ₹500 Off on Bikes & Scooters on purchase of ₹30,000 or moreT&C'
                        ],
                define:'Bestor Mic Kit Adjustable Mic Microphone Stand, Studio Microphone Stand, Recording Mic Stand, Microphone for Pc, Microphone for Singing , Microphone for Voice Recording, Microphone with Speaker, Recording Microphone, ( Metal Stand NB-35 + Microphone Pop Filter + Microphone Microphone',

            },
            {
                id: 7,
                image: 'https://rukminim2.flixcart.com/image/832/832/knknc7k0/home-temple/j/m/u/326-big-tempal-son-mahavir-eco-products-original-imag27vg4zqn7zcq.jpeg?q=70',
                name: 'Wooden Temple',
                brand: 'HIOLTY INTERNATIONAL Art and Craft',
                price: 'price: 306',
                rating:'3.3',
                category:'Others',
                offers:['Bank OfferFlat ₹200 off on HDFC Bank Credit/Debit Card on 3 months EMI Txns, Min Txn Value ₹10,000T&C',
                'Bank OfferFlat ₹500 off on HDFC Bank Credit/Debit Card on 6 months EMI Txns, Min Txn Value ₹10,000T&C',
                'Bank OfferFlat ₹500 off on HDFC Bank Credit/Debit Card on 9 months EMI Txns, Min Txn Value ₹10,000T&C',
                'Extra ₹500 Off on Bikes & Scooters on purchase of ₹30,000 or moreT&C'
                ],
                define:'HIOLTY INTERNATIONAL Art and Craft Wooden Temple Beautiful Plywood Mandir Pooja Room Home Decor Office OR Home Temple (Red)Temple Wooden Beautiful Plywood Mandir Pooja Room Home Decor Office OR Home Temple Wall Hanging Product Engineered Wood Home TempleWooden Singhasan Temple for God, Laddu Gopal Sinhasan for Pooja Mandir, Singhasan for Diwali, Durga Pooja, Navratri, Ganesh Chaturthi-326 Engineered Wood Home Temple  (Height: 28, DIY(Do-It-Yourself))',

            },
            {
                id: 8,
                image: 'https://rukminim2.flixcart.com/image/832/832/xif0q/musical-keyboard/k/q/v/49-0-495-530a1-digital-electronic-educational-musical-instrument-original-imagrpv7yuawjcca.jpeg?q=70',
                name: 'Musical Piano',
                brand: 'Zuurvi ',
                category:'appliances',
                price: 'price: 1,649',
                rating:'3.2',
                offers:['Special PriceGet extra 20% off (price inclusive of cashback/coupon)T&C',
                    'Bank Offer10% off on Bank of Baroda Credit Card EMI Txns, up to ₹2,000 on orders of ₹10,000 and aboveT&C',
                    'Bank Offer10% off on Bank of Baroda Credit Card Txns, up to ₹1,500 on orders of ₹10,000 and aboveT&C',
                    'Bank OfferExtra ₹1,000 off on Bank of Baroda Credit Card EMI Txns on Net Cart Value of ₹29,999 and aboveT&C'
                    ],
                define:'Zuurvi 530A1 Digital Electronic Educational Musical Instrument Piano Learning Toy with Microphone and DC Power Option for 3-10 Year Old Kids Boys Girls Analog Portable Keyboard  (49 Keys)'
            },
            {
                id: 9,
                image: 'https://rukminim2.flixcart.com/image/832/832/xif0q/table-lamp/n/h/z/16-color-desk-lamp-modern-lighting-d-cor-for-home-office-original-imagnqaztbmxfyaz.jpeg?q=70',
                name: 'Table Lamp',
                brand: 'Diamond Crystal',
                price: 'price: 720',
                rating:'3.3 ',
                category:'Others',
                offers:['Special PriceGet extra 15% off (price inclusive of cashback/coupon)T&C',
                    'Bank OfferFlat ₹200 off on HDFC Bank Credit/Debit Card on 3 months EMI Txns, Min Txn Value ₹10,000T&C',
                    'Bank OfferFlat ₹500 off on HDFC Bank Credit/Debit Card on 6 months EMI Txns, Min Txn Value ₹10,000T&C',
                    'Bank OfferFlat ₹500 off on HDFC Bank Credit/Debit Card on 9 months EMI Txns, Min Txn Value ₹10,000T&C'
                    ],
                define:'Fing Rose Diamond Crystal Table Lamp USB Rechargeable Touch Lamp Table Lamp  (12 cm, Clear)',
            },
            {
                id: 10,
                image: 'https://rukminim2.flixcart.com/image/832/832/xif0q/fan/s/i/r/speedy-230-1-table-fan-300-longway-original-imagpgp5kzufdcxj.jpeg?q=70',
                name: 'Camera',
                brand: 'Canon',
                price: 'price :29,999',
                category:'appliances',
                rating:'3.2',
                define:'Longway Speedy 300 mm Energy Saving 3 Blade Table Fan  (Black, Pack of 1)',
                offers: ['Bank Offer5% Cashback on Flipkart Axis Bank CardT&C','Extra ₹500 Off on Bikes & Scooters on purchase of ₹30,000 or moreT&C','Partner OfferSign-up for Flipkart Pay Later & get free Times Prime Benefits worth ₹10,000*Know More','Partner OfferPurchase now & get 1 surprise cashback coupon in FutureKnow More'],
            },
            {
                id: 11,
                title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
                price: 'price: 109',
                description: "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
                name: "men's clothing",
                category:'men',
                image: "https://rukminim2.flixcart.com/image/832/832/xif0q/backpack/r/w/f/4-5-office-stylish-laptop-bag-with-raincover-for-professionals-original-imagr5zgvznwnngm.jpeg?q=70",
                rating: 3.9,
                offers:['Bank OfferFlat ₹200 off on HDFC Bank Credit/Debit Card on 3 months EMI Txns, Min Txn Value ₹10,000T&C',
                        'Bank OfferFlat ₹500 off on HDFC Bank Credit/Debit Card on 6 months EMI Txns, Min Txn Value ₹10,000T&C',
                        'Bank Offer10% off on ICICI Bank Credit Cards, up to ₹300. On orders of ₹1750 and aboveT&C',
                        'Extra ₹500 Off on Bikes & Scooters on purchase of ₹30,000 or moreT&C',
                        ]
            },
            {
                id: 12,
                title: "Mens Casual Premium Slim Fit T-Shirts ",
                price: 'price: 223',
                description: "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
                name: "men's clothing",
                category:'men',
                image: "https://rukminim2.flixcart.com/image/832/832/xif0q/shopsy-shirt/f/o/0/s-men-floral-printed-goa-pattern-lycra-slim-fit-spread-collar-original-imagrnx4tqjyzzje.jpeg?q=70",
                rating: 4.1,
                offers:['Special PriceGet at flat ₹189T&C',
                        'Bank OfferFlat ₹200 off on HDFC Bank Credit/Debit Card on 3 months EMI Txns, Min Txn Value ₹10,000T&C',
                        'Bank OfferFlat ₹500 off on HDFC Bank Credit/Debit Card on 6 months EMI Txns, Min Txn Value ₹10,000T&C',
                        'Bank Offer10% off on ICICI Bank Credit Cards, up to ₹300. On orders of ₹1750 and aboveT&C',
                        ]
            },
            {
                id: 13,
                title: "Mens Cotton Jacket",
                price: 'price: 1599',
                description: "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
                name: "men's clothing",
                category:'men',
                image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
                rating:4.7,
                offers:['Special PriceGet at flat ₹189T&C',
                        'Bank OfferFlat ₹200 off on HDFC Bank Credit/Debit Card on 3 months EMI Txns, Min Txn Value ₹10,000T&C',
                        'Bank OfferFlat ₹500 off on HDFC Bank Credit/Debit Card on 6 months EMI Txns, Min Txn Value ₹10,000T&C',
                        'Bank Offer10% off on ICICI Bank Credit Cards, up to ₹300. On orders of ₹1750 and aboveT&C',]
            },
            {
                id: 14,
                title: "Mens Casual Slim Fit",
                price: 'price: 599',
                description: "The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.",
                name: "men's clothing",
                category:'men',
                image: "https://rukminim2.flixcart.com/image/832/832/xif0q/t-shirt/i/b/g/s-half-triangel-black-one-nb-nicky-boy-original-imagmhzyv6b64vfb.jpeg?q=70",
                rating: 2.1,
                offers:['Special PriceGet at flat ₹189T&C',
                        'Bank OfferFlat ₹200 off on HDFC Bank Credit/Debit Card on 3 months EMI Txns, Min Txn Value ₹10,000T&C',
                        'Bank OfferFlat ₹500 off on HDFC Bank Credit/Debit Card on 6 months EMI Txns, Min Txn Value ₹10,000T&C',
                        'Bank Offer10% off on ICICI Bank Credit Cards, up to ₹300. On orders of ₹1750 and aboveT&C',]
            },
            {
                id: 15,
                title: "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
                price: 'price: 695',
                description: "From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.",
                name: "jewelery",
                category:'jewelery',
                image: "https://rukminim2.flixcart.com/image/832/832/xif0q/bangle-bracelet-armlet/t/z/p/-original-imagqhqzjcznfjhe.jpeg?q=70",
                rating: 4.6,
                offers:['Special PriceGet extra 3% off (price inclusive of cashback/coupon)T&C',
                        'Extra ₹500 Off on Bikes & Scooters on purchase of ₹30,000 or moreT&C',
                        'Partner OfferSign-up for Flipkart Pay Later & get free Times Prime Benefits worth ₹10,000*Know More',
                        'Bank OfferFlat ₹200 off on HDFC Bank Credit/Debit Card on 3 months EMI Txns, Min Txn Value ₹10,000T&C']
            },
            {
                id: 16,
                title: "Solid Gold Petite Micropave ",
                price: 'price: 1999',
                description: "Satisfaction Guaranteed. Return or exchange any order within 30 days.Designed and sold by Hafeez Center in the United States. Satisfaction Guaranteed. Return or exchange any order within 30 days.",
                name: "jewelery",
                category:'jewelery',
                image: "https://rukminim2.flixcart.com/image/832/832/k3orqfk0/bangle-bracelet-armlet/m/v/s/2-6-2-jj-bn-5021-jdx-original-imaew62nndsksagu.jpeg?q=70",
                rating: 3.9,
                offers:['Special PriceGet extra 3% off (price inclusive of cashback/coupon)T&C',
                        'Extra ₹500 Off on Bikes & Scooters on purchase of ₹30,000 or moreT&C',
                        'Partner OfferSign-up for Flipkart Pay Later & get free Times Prime Benefits worth ₹10,000*Know More',
                        'Bank OfferFlat ₹200 off on HDFC Bank Credit/Debit Card on 3 months EMI Txns, Min Txn Value ₹10,000T&C']
            },
            {
                id: 17,
                title: "White Gold Plated Princess",
                price: 'price: 1999',
                description: "Classic Created Wedding Engagement Solitaire Diamond Promise Ring for Her. Gifts to spoil your love more for Engagement, Wedding, Anniversary, Valentine's Day...",
                name: "jewelery",
                category:'jewelery',
                image: "https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg",
                rating:3,
                offers:['Special PriceGet extra 3% off (price inclusive of cashback/coupon)T&C',
                        'Extra ₹500 Off on Bikes & Scooters on purchase of ₹30,000 or moreT&C',
                        'Partner OfferSign-up for Flipkart Pay Later & get free Times Prime Benefits worth ₹10,000*Know More',
                        'Bank OfferFlat ₹200 off on HDFC Bank Credit/Debit Card on 3 months EMI Txns, Min Txn Value ₹10,000T&C']
            },
            {
                id: 18,
                title: "Pierced Owl Rose Gold Plated Stainless Steel Double",
                price: 'price: 1099',
                description: "Rose Gold Plated Double Flared Tunnel Plug Earrings. Made of 316L Stainless Steel",
                name: "jewelery",
                category:'jewelery',
                image: "https://rukminim2.flixcart.com/image/832/832/k4ss2a80/necklace-chain/r/z/t/psm604-necklace-set-meenaz-original-imafnmndg2ajzrmg.jpeg?q=70",
                rating:1.9,
                offers:['Special PriceGet extra 3% off (price inclusive of cashback/coupon)T&C',
                        'Extra ₹500 Off on Bikes & Scooters on purchase of ₹30,000 or moreT&C',
                        'Partner OfferSign-up for Flipkart Pay Later & get free Times Prime Benefits worth ₹10,000*Know More',
                        'Bank OfferFlat ₹200 off on HDFC Bank Credit/Debit Card on 3 months EMI Txns, Min Txn Value ₹10,000T&C'
                        ]
            },
            {
                id: 19,
                title: "WD 2TB Elements Portable External Hard Drive - USB 3.0 ",
                price: 'price: 164',
                description: "USB 3.0 and USB 2.0 Compatibility Fast data transfers Improve PC Performance High Capacity; Compatibility Formatted NTFS for Windows 10, Windows 8.1, Windows 7; Reformatting may be required for other operating systems; Compatibility may vary depending on user’s hardware configuration and operating system",
                name: "electronics",
                category:'electronics',
                image: "https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg",
                rating:  3.3,
                offers:['Extra ₹500 Off on Bikes & Scooters on purchase of ₹30,000 or moreT&C',
                        'Partner OfferSign-up for Flipkart Pay Later & get free Times Prime Benefits worth ₹10,000*Know More',
                        'Bank OfferFlat ₹200 off on HDFC Bank Credit/Debit Card on 3 months EMI Txns, Min Txn Value ₹10,000T&C',
                        'Bank OfferFlat ₹500 off on HDFC Bank Credit/Debit Card on 6 months EMI Txns, Min Txn Value ₹10,000T&C'
                    ]
            },
            {
                id: 20,
                title: "SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s",
                price: 'price: 999',
                description: "Easy upgrade for faster boot up, shutdown, application load and response (As compared to 5400 RPM SATA 2.5” hard drive; Based on published specifications and internal benchmarking tests using PCMark vantage scores) Boosts burst write performance, making it ideal for typical PC workloads The perfect balance of performance and reliability Read/write speeds of up to 535MB/s/450MB/s (Based on internal testing; Performance may vary depending upon drive capacity, host device, OS and application.)",
                name: "electronics",
                category:'electronics',
                image: "https://rukminim2.flixcart.com/image/832/832/kr2e3680/pendrive/type-a-to-type-c/u/u/6/dual-drive-goupto-150mb-s-sandisk-original-imag4xq6t2ayfnhy.jpeg?q=70",
                rating: 2.9,
                offers:['Extra ₹500 Off on Bikes & Scooters on purchase of ₹30,000 or moreT&C',
                        'Partner OfferSign-up for Flipkart Pay Later & get free Times Prime Benefits worth ₹10,000*Know More',
                        'Bank OfferFlat ₹200 off on HDFC Bank Credit/Debit Card on 3 months EMI Txns, Min Txn Value ₹10,000T&C',
                        'Bank OfferFlat ₹500 off on HDFC Bank Credit/Debit Card on 6 months EMI Txns, Min Txn Value ₹10,000T&C'
                    ]
            },
            {
                id: 21,
                title: "Silicon Power 256GB SSD 3D NAND A55 SLC Cache Performance Boost SATA III 2.5",
                price: 'price: 1999',
                category:'electronics',
                description: "3D NAND flash are applied to deliver high transfer speeds Remarkable transfer speeds that enable faster bootup and improved overall system performance. The advanced SLC Cache Technology allows performance boost and longer lifespan 7mm slim design suitable for Ultrabooks and Ultra-slim notebooks. Supports TRIM command, Garbage Collection technology, RAID, and ECC (Error Checking & Correction) to provide the optimized performance and enhanced reliability.",
                name: "electronics",
                image: "https://rukminim2.flixcart.com/image/832/832/xif0q/screen-guard/front-and-back-screen-guard/l/i/n/all-type-atm-card-pan-card-d-license-etc-scratch-guard-front-original-imagnffa9kyzvm7s.jpeg?q=70",
                rating:  4.8,
                offers:['Extra ₹500 Off on Bikes & Scooters on purchase of ₹30,000 or moreT&C',
                        'Partner OfferSign-up for Flipkart Pay Later & get free Times Prime Benefits worth ₹10,000*Know More',
                        'Bank OfferFlat ₹200 off on HDFC Bank Credit/Debit Card on 3 months EMI Txns, Min Txn Value ₹10,000T&C',
                        'Bank OfferFlat ₹500 off on HDFC Bank Credit/Debit Card on 6 months EMI Txns, Min Txn Value ₹10,000T&C'
                    ]
            },
            {
                id: 22,
                title: "WD 4TB Gaming Drive Works with Playstation 4 Portable External Hard Drive",
                price: 'price: 1114',
                category:'electronics',
                description: "Expand your PS4 gaming experience, Play anywhere Fast and easy, setup Sleek design with high capacity, 3-year manufacturer's limited warranty",
                name: "electronics",
                image: "https://fakestoreapi.com/img/61mtL65D4cL._AC_SX679_.jpg",
                rating: 4.8,
                offers:['Extra ₹500 Off on Bikes & Scooters on purchase of ₹30,000 or moreT&C',
                        'Partner OfferSign-up for Flipkart Pay Later & get free Times Prime Benefits worth ₹10,000*Know More',
                        'Bank OfferFlat ₹200 off on HDFC Bank Credit/Debit Card on 3 months EMI Txns, Min Txn Value ₹10,000T&C',
                        'Bank OfferFlat ₹500 off on HDFC Bank Credit/Debit Card on 6 months EMI Txns, Min Txn Value ₹10,000T&C'
                        ]
            },
            {
                id: 23,
                title: "Acer SB220Q bi 21.5 inches Full HD (1920 x 1080) IPS Ultra-Thin",
                price: 'price: 11599',
                description: "21. 5 inches Full HD (1920 x 1080) widescreen IPS display And Radeon free Sync technology. No compatibility for VESA Mount Refresh Rate: 75Hz - Using HDMI port Zero-frame design | ultra-thin | 4ms response time | IPS panel Aspect ratio - 16: 9. Color Supported - 16. 7 million colors. Brightness - 250 nit Tilt angle -5 degree to 15 degree. Horizontal viewing angle-178 degree. Vertical viewing angle-178 degree 75 hertz",
                name: "electronics",
                category:'electronics',
                image: "https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_.jpg",
                rating:  2.9,
                offers:['Bank OfferFlat ₹500 off on HDFC Bank Credit/Debit Card on 6 months EMI Txns, Min Txn Value ₹10,000T&C',
                    'Bank OfferFlat ₹500 off on HDFC Bank Credit/Debit Card on 9 months EMI Txns, Min Txn Value ₹10,000T&C',
                    'Extra ₹500 Off on Bikes & Scooters on purchase of ₹30,000 or moreT&C']
            },
            {
                id: 24,
                title: "Samsung 49-Inch CHG90 144Hz Curved Gaming Monitor (LC49HG90DMNXZA) – Super Ultrawide Screen QLED ",
                price: 'price: 999,99',
                description: "49 INCH SUPER ULTRAWIDE 32:9 CURVED GAMING MONITOR with dual 27 inch screen side by side QUANTUM DOT (QLED) TECHNOLOGY, HDR support and factory calibration provides stunningly realistic and accurate color and contrast 144HZ HIGH REFRESH RATE and 1ms ultra fast response time work to eliminate motion blur, ghosting, and reduce input lag",
                name: "electronics",
                category:'electronics',
                image: "https://rukminim2.flixcart.com/image/832/832/xif0q/monitor/l/q/9/g27e-20-full-hd-27-2023-66d8gar1in-lenovo-original-imagq53nzafzvfgn.jpeg?q=70",
                rating:2.2,
                offers:['₹10,000T&C',
                    'Bank OfferFlat ₹500 off on HDFC Bank Credit/Debit Card on 6 months EMI Txns, Min Txn Value ₹10,000T&C',
                    'Bank OfferFlat ₹500 off on HDFC Bank Credit/Debit Card on 9 months EMI Txns, Min Txn Value ₹10,000T&C',
                    'Extra ₹500 Off on Bikes & Scooters on purchase of ₹30,000 or moreT&C'
                    ],
            },
            {
                id: 25,
                title: "BIYLACLESEN Women's 3-in-1 Snowboard Jacket Winter Coats",
                price: 'price: 1699',
                category:'Womens',
                description: "Note:The Jackets is US standard size, Please choose size as your usual wear Material: 100% Polyester; Detachable Liner Fabric: Warm Fleece. Detachable Functional Liner: Skin Friendly, Lightweigt and Warm.Stand Collar Liner jacket, keep you warm in cold weather. Zippered Pockets: 2 Zippered Hand Pockets, 2 Zippered Pockets on Chest (enough to keep cards or keys)and 1 Hidden Pocket Inside.Zippered Hand Pockets and Hidden Pocket keep your things secure. Humanized Design: Adjustable and Detachable Hood and Adjustable cuff to prevent the wind and water,for a comfortable fit. 3 in 1 Detachable Design provide more convenience, you can separate the coat and inner as needed, or wear it together. It is suitable for different season and help you adapt to different climates",
                name: "women's clothing",
                image: "https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_.jpg",
                rating: 2.6,
                offers:['Special PriceGet extra 10% off (price inclusive of cashback/coupon)T&C',
                        'Combo OfferBuy 3-4 items save 5%; Buy 5 or more save 7%See all productsT&C',
                        'Bank Offer10% off on ICICI Bank Credit Cards, up to ₹300. On orders of ₹1750 and aboveT&C',
                        'Bank Offer10% instant discount on ICICI Bank Debit Cards, up to ₹250, on orders of ₹1750 and aboveT&C'],
            },
            {
                id: 26,
                title: "Lock and Love Women's Removable Hooded Faux Leather Moto Biker Jacket",
                price: 'price: 2995',
                category:'Womens',
                description: "100% POLYURETHANE(shell) 100% POLYESTER(lining) 75% POLYESTER 25% COTTON (SWEATER), Faux leather material for style and comfort / 2 pockets of front, 2-For-One Hooded denim style faux leather jacket, Button detail on waist / Detail stitching at sides, HAND WASH ONLY / DO NOT BLEACH / LINE DRY / DO NOT IRON",
                name: "women's clothing",
                image: "https://fakestoreapi.com/img/81XH0e8fefL._AC_UY879_.jpg",
                rating: 2.9,
                offers:['Special PriceGet extra 10% off (price inclusive of cashback/coupon)T&C',
                        'Combo OfferBuy 3-4 items save 5%; Buy 5 or more save 7%See all productsT&C',
                        'Bank Offer10% off on ICICI Bank Credit Cards, up to ₹300. On orders of ₹1750 and aboveT&C',
                        'Bank Offer10% instant discount on ICICI Bank Debit Cards, up to ₹250, on orders of ₹1750 and aboveT&C'],
            },
            {
                id: 27,
                title: "Rain Jacket Women Windbreaker Striped Climbing Raincoats",
                price: 'price: 1399',
                category:'Womens',
                description: "Lightweight perfet for trip or casual wear---Long sleeve with hooded, adjustable drawstring waist design. Button and zipper front closure raincoat, fully stripes Lined and The Raincoat has 2 side pockets are a good size to hold all kinds of things, it covers the hips, and the hood is generous but doesn't overdo it.Attached Cotton Lined Hood with Adjustable Drawstrings give it a real styled look.",
                name: "women's clothing",
                image: "https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2.jpg",
                rating: 3.8,
                offers:['Special PriceGet extra 10% off (price inclusive of cashback/coupon)T&C',
                        'Combo OfferBuy 3-4 items save 5%; Buy 5 or more save 7%See all productsT&C',
                        'Bank Offer10% off on ICICI Bank Credit Cards, up to ₹300. On orders of ₹1750 and aboveT&C',
                        'Bank Offer10% instant discount on ICICI Bank Debit Cards, up to ₹250, on orders of ₹1750 and aboveT&C'],
            },
            {
                id: 28,
                title: "MBJ Women's Solid Short Sleeve Boat Neck V ",
                price: 'price: 985',
                category:'Womens',
                description: "95% RAYON 5% SPANDEX, Made in USA or Imported, Do Not Bleach, Lightweight fabric with great stretch for comfort, Ribbed on sleeves and neckline / Double stitching on bottom hem",
                name: "women's clothing",
                image: "https://fakestoreapi.com/img/71z3kpMAYsL._AC_UY879_.jpg",
                rating: 4.7,
                offers:['Special PriceGet extra 10% off (price inclusive of cashback/coupon)T&C',
                        'Combo OfferBuy 3-4 items save 5%; Buy 5 or more save 7%See all productsT&C',
                        'Bank Offer10% off on ICICI Bank Credit Cards, up to ₹300. On orders of ₹1750 and aboveT&C',
                        'Bank Offer10% instant discount on ICICI Bank Debit Cards, up to ₹250, on orders of ₹1750 and aboveT&C'],
            },
            {
                id: 29,
                title: "Opna Women's Short Sleeve Moisture",
                price: 'price: 299',
                description: "100% Polyester, Machine wash, 100% cationic polyester interlock, Machine Wash & Pre Shrunk for a Great Fit, Lightweight, roomy and highly breathable with moisture wicking fabric which helps to keep moisture away, Soft Lightweight Fabric with comfortable V-neck collar and a slimmer fit, delivers a sleek, more feminine silhouette and Added Comfort",
                name: "women's clothing",
                image: "https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_.jpg",
                rating: 4.5,
                category:'Womens',
                offers:['Special PriceGet extra 10% off (price inclusive of cashback/coupon)T&C',
                        'Combo OfferBuy 3-4 items save 5%; Buy 5 or more save 7%See all productsT&C',
                        'Bank Offer10% off on ICICI Bank Credit Cards, up to ₹300. On orders of ₹1750 and aboveT&C',
                        'Bank Offer10% instant discount on ICICI Bank Debit Cards, up to ₹250, on orders of ₹1750 and aboveT&C'],
            },
            {
                id: 30,
                title: "DANVOUY Womens T Shirt Casual Cotton Short",
                price: 'price: 129',
                description: "95%Cotton,5%Spandex, Features: Casual, Short Sleeve, Letter Print,V-Neck,Fashion Tees, The fabric is soft and has some stretch., Occasion: Casual/Office/Beach/School/Home/Street. Season: Spring,Summer,Autumn,Winter.",
                name: "women's clothing",
                image: "https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg",
                rating: 3.6,
                category:'Womens',
                offers:['Special PriceGet extra 10% off (price inclusive of cashback/coupon)T&C',
                        'Combo OfferBuy 3-4 items save 5%; Buy 5 or more save 7%See all productsT&C',
                        'Bank Offer10% off on ICICI Bank Credit Cards, up to ₹300. On orders of ₹1750 and aboveT&C',
                        'Bank Offer10% instant discount on ICICI Bank Debit Cards, up to ₹250, on orders of ₹1750 and aboveT&C'
                        ],
            }
        ],

        // products:null,
        cartItems : [],
        totalAmount : 0
    },

      
    mutations:{
        SET_DATA(state, payload){
            state.products = payload
            console.log(state.products, "STATE")
        },
        addToCart(state, payload){
            state.cartItems.push(payload)
            console.log(state.cartItems)
        },
        remove(state ,payload){
            state.cartItems.splice(payload,1);
        }
    },
    actions:{
        addToCart(context, payload){
            context.commit('addToCart', payload)
        },
        remove(context, payload){
            let indexToDelete = context.state.cartItems.forEach((cartItem,index)=>{
                if(cartItem.id == payload){
                    return index
                }
            })
            context.commit("remove", indexToDelete) 
        },
        // async getdata(context) {
        //     try {
        //       const response = await axios.get('https://dummyjson.com/products');
        //       // Handle successful response here
        //       if(!(response.status >= 200 && response.status <300)){
        //           throw new Error ('request failed with statue '+ response.status)
        //       }
        //       const data =response.data.products
        //       console.log(data)
  
        //       context.commit('SET_DATA', data);
        //     } catch (error) {
        //       // Handle error here
        //       context.commit('SET-ERROR',error.message)
        //       console.error('An error occurred',error);
        //     }
        //   }
    },
    getters:{
        jewelerys (state) {
            return state.products.filter(product => product.category == 'jewelery')
        },
        Womens (state) {
            return state.products.filter(product => product.category == 'Womens')
        },
        electronics (state) {
            return state.products.filter(product => product.category == 'electronics')
        },
        men (state) {
            return state.products.filter(product => product.category == 'men')
        },
        appliances (state) {
            return state.products.filter(product => product.category == 'appliances')
        },
        Others (state) {
            return state.products.filter(product => product.category == 'Others')
        }
    },
    // plugins: [
    //     createPersistedState({
    //         key:'my-vuex-state',
    //     })],
}
)
// const getters = {
//     evevOrOdd: state => state.count % 2 === 0 ? 'even' : 'odd'
// }

export default store