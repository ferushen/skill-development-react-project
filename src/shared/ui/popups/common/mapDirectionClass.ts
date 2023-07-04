import { DropdownDirection } from 'shared/types/ui';

export const mapDirectionClass = (
	cls: Record<string, string>
): Record<DropdownDirection, string> => ({
	'bottom left': cls.menuBottomLeft!,
	'bottom right': cls.menuBottomRight!,
	'top left': cls.menuTopLeft!,
	'top right': cls.menuTopRight!,
});
