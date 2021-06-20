import "reflect-metadata";

enum ColumnType {
	"PrimaryKey" = "PrimaryKey",
	"OneToMany" = "OneToMany",
	"OneToOne" = "OneToOne",
	"Normal" = "Normal",
	"ForeignKey" = "ForeignKey",
}

function Column(type: ColumnType, tableName?: string) {
	return function (target: any, key: string) {
		if (!tableName) {
			tableName = key;
		}
		let t = Reflect.getMetadata("design:type", target, key).name;
		Reflect.defineMetadata(
			`${key}-column`,
			{
				columnName: key,
				valueType: t,
				columnType: type,
				tableName,
			},
			target
		);
	};
}

function Model(target: any) {
	target = target.prototype;
	const keys = Reflect.getMetadataKeys(target);
	// keys.forEach((metaKey) => {
	// 	console.log(Reflect.getMetadata(metaKey, target));
	// });
}

@Model
class Book {
	@Column(ColumnType.PrimaryKey)
	id: number;

	@Column(ColumnType.Normal)
	name: string;

	@Column(ColumnType.ForeignKey)
	author: number;

	constructor(id: number, name: string, author: number) {
		this.id = id;
		this.name = name;
		this.author = author;
	}
}

@Model
class Author {
	@Column(ColumnType.PrimaryKey)
	id: number;

	@Column(ColumnType.Normal)
	name: string;

	constructor(id: number, name: string) {
		this.id = id;
		this.name = name;
	}
}

const createDbContext = (callback: any) => {
	const models: any = [];

	const registerModel = (model: any) => {
		models.push(model);
	};

	callback(registerModel);

	return models;
};

console.log(
	createDbContext((registerModel: Function) => {
		registerModel(Author);
		registerModel(Book);
	})
);
