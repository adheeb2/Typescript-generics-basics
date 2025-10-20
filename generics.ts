//A generic function in TypeScript is a function that can work with various data types while maintaining type safety
function getFirstElement<ElementType>(array: ElementType[]) {
  return array[0];
}
const numbers = [1, 2, 3];
const firstElement = getFirstElement(numbers);

const strings = ["sdf", "ssddffdg"];
const firststring = getFirstElement(strings);
