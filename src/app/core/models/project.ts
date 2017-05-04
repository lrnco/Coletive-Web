import { BaseEntity } from '../models/base_entity';

export class Project extends BaseEntity {

  public id:number;
  public name: string;
  public type: string;
  public slug: string;
  public description: string;
  public extra_info: string;

  public info: ProjectInfo;

  entity_url():string { return 'projects'; }
  entity_name():string { return 'project'; }
  nested_properties():string[] { return [ 'info' ] };

  fullUrl(baseUrl) : string {
    return baseUrl + 'project/' + this.slug;
  }
}

export class ProjectInfo extends BaseEntity {
  public id:number;
  public board_id: string;
  public todo_list_id: string;

  entity_url():string { return 'project_infos'; }
  entity_name():string { return 'project_info'; }
}