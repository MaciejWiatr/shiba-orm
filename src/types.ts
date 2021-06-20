export enum ColumnType {
	"PrimaryKey" = "PrimaryKey",
	"OneToMany" = "OneToMany",
	"OneToOne" = "OneToOne",
	"Normal" = "Normal",
	"ForeignKey" = "ForeignKey",
}
export interface IModelField {
	columnName: string;
	valueType: string | number;
	columnType: string | number;
	tableName: string;
}
