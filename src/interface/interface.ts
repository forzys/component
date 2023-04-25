







export interface MetaItem {
	title: string;
	key?: string;

	keepAlive?: boolean;
	requiresAuth?: boolean;
}



export interface RouteItem {
	path: string;
	isLink?: string;
	index?: boolean|number|string;
	redirect?: string|boolean;
	component?: string;
	children?: RouteItem[];
	element?: string|React.ReactNode;
	caseSensitive?: boolean;

	meta?: MetaItem; 
}