class DB {
	private static instance: DB;
	private _provider: any;

	private constructor() {}
	public static getInstance(): DB {
		if (!DB.instance) {
			DB.instance = new DB();
		}
		return DB.instance;
	}

	public setProvider(provider: any) {
		this._provider = provider;
	}

	public registerModel() {}
}

export default DB;
