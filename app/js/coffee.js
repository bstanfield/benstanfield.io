document.addEventListener('DOMContentLoaded', () => {
    // alert('testing');
    const $ = require('jquery');

     // FOR COFFEE
     $(document).ready(function () {
         $('.dropdown').click(function () {
             const query = $('.dropdown > .dropdown-content');
             if (query.is(':visible') === true) {
                 $('.dropdown > .dropdown-content').hide();
                 $('.dropbtn').css('color', '#333');
             } else {
                 $('.dropdown > .dropdown-content').show();
                 $('.dropbtn').css('color', '#F26C29');
             }
         });

         $(document).mouseup(function (e) {
             let container = $('.dropdown');
             // if the target of the click isn't the container nor a descendant of the container
             if (!container.is(e.target) && container.has(e.target).length === 0) {
                 $('.dropdown > .dropdown-content').hide();
                 $('.dropbtn').css('color', '#333');
             }
         });

         $('.Cha').append('🔌');
         $('.Wif').append('📡');
         $('.Dri').append('☕️');
         $('.Ser').append('😁');
         $('.Foo').append('🍝');
         $('.Dis').append('🛣');
         $('.All').append('⏰');
         $('.Lar').append('👨‍👩‍👧‍👧');

         $(".foodEst").click(function () {
             if ($(this).find('.explainer').is(':visible'))
                 $(this).find('.explainer').first().css('display', 'none');
             else
                 $(this).find('.explainer').first().css('display', 'block');
         });
         //
         //
         //
         $(".shopStatus").click(function () {
             if ($(this).find('.explainer2').is(':visible'))
                 $(this).find('.explainer2').first().css('display', 'none');
             else
                 $(this).find('.explainer2').first().css('display', 'block');
         });

         $(".explainer2").click(() => {
             $('.explainer2').closest('.explainer2').css('display', 'none');
         })

         $(".explainer").click(() => {
             $('.explainer').closest('.explainer').css('display', 'none');
         })

         const d = new Date();
         let time = d.getHours();
         if (time >= 20) {
             $('.closes-early').css('opacity', '.5');
             $('.closes-early').append(' (closed)');
         }
     });

     $(document).ready(function () {
         const shopHours = [{
             'PrismCoffee': [{
                     day: 'Mon',
                     open: 7,
                     close: 21
                 },
                 {
                     day: 'Tue',
                     open: 7,
                     close: 21
                 },
                 {
                     day: 'Wed',
                     open: 7,
                     close: 21
                 },
                 {
                     day: 'Thu',
                     open: 7,
                     close: 21
                 },
                 {
                     day: 'Fri',
                     open: 7,
                     close: 21
                 },
                 {
                     day: 'Sat',
                     open: 7,
                     close: 21
                 },
                 {
                     day: 'Sun',
                     open: 7,
                     close: 21
                 },
             ],
             'DulceCoffee': [{
                     day: 'Mon',
                     open: 7,
                     close: 21
                 },
                 {
                     day: 'Tue',
                     open: 7,
                     close: 21
                 },
                 {
                     day: 'Wed',
                     open: 7,
                     close: 21
                 },
                 {
                     day: 'Thu',
                     open: 7,
                     close: 21
                 },
                 {
                     day: 'Fri',
                     open: 7,
                     close: 21
                 },
                 {
                     day: 'Sat',
                     open: 8,
                     close: 21
                 },
                 {
                     day: 'Sun',
                     open: 8,
                     close: 21
                 },
             ],
             'LoitCafe': [{
                     day: 'Mon',
                     open: 7,
                     close: 19
                 },
                 {
                     day: 'Tue',
                     open: 7,
                     close: 19
                 },
                 {
                     day: 'Wed',
                     open: 7,
                     close: 19
                 },
                 {
                     day: 'Thu',
                     open: 7,
                     close: 19
                 },
                 {
                     day: 'Fri',
                     open: 7,
                     close: 19
                 },
                 {
                     day: 'Sat',
                     open: 7,
                     close: 19
                 },
                 {
                     day: 'Sun',
                     open: 8,
                     close: 19
                 },
             ],
             'AlchemistCoffee': [{
                     day: 'Mon',
                     open: 7.5,
                     close: 22
                 },
                 {
                     day: 'Tue',
                     open: 7.5,
                     close: 22
                 },
                 {
                     day: 'Wed',
                     open: 7.5,
                     close: 22
                 },
                 {
                     day: 'Thu',
                     open: 7.5,
                     close: 22
                 },
                 {
                     day: 'Fri',
                     open: 7.5,
                     close: 22
                 },
                 {
                     day: 'Sat',
                     open: 7.5,
                     close: 22
                 },
                 {
                     day: 'Sun',
                     open: 8,
                     close: 22
                 },
             ],
             'IgnatiusCafe': [{
                     day: 'Mon',
                     open: 9,
                     close: 21
                 },
                 {
                     day: 'Tue',
                     open: 9,
                     close: 21
                 },
                 {
                     day: 'Wed',
                     open: 9,
                     close: 21
                 },
                 {
                     day: 'Thu',
                     open: 9,
                     close: 21
                 },
                 {
                     day: 'Fri',
                     open: 9,
                     close: 21
                 },
                 {
                     day: 'Sat',
                     open: 9,
                     close: 17
                 },
                 {
                     day: 'Sun',
                     open: 9,
                     close: 21
                 },
             ],
             'WithLoveCafe': [{
                     day: 'Mon',
                     open: 7,
                     close: 17
                 },
                 {
                     day: 'Tue',
                     open: 7,
                     close: 17
                 },
                 {
                     day: 'Wed',
                     open: 7,
                     close: 17
                 },
                 {
                     day: 'Thu',
                     open: 7,
                     close: 17
                 },
                 {
                     day: 'Fri',
                     open: 7,
                     close: 17
                 },
                 {
                     day: 'Sat',
                     open: 9,
                     close: 17
                 },
                 {
                     day: 'Sun',
                     open: 9,
                     close: 17
                 },
             ],
             'YellowHouseCafe': [{
                     day: 'Mon',
                     open: 11,
                     close: 24
                 },
                 {
                     day: 'Tue',
                     open: 11,
                     close: 24
                 },
                 {
                     day: 'Wed',
                     open: 11,
                     close: 24
                 },
                 {
                     day: 'Thu',
                     open: 11,
                     close: 24
                 },
                 {
                     day: 'Fri',
                     open: 11,
                     close: 26
                 },
                 {
                     day: 'Sat',
                     open: 11,
                     close: 26
                 },
                 {
                     day: 'Sun',
                     open: 11,
                     close: 24
                 },
             ],
             'BourgeoisPig': [{
                     day: 'Mon',
                     open: 8,
                     close: 26
                 },
                 {
                     day: 'Tue',
                     open: 8,
                     close: 26
                 },
                 {
                     day: 'Wed',
                     open: 8,
                     close: 26
                 },
                 {
                     day: 'Thu',
                     open: 8,
                     close: 26
                 },
                 {
                     day: 'Fri',
                     open: 8,
                     close: 26
                 },
                 {
                     day: 'Sat',
                     open: 8,
                     close: 26
                 },
                 {
                     day: 'Sun',
                     open: 8,
                     close: 26
                 },
             ],
             'NothingButCoffee': [{
                     day: 'Mon',
                     open: 9,
                     close: 26
                 },
                 {
                     day: 'Tue',
                     open: 9,
                     close: 26
                 },
                 {
                     day: 'Wed',
                     open: 9,
                     close: 26
                 },
                 {
                     day: 'Thu',
                     open: 9,
                     close: 26
                 },
                 {
                     day: 'Fri',
                     open: 9,
                     close: 26
                 },
                 {
                     day: 'Sat',
                     open: 9,
                     close: 26
                 },
                 {
                     day: 'Sun',
                     open: 9,
                     close: 26
                 },
             ],
             'BricksAndScones': [{
                     day: 'Mon',
                     open: 8,
                     close: 20
                 },
                 {
                     day: 'Tue',
                     open: 8,
                     close: 20
                 },
                 {
                     day: 'Wed',
                     open: 8,
                     close: 20
                 },
                 {
                     day: 'Thu',
                     open: 8,
                     close: 20
                 },
                 {
                     day: 'Fri',
                     open: 8,
                     close: 20
                 },
                 {
                     day: 'Sat',
                     open: 8,
                     close: 20
                 },
                 {
                     day: 'Sun',
                     open: 8,
                     close: 20
                 },
             ],
         }];

         const d = new Date();
         let today = d.getDay() - 1;
         let time = d.getHours();

         const storeCloseTimes = (arr) => {
             if (today == -1) {
                 today = 6;
             }
             delete arr[today].day;
             return arr[today];
         }

         const getHours = (shop) => {
             const hoursArr = Object.values(shop).map(storeCloseTimes);
             return hoursArr;
         }

         const getShopNames = (shop) => {
             return Object.keys(shop);
         }

         const names = shopHours.map(getShopNames);
         // openAndClose looks like: [{open, close}, {}, {}]
         const openAndClose = shopHours.map(getHours);

         const setShopHours = (hours, name) => {
             let open = hours[0][name][today].open;
             let close = hours[0][name][today].close;
             let sto = ((open + 11) % 12 + 1);
             let stc = ((close + 11) % 12 + 1);

             if (sto % 1 != 0) {
                 sto = sto.toString();
                 sto = sto.slice(0, 1);
                 sto = sto + ":30";
             }
             if (stc % 1 != 0) {
                 stc = stc.toString();
                 stc = stc.slice(0, 1);
                 stc = stc + ":30";
             }

             const tomorrowOpen = hours[0][name][(d.getDay())].open;
             if (stc >= 1 && stc <= 3) {
                 stc = stc + ' AM';
             } else {
                 stc = stc + ' PM';
             }

             if ((time + 1) === close) {
                 $('#' + name + 'Hours').append(' This shop is <strong>closing soon. </strong>');
                 $('#' + name + 'Hours').append(`(${sto} AM to ${stc})<sup> ?</sup>`);
             } else if (time >= open && time < close) {
                 $('#' + name + 'Hours').append(' This shop is <strong>open!</strong> ');
                 $('#' + name + 'Hours').append(`(${sto} AM to ${stc})<sup> ?</sup>`);
             } else {
                 $('#' + name + 'Hours').append(' This shop is <strong>closed.</strong>');
                 $('#' + name + 'Hours').append(` (Opens at ${tomorrowOpen} AM)<sup> ?</sup>`);
             }
         }

         names[0].map(x => setShopHours(shopHours, x));

         const todayAsString = d.toString().split(' ')[0];
         const todayAsClass = '.' + todayAsString;
         $(todayAsClass).css('color', 'green');

     });
});
