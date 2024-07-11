export default {
  items: [
    {
      type: 'productsTop',
      content: {
        title: 'hero image',
        image: {
          default: ['./tmp/catalog_hero@2x.jpg']
        },
      }
    },
    {
      type: 'productsFilter',
      content: {
        title: 'Продукция',
        infoLink: {
          text: 'ИНФО-ЛИСТ ВЫБРАННОЙ ПРОДУКЦИИ',
          link: '#',
          extension: 'PDF',
        },
        quantityProducts: 'Ещё 7 продуктов',
        action: '/careers/form',
        filters: [
          {
            name: 'все',
            texts: [
              'ВСЕ ВСЕ ВСЕ ВСЕ  В&nbsp;сырах содержатся витамины групп A, D, E, В, РР&nbsp;и&nbsp;С, они возбуждают аппетит и&nbsp;благотворно влияют на&nbsp;пищеварение.',
              'ВСЕ ВСЕ ВСЕ ВСЕ В&nbsp;сырах содержатся витамины групп A, D, E, В, РР&nbsp;и&nbsp;С, они возбуждают аппетит и&nbsp;благотворно влияют на&nbsp;пищеварение.',
              'ВСЕ ВСЕ ВСЕ ВСЕ В&nbsp;сырах содержатся витамины групп A, D, E, В, РР&nbsp;и&nbsp;С, они возбуждают аппетит и&nbsp;благотворно влияют на&nbsp;пищеварение.',
              'ВСЕ ВСЕ ВСЕ ВСЕ До&nbsp;времён Петра Первого сыры в&nbsp;России готовили без тепловой обработки, отсюда и&nbsp;название продукта&nbsp;&mdash; сыр, то&nbsp;есть, сырой.',
              'ВСЕ ВСЕ ВСЕ ВСЕ До&nbsp;времён Петра Первого сыры в&nbsp;России готовили без тепловой обработки, отсюда и&nbsp;название продукта&nbsp;&mdash; сыр, то&nbsp;есть, сырой.',
              'ВСЕ ВСЕ ВСЕ ВСЕ До&nbsp;времён Петра Первого сыры в&nbsp;России готовили без тепловой обработки, отсюда и&nbsp;название продукта&nbsp;&mdash; сыр, то&nbsp;есть, сырой.'
            ],
            filter: '',
            subFilter: [],
          }, {
            name: 'сыры',
            texts: [
              'СЫРЫ СЫРЫ СЫРЫ СЫРЫ В&nbsp;сырах содержатся витамины групп A, D, E, В, РР&nbsp;и&nbsp;С, они возбуждают аппетит и&nbsp;благотворно влияют на&nbsp;пищеварение.',
              'СЫРЫ СЫРЫ СЫРЫ СЫРЫ До&nbsp;времён Петра Первого сыры в&nbsp;России готовили без тепловой обработки, отсюда и&nbsp;название продукта&nbsp;&mdash; сыр, то&nbsp;есть, сырой.'
            ],
            filter: 'type1',
            subFilter: [
              {
              name: 'полутвердые',
              filter: 'type1_1'
            },{
              name: 'рассольные',
              filter: 'type1_2'
            },{
              name: 'плавленные',
              filter: 'type1_3'
            },{
              name: 'с добавками',
              filter: 'type1_4'
            },{
              name: 'вегетрианские',
              filter: 'type1_5'
            }
            ]
          }, {
            name: 'сухая сыворотка',
            filter: 'type2',
          }, {
            name: 'молочные продукты',
            texts: [
              'МОЛОЧКА МОЛОЧКА МОЛОЧКА В&nbsp;сырах содержатся витамины групп A, D, E, В, РР&nbsp;и&nbsp;С, они возбуждают аппетит и&nbsp;благотворно влияют на&nbsp;пищеварение.',
              'МОЛОЧКА МОЛОЧКА МОЛОЧКА До&nbsp;времён Петра Первого сыры в&nbsp;России готовили без тепловой обработки, отсюда и&nbsp;название продукта&nbsp;&mdash; сыр, то&nbsp;есть, сырой.'
            ],
            filter: 'type3',
          }, {
            name: 'масло и спреды',
            filter: 'type4',
          }, {
            name: 'МОЛОКОСОДЕРЖАЩИЕ ПРОДУКТЫ С ЗМЖ',
            filter: 'type5',
          }
        ],
        products: [
          {
            id: 'prod_1',
            filterId: 'type1',
            subFilter: ['type1_1', 'type1_2'],
            type: "card",
            name: "Заполнен Сыр &laquo;Золото Ставрополья&raquo; с&nbsp;томатами и&nbsp;базиликом",
            color: "#FDEBC3",
            image: {
              default: ['./tmp/production@1x.jpg'],
            },
            details: [{
              caption: 'грамм',
              value: '1705 &plusmn; 10.3',
            }, {
              caption: 'м.д.ж.',
              value: '100%',
            }, {
              caption: 'срок реализации',
              value: '160&nbsp;сут.',
            }],
            techId: 'ТУ 9225-069-0419710-11114',
            additionalInfo: [
              {
                title: 'Характеристики',
                info: [
                  {
                    caption: 'Жирность',
                    value: '10 %'
                  },
                  {
                    caption: 'Срок реализации',
                    value: '220 суток'
                  },
                  {
                    caption: 'Вес единицы',
                    value: '1,5 кг.'
                  },
                ]
              },
              {
                title: 'Описание',
                text: '<p>Сыр "Золото Ставрополья" с томатами и базиликом - это настоящая находка для любителей сырных деликатесов. Этот сыр не только обладает нежным и кремовым вкусом, но и прекрасно дополняется сочными томатами и ароматным базиликом.\n' +
                  '<br>' +
                  'Каждый кусочек этого сыра - настоящее золото на вашем столе. Он отличается особой мягкостью и плавностью, которые достигаются благодаря специальной технологии производства. Благодаря этому, сыр "Золото Ставрополья" с томатами и базиликом прекрасно подходит для приготовления различных блюд - от закусок до горячих блюд.\n' +
                  '</p><p>' +
                  'Но самое главное, что этот сыр обладает богатым и насыщенным вкусом, который не оставит равнодушным ни одного гурмана. Томаты и базилик добавляют в сыр свежести и аромата, делая его еще более привлекательным для тех, кто ценит качественную и вкусную еду.\n' +
                  '<br>' +
                  'Если вы хотите попробовать настоящий сырный шедевр, то обязательно попробуйте сыр "Золото Ставрополья" с томатами и базиликом. Это будет настоящим открытием для вас и вашей семьи!</p>'
              },
              {
                title: 'Состав',
                text: '<ul><li>молоко коровье пастеризованное</li><li>закваска молочнокислых бактерий</li><li>ферменты микробного происхождения</li><li>томаты</li><li>базилик</li><li>соль</li><li>молочный жир</li></ul>'
              }
            ]
          },
          {
            id: 'prod_2',
            filterId: 'type1',
            subFilter: ['type1_3', 'type1_4'],
            type: "card",
            name: "Сыр Дружба",
            color: "#E4EFF5",
            image: {
              default: ['./tmp/cheese1@1x.jpg', './tmp/cheese1@2x.jpg'],
            },
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
            techId: 'ТУ 9225-069-0419710-14',
            additionalInfo: [
              {
                title: 'Характеристики',
                info: [
                  {
                    caption: 'Жирность',
                    value: '40 %'
                  },
                  {
                    caption: 'Срок реализации',
                    value: '120 суток'
                  },
                  {
                    caption: 'Вес единицы',
                    value: '7,5 кг.'
                  },
                ]
              },
              {
                title: 'Описание',
                text: 'Сыр'
              },
              {
                title: 'Состав',
                text: '100% cыр! Самый лучший.'
              }
            ]
          },
          {
            id: 'prod_4',
            filterId: 'type1',
            subFilter: ['type1_3', 'type1_4'],
            type: "card",
            name: "Сыр Дружба",
            color: "#E4EFF5",
            image: {
              default: ['./tmp/cheese1@1x.jpg', './tmp/cheese1@2x.jpg'],
            },
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
            techId: 'ТУ 9225-069-0419710-14',
            additionalInfo: [
              {
                title: 'Характеристики',
                info: [
                  {
                    caption: 'Жирность',
                    value: '40 %'
                  },
                  {
                    caption: 'Срок реализации',
                    value: '120 суток'
                  },
                  {
                    caption: 'Вес единицы',
                    value: '7,5 кг.'
                  },
                ]
              },
              {
                title: 'Описание',
                text: 'Сыр'
              },
              {
                title: 'Состав',
                text: '100% cыр! Самый лучший.'
              }
            ]
          },
          {
            id: 'prod_5',
            filterId: 'type2',
            subFilter: [],
            type: "card",
            name: "Сыр &laquo;Золото Ставрополья&raquo; с&nbsp;томатами и&nbsp;базиликом",
            color: "#FDEBC3",
            image: {
              default: ['./tmp/production@1x.jpg'],
            },
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
            techId: 'ТУ 9225-069-0419710-14',
            additionalInfo: [
              {
                title: 'Характеристики',
                info: [
                  {
                    caption: 'Жирность',
                    value: '40 %'
                  },
                  {
                    caption: 'Срок реализации',
                    value: '120 суток'
                  },
                  {
                    caption: 'Вес единицы',
                    value: '7,5 кг.'
                  },
                ]
              },
              {
                title: 'Описание',
                text: 'Сыр'
              },
              {
                title: 'Состав',
                text: '100% cыр! Самый лучший.'
              }
            ]
          },
          {
            id: 'prod_6',
            filterId: 'type3',
            subFilter: [],
            type: "card",
            name: "Сыр &laquo;Золото Ставрополья&raquo; с&nbsp;томатами и&nbsp;базиликом",
            color: "#FDEBC3",
            image: {
              default: ['./tmp/production@1x.jpg'],
            },
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
            techId: 'ТУ 9225-069-0419710-14',
            additionalInfo: [
              {
                title: 'Характеристики',
                info: [
                  {
                    caption: 'Жирность',
                    value: '40 %'
                  },
                  {
                    caption: 'Срок реализации',
                    value: '120 суток'
                  },
                  {
                    caption: 'Вес единицы',
                    value: '7,5 кг.'
                  },
                ]
              },
              {
                title: 'Описание',
                text: 'Сыр'
              },
              {
                title: 'Состав',
                text: '100% cыр! Самый лучший.'
              }
            ]
          },
          {
            id: 'prod_7',
            filterId: 'type4',
            subFilter: [],
            type: "card",
            color: "#EFE7F9",
            name: 'Сыр &laquo;Российский&raquo;',
            image: {
              default: ['./tmp/manufacture2@1x.jpg'],
            },
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
            techId: 'ТУ 9225-069-0419710-14',
            additionalInfo: [
              {
                title: 'Характеристики',
                info: [
                  {
                    caption: 'Жирность',
                    value: '40 %'
                  },
                  {
                    caption: 'Срок реализации',
                    value: '120 суток'
                  },
                  {
                    caption: 'Вес единицы',
                    value: '7,5 кг.'
                  },
                ]
              },
              {
                title: 'Описание',
                text: 'Сыр'
              },
              {
                title: 'Состав',
                text: '100% cыр! Самый лучший.'
              }
            ]
          },
          {
            id: 'prod_9',
            filterId: 'type5',
            subFilter: [],
            type: "card",
            name: "Сыр &laquo;Золото Ставрополья&raquo; с&nbsp;томатами и&nbsp;базиликом",
            color: "#FDEBC3",
            image: {
              default: ['./tmp/production@1x.jpg'],
            },
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
            techId: 'ТУ 9225-069-0419710-14',
            additionalInfo: [
              {
                title: 'Характеристики',
                info: [
                  {
                    caption: 'Жирность',
                    value: '40 %'
                  },
                  {
                    caption: 'Срок реализации',
                    value: '120 суток'
                  },
                  {
                    caption: 'Вес единицы',
                    value: '7,5 кг.'
                  },
                ]
              },
              {
                title: 'Описание',
                text: 'Сыр'
              },
              {
                title: 'Состав',
                text: '100% cыр! Самый лучший.'
              }
            ]
          },
          {
            id: 'prod_10',
            filterId: 'type1',
            subFilter: ['type1_1', 'type1_2'],
            type: "card",
            name: "Сыр &laquo;Золото Ставрополья&raquo; с&nbsp;томатами и&nbsp;базиликом",
            color: "#FDEBC3",
            image: {
              default: ['./tmp/production@1x.jpg'],
            },
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
            techId: 'ТУ 9225-069-0419710-14',
            additionalInfo: [
              {
                title: 'Характеристики',
                info: [
                  {
                    caption: 'Жирность',
                    value: '40 %'
                  },
                  {
                    caption: 'Срок реализации',
                    value: '120 суток'
                  },
                  {
                    caption: 'Вес единицы',
                    value: '7,5 кг.'
                  },
                ]
              },
              {
                title: 'Описание',
                text: 'Сыр'
              },
              {
                title: 'Состав',
                text: '100% cыр! Самый лучший.'
              }
            ]
          },
          {
            id: 'prod_11',
            filterId: 'type1',
            subFilter: ['type1_3', 'type1_4'],
            type: "card",
            name: "Сыр Дружба",
            color: "#E4EFF5",
            image: {
              default: ['./tmp/cheese1@1x.jpg', './tmp/cheese1@2x.jpg'],
            },
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
            techId: 'ТУ 9225-069-0419710-14',
            additionalInfo: [
              {
                title: 'Характеристики',
                info: [
                  {
                    caption: 'Жирность',
                    value: '40 %'
                  },
                  {
                    caption: 'Срок реализации',
                    value: '120 суток'
                  },
                  {
                    caption: 'Вес единицы',
                    value: '7,5 кг.'
                  },
                ]
              },
              {
                title: 'Описание',
                text: 'Сыр'
              },
              {
                title: 'Состав',
                text: '100% cыр! Самый лучший.'
              }
            ]
          },
          {
            id: 'prod_13',
            filterId: 'type1',
            subFilter: ['type1_3', 'type1_4'],
            type: "card",
            name: "Сыр Дружба",
            color: "#E4EFF5",
            image: {
              default: ['./tmp/cheese1@1x.jpg', './tmp/cheese1@2x.jpg'],
            },
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
            techId: 'ТУ 9225-069-0419710-14',
            additionalInfo: [
              {
                title: 'Характеристики',
                info: [
                  {
                    caption: 'Жирность',
                    value: '40 %'
                  },
                  {
                    caption: 'Срок реализации',
                    value: '120 суток'
                  },
                  {
                    caption: 'Вес единицы',
                    value: '7,5 кг.'
                  },
                ]
              },
              {
                title: 'Описание',
                text: 'Сыр'
              },
              {
                title: 'Состав',
                text: '100% cыр! Самый лучший.'
              }
            ]
          },
          {
            id: 'prod_14',
            filterId: 'type1',
            subFilter: ['type1_1', 'type1_2'],
            type: "card",
            name: "Сыр &laquo;Золото Ставрополья&raquo; с&nbsp;томатами и&nbsp;базиликом",
            color: "#FDEBC3",
            image: {
              default: ['./tmp/production@1x.jpg'],
            },
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
            techId: 'ТУ 9225-069-0419710-14',
            additionalInfo: [
              {
                title: 'Характеристики',
                info: [
                  {
                    caption: 'Жирность',
                    value: '40 %'
                  },
                  {
                    caption: 'Срок реализации',
                    value: '120 суток'
                  },
                  {
                    caption: 'Вес единицы',
                    value: '7,5 кг.'
                  },
                ]
              },
              {
                title: 'Описание',
                text: 'Сыр'
              },
              {
                title: 'Состав',
                text: '100% cыр! Самый лучший.'
              }
            ]
          },
          {
            id: 'prod_15',
            filterId: 'type1',
            subFilter: ['type1_1', 'type1_2'],
            type: "card",
            name: "Сыр &laquo;Золото Ставрополья&raquo; с&nbsp;томатами и&nbsp;базиликом",
            color: "#FDEBC3",
            image: {
              default: ['./tmp/production@1x.jpg'],
            },
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
            techId: 'ТУ 9225-069-0419710-14',
            additionalInfo: [
              {
                title: 'Характеристики',
                info: [
                  {
                    caption: 'Жирность',
                    value: '40 %'
                  },
                  {
                    caption: 'Срок реализации',
                    value: '120 суток'
                  },
                  {
                    caption: 'Вес единицы',
                    value: '7,5 кг.'
                  },
                ]
              },
              {
                title: 'Описание',
                text: 'Сыр'
              },
              {
                title: 'Состав',
                text: '100% cыр! Самый лучший.'
              }
            ]
          },
          {
            id: 'prod_16',
            filterId: 'type2',
            subFilter: [],
            type: "card",
            color: "#EFE7F9",
            name: 'Сыр &laquo;Российский&raquo;',
            image: {
              default: ['./tmp/manufacture2@1x.jpg'],
            },
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
            techId: 'ТУ 9225-069-0419710-14',
            additionalInfo: [
              {
                title: 'Характеристики',
                info: [
                  {
                    caption: 'Жирность',
                    value: '40 %'
                  },
                  {
                    caption: 'Срок реализации',
                    value: '120 суток'
                  },
                  {
                    caption: 'Вес единицы',
                    value: '7,5 кг.'
                  },
                ]
              },
              {
                title: 'Описание',
                text: 'Сыр'
              },
              {
                title: 'Состав',
                text: '100% cыр! Самый лучший.'
              }
            ]
          },
          {
            id: 'prod_18',
            filterId: 'type2',
            subFilter: [],
            type: "card",
            name: "Сыр &laquo;Золото Ставрополья&raquo; с&nbsp;томатами и&nbsp;базиликом",
            color: "#FDEBC3",
            image: {
              default: ['./tmp/production@1x.jpg'],
            },
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
            techId: 'ТУ 9225-069-0419710-14',
            additionalInfo: [
              {
                title: 'Характеристики',
                info: [
                  {
                    caption: 'Жирность',
                    value: '40 %'
                  },
                  {
                    caption: 'Срок реализации',
                    value: '120 суток'
                  },
                  {
                    caption: 'Вес единицы',
                    value: '7,5 кг.'
                  },
                ]
              },
              {
                title: 'Описание',
                text: 'Сыр'
              },
              {
                title: 'Состав',
                text: '100% cыр! Самый лучший.'
              }
            ]
          }
        ],
        connectInfo: 'Для получения информации о цене и условиях сотрудничества напишите на <a href=mailto:syrodel@mail.ru>syrodel@mail.ru</a> или позвоните <a href="tel:+78654221394">+7 (865 42) 2-13-94</a>'
      }
    },
    {
      type: 'productsContacts',
      content: {
        productForm: {
          title: 'УЗНАЙТЕ ЦЕНУ И&nbsp;УСЛОВИЯ ПАРТНЁРСТВА',
          form: {
            action: '/careers/form',
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
        },
        productsDelivery: {
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
      }
    },
  ]
}
