import { IModelField } from "../types";
import { metaColumnPrefix, metaDbPropertyPrefix } from "../constants";

class Model {
	private getMetaValues() {
		const columns: IModelField[] = [];
		let dbProperties: any = {};
		const keys = Reflect.getMetadataKeys(this);
		console.log(keys);
		const columnKeys = keys.filter((k: string) =>
			k.startsWith(metaColumnPrefix)
		);
		columnKeys.forEach((metaKey) => {
			columns.push(Reflect.getMetadata(metaKey, this));
		});
		const propertyKeys = keys.filter((k: string) =>
			k.startsWith(metaDbPropertyPrefix)
		);
		propertyKeys.forEach((metaKey) => {
			dbProperties = {
				...dbProperties,
				...Reflect.getMetadata(metaKey, this),
			};
		});

		return { columns, dbProperties };
	}

	public generateTables() {
		console.log(this.getMetaValues());
	}
}

export { Model };
