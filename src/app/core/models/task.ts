import { BaseEntity } from '../models/base_entity';
import { Label } from '../models/label';

export class Task extends BaseEntity {

  public id:number;
  public name: string;
  public slug: string;
  public description: string;
  public due_date: Date;

  public labels: Label[];

  entity_url():string { return 'tasks'; }
  entity_name():string { return 'task'; }

  fullUrl(project, baseUrl) : string {
    return project.fullUrl(baseUrl) + "?task=" + this.slug;
  }
}
