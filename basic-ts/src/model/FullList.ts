import ListItem from "./ListItem";

interface List {
  list: Array<ListItem>;
  load(): void;
  save(): void;
  clearList(): void;
  addItem(itemObj: ListItem): void;
  removeItem(id: string): void;
}

class FullList implements List {
  static instance: FullList = new FullList();

  private constructor(private _list: Array<ListItem> = []) {}

  get list(): Array<ListItem> {
    return this._list;
  }

  save(): void {
    localStorage.setItem("myList", JSON.stringify(this._list));
  }

  clearList(): void {
    this._list = [];
    this.save();
  }

  addItem(itemObj: ListItem): void {
    this._list.push(itemObj);
    this.save();
  }

  removeItem(id: string): void {
    this._list.filter((item) => item.id !== id);
    this.save();
  }

  load(): void {
    const storedList: string | null = localStorage.getItem("myList");
    if (typeof storedList !== "string") return;

    const paredList: Array<{
      _id: string;
      _item: string;
      _checked: boolean;
    }> = JSON.parse(storedList);

    paredList.forEach((itemObj) => {
      const newListItem = new ListItem(
        itemObj._id,
        itemObj._item,
        itemObj._checked,
      );

      FullList.instance.addItem(newListItem);
    });
  }
}

export default FullList;
