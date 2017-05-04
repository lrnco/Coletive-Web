export abstract class BaseEntity  {
  public id:number;

  constructor() {
  }

  copyInto(jsonData : any) {
    // IF AN OBJECT WAS PASSED THEN INITIALISE PROPERTIES FROM THAT OBJECT
    for (var prop in jsonData) { this[prop] = jsonData[prop]; }
    return this;
  }

  abstract entity_url(): string;
  abstract entity_name(): string;
  nested_properties(): string[] { return []; }
  reference_properties(): string[] { return []; }

  toRailsHash() : any {
    var instance = { };
    var nestedProperties = this.nested_properties();
    var referenceProperties = this.reference_properties();

    for(var propertyName in this) {
      if ( !nestedProperties.includes(propertyName) && !referenceProperties.includes(propertyName)) {
        instance[propertyName.toString()] = this[propertyName];
      }
    }

    for(var nestedPropertyName of nestedProperties) {
      instance[nestedPropertyName + '_attributes'] = this[nestedPropertyName];
    }

    for(var referencePropertyName of referenceProperties) {
      instance[referencePropertyName + '_id'] = this[referencePropertyName].id;
    }

    return instance;
  }
}