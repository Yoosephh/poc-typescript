export interface IName {
  firstName: string;
  lastName: string;
}
export interface IUser extends IName {
  id: number;
}

export interface ICount {
  count: number;
}