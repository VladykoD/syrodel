export default {
  items: [
    {
      type: 'mainPage',
      content: {
        title: 'Натуральные сыры и&nbsp;молочные продукты оптом',
        mainImage: {
          default: ['./tmp/main@2x.jpg']
        },
        asideBlock: {
          caption: 'Продукция',
          link: './products',
          image: {
            default: ['./tmp/production@2x.jpg']
          },
        },
      },
    },
    {
      type: 'mainAdvantages',
      content: {
        title: 'Делаем с&nbsp;любовью и&nbsp;заботой',
        description: {
          items: [{
            type: 'html',
            content: '<p>Уже 90&nbsp;лет мы&nbsp;производим молочную продукцию, бережно храня традиции и&nbsp;любовь к&nbsp;своему делу.</p><p>При изготовлении продуктов мы&nbsp;не&nbsp;используем красители, уселители вкуса и&nbsp;консерванты. Наше качество&nbsp;&mdash; это результат традиций, строгого соблюдения технологии и&nbsp;профессионального мастерства сыроделов. Вся продукция сертифицирована ГОССТАНДАРТ РОССИИ и&nbsp;имеет все необходимые документы.</p>'
          }]
        },
        advantagesList: [
          {
            key: 'a1',
            svgIcon: 'cheese',
            title: 'Широкий ассортимент',
            description: 'Более 30&nbsp;наименований молочной продукции, включая сыры с&nbsp;добавками и&nbsp;сухую молочную сыворотку.'
          },
          {
            key: 'a2',
            svgIcon: 'trustworthy',
            title: 'Вкусно и&nbsp;качественно',
            description: 'Используем только свежее молоко с&nbsp;ферм Ставрополья. Каждая партия проходит биохимический анализ по&nbsp;10-ти параметрам.'
          },
          {
            key: 'a3',
            svgIcon: 'boxes',
            title: 'Всегда в&nbsp;наличии',
            description: 'Свежие продукты в&nbsp;необходимом количестве на&nbsp;складе.'
          },
          {
            key: 'a4',
            svgIcon: 'hand',
            title: 'Индивидуальный подход',
            description: 'Мы&nbsp;&mdash; производители продукции, поэтому предлагаем более выгодные условия сотрудничества.'
          },
        ]
      },
    },
    {
      type: 'mainCatalog',
      content: {
        title: 'Каталог сыров',
        catalogList: [
          {
            key: 'item1',
            title: 'Сыры',
            link: 'cheese1',
            amount: 9,
            mainImage: {
              default: ['./tmp/catalog@2x.jpg']
            },
            minorImage: {
              default: ['./tmp/manufacture1@2x.jpg']
            }
          },
          {
            key: 'item2',
            title: 'молокосодержащие продукты с&nbsp;змж',
            link: 'cheese2',
            amount: 11,
            mainImage: {
              default: ['./tmp/cheese1@1x.jpg']
            },
            minorImage: {
              default: ['./tmp/main@1x.jpg']
            }
          },
          {
            key: 'item3',
            title: 'Сухая сыворотка',
            link: 'cheese3',
            amount: 2,
            mainImage: {
              default: ['./tmp/production@2x.jpg']
            },
            minorImage: {
              default: ['./tmp/manufacture2@2x.jpg']
            }
          },
          {
            key: 'item4',
            title: 'Молочные продукты',
            link: 'cheese4',
            amount: 6,
            mainImage: {
              default: ['./tmp/production@1x.jpg']
            },
            minorImage: {
              default: ['./tmp/production@1x.jpg']
            }
          },
          {
            key: 'item5',
            title: 'Масло и&nbsp;спреды',
            link: 'cheese5',
            amount: 4,
            mainImage: {
              default: ['./tmp/manufacture1@2x.jpg']
            },
            minorImage: {
              default: ['./tmp/catalog-bg@1x.jpg']
            }
          },
        ]
      },
    },
    {
      type: 'mainJournal',
      content:  {
        title: 'Каталог продукции 2021',
        description: {
          items: [{
            type: 'html',
            content: '<a class="anchor-link" href="#contacts">Заполните форму обратной связи</a>, позвоните или <a href="mailto:syrodel@mail.ru">напишите нам</a>, чтобы узнать актуальные цены на&nbsp;интересующую вас продукцию.'
          }]
        },
        journalImage: {
          default: ['./tmp/catalog@1x.jpg', './tmp/catalog@2x.jpg'],
          webp: ['./tmp/catalog@1x.webp', './tmp/catalog@2x.webp'],
          alt: 'Каталог продукции 2021',
        },
        journalBg: {
          default: ['./tmp/catalog-bg@1x.jpg', './tmp/catalog-bg@2x.jpg'],
          webp: ['./tmp/catalog-bg@1x.webp', './tmp/catalog-bg@2x.webp'],
          alt: '',
        },
        onlineLink: {
          text: 'онлайн-каталог',
          link: '#'
        },
        downloadLink: {
          text: 'печатный каталог',
          size: '(30 МБ.)',
          link: '#',
          extension: 'PDF',
        }
      },
    },
    {
      type: 'mainProducts',
      content: {
        title: 'Наша продукция',
        allProducts: 'вся продукция',
        productsArray: [
          {
            id: 1,
            key: 'prod1',
            title: 'Молокосодержащий продукт с&nbsp;ЗМЖ, произведенный по&nbsp;технологии сыра, с&nbsp;ароматом сливок',
            description: {
              items: [{
                type: 'html',
                content: '<p>Один из&nbsp;самых популярных продуктов. Сливочный вкус сыра подчеркивает нежную текстуру и&nbsp;не&nbsp;никого не&nbsp;оставит равнодушным.</p>'
              }]
            },
            color: '#dceced',
            details: [{
              caption: 'килограмм',
              value: '7.5 &plusmn; 0.3',
            }, {
              caption: 'м.д.ж.',
              value: '50%',
            }, {
              caption: 'срок реализации',
              value: '60&nbsp;сут.',
            }],
            image: {
              default: ['./tmp/cheese1@1x.jpg', './tmp/cheese1@2x.jpg'],
              webp: ['./tmp/cheese1@1x.webp', './tmp/cheese1@2x.webp'],
              alt: '',
            },
            aboutLink: {
              title: 'Подробнее о продукте',
              link: '#'
            }
          },
          {
            id: 2,
            key: 'prod2',
            title: 'Сыр &laquo;Русская Моцарела&raquo;, &laquo;Сулугуни&raquo;',
            description: {
              items: [{
                type: 'html',
                content: '<p>Мягкие сычужные рассольные сыры приятно удивят вас многообразием вкусовой палитры. Они традиционно употребляются ежедневно, как утром так и&nbsp;вечером. Хорошо гармонируют с&nbsp;молодой зеленью. Белки, жиры, ферменты и&nbsp;углеводы в&nbsp;этих сырах находятся в&nbsp;гидроизолированном состоянии, что улучшает перистальтику кишечника, очищает его от&nbsp;шлаков, гнилостной и&nbsp;патогенной микрофлоры.</p>'
              }]
            },
            color: '#dceced',
            details: [{
              caption: 'килограмм',
              value: '1/14',
            }, {
              caption: 'жирность',
              value: '45%',
            }, {
              caption: 'срок реализации',
              value: '15&nbsp;сут.',
            }],
            image: {
              default: ['./tmp/cheese1@1x.jpg', './tmp/cheese1@2x.jpg'],
              webp: ['./tmp/cheese1@1x.webp', './tmp/cheese1@2x.webp'],
              alt: '',
            },
            aboutLink: {
              title: 'Подробнее о продукте',
              link: '#'
            }
          },
          {
            id: 3,
            key: 'prod3',
            title: 'Сыр &laquo;Витязь&raquo;',
            description: {
              items: [{
                type: 'html',
                content: '<p>Твердый сычужный сыр&nbsp;50% жира в&nbsp;сухом веществе, тесто нежное, на&nbsp;разрезе глазки неправильной формы. Вкус выраженный сырный.</p>'
              }]
            },
            color: '#dceced',
            details: [{
              caption: 'килограмм',
              value: '7,5',
            }, {
              caption: 'жирность',
              value: '50%',
            }, {
              caption: 'срок реализации',
              value: '30&nbsp;сут.',
            }],
            image: {
              default: ['./tmp/cheese1@1x.jpg', './tmp/cheese1@2x.jpg'],
              webp: ['./tmp/cheese1@1x.webp', './tmp/cheese1@2x.webp'],
              alt: '',
            },
            aboutLink: {
              title: 'Подробнее о продукте',
              link: '#'
            }
          }
        ]
      },
    },
    {
      type: 'mainDelivery',
      content:  {
        title: 'Доставка',
        description: {
          items: [{
            type: 'html',
            content: '<p>Доставить продукцию можно в&nbsp;любой регион удобным для вас способом. Сроки определяются дальностью конечной точки и&nbsp;способом транспортировки.</p>'
          }]
        },
        deliveryList: [
          {
            key: 'd1',
            title: 'В&nbsp;наших рефрежераторах',
            description: 'На&nbsp;заводе содержится и&nbsp;обслуживается 100&nbsp;000 единиц грузовых автомобилей с&nbsp;рефрижератороами. Возможности доставки зависят от&nbsp;объемов и&nbsp;дальности пути и&nbsp;обсуждаются в&nbsp;частном порядке.'
          },
          {
            key: 'd2',
            title: 'Транспортной компанией',
            description: 'Выбирайте паллетные перевозки с&nbsp;гарантией температурной сохранности груза.'
          },
          {
            key: 'd3',
            title: 'Вашим транспортом',
            description: 'Актуален для перевозок на&nbsp;небольшие расстояния. Мы&nbsp;готовы встретить ваш транспорт и&nbsp;погрузить продукцию.'
          },
        ]
      },
    },
    {
      type: 'mainManufacture',
      content: {
        title: 'Как мы&nbsp;изготавливаем продукцию',
        description: {
          items: [{
            type: 'html',
            content: '<p>Сыродел является крупнейшим предприятием сыроваренной отрасли в&nbsp;России.</p><p>Завод оснащен передовым технологическим оборудованием ведущих мировых производителей из&nbsp;Чехии. Мы&nbsp;осуществляем строгий контроль всех этапов производства по&nbsp;международным стандартам. На&nbsp;нашем предприятии с&nbsp;2016 года внедрена и&nbsp;сертифицирована система менеджмента безопасности пищевой продукции по&nbsp;ГОСТ Р&nbsp;ИСО 2200-2007.</p><p>В&nbsp;связи с&nbsp;интенсивно развивающимся производством мы&nbsp;расширили и&nbsp;дооборудовали собственную исследовательскую лабораторию для контроля качества на&nbsp;всех этапах производства.</p>'
          }]
        },
        asideImage: {
          default: ['./tmp/manufacture1@1x.jpg', './tmp/manufacture1@2x.jpg'],
          webp: ['./tmp/manufacture1@1x.webp', './tmp/manufacture1@2x.webp'],
          alt: '',
        },
        mainImage: {
          default: ['./tmp/manufacture2@1x.jpg', './tmp/manufacture2@2x.jpg'],
          webp: ['./tmp/manufacture2@1x.webp', './tmp/manufacture2@2x.webp'],
          alt: '',
        },
        linksArray: [
          {
            title: 'Производство',
            link: '#'
          },
          {
            title: 'История завода',
            link: '#'
          },
          {
            title: 'Награды',
            link: '#'
          },
          {
            title: 'Магазины',
            link: '#'
          },
        ],
        chart: {
          title: 'из&nbsp;150 тонн <br/>молока в&nbsp;сутки',
          chartArray: [
            {
              caption: 'Сыры',
              value: '15 тонн',
            },
            {
              caption: 'Сухая сыворотка',
              value: '8 тонн',
            },
            {
              caption: 'Сырные продукты',
              value: '5 тонн',
            },
            {
              caption: 'Молочные продукты',
              value: '2 тонн',
            },
            {
              caption: 'Масло и спреды',
              value: '1 тонна',
            }
          ]
        }
      },
    },
    {
      type: 'mainContacts',
      content:  {
        title: 'Свяжитесь с нами',
        address: {
          region: 'Ставропольский край',
          city: 'г. Ипатово,',
          street: 'ул.&nbsp;Заречная 38',
          coordinate: [45.728367,42.930793],
        },

        form: {
          action: '/careers/form',
          title: 'Мы&nbsp;ответим на&nbsp;любой вопрос',
          formFields: [
            {
              id: 'fio',
              name: 'fio',
              label: 'ФИО',
              type: 'text',
              required: true,
            },
            {
              id: 'company',
              name: 'company',
              label: 'Организация',
              type: 'text',
              required: true,
            },
            {
              id: 'phone',
              name: 'phone',
              label: 'Телефон',
              type: 'phone',
              required: true,
            },
            {
              id: 'message',
              name: 'message',
              label: 'Сообщение',
              type: 'textarea',
              required: false,
            },
          ],
          agreement: {
            items: [{
              type: 'html',
              content: 'Нажимая кнопку отправки, вы&nbsp;соглашаетесь <a href="#">с&nbsp;условиями политики конфиденциальности</a>.'
            }]
          },
          submitBtn: 'Отправить'
        }
      }
    },
  ]
}
