const places = [
  {
    category: "Бар",
    name: "Атомная прачечная",
    address: "Бажова, 14",
    workTime: [
      ["Пн", "Закрыто"],
      ["Вт-Чт", "16:00-23:00"],
      ["Пт", "16:00-01:00"],
      ["Сб", "13:00-01:00"],
      ["Вс", "Закрыто"],
    ],
    website: null,
    phone: ["8 (343) 282-97-54"],
    messengers: null,
    socialNetworks: ["https://vk.com/jaws_bar"],
    tags: {
      isDeliverAvailable: null,
      onPlace: null,
      hasPreorder: null,
    },
    hasChildRoom: null,
    location: null,
    menu: null,
    photo: "./images/Атомная прачечная/photo/preview/preview.png",
    id: 1,
    logo: "./images/Атомная прачечная/photo/logo/logo.png",
    weekTime: {
      Mon: ["Закрыто"],
      Tue: {
        startWork: "16:00",
        endWork: "23:00",
      },
      Wed: {
        startWork: "16:00",
        endWork: "23:00",
      },
      Thu: {
        startWork: "16:00",
        endWork: "23:00",
      },
      Fri: {
        startWork: "16:00",
        endWork: "01:00",
      },
      Sat: {
        startWork: "13:00",
        endWork: "01:00",
      },
      Sun: ["Закрыто"],
    },
  },
  {
    category: "Фастфуд",
    name: "Восточная кухня",
    address: "Попова, 3/4",
    workTime: [["Пн-Вс", "9:00-20:00"]],
    website: null,
    phone: ["8 (965) 001‒21‒26"],
    messengers: "Watsapp",
    socialNetworks: null,
    tags: {
      isDeliverAvailable: null,
      onPlace: null,
      hasPreorder: null,
    },
    hasChildRoom: null,
    location: null,
    menu: null,
    photo: "./images/Восточная кухня/photo/preview/preview.png",
    id: 2,
    logo: "./images/Восточная кухня/photo/logo/logo.png",
    weekTime: {
      Mon: {
        startWork: "9:00",
        endWork: "20:00",
      },
      Tue: {
        startWork: "9:00",
        endWork: "20:00",
      },
      Wed: {
        startWork: "9:00",
        endWork: "20:00",
      },
      Thu: {
        startWork: "9:00",
        endWork: "20:00",
      },
      Fri: {
        startWork: "9:00",
        endWork: "20:00",
      },
      Sat: {
        startWork: "9:00",
        endWork: "20:00",
      },
      Sun: {
        startWork: "9:00",
        endWork: "20:00",
      },
    },
  },
  {
    category: "Столовая",
    name: "Восход",
    address: "Попова, 3",
    workTime: [
      ["Пн-Пт", "10:00-18:00"],
      ["Сб-Вс", "Закрыто"],
    ],
    website: null,
    phone: ["8 (982) 759-72-10"],
    messengers: null,
    socialNetworks: null,
    tags: {
      isDeliverAvailable: null,
      onPlace: null,
      hasPreorder: null,
    },
    hasChildRoom: null,
    location: null,
    menu: null,
    photo: "./images/Восход/photo/preview/preview.png",
    id: 3,
    logo: "./images/Восход/photo/logo/logo.png",
    weekTime: {
      Mon: {
        startWork: "10:00",
        endWork: "18:00",
      },
      Tue: {
        startWork: "10:00",
        endWork: "18:00",
      },
      Wed: {
        startWork: "10:00",
        endWork: "18:00",
      },
      Thu: {
        startWork: "10:00",
        endWork: "18:00",
      },
      Fri: {
        startWork: "10:00",
        endWork: "18:00",
      },
      Sat: ["Закрыто"],
      Sun: ["Закрыто"],
    },
  },
  {
    category: "Кофейня",
    name: "Душевный разговор",
    address: "Курчатова, 7",
    workTime: [
      ["Пн-Пт", "07:00-20:00"],
      ["Сб-Вс", "09:00-20:00"],
    ],
    website: null,
    phone: ["8 (982) 759-72-10"],
    messengers: null,
    socialNetworks: null,
    tags: {
      isDeliverAvailable: null,
      onPlace: null,
      hasPreorder: null,
    },
    hasChildRoom: null,
    location: null,
    menu: null,
    photo: "./images/Душевный разговор/photo/preview/preview.png",
    id: 4,
    logo: "./images/Душевный разговор/photo/logo/logo.png",
    weekTime: {
      Mon: {
        startWork: "07:00",
        endWork: "20:00",
      },
      Tue: {
        startWork: "07:00",
        endWork: "20:00",
      },
      Wed: {
        startWork: "07:00",
        endWork: "20:00",
      },
      Thu: {
        startWork: "07:00",
        endWork: "20:00",
      },
      Fri: {
        startWork: "07:00",
        endWork: "20:00",
      },
      Sat: {
        startWork: "09:00",
        endWork: "20:00",
      },
      Sun: {
        startWork: "09:00",
        endWork: "20:00",
      },
    },
  },
  {
    category: "Кофейня",
    name: "Жажда",
    address: "Ленинградская, 9",
    workTime: [["Пн-Вс", "11:00-21:00"]],
    website: null,
    phone: ["8 (922) 196-30-30"],
    messengers: null,
    socialNetworks: null,
    tags: {
      isDeliverAvailable: null,
      onPlace: null,
      hasPreorder: null,
    },
    hasChildRoom: null,
    location: "Справа от главного входа в ТЦ Галактика",
    menu: null,
    photo: "./images/Жажда/photo/preview/preview.png",
    id: 5,
    logo: "./images/Жажда/photo/logo/logo.png",
    weekTime: {
      Mon: {
        startWork: "11:00",
        endWork: "21:00",
      },
      Tue: {
        startWork: "11:00",
        endWork: "21:00",
      },
      Wed: {
        startWork: "11:00",
        endWork: "21:00",
      },
      Thu: {
        startWork: "11:00",
        endWork: "21:00",
      },
      Fri: {
        startWork: "11:00",
        endWork: "21:00",
      },
      Sat: {
        startWork: "11:00",
        endWork: "21:00",
      },
      Sun: {
        startWork: "11:00",
        endWork: "21:00",
      },
    },
  },
  {
    category: "Готовая еда",
    name: "Жизньмарт",
    address: "Ленина, 33",
    workTime: [
      ["Пн-Пт", "07:00-23:00"],
      ["Сб-Вс", "08:00-23:00"],
    ],
    website: "https://lifemart.ru/ru/zarechniy",
    phone: ["8 (993) 516-06-54"],
    messengers: null,
    socialNetworks: [
      "https://vk.com/lifemart_ru",
      "https://t.me/lifemart_zar_lenina33",
    ],
    tags: {
      isDeliverAvailable: null,
      onPlace: null,
      hasPreorder: null,
    },
    hasChildRoom: null,
    location: null,
    menu: "https://disk.yandex.ru/i/LdfAnlizRbuOkg",
    photo: "./images/Жизньмарт/photo/preview/preview.png",
    id: 6,
    logo: "./images/Жизньмарт/photo/logo/logo.png",
    weekTime: {
      Mon: {
        startWork: "07:00",
        endWork: "23:00",
      },
      Tue: {
        startWork: "07:00",
        endWork: "23:00",
      },
      Wed: {
        startWork: "07:00",
        endWork: "23:00",
      },
      Thu: {
        startWork: "07:00",
        endWork: "23:00",
      },
      Fri: {
        startWork: "07:00",
        endWork: "23:00",
      },
      Sat: {
        startWork: "08:00",
        endWork: "23:00",
      },
      Sun: {
        startWork: "08:00",
        endWork: "23:00",
      },
    },
  },
  {
    category: "Фастфуд",
    name: "ЖИШИ Суши",
    address: "Победы, 22",
    workTime: [["Пн-ВС", "11:00-23:00"]],
    website: "http://surl.li/gszbjg",
    phone: ["8 (967) 630-03-17"],
    messengers: null,
    socialNetworks: ["https://vk.com/jishisushi", "https://t.me/jishisushi"],
    tags: {
      isDeliverAvailable: null,
      onPlace: null,
      hasPreorder: null,
    },
    hasChildRoom: null,
    location: null,
    menu: "https://disk.yandex.ru/i/T-0JxvI_R4tH8g",
    photo: "./images/ЖИШИ Суши/photo/preview/preview.png",
    id: 7,
    logo: "./images/ЖИШИ Суши/photo/logo/logo.png",
    weekTime: {
      Mon: {
        startWork: "11:00",
        endWork: "23:00",
      },
      Tue: {
        startWork: "11:00",
        endWork: "23:00",
      },
      Wed: {
        startWork: "11:00",
        endWork: "23:00",
      },
      Thu: {
        startWork: "11:00",
        endWork: "23:00",
      },
      Fri: {
        startWork: "11:00",
        endWork: "23:00",
      },
      Sat: {
        startWork: "11:00",
        endWork: "23:00",
      },
      Sun: {
        startWork: "11:00",
        endWork: "23:00",
      },
    },
  },
  {
    category: "Ресторан",
    name: "Зодиак",
    address: "Ленинградская, 9б",
    workTime: [
      ["Пн-Чт", "11:00-22:00"],
      ["Пт", "11:00-04:00"],
      ["Сб", "12:00-04:00"],
      ["Вс", "Закрыто"],
    ],
    website: null,
    phone: ["8 (904) 161-77-22"],
    messengers: null,
    socialNetworks: ["https://vk.com/zodiak_rest_zar", "t.me/zodiac_rest_zar"],
    tags: {
      isDeliverAvailable: null,
      onPlace: null,
      hasPreorder: null,
    },
    hasChildRoom: null,
    location: null,
    menu: "https://disk.yandex.ru/i/sI9e1zAxO3kaYA",
    photo: "./images/Зодиак/photo/preview/preview.png",
    id: 8,
    logo: "./images/Зодиак/photo/logo/logo.png",
    weekTime: {
      Mon: {
        startWork: "11:00",
        endWork: "22:00",
      },
      Tue: {
        startWork: "11:00",
        endWork: "22:00",
      },
      Wed: {
        startWork: "11:00",
        endWork: "22:00",
      },
      Thu: {
        startWork: "11:00",
        endWork: "22:00",
      },
      Fri: {
        startWork: "11:00",
        endWork: "04:00",
      },
      Sat: {
        startWork: "11:00",
        endWork: "22:00",
      },
      Sun: {
        startWork: "12:00",
        endWork: "04:00",
      },
    },
  },
  {
    category: "Пекарня",
    name: "Мякушка",
    address: "Кузнецова, 9/3",
    workTime: [["Пн-Вс", "08:00-21:00"]],
    website: "https://xn--80aanubamhon0bydxeb.xn--p1ai/",
    phone: ["8 (996) 595-29-35"],
    messengers: null,
    socialNetworks: null,
    tags: {
      isDeliverAvailable: null,
      onPlace: null,
      hasPreorder: null,
    },
    hasChildRoom: null,
    location: null,
    menu: null,
    photo: "./images/Мякушка/photo/preview/preview.png",
    id: 9,
    logo: "./images/Мякушка/photo/logo/logo.png",
    weekTime: {
      Mon: {
        startWork: "08:00",
        endWork: "21:00",
      },
      Tue: {
        startWork: "08:00",
        endWork: "21:00",
      },
      Wed: {
        startWork: "08:00",
        endWork: "21:00",
      },
      Thu: {
        startWork: "08:00",
        endWork: "21:00",
      },
      Fri: {
        startWork: "08:00",
        endWork: "21:00",
      },
      Sat: {
        startWork: "08:00",
        endWork: "21:00",
      },
      Sun: {
        startWork: "08:00",
        endWork: "21:00",
      },
    },
  },
  {
    category: "Фастфуд",
    name: "Нагано",
    address: "Таховская, 12/1",
    workTime: [["Пн-Вс", "10:00-23:00"]],
    website: "https://nagano66.ru/",
    phone: ["8 (932) 610-60-00"],
    messengers: null,
    socialNetworks: ["https://vk.com/nagano_zarechny"],
    tags: {
      isDeliverAvailable: null,
      onPlace: null,
      hasPreorder: null,
    },
    hasChildRoom: null,
    location: null,
    menu: "https://nagano66.ru/",
    photo: "./images/Нагано/photo/preview/preview.png",
    id: 10,
    logo: "./images/Нагано/photo/logo/logo.png",
    weekTime: {
      Mon: {
        startWork: "10:00",
        endWork: "23:00",
      },
      Tue: {
        startWork: "10:00",
        endWork: "23:00",
      },
      Wed: {
        startWork: "10:00",
        endWork: "23:00",
      },
      Thu: {
        startWork: "10:00",
        endWork: "23:00",
      },
      Fri: {
        startWork: "10:00",
        endWork: "23:00",
      },
      Sat: {
        startWork: "10:00",
        endWork: "23:00",
      },
      Sun: {
        startWork: "10:00",
        endWork: "23:00",
      },
    },
  },
  {
    category: "Кафе",
    name: "Ностальжи",
    address: "Клары Цеткин, 13",
    workTime: [
      ["Пн-Сб", "11:00-23:00"],
      ["Вс", "Закрыто"],
    ],
    website: null,
    phone: ["8 (950) 191-41-61"],
    messengers: null,
    socialNetworks: null,
    tags: {
      isDeliverAvailable: null,
      onPlace: null,
      hasPreorder: null,
    },
    hasChildRoom: null,
    location: null,
    menu: null,
    photo: "./images/Ностальжи/photo/preview/preview.png",
    id: 11,
    logo: "./images/Ностальжи/photo/logo/logo.png",
    weekTime: {
      Mon: {
        startWork: "11:00",
        endWork: "23:00",
      },
      Tue: {
        startWork: "11:00",
        endWork: "23:00",
      },
      Wed: {
        startWork: "11:00",
        endWork: "23:00",
      },
      Thu: {
        startWork: "11:00",
        endWork: "23:00",
      },
      Fri: {
        startWork: "11:00",
        endWork: "23:00",
      },
      Sat: {
        startWork: "11:00",
        endWork: "23:00",
      },
      Sun: ["Закрыто"],
    },
  },
  {
    category: "Фастфуд",
    name: "От Шефа",
    address: "Курчатова, 2",
    workTime: [["Пн-Вс", "10:00-23:00"]],
    website: null,
    phone: ["8 (912) 275-82-92"],
    messengers: null,
    socialNetworks: ["https://vk.com/sushiotshefa66"],
    tags: {
      isDeliverAvailable: "Да",
      onPlace: null,
      hasPreorder: null,
    },
    hasChildRoom: null,
    location: null,
    menu: "https://disk.yandex.ru/i/sD3nL04DqkO87g",
    photo: "./images/От Шефа/photo/preview/preview.png",
    id: 12,
    logo: "./images/От Шефа/photo/logo/logo.png",
    weekTime: {
      Mon: {
        startWork: "10:00",
        endWork: "23:00",
      },
      Tue: {
        startWork: "10:00",
        endWork: "23:00",
      },
      Wed: {
        startWork: "10:00",
        endWork: "23:00",
      },
      Thu: {
        startWork: "10:00",
        endWork: "23:00",
      },
      Fri: {
        startWork: "10:00",
        endWork: "23:00",
      },
      Sat: {
        startWork: "10:00",
        endWork: "23:00",
      },
      Sun: {
        startWork: "10:00",
        endWork: "23:00",
      },
    },
  },
  {
    category: "Фастфуд",
    name: "Папа гриль",
    address: "Таховская, 2",
    workTime: [
      ["Пн-Чт", "10:00-22:00"],
      ["Пт-Сб", "10:00-23:00"],
      ["Вс", "10:00-22:00"],
    ],
    website: null,
    phone: ["8 (912) 275-82-92"],
    messengers: null,
    socialNetworks: null,
    tags: {
      isDeliverAvailable: null,
      onPlace: null,
      hasPreorder: null,
    },
    hasChildRoom: null,
    location: null,
    menu: null,
    photo: "./images/Папа гриль/photo/preview/preview.png",
    id: 13,
    logo: "./images/Папа гриль/photo/logo/logo.png",
    weekTime: {
      Mon: {
        startWork: "10:00",
        endWork: "22:00",
      },
      Tue: {
        startWork: "10:00",
        endWork: "22:00",
      },
      Wed: {
        startWork: "10:00",
        endWork: "22:00",
      },
      Thu: {
        startWork: "10:00",
        endWork: "22:00",
      },
      Fri: {
        startWork: "10:00",
        endWork: "23:00",
      },
      Sat: {
        startWork: "10:00",
        endWork: "23:00",
      },
      Sun: {
        startWork: "10:00",
        endWork: "22:00",
      },
    },
  },
  {
    category: "Кафе",
    name: "Печка",
    address: "Кузнецова, 2а",
    workTime: [["Пн-Вс", "11:00-20:00"]],
    website: null,
    phone: ["8 (343) 777-32-39"],
    messengers: null,
    socialNetworks: ["https://vk.com/pechca_cafe"],
    tags: {
      isDeliverAvailable: null,
      onPlace: null,
      hasPreorder: null,
    },
    hasChildRoom: null,
    location: null,
    menu: null,
    photo: "./images/Печка/photo/preview/preview.png",
    id: 14,
    logo: "./images/Печка/photo/logo/logo.png",
    weekTime: {
      Mon: {
        startWork: "11:00",
        endWork: "20:00",
      },
      Tue: {
        startWork: "11:00",
        endWork: "20:00",
      },
      Wed: {
        startWork: "11:00",
        endWork: "20:00",
      },
      Thu: {
        startWork: "11:00",
        endWork: "20:00",
      },
      Fri: {
        startWork: "11:00",
        endWork: "20:00",
      },
      Sat: {
        startWork: "11:00",
        endWork: "20:00",
      },
      Sun: {
        startWork: "11:00",
        endWork: "20:00",
      },
    },
  },
  {
    category: "Кафе",
    name: "Сытоед",
    address: "Ленина, 26/5б",
    workTime: [
      ["Пн-Чт", "11:00-22:00"],
      ["Пт", "11:00-04:00"],
      ["Сб", "12:00-04:00"],
      ["Вс", "Закрыто"],
    ],
    website: null,
    phone: ["8 (919) 365-90-62"],
    messengers: null,
    socialNetworks: [
      "https://vk.com/sitoed_cafebar",
      "https://t.me/SITOED_cafebar",
    ],
    tags: {
      isDeliverAvailable: null,
      onPlace: null,
      hasPreorder: null,
    },
    hasChildRoom: null,
    location: null,
    menu: "Меню обноляется каждый день в сообществе ВК - https://vk.com/sitoed_cafebar",
    photo: "./images/Сытоед/photo/preview/preview.png",
    id: 15,
    logo: "./images/Сытоед/photo/logo/logo.png",
    weekTime: {
      Mon: {
        startWork: "11:00",
        endWork: "22:00",
      },
      Tue: {
        startWork: "11:00",
        endWork: "22:00",
      },
      Wed: {
        startWork: "11:00",
        endWork: "22:00",
      },
      Thu: {
        startWork: "11:00",
        endWork: "22:00",
      },
      Fri: {
        startWork: "11:00",
        endWork: "04:00",
      },
      Sat: {
        startWork: "12:00",
        endWork: "04:00",
      },
      Sun: ["Закрыто"],
    },
  },
  {
    category: "Фастфуд",
    name: "Таврия",
    address: "Таховская, 12",
    workTime: [["Пн-Вс", "11:00-21:00"]],
    website: "http://tavria-rus.ru/",
    phone: ["8 (351) 245-40-25 (доб. 493)"],
    messengers: null,
    socialNetworks: null,
    tags: {
      isDeliverAvailable: "Нет",
      onPlace: null,
      hasPreorder: null,
    },
    hasChildRoom: null,
    location: null,
    menu: null,
    photo: "./images/Таврия/photo/preview/preview.png",
    id: 16,
    logo: "./images/Таврия/photo/logo/logo.png",
    weekTime: {
      Mon: {
        startWork: "11:00",
        endWork: "21:00",
      },
      Tue: {
        startWork: "11:00",
        endWork: "21:00",
      },
      Wed: {
        startWork: "11:00",
        endWork: "21:00",
      },
      Thu: {
        startWork: "11:00",
        endWork: "21:00",
      },
      Fri: {
        startWork: "11:00",
        endWork: "21:00",
      },
      Sat: {
        startWork: "11:00",
        endWork: "21:00",
      },
      Sun: {
        startWork: "11:00",
        endWork: "21:00",
      },
    },
  },
  {
    category: "Кафе",
    name: "Театральное",
    address: "Ленина, 11",
    workTime: [["Пн-Вс", "12:00-20:00"]],
    website: null,
    phone: ["8 (900) 202-45-25"],
    messengers: null,
    socialNetworks: ["https://vk.com/teatralnoezar"],
    tags: {
      isDeliverAvailable: null,
      onPlace: null,
      hasPreorder: null,
    },
    hasChildRoom: null,
    location: null,
    menu: null,
    photo: "./images/Театральное/photo/preview/preview.png",
    id: 17,
    logo: "./images/Театральное/photo/logo/logo.png",
    weekTime: {
      Mon: {
        startWork: "12:00",
        endWork: "20:00",
      },
      Tue: {
        startWork: "12:00",
        endWork: "20:00",
      },
      Wed: {
        startWork: "12:00",
        endWork: "20:00",
      },
      Thu: {
        startWork: "12:00",
        endWork: "20:00",
      },
      Fri: {
        startWork: "12:00",
        endWork: "20:00",
      },
      Sat: {
        startWork: "12:00",
        endWork: "20:00",
      },
      Sun: {
        startWork: "12:00",
        endWork: "20:00",
      },
    },
  },
  {
    category: "Кафе",
    name: "Франческо Тортини",
    address: "Ленинградская, 23а",
    workTime: [
      ["Пн-Чт", "11:00-23:00"],
      ["Пт", "11:00-00:00"],
      ["Сб", "12:00-01:00"],
      ["Вс", "12:00-23:00"],
    ],
    website: "https://ftcafe.ru/",
    phone: ["8 (967) 85-385-90"],
    messengers: null,
    socialNetworks: ["https://vk.com/ft_cafe", "https://t.me/ftcafeZar"],
    tags: {
      isDeliverAvailable: null,
      onPlace: null,
      hasPreorder: null,
    },
    hasChildRoom: null,
    location: null,
    menu: "https://disk.yandex.ru/i/DRhZc5EW42yJMA",
    photo: "./images/Франческо Тортини/photo/preview/preview.png",
    id: 18,
    logo: "./images/Франческо Тортини/photo/logo/logo.png",
    weekTime: {
      Mon: {
        startWork: "11:00",
        endWork: "23:00",
      },
      Tue: {
        startWork: "11:00",
        endWork: "23:00",
      },
      Wed: {
        startWork: "11:00",
        endWork: "23:00",
      },
      Thu: {
        startWork: "11:00",
        endWork: "23:00",
      },
      Fri: {
        startWork: "11:00",
        endWork: "24:00",
      },
      Sat: {
        startWork: "12:00",
        endWork: "01:00",
      },
      Sun: {
        startWork: "12:00",
        endWork: "23:00",
      },
    },
  },
  {
    category: "Фастфуд",
    name: "Хмель и бургер",
    address: "Ленина, 15",
    workTime: [["Пн-Вс", "11:00-23:00"]],
    website: null,
    phone: ["8 (967) 85-385-90"],
    messengers: null,
    socialNetworks: null,
    tags: {
      isDeliverAvailable: null,
      onPlace: null,
      hasPreorder: null,
    },
    hasChildRoom: null,
    location: null,
    menu: null,
    photo: "./images/Хмель и бургер/photo/preview/preview.png",
    id: 19,
    logo: "./images/Хмель и бургер/photo/logo/logo.png",
    weekTime: {
      Mon: {
        startWork: "11:00",
        endWork: "23:00",
      },
      Tue: {
        startWork: "11:00",
        endWork: "23:00",
      },
      Wed: {
        startWork: "11:00",
        endWork: "23:00",
      },
      Thu: {
        startWork: "11:00",
        endWork: "23:00",
      },
      Fri: {
        startWork: "11:00",
        endWork: "23:00",
      },
      Sat: {
        startWork: "11:00",
        endWork: "23:00",
      },
      Sun: {
        startWork: "11:00",
        endWork: "23:00",
      },
    },
  },
  {
    category: "Кафе",
    name: "Хруст",
    address: "Кузнецова, 9",
    workTime: [
      ["Пн-Чт", "12:00-22:00"],
      ["Пт-Сб", "12:00-00:00"],
      ["Вс", "12:00-22:00"],
    ],
    website: null,
    phone: ["8 (950) 559-57-25"],
    messengers: null,
    socialNetworks: ["https://vk.com/zarhrust"],
    tags: {
      isDeliverAvailable: null,
      onPlace: null,
      hasPreorder: null,
    },
    hasChildRoom: null,
    location: null,
    menu: "https://disk.yandex.ru/i/EQPchPpzBkzYbw",
    photo: "./images/Хруст/photo/preview/preview.png",
    id: 20,
    logo: "./images/Хруст/photo/logo/logo.png",
    weekTime: {
      Mon: {
        startWork: "12:00",
        endWork: "22:00",
      },
      Tue: {
        startWork: "12:00",
        endWork: "22:00",
      },
      Wed: {
        startWork: "12:00",
        endWork: "22:00",
      },
      Thu: {
        startWork: "12:00",
        endWork: "22:00",
      },
      Fri: {
        startWork: "12:00",
        endWork: "24:00",
      },
      Sat: {
        startWork: "12:00",
        endWork: "24:00",
      },
      Sun: {
        startWork: "12:00",
        endWork: "22:00",
      },
    },
  },
  {
    category: "Кофейня",
    name: "Чай. Кофе. Шоколад.",
    address: "Ленинградская, 12",
    workTime: [
      ["Пн-Пт", "09:00-22:00"],
      ["Сб-Вс", "10:00-22:00"],
    ],
    website: null,
    phone: ["8 (900) 033-15-17"],
    messengers: null,
    socialNetworks: ["https://vk.com/coffeezar96"],
    tags: {
      isDeliverAvailable: null,
      onPlace: null,
      hasPreorder: null,
    },
    hasChildRoom: null,
    location: null,
    menu: null,
    photo: "./images/Чай. Кофе. Шоколад./photo/preview/preview.png",
    id: 21,
    logo: "./images/Чай. Кофе. Шоколад./photo/logo/logo.png",
    weekTime: {
      Mon: {
        startWork: "09:00",
        endWork: "22:00",
      },
      Tue: {
        startWork: "09:00",
        endWork: "22:00",
      },
      Wed: {
        startWork: "09:00",
        endWork: "22:00",
      },
      Thu: {
        startWork: "09:00",
        endWork: "22:00",
      },
      Fri: {
        startWork: "09:00",
        endWork: "22:00",
      },
      Sat: {
        startWork: "10:00",
        endWork: "22:00",
      },
      Sun: {
        startWork: "10:00",
        endWork: "22:00",
      },
    },
  },
  {
    category: "Фастфуд",
    name: "ЧебурекМи",
    address: "Ленинградская, 9Б",
    workTime: [["Пн-Вс", "11:00-21:00"]],
    website: "https://cheburek.me/zarechniy",
    phone: ["8 (922) 178-18-25"],
    messengers: null,
    socialNetworks: ["https://vk.com/cheburek_me_zarechny"],
    tags: {
      isDeliverAvailable: null,
      onPlace: null,
      hasPreorder: null,
    },
    hasChildRoom: null,
    location: "Справа от главного входа в ТЦ Галактика",
    menu: "https://disk.yandex.ru/i/RDPWe3S7luMOtg",
    photo: "./images/ЧебурекМи/photo/preview/preview.png",
    id: 22,
    logo: "./images/ЧебурекМи/photo/logo/logo.png",
    weekTime: {
      Mon: {
        startWork: "11:00",
        endWork: "21:00",
      },
      Tue: {
        startWork: "11:00",
        endWork: "21:00",
      },
      Wed: {
        startWork: "11:00",
        endWork: "21:00",
      },
      Thu: {
        startWork: "11:00",
        endWork: "21:00",
      },
      Fri: {
        startWork: "11:00",
        endWork: "21:00",
      },
      Sat: {
        startWork: "11:00",
        endWork: "21:00",
      },
      Sun: {
        startWork: "11:00",
        endWork: "21:00",
      },
    },
  },
  {
    category: "Фастфуд",
    name: "Шаурма 5",
    address: "Ленинградская, 9",
    workTime: [["Круглосуточно"]],
    website: null,
    phone: ["8 (922) 178-18-25"],
    messengers: null,
    socialNetworks: null,
    tags: {
      isDeliverAvailable: null,
      onPlace: null,
      hasPreorder: null,
    },
    hasChildRoom: null,
    location: "Слева от главного входа в ТЦ Галактика",
    menu: null,
    photo: "./images/Шаурма 5/photo/preview/preview.png",
    id: 23,
    logo: "./images/Шаурма 5/photo/logo/logo.png",
    weekTime: {
      Mon: ["Круглосуточно"],
      Tue: ["Круглосуточно"],
      Wed: ["Круглосуточно"],
      Thu: ["Круглосуточно"],
      Fri: ["Круглосуточно"],
      Sat: ["Круглосуточно"],
      Sun: ["Круглосуточно"],
    },
  },
  {
    category: "Фастфуд",
    name: "Шаурма у Ромарка",
    address: "Ленинградская, 24/2",
    workTime: [["Пн-Вс", "12:00-00:00"]],
    website: null,
    phone: ["8 (967) 542‒16‒64"],
    messengers: "Watsapp",
    socialNetworks: null,
    tags: {
      isDeliverAvailable: null,
      onPlace: null,
      hasPreorder: null,
    },
    hasChildRoom: null,
    location: null,
    menu: null,
    photo: "./images/Шаурма у Ромарка/photo/preview/preview.png",
    id: 24,
    logo: "./images/Шаурма у Ромарка/photo/logo/logo.png",
    weekTime: {
      Mon: {
        startWork: "12:00",
        endWork: "24:00",
      },
      Tue: {
        startWork: "12:00",
        endWork: "24:00",
      },
      Wed: {
        startWork: "12:00",
        endWork: "24:00",
      },
      Thu: {
        startWork: "12:00",
        endWork: "24:00",
      },
      Fri: {
        startWork: "12:00",
        endWork: "24:00",
      },
      Sat: {
        startWork: "12:00",
        endWork: "24:00",
      },
      Sun: {
        startWork: "12:00",
        endWork: "24:00",
      },
    },
  },
  {
    category: "Фастфуд",
    name: "Шашлыкоф",
    address: "Ленинградская, 9",
    workTime: [["Круглосуточно"]],
    website: null,
    phone: ["8 (922) 126-44-44"],
    messengers: null,
    socialNetworks: null,
    tags: {
      isDeliverAvailable: null,
      onPlace: null,
      hasPreorder: null,
    },
    hasChildRoom: null,
    location:
      "С правой стороны между входом в первую и во вторую очередь ТЦ Галактика",
    menu: null,
    photo: "./images/Шашлыкоф/photo/preview/preview.png",
    id: 25,
    logo: "./images/Шашлыкоф/photo/logo/logo.png",
    weekTime: {
      Mon: ["Круглосуточно"],
      Tue: ["Круглосуточно"],
      Wed: ["Круглосуточно"],
      Thu: ["Круглосуточно"],
      Fri: ["Круглосуточно"],
      Sat: ["Круглосуточно"],
      Sun: ["Круглосуточно"],
    },
  },
  {
    category: "Фастфуд",
    name: "Шашлычный дворик",
    address: "Набережная",
    workTime: [
      ["Пн-Чт", "10:00-22:00"],
      ["Пт-Вс", "11:00-23:00"],
    ],
    website: null,
    phone: ["8 (912) 280-70-00"],
    messengers: null,
    socialNetworks: ["https://vk.com/shahlykzarik"],
    tags: {
      isDeliverAvailable: null,
      onPlace: null,
      hasPreorder: null,
    },
    hasChildRoom: null,
    location: null,
    menu: "https://disk.yandex.ru/i/tMCN_xl7jPbMtA",
    photo: "./images/Шашлычный дворик/photo/preview/preview.png",
    id: 26,
    logo: "./images/Шашлычный дворик/photo/logo/logo.png",
    weekTime: {
      Mon: {
        startWork: "10:00",
        endWork: "22:00",
      },
      Tue: {
        startWork: "10:00",
        endWork: "22:00",
      },
      Wed: {
        startWork: "10:00",
        endWork: "22:00",
      },
      Thu: {
        startWork: "10:00",
        endWork: "22:00",
      },
      Fri: {
        startWork: "10:00",
        endWork: "22:00",
      },
      Sat: {
        startWork: "11:00",
        endWork: "23:00",
      },
      Sun: {
        startWork: "11:00",
        endWork: "23:00",
      },
    },
  },
  {
    category: "Фастфуд",
    name: "Black pizza",
    address: "Таховская, 8",
    workTime: [
      ["Пн-Чт", "10:30-22:00"],
      ["Пт-Сб", "10:30-23:00"],
      ["Вс", "10:30-22:00"],
    ],
    website: "https://black-pizza.ru/",
    phone: ["8 (900) 200-55-36​"],
    messengers: null,
    socialNetworks: ["https://vk.com/blackpizza_ru"],
    tags: {
      isDeliverAvailable: null,
      onPlace: null,
      hasPreorder: null,
    },
    hasChildRoom: null,
    location: null,
    menu: "https://disk.yandex.ru/i/sinoPc7Qaef4KA",
    photo: "./images/Black pizza/photo/preview/preview.png",
    id: 27,
    logo: "./images/Black pizza/photo/logo/logo.png",
    weekTime: {
      Mon: {
        startWork: "10:30",
        endWork: "22:00",
      },
      Tue: {
        startWork: "10:30",
        endWork: "22:00",
      },
      Wed: {
        startWork: "10:30",
        endWork: "22:00",
      },
      Thu: {
        startWork: "10:30",
        endWork: "22:00",
      },
      Fri: {
        startWork: "10:30",
        endWork: "23:00",
      },
      Sat: {
        startWork: "10:30",
        endWork: "23:00",
      },
      Sun: {
        startWork: "10:30",
        endWork: "22:00",
      },
    },
  },
  {
    category: "Пекарня",
    name: "Dolci Mamulino",
    address: ["9 Мая 3", "Алещенкова 12"],
    workTime: [["Пн-Вс", "10:00-20:00"]],
    website: null,
    phone: ["Алещенкова: 8 (982) 621-24-04", "9 Мая: 8 (919) 368-00-36"],
    messengers: null,
    socialNetworks: ["https://vk.com/dolci_mamulino"],
    tags: {
      isDeliverAvailable: null,
      onPlace: null,
      hasPreorder: null,
    },
    hasChildRoom: null,
    location: null,
    menu: "https://disk.yandex.ru/i/9cqoC68SF3nP0w",
    photo: "./images/Dolci Mamulino/photo/preview/preview.png",
    id: 28,
    logo: "./images/Dolci Mamulino/photo/logo/logo.png",
    weekTime: {
      Mon: {
        startWork: "11:00",
        endWork: "20:00",
      },
      Tue: {
        startWork: "11:00",
        endWork: "20:00",
      },
      Wed: {
        startWork: "11:00",
        endWork: "20:00",
      },
      Thu: {
        startWork: "11:00",
        endWork: "20:00",
      },
      Fri: {
        startWork: "11:00",
        endWork: "20:00",
      },
      Sat: {
        startWork: "11:00",
        endWork: "20:00",
      },
      Sun: {
        startWork: "11:00",
        endWork: "20:00",
      },
    },
  },
  {
    category: "Кофейня",
    name: "Lovi Buket",
    address: "Р",
    workTime: [
      ["Пн-Пт", "09:00-21:00"],
      ["Сб-Вс", "10:00-21:00"],
    ],
    website: null,
    phone: ["Алещенкова: 8 (982) 621-24-04", "9 Мая: 8 (919) 368-00-36"],
    messengers: null,
    socialNetworks: ["https://vk.com/lovibuket96"],
    tags: {
      isDeliverAvailable: "Да",
      onPlace: null,
      hasPreorder: null,
    },
    hasChildRoom: null,
    location: null,
    menu: null,
    photo: "./images/Lovi Buket/photo/preview/preview.png",
    id: 29,
    logo: "./images/Lovi Buket/photo/logo/logo.png",
    weekTime: {
      Mon: {
        startWork: "09:00",
        endWork: "21:00",
      },
      Tue: {
        startWork: "09:00",
        endWork: "21:00",
      },
      Wed: {
        startWork: "09:00",
        endWork: "21:00",
      },
      Thu: {
        startWork: "09:00",
        endWork: "21:00",
      },
      Fri: {
        startWork: "09:00",
        endWork: "21:00",
      },
      Sat: {
        startWork: "10:00",
        endWork: "21:00",
      },
      Sun: {
        startWork: "10:00",
        endWork: "21:00",
      },
    },
  },
  {
    category: "Фастфуд",
    name: "Osaka",
    address: "Ленинградская, 12",
    workTime: [["Пн-Вс", "11:00-23:00"]],
    website: "https://osakazar.ru/",
    phone: ["8 (982) 730-86-96"],
    messengers: null,
    socialNetworks: ["https://vk.com/osaka_sushi_bar"],
    tags: {
      isDeliverAvailable: null,
      onPlace: null,
      hasPreorder: null,
    },
    hasChildRoom: null,
    location: null,
    menu: "https://disk.yandex.ru/i/V__y9PzkGp0F8A",
    photo: "./images/Osaka/photo/preview/preview.png",
    id: 30,
    logo: "./images/Osaka/photo/logo/logo.png",
    weekTime: {
      Mon: {
        startWork: "11:00",
        endWork: "23:00",
      },
      Tue: {
        startWork: "11:00",
        endWork: "23:00",
      },
      Wed: {
        startWork: "11:00",
        endWork: "23:00",
      },
      Thu: {
        startWork: "11:00",
        endWork: "23:00",
      },
      Fri: {
        startWork: "11:00",
        endWork: "23:00",
      },
      Sat: {
        startWork: "11:00",
        endWork: "23:00",
      },
      Sun: {
        startWork: "11:00",
        endWork: "23:00",
      },
    },
  },
  {
    category: "Кафе",
    name: "PANDA",
    address: "Кузнецова, 20",
    workTime: [
      ["Пн", "Закрыто"],
      ["Вт-Вс", "11:00-22:00"],
    ],
    website: null,
    phone: ["8 (992) 345-65-09"],
    messengers: null,
    socialNetworks: null,
    tags: {
      isDeliverAvailable: null,
      onPlace: null,
      hasPreorder: null,
    },
    hasChildRoom: null,
    location: null,
    menu: "https://disk.yandex.ru/i/Oyqv9rb0rKOcFA",
    photo: "./images/PANDA/photo/preview/preview.png",
    id: 31,
    logo: "./images/PANDA/photo/logo/logo.png",
    weekTime: {
      Mon: ["Закыто"],
      Tue: {
        startWork: "11:00",
        endWork: "22:00",
      },
      Wed: {
        startWork: "11:00",
        endWork: "22:00",
      },
      Thu: {
        startWork: "11:00",
        endWork: "22:00",
      },
      Fri: {
        startWork: "11:00",
        endWork: "22:00",
      },
      Sat: {
        startWork: "11:00",
        endWork: "22:00",
      },
      Sun: {
        startWork: "11:00",
        endWork: "22:00",
      },
    },
  },
  {
    category: "Ресторан",
    name: "RIVIERA",
    address: "Клары Цеткин, 22",
    workTime: [
      ["Пн-Чт", "12:00-22:00"],
      ["Пт", "11:00-00:00"],
      ["Сб-Вс", "12:00-04:00"],
    ],
    website: "https://riviera96.club/",
    phone: ["8 (343) 777-87-90", "8 (343) 286-87-90", "8 (922) 168-15-08"],
    messengers: null,
    socialNetworks: [
      "https://vk.com/rivierazar",
      "https://t.me/+Of-tklln3SY5MTBi",
    ],
    tags: {
      isDeliverAvailable: null,
      onPlace: null,
      hasPreorder: null,
    },
    hasChildRoom: null,
    location: null,
    menu: "Летнее меню https://postimg.cc/JHK4XXvW Барная карта https://postimg.cc/sBfPzVyY Детское меню https://postimg.cc/fSdmCyjN",
    photo: "./images/RIVIERA/photo/preview/preview.png",
    id: 32,
    logo: "./images/RIVIERA/photo/logo/logo.png",
    weekTime: {
      Mon: {
        startWork: "12:00",
        endWork: "22:00",
      },
      Tue: {
        startWork: "12:00",
        endWork: "22:00",
      },
      Wed: {
        startWork: "12:00",
        endWork: "22:00",
      },
      Thu: {
        startWork: "12:00",
        endWork: "22:00",
      },
      Fri: {
        startWork: "11:00",
        endWork: "24:00",
      },
      Sat: {
        startWork: "12:00",
        endWork: "04:00",
      },
      Sun: {
        startWork: "12:00",
        endWork: "04:00",
      },
    },
  },
  {
    category: "Фастфуд",
    name: "Royal kebab",
    address: "Ленинградская, 9",
    workTime: [["Круглосуточно"]],
    website: null,
    phone: ["8 (904) 162-64-84"],
    messengers: null,
    socialNetworks: null,
    tags: {
      isDeliverAvailable: "Да",
      onPlace: null,
      hasPreorder: null,
    },
    hasChildRoom: null,
    location: "С правой стороны задней парковки у ТЦ Галактика",
    menu: "https://disk.yandex.ru/i/kLzmrwm7VcYp3g",
    photo: "./images/Royal kebab/photo/preview/preview.png",
    id: 33,
    logo: "./images/Royal kebab/photo/logo/logo.png",
    weekTime: {
      Mon: ["Круглосуточно"],
      Tue: ["Круглосуточно"],
      Wed: ["Круглосуточно"],
      Thu: ["Круглосуточно"],
      Fri: ["Круглосуточно"],
      Sat: ["Круглосуточно"],
      Sun: ["Круглосуточно"],
    },
  },
  {
    category: "Кафе",
    name: "Момоямия",
    address: "Кузнецова, 11",
    workTime: [["Пн-Вс", "10:00-22:00"]],
    website: null,
    phone: ["8 (993) 105-50-09"],
    messengers: null,
    socialNetworks: null,
    tags: {
      isDeliverAvailable: null,
      onPlace: null,
      hasPreorder: null,
    },
    hasChildRoom: null,
    location: null,
    menu: null,
    photo: "./images/Момоямия/photo/preview/preview.png",
    id: 34,
    logo: "./images/Момоямия/photo/logo/logo.png",
    weekTime: {
      Mon: {
        startWork: "10:00",
        endWork: "22:00",
      },
      Tue: {
        startWork: "10:00",
        endWork: "22:00",
      },
      Wed: {
        startWork: "10:00",
        endWork: "22:00",
      },
      Thu: {
        startWork: "10:00",
        endWork: "22:00",
      },
      Fri: {
        startWork: "10:00",
        endWork: "22:00",
      },
      Sat: {
        startWork: "10:00",
        endWork: "22:00",
      },
      Sun: {
        startWork: "10:00",
        endWork: "22:00",
      },
    },
  },
];

function getPlaces() {
  return places;
}

export { getPlaces };
