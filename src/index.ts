import "reflect-metadata";
import { ColumnType } from "./types";
import { Column, DbModel } from "./decorators";
import { Model } from "./base";

@DbModel
class Book extends Model {
	@Column(ColumnType.PrimaryKey)
	id: number;

	@Column(ColumnType.Normal)
	name: string;

	@Column(ColumnType.ForeignKey)
	author: number;

	constructor(id: number, name: string, author: number) {
		super();
		this.id = id;
		this.name = name;
		this.author = author;
	}
}
@DbModel
class Author extends Model {
	@Column(ColumnType.PrimaryKey)
	id: number;

	@Column(ColumnType.Normal)
	name: string;

	constructor(id: number, name: string) {
		super();
		this.id = id;
		this.name = name;
	}
}

const newBook = new Book(1, "maciej", 2);
newBook.generateTables();

// const createDbContext = (callback: any) => {
// 	const models: any = [];

// 	const registerModel = (model: any) => {
// 		models.push(model);
// 	};

// 	callback(registerModel);

// 	return models;
// };

// console.log(
// 	createDbContext((registerModel: Function) => {
// 		registerModel(Author);
// 		registerModel(Book);
// 	})
// );
