export interface MetaInfoModel {
  Name: string;
  Description: string;
  Type: string;
  Children: MetaInfoModel[];
  InputParameters?: { [name: string]: string };
}
