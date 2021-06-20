import { metaColumnPrefix, metaDbPropertyPrefix } from "../constants";
import { ColumnType } from "../types";

function Column(type: ColumnType) {
	return function (target: any, key: string) {
		let t = Reflect.getMetadata("design:type", target, key).name;
		Reflect.defineMetadata(
			`${metaColumnPrefix}${key}`,
			{
				columnName: key,
				valueType: t,
				columnType: type,
			},
			target
		);
	};
}

function DbModel(target: any) {
	target = target.prototype;
	Reflect.defineMetadata(
		`${metaDbPropertyPrefix}tableName`,
		{
			tableName: target.constructor.name,
		},
		target
	);
}

export { DbModel, Column };
