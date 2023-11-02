let list: Array<string | number | boolean> = [0, 1, "ef", true];

const myList2: Array<string | number> = [];

const newObject: Record<string, number> = {
  "1": 4565,
  "2": 987,
  "3": 5,
  "5": 864,
};

interface NewType {
  name: string;
  id: number;
  items: string[];
  age: number;
}

interface Products {
  id: number;
  name: string;
  price: string;
  created_at: Date;
  status: "canceled" | "delivered" | "ongoing";
}

enum Grade {
  U,
  C,
  D,
  B,
  A,
}
