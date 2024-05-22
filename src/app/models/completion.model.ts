export interface CompletionModel {
  caption: string;
  description?: string;
  snippet?: string;
  meta: string;
  type: string;
  value?: string;
  parent?: string;
  docHTML?: string;
  inputParameters?: { [name: string]: string };
}
