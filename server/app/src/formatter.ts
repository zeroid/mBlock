interface IFormatA<Resource> {
    format(resource: Resource): string;
}

export class JSONFormatter<Resource> implements IFormatA<Resource> {

    public static factory<T>(resource: T): JSONFormatter<T> {
        return new JSONFormatter<T>();
    }

    format(resource: Resource) {
        return JSON.stringify(resource);
    }
}
