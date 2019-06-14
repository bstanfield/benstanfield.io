document.addEventListener('DOMContentLoaded', () => {
    const $ = require('jquery');
    let json = {};

    const multipleKeys = R.curry((obj, acc, key) => {
        json[key] = Object.values(obj)[acc];
        return acc + 1;
    });

    const camelize = (str) => {
        return str.replace(/\W+(.)/g, function (match, chr) {
            return chr.toUpperCase();
        });
    }

    // Time + 12 or not
    const convertTime = (input) => {
        let time = 0;
        if (typeof input == 'number') {
            return input;
        }

        const [hour, modifier] = input.split(' ');
        if (modifier === 'PM') {
            time = parseInt(hour, 10) + 12;
        } else {
            time = parseInt(hour);
        }
        return time;
    }

    const buildJson = (obj) => {
        // For objs with multiple pairs
        if (Object.keys(obj).length > 1) {
            R.reduce(multipleKeys(obj), 0, Object.keys(obj));
        } else {
            const keyName = Object.keys(obj);
            json[keyName] = Object.values(obj)[0];
        }
    }

    const createPairs = (id) => {
        let val = $(id).val();
        return val;
    }

    const isNotEmptyString = x => x != '';

    const modifyTime = (open) => {
        let time;
        const [hour, modifier] = open.split(' ');
        modifier.toUpperCase();
        // time = num
        // mod = am / pm

        return (
            modifier === 'PM' ?
                time = hour + 12 :
                time
        )
    }

    const getFormData = () => {
        const name = { shopName: $('#shopName').val() }
        const yelpUrl = { yelpUrl: $('#yelpUrl').val() }
        const heroImg = { heroImg: $('#heroImg').val() }
        const distance = { distance: $('#distance').val() }
        const foodCost = {
            food: [$('#foodItem').val(), parseInt($('#foodCost').val().replace('$', ''))]
        }
        const drinkCost = {
            food: [$('#drinkItem').val(), parseInt($('#drinkCost').val().replace('$', ''))]
        }

        isNaN(foodCost.food[1]) ? $('#foodCost').css('background-color', 'red') : $('#foodCost').css('background-color', 'green')

        const images = {
            images: $('#images')
                .val()
                .replace(/\s/g, '')
                .split(',')
        }

        const goodIds = ['#good_charging', '#good_wifi', '#good_drinks', '#good_service'];
        const badIds = ['#bad_charging', '#bad_wifi', '#bad_drinks', '#bad_service'];

        // GOOD AND BAD ARE WRONG
        const bad = {
            bad: R.filter(isNotEmptyString, R.map(createPairs, badIds))
        };

        const good = {
            good: R.filter(isNotEmptyString, R.map(createPairs, goodIds))
        }

        const notes = {
            notes: R.filter(isNotEmptyString, $('#notes').val().split("\n"))
        }

        const guestNotes = {
            name: 'Jenny Zhang',
            img: 'https://i.imgur.com/sHINpaJ.jpg',
            guestNotes: R.filter(isNotEmptyString, $('#guestNotes').val().split("\n"))
        }

        const recs = {
            recs: $('#recs')
                .val()
                .replace(/\s/g, '')
                .split(',')
        }

        const cleanOpen = (identifier) => {
            let v = $(identifier).val().toUpperCase();
            return (
                v.includes('PM') == true ?
                    `${v.split(" ")[0]} PM` :
                    `${v.split(" ")[0]} AM`
            )
        }

        const cleanClose = (identifier) => {
            let v = $(identifier).val().toUpperCase();
            if (parseInt(v) > 12) { return parseInt(v) }

            return (
                v.includes('AM') == true ?
                    `${v.split(" ")[0]} AM` :
                    `${v.split(" ")[0]} PM`
            )
        }

        const hourInputs = [
            [cleanOpen('#mon_open'), cleanClose('#mon_close')],
            [cleanOpen('#tue_open'), cleanClose('#tue_close')],
            [cleanOpen('#wed_open'), cleanClose('#wed_close')],
            [cleanOpen('#thu_open'), cleanClose('#thu_close')],
            [cleanOpen('#fri_open'), cleanClose('#fri_close')],
            [cleanOpen('#sat_open'), cleanClose('#sat_close')],
            [cleanOpen('#sun_open'), cleanClose('#sun_close')],
        ]

        const hours = {
            hours: {
                mon: R.map(convertTime, hourInputs[0]),
                tue: R.map(convertTime, hourInputs[1]),
                wed: R.map(convertTime, hourInputs[2]),
                thu: R.map(convertTime, hourInputs[3]),
                fri: R.map(convertTime, hourInputs[4]),
                sat: R.map(convertTime, hourInputs[5]),
                sun: R.map(convertTime, hourInputs[6])
            }
        }

        const allVars = [name, yelpUrl, heroImg, foodCost, drinkCost, images, good, bad, notes, guestNotes, recs, hours];

        R.map(buildJson, allVars);

        // Outputs JSON on page
        $('.json').text(JSON.stringify(json, undefined, 2));

        document.querySelectorAll('code').forEach((block) => {
            hljs.highlightBlock(block);
        });
    }
});