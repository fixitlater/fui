function CardLarge(props) {
	var propsMain = props.main ? props.main : {};
	var mainClasses = propsMain.className ? ("card-lg " + propsMain.className) : "card-lg";
	propsMain.className = mainClasses;

	return Card(props);
}

function Card(props) {
	var propsMain = props.main ? props.main : {};
	var propsHeader = props.header ? props.header : {};
	var propsBody = props.body ? props.body : {};
	var propsFooter = props.footer ? props.footer : {};

	var mainClasses = propsMain.className ? ("card " + propsMain.className) : "card";
	propsMain.className = mainClasses;

	return	div(propsMain,
				CardHeader(propsHeader),
				CardBody(propsBody),
				CardFooter(propsFooter)
			);
}

function CardHeader(props) {
	return	div({ className: "card-header"},
				props.headerInfo
			);
}

function CardBody(props) {
	return	div({ className: "card-body" },
				CardBodyDetails(props)
			);
}

function CardBodyDetails(props) {
	return	div({ className: "card-details" },
				props.CardBodyDetails
			);
}

function CardBodyDetailIcon(props) {
	return	div({ className: "card-detail", title: props.title },
				div({ className: "card-detail-icon-wrapper" },
					span(i({className: props.iconClass }))
				),
				div({ className: "card-detail-icon-count" }, props.iconCount)
			);
}

function CardFooter(props) {
	var leftContent = props.footerContent && props.footerContent.leftSide ? props.footerContent.leftSide : "";
	var centerContent = props.footerContent && props.footerContent.center ? props.footerContent.center : "";
	var rightContent = props.footerContent && props.footerContent.rightSide ? props.footerContent.rightSide : "";

	return	div({ className: "card-footer" },
				div({ className: "card-footer-left" }, leftContent),
				div({ className: "card-footer-center" }, centerContent),
				div({ className: "card-footer-right" }, rightContent)
			);
}