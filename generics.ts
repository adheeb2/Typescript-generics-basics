//A generic function in TypeScript is a function that can work with various data types while maintaining type safety
//Generic function makes typescript to know what the type of input data is without us writing the type,say for eg:array:Number[] can only give number as input and not strings and vice versa. but if we give generic functions, typescript will check on the type of the input and will give that as the data type
function getFirstElement<ElementType>(array: ElementType[]) {
  return array[0];
}
const numbers = [1, 2, 3];
const firstElement = getFirstElement(numbers);

const strings = ["sdf", "ssddffdg"];
const firststring = getFirstElement(strings);
