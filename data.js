var templateData = [	
	{
		id: "(common)",
		testId: 0,
		title: "Метки и ссылки в блоке допродажи",
		links: [
			{
				name: "Пакеты компаний",
				type: "link",
				redirect_url: "/add_company/?",
				utm_source: "mailer_{$tid}",
				utm_medium: "segment_{$segment}",
				utm_term: "link",
				utm_content: "autoseller",
				utm_campaign: "add_company"
			},
			{
				name: "Пакеты ТОП",
				type: "link",
				redirect_url: "/top-optom/?",
				utm_source: "mailer_{$tid}",
				utm_medium: "segment_{$segment}",
				utm_term: "link",
				utm_content: "autoseller",
				utm_campaign: "add_top_optom"
			},
			{
				name: "Пакеты Фишек",
				type: "link",
				redirect_url: "/fishki-optom/?",
				utm_source: "mailer_{$tid}",
				utm_medium: "segment_{$segment}",
				utm_term: "link",
				utm_content: "autoseller",
				utm_campaign: "add_fishki_optom"
			},
			{
				name: "Добавить объявление",
				type: "link",
				redirect_url: "/add_auto.html?",
				utm_source: "mailer_{$tid}",
				utm_medium: "segment_{$segment}",
				utm_term: "link",
				utm_content: "autoseller",
				utm_campaign: "add_auto"
			},
			{
				name: "Мои автомобили",
				type: "link",
				redirect_url: "/user/menu/allCars/?",
				utm_source: "mailer_{$tid}",
				utm_medium: "segment_{$segment}",
				utm_term: "link",
				utm_content: "autoseller",
				utm_campaign: "myauto"
			},
			{
				name: "Поиск авто",
				type: "link",
				redirect_url: "/search/?view_type_id=1%26",
				utm_source: "mailer_{$tid}",
				utm_medium: "segment_{$segment}",
				utm_term: "link",
				utm_content: "autoseller",
				utm_campaign: "search_results"
			}
		]
	},
	{
		id: 94,
		testId: 318,
		title: "Сэкономьте на публикациях объявлений на AUTO.RIA",
		links: [
			{
				name: "AUTO.RIA",
				type: "link",
				redirect_url: "",
				utm_source: "mailer_{$tid}",
				utm_medium: "segment_{$segment}",
				utm_term: "link",
				utm_content: "autoseller",
				utm_campaign: "main_page"
			},
			{
				name: "коммерческий пакет Автопродажа",
				type: "link",
				redirect_url: "/autoseller/addpackage/?",
				utm_source: "mailer_{$tid}",
				utm_medium: "segment_{$segment}",
				utm_term: "link",
				utm_content: "autoseller",
				utm_campaign: "add_package"
			},
			{
				name: "Выбрать пакет",
				type: "button",
				redirect_url: "/autoseller/addpackage/?",
				utm_source: "mailer_{$tid}",
				utm_medium: "segment_{$segment}",
				utm_term: "button",
				utm_content: "autoseller",
				utm_campaign: "add_package"
			},
			{
				name: "коммерческий пакет Автопродажа (справа от кнопки)",
				type: "link",
				redirect_url: "/autoseller/info/?",
				utm_source: "mailer_{$tid}",
				utm_medium: "segment_{$segment}",
				utm_term: "link",
				utm_content: "autoseller",
				utm_campaign: "add_package"
			}
		]
	},
	{
		id: 323,
		testId: 319,
		title: "Срок действия Вашего пакета «Автопродажа» истекает!",
		links: [
			{
				name: "AUTO.RIA",
				type: "link",
				redirect_url: "",
				utm_source: "mailer_{$tid}",
				utm_medium: "segment_{$segment}",
				utm_term: "link",
				utm_content: "autoseller",
				utm_campaign: "main_page"
			},
			{
				name: "Переопубликовать объявления",
				type: "link",
				redirect_url: "/fishki-group/?",
				utm_source: "mailer_{$tid}",
				utm_medium: "segment_{$segment}",
				utm_term: "link",
				utm_content: "autoseller",
				utm_campaign: "ad_republication"
			},
			{
				name: "коммерческий пакет Автопродажа (справа от кнопки)",
				type: "link",
				redirect_url: "/autoseller/addpackage/?",
				utm_source: "mailer_{$tid}",
				utm_medium: "segment_{$segment}",
				utm_term: "link",
				utm_content: "autoseller",
				utm_campaign: "add_package"
			},
			{
				name: "Активировать следующий пакет",
				type: "button",
				redirect_url: "/autoseller/КабинетАвтопродажи/?",
				utm_source: "mailer_{$tid}",
				utm_medium: "segment_{$segment}",
				utm_term: "button",
				utm_content: "autoseller",
				utm_campaign: "active_package"
			},
			{
				name: "Выбрать пакет",
				type: "button",
				redirect_url: "/autoseller/addpackage/?",
				utm_source: "mailer_{$tid}",
				utm_medium: "segment_{$segment}",
				utm_term: "button",
				utm_content: "autoseller",
				utm_campaign: "add_package"
			},
			{
				name: "Продлить текущий пакет",
				type: "button",
				redirect_url: "/autoseller/paypackages/{$skolko}/1?",
				utm_source: "mailer_{$tid}",
				utm_medium: "segment_{$segment}",
				utm_term: "button",
				utm_content: "autoseller",
				utm_campaign: "add_package"
			},
		]
	},
	{
		id: 324,
		testId: 318,
		title: "Срок действия Вашего пакета «Автопродажа» истёк!",
		links: [
			{
				name: "AUTO.RIA",
				type: "link",
				redirect_url: "",
				utm_source: "mailer_{$tid}",
				utm_medium: "segment_{$segment}",
				utm_term: "link",
				utm_content: "autoseller",
				utm_campaign: "main_page"
			},
			{
				name: "коммерческий пакет Автопродажа",
				type: "link",
				redirect_url: "/autoseller/addpackage/?",
				utm_source: "mailer_{$tid}",
				utm_medium: "segment_{$segment}",
				utm_term: "link",
				utm_content: "autoseller",
				utm_campaign: "add_package"
			},
			{
				name: "Продлить текущий пакет",
				type: "button",
				redirect_url: "/autoseller/paypackages/{$skolko}/1?",
				utm_source: "mailer_{$tid}",
				utm_medium: "segment_{$segment}",
				utm_term: "button",
				utm_content: "autoseller",
				utm_campaign: "add_package"
			},
			{
				name: "Выбрать другой пакет",
				type: "button",
				redirect_url: "/autoseller/addpackage/?",
				utm_source: "mailer_{$tid}",
				utm_medium: "segment_{$segment}",
				utm_term: "button",
				utm_content: "autoseller",
				utm_campaign: "add_package"
			}
		]
	},
	{
		id: 326,
		testId: 363,
		title: 'От Вас поступила оплата пакета "Автопродажа"',
		links: [
			{
				name: "AUTO.RIA",
				type: "link",
				redirect_url: "",
				utm_source: "mailer_{$tid}",
				utm_medium: "segment_{$segment}",
				utm_term: "link",
				utm_content: "autoseller",
				utm_campaign: "main_page"
			},
			{
				name: "коммерческий пакет Автопродажа",
				type: "link",
				redirect_url: "/autoseller/addpackage/?",
				utm_source: "mailer_{$tid}",
				utm_medium: "segment_{$segment}",
				utm_term: "link",
				utm_content: "autoseller",
				utm_campaign: "add_package"
			},
			{
				name: "Активировать пакет",
				type: "button",
				redirect_url: "/autoseller/КабинетАвтопродажи/?",
				utm_source: "mailer_{$tid}",
				utm_medium: "segment_{$segment}",
				utm_term: "button",
				utm_content: "autoseller",
				utm_campaign: "active_package"
			},
			{
				name: "Перейти в кабинет Автопродажи",
				type: "link",
				redirect_url: "/autoseller/КабинетАвтопродажи/?",
				utm_source: "mailer_{$tid}",
				utm_medium: "segment_{$segment}",
				utm_term: "link",
				utm_content: "autoseller",
				utm_campaign: "active_package"
			}
		]
	}
];
