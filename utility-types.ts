interface Products {
  name: string;
  price: number;
}

// make all properties optional
type OptionalProducts = Partial<Products>;
//////////////////////////////////////

// make all properties required
type RequiredProducts = Required<Products>;
//////////////////////////////////////

// make all properties Read Only
// You can not re assign them
type ReadOnlyProducts = Readonly<Products>;
//////////////////////////////////////

// Most Popular one
type ObjectType = Record<string, Products>;
//////////////////////////////////////

// Pick
type PickType = Pick<Products, "name">;
//////////////////////////////////////

// Omit
type OmitType = Omit<Products, "id">;

///////////////////////////////////

type LetterGrades = "A" | "B" | "C" | "D" | "U";

// Exclude [doesn't work with interfaces]
type AdjustedGrade = Exclude<LetterGrades, "U">;

// Extract [doesn't work with interfaces]
type HightGrades = Extract<LetterGrades, "A" | "B">;

//////////////////////////////////////
// NotNullable
type AllPossibleGrades = "Dave" | "John" | "Sara" | null | undefined;

type NamesOnly = NonNullable<AllPossibleGrades>;

//////////////////////////////////////

// ReturnType

function createValue(name: string, value: number) {
  return {
    name,
    value,
  };
}

// useFull when working with libraries
// and we want ti figure our function return types
type FunctionReturnType = ReturnType<typeof createValue>;

//////////////////////////////////////

// Parameters
type ParamTypes = Parameters<typeof createValue>;

// use Case :
const AssignValue: ParamTypes = ["new Title", 100];

const funAssign = createValue(...AssignValue);

//////////////////////////////////////

// Awaited  - helps us with return type of a Promise

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
}

async function fetchUsers(): Promise<Array<User>> {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/users",
  );
  const data = res.json();

  return data;
}

type FetchUsersReturnType = ReturnType<Awaited<typeof fetchUsers>>;

////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////
