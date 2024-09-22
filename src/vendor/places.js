const places = [
  {
    category: 'Бар',
    name: 'Атомная прачечная',
    address: 'Бажова, 14',
    workTime: [
      ['Пн', 'Закрыто'],
      ['Вт-Чт', '16:00-23:00'],
      ['Пт', '16:00-01:00'],
      ['Сб', '13:00-01:00'],
      ['Вс', 'Закрыто'],
    ],
    website: null,
    phone: ['8 (343) 282-97-54'],
    messengers: null,
    socialNetworks: ['https://vk.com/jaws_bar'],
    tags: { isDeliverAvailable: null, onPlace: null, hasPreorder: null },
    hasChildRoom: null,
    location: null,
    menu: null,
    photo: '/images/Атомная прачечная/photo/preview/preview.jpg',
    id: 1,
    logo: '/images/Атомная прачечная/photo/logo/logo.jpg',
    weekTime: {
      Mon: 'Закрыто',
      Tue: { startWork: '16:00', endWork: '23:00' },
      Wed: { startWork: '16:00', endWork: '23:00' },
      Thu: { startWork: '16:00', endWork: '23:00' },
      Fri: { startWork: '16:00', endWork: '01:00' },
      Sat: { startWork: '13:00', endWork: '01:00' },
      Sun: 'Закрыто',
    },
    mapLocation: {
      latitude: '56.812664802931614',
      longtitude: '61.32607333347632',
    },
  },
  {
    category: 'Фастфуд',
    name: 'Восточная кухня',
    address: 'Попова, 3/4',
    workTime: [['Пн-Вс', '9:00-20:00']],
    website: null,
    phone: ['8 (965) 001‒21‒26'],
    messengers: 'Watsapp',
    socialNetworks: null,
    tags: { isDeliverAvailable: null, onPlace: null, hasPreorder: null },
    hasChildRoom: null,
    location: null,
    menu: null,
    photo: '/images/Восточная кухня/photo/preview/preview.jpg',
    id: 2,
    logo: '/images/Восточная кухня/photo/logo/logo.jpg',
    weekTime: {
      Mon: { startWork: '9:00', endWork: '20:00' },
      Tue: { startWork: '9:00', endWork: '20:00' },
      Wed: { startWork: '9:00', endWork: '20:00' },
      Thu: { startWork: '9:00', endWork: '20:00' },
      Fri: { startWork: '9:00', endWork: '20:00' },
      Sat: { startWork: '9:00', endWork: '20:00' },
      Sun: { startWork: '9:00', endWork: '20:00' },
    },
    mapLocation: {
      latitude: '56.81000499748548',
      longtitude: '61.333049673903986',
    },
  },
  {
    category: 'Столовая',
    name: 'Восход',
    address: 'Попова, 3',
    workTime: [
      ['Пн-Пт', '10:00-18:00'],
      ['Сб-Вс', 'Закрыто'],
    ],
    website: null,
    phone: ['8 (982) 759-72-10'],
    messengers: null,
    socialNetworks: null,
    tags: { isDeliverAvailable: null, onPlace: null, hasPreorder: null },
    hasChildRoom: null,
    location: null,
    menu: null,
    photo: '/images/Восход/photo/preview/preview.jpg',
    id: 3,
    logo: '/images/Восход/photo/logo/logo.jpg',
    weekTime: {
      Mon: { startWork: '10:00', endWork: '18:00' },
      Tue: { startWork: '10:00', endWork: '18:00' },
      Wed: { startWork: '10:00', endWork: '18:00' },
      Thu: { startWork: '10:00', endWork: '18:00' },
      Fri: { startWork: '10:00', endWork: '18:00' },
      Sat: 'Закрыто',
      Sun: 'Закрыто',
    },
    mapLocation: {
      latitude: '56.81000499748548',
      longtitude: '61.333049673903986',
    },
  },
  {
    category: 'Кофейня',
    name: 'Душевный разговор',
    address: 'Курчатова, 7',
    workTime: [
      ['Пн-Пт', '07:00-22:00'],
      ['Сб-Вс', '09:00-22:00'],
    ],
    website: null,
    phone: ['8 (982) 759-72-10'],
    messengers: null,
    socialNetworks: null,
    tags: { isDeliverAvailable: null, onPlace: null, hasPreorder: null },
    hasChildRoom: null,
    location: null,
    menu: null,
    photo: '/images/Душевный разговор/photo/preview/preview.jpg',
    id: 4,
    logo: '/images/Душевный разговор/photo/logo/logo.jpg',
    weekTime: {
      Mon: { startWork: '07:00', endWork: '22:00' },
      Tue: { startWork: '07:00', endWork: '22:00' },
      Wed: { startWork: '07:00', endWork: '22:00' },
      Thu: { startWork: '07:00', endWork: '22:00' },
      Fri: { startWork: '07:00', endWork: '22:00' },
      Sat: { startWork: '09:00', endWork: '22:00' },
      Sun: { startWork: '09:00', endWork: '22:00' },
    },
    mapLocation: {
      latitude: '56.80844042730978',
      longtitude: '61.319664109496266',
    },
  },
  {
    category: 'Кофейня',
    name: 'Жажда',
    address: 'Ленинградская, 9',
    workTime: [['Пн-Вс', '11:00-21:00']],
    website: null,
    phone: ['8 (922) 196-30-30'],
    messengers: null,
    socialNetworks: null,
    tags: { isDeliverAvailable: null, onPlace: null, hasPreorder: null },
    hasChildRoom: null,
    location: 'Справа от главного входа в ТЦ Галактика',
    menu: null,
    photo: '/images/Жажда/photo/preview/preview.jpg',
    id: 5,
    logo: '/images/Жажда/photo/logo/logo.jpg',
    weekTime: {
      Mon: { startWork: '11:00', endWork: '21:00' },
      Tue: { startWork: '11:00', endWork: '21:00' },
      Wed: { startWork: '11:00', endWork: '21:00' },
      Thu: { startWork: '11:00', endWork: '21:00' },
      Fri: { startWork: '11:00', endWork: '21:00' },
      Sat: { startWork: '11:00', endWork: '21:00' },
      Sun: { startWork: '11:00', endWork: '21:00' },
    },
    mapLocation: {
      latitude: '56.79723899980767',
      longtitude: '61.32044458919621',
    },
  },
  {
    category: 'Готовая еда',
    name: 'Жизньмарт',
    address: 'Ленина, 33',
    workTime: [
      ['Пн-Пт', '07:00-23:00'],
      ['Сб-Вс', '08:00-23:00'],
    ],
    website: 'https://lifemart.ru/ru/zarechniy',
    phone: ['8 (993) 516-06-54'],
    messengers: null,
    socialNetworks: [
      'https://vk.com/lifemart_ru',
      'https://t.me/lifemart_zar_lenina33',
    ],
    tags: { isDeliverAvailable: null, onPlace: null, hasPreorder: null },
    hasChildRoom: null,
    location: null,
    menu: 'https://disk.yandex.ru/i/LdfAnlizRbuOkg',
    photo: '/images/Жизньмарт/photo/preview/preview.jpg',
    id: 6,
    logo: '/images/Жизньмарт/photo/logo/logo.jpg',
    weekTime: {
      Mon: { startWork: '07:00', endWork: '23:00' },
      Tue: { startWork: '07:00', endWork: '23:00' },
      Wed: { startWork: '07:00', endWork: '23:00' },
      Thu: { startWork: '07:00', endWork: '23:00' },
      Fri: { startWork: '07:00', endWork: '23:00' },
      Sat: { startWork: '08:00', endWork: '23:00' },
      Sun: { startWork: '08:00', endWork: '23:00' },
    },
    mapLocation: {
      latitude: '56.80683805436297',
      longtitude: '61.320802453806394',
    },
  },
  {
    category: 'Фастфуд',
    name: 'Жиши Суши',
    address: 'Победы, 22',
    workTime: [['Пн-Вс', '11:00-23:00']],
    website: 'https://ji-shi.ru/zarechny/new',
    phone: ['8 (967) 630-03-17'],
    messengers: null,
    socialNetworks: ['https://vk.com/jishisushi', 'https://t.me/jishisushi'],
    tags: { isDeliverAvailable: null, onPlace: null, hasPreorder: null },
    hasChildRoom: 'Да',
    location: null,
    menu: 'https://disk.yandex.ru/i/T-0JxvI_R4tH8g',
    photo: '/images/Жиши Суши/photo/preview/preview.jpg',
    id: 7,
    logo: '/images/Жиши Суши/photo/logo/logo.jpg',
    weekTime: {
      Mon: { startWork: '11:00', endWork: '23:00' },
      Tue: { startWork: '11:00', endWork: '23:00' },
      Wed: { startWork: '11:00', endWork: '23:00' },
      Thu: { startWork: '11:00', endWork: '23:00' },
      Fri: { startWork: '11:00', endWork: '23:00' },
      Sat: { startWork: '11:00', endWork: '23:00' },
      Sun: { startWork: '11:00', endWork: '23:00' },
    },
    mapLocation: {
      latitude: '56.796236233870495',
      longtitude: '61.32403637988063',
    },
  },
  {
    category: 'Ресторан',
    name: 'Зодиак',
    address: 'Ленинградская, 9б',
    workTime: [
      ['Пн-Чт', '11:00-22:00'],
      ['Пт', '11:00-04:00'],
      ['Сб', '12:00-04:00'],
      ['Вс', 'Закрыто'],
    ],
    website: null,
    phone: ['8 (904) 161-77-22'],
    messengers: null,
    socialNetworks: ['https://vk.com/zodiak_rest_zar', 't.me/zodiac_rest_zar'],
    tags: { isDeliverAvailable: null, onPlace: null, hasPreorder: null },
    hasChildRoom: null,
    location: null,
    menu: 'https://disk.yandex.ru/i/sI9e1zAxO3kaYA',
    photo: '/images/Зодиак/photo/preview/preview.jpg',
    id: 8,
    logo: '/images/Зодиак/photo/logo/logo.jpg',
    weekTime: {
      Mon: { startWork: '11:00', endWork: '22:00' },
      Tue: { startWork: '11:00', endWork: '22:00' },
      Wed: { startWork: '11:00', endWork: '22:00' },
      Thu: { startWork: '11:00', endWork: '22:00' },
      Fri: { startWork: '11:00', endWork: '04:00' },
      Sat: { startWork: '11:00', endWork: '22:00' },
      Sun: { startWork: '12:00', endWork: '04:00' },
    },
    mapLocation: {
      latitude: '56.797182671189255',
      longtitude: '61.32001937160666',
    },
  },
  {
    category: 'Пекарня',
    name: 'Мякушка',
    address: 'Кузнецова, 9/3',
    workTime: [['Пн-Вс', '08:00-21:00']],
    website: 'https://xn--80aanubamhon0bydxeb.xn--p1ai/',
    phone: ['8 (996) 595-29-35'],
    messengers: null,
    socialNetworks: null,
    tags: { isDeliverAvailable: null, onPlace: null, hasPreorder: null },
    hasChildRoom: null,
    location: null,
    menu: null,
    photo: '/images/Мякушка/photo/preview/preview.jpg',
    id: 9,
    logo: '/images/Мякушка/photo/logo/logo.jpg',
    weekTime: {
      Mon: { startWork: '08:00', endWork: '21:00' },
      Tue: { startWork: '08:00', endWork: '21:00' },
      Wed: { startWork: '08:00', endWork: '21:00' },
      Thu: { startWork: '08:00', endWork: '21:00' },
      Fri: { startWork: '08:00', endWork: '21:00' },
      Sat: { startWork: '08:00', endWork: '21:00' },
      Sun: { startWork: '08:00', endWork: '21:00' },
    },
    mapLocation: {
      latitude: '56.79955760294771',
      longtitude: '61.316082896686154',
    },
  },
  {
    category: 'Фастфуд',
    name: 'Нагано',
    address: 'Таховская, 12/1',
    workTime: [['Пн-Вс', '10:00-23:00']],
    website: 'https://nagano66.ru/',
    phone: ['8 (932) 610-60-00'],
    messengers: null,
    socialNetworks: ['https://vk.com/nagano_zarechny'],
    tags: { isDeliverAvailable: null, onPlace: null, hasPreorder: null },
    hasChildRoom: null,
    location: null,
    menu: 'https://nagano66.ru/',
    photo: '/images/Нагано/photo/preview/preview.jpg',
    id: 10,
    logo: '/images/Нагано/photo/logo/logo.jpg',
    weekTime: {
      Mon: { startWork: '10:00', endWork: '23:00' },
      Tue: { startWork: '10:00', endWork: '23:00' },
      Wed: { startWork: '10:00', endWork: '23:00' },
      Thu: { startWork: '10:00', endWork: '23:00' },
      Fri: { startWork: '10:00', endWork: '23:00' },
      Sat: { startWork: '10:00', endWork: '23:00' },
      Sun: { startWork: '10:00', endWork: '23:00' },
    },
    mapLocation: {
      latitude: '56.80370019841282',
      longtitude: '61.31901384790804',
    },
  },
  {
    category: 'Кафе',
    name: 'Ностальжи',
    address: 'Клары Цеткин, 13',
    workTime: [
      ['Пн-Сб', '11:00-23:00'],
      ['Вс', 'Закрыто'],
    ],
    website: null,
    phone: ['8 (950) 191-41-61'],
    messengers: null,
    socialNetworks: null,
    tags: { isDeliverAvailable: null, onPlace: null, hasPreorder: null },
    hasChildRoom: null,
    location: null,
    menu: null,
    photo: '/images/Ностальжи/photo/preview/preview.jpg',
    id: 11,
    logo: '/images/Ностальжи/photo/logo/logo.jpg',
    weekTime: {
      Mon: { startWork: '11:00', endWork: '23:00' },
      Tue: { startWork: '11:00', endWork: '23:00' },
      Wed: { startWork: '11:00', endWork: '23:00' },
      Thu: { startWork: '11:00', endWork: '23:00' },
      Fri: { startWork: '11:00', endWork: '23:00' },
      Sat: { startWork: '11:00', endWork: '23:00' },
      Sun: 'Закрыто',
    },
    mapLocation: {
      latitude: '56.81375910604469',
      longtitude: '61.3167717352597',
    },
  },
  {
    category: 'Фастфуд',
    name: 'От Шефа',
    address: 'Курчатова, 2',
    workTime: [['Пн-Вс', '10:00-23:00']],
    website: null,
    phone: ['8 (912) 275-82-92'],
    messengers: null,
    socialNetworks: ['https://vk.com/sushiotshefa66'],
    tags: { isDeliverAvailable: 'Да', onPlace: null, hasPreorder: null },
    hasChildRoom: null,
    location: null,
    menu: 'https://disk.yandex.ru/i/sD3nL04DqkO87g',
    photo: '/images/От Шефа/photo/preview/preview.jpg',
    id: 12,
    logo: '/images/От Шефа/photo/logo/logo.jpg',
    weekTime: {
      Mon: { startWork: '10:00', endWork: '23:00' },
      Tue: { startWork: '10:00', endWork: '23:00' },
      Wed: { startWork: '10:00', endWork: '23:00' },
      Thu: { startWork: '10:00', endWork: '23:00' },
      Fri: { startWork: '10:00', endWork: '23:00' },
      Sat: { startWork: '10:00', endWork: '23:00' },
      Sun: { startWork: '10:00', endWork: '23:00' },
    },
    mapLocation: {
      latitude: '56.810443936359626',
      longtitude: '61.31957213600233',
    },
  },
  {
    category: 'Фастфуд',
    name: 'Папа гриль',
    address: 'Таховская, 2',
    workTime: [
      ['Пн-Чт', '10:00-22:00'],
      ['Пт-Сб', '10:00-23:00'],
      ['Вс', '10:00-22:00'],
    ],
    website: null,
    phone: ['8 (912) 275-82-92'],
    messengers: null,
    socialNetworks: null,
    tags: { isDeliverAvailable: null, onPlace: null, hasPreorder: null },
    hasChildRoom: null,
    location: null,
    menu: null,
    photo: '/images/Папа гриль/photo/preview/preview.jpg',
    id: 13,
    logo: '/images/Папа гриль/photo/logo/logo.jpg',
    weekTime: {
      Mon: { startWork: '10:00', endWork: '22:00' },
      Tue: { startWork: '10:00', endWork: '22:00' },
      Wed: { startWork: '10:00', endWork: '22:00' },
      Thu: { startWork: '10:00', endWork: '22:00' },
      Fri: { startWork: '10:00', endWork: '23:00' },
      Sat: { startWork: '10:00', endWork: '23:00' },
      Sun: { startWork: '10:00', endWork: '22:00' },
    },
    mapLocation: {
      latitude: '56.80467653167818',
      longtitude: '61.31587686957768',
    },
  },
  {
    category: 'Кафе',
    name: 'Печка',
    address: 'Кузнецова, 2а',
    workTime: [['Пн-Вс', '11:00-20:00']],
    website: null,
    phone: ['8 (343) 777-32-39'],
    messengers: null,
    socialNetworks: ['https://vk.com/pechca_cafe'],
    tags: { isDeliverAvailable: null, onPlace: null, hasPreorder: null },
    hasChildRoom: null,
    location: null,
    menu: null,
    photo: '/images/Печка/photo/preview/preview.jpg',
    id: 14,
    logo: '/images/Печка/photo/logo/logo.jpg',
    weekTime: {
      Mon: { startWork: '11:00', endWork: '20:00' },
      Tue: { startWork: '11:00', endWork: '20:00' },
      Wed: { startWork: '11:00', endWork: '20:00' },
      Thu: { startWork: '11:00', endWork: '20:00' },
      Fri: { startWork: '11:00', endWork: '20:00' },
      Sat: { startWork: '11:00', endWork: '20:00' },
      Sun: { startWork: '11:00', endWork: '20:00' },
    },
    mapLocation: {
      latitude: '56.801289695809096',
      longtitude: '61.31183297440712',
    },
  },
  {
    category: 'Кафе',
    name: 'Сытоед',
    address: 'Ленина, 26/5б',
    workTime: [
      ['Пн-Чт', '11:00-22:00'],
      ['Пт', '11:00-04:00'],
      ['Сб', '12:00-04:00'],
      ['Вс', 'Закрыто'],
    ],
    website: null,
    phone: ['8 (919) 365-90-62'],
    messengers: null,
    socialNetworks: [
      'https://vk.com/sitoed_cafebar',
      'https://t.me/SITOED_cafebar',
    ],
    tags: { isDeliverAvailable: null, onPlace: null, hasPreorder: null },
    hasChildRoom: null,
    location: null,
    menu: 'Меню обноляется каждый день в сообществе ВК - https://vk.com/sitoed_cafebar',
    photo: '/images/Сытоед/photo/preview/preview.jpg',
    id: 15,
    logo: '/images/Сытоед/photo/logo/logo.jpg',
    weekTime: {
      Mon: { startWork: '11:00', endWork: '22:00' },
      Tue: { startWork: '11:00', endWork: '22:00' },
      Wed: { startWork: '11:00', endWork: '22:00' },
      Thu: { startWork: '11:00', endWork: '22:00' },
      Fri: { startWork: '11:00', endWork: '04:00' },
      Sat: { startWork: '12:00', endWork: '04:00' },
      Sun: 'Закрыто',
    },
    mapLocation: {
      latitude: '56.80398453205294',
      longtitude: '61.321401115498446',
    },
  },
  {
    category: 'Фастфуд',
    name: 'Таврия',
    address: 'Таховская, 12',
    workTime: [['Пн-Вс', '11:00-21:00']],
    website: 'http://tavria-rus.ru/',
    phone: ['8 (351) 245-40-25 (доб. 493)'],
    messengers: null,
    socialNetworks: null,
    tags: { isDeliverAvailable: 'Нет', onPlace: null, hasPreorder: null },
    hasChildRoom: null,
    location: null,
    menu: null,
    photo: '/images/Таврия/photo/preview/preview.jpg',
    id: 16,
    logo: '/images/Таврия/photo/logo/logo.jpg',
    weekTime: {
      Mon: { startWork: '11:00', endWork: '21:00' },
      Tue: { startWork: '11:00', endWork: '21:00' },
      Wed: { startWork: '11:00', endWork: '21:00' },
      Thu: { startWork: '11:00', endWork: '21:00' },
      Fri: { startWork: '11:00', endWork: '21:00' },
      Sat: { startWork: '11:00', endWork: '21:00' },
      Sun: { startWork: '11:00', endWork: '21:00' },
    },
    mapLocation: {
      latitude: '56.80373397895677',
      longtitude: '61.3189045258932',
    },
  },
  {
    category: 'Кафе',
    name: 'Театральное',
    address: 'Ленина, 11',
    workTime: [['Пн-Вс', '12:00-20:00']],
    website: null,
    phone: ['8 (900) 202-45-25'],
    messengers: null,
    socialNetworks: ['https://vk.com/teatralnoezar'],
    tags: { isDeliverAvailable: null, onPlace: null, hasPreorder: null },
    hasChildRoom: null,
    location: null,
    menu: null,
    photo: '/images/Театральное/photo/preview/preview.jpg',
    id: 17,
    logo: '/images/Театральное/photo/logo/logo.jpg',
    weekTime: {
      Mon: { startWork: '12:00', endWork: '20:00' },
      Tue: { startWork: '12:00', endWork: '20:00' },
      Wed: { startWork: '12:00', endWork: '20:00' },
      Thu: { startWork: '12:00', endWork: '20:00' },
      Fri: { startWork: '12:00', endWork: '20:00' },
      Sat: { startWork: '12:00', endWork: '20:00' },
      Sun: { startWork: '12:00', endWork: '20:00' },
    },
    mapLocation: {
      latitude: '56.81518888041798',
      longtitude: '61.32170371807053',
    },
  },
  {
    category: 'Кафе',
    name: 'Франческо Тортини',
    address: 'Ленинградская, 23а',
    workTime: [
      ['Пн-Чт', '11:00-23:00'],
      ['Пт', '11:00-00:00'],
      ['Сб', '12:00-01:00'],
      ['Вс', '12:00-23:00'],
    ],
    website: 'https://ftcafe.ru/',
    phone: ['8 (967) 85-385-90'],
    messengers: null,
    socialNetworks: ['https://vk.com/ft_cafe', 'https://t.me/ftcafeZar'],
    tags: { isDeliverAvailable: null, onPlace: null, hasPreorder: null },
    hasChildRoom: null,
    location: null,
    menu: 'https://disk.yandex.ru/i/DRhZc5EW42yJMA',
    photo: '/images/Франческо Тортини/photo/preview/preview.jpg',
    id: 18,
    logo: '/images/Франческо Тортини/photo/logo/logo.jpg',
    weekTime: {
      Mon: { startWork: '11:00', endWork: '23:00' },
      Tue: { startWork: '11:00', endWork: '23:00' },
      Wed: { startWork: '11:00', endWork: '23:00' },
      Thu: { startWork: '11:00', endWork: '23:00' },
      Fri: { startWork: '11:00', endWork: '24:00' },
      Sat: { startWork: '12:00', endWork: '01:00' },
      Sun: { startWork: '12:00', endWork: '23:00' },
    },
    mapLocation: {
      latitude: '56.79504714451515',
      longtitude: '61.31269934210733',
    },
  },
  {
    category: 'Фастфуд',
    name: 'Хмель и бургер',
    address: 'Ленина, 15',
    workTime: [['Пн-Вс', '11:00-23:00']],
    website: null,
    phone: ['8 (967) 85-385-90'],
    messengers: null,
    socialNetworks: null,
    tags: { isDeliverAvailable: null, onPlace: null, hasPreorder: null },
    hasChildRoom: null,
    location: null,
    menu: null,
    photo: '/images/Хмель и бургер/photo/preview/preview.jpg',
    id: 19,
    logo: '/images/Хмель и бургер/photo/logo/logo.jpg',
    weekTime: {
      Mon: { startWork: '11:00', endWork: '23:00' },
      Tue: { startWork: '11:00', endWork: '23:00' },
      Wed: { startWork: '11:00', endWork: '23:00' },
      Thu: { startWork: '11:00', endWork: '23:00' },
      Fri: { startWork: '11:00', endWork: '23:00' },
      Sat: { startWork: '11:00', endWork: '23:00' },
      Sun: { startWork: '11:00', endWork: '23:00' },
    },
    mapLocation: {
      latitude: '56.81409137307319',
      longtitude: '61.32047066951966',
    },
  },
  {
    category: 'Кафе',
    name: 'Хруст',
    address: 'Кузнецова, 9',
    workTime: [
      ['Пн-Чт', '12:00-22:00'],
      ['Пт-Сб', '12:00-00:00'],
      ['Вс', '12:00-22:00'],
    ],
    website: null,
    phone: ['8 (950) 559-57-25'],
    messengers: null,
    socialNetworks: ['https://vk.com/zarhrust'],
    tags: { isDeliverAvailable: null, onPlace: null, hasPreorder: null },
    hasChildRoom: null,
    location: null,
    menu: 'https://disk.yandex.ru/i/EQPchPpzBkzYbw',
    photo: '/images/Хруст/photo/preview/preview.jpg',
    id: 20,
    logo: '/images/Хруст/photo/logo/logo.jpg',
    weekTime: {
      Mon: { startWork: '12:00', endWork: '22:00' },
      Tue: { startWork: '12:00', endWork: '22:00' },
      Wed: { startWork: '12:00', endWork: '22:00' },
      Thu: { startWork: '12:00', endWork: '22:00' },
      Fri: { startWork: '12:00', endWork: '24:00' },
      Sat: { startWork: '12:00', endWork: '24:00' },
      Sun: { startWork: '12:00', endWork: '22:00' },
    },
    mapLocation: {
      latitude: '56.799347847944695',
      longtitude: '61.3164061508866',
    },
  },
  {
    category: 'Кофейня',
    name: 'Чай. Кофе. Шоколад.',
    address: 'Ленинградская, 12',
    workTime: [
      ['Пн-Пт', '09:00-22:00'],
      ['Сб-Вс', '10:00-22:00'],
    ],
    website: null,
    phone: ['8 (900) 033-15-17'],
    messengers: null,
    socialNetworks: ['https://vk.com/coffeezar96'],
    tags: { isDeliverAvailable: null, onPlace: null, hasPreorder: null },
    hasChildRoom: null,
    location: null,
    menu: null,
    photo: '/images/Чай. Кофе. Шоколад./photo/preview/preview.jpg',
    id: 21,
    logo: '/images/Чай. Кофе. Шоколад./photo/logo/logo.jpg',
    weekTime: {
      Mon: { startWork: '09:00', endWork: '22:00' },
      Tue: { startWork: '09:00', endWork: '22:00' },
      Wed: { startWork: '09:00', endWork: '22:00' },
      Thu: { startWork: '09:00', endWork: '22:00' },
      Fri: { startWork: '09:00', endWork: '22:00' },
      Sat: { startWork: '10:00', endWork: '22:00' },
      Sun: { startWork: '10:00', endWork: '22:00' },
    },
    mapLocation: {
      latitude: '56.797993945383226',
      longtitude: '61.32008661567394',
    },
  },
  {
    category: 'Фастфуд',
    name: 'ЧебурекМи',
    address: 'Ленинградская, 9Б',
    workTime: [['Пн-Вс', '11:00-21:00']],
    website: 'https://cheburek.me/zarechniy',
    phone: ['8 (922) 178-18-25'],
    messengers: null,
    socialNetworks: ['https://vk.com/cheburek_me_zarechny'],
    tags: { isDeliverAvailable: null, onPlace: null, hasPreorder: null },
    hasChildRoom: null,
    location: 'Справа от главного входа в ТЦ Галактика',
    menu: 'https://disk.yandex.ru/i/RDPWe3S7luMOtg',
    photo: '/images/ЧебурекМи/photo/preview/preview.jpg',
    id: 22,
    logo: '/images/ЧебурекМи/photo/logo/logo.jpg',
    weekTime: {
      Mon: { startWork: '11:00', endWork: '21:00' },
      Tue: { startWork: '11:00', endWork: '21:00' },
      Wed: { startWork: '11:00', endWork: '21:00' },
      Thu: { startWork: '11:00', endWork: '21:00' },
      Fri: { startWork: '11:00', endWork: '21:00' },
      Sat: { startWork: '11:00', endWork: '21:00' },
      Sun: { startWork: '11:00', endWork: '21:00' },
    },
    mapLocation: {
      latitude: '56.797215933727074',
      longtitude: '61.32070659920639',
    },
  },
  {
    category: 'Фастфуд',
    name: 'Шаурма 5',
    address: 'Ленинградская, 9',
    workTime: [['Пн-Вс', '10:00-22:00']],
    website: null,
    phone: ['8 (922) 178-18-25'],
    messengers: null,
    socialNetworks: null,
    tags: { isDeliverAvailable: null, onPlace: null, hasPreorder: null },
    hasChildRoom: null,
    location: 'Слева от главного входа в ТЦ Галактика',
    menu: null,
    photo: '/images/Шаурма 5/photo/preview/preview.jpg',
    id: 23,
    logo: '/images/Шаурма 5/photo/logo/logo.jpg',
    weekTime: {
      Mon: { startWork: '10:00', endWork: '22:00' },
      Tue: { startWork: '10:00', endWork: '22:00' },
      Wed: { startWork: '10:00', endWork: '22:00' },
      Thu: { startWork: '10:00', endWork: '22:00' },
      Fri: { startWork: '10:00', endWork: '22:00' },
      Sat: { startWork: '10:00', endWork: '22:00' },
      Sun: { startWork: '10:00', endWork: '22:00' },
    },
    mapLocation: {
      latitude: '56.79745845192555',
      longtitude: '61.32163637354908',
    },
  },
  {
    category: 'Фастфуд',
    name: 'Шаурма у Ромарка',
    address: 'Ленинградская, 24/2',
    workTime: [['Пн-Вс', '11:00-23:00']],
    website: null,
    phone: ['8 (967) 542‒16‒64'],
    messengers: 'Watsapp',
    socialNetworks: null,
    tags: { isDeliverAvailable: null, onPlace: null, hasPreorder: null },
    hasChildRoom: null,
    location: null,
    menu: null,
    photo: '/images/Шаурма у Ромарка/photo/preview/preview.jpg',
    id: 24,
    logo: '/images/Шаурма у Ромарка/photo/logo/logo.jpg',
    weekTime: {
      Mon: { startWork: '11:00', endWork: '23:00' },
      Tue: { startWork: '11:00', endWork: '23:00' },
      Wed: { startWork: '11:00', endWork: '23:00' },
      Thu: { startWork: '11:00', endWork: '23:00' },
      Fri: { startWork: '11:00', endWork: '23:00' },
      Sat: { startWork: '11:00', endWork: '23:00' },
      Sun: { startWork: '11:00', endWork: '23:00' },
    },
    mapLocation: {
      latitude: '56.79560907316132',
      longtitude: '61.31223701282077',
    },
  },
  {
    category: 'Фастфуд',
    name: 'Шашлыкоф',
    address: 'Ленинградская, 9',
    workTime: [['Круглосуточно']],
    website: null,
    phone: ['8 (922) 126-44-44'],
    messengers: null,
    socialNetworks: null,
    tags: { isDeliverAvailable: null, onPlace: null, hasPreorder: null },
    hasChildRoom: null,
    location:
      'С правой стороны между входом в первую и во вторую очередь ТЦ Галактика',
    menu: null,
    photo: '/images/Шашлыкоф/photo/preview/preview.jpg',
    id: 25,
    logo: '/images/Шашлыкоф/photo/logo/logo.jpg',
    weekTime: {
      Mon: 'Круглосуточно',
      Tue: 'Круглосуточно',
      Wed: 'Круглосуточно',
      Thu: 'Круглосуточно',
      Fri: 'Круглосуточно',
      Sat: 'Круглосуточно',
      Sun: 'Круглосуточно',
    },
    mapLocation: {
      latitude: '56.796850625933786',
      longtitude: '61.32042359469108',
    },
  },
  {
    category: 'Фастфуд',
    name: 'Шашлычный дворик',
    address: 'Набережная',
    workTime: [
      ['Пн-Чт', '10:00-22:00'],
      ['Пт-Вс', '11:00-23:00'],
    ],
    website: null,
    phone: ['8 (912) 280-70-00'],
    messengers: null,
    socialNetworks: ['https://vk.com/shahlykzarik'],
    tags: { isDeliverAvailable: null, onPlace: null, hasPreorder: null },
    hasChildRoom: null,
    location: null,
    menu: 'https://disk.yandex.ru/i/tMCN_xl7jPbMtA',
    photo: '/images/Шашлычный дворик/photo/preview/preview.jpg',
    id: 26,
    logo: '/images/Шашлычный дворик/photo/logo/logo.jpg',
    weekTime: {
      Mon: { startWork: '10:00', endWork: '22:00' },
      Tue: { startWork: '10:00', endWork: '22:00' },
      Wed: { startWork: '10:00', endWork: '22:00' },
      Thu: { startWork: '10:00', endWork: '22:00' },
      Fri: { startWork: '10:00', endWork: '22:00' },
      Sat: { startWork: '11:00', endWork: '23:00' },
      Sun: { startWork: '11:00', endWork: '23:00' },
    },
    mapLocation: {
      latitude: '56.81138692597922',
      longtitude: '61.312209160812394',
    },
  },
  {
    category: 'Фастфуд',
    name: 'Black pizza',
    address: 'Таховская, 8',
    workTime: [
      ['Пн-Чт', '10:30-22:00'],
      ['Пт-Сб', '10:30-23:00'],
      ['Вс', '10:30-22:00'],
    ],
    website: 'https://black-pizza.ru/',
    phone: ['8 (900) 200-55-36​'],
    messengers: null,
    socialNetworks: ['https://vk.com/blackpizza_ru'],
    tags: { isDeliverAvailable: null, onPlace: null, hasPreorder: null },
    hasChildRoom: null,
    location: null,
    menu: 'https://disk.yandex.ru/i/sinoPc7Qaef4KA',
    photo: '/images/Black pizza/photo/preview/preview.jpg',
    id: 27,
    logo: '/images/Black pizza/photo/logo/logo.jpg',
    weekTime: {
      Mon: { startWork: '10:30', endWork: '22:00' },
      Tue: { startWork: '10:30', endWork: '22:00' },
      Wed: { startWork: '10:30', endWork: '22:00' },
      Thu: { startWork: '10:30', endWork: '22:00' },
      Fri: { startWork: '10:30', endWork: '23:00' },
      Sat: { startWork: '10:30', endWork: '23:00' },
      Sun: { startWork: '10:30', endWork: '22:00' },
    },
    mapLocation: {
      latitude: '56.804212889136394',
      longtitude: '61.31702184924373',
    },
  },
  {
    category: 'Пекарня',
    name: 'Dolci Mamulino',
    address: ['9 Мая, 3', 'Алещенкова, 12'],
    workTime: [['Пн-Вс', '10:00-20:00']],
    website: null,
    phone: ['Алещенкова: 8 (982) 621-24-04', '9 Мая: 8 (919) 368-00-36'],
    messengers: null,
    socialNetworks: ['https://vk.com/dolci_mamulino'],
    tags: { isDeliverAvailable: null, onPlace: null, hasPreorder: null },
    hasChildRoom: null,
    location: null,
    menu: 0,
    photo: '/images/Dolci Mamulino/photo/preview/preview.jpg',
    id: 28,
    logo: '/images/Dolci Mamulino/photo/logo/logo.jpg',
    weekTime: {
      Mon: { startWork: '11:00', endWork: '20:00' },
      Tue: { startWork: '11:00', endWork: '20:00' },
      Wed: { startWork: '11:00', endWork: '20:00' },
      Thu: { startWork: '11:00', endWork: '20:00' },
      Fri: { startWork: '11:00', endWork: '20:00' },
      Sat: { startWork: '11:00', endWork: '20:00' },
      Sun: { startWork: '11:00', endWork: '20:00' },
    },
    mapLocation: {
      latitude: ['56.81471338780458', '56.79893029411217'],
      longtitude: ['61.31875206950084', '61.31244610184078'],
    },
  },
  {
    category: 'Кофейня',
    name: 'Lovi Buket',
    address: 'Кузнецова, 20',
    workTime: [
      ['Пн-Пт', '09:00-21:00'],
      ['Сб-Вс', '10:00-21:00'],
    ],
    website: null,
    phone: ['Алещенкова: 8 (982) 621-24-04', '9 Мая: 8 (919) 368-00-36'],
    messengers: null,
    socialNetworks: ['https://vk.com/lovibuket96'],
    tags: { isDeliverAvailable: 'Да', onPlace: null, hasPreorder: null },
    hasChildRoom: null,
    location: null,
    menu: null,
    photo: '/images/Lovi Buket/photo/preview/preview.jpg',
    id: 29,
    logo: '/images/Lovi Buket/photo/logo/logo.jpg',
    weekTime: {
      Mon: { startWork: '09:00', endWork: '21:00' },
      Tue: { startWork: '09:00', endWork: '21:00' },
      Wed: { startWork: '09:00', endWork: '21:00' },
      Thu: { startWork: '09:00', endWork: '21:00' },
      Fri: { startWork: '09:00', endWork: '21:00' },
      Sat: { startWork: '10:00', endWork: '21:00' },
      Sun: { startWork: '10:00', endWork: '21:00' },
    },
    mapLocation: {
      latitude: '56.7961609041698',
      longtitude: '61.320646184172325',
    },
  },
  {
    category: 'Фастфуд',
    name: 'Osaka',
    address: 'Ленинградская, 12',
    workTime: [['Пн-Вс', '11:00-23:00']],
    website: 'https://osakazar.ru/',
    phone: ['8 (982) 730-86-96'],
    messengers: null,
    socialNetworks: ['https://vk.com/osaka_sushi_bar'],
    tags: { isDeliverAvailable: null, onPlace: null, hasPreorder: null },
    hasChildRoom: null,
    location: null,
    menu: 'https://disk.yandex.ru/i/V__y9PzkGp0F8A',
    photo: '/images/Osaka/photo/preview/preview.jpg',
    id: 30,
    logo: '/images/Osaka/photo/logo/logo.jpg',
    weekTime: {
      Mon: { startWork: '11:00', endWork: '23:00' },
      Tue: { startWork: '11:00', endWork: '23:00' },
      Wed: { startWork: '11:00', endWork: '23:00' },
      Thu: { startWork: '11:00', endWork: '23:00' },
      Fri: { startWork: '11:00', endWork: '23:00' },
      Sat: { startWork: '11:00', endWork: '23:00' },
      Sun: { startWork: '11:00', endWork: '23:00' },
    },
    mapLocation: {
      latitude: '56.79806169440342',
      longtitude: '61.320073786390196',
    },
  },
  {
    category: 'Кафе',
    name: 'Panda',
    address: 'Кузнецова, 20',
    workTime: [
      ['Пн', 'Закрыто'],
      ['Вт-Вс', '11:00-22:00'],
    ],
    website: null,
    phone: ['8 (992) 345-65-09'],
    messengers: null,
    socialNetworks: null,
    tags: { isDeliverAvailable: null, onPlace: null, hasPreorder: null },
    hasChildRoom: null,
    location: null,
    menu: 'https://disk.yandex.ru/i/Oyqv9rb0rKOcFA',
    photo: '/images/Panda/photo/preview/preview.jpg',
    id: 31,
    logo: '/images/Panda/photo/logo/logo.jpg',
    weekTime: {
      Mon: 'Закыто',
      Tue: { startWork: '11:00', endWork: '22:00' },
      Wed: { startWork: '11:00', endWork: '22:00' },
      Thu: { startWork: '11:00', endWork: '22:00' },
      Fri: { startWork: '11:00', endWork: '22:00' },
      Sat: { startWork: '11:00', endWork: '22:00' },
      Sun: { startWork: '11:00', endWork: '22:00' },
    },
    mapLocation: {
      latitude: '56.79604237374927',
      longtitude: '61.32060782263807',
    },
  },
  {
    category: 'Ресторан',
    name: 'Riviera',
    address: 'Клары Цеткин, 22',
    workTime: [
      ['Пн-Чт', '12:00-22:00'],
      ['Пт', '11:00-00:00'],
      ['Сб-Вс', '12:00-04:00'],
    ],
    website: 'https://riviera96.club/',
    phone: ['8 (343) 777-87-90', '8 (343) 286-87-90', '8 (922) 168-15-08'],
    messengers: null,
    socialNetworks: [
      'https://vk.com/rivierazar',
      'https://t.me/+Of-tklln3SY5MTBi',
    ],
    tags: { isDeliverAvailable: null, onPlace: null, hasPreorder: null },
    hasChildRoom: null,
    location: null,
    menu: 'Летнее меню https://postimg.cc/JHK4XXvW Барная карта https://postimg.cc/sBfPzVyY Детское меню https://postimg.cc/fSdmCyjN',
    photo: '/images/Riviera/photo/preview/preview.jpg',
    id: 32,
    logo: '/images/Riviera/photo/logo/logo.jpg',
    weekTime: {
      Mon: { startWork: '12:00', endWork: '22:00' },
      Tue: { startWork: '12:00', endWork: '22:00' },
      Wed: { startWork: '12:00', endWork: '22:00' },
      Thu: { startWork: '12:00', endWork: '22:00' },
      Fri: { startWork: '11:00', endWork: '24:00' },
      Sat: { startWork: '12:00', endWork: '04:00' },
      Sun: { startWork: '12:00', endWork: '04:00' },
    },
    mapLocation: {
      latitude: '56.808202159949225',
      longtitude: '61.31287585607039',
    },
  },
  {
    category: 'Фастфуд',
    name: 'Royal kebab',
    address: 'Ленинградская, 9',
    workTime: [['Круглосуточно']],
    website: null,
    phone: ['8 (904) 162-64-84'],
    messengers: null,
    socialNetworks: null,
    tags: { isDeliverAvailable: 'Да', onPlace: null, hasPreorder: null },
    hasChildRoom: null,
    location: 'С правой стороны задней парковки у ТЦ Галактика',
    menu: 'https://disk.yandex.ru/i/kLzmrwm7VcYp3g',
    photo: '/images/Royal kebab/photo/preview/preview.jpg',
    id: 33,
    logo: '/images/Royal kebab/photo/logo/logo.jpg',
    weekTime: {
      Mon: 'Круглосуточно',
      Tue: 'Круглосуточно',
      Wed: 'Круглосуточно',
      Thu: 'Круглосуточно',
      Fri: 'Круглосуточно',
      Sat: 'Круглосуточно',
      Sun: 'Круглосуточно',
    },
    mapLocation: {
      latitude: '56.79617660673572',
      longtitude: '61.32118447588262',
    },
  },
  {
    category: 'Кафе',
    name: 'Момомия',
    address: 'Кузнецова, 11',
    workTime: [['Пн-Вс', '10:00-22:00']],
    website: null,
    phone: ['8 (993) 105-50-09'],
    messengers: null,
    socialNetworks: null,
    tags: { isDeliverAvailable: null, onPlace: null, hasPreorder: null },
    hasChildRoom: null,
    location: null,
    menu: null,
    photo: '/images/Момомия/photo/preview/preview.jpg',
    id: 34,
    logo: '/images/Момомия/photo/logo/logo.jpg',
    weekTime: {
      Mon: { startWork: '10:00', endWork: '22:00' },
      Tue: { startWork: '10:00', endWork: '22:00' },
      Wed: { startWork: '10:00', endWork: '22:00' },
      Thu: { startWork: '10:00', endWork: '22:00' },
      Fri: { startWork: '10:00', endWork: '22:00' },
      Sat: { startWork: '10:00', endWork: '22:00' },
      Sun: { startWork: '10:00', endWork: '22:00' },
    },
    mapLocation: {
      latitude: '56.79935318240195',
      longtitude: '61.31627209851982',
    },
  },
  {
    category: 'Столовая',
    name: 'Столовая №3',
    address: '4 энергоблок',
    workTime: [
      ['Пн-Пт', '07:00-18:30'],
      ['Сб-Вс', '10:30-18:30'],
    ],
    website: null,
    phone: ['8 (993) 105-50-09'],
    messengers: null,
    socialNetworks: null,
    tags: { isDeliverAvailable: null, onPlace: null, hasPreorder: null },
    hasChildRoom: null,
    location: null,
    menu: null,
    photo: '/images/Столовая №3/photo/preview/preview.jpg',
    id: 35,
    logo: '/images/Столовая №3/photo/logo/logo.jpg',
    weekTime: {
      Mon: { startWork: '7:00', endWork: '18:30' },
      Tue: { startWork: '7:00', endWork: '18:30' },
      Wed: { startWork: '7:00', endWork: '18:30' },
      Thu: { startWork: '7:00', endWork: '18:30' },
      Fri: { startWork: '7:00', endWork: '18:30' },
      Sat: { startWork: '10:30', endWork: '18:30' },
      Sun: { startWork: '10:30', endWork: '18:30' },
    },
    mapLocation: {
      latitude: '56.79935318240195',
      longtitude: '61.31627209851982',
    },
  },
  {
    category: 'Готовая еда',
    name: 'Кулинария',
    address: 'Ленинградская, 29',
    workTime: [['Пн-Вс', '10:00-20:00']],
    website: null,
    phone: ['8 (993) 105-50-09'],
    messengers: null,
    socialNetworks: null,
    tags: { isDeliverAvailable: null, onPlace: null, hasPreorder: null },
    hasChildRoom: null,
    location: null,
    menu: null,
    photo: '/images/Кулинария/photo/preview/preview.jpg',
    id: 36,
    logo: '/images/Кулинария/photo/logo/logo.jpg',
    weekTime: {
      Mon: { startWork: '10:00', endWork: '20:00' },
      Tue: { startWork: '10:00', endWork: '20:00' },
      Wed: { startWork: '10:00', endWork: '20:00' },
      Thu: { startWork: '10:00', endWork: '20:00' },
      Fri: { startWork: '10:00', endWork: '20:00' },
      Sat: { startWork: '10:00', endWork: '20:00' },
      Sun: { startWork: '10:00', endWork: '20:00' },
    },
    mapLocation: {
      latitude: '56.7948366850175',
      longtitude: '61.31075515032369',
    },
  },
];

function getPlaces() {
  return places;
}

export { getPlaces };
