let button1 = document.getElementById('button1');
let button2 = document.getElementById('button2');
let button3 = document.getElementById('button3');
let button4 = document.getElementById('button4');
let button5 = document.getElementById('button5');
let button6 = document.getElementById('button6');
let button7 = document.getElementById('button7');
let button8 = document.getElementById('button8');

button1.addEventListener('click', function () {
    let name = prompt('Введите имя');
    alert(name);
});

button2.addEventListener('click', function () {
    var month = prompt("Введите месяц").toLowerCase();
    if (month == "январь" || month == "март" || month == "май" || month == "июль" || month == "август" || month == "октябрь" || month == "декабрь") {
        alert("30");
    } else if (month == "февраль") {
        alert("28");
    } else {
        alert("31");
    }
});

button3.addEventListener('click', function () {
    var str = "Это строка, которая формируется средствами JavaScript";
    var res =
        str.slice(12, 18) + "\n" +
        str.slice(42, 46) + "\n" +
        str.indexOf("а") + "\n" +
        str.lastIndexOf("а") + "\n" +
        str.indexOf("ми") + "\n" +
        str.lastIndexOf("ми") + "\n" +
        str.indexOf("ст") + "\n" +
        str.lastIndexOf("ст");
    alert(res);
});

button4.addEventListener('click', function () {
    let msgCount = prompt("Введите количество сообщений");
    let msg = [];
    //let msg2 = [{ date: '2023-09-01', sender: 'b' }, { date: '2023-09-02', sender: 'b' }, { date: '2023-09-02', sender: 'a' }, { date: '2023-09-03', sender: 'a' }, { date: '2023-09-01', sender: 'a' }]

    for (let i = 0; i < msgCount; i++) {
        let j = i + 1;
        msg.push({
            date: prompt("Сообщение " + j + ". Введите дату:"),
            sender: prompt("Сообщение " + j + ". Введите отправителя:")
        });
    }

    let res = '';
    msg.sort((a, b) => { return new Date(a.date) - new Date(b.date); });
    msg.sort((a, b) => { return a.sender > b.sender ? 1 : -1 });
    msg.forEach(e => { res += e.sender + ' ' + e.date + '\n' });
    alert(res);
});

button5.addEventListener('click', function () {
    let array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 2, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 5, 6, 6, 6, 6, 6, 6, 7, 7, 7, 7, 7, 7, 7, 8, 8, 8, 8, 8, 8, 8, 8, 9, 9, 9, 9, 9, 9, 9, 9, 9];
    function indexOf(array, value) {
        return array.map((v, i) => ({ v, i })).filter(({ v }) => v === value).map(({ i }) => i);
    }
    alert(indexOf(array, 9));
});

button6.addEventListener('click', function () {
    let array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 2, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 5, 6, 6, 6, 6, 6, 6, 7, 7, 7, 7, 7, 7, 7, 8, 8, 8, 8, 8, 8, 8, 8, 9, 9, 9, 9, 9, 9, 9, 9, 9];
    let min = array.reduce((min, current,) => min > current ? current : min, array[0]);
    let max = array.reduce((max, current,) => max < current ? current : max, array[0]);
    alert(max - min);
});

button7.addEventListener('click', function () {
    function myMap(set, callback) {
        let newSet = new Set();
        for (let item of set) newSet.add(callback(item));
        return newSet;
    }

    function myFilter(set, callback) {
        let newSet = new Set();
        for (let item of set)
            if (item == callback(item))
                newSet.add(item);
        return newSet;
    }

    function myForEach(set, callback) {
        let newSet = new Set();
        for (let item of set) callback(item);
    }

    let mySet = myMap(new Set([1, 2, 3, 4, 5]), (a) => { return a + 10 });
    mySet = myFilter(mySet, (a) => { return a % 2 == 0 ? a : 0 });
    myForEach(mySet, (value) => { alert(value); });
});

button8.addEventListener('click', function () {
    function union(set1, set2) {
        let newSet = new Set();
        for (let item of set1) newSet.add(item);
        for (let item of set2) newSet.add(item);
        return newSet;
    }

    function intersection(set1, set2) {
        let newSet = new Set();
        for (let item1 of set1)
            for (let item2 of set2)
                if (item1 == item2) newSet.add(item1);
        return newSet;
    }

    function difference(set1, set2) {
        let newSet = new Set();
        for (let item1 of set1) {
            let belong = false;
            for (let item2 of set2)
                if (item1 == item2) {
                    belong = true;
                    break;
                }
            if (belong == false) newSet.add(item1);
        }
        for (let item2 of set2) {
            let belong = false;
            for (let item1 of set1)
                if (item2 == item1) {
                    belong = true;
                    break;
                }
            if (belong == false) newSet.add(item2);
        }
        return newSet;
    }

    let set1 = new Set([1, 2, 3, 4, 5]);
    let set2 = new Set([4, 5, 6, 7, 8]);
    let res = '';
    for (let item of union(set1, set2))
        res += item + ' ';
    alert(res);
    res = '';
    for (let item of intersection(set1, set2))
        res += item + ' ';
    alert(res);
    res = '';
    for (let item of difference(set1, set2))
        res += item + ' ';
    alert(res);
});