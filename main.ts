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
