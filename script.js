window.onload = function() {
	var host = "http://auto.ria.com/?",
		target = "target=login",
		auth_key = "&auth_key={$auth_key}",
		redirect_url = "&return_url=",
		utm_source = "utm_source=",
		utm_medium = "&utm_medium=",
		utm_term = "&utm_term=",
		utm_content = "&utm_content=",
		utm_campaign = "&utm_campaign=";
//%26
	var save = document.getElementById('saveForm'),
		preview = document.getElementById('previewLink'),
		data = {},
		url = "";

	function getData() {
		return {
			url: document.getElementById('redirectUrl').value,
			source: document.getElementById('utmSource').value,
			medium: document.getElementById('utmMedium').value,
			term: document.getElementById('utmTerm').value,
			content: document.getElementById('utmContent').value,
			campaign: document.getElementById('utmCampaign').value
		};
	};

	function createTable(data) {
		data.forEach(function(item) {
			content.appendChild(createHeadline(item));
		});
	};

	function createHeadline(data) {
		var content = document.getElementById('content'),
			group = document.createElement("div"),
			headline = document.createElement("span");

		group.className = "list-group";
		headline.className = "list-group-item active";
		headline.innerHTML = "Шаблон " + data.id + ' "' + data.title + '"';

		group.appendChild(headline);
		data.links.forEach(function(link) {
			group.appendChild(createElement(link));
		});
		return group;
	};	

	function createElement(element) {
		var listItem = document.createElement("a"),
			icon = createIcon(element.type),
			text = document.createElement("span");
		listItem.className = "list-group-item";
		listItem.href = "javascript:void(0)";
		
		text.innerHTML = element.name;
		listItem.appendChild(icon);
		listItem.appendChild(text);

		listItem.onclick = function() {
			setData(element);
			updateData();
		};
		return listItem;
	};

	function createIcon(type) {
		var iconClass = type === "button" ? "glyphicon glyphicon-hand-up" : "glyphicon glyphicon-globe",
			icon = document.createElement("span");
		icon.className = iconClass;
		return icon;
	};

	function setData(data) {
		document.getElementById('redirectUrl').value = data.redirect_url;
		document.getElementById('utmSource').value = data.utm_source;
		document.getElementById('utmMedium').value = data.utm_medium;
		document.getElementById('utmTerm').value = data.utm_term;
		document.getElementById('utmContent').value = data.utm_content;
		document.getElementById('utmCampaign').value = data.utm_campaign;
	};

	function createUrl(data) {
		var autologin = data.url ? target + auth_key + redirect_url + data.url : "",
			analytics = utm_source + data.source
				+ utm_medium + data.medium
				+ utm_term + data.term
				+ utm_content + data.content
				+ utm_campaign + data.campaign;
		if(autologin) analytics = analytics.replace(/&/gi, "%26");
		return host + autologin + analytics;
	};

	function updateData() {
		data = getData();
		preview.innerHTML = createUrl(data);
	};	

	save.onsubmit = function() {
		updateData();
	};

	save.onkeyup = function() {
		updateData();
	};

	createTable(templateData);
};