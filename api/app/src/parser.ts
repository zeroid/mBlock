interface IParseA<Resource> {
    parse(input: string): Resource;
}

export class JSONParser<Resource> implements IParseA<Resource> {

    public static factory<T>(resource: T): JSONParser<T> {
        return new JSONParser<T>();
    }

    parse(input: string) {
        return <Resource>JSON.parse(input);
    }
}
