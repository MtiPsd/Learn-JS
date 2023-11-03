interface User {
  name: string;
  age: number;
  address: string;
}

///////////////////////////////////////////

// these code are the same

type SecondType = Record<keyof User, number>;
type OtherObject = {
  [k in keyof User]: string;
};
///////////////////////////////////////////

type ThirdType = User["age"];
const thirdUser: ThirdType = 45;

///////////////////////////////////////////

function echo<T>(value: T): T {
  return value;
}

//////////////////////////////////////////////

// custom bool checkers

function isObj<T>(arg: T): boolean {
  return (
    typeof arg === "object" && !Array.isArray(arg) && arg !== null
  );
}

interface BoolCheck<T> {
  value: T;
  is: boolean;
}

function isTrue<T>(arg: T): BoolCheck<T> {
  if (Array.isArray(arg) && !arg.length) {
    return { value: arg, is: false };
  }
  if (isObj(arg) && !Object.keys(arg as keyof T).length) {
    return { value: arg, is: false };
  }
  return { value: arg, is: Boolean(arg) };
}

///////////////////////////////////////////////////////
