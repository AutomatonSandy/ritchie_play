import { Category } from "./Category";
import { Tags } from "./Tags";

export class Pet {
  private _id: number;
  private _category: Category;
  private _name: string;
  private _photoUrl: string[];
  private _tags: Tags[];

  constructor();
  constructor(
    id: number,
    category: Category,
    name: string,
    photoUrl: string[],
    tags: Tags[]
  );
  constructor(
    id?: number,
    category?: Category,
    name?: string,
    photoUrl?: string[],
    tags?: Tags[]
  ) {
    this._id = id ?? 0;
    this._category = category ?? new Category();
    this._name = name ?? "";
    this._photoUrl = photoUrl ?? [];
    this._tags = tags ?? [];
  }

  get id(): number {
    return this._id;
  }
  set id(value: number) {
    this._id = value;
  }

  get category(): Category {
    return this._category;
  }
  set category(value: Category) {
    this._category = value;
  }

  get name(): string {
    return this._name;
  }
  set name(value: string) {
    this._name = value;
  }

  get photoUrl(): string[] {
    return this._photoUrl;
  }
  set photoUrl(value: string[]) {
    this._photoUrl = value;
  }

  get tags(): Tags[] {
    return this._tags;
  }
  set tags(value: Tags[]) {
    this._tags = value;
  }
}
