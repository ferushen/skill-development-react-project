export enum UserRole {
	Admin = 'ADMIN',
	Moderator = 'MODERATOR',
	User = 'USER',
}

export interface User {
	id: string;
	username: string;
	avatar?: string;
	roles?: UserRole[];
}

export interface UserSchema {
	authData?: User;

	_initialized: boolean;
}
