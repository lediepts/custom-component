export const scrollToElm = (event: React.MouseEvent<any>, elm?: string) => {
	const anchor = (
		(event.target as HTMLDivElement).ownerDocument || document
	).querySelector(elm || "#logo");

	if (anchor) {
		anchor.scrollIntoView({ behavior: "smooth", block: "start" });
	}
};
