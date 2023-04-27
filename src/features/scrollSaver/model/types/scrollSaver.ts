type PathRoute = string;
type ScrollPosition = number;

export interface ScrollSaverSchema {
	scroll: Record<PathRoute, ScrollPosition>;
}
