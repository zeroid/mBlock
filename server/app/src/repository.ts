/// <reference path="../../typings/underscore/underscore.d.ts" />
import _ = require("underscore");

interface IReturnAListOf<Resource> {
    list(): Resource[];
}

interface ICreateA<Resource> {
    create(resource: Resource): string;
}

interface IReadA<Resource> {
    read(id: string): Resource;
}

interface IUpdateA<Resource> {
    update(id: string, resource: Resource);
}

interface IDeleteA<Resource> {
    delete(id: string);
}

export class Greeting {
    public greeting: string = "Hello";
}

class Entry<Resource> {
    constructor(id: string, value: Resource) {
        this.id = id;
        this.value = value;
    }
    id: string;
    value: Resource;
}

function guid() {
  function s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }
  return s4() + s4() + "-" + s4() + "-" + s4() + "-" +
    s4() + "-" + s4() + s4() + s4();
}

export class InMemoryRepository<Resource> implements IReturnAListOf<Resource>, ICreateA<Resource>, IReadA<Resource>, IUpdateA<Resource>, IDeleteA<Resource> {    
    private repository: Entry<Resource>[] = [];

    list(): Resource[] {
        var result: Resource[] = [];
        result.push(this.repository[0].value);
        return result;
    }

    create(resource: Resource): string {
        var id = guid();
        this.repository.push(new Entry(id, resource));
        return id;
    }

    read(id: string): Resource {
        return _.findWhere(this.repository, { id: id }).value;
    }

    update(id: string, resource: Resource) {
        _.findWhere(this.repository, { id: id }).value = resource;
    }

    delete(id: string) {
        this.repository = _.reject(this.repository, function (a) { return a.id === id; });
    }
}
