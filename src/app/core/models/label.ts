import { BaseEntity } from '../models/base_entity';

export class Label extends BaseEntity {

  public id:number;
  public name: string;
  public color_rgb: string;
  public font_color_rgb: string;
  public border_color_rgb: string;

  entity_url():string { return 'labels'; }
  entity_name():string { return 'label'; }
  nested_properties():string[] { return [ ]; }
}
